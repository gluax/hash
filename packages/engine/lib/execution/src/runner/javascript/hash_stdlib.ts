(function (n) {
  var t = {};
  function r(e) {
    if (t[e]) return t[e].exports;
    var o = (t[e] = { i: e, l: !1, exports: {} });
    return n[e].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = n),
    (r.c = t),
    (r.d = function (n, t, e) {
      r.o(n, t) || Object.defineProperty(n, t, { enumerable: !0, get: e });
    }),
    (r.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (r.t = function (n, t) {
      if ((1 & t && (n = r(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var e = Object.create(null);
      if (
        (r.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var o in n)
          r.d(
            e,
            o,
            function (t) {
              return n[t];
            }.bind(null, o),
          );
      return e;
    }),
    (r.n = function (n) {
      var t =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (n, t) {
      return Object.prototype.hasOwnProperty.call(n, t);
    }),
    (r.p = ""),
    r((r.s = 72))
  );
})([
  function (n, t, r) {
    var e = r(1),
      o = r(13).f,
      i = r(10),
      u = r(11),
      a = r(30),
      f = r(48),
      c = r(77);
    n.exports = function (n, t) {
      var r,
        s,
        l,
        p,
        v,
        d = n.target,
        g = n.global,
        m = n.stat;
      if ((r = g ? e : m ? e[d] || a(d, {}) : (e[d] || {}).prototype))
        for (s in t) {
          if (
            ((p = t[s]),
            (l = n.noTargetGet ? (v = o(r, s)) && v.value : r[s]),
            !c(g ? s : d + (m ? "." : "#") + s, n.forced) && void 0 !== l)
          ) {
            if (typeof p == typeof l) continue;
            f(p, l);
          }
          (n.sham || (l && l.sham)) && i(p, "sham", !0), u(r, s, p, n);
        }
    };
  },
  function (n, t, r) {
    (function (t) {
      var r = function (n) {
        return n && n.Math == Math && n;
      };
      n.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof t && t) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, r(74)));
  },
  function (n, t, r) {
    var e = r(1),
      o = r(32),
      i = r(5),
      u = r(33),
      a = r(37),
      f = r(54),
      c = o("wks"),
      s = e.Symbol,
      l = f ? s : (s && s.withoutSetter) || u;
    n.exports = function (n) {
      return (
        i(c, n) || (a && i(s, n) ? (c[n] = s[n]) : (c[n] = l("Symbol." + n))),
        c[n]
      );
    };
  },
  function (n, t) {
    n.exports = function (n) {
      try {
        return !!n();
      } catch (n) {
        return !0;
      }
    };
  },
  function (n, t, r) {
    var e = r(3);
    n.exports = !e(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (n, t) {
    var r = {}.hasOwnProperty;
    n.exports = function (n, t) {
      return r.call(n, t);
    };
  },
  function (n, t, r) {
    var e = r(4),
      o = r(45),
      i = r(7),
      u = r(19),
      a = Object.defineProperty;
    t.f = e
      ? a
      : function (n, t, r) {
          if ((i(n), (t = u(t, !0)), i(r), o))
            try {
              return a(n, t, r);
            } catch (n) {}
          if ("get" in r || "set" in r)
            throw TypeError("Accessors not supported");
          return "value" in r && (n[t] = r.value), n;
        };
  },
  function (n, t, r) {
    var e = r(9);
    n.exports = function (n) {
      if (!e(n)) throw TypeError(String(n) + " is not an object");
      return n;
    };
  },
  function (n, t, r) {
    var e = r(28),
      o = r(29);
    n.exports = function (n) {
      return e(o(n));
    };
  },
  function (n, t) {
    n.exports = function (n) {
      return "object" == typeof n ? null !== n : "function" == typeof n;
    };
  },
  function (n, t, r) {
    var e = r(4),
      o = r(6),
      i = r(14);
    n.exports = e
      ? function (n, t, r) {
          return o.f(n, t, i(1, r));
        }
      : function (n, t, r) {
          return (n[t] = r), n;
        };
  },
  function (n, t, r) {
    var e = r(1),
      o = r(10),
      i = r(5),
      u = r(30),
      a = r(47),
      f = r(20),
      c = f.get,
      s = f.enforce,
      l = String(String).split("String");
    (n.exports = function (n, t, r, a) {
      var f,
        c = !!a && !!a.unsafe,
        p = !!a && !!a.enumerable,
        v = !!a && !!a.noTargetGet;
      "function" == typeof r &&
        ("string" != typeof t || i(r, "name") || o(r, "name", t),
        (f = s(r)).source ||
          (f.source = l.join("string" == typeof t ? t : ""))),
        n !== e
          ? (c ? !v && n[t] && (p = !0) : delete n[t],
            p ? (n[t] = r) : o(n, t, r))
          : p
          ? (n[t] = r)
          : u(t, r);
    })(Function.prototype, "toString", function () {
      return ("function" == typeof this && c(this).source) || a(this);
    });
  },
  function (n, t, r) {
    var e = r(29);
    n.exports = function (n) {
      return Object(e(n));
    };
  },
  function (n, t, r) {
    var e = r(4),
      o = r(44),
      i = r(14),
      u = r(8),
      a = r(19),
      f = r(5),
      c = r(45),
      s = Object.getOwnPropertyDescriptor;
    t.f = e
      ? s
      : function (n, t) {
          if (((n = u(n)), (t = a(t, !0)), c))
            try {
              return s(n, t);
            } catch (n) {}
          if (f(n, t)) return i(!o.f.call(n, t), n[t]);
        };
  },
  function (n, t) {
    n.exports = function (n, t) {
      return {
        enumerable: !(1 & n),
        configurable: !(2 & n),
        writable: !(4 & n),
        value: t,
      };
    };
  },
  function (n, t, r) {
    var e = r(35),
      o = Math.min;
    n.exports = function (n) {
      return n > 0 ? o(e(n), 9007199254740991) : 0;
    };
  },
  function (n, t, r) {
    var e = r(4),
      o = r(3),
      i = r(5),
      u = Object.defineProperty,
      a = {},
      f = function (n) {
        throw n;
      };
    n.exports = function (n, t) {
      if (i(a, n)) return a[n];
      t || (t = {});
      var r = [][n],
        c = !!i(t, "ACCESSORS") && t.ACCESSORS,
        s = i(t, 0) ? t[0] : f,
        l = i(t, 1) ? t[1] : void 0;
      return (a[n] =
        !!r &&
        !o(function () {
          if (c && !e) return !0;
          var n = { length: -1 };
          c ? u(n, 1, { enumerable: !0, get: f }) : (n[1] = 1), r.call(n, s, l);
        }));
    };
  },
  function (n, t) {
    n.exports = {};
  },
  function (n, t) {
    var r = {}.toString;
    n.exports = function (n) {
      return r.call(n).slice(8, -1);
    };
  },
  function (n, t, r) {
    var e = r(9);
    n.exports = function (n, t) {
      if (!e(n)) return n;
      var r, o;
      if (t && "function" == typeof (r = n.toString) && !e((o = r.call(n))))
        return o;
      if ("function" == typeof (r = n.valueOf) && !e((o = r.call(n)))) return o;
      if (!t && "function" == typeof (r = n.toString) && !e((o = r.call(n))))
        return o;
      throw TypeError("Can't convert object to primitive value");
    };
  },
  function (n, t, r) {
    var e,
      o,
      i,
      u = r(75),
      a = r(1),
      f = r(9),
      c = r(10),
      s = r(5),
      l = r(31),
      p = r(21),
      v = r(23),
      d = a.WeakMap;
    if (u) {
      var g = l.state || (l.state = new d()),
        m = g.get,
        h = g.has,
        y = g.set;
      (e = function (n, t) {
        return (t.facade = n), y.call(g, n, t), t;
      }),
        (o = function (n) {
          return m.call(g, n) || {};
        }),
        (i = function (n) {
          return h.call(g, n);
        });
    } else {
      var b = p("state");
      (v[b] = !0),
        (e = function (n, t) {
          return (t.facade = n), c(n, b, t), t;
        }),
        (o = function (n) {
          return s(n, b) ? n[b] : {};
        }),
        (i = function (n) {
          return s(n, b);
        });
    }
    n.exports = {
      set: e,
      get: o,
      has: i,
      enforce: function (n) {
        return i(n) ? o(n) : e(n, {});
      },
      getterFor: function (n) {
        return function (t) {
          var r;
          if (!f(t) || (r = o(t)).type !== n)
            throw TypeError("Incompatible receiver, " + n + " required");
          return r;
        };
      },
    };
  },
  function (n, t, r) {
    var e = r(32),
      o = r(33),
      i = e("keys");
    n.exports = function (n) {
      return i[n] || (i[n] = o(n));
    };
  },
  function (n, t) {
    n.exports = !1;
  },
  function (n, t) {
    n.exports = {};
  },
  function (n, t, r) {
    var e = r(50),
      o = r(1),
      i = function (n) {
        return "function" == typeof n ? n : void 0;
      };
    n.exports = function (n, t) {
      return arguments.length < 2
        ? i(e[n]) || i(o[n])
        : (e[n] && e[n][t]) || (o[n] && o[n][t]);
    };
  },
  function (n, t, r) {
    var e = r(18);
    n.exports =
      Array.isArray ||
      function (n) {
        return "Array" == e(n);
      };
  },
  function (n, t, r) {
    var e = r(58),
      o = r(28),
      i = r(12),
      u = r(15),
      a = r(80),
      f = [].push,
      c = function (n) {
        var t = 1 == n,
          r = 2 == n,
          c = 3 == n,
          s = 4 == n,
          l = 6 == n,
          p = 5 == n || l;
        return function (v, d, g, m) {
          for (
            var h,
              y,
              b = i(v),
              w = o(b),
              x = e(d, g, 3),
              S = u(w.length),
              _ = 0,
              A = m || a,
              O = t ? A(v, S) : r ? A(v, 0) : void 0;
            S > _;
            _++
          )
            if ((p || _ in w) && ((y = x((h = w[_]), _, b)), n))
              if (t) O[_] = y;
              else if (y)
                switch (n) {
                  case 3:
                    return !0;
                  case 5:
                    return h;
                  case 6:
                    return _;
                  case 2:
                    f.call(O, h);
                }
              else if (s) return !1;
          return l ? -1 : c || s ? s : O;
        };
      };
    n.exports = {
      forEach: c(0),
      map: c(1),
      filter: c(2),
      some: c(3),
      every: c(4),
      find: c(5),
      findIndex: c(6),
    };
  },
  function (n, t, r) {
    var e;
    n.exports =
      ((function (n, t) {
        var r = n.utils.isFunction;
        function e(n, t) {
          return n - t;
        }
        function o(n, r, e) {
          return t.max(r, t.min(n, e));
        }
        (n.sum = function (n) {
          for (var t = 0, r = n.length; --r >= 0; ) t += n[r];
          return t;
        }),
          (n.sumsqrd = function (n) {
            for (var t = 0, r = n.length; --r >= 0; ) t += n[r] * n[r];
            return t;
          }),
          (n.sumsqerr = function (t) {
            for (var r, e = n.mean(t), o = 0, i = t.length; --i >= 0; )
              o += (r = t[i] - e) * r;
            return o;
          }),
          (n.sumrow = function (n) {
            for (var t = 0, r = n.length; --r >= 0; ) t += n[r];
            return t;
          }),
          (n.product = function (n) {
            for (var t = 1, r = n.length; --r >= 0; ) t *= n[r];
            return t;
          }),
          (n.min = function (n) {
            for (var t = n[0], r = 0; ++r < n.length; ) n[r] < t && (t = n[r]);
            return t;
          }),
          (n.max = function (n) {
            for (var t = n[0], r = 0; ++r < n.length; ) n[r] > t && (t = n[r]);
            return t;
          }),
          (n.unique = function (n) {
            for (var t = {}, r = [], e = 0; e < n.length; e++)
              t[n[e]] || ((t[n[e]] = !0), r.push(n[e]));
            return r;
          }),
          (n.mean = function (t) {
            return n.sum(t) / t.length;
          }),
          (n.meansqerr = function (t) {
            return n.sumsqerr(t) / t.length;
          }),
          (n.geomean = function (r) {
            return t.pow(n.product(r), 1 / r.length);
          }),
          (n.median = function (n) {
            var t = n.length,
              r = n.slice().sort(e);
            return 1 & t ? r[(t / 2) | 0] : (r[t / 2 - 1] + r[t / 2]) / 2;
          }),
          (n.cumsum = function (t) {
            return n.cumreduce(t, function (n, t) {
              return n + t;
            });
          }),
          (n.cumprod = function (t) {
            return n.cumreduce(t, function (n, t) {
              return n * t;
            });
          }),
          (n.diff = function (n) {
            var t,
              r = [],
              e = n.length;
            for (t = 1; t < e; t++) r.push(n[t] - n[t - 1]);
            return r;
          }),
          (n.rank = function (n) {
            var t,
              r = [],
              o = {};
            for (t = 0; t < n.length; t++)
              o[(f = n[t])] ? o[f]++ : ((o[f] = 1), r.push(f));
            var i = r.sort(e),
              u = {},
              a = 1;
            for (t = 0; t < i.length; t++) {
              var f,
                c = o[(f = i[t])],
                s = (a + (a + c - 1)) / 2;
              (u[f] = s), (a += c);
            }
            return n.map(function (n) {
              return u[n];
            });
          }),
          (n.mode = function (n) {
            var t,
              r = n.length,
              o = n.slice().sort(e),
              i = 1,
              u = 0,
              a = 0,
              f = [];
            for (t = 0; t < r; t++)
              o[t] === o[t + 1]
                ? i++
                : (i > u
                    ? ((f = [o[t]]), (u = i), (a = 0))
                    : i === u && (f.push(o[t]), a++),
                  (i = 1));
            return 0 === a ? f[0] : f;
          }),
          (n.range = function (t) {
            return n.max(t) - n.min(t);
          }),
          (n.variance = function (t, r) {
            return n.sumsqerr(t) / (t.length - (r ? 1 : 0));
          }),
          (n.pooledvariance = function (t) {
            return (
              t.reduce(function (t, r) {
                return t + n.sumsqerr(r);
              }, 0) /
              (t.reduce(function (n, t) {
                return n + t.length;
              }, 0) -
                t.length)
            );
          }),
          (n.deviation = function (t) {
            for (
              var r = n.mean(t), e = t.length, o = new Array(e), i = 0;
              i < e;
              i++
            )
              o[i] = t[i] - r;
            return o;
          }),
          (n.stdev = function (r, e) {
            return t.sqrt(n.variance(r, e));
          }),
          (n.pooledstdev = function (r) {
            return t.sqrt(n.pooledvariance(r));
          }),
          (n.meandev = function (r) {
            for (var e = n.mean(r), o = [], i = r.length - 1; i >= 0; i--)
              o.push(t.abs(r[i] - e));
            return n.mean(o);
          }),
          (n.meddev = function (r) {
            for (var e = n.median(r), o = [], i = r.length - 1; i >= 0; i--)
              o.push(t.abs(r[i] - e));
            return n.median(o);
          }),
          (n.coeffvar = function (t) {
            return n.stdev(t) / n.mean(t);
          }),
          (n.quartiles = function (n) {
            var r = n.length,
              o = n.slice().sort(e);
            return [
              o[t.round(r / 4) - 1],
              o[t.round(r / 2) - 1],
              o[t.round((3 * r) / 4) - 1],
            ];
          }),
          (n.quantiles = function (n, r, i, u) {
            var a,
              f,
              c,
              s,
              l,
              p = n.slice().sort(e),
              v = [r.length],
              d = n.length;
            for (
              void 0 === i && (i = 3 / 8), void 0 === u && (u = 3 / 8), a = 0;
              a < r.length;
              a++
            )
              (c = d * (f = r[a]) + (i + f * (1 - i - u))),
                (s = t.floor(o(c, 1, d - 1))),
                (l = o(c - s, 0, 1)),
                (v[a] = (1 - l) * p[s - 1] + l * p[s]);
            return v;
          }),
          (n.percentile = function (n, t, r) {
            var o = n.slice().sort(e),
              i = t * (o.length + (r ? 1 : -1)) + (r ? 0 : 1),
              u = parseInt(i),
              a = i - u;
            return u + 1 < o.length
              ? o[u - 1] + a * (o[u] - o[u - 1])
              : o[u - 1];
          }),
          (n.percentileOfScore = function (n, t, r) {
            var e,
              o,
              i = 0,
              u = n.length,
              a = !1;
            for ("strict" === r && (a = !0), o = 0; o < u; o++)
              (e = n[o]), ((a && e < t) || (!a && e <= t)) && i++;
            return i / u;
          }),
          (n.histogram = function (r, e) {
            e = e || 4;
            var o,
              i = n.min(r),
              u = (n.max(r) - i) / e,
              a = r.length,
              f = [];
            for (o = 0; o < e; o++) f[o] = 0;
            for (o = 0; o < a; o++)
              f[t.min(t.floor((r[o] - i) / u), e - 1)] += 1;
            return f;
          }),
          (n.covariance = function (t, r) {
            var e,
              o = n.mean(t),
              i = n.mean(r),
              u = t.length,
              a = new Array(u);
            for (e = 0; e < u; e++) a[e] = (t[e] - o) * (r[e] - i);
            return n.sum(a) / (u - 1);
          }),
          (n.corrcoeff = function (t, r) {
            return n.covariance(t, r) / n.stdev(t, 1) / n.stdev(r, 1);
          }),
          (n.spearmancoeff = function (t, r) {
            return (t = n.rank(t)), (r = n.rank(r)), n.corrcoeff(t, r);
          }),
          (n.stanMoment = function (r, e) {
            for (
              var o = n.mean(r), i = n.stdev(r), u = r.length, a = 0, f = 0;
              f < u;
              f++
            )
              a += t.pow((r[f] - o) / i, e);
            return a / r.length;
          }),
          (n.skewness = function (t) {
            return n.stanMoment(t, 3);
          }),
          (n.kurtosis = function (t) {
            return n.stanMoment(t, 4) - 3;
          });
        var i = n.prototype;
        !(function (t) {
          for (var e = 0; e < t.length; e++)
            !(function (t) {
              i[t] = function (e, o) {
                var u = [],
                  a = 0,
                  f = this;
                if ((r(e) && ((o = e), (e = !1)), o))
                  return (
                    setTimeout(function () {
                      o.call(f, i[t].call(f, e));
                    }),
                    this
                  );
                if (this.length > 1) {
                  for (
                    f = !0 === e ? this : this.transpose();
                    a < f.length;
                    a++
                  )
                    u[a] = n[t](f[a]);
                  return u;
                }
                return n[t](this[0], e);
              };
            })(t[e]);
        })("cumsum cumprod".split(" ")),
          (function (t) {
            for (var e = 0; e < t.length; e++)
              !(function (t) {
                i[t] = function (e, o) {
                  var u = [],
                    a = 0,
                    f = this;
                  if ((r(e) && ((o = e), (e = !1)), o))
                    return (
                      setTimeout(function () {
                        o.call(f, i[t].call(f, e));
                      }),
                      this
                    );
                  if (this.length > 1) {
                    for (
                      "sumrow" !== t &&
                      (f = !0 === e ? this : this.transpose());
                      a < f.length;
                      a++
                    )
                      u[a] = n[t](f[a]);
                    return !0 === e ? n[t](n.utils.toVector(u)) : u;
                  }
                  return n[t](this[0], e);
                };
              })(t[e]);
          })(
            "sum sumsqrd sumsqerr sumrow product min max unique mean meansqerr geomean median diff rank mode range variance deviation stdev meandev meddev coeffvar quartiles histogram skewness kurtosis".split(
              " ",
            ),
          ),
          (function (t) {
            for (var e = 0; e < t.length; e++)
              !(function (t) {
                i[t] = function () {
                  var e,
                    o = [],
                    u = 0,
                    a = this,
                    f = Array.prototype.slice.call(arguments);
                  if (r(f[f.length - 1])) {
                    e = f[f.length - 1];
                    var c = f.slice(0, f.length - 1);
                    return (
                      setTimeout(function () {
                        e.call(a, i[t].apply(a, c));
                      }),
                      this
                    );
                  }
                  e = void 0;
                  var s = function (r) {
                    return n[t].apply(a, [r].concat(f));
                  };
                  if (this.length > 1) {
                    for (a = a.transpose(); u < a.length; u++) o[u] = s(a[u]);
                    return o;
                  }
                  return s(this[0]);
                };
              })(t[e]);
          })("quantiles percentileOfScore".split(" "));
      })(
        (e = (function (n, t) {
          var r = Array.prototype.concat,
            e = Array.prototype.slice,
            o = Object.prototype.toString;
          function i(t, r) {
            var e = t > r ? t : r;
            return n.pow(10, 17 - ~~(n.log(e > 0 ? e : -e) * n.LOG10E));
          }
          var u =
            Array.isArray ||
            function (n) {
              return "[object Array]" === o.call(n);
            };
          function a(n) {
            return "[object Function]" === o.call(n);
          }
          function f(n) {
            return "number" == typeof n && n - n == 0;
          }
          function c() {
            return new c._init(arguments);
          }
          function s() {
            return 0;
          }
          function l() {
            return 1;
          }
          function p(n, t) {
            return n === t ? 1 : 0;
          }
          (c.fn = c.prototype),
            (c._init = function (n) {
              if (u(n[0]))
                if (u(n[0][0])) {
                  a(n[1]) && (n[0] = c.map(n[0], n[1]));
                  for (var t = 0; t < n[0].length; t++) this[t] = n[0][t];
                  this.length = n[0].length;
                } else
                  (this[0] = a(n[1]) ? c.map(n[0], n[1]) : n[0]),
                    (this.length = 1);
              else if (f(n[0]))
                (this[0] = c.seq.apply(null, n)), (this.length = 1);
              else {
                if (n[0] instanceof c) return c(n[0].toArray());
                (this[0] = []), (this.length = 1);
              }
              return this;
            }),
            (c._init.prototype = c.prototype),
            (c._init.constructor = c),
            (c.utils = {
              calcRdx: i,
              isArray: u,
              isFunction: a,
              isNumber: f,
              toVector: function (n) {
                return r.apply([], n);
              },
            }),
            (c._random_fn = n.random),
            (c.setRandom = function (n) {
              if ("function" != typeof n)
                throw new TypeError("fn is not a function");
              c._random_fn = n;
            }),
            (c.extend = function (n) {
              var t, r;
              if (1 === arguments.length) {
                for (r in n) c[r] = n[r];
                return this;
              }
              for (t = 1; t < arguments.length; t++)
                for (r in arguments[t]) n[r] = arguments[t][r];
              return n;
            }),
            (c.rows = function (n) {
              return n.length || 1;
            }),
            (c.cols = function (n) {
              return n[0].length || 1;
            }),
            (c.dimensions = function (n) {
              return { rows: c.rows(n), cols: c.cols(n) };
            }),
            (c.row = function (n, t) {
              return u(t)
                ? t.map(function (t) {
                    return c.row(n, t);
                  })
                : n[t];
            }),
            (c.rowa = function (n, t) {
              return c.row(n, t);
            }),
            (c.col = function (n, t) {
              if (u(t)) {
                var r = c.arange(n.length).map(function () {
                  return new Array(t.length);
                });
                return (
                  t.forEach(function (t, e) {
                    c.arange(n.length).forEach(function (o) {
                      r[o][e] = n[o][t];
                    });
                  }),
                  r
                );
              }
              for (var e = new Array(n.length), o = 0; o < n.length; o++)
                e[o] = [n[o][t]];
              return e;
            }),
            (c.cola = function (n, t) {
              return c.col(n, t).map(function (n) {
                return n[0];
              });
            }),
            (c.diag = function (n) {
              for (var t = c.rows(n), r = new Array(t), e = 0; e < t; e++)
                r[e] = [n[e][e]];
              return r;
            }),
            (c.antidiag = function (n) {
              for (
                var t = c.rows(n) - 1, r = new Array(t), e = 0;
                t >= 0;
                t--, e++
              )
                r[e] = [n[e][t]];
              return r;
            }),
            (c.transpose = function (n) {
              var t,
                r,
                e,
                o,
                i,
                a = [];
              for (
                u(n[0]) || (n = [n]), r = n.length, e = n[0].length, i = 0;
                i < e;
                i++
              ) {
                for (t = new Array(r), o = 0; o < r; o++) t[o] = n[o][i];
                a.push(t);
              }
              return 1 === a.length ? a[0] : a;
            }),
            (c.map = function (n, t, r) {
              var e, o, i, a, f;
              for (
                u(n[0]) || (n = [n]),
                  o = n.length,
                  i = n[0].length,
                  a = r ? n : new Array(o),
                  e = 0;
                e < o;
                e++
              )
                for (a[e] || (a[e] = new Array(i)), f = 0; f < i; f++)
                  a[e][f] = t(n[e][f], e, f);
              return 1 === a.length ? a[0] : a;
            }),
            (c.cumreduce = function (n, t, r) {
              var e, o, i, a, f;
              for (
                u(n[0]) || (n = [n]),
                  o = n.length,
                  i = n[0].length,
                  a = r ? n : new Array(o),
                  e = 0;
                e < o;
                e++
              )
                for (
                  a[e] || (a[e] = new Array(i)),
                    i > 0 && (a[e][0] = n[e][0]),
                    f = 1;
                  f < i;
                  f++
                )
                  a[e][f] = t(a[e][f - 1], n[e][f]);
              return 1 === a.length ? a[0] : a;
            }),
            (c.alter = function (n, t) {
              return c.map(n, t, !0);
            }),
            (c.create = function (n, t, r) {
              var e,
                o,
                i = new Array(n);
              for (a(t) && ((r = t), (t = n)), e = 0; e < n; e++)
                for (i[e] = new Array(t), o = 0; o < t; o++) i[e][o] = r(e, o);
              return i;
            }),
            (c.zeros = function (n, t) {
              return f(t) || (t = n), c.create(n, t, s);
            }),
            (c.ones = function (n, t) {
              return f(t) || (t = n), c.create(n, t, l);
            }),
            (c.rand = function (n, t) {
              return f(t) || (t = n), c.create(n, t, c._random_fn);
            }),
            (c.identity = function (n, t) {
              return f(t) || (t = n), c.create(n, t, p);
            }),
            (c.symmetric = function (n) {
              var t,
                r,
                e = n.length;
              if (n.length !== n[0].length) return !1;
              for (t = 0; t < e; t++)
                for (r = 0; r < e; r++) if (n[r][t] !== n[t][r]) return !1;
              return !0;
            }),
            (c.clear = function (n) {
              return c.alter(n, s);
            }),
            (c.seq = function (n, t, r, e) {
              a(e) || (e = !1);
              var o,
                u = [],
                f = i(n, t),
                c = (t * f - n * f) / ((r - 1) * f),
                s = n;
              for (o = 0; s <= t && o < r; s = (n * f + c * f * ++o) / f)
                u.push(e ? e(s, o) : s);
              return u;
            }),
            (c.arange = function (n, t, r) {
              var e,
                o = [];
              if (
                ((r = r || 1),
                void 0 === t && ((t = n), (n = 0)),
                n === t || 0 === r)
              )
                return [];
              if (n < t && r < 0) return [];
              if (n > t && r > 0) return [];
              if (r > 0) for (e = n; e < t; e += r) o.push(e);
              else for (e = n; e > t; e += r) o.push(e);
              return o;
            }),
            (c.slice = (function () {
              function n(n, t, r, e) {
                var o,
                  i = [],
                  u = n.length;
                if (void 0 === t && void 0 === r && void 0 === e)
                  return c.copy(n);
                if (
                  ((e = e || 1),
                  (t = (t = t || 0) >= 0 ? t : u + t) ===
                    (r = (r = r || n.length) >= 0 ? r : u + r) || 0 === e)
                )
                  return [];
                if (t < r && e < 0) return [];
                if (t > r && e > 0) return [];
                if (e > 0) for (o = t; o < r; o += e) i.push(n[o]);
                else for (o = t; o > r; o += e) i.push(n[o]);
                return i;
              }
              return function (t, r) {
                var e, o;
                return f((r = r || {}).row)
                  ? f(r.col)
                    ? t[r.row][r.col]
                    : n(
                        c.rowa(t, r.row),
                        (e = r.col || {}).start,
                        e.end,
                        e.step,
                      )
                  : f(r.col)
                  ? n(c.cola(t, r.col), (o = r.row || {}).start, o.end, o.step)
                  : ((o = r.row || {}),
                    (e = r.col || {}),
                    n(t, o.start, o.end, o.step).map(function (t) {
                      return n(t, e.start, e.end, e.step);
                    }));
              };
            })()),
            (c.sliceAssign = function (t, r, e) {
              var o, i;
              if (f(r.row)) {
                if (f(r.col)) return (t[r.row][r.col] = e);
                (r.col = r.col || {}),
                  (r.col.start = r.col.start || 0),
                  (r.col.end = r.col.end || t[0].length),
                  (r.col.step = r.col.step || 1),
                  (o = c.arange(
                    r.col.start,
                    n.min(t.length, r.col.end),
                    r.col.step,
                  ));
                var u = r.row;
                return (
                  o.forEach(function (n, r) {
                    t[u][n] = e[r];
                  }),
                  t
                );
              }
              if (f(r.col)) {
                (r.row = r.row || {}),
                  (r.row.start = r.row.start || 0),
                  (r.row.end = r.row.end || t.length),
                  (r.row.step = r.row.step || 1),
                  (i = c.arange(
                    r.row.start,
                    n.min(t[0].length, r.row.end),
                    r.row.step,
                  ));
                var a = r.col;
                return (
                  i.forEach(function (n, r) {
                    t[n][a] = e[r];
                  }),
                  t
                );
              }
              return (
                void 0 === e[0].length && (e = [e]),
                (r.row.start = r.row.start || 0),
                (r.row.end = r.row.end || t.length),
                (r.row.step = r.row.step || 1),
                (r.col.start = r.col.start || 0),
                (r.col.end = r.col.end || t[0].length),
                (r.col.step = r.col.step || 1),
                (i = c.arange(
                  r.row.start,
                  n.min(t.length, r.row.end),
                  r.row.step,
                )),
                (o = c.arange(
                  r.col.start,
                  n.min(t[0].length, r.col.end),
                  r.col.step,
                )),
                i.forEach(function (n, r) {
                  o.forEach(function (o, i) {
                    t[n][o] = e[r][i];
                  });
                }),
                t
              );
            }),
            (c.diagonal = function (n) {
              var t = c.zeros(n.length, n.length);
              return (
                n.forEach(function (n, r) {
                  t[r][r] = n;
                }),
                t
              );
            }),
            (c.copy = function (n) {
              return n.map(function (n) {
                return f(n)
                  ? n
                  : n.map(function (n) {
                      return n;
                    });
              });
            });
          var v = c.prototype;
          return (
            (v.length = 0),
            (v.push = Array.prototype.push),
            (v.sort = Array.prototype.sort),
            (v.splice = Array.prototype.splice),
            (v.slice = Array.prototype.slice),
            (v.toArray = function () {
              return this.length > 1 ? e.call(this) : e.call(this)[0];
            }),
            (v.map = function (n, t) {
              return c(c.map(this, n, t));
            }),
            (v.cumreduce = function (n, t) {
              return c(c.cumreduce(this, n, t));
            }),
            (v.alter = function (n) {
              return c.alter(this, n), this;
            }),
            (function (n) {
              for (var t = 0; t < n.length; t++)
                !(function (n) {
                  v[n] = function (t) {
                    var r,
                      e = this;
                    return t
                      ? (setTimeout(function () {
                          t.call(e, v[n].call(e));
                        }),
                        this)
                      : ((r = c[n](this)), u(r) ? c(r) : r);
                  };
                })(n[t]);
            })(
              "transpose clear symmetric rows cols dimensions diag antidiag".split(
                " ",
              ),
            ),
            (function (n) {
              for (var t = 0; t < n.length; t++)
                !(function (n) {
                  v[n] = function (t, r) {
                    var e = this;
                    return r
                      ? (setTimeout(function () {
                          r.call(e, v[n].call(e, t));
                        }),
                        this)
                      : c(c[n](this, t));
                  };
                })(n[t]);
            })("row col".split(" ")),
            (function (n) {
              for (var t = 0; t < n.length; t++)
                !(function (n) {
                  v[n] = function () {
                    return c(c[n].apply(null, arguments));
                  };
                })(n[t]);
            })("create zeros ones rand identity".split(" ")),
            c
          );
        })(Math)),
        Math,
      ),
      (function (n, t) {
        (n.gammaln = function (n) {
          var r,
            e,
            o,
            i = 0,
            u = [
              76.18009172947146, -86.50532032941678, 24.01409824083091,
              -1.231739572450155, 0.001208650973866179, -5395239384953e-18,
            ],
            a = 1.000000000190015;
          for (o = (e = r = n) + 5.5, o -= (r + 0.5) * t.log(o); i < 6; i++)
            a += u[i] / ++e;
          return t.log((2.5066282746310007 * a) / r) - o;
        }),
          (n.loggam = function (n) {
            var r,
              e,
              o,
              i,
              u,
              a,
              f,
              c = [
                0.08333333333333333, -0.002777777777777778,
                0.0007936507936507937, -0.0005952380952380952,
                0.0008417508417508418, -0.001917526917526918,
                0.00641025641025641, -0.02955065359477124, 0.1796443723688307,
                -1.3924322169059,
              ];
            if (((r = n), (f = 0), 1 == n || 2 == n)) return 0;
            for (
              n <= 7 && (r = n + (f = t.floor(7 - n))),
                e = 1 / (r * r),
                o = 2 * t.PI,
                u = c[9],
                a = 8;
              a >= 0;
              a--
            )
              (u *= e), (u += c[a]);
            if (
              ((i = u / r + 0.5 * t.log(o) + (r - 0.5) * t.log(r) - r), n <= 7)
            )
              for (a = 1; a <= f; a++) (i -= t.log(r - 1)), (r -= 1);
            return i;
          }),
          (n.gammafn = function (n) {
            var r,
              e,
              o,
              i,
              u = [
                -1.716185138865495, 24.76565080557592, -379.80425647094563,
                629.3311553128184, 866.9662027904133, -31451.272968848367,
                -36144.413418691176, 66456.14382024054,
              ],
              a = [
                -30.8402300119739, 315.35062697960416, -1015.1563674902192,
                -3107.771671572311, 22538.11842098015, 4755.846277527881,
                -134659.9598649693, -115132.2596755535,
              ],
              f = !1,
              c = 0,
              s = 0,
              l = 0,
              p = n;
            if (n > 171.6243769536076) return 1 / 0;
            if (p <= 0) {
              if (!(i = (p % 1) + 36e-17)) return 1 / 0;
              (f = ((1 & p ? -1 : 1) * t.PI) / t.sin(t.PI * i)), (p = 1 - p);
            }
            for (
              o = p, e = p < 1 ? p++ : (p -= c = (0 | p) - 1) - 1, r = 0;
              r < 8;
              ++r
            )
              (l = (l + u[r]) * e), (s = s * e + a[r]);
            if (((i = l / s + 1), o < p)) i /= o;
            else if (o > p) for (r = 0; r < c; ++r) (i *= p), p++;
            return f && (i = f / i), i;
          }),
          (n.gammap = function (t, r) {
            return n.lowRegGamma(t, r) * n.gammafn(t);
          }),
          (n.lowRegGamma = function (r, e) {
            var o,
              i = n.gammaln(r),
              u = r,
              a = 1 / r,
              f = a,
              c = e + 1 - r,
              s = 1 / 1e-30,
              l = 1 / c,
              p = l,
              v = 1,
              d = -~(8.5 * t.log(r >= 1 ? r : 1 / r) + 0.4 * r + 17);
            if (e < 0 || r <= 0) return NaN;
            if (e < r + 1) {
              for (; v <= d; v++) a += f *= e / ++u;
              return a * t.exp(-e + r * t.log(e) - i);
            }
            for (; v <= d; v++)
              p *=
                (l = 1 / (l = (o = -v * (v - r)) * l + (c += 2))) *
                (s = c + o / s);
            return 1 - p * t.exp(-e + r * t.log(e) - i);
          }),
          (n.factorialln = function (t) {
            return t < 0 ? NaN : n.gammaln(t + 1);
          }),
          (n.factorial = function (t) {
            return t < 0 ? NaN : n.gammafn(t + 1);
          }),
          (n.combination = function (r, e) {
            return r > 170 || e > 170
              ? t.exp(n.combinationln(r, e))
              : n.factorial(r) / n.factorial(e) / n.factorial(r - e);
          }),
          (n.combinationln = function (t, r) {
            return n.factorialln(t) - n.factorialln(r) - n.factorialln(t - r);
          }),
          (n.permutation = function (t, r) {
            return n.factorial(t) / n.factorial(t - r);
          }),
          (n.betafn = function (r, e) {
            if (!(r <= 0 || e <= 0))
              return r + e > 170
                ? t.exp(n.betaln(r, e))
                : (n.gammafn(r) * n.gammafn(e)) / n.gammafn(r + e);
          }),
          (n.betaln = function (t, r) {
            return n.gammaln(t) + n.gammaln(r) - n.gammaln(t + r);
          }),
          (n.betacf = function (n, r, e) {
            var o,
              i,
              u,
              a,
              f = 1,
              c = r + e,
              s = r + 1,
              l = r - 1,
              p = 1,
              v = 1 - (c * n) / s;
            for (
              t.abs(v) < 1e-30 && (v = 1e-30), a = v = 1 / v;
              f <= 100 &&
              ((v =
                1 +
                (i = (f * (e - f) * n) / ((l + (o = 2 * f)) * (r + o))) * v),
              t.abs(v) < 1e-30 && (v = 1e-30),
              (p = 1 + i / p),
              t.abs(p) < 1e-30 && (p = 1e-30),
              (a *= (v = 1 / v) * p),
              (v =
                1 + (i = (-(r + f) * (c + f) * n) / ((r + o) * (s + o))) * v),
              t.abs(v) < 1e-30 && (v = 1e-30),
              (p = 1 + i / p),
              t.abs(p) < 1e-30 && (p = 1e-30),
              (a *= u = (v = 1 / v) * p),
              !(t.abs(u - 1) < 3e-7));
              f++
            );
            return a;
          }),
          (n.gammapinv = function (r, e) {
            var o,
              i,
              u,
              a,
              f,
              c,
              s = 0,
              l = e - 1,
              p = n.gammaln(e);
            if (r >= 1) return t.max(100, e + 100 * t.sqrt(e));
            if (r <= 0) return 0;
            for (
              e > 1
                ? ((f = t.log(l)),
                  (c = t.exp(l * (f - 1) - p)),
                  (a = r < 0.5 ? r : 1 - r),
                  (o =
                    (2.30753 + 0.27061 * (i = t.sqrt(-2 * t.log(a)))) /
                      (1 + i * (0.99229 + 0.04481 * i)) -
                    i),
                  r < 0.5 && (o = -o),
                  (o = t.max(
                    0.001,
                    e * t.pow(1 - 1 / (9 * e) - o / (3 * t.sqrt(e)), 3),
                  )))
                : (o =
                    r < (i = 1 - e * (0.253 + 0.12 * e))
                      ? t.pow(r / i, 1 / e)
                      : 1 - t.log(1 - (r - i) / (1 - i)));
              s < 12;
              s++
            ) {
              if (o <= 0) return 0;
              if (
                ((o -= i =
                  (u =
                    (n.lowRegGamma(e, o) - r) /
                    (i =
                      e > 1
                        ? c * t.exp(-(o - l) + l * (t.log(o) - f))
                        : t.exp(-o + l * t.log(o) - p))) /
                  (1 - 0.5 * t.min(1, u * ((e - 1) / o - 1)))) <= 0 &&
                  (o = 0.5 * (o + i)),
                t.abs(i) < 1e-8 * o)
              )
                break;
            }
            return o;
          }),
          (n.erf = function (n) {
            var r,
              e,
              o,
              i,
              u = [
                -1.3026537197817094, 0.6419697923564902, 0.019476473204185836,
                -0.00956151478680863, -0.000946595344482036,
                0.000366839497852761, 42523324806907e-18, -20278578112534e-18,
                -1624290004647e-18, 130365583558e-17, 1.5626441722e-8,
                -8.5238095915e-8, 6.529054439e-9, 5.059343495e-9,
                -9.91364156e-10, -2.27365122e-10, 96467911e-18, 2394038e-18,
                -6886027e-18, 894487e-18, 313092e-18, -112708e-18, 381e-18,
                7106e-18, -1523e-18, -94e-18, 121e-18, -28e-18,
              ],
              a = u.length - 1,
              f = !1,
              c = 0,
              s = 0;
            for (
              n < 0 && ((n = -n), (f = !0)), e = 4 * (r = 2 / (2 + n)) - 2;
              a > 0;
              a--
            )
              (o = c), (c = e * c - s + u[a]), (s = o);
            return (
              (i = r * t.exp(-n * n + 0.5 * (u[0] + e * c) - s)),
              f ? i - 1 : 1 - i
            );
          }),
          (n.erfc = function (t) {
            return 1 - n.erf(t);
          }),
          (n.erfcinv = function (r) {
            var e,
              o,
              i,
              u,
              a = 0;
            if (r >= 2) return -100;
            if (r <= 0) return 100;
            for (
              u = r < 1 ? r : 2 - r,
                e =
                  -0.70711 *
                  ((2.30753 + 0.27061 * (i = t.sqrt(-2 * t.log(u / 2)))) /
                    (1 + i * (0.99229 + 0.04481 * i)) -
                    i);
              a < 2;
              a++
            )
              e +=
                (o = n.erfc(e) - u) /
                (1.1283791670955126 * t.exp(-e * e) - e * o);
            return r < 1 ? e : -e;
          }),
          (n.ibetainv = function (r, e, o) {
            var i,
              u,
              a,
              f,
              c,
              s,
              l,
              p,
              v,
              d,
              g = e - 1,
              m = o - 1,
              h = 0;
            if (r <= 0) return 0;
            if (r >= 1) return 1;
            for (
              e >= 1 && o >= 1
                ? ((a = r < 0.5 ? r : 1 - r),
                  (s =
                    (2.30753 + 0.27061 * (f = t.sqrt(-2 * t.log(a)))) /
                      (1 + f * (0.99229 + 0.04481 * f)) -
                    f),
                  r < 0.5 && (s = -s),
                  (l = (s * s - 3) / 6),
                  (p = 2 / (1 / (2 * e - 1) + 1 / (2 * o - 1))),
                  (v =
                    (s * t.sqrt(l + p)) / p -
                    (1 / (2 * o - 1) - 1 / (2 * e - 1)) *
                      (l + 5 / 6 - 2 / (3 * p))),
                  (s = e / (e + o * t.exp(2 * v))))
                : ((i = t.log(e / (e + o))),
                  (u = t.log(o / (e + o))),
                  (s =
                    r <
                    (f = t.exp(e * i) / e) / (v = f + (c = t.exp(o * u) / o))
                      ? t.pow(e * v * r, 1 / e)
                      : 1 - t.pow(o * v * (1 - r), 1 / o))),
                d = -n.gammaln(e) - n.gammaln(o) + n.gammaln(e + o);
              h < 10;
              h++
            ) {
              if (0 === s || 1 === s) return s;
              if (
                ((s -= f =
                  (c =
                    (n.ibeta(s, e, o) - r) /
                    (f = t.exp(g * t.log(s) + m * t.log(1 - s) + d))) /
                  (1 - 0.5 * t.min(1, c * (g / s - m / (1 - s))))) <= 0 &&
                  (s = 0.5 * (s + f)),
                s >= 1 && (s = 0.5 * (s + f + 1)),
                t.abs(f) < 1e-8 * s && h > 0)
              )
                break;
            }
            return s;
          }),
          (n.ibeta = function (r, e, o) {
            var i =
              0 === r || 1 === r
                ? 0
                : t.exp(
                    n.gammaln(e + o) -
                      n.gammaln(e) -
                      n.gammaln(o) +
                      e * t.log(r) +
                      o * t.log(1 - r),
                  );
            return (
              !(r < 0 || r > 1) &&
              (r < (e + 1) / (e + o + 2)
                ? (i * n.betacf(r, e, o)) / e
                : 1 - (i * n.betacf(1 - r, o, e)) / o)
            );
          }),
          (n.randn = function (r, e) {
            var o, i, u, a, f;
            if ((e || (e = r), r))
              return n.create(r, e, function () {
                return n.randn();
              });
            do {
              (o = n._random_fn()),
                (i = 1.7156 * (n._random_fn() - 0.5)),
                (f =
                  (u = o - 0.449871) * u +
                  (a = t.abs(i) + 0.386595) * (0.196 * a - 0.25472 * u));
            } while (
              f > 0.27597 &&
              (f > 0.27846 || i * i > -4 * t.log(o) * o * o)
            );
            return i / o;
          }),
          (n.randg = function (r, e, o) {
            var i,
              u,
              a,
              f,
              c,
              s,
              l = r;
            if ((o || (o = e), r || (r = 1), e))
              return (
                (s = n.zeros(e, o)).alter(function () {
                  return n.randg(r);
                }),
                s
              );
            r < 1 && (r += 1), (i = r - 1 / 3), (u = 1 / t.sqrt(9 * i));
            do {
              do {
                f = 1 + u * (c = n.randn());
              } while (f <= 0);
              (f *= f * f), (a = n._random_fn());
            } while (
              a > 1 - 0.331 * t.pow(c, 4) &&
              t.log(a) > 0.5 * c * c + i * (1 - f + t.log(f))
            );
            if (r == l) return i * f;
            do {
              a = n._random_fn();
            } while (0 === a);
            return t.pow(a, 1 / l) * i * f;
          }),
          (function (t) {
            for (var r = 0; r < t.length; r++)
              !(function (t) {
                n.fn[t] = function () {
                  return n(
                    n.map(this, function (r) {
                      return n[t](r);
                    }),
                  );
                };
              })(t[r]);
          })("gammaln gammafn factorial factorialln".split(" ")),
          (function (t) {
            for (var r = 0; r < t.length; r++)
              !(function (t) {
                n.fn[t] = function () {
                  return n(n[t].apply(null, arguments));
                };
              })(t[r]);
          })("randn".split(" "));
      })(e, Math),
      (function (n, t) {
        function r(n, r, e, o) {
          for (
            var i, u = 0, a = 1, f = 1, c = 1, s = 0, l = 0;
            t.abs((f - l) / f) > o;

          )
            (l = f),
              (a =
                c +
                (i =
                  (-(r + s) * (r + e + s) * n) /
                  (r + 2 * s) /
                  (r + 2 * s + 1)) *
                  a),
              (f =
                (u = f + i * u) +
                (i = ((s += 1) * (e - s) * n) / (r + 2 * s - 1) / (r + 2 * s)) *
                  f),
              (u /= c = a + i * c),
              (a /= c),
              (f /= c),
              (c = 1);
          return f / r;
        }
        function e(r, e, o) {
          var i = [
              0.9815606342467192, 0.9041172563704749, 0.7699026741943047,
              0.5873179542866175, 0.3678314989981802, 0.1252334085114689,
            ],
            u = [
              0.04717533638651183, 0.10693932599531843, 0.16007832854334622,
              0.20316742672306592, 0.2334925365383548, 0.24914704581340277,
            ],
            a = 0.5 * r;
          if (a >= 8) return 1;
          var f,
            c = 2 * n.normal.cdf(a, 0, 1, 1, 0) - 1;
          c = c >= t.exp(-50 / o) ? t.pow(c, o) : 0;
          for (
            var s = a,
              l = (8 - a) / (f = r > 3 ? 2 : 3),
              p = s + l,
              v = 0,
              d = o - 1,
              g = 1;
            g <= f;
            g++
          ) {
            for (
              var m = 0, h = 0.5 * (p + s), y = 0.5 * (p - s), b = 1;
              b <= 12;
              b++
            ) {
              var w,
                x = h + y * (6 < b ? i[(w = 12 - b + 1) - 1] : -i[(w = b) - 1]),
                S = x * x;
              if (S > 60) break;
              var _ =
                2 * n.normal.cdf(x, 0, 1, 1, 0) * 0.5 -
                2 * n.normal.cdf(x, r, 1, 1, 0) * 0.5;
              _ >= t.exp(-30 / d) &&
                (m += _ = u[w - 1] * t.exp(-0.5 * S) * t.pow(_, d));
            }
            (v += m *= (2 * y * o) / t.sqrt(2 * t.PI)), (s = p), (p += l);
          }
          return (c += v) <= t.exp(-30 / e)
            ? 0
            : (c = t.pow(c, e)) >= 1
            ? 1
            : c;
        }
        !(function (t) {
          for (var r = 0; r < t.length; r++)
            !(function (t) {
              (n[t] = function n(t, r, e) {
                return this instanceof n
                  ? ((this._a = t), (this._b = r), (this._c = e), this)
                  : new n(t, r, e);
              }),
                (n.fn[t] = function (r, e, o) {
                  var i = n[t](r, e, o);
                  return (i.data = this), i;
                }),
                (n[t].prototype.sample = function (r) {
                  var e = this._a,
                    o = this._b,
                    i = this._c;
                  return r
                    ? n.alter(r, function () {
                        return n[t].sample(e, o, i);
                      })
                    : n[t].sample(e, o, i);
                }),
                (function (r) {
                  for (var e = 0; e < r.length; e++)
                    !(function (r) {
                      n[t].prototype[r] = function (e) {
                        var o = this._a,
                          i = this._b,
                          u = this._c;
                        return (
                          e || 0 === e || (e = this.data),
                          "number" != typeof e
                            ? n.fn.map.call(e, function (e) {
                                return n[t][r](e, o, i, u);
                              })
                            : n[t][r](e, o, i, u)
                        );
                      };
                    })(r[e]);
                })("pdf cdf inv".split(" ")),
                (function (r) {
                  for (var e = 0; e < r.length; e++)
                    !(function (r) {
                      n[t].prototype[r] = function () {
                        return n[t][r](this._a, this._b, this._c);
                      };
                    })(r[e]);
                })("mean median mode variance".split(" "));
            })(t[r]);
        })(
          "beta centralF cauchy chisquare exponential gamma invgamma kumaraswamy laplace lognormal noncentralt normal pareto studentt weibull uniform binomial negbin hypgeom poisson triangular tukey arcsine".split(
            " ",
          ),
        ),
          n.extend(n.beta, {
            pdf: function (r, e, o) {
              return r > 1 || r < 0
                ? 0
                : 1 == e && 1 == o
                ? 1
                : e < 512 && o < 512
                ? (t.pow(r, e - 1) * t.pow(1 - r, o - 1)) / n.betafn(e, o)
                : t.exp(
                    (e - 1) * t.log(r) +
                      (o - 1) * t.log(1 - r) -
                      n.betaln(e, o),
                  );
            },
            cdf: function (t, r, e) {
              return t > 1 || t < 0 ? 1 * (t > 1) : n.ibeta(t, r, e);
            },
            inv: function (t, r, e) {
              return n.ibetainv(t, r, e);
            },
            mean: function (n, t) {
              return n / (n + t);
            },
            median: function (t, r) {
              return n.ibetainv(0.5, t, r);
            },
            mode: function (n, t) {
              return (n - 1) / (n + t - 2);
            },
            sample: function (t, r) {
              var e = n.randg(t);
              return e / (e + n.randg(r));
            },
            variance: function (n, r) {
              return (n * r) / (t.pow(n + r, 2) * (n + r + 1));
            },
          }),
          n.extend(n.centralF, {
            pdf: function (r, e, o) {
              var i;
              return r < 0
                ? 0
                : e <= 2
                ? 0 === r && e < 2
                  ? 1 / 0
                  : 0 === r && 2 === e
                  ? 1
                  : (1 / n.betafn(e / 2, o / 2)) *
                    t.pow(e / o, e / 2) *
                    t.pow(r, e / 2 - 1) *
                    t.pow(1 + (e / o) * r, -(e + o) / 2)
                : ((i = (e * r) / (o + r * e)),
                  ((e * (o / (o + r * e))) / 2) *
                    n.binomial.pdf((e - 2) / 2, (e + o - 2) / 2, i));
            },
            cdf: function (t, r, e) {
              return t < 0 ? 0 : n.ibeta((r * t) / (r * t + e), r / 2, e / 2);
            },
            inv: function (t, r, e) {
              return e / (r * (1 / n.ibetainv(t, r / 2, e / 2) - 1));
            },
            mean: function (n, t) {
              return t > 2 ? t / (t - 2) : void 0;
            },
            mode: function (n, t) {
              return n > 2 ? (t * (n - 2)) / (n * (t + 2)) : void 0;
            },
            sample: function (t, r) {
              return (2 * n.randg(t / 2)) / t / ((2 * n.randg(r / 2)) / r);
            },
            variance: function (n, t) {
              if (!(t <= 4))
                return (
                  (2 * t * t * (n + t - 2)) / (n * (t - 2) * (t - 2) * (t - 4))
                );
            },
          }),
          n.extend(n.cauchy, {
            pdf: function (n, r, e) {
              return e < 0 ? 0 : e / (t.pow(n - r, 2) + t.pow(e, 2)) / t.PI;
            },
            cdf: function (n, r, e) {
              return t.atan((n - r) / e) / t.PI + 0.5;
            },
            inv: function (n, r, e) {
              return r + e * t.tan(t.PI * (n - 0.5));
            },
            median: function (n) {
              return n;
            },
            mode: function (n) {
              return n;
            },
            sample: function (r, e) {
              return n.randn() * t.sqrt(1 / (2 * n.randg(0.5))) * e + r;
            },
          }),
          n.extend(n.chisquare, {
            pdf: function (r, e) {
              return r < 0
                ? 0
                : 0 === r && 2 === e
                ? 0.5
                : t.exp(
                    (e / 2 - 1) * t.log(r) -
                      r / 2 -
                      (e / 2) * t.log(2) -
                      n.gammaln(e / 2),
                  );
            },
            cdf: function (t, r) {
              return t < 0 ? 0 : n.lowRegGamma(r / 2, t / 2);
            },
            inv: function (t, r) {
              return 2 * n.gammapinv(t, 0.5 * r);
            },
            mean: function (n) {
              return n;
            },
            median: function (n) {
              return n * t.pow(1 - 2 / (9 * n), 3);
            },
            mode: function (n) {
              return n - 2 > 0 ? n - 2 : 0;
            },
            sample: function (t) {
              return 2 * n.randg(t / 2);
            },
            variance: function (n) {
              return 2 * n;
            },
          }),
          n.extend(n.exponential, {
            pdf: function (n, r) {
              return n < 0 ? 0 : r * t.exp(-r * n);
            },
            cdf: function (n, r) {
              return n < 0 ? 0 : 1 - t.exp(-r * n);
            },
            inv: function (n, r) {
              return -t.log(1 - n) / r;
            },
            mean: function (n) {
              return 1 / n;
            },
            median: function (n) {
              return (1 / n) * t.log(2);
            },
            mode: function () {
              return 0;
            },
            sample: function (r) {
              return (-1 / r) * t.log(n._random_fn());
            },
            variance: function (n) {
              return t.pow(n, -2);
            },
          }),
          n.extend(n.gamma, {
            pdf: function (r, e, o) {
              return r < 0
                ? 0
                : 0 === r && 1 === e
                ? 1 / o
                : t.exp(
                    (e - 1) * t.log(r) - r / o - n.gammaln(e) - e * t.log(o),
                  );
            },
            cdf: function (t, r, e) {
              return t < 0 ? 0 : n.lowRegGamma(r, t / e);
            },
            inv: function (t, r, e) {
              return n.gammapinv(t, r) * e;
            },
            mean: function (n, t) {
              return n * t;
            },
            mode: function (n, t) {
              if (n > 1) return (n - 1) * t;
            },
            sample: function (t, r) {
              return n.randg(t) * r;
            },
            variance: function (n, t) {
              return n * t * t;
            },
          }),
          n.extend(n.invgamma, {
            pdf: function (r, e, o) {
              return r <= 0
                ? 0
                : t.exp(
                    -(e + 1) * t.log(r) - o / r - n.gammaln(e) + e * t.log(o),
                  );
            },
            cdf: function (t, r, e) {
              return t <= 0 ? 0 : 1 - n.lowRegGamma(r, e / t);
            },
            inv: function (t, r, e) {
              return e / n.gammapinv(1 - t, r);
            },
            mean: function (n, t) {
              return n > 1 ? t / (n - 1) : void 0;
            },
            mode: function (n, t) {
              return t / (n + 1);
            },
            sample: function (t, r) {
              return r / n.randg(t);
            },
            variance: function (n, t) {
              if (!(n <= 2)) return (t * t) / ((n - 1) * (n - 1) * (n - 2));
            },
          }),
          n.extend(n.kumaraswamy, {
            pdf: function (n, r, e) {
              return 0 === n && 1 === r
                ? e
                : 1 === n && 1 === e
                ? r
                : t.exp(
                    t.log(r) +
                      t.log(e) +
                      (r - 1) * t.log(n) +
                      (e - 1) * t.log(1 - t.pow(n, r)),
                  );
            },
            cdf: function (n, r, e) {
              return n < 0 ? 0 : n > 1 ? 1 : 1 - t.pow(1 - t.pow(n, r), e);
            },
            inv: function (n, r, e) {
              return t.pow(1 - t.pow(1 - n, 1 / e), 1 / r);
            },
            mean: function (t, r) {
              return (
                (r * n.gammafn(1 + 1 / t) * n.gammafn(r)) /
                n.gammafn(1 + 1 / t + r)
              );
            },
            median: function (n, r) {
              return t.pow(1 - t.pow(2, -1 / r), 1 / n);
            },
            mode: function (n, r) {
              if (n >= 1 && r >= 1 && 1 !== n && 1 !== r)
                return t.pow((n - 1) / (n * r - 1), 1 / n);
            },
            variance: function () {
              throw new Error("variance not yet implemented");
            },
          }),
          n.extend(n.lognormal, {
            pdf: function (n, r, e) {
              return n <= 0
                ? 0
                : t.exp(
                    -t.log(n) -
                      0.5 * t.log(2 * t.PI) -
                      t.log(e) -
                      t.pow(t.log(n) - r, 2) / (2 * e * e),
                  );
            },
            cdf: function (r, e, o) {
              return r < 0
                ? 0
                : 0.5 + 0.5 * n.erf((t.log(r) - e) / t.sqrt(2 * o * o));
            },
            inv: function (r, e, o) {
              return t.exp(-1.4142135623730951 * o * n.erfcinv(2 * r) + e);
            },
            mean: function (n, r) {
              return t.exp(n + (r * r) / 2);
            },
            median: function (n) {
              return t.exp(n);
            },
            mode: function (n, r) {
              return t.exp(n - r * r);
            },
            sample: function (r, e) {
              return t.exp(n.randn() * e + r);
            },
            variance: function (n, r) {
              return (t.exp(r * r) - 1) * t.exp(2 * n + r * r);
            },
          }),
          n.extend(n.noncentralt, {
            pdf: function (r, e, o) {
              return t.abs(o) < 1e-14
                ? n.studentt.pdf(r, e)
                : t.abs(r) < 1e-14
                ? t.exp(
                    n.gammaln((e + 1) / 2) -
                      (o * o) / 2 -
                      0.5 * t.log(t.PI * e) -
                      n.gammaln(e / 2),
                  )
                : (e / r) *
                  (n.noncentralt.cdf(r * t.sqrt(1 + 2 / e), e + 2, o) -
                    n.noncentralt.cdf(r, e, o));
            },
            cdf: function (r, e, o) {
              if (t.abs(o) < 1e-14) return n.studentt.cdf(r, e);
              var i = !1;
              r < 0 && ((i = !0), (o = -o));
              for (
                var u = n.normal.cdf(-o, 0, 1),
                  a = 1e-14 + 1,
                  f = a,
                  c = (r * r) / (r * r + e),
                  s = 0,
                  l = t.exp((-o * o) / 2),
                  p = t.exp((-o * o) / 2 - 0.5 * t.log(2) - n.gammaln(1.5)) * o;
                s < 200 || f > 1e-14 || a > 1e-14;

              )
                (f = a),
                  s > 0 &&
                    ((l *= (o * o) / (2 * s)),
                    (p *= (o * o) / (2 * (s + 0.5)))),
                  (u +=
                    0.5 *
                    (a =
                      l * n.beta.cdf(c, s + 0.5, e / 2) +
                      p * n.beta.cdf(c, s + 1, e / 2))),
                  s++;
              return i ? 1 - u : u;
            },
          }),
          n.extend(n.normal, {
            pdf: function (n, r, e) {
              return t.exp(
                -0.5 * t.log(2 * t.PI) -
                  t.log(e) -
                  t.pow(n - r, 2) / (2 * e * e),
              );
            },
            cdf: function (r, e, o) {
              return 0.5 * (1 + n.erf((r - e) / t.sqrt(2 * o * o)));
            },
            inv: function (t, r, e) {
              return -1.4142135623730951 * e * n.erfcinv(2 * t) + r;
            },
            mean: function (n) {
              return n;
            },
            median: function (n) {
              return n;
            },
            mode: function (n) {
              return n;
            },
            sample: function (t, r) {
              return n.randn() * r + t;
            },
            variance: function (n, t) {
              return t * t;
            },
          }),
          n.extend(n.pareto, {
            pdf: function (n, r, e) {
              return n < r ? 0 : (e * t.pow(r, e)) / t.pow(n, e + 1);
            },
            cdf: function (n, r, e) {
              return n < r ? 0 : 1 - t.pow(r / n, e);
            },
            inv: function (n, r, e) {
              return r / t.pow(1 - n, 1 / e);
            },
            mean: function (n, r) {
              if (!(r <= 1)) return (r * t.pow(n, r)) / (r - 1);
            },
            median: function (n, r) {
              return n * (r * t.SQRT2);
            },
            mode: function (n) {
              return n;
            },
            variance: function (n, r) {
              if (!(r <= 2)) return (n * n * r) / (t.pow(r - 1, 2) * (r - 2));
            },
          }),
          n.extend(n.studentt, {
            pdf: function (r, e) {
              return (
                (e = e > 1e100 ? 1e100 : e),
                (1 / (t.sqrt(e) * n.betafn(0.5, e / 2))) *
                  t.pow(1 + (r * r) / e, -(e + 1) / 2)
              );
            },
            cdf: function (r, e) {
              var o = e / 2;
              return n.ibeta(
                (r + t.sqrt(r * r + e)) / (2 * t.sqrt(r * r + e)),
                o,
                o,
              );
            },
            inv: function (r, e) {
              var o = n.ibetainv(2 * t.min(r, 1 - r), 0.5 * e, 0.5);
              return (o = t.sqrt((e * (1 - o)) / o)), r > 0.5 ? o : -o;
            },
            mean: function (n) {
              return n > 1 ? 0 : void 0;
            },
            median: function () {
              return 0;
            },
            mode: function () {
              return 0;
            },
            sample: function (r) {
              return n.randn() * t.sqrt(r / (2 * n.randg(r / 2)));
            },
            variance: function (n) {
              return n > 2 ? n / (n - 2) : n > 1 ? 1 / 0 : void 0;
            },
          }),
          n.extend(n.weibull, {
            pdf: function (n, r, e) {
              return n < 0 || r < 0 || e < 0
                ? 0
                : (e / r) * t.pow(n / r, e - 1) * t.exp(-t.pow(n / r, e));
            },
            cdf: function (n, r, e) {
              return n < 0 ? 0 : 1 - t.exp(-t.pow(n / r, e));
            },
            inv: function (n, r, e) {
              return r * t.pow(-t.log(1 - n), 1 / e);
            },
            mean: function (t, r) {
              return t * n.gammafn(1 + 1 / r);
            },
            median: function (n, r) {
              return n * t.pow(t.log(2), 1 / r);
            },
            mode: function (n, r) {
              return r <= 1 ? 0 : n * t.pow((r - 1) / r, 1 / r);
            },
            sample: function (r, e) {
              return r * t.pow(-t.log(n._random_fn()), 1 / e);
            },
            variance: function (r, e) {
              return (
                r * r * n.gammafn(1 + 2 / e) - t.pow(n.weibull.mean(r, e), 2)
              );
            },
          }),
          n.extend(n.uniform, {
            pdf: function (n, t, r) {
              return n < t || n > r ? 0 : 1 / (r - t);
            },
            cdf: function (n, t, r) {
              return n < t ? 0 : n < r ? (n - t) / (r - t) : 1;
            },
            inv: function (n, t, r) {
              return t + n * (r - t);
            },
            mean: function (n, t) {
              return 0.5 * (n + t);
            },
            median: function (t, r) {
              return n.mean(t, r);
            },
            mode: function () {
              throw new Error("mode is not yet implemented");
            },
            sample: function (t, r) {
              return t / 2 + r / 2 + (r / 2 - t / 2) * (2 * n._random_fn() - 1);
            },
            variance: function (n, r) {
              return t.pow(r - n, 2) / 12;
            },
          }),
          n.extend(n.binomial, {
            pdf: function (r, e, o) {
              return 0 === o || 1 === o
                ? e * o === r
                  ? 1
                  : 0
                : n.combination(e, r) * t.pow(o, r) * t.pow(1 - o, e - r);
            },
            cdf: function (e, o, i) {
              var u;
              if (e < 0) return 0;
              if (e >= o) return 1;
              if (i < 0 || i > 1 || o <= 0) return NaN;
              var a = i,
                f = (e = t.floor(e)) + 1,
                c = o - e,
                s = f + c,
                l = t.exp(
                  n.gammaln(s) -
                    n.gammaln(c) -
                    n.gammaln(f) +
                    f * t.log(a) +
                    c * t.log(1 - a),
                );
              return (
                (u =
                  a < (f + 1) / (s + 2)
                    ? l * r(a, f, c, 1e-10)
                    : 1 - l * r(1 - a, c, f, 1e-10)),
                t.round((1 / 1e-10) * (1 - u)) / (1 / 1e-10)
              );
            },
          }),
          n.extend(n.negbin, {
            pdf: function (r, e, o) {
              return (
                r === r >>> 0 &&
                (r < 0
                  ? 0
                  : n.combination(r + e - 1, e - 1) *
                    t.pow(1 - o, r) *
                    t.pow(o, e))
              );
            },
            cdf: function (t, r, e) {
              var o = 0,
                i = 0;
              if (t < 0) return 0;
              for (; i <= t; i++) o += n.negbin.pdf(i, r, e);
              return o;
            },
          }),
          n.extend(n.hypgeom, {
            pdf: function (r, e, o, i) {
              if ((r != r) | 0) return !1;
              if (r < 0 || r < o - (e - i)) return 0;
              if (r > i || r > o) return 0;
              if (2 * o > e)
                return 2 * i > e
                  ? n.hypgeom.pdf(e - o - i + r, e, e - o, e - i)
                  : n.hypgeom.pdf(i - r, e, e - o, i);
              if (2 * i > e) return n.hypgeom.pdf(o - r, e, o, e - i);
              if (o < i) return n.hypgeom.pdf(r, e, i, o);
              for (var u = 1, a = 0, f = 0; f < r; f++) {
                for (; u > 1 && a < i; ) (u *= 1 - o / (e - a)), a++;
                u *= ((i - f) * (o - f)) / ((f + 1) * (e - o - i + f + 1));
              }
              for (; a < i; a++) u *= 1 - o / (e - a);
              return t.min(1, t.max(0, u));
            },
            cdf: function (r, e, o, i) {
              if (r < 0 || r < o - (e - i)) return 0;
              if (r >= i || r >= o) return 1;
              if (2 * o > e)
                return 2 * i > e
                  ? n.hypgeom.cdf(e - o - i + r, e, e - o, e - i)
                  : 1 - n.hypgeom.cdf(i - r - 1, e, e - o, i);
              if (2 * i > e) return 1 - n.hypgeom.cdf(o - r - 1, e, o, e - i);
              if (o < i) return n.hypgeom.cdf(r, e, i, o);
              for (var u = 1, a = 1, f = 0, c = 0; c < r; c++) {
                for (; u > 1 && f < i; ) {
                  var s = 1 - o / (e - f);
                  (a *= s), (u *= s), f++;
                }
                u += a *= ((i - c) * (o - c)) / ((c + 1) * (e - o - i + c + 1));
              }
              for (; f < i; f++) u *= 1 - o / (e - f);
              return t.min(1, t.max(0, u));
            },
          }),
          n.extend(n.poisson, {
            pdf: function (r, e) {
              return e < 0 || r % 1 != 0 || r < 0
                ? 0
                : (t.pow(e, r) * t.exp(-e)) / n.factorial(r);
            },
            cdf: function (t, r) {
              var e = [],
                o = 0;
              if (t < 0) return 0;
              for (; o <= t; o++) e.push(n.poisson.pdf(o, r));
              return n.sum(e);
            },
            mean: function (n) {
              return n;
            },
            variance: function (n) {
              return n;
            },
            sampleSmall: function (r) {
              var e = 1,
                o = 0,
                i = t.exp(-r);
              do {
                o++, (e *= n._random_fn());
              } while (e > i);
              return o - 1;
            },
            sampleLarge: function (r) {
              var e,
                o,
                i,
                u,
                a,
                f,
                c,
                s,
                l,
                p,
                v = r;
              for (
                u = t.sqrt(v),
                  a = t.log(v),
                  f = 0.02483 * (c = 0.931 + 2.53 * u) - 0.059,
                  s = 1.1239 + 1.1328 / (c - 3.4),
                  l = 0.9277 - 3.6224 / (c - 2);
                ;

              ) {
                if (
                  ((o = t.random() - 0.5),
                  (i = t.random()),
                  (p = 0.5 - t.abs(o)),
                  (e = t.floor(((2 * f) / p + c) * o + v + 0.43)),
                  p >= 0.07 && i <= l)
                )
                  return e;
                if (
                  !(e < 0 || (p < 0.013 && i > p)) &&
                  t.log(i) + t.log(s) - t.log(f / (p * p) + c) <=
                    e * a - v - n.loggam(e + 1)
                )
                  return e;
              }
            },
            sample: function (n) {
              return n < 10 ? this.sampleSmall(n) : this.sampleLarge(n);
            },
          }),
          n.extend(n.triangular, {
            pdf: function (n, t, r, e) {
              return r <= t || e < t || e > r
                ? NaN
                : n < t || n > r
                ? 0
                : n < e
                ? (2 * (n - t)) / ((r - t) * (e - t))
                : n === e
                ? 2 / (r - t)
                : (2 * (r - n)) / ((r - t) * (r - e));
            },
            cdf: function (n, r, e, o) {
              return e <= r || o < r || o > e
                ? NaN
                : n <= r
                ? 0
                : n >= e
                ? 1
                : n <= o
                ? t.pow(n - r, 2) / ((e - r) * (o - r))
                : 1 - t.pow(e - n, 2) / ((e - r) * (e - o));
            },
            inv: function (n, r, e, o) {
              return e <= r || o < r || o > e
                ? NaN
                : n <= (o - r) / (e - r)
                ? r + (e - r) * t.sqrt(n * ((o - r) / (e - r)))
                : r + (e - r) * (1 - t.sqrt((1 - n) * (1 - (o - r) / (e - r))));
            },
            mean: function (n, t, r) {
              return (n + t + r) / 3;
            },
            median: function (n, r, e) {
              return e <= (n + r) / 2
                ? r - t.sqrt((r - n) * (r - e)) / t.sqrt(2)
                : e > (n + r) / 2
                ? n + t.sqrt((r - n) * (e - n)) / t.sqrt(2)
                : void 0;
            },
            mode: function (n, t, r) {
              return r;
            },
            sample: function (r, e, o) {
              var i = n._random_fn();
              return i < (o - r) / (e - r)
                ? r + t.sqrt(i * (e - r) * (o - r))
                : e - t.sqrt((1 - i) * (e - r) * (e - o));
            },
            variance: function (n, t, r) {
              return (n * n + t * t + r * r - n * t - n * r - t * r) / 18;
            },
          }),
          n.extend(n.arcsine, {
            pdf: function (n, r, e) {
              return e <= r
                ? NaN
                : n <= r || n >= e
                ? 0
                : (2 / t.PI) *
                  t.pow(t.pow(e - r, 2) - t.pow(2 * n - r - e, 2), -0.5);
            },
            cdf: function (n, r, e) {
              return n < r
                ? 0
                : n < e
                ? (2 / t.PI) * t.asin(t.sqrt((n - r) / (e - r)))
                : 1;
            },
            inv: function (n, r, e) {
              return r + (0.5 - 0.5 * t.cos(t.PI * n)) * (e - r);
            },
            mean: function (n, t) {
              return t <= n ? NaN : (n + t) / 2;
            },
            median: function (n, t) {
              return t <= n ? NaN : (n + t) / 2;
            },
            mode: function () {
              throw new Error("mode is not yet implemented");
            },
            sample: function (r, e) {
              return (
                (r + e) / 2 +
                ((e - r) / 2) * t.sin(2 * t.PI * n.uniform.sample(0, 1))
              );
            },
            variance: function (n, r) {
              return r <= n ? NaN : t.pow(r - n, 2) / 8;
            },
          }),
          n.extend(n.laplace, {
            pdf: function (n, r, e) {
              return e <= 0 ? 0 : t.exp(-t.abs(n - r) / e) / (2 * e);
            },
            cdf: function (n, r, e) {
              return e <= 0
                ? 0
                : n < r
                ? 0.5 * t.exp((n - r) / e)
                : 1 - 0.5 * t.exp(-(n - r) / e);
            },
            mean: function (n) {
              return n;
            },
            median: function (n) {
              return n;
            },
            mode: function (n) {
              return n;
            },
            variance: function (n, t) {
              return 2 * t * t;
            },
            sample: function (r, e) {
              var o,
                i = n._random_fn() - 0.5;
              return r - e * ((o = i) / t.abs(o)) * t.log(1 - 2 * t.abs(i));
            },
          }),
          n.extend(n.tukey, {
            cdf: function (r, o, i) {
              var u = o,
                a = [
                  0.9894009349916499, 0.9445750230732326, 0.8656312023878318,
                  0.755404408355003, 0.6178762444026438, 0.45801677765722737,
                  0.2816035507792589, 0.09501250983763744,
                ],
                f = [
                  0.027152459411754096, 0.062253523938647894,
                  0.09515851168249279, 0.12462897125553388, 0.14959598881657674,
                  0.16915651939500254, 0.18260341504492358, 0.1894506104550685,
                ];
              if (r <= 0) return 0;
              if (i < 2 || u < 2) return NaN;
              if (!Number.isFinite(r)) return 1;
              if (i > 25e3) return e(r, 1, u);
              var c,
                s = 0.5 * i,
                l = s * t.log(i) - i * t.log(2) - n.gammaln(s),
                p = s - 1,
                v = 0.25 * i;
              (c = i <= 100 ? 1 : i <= 800 ? 0.5 : i <= 5e3 ? 0.25 : 0.125),
                (l += t.log(c));
              for (var d = 0, g = 1; g <= 50; g++) {
                for (var m = 0, h = (2 * g - 1) * c, y = 1; y <= 16; y++) {
                  var b, w;
                  8 < y
                    ? ((b = y - 8 - 1),
                      (w = l + p * t.log(h + a[b] * c) - (a[b] * c + h) * v))
                    : ((b = y - 1),
                      (w = l + p * t.log(h - a[b] * c) + (a[b] * c - h) * v)),
                    w >= -30 &&
                      (m +=
                        e(
                          8 < y
                            ? r * t.sqrt(0.5 * (a[b] * c + h))
                            : r * t.sqrt(0.5 * (-a[b] * c + h)),
                          1,
                          u,
                        ) *
                        f[b] *
                        t.exp(w));
                }
                if (g * c >= 1 && m <= 1e-14) break;
                d += m;
              }
              if (m > 1e-14) throw new Error("tukey.cdf failed to converge");
              return d > 1 && (d = 1), d;
            },
            inv: function (r, e, o) {
              if (o < 2 || e < 2) return NaN;
              if (r < 0 || r > 1) return NaN;
              if (0 === r) return 0;
              if (1 === r) return 1 / 0;
              var i,
                u = (function (n, r, e) {
                  var o = 0.5 - 0.5 * n,
                    i = t.sqrt(t.log(1 / (o * o))),
                    u =
                      i +
                      ((((-453642210148e-16 * i - 0.204231210125) * i -
                        0.342242088547) *
                        i -
                        1) *
                        i +
                        0.322232421088) /
                        ((((0.0038560700634 * i + 0.10353775285) * i +
                          0.531103462366) *
                          i +
                          0.588581570495) *
                          i +
                          0.099348462606);
                  e < 120 && (u += (u * u * u + u) / e / 4);
                  var a = 0.8832 - 0.2368 * u;
                  return (
                    e < 120 && (a += -1.214 / e + (1.208 * u) / e),
                    u * (a * t.log(r - 1) + 1.4142)
                  );
                })(r, e, o),
                a = n.tukey.cdf(u, e, o) - r;
              i = a > 0 ? t.max(0, u - 1) : u + 1;
              for (var f, c = n.tukey.cdf(i, e, o) - r, s = 1; s < 50; s++)
                if (
                  ((f = i - (c * (i - u)) / (c - a)),
                  (a = c),
                  (u = i),
                  f < 0 && ((f = 0), (c = -r)),
                  (c = n.tukey.cdf(f, e, o) - r),
                  (i = f),
                  t.abs(i - u) < 1e-4)
                )
                  return f;
              throw new Error("tukey.inv failed to converge");
            },
          });
      })(e, Math),
      (function (n, t) {
        var r,
          e,
          o = Array.prototype.push,
          i = n.utils.isArray;
        function u(t) {
          return i(t) || t instanceof n;
        }
        n.extend({
          add: function (t, r) {
            return u(r)
              ? (u(r[0]) || (r = [r]),
                n.map(t, function (n, t, e) {
                  return n + r[t][e];
                }))
              : n.map(t, function (n) {
                  return n + r;
                });
          },
          subtract: function (t, r) {
            return u(r)
              ? (u(r[0]) || (r = [r]),
                n.map(t, function (n, t, e) {
                  return n - r[t][e] || 0;
                }))
              : n.map(t, function (n) {
                  return n - r;
                });
          },
          divide: function (t, r) {
            return u(r)
              ? (u(r[0]) || (r = [r]), n.multiply(t, n.inv(r)))
              : n.map(t, function (n) {
                  return n / r;
                });
          },
          multiply: function (t, r) {
            var e, o, i, a, f, c, s, l;
            if (void 0 === t.length && void 0 === r.length) return t * r;
            if (
              ((f = t.length),
              (c = t[0].length),
              (s = n.zeros(f, (i = u(r) ? r[0].length : c))),
              (l = 0),
              u(r))
            ) {
              for (; l < i; l++)
                for (e = 0; e < f; e++) {
                  for (a = 0, o = 0; o < c; o++) a += t[e][o] * r[o][l];
                  s[e][l] = a;
                }
              return 1 === f && 1 === l ? s[0][0] : s;
            }
            return n.map(t, function (n) {
              return n * r;
            });
          },
          outer: function (t, r) {
            return n.multiply(
              t.map(function (n) {
                return [n];
              }),
              [r],
            );
          },
          dot: function (t, r) {
            u(t[0]) || (t = [t]), u(r[0]) || (r = [r]);
            for (
              var e,
                o,
                i = 1 === t[0].length && 1 !== t.length ? n.transpose(t) : t,
                a = 1 === r[0].length && 1 !== r.length ? n.transpose(r) : r,
                f = [],
                c = 0,
                s = i.length,
                l = i[0].length;
              c < s;
              c++
            ) {
              for (f[c] = [], e = 0, o = 0; o < l; o++) e += i[c][o] * a[c][o];
              f[c] = e;
            }
            return 1 === f.length ? f[0] : f;
          },
          pow: function (r, e) {
            return n.map(r, function (n) {
              return t.pow(n, e);
            });
          },
          exp: function (r) {
            return n.map(r, function (n) {
              return t.exp(n);
            });
          },
          log: function (r) {
            return n.map(r, function (n) {
              return t.log(n);
            });
          },
          abs: function (r) {
            return n.map(r, function (n) {
              return t.abs(n);
            });
          },
          norm: function (n, r) {
            var e = 0,
              o = 0;
            for (isNaN(r) && (r = 2), u(n[0]) && (n = n[0]); o < n.length; o++)
              e += t.pow(t.abs(n[o]), r);
            return t.pow(e, 1 / r);
          },
          angle: function (r, e) {
            return t.acos(n.dot(r, e) / (n.norm(r) * n.norm(e)));
          },
          aug: function (n, t) {
            var r,
              e = [];
            for (r = 0; r < n.length; r++) e.push(n[r].slice());
            for (r = 0; r < e.length; r++) o.apply(e[r], t[r]);
            return e;
          },
          inv: function (t) {
            for (
              var r,
                e = t.length,
                o = t[0].length,
                i = n.identity(e, o),
                u = n.gauss_jordan(t, i),
                a = [],
                f = 0;
              f < e;
              f++
            )
              for (a[f] = [], r = o; r < u[0].length; r++)
                a[f][r - o] = u[f][r];
            return a;
          },
          det: function (n) {
            var t,
              r = n.length,
              e = 2 * r,
              o = new Array(e),
              i = r - 1,
              u = e - 1,
              a = i - r + 1,
              f = u,
              c = 0,
              s = 0;
            if (2 === r) return n[0][0] * n[1][1] - n[0][1] * n[1][0];
            for (; c < e; c++) o[c] = 1;
            for (c = 0; c < r; c++) {
              for (t = 0; t < r; t++)
                (o[a < 0 ? a + r : a] *= n[c][t]),
                  (o[f < r ? f + r : f] *= n[c][t]),
                  a++,
                  f--;
              (a = --i - r + 1), (f = --u);
            }
            for (c = 0; c < r; c++) s += o[c];
            for (; c < e; c++) s -= o[c];
            return s;
          },
          gauss_elimination: function (r, e) {
            var o,
              i,
              u,
              a,
              f = 0,
              c = 0,
              s = r.length,
              l = r[0].length,
              p = 1,
              v = 0,
              d = [];
            for (o = (r = n.aug(r, e))[0].length, f = 0; f < s; f++) {
              for (i = r[f][f], c = f, a = f + 1; a < l; a++)
                i < t.abs(r[a][f]) && ((i = r[a][f]), (c = a));
              if (c != f)
                for (a = 0; a < o; a++)
                  (u = r[f][a]), (r[f][a] = r[c][a]), (r[c][a] = u);
              for (c = f + 1; c < s; c++)
                for (p = r[c][f] / r[f][f], a = f; a < o; a++)
                  r[c][a] = r[c][a] - p * r[f][a];
            }
            for (f = s - 1; f >= 0; f--) {
              for (v = 0, c = f + 1; c <= s - 1; c++) v += d[c] * r[f][c];
              d[f] = (r[f][o - 1] - v) / r[f][f];
            }
            return d;
          },
          gauss_jordan: function (r, e) {
            var o,
              i,
              u,
              a = n.aug(r, e),
              f = a.length,
              c = a[0].length,
              s = 0;
            for (i = 0; i < f; i++) {
              var l = i;
              for (u = i + 1; u < f; u++)
                t.abs(a[u][i]) > t.abs(a[l][i]) && (l = u);
              var p = a[i];
              for (a[i] = a[l], a[l] = p, u = i + 1; u < f; u++)
                for (s = a[u][i] / a[i][i], o = i; o < c; o++)
                  a[u][o] -= a[i][o] * s;
            }
            for (i = f - 1; i >= 0; i--) {
              for (s = a[i][i], u = 0; u < i; u++)
                for (o = c - 1; o > i - 1; o--)
                  a[u][o] -= (a[i][o] * a[u][i]) / s;
              for (a[i][i] /= s, o = f; o < c; o++) a[i][o] /= s;
            }
            return a;
          },
          triaUpSolve: function (t, r) {
            var e,
              o = t[0].length,
              i = n.zeros(1, o)[0],
              u = !1;
            return (
              null != r[0].length &&
                ((r = r.map(function (n) {
                  return n[0];
                })),
                (u = !0)),
              n.arange(o - 1, -1, -1).forEach(function (u) {
                (e = n.arange(u + 1, o).map(function (n) {
                  return i[n] * t[u][n];
                })),
                  (i[u] = (r[u] - n.sum(e)) / t[u][u]);
              }),
              u
                ? i.map(function (n) {
                    return [n];
                  })
                : i
            );
          },
          triaLowSolve: function (t, r) {
            var e,
              o = t[0].length,
              i = n.zeros(1, o)[0],
              u = !1;
            return (
              null != r[0].length &&
                ((r = r.map(function (n) {
                  return n[0];
                })),
                (u = !0)),
              n.arange(o).forEach(function (o) {
                (e = n.arange(o).map(function (n) {
                  return t[o][n] * i[n];
                })),
                  (i[o] = (r[o] - n.sum(e)) / t[o][o]);
              }),
              u
                ? i.map(function (n) {
                    return [n];
                  })
                : i
            );
          },
          lu: function (t) {
            var r,
              e = t.length,
              o = n.identity(e),
              i = n.zeros(t.length, t[0].length);
            return (
              n.arange(e).forEach(function (n) {
                i[0][n] = t[0][n];
              }),
              n.arange(1, e).forEach(function (u) {
                n.arange(u).forEach(function (e) {
                  (r = n.arange(e).map(function (n) {
                    return o[u][n] * i[n][e];
                  })),
                    (o[u][e] = (t[u][e] - n.sum(r)) / i[e][e]);
                }),
                  n.arange(u, e).forEach(function (e) {
                    (r = n.arange(u).map(function (n) {
                      return o[u][n] * i[n][e];
                    })),
                      (i[u][e] = t[r.length][e] - n.sum(r));
                  });
              }),
              [o, i]
            );
          },
          cholesky: function (r) {
            var e,
              o = r.length,
              i = n.zeros(r.length, r[0].length);
            return (
              n.arange(o).forEach(function (u) {
                (e = n.arange(u).map(function (n) {
                  return t.pow(i[u][n], 2);
                })),
                  (i[u][u] = t.sqrt(r[u][u] - n.sum(e))),
                  n.arange(u + 1, o).forEach(function (t) {
                    (e = n.arange(u).map(function (n) {
                      return i[u][n] * i[t][n];
                    })),
                      (i[t][u] = (r[u][t] - n.sum(e)) / i[u][u]);
                  });
              }),
              i
            );
          },
          gauss_jacobi: function (r, e, o, i) {
            for (
              var u,
                a,
                f,
                c,
                s = 0,
                l = 0,
                p = r.length,
                v = [],
                d = [],
                g = [];
              s < p;
              s++
            )
              for (v[s] = [], d[s] = [], g[s] = [], l = 0; l < p; l++)
                s > l
                  ? ((v[s][l] = r[s][l]), (d[s][l] = g[s][l] = 0))
                  : s < l
                  ? ((d[s][l] = r[s][l]), (v[s][l] = g[s][l] = 0))
                  : ((g[s][l] = r[s][l]), (v[s][l] = d[s][l] = 0));
            for (
              f = n.multiply(n.multiply(n.inv(g), n.add(v, d)), -1),
                a = n.multiply(n.inv(g), e),
                u = o,
                c = n.add(n.multiply(f, o), a),
                s = 2;
              t.abs(n.norm(n.subtract(c, u))) > i;

            )
              (u = c), (c = n.add(n.multiply(f, u), a)), s++;
            return c;
          },
          gauss_seidel: function (r, e, o, i) {
            for (
              var u, a, f, c, s, l = 0, p = r.length, v = [], d = [], g = [];
              l < p;
              l++
            )
              for (v[l] = [], d[l] = [], g[l] = [], u = 0; u < p; u++)
                l > u
                  ? ((v[l][u] = r[l][u]), (d[l][u] = g[l][u] = 0))
                  : l < u
                  ? ((d[l][u] = r[l][u]), (v[l][u] = g[l][u] = 0))
                  : ((g[l][u] = r[l][u]), (v[l][u] = d[l][u] = 0));
            for (
              c = n.multiply(n.multiply(n.inv(n.add(g, v)), d), -1),
                f = n.multiply(n.inv(n.add(g, v)), e),
                a = o,
                s = n.add(n.multiply(c, o), f),
                l = 2;
              t.abs(n.norm(n.subtract(s, a))) > i;

            )
              (a = s), (s = n.add(n.multiply(c, a), f)), (l += 1);
            return s;
          },
          SOR: function (r, e, o, i, u) {
            for (
              var a, f, c, s, l, p = 0, v = r.length, d = [], g = [], m = [];
              p < v;
              p++
            )
              for (d[p] = [], g[p] = [], m[p] = [], a = 0; a < v; a++)
                p > a
                  ? ((d[p][a] = r[p][a]), (g[p][a] = m[p][a] = 0))
                  : p < a
                  ? ((g[p][a] = r[p][a]), (d[p][a] = m[p][a] = 0))
                  : ((m[p][a] = r[p][a]), (d[p][a] = g[p][a] = 0));
            for (
              s = n.multiply(
                n.inv(n.add(m, n.multiply(d, u))),
                n.subtract(n.multiply(m, 1 - u), n.multiply(g, u)),
              ),
                c = n.multiply(
                  n.multiply(n.inv(n.add(m, n.multiply(d, u))), e),
                  u,
                ),
                f = o,
                l = n.add(n.multiply(s, o), c),
                p = 2;
              t.abs(n.norm(n.subtract(l, f))) > i;

            )
              (f = l), (l = n.add(n.multiply(s, f), c)), p++;
            return l;
          },
          householder: function (r) {
            for (
              var e,
                o,
                i,
                u,
                a = r.length,
                f = r[0].length,
                c = 0,
                s = [],
                l = [];
              c < a - 1;
              c++
            ) {
              for (e = 0, u = c + 1; u < f; u++) e += r[u][c] * r[u][c];
              for (
                e = (r[c + 1][c] > 0 ? -1 : 1) * t.sqrt(e),
                  o = t.sqrt((e * e - r[c + 1][c] * e) / 2),
                  (s = n.zeros(a, 1))[c + 1][0] = (r[c + 1][c] - e) / (2 * o),
                  i = c + 2;
                i < a;
                i++
              )
                s[i][0] = r[i][c] / (2 * o);
              (l = n.subtract(
                n.identity(a, f),
                n.multiply(n.multiply(s, n.transpose(s)), 2),
              )),
                (r = n.multiply(l, n.multiply(r, l)));
            }
            return r;
          },
          QR:
            ((r = n.sum),
            (e = n.arange),
            function (o) {
              var i,
                u,
                a,
                f = o.length,
                c = o[0].length,
                s = n.zeros(c, c);
              for (o = n.copy(o), u = 0; u < c; u++) {
                for (
                  s[u][u] = t.sqrt(
                    r(
                      e(f).map(function (n) {
                        return o[n][u] * o[n][u];
                      }),
                    ),
                  ),
                    i = 0;
                  i < f;
                  i++
                )
                  o[i][u] = o[i][u] / s[u][u];
                for (a = u + 1; a < c; a++)
                  for (
                    s[u][a] = r(
                      e(f).map(function (n) {
                        return o[n][u] * o[n][a];
                      }),
                    ),
                      i = 0;
                    i < f;
                    i++
                  )
                    o[i][a] = o[i][a] - o[i][u] * s[u][a];
              }
              return [o, s];
            }),
          lstsq: function (t, r) {
            var e = !1;
            void 0 === r[0].length &&
              ((r = r.map(function (n) {
                return [n];
              })),
              (e = !0));
            var o = n.QR(t),
              i = o[0],
              u = o[1],
              a = t[0].length,
              f = n.slice(i, { col: { end: a } }),
              c = (function (t) {
                var r = (t = n.copy(t)).length,
                  e = n.identity(r);
                return (
                  n.arange(r - 1, -1, -1).forEach(function (r) {
                    n.sliceAssign(
                      e,
                      { row: r },
                      n.divide(n.slice(e, { row: r }), t[r][r]),
                    ),
                      n.sliceAssign(
                        t,
                        { row: r },
                        n.divide(n.slice(t, { row: r }), t[r][r]),
                      ),
                      n.arange(r).forEach(function (o) {
                        var i = n.multiply(t[o][r], -1),
                          u = n.slice(t, { row: o }),
                          a = n.multiply(n.slice(t, { row: r }), i);
                        n.sliceAssign(t, { row: o }, n.add(u, a));
                        var f = n.slice(e, { row: o }),
                          c = n.multiply(n.slice(e, { row: r }), i);
                        n.sliceAssign(e, { row: o }, n.add(f, c));
                      });
                  }),
                  e
                );
              })(n.slice(u, { row: { end: a } })),
              s = n.transpose(f);
            void 0 === s[0].length && (s = [s]);
            var l = n.multiply(n.multiply(c, s), r);
            return (
              void 0 === l.length && (l = [[l]]),
              e
                ? l.map(function (n) {
                    return n[0];
                  })
                : l
            );
          },
          jacobi: function (r) {
            for (
              var e,
                o,
                i,
                u,
                a,
                f,
                c,
                s = 1,
                l = r.length,
                p = n.identity(l, l),
                v = [];
              1 === s;

            ) {
              for (a = r[0][1], i = 0, u = 1, e = 0; e < l; e++)
                for (o = 0; o < l; o++)
                  e != o &&
                    a < t.abs(r[e][o]) &&
                    ((a = t.abs(r[e][o])), (i = e), (u = o));
              for (
                f =
                  r[i][i] === r[u][u]
                    ? r[i][u] > 0
                      ? t.PI / 4
                      : -t.PI / 4
                    : t.atan((2 * r[i][u]) / (r[i][i] - r[u][u])) / 2,
                  (c = n.identity(l, l))[i][i] = t.cos(f),
                  c[i][u] = -t.sin(f),
                  c[u][i] = t.sin(f),
                  c[u][u] = t.cos(f),
                  p = n.multiply(p, c),
                  r = n.multiply(n.multiply(n.inv(c), r), c),
                  s = 0,
                  e = 1;
                e < l;
                e++
              )
                for (o = 1; o < l; o++)
                  e != o && t.abs(r[e][o]) > 0.001 && (s = 1);
            }
            for (e = 0; e < l; e++) v.push(r[e][e]);
            return [p, v];
          },
          rungekutta: function (n, t, r, e, o, i) {
            var u, a, f;
            if (2 === i)
              for (; e <= r; )
                (o += ((u = t * n(e, o)) + (a = t * n(e + t, o + u))) / 2),
                  (e += t);
            if (4 === i)
              for (; e <= r; )
                (o +=
                  ((u = t * n(e, o)) +
                    2 * (a = t * n(e + t / 2, o + u / 2)) +
                    2 * (f = t * n(e + t / 2, o + a / 2)) +
                    t * n(e + t, o + f)) /
                  6),
                  (e += t);
            return o;
          },
          romberg: function (n, r, e, o) {
            for (
              var i, u, a, f, c, s = 0, l = (e - r) / 2, p = [], v = [], d = [];
              s < o / 2;

            ) {
              for (c = n(r), a = r, f = 0; a <= e; a += l, f++) p[f] = a;
              for (i = p.length, a = 1; a < i - 1; a++)
                c += (a % 2 != 0 ? 4 : 2) * n(p[a]);
              (c = (l / 3) * (c + n(e))), (d[s] = c), (l /= 2), s++;
            }
            for (u = d.length, i = 1; 1 !== u; ) {
              for (a = 0; a < u - 1; a++)
                v[a] = (t.pow(4, i) * d[a + 1] - d[a]) / (t.pow(4, i) - 1);
              (u = v.length), (d = v), (v = []), i++;
            }
            return d;
          },
          richardson: function (n, r, e, o) {
            function i(n, t) {
              for (var r, e = 0, o = n.length; e < o; e++)
                n[e] === t && (r = e);
              return r;
            }
            for (
              var u,
                a,
                f,
                c,
                s,
                l = t.abs(e - n[i(n, e) + 1]),
                p = 0,
                v = [],
                d = [];
              o >= l;

            )
              (u = i(n, e + o)),
                (a = i(n, e)),
                (v[p] = (r[u] - 2 * r[a] + r[2 * a - u]) / (o * o)),
                (o /= 2),
                p++;
            for (c = v.length, f = 1; 1 != c; ) {
              for (s = 0; s < c - 1; s++)
                d[s] = (t.pow(4, f) * v[s + 1] - v[s]) / (t.pow(4, f) - 1);
              (c = d.length), (v = d), (d = []), f++;
            }
            return v;
          },
          simpson: function (n, t, r, e) {
            for (
              var o, i = (r - t) / e, u = n(t), a = [], f = t, c = 0, s = 1;
              f <= r;
              f += i, c++
            )
              a[c] = f;
            for (o = a.length; s < o - 1; s++)
              u += (s % 2 != 0 ? 4 : 2) * n(a[s]);
            return (i / 3) * (u + n(r));
          },
          hermite: function (n, t, r, e) {
            for (
              var o, i = n.length, u = 0, a = 0, f = [], c = [], s = [], l = [];
              a < i;
              a++
            ) {
              for (f[a] = 1, o = 0; o < i; o++)
                a != o && (f[a] *= (e - n[o]) / (n[a] - n[o]));
              for (c[a] = 0, o = 0; o < i; o++)
                a != o && (c[a] += 1 / (n[a] - n[o]));
              (s[a] = (1 - 2 * (e - n[a]) * c[a]) * (f[a] * f[a])),
                (l[a] = (e - n[a]) * (f[a] * f[a])),
                (u += s[a] * t[a] + l[a] * r[a]);
            }
            return u;
          },
          lagrange: function (n, t, r) {
            for (var e, o, i = 0, u = 0, a = n.length; u < a; u++) {
              for (o = t[u], e = 0; e < a; e++)
                u != e && (o *= (r - n[e]) / (n[u] - n[e]));
              i += o;
            }
            return i;
          },
          cubic_spline: function (t, r, e) {
            for (
              var o,
                i,
                u = t.length,
                a = 0,
                f = [],
                c = [],
                s = [],
                l = [],
                p = [],
                v = [];
              a < u - 1;
              a++
            )
              l[a] = t[a + 1] - t[a];
            for (s[0] = 0, a = 1; a < u - 1; a++)
              s[a] =
                (3 / l[a]) * (r[a + 1] - r[a]) -
                (3 / l[a - 1]) * (r[a] - r[a - 1]);
            for (a = 1; a < u - 1; a++)
              (f[a] = []),
                (c[a] = []),
                (f[a][a - 1] = l[a - 1]),
                (f[a][a] = 2 * (l[a - 1] + l[a])),
                (f[a][a + 1] = l[a]),
                (c[a][0] = s[a]);
            for (i = n.multiply(n.inv(f), c), o = 0; o < u - 1; o++)
              (p[o] =
                (r[o + 1] - r[o]) / l[o] -
                (l[o] * (i[o + 1][0] + 2 * i[o][0])) / 3),
                (v[o] = (i[o + 1][0] - i[o][0]) / (3 * l[o]));
            for (o = 0; o < u && !(t[o] > e); o++);
            return (
              r[(o -= 1)] +
              (e - t[o]) * p[o] +
              n.sq(e - t[o]) * i[o] +
              (e - t[o]) * n.sq(e - t[o]) * v[o]
            );
          },
          gauss_quadrature: function () {
            throw new Error("gauss_quadrature not yet implemented");
          },
          PCA: function (t) {
            var r,
              e,
              o,
              i,
              u,
              a = t.length,
              f = t[0].length,
              c = 0,
              s = [],
              l = [],
              p = [],
              v = [],
              d = [],
              g = [],
              m = [];
            for (c = 0; c < a; c++) s[c] = n.sum(t[c]) / f;
            for (c = 0; c < f; c++)
              for (d[c] = [], r = 0; r < a; r++) d[c][r] = t[r][c] - s[r];
            for (d = n.transpose(d), c = 0; c < a; c++)
              for (g[c] = [], r = 0; r < a; r++)
                g[c][r] = n.dot([d[c]], [d[r]]) / (f - 1);
            for (
              u = (o = n.jacobi(g))[0], l = o[1], m = n.transpose(u), c = 0;
              c < l.length;
              c++
            )
              for (r = c; r < l.length; r++)
                l[c] < l[r] &&
                  ((e = l[c]),
                  (l[c] = l[r]),
                  (l[r] = e),
                  (p = m[c]),
                  (m[c] = m[r]),
                  (m[r] = p));
            for (i = n.transpose(d), c = 0; c < a; c++)
              for (v[c] = [], r = 0; r < i.length; r++)
                v[c][r] = n.dot([m[c]], [i[r]]);
            return [t, l, m, v];
          },
        }),
          (function (t) {
            for (var r = 0; r < t.length; r++)
              !(function (t) {
                n.fn[t] = function (r, e) {
                  var o = this;
                  return e
                    ? (setTimeout(function () {
                        e.call(o, n.fn[t].call(o, r));
                      }, 15),
                      this)
                    : "number" == typeof n[t](this, r)
                    ? n[t](this, r)
                    : n(n[t](this, r));
                };
              })(t[r]);
          })(
            "add divide multiply subtract dot pow exp log abs norm angle".split(
              " ",
            ),
          );
      })(e, Math),
      (function (n, t) {
        var r = [].slice,
          e = n.utils.isNumber,
          o = n.utils.isArray;
        function i(n, r, e, o) {
          if (n > 1 || e > 1 || n <= 0 || e <= 0)
            throw new Error(
              "Proportions should be greater than 0 and less than 1",
            );
          var i = (n * r + e * o) / (r + o);
          return (n - e) / t.sqrt(i * (1 - i) * (1 / r + 1 / o));
        }
        n.extend({
          zscore: function () {
            var t = r.call(arguments);
            return e(t[1])
              ? (t[0] - t[1]) / t[2]
              : (t[0] - n.mean(t[1])) / n.stdev(t[1], t[2]);
          },
          ztest: function () {
            var e,
              i = r.call(arguments);
            return o(i[1])
              ? ((e = n.zscore(i[0], i[1], i[3])),
                1 === i[2]
                  ? n.normal.cdf(-t.abs(e), 0, 1)
                  : 2 * n.normal.cdf(-t.abs(e), 0, 1))
              : i.length > 2
              ? ((e = n.zscore(i[0], i[1], i[2])),
                1 === i[3]
                  ? n.normal.cdf(-t.abs(e), 0, 1)
                  : 2 * n.normal.cdf(-t.abs(e), 0, 1))
              : ((e = i[0]),
                1 === i[1]
                  ? n.normal.cdf(-t.abs(e), 0, 1)
                  : 2 * n.normal.cdf(-t.abs(e), 0, 1));
          },
        }),
          n.extend(n.fn, {
            zscore: function (n, t) {
              return (n - this.mean()) / this.stdev(t);
            },
            ztest: function (r, e, o) {
              var i = t.abs(this.zscore(r, o));
              return 1 === e
                ? n.normal.cdf(-i, 0, 1)
                : 2 * n.normal.cdf(-i, 0, 1);
            },
          }),
          n.extend({
            tscore: function () {
              var e = r.call(arguments);
              return 4 === e.length
                ? (e[0] - e[1]) / (e[2] / t.sqrt(e[3]))
                : (e[0] - n.mean(e[1])) /
                    (n.stdev(e[1], !0) / t.sqrt(e[1].length));
            },
            ttest: function () {
              var o,
                i = r.call(arguments);
              return 5 === i.length
                ? ((o = t.abs(n.tscore(i[0], i[1], i[2], i[3]))),
                  1 === i[4]
                    ? n.studentt.cdf(-o, i[3] - 1)
                    : 2 * n.studentt.cdf(-o, i[3] - 1))
                : e(i[1])
                ? ((o = t.abs(i[0])),
                  1 == i[2]
                    ? n.studentt.cdf(-o, i[1] - 1)
                    : 2 * n.studentt.cdf(-o, i[1] - 1))
                : ((o = t.abs(n.tscore(i[0], i[1]))),
                  1 == i[2]
                    ? n.studentt.cdf(-o, i[1].length - 1)
                    : 2 * n.studentt.cdf(-o, i[1].length - 1));
            },
          }),
          n.extend(n.fn, {
            tscore: function (n) {
              return (n - this.mean()) / (this.stdev(!0) / t.sqrt(this.cols()));
            },
            ttest: function (r, e) {
              return 1 === e
                ? 1 - n.studentt.cdf(t.abs(this.tscore(r)), this.cols() - 1)
                : 2 * n.studentt.cdf(-t.abs(this.tscore(r)), this.cols() - 1);
            },
          }),
          n.extend({
            anovafscore: function () {
              var e,
                o,
                i,
                u,
                a,
                f,
                c,
                s,
                l = r.call(arguments);
              if (1 === l.length) {
                for (a = new Array(l[0].length), c = 0; c < l[0].length; c++)
                  a[c] = l[0][c];
                l = a;
              }
              for (o = new Array(), c = 0; c < l.length; c++)
                o = o.concat(l[c]);
              for (i = n.mean(o), e = 0, c = 0; c < l.length; c++)
                e += l[c].length * t.pow(n.mean(l[c]) - i, 2);
              for (e /= l.length - 1, f = 0, c = 0; c < l.length; c++)
                for (u = n.mean(l[c]), s = 0; s < l[c].length; s++)
                  f += t.pow(l[c][s] - u, 2);
              return e / (f /= o.length - l.length);
            },
            anovaftest: function () {
              var t,
                o,
                i,
                u,
                a = r.call(arguments);
              if (e(a[0])) return 1 - n.centralF.cdf(a[0], a[1], a[2]);
              var f = n.anovafscore(a);
              for (t = a.length - 1, i = 0, u = 0; u < a.length; u++)
                i += a[u].length;
              return (o = i - t - 1), 1 - n.centralF.cdf(f, t, o);
            },
            ftest: function (t, r, e) {
              return 1 - n.centralF.cdf(t, r, e);
            },
          }),
          n.extend(n.fn, {
            anovafscore: function () {
              return n.anovafscore(this.toArray());
            },
            anovaftes: function () {
              var t,
                r = 0;
              for (t = 0; t < this.length; t++) r += this[t].length;
              return n.ftest(
                this.anovafscore(),
                this.length - 1,
                r - this.length,
              );
            },
          }),
          n.extend({
            qscore: function () {
              var o,
                i,
                u,
                a,
                f,
                c = r.call(arguments);
              return (
                e(c[0])
                  ? ((o = c[0]), (i = c[1]), (u = c[2]), (a = c[3]), (f = c[4]))
                  : ((o = n.mean(c[0])),
                    (i = n.mean(c[1])),
                    (u = c[0].length),
                    (a = c[1].length),
                    (f = c[2])),
                t.abs(o - i) / (f * t.sqrt((1 / u + 1 / a) / 2))
              );
            },
            qtest: function () {
              var t,
                e = r.call(arguments);
              3 === e.length
                ? ((t = e[0]), (e = e.slice(1)))
                : 7 === e.length
                ? ((t = n.qscore(e[0], e[1], e[2], e[3], e[4])),
                  (e = e.slice(5)))
                : ((t = n.qscore(e[0], e[1], e[2])), (e = e.slice(3)));
              var o = e[0],
                i = e[1];
              return 1 - n.tukey.cdf(t, i, o - i);
            },
            tukeyhsd: function (t) {
              for (
                var r = n.pooledstdev(t),
                  e = t.map(function (t) {
                    return n.mean(t);
                  }),
                  o = t.reduce(function (n, t) {
                    return n + t.length;
                  }, 0),
                  i = [],
                  u = 0;
                u < t.length;
                ++u
              )
                for (var a = u + 1; a < t.length; ++a) {
                  var f = n.qtest(
                    e[u],
                    e[a],
                    t[u].length,
                    t[a].length,
                    r,
                    o,
                    t.length,
                  );
                  i.push([[u, a], f]);
                }
              return i;
            },
          }),
          n.extend({
            normalci: function () {
              var e,
                o = r.call(arguments),
                i = new Array(2);
              return (
                (e =
                  4 === o.length
                    ? t.abs(
                        (n.normal.inv(o[1] / 2, 0, 1) * o[2]) / t.sqrt(o[3]),
                      )
                    : t.abs(
                        (n.normal.inv(o[1] / 2, 0, 1) * n.stdev(o[2])) /
                          t.sqrt(o[2].length),
                      )),
                (i[0] = o[0] - e),
                (i[1] = o[0] + e),
                i
              );
            },
            tci: function () {
              var e,
                o = r.call(arguments),
                i = new Array(2);
              return (
                (e =
                  4 === o.length
                    ? t.abs(
                        (n.studentt.inv(o[1] / 2, o[3] - 1) * o[2]) /
                          t.sqrt(o[3]),
                      )
                    : t.abs(
                        (n.studentt.inv(o[1] / 2, o[2].length - 1) *
                          n.stdev(o[2], !0)) /
                          t.sqrt(o[2].length),
                      )),
                (i[0] = o[0] - e),
                (i[1] = o[0] + e),
                i
              );
            },
            significant: function (n, t) {
              return n < t;
            },
          }),
          n.extend(n.fn, {
            normalci: function (t, r) {
              return n.normalci(t, r, this.toArray());
            },
            tci: function (t, r) {
              return n.tci(t, r, this.toArray());
            },
          }),
          n.extend(n.fn, {
            oneSidedDifferenceOfProportions: function (t, r, e, o) {
              var u = i(t, r, e, o);
              return n.ztest(u, 1);
            },
            twoSidedDifferenceOfProportions: function (t, r, e, o) {
              var u = i(t, r, e, o);
              return n.ztest(u, 2);
            },
          });
      })(e, Math),
      (e.models = (function () {
        function n(n, t) {
          var r = n.length,
            o = t[0].length - 1,
            i = r - o - 1,
            u = e.lstsq(t, n),
            a = e
              .multiply(
                t,
                u.map(function (n) {
                  return [n];
                }),
              )
              .map(function (n) {
                return n[0];
              }),
            f = e.subtract(n, a),
            c = e.mean(n),
            s = e.sum(
              a.map(function (n) {
                return Math.pow(n - c, 2);
              }),
            ),
            l = e.sum(
              n.map(function (n, t) {
                return Math.pow(n - a[t], 2);
              }),
            ),
            p = s + l;
          return {
            exog: t,
            endog: n,
            nobs: r,
            df_model: o,
            df_resid: i,
            coef: u,
            predict: a,
            resid: f,
            ybar: c,
            SST: p,
            SSE: s,
            SSR: l,
            R2: s / p,
          };
        }
        function t(t) {
          var r,
            o,
            i =
              ((r = t.exog),
              (o = r[0].length),
              e.arange(o).map(function (t) {
                var i = e.arange(o).filter(function (n) {
                  return n !== t;
                });
                return n(
                  e.col(r, t).map(function (n) {
                    return n[0];
                  }),
                  e.col(r, i),
                );
              })),
            u = Math.sqrt(t.SSR / t.df_resid),
            a = i.map(function (n) {
              var t = n.SST,
                r = n.R2;
              return u / Math.sqrt(t * (1 - r));
            }),
            f = t.coef.map(function (n, t) {
              return (n - 0) / a[t];
            }),
            c = f.map(function (n) {
              var r = e.studentt.cdf(n, t.df_resid);
              return 2 * (r > 0.5 ? 1 - r : r);
            }),
            s = e.studentt.inv(0.975, t.df_resid),
            l = t.coef.map(function (n, t) {
              var r = s * a[t];
              return [n - r, n + r];
            });
          return { se: a, t: f, p: c, sigmaHat: u, interval95: l };
        }
        return {
          ols: function (r, o) {
            var i = n(r, o),
              u = t(i),
              a = (function (n) {
                var t,
                  r,
                  o,
                  i = n.R2 / n.df_model / ((1 - n.R2) / n.df_resid);
                return {
                  F_statistic: i,
                  pvalue:
                    1 -
                    ((t = i),
                    (r = n.df_model),
                    (o = n.df_resid),
                    e.beta.cdf(t / (o / r + t), r / 2, o / 2)),
                };
              })(i),
              f = 1 - (1 - i.R2) * ((i.nobs - 1) / i.df_resid);
            return (i.t = u), (i.f = a), (i.adjust_R2 = f), i;
          },
        };
      })()),
      e.extend({
        buildxmatrix: function () {
          for (
            var n = new Array(arguments.length), t = 0;
            t < arguments.length;
            t++
          ) {
            var r = [1];
            n[t] = r.concat(arguments[t]);
          }
          return e(n);
        },
        builddxmatrix: function () {
          for (
            var n = new Array(arguments[0].length), t = 0;
            t < arguments[0].length;
            t++
          ) {
            var r = [1];
            n[t] = r.concat(arguments[0][t]);
          }
          return e(n);
        },
        buildjxmatrix: function (n) {
          for (var t = new Array(n.length), r = 0; r < n.length; r++)
            t[r] = n[r];
          return e.builddxmatrix(t);
        },
        buildymatrix: function (n) {
          return e(n).transpose();
        },
        buildjymatrix: function (n) {
          return n.transpose();
        },
        matrixmult: function (n, t) {
          var r, o, i, u, a;
          if (n.cols() == t.rows()) {
            if (t.rows() > 1) {
              for (u = [], r = 0; r < n.rows(); r++)
                for (u[r] = [], o = 0; o < t.cols(); o++) {
                  for (a = 0, i = 0; i < n.cols(); i++)
                    a += n.toArray()[r][i] * t.toArray()[i][o];
                  u[r][o] = a;
                }
              return e(u);
            }
            for (u = [], r = 0; r < n.rows(); r++)
              for (u[r] = [], o = 0; o < t.cols(); o++) {
                for (a = 0, i = 0; i < n.cols(); i++)
                  a += n.toArray()[r][i] * t.toArray()[o];
                u[r][o] = a;
              }
            return e(u);
          }
        },
        regress: function (n, t) {
          var r = e.xtranspxinv(n),
            o = n.transpose(),
            i = e.matrixmult(e(r), o);
          return e.matrixmult(i, t);
        },
        regresst: function (n, t, r) {
          var o = e.regress(n, t),
            i = { anova: {} },
            u = e.jMatYBar(n, o);
          i.yBar = u;
          var a = t.mean();
          (i.anova.residuals = e.residuals(t, u)),
            (i.anova.ssr = e.ssr(u, a)),
            (i.anova.msr = i.anova.ssr / (n[0].length - 1)),
            (i.anova.sse = e.sse(t, u)),
            (i.anova.mse = i.anova.sse / (t.length - (n[0].length - 1) - 1)),
            (i.anova.sst = e.sst(t, a)),
            (i.anova.mst = i.anova.sst / (t.length - 1)),
            (i.anova.r2 = 1 - i.anova.sse / i.anova.sst),
            i.anova.r2 < 0 && (i.anova.r2 = 0),
            (i.anova.fratio = i.anova.msr / i.anova.mse),
            (i.anova.pvalue = e.anovaftest(
              i.anova.fratio,
              n[0].length - 1,
              t.length - (n[0].length - 1) - 1,
            )),
            (i.anova.rmse = Math.sqrt(i.anova.mse)),
            (i.anova.r2adj = 1 - i.anova.mse / i.anova.mst),
            i.anova.r2adj < 0 && (i.anova.r2adj = 0),
            (i.stats = new Array(n[0].length));
          for (var f, c, s, l = e.xtranspxinv(n), p = 0; p < o.length; p++)
            (f = Math.sqrt(i.anova.mse * Math.abs(l[p][p]))),
              (c = Math.abs(o[p] / f)),
              (s = e.ttest(c, t.length - n[0].length - 1, r)),
              (i.stats[p] = [o[p], f, c, s]);
          return (i.regress = o), i;
        },
        xtranspx: function (n) {
          return e.matrixmult(n.transpose(), n);
        },
        xtranspxinv: function (n) {
          var t = e.matrixmult(n.transpose(), n);
          return e.inv(t);
        },
        jMatYBar: function (n, t) {
          var r = e.matrixmult(n, t);
          return new e(r);
        },
        residuals: function (n, t) {
          return e.matrixsubtract(n, t);
        },
        ssr: function (n, t) {
          for (var r = 0, e = 0; e < n.length; e++) r += Math.pow(n[e] - t, 2);
          return r;
        },
        sse: function (n, t) {
          for (var r = 0, e = 0; e < n.length; e++)
            r += Math.pow(n[e] - t[e], 2);
          return r;
        },
        sst: function (n, t) {
          for (var r = 0, e = 0; e < n.length; e++) r += Math.pow(n[e] - t, 2);
          return r;
        },
        matrixsubtract: function (n, t) {
          for (var r = new Array(n.length), o = 0; o < n.length; o++) {
            r[o] = new Array(n[o].length);
            for (var i = 0; i < n[o].length; i++) r[o][i] = n[o][i] - t[o][i];
          }
          return e(r);
        },
      }),
      (e.jStat = e),
      e);
  },
  function (n, t, r) {
    var e = r(3),
      o = r(18),
      i = "".split;
    n.exports = e(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (n) {
          return "String" == o(n) ? i.call(n, "") : Object(n);
        }
      : Object;
  },
  function (n, t) {
    n.exports = function (n) {
      if (null == n) throw TypeError("Can't call method on " + n);
      return n;
    };
  },
  function (n, t, r) {
    var e = r(1),
      o = r(10);
    n.exports = function (n, t) {
      try {
        o(e, n, t);
      } catch (r) {
        e[n] = t;
      }
      return t;
    };
  },
  function (n, t, r) {
    var e = r(1),
      o = r(30),
      i = e["__core-js_shared__"] || o("__core-js_shared__", {});
    n.exports = i;
  },
  function (n, t, r) {
    var e = r(22),
      o = r(31);
    (n.exports = function (n, t) {
      return o[n] || (o[n] = void 0 !== t ? t : {});
    })("versions", []).push({
      version: "3.7.0",
      mode: e ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
    });
  },
  function (n, t) {
    var r = 0,
      e = Math.random();
    n.exports = function (n) {
      return (
        "Symbol(" +
        String(void 0 === n ? "" : n) +
        ")_" +
        (++r + e).toString(36)
      );
    };
  },
  function (n, t, r) {
    var e = r(51),
      o = r(36).concat("length", "prototype");
    t.f =
      Object.getOwnPropertyNames ||
      function (n) {
        return e(n, o);
      };
  },
  function (n, t) {
    var r = Math.ceil,
      e = Math.floor;
    n.exports = function (n) {
      return isNaN((n = +n)) ? 0 : (n > 0 ? e : r)(n);
    };
  },
  function (n, t) {
    n.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (n, t, r) {
    var e = r(3);
    n.exports =
      !!Object.getOwnPropertySymbols &&
      !e(function () {
        return !String(Symbol());
      });
  },
  function (n, t, r) {
    var e,
      o = r(7),
      i = r(55),
      u = r(36),
      a = r(23),
      f = r(78),
      c = r(46),
      s = r(21),
      l = s("IE_PROTO"),
      p = function () {},
      v = function (n) {
        return "<script>" + n + "</script>";
      },
      d = function () {
        try {
          e = document.domain && new ActiveXObject("htmlfile");
        } catch (n) {}
        var n, t;
        d = e
          ? (function (n) {
              n.write(v("")), n.close();
              var t = n.parentWindow.Object;
              return (n = null), t;
            })(e)
          : (((t = c("iframe")).style.display = "none"),
            f.appendChild(t),
            (t.src = String("javascript:")),
            (n = t.contentWindow.document).open(),
            n.write(v("document.F=Object")),
            n.close(),
            n.F);
        for (var r = u.length; r--; ) delete d.prototype[u[r]];
        return d();
      };
    (a[l] = !0),
      (n.exports =
        Object.create ||
        function (n, t) {
          var r;
          return (
            null !== n
              ? ((p.prototype = o(n)),
                (r = new p()),
                (p.prototype = null),
                (r[l] = n))
              : (r = d()),
            void 0 === t ? r : i(r, t)
          );
        });
  },
  function (n, t, r) {
    var e = r(51),
      o = r(36);
    n.exports =
      Object.keys ||
      function (n) {
        return e(n, o);
      };
  },
  function (n, t, r) {
    var e = r(6).f,
      o = r(5),
      i = r(2)("toStringTag");
    n.exports = function (n, t, r) {
      n &&
        !o((n = r ? n : n.prototype), i) &&
        e(n, i, { configurable: !0, value: t });
    };
  },
  function (n, t, r) {
    var e = r(3),
      o = r(2),
      i = r(60),
      u = o("species");
    n.exports = function (n) {
      return (
        i >= 51 ||
        !e(function () {
          var t = [];
          return (
            ((t.constructor = {})[u] = function () {
              return { foo: 1 };
            }),
            1 !== t[n](Boolean).foo
          );
        })
      );
    };
  },
  function (n, t, r) {
    "use strict";
    var e = r(19),
      o = r(6),
      i = r(14);
    n.exports = function (n, t, r) {
      var u = e(t);
      u in n ? o.f(n, u, i(0, r)) : (n[u] = r);
    };
  },
  function (n, t, r) {
    var e = {};
    (e[r(2)("toStringTag")] = "z"), (n.exports = "[object z]" === String(e));
  },
  function (n, t, r) {
    "use strict";
    var e = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !e.call({ 1: 2 }, 1);
    t.f = i
      ? function (n) {
          var t = o(this, n);
          return !!t && t.enumerable;
        }
      : e;
  },
  function (n, t, r) {
    var e = r(4),
      o = r(3),
      i = r(46);
    n.exports =
      !e &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (n, t, r) {
    var e = r(1),
      o = r(9),
      i = e.document,
      u = o(i) && o(i.createElement);
    n.exports = function (n) {
      return u ? i.createElement(n) : {};
    };
  },
  function (n, t, r) {
    var e = r(31),
      o = Function.toString;
    "function" != typeof e.inspectSource &&
      (e.inspectSource = function (n) {
        return o.call(n);
      }),
      (n.exports = e.inspectSource);
  },
  function (n, t, r) {
    var e = r(5),
      o = r(49),
      i = r(13),
      u = r(6);
    n.exports = function (n, t) {
      for (var r = o(t), a = u.f, f = i.f, c = 0; c < r.length; c++) {
        var s = r[c];
        e(n, s) || a(n, s, f(t, s));
      }
    };
  },
  function (n, t, r) {
    var e = r(24),
      o = r(34),
      i = r(53),
      u = r(7);
    n.exports =
      e("Reflect", "ownKeys") ||
      function (n) {
        var t = o.f(u(n)),
          r = i.f;
        return r ? t.concat(r(n)) : t;
      };
  },
  function (n, t, r) {
    var e = r(1);
    n.exports = e;
  },
  function (n, t, r) {
    var e = r(5),
      o = r(8),
      i = r(76).indexOf,
      u = r(23);
    n.exports = function (n, t) {
      var r,
        a = o(n),
        f = 0,
        c = [];
      for (r in a) !e(u, r) && e(a, r) && c.push(r);
      for (; t.length > f; ) e(a, (r = t[f++])) && (~i(c, r) || c.push(r));
      return c;
    };
  },
  function (n, t, r) {
    var e = r(35),
      o = Math.max,
      i = Math.min;
    n.exports = function (n, t) {
      var r = e(n);
      return r < 0 ? o(r + t, 0) : i(r, t);
    };
  },
  function (n, t) {
    t.f = Object.getOwnPropertySymbols;
  },
  function (n, t, r) {
    var e = r(37);
    n.exports = e && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (n, t, r) {
    var e = r(4),
      o = r(6),
      i = r(7),
      u = r(39);
    n.exports = e
      ? Object.defineProperties
      : function (n, t) {
          i(n);
          for (var r, e = u(t), a = e.length, f = 0; a > f; )
            o.f(n, (r = e[f++]), t[r]);
          return n;
        };
  },
  function (n, t, r) {
    var e = r(2);
    t.f = e;
  },
  function (n, t, r) {
    var e = r(50),
      o = r(5),
      i = r(56),
      u = r(6).f;
    n.exports = function (n) {
      var t = e.Symbol || (e.Symbol = {});
      o(t, n) || u(t, n, { value: i.f(n) });
    };
  },
  function (n, t, r) {
    var e = r(59);
    n.exports = function (n, t, r) {
      if ((e(n), void 0 === t)) return n;
      switch (r) {
        case 0:
          return function () {
            return n.call(t);
          };
        case 1:
          return function (r) {
            return n.call(t, r);
          };
        case 2:
          return function (r, e) {
            return n.call(t, r, e);
          };
        case 3:
          return function (r, e, o) {
            return n.call(t, r, e, o);
          };
      }
      return function () {
        return n.apply(t, arguments);
      };
    };
  },
  function (n, t) {
    n.exports = function (n) {
      if ("function" != typeof n)
        throw TypeError(String(n) + " is not a function");
      return n;
    };
  },
  function (n, t, r) {
    var e,
      o,
      i = r(1),
      u = r(84),
      a = i.process,
      f = a && a.versions,
      c = f && f.v8;
    c
      ? (o = (e = c.split("."))[0] + e[1])
      : u &&
        (!(e = u.match(/Edge\/(\d+)/)) || e[1] >= 74) &&
        (e = u.match(/Chrome\/(\d+)/)) &&
        (o = e[1]),
      (n.exports = o && +o);
  },
  function (n, t, r) {
    "use strict";
    var e = r(26).forEach,
      o = r(62),
      i = r(16),
      u = o("forEach"),
      a = i("forEach");
    n.exports =
      u && a
        ? [].forEach
        : function (n) {
            return e(this, n, arguments.length > 1 ? arguments[1] : void 0);
          };
  },
  function (n, t, r) {
    "use strict";
    var e = r(3);
    n.exports = function (n, t) {
      var r = [][n];
      return (
        !!r &&
        e(function () {
          r.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1,
          );
        })
      );
    };
  },
  function (n, t, r) {
    var e = r(43),
      o = r(18),
      i = r(2)("toStringTag"),
      u =
        "Arguments" ==
        o(
          (function () {
            return arguments;
          })(),
        );
    n.exports = e
      ? o
      : function (n) {
          var t, r, e;
          return void 0 === n
            ? "Undefined"
            : null === n
            ? "Null"
            : "string" ==
              typeof (r = (function (n, t) {
                try {
                  return n[t];
                } catch (n) {}
              })((t = Object(n)), i))
            ? r
            : u
            ? o(t)
            : "Object" == (e = o(t)) && "function" == typeof t.callee
            ? "Arguments"
            : e;
        };
  },
  function (n, t, r) {
    "use strict";
    var e = r(8),
      o = r(94),
      i = r(17),
      u = r(20),
      a = r(65),
      f = u.set,
      c = u.getterFor("Array Iterator");
    (n.exports = a(
      Array,
      "Array",
      function (n, t) {
        f(this, { type: "Array Iterator", target: e(n), index: 0, kind: t });
      },
      function () {
        var n = c(this),
          t = n.target,
          r = n.kind,
          e = n.index++;
        return !t || e >= t.length
          ? ((n.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: e, done: !1 }
          : "values" == r
          ? { value: t[e], done: !1 }
          : { value: [e, t[e]], done: !1 };
      },
      "values",
    )),
      (i.Arguments = i.Array),
      o("keys"),
      o("values"),
      o("entries");
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(95),
      i = r(67),
      u = r(97),
      a = r(40),
      f = r(10),
      c = r(11),
      s = r(2),
      l = r(22),
      p = r(17),
      v = r(66),
      d = v.IteratorPrototype,
      g = v.BUGGY_SAFARI_ITERATORS,
      m = s("iterator"),
      h = function () {
        return this;
      };
    n.exports = function (n, t, r, s, v, y, b) {
      o(r, t, s);
      var w,
        x,
        S,
        _ = function (n) {
          if (n === v && E) return E;
          if (!g && n in j) return j[n];
          switch (n) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new r(this, n);
              };
          }
          return function () {
            return new r(this);
          };
        },
        A = t + " Iterator",
        O = !1,
        j = n.prototype,
        q = j[m] || j["@@iterator"] || (v && j[v]),
        E = (!g && q) || _(v),
        P = ("Array" == t && j.entries) || q;
      if (
        (P &&
          ((w = i(P.call(new n()))),
          d !== Object.prototype &&
            w.next &&
            (l ||
              i(w) === d ||
              (u ? u(w, d) : "function" != typeof w[m] && f(w, m, h)),
            a(w, A, !0, !0),
            l && (p[A] = h))),
        "values" == v &&
          q &&
          "values" !== q.name &&
          ((O = !0),
          (E = function () {
            return q.call(this);
          })),
        (l && !b) || j[m] === E || f(j, m, E),
        (p[t] = E),
        v)
      )
        if (
          ((x = {
            values: _("values"),
            keys: y ? E : _("keys"),
            entries: _("entries"),
          }),
          b)
        )
          for (S in x) (g || O || !(S in j)) && c(j, S, x[S]);
        else e({ target: t, proto: !0, forced: g || O }, x);
      return x;
    };
  },
  function (n, t, r) {
    "use strict";
    var e,
      o,
      i,
      u = r(67),
      a = r(10),
      f = r(5),
      c = r(2),
      s = r(22),
      l = c("iterator"),
      p = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = u(u(i))) !== Object.prototype && (e = o)
        : (p = !0)),
      null == e && (e = {}),
      s ||
        f(e, l) ||
        a(e, l, function () {
          return this;
        }),
      (n.exports = { IteratorPrototype: e, BUGGY_SAFARI_ITERATORS: p });
  },
  function (n, t, r) {
    var e = r(5),
      o = r(12),
      i = r(21),
      u = r(96),
      a = i("IE_PROTO"),
      f = Object.prototype;
    n.exports = u
      ? Object.getPrototypeOf
      : function (n) {
          return (
            (n = o(n)),
            e(n, a)
              ? n[a]
              : "function" == typeof n.constructor && n instanceof n.constructor
              ? n.constructor.prototype
              : n instanceof Object
              ? f
              : null
          );
        };
  },
  function (n, t) {
    n.exports = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    };
  },
  function (n, t) {
    var r =
      ("undefined" != typeof crypto &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      ("undefined" != typeof msCrypto &&
        "function" == typeof window.msCrypto.getRandomValues &&
        msCrypto.getRandomValues.bind(msCrypto));
    if (r) {
      var e = new Uint8Array(16);
      n.exports = function () {
        return r(e), e;
      };
    } else {
      var o = new Array(16);
      n.exports = function () {
        for (var n, t = 0; t < 16; t++)
          0 == (3 & t) && (n = 4294967296 * Math.random()),
            (o[t] = (n >>> ((3 & t) << 3)) & 255);
        return o;
      };
    }
  },
  function (n, t) {
    for (var r = [], e = 0; e < 256; ++e)
      r[e] = (e + 256).toString(16).substr(1);
    n.exports = function (n, t) {
      var e = t || 0,
        o = r;
      return [
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
        "-",
        o[n[e++]],
        o[n[e++]],
        "-",
        o[n[e++]],
        o[n[e++]],
        "-",
        o[n[e++]],
        o[n[e++]],
        "-",
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
        o[n[e++]],
      ].join("");
    };
  },
  function (n, t, r) {
    var e = r(120),
      o = r(121),
      i = o;
    (i.v1 = e), (i.v4 = o), (n.exports = i);
  },
  function (n, t, r) {
    "use strict";
    r.r(t),
      r.d(t, "incr", function () {
        return s;
      }),
      r.d(t, "generateAgentID", function () {
        return l;
      }),
      r.d(t, "init", function () {
        return p;
      }),
      r.d(t, "grid", function () {
        return v;
      }),
      r.d(t, "createLayout", function () {
        return d;
      }),
      r.d(t, "rng", function () {
        return g;
      }),
      r.d(t, "setSeed", function () {
        return m;
      }),
      r.d(t, "random", function () {
        return h;
      }),
      r.d(t, "distanceBetween", function () {
        return y;
      }),
      r.d(t, "normalizeVector", function () {
        return b;
      }),
      r.d(t, "randomPosition", function () {
        return w;
      }),
      r.d(t, "neighborsOnPosition", function () {
        return x;
      }),
      r.d(t, "neighborsInRadius", function () {
        return S;
      }),
      r.d(t, "neighborsInFront", function () {
        return _;
      }),
      r.d(t, "neighborsBehind", function () {
        return A;
      });
    r(73),
      r(81),
      r(82),
      r(83),
      r(85),
      r(86),
      r(93),
      r(64),
      r(99),
      r(100),
      r(103),
      r(104),
      r(105),
      r(106),
      r(107),
      r(108),
      r(109),
      r(110),
      r(111),
      r(112),
      r(114),
      r(116),
      r(118),
      r(119);
    var e = r(27),
      o = r(71);
    function i(n, t) {
      var r = Object.keys(n);
      if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(n);
        t &&
          (e = e.filter(function (t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable;
          })),
          r.push.apply(r, e);
      }
      return r;
    }
    function u(n) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(r), !0).forEach(function (t) {
              a(n, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
          : i(Object(r)).forEach(function (t) {
              Object.defineProperty(
                n,
                t,
                Object.getOwnPropertyDescriptor(r, t),
              );
            });
      }
      return n;
    }
    function a(n, t, r) {
      return (
        t in n
          ? Object.defineProperty(n, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[t] = r),
        n
      );
    }
    function f(n) {
      return (
        (function (n) {
          if (Array.isArray(n)) return c(n);
        })(n) ||
        (function (n) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(n))
            return Array.from(n);
        })(n) ||
        (function (n, t) {
          if (!n) return;
          if ("string" == typeof n) return c(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          "Object" === r && n.constructor && (r = n.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(n);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return c(n, t);
        })(n) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
          );
        })()
      );
    }
    function c(n, t) {
      (null == t || t > n.length) && (t = n.length);
      for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
      return e;
    }
    function s(n) {
      return n + 1;
    }
    r.d(t, "stats", function () {
      return e.jStat;
    });
    var l = function () {
        return Object(o.v4)();
      },
      p = {
        scatter: function (n, t, r) {
          return (function (n, t, r) {
            var e = t.x_bounds,
              o = t.y_bounds,
              i = e[1] - e[0],
              a = o[1] - o[0];
            return f(Array(n)).map(function (n) {
              var t = [
                Math.floor(Math.random() * i) + e[0],
                Math.floor(Math.random() * a) + o[0],
              ];
              return u(
                u({}, "function" == typeof r ? r() : r),
                {},
                { position: t },
              );
            });
          })(n, t, r);
        },
        stack: function (n, t) {
          return (function (n, t) {
            return f(Array(n)).map(function (n) {
              return u({}, "function" == typeof t ? t() : t);
            });
          })(n, t);
        },
        grid: function (n, t) {
          return v(n, t);
        },
      };
    function v(n, t) {
      var r = n.x_bounds,
        e = n.y_bounds,
        o = r[1] - r[0],
        i = e[1] - e[0];
      return f(Array(o * i)).map(function (n, i) {
        var a = [(i % o) + r[0], Math.floor(i / o) + e[0]];
        return u(u({}, "function" == typeof t ? t() : t), {}, { position: a });
      });
    }
    function d(n, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : [0, 0, 0],
        e = n.length,
        o = {};
      n.forEach(function (n, i) {
        n.forEach(function (n, a) {
          if (n in t) {
            var f;
            n in o || (o[n] = []);
            var c =
              (null !== (f = t[n].agent_name) && void 0 !== f ? f : n) +
              o[n].length;
            o[n].push(
              u(
                u({}, t[n]),
                {},
                { agent_name: c, position: [a + r[0], e - i + r[1], 0 + r[2]] },
              ),
            );
          }
        });
      });
      var i = [];
      for (var a in o) i.push.apply(i, f(o[a]));
      return i;
    }
    var g = { _random_fn: Math.random };
    function m(n) {
      var t,
        r,
        o,
        i,
        u = (function (n) {
          for (var t = 0, r = 1779033703 ^ n.length; t < n.length; t++)
            r =
              ((r = Math.imul(r ^ n.charCodeAt(t), 3432918353)) << 13) |
              (r >>> 19);
          return function () {
            return (
              (r = Math.imul(r ^ (r >>> 16), 2246822507)),
              (r = Math.imul(r ^ (r >>> 13), 3266489909)),
              (r ^= r >>> 16) >>> 0
            );
          };
        })(n);
      (g._random_fn =
        ((t = u()),
        (r = u()),
        (o = u()),
        (i = u()),
        function () {
          var n = ((t >>>= 0) + (r >>>= 0)) | 0;
          return (
            (t = r ^ (r >>> 9)),
            (r = ((o >>>= 0) + (o << 3)) | 0),
            (o =
              ((o = (o << 21) | (o >>> 11)) +
                (n = (n + (i = (1 + (i >>>= 0)) | 0)) | 0)) |
              0),
            (n >>> 0) / 4294967296
          );
        })),
        e.jStat.setRandom(g._random_fn);
    }
    function h() {
      return g._random_fn();
    }
    function y(n, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : "euclidean",
        e = Math.abs,
        o = Math.pow,
        i = Math.max,
        u = Math.sqrt,
        a = {
          manhattan: function (n, t) {
            return e(n[0] - t[0]) + e(n[1] - t[1]) + e(n[2] - t[2]);
          },
          euclidean: function (n, t) {
            return u(o(n[0] - t[0], 2) + o(n[1] - t[1], 2) + o(n[2] - t[2], 2));
          },
          euclidean_sq: function (n, t) {
            return o(n[0] - t[0], 2) + o(n[1] - t[1], 2) + o(n[2] - t[2], 2);
          },
          chebyshev: function (n, t) {
            return i(e(n[0] - t[0]), e(n[1] - t[1]), e(n[2] - t[2]));
          },
        },
        f = n.position || (n.get ? n.get("position") : void 0),
        c = t.position || (t.get ? t.get("position") : void 0);
      if (!f || !c) throw new Error("agents must have position");
      return a[r](f, c);
    }
    function b(n) {
      var t = Math.sqrt(
        n.reduce(function (n, t) {
          return n + Math.pow(t, 2);
        }, 0),
      );
      return n.map(function (n) {
        return n / t;
      });
    }
    function w(n) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = Math.floor,
        e = Math.random,
        o = 0;
      if (t) {
        if (!n.z_bounds)
          throw new Error(
            "topology z_bounds needed if z_plane flag set to true",
          );
        o = r(e() * (n.z_bounds[1] - n.z_bounds[0]) + n.z_bounds[0]);
      }
      if (!n.x_bounds || !n.y_bounds)
        throw new Error("topology missing x_bounds or y_bounds");
      return [
        r(e() * (n.x_bounds[1] - n.x_bounds[0]) + n.x_bounds[0]),
        r(e() * (n.y_bounds[1] - n.y_bounds[0]) + n.y_bounds[0]),
        o,
      ];
    }
    function x(n, t) {
      return t.filter(function (t) {
        var r = n.position || (n.get ? n.get("position") : void 0),
          e = t.position || (t.get ? t.get("position") : void 0);
        if (!r || !e) throw new Error("agents must have position");
        for (var o = 0; o < r.length; o++) if (r[o] !== e[o]) return !1;
        return !0;
      });
    }
    function S(n, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
        e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return t.filter(function (t) {
        var i = n.position || (n.get ? n.get("position") : void 0),
          u = t.position || (t.get ? t.get("position") : void 0);
        if (!i || !u) throw new Error("agents must have position");
        for (var a = o ? 0 : 1, f = 0; f < i.length - 1 * a; f++) {
          var c = [i[f] + r, i[f] - r],
            s = [i[f] + e, i[f] - e];
          if (
            !((u[f] <= c[0] && u[f] >= s[0]) || (u[f] >= c[1] && u[f] <= s[1]))
          )
            return !1;
        }
        return !0;
      });
    }
    function _(n, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return t.filter(function (t) {
        var e = n.position || (n.get ? n.get("position") : void 0),
          o = n.direction || (n.get ? n.get("direction") : void 0),
          i = t.position || (t.get ? t.get("position") : void 0);
        if (!e || !i) throw new Error("agents must have position");
        if (!o) throw new Error("agents must have direction");
        if (r) {
          var u = o.reduce(function (n, t) {
              return n + t;
            }, 0),
            a = i[0] - e[0],
            f = i[1] - e[1],
            c = i[2] - e[2],
            s = 0 !== o[0] ? a / o[0] : 0,
            l = 0 !== o[1] ? f / o[1] : 0,
            p = 0 !== o[2] ? c / o[2] : 0;
          return 1 === u
            ? (s > 0 && 0 === f && 0 === c) ||
                (l > 0 && 0 === a && 0 === c) ||
                (p > 0 && 0 === a && 0 === f)
            : 2 === u
            ? (s === l && s > 0 && 0 === c) ||
              (l === p && l > 0 && 0 === a) ||
              (s === p && s > 0 && 0 === f)
            : 3 === u && s === l && l === p && s > 0;
        }
        var v = i[0] - e[0],
          d = i[1] - e[1],
          g = i[2] - e[2];
        return !(o[0] * v + o[1] * d + o[2] * g <= 0);
      });
    }
    function A(n, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return t.filter(function (t) {
        var e = n.position || (n.get ? n.get("position") : void 0),
          o = n.direction || (n.get ? n.get("direction") : void 0),
          i = t.position || (t.get ? t.get("position") : void 0);
        if (!e || !i) throw new Error("agents must have position");
        if (!o) throw new Error("agents must have direction");
        if (r) {
          var u = o.reduce(function (n, t) {
              return n + t;
            }, 0),
            a = i[0] - e[0],
            f = i[1] - e[1],
            c = i[2] - e[2],
            s = 0 !== o[0] ? (i[0] - e[0]) / o[0] : 0,
            l = 0 !== o[1] ? (i[1] - e[1]) / o[1] : 0,
            p = 0 !== o[2] ? (i[2] - e[2]) / o[2] : 0;
          return 1 === u
            ? (s < 0 && 0 === f && 0 === c) ||
                (l < 0 && 0 === a && 0 === c) ||
                (p < 0 && 0 === a && 0 === f)
            : 2 === u
            ? (s === l && s < 0 && 0 === c) ||
              (l === p && l < 0 && 0 === a) ||
              (s === p && s < 0 && 0 === f)
            : 3 === u && s === l && l === p && s < 0;
        }
        var v = i[0] - e[0],
          d = i[1] - e[1],
          g = i[2] - e[2];
        return !(o[0] * v + o[1] * d + o[2] * g >= 0);
      });
    }
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(1),
      i = r(24),
      u = r(22),
      a = r(4),
      f = r(37),
      c = r(54),
      s = r(3),
      l = r(5),
      p = r(25),
      v = r(9),
      d = r(7),
      g = r(12),
      m = r(8),
      h = r(19),
      y = r(14),
      b = r(38),
      w = r(39),
      x = r(34),
      S = r(79),
      _ = r(53),
      A = r(13),
      O = r(6),
      j = r(44),
      q = r(10),
      E = r(11),
      P = r(32),
      M = r(21),
      k = r(23),
      T = r(33),
      N = r(2),
      I = r(56),
      R = r(57),
      L = r(40),
      z = r(20),
      C = r(26).forEach,
      F = M("hidden"),
      D = N("toPrimitive"),
      G = z.set,
      V = z.getterFor("Symbol"),
      B = Object.prototype,
      U = o.Symbol,
      H = i("JSON", "stringify"),
      W = A.f,
      Y = O.f,
      Q = S.f,
      $ = j.f,
      J = P("symbols"),
      K = P("op-symbols"),
      X = P("string-to-symbol-registry"),
      Z = P("symbol-to-string-registry"),
      nn = P("wks"),
      tn = o.QObject,
      rn = !tn || !tn.prototype || !tn.prototype.findChild,
      en =
        a &&
        s(function () {
          return (
            7 !=
            b(
              Y({}, "a", {
                get: function () {
                  return Y(this, "a", { value: 7 }).a;
                },
              }),
            ).a
          );
        })
          ? function (n, t, r) {
              var e = W(B, t);
              e && delete B[t], Y(n, t, r), e && n !== B && Y(B, t, e);
            }
          : Y,
      on = function (n, t) {
        var r = (J[n] = b(U.prototype));
        return (
          G(r, { type: "Symbol", tag: n, description: t }),
          a || (r.description = t),
          r
        );
      },
      un = c
        ? function (n) {
            return "symbol" == typeof n;
          }
        : function (n) {
            return Object(n) instanceof U;
          },
      an = function (n, t, r) {
        n === B && an(K, t, r), d(n);
        var e = h(t, !0);
        return (
          d(r),
          l(J, e)
            ? (r.enumerable
                ? (l(n, F) && n[F][e] && (n[F][e] = !1),
                  (r = b(r, { enumerable: y(0, !1) })))
                : (l(n, F) || Y(n, F, y(1, {})), (n[F][e] = !0)),
              en(n, e, r))
            : Y(n, e, r)
        );
      },
      fn = function (n, t) {
        d(n);
        var r = m(t),
          e = w(r).concat(pn(r));
        return (
          C(e, function (t) {
            (a && !cn.call(r, t)) || an(n, t, r[t]);
          }),
          n
        );
      },
      cn = function (n) {
        var t = h(n, !0),
          r = $.call(this, t);
        return (
          !(this === B && l(J, t) && !l(K, t)) &&
          (!(r || !l(this, t) || !l(J, t) || (l(this, F) && this[F][t])) || r)
        );
      },
      sn = function (n, t) {
        var r = m(n),
          e = h(t, !0);
        if (r !== B || !l(J, e) || l(K, e)) {
          var o = W(r, e);
          return (
            !o || !l(J, e) || (l(r, F) && r[F][e]) || (o.enumerable = !0), o
          );
        }
      },
      ln = function (n) {
        var t = Q(m(n)),
          r = [];
        return (
          C(t, function (n) {
            l(J, n) || l(k, n) || r.push(n);
          }),
          r
        );
      },
      pn = function (n) {
        var t = n === B,
          r = Q(t ? K : m(n)),
          e = [];
        return (
          C(r, function (n) {
            !l(J, n) || (t && !l(B, n)) || e.push(J[n]);
          }),
          e
        );
      };
    (f ||
      (E(
        (U = function () {
          if (this instanceof U) throw TypeError("Symbol is not a constructor");
          var n =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            t = T(n),
            r = function (n) {
              this === B && r.call(K, n),
                l(this, F) && l(this[F], t) && (this[F][t] = !1),
                en(this, t, y(1, n));
            };
          return a && rn && en(B, t, { configurable: !0, set: r }), on(t, n);
        }).prototype,
        "toString",
        function () {
          return V(this).tag;
        },
      ),
      E(U, "withoutSetter", function (n) {
        return on(T(n), n);
      }),
      (j.f = cn),
      (O.f = an),
      (A.f = sn),
      (x.f = S.f = ln),
      (_.f = pn),
      (I.f = function (n) {
        return on(N(n), n);
      }),
      a &&
        (Y(U.prototype, "description", {
          configurable: !0,
          get: function () {
            return V(this).description;
          },
        }),
        u || E(B, "propertyIsEnumerable", cn, { unsafe: !0 }))),
    e({ global: !0, wrap: !0, forced: !f, sham: !f }, { Symbol: U }),
    C(w(nn), function (n) {
      R(n);
    }),
    e(
      { target: "Symbol", stat: !0, forced: !f },
      {
        for: function (n) {
          var t = String(n);
          if (l(X, t)) return X[t];
          var r = U(t);
          return (X[t] = r), (Z[r] = t), r;
        },
        keyFor: function (n) {
          if (!un(n)) throw TypeError(n + " is not a symbol");
          if (l(Z, n)) return Z[n];
        },
        useSetter: function () {
          rn = !0;
        },
        useSimple: function () {
          rn = !1;
        },
      },
    ),
    e(
      { target: "Object", stat: !0, forced: !f, sham: !a },
      {
        create: function (n, t) {
          return void 0 === t ? b(n) : fn(b(n), t);
        },
        defineProperty: an,
        defineProperties: fn,
        getOwnPropertyDescriptor: sn,
      },
    ),
    e(
      { target: "Object", stat: !0, forced: !f },
      { getOwnPropertyNames: ln, getOwnPropertySymbols: pn },
    ),
    e(
      {
        target: "Object",
        stat: !0,
        forced: s(function () {
          _.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (n) {
          return _.f(g(n));
        },
      },
    ),
    H) &&
      e(
        {
          target: "JSON",
          stat: !0,
          forced:
            !f ||
            s(function () {
              var n = U();
              return (
                "[null]" != H([n]) ||
                "{}" != H({ a: n }) ||
                "{}" != H(Object(n))
              );
            }),
        },
        {
          stringify: function (n, t, r) {
            for (var e, o = [n], i = 1; arguments.length > i; )
              o.push(arguments[i++]);
            if (((e = t), (v(t) || void 0 !== n) && !un(n)))
              return (
                p(t) ||
                  (t = function (n, t) {
                    if (
                      ("function" == typeof e && (t = e.call(this, n, t)),
                      !un(t))
                    )
                      return t;
                  }),
                (o[1] = t),
                H.apply(null, o)
              );
          },
        },
      );
    U.prototype[D] || q(U.prototype, D, U.prototype.valueOf),
      L(U, "Symbol"),
      (k[F] = !0);
  },
  function (n, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (n) {
      "object" == typeof window && (r = window);
    }
    n.exports = r;
  },
  function (n, t, r) {
    var e = r(1),
      o = r(47),
      i = e.WeakMap;
    n.exports = "function" == typeof i && /native code/.test(o(i));
  },
  function (n, t, r) {
    var e = r(8),
      o = r(15),
      i = r(52),
      u = function (n) {
        return function (t, r, u) {
          var a,
            f = e(t),
            c = o(f.length),
            s = i(u, c);
          if (n && r != r) {
            for (; c > s; ) if ((a = f[s++]) != a) return !0;
          } else
            for (; c > s; s++)
              if ((n || s in f) && f[s] === r) return n || s || 0;
          return !n && -1;
        };
      };
    n.exports = { includes: u(!0), indexOf: u(!1) };
  },
  function (n, t, r) {
    var e = r(3),
      o = /#|\.prototype\./,
      i = function (n, t) {
        var r = a[u(n)];
        return r == c || (r != f && ("function" == typeof t ? e(t) : !!t));
      },
      u = (i.normalize = function (n) {
        return String(n).replace(o, ".").toLowerCase();
      }),
      a = (i.data = {}),
      f = (i.NATIVE = "N"),
      c = (i.POLYFILL = "P");
    n.exports = i;
  },
  function (n, t, r) {
    var e = r(24);
    n.exports = e("document", "documentElement");
  },
  function (n, t, r) {
    var e = r(8),
      o = r(34).f,
      i = {}.toString,
      u =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    n.exports.f = function (n) {
      return u && "[object Window]" == i.call(n)
        ? (function (n) {
            try {
              return o(n);
            } catch (n) {
              return u.slice();
            }
          })(n)
        : o(e(n));
    };
  },
  function (n, t, r) {
    var e = r(9),
      o = r(25),
      i = r(2)("species");
    n.exports = function (n, t) {
      var r;
      return (
        o(n) &&
          ("function" != typeof (r = n.constructor) ||
          (r !== Array && !o(r.prototype))
            ? e(r) && null === (r = r[i]) && (r = void 0)
            : (r = void 0)),
        new (void 0 === r ? Array : r)(0 === t ? 0 : t)
      );
    };
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(4),
      i = r(1),
      u = r(5),
      a = r(9),
      f = r(6).f,
      c = r(48),
      s = i.Symbol;
    if (
      o &&
      "function" == typeof s &&
      (!("description" in s.prototype) || void 0 !== s().description)
    ) {
      var l = {},
        p = function () {
          var n =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            t = this instanceof p ? new s(n) : void 0 === n ? s() : s(n);
          return "" === n && (l[t] = !0), t;
        };
      c(p, s);
      var v = (p.prototype = s.prototype);
      v.constructor = p;
      var d = v.toString,
        g = "Symbol(test)" == String(s("test")),
        m = /^Symbol\((.*)\)[^)]+$/;
      f(v, "description", {
        configurable: !0,
        get: function () {
          var n = a(this) ? this.valueOf() : this,
            t = d.call(n);
          if (u(l, n)) return "";
          var r = g ? t.slice(7, -1) : t.replace(m, "$1");
          return "" === r ? void 0 : r;
        },
      }),
        e({ global: !0, forced: !0 }, { Symbol: p });
    }
  },
  function (n, t, r) {
    r(57)("iterator");
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(26).filter,
      i = r(41),
      u = r(16),
      a = i("filter"),
      f = u("filter");
    e(
      { target: "Array", proto: !0, forced: !a || !f },
      {
        filter: function (n) {
          return o(this, n, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(24);
    n.exports = e("navigator", "userAgent") || "";
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(61);
    e({ target: "Array", proto: !0, forced: [].forEach != o }, { forEach: o });
  },
  function (n, t, r) {
    var e = r(0),
      o = r(87);
    e(
      {
        target: "Array",
        stat: !0,
        forced: !r(92)(function (n) {
          Array.from(n);
        }),
      },
      { from: o },
    );
  },
  function (n, t, r) {
    "use strict";
    var e = r(58),
      o = r(12),
      i = r(88),
      u = r(90),
      a = r(15),
      f = r(42),
      c = r(91);
    n.exports = function (n) {
      var t,
        r,
        s,
        l,
        p,
        v,
        d = o(n),
        g = "function" == typeof this ? this : Array,
        m = arguments.length,
        h = m > 1 ? arguments[1] : void 0,
        y = void 0 !== h,
        b = c(d),
        w = 0;
      if (
        (y && (h = e(h, m > 2 ? arguments[2] : void 0, 2)),
        null == b || (g == Array && u(b)))
      )
        for (r = new g((t = a(d.length))); t > w; w++)
          (v = y ? h(d[w], w) : d[w]), f(r, w, v);
      else
        for (p = (l = b.call(d)).next, r = new g(); !(s = p.call(l)).done; w++)
          (v = y ? i(l, h, [s.value, w], !0) : s.value), f(r, w, v);
      return (r.length = w), r;
    };
  },
  function (n, t, r) {
    var e = r(7),
      o = r(89);
    n.exports = function (n, t, r, i) {
      try {
        return i ? t(e(r)[0], r[1]) : t(r);
      } catch (t) {
        throw (o(n), t);
      }
    };
  },
  function (n, t, r) {
    var e = r(7);
    n.exports = function (n) {
      var t = n.return;
      if (void 0 !== t) return e(t.call(n)).value;
    };
  },
  function (n, t, r) {
    var e = r(2),
      o = r(17),
      i = e("iterator"),
      u = Array.prototype;
    n.exports = function (n) {
      return void 0 !== n && (o.Array === n || u[i] === n);
    };
  },
  function (n, t, r) {
    var e = r(63),
      o = r(17),
      i = r(2)("iterator");
    n.exports = function (n) {
      if (null != n) return n[i] || n["@@iterator"] || o[e(n)];
    };
  },
  function (n, t, r) {
    var e = r(2)("iterator"),
      o = !1;
    try {
      var i = 0,
        u = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (u[e] = function () {
        return this;
      }),
        Array.from(u, function () {
          throw 2;
        });
    } catch (n) {}
    n.exports = function (n, t) {
      if (!t && !o) return !1;
      var r = !1;
      try {
        var i = {};
        (i[e] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          n(i);
      } catch (n) {}
      return r;
    };
  },
  function (n, t, r) {
    r(0)({ target: "Array", stat: !0 }, { isArray: r(25) });
  },
  function (n, t, r) {
    var e = r(2),
      o = r(38),
      i = r(6),
      u = e("unscopables"),
      a = Array.prototype;
    null == a[u] && i.f(a, u, { configurable: !0, value: o(null) }),
      (n.exports = function (n) {
        a[u][n] = !0;
      });
  },
  function (n, t, r) {
    "use strict";
    var e = r(66).IteratorPrototype,
      o = r(38),
      i = r(14),
      u = r(40),
      a = r(17),
      f = function () {
        return this;
      };
    n.exports = function (n, t, r) {
      var c = t + " Iterator";
      return (
        (n.prototype = o(e, { next: i(1, r) })), u(n, c, !1, !0), (a[c] = f), n
      );
    };
  },
  function (n, t, r) {
    var e = r(3);
    n.exports = !e(function () {
      function n() {}
      return (
        (n.prototype.constructor = null),
        Object.getPrototypeOf(new n()) !== n.prototype
      );
    });
  },
  function (n, t, r) {
    var e = r(7),
      o = r(98);
    n.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var n,
              t = !1,
              r = {};
            try {
              (n = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__",
              ).set).call(r, []),
                (t = r instanceof Array);
            } catch (n) {}
            return function (r, i) {
              return e(r), o(i), t ? n.call(r, i) : (r.__proto__ = i), r;
            };
          })()
        : void 0);
  },
  function (n, t, r) {
    var e = r(9);
    n.exports = function (n) {
      if (!e(n) && null !== n)
        throw TypeError("Can't set " + String(n) + " as a prototype");
      return n;
    };
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(26).map,
      i = r(41),
      u = r(16),
      a = i("map"),
      f = u("map");
    e(
      { target: "Array", proto: !0, forced: !a || !f },
      {
        map: function (n) {
          return o(this, n, arguments.length > 1 ? arguments[1] : void 0);
        },
      },
    );
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(101).left,
      i = r(62),
      u = r(16),
      a = r(60),
      f = r(102),
      c = i("reduce"),
      s = u("reduce", { 1: 0 });
    e(
      {
        target: "Array",
        proto: !0,
        forced: !c || !s || (!f && a > 79 && a < 83),
      },
      {
        reduce: function (n) {
          return o(
            this,
            n,
            arguments.length,
            arguments.length > 1 ? arguments[1] : void 0,
          );
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(59),
      o = r(12),
      i = r(28),
      u = r(15),
      a = function (n) {
        return function (t, r, a, f) {
          e(r);
          var c = o(t),
            s = i(c),
            l = u(c.length),
            p = n ? l - 1 : 0,
            v = n ? -1 : 1;
          if (a < 2)
            for (;;) {
              if (p in s) {
                (f = s[p]), (p += v);
                break;
              }
              if (((p += v), n ? p < 0 : l <= p))
                throw TypeError("Reduce of empty array with no initial value");
            }
          for (; n ? p >= 0 : l > p; p += v) p in s && (f = r(f, s[p], p, c));
          return f;
        };
      };
    n.exports = { left: a(!1), right: a(!0) };
  },
  function (n, t, r) {
    var e = r(18),
      o = r(1);
    n.exports = "process" == e(o.process);
  },
  function (n, t, r) {
    "use strict";
    var e = r(0),
      o = r(9),
      i = r(25),
      u = r(52),
      a = r(15),
      f = r(8),
      c = r(42),
      s = r(2),
      l = r(41),
      p = r(16),
      v = l("slice"),
      d = p("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
      g = s("species"),
      m = [].slice,
      h = Math.max;
    e(
      { target: "Array", proto: !0, forced: !v || !d },
      {
        slice: function (n, t) {
          var r,
            e,
            s,
            l = f(this),
            p = a(l.length),
            v = u(n, p),
            d = u(void 0 === t ? p : t, p);
          if (
            i(l) &&
            ("function" != typeof (r = l.constructor) ||
            (r !== Array && !i(r.prototype))
              ? o(r) && null === (r = r[g]) && (r = void 0)
              : (r = void 0),
            r === Array || void 0 === r)
          )
            return m.call(l, v, d);
          for (
            e = new (void 0 === r ? Array : r)(h(d - v, 0)), s = 0;
            v < d;
            v++, s++
          )
            v in l && c(e, s, l[v]);
          return (e.length = s), e;
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(11),
      o = Date.prototype,
      i = o.toString,
      u = o.getTime;
    new Date(NaN) + "" != "Invalid Date" &&
      e(o, "toString", function () {
        var n = u.call(this);
        return n == n ? i.call(this) : "Invalid Date";
      });
  },
  function (n, t, r) {
    var e = r(4),
      o = r(6).f,
      i = Function.prototype,
      u = i.toString,
      a = /^\s*function ([^ (]*)/;
    e &&
      !("name" in i) &&
      o(i, "name", {
        configurable: !0,
        get: function () {
          try {
            return u.call(this).match(a)[1];
          } catch (n) {
            return "";
          }
        },
      });
  },
  function (n, t, r) {
    var e = r(0),
      o = r(3),
      i = Math.imul;
    e(
      {
        target: "Math",
        stat: !0,
        forced: o(function () {
          return -5 != i(4294967295, 5) || 2 != i.length;
        }),
      },
      {
        imul: function (n, t) {
          var r = +n,
            e = +t,
            o = 65535 & r,
            i = 65535 & e;
          return (
            0 |
            (o * i +
              ((((65535 & (r >>> 16)) * i + o * (65535 & (e >>> 16))) << 16) >>>
                0))
          );
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(0),
      o = r(4);
    e(
      { target: "Object", stat: !0, forced: !o, sham: !o },
      { defineProperties: r(55) },
    );
  },
  function (n, t, r) {
    var e = r(0),
      o = r(4);
    e(
      { target: "Object", stat: !0, forced: !o, sham: !o },
      { defineProperty: r(6).f },
    );
  },
  function (n, t, r) {
    var e = r(0),
      o = r(3),
      i = r(8),
      u = r(13).f,
      a = r(4),
      f = o(function () {
        u(1);
      });
    e(
      { target: "Object", stat: !0, forced: !a || f, sham: !a },
      {
        getOwnPropertyDescriptor: function (n, t) {
          return u(i(n), t);
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(0),
      o = r(4),
      i = r(49),
      u = r(8),
      a = r(13),
      f = r(42);
    e(
      { target: "Object", stat: !0, sham: !o },
      {
        getOwnPropertyDescriptors: function (n) {
          for (
            var t, r, e = u(n), o = a.f, c = i(e), s = {}, l = 0;
            c.length > l;

          )
            void 0 !== (r = o(e, (t = c[l++]))) && f(s, t, r);
          return s;
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(0),
      o = r(12),
      i = r(39);
    e(
      {
        target: "Object",
        stat: !0,
        forced: r(3)(function () {
          i(1);
        }),
      },
      {
        keys: function (n) {
          return i(o(n));
        },
      },
    );
  },
  function (n, t, r) {
    var e = r(43),
      o = r(11),
      i = r(113);
    e || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  function (n, t, r) {
    "use strict";
    var e = r(43),
      o = r(63);
    n.exports = e
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (n, t, r) {
    "use strict";
    var e = r(11),
      o = r(7),
      i = r(3),
      u = r(115),
      a = RegExp.prototype,
      f = a.toString,
      c = i(function () {
        return "/a/b" != f.call({ source: "a", flags: "b" });
      }),
      s = "toString" != f.name;
    (c || s) &&
      e(
        RegExp.prototype,
        "toString",
        function () {
          var n = o(this),
            t = String(n.source),
            r = n.flags;
          return (
            "/" +
            t +
            "/" +
            String(
              void 0 === r && n instanceof RegExp && !("flags" in a)
                ? u.call(n)
                : r,
            )
          );
        },
        { unsafe: !0 },
      );
  },
  function (n, t, r) {
    "use strict";
    var e = r(7);
    n.exports = function () {
      var n = e(this),
        t = "";
      return (
        n.global && (t += "g"),
        n.ignoreCase && (t += "i"),
        n.multiline && (t += "m"),
        n.dotAll && (t += "s"),
        n.unicode && (t += "u"),
        n.sticky && (t += "y"),
        t
      );
    };
  },
  function (n, t, r) {
    "use strict";
    var e = r(117).charAt,
      o = r(20),
      i = r(65),
      u = o.set,
      a = o.getterFor("String Iterator");
    i(
      String,
      "String",
      function (n) {
        u(this, { type: "String Iterator", string: String(n), index: 0 });
      },
      function () {
        var n,
          t = a(this),
          r = t.string,
          o = t.index;
        return o >= r.length
          ? { value: void 0, done: !0 }
          : ((n = e(r, o)), (t.index += n.length), { value: n, done: !1 });
      },
    );
  },
  function (n, t, r) {
    var e = r(35),
      o = r(29),
      i = function (n) {
        return function (t, r) {
          var i,
            u,
            a = String(o(t)),
            f = e(r),
            c = a.length;
          return f < 0 || f >= c
            ? n
              ? ""
              : void 0
            : (i = a.charCodeAt(f)) < 55296 ||
              i > 56319 ||
              f + 1 === c ||
              (u = a.charCodeAt(f + 1)) < 56320 ||
              u > 57343
            ? n
              ? a.charAt(f)
              : i
            : n
            ? a.slice(f, f + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    n.exports = { codeAt: i(!1), charAt: i(!0) };
  },
  function (n, t, r) {
    var e = r(1),
      o = r(68),
      i = r(61),
      u = r(10);
    for (var a in o) {
      var f = e[a],
        c = f && f.prototype;
      if (c && c.forEach !== i)
        try {
          u(c, "forEach", i);
        } catch (n) {
          c.forEach = i;
        }
    }
  },
  function (n, t, r) {
    var e = r(1),
      o = r(68),
      i = r(64),
      u = r(10),
      a = r(2),
      f = a("iterator"),
      c = a("toStringTag"),
      s = i.values;
    for (var l in o) {
      var p = e[l],
        v = p && p.prototype;
      if (v) {
        if (v[f] !== s)
          try {
            u(v, f, s);
          } catch (n) {
            v[f] = s;
          }
        if ((v[c] || u(v, c, l), o[l]))
          for (var d in i)
            if (v[d] !== i[d])
              try {
                u(v, d, i[d]);
              } catch (n) {
                v[d] = i[d];
              }
      }
    }
  },
  function (n, t, r) {
    var e,
      o,
      i = r(69),
      u = r(70),
      a = 0,
      f = 0;
    n.exports = function (n, t, r) {
      var c = (t && r) || 0,
        s = t || [],
        l = (n = n || {}).node || e,
        p = void 0 !== n.clockseq ? n.clockseq : o;
      if (null == l || null == p) {
        var v = i();
        null == l && (l = e = [1 | v[0], v[1], v[2], v[3], v[4], v[5]]),
          null == p && (p = o = 16383 & ((v[6] << 8) | v[7]));
      }
      var d = void 0 !== n.msecs ? n.msecs : new Date().getTime(),
        g = void 0 !== n.nsecs ? n.nsecs : f + 1,
        m = d - a + (g - f) / 1e4;
      if (
        (m < 0 && void 0 === n.clockseq && (p = (p + 1) & 16383),
        (m < 0 || d > a) && void 0 === n.nsecs && (g = 0),
        g >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (a = d), (f = g), (o = p);
      var h = (1e4 * (268435455 & (d += 122192928e5)) + g) % 4294967296;
      (s[c++] = (h >>> 24) & 255),
        (s[c++] = (h >>> 16) & 255),
        (s[c++] = (h >>> 8) & 255),
        (s[c++] = 255 & h);
      var y = ((d / 4294967296) * 1e4) & 268435455;
      (s[c++] = (y >>> 8) & 255),
        (s[c++] = 255 & y),
        (s[c++] = ((y >>> 24) & 15) | 16),
        (s[c++] = (y >>> 16) & 255),
        (s[c++] = (p >>> 8) | 128),
        (s[c++] = 255 & p);
      for (var b = 0; b < 6; ++b) s[c + b] = l[b];
      return t || u(s);
    };
  },
  function (n, t, r) {
    var e = r(69),
      o = r(70);
    n.exports = function (n, t, r) {
      var i = (t && r) || 0;
      "string" == typeof n &&
        ((t = "binary" === n ? new Array(16) : null), (n = null));
      var u = (n = n || {}).random || (n.rng || e)();
      if (((u[6] = (15 & u[6]) | 64), (u[8] = (63 & u[8]) | 128), t))
        for (var a = 0; a < 16; ++a) t[i + a] = u[a];
      return t || o(u);
    };
  },
]);
