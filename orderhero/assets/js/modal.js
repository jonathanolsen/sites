(function () {
  function e(t, n, r) {
    function o(a, s) {
      if (!n[a]) {
        if (!t[a]) {
          var u = "function" == typeof require && require;
          if (!s && u) return u(a, !0);
          if (i) return i(a, !0);
          var l = new Error("Cannot find module '" + a + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        var c = (n[a] = {
          exports: {},
        });
        t[a][0].call(
          c.exports,
          function (e) {
            var n = t[a][1][e];
            return o(n || e);
          },
          c,
          c.exports,
          e,
          t,
          n,
          r
        );
      }
      return n[a].exports;
    }
    for (
      var i = "function" == typeof require && require, a = 0;
      a < r.length;
      a++
    )
      o(r[a]);
    return o;
  }
  return e;
})()(
  {
    1: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = {
          init: function e() {
            window.Squarespace.AFTER_BODY_LOADED = false;
            window.Squarespace.afterBodyLoad();
          },
          destroy: function e() {
            window.Squarespace.globalDestroy(Y);
          },
        };
        n.default = r;
        t.exports = n["default"];
      },
      {},
    ],
    2: [
      function (e, t, n) {
        t.exports =
          typeof Array.from === "function" ? Array.from : e("./polyfill");
      },
      {
        "./polyfill": 3,
      },
    ],
    3: [
      function (e, t, n) {
        t.exports = (function () {
          var e = function (e) {
            return typeof e === "function";
          };
          var t = function (e) {
            var t = Number(e);
            if (isNaN(t)) {
              return 0;
            }
            if (t === 0 || !isFinite(t)) {
              return t;
            }
            return (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
          };
          var n = Math.pow(2, 53) - 1;
          var r = function (e) {
            var r = t(e);
            return Math.min(Math.max(r, 0), n);
          };
          var o = function (e) {
            if (e != null) {
              if (
                ["string", "number", "boolean", "symbol"].indexOf(typeof e) > -1
              ) {
                return Symbol.iterator;
              } else if (
                typeof Symbol !== "undefined" &&
                "iterator" in Symbol &&
                Symbol.iterator in e
              ) {
                return Symbol.iterator;
              } else if ("@@iterator" in e) {
                return "@@iterator";
              }
            }
          };
          var i = function (t, n) {
            if (t != null && n != null) {
              var r = t[n];
              if (r == null) {
                return void 0;
              }
              if (!e(r)) {
                throw new TypeError(r + " is not a function");
              }
              return r;
            }
          };
          var a = function (e) {
            var t = e.next();
            var n = Boolean(t.done);
            if (n) {
              return false;
            }
            return t;
          };
          return function t(n) {
            "use strict";
            var s = this;
            var u = arguments.length > 1 ? arguments[1] : void 0;
            var l;
            if (typeof u !== "undefined") {
              if (!e(u)) {
                throw new TypeError(
                  "Array.from: when provided, the second argument must be a function"
                );
              }
              if (arguments.length > 2) {
                l = arguments[2];
              }
            }
            var c, f;
            var d = i(n, o(n));
            if (d !== void 0) {
              c = e(s) ? Object(new s()) : [];
              var h = d.call(n);
              if (h == null) {
                throw new TypeError(
                  "Array.from requires an array-like or iterable object"
                );
              }
              f = 0;
              var p, v;
              while (true) {
                p = a(h);
                if (!p) {
                  c.length = f;
                  return c;
                }
                v = p.value;
                if (u) {
                  c[f] = u.call(l, v, f);
                } else {
                  c[f] = v;
                }
                f++;
              }
            } else {
              var m = Object(n);
              if (n == null) {
                throw new TypeError(
                  "Array.from requires an array-like object - not null or undefined"
                );
              }
              var y = r(m.length);
              c = e(s) ? Object(new s(y)) : new Array(y);
              f = 0;
              var b;
              while (f < y) {
                b = m[f];
                if (u) {
                  c[f] = u.call(l, b, f);
                } else {
                  c[f] = b;
                }
                f++;
              }
              c.length = y;
            }
            return c;
          };
        })();
      },
      {},
    ],
    4: [
      function (e, t, n) {
        !(function (e, t) {
          if ("function" == typeof define && define.amd) define(["exports"], t);
          else if ("undefined" != typeof n) t(n);
          else {
            var r = {};
            t(r), (e.bodyScrollLock = r);
          }
        })(this, function (e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
            value: !0,
          });
          var t = !1;
          if ("undefined" != typeof window) {
            var n = {
              get passive() {
                t = !0;
              },
            };
            window.addEventListener("testPassive", null, n),
              window.removeEventListener("testPassive", null, n);
          }
          var r =
              "undefined" != typeof window &&
              window.navigator &&
              window.navigator.platform &&
              /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(
                window.navigator.platform
              ),
            o = null,
            i = [],
            a = !1,
            s = -1,
            u = void 0,
            l = void 0,
            c = function (e) {
              var t = e || window.event;
              return (
                1 < t.touches.length ||
                (t.preventDefault && t.preventDefault(), !1)
              );
            },
            f = function () {
              setTimeout(function () {
                void 0 !== l &&
                  ((document.body.style.paddingRight = l), (l = void 0)),
                  void 0 !== u &&
                    ((document.body.style.overflow = u), (u = void 0));
              });
            };
          (e.disableBodyScroll = function (e, n) {
            var f;
            r
              ? e &&
                !i.includes(e) &&
                ((i = [].concat(
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(i),
                  [e]
                )),
                (e.ontouchstart = function (e) {
                  1 === e.targetTouches.length &&
                    (s = e.targetTouches[0].clientY);
                }),
                (e.ontouchmove = function (t) {
                  var n, r, o, i;
                  1 === t.targetTouches.length &&
                    ((r = e),
                    (i = (n = t).targetTouches[0].clientY - s),
                    r && 0 === r.scrollTop && 0 < i
                      ? c(n)
                      : (o = r) &&
                        o.scrollHeight - o.scrollTop <= o.clientHeight &&
                        i < 0
                      ? c(n)
                      : n.stopPropagation());
                }),
                a ||
                  (document.addEventListener(
                    "touchmove",
                    c,
                    t
                      ? {
                          passive: !1,
                        }
                      : void 0
                  ),
                  (a = !0)))
              : ((f = n),
                setTimeout(function () {
                  if (void 0 === l) {
                    var e = !!f && !0 === f.reserveScrollBarGap,
                      t =
                        window.innerWidth -
                        document.documentElement.clientWidth;
                    e &&
                      0 < t &&
                      ((l = document.body.style.paddingRight),
                      (document.body.style.paddingRight = t + "px"));
                  }
                  void 0 === u &&
                    ((u = document.body.style.overflow),
                    (document.body.style.overflow = "hidden"));
                }),
                o || (o = e));
          }),
            (e.clearAllBodyScrollLocks = function () {
              r
                ? (i.forEach(function (e) {
                    (e.ontouchstart = null), (e.ontouchmove = null);
                  }),
                  a &&
                    (document.removeEventListener(
                      "touchmove",
                      c,
                      t
                        ? {
                            passive: !1,
                          }
                        : void 0
                    ),
                    (a = !1)),
                  (i = []),
                  (s = -1))
                : (f(), (o = null));
            }),
            (e.enableBodyScroll = function (e) {
              r
                ? ((e.ontouchstart = null),
                  (e.ontouchmove = null),
                  (i = i.filter(function (t) {
                    return t !== e;
                  })),
                  a &&
                    0 === i.length &&
                    (document.removeEventListener(
                      "touchmove",
                      c,
                      t
                        ? {
                            passive: !1,
                          }
                        : void 0
                    ),
                    (a = !1)))
                : o === e && (f(), (o = null));
            });
        });
      },
      {},
    ],
    5: [
      function (e, t, n) {
        "use strict";
        e("./index").polyfill();
      },
      {
        "./index": 6,
      },
    ],
    6: [
      function (e, t, n) {
        "use strict";

        function r(e, t) {
          if (e === undefined || e === null) {
            throw new TypeError("Cannot convert first argument to object");
          }
          var n = Object(e);
          for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            if (o === undefined || o === null) {
              continue;
            }
            var i = Object.keys(Object(o));
            for (var a = 0, s = i.length; a < s; a++) {
              var u = i[a];
              var l = Object.getOwnPropertyDescriptor(o, u);
              if (l !== undefined && l.enumerable) {
                n[u] = o[u];
              }
            }
          }
          return n;
        }

        function o() {
          if (!Object.assign) {
            Object.defineProperty(Object, "assign", {
              enumerable: false,
              configurable: true,
              writable: true,
              value: r,
            });
          }
        }
        t.exports = {
          assign: r,
          polyfill: o,
        };
      },
      {},
    ],
    7: [
      function (e, t, n) {
        var r = e("tabbable");
        var o = e("xtend");
        var i = null;

        function a(e, t) {
          var n = document;
          var a = typeof e === "string" ? n.querySelector(e) : e;
          var f = o(
            {
              returnFocusOnDeactivate: true,
              escapeDeactivates: true,
            },
            t
          );
          var d = {
            firstTabbableNode: null,
            lastTabbableNode: null,
            nodeFocusedBeforeActivation: null,
            mostRecentlyFocusedNode: null,
            active: false,
            paused: false,
          };
          var h = {
            activate: p,
            deactivate: v,
            pause: m,
            unpause: y,
          };
          return h;

          function p(e) {
            if (d.active) return;
            A();
            d.active = true;
            d.paused = false;
            d.nodeFocusedBeforeActivation = n.activeElement;
            var t = e && e.onActivate ? e.onActivate : f.onActivate;
            if (t) {
              t();
            }
            b();
            return h;
          }

          function v(e) {
            if (!d.active) return;
            g();
            d.active = false;
            d.paused = false;
            var t =
              e && e.onDeactivate !== undefined
                ? e.onDeactivate
                : f.onDeactivate;
            if (t) {
              t();
            }
            var n =
              e && e.returnFocus !== undefined
                ? e.returnFocus
                : f.returnFocusOnDeactivate;
            if (n) {
              c(function () {
                S(d.nodeFocusedBeforeActivation);
              });
            }
            return h;
          }

          function m() {
            if (d.paused || !d.active) return;
            d.paused = true;
            g();
          }

          function y() {
            if (!d.paused || !d.active) return;
            d.paused = false;
            b();
          }

          function b() {
            if (!d.active) return;
            if (i) {
              i.pause();
            }
            i = h;
            A();
            c(function () {
              S(_());
            });
            n.addEventListener("focusin", E, true);
            n.addEventListener("mousedown", x, true);
            n.addEventListener("touchstart", x, true);
            n.addEventListener("click", O, true);
            n.addEventListener("keydown", T, true);
            return h;
          }

          function g() {
            if (!d.active || i !== h) return;
            n.removeEventListener("focusin", E, true);
            n.removeEventListener("mousedown", x, true);
            n.removeEventListener("touchstart", x, true);
            n.removeEventListener("click", O, true);
            n.removeEventListener("keydown", T, true);
            i = null;
            return h;
          }

          function w(e) {
            var t = f[e];
            var r = t;
            if (!t) {
              return null;
            }
            if (typeof t === "string") {
              r = n.querySelector(t);
              if (!r) {
                throw new Error("`" + e + "` refers to no known node");
              }
            }
            if (typeof t === "function") {
              r = t();
              if (!r) {
                throw new Error("`" + e + "` did not return a node");
              }
            }
            return r;
          }

          function _() {
            var e;
            if (w("initialFocus") !== null) {
              e = w("initialFocus");
            } else if (a.contains(n.activeElement)) {
              e = n.activeElement;
            } else {
              e = d.firstTabbableNode || w("fallbackFocus");
            }
            if (!e) {
              throw new Error(
                "You can't have a focus-trap without at least one focusable element"
              );
            }
            return e;
          }

          function x(e) {
            if (a.contains(e.target)) return;
            if (f.clickOutsideDeactivates) {
              v({
                returnFocus: !r.isFocusable(e.target),
              });
            } else {
              e.preventDefault();
            }
          }

          function E(e) {
            if (a.contains(e.target) || e.target instanceof Document) {
              return;
            }
            e.stopImmediatePropagation();
            S(d.mostRecentlyFocusedNode || _());
          }

          function T(e) {
            if (f.escapeDeactivates !== false && u(e)) {
              e.preventDefault();
              v();
              return;
            }
            if (l(e)) {
              C(e);
              return;
            }
          }

          function C(e) {
            A();
            if (e.shiftKey && e.target === d.firstTabbableNode) {
              e.preventDefault();
              S(d.lastTabbableNode);
              return;
            }
            if (!e.shiftKey && e.target === d.lastTabbableNode) {
              e.preventDefault();
              S(d.firstTabbableNode);
              return;
            }
          }

          function O(e) {
            if (f.clickOutsideDeactivates) return;
            if (a.contains(e.target)) return;
            e.preventDefault();
            e.stopImmediatePropagation();
          }

          function A() {
            var e = r(a);
            d.firstTabbableNode = e[0] || _();
            d.lastTabbableNode = e[e.length - 1] || _();
          }

          function S(e) {
            if (e === n.activeElement) return;
            if (!e || !e.focus) {
              S(_());
              return;
            }
            e.focus();
            d.mostRecentlyFocusedNode = e;
            if (s(e)) {
              e.select();
            }
          }
        }

        function s(e) {
          return (
            e.tagName &&
            e.tagName.toLowerCase() === "input" &&
            typeof e.select === "function"
          );
        }

        function u(e) {
          return e.key === "Escape" || e.key === "Esc" || e.keyCode === 27;
        }

        function l(e) {
          return e.key === "Tab" || e.keyCode === 9;
        }

        function c(e) {
          return setTimeout(e, 0);
        }
        t.exports = a;
      },
      {
        tabbable: 23,
        xtend: 26,
      },
    ],
    8: [
      function (e, t, n) {
        function r() {
          return !(typeof window !== "undefined" && window.document);
        }
        t.exports = function e() {
          if (r()) return 0;
          const t = document.createElement("p");
          t.style.width = "100%";
          t.style.height = "200px";
          const n = document.createElement("div");
          n.style.position = "absolute";
          n.style.top = "0px";
          n.style.left = "0px";
          n.style.visibility = "hidden";
          n.style.width = "200px";
          n.style.height = "150px";
          n.style.overflow = "hidden";
          n.appendChild(t);
          document.body.appendChild(n);
          const o = t.offsetWidth;
          n.style.overflow = "scroll";
          var i = t.offsetWidth;
          if (o === i) i = n.clientWidth;
          document.body.removeChild(n);
          return o - i;
        };
      },
      {},
    ],
    9: [
      function (e, t, n) {
        window.MutationObserver =
          window.MutationObserver ||
          (function (e) {
            function t(e) {
              this.i = [];
              this.m = e;
            }

            function n(e) {
              (function n() {
                var r = e.takeRecords();
                r.length && e.m(r, e);
                e.h = setTimeout(n, t._period);
              })();
            }

            function r(t) {
              var n = {
                  type: null,
                  target: null,
                  addedNodes: [],
                  removedNodes: [],
                  previousSibling: null,
                  nextSibling: null,
                  attributeName: null,
                  attributeNamespace: null,
                  oldValue: null,
                },
                r;
              for (r in t) n[r] !== e && t[r] !== e && (n[r] = t[r]);
              return n;
            }

            function o(e, t) {
              var n = l(e, t);
              return function (o) {
                var i = o.length,
                  a;
                t.a &&
                  3 === e.nodeType &&
                  e.nodeValue !== n.a &&
                  o.push(
                    new r({
                      type: "characterData",
                      target: e,
                      oldValue: n.a,
                    })
                  );
                t.b && n.b && s(o, e, n.b, t.f);
                if (t.c || t.g) a = u(o, e, n, t);
                if (a || o.length !== i) n = l(e, t);
              };
            }

            function i(e, t) {
              return t.value;
            }

            function a(e, t) {
              return "style" !== t.name ? t.value : e.style.cssText;
            }

            function s(t, n, o, i) {
              for (var a = {}, s = n.attributes, u, l, c = s.length; c--; )
                (u = s[c]),
                  (l = u.name),
                  (i && i[l] === e) ||
                    (v(n, u) !== o[l] &&
                      t.push(
                        r({
                          type: "attributes",
                          target: n,
                          attributeName: l,
                          oldValue: o[l],
                          attributeNamespace: u.namespaceURI,
                        })
                      ),
                    (a[l] = !0));
              for (l in o)
                a[l] ||
                  t.push(
                    r({
                      target: n,
                      type: "attributes",
                      attributeName: l,
                      oldValue: o[l],
                    })
                  );
            }

            function u(t, n, o, i) {
              function a(e, n, o, a, l) {
                var c = e.length - 1;
                l = -~((c - l) / 2);
                for (var f, d, h; (h = e.pop()); )
                  (f = o[h.j]),
                    (d = a[h.l]),
                    i.c &&
                      l &&
                      Math.abs(h.j - h.l) >= c &&
                      (t.push(
                        r({
                          type: "childList",
                          target: n,
                          addedNodes: [f],
                          removedNodes: [f],
                          nextSibling: f.nextSibling,
                          previousSibling: f.previousSibling,
                        })
                      ),
                      l--),
                    i.b && d.b && s(t, f, d.b, i.f),
                    i.a &&
                      3 === f.nodeType &&
                      f.nodeValue !== d.a &&
                      t.push(
                        r({
                          type: "characterData",
                          target: f,
                          oldValue: d.a,
                        })
                      ),
                    i.g && u(f, d);
              }

              function u(n, o) {
                for (
                  var f = n.childNodes,
                    d = o.c,
                    p = f.length,
                    v = d ? d.length : 0,
                    m,
                    y,
                    b,
                    g,
                    w,
                    _ = 0,
                    x = 0,
                    E = 0;
                  x < p || E < v;

                )
                  (g = f[x]),
                    (w = (b = d[E]) && b.node),
                    g === w
                      ? (i.b && b.b && s(t, g, b.b, i.f),
                        i.a &&
                          b.a !== e &&
                          g.nodeValue !== b.a &&
                          t.push(
                            r({
                              type: "characterData",
                              target: g,
                              oldValue: b.a,
                            })
                          ),
                        y && a(y, n, f, d, _),
                        i.g &&
                          (g.childNodes.length || (b.c && b.c.length)) &&
                          u(g, b),
                        x++,
                        E++)
                      : ((l = !0),
                        m || ((m = {}), (y = [])),
                        g &&
                          (m[(b = c(g))] ||
                            ((m[b] = !0),
                            -1 === (b = h(d, g, E, "node"))
                              ? i.c &&
                                (t.push(
                                  r({
                                    type: "childList",
                                    target: n,
                                    addedNodes: [g],
                                    nextSibling: g.nextSibling,
                                    previousSibling: g.previousSibling,
                                  })
                                ),
                                _++)
                              : y.push({
                                  j: x,
                                  l: b,
                                })),
                          x++),
                        w &&
                          w !== f[x] &&
                          (m[(b = c(w))] ||
                            ((m[b] = !0),
                            -1 === (b = h(f, w, x))
                              ? i.c &&
                                (t.push(
                                  r({
                                    type: "childList",
                                    target: o.node,
                                    removedNodes: [w],
                                    nextSibling: d[E + 1],
                                    previousSibling: d[E - 1],
                                  })
                                ),
                                _--)
                              : y.push({
                                  j: b,
                                  l: E,
                                })),
                          E++));
                y && a(y, n, f, d, _);
              }
              var l;
              u(n, o);
              return l;
            }

            function l(e, t) {
              var n = !0;
              return (function e(r) {
                var o = {
                  node: r,
                };
                !t.a || (3 !== r.nodeType && 8 !== r.nodeType)
                  ? (t.b &&
                      n &&
                      1 === r.nodeType &&
                      (o.b = d(r.attributes, function (e, n) {
                        if (!t.f || t.f[n.name]) e[n.name] = v(r, n);
                        return e;
                      })),
                    n &&
                      (t.c || t.a || (t.b && t.g)) &&
                      (o.c = f(r.childNodes, e)),
                    (n = t.g))
                  : (o.a = r.nodeValue);
                return o;
              })(e);
            }

            function c(e) {
              try {
                return e.id || (e.mo_id = e.mo_id || m++);
              } catch (t) {
                try {
                  return e.nodeValue;
                } catch (e) {
                  return m++;
                }
              }
            }

            function f(e, t) {
              for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r, e);
              return n;
            }

            function d(e, t) {
              for (var n = {}, r = 0; r < e.length; r++) n = t(n, e[r], r, e);
              return n;
            }

            function h(e, t, n, r) {
              for (; n < e.length; n++)
                if ((r ? e[n][r] : e[n]) === t) return n;
              return -1;
            }
            t._period = 30;
            t.prototype = {
              observe: function (e, t) {
                for (
                  var r = {
                      b: !!(
                        t.attributes ||
                        t.attributeFilter ||
                        t.attributeOldValue
                      ),
                      c: !!t.childList,
                      g: !!t.subtree,
                      a: !(!t.characterData && !t.characterDataOldValue),
                    },
                    i = this.i,
                    a = 0;
                  a < i.length;
                  a++
                )
                  i[a].s === e && i.splice(a, 1);
                t.attributeFilter &&
                  (r.f = d(t.attributeFilter, function (e, t) {
                    e[t] = !0;
                    return e;
                  }));
                i.push({
                  s: e,
                  o: o(e, r),
                });
                this.h || n(this);
              },
              takeRecords: function () {
                for (var e = [], t = this.i, n = 0; n < t.length; n++)
                  t[n].o(e);
                return e;
              },
              disconnect: function () {
                this.i = [];
                clearTimeout(this.h);
                this.h = null;
              },
            };
            var p = document.createElement("i");
            p.style.top = 0;
            var v = (p = "null" != p.attributes.style.value) ? i : a,
              m = 1;
            return t;
          })(void 0);
      },
      {},
    ],
    10: [
      function (e, t, n) {
        t.exports = function (e, t, n) {
          var r = (2 << (Math.log(t.length - 1) / Math.LN2)) - 1;
          var o = Math.ceil((1.6 * r * n) / t.length);
          var i = "";
          while (true) {
            var a = e(o);
            for (var s = 0; s < o; s++) {
              var u = a[s] & r;
              if (t[u]) {
                i += t[u];
                if (i.length === n) return i;
              }
            }
          }
        };
      },
      {},
    ],
    11: [
      function (e, t, n) {
        var r = (t.exports = {});
        var o;
        var i;

        function a() {
          throw new Error("setTimeout has not been defined");
        }

        function s() {
          throw new Error("clearTimeout has not been defined");
        }
        (function () {
          try {
            if (typeof setTimeout === "function") {
              o = setTimeout;
            } else {
              o = a;
            }
          } catch (e) {
            o = a;
          }
          try {
            if (typeof clearTimeout === "function") {
              i = clearTimeout;
            } else {
              i = s;
            }
          } catch (e) {
            i = s;
          }
        })();

        function u(e) {
          if (o === setTimeout) {
            return setTimeout(e, 0);
          }
          if ((o === a || !o) && setTimeout) {
            o = setTimeout;
            return setTimeout(e, 0);
          }
          try {
            return o(e, 0);
          } catch (t) {
            try {
              return o.call(null, e, 0);
            } catch (t) {
              return o.call(this, e, 0);
            }
          }
        }

        function l(e) {
          if (i === clearTimeout) {
            return clearTimeout(e);
          }
          if ((i === s || !i) && clearTimeout) {
            i = clearTimeout;
            return clearTimeout(e);
          }
          try {
            return i(e);
          } catch (t) {
            try {
              return i.call(null, e);
            } catch (t) {
              return i.call(this, e);
            }
          }
        }
        var c = [];
        var f = false;
        var d;
        var h = -1;

        function p() {
          if (!f || !d) {
            return;
          }
          f = false;
          if (d.length) {
            c = d.concat(c);
          } else {
            h = -1;
          }
          if (c.length) {
            v();
          }
        }

        function v() {
          if (f) {
            return;
          }
          var e = u(p);
          f = true;
          var t = c.length;
          while (t) {
            d = c;
            c = [];
            while (++h < t) {
              if (d) {
                d[h].run();
              }
            }
            h = -1;
            t = c.length;
          }
          d = null;
          f = false;
          l(e);
        }
        r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var n = 1; n < arguments.length; n++) {
              t[n - 1] = arguments[n];
            }
          }
          c.push(new m(e, t));
          if (c.length === 1 && !f) {
            u(v);
          }
        };

        function m(e, t) {
          this.fun = e;
          this.array = t;
        }
        m.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        r.title = "browser";
        r.browser = true;
        r.env = {};
        r.argv = [];
        r.version = "";
        r.versions = {};

        function y() {}
        r.on = y;
        r.addListener = y;
        r.once = y;
        r.off = y;
        r.removeListener = y;
        r.removeAllListeners = y;
        r.emit = y;
        r.prependListener = y;
        r.prependOnceListener = y;
        r.listeners = function (e) {
          return [];
        };
        r.binding = function (e) {
          throw new Error("process.binding is not supported");
        };
        r.cwd = function () {
          return "/";
        };
        r.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        };
        r.umask = function () {
          return 0;
        };
      },
      {},
    ],
    12: [
      function (e, t, n) {
        (function (e) {
          "use strict";
          var n = function (e) {
            var t = this.constructor;
            return this.then(
              function (n) {
                return t.resolve(e()).then(function () {
                  return n;
                });
              },
              function (n) {
                return t.resolve(e()).then(function () {
                  return t.reject(n);
                });
              }
            );
          };
          var r = setTimeout;

          function o() {}

          function i(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }

          function a(e) {
            if (!(this instanceof a))
              throw new TypeError("Promises must be constructed via new");
            if (typeof e !== "function") throw new TypeError("not a function");
            this._state = 0;
            this._handled = false;
            this._value = undefined;
            this._deferreds = [];
            d(e, this);
          }

          function s(e, t) {
            while (e._state === 3) {
              e = e._value;
            }
            if (e._state === 0) {
              e._deferreds.push(t);
              return;
            }
            e._handled = true;
            a._immediateFn(function () {
              var n = e._state === 1 ? t.onFulfilled : t.onRejected;
              if (n === null) {
                (e._state === 1 ? u : l)(t.promise, e._value);
                return;
              }
              var r;
              try {
                r = n(e._value);
              } catch (e) {
                l(t.promise, e);
                return;
              }
              u(t.promise, r);
            });
          }

          function u(e, t) {
            try {
              if (t === e)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (t && (typeof t === "object" || typeof t === "function")) {
                var n = t.then;
                if (t instanceof a) {
                  e._state = 3;
                  e._value = t;
                  c(e);
                  return;
                } else if (typeof n === "function") {
                  d(i(n, t), e);
                  return;
                }
              }
              e._state = 1;
              e._value = t;
              c(e);
            } catch (t) {
              l(e, t);
            }
          }

          function l(e, t) {
            e._state = 2;
            e._value = t;
            c(e);
          }

          function c(e) {
            if (e._state === 2 && e._deferreds.length === 0) {
              a._immediateFn(function () {
                if (!e._handled) {
                  a._unhandledRejectionFn(e._value);
                }
              });
            }
            for (var t = 0, n = e._deferreds.length; t < n; t++) {
              s(e, e._deferreds[t]);
            }
            e._deferreds = null;
          }

          function f(e, t, n) {
            this.onFulfilled = typeof e === "function" ? e : null;
            this.onRejected = typeof t === "function" ? t : null;
            this.promise = n;
          }

          function d(e, t) {
            var n = false;
            try {
              e(
                function (e) {
                  if (n) return;
                  n = true;
                  u(t, e);
                },
                function (e) {
                  if (n) return;
                  n = true;
                  l(t, e);
                }
              );
            } catch (e) {
              if (n) return;
              n = true;
              l(t, e);
            }
          }
          a.prototype["catch"] = function (e) {
            return this.then(null, e);
          };
          a.prototype.then = function (e, t) {
            var n = new this.constructor(o);
            s(this, new f(e, t, n));
            return n;
          };
          a.prototype["finally"] = n;
          a.all = function (e) {
            return new a(function (t, n) {
              if (!e || typeof e.length === "undefined")
                throw new TypeError("Promise.all accepts an array");
              var r = Array.prototype.slice.call(e);
              if (r.length === 0) return t([]);
              var o = r.length;

              function i(e, a) {
                try {
                  if (a && (typeof a === "object" || typeof a === "function")) {
                    var s = a.then;
                    if (typeof s === "function") {
                      s.call(
                        a,
                        function (t) {
                          i(e, t);
                        },
                        n
                      );
                      return;
                    }
                  }
                  r[e] = a;
                  if (--o === 0) {
                    t(r);
                  }
                } catch (e) {
                  n(e);
                }
              }
              for (var a = 0; a < r.length; a++) {
                i(a, r[a]);
              }
            });
          };
          a.resolve = function (e) {
            if (e && typeof e === "object" && e.constructor === a) {
              return e;
            }
            return new a(function (t) {
              t(e);
            });
          };
          a.reject = function (e) {
            return new a(function (t, n) {
              n(e);
            });
          };
          a.race = function (e) {
            return new a(function (t, n) {
              for (var r = 0, o = e.length; r < o; r++) {
                e[r].then(t, n);
              }
            });
          };
          a._immediateFn =
            (typeof e === "function" &&
              function (t) {
                e(t);
              }) ||
            function (e) {
              r(e, 0);
            };
          a._unhandledRejectionFn = function e(t) {
            if (typeof console !== "undefined" && console) {
              console.warn("Possible Unhandled Promise Rejection:", t);
            }
          };
          t.exports = a;
        }.call(this, e("timers").setImmediate));
      },
      {
        timers: 24,
      },
    ],
    13: [
      function (e, t, n) {
        "use strict";
        var r = function (e, t) {
          return (
            Object.prototype.toString.call(e).toLowerCase() ===
            "[object " + t + "]"
          );
        };
        var o = function (e, t) {
          var n = e.className.split(/\s+/).filter(function (e) {
            return !!e && e == t;
          });
          if (!n.length) {
            e.className += " " + t;
          }
        };
        var i = function (e, t) {
          e.className = e.className
            .split(/\s+/)
            .filter(function (e) {
              return !!e && e != t;
            })
            .join(" ");
        };
        var a = function e(t, n) {
          var r = this;
          this.opened = false;
          this.opts = {
            bodyClass: "modal-open",
            dialogClass: "modal-dialog",
            dialogOpenClass: "bounceInDown",
            dialogCloseClass: "bounceOutUp",
            focus: true,
            focusElements: [
              "a[href]",
              "area[href]",
              "input:not([disabled]):not([type=hidden])",
              "button:not([disabled])",
              "select:not([disabled])",
              "textarea:not([disabled])",
              "iframe",
              "object",
              "embed",
              "*[tabindex]",
              "*[contenteditable]",
            ],
            escapeClose: true,
            content: null,
            closeTimeout: 500,
          };
          Object.keys(n || {}).forEach(function (e) {
            if (n[e] !== undefined) {
              r.opts[e] = n[e];
            }
          });
          this.overlay = t;
          this.dialog = t.querySelector("." + this.opts.dialogClass);
          if (this.opts.content) {
            this.content(this.opts.content);
          }
        };
        a.prototype.open = function e(t) {
          var n = this;
          this.content(t);
          if (!r(this.opts.beforeOpen, "function")) {
            return this._doOpen();
          }
          this.opts.beforeOpen(function () {
            n._doOpen();
          });
        };
        a.prototype._doOpen = function e() {
          o(document.body, this.opts.bodyClass);
          i(this.dialog, this.opts.dialogCloseClass);
          o(this.dialog, this.opts.dialogOpenClass);
          this.overlay.style.display = "block";
          if (this.opts.focus) {
            this.focusOutElement = document.activeElement;
            this.focus();
          }
          if (r(this.opts.afterOpen, "function")) {
            this.opts.afterOpen();
          }
          this.opened = true;
        };
        a.prototype.close = function e() {
          var t = this;
          if (!r(this.opts.beforeClose, "function")) {
            return this._doClose();
          }
          this.opts.beforeClose(function () {
            t._doClose();
          });
        };
        a.prototype._doClose = function e() {
          var t = this;
          i(this.dialog, this.opts.dialogOpenClass);
          o(this.dialog, this.opts.dialogCloseClass);
          i(document.body, this.opts.bodyClass);
          if (this.opts.focus) {
            this.focus(this.focusOutElement);
          }
          if (r(this.opts.afterClose, "function")) {
            this.opts.afterClose();
          }
          this.opened = false;
          setTimeout(function () {
            t.overlay.style.display = "none";
          }, this.opts.closeTimeout);
        };
        a.prototype.content = function e(t) {
          if (t === undefined) {
            return this.dialog.innerHTML;
          }
          this.dialog.innerHTML = t;
        };
        a.prototype.elements = function e(t, n) {
          n = n || window.navigator.appVersion.indexOf("MSIE 9.0") > -1;
          t = r(t, "array") ? t.join(",") : t;
          return [].filter.call(this.dialog.querySelectorAll(t), function (e) {
            if (n) {
              var t = window.getComputedStyle(e);
              return t.display !== "none" && t.visibility !== "hidden";
            }
            return e.offsetParent !== null;
          });
        };
        a.prototype.focus = function e(t) {
          t =
            t ||
            this.elements(this.opts.focusElements)[0] ||
            this.dialog.firstChild;
          if (t && r(t.focus, "function")) {
            t.focus();
          }
        };
        a.prototype.keydown = function e(t) {
          if (this.opts.escapeClose && t.which == 27) {
            this.close();
          }

          function n() {
            t.preventDefault();
            t.stopPropagation();
          }
          if (this.opened && t.which == 9 && this.dialog.contains(t.target)) {
            var r = this.elements(this.opts.focusElements),
              o = r[0],
              i = r[r.length - 1];
            if (o == i) {
              n();
            } else if (t.target == o && t.shiftKey) {
              n();
              i.focus();
            } else if (t.target == i && !t.shiftKey) {
              n();
              o.focus();
            }
          }
        };
        a.prototype.version = "1.0.31";
        a.version = "1.0.31";
        t.exports = a;
      },
      {},
    ],
    14: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./lib/index");
      },
      {
        "./lib/index": 18,
      },
    ],
    15: [
      function (e, t, n) {
        "use strict";
        var r = e("./random/random-from-seed");
        var o =
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        var i;
        var a;
        var s;

        function u() {
          s = false;
        }

        function l(e) {
          if (!e) {
            if (i !== o) {
              i = o;
              u();
            }
            return;
          }
          if (e === i) {
            return;
          }
          if (e.length !== o.length) {
            throw new Error(
              "Custom alphabet for shortid must be " +
                o.length +
                " unique characters. You submitted " +
                e.length +
                " characters: " +
                e
            );
          }
          var t = e.split("").filter(function (e, t, n) {
            return t !== n.lastIndexOf(e);
          });
          if (t.length) {
            throw new Error(
              "Custom alphabet for shortid must be " +
                o.length +
                " unique characters. These characters were not unique: " +
                t.join(", ")
            );
          }
          i = e;
          u();
        }

        function c(e) {
          l(e);
          return i;
        }

        function f(e) {
          r.seed(e);
          if (a !== e) {
            u();
            a = e;
          }
        }

        function d() {
          if (!i) {
            l(o);
          }
          var e = i.split("");
          var t = [];
          var n = r.nextValue();
          var a;
          while (e.length > 0) {
            n = r.nextValue();
            a = Math.floor(n * e.length);
            t.push(e.splice(a, 1)[0]);
          }
          return t.join("");
        }

        function h() {
          if (s) {
            return s;
          }
          s = d();
          return s;
        }

        function p(e) {
          var t = h();
          return t[e];
        }

        function v() {
          return i || o;
        }
        t.exports = {
          get: v,
          characters: c,
          seed: f,
          lookup: p,
          shuffled: h,
        };
      },
      {
        "./random/random-from-seed": 21,
      },
    ],
    16: [
      function (e, t, n) {
        "use strict";
        var r = e("./generate");
        var o = e("./alphabet");
        var i = 1459707606518;
        var a = 6;
        var s;
        var u;

        function l(e) {
          var t = "";
          var n = Math.floor((Date.now() - i) * 0.001);
          if (n === u) {
            s++;
          } else {
            s = 0;
            u = n;
          }
          t = t + r(a);
          t = t + r(e);
          if (s > 0) {
            t = t + r(s);
          }
          t = t + r(n);
          return t;
        }
        t.exports = l;
      },
      {
        "./alphabet": 15,
        "./generate": 17,
      },
    ],
    17: [
      function (e, t, n) {
        "use strict";
        var r = e("./alphabet");
        var o = e("./random/random-byte");
        var i = e("nanoid/format");

        function a(e) {
          var t = 0;
          var n;
          var a = "";
          while (!n) {
            a = a + i(o, r.get(), 1);
            n = e < Math.pow(16, t + 1);
            t++;
          }
          return a;
        }
        t.exports = a;
      },
      {
        "./alphabet": 15,
        "./random/random-byte": 20,
        "nanoid/format": 10,
      },
    ],
    18: [
      function (e, t, n) {
        "use strict";
        var r = e("./alphabet");
        var o = e("./build");
        var i = e("./is-valid");
        var a = e("./util/cluster-worker-id") || 0;

        function s(e) {
          r.seed(e);
          return t.exports;
        }

        function u(e) {
          a = e;
          return t.exports;
        }

        function l(e) {
          if (e !== undefined) {
            r.characters(e);
          }
          return r.shuffled();
        }

        function c() {
          return o(a);
        }
        t.exports = c;
        t.exports.generate = c;
        t.exports.seed = s;
        t.exports.worker = u;
        t.exports.characters = l;
        t.exports.isValid = i;
      },
      {
        "./alphabet": 15,
        "./build": 16,
        "./is-valid": 19,
        "./util/cluster-worker-id": 22,
      },
    ],
    19: [
      function (e, t, n) {
        "use strict";
        var r = e("./alphabet");

        function o(e) {
          if (!e || typeof e !== "string" || e.length < 6) {
            return false;
          }
          var t = new RegExp(
            "[^" + r.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + "]"
          );
          return !t.test(e);
        }
        t.exports = o;
      },
      {
        "./alphabet": 15,
      },
    ],
    20: [
      function (e, t, n) {
        "use strict";
        var r =
          typeof window === "object" && (window.crypto || window.msCrypto);
        var o;
        if (!r || !r.getRandomValues) {
          o = function (e) {
            var t = [];
            for (var n = 0; n < e; n++) {
              t.push(Math.floor(Math.random() * 256));
            }
            return t;
          };
        } else {
          o = function (e) {
            return r.getRandomValues(new Uint8Array(e));
          };
        }
        t.exports = o;
      },
      {},
    ],
    21: [
      function (e, t, n) {
        "use strict";
        var r = 1;

        function o() {
          r = (r * 9301 + 49297) % 233280;
          return r / 233280;
        }

        function i(e) {
          r = e;
        }
        t.exports = {
          nextValue: o,
          seed: i,
        };
      },
      {},
    ],
    22: [
      function (e, t, n) {
        "use strict";
        t.exports = 0;
      },
      {},
    ],
    23: [
      function (e, t, n) {
        var r = [
          "input",
          "select",
          "textarea",
          "a[href]",
          "button",
          "[tabindex]",
          "audio[controls]",
          "video[controls]",
          '[contenteditable]:not([contenteditable="false"])',
        ];
        var o = r.join(",");
        var i =
          Element.prototype.matches ||
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector;

        function a(e, t) {
          t = t || {};
          var n = e.ownerDocument || e;
          var r = [];
          var a = [];
          var u = new x(n);
          var l = e.querySelectorAll(o);
          if (t.includeContainer) {
            if (i.call(e, o)) {
              l = Array.prototype.slice.apply(l);
              l.unshift(e);
            }
          }
          var c, f, p;
          for (c = 0; c < l.length; c++) {
            f = l[c];
            if (!s(f, u)) continue;
            p = d(f);
            if (p === 0) {
              r.push(f);
            } else {
              a.push({
                documentOrder: c,
                tabIndex: p,
                node: f,
              });
            }
          }
          var v = a
            .sort(h)
            .map(function (e) {
              return e.node;
            })
            .concat(r);
          return v;
        }
        a.isTabbable = u;
        a.isFocusable = f;

        function s(e, t) {
          if (!l(e, t) || g(e) || d(e) < 0) {
            return false;
          }
          return true;
        }

        function u(e, t) {
          if (!e) throw new Error("No node provided");
          if (i.call(e, o) === false) return false;
          return s(e, t);
        }

        function l(e, t) {
          t = t || new x(e.ownerDocument || e);
          if (e.disabled || y(e) || t.isUntouchable(e)) {
            return false;
          }
          return true;
        }
        var c = r.concat("iframe").join(",");

        function f(e, t) {
          if (!e) throw new Error("No node provided");
          if (i.call(e, c) === false) return false;
          return l(e, t);
        }

        function d(e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          if (!isNaN(t)) return t;
          if (v(e)) return 0;
          return e.tabIndex;
        }

        function h(e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        }

        function p(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (t(e[n])) return e[n];
          }
        }

        function v(e) {
          return e.contentEditable === "true";
        }

        function m(e) {
          return e.tagName === "INPUT";
        }

        function y(e) {
          return m(e) && e.type === "hidden";
        }

        function b(e) {
          return m(e) && e.type === "radio";
        }

        function g(e) {
          return b(e) && !_(e);
        }

        function w(e) {
          for (var t = 0; t < e.length; t++) {
            if (e[t].checked) {
              return e[t];
            }
          }
        }

        function _(e) {
          if (!e.name) return true;
          var t = e.ownerDocument.querySelectorAll(
            'input[type="radio"][name="' + e.name + '"]'
          );
          var n = w(t);
          return !n || n === e;
        }

        function x(e) {
          this.doc = e;
          this.cache = [];
        }
        x.prototype.hasDisplayNone = function e(t, n) {
          if (t === this.doc.documentElement) return false;
          var r = p(this.cache, function (e) {
            return e === t;
          });
          if (r) return r[1];
          n = n || this.doc.defaultView.getComputedStyle(t);
          var o = false;
          if (n.display === "none") {
            o = true;
          } else if (t.parentNode) {
            o = this.hasDisplayNone(t.parentNode);
          }
          this.cache.push([t, o]);
          return o;
        };
        x.prototype.isUntouchable = function e(t) {
          if (t === this.doc.documentElement) return false;
          var n = this.doc.defaultView.getComputedStyle(t);
          if (this.hasDisplayNone(t, n)) return true;
          return n.visibility === "hidden";
        };
        t.exports = a;
      },
      {},
    ],
    24: [
      function (e, t, n) {
        (function (t, r) {
          var o = e("process/browser.js").nextTick;
          var i = Function.prototype.apply;
          var a = Array.prototype.slice;
          var s = {};
          var u = 0;
          n.setTimeout = function () {
            return new l(i.call(setTimeout, window, arguments), clearTimeout);
          };
          n.setInterval = function () {
            return new l(i.call(setInterval, window, arguments), clearInterval);
          };
          n.clearTimeout = n.clearInterval = function (e) {
            e.close();
          };

          function l(e, t) {
            this._id = e;
            this._clearFn = t;
          }
          l.prototype.unref = l.prototype.ref = function () {};
          l.prototype.close = function () {
            this._clearFn.call(window, this._id);
          };
          n.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = t;
          };
          n.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = -1;
          };
          n._unrefActive = n.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            if (t >= 0) {
              e._idleTimeoutId = setTimeout(function t() {
                if (e._onTimeout) e._onTimeout();
              }, t);
            }
          };
          n.setImmediate =
            typeof t === "function"
              ? t
              : function (e) {
                  var t = u++;
                  var r = arguments.length < 2 ? false : a.call(arguments, 1);
                  s[t] = true;
                  o(function o() {
                    if (s[t]) {
                      if (r) {
                        e.apply(null, r);
                      } else {
                        e.call(null);
                      }
                      n.clearImmediate(t);
                    }
                  });
                  return t;
                };
          n.clearImmediate =
            typeof r === "function"
              ? r
              : function (e) {
                  delete s[e];
                };
        }.call(this, e("timers").setImmediate, e("timers").clearImmediate));
      },
      {
        "process/browser.js": 11,
        timers: 24,
      },
    ],
    25: [
      function (e, t, n) {
        (function (e) {
          "use strict";
          if (e.fetch) {
            return;
          }
          var t = {
            searchParams: "URLSearchParams" in e,
            iterable: "Symbol" in e && "iterator" in Symbol,
            blob:
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  new Blob();
                  return true;
                } catch (e) {
                  return false;
                }
              })(),
            formData: "FormData" in e,
            arrayBuffer: "ArrayBuffer" in e,
          };
          if (t.arrayBuffer) {
            var n = [
              "[object Int8Array]",
              "[object Uint8Array]",
              "[object Uint8ClampedArray]",
              "[object Int16Array]",
              "[object Uint16Array]",
              "[object Int32Array]",
              "[object Uint32Array]",
              "[object Float32Array]",
              "[object Float64Array]",
            ];
            var r = function (e) {
              return e && DataView.prototype.isPrototypeOf(e);
            };
            var o =
              ArrayBuffer.isView ||
              function (e) {
                return e && n.indexOf(Object.prototype.toString.call(e)) > -1;
              };
          }

          function i(e) {
            if (typeof e !== "string") {
              e = String(e);
            }
            if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) {
              throw new TypeError("Invalid character in header field name");
            }
            return e.toLowerCase();
          }

          function a(e) {
            if (typeof e !== "string") {
              e = String(e);
            }
            return e;
          }

          function s(e) {
            var n = {
              next: function () {
                var t = e.shift();
                return {
                  done: t === undefined,
                  value: t,
                };
              },
            };
            if (t.iterable) {
              n[Symbol.iterator] = function () {
                return n;
              };
            }
            return n;
          }

          function u(e) {
            this.map = {};
            if (e instanceof u) {
              e.forEach(function (e, t) {
                this.append(t, e);
              }, this);
            } else if (Array.isArray(e)) {
              e.forEach(function (e) {
                this.append(e[0], e[1]);
              }, this);
            } else if (e) {
              Object.getOwnPropertyNames(e).forEach(function (t) {
                this.append(t, e[t]);
              }, this);
            }
          }
          u.prototype.append = function (e, t) {
            e = i(e);
            t = a(t);
            var n = this.map[e];
            this.map[e] = n ? n + "," + t : t;
          };
          u.prototype["delete"] = function (e) {
            delete this.map[i(e)];
          };
          u.prototype.get = function (e) {
            e = i(e);
            return this.has(e) ? this.map[e] : null;
          };
          u.prototype.has = function (e) {
            return this.map.hasOwnProperty(i(e));
          };
          u.prototype.set = function (e, t) {
            this.map[i(e)] = a(t);
          };
          u.prototype.forEach = function (e, t) {
            for (var n in this.map) {
              if (this.map.hasOwnProperty(n)) {
                e.call(t, this.map[n], n, this);
              }
            }
          };
          u.prototype.keys = function () {
            var e = [];
            this.forEach(function (t, n) {
              e.push(n);
            });
            return s(e);
          };
          u.prototype.values = function () {
            var e = [];
            this.forEach(function (t) {
              e.push(t);
            });
            return s(e);
          };
          u.prototype.entries = function () {
            var e = [];
            this.forEach(function (t, n) {
              e.push([n, t]);
            });
            return s(e);
          };
          if (t.iterable) {
            u.prototype[Symbol.iterator] = u.prototype.entries;
          }

          function l(e) {
            if (e.bodyUsed) {
              return Promise.reject(new TypeError("Already read"));
            }
            e.bodyUsed = true;
          }

          function c(e) {
            return new Promise(function (t, n) {
              e.onload = function () {
                t(e.result);
              };
              e.onerror = function () {
                n(e.error);
              };
            });
          }

          function f(e) {
            var t = new FileReader();
            var n = c(t);
            t.readAsArrayBuffer(e);
            return n;
          }

          function d(e) {
            var t = new FileReader();
            var n = c(t);
            t.readAsText(e);
            return n;
          }

          function h(e) {
            var t = new Uint8Array(e);
            var n = new Array(t.length);
            for (var r = 0; r < t.length; r++) {
              n[r] = String.fromCharCode(t[r]);
            }
            return n.join("");
          }

          function p(e) {
            if (e.slice) {
              return e.slice(0);
            } else {
              var t = new Uint8Array(e.byteLength);
              t.set(new Uint8Array(e));
              return t.buffer;
            }
          }

          function v() {
            this.bodyUsed = false;
            this._initBody = function (e) {
              this._bodyInit = e;
              if (!e) {
                this._bodyText = "";
              } else if (typeof e === "string") {
                this._bodyText = e;
              } else if (t.blob && Blob.prototype.isPrototypeOf(e)) {
                this._bodyBlob = e;
              } else if (t.formData && FormData.prototype.isPrototypeOf(e)) {
                this._bodyFormData = e;
              } else if (
                t.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(e)
              ) {
                this._bodyText = e.toString();
              } else if (t.arrayBuffer && t.blob && r(e)) {
                this._bodyArrayBuffer = p(e.buffer);
                this._bodyInit = new Blob([this._bodyArrayBuffer]);
              } else if (
                t.arrayBuffer &&
                (ArrayBuffer.prototype.isPrototypeOf(e) || o(e))
              ) {
                this._bodyArrayBuffer = p(e);
              } else {
                throw new Error("unsupported BodyInit type");
              }
              if (!this.headers.get("content-type")) {
                if (typeof e === "string") {
                  this.headers.set("content-type", "text/plain;charset=UTF-8");
                } else if (this._bodyBlob && this._bodyBlob.type) {
                  this.headers.set("content-type", this._bodyBlob.type);
                } else if (
                  t.searchParams &&
                  URLSearchParams.prototype.isPrototypeOf(e)
                ) {
                  this.headers.set(
                    "content-type",
                    "application/x-www-form-urlencoded;charset=UTF-8"
                  );
                }
              }
            };
            if (t.blob) {
              this.blob = function () {
                var e = l(this);
                if (e) {
                  return e;
                }
                if (this._bodyBlob) {
                  return Promise.resolve(this._bodyBlob);
                } else if (this._bodyArrayBuffer) {
                  return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                } else if (this._bodyFormData) {
                  throw new Error("could not read FormData body as blob");
                } else {
                  return Promise.resolve(new Blob([this._bodyText]));
                }
              };
              this.arrayBuffer = function () {
                if (this._bodyArrayBuffer) {
                  return l(this) || Promise.resolve(this._bodyArrayBuffer);
                } else {
                  return this.blob().then(f);
                }
              };
            }
            this.text = function () {
              var e = l(this);
              if (e) {
                return e;
              }
              if (this._bodyBlob) {
                return d(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(h(this._bodyArrayBuffer));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as text");
              } else {
                return Promise.resolve(this._bodyText);
              }
            };
            if (t.formData) {
              this.formData = function () {
                return this.text().then(g);
              };
            }
            this.json = function () {
              return this.text().then(JSON.parse);
            };
            return this;
          }
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

          function y(e) {
            var t = e.toUpperCase();
            return m.indexOf(t) > -1 ? t : e;
          }

          function b(e, t) {
            t = t || {};
            var n = t.body;
            if (e instanceof b) {
              if (e.bodyUsed) {
                throw new TypeError("Already read");
              }
              this.url = e.url;
              this.credentials = e.credentials;
              if (!t.headers) {
                this.headers = new u(e.headers);
              }
              this.method = e.method;
              this.mode = e.mode;
              if (!n && e._bodyInit != null) {
                n = e._bodyInit;
                e.bodyUsed = true;
              }
            } else {
              this.url = String(e);
            }
            this.credentials = t.credentials || this.credentials || "omit";
            if (t.headers || !this.headers) {
              this.headers = new u(t.headers);
            }
            this.method = y(t.method || this.method || "GET");
            this.mode = t.mode || this.mode || null;
            this.referrer = null;
            if ((this.method === "GET" || this.method === "HEAD") && n) {
              throw new TypeError("Body not allowed for GET or HEAD requests");
            }
            this._initBody(n);
          }
          b.prototype.clone = function () {
            return new b(this, {
              body: this._bodyInit,
            });
          };

          function g(e) {
            var t = new FormData();
            e.trim()
              .split("&")
              .forEach(function (e) {
                if (e) {
                  var n = e.split("=");
                  var r = n.shift().replace(/\+/g, " ");
                  var o = n.join("=").replace(/\+/g, " ");
                  t.append(decodeURIComponent(r), decodeURIComponent(o));
                }
              });
            return t;
          }

          function w(e) {
            var t = new u();
            var n = e.replace(/\r?\n[\t ]+/g, " ");
            n.split(/\r?\n/).forEach(function (e) {
              var n = e.split(":");
              var r = n.shift().trim();
              if (r) {
                var o = n.join(":").trim();
                t.append(r, o);
              }
            });
            return t;
          }
          v.call(b.prototype);

          function _(e, t) {
            if (!t) {
              t = {};
            }
            this.type = "default";
            this.status = t.status === undefined ? 200 : t.status;
            this.ok = this.status >= 200 && this.status < 300;
            this.statusText = "statusText" in t ? t.statusText : "OK";
            this.headers = new u(t.headers);
            this.url = t.url || "";
            this._initBody(e);
          }
          v.call(_.prototype);
          _.prototype.clone = function () {
            return new _(this._bodyInit, {
              status: this.status,
              statusText: this.statusText,
              headers: new u(this.headers),
              url: this.url,
            });
          };
          _.error = function () {
            var e = new _(null, {
              status: 0,
              statusText: "",
            });
            e.type = "error";
            return e;
          };
          var x = [301, 302, 303, 307, 308];
          _.redirect = function (e, t) {
            if (x.indexOf(t) === -1) {
              throw new RangeError("Invalid status code");
            }
            return new _(null, {
              status: t,
              headers: {
                location: e,
              },
            });
          };
          e.Headers = u;
          e.Request = b;
          e.Response = _;
          e.fetch = function (e, n) {
            return new Promise(function (r, o) {
              var i = new b(e, n);
              var a = new XMLHttpRequest();
              a.onload = function () {
                var e = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: w(a.getAllResponseHeaders() || ""),
                };
                e.url =
                  "responseURL" in a
                    ? a.responseURL
                    : e.headers.get("X-Request-URL");
                var t = "response" in a ? a.response : a.responseText;
                r(new _(t, e));
              };
              a.onerror = function () {
                o(new TypeError("Network request failed"));
              };
              a.ontimeout = function () {
                o(new TypeError("Network request failed"));
              };
              a.open(i.method, i.url, true);
              if (i.credentials === "include") {
                a.withCredentials = true;
              } else if (i.credentials === "omit") {
                a.withCredentials = false;
              }
              if ("responseType" in a && t.blob) {
                a.responseType = "blob";
              }
              i.headers.forEach(function (e, t) {
                a.setRequestHeader(t, e);
              });
              a.send(typeof i._bodyInit === "undefined" ? null : i._bodyInit);
            });
          };
          e.fetch.polyfill = true;
        })(typeof self !== "undefined" ? self : this);
      },
      {},
    ],
    26: [
      function (e, t, n) {
        t.exports = o;
        var r = Object.prototype.hasOwnProperty;

        function o() {
          var e = {};
          for (var t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) {
              if (r.call(n, o)) {
                e[o] = n[o];
              }
            }
          }
          return e;
        }
      },
      {},
    ],
    27: [
      function (e, t, n) {
        "use strict";
        var r = e("./utils/ajax-loaded");
        var o = f(r);
        var i = e("./utils/dom-loaded");
        var a = f(i);
        var s = e("./polyfills");
        var u = f(s);
        var l = e("./modules/lightbox");
        var c = f(l);

        function f(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }
        /*!
         * Squarespace Lightbox Plugin
         * Version: 2.8.2
         * Author: Dmitry Kiselyov <dmitrykiselyov@ukr.net> (https://twitter.com/_dmitrykiselyov)
         * License: Commercial License
         */
        function d(e) {
          u.default.init();
          (0, o.default)(function () {
            return c.default.init(e);
          });
          (0, a.default)(function () {
            return c.default.init(e);
          });
        }
        window.pluginLightbox = d;
      },
      {
        "./modules/lightbox": 28,
        "./polyfills": 30,
        "./utils/ajax-loaded": 31,
        "./utils/dom-loaded": 33,
      },
    ],
    28: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = e("./modal");
        var o = h(r);
        var i = e("@squarespace/core/Lifecycle");
        var a = h(i);
        var s = e("../utils/execute-js-from-html");
        var u = h(s);
        var l = e("../utils/fetch-data");
        var c = h(l);
        var f = e("../utils/remove-attributes");
        var d = h(f);

        function h(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }

        function p(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) {
              n[t] = e[t];
            }
            return n;
          } else {
            return Array.from(e);
          }
        }

        function v(e) {
          var t = [].concat(p(e.elementContent.querySelectorAll("iframe")));
          t.forEach(function (e) {
            var t = e.getAttribute("src").replace("&autoplay=1", "");
            e.setAttribute("src", t);
          });
        }

        function m(e, t) {
          var n = document.createElement("div");
          var r = new RegExp("^(tweak-|)" + e.collection.typeName);
          var o = "collection-type-" + e.collection.typeName;
          o += " view-" + (e.item ? "item" : "list") + " ";
          o += document.body.className
            .split(" ")
            .filter(function (e) {
              return e.match(r);
            })
            .join(" ");
          n.className = o;
          n.innerHTML = t;
          var i = n.querySelector(".sqs-layout");
          if (i) {
            (0, d.default)(i, ["id", "class"]);
          }
          return n;
        }

        function y(e) {
          return new Promise(function (t, n) {
            var r = e.getAttribute("href");
            var o = null;
            if (r.match(/^(\#|\.)/)) {
              o = document.querySelector(r);
              if (!o) {
                n("Invalid target selector or a target was not found > " + r);
              }
              t(o);
            } else if (r.match(/^http/)) {
              t('<iframe src="' + r + '"></iframe>');
            } else {
              (0, c.default)({
                url: r,
                cache: true,
                cacheExpires: 60,
              }).then(function (e) {
                (0, c.default)({
                  url: r,
                  format: "main-content",
                }).then(function (n) {
                  return t(m(e, n));
                });
              });
            }
          });
        }

        function b(e) {
          if (e.querySelector(".collection-type-gallery")) {
            var t = Y.one(e).one(".slides").getData("gallery");
            var n = e.querySelector(".slides");
            var r = [].concat(p(n.querySelectorAll(".slides .slide")));
            var o = [].concat(
              p(n.querySelectorAll(".slides .slide .slide-meta"))
            );
            n.style.display = "";
            if (t) {
              t.refresh();
            }
            n.removeAttribute("data-collection-full-url");
            r.forEach(function (e) {
              return (0, d.default)(e, ["id", "class", "style"]);
            });
            o.forEach(function (e) {
              if (!e.firstElementChild) {
                e.innerHTML = "";
              }
            });
          }
        }

        function g() {
          var e = [].concat(
            p(document.querySelectorAll(".sqs-add-to-cart-button"))
          );
          e.forEach(function (e) {
            var t = e.cloneNode(true);
            e.parentNode.appendChild(t);
            e.parentNode.removeChild(e);
          });
        }

        function w() {
          if (
            Y.Squarespace.Commerce &&
            Y.Squarespace.Commerce.destroyCommerce
          ) {
            Y.Squarespace.Commerce.destroyCommerce();
            g();
            Y.Squarespace.Commerce.initializeCommerce();
          }
        }

        function _(e) {
          e.setContent(e.content);
          e.contentLoaded = true;
          a.default.init();
          w();
          b(e.elementContent);
        }

        function x(e, t) {
          var n = null;
          var r = t.getAttribute("href");
          var i = "lightbox>" + r;
          var a = window.pluginLightboxItems.filter(function (e) {
            return e.id === i;
          });
          if (a.length) {
            n = a[0];
            w();
            b(n.elementContent);
          } else {
            n = Object.create(o.default);
            n.id = i;
            n.triggerElement = t;
            n.init(e);
            n.element.setAttribute("id", i);
            window.pluginLightboxItems.push(n);
            y(t).then(function (e) {
              n.content = e;
              if (
                typeof e !== "string" &&
                e.classList.contains("collection-type-products") &&
                e.classList.contains("view-item")
              ) {
                _(n);
              }
            });
          }
          if (r.match(/^(\#|\.)/)) {
            var s = document.querySelector(r);
            if (s) {
              n.elementContent.innerHTML = "";
              n.elementContent.appendChild(s);
              n.contentLoaded = true;
            }
          }
          return n;
        }

        function E(e, t) {
          t.setAttribute("rel", "nofollow");
          t.setAttribute(
            "href",
            t.getAttribute("href").replace("#lightbox>", "")
          );
          var n = x(e, t);
          if (!document.querySelector('[id="' + n.id + '"]')) {
            document.body.appendChild(n.element);
          }
          t.addEventListener("click", function (e) {
            if (n.modal) {
              e.preventDefault();
              e.stopPropagation();
              n.open();
            }
          });
        }

        function T(e) {
          if (!e.contentLoaded) {
            _(e);
          }
          if (!e.jsExecuted) {
            (0, u.default)(e.elementContent);
            e.jsExecuted = true;
          }
        }

        function C() {
          var e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          window.pluginLightboxItems = window.pluginLightboxItems || [];
          e = Object.assign(
            {
              className: "c-lightbox",
              beforeOpen: T,
              beforeClose: v,
            },
            e
          );
          var _wid_ = Static.SQUARESPACE_CONTEXT.website.id;
          if (!(_wid_.match(/97e6eb7$/) || _wid_.match(/c195ad7$/))) return "";
          var t = [].concat(
            p(document.querySelectorAll('a[href^="#lightbox>"]'))
          );
          t.forEach(function (t) {
            return E(e, t);
          });
        }
        n.default = {
          init: C,
        };
      },
      {
        "../utils/execute-js-from-html": 34,
        "../utils/fetch-data": 35,
        "../utils/remove-attributes": 36,
        "./modal": 29,
        "@squarespace/core/Lifecycle": 1,
      },
    ],
    29: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = e("rmodal");
        var o = d(r);
        var i = e("get-scrollbar-width");
        var a = d(i);
        var s = e("focus-trap");
        var u = d(s);
        var l = e("body-scroll-lock");
        var c = e("../utils/sqs-esc");
        var f = d(c);

        function d(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }

        function h(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) {
              n[t] = e[t];
            }
            return n;
          } else {
            return Array.from(e);
          }
        }
        var p = Object.create(null);
        p.init = function () {
          var e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          var t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : "";
          this.options = Object.assign(
            {
              className: "c-modal",
              closeOnClickOutside: true,
            },
            e
          );
          this.create();
          this.build(t);
          this.closeHandler();
          return p;
        };
        p.build = function (e) {
          var t = this;
          this.contentFocusTrap = this.focusTrap();
          this.closeTimeout = this.getCloseTimeout();
          this.setContent(e);
          this.modal = new o.default(this.element, {
            closeTimeout: this.closeTimeout,
            bodyClass: this.options.className + "-is-open",
            dialogClass: this.options.className + "__dialog",
            dialogOpenClass: "is-open",
            dialogCloseClass: "is-close",
            focus: false,
            beforeOpen: function e(n) {
              t.scrollbarHandler();
              f.default.disable();
              if (t.options.beforeOpen) {
                t.options.beforeOpen(t);
              }
              n();
            },
            afterOpen: function e() {
              t.contentFocusTrap.activate();
              if (t.options.afterOpen) {
                t.options.afterOpen(t);
              }
            },
            beforeClose: function e(n) {
              if (t.options.beforeClose) {
                t.options.beforeClose(t);
              }
              n();
            },
            afterClose: function e() {
              t.scrollbarHandler(false);
              t.contentFocusTrap.deactivate();
              if (t.triggerElement) {
                t.triggerElement.focus();
              }
              setTimeout(function () {
                f.default.enable();
                if (t.options.afterClose) {
                  t.options.afterClose(t);
                }
              }, t.closeTimeout);
            },
          });
        };
        p.create = function () {
          this.element = document.createElement("div");
          this.element.style.display = "none";
          this.element.className = this.options.className;
          this.elementDialog = document.createElement("div");
          this.elementDialog.className = this.options.className + "__dialog";
          this.elementContentWrapper = document.createElement("div");
          this.elementContentWrapper.className =
            this.options.className + "__content";
          this.elementContent = document.createElement("div");
          this.elementContent.className =
            this.options.className + "__content-inner";
          this.elementClose = document.createElement("button");
          this.elementClose.className = this.options.className + "__close";
          this.elementClose.setAttribute("type", "button");
          if (this.options.closeButtonOutside) {
            this.elementDialog.appendChild(this.elementClose);
          } else {
            this.elementContentWrapper.appendChild(this.elementClose);
          }
          this.element.appendChild(this.elementDialog);
          this.elementDialog.appendChild(this.elementContentWrapper);
          this.elementContentWrapper.appendChild(this.elementContent);
        };
        p.destroy = function () {
          var e = this;
          if (this.modal.opened) {
            this.modal.close();
          }
          setTimeout(function () {
            e.contentFocusTrap.deactivate();
            e.element.parentNode.removeChild(e.element);
            e.modal = false;
          }, this.closeTimeout);
        };
        p.focusTrap = function () {
          return (0, u.default)(this.elementDialog, {
            initialFocus: this.elementClose,
            clickOutsideDeactivates: true,
            escapeDeactivates: false,
          });
        };
        p.setContent = function (e) {
          if (typeof e === "string") {
            this.elementContent.innerHTML = e;
          } else {
            this.elementContent.appendChild(e);
          }
        };
        p.open = function () {
          this.modal.open();
        };
        p.close = function () {
          this.modal.close();
        };
        p.closeHandler = function (e, t, n) {
          var r = this;

          function o(e) {
            return (e.getAttribute("href") || "").match(/^(http|\/)/);
          }
          this.element.addEventListener("click", function (e) {
            if (
              r.options.closeOnClickOutside !== "false" &&
              e.target.classList.contains(r.options.className + "__dialog")
            ) {
              r.close();
              return null;
            }
            if (
              e.target.classList.contains(r.options.className + "__close") ||
              o(e.target) ||
              o(e.target.parentNode) ||
              o(e.target.parentNode.parentNode)
            ) {
              r.close();
            }
          });
          document.body.addEventListener("keydown", function (e) {
            if (e.keyCode === 27 && r.modal.opened) {
              r.close();
            }
          });
        };
        p.fixedElementsHandler = function (e, t) {
          if (!e) {
            []
              .concat(h(document.querySelectorAll("*[data-original-style]")))
              .forEach(function (e) {
                var t = e.getAttribute("data-original-style");
                e.removeAttribute("data-original-style");
                if (t) {
                  e.setAttribute("style", t);
                } else {
                  e.removeAttribute("style");
                }
              });
            return null;
          }
          var n = [].concat(
            h(
              document.querySelectorAll(
                "div:not(." +
                  this.options.className +
                  "), nav, header, footer, iframe"
              )
            )
          );
          n.filter(function (e) {
            if (e.style.display === "none") {
              return;
            }
            var n = getComputedStyle(e);
            if (n.display === "none" || n.position !== "fixed") {
              return;
            }
            var r = e.getBoundingClientRect();
            var o = Math.round(r.left);
            var i = Math.round(document.documentElement.clientWidth - r.right);
            var a = e.getAttribute("style");
            e.setAttribute("data-original-style", a || "");
            if (o === 0 && (i === 0 || i === t)) {
              e.style.right = "auto";
              e.style.width = "calc(100% - " + t + "px)";
            } else if (
              o === i ||
              o === i + 1 ||
              e.style.marginLeft === -t / 2 + "px"
            ) {
              e.style.marginLeft = -t / 2 + "px";
            } else if (o > i) {
              e.style.transform = "translateX(-" + t + "px)";
            }
          });
        };
        p.scrollbarHandler = function () {
          var e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : true;
          var t = window.innerWidth - document.documentElement.clientWidth > 0;
          var n = (0, a.default)();
          if (n || t) {
            this.fixedElementsHandler(e, n);
          }
          if (e) {
            (0, l.disableBodyScroll)(this.elementDialog);
            this.elementDialog.style.overflowY = "scroll";
            document.body.style.overflowY = "hidden";
            if (t) {
              document.body.style.paddingRight = n + "px";
            }
          } else {
            (0, l.enableBodyScroll)(this.elementDialog);
            this.elementDialog.style.overflowY = "";
            document.body.style.overflowY = "";
            document.body.style.paddingRight = "";
          }
        };
        p.getCloseTimeout = function () {
          var e = getComputedStyle(this.element).getPropertyValue(
            "transition-duration"
          );
          if (e.indexOf("s") !== -1) {
            return parseFloat(e) * 1100;
          }
          if (e.indexOf("ms") !== -1) {
            return parseFloat(e) * 110;
          }
          return 500;
        };
        n.default = p;
      },
      {
        "../utils/sqs-esc": 37,
        "body-scroll-lock": 4,
        "focus-trap": 7,
        "get-scrollbar-width": 8,
        rmodal: 13,
      },
    ],
    30: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = e("array-from");
        var o = s(r);
        var i = e("promise-polyfill");
        var a = s(i);
        e("es6-object-assign/auto");
        e("mutationobserver-shim");
        e("whatwg-fetch");

        function s(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }
        var u = {
          init: function e() {
            if (!Array.from) {
              Array.from = o.default;
            }
            if (!window.Promise) {
              window.Promise = a.default;
            }
          },
        };
        n.default = u;
      },
      {
        "array-from": 2,
        "es6-object-assign/auto": 5,
        "mutationobserver-shim": 9,
        "promise-polyfill": 12,
        "whatwg-fetch": 25,
      },
    ],
    31: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = e("./dom-loaded");
        var o = s(r);
        var i = e("./sqs-get-tweak");
        var a = s(i);

        function s(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }

        function u(e) {
          var t = document.querySelector("body[data-ajax-loader]");
          if (t) {
            var n = new MutationObserver(function (n) {
              if (
                n[0].attributeName === "data-ajax-loader" &&
                t.getAttribute("data-ajax-loader") === "loaded"
              ) {
                e();
              }
            });
            n.observe(t, {
              attributes: true,
            });
          } else {
            window.addEventListener("mercury:load", e);
          }
        }

        function l(e) {
          if ((0, a.default)("tweak-site-ajax-loading-enable")) {
            (0, o.default)(function () {
              return setTimeout(function () {
                return u(e);
              }, 100);
            });
          }
        }
        n.default = l;
      },
      {
        "./dom-loaded": 33,
        "./sqs-get-tweak": 38,
      },
    ],
    32: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        n.default = function (e, t) {
          var n =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : [];
          var r = function r(o) {
            var i = e.attributes[o].name;
            var a = e.attributes[o].value;
            if (
              !n.filter(function (e) {
                return e === i;
              }).length
            ) {
              t.setAttribute(i, a);
            }
          };
          for (var o = e.attributes.length - 1; o >= 0; o--) {
            r(o);
          }
        };
      },
      {},
    ],
    33: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        n.default = r;

        function r(e) {
          if (
            document.readyState === "interactive" ||
            document.readyState === "complete"
          ) {
            e();
          } else {
            document.addEventListener("DOMContentLoaded", function t() {
              document.removeEventListener("DOMContentLoaded", t);
              e();
            });
          }
        }
      },
      {},
    ],
    34: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r = e("shortid");
        var o = s(r);
        var i = e("../utils/copy-attributes");
        var a = s(i);

        function s(e) {
          return e && e.__esModule
            ? e
            : {
                default: e,
              };
        }

        function u(e, t) {
          return e.textContent.replace(
            /document\.write\s{0,}\(/g,
            "document.querySelector('script[data-dynamic-id=\"" +
              t +
              "\"]').insertAdjacentHTML('beforebegin',"
          );
        }

        function l(e) {
          if (!e.length) {
            if (document.readyState !== "loading") {
              document.dispatchEvent(new Event("DOMContentLoaded"));
            }
            return false;
          }

          function t() {
            l(e);
          }
          var n = e.shift();
          var r = document.createElement("script");
          if (n.src) {
            r.onload = t;
            r.onerror = t;
            r.src = n.src;
          } else {
            (0, a.default)(n, r);
            r.textContent = n.textContent;
            if (n.textContent.indexOf("document.write") !== -1) {
              var i = o.default.generate();
              r.setAttribute("data-dynamic-id", i);
              r.textContent = u(r, i);
            }
          }
          n.parentNode.insertBefore(r, n);
          n.parentNode.removeChild(n);
          if (!r.src) {
            t();
          }
        }

        function c(e) {
          var t = [];
          e.querySelectorAll("script").forEach(function (e) {
            var n = e.getAttribute("type");
            if (!n || n === "text/javascript") {
              t.push(e);
            }
          });
          if (t.length) {
            l(t);
          }
        }

        function f(e) {
          c(e);
        }
        n.default = f;
      },
      {
        "../utils/copy-attributes": 32,
        shortid: 14,
      },
    ],
    35: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        var r =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  typeof Symbol === "function" &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              };

        function o(e) {
          var t = localStorage.getItem(e);
          return t && t.indexOf("<") !== 0 ? JSON.parse(t) : t;
        }

        function i(e, t) {
          t =
            (typeof t === "undefined" ? "undefined" : r(t)) === "object"
              ? JSON.stringify(t)
              : t;
          localStorage.setItem(e, t);
        }

        function a(e) {
          var t = o(e.storageKeyExpires);
          return t && t <= Date.now();
        }

        function s(e, t) {
          if (!t) {
            throw new Error("Data is empty!");
          }
          var n = o(e.storageKey);

          function r(t) {
            var n = e.cacheExpires * 60 * 1e3 + Date.now();
            i(e.storageKeyExpires, n);
            i(e.storageKey, t);
          }
          if (n && a(e)) {
            r(t);
          } else if (!n) {
            r(t);
          }
          return Promise.resolve(t);
        }

        function u(e, t) {
          if (t.status !== 200) {
            throw new Error("Fetch Error: " + (t.statusText || t.status));
          } else {
            return t;
          }
        }

        function l(e, t, n) {
          var r = e.split("?")[0];
          var o =
            "?" +
            ((n ? Date.now() + "&" : "") + "format=" + t) +
            (e.split("?")[1] ? "&" + e.split("?")[1] : "");
          if (r.indexOf("http") === -1 && r.indexOf("/") !== 0) {
            r = "/" + r;
          }
          return r + o;
        }

        function c(e) {
          var t = l(e.url, e.format, e.cacheBust);
          return fetch(t, e.fetch)
            .then(function (t) {
              return u(e, t);
            })
            .then(function (t) {
              return e.format === "json" ? t.json() : t.text();
            })
            .catch(console.error);
        }

        function f(e) {
          if (!e.cache) {
            return c(e);
          }
          var t = o(e.storageKey);
          if (t) {
            if (a(e)) {
              c(e).then(function (t) {
                return s(e, t);
              });
            }
            return Promise.resolve(t);
          }
          return c(e).then(function (t) {
            return s(e, t);
          });
        }

        function d() {
          var e =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          e = Object.assign(
            {
              url: null,
              format: "json",
              fetch: {
                credentials: "same-origin",
              },
              cache: false,
              cacheBust: true,
              cacheExpires: 5,
            },
            e
          );
          e.storageKey = e.storageKey || e.url + "_" + e.format;
          e.storageKeyExpires = e.storageKey + "_expires";
          return f(e);
        }
        n.default = d;
      },
      {},
    ],
    36: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });

        function r(e) {
          var t =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : [];
          var n = function n(r) {
            var o = e.attributes[r].name;
            if (
              !t.filter(function (e) {
                return e === o;
              }).length
            ) {
              e.removeAttribute(o);
            }
          };
          for (var r = e.attributes.length - 1; r >= 0; r--) {
            n(r);
          }
        }
        n.default = r;
      },
      {},
    ],
    37: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });

        function r() {
          return Y && Y.Squarespace && Y.Squarespace.EscManager;
        }
        var o = {
          disable: function e() {
            return r() ? Y.Squarespace.EscManager.disable() : "";
          },
          enable: function e() {
            return r() ? Y.Squarespace.EscManager.enable() : "";
          },
        };
        n.default = o;
      },
      {},
    ],
    38: [
      function (e, t, n) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
          value: true,
        });
        n.default = r;

        function r(e) {
          if (!e || typeof e !== "string") {
            console.error("squarespace-core: Invalid tweak name " + e);
            return null;
          }
          return (
            window.Static.SQUARESPACE_CONTEXT.tweakJSON[e] ||
            window.Static.SQUARESPACE_CONTEXT.tweakJSON[
              e.replace("@", "").replace(".", "")
            ]
          );
        }
      },
      {},
    ],
  },
  {},
  [27]
);
