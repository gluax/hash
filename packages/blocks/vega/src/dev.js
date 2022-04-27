/**
 * This is the entry point for developing and debugging.
 * This file is not bundled with the block during the build process.
 */
import React from "react";
import ReactDOM from "react-dom";

import { MockBlockDock } from "mock-block-dock";

import Component from "./index";

const node = document.getElementById("app");

const App = () => (
  <MockBlockDock>
    <Component
      entityId="test-block-1"
      content={
        '{\n  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",\n  "width": 400,\n  "height": 200,\n  "mark": "bar",\n  "encoding": {\n    "x": { "field": "a", "type": "ordinal" },\n    "y": { "field": "b", "type": "quantitative" }\n  },\n  "data": {\n    "values": [\n      { "a": "A", "b": 28 },\n      { "a": "B", "b": 55 },\n      { "a": "C", "b": 43 },\n      { "a": "D", "b": 91 },\n      { "a": "E", "b": 81 },\n      { "a": "F", "b": 53 },\n      { "a": "G", "b": 19 },\n      { "a": "H", "b": 87 },\n      { "a": "I", "b": 52 }\n    ]\n  }\n}\n'
      }
    />
  </MockBlockDock>
);

ReactDOM.render(<App />, node);
