!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.CDB = t())
    : (e.CDB = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        604: (e, t, n) => {
          n.r(t), n.d(t, { Accordion: () => s });
          var i = 0,
            s = function e(t, n) {
              var s = this,
                r = this,
                o = !1;
              if (Array.isArray(t))
                return (
                  !!t.length &&
                  t.map(function (t) {
                    return new e(t, n);
                  })
                );
              var a = {
                init: function () {
                  var e = this;
                  this.options = Object.assign(
                    {
                      duration: 600,
                      ariaEnabled: !0,
                      collapse: !0,
                      showMultiple: !1,
                      openOnInit: [],
                      elementClass: "accordion",
                      triggerClass: "accordion-header",
                      panelClass: "accordion-panel",
                      activeClass: "is-active",
                      beforeOpen: function () {},
                      onOpen: function () {},
                      beforeClose: function () {},
                      onClose: function () {},
                    },
                    n
                  );
                  var s = this.options,
                    o = s.elementClass,
                    a = s.openOnInit,
                    c = "string" == typeof t;
                  (this.container = c ? document.querySelector(t) : t),
                    (this.elements = Array.from(
                      this.container.querySelectorAll(".".concat(o))
                    )),
                    (this.firstElement = this.elements[0]),
                    (this.lastElement = this.elements[
                      this.elements.length - 1
                    ]),
                    (this.currFocusedIdx = 0),
                    this.elements.map(function (t, n) {
                      return (
                        t.classList.add("js-enabled"),
                        e.generateIDs(t),
                        e.setARIA(t),
                        e.setTransition(t),
                        i++,
                        a.includes(n)
                          ? e.showElement(t, !1)
                          : e.closeElement(t, !1)
                      );
                    }),
                    r.attachEvents();
                },
                setTransition: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = this.options,
                    i = n.duration,
                    s = n.panelClass,
                    r = e.querySelector(".".concat(s)),
                    o = c("transitionDuration");
                  r.style[o] = t ? null : "".concat(i, "ms");
                },
                generateIDs: function (e) {
                  var t = this.options,
                    n = t.triggerClass,
                    s = t.panelClass,
                    r = e.querySelector(".".concat(n)),
                    o = e.querySelector(".".concat(s));
                  e.setAttribute("id", "ac-".concat(i)),
                    r.setAttribute("id", "ac-trigger-".concat(i)),
                    o.setAttribute("id", "ac-panel-".concat(i));
                },
                removeIDs: function (e) {
                  var t = this.options,
                    n = t.triggerClass,
                    i = t.panelClass,
                    s = e.querySelector(".".concat(n)),
                    r = e.querySelector(".".concat(i));
                  e.removeAttribute("id"),
                    s.removeAttribute("id"),
                    r.removeAttribute("id");
                },
                setARIA: function (e) {
                  var t = this.options,
                    n = t.ariaEnabled,
                    s = t.triggerClass,
                    r = t.panelClass;
                  if (n) {
                    var o = e.querySelector(".".concat(s)),
                      a = e.querySelector(".".concat(r));
                    o.setAttribute("role", "button"),
                      o.setAttribute("aria-controls", "ac-panel-".concat(i)),
                      o.setAttribute("aria-disabled", !1),
                      o.setAttribute("aria-expanded", !1),
                      a.setAttribute("role", "region"),
                      a.setAttribute(
                        "aria-labelledby",
                        "ac-trigger-".concat(i)
                      );
                  }
                },
                updateARIA: function (e, t) {
                  var n = t.ariaExpanded,
                    i = t.ariaDisabled,
                    s = this.options,
                    r = s.ariaEnabled,
                    o = s.triggerClass;
                  if (r) {
                    var a = e.querySelector(".".concat(o));
                    a.setAttribute("aria-expanded", n),
                      a.setAttribute("aria-disabled", i);
                  }
                },
                removeARIA: function (e) {
                  var t = this.options,
                    n = t.ariaEnabled,
                    i = t.triggerClass,
                    s = t.panelClass;
                  if (n) {
                    var r = e.querySelector(".".concat(i)),
                      o = e.querySelector(".".concat(s));
                    r.removeAttribute("role"),
                      r.removeAttribute("aria-controls"),
                      r.removeAttribute("aria-disabled"),
                      r.removeAttribute("aria-expanded"),
                      o.removeAttribute("role"),
                      o.removeAttribute("aria-labelledby");
                  }
                },
                focus: function (e, t) {
                  e.preventDefault();
                  var n = this.options.triggerClass;
                  t.querySelector(".".concat(n)).focus();
                },
                focusFirstElement: function (e) {
                  this.focus(e, this.firstElement), (this.currFocusedIdx = 0);
                },
                focusLastElement: function (e) {
                  this.focus(e, this.lastElement),
                    (this.currFocusedIdx = this.elements.length - 1);
                },
                focusNextElement: function (e) {
                  var t = this.currFocusedIdx + 1;
                  if (t > this.elements.length - 1)
                    return this.focusFirstElement(e);
                  this.focus(e, this.elements[t]), (this.currFocusedIdx = t);
                },
                focusPrevElement: function (e) {
                  var t = this.currFocusedIdx - 1;
                  if (t < 0) return this.focusLastElement(e);
                  this.focus(e, this.elements[t]), (this.currFocusedIdx = t);
                },
                showElement: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.options,
                    i = n.panelClass,
                    s = n.activeClass,
                    r = n.collapse,
                    o = n.beforeOpen,
                    a = e.querySelector(".".concat(i)),
                    c = a.scrollHeight;
                  e.classList.add(s),
                    t && o(e),
                    requestAnimationFrame(function () {
                      requestAnimationFrame(function () {
                        a.style.height = t ? "".concat(c, "px") : "auto";
                      });
                    }),
                    this.updateARIA(e, { ariaExpanded: !0, ariaDisabled: !r });
                },
                closeElement: function (e) {
                  var t =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1],
                    n = this.options,
                    i = n.panelClass,
                    s = n.activeClass,
                    r = n.beforeClose,
                    o = e.querySelector(".".concat(i)),
                    a = o.scrollHeight;
                  e.classList.remove(s),
                    t
                      ? (r(e),
                        requestAnimationFrame(function () {
                          (o.style.height = "".concat(a, "px")),
                            requestAnimationFrame(function () {
                              o.style.height = 0;
                            });
                        }),
                        this.updateARIA(e, {
                          ariaExpanded: !1,
                          ariaDisabled: !1,
                        }))
                      : (o.style.height = 0);
                },
                toggleElement: function (e) {
                  var t = this.options,
                    n = t.activeClass,
                    i = t.collapse,
                    s = e.classList.contains(n);
                  if (!s || i)
                    return s ? this.closeElement(e) : this.showElement(e);
                },
                closeElements: function () {
                  var e = this,
                    t = this.options,
                    n = t.activeClass;
                  t.showMultiple ||
                    this.elements.map(function (t, i) {
                      t.classList.contains(n) &&
                        i != e.currFocusedIdx &&
                        e.closeElement(t);
                    });
                },
                handleClick: function (e) {
                  var t = this,
                    n = e.currentTarget;
                  this.elements.map(function (i, s) {
                    i.contains(n) &&
                      "A" !== e.target.nodeName &&
                      ((t.currFocusedIdx = s),
                      t.closeElements(),
                      t.focus(e, i),
                      t.toggleElement(i));
                  });
                },
                handleKeydown: function (e) {
                  switch (e.keyCode) {
                    case 38:
                      return this.focusPrevElement(e);
                    case 40:
                      return this.focusNextElement(e);
                    case 36:
                      return this.focusFirstElement(e);
                    case 35:
                      return this.focusLastElement(e);
                    default:
                      return null;
                  }
                },
                handleTransitionEnd: function (e) {
                  if ("height" === e.propertyName) {
                    var t = this.options,
                      n = t.onOpen,
                      i = t.onClose,
                      s = e.currentTarget,
                      r = parseInt(s.style.height),
                      o = this.elements.find(function (e) {
                        return e.contains(s);
                      });
                    r > 0 ? ((s.style.height = "auto"), n(o)) : i(o);
                  }
                },
              };
              (this.attachEvents = function () {
                if (!o) {
                  var e = a.options,
                    t = e.triggerClass,
                    n = e.panelClass;
                  (a.handleClick = a.handleClick.bind(a)),
                    (a.handleKeydown = a.handleKeydown.bind(a)),
                    (a.handleTransitionEnd = a.handleTransitionEnd.bind(a)),
                    a.elements.map(function (e) {
                      var i = e.querySelector(".".concat(t)),
                        s = e.querySelector(".".concat(n));
                      i.addEventListener("click", a.handleClick),
                        i.addEventListener("keydown", a.handleKeydown),
                        s.addEventListener(
                          "webkitTransitionEnd",
                          a.handleTransitionEnd
                        ),
                        s.addEventListener(
                          "transitionend",
                          a.handleTransitionEnd
                        );
                    }),
                    (o = !0);
                }
              }),
                (this.detachEvents = function () {
                  if (o) {
                    var e = a.options,
                      t = e.triggerClass,
                      n = e.panelClass;
                    a.elements.map(function (e) {
                      var i = e.querySelector(".".concat(t)),
                        s = e.querySelector(".".concat(n));
                      i.removeEventListener("click", a.handleClick),
                        i.removeEventListener("keydown", a.handleKeydown),
                        s.removeEventListener(
                          "webkitTransitionEnd",
                          a.handleTransitionEnd
                        ),
                        s.removeEventListener(
                          "transitionend",
                          a.handleTransitionEnd
                        );
                    }),
                      (o = !1);
                  }
                }),
                (this.toggle = function (e) {
                  var t = a.elements.find(function (t, n) {
                    return n === e;
                  });
                  t && a.toggleElement(t);
                }),
                (this.open = function (e) {
                  var t = a.elements.find(function (t, n) {
                    return n === e;
                  });
                  t && a.showElement(t);
                }),
                (this.openAll = function () {
                  a.elements.map(function (e) {
                    return a.showElement(e, !1);
                  });
                }),
                (this.close = function (e) {
                  var t = a.elements.find(function (t, n) {
                    return n === e;
                  });
                  t && a.closeElement(t);
                }),
                (this.closeAll = function () {
                  a.elements.map(function (e) {
                    return a.closeElement(e, !1);
                  });
                }),
                (this.destroy = function () {
                  s.detachEvents(),
                    s.openAll(),
                    a.elements.map(function (e) {
                      a.removeIDs(e), a.removeARIA(e), a.setTransition(e, !0);
                    }),
                    (o = !0);
                });
              var c = function (e) {
                  return "string" == typeof document.documentElement.style[e]
                    ? e
                    : ((e = l(e)), (e = "webkit".concat(e)));
                },
                l = function (e) {
                  return e.charAt(0).toUpperCase() + e.slice(1);
                };
              a.init();
            };
        },
      },
      t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      var s = (t[i] = { exports: {} });
      return e[i](s, s.exports, n), s.exports;
    }
    return (
      (n.d = (e, t) => {
        for (var i in t)
          n.o(t, i) &&
            !n.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
      }),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      n(604)
    );
  })();
});
