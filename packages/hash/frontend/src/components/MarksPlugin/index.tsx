import React from "react";
import { NodeSelection, Plugin } from "prosemirror-state";
import { toggleMark } from "prosemirror-commands";


export function createFormatPlugin(replacePortal) {
  let timeout;

  const formatPlugin = new Plugin({
    /**
     * This allows us to keep track of whether the view is focused, which
     * is important for knowing whether to show the format tooltip
     */
    state: {
      init(_, view) {
        return { focused: view.focused };
      },
      apply(tr, oldValue) {
        const formatBlur = tr.getMeta("format-blur");
        const formatFocus = tr.getMeta("format-focus");

        if (typeof formatBlur !== "undefined") {
          return { focused: false };
        }

        if (typeof formatFocus !== "undefined") {
          return { focused: true };
        }

        return oldValue;
      },
    },
    props: {
      handleDOMEvents: {
        blur(view) {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            view.dispatch(view.state.tr.setMeta("format-blur", true));
          }, 200);
          return false;
        },
        focus(view) {
          clearTimeout(timeout);
          view.dispatch(view.state.tr.setMeta("format-focus", true));
          return false;
        },
      },
    },

    view(editorView) {
      const dom = document.createElement("div");

      /**
       * This was originally written using DOM APIs directly, but we want
       * to ensure the tooltip is rendered within a React controlled
       * context, so we move the tooltip into a portal created by React.
       *
       * @todo fully rewrite this to use React completely
       */
      replacePortal(
        document.body,
        document.body,
        <div
          ref={(node) => {
            if (node) {
              node.appendChild(dom);
            }
          }} />
      );

      const updateFns = [];

      const button = (name, text) => {
        const button = document.createElement("button");

        button.innerText = text;
        dom.appendChild(button);

        const update = () => {
          // @todo no idea if this is the best way to get a list of
          // marks in a selection
          const marks = new Set();
          editorView.state.selection.content().content.descendants((node) => {
            for (const mark of node.marks) {
              marks.add(mark.type.name);
            }

            return true;
          });

          const active = marks.has(name);

          button.style.backgroundColor = active ? "#2482ff" : "white";
          button.style.color = active ? "white" : "black";
          button.style.padding = "4px 0";
          button.style.width = "25px";
          button.style.border = "1px solid lightgrey";
        };

        button.addEventListener("click", (evt) => {
          evt.preventDefault();
          editorView.focus();
          toggleMark(editorView.state.schema.marks[name])(
            editorView.state,
            editorView.dispatch,
            editorView
          );
          update();
        });

        update();
        updateFns.push(update);
      };

      dom.style.cssText = `
        padding: 8px 7px 6px;
        position: absolute;
        z-index: 1;
        top: -10000;
        left: -10000;
        margin-top: -6px;
        opacity: 0;
        background-color: #222;
        border-radius: 4px;
        transition: opacity 0.75s;
      `;
      button("strong", "B");
      button("em", "I");
      button("underlined", "U");

      const update = (view, lastState) => {
        const dragging = !!editorView.dragging;

        const state = view.state;

        /**
         * We don't always want to display a format tooltip – i.e, when
         * the view isn't focused, when we're dragging and dropping, if
         * you're got an entire node selection, or the text selected is
         * not within a paragraph
         *
         * @todo enable the format tooltip outside of a paragraph node
         */
        if (!formatPlugin.getState(view.state).focused ||
          dragging ||
          state.selection instanceof NodeSelection ||
          // !(state.selection instanceof TextSelection) ||
          /**
           * This is checking that the selected node is eligible to
           * have a format tooltip
           */
          state.selection
            .content()
            .content.content.map((node) => node.type.name === "block" ? node.firstChild : node
            )
            .every((node) => {
              return (
                node.content.size === 0 ||
                // @todo fix this check by checking for the
                // marks a node supports
                !node.isTextblock
              );
            }) ||
          state.selection.empty) {
          dom.style.opacity = "0";
          dom.style.top = "-10000px";
          dom.style.left = "-10000px";
          return;
        }

        if (!dragging &&
          lastState &&
          lastState.doc.eq(state.doc) &&
          lastState.selection.eq(state.selection)) {
          return;
        }

        const { from, to } = state.selection;
        const start = view.coordsAtPos(from);
        const end = view.coordsAtPos(to);

        dom.style.opacity = "1";
        dom.style.top = `${start.top - dom.offsetHeight + document.documentElement.scrollTop}px`;
        dom.style.left = `${start.left -
          dom.offsetWidth / 2 +
          (end.right - start.left) / 2 +
          document.documentElement.scrollLeft}px`;

        for (const fn of updateFns) {
          fn();
        }
      };

      update(editorView);

      const dragstart = () => {
        update(editorView);
      };

      const dragend = () => {
        update(editorView);
      };

      document.addEventListener("dragstart", dragstart);
      document.addEventListener("dragend", dragend);

      return {
        destroy() {
          replacePortal(document.body, null, null);
          document.removeEventListener("dragstart", dragstart);
          document.removeEventListener("dragend", dragend);
        },
        update,
      };
    },
  });
  return formatPlugin;
}
