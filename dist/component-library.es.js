import * as P from "react";
import Ke, { useState as W, useEffect as Oe, useRef as ve, useMemo as tr, useCallback as Ee, isValidElement as Nt, forwardRef as ut, createContext as At, useContext as zt, useImperativeHandle as My, useLayoutEffect as kt, cloneElement as ti, createElement as Dy, Children as t2, memo as gu, PureComponent as Ny, Fragment as r2 } from "react";
import { createPortal as Ry } from "react-dom";
function Sn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} }, fi = {};
var ff;
function n2() {
  if (ff) return fi;
  ff = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, o) {
    var a = null;
    if (o !== void 0 && (a = "" + o), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      o = {};
      for (var l in i)
        l !== "key" && (o[l] = i[l]);
    } else o = i;
    return i = o.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return fi.Fragment = t, fi.jsx = r, fi.jsxs = r, fi;
}
var pi = {};
var pf;
function i2() {
  return pf || (pf = 1, process.env.NODE_ENV !== "production" && (function() {
    function e($) {
      if ($ == null) return null;
      if (typeof $ == "function")
        return $.$$typeof === N ? null : $.displayName || $.name || null;
      if (typeof $ == "string") return $;
      switch ($) {
        case y:
          return "Fragment";
        case b:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case C:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof $ == "object")
        switch (typeof $.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), $.$$typeof) {
          case v:
            return "Portal";
          case x:
            return $.displayName || "Context";
          case w:
            return ($._context.displayName || "Context") + ".Consumer";
          case S:
            var B = $.render;
            return $ = $.displayName, $ || ($ = B.displayName || B.name || "", $ = $ !== "" ? "ForwardRef(" + $ + ")" : "ForwardRef"), $;
          case E:
            return B = $.displayName || null, B !== null ? B : e($.type) || "Memo";
          case M:
            B = $._payload, $ = $._init;
            try {
              return e($(B));
            } catch {
            }
        }
      return null;
    }
    function t($) {
      return "" + $;
    }
    function r($) {
      try {
        t($);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var z = B.error, H = typeof Symbol == "function" && Symbol.toStringTag && $[Symbol.toStringTag] || $.constructor.name || "Object";
        return z.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          H
        ), t($);
      }
    }
    function n($) {
      if ($ === y) return "<>";
      if (typeof $ == "object" && $ !== null && $.$$typeof === M)
        return "<...>";
      try {
        var B = e($);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var $ = _.A;
      return $ === null ? null : $.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function a($) {
      if (L.call($, "key")) {
        var B = Object.getOwnPropertyDescriptor($, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return $.key !== void 0;
    }
    function l($, B) {
      function z() {
        Q || (Q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      z.isReactWarning = !0, Object.defineProperty($, "key", {
        get: z,
        configurable: !0
      });
    }
    function s() {
      var $ = e(this.type);
      return ie[$] || (ie[$] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), $ = this.props.ref, $ !== void 0 ? $ : null;
    }
    function c($, B, z, H, le, me) {
      var de = z.ref;
      return $ = {
        $$typeof: g,
        type: $,
        key: B,
        props: z,
        _owner: H
      }, (de !== void 0 ? de : null) !== null ? Object.defineProperty($, "ref", {
        enumerable: !1,
        get: s
      }) : Object.defineProperty($, "ref", { enumerable: !1, value: null }), $._store = {}, Object.defineProperty($._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty($, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty($, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.defineProperty($, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: me
      }), Object.freeze && (Object.freeze($.props), Object.freeze($)), $;
    }
    function u($, B, z, H, le, me) {
      var de = B.children;
      if (de !== void 0)
        if (H)
          if (F(de)) {
            for (H = 0; H < de.length; H++)
              d(de[H]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(de);
      if (L.call(B, "key")) {
        de = e($);
        var ue = Object.keys(B).filter(function(G) {
          return G !== "key";
        });
        H = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", ee[de + H] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          H,
          de,
          ue,
          de
        ), ee[de + H] = !0);
      }
      if (de = null, z !== void 0 && (r(z), de = "" + z), a(B) && (r(B.key), de = "" + B.key), "key" in B) {
        z = {};
        for (var X in B)
          X !== "key" && (z[X] = B[X]);
      } else z = B;
      return de && l(
        z,
        typeof $ == "function" ? $.displayName || $.name || "Unknown" : $
      ), c(
        $,
        de,
        z,
        i(),
        le,
        me
      );
    }
    function d($) {
      p($) ? $._store && ($._store.validated = 1) : typeof $ == "object" && $ !== null && $.$$typeof === M && ($._payload.status === "fulfilled" ? p($._payload.value) && $._payload.value._store && ($._payload.value._store.validated = 1) : $._store && ($._store.validated = 1));
    }
    function p($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === g;
    }
    var h = Ke, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), _ = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, L = Object.prototype.hasOwnProperty, F = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function($) {
        return $();
      }
    };
    var Q, ie = {}, R = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), re = Y(n(o)), ee = {};
    pi.Fragment = y, pi.jsx = function($, B, z) {
      var H = 1e4 > _.recentlyCreatedOwnerStacks++;
      return u(
        $,
        B,
        z,
        !1,
        H ? Error("react-stack-top-frame") : R,
        H ? Y(n($)) : re
      );
    }, pi.jsxs = function($, B, z) {
      var H = 1e4 > _.recentlyCreatedOwnerStacks++;
      return u(
        $,
        B,
        z,
        !0,
        H ? Error("react-stack-top-frame") : R,
        H ? Y(n($)) : re
      );
    };
  })()), pi;
}
var hf;
function o2() {
  return hf || (hf = 1, process.env.NODE_ENV === "production" ? wo.exports = n2() : wo.exports = i2()), wo.exports;
}
var f = o2();
function yR({ children: e, onClick: t, color: r = "#007bff", textColor: n = "#fff" }) {
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      style: {
        padding: "10px 20px",
        background: r,
        color: n,
        borderRadius: "6px",
        border: "none"
      },
      onClick: t,
      children: e
    }
  );
}
var $y = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, vf = Ke.createContext && /* @__PURE__ */ Ke.createContext($y), a2 = ["attr", "size", "title"];
function l2(e, t) {
  if (e == null) return {};
  var r = s2(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      n = o[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function s2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
  return r;
}
function Xo() {
  return Xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Xo.apply(this, arguments);
}
function gf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gf(Object(r), !0).forEach(function(n) {
      c2(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c2(e, t, r) {
  return t = u2(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u2(e) {
  var t = d2(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function d2(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zy(e) {
  return e && e.map((t, r) => /* @__PURE__ */ Ke.createElement(t.tag, Zo({
    key: r
  }, t.attr), zy(t.child)));
}
function tt(e) {
  return (t) => /* @__PURE__ */ Ke.createElement(f2, Xo({
    attr: Zo({}, e.attr)
  }, t), zy(e.child));
}
function f2(e) {
  var t = (r) => {
    var {
      attr: n,
      size: i,
      title: o
    } = e, a = l2(e, a2), l = i || r.size || "1em", s;
    return r.className && (s = r.className), e.className && (s = (s ? s + " " : "") + e.className), /* @__PURE__ */ Ke.createElement("svg", Xo({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, a, {
      className: s,
      style: Zo(Zo({
        color: e.color || r.color
      }, r.style), e.style),
      height: l,
      width: l,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && /* @__PURE__ */ Ke.createElement("title", null, o), e.children);
  };
  return vf !== void 0 ? /* @__PURE__ */ Ke.createElement(vf.Consumer, null, (r) => t(r)) : t($y);
}
function yf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" }, child: [] }] })(e);
}
function mf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" }, child: [] }] })(e);
}
function Ly(e) {
  return tt({ attr: { viewBox: "0 0 640 512" }, child: [{ tag: "path", attr: { d: "M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z" }, child: [] }] })(e);
}
function By(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z" }, child: [] }] })(e);
}
function xf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" }, child: [] }] })(e);
}
function bf(e) {
  return tt({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M0 117.66v346.32c0 11.32 11.43 19.06 21.94 14.86L160 416V32L20.12 87.95A32.006 32.006 0 0 0 0 117.66zM192 416l192 64V96L192 32v384zM554.06 33.16L416 96v384l139.88-55.95A31.996 31.996 0 0 0 576 394.34V48.02c0-11.32-11.43-19.06-21.94-14.86z" }, child: [] }] })(e);
}
function p2(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" }, child: [] }] })(e);
}
function wf(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z" }, child: [] }] })(e);
}
function zl(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" }, child: [] }] })(e);
}
function jf(e) {
  return tt({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" }, child: [] }] })(e);
}
function Ii(e) {
  return tt({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" }, child: [] }] })(e);
}
const mt = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e1e5e9"
  },
  th: {
    padding: "8px 12px",
    textAlign: "left",
    cursor: "pointer",
    color: "#666666",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #e1e5e9",
    borderBottom: "2px solid #e1e5e9",
    fontWeight: "600",
    fontSize: "13px",
    maxWidth: "100px"
  },
  td: {
    padding: "8px 12px",
    border: "1px solid #cececeff",
    whiteSpace: "normal",
    wordWrap: "break-word",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontSize: "14px",
    maxWidth: "200px",
    verticalAlign: "top"
  },
  tr: {
    transition: "background-color 0.1s",
    cursor: "pointer"
  },
  trHover: {
    backgroundColor: "#f5f5f5"
  },
  button: {
    borderRadius: "8px",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#989898",
    cursor: "pointer",
    outline: "none",
    border: "none"
  }
}, Ll = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), h2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), s = r.find((c) => c.name === l);
      if (s && t[s.id] !== null && t[s.id] !== void 0) {
        const c = parseFloat(t[s.id]) || 0;
        n = n.replace(a, c.toString());
      } else
        n = n.replace(a, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(n))
      return "Invalid formula";
    const o = Function('"use strict"; return (' + n + ")")();
    return isNaN(o) ? "Error" : o.toString();
  } catch {
    return "Error";
  }
};
function mR({ columns: e, initialData: t }) {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [s, c] = W(null), [u, d] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [b, w] = W(null), [x, S] = W(""), [O, C] = W(null), [E, M] = W(null), [D, N] = W(""), [_, L] = W({}), [F, Y] = W(null), [Q, ie] = W({ key: null, direction: "ascending" }), [R] = W({}), re = (T) => {
    let q = "ascending";
    Q.key === T && Q.direction === "ascending" && (q = "descending"), ie({ key: T, direction: q });
  }, ee = Ke.useMemo(() => {
    let T = [...i];
    return Q.key !== null && T.sort((q, K) => q[Q.key] < K[Q.key] ? Q.direction === "ascending" ? -1 : 1 : q[Q.key] > K[Q.key] ? Q.direction === "ascending" ? 1 : -1 : 0), T;
  }, [i, Q]);
  Oe(() => {
    const T = () => {
      v(!1), h(!1), w(null), Y(null), C(null);
    }, q = (K) => {
      if (K.key === "Escape")
        K.preventDefault(), C(null), l(null);
      else if (a && (K.ctrlKey || K.metaKey))
        if (K.key === "c") {
          K.preventDefault();
          const he = i.find((Te) => Te.id === a.rowId);
          he && C({
            rowId: a.rowId,
            colId: a.colId,
            value: he[a.colId]
          });
        } else K.key === "v" && O && (K.preventDefault(), z(a.rowId, a.colId, O.value));
    };
    return document.addEventListener("click", T), document.addEventListener("keydown", q), () => {
      document.removeEventListener("click", T), document.removeEventListener("keydown", q);
    };
  }, [a, O, i]);
  const $ = () => {
    const T = Ll(), q = `row-${Date.now()}`, K = {
      id: q,
      ...r.reduce((he, Te) => ({
        ...he,
        [Te.id]: Te.type === "createdTime" || Te.type === "lastEditedTime" ? T : Te.type === "formula" ? "" : Te.type === "id" ? q : null
      }), {})
    };
    o([...i, K]);
  }, B = (T) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((q) => q.id !== T));
  }, z = (T, q, K) => {
    const he = Ll();
    if (r.find((ke) => ke.id === q)?.type === "email" && K) {
      const ke = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, fe = `${T}-${q}`;
      ke.test(K) ? m((yt) => {
        const Tt = new Set(yt);
        return Tt.delete(fe), Tt;
      }) : m((yt) => new Set(yt).add(fe));
    }
    o(i.map((ke) => {
      if (ke.id === T) {
        const fe = { ...ke, [q]: K };
        return r.forEach((yt) => {
          yt.type === "lastEditedTime" && (fe[yt.id] = he);
        }), fe;
      }
      return ke;
    })), l(null);
  }, H = (T = "text", q) => {
    const K = `col-${Date.now()}`, he = Ll(), Te = q || T.charAt(0).toUpperCase() + T.slice(1), ke = {
      id: K,
      name: x.trim() || Te,
      type: T,
      options: T === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, ke]), o(i.map((fe) => ({
      ...fe,
      [K]: T === "createdTime" || T === "lastEditedTime" ? he : T === "formula" ? "" : T === "id" ? fe.id : null
    }))), v(!1), S("");
  }, le = (T, q) => {
    n(r.map((K) => K.id === T ? { ...K, name: q } : K)), c(null);
  }, me = (T) => {
    d((q) => {
      const K = new Set(q);
      return K.has(T) ? K.delete(T) : K.add(T), K;
    }), w(null);
  }, de = (T) => {
    n(r.filter((q) => q.id !== T)), o(i.map((q) => {
      const { [T]: K, ...he } = q;
      return he;
    })), w(null);
  }, ue = (T) => {
    const q = r.find((fe) => fe.id === T);
    if (!q) return;
    const K = r.findIndex((fe) => fe.id === T), he = `col-${Date.now()}`, Te = {
      ...q,
      id: he,
      name: `${q.name} Copy`
    }, ke = [...r];
    ke.splice(K + 1, 0, Te), n(ke), o(i.map((fe) => ({
      ...fe,
      [he]: fe[T]
    }))), w(null);
  }, X = (T, q, K) => {
    if (!q.trim()) return;
    const he = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], Te = he[Math.floor(Math.random() * he.length)];
    n(r.map((ke) => {
      if (ke.id === T && ke.type === "select") {
        const fe = ke.options || [];
        if (!fe.some((Tt) => Tt.value.toLowerCase() === q.toLowerCase()))
          return {
            ...ke,
            options: [...fe, { value: q, color: Te }]
          };
      }
      return ke;
    })), z(K, T, q), M(null), N("");
  }, G = r.filter((T) => !u.has(T.id)), ae = ee.filter((T) => Object.entries(_).every(([q, K]) => {
    if (!K.trim()) return !0;
    const he = T[q];
    return he == null ? !1 : String(he).toLowerCase().includes(K.toLowerCase());
  })), V = (T) => Q.key === T ? Q.direction === "ascending" ? "▲" : "▼" : "↕", Me = (T) => {
    const q = T.color || "#f8f9fa", K = R[T.id] || 150;
    return {
      th: {
        ...mt.th,
        backgroundColor: q,
        color: T.color && T.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${K}px`,
        minWidth: `${K}px`,
        maxWidth: `${K}px`
      },
      td: {
        ...mt.td,
        backgroundColor: T.color ? `${q}33` : "#ffffff",
        width: `${K}px`,
        minWidth: `${K}px`,
        maxWidth: `${K}px`
      }
    };
  }, xe = (T, q, K, he) => {
    const Te = `${K}-${T.id}`, ke = y.has(Te);
    if (he)
      switch (T.type) {
        case "checkbox":
          return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!q, onChange: (fe) => z(K, T.id, fe.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: q || "",
              onChange: (fe) => {
                fe.target.value === "__add_new__" ? (M({ columnId: T.id, rowId: K }), N("")) : fe.target.value === "__manage_options__" || z(K, T.id, fe.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "", children: "Select..." }),
                T.options?.map((fe) => /* @__PURE__ */ f.jsx("option", { value: fe.value, children: fe.value }, fe.value)),
                /* @__PURE__ */ f.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ f.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "date":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "date",
              defaultValue: q || "",
              onBlur: (fe) => z(K, T.id, fe.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "email":
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "email",
                defaultValue: q || "",
                onBlur: (fe) => z(K, T.id, fe.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            ke && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "number":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: q || "",
              onBlur: (fe) => z(K, T.id, fe.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        default:
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: q || "",
              onBlur: (fe) => z(K, T.id, fe.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
      }
    if (q == null) return /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" } });
    switch (T.type) {
      case "checkbox":
        return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!q, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(q).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: q });
      case "select":
        const fe = T.options?.find((Xt) => Xt.value === q);
        return fe ? /* @__PURE__ */ f.jsx("span", { style: {
          backgroundColor: fe.color + "33",
          color: fe.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: q }) : q;
      case "number":
        return /* @__PURE__ */ f.jsx("span", { style: { textAlign: "right", display: "block" }, children: Number(q).toLocaleString() });
      case "email":
        return /* @__PURE__ */ f.jsxs("div", { children: [
          q,
          ke && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const yt = i.find((Xt) => Xt.id === K), Tt = yt ? h2(q, yt, r) : "Error";
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Tt }),
          /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: q, children: "Σ" })
        ] });
      case "id":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: q });
      default:
        return q;
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    E && /* @__PURE__ */ f.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "text",
          value: D,
          onChange: (T) => N(T.target.value),
          placeholder: "Enter option name",
          autoFocus: !0,
          style: {
            width: "90%",
            padding: "8px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            marginBottom: "15px"
          }
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              M(null), N("");
            },
            style: {
              padding: "6px 12px",
              border: "1px solid #e1e5e9",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "#ffffffff",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => X(E.columnId, D, E.rowId),
            disabled: !D.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: D.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: D.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ f.jsxs("table", { style: mt.table, children: [
      /* @__PURE__ */ f.jsxs("thead", { children: [
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...mt.th,
            width: "40px"
          } }),
          G.map((T) => {
            const q = s === T.id;
            return /* @__PURE__ */ f.jsxs(
              "th",
              {
                style: {
                  ...Me(T).th,
                  position: "relative"
                },
                title: `Sort by ${T.name}`,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (K) => {
                        K.stopPropagation(), K.detail === 1 ? (v(!1), h(!1), w(b === T.id ? null : T.id)) : K.detail === 2 && (c(T.id), w(null));
                      },
                      children: q ? /* @__PURE__ */ f.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: T.name,
                          onBlur: (K) => le(T.id, K.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                        /* @__PURE__ */ f.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: T.name }),
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (K) => {
                              K.stopPropagation(), re(T.id);
                            },
                            children: V(T.id)
                          }
                        )
                      ] })
                    }
                  ),
                  b === T.id && /* @__PURE__ */ f.jsxs("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    padding: "4px",
                    zIndex: 1e3,
                    minWidth: "120px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }, children: [
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (K) => {
                          K.stopPropagation(), Y(F === T.id ? null : T.id);
                        },
                        children: [
                          "Filter",
                          F === T.id && /* @__PURE__ */ f.jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            minWidth: "200px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            zIndex: 1001
                          }, children: /* @__PURE__ */ f.jsx(
                            "input",
                            {
                              type: "text",
                              placeholder: `Filter ${T.name}...`,
                              value: _[T.id] || "",
                              onChange: (K) => {
                                L((he) => ({
                                  ...he,
                                  [T.id]: K.target.value
                                }));
                              },
                              style: {
                                width: "90%",
                                padding: "6px 8px",
                                border: "1px solid #e1e5e9",
                                borderRadius: "4px",
                                fontSize: "14px",
                                outline: "none"
                              },
                              autoFocus: !0
                            }
                          ) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (K) => {
                          K.stopPropagation(), ue(T.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (K) => {
                          K.stopPropagation(), me(T.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (K) => {
                          K.stopPropagation(), de(T.id);
                        },
                        children: "Delete"
                      }
                    )
                  ] })
                ]
              },
              T.id
            );
          }),
          /* @__PURE__ */ f.jsxs(
            "th",
            {
              style: {
                ...mt.th,
                color: "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px"
              },
              children: [
                /* @__PURE__ */ f.jsx("button", { onClick: (T) => {
                  T.stopPropagation(), w(null), h(!1), v(!g);
                }, title: "Add column", style: { ...mt.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (T) => {
                  T.stopPropagation(), w(null), v(!1), h(!p);
                }, style: { ...mt.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ f.jsxs("div", { onClick: (T) => T.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: x,
                      onChange: (T) => S(T.target.value),
                      style: {
                        width: "90%",
                        padding: "6px 8px",
                        marginBottom: "8px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        color: "#333333",
                        fontSize: "14px"
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("text"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("number"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("select"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("checkbox"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("date"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("email"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("formula", "Formula"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("id", "ID"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("createdTime", "Created time"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: "#333333" }, onClick: () => H("lastEditedTime", "Last edited time"), onMouseEnter: (T) => T.currentTarget.style.backgroundColor = "#d3d3d3ff", onMouseLeave: (T) => T.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ f.jsxs("div", { onClick: (T) => T.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#ffffff",
                  border: "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((T) => /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => me(T.id),
                      children: [
                        /* @__PURE__ */ f.jsx("span", { children: T.name }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: u.has(T.id) ? /* @__PURE__ */ f.jsx(Ly, {}) : /* @__PURE__ */ f.jsx(By, {}) })
                      ]
                    },
                    T.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...mt.th,
            width: "40px",
            padding: "4px"
          } }),
          G.map((T) => /* @__PURE__ */ f.jsx(
            "th",
            {
              style: {
                ...Me(T).th,
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: _[T.id] || "",
                  onChange: (q) => {
                    L((K) => ({
                      ...K,
                      [T.id]: q.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: "#ffffff",
                    color: "#333333"
                  },
                  onClick: (q) => q.stopPropagation()
                }
              )
            },
            `search-${T.id}`
          )),
          /* @__PURE__ */ f.jsx("th", { style: {
            ...mt.th,
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("tbody", { children: [
        ae.map((T, q) => /* @__PURE__ */ f.jsxs(
          "tr",
          {
            style: {
              ...mt.tr,
              backgroundColor: q % 2 === 0 ? "#f8f9fa" : "#ffffff"
            },
            onMouseEnter: (K) => {
              K.currentTarget.style.backgroundColor = mt.trHover.backgroundColor;
            },
            onMouseLeave: (K) => {
              const he = q % 2 === 0 ? "#f8f9fa" : "#ffffff";
              K.currentTarget.style.backgroundColor = he;
            },
            children: [
              /* @__PURE__ */ f.jsx("td", { style: {
                ...mt.td,
                textAlign: "center",
                color: "#aaa"
              }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: "#999" }, children: "⋮⋮" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (K) => {
                  K.stopPropagation(), B(T.id);
                }, style: { ...mt.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ f.jsx(Ii, {}) })
              ] }) }),
              G.map((K) => {
                const he = a?.rowId === T.id && a?.colId === K.id;
                return /* @__PURE__ */ f.jsx(
                  "td",
                  {
                    style: {
                      ...Me(K).td,
                      userSelect: "none",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap"
                    },
                    onClick: (Te) => {
                      Te.stopPropagation(), l({ rowId: T.id, colId: K.id });
                    },
                    children: xe(K, T[K.id], T.id, he)
                  },
                  K.id
                );
              }),
              /* @__PURE__ */ f.jsx("td", { style: mt.td })
            ]
          },
          T.id
        )),
        /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: G.length + 2, style: {
          ...mt.td,
          textAlign: "center",
          color: "#aaa",
          cursor: "pointer"
        }, onClick: $, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
}
function v2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0 229.232 0 0 229.232 0 512zm961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448 200.976-448 448-448 449.009 200.976 449.009 448zM479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008 194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z" }, child: [] }] })(e);
}
function g2(e) {
  return tt({ attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm20.368-642.368c-12.496 12.496-12.496 32.752 0 45.248l115.76 115.76H287.68c-17.68 0-32 14.336-32 32s14.32 32 32 32h362.464l-117.76 117.744c-12.496 12.496-12.496 32.752 0 45.248 6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376l189.008-194-189.008-194c-12.512-12.496-32.752-12.496-45.264 0z" }, child: [] }] })(e);
}
function Sf(e) {
  return tt({ attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, child: [] }, { tag: "polyline", attr: { points: "7 10 12 15 17 10" }, child: [] }, { tag: "line", attr: { x1: "12", y1: "15", x2: "12", y2: "3" }, child: [] }] })(e);
}
function y2(e, t) {
  const [r, n] = Ke.useState(t);
  return { items: Ke.useMemo(() => {
    const a = [...e];
    return r?.key && a.sort((l, s) => {
      const c = l[r.key], u = s[r.key];
      return c < u ? r.direction === "ascending" ? -1 : 1 : c > u ? r.direction === "ascending" ? 1 : -1 : 0;
    }), a;
  }, [e, r]), requestSort: (a) => {
    let l = "ascending";
    r?.key === a && r?.direction === "ascending" && (l = "descending"), n({ key: a, direction: l });
  }, sortConfig: r };
}
const Ve = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "sans-serif",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#333333",
    border: "2px solid #e1e5e9"
  },
  th: {
    padding: "8px 12px",
    textAlign: "left",
    cursor: "pointer",
    color: "#666666",
    backgroundColor: "#f8f9fa",
    borderRight: "1px solid #e1e5e9",
    borderBottom: "2px solid #e1e5e9",
    fontWeight: "600",
    fontSize: "13px",
    maxWidth: "100px"
  },
  td: {
    padding: "8px 12px",
    border: "1px solid #cececeff",
    whiteSpace: "normal",
    wordWrap: "break-word",
    backgroundColor: "#ffffff",
    color: "#333333",
    fontSize: "14px",
    maxWidth: "200px",
    verticalAlign: "top"
  },
  tr: {
    transition: "background-color 0.1s",
    cursor: "pointer"
  },
  trHover: {
    backgroundColor: "#f5f5f5"
  },
  button: {
    borderRadius: "8px",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: "500",
    fontFamily: "inherit",
    backgroundColor: "#989898",
    cursor: "pointer",
    outline: "none",
    border: "none"
  }
}, hi = () => (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), m2 = (e, t, r) => {
  if (!e || typeof e != "string") return "";
  try {
    let n = e;
    const i = n.match(/\[([^\]]+)\]|\{([^}]+)\}/g);
    if (i && i.forEach((a) => {
      const l = a.slice(1, -1), s = r.find((c) => c.name === l);
      if (s && t[s.id] !== null && t[s.id] !== void 0) {
        const c = parseFloat(t[s.id]) || 0;
        n = n.replace(a, c.toString());
      } else
        n = n.replace(a, "0");
    }), !/^[0-9+\-*/.() ]+$/.test(n))
      return "Invalid formula";
    const o = Function('"use strict"; return (' + n + ")")();
    return isNaN(o) ? "Error" : o.toString();
  } catch {
    return "Error";
  }
}, Of = ({ columns: e, initialData: t }) => {
  const [r, n] = W(e), [i, o] = W(t), [a, l] = W(null), [s, c] = W(null), [u, d] = W(/* @__PURE__ */ new Set()), [p, h] = W(!1), [g, v] = W(!1), [y, m] = W(/* @__PURE__ */ new Set()), [b, w] = W(null), [x, S] = W(""), [O, C] = W(!1), [E, M] = W(null), [D, N] = W(/* @__PURE__ */ new Set()), [_, L] = W(null), [F, Y] = W(null), [Q, ie] = W(null), [R, re] = W(null), [ee, $] = W(/* @__PURE__ */ new Set()), [B, z] = W({}), [H, le] = W(null), [me, de] = W(null), [ue, X] = W(null), [G, ae] = W(!1), [V, Me] = W(null), [xe, T] = W(/* @__PURE__ */ new Set()), [q, K] = W(null), [he, Te] = W(""), [ke, fe] = W(null), [yt, Tt] = W(null), [Xt, kn] = W({}), [ui, di] = W(null), [An, Rl] = W("#ffffff"), [yo, gw] = W("#f8f9fa"), [Jd, mo] = W(!1), [Qd, xo] = W(!1), [U, yw] = W(!1), [ef, mw] = W({}), [Nr, tf] = W(null), [rf, xw] = W(0), [nf, bw] = W(0), {
    items: ww,
    sortConfig: of,
    requestSort: jw
  } = y2(i, { key: null, direction: "ascending" });
  Oe(() => {
    const j = () => {
      v(!1), h(!1), w(null), di(null), mo(!1), xo(!1), X(null);
    }, k = (A) => {
      if (A.key === "Escape")
        A.preventDefault(), X(null), l(null);
      else if (a && (A.ctrlKey || A.metaKey))
        if (A.key === "c") {
          A.preventDefault();
          const J = i.find((se) => se.id === a.rowId) || Object.values(B).flat().find((se) => se.id === a.rowId);
          J && X({
            rowId: a.rowId,
            colId: a.colId,
            value: J[a.colId]
          });
        } else A.key === "v" && ue && (A.preventDefault(), Ot(a.rowId, a.colId, ue.value));
    };
    return document.addEventListener("click", j), document.addEventListener("keydown", k), () => {
      document.removeEventListener("click", j), document.removeEventListener("keydown", k);
    };
  }, [a, ue, i, B]), Oe(() => {
    const j = (k) => {
      q && k.key === "Enter" ? (k.preventDefault(), sf(q.columnId, he, q.rowId)) : q && k.key === "Escape" && (K(null), Te(""));
    };
    if (q)
      return document.addEventListener("keydown", j), () => document.removeEventListener("keydown", j);
  }, [q, he]);
  const Sw = () => {
    const j = hi(), k = `row-${Date.now()}`, A = {
      id: k,
      ...r.reduce((J, se) => ({
        ...J,
        [se.id]: se.type === "createdTime" || se.type === "lastEditedTime" ? j : se.type === "formula" ? "" : se.type === "id" ? k : null
      }), {})
    };
    o([...i, A]);
  }, Ow = (j) => {
    window.confirm("Are you sure you want to delete this row?") && o(i.filter((k) => k.id !== j));
  }, Ot = (j, k, A) => {
    const J = hi();
    if (r.find((ce) => ce.id === k)?.type === "email" && A) {
      const ce = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, Z = `${j}-${k}`;
      ce.test(A) ? m((ge) => {
        const Be = new Set(ge);
        return Be.delete(Z), Be;
      }) : m((ge) => new Set(ge).add(Z));
    }
    if (j.startsWith("subrow-")) {
      const ce = j.split("-")[1];
      z((Z) => ({
        ...Z,
        [ce]: Z[ce]?.map((ge) => {
          if (ge.id === j) {
            const Be = { ...ge, [k]: A };
            return r.forEach((be) => {
              be.type === "lastEditedTime" && (Be[be.id] = J);
            }), Be;
          }
          return ge;
        }) || []
      }));
    } else
      o(i.map((ce) => {
        if (ce.id === j) {
          const Z = { ...ce, [k]: A };
          return r.forEach((ge) => {
            ge.type === "lastEditedTime" && (Z[ge.id] = J);
          }), Z;
        }
        return ce;
      }));
    l(null);
  }, ft = (j = "text", k) => {
    const A = `col-${Date.now()}`, J = hi(), se = k || j.charAt(0).toUpperCase() + j.slice(1), ce = {
      id: A,
      name: x.trim() || se,
      type: j,
      options: j === "select" ? [
        { value: "To Do", color: "#ff6b6b" },
        { value: "In Progress", color: "#ffd93d" },
        { value: "Done", color: "#6bcf7f" }
      ] : void 0
    };
    n([...r, ce]), o(i.map((ge) => ({
      ...ge,
      [A]: j === "createdTime" || j === "lastEditedTime" ? J : j === "formula" ? "" : j === "id" ? ge.id : null
    })));
    const Z = { ...B };
    Object.keys(Z).forEach((ge) => {
      Z[ge] = Z[ge].map((Be) => ({
        ...Be,
        [A]: j === "createdTime" || j === "lastEditedTime" ? J : j === "formula" ? "" : j === "id" ? Be.id : null
      }));
    }), z(Z), v(!1), S("");
  }, Pw = (j, k) => {
    n(r.map((A) => A.id === j ? { ...A, name: k } : A)), c(null);
  }, af = (j) => {
    d((k) => {
      const A = new Set(k);
      return A.has(j) ? A.delete(j) : A.add(j), A;
    }), w(null);
  }, Cw = (j) => {
    n(r.filter((k) => k.id !== j)), o(i.map((k) => {
      const { [j]: A, ...J } = k;
      return J;
    })), w(null);
  }, _w = (j) => {
    const k = r.find((ge) => ge.id === j);
    if (!k) return;
    const A = r.findIndex((ge) => ge.id === j), J = `col-${Date.now()}`, se = {
      ...k,
      id: J,
      name: `${k.name} Copy`
    }, ce = [...r];
    ce.splice(A + 1, 0, se), n(ce), o(i.map((ge) => ({
      ...ge,
      [J]: ge[j]
    })));
    const Z = { ...B };
    Object.keys(Z).forEach((ge) => {
      Z[ge] = Z[ge].map((Be) => ({
        ...Be,
        [J]: Be[j]
      }));
    }), z(Z), w(null);
  }, Ew = (j, k, A) => {
    C(!0), M({ rowId: j, colId: k, value: A }), N(/* @__PURE__ */ new Set([`${j}-${k}`]));
  }, kw = (j, k) => {
    O && E && E.colId === k && N((A) => new Set(A).add(`${j}-${k}`));
  }, Aw = () => {
    if (O && E) {
      const j = i.map((k) => {
        const A = `${k.id}-${E.colId}`;
        return D.has(A) ? { ...k, [E.colId]: E.value } : k;
      });
      o(j);
    }
    C(!1), M(null), N(/* @__PURE__ */ new Set());
  }, Tw = (j) => {
    L(j);
  }, Iw = (j, k) => {
    j.preventDefault(), Y(k);
  }, Mw = (j, k) => {
    if (j.preventDefault(), _ && _ !== k) {
      const A = r.findIndex((Z) => Z.id === _), J = r.findIndex((Z) => Z.id === k), se = [...r], [ce] = se.splice(A, 1);
      se.splice(J, 0, ce), n(se);
    }
    L(null), Y(null);
  }, Dw = () => {
    L(null), Y(null);
  }, Nw = (j) => {
    ie(j);
  }, Rw = (j, k) => {
    j.preventDefault(), re(k);
  }, $w = (j, k) => {
    if (j.preventDefault(), Q && Q !== k) {
      const A = i.findIndex((Z) => Z.id === Q), J = i.findIndex((Z) => Z.id === k), se = [...i], [ce] = se.splice(A, 1);
      se.splice(J, 0, ce), o(se);
    }
    ie(null), re(null);
  }, zw = () => {
    ie(null), re(null);
  }, Lw = (j) => {
    ee.has(j) ? $((A) => {
      const J = new Set(A);
      return J.delete(j), J;
    }) : ($((A) => {
      const J = new Set(A);
      return J.add(j), J;
    }), (!B[j] || B[j].length === 0) && lf(j));
  }, lf = (j) => {
    const k = hi(), A = `subrow-${j}-${Date.now()}`, J = {
      id: A,
      ...r.reduce((se, ce) => ({
        ...se,
        [ce.id]: ce.type === "createdTime" || ce.type === "lastEditedTime" ? k : ce.type === "formula" ? "" : ce.type === "id" ? A : null
      }), {})
    };
    z((se) => ({
      ...se,
      [j]: [...se[j] || [], J]
    }));
  }, Bw = (j, k) => {
    window.confirm("Are you sure you want to delete this sub-row?") && z((A) => ({
      ...A,
      [j]: A[j]?.filter((J) => J.id !== k) || []
    }));
  }, Ww = (j, k) => {
    le({ subRowId: j, parentId: k });
  }, Fw = (j, k) => {
    j.preventDefault(), de(k);
  }, Vw = (j, k, A) => {
    if (j.preventDefault(), H && H.subRowId !== k && H.parentId === A) {
      const J = B[A] || [], se = J.findIndex((Be) => Be.id === H.subRowId), ce = J.findIndex((Be) => Be.id === k), Z = [...J], [ge] = Z.splice(se, 1);
      Z.splice(ce, 0, ge), z((Be) => ({
        ...Be,
        [A]: Z
      }));
    }
    le(null), de(null);
  }, Kw = () => {
    le(null), de(null);
  }, Hw = (j, k, A, J) => {
    ae(!0), Me({ rowId: j, colId: k, value: A, parentId: J }), T(/* @__PURE__ */ new Set([`${j}-${k}`]));
  }, qw = (j, k, A) => {
    G && V && V.colId === k && V.parentId === A && T((J) => new Set(J).add(`${j}-${k}`));
  }, Uw = () => {
    if (G && V) {
      const j = V.parentId, k = hi(), A = {
        ...B,
        [j]: B[j]?.map((J) => {
          const se = `${J.id}-${V.colId}`;
          if (xe.has(se)) {
            const ce = { ...J, [V.colId]: V.value };
            return r.forEach((Z) => {
              Z.type === "lastEditedTime" && (ce[Z.id] = k);
            }), ce;
          }
          return J;
        }) || []
      };
      z(A);
    }
    ae(!1), Me(null), T(/* @__PURE__ */ new Set());
  }, sf = (j, k, A) => {
    if (!k.trim()) return;
    const J = ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd"], se = J[Math.floor(Math.random() * J.length)];
    n(r.map((ce) => {
      if (ce.id === j && ce.type === "select") {
        const Z = ce.options || [];
        if (!Z.some((Be) => Be.value.toLowerCase() === k.toLowerCase()))
          return {
            ...ce,
            options: [...Z, { value: k, color: se }]
          };
      }
      return ce;
    })), Ot(A, j, k), K(null), Te("");
  }, Yw = (j, k) => {
    n(r.map((J) => J.id === j && J.type === "select" ? {
      ...J,
      options: J.options?.filter((se) => se.value !== k) || []
    } : J)), o(i.map((J) => J[j] === k ? { ...J, [j]: null } : J));
    const A = { ...B };
    Object.keys(A).forEach((J) => {
      A[J] = A[J].map((se) => se[j] === k ? { ...se, [j]: null } : se);
    }), z(A);
  }, Gw = (j, k) => {
    n(r.map(
      (A) => A.id === j ? { ...A, color: k } : A
    )), Tt(null), w(null);
  }, Rr = (j) => {
    const k = j.color || "#f8f9fa", A = ef[j.id] || 150;
    return {
      th: {
        ...Ve.th,
        backgroundColor: k,
        color: j.color && j.color !== "#f8f9fa" ? "#ffffff" : "#666666",
        width: `${A}px`,
        minWidth: `${A}px`,
        maxWidth: `${A}px`
      },
      td: {
        ...Ve.td,
        backgroundColor: j.color ? `${k}33` : "#ffffff",
        width: `${A}px`,
        minWidth: `${A}px`,
        maxWidth: `${A}px`
      }
    };
  }, Xw = (j, k) => {
    j.preventDefault(), j.stopPropagation(), tf(k), xw(j.clientX), bw(ef[k] || 150);
  }, cf = (j) => {
    if (!Nr) return;
    const k = j.clientX - rf, A = Math.max(50, nf + k);
    mw((J) => ({ ...J, [Nr]: A }));
  }, uf = () => {
    tf(null);
  };
  Oe(() => {
    if (Nr)
      return document.addEventListener("mousemove", cf), document.addEventListener("mouseup", uf), () => {
        document.removeEventListener("mousemove", cf), document.removeEventListener("mouseup", uf);
      };
  }, [Nr, rf, nf]);
  const Tn = r.filter((j) => !u.has(j.id)), bo = ww.filter((j) => Object.entries(Xt).every(([k, A]) => {
    if (!A.trim()) return !0;
    const J = j[k];
    return J == null ? !1 : String(J).toLowerCase().includes(A.toLowerCase());
  })), Zw = (j) => {
    kn((k) => {
      const A = { ...k };
      return delete A[j], A;
    });
  }, Jw = (j) => of.key === j ? of.direction === "ascending" ? "▲" : "▼" : "↕", df = (j, k, A, J) => {
    const se = `${A}-${j.id}`, ce = y.has(se);
    if (J)
      switch (j.type) {
        case "checkbox":
          return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!k, onChange: (Z) => Ot(A, j.id, Z.target.checked), autoFocus: !0, style: { outline: "none", accentColor: "#d3d3d3" } });
        case "select":
          return /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: k || "",
              onChange: (Z) => {
                Z.target.value === "__add_new__" ? (K({ columnId: j.id, rowId: A }), Te("")) : Z.target.value === "__manage_options__" ? fe({ columnId: j.id, rowId: A }) : Ot(A, j.id, Z.target.value);
              },
              autoFocus: !0,
              onBlur: () => l(null),
              style: { border: "none", backgroundColor: "#ffffff", color: "#000000", outline: "none", width: "100%" },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "", children: "Select..." }),
                j.options?.map((Z) => /* @__PURE__ */ f.jsx("option", { value: Z.value, children: Z.value }, Z.value)),
                /* @__PURE__ */ f.jsx("option", { value: "__add_new__", style: { color: "#007bff", fontStyle: "italic" }, children: "+ Add option" }),
                /* @__PURE__ */ f.jsx("option", { value: "__manage_options__", style: { color: "#ff6b6b", fontStyle: "italic" }, children: " Edit options" })
              ]
            }
          ) });
        case "createdTime":
        case "lastEditedTime":
          return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: k });
        case "date":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "date",
              defaultValue: k || "",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              autoFocus: !0,
              style: { outline: "none", color: "#000000", backgroundColor: "#ffffff", border: "none" }
            }
          );
        case "button":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: k || "Click me",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "files":
          return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => {
                const Z = document.createElement("input");
                Z.type = "file", Z.multiple = !0, Z.accept = "image/*,video/*", Z.onchange = (ge) => {
                  const be = Array.from(ge.target.files || []).map((Bt) => ({
                    name: Bt.name,
                    url: URL.createObjectURL(Bt),
                    type: Bt.type
                  }));
                  Ot(A, j.id, be);
                }, Z.click();
              },
              style: {
                background: "transparent",
                color: "black",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                padding: "4px",
                outline: "none"
              },
              title: "Upload files",
              children: /* @__PURE__ */ f.jsx(Sf, {})
            }
          ) });
        case "number":
          return /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: k || "",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              onKeyPress: (Z) => {
                j.name === "Phone" ? (!/[0-9]/.test(Z.key) || Z.currentTarget.value.replace(/\D/g, "").length >= 10) && Z.preventDefault() : /[0-9\-+.,\s]/.test(Z.key) || Z.preventDefault();
              },
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          ) });
        case "email":
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "email",
                defaultValue: k || "",
                onBlur: (Z) => Ot(A, j.id, Z.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            ce && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
        case "formula":
          return /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: k || "",
              placeholder: "e.g., [Column1] + [Column2] * 2",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          ) });
        case "place":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              defaultValue: k || "",
              placeholder: "Enter location",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "url":
          return /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "url",
              defaultValue: k || "",
              placeholder: "Enter URL",
              onBlur: (Z) => Ot(A, j.id, Z.target.value),
              autoFocus: !0,
              style: {
                width: "100%",
                border: "none",
                backgroundColor: "#ffffff",
                color: "#000000",
                outline: "none"
              }
            }
          );
        case "action":
          return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => window.print(),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "Print",
                children: "🖨️"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => alert(`Viewing row ${A}`),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "View",
                children: "👁️"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => alert(`Calling for row ${A}`),
                style: {
                  padding: "4px 6px",
                  backgroundColor: "#17a2b8",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                  fontSize: "10px"
                },
                title: "Call",
                children: "📞"
              }
            )
          ] });
        case "id":
          return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace" }, children: k });
        case "text":
        default:
          return /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                defaultValue: k || "",
                onBlur: (Z) => Ot(A, j.id, Z.target.value),
                autoFocus: !0,
                style: {
                  width: "100%",
                  border: "none",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  outline: "none"
                }
              }
            ),
            ce && j.name === "Email" && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px" }, children: "⚠ Invalid email" })
          ] });
      }
    if (k == null) return /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" } });
    switch (j.type) {
      case "checkbox":
        return /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: !!k, readOnly: !0, style: { accentColor: "#d3d3d3" } });
      case "date":
        return new Date(k).toLocaleDateString("en-GB");
      case "createdTime":
      case "lastEditedTime":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888" }, children: k });
      case "select":
        const Z = j.options?.find((be) => be.value === k);
        return Z ? /* @__PURE__ */ f.jsx("span", { style: {
          backgroundColor: Z.color + "33",
          color: Z.color,
          padding: "2px 6px",
          borderRadius: "4px",
          fontWeight: "600"
        }, children: k }) : k;
      case "number":
        return /* @__PURE__ */ f.jsx("span", { style: { textAlign: "right", display: "block" }, children: j.name === "Phone" ? k : Number(k).toLocaleString() });
      case "button":
        return /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => alert(`Button clicked in row ${A}!`),
            style: {
              padding: "4px 8px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "12px"
            },
            children: k || "Click me"
          }
        );
      case "files":
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", maxWidth: "200px", alignItems: "center" }, children: [
          Array.isArray(k) && k.length > 0 ? k.map((be, Bt) => /* @__PURE__ */ f.jsx("div", { style: { position: "relative" }, children: be.type?.startsWith("image/") ? /* @__PURE__ */ f.jsx(
            "img",
            {
              src: be.url,
              alt: be.name,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name
            }
          ) : be.type?.startsWith("video/") ? /* @__PURE__ */ f.jsx(
            "video",
            {
              src: be.url,
              style: {
                width: "40px",
                height: "40px",
                objectFit: "cover",
                borderRadius: "4px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name
            }
          ) : /* @__PURE__ */ f.jsx(
            "div",
            {
              style: {
                width: "40px",
                height: "40px",
                backgroundColor: "#f0f0f0",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                cursor: "pointer"
              },
              onClick: () => window.open(be.url, "_blank"),
              title: be.name,
              children: "📄"
            }
          ) }, Bt)) : null,
          /* @__PURE__ */ f.jsx(
            Sf,
            {
              style: {
                fontSize: "16px",
                color: "#666",
                cursor: "pointer",
                marginLeft: Array.isArray(k) && k.length > 0 ? "4px" : "0"
              },
              onClick: () => {
                const be = document.createElement("input");
                be.type = "file", be.multiple = !0, be.accept = "image/*,video/*", be.onchange = (Bt) => {
                  const Qw = Array.from(Bt.target.files || []).map(($l) => ({
                    name: $l.name,
                    url: URL.createObjectURL($l),
                    type: $l.type
                  })), e2 = Array.isArray(k) ? k : [];
                  Ot(A, j.id, [...e2, ...Qw]);
                }, be.click();
              },
              title: "Upload files"
            }
          )
        ] });
      case "email":
        return /* @__PURE__ */ f.jsxs("div", { children: [
          k,
          ce && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
      case "formula":
        const ge = i.find((be) => be.id === A) || Object.values(B).flat().find((be) => be.id === A), Be = ge ? m2(k, ge, r) : "Error";
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { color: "#007bff", fontWeight: "500" }, children: Be }),
          /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontSize: "10px" }, title: k, children: "Σ" })
        ] });
      case "place":
        return /* @__PURE__ */ f.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              position: "relative",
              cursor: "pointer"
            },
            onMouseEnter: (be) => {
              if (k) {
                const Bt = document.createElement("div");
                Bt.innerHTML = `<iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dOWTgHz-y931Pk&q=${encodeURIComponent(k)}" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`, Bt.style.cssText = "position: absolute; top: -210px; left: 0; background: white; border: 1px solid #ccc; border-radius: 4px; padding: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); z-index: 1000;", Bt.id = `map-tooltip-${A}-${j.id}`, be.currentTarget.appendChild(Bt);
              }
            },
            onMouseLeave: () => {
              const be = document.getElementById(`map-tooltip-${A}-${j.id}`);
              be && be.remove();
            },
            children: [
              /* @__PURE__ */ f.jsx("span", { style: { marginRight: "4px" }, children: "📍" }),
              /* @__PURE__ */ f.jsx("span", { children: k || "No location" })
            ]
          }
        );
      case "url":
        return k ? /* @__PURE__ */ f.jsx(
          "a",
          {
            href: k.startsWith("http") ? k : `https://${k}`,
            target: "_blank",
            rel: "noopener noreferrer",
            style: {
              color: "#007bff",
              textDecoration: "underline",
              cursor: "pointer"
            },
            children: k
          }
        ) : /* @__PURE__ */ f.jsx("span", { style: { color: "#aaa" }, children: "No URL" });
      case "action":
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "4px", alignItems: "center" }, children: [
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => window.print(),
              style: {
                padding: "4px 6px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "Print",
              children: "🖨️"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => alert(`Viewing row ${A}`),
              style: {
                padding: "4px 6px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "View",
              children: "👁️"
            }
          ),
          /* @__PURE__ */ f.jsx(
            "button",
            {
              onClick: () => alert(`Calling for row ${A}`),
              style: {
                padding: "4px 6px",
                backgroundColor: "#17a2b8",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontSize: "10px"
              },
              title: "Call",
              children: "📞"
            }
          )
        ] });
      case "id":
        return /* @__PURE__ */ f.jsx("span", { style: { color: "#888", fontFamily: "monospace", fontSize: "12px" }, children: k });
      case "text":
      default:
        return /* @__PURE__ */ f.jsxs("div", { children: [
          k,
          ce && j.name === "Email" && /* @__PURE__ */ f.jsx("span", { style: { color: "#ff6b6b", fontSize: "11px", marginLeft: "5px" }, children: "⚠ Invalid email" })
        ] });
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    q && /* @__PURE__ */ f.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Add new option" }),
      /* @__PURE__ */ f.jsx(
        "input",
        {
          type: "text",
          value: he,
          onChange: (j) => Te(j.target.value),
          placeholder: "Enter option name",
          autoFocus: !0,
          style: {
            width: "90%",
            padding: "8px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            fontSize: "14px",
            outline: "none",
            marginBottom: "15px"
          }
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "flex-end" }, children: [
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              K(null), Te("");
            },
            style: {
              padding: "6px 12px",
              border: "1px solid #e1e5e9",
              borderRadius: "4px",
              backgroundColor: "red",
              color: "#ffffffff",
              cursor: "pointer",
              fontSize: "14px"
            },
            children: "Cancel"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => sf(q.columnId, he, q.rowId),
            disabled: !he.trim(),
            style: {
              padding: "6px 12px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: he.trim() ? "#007bff" : "#ccc",
              color: "white",
              cursor: he.trim() ? "pointer" : "not-allowed",
              fontSize: "14px"
            },
            children: "Add"
          }
        )
      ] })
    ] }) }),
    ke && /* @__PURE__ */ f.jsx("div", { style: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    }, children: /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      minWidth: "300px",
      maxHeight: "400px",
      overflowY: "auto"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 15px 0", fontSize: "16px", color: "#333" }, children: "Manage Options" }),
      /* @__PURE__ */ f.jsx("div", { style: { marginBottom: "15px" }, children: r.find((j) => j.id === ke.columnId)?.options?.map((j) => /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 12px",
        marginBottom: "4px",
        backgroundColor: j.color + "33",
        borderRadius: "4px",
        border: `1px solid ${j.color}44`
      }, children: [
        /* @__PURE__ */ f.jsx("span", { style: { color: j.color, fontWeight: "500" }, children: j.value }),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => {
              window.confirm(`Delete option "${j.value}"? This will clear the value from all cells using this option.`) && Yw(ke.columnId, j.value);
            },
            style: {
              background: "none",
              border: "none",
              color: "#ff6b6b",
              cursor: "pointer",
              fontSize: "14px",
              padding: "2px"
            },
            title: "Delete option",
            children: "✕"
          }
        )
      ] }, j.value)) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ f.jsx(
        "button",
        {
          onClick: () => fe(null),
          style: {
            padding: "6px 12px",
            border: "1px solid #e1e5e9",
            borderRadius: "4px",
            backgroundColor: "red",
            color: "#ffffffff",
            cursor: "pointer",
            fontSize: "14px"
          },
          children: "Close"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ f.jsx("style", { children: `
          input[type="number"]::-webkit-outer-spin-button,
          input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          input[type="number"] {
            -moz-appearance: textfield;
          }
          input[type="date"]::-webkit-calendar-picker-indicator {
            cursor: pointer;
            opacity: 1;
            width: 16px;
            height: 16px;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="%23000000" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z"/></svg>');
            background-repeat: no-repeat;
            background-position:center;
            background-size: 12px 12px;
            outline: none;
            border: none;
           
          }
        
        ` }),
    /* @__PURE__ */ f.jsxs("table", { style: {
      ...Ve.table,
      backgroundColor: U ? "#1a1a1a" : "#ffffff",
      color: U ? "#ffffff" : "#333333",
      border: U ? "2px solid #333" : "2px solid #e1e5e9"
    }, children: [
      /* @__PURE__ */ f.jsxs("thead", { children: [
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            width: "40px",
            backgroundColor: U ? "#2a2a2a" : "#f8f9fa",
            borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9"
          } }),
          Tn.map((j) => {
            const k = s === j.id;
            return /* @__PURE__ */ f.jsxs(
              "th",
              {
                draggable: !Nr,
                onDragStart: () => !Nr && Tw(j.id),
                onDragOver: (A) => Iw(A, j.id),
                onDrop: (A) => Mw(A, j.id),
                onDragEnd: Dw,
                style: {
                  ...Rr(j).th,
                  position: "relative",
                  backgroundColor: F === j.id ? U ? "#444" : "#e3f2fd" : U ? "#2a2a2a" : Rr(j).th.backgroundColor,
                  color: U ? "#ffffff" : Rr(j).th.color,
                  borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
                  borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9",
                  opacity: _ === j.id ? 0.5 : 1,
                  cursor: Nr ? "col-resize" : "move"
                },
                title: `Sort by ${j.name}`,
                children: [
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
                      onClick: (A) => {
                        A.stopPropagation(), A.detail === 1 ? (v(!1), h(!1), w(b === j.id ? null : j.id)) : A.detail === 2 && (c(j.id), w(null));
                      },
                      children: k ? /* @__PURE__ */ f.jsx(
                        "input",
                        {
                          type: "text",
                          defaultValue: j.name,
                          onBlur: (A) => Pw(j.id, A.target.value),
                          autoFocus: !0,
                          style: { width: "100%", border: "none", background: "transparent", color: "inherit", fontWeight: "500", outline: "none" }
                        }
                      ) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
                        /* @__PURE__ */ f.jsx("span", { style: { cursor: "pointer", flex: 1, paddingRight: "2px" }, children: j.name }),
                        /* @__PURE__ */ f.jsx(
                          "span",
                          {
                            style: { fontSize: "12px", cursor: "pointer" },
                            onClick: (A) => {
                              A.stopPropagation(), jw(j.id);
                            },
                            children: Jw(j.id)
                          }
                        )
                      ] })
                    }
                  ),
                  /* @__PURE__ */ f.jsx(
                    "div",
                    {
                      onMouseDown: (A) => Xw(A, j.id),
                      style: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        width: "4px",
                        height: "100%",
                        cursor: "col-resize",
                        backgroundColor: "transparent",
                        zIndex: 10
                      },
                      onMouseEnter: (A) => {
                        Nr || (A.currentTarget.style.backgroundColor = U ? "#666" : "#ccc");
                      },
                      onMouseLeave: (A) => {
                        A.currentTarget.style.backgroundColor = "transparent";
                      }
                    }
                  ),
                  b === j.id && /* @__PURE__ */ f.jsxs("div", { style: {
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e1e5e9",
                    borderRadius: "4px",
                    padding: "4px",
                    zIndex: 1e3,
                    minWidth: "120px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }, children: [
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), di(ui === j.id ? null : j.id);
                        },
                        children: [
                          "Filter",
                          ui === j.id && /* @__PURE__ */ f.jsxs("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            minWidth: "200px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            zIndex: 1001
                          }, children: [
                            /* @__PURE__ */ f.jsx(
                              "input",
                              {
                                type: "text",
                                placeholder: `Filter ${j.name}...`,
                                value: Xt[j.id] || "",
                                onChange: (A) => {
                                  kn((J) => ({
                                    ...J,
                                    [j.id]: A.target.value
                                  }));
                                },
                                style: {
                                  width: "90%",
                                  padding: "6px 8px",
                                  border: "1px solid #e1e5e9",
                                  borderRadius: "4px",
                                  fontSize: "14px",
                                  outline: "none"
                                },
                                autoFocus: !0
                              }
                            ),
                            Xt[j.id] && /* @__PURE__ */ f.jsx(
                              "button",
                              {
                                onClick: (A) => {
                                  A.stopPropagation(), Zw(j.id);
                                },
                                style: {
                                  marginTop: "8px",
                                  padding: "4px 8px",
                                  backgroundColor: "#ff6b6b",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "4px",
                                  cursor: "pointer",
                                  fontSize: "12px"
                                },
                                children: "Clear Filter"
                              }
                            )
                          ] })
                        ]
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), _w(j.id);
                        },
                        children: "Duplicate"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333" },
                        onClick: (A) => {
                          A.stopPropagation(), af(j.id);
                        },
                        children: "Hide"
                      }
                    ),
                    /* @__PURE__ */ f.jsx(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#ff6b6b" },
                        onClick: (A) => {
                          A.stopPropagation(), Cw(j.id);
                        },
                        children: "Delete"
                      }
                    ),
                    /* @__PURE__ */ f.jsxs(
                      "div",
                      {
                        style: { padding: "6px 8px", cursor: "pointer", color: "#333333", position: "relative" },
                        onClick: (A) => {
                          A.stopPropagation(), Tt(yt === j.id ? null : j.id);
                        },
                        children: [
                          "Column Color",
                          yt === j.id && /* @__PURE__ */ f.jsx("div", { style: {
                            position: "absolute",
                            top: 0,
                            left: "100%",
                            backgroundColor: "#ffffff",
                            border: "1px solid #e1e5e9",
                            borderRadius: "4px",
                            padding: "8px",
                            display: "grid",
                            gridTemplateColumns: "repeat(5, 1fr)",
                            gap: "4px",
                            minWidth: "120px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          }, children: ["#ff6b6b", "#ffd93d", "#6bcf7f", "#4ecdc4", "#45b7d1", "#96ceb4", "#feca57", "#ff9ff3", "#54a0ff", "#5f27cd", "#f8f9fa"].map((A) => /* @__PURE__ */ f.jsx(
                            "div",
                            {
                              onClick: (J) => {
                                J.stopPropagation(), Gw(j.id, A);
                              },
                              style: {
                                width: "20px",
                                height: "20px",
                                backgroundColor: A,
                                borderRadius: "3px",
                                cursor: "pointer",
                                border: j.color === A ? "2px solid #333" : "1px solid #ddd"
                              }
                            },
                            A
                          )) })
                        ]
                      }
                    )
                  ] })
                ]
              },
              j.id
            );
          }),
          /* @__PURE__ */ f.jsxs(
            "th",
            {
              style: {
                ...Ve.th,
                color: U ? "#888" : "#aaa",
                cursor: "pointer",
                position: "relative",
                minWidth: "100px",
                backgroundColor: U ? "#2a2a2a" : "#f8f9fa",
                borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9"
              },
              children: [
                /* @__PURE__ */ f.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), w(null), h(!1), v(!g);
                }, title: "Add column", style: { ...Ve.button, marginRight: "5px", cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "+" }),
                /* @__PURE__ */ f.jsx("button", { onClick: (j) => {
                  j.stopPropagation(), w(null), v(!1), h(!p);
                }, style: { ...Ve.button, cursor: "pointer", color: "#000000ff", backgroundColor: "#cbc9c9ff" }, children: "..." }),
                g && /* @__PURE__ */ f.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: U ? "#2a2a2a" : "#ffffff",
                  border: U ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "180px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ f.jsx(
                    "input",
                    {
                      type: "text",
                      placeholder: "Column name",
                      value: x,
                      onChange: (j) => S(j.target.value),
                      style: {
                        width: "90%",
                        padding: "6px 8px",
                        marginBottom: "8px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        color: "#333333",
                        fontSize: "14px"
                      }
                    }
                  ),
                  /* @__PURE__ */ f.jsx("div", { style: { padding: "4px 8px", color: "#666666", fontSize: "12px" }, children: "Select type" }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("text"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "≡" }),
                    " Text"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("number"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "#" }),
                    " Number"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("select"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⊙" }),
                    " Select"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("checkbox"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "☑" }),
                    " Checkbox"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("date"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📅" }),
                    " Date"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("number", "Phone"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📞" }),
                    " Phone"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("email"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "@" }),
                    " Email"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("place", "Place"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📍" }),
                    " Place"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("url", "URL"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🔗" }),
                    " URL"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("formula", "Formula"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "Σ" }),
                    " Formula"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("button", "Button"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🖱️" }),
                    " Button"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("files", "Files"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "📎" }),
                    " Files"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("id", "ID"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "№" }),
                    " ID"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("action", "Action"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "⚡" }),
                    " Action"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("createdTime", "Created time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Created time"
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 8px", display: "flex", alignItems: "center", cursor: "pointer", color: U ? "#ffffff" : "#333333" }, onClick: () => ft("lastEditedTime", "Last edited time"), onMouseEnter: (j) => j.currentTarget.style.backgroundColor = U ? "#444" : "#d3d3d3ff", onMouseLeave: (j) => j.currentTarget.style.backgroundColor = "transparent", children: [
                    /* @__PURE__ */ f.jsx("span", { style: { marginRight: "8px" }, children: "🕐" }),
                    " Last edited time"
                  ] })
                ] }),
                p && /* @__PURE__ */ f.jsxs("div", { onClick: (j) => j.stopPropagation(), style: {
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  backgroundColor: U ? "#2a2a2a" : "#ffffff",
                  border: U ? "1px solid #444" : "1px solid #e1e5e9",
                  borderRadius: "4px",
                  padding: "8px",
                  zIndex: 1e3,
                  minWidth: "200px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }, children: [
                  /* @__PURE__ */ f.jsxs("div", { style: { padding: "4px 0", borderBottom: "1px solid #e1e5e9", marginBottom: "8px" }, children: [
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: U ? "#ccc" : "#666" }, children: "Dark Mode" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: () => yw(!U),
                          style: {
                            width: "40px",
                            height: "20px",
                            borderRadius: "10px",
                            backgroundColor: U ? "#007bff" : "#ccc",
                            position: "relative",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                          },
                          children: /* @__PURE__ */ f.jsx(
                            "div",
                            {
                              style: {
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                backgroundColor: "#fff",
                                position: "absolute",
                                top: "2px",
                                left: U ? "22px" : "2px",
                                transition: "left 0.3s"
                              }
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: U ? "#ccc" : "#666", marginBottom: "4px" }, children: "Row Colors" }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", marginBottom: "4px", position: "relative" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Odd:" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), mo(!Jd), xo(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: An,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      Jd && /* @__PURE__ */ f.jsx("div", { style: {
                        position: "absolute",
                        top: "25px",
                        left: "50px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        padding: "8px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "4px",
                        minWidth: "120px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 1002
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (k) => {
                            k.stopPropagation(), Rl(j), mo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: j,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: An === j ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        j
                      )) })
                    ] }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", position: "relative" }, children: [
                      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", marginRight: "8px", minWidth: "40px" }, children: "Even:" }),
                      /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (j) => {
                            j.stopPropagation(), xo(!Qd), mo(!1);
                          },
                          style: {
                            width: "30px",
                            height: "20px",
                            backgroundColor: yo,
                            border: "1px solid #ddd",
                            borderRadius: "3px",
                            cursor: "pointer"
                          }
                        }
                      ),
                      Qd && /* @__PURE__ */ f.jsx("div", { style: {
                        position: "absolute",
                        top: "25px",
                        left: "50px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #e1e5e9",
                        borderRadius: "4px",
                        padding: "8px",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "4px",
                        minWidth: "120px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        zIndex: 1002
                      }, children: ["#ffffff", "#f8f9fa", "#f0f8ff", "#f5f5dc", "#faf0e6", "#e6e6fa", "#f0fff0", "#fff0f5", "#f5fffa", "#fffaf0", "#f0f0f0"].map((j) => /* @__PURE__ */ f.jsx(
                        "div",
                        {
                          onClick: (k) => {
                            k.stopPropagation(), gw(j), xo(!1);
                          },
                          style: {
                            width: "20px",
                            height: "20px",
                            backgroundColor: j,
                            borderRadius: "3px",
                            cursor: "pointer",
                            border: yo === j ? "2px solid #333" : "1px solid #ddd"
                          }
                        },
                        j
                      )) })
                    ] })
                  ] }),
                  /* @__PURE__ */ f.jsxs("div", { style: { borderTop: "1px solid #e1e5e9", marginTop: "8px", paddingTop: "8px" }, children: [
                    /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: U ? "#ccc" : "#666", marginBottom: "8px", fontWeight: "500" }, children: "Active Users" }),
                    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px" }, children: [
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px", backgroundColor: U ? "#333" : "#f8f9fa" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#28a745" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: U ? "#fff" : "#333" }, children: "Current User" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: U ? "#888" : "#666", marginLeft: "auto" }, children: "Online" })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#dc3545" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: U ? "#fff" : "#333" }, children: "Admin" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: U ? "#888" : "#666", marginLeft: "auto" }, children: "Away" })
                      ] }),
                      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", padding: "4px 8px", borderRadius: "4px" }, children: [
                        /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#6c757d" } }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", color: U ? "#fff" : "#333" }, children: "Guest" }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "10px", color: U ? "#888" : "#666", marginLeft: "auto" }, children: "Offline" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: U ? "#ccc" : "#666", marginBottom: "4px" }, children: "Columns" }),
                  r.map((j) => /* @__PURE__ */ f.jsxs(
                    "div",
                    {
                      style: {
                        padding: "4px 8px",
                        cursor: "pointer",
                        color: U ? "#ffffff" : "#333333",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "13px"
                      },
                      onClick: () => af(j.id),
                      children: [
                        /* @__PURE__ */ f.jsx("span", { children: j.name }),
                        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: u.has(j.id) ? /* @__PURE__ */ f.jsx(Ly, {}) : /* @__PURE__ */ f.jsx(By, {}) })
                      ]
                    },
                    j.id
                  ))
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            width: "40px",
            backgroundColor: U ? "#2a2a2a" : "#f8f9fa",
            borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } }),
          Tn.map((j) => /* @__PURE__ */ f.jsx(
            "th",
            {
              style: {
                ...Rr(j).th,
                backgroundColor: U ? "#2a2a2a" : "#f8f9fa",
                color: U ? "#ffffff" : "#666666",
                borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
                borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9",
                padding: "4px 8px"
              },
              children: /* @__PURE__ */ f.jsx(
                "input",
                {
                  type: "text",
                  placeholder: "Search...",
                  value: Xt[j.id] || "",
                  onChange: (k) => {
                    kn((A) => ({
                      ...A,
                      [j.id]: k.target.value
                    }));
                  },
                  style: {
                    width: "90%",
                    padding: "4px 6px",
                    border: U ? "1px solid #444" : "1px solid #e1e5e9",
                    borderRadius: "4px",
                    fontSize: "12px",
                    outline: "none",
                    backgroundColor: U ? "#1a1a1a" : "#ffffff",
                    color: U ? "#ffffff" : "#333333"
                  },
                  onClick: (k) => k.stopPropagation()
                }
              )
            },
            `search-${j.id}`
          )),
          /* @__PURE__ */ f.jsx("th", { style: {
            ...Ve.th,
            backgroundColor: U ? "#2a2a2a" : "#f8f9fa",
            borderRight: U ? "1px solid #444" : "1px solid #e1e5e9",
            borderBottom: U ? "2px solid #444" : "2px solid #e1e5e9",
            padding: "4px"
          } })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("tbody", { children: [
        bo.map((j) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
          /* @__PURE__ */ f.jsxs(
            "tr",
            {
              draggable: !0,
              onDragStart: () => Nw(j.id),
              onDragOver: (k) => Rw(k, j.id),
              onDrop: (k) => $w(k, j.id),
              onDragEnd: zw,
              style: {
                ...Ve.tr,
                backgroundColor: R === j.id ? U ? "#444" : "#e3f2fd" : U ? bo.indexOf(j) % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : bo.indexOf(j) % 2 === 0 ? yo : An,
                opacity: Q === j.id ? 0.5 : 1,
                cursor: "move"
              },
              onMouseEnter: (k) => {
                !Q && !U && (k.currentTarget.style.backgroundColor = Ve.trHover.backgroundColor);
              },
              onMouseLeave: (k) => {
                if (!Q) {
                  const A = bo.indexOf(j), J = U ? A % 2 === 0 ? "#2a2a2a" : "#1a1a1a" : A % 2 === 0 ? yo : An;
                  k.currentTarget.style.backgroundColor = R === j.id ? U ? "#444" : "#e3f2fd" : J;
                }
              },
              children: [
                /* @__PURE__ */ f.jsx("td", { style: {
                  ...Ve.td,
                  textAlign: "center",
                  color: U ? "#888" : "#aaa",
                  backgroundColor: "inherit",
                  border: U ? "1px solid #444" : "1px solid #cececeff"
                }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
                  /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "12px", color: U ? "#888" : "#999" }, children: "⋮⋮" }),
                  /* @__PURE__ */ f.jsx("button", { onClick: (k) => {
                    k.stopPropagation(), Ow(j.id);
                  }, style: { ...Ve.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff" }, title: "Delete row", children: /* @__PURE__ */ f.jsx(Ii, {}) }),
                  /* @__PURE__ */ f.jsx("button", { onClick: (k) => {
                    k.stopPropagation(), Lw(j.id);
                  }, style: { ...Ve.button, cursor: "pointer", color: "#242424ff", backgroundColor: "transparent", fontSize: "12px" }, title: "Toggle sub-rows", children: ee.has(j.id) ? /* @__PURE__ */ f.jsx(v2, {}) : /* @__PURE__ */ f.jsx(g2, {}) })
                ] }) }),
                Tn.map((k) => {
                  const A = a?.rowId === j.id && a?.colId === k.id, J = `${j.id}-${k.id}`, se = D.has(J);
                  return /* @__PURE__ */ f.jsx(
                    "td",
                    {
                      style: {
                        ...Rr(k).td,
                        backgroundColor: se ? U ? "#444" : "#f0f0f0" : ue?.rowId === j.id && ue?.colId === k.id ? U ? "#444" : "#e3f2fd" : k.color ? Rr(k).td.backgroundColor : "inherit",
                        color: U ? "#ffffff" : "#333333",
                        border: ue?.rowId === j.id && ue?.colId === k.id ? "2px dashed #007bff" : U ? "1px solid #444" : "1px solid #cececeff",
                        userSelect: "none",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                      },
                      onClick: (ce) => {
                        ce.stopPropagation(), l({ rowId: j.id, colId: k.id });
                      },
                      draggable: !A,
                      onDragStart: (ce) => {
                        ce.stopPropagation(), Ew(j.id, k.id, j[k.id]);
                      },
                      onDragEnter: (ce) => {
                        ce.stopPropagation(), kw(j.id, k.id);
                      },
                      onDragEnd: (ce) => {
                        ce.stopPropagation(), Aw();
                      },
                      onDragOver: (ce) => {
                        ce.preventDefault(), ce.stopPropagation();
                      },
                      children: df(k, j[k.id], j.id, A)
                    },
                    k.id
                  );
                }),
                /* @__PURE__ */ f.jsx("td", { style: {
                  ...Ve.td,
                  backgroundColor: "inherit",
                  border: U ? "1px solid #444" : "1px solid #cececeff"
                } })
              ]
            }
          ),
          ee.has(j.id) && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
            B[j.id]?.map((k) => /* @__PURE__ */ f.jsxs(
              "tr",
              {
                draggable: !0,
                onDragStart: () => Ww(k.id, j.id),
                onDragOver: (A) => Fw(A, k.id),
                onDrop: (A) => Vw(A, k.id, j.id),
                onDragEnd: Kw,
                style: {
                  ...Ve.tr,
                  backgroundColor: me === k.id ? "#d1ecf1" : "#e9ecef",
                  opacity: H?.subRowId === k.id ? 0.5 : 1,
                  cursor: "move"
                },
                children: [
                  /* @__PURE__ */ f.jsx("td", { style: { ...Ve.td, textAlign: "center", color: "#aaa", backgroundColor: "#e9ecef" }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "4px", paddingLeft: "20px" }, children: [
                    /* @__PURE__ */ f.jsx("span", { style: { cursor: "grab", fontSize: "10px", color: "#999" }, children: "⋮⋮" }),
                    /* @__PURE__ */ f.jsx("button", { onClick: (A) => {
                      A.stopPropagation(), Bw(j.id, k.id);
                    }, style: { ...Ve.button, cursor: "pointer", color: "#c80000ff", backgroundColor: "#cbc9c9ff", fontSize: "10px" }, title: "Delete sub-row", children: /* @__PURE__ */ f.jsx(Ii, {}) })
                  ] }) }),
                  Tn.map((A) => {
                    const J = a?.rowId === k.id && a?.colId === A.id;
                    return /* @__PURE__ */ f.jsx(
                      "td",
                      {
                        style: {
                          ...Rr(A).td,
                          backgroundColor: xe.has(`${k.id}-${A.id}`) ? "#f0f0f0" : ue?.rowId === k.id && ue?.colId === A.id ? "#e3f2fd" : A.color ? `${A.color}22` : "#ecececff",
                          border: ue?.rowId === k.id && ue?.colId === A.id ? "2px dashed #007bff" : Rr(A).td.border,
                          userSelect: "none",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        },
                        onClick: (se) => {
                          se.stopPropagation(), l({ rowId: k.id, colId: A.id });
                        },
                        draggable: !J,
                        onDragStart: (se) => {
                          se.stopPropagation(), Hw(k.id, A.id, k[A.id], j.id);
                        },
                        onDragEnter: (se) => {
                          se.stopPropagation(), qw(k.id, A.id, j.id);
                        },
                        onDragEnd: (se) => {
                          se.stopPropagation(), Uw();
                        },
                        onDragOver: (se) => {
                          se.preventDefault(), se.stopPropagation();
                        },
                        children: df(A, k[A.id], k.id, J)
                      },
                      A.id
                    );
                  }),
                  /* @__PURE__ */ f.jsx("td", { style: { ...Ve.td, backgroundColor: "#e9ecef" } })
                ]
              },
              k.id
            )),
            /* @__PURE__ */ f.jsx("tr", { style: { backgroundColor: "#b7b8b9ff" }, children: /* @__PURE__ */ f.jsx("td", { colSpan: Tn.length + 2, style: { ...Ve.td, textAlign: "center", color: "#ffffffff", cursor: "pointer", backgroundColor: "#5b5b5bff", paddingLeft: "20px" }, onClick: () => lf(j.id), children: "+ Add Sub Row" }) })
          ] })
        ] }, j.id)),
        /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: Tn.length + 2, style: {
          ...Ve.td,
          textAlign: "center",
          color: U ? "#888" : "#aaa",
          cursor: "pointer",
          backgroundColor: "inherit",
          border: U ? "1px solid #444" : "1px solid #cececeff"
        }, onClick: Sw, children: "+ Add Row" }) })
      ] })
    ] })
  ] });
};
function Pf(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M23 8c0 1.1-.9 2-2 2a1.7 1.7 0 0 1-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56A1.7 1.7 0 0 1 19 8c0-1.1.9-2 2-2s2 .9 2 2z" }, child: [] }] })(e);
}
function x2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v14H9.33V5h5.34zm1 14H21V5h-5.33v14zm-7.34 0V5H3v14h5.33z" }, child: [] }] })(e);
}
function Cf(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M14.67 5v6.5H9.33V5h5.34zm1 6.5H21V5h-5.33v6.5zm-1 7.5v-6.5H9.33V19h5.34zm1-6.5V19H21v-6.5h-5.33zm-7.34 0H3V19h5.33v-6.5zm0-1V5H3v6.5h5.33z" }, child: [] }] })(e);
}
function b2(e) {
  return tt({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z" }, child: [] }] })(e);
}
const xR = ({ columns: e, initialData: t }) => {
  const [r] = W(t), [n, i] = W("table"), [o, a] = W(!1), [l, s] = W(!1), [c, u] = W(null), [d] = W({}), [p, h] = W(null), [g, v] = W(!0), [y, m] = W(!0), [b, w] = W("Date"), [x, S] = W("Month"), [O, C] = W(!0), [E, M] = W("Center peek"), D = r;
  Oe(() => {
    const B = () => {
      a(!1), h(null);
    }, z = (H) => {
      H.key === "Escape" && (H.preventDefault(), h(null), u(null));
    };
    return document.addEventListener("click", B), document.addEventListener("keydown", z), () => {
      document.removeEventListener("click", B), document.removeEventListener("keydown", z);
    };
  }, [c, p, r, d]);
  const N = (B) => {
    switch (B) {
      case "table":
        return /* @__PURE__ */ f.jsx(zl, {});
      case "board":
        return /* @__PURE__ */ f.jsx(jf, {});
      case "timeline":
        return /* @__PURE__ */ f.jsx(Pf, {});
      case "calendar":
        return /* @__PURE__ */ f.jsx(yf, {});
      case "list":
        return /* @__PURE__ */ f.jsx(xf, {});
      case "gallery":
        return /* @__PURE__ */ f.jsx(Cf, {});
      case "chart":
        return /* @__PURE__ */ f.jsx(mf, {});
      case "feed":
        return /* @__PURE__ */ f.jsx(wf, {});
      case "map":
        return /* @__PURE__ */ f.jsx(bf, {});
      default:
        return /* @__PURE__ */ f.jsx(zl, {});
    }
  }, _ = () => /* @__PURE__ */ f.jsxs("div", { style: {
    position: "relative",
    display: "inline-block",
    marginBottom: "16px"
  }, children: [
    /* @__PURE__ */ f.jsxs(
      "button",
      {
        onClick: (B) => {
          B.stopPropagation(), a(!o);
        },
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 12px",
          backgroundColor: l ? "#2a2a2a" : "#ffffff",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "14px",
          color: l ? "#ffffff" : "#333333",
          outline: "none"
        },
        children: [
          N(n),
          /* @__PURE__ */ f.jsx("span", { style: { textTransform: "capitalize" }, children: n }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px" }, children: "▼" })
        ]
      }
    ),
    o && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "absolute",
      top: "100%",
      left: 0,
      backgroundColor: l ? "#2a2a2a" : "#ffffff",
      border: l ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "8px",
      zIndex: 1e3,
      minWidth: "300px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      marginTop: "4px"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        padding: "4px 0",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        marginBottom: "8px"
      }, children: /* @__PURE__ */ f.jsx("span", { style: {
        fontSize: "12px",
        color: l ? "#888" : "#666",
        fontWeight: "500",
        paddingLeft: "8px"
      }, children: "Layout" }) }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }, children: [
        { type: "table", label: "Table", icon: /* @__PURE__ */ f.jsx(zl, {}) },
        { type: "board", label: "Board", icon: /* @__PURE__ */ f.jsx(jf, {}) },
        { type: "timeline", label: "Timeline", icon: /* @__PURE__ */ f.jsx(Pf, {}) },
        { type: "calendar", label: "Calendar", icon: /* @__PURE__ */ f.jsx(yf, {}) },
        { type: "list", label: "List", icon: /* @__PURE__ */ f.jsx(xf, {}) },
        { type: "gallery", label: "Gallery", icon: /* @__PURE__ */ f.jsx(Cf, {}) },
        { type: "chart", label: "Chart", icon: /* @__PURE__ */ f.jsx(mf, {}) },
        { type: "feed", label: "Feed", icon: /* @__PURE__ */ f.jsx(wf, {}) },
        { type: "map", label: "Map", icon: /* @__PURE__ */ f.jsx(bf, {}) }
      ].map(({ type: B, label: z, icon: H }) => /* @__PURE__ */ f.jsxs(
        "div",
        {
          onClick: () => {
            i(B), a(!1);
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            padding: "12px 8px",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: n === B ? l ? "#444" : "#e3f2fd" : "transparent",
            color: l ? "#ffffff" : "#333333",
            fontSize: "12px",
            border: n === B ? "2px solid #007bff" : "1px solid transparent"
          },
          onMouseEnter: (le) => {
            n !== B && (le.currentTarget.style.backgroundColor = l ? "#333" : "#f5f5f5");
          },
          onMouseLeave: (le) => {
            n !== B && (le.currentTarget.style.backgroundColor = "transparent");
          },
          children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "18px" }, children: H }),
            /* @__PURE__ */ f.jsx("span", { children: z })
          ]
        },
        B
      )) }),
      /* @__PURE__ */ f.jsx("div", { style: { borderTop: l ? "1px solid #444" : "1px solid #e1e5e9", paddingTop: "12px" }, children: /* @__PURE__ */ f.jsxs("div", { style: { marginBottom: "12px" }, children: [
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show page icon" }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              onClick: () => v(!g),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: g ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: g ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Wrap page titles" }),
          /* @__PURE__ */ f.jsx(
            "div",
            {
              onClick: () => m(!y),
              style: {
                width: "40px",
                height: "20px",
                borderRadius: "10px",
                backgroundColor: y ? "#007bff" : "#ccc",
                position: "relative",
                cursor: "pointer",
                transition: "background-color 0.3s"
              },
              children: /* @__PURE__ */ f.jsx(
                "div",
                {
                  style: {
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    position: "absolute",
                    top: "2px",
                    left: y ? "22px" : "2px",
                    transition: "left 0.3s"
                  }
                }
              )
            }
          )
        ] }),
        n === "calendar" && /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar by" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: b,
                onChange: (B) => w(B.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "Date", children: "Date" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Created", children: "Created" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Modified", children: "Modified" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show calendar as" }),
            /* @__PURE__ */ f.jsxs(
              "select",
              {
                value: x,
                onChange: (B) => S(B.target.value),
                style: {
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: l ? "#333" : "#fff",
                  color: l ? "#fff" : "#333"
                },
                children: [
                  /* @__PURE__ */ f.jsx("option", { value: "Month", children: "Month" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Week", children: "Week" }),
                  /* @__PURE__ */ f.jsx("option", { value: "Day", children: "Day" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }, children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Show weekends" }),
            /* @__PURE__ */ f.jsx(
              "div",
              {
                onClick: () => C(!O),
                style: {
                  width: "40px",
                  height: "20px",
                  borderRadius: "10px",
                  backgroundColor: O ? "#007bff" : "#ccc",
                  position: "relative",
                  cursor: "pointer",
                  transition: "background-color 0.3s"
                },
                children: /* @__PURE__ */ f.jsx(
                  "div",
                  {
                    style: {
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "2px",
                      left: O ? "22px" : "2px",
                      transition: "left 0.3s"
                    }
                  }
                )
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: l ? "#ffffff" : "#333333" }, children: "Open pages in" }),
          /* @__PURE__ */ f.jsxs(
            "select",
            {
              value: E,
              onChange: (B) => M(B.target.value),
              style: {
                padding: "4px 8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: l ? "#333" : "#fff",
                color: l ? "#fff" : "#333"
              },
              children: [
                /* @__PURE__ */ f.jsx("option", { value: "Center peek", children: "Center peek" }),
                /* @__PURE__ */ f.jsx("option", { value: "Side peek", children: "Side peek" }),
                /* @__PURE__ */ f.jsx("option", { value: "Full page", children: "Full page" })
              ]
            }
          )
        ] })
      ] }) })
    ] })
  ] }), L = () => {
    const B = e.find((me) => me.type === "select") || e[0], z = B?.options || [{ value: "Default", color: "#007bff" }], H = e.length, le = Math.max(280, H * 40);
    return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "16px", overflowX: "auto", padding: "16px", minHeight: "400px" }, children: z.map((me) => /* @__PURE__ */ f.jsxs("div", { style: {
      flex: `1 1 ${le}px`,
      minWidth: `${le}px`,
      maxWidth: `${Math.max(400, H * 60)}px`,
      backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
      borderRadius: "8px",
      padding: "16px"
    }, children: [
      /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", color: l ? "#ffffff" : "#333333" }, children: me.value }),
      D.filter((de) => de[B?.id || ""] === me.value).map((de) => /* @__PURE__ */ f.jsx("div", { style: {
        backgroundColor: l ? "#1a1a1a" : "#ffffff",
        border: l ? "1px solid #444" : "1px solid #e1e5e9",
        borderRadius: "6px",
        padding: "12px",
        marginBottom: "8px",
        color: l ? "#ffffff" : "#333333",
        minHeight: Math.max(80, H * 20),
        display: "flex",
        flexDirection: "column",
        gap: "4px"
      }, children: e.map((ue) => {
        const X = de[ue.id];
        return !X || ue.id === B?.id ? null : /* @__PURE__ */ f.jsxs("div", { style: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          alignItems: "center",
          minHeight: "20px"
        }, children: [
          /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "60px" }, children: [
            ue.name,
            ":"
          ] }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px", flex: "1" }, children: String(X) })
        ] }, ue.id);
      }) }, de.id))
    ] }, me.value)) });
  }, F = () => {
    const B = e.length, z = Math.max(120, 800 / B);
    return /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", overflowX: "auto" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${z}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "2px solid #444" : "2px solid #e1e5e9",
        fontWeight: "600",
        backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * z}px`
      }, children: e.map((H) => /* @__PURE__ */ f.jsx("div", { style: { fontSize: "14px", minWidth: `${z}px` }, children: H.name }, H.id)) }),
      D.map((H) => /* @__PURE__ */ f.jsx("div", { style: {
        display: "grid",
        gridTemplateColumns: `repeat(${e.length}, minmax(${z}px, 1fr))`,
        gap: "16px",
        padding: "12px",
        borderBottom: l ? "1px solid #444" : "1px solid #e1e5e9",
        color: l ? "#ffffff" : "#333333",
        minWidth: `${B * z}px`
      }, children: e.map((le) => /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", overflow: "hidden", textOverflow: "ellipsis", minWidth: `${z}px` }, children: H[le.id] ? String(H[le.id]) : "-" }, le.id)) }, H.id))
    ] });
  }, Y = () => {
    const B = /* @__PURE__ */ new Date(), z = B.getFullYear(), H = B.getMonth(), le = new Date(z, H, 1), de = new Date(z, H + 1, 0).getDate(), ue = le.getDay(), X = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ], G = [];
    for (let ae = 0; ae < ue; ae++)
      G.push(/* @__PURE__ */ f.jsx("div", { style: { padding: "8px" } }, `empty-${ae}`));
    for (let ae = 1; ae <= de; ae++) {
      const V = new Date(z, H, ae).getDay() === 0 || new Date(z, H, ae).getDay() === 6;
      G.push(
        /* @__PURE__ */ f.jsx("div", { style: {
          padding: "8px",
          border: l ? "1px solid #444" : "1px solid #e1e5e9",
          minHeight: "80px",
          backgroundColor: V && !O ? "#f5f5f5" : "transparent",
          color: l ? "#ffffff" : "#333333"
        }, children: /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "500", marginBottom: "4px" }, children: ae }) }, ae)
      );
    }
    return /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px",
        fontSize: "18px",
        fontWeight: "600",
        color: l ? "#ffffff" : "#333333"
      }, children: [
        X[H],
        " ",
        z
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "1px",
        backgroundColor: l ? "#444" : "#e1e5e9"
      }, children: [
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((ae) => /* @__PURE__ */ f.jsx("div", { style: {
          padding: "8px",
          textAlign: "center",
          fontWeight: "600",
          backgroundColor: l ? "#2a2a2a" : "#f8f9fa",
          color: l ? "#ffffff" : "#333333"
        }, children: ae }, ae)),
        G
      ] })
    ] });
  }, Q = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Timeline View" }),
    D.map((B) => /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      gap: "16px",
      padding: "12px 0",
      borderLeft: l ? "2px solid #444" : "2px solid #e1e5e9",
      paddingLeft: "16px",
      marginLeft: "8px",
      position: "relative"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        position: "absolute",
        left: "-6px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: l ? "#666" : "#007bff"
      } }),
      /* @__PURE__ */ f.jsx("div", { style: { flex: 1, color: l ? "#ffffff" : "#333333" }, children: e.map((z) => {
        const H = B[z.id];
        return H ? /* @__PURE__ */ f.jsxs("div", { style: { marginBottom: "4px" }, children: [
          /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: [
            z.name,
            ":"
          ] }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px" }, children: String(H) })
        ] }, z.id) : null;
      }) })
    ] }, B.id))
  ] }), ie = () => {
    const B = e.length, z = Math.max(280, B * 35);
    return /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(auto-fit, minmax(${z}px, 1fr))`,
      gap: "16px",
      padding: "16px"
    }, children: D.map((H) => /* @__PURE__ */ f.jsx("div", { style: {
      backgroundColor: l ? "#2a2a2a" : "#ffffff",
      border: l ? "1px solid #444" : "1px solid #e1e5e9",
      borderRadius: "8px",
      padding: "16px",
      color: l ? "#ffffff" : "#333333",
      minHeight: Math.max(200, B * 25),
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }, children: e.map((le) => {
      const me = H[le.id];
      return me ? /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        minHeight: "24px"
      }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", fontSize: "12px", color: l ? "#888" : "#666" }, children: le.name }),
        /* @__PURE__ */ f.jsx("div", { style: { fontSize: "14px", wordBreak: "break-word", flex: "1" }, children: String(me) })
      ] }, le.id) : null;
    }) }, H.id)) });
  }, R = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Chart View" }),
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Chart view would display data visualizations. This is a placeholder for chart implementation." })
  ] }), re = () => /* @__PURE__ */ f.jsx("div", { style: { padding: "16px" }, children: D.map((B) => /* @__PURE__ */ f.jsxs("div", { style: {
    backgroundColor: l ? "#2a2a2a" : "#ffffff",
    border: l ? "1px solid #444" : "1px solid #e1e5e9",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    color: l ? "#ffffff" : "#333333"
  }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: {
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        backgroundColor: l ? "#444" : "#e1e5e9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "14px"
      }, children: "📝" }),
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", fontSize: "16px", marginBottom: "4px" }, children: B[e[0]?.id] || "Untitled" }),
        /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: l ? "#888" : "#666" }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "grid", gap: "8px" }, children: e.slice(1).map((z) => {
      const H = B[z.id];
      return H ? /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px" }, children: [
        /* @__PURE__ */ f.jsxs("span", { style: { fontWeight: "500", fontSize: "12px", color: l ? "#888" : "#666", minWidth: "80px" }, children: [
          z.name,
          ":"
        ] }),
        /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", flex: 1 }, children: String(H) })
      ] }, z.id) : null;
    }) })
  ] }, B.id)) }), ee = () => /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", textAlign: "center" }, children: [
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#ffffff" : "#333333",
      fontSize: "18px",
      marginBottom: "16px"
    }, children: "Map View" }),
    /* @__PURE__ */ f.jsx("div", { style: {
      color: l ? "#888" : "#666",
      fontSize: "14px"
    }, children: "Map view would show location-based data. This is a placeholder for map implementation." })
  ] }), $ = () => {
    switch (n) {
      case "table":
        return /* @__PURE__ */ f.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ f.jsx(Of, { columns: e, initialData: r }) });
      case "board":
        return L();
      case "timeline":
        return Q();
      case "calendar":
        return Y();
      case "list":
        return F();
      case "gallery":
        return ie();
      case "chart":
        return R();
      case "feed":
        return re();
      case "map":
        return ee();
      default:
        return /* @__PURE__ */ f.jsx("div", { style: {
          overflowX: "auto",
          width: "100%",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }, className: "hide-scrollbar", children: /* @__PURE__ */ f.jsx(Of, { columns: e, initialData: r }) });
    }
  };
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx("style", { children: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        ` }),
    /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: l ? "#1a1a1a" : "#ffffff",
      color: l ? "#ffffff" : "#333333",
      padding: "20px",
      width: "100%",
      minHeight: "100vh",
      boxSizing: "border-box",
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px"
      }, children: [
        _(),
        /* @__PURE__ */ f.jsx(
          "button",
          {
            onClick: () => s(!l),
            style: {
              padding: "8px 12px",
              backgroundColor: l ? "#444" : "#f8f9fa",
              border: l ? "1px solid #666" : "1px solid #e1e5e9",
              borderRadius: "6px",
              color: l ? "#ffffff" : "#333333",
              cursor: "pointer",
              flexShrink: 0
            },
            children: l ? "☀️" : "🌙"
          }
        )
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { width: "100%", overflow: "hidden" }, children: $() })
    ] })
  ] });
}, bR = ({
  initialRows: e = 3,
  initialCols: t = 4,
  rows: r,
  cols: n
}) => {
  const [i, o] = W(r || e), [a, l] = W(n || t), [s, c] = W({}), [u, d] = W(null), [p, h] = W(null), [g, v] = W(null), y = (_, L) => `${_}-${L}`, m = (_, L) => s[y(_, L)] || "", b = (_, L, F) => {
    c((Y) => ({ ...Y, [y(_, L)]: F }));
  }, w = () => o((_) => _ + 1), x = () => l((_) => _ + 1), S = () => i > 1 && o((_) => _ - 1), O = () => a > 1 && l((_) => _ - 1), C = (_, L) => {
    d({ row: _, col: L });
  }, E = (_, L) => {
    h({ row: _, col: L });
  }, M = () => {
    h(null);
  }, D = (_) => {
    _.key === "Enter" && h(null);
  }, N = (_, L) => {
    const F = p?.row === _ && p?.col === L, Y = m(_, L);
    return F ? /* @__PURE__ */ f.jsx(
      "input",
      {
        type: "text",
        value: Y,
        onChange: (Q) => b(_, L, Q.target.value),
        onBlur: M,
        onKeyDown: D,
        autoFocus: !0,
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          outline: "none",
          background: "transparent",
          fontSize: "14px",
          padding: "8px",
          textAlign: "center"
        }
      }
    ) : /* @__PURE__ */ f.jsx(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px",
          fontSize: "14px",
          color: Y ? "#1a1a1a" : "#9ca3af",
          cursor: "pointer",
          position: "relative",
          minHeight: "60px"
        },
        children: Y || /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "6px" }, children: [
          /* @__PURE__ */ f.jsx(p2, { size: 10, style: { opacity: 0.5 } }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "12px" }, children: "Click to edit" })
        ] })
      }
    );
  };
  return /* @__PURE__ */ f.jsxs("div", { style: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px",
    backgroundColor: "#ffffff",
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "24px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "8px",
      border: "1px solid #e2e8f0"
    }, children: [
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: w,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (_) => _.currentTarget.style.backgroundColor = "#2563eb",
          onMouseLeave: (_) => _.currentTarget.style.backgroundColor = "#3b82f6",
          children: [
            /* @__PURE__ */ f.jsx(b2, { size: 14 }),
            "Add Row"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: x,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (_) => _.currentTarget.style.backgroundColor = "#059669",
          onMouseLeave: (_) => _.currentTarget.style.backgroundColor = "#10b981",
          children: [
            /* @__PURE__ */ f.jsx(x2, { size: 14 }),
            "Add Column"
          ]
        }
      ),
      /* @__PURE__ */ f.jsx("div", { style: { width: "1px", height: "24px", backgroundColor: "#e2e8f0" } }),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: S,
          disabled: i <= 1,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: i <= 1 ? "#f1f5f9" : "#ef4444",
            color: i <= 1 ? "#94a3b8" : "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: i <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (_) => {
            i > 1 && (_.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: (_) => {
            i > 1 && (_.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ f.jsx(Ii, { size: 12 }),
            "Delete Row"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs(
        "button",
        {
          onClick: O,
          disabled: a <= 1,
          style: {
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 12px",
            backgroundColor: a <= 1 ? "#f1f5f9" : "#ef4444",
            color: a <= 1 ? "#94a3b8" : "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "13px",
            fontWeight: "500",
            cursor: a <= 1 ? "not-allowed" : "pointer",
            transition: "all 0.2s"
          },
          onMouseEnter: (_) => {
            a > 1 && (_.currentTarget.style.backgroundColor = "#dc2626");
          },
          onMouseLeave: (_) => {
            a > 1 && (_.currentTarget.style.backgroundColor = "#ef4444");
          },
          children: [
            /* @__PURE__ */ f.jsx(Ii, { size: 12 }),
            "Delete Column"
          ]
        }
      ),
      /* @__PURE__ */ f.jsxs("div", { style: { marginLeft: "auto", fontSize: "13px", color: "#64748b" }, children: [
        i,
        " × ",
        a,
        " grid"
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${a}, 1fr)`,
      gap: "2px",
      backgroundColor: "#e2e8f0",
      borderRadius: "8px",
      padding: "2px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
    }, children: Array.from({ length: i * a }, (_, L) => {
      const F = Math.floor(L / a), Y = L % a, Q = u?.row === F && u?.col === Y, ie = g?.row === F && g?.col === Y;
      return /* @__PURE__ */ f.jsx(
        "div",
        {
          onClick: () => C(F, Y),
          onDoubleClick: () => E(F, Y),
          onMouseEnter: () => v({ row: F, col: Y }),
          onMouseLeave: () => v(null),
          style: {
            backgroundColor: Q ? "#dbeafe" : ie ? "#f1f5f9" : "#ffffff",
            borderRadius: "6px",
            border: Q ? "2px solid #3b82f6" : "2px solid transparent",
            transition: "all 0.2s ease",
            cursor: "pointer",
            position: "relative"
          },
          children: N(F, Y)
        },
        y(F, Y)
      );
    }) }),
    /* @__PURE__ */ f.jsx("div", { style: {
      marginTop: "16px",
      padding: "12px 16px",
      backgroundColor: "#f8fafc",
      borderRadius: "6px",
      fontSize: "13px",
      color: "#64748b",
      textAlign: "center"
    }, children: "Click to select • Double-click to edit • Use toolbar to modify structure" })
  ] });
}, Wy = [
  {
    id: 1,
    name: "Dolo 650 Tab",
    generic: "Paracetamol",
    dosage: "650mg"
  },
  {
    id: 2,
    name: "TRULOOP TL2215",
    generic: "ENDOLOOP",
    dosage: "500mg"
  },
  {
    id: 3,
    name: "DOLOPAR TABLET",
    generic: "Paracetamol",
    dosage: "500mg"
  },
  {
    id: 4,
    name: "Crocin 650",
    generic: "Paracetamol",
    dosage: "650mg"
  },
  {
    id: 5,
    name: "Aspirin 75mg",
    generic: "Acetylsalicylic acid",
    dosage: "75mg"
  },
  {
    id: 6,
    name: "Ibuprofen 400",
    generic: "Ibuprofen",
    dosage: "400mg"
  },
  {
    id: 7,
    name: "Amoxicillin 500",
    generic: "Amoxicillin",
    dosage: "500mg"
  },
  {
    id: 8,
    name: "Metformin 500",
    generic: "Metformin",
    dosage: "500mg"
  }
], wR = () => {
  const [e, t] = W([
    {
      id: "1",
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    }
  ]), [r, n] = W(null), [i, o] = W(""), a = Wy.filter(
    (p) => p.name.toLowerCase().includes(i.toLowerCase()) || p.generic.toLowerCase().includes(i.toLowerCase())
  ), l = () => {
    const p = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    t([...e, p]);
  }, s = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? { ...v, [h]: g } : v
    ));
  }, c = (p, h, g) => {
    t(e.map(
      (v) => v.id === p ? {
        ...v,
        [h]: { bf: g === "bf", af: g === "af" }
      } : v
    ));
  }, u = (p, h) => {
    s(p, "name", h.name), n(null), o("");
  }, d = (p, h) => {
    s(p, "name", h), o(h), n(h ? p : null);
  };
  return /* @__PURE__ */ f.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((p) => /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
          /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "text",
              placeholder: "Type medicine name",
              value: p.name,
              onChange: (h) => d(p.id, h.target.value),
              onFocus: () => n(p.id),
              style: {
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white"
              }
            }
          ),
          r === p.id && /* @__PURE__ */ f.jsx("div", { style: {
            position: "absolute",
            top: "100%",
            left: "12px",
            right: "12px",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "4px",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: 1e3,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }, children: a.map((h) => /* @__PURE__ */ f.jsxs(
            "div",
            {
              onClick: () => u(p.id, h),
              style: {
                padding: "8px 12px",
                cursor: "pointer",
                borderBottom: "1px solid #f0f0f0"
              },
              onMouseEnter: (g) => g.currentTarget.style.backgroundColor = "#f5f5f5",
              onMouseLeave: (g) => g.currentTarget.style.backgroundColor = "white",
              children: [
                /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: h.name }),
                /* @__PURE__ */ f.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                  "(",
                  h.generic,
                  ")"
                ] }),
                /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: h.dosage })
              ]
            },
            h.id
          )) })
        ] }),
        /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(
          "input",
          {
            type: "number",
            value: p.days,
            onChange: (h) => s(p.id, "days", h.target.value),
            style: {
              width: "60px",
              border: "none",
              outline: "none",
              textAlign: "center",
              fontSize: "14px",
              color: "black",
              backgroundColor: "white"
            }
          }
        ) }),
        ["morning", "afternoon", "evening", "night"].map((h) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
          /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].bf,
                onChange: () => c(p.id, h, "bf"),
                style: { margin: 0 }
              }
            ),
            "BF"
          ] }),
          /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "radio",
                name: `${p.id}-${h}`,
                checked: p[h].af,
                onChange: () => c(p.id, h, "af"),
                style: { margin: 0 }
              }
            ),
            "AF"
          ] })
        ] }) }, h))
      ] }, p.id)) })
    ] }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: l,
        style: {
          marginTop: "16px",
          padding: "8px 16px",
          background: "none",
          border: "none",
          color: "#007bff",
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none"
        },
        children: "+ Add Medicine"
      }
    )
  ] });
}, jR = () => {
  const [e, t] = W(() => {
    const x = sessionStorage.getItem("medicines");
    return x ? JSON.parse(x) : [
      {
        id: "1",
        name: "",
        days: "",
        morning: { bf: !1, af: !1 },
        afternoon: { bf: !1, af: !1 },
        evening: { bf: !1, af: !1 },
        night: { bf: !1, af: !1 },
        comment: ""
      }
    ];
  }), [r, n] = W(null), [i, o] = W(""), [a, l] = W(null), [s, c] = W(""), u = Wy.filter(
    (x) => x.name.toLowerCase().includes(i.toLowerCase()) || x.generic.toLowerCase().includes(i.toLowerCase())
  ), d = () => {
    const x = {
      id: Date.now().toString(),
      name: "",
      days: "",
      morning: { bf: !1, af: !1 },
      afternoon: { bf: !1, af: !1 },
      evening: { bf: !1, af: !1 },
      night: { bf: !1, af: !1 },
      comment: ""
    };
    t([...e, x]);
  }, p = (x, S, O) => {
    t(e.map(
      (C) => C.id === x ? { ...C, [S]: O } : C
    ));
  }, h = (x, S, O) => {
    t(e.map(
      (C) => C.id === x ? {
        ...C,
        [S]: { bf: O === "bf", af: O === "af" }
      } : C
    ));
  }, g = (x, S) => {
    p(x, "name", S.name), n(null), o("");
  }, v = (x, S) => {
    p(x, "name", S), o(S), n(S ? x : null);
  }, y = (x) => {
    const S = e.find((O) => O.id === x);
    c(S?.comment || ""), l(x);
  }, m = (x) => {
    const S = e.map(
      (O) => O.id === x ? { ...O, comment: s } : O
    );
    t(S), sessionStorage.setItem("medicines", JSON.stringify(S)), l(null), c("");
  }, b = (x) => {
    const S = e.find((O) => O.id === x);
    c(S?.comment || ""), l(x);
  }, w = () => {
    l(null), c("");
  };
  return /* @__PURE__ */ f.jsxs("div", { style: { padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "white" }, onClick: () => n(null), children: [
    /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", border: "1px solid #ddd", backgroundColor: "white" }, children: [
      /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "left", color: "black" }, children: "Medicine Name" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Days" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Morning" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Afternoon" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Evening" }),
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center", color: "black" }, children: "Night" })
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((x) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: "white" }, children: [
          /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", position: "relative" }, children: [
            /* @__PURE__ */ f.jsx(
              "input",
              {
                type: "text",
                placeholder: "Type medicine name",
                value: x.name,
                onChange: (S) => v(x.id, S.target.value),
                onFocus: () => n(x.id),
                style: {
                  width: "100%",
                  border: "none",
                  outline: "none",
                  fontSize: "14px",
                  color: "black",
                  backgroundColor: "white"
                }
              }
            ),
            x.comment && /* @__PURE__ */ f.jsxs("div", { style: {
              maxWidth: "200px",
              marginTop: "8px",
              padding: "8px",
              backgroundColor: "#e4e7fd",
              border: "1px solid #e0e0e0",
              borderLeft: "3px solid #4f67ff",
              borderRadius: "4px",
              fontSize: "13px",
              color: "#333",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }, children: [
              /* @__PURE__ */ f.jsx("span", { style: { flex: 1, wordBreak: "break-word" }, children: x.comment }),
              /* @__PURE__ */ f.jsx(
                "button",
                {
                  onClick: () => b(x.id),
                  style: {
                    background: "none",
                    border: "none",
                    color: "#999",
                    fontSize: "12px",
                    cursor: "pointer",
                    marginLeft: "8px",
                    padding: "0",
                    textDecoration: "none",
                    flexShrink: 0
                  },
                  children: "✏️ Edit"
                }
              )
            ] }),
            r === x.id && /* @__PURE__ */ f.jsx("div", { style: {
              position: "absolute",
              top: "100%",
              left: "12px",
              right: "12px",
              backgroundColor: "white",
              border: "1px solid #ddd",
              borderRadius: "4px",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 1e3,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }, children: u.map((S) => /* @__PURE__ */ f.jsxs(
              "div",
              {
                onClick: () => g(x.id, S),
                style: {
                  padding: "8px 12px",
                  cursor: "pointer",
                  borderBottom: "1px solid #f0f0f0"
                },
                onMouseEnter: (O) => O.currentTarget.style.backgroundColor = "#f5f5f5",
                onMouseLeave: (O) => O.currentTarget.style.backgroundColor = "white",
                children: [
                  /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold", fontSize: "14px" }, children: S.name }),
                  /* @__PURE__ */ f.jsxs("div", { style: { color: "#e74c3c", fontSize: "12px" }, children: [
                    "(",
                    S.generic,
                    ")"
                  ] }),
                  /* @__PURE__ */ f.jsx("div", { style: { fontSize: "12px", color: "#666" }, children: S.dosage })
                ]
              },
              S.id
            )) })
          ] }),
          /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: /* @__PURE__ */ f.jsx(
            "input",
            {
              type: "number",
              value: x.days,
              onChange: (S) => p(x.id, "days", S.target.value),
              style: {
                width: "60px",
                border: "none",
                outline: "none",
                textAlign: "center",
                fontSize: "14px",
                color: "black",
                backgroundColor: "white"
              }
            }
          ) }),
          ["morning", "afternoon", "evening", "night"].map((S) => /* @__PURE__ */ f.jsxs("td", { style: { padding: "12px", border: "1px solid #ddd", textAlign: "center" }, children: [
            /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }, children: [
              /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${x.id}-${S}`,
                    checked: x[S].bf,
                    onChange: () => h(x.id, S, "bf"),
                    style: { margin: 0 }
                  }
                ),
                "BF"
              ] }),
              /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "black" }, children: [
                /* @__PURE__ */ f.jsx(
                  "input",
                  {
                    type: "radio",
                    name: `${x.id}-${S}`,
                    checked: x[S].af,
                    onChange: () => h(x.id, S, "af"),
                    style: { margin: 0 }
                  }
                ),
                "AF"
              ] })
            ] }),
            S === "night" && /* @__PURE__ */ f.jsx("div", { style: { marginTop: "8px" }, children: /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => y(x.id),
                style: {
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  fontSize: "12px",
                  cursor: "pointer",
                  textDecoration: "none"
                },
                children: "+ Add Comment"
              }
            ) })
          ] }, S))
        ] }),
        a === x.id && /* @__PURE__ */ f.jsx("tr", { children: /* @__PURE__ */ f.jsx("td", { colSpan: 6, style: { padding: "0", border: "1px solid #ddd" }, children: /* @__PURE__ */ f.jsxs("div", { style: {
          backgroundColor: "#e4e7fd",
          border: "2px solid #4f67ff",
          borderRadius: "4px",
          padding: "8px",
          margin: "4px"
        }, children: [
          /* @__PURE__ */ f.jsx(
            "textarea",
            {
              value: s,
              onChange: (S) => c(S.target.value),
              placeholder: "Add instructions or notes for this medicine...",
              style: {
                width: "95%",
                height: "50px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "8px",
                fontSize: "14px",
                resize: "none",
                outline: "none",
                backgroundColor: "white",
                color: "black"
              }
            }
          ),
          /* @__PURE__ */ f.jsxs("div", { style: {
            display: "flex",
            gap: "8px",
            justifyContent: "flex-end",
            marginTop: "8px"
          }, children: [
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: w,
                style: {
                  padding: "6px 12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  fontSize: "12px",
                  color: "black"
                },
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => m(x.id),
                style: {
                  padding: "6px 12px",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#007bff",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "12px"
                },
                children: "Save Comment"
              }
            )
          ] })
        ] }) }) })
      ] }, x.id)) })
    ] }),
    /* @__PURE__ */ f.jsx(
      "button",
      {
        onClick: d,
        style: {
          marginTop: "16px",
          padding: "8px 16px",
          background: "none",
          border: "none",
          color: "#007bff",
          fontSize: "14px",
          cursor: "pointer",
          textDecoration: "none"
        },
        children: "+ Add Medicine"
      }
    )
  ] });
};
function Ue() {
  const e = ve(null), [t, r] = W({ width: 0, height: 0 });
  Oe(() => {
    if (!e.current) return;
    const o = new ResizeObserver(([a]) => {
      const { width: l, height: s } = a.contentRect;
      r({ width: l, height: s });
    });
    return o.observe(e.current), () => o.disconnect();
  }, []);
  const n = t.width === 0 ? 1 : t.width < 300 ? 0.75 : t.width < 500 ? 0.875 : 1;
  return { ref: e, ...t, fs: (o) => `${Math.round(o * n)}px`, scale: n };
}
const SR = ({
  title: e,
  paymentMethods: t
}) => {
  const { ref: r, fs: n } = Ue();
  return /* @__PURE__ */ f.jsx("div", { ref: r, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "0",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: /* @__PURE__ */ f.jsxs("div", { style: { padding: "24px" }, children: [
    /* @__PURE__ */ f.jsx("h4", { style: { color: "#003357" }, children: e }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "16px" }, children: t.map((i, o) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { color: "#7a8a99", fontSize: n(16), fontWeight: "600", minWidth: "70px", textAlign: "right" }, children: i.label }),
      /* @__PURE__ */ f.jsx("div", { style: { flex: 1, position: "relative" }, children: /* @__PURE__ */ f.jsx("div", { style: { backgroundColor: "#e8e8e8", height: "24px", borderRadius: "12px", overflow: "hidden" }, children: /* @__PURE__ */ f.jsx("div", { style: { backgroundColor: i.color, height: "100%", width: `${i.percentage}%`, borderRadius: "12px" } }) }) }),
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: n(18), fontWeight: "400", minWidth: "110px", textAlign: "right", color: "#2c3e50" }, children: i.amount.toLocaleString("en-IN") })
    ] }, o)) })
  ] }) });
}, OR = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  strokeWidth: n = 2,
  showDots: i = !0,
  showGrid: o = !0,
  title: a
}) => {
  const { ref: l, width: s, fs: c, scale: u } = Ue(), [d, p] = W(null), h = 20, g = 15, v = 50, y = s || 600, m = y - v * 2, b = t - h - g, w = Math.max(...e.map((L) => L.value)), x = Math.min(...e.map((L) => L.value)), S = w - x || 1, O = m / (e.length - 1 || 1), C = 10 * u * 0.6, E = Math.max(...e.map((L) => L.label.length)), M = E * C > O, D = M ? E * C * 0.7 : 20, N = e.map((L, F) => {
    const Y = v + m / (e.length - 1) * F, Q = h + b - (L.value - x) / S * b;
    return { x: Y, y: Q, ...L };
  }), _ = N.map((L, F) => `${F === 0 ? "M" : "L"} ${L.x} ${L.y}`).join(" ");
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    a && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: c(12), fontWeight: "bold", color: "#003357" }, children: a }),
    y > 0 && /* @__PURE__ */ f.jsxs("svg", { width: y, height: t + g + (M ? D - 20 : 0), children: [
      o && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((L, F) => {
        const Y = h + b * (1 - L);
        return /* @__PURE__ */ f.jsx("line", { x1: v, y1: Y, x2: y - v, y2: Y, stroke: "#e0e0e0", strokeWidth: "1" }, F);
      }) }),
      /* @__PURE__ */ f.jsx("path", { d: _, fill: "none", stroke: r, strokeWidth: n }),
      i && N.map((L, F) => /* @__PURE__ */ f.jsx(
        "circle",
        {
          cx: L.x,
          cy: L.y,
          r: "4",
          fill: L.color || r,
          style: { cursor: "pointer" },
          onMouseEnter: (Y) => p({ x: Y.clientX, y: Y.clientY, label: L.label, value: L.value }),
          onMouseMove: (Y) => p((Q) => Q ? { ...Q, x: Y.clientX, y: Y.clientY } : null),
          onMouseLeave: () => p(null)
        },
        F
      )),
      N.map((L, F) => M ? /* @__PURE__ */ f.jsx(
        "text",
        {
          x: L.x,
          y: h + b + 8,
          fontSize: c(10),
          fill: "#666",
          textAnchor: "end",
          transform: `rotate(-40, ${L.x}, ${h + b + 8})`,
          children: L.label
        },
        F
      ) : /* @__PURE__ */ f.jsx("text", { x: L.x, y: h + b + 20, textAnchor: "middle", fontSize: c(10), fill: "#666", children: L.label }, F))
    ] }),
    d && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: d.x + 12,
      top: d.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: c(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: d.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        d.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
}, PR = ({
  data: e,
  height: t = 200,
  defaultColor: r = "#003357",
  showValues: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: s, scale: c } = Ue(), u = 20, d = 15, p = 30, h = l || 600, g = h - p * 2, v = t - u - d, y = Math.max(...e.map((C) => C.value)), m = g / e.length * 0.7, b = g / e.length, w = 10 * c * 0.6, x = Math.max(...e.map((C) => C.label.length)), S = x * w > b, O = S ? x * w * 0.7 : 20;
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "12px",
    paddingBottom: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: o }),
    h > 0 && /* @__PURE__ */ f.jsxs("svg", { width: h, height: t + d + (S ? O - 20 : 0), children: [
      i && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((C, E) => {
        const M = u + v * (1 - C);
        return /* @__PURE__ */ f.jsx("line", { x1: p, y1: M, x2: h - p, y2: M, stroke: "#e0e0e0", strokeWidth: "1" }, E);
      }) }),
      e.map((C, E) => {
        const M = C.value / y * v, D = p + b * E + (b - m) / 2, N = u + v - M;
        return /* @__PURE__ */ f.jsxs("g", { children: [
          /* @__PURE__ */ f.jsx("rect", { x: D, y: N, width: m, height: M, fill: C.color || r, rx: "4" }),
          n && /* @__PURE__ */ f.jsx("text", { x: D + m / 2, y: N - 5, textAnchor: "middle", fontSize: s(12), fill: "#666", fontWeight: "bold", children: C.value }),
          S ? /* @__PURE__ */ f.jsx(
            "text",
            {
              x: D + m / 2,
              y: u + v + 8,
              fontSize: s(10),
              fill: "#666",
              textAnchor: "end",
              transform: `rotate(-40, ${D + m / 2}, ${u + v + 8})`,
              children: C.label
            }
          ) : /* @__PURE__ */ f.jsx("text", { x: D + m / 2, y: u + v + 20, textAnchor: "middle", fontSize: s(10), fill: "#666", children: C.label })
        ] }, E);
      })
    ] })
  ] });
};
function w2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function j2(e, t) {
  const [r, n, i] = w2(e), o = [...t].sort((s, c) => s.value - c.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((s, c) => {
    const u = a === 1 ? 0.5 : c / (a - 1), d = (h) => Math.round(220 - u * (220 - h)), p = (h) => d(h).toString(16).padStart(2, "0");
    l.set(s, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((s) => l.get(s));
}
const CR = ({
  data: e,
  showLegend: t = !0,
  showPercentages: r = !0,
  title: n,
  baseColor: i
}) => {
  const { ref: o, width: a, fs: l } = Ue(), [s, c] = W(null), d = (a || 400) - (t ? 160 : 0) - 40, p = Math.max(100, Math.min(d, 400)), h = i ? j2(i, e) : null, g = e.reduce((x, S) => x + S.value, 0), v = p / 2, y = p / 2, m = p / 2 - 20;
  let b = -90;
  const w = e.map((x) => {
    const S = x.value / g * 100, O = x.value / g * 360, C = b, E = b + O, M = C * Math.PI / 180, D = E * Math.PI / 180, N = v + m * Math.cos(M), _ = y + m * Math.sin(M), L = v + m * Math.cos(D), F = y + m * Math.sin(D), Y = O > 180 ? 1 : 0, Q = `M ${v} ${y} L ${N} ${_} A ${m} ${m} 0 ${Y} 1 ${L} ${F} Z`;
    b = E;
    const ie = h ? h[e.indexOf(x)] : x.color ?? "#4a90e2";
    return { ...x, path: Q, percentage: S, color: ie };
  });
  return /* @__PURE__ */ f.jsxs("div", { ref: o, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: l(12), fontWeight: "bold", color: "#003357" }, children: n }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "40px", flexWrap: "wrap" }, children: [
      p > 0 && /* @__PURE__ */ f.jsx("svg", { width: p, height: p, children: w.map((x, S) => /* @__PURE__ */ f.jsx(
        "path",
        {
          d: x.path,
          fill: x.color,
          stroke: "#fff",
          strokeWidth: "2",
          onMouseEnter: (O) => c({ x: O.clientX, y: O.clientY, label: x.label, value: x.value, percentage: x.percentage }),
          onMouseMove: (O) => c((C) => C ? { ...C, x: O.clientX, y: O.clientY } : null),
          onMouseLeave: () => c(null),
          style: { cursor: "pointer" }
        },
        S
      )) }),
      t && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: w.map((x, S) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: x.color, borderRadius: "4px", flexShrink: 0 } }),
        /* @__PURE__ */ f.jsxs("span", { style: { fontSize: l(14), color: "#333" }, children: [
          x.label,
          r && ` (${x.percentage.toFixed(1)}%)`
        ] })
      ] }, S)) })
    ] }),
    s && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: s.x + 12,
      top: s.y - 10,
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: l(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: s.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        s.value.toLocaleString("en-IN")
      ] })
    ] })
  ] });
}, _R = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  showLabels: n = !0,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: s } = Ue(), c = 60, u = l || 600, d = u - c * 2, p = t - c * 2, h = Math.max(...e.map((m) => m.x)), g = Math.max(...e.map((m) => m.y)), v = Math.max(...e.map((m) => m.size)), y = e.map((m) => ({
    ...m,
    cx: c + m.x / h * d,
    cy: c + p - m.y / g * p,
    r: m.size / v * 40 + 10
  }));
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: s(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((m, b) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsx("line", { x1: c, y1: c + p * m, x2: u - c, y2: c + p * m, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ f.jsx("line", { x1: c + d * m, y1: c, x2: c + d * m, y2: t - c, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, b)) }),
      y.map((m, b) => /* @__PURE__ */ f.jsxs("g", { children: [
        /* @__PURE__ */ f.jsx("circle", { cx: m.cx, cy: m.cy, r: m.r, fill: m.color || r, opacity: "0.7", stroke: "#fff", strokeWidth: "2" }),
        n && /* @__PURE__ */ f.jsx("text", { x: m.cx, y: m.cy, textAnchor: "middle", dominantBaseline: "middle", fontSize: s(12), fill: "#fff", fontWeight: "bold", children: m.label })
      ] }, b))
    ] })
  ] });
}, ER = ({
  data: e,
  showValues: t = !0,
  colorScale: r = ["#e3f2fd", "#003357"],
  title: n
}) => {
  const { ref: i, width: o, fs: a } = Ue(), l = Array.from(new Set(e.map((b) => b.x))), s = Array.from(new Set(e.map((b) => b.y))), c = 80, u = (o || 600) - c - 48, d = Math.max(30, Math.floor(u / l.length)), p = Math.max(...e.map((b) => b.value)), h = Math.min(...e.map((b) => b.value)), g = (b) => {
    const w = (b - h) / (p - h || 1), x = parseInt(r[0].slice(1, 3), 16), S = parseInt(r[0].slice(3, 5), 16), O = parseInt(r[0].slice(5, 7), 16), C = parseInt(r[1].slice(1, 3), 16), E = parseInt(r[1].slice(3, 5), 16), M = parseInt(r[1].slice(5, 7), 16);
    return `rgb(${Math.round(x + (C - x) * w)}, ${Math.round(S + (E - S) * w)}, ${Math.round(O + (M - O) * w)})`;
  }, v = (b, w) => e.find((x) => x.x === b && x.y === w)?.value ?? 0, y = l.length * d + c, m = s.length * d + c;
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    n && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: a(20), fontWeight: "bold", color: "#003357" }, children: n }),
    y > 0 && /* @__PURE__ */ f.jsxs("svg", { width: y, height: m, children: [
      s.map((b, w) => /* @__PURE__ */ f.jsx(
        "text",
        {
          x: c - 10,
          y: w * d + d / 2 + c,
          textAnchor: "end",
          dominantBaseline: "middle",
          fontSize: a(12),
          fill: "#666",
          children: b
        },
        `y-${w}`
      )),
      l.map((b, w) => /* @__PURE__ */ f.jsx(
        "text",
        {
          x: w * d + d / 2 + c,
          y: c - 10,
          textAnchor: "middle",
          fontSize: a(12),
          fill: "#666",
          children: b
        },
        `x-${w}`
      )),
      s.map(
        (b, w) => l.map((x, S) => {
          const O = v(x, b);
          return /* @__PURE__ */ f.jsxs("g", { children: [
            /* @__PURE__ */ f.jsx(
              "rect",
              {
                x: S * d + c,
                y: w * d + c,
                width: d,
                height: d,
                fill: g(O),
                stroke: "#fff",
                strokeWidth: "2",
                rx: "4"
              }
            ),
            t && /* @__PURE__ */ f.jsx(
              "text",
              {
                x: S * d + d / 2 + c,
                y: w * d + d / 2 + c,
                textAnchor: "middle",
                dominantBaseline: "middle",
                fontSize: a(Math.max(10, d / 4)),
                fill: "#fff",
                fontWeight: "bold",
                children: O
              }
            )
          ] }, `${S}-${w}`);
        })
      )
    ] })
  ] });
}, kR = ({
  data: e,
  height: t = 400,
  defaultColor: r = "#003357",
  pointSize: n = 6,
  showGrid: i = !0,
  title: o
}) => {
  const { ref: a, width: l, fs: s } = Ue(), c = 60, u = l || 600, d = u - c * 2, p = t - c * 2, h = Math.max(...e.map((b) => b.x)), g = Math.max(...e.map((b) => b.y)), v = Math.min(...e.map((b) => b.x)), y = Math.min(...e.map((b) => b.y)), m = e.map((b) => ({
    ...b,
    cx: c + (b.x - v) / (h - v || 1) * d,
    cy: c + p - (b.y - y) / (g - y || 1) * p
  }));
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 20px 0", fontSize: s(20), fontWeight: "bold", color: "#003357" }, children: o }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: t, children: [
      i && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((b, w) => /* @__PURE__ */ f.jsxs(Ke.Fragment, { children: [
        /* @__PURE__ */ f.jsx("line", { x1: c, y1: c + p * b, x2: u - c, y2: c + p * b, stroke: "#e0e0e0", strokeWidth: "1" }),
        /* @__PURE__ */ f.jsx("line", { x1: c + d * b, y1: c, x2: c + d * b, y2: t - c, stroke: "#e0e0e0", strokeWidth: "1" })
      ] }, w)) }),
      /* @__PURE__ */ f.jsx("line", { x1: c, y1: c, x2: c, y2: t - c, stroke: "#666", strokeWidth: "2" }),
      /* @__PURE__ */ f.jsx("line", { x1: c, y1: t - c, x2: u - c, y2: t - c, stroke: "#666", strokeWidth: "2" }),
      m.map((b, w) => /* @__PURE__ */ f.jsx("circle", { cx: b.cx, cy: b.cy, r: n, fill: b.color || r, opacity: "0.7" }, w))
    ] })
  ] });
};
function S2(e) {
  const t = e.replace("#", "");
  return [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)];
}
function O2(e, t) {
  const [r, n, i] = S2(e);
  return Array.from({ length: t }, (o, a) => {
    const l = t === 1 ? 0.5 : a / (t - 1), s = (u) => Math.round(220 - l * (220 - u)), c = (u) => s(u).toString(16).padStart(2, "0");
    return `#${c(r)}${c(n)}${c(i)}`;
  });
}
const AR = ({
  data: e,
  height: t = 200,
  showLegend: r = !0,
  showGrid: n = !0,
  title: i,
  color: o
}) => {
  const { ref: a, width: l, fs: s } = Ue(), [c, u] = W(null), p = Math.max(100, (l || 600) - (r ? 160 : 0) - 40), h = 20, g = 15, v = 30, y = p - v * 2, m = t - h - g, b = Math.max(...e.map((E) => E.stacks.reduce((M, D) => M + D.value, 0))), w = y / e.length * 0.7, x = y / e.length, S = Array.from(new Set(e.flatMap((E) => E.stacks.map((M) => M.label)))), O = o ? O2(o, S.length) : null, C = /* @__PURE__ */ new Map();
  return S.forEach((E, M) => {
    const D = e.flatMap((N) => N.stacks).find((N) => N.label === E)?.color;
    C.set(E, O ? O[M] : D ?? "#4a90e2");
  }), /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    paddingBottom: "24px",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    position: "relative",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    i && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: s(12), fontWeight: "bold", color: "#003357" }, children: i }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "40px", alignItems: "flex-start" }, children: [
      p > 0 && /* @__PURE__ */ f.jsxs("svg", { width: p, height: t + g, children: [
        n && /* @__PURE__ */ f.jsx("g", { children: [0, 0.25, 0.5, 0.75, 1].map((E, M) => {
          const D = h + m * (1 - E);
          return /* @__PURE__ */ f.jsx("line", { x1: v, y1: D, x2: p - v, y2: D, stroke: "#e0e0e0", strokeWidth: "1" }, M);
        }) }),
        e.map((E, M) => {
          const D = v + x * M + (x - w) / 2;
          let N = h + m;
          return /* @__PURE__ */ f.jsxs("g", { children: [
            E.stacks.map((_, L) => {
              const F = _.value / b * m, Y = N - F;
              return N = Y, /* @__PURE__ */ f.jsx(
                "rect",
                {
                  x: D,
                  y: Y,
                  width: w,
                  height: F,
                  fill: C.get(_.label) ?? "#4a90e2",
                  onMouseEnter: (Q) => {
                    const ie = Q.currentTarget.getBoundingClientRect();
                    u({ x: ie.left + ie.width / 2, y: ie.top, label: _.label, value: _.value });
                  },
                  onMouseLeave: () => u(null),
                  style: { cursor: "pointer" }
                },
                L
              );
            }),
            /* @__PURE__ */ f.jsx("text", { x: D + w / 2, y: h + m + 20, textAnchor: "middle", fontSize: s(12), fill: "#666", children: E.category })
          ] }, M);
        })
      ] }),
      r && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }, children: S.map((E, M) => /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "12px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "16px", height: "16px", backgroundColor: C.get(E), borderRadius: "4px" } }),
        /* @__PURE__ */ f.jsx("span", { style: { fontSize: s(14), color: "#333" }, children: E })
      ] }, M)) })
    ] }),
    c && /* @__PURE__ */ f.jsxs("div", { style: {
      position: "fixed",
      left: c.x,
      top: c.y - 10,
      transform: "translate(-50%, -100%)",
      backgroundColor: "rgba(0,0,0,0.8)",
      color: "#fff",
      padding: "8px 12px",
      borderRadius: "6px",
      fontSize: s(12),
      pointerEvents: "none",
      zIndex: 1e3,
      whiteSpace: "nowrap"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: c.label }),
      /* @__PURE__ */ f.jsxs("div", { children: [
        "Value: ",
        c.value
      ] })
    ] })
  ] });
}, TR = ({
  title: e,
  value: t,
  prefix: r = "",
  suffix: n = "",
  trend: i,
  trendLabel: o,
  icon: a,
  color: l = "#003357",
  backgroundColor: s = "#ffffff"
}) => {
  const { ref: c, fs: u } = Ue(), d = i !== void 0 && i >= 0;
  return /* @__PURE__ */ f.jsxs("div", { ref: c, style: {
    backgroundColor: s,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: u(14), color: "#666", fontWeight: "500" }, children: e }),
      a && /* @__PURE__ */ f.jsx("div", { style: { fontSize: u(24) }, children: a })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { style: { fontSize: u(32), fontWeight: "bold", color: l, marginBottom: "8px" }, children: [
      r,
      typeof t == "number" ? t.toLocaleString() : t,
      n
    ] }),
    i !== void 0 && /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
      /* @__PURE__ */ f.jsxs("span", { style: { fontSize: u(14), fontWeight: "bold", color: d ? "#4caf50" : "#f44336" }, children: [
        d ? "↑" : "↓",
        " ",
        Math.abs(i),
        "%"
      ] }),
      o && /* @__PURE__ */ f.jsx("span", { style: { fontSize: u(12), color: "#999" }, children: o })
    ] })
  ] });
}, IR = ({
  value: e,
  max: t = 100,
  min: r = 0,
  title: n,
  unit: i = "%",
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0"
}) => {
  const { ref: l, width: s, fs: c } = Ue(), u = Math.max(120, Math.min(s || 220, 320)), d = Math.max(r, Math.min(t, e)), p = (d - r) / (t - r) * 100, h = 225, g = 315, v = g - h, y = h + p / 100 * v, m = u / 2, b = u / 2 + 10, w = u / 2 - 40, x = (D, N) => {
    const _ = (D - 90) * Math.PI / 180;
    return { x: m + N * Math.cos(_), y: b + N * Math.sin(_) };
  }, S = (D, N) => {
    const _ = x(D, w), L = x(N, w), F = N - D <= 180 ? 0 : 1;
    return `M ${_.x} ${_.y} A ${w} ${w} 0 ${F} 1 ${L.x} ${L.y}`;
  }, O = h + p / 100 * v, C = x(y, w - 15), E = x(y - 90, 6), M = x(y + 90, 6);
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, children: [
    n && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: c(18), fontWeight: "bold", color: "#003357", textAlign: "center" }, children: n }),
    u > 0 && /* @__PURE__ */ f.jsxs("svg", { width: u, height: u * 0.75, style: { overflow: "visible" }, children: [
      /* @__PURE__ */ f.jsx("defs", { children: /* @__PURE__ */ f.jsx("filter", { id: "shadow", x: "-50%", y: "-50%", width: "200%", height: "200%", children: /* @__PURE__ */ f.jsx("feDropShadow", { dx: "0", dy: "2", stdDeviation: "3", floodOpacity: "0.3" }) }) }),
      /* @__PURE__ */ f.jsx("path", { d: S(h, g), fill: "none", stroke: a, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ f.jsx("path", { d: S(h, O), fill: "none", stroke: o, strokeWidth: "16", strokeLinecap: "round" }),
      /* @__PURE__ */ f.jsx("polygon", { points: `${C.x},${C.y} ${E.x},${E.y} ${M.x},${M.y}`, fill: "#333", filter: "url(#shadow)" }),
      /* @__PURE__ */ f.jsx("circle", { cx: m, cy: b, r: "10", fill: "#333" }),
      /* @__PURE__ */ f.jsx("circle", { cx: m, cy: b, r: "6", fill: "#fff" }),
      /* @__PURE__ */ f.jsxs("text", { x: m, y: b + 45, textAnchor: "middle", fontSize: c(Math.max(16, u / 7)), fontWeight: "bold", fill: o, children: [
        d,
        i
      ] }),
      /* @__PURE__ */ f.jsx("text", { x: x(h, w + 20).x - 5, y: x(h, w + 20).y, textAnchor: "end", fontSize: c(14), fill: "#666", fontWeight: "500", children: r }),
      /* @__PURE__ */ f.jsx("text", { x: x(g, w + 20).x + 5, y: x(g, w + 20).y, textAnchor: "start", fontSize: c(14), fill: "#666", fontWeight: "500", children: t })
    ] })
  ] });
}, MR = ({
  value: e,
  max: t = 100,
  label: r,
  showPercentage: n = !0,
  height: i = 24,
  color: o = "#003357",
  backgroundColor: a = "#e0e0e0",
  animated: l = !1
}) => {
  const { ref: s, fs: c } = Ue(), u = Math.min(100, Math.max(0, e / t * 100));
  return /* @__PURE__ */ f.jsxs("div", { ref: s, style: { width: "100%", boxSizing: "border-box", fontFamily: "Arial, sans-serif" }, children: [
    r && /* @__PURE__ */ f.jsxs("div", { style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "8px",
      fontSize: c(14),
      color: "#333",
      fontWeight: "500"
    }, children: [
      /* @__PURE__ */ f.jsx("span", { children: r }),
      n && /* @__PURE__ */ f.jsxs("span", { children: [
        u.toFixed(0),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: {
      width: "100%",
      height: `${i}px`,
      backgroundColor: a,
      borderRadius: `${i / 2}px`,
      overflow: "hidden",
      position: "relative"
    }, children: /* @__PURE__ */ f.jsx("div", { style: {
      width: `${u}%`,
      height: "100%",
      backgroundColor: o,
      borderRadius: `${i / 2}px`,
      transition: l ? "width 0.3s ease" : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      paddingRight: u > 10 ? "8px" : "0"
    }, children: !r && n && u > 10 && /* @__PURE__ */ f.jsxs("span", { style: { color: "#fff", fontSize: c(12), fontWeight: "bold" }, children: [
      u.toFixed(0),
      "%"
    ] }) }) })
  ] });
}, DR = ({ data: e, title: t, maxHeight: r = 400 }) => {
  const { ref: n, fs: i } = Ue(), o = {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  };
  if (!e || e.length === 0)
    return /* @__PURE__ */ f.jsxs("div", { ref: n, style: o, children: [
      t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
      /* @__PURE__ */ f.jsx("p", { style: { color: "#666", textAlign: "center", fontSize: i(14) }, children: "No data available" })
    ] });
  const a = Object.keys(e[0]);
  return /* @__PURE__ */ f.jsxs("div", { ref: n, style: o, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: i(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ f.jsx("thead", { style: { position: "sticky", top: 0, backgroundColor: "#003357", color: "#fff", zIndex: 1 }, children: /* @__PURE__ */ f.jsx("tr", { children: a.map((l) => /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", fontSize: i(13), borderBottom: "2px solid #002a45" }, children: l }, l)) }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: e.map((l, s) => /* @__PURE__ */ f.jsx("tr", { style: { backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: a.map((c) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", borderBottom: "1px solid #e0e0e0", color: "#333", fontSize: i(13) }, children: l[c] !== null && l[c] !== void 0 ? String(l[c]) : "-" }, c)) }, s)) })
    ] }) })
  ] });
}, NR = ({
  data: e,
  rowField: t,
  columnField: r,
  valueField: n,
  aggregation: i = "sum",
  title: o
}) => {
  const a = tr(() => {
    const l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), c = {};
    e.forEach((p) => {
      const h = String(p[t]), g = String(p[r]), v = Number(p[n]) || 0;
      l.add(h), s.add(g), c[h] || (c[h] = {}), c[h][g] || (c[h][g] = []), c[h][g].push(v);
    });
    const u = (p) => {
      if (p.length === 0) return 0;
      switch (i) {
        case "sum":
          return p.reduce((h, g) => h + g, 0);
        case "avg":
          return p.reduce((h, g) => h + g, 0) / p.length;
        case "count":
          return p.length;
        case "min":
          return Math.min(...p);
        case "max":
          return Math.max(...p);
        default:
          return 0;
      }
    }, d = {};
    return l.forEach((p) => {
      d[p] = {}, s.forEach((h) => {
        d[p][h] = c[p]?.[h] ? u(c[p][h]) : 0;
      });
    }), { rows: Array.from(l), cols: Array.from(s), result: d };
  }, [e, t, r, n, i]);
  return /* @__PURE__ */ f.jsxs("div", { style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
  }, children: [
    o && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: o }),
    /* @__PURE__ */ f.jsx("div", { style: { overflow: "auto", border: "1px solid #e0e0e0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", borderCollapse: "collapse" }, children: [
      /* @__PURE__ */ f.jsx("thead", { style: { backgroundColor: "#003357", color: "#fff" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
        /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "left", fontWeight: "600", position: "sticky", left: 0, backgroundColor: "#003357" }, children: t }),
        a.cols.map((l) => /* @__PURE__ */ f.jsx("th", { style: { padding: "12px", textAlign: "right", fontWeight: "600" }, children: l }, l))
      ] }) }),
      /* @__PURE__ */ f.jsx("tbody", { children: a.rows.map((l, s) => /* @__PURE__ */ f.jsxs("tr", { style: { backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: [
        /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", color: "#000000", fontWeight: "600", borderBottom: "1px solid #e0e0e0", position: "sticky", left: 0, backgroundColor: s % 2 === 0 ? "#f9f9f9" : "#fff" }, children: l }),
        a.cols.map((c) => /* @__PURE__ */ f.jsx("td", { style: { padding: "12px", textAlign: "right", borderBottom: "1px solid #e0e0e0", color: "#333" }, children: a.result[l][c].toFixed(2) }, c))
      ] }, l)) })
    ] }) })
  ] });
}, RR = ({
  items: e,
  title: t,
  maxHeight: r = 400,
  showNumbers: n = !1,
  defaultColor: i = "#003357"
}) => {
  const { ref: o, fs: a } = Ue(), l = {
    success: "#28a745",
    warning: "#ffc107",
    error: "#dc3545",
    info: "#17a2b8"
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: o, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: a(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: /* @__PURE__ */ f.jsx("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: e.map((s, c) => /* @__PURE__ */ f.jsxs(
      "li",
      {
        style: {
          padding: "16px",
          borderBottom: c < e.length - 1 ? "1px solid #e0e0e0" : "none",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          transition: "background-color 0.2s",
          cursor: "pointer"
        },
        onMouseEnter: (u) => u.currentTarget.style.backgroundColor = "#f5f5f5",
        onMouseLeave: (u) => u.currentTarget.style.backgroundColor = "transparent",
        children: [
          n && /* @__PURE__ */ f.jsx("span", { style: {
            minWidth: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: s.color || i,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: a(12),
            fontWeight: "bold"
          }, children: c + 1 }),
          s.icon && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(20) }, children: s.icon }),
          s.status && /* @__PURE__ */ f.jsx("div", { style: { width: "8px", height: "8px", borderRadius: "50%", backgroundColor: l[s.status] } }),
          /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
            /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "600", color: "#333", marginBottom: "4px", fontSize: a(14) }, children: s.title }),
            s.subtitle && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(13), color: "#666" }, children: s.subtitle })
          ] }),
          s.timestamp && /* @__PURE__ */ f.jsx("div", { style: { fontSize: a(12), color: "#999", whiteSpace: "nowrap" }, children: s.timestamp })
        ]
      },
      s.id
    )) }) })
  ] });
}, $R = ({
  markers: e,
  title: t,
  height: r = 400,
  centerLat: n = 0,
  centerLng: i = 0,
  zoom: o = 10,
  apiKey: a
}) => {
  const { ref: l, fs: s } = Ue(), c = `${n},${i}`, u = e.map((p) => `markers=color:red%7C${p.lat},${p.lng}`).join("&"), d = a ? `https://www.google.com/maps/embed/v1/view?key=${a}&center=${c}&zoom=${o}` : `https://maps.google.com/maps?q=${c}&z=${o}&output=embed${e.length > 0 ? "&" + u : ""}`;
  return /* @__PURE__ */ f.jsxs("div", { ref: l, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: s(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0" }, children: /* @__PURE__ */ f.jsx(
      "iframe",
      {
        width: "100%",
        height: r,
        style: { border: 0, display: "block" },
        loading: "lazy",
        src: d,
        allowFullScreen: !0
      }
    ) })
  ] });
}, zR = ({
  content: e,
  title: t,
  variant: r = "description",
  align: n = "left",
  color: i,
  backgroundColor: o = "#ffffff"
}) => {
  const { ref: a, fs: l } = Ue(), s = {
    note: { fontSize: l(14), fontStyle: "italic", color: i || "#666", lineHeight: "1.6" },
    title: { fontSize: l(24), fontWeight: "bold", color: i || "#003357", lineHeight: "1.3" },
    description: { fontSize: l(16), color: i || "#333", lineHeight: "1.7" }
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: o,
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: l(18), fontWeight: "bold", color: "#003357", textAlign: n }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { ...s[r], textAlign: n, whiteSpace: "pre-wrap" }, children: e })
  ] });
}, LR = ({
  src: e,
  type: t,
  title: r,
  alt: n = "Media content",
  width: i = "100%",
  height: o = "auto",
  autoPlay: a = !1,
  controls: l = !0,
  loop: s = !1
}) => {
  const { ref: c, fs: u } = Ue();
  return /* @__PURE__ */ f.jsxs("div", { ref: c, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    r && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: u(18), fontWeight: "bold", color: "#003357" }, children: r }),
    /* @__PURE__ */ f.jsx("div", { style: { borderRadius: "8px", overflow: "hidden", border: "1px solid #e0e0e0" }, children: t === "image" ? /* @__PURE__ */ f.jsx("img", { src: e, alt: n, style: { width: i, height: o, display: "block", objectFit: "cover" } }) : /* @__PURE__ */ f.jsx("video", { src: e, width: i, height: o, autoPlay: a, controls: l, loop: s, style: { display: "block" }, children: "Your browser does not support the video tag." }) })
  ] });
}, BR = ({
  title: e,
  options: t = [],
  defaultValue: r,
  onChange: n,
  type: i = "dropdown",
  placeholder: o = "Select...",
  searchable: a = !1,
  clearable: l = !0,
  maxSelections: s,
  minValue: c = 0,
  maxValue: u = 100,
  step: d = 1
}) => {
  const [p, h] = W(r || (i === "multiselect" || i === "tags" ? [] : t[0]?.value || "")), [g, v] = W(""), [y, m] = W(/* @__PURE__ */ new Set()), [b, w] = W(r || { start: "", end: "" }), [x, S] = W(r || { min: c, max: u }), [O, C] = W(""), E = tr(() => !a || !g ? t : t.filter(
    (R) => R.label.toLowerCase().includes(g.toLowerCase())
  ), [t, g, a]), M = (R) => {
    h(R), n(R);
  }, D = (R) => {
    const re = Array.isArray(p) ? p : [], ee = re.includes(R) ? re.filter(($) => $ !== R) : s && re.length >= s ? re : [...re, R];
    h(ee), n(ee);
  }, N = () => {
    const R = i === "multiselect" || i === "tags" ? [] : "";
    h(R), n(R);
  }, _ = (R) => {
    const re = new Set(y);
    re.has(R) ? re.delete(R) : re.add(R), m(re);
  }, L = (R, re) => {
    const ee = { ...b, [R]: re };
    w(ee), n(ee);
  }, F = (R, re) => {
    const ee = { ...x, [R]: re };
    S(ee), n(ee);
  }, Y = (R) => {
    if (!R.trim()) return;
    const re = Array.isArray(p) ? p : [];
    if (!re.includes(R)) {
      const ee = [...re, R.trim()];
      h(ee), n(ee);
    }
    C("");
  }, Q = (R) => {
    const ee = (Array.isArray(p) ? p : []).filter(($) => $ !== R);
    h(ee), n(ee);
  }, ie = (R, re = 0) => /* @__PURE__ */ f.jsx("div", { style: { marginLeft: re * 20 }, children: R.map((ee) => /* @__PURE__ */ f.jsxs("div", { children: [
    /* @__PURE__ */ f.jsxs(
      "div",
      {
        style: { display: "flex", alignItems: "center", padding: "8px", cursor: "pointer", borderRadius: "4px", backgroundColor: (Array.isArray(p) ? p.includes(ee.value) : p === ee.value) ? "#e6f2ff" : "transparent" },
        onClick: () => D(ee.value),
        children: [
          ee.children && /* @__PURE__ */ f.jsx("span", { onClick: ($) => {
            $.stopPropagation(), _(ee.value);
          }, style: { marginRight: "8px", fontSize: "12px" }, children: y.has(ee.value) ? "▼" : "▶" }),
          /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(ee.value), onChange: () => {
          }, style: { marginRight: "8px" } }),
          /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: ee.disabled ? "#999" : "#333" }, children: ee.label }),
          ee.count !== void 0 && /* @__PURE__ */ f.jsxs("span", { style: { marginLeft: "auto", fontSize: "12px", color: "#666" }, children: [
            "(",
            ee.count,
            ")"
          ] })
        ]
      }
    ),
    ee.children && y.has(ee.value) && ie(ee.children, re + 1)
  ] }, ee.value)) });
  return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }, children: [
      e && /* @__PURE__ */ f.jsx("h3", { style: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#003357" }, children: e }),
      l && (i === "multiselect" || i === "tags" ? Array.isArray(p) && p.length > 0 : p) && /* @__PURE__ */ f.jsx("button", { onClick: N, style: { padding: "4px 12px", fontSize: "12px", border: "none", borderRadius: "4px", backgroundColor: "#f0f0f0", color: "#666", cursor: "pointer" }, children: "Clear" })
    ] }),
    a && i !== "daterange" && i !== "numericrange" && /* @__PURE__ */ f.jsx("input", { type: "text", value: g, onChange: (R) => v(R.target.value), placeholder: "Search...", style: { width: "90%", padding: "10px", marginBottom: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "dropdown" && /* @__PURE__ */ f.jsxs("select", { value: p, onChange: (R) => M(R.target.value), style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: "#fff", color: "#333", cursor: "pointer", outline: "none" }, children: [
      o && /* @__PURE__ */ f.jsx("option", { value: "", children: o }),
      E.map((R) => /* @__PURE__ */ f.jsxs("option", { value: R.value, disabled: R.disabled, children: [
        R.label,
        " ",
        R.count !== void 0 && `(${R.count})`
      ] }, R.value))
    ] }),
    i === "buttons" && /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: E.map((R) => /* @__PURE__ */ f.jsxs("button", { onClick: () => M(R.value), disabled: R.disabled, style: { padding: "10px 20px", fontSize: "14px", fontWeight: "600", border: p === R.value ? "2px solid #003357" : "1px solid #d0d0d0", borderRadius: "8px", backgroundColor: p === R.value ? "#003357" : "#fff", color: p === R.value ? "#fff" : "#333", cursor: R.disabled ? "not-allowed" : "pointer", opacity: R.disabled ? 0.5 : 1, transition: "all 0.2s" }, children: [
      R.label,
      " ",
      R.count !== void 0 && `(${R.count})`
    ] }, R.value)) }),
    i === "multiselect" && /* @__PURE__ */ f.jsx("div", { style: { maxHeight: "300px", overflowY: "auto", border: "1px solid #d0d0d0", borderRadius: "8px", padding: "8px" }, children: E.map((R) => /* @__PURE__ */ f.jsxs("label", { style: { display: "flex", alignItems: "center", padding: "10px", cursor: R.disabled ? "not-allowed" : "pointer", borderRadius: "4px", transition: "background 0.2s", backgroundColor: Array.isArray(p) && p.includes(R.value) ? "#e6f2ff" : "transparent" }, children: [
      /* @__PURE__ */ f.jsx("input", { type: "checkbox", checked: Array.isArray(p) && p.includes(R.value), onChange: () => D(R.value), disabled: R.disabled, style: { marginRight: "10px", cursor: R.disabled ? "not-allowed" : "pointer" } }),
      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "14px", color: R.disabled ? "#999" : "#333", flex: 1 }, children: R.label }),
      R.count !== void 0 && /* @__PURE__ */ f.jsxs("span", { style: { fontSize: "12px", color: "#666" }, children: [
        "(",
        R.count,
        ")"
      ] })
    ] }, R.value)) }),
    i === "search" && /* @__PURE__ */ f.jsx("input", { type: "text", value: p, onChange: (R) => {
      h(R.target.value), n(R.target.value);
    }, placeholder: o, style: { width: "90%", padding: "12px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
    i === "daterange" && /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px", alignItems: "center" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "Start Date" }),
        /* @__PURE__ */ f.jsx("input", { type: "date", value: b.start, onChange: (R) => L("start", R.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] }),
      /* @__PURE__ */ f.jsx("span", { style: { marginTop: "20px", color: "#666" }, children: "—" }),
      /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ f.jsx("label", { style: { display: "block", fontSize: "12px", color: "#666", marginBottom: "4px" }, children: "End Date" }),
        /* @__PURE__ */ f.jsx("input", { type: "date", value: b.end, onChange: (R) => L("end", R.target.value), style: { width: "100%", padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "numericrange" && /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: "8px", fontSize: "14px", color: "#666" }, children: [
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Min: ",
          x.min
        ] }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Max: ",
          x.max
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: c, max: u, step: d, value: x.min, onChange: (R) => F("min", Number(R.target.value)), style: { flex: 1 } }),
        /* @__PURE__ */ f.jsx("input", { type: "range", min: c, max: u, step: d, value: x.max, onChange: (R) => F("max", Number(R.target.value)), style: { flex: 1 } })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "12px", marginTop: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "number", min: c, max: u, step: d, value: x.min, onChange: (R) => F("min", Number(R.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ f.jsx("input", { type: "number", min: c, max: u, step: d, value: x.max, onChange: (R) => F("max", Number(R.target.value)), style: { flex: 1, padding: "8px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } })
      ] })
    ] }),
    i === "hierarchical" && ie(E),
    i === "tags" && /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", gap: "8px", marginBottom: "12px" }, children: [
        /* @__PURE__ */ f.jsx("input", { type: "text", value: O, onChange: (R) => C(R.target.value), onKeyDown: (R) => R.key === "Enter" && Y(O), placeholder: "Add tag...", style: { flex: 1, padding: "10px", fontSize: "14px", border: "1px solid #d0d0d0", borderRadius: "8px", outline: "none" } }),
        /* @__PURE__ */ f.jsx("button", { onClick: () => Y(O), style: { padding: "10px 20px", fontSize: "14px", border: "none", borderRadius: "8px", backgroundColor: "#003357", color: "#fff", cursor: "pointer" }, children: "Add" })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", gap: "8px", flexWrap: "wrap" }, children: Array.isArray(p) && p.map((R) => /* @__PURE__ */ f.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 12px", fontSize: "14px", backgroundColor: "#e6f2ff", color: "#003357", borderRadius: "16px" }, children: [
        R,
        /* @__PURE__ */ f.jsx("button", { onClick: () => Q(R), style: { border: "none", background: "none", color: "#003357", cursor: "pointer", fontSize: "16px", lineHeight: 1, padding: 0 }, children: "×" })
      ] }, R)) })
    ] }),
    (i === "multiselect" || i === "hierarchical") && Array.isArray(p) && p.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { marginTop: "12px", padding: "8px", backgroundColor: "#f5f5f5", borderRadius: "8px", fontSize: "12px", color: "#666" }, children: [
      "Selected: ",
      p.length,
      " ",
      s && `/ ${s}`
    ] })
  ] });
}, WR = ({
  alerts: e,
  title: t,
  maxHeight: r = 400,
  onDismiss: n
}) => {
  const { ref: i, fs: o } = Ue(), a = {
    success: { bg: "#d4edda", border: "#28a745", icon: "✓" },
    warning: { bg: "#fff3cd", border: "#ffc107", icon: "⚠" },
    error: { bg: "#f8d7da", border: "#dc3545", icon: "✕" },
    info: { bg: "#d1ecf1", border: "#17a2b8", icon: "ℹ" }
  };
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: o(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { maxHeight: r, overflow: "auto" }, children: e.length === 0 ? /* @__PURE__ */ f.jsx("p", { style: { color: "#666", textAlign: "center", padding: "20px", fontSize: o(14) }, children: "No alerts" }) : /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "12px" }, children: e.map((l) => {
      const s = a[l.type];
      return /* @__PURE__ */ f.jsxs(
        "div",
        {
          style: {
            padding: "16px",
            backgroundColor: s.bg,
            border: `1px solid ${s.border}`,
            borderLeft: `4px solid ${s.border}`,
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
            opacity: l.read ? 0.6 : 1
          },
          children: [
            /* @__PURE__ */ f.jsx("span", { style: { fontSize: o(18), fontWeight: "bold" }, children: s.icon }),
            /* @__PURE__ */ f.jsxs("div", { style: { flex: 1 }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { fontSize: o(14), color: "#333", marginBottom: "4px" }, children: l.message }),
              /* @__PURE__ */ f.jsx("div", { style: { fontSize: o(12), color: "#666" }, children: l.timestamp })
            ] }),
            n && /* @__PURE__ */ f.jsx(
              "button",
              {
                onClick: () => n(l.id),
                style: { background: "none", border: "none", fontSize: o(18), cursor: "pointer", color: "#666", padding: "0 4px" },
                children: "×"
              }
            )
          ]
        },
        l.id
      );
    }) }) })
  ] });
};
let P2 = 0;
const Ho = [], FR = (e, t = "info", r = 3e3) => {
  const n = { id: `toast-${++P2}`, message: e, type: t, duration: r };
  Ho.forEach((i) => i(n));
}, VR = ({ position: e = "top-right", maxToasts: t = 5 }) => {
  const [r, n] = W([]), i = Ee((c) => {
    n((u) => [c, ...u].slice(0, t)), c.duration && setTimeout(() => o(c.id), c.duration);
  }, [t]), o = (c) => {
    n((u) => u.filter((d) => d.id !== c));
  };
  Oe(() => (Ho.push(i), () => {
    const c = Ho.indexOf(i);
    c > -1 && Ho.splice(c, 1);
  }), [i]);
  const a = () => {
    const c = { position: "fixed", zIndex: 9999, display: "flex", flexDirection: "column", gap: "12px", padding: "16px" };
    switch (e) {
      case "top-left":
        return { ...c, top: 0, left: 0 };
      case "top-right":
        return { ...c, top: 0, right: 0 };
      case "bottom-left":
        return { ...c, bottom: 0, left: 0 };
      case "bottom-right":
        return { ...c, bottom: 0, right: 0 };
      case "top-center":
        return { ...c, top: 0, left: "50%", transform: "translateX(-50%)" };
      case "bottom-center":
        return { ...c, bottom: 0, left: "50%", transform: "translateX(-50%)" };
      default:
        return { ...c, top: 0, right: 0 };
    }
  }, l = (c) => ({ backgroundColor: {
    success: { bg: "#10b981", icon: "✓" },
    error: { bg: "#ef4444", icon: "✕" },
    warning: { bg: "#f59e0b", icon: "⚠" },
    info: { bg: "#3b82f6", icon: "ℹ" }
  }[c].bg }), s = (c) => ({ success: "✓", error: "✕", warning: "⚠", info: "ℹ" })[c];
  return /* @__PURE__ */ f.jsxs("div", { style: a(), children: [
    r.map((c) => /* @__PURE__ */ f.jsxs("div", { style: { ...l(c.type), color: "#fff", padding: "12px 16px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", display: "flex", alignItems: "center", gap: "12px", minWidth: "300px", maxWidth: "500px", animation: "slideIn 0.3s ease-out", fontFamily: "Arial, sans-serif" }, children: [
      /* @__PURE__ */ f.jsx("span", { style: { fontSize: "18px", fontWeight: "bold" }, children: s(c.type) }),
      /* @__PURE__ */ f.jsx("span", { style: { flex: 1, fontSize: "14px" }, children: c.message }),
      /* @__PURE__ */ f.jsx("button", { onClick: () => o(c.id), style: { background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px", padding: 0, lineHeight: 1 }, children: "×" })
    ] }, c.id)),
    /* @__PURE__ */ f.jsx("style", { children: `
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      ` })
  ] });
}, KR = ({
  locations: e,
  title: t,
  height: r = 400,
  centerLat: n,
  centerLng: i,
  zoom: o = 12,
  bubbleScale: a = 1,
  showLabels: l = !0,
  mapStyle: s = "default"
}) => {
  const c = ve(null), u = ve(null), d = ve([]), { ref: p, fs: h } = Ue(), g = {
    lat: n ?? (e.length > 0 ? e.reduce((y, m) => y + m.lat, 0) / e.length : 51.5074),
    lng: i ?? (e.length > 0 ? e.reduce((y, m) => y + m.lng, 0) / e.length : -0.1278)
  }, v = (y) => {
    const m = Math.max(...e.map((x) => x.value)), b = 40;
    return (b + y / m * (100 - b)) * a;
  };
  return Oe(() => {
    const y = () => {
      if (window.L) {
        m();
        return;
      }
      const b = document.createElement("link");
      b.rel = "stylesheet", b.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", document.head.appendChild(b);
      const w = document.createElement("script");
      w.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js", w.async = !0, w.onload = m, document.head.appendChild(w);
    }, m = () => {
      if (!c.current || !window.L || u.current) return;
      const b = s === "satellite" ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" : s === "terrain" ? "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      u.current = window.L.map(c.current).setView([g.lat, g.lng], o), window.L.tileLayer(b, {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19
      }).addTo(u.current), d.current.forEach((w) => w.remove()), d.current = [], e.forEach((w) => {
        const x = v(w.value), S = w.color || "#0066a1", O = window.L.divIcon({
          className: "custom-bubble-marker",
          html: `
            <div style="position: relative; width: ${x}px; height: ${x}px; margin-left: -${x / 2}px; margin-top: -${x / 2}px;">
              <div class="bubble-circle" style="width: ${x}px; height: ${x}px; border-radius: 50%; background-color: ${S}; opacity: 0.7; border: 3px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; transition: transform 0.3s;">
                <span style="color: #fff; font-size: ${x / 3.5}px; font-weight: bold; font-family: Arial, sans-serif;">${w.value >= 10 ? `${w.value}+` : w.value}</span>
              </div>
              ${l && w.label ? `<div style="position: absolute; top: ${x}px; left: 50%; transform: translateX(-50%); white-space: nowrap; color: #333; font-size: 12px; font-weight: 600; text-shadow: 0 0 3px #fff, 0 0 3px #fff; font-family: Arial, sans-serif;">${w.label}</div>` : ""}
            </div>
          `,
          iconSize: [x, x],
          iconAnchor: [x / 2, x / 2]
        }), C = window.L.marker([w.lat, w.lng], { icon: O });
        C.bindTooltip(`${w.label || `Location ${w.id}`}: ${w.value}`, {
          direction: "top",
          offset: [0, -x / 2],
          className: "custom-tooltip"
        }), C.on("mouseover", function(E) {
          const M = E.target.getElement()?.querySelector(".bubble-circle");
          M && (M.style.transform = "scale(1.1)");
        }), C.on("mouseout", function(E) {
          const M = E.target.getElement()?.querySelector(".bubble-circle");
          M && (M.style.transform = "scale(1)");
        }), C.addTo(u.current), d.current.push(C);
      });
    };
    return y(), () => {
      u.current && (u.current.remove(), u.current = null);
    };
  }, [e, g.lat, g.lng, o, s, a, l]), /* @__PURE__ */ f.jsxs("div", { ref: p, style: { backgroundColor: "#ffffff", borderRadius: "16px", padding: "24px", fontFamily: "Arial, sans-serif", boxShadow: "0 2px 8px rgba(0,0,0,0.15)", width: "100%", boxSizing: "border-box" }, children: [
    t && /* @__PURE__ */ f.jsx("h3", { style: { margin: "0 0 16px 0", fontSize: h(18), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsx("div", { style: { position: "relative", borderRadius: "8px", overflow: "hidden", border: "1px solid #d0d0d0", width: "100%", height: r }, children: /* @__PURE__ */ f.jsx("div", { ref: c, style: { width: "100%", height: "100%" } }) }),
    /* @__PURE__ */ f.jsx("style", { children: `
        .custom-bubble-marker {
          background: none;
          border: none;
        }
        .custom-tooltip {
          background: rgba(51,51,51,0.9);
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }
        .leaflet-tooltip-top:before {
          border-top-color: rgba(51,51,51,0.9);
        }
      ` }),
    e.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { marginTop: "16px", display: "flex", gap: "16px", flexWrap: "wrap", fontSize: h(12), color: "#666" }, children: [
      /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#0066a1" } }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          "Total Locations: ",
          e.length
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: /* @__PURE__ */ f.jsxs("span", { children: [
        "Total Count: ",
        e.reduce((y, m) => y + m.value, 0)
      ] }) })
    ] })
  ] });
};
function C2(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.substring(0, 2), 16),
    parseInt(t.substring(2, 4), 16),
    parseInt(t.substring(4, 6), 16)
  ];
}
function _2(e, t) {
  const [r, n, i] = C2(e), o = [...t].sort((s, c) => s.value - c.value), a = t.length, l = /* @__PURE__ */ new Map();
  return o.forEach((s, c) => {
    const u = a === 1 ? 0.5 : c / (a - 1), d = (h) => Math.round(220 - u * (220 - h)), p = (h) => d(h).toString(16).padStart(2, "0");
    l.set(s, `#${p(r)}${p(n)}${p(i)}`);
  }), t.map((s) => l.get(s));
}
const xr = (e) => e * Math.PI / 180;
function _f(e, t) {
  const r = [...e].sort((i, o) => i.y - o.y);
  for (let i = 1; i < r.length; i++)
    r[i].y - r[i - 1].y < t && (r[i].y = r[i - 1].y + t);
  for (let i = r.length - 2; i >= 0; i--)
    r[i + 1].y - r[i].y < t && (r[i].y = r[i + 1].y - t);
  const n = new Array(e.length);
  return r.forEach((i) => {
    n[i.idx] = i.y;
  }), n;
}
const jo = 28, Ef = 24, kf = 15, E2 = 20, HR = ({ data: e, title: t, total: r, baseColor: n }) => {
  const { ref: i, width: o, fs: a } = Ue(), [l, s] = W(null), u = Math.max(280, Math.min(o || 600, 500)), p = u / 2 - 130, h = p * 0.52, g = p + E2, v = n ? _2(n, e) : null, y = e.reduce((z, H) => z + H.value, 0), m = r ?? y, b = u / 2, w = u / 2;
  let x = -90;
  const S = e.map((z, H) => {
    const le = z.value / y * 100, me = z.value / y * 360, de = x, ue = x + me, X = xr(de + me / 2), G = Math.cos(X) >= 0, ae = v ? v[H] : z.color ?? "#4a90e2", V = b + g * Math.cos(X), Me = w + g * Math.sin(X);
    return x = ue, { ...z, pct: le, sweep: me, start: de, end: ue, mid: X, isRight: G, ex: V, ey: Me, color: ae, idx: H };
  }), O = S.filter((z) => z.isRight), C = S.filter((z) => !z.isRight), E = _f(O.map((z, H) => ({ idx: H, y: z.ey })), Ef), M = _f(C.map((z, H) => ({ idx: H, y: z.ey })), Ef);
  let D = 0, N = 0;
  const _ = S.map((z) => {
    const H = z.isRight ? E[D++] : M[N++];
    return { ...z, labelY: H };
  }), L = _.map((z) => z.labelY), F = Math.min(...L) - jo, Y = Math.max(...L) + jo, Q = F < 0 ? -F : 0, ie = b, R = w + Q, re = Math.min(F + Q, R - p - jo), $ = Math.max(Y + Q, R + p + jo) - re;
  x = -90;
  const B = e.map((z, H) => {
    const le = _[H], me = le.sweep, de = x, ue = x + me, X = le.mid, G = ie + p * Math.cos(xr(de)), ae = R + p * Math.sin(xr(de)), V = ie + p * Math.cos(xr(ue)), Me = R + p * Math.sin(xr(ue)), xe = ie + h * Math.cos(xr(ue)), T = R + h * Math.sin(xr(ue)), q = ie + h * Math.cos(xr(de)), K = R + h * Math.sin(xr(de)), he = me > 180 ? 1 : 0, Te = `M ${G} ${ae} A ${p} ${p} 0 ${he} 1 ${V} ${Me} L ${xe} ${T} A ${h} ${h} 0 ${he} 0 ${q} ${K} Z`, ke = ie + (p + 2) * Math.cos(X), fe = R + (p + 2) * Math.sin(X), yt = p + 30, Tt = Math.max(p + 50, y * 1.5), Xt = Math.max(R - Tt + 5, Math.min(R + Tt - 5, le.labelY + Q)), kn = (Xt - R) / Tt, ui = ie + yt * Math.sqrt(Math.max(0, 1 - kn * kn)) * (le.isRight ? 1 : -1), di = ui + (le.isRight ? kf : -kf), An = le.isRight ? "start" : "end", Rl = di + (le.isRight ? 5 : -5);
    return x = ue, { ...le, path: Te, lineStartX: ke, lineStartY: fe, ellipseX: ui, labelY: Xt, lx2: di, textAnchor: An, textX: Rl };
  });
  return /* @__PURE__ */ f.jsxs("div", { ref: i, style: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    t && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 20px 0", fontSize: a(12), fontWeight: "bold", color: "#003357" }, children: t }),
    /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ f.jsxs("svg", { width: u, height: $, viewBox: `0 ${re} ${u} ${$}`, style: { overflow: "visible", display: "block" }, children: [
        B.map((z, H) => /* @__PURE__ */ f.jsx(
          "g",
          {
            onMouseEnter: (le) => s({ x: le.clientX, y: le.clientY, label: z.label, value: z.value, pct: z.pct }),
            onMouseMove: (le) => s((me) => me ? { ...me, x: le.clientX, y: le.clientY } : null),
            onMouseLeave: () => s(null),
            style: { cursor: "pointer" },
            children: /* @__PURE__ */ f.jsx("path", { d: z.path, fill: z.color, stroke: "#fff", strokeWidth: "2" })
          },
          H
        )),
        /* @__PURE__ */ f.jsx(
          "text",
          {
            x: ie,
            y: R - 8,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "600",
            children: "TOTAL"
          }
        ),
        /* @__PURE__ */ f.jsx(
          "text",
          {
            x: ie,
            y: R + 10,
            textAnchor: "middle",
            dominantBaseline: "middle",
            fill: "#2c3e50",
            fontSize: a(13),
            fontWeight: "700",
            children: m.toLocaleString("en-IN")
          }
        ),
        B.map((z, H) => /* @__PURE__ */ f.jsxs("g", { children: [
          /* @__PURE__ */ f.jsx(
            "polyline",
            {
              points: `${z.lineStartX},${z.lineStartY} ${z.ellipseX},${z.labelY} ${z.lx2},${z.labelY}`,
              stroke: z.color,
              strokeWidth: "1.2",
              fill: "none",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ f.jsxs(
            "text",
            {
              x: z.textX,
              y: z.labelY,
              textAnchor: z.textAnchor,
              dominantBaseline: "middle",
              fill: "#2c3e50",
              fontSize: a(11),
              fontWeight: "600",
              children: [
                z.label,
                ": ",
                z.pct.toFixed(1),
                "%"
              ]
            }
          )
        ] }, `label-${H}`))
      ] }),
      l && /* @__PURE__ */ f.jsxs("div", { style: {
        position: "fixed",
        left: l.x + 12,
        top: l.y - 10,
        backgroundColor: "rgba(0,0,0,0.8)",
        color: "#fff",
        padding: "8px 12px",
        borderRadius: "6px",
        fontSize: a(12),
        pointerEvents: "none",
        zIndex: 1e3,
        whiteSpace: "nowrap"
      }, children: [
        /* @__PURE__ */ f.jsx("div", { style: { fontWeight: "bold" }, children: l.label }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          "Value: ",
          l.value.toLocaleString("en-IN")
        ] })
      ] })
    ] })
  ] });
}, Af = ["#3b5fc0", "#2a9d5c", "#8b3fc8", "#e07b00"], qR = ({
  title: e,
  data: t,
  columns: r = 2,
  backgroundColor: n = "#f0f2f5",
  color: i
}) => {
  const o = Object.entries(t).map(([s, c]) => ({
    label: s.replace(/_/g, " "),
    value: c
  })), { ref: a, fs: l } = Ue();
  return /* @__PURE__ */ f.jsxs("div", { ref: a, style: {
    backgroundColor: n,
    borderRadius: "16px",
    padding: "12px",
    fontFamily: "Arial, sans-serif",
    width: "100%",
    boxSizing: "border-box"
  }, children: [
    e && /* @__PURE__ */ f.jsx("h6", { style: { margin: "0 0 12px 0", fontSize: l(12), fontWeight: "bold", color: "#003357" }, children: e }),
    /* @__PURE__ */ f.jsx("div", { style: {
      display: "grid",
      gridTemplateColumns: `repeat(${r}, 1fr)`,
      gap: "10px"
    }, children: o.map((s, c) => /* @__PURE__ */ f.jsxs("div", { style: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      padding: "14px 16px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.06)"
    }, children: [
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: l(28), fontWeight: "bold", color: i ?? Af[c % Af.length], lineHeight: 1 }, children: s.value }),
      /* @__PURE__ */ f.jsx("div", { style: { fontSize: l(11), color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "6px" }, children: s.label })
    ] }, c)) })
  ] });
};
function Fy(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Fy(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Pe() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Fy(e)) && (n && (n += " "), n += t);
  return n;
}
var k2 = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"];
function yu(e) {
  if (typeof e != "string")
    return !1;
  var t = k2;
  return t.includes(e);
}
var A2 = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it, and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], T2 = new Set(A2);
function Vy(e) {
  return typeof e != "string" ? !1 : T2.has(e);
}
function Ky(e) {
  return typeof e == "string" && e.startsWith("data-");
}
function qt(e) {
  if (typeof e != "object" || e === null)
    return {};
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Vy(r) || Ky(r)) && (t[r] = e[r]);
  return t;
}
function Yi(e) {
  if (e == null)
    return null;
  if (/* @__PURE__ */ Nt(e) && typeof e.props == "object" && e.props !== null) {
    var t = e.props;
    return qt(t);
  }
  return typeof e == "object" && !Array.isArray(e) ? qt(e) : null;
}
function vt(e) {
  var t = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (Vy(r) || Ky(r) || yu(r)) && (t[r] = e[r]);
  return t;
}
function I2(e) {
  return e == null ? null : /* @__PURE__ */ Nt(e) ? vt(e.props) : typeof e == "object" && !Array.isArray(e) ? vt(e) : null;
}
var M2 = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function mc() {
  return mc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mc.apply(null, arguments);
}
function D2(e, t) {
  if (e == null) return {};
  var r, n, i = N2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function N2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Hy = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r,
    width: n,
    height: i,
    viewBox: o,
    className: a,
    style: l,
    title: s,
    desc: c
  } = e, u = D2(e, M2), d = o || {
    width: n,
    height: i,
    x: 0,
    y: 0
  }, p = Pe("recharts-surface", a);
  return /* @__PURE__ */ P.createElement("svg", mc({}, vt(u), {
    className: p,
    width: n,
    height: i,
    style: l,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height),
    ref: t
  }), /* @__PURE__ */ P.createElement("title", null, s), /* @__PURE__ */ P.createElement("desc", null, c), r);
}), R2 = ["children", "className"];
function xc() {
  return xc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xc.apply(null, arguments);
}
function $2(e, t) {
  if (e == null) return {};
  var r, n, i = z2(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function z2(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var ct = /* @__PURE__ */ P.forwardRef((e, t) => {
  var {
    children: r,
    className: n
  } = e, i = $2(e, R2), o = Pe("recharts-layer", n);
  return /* @__PURE__ */ P.createElement("g", xc({
    className: o
  }, vt(i), {
    ref: t
  }), r);
}), L2 = /* @__PURE__ */ At(null);
function Ie(e) {
  return function() {
    return e;
  };
}
const qy = Math.cos, Jo = Math.sin, rr = Math.sqrt, Qo = Math.PI, Ya = 2 * Qo, bc = Math.PI, wc = 2 * bc, en = 1e-6, B2 = wc - en;
function Uy(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function W2(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Uy;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, o = n.length; i < o; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class F2 {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Uy : W2(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, o, a) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, n, i, o) {
    if (t = +t, r = +r, n = +n, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, l = this._y1, s = n - t, c = i - r, u = a - t, d = l - r, p = u * u + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (p > en) if (!(Math.abs(d * s - c * u) > en) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let h = n - a, g = i - l, v = s * s + c * c, y = h * h + g * g, m = Math.sqrt(v), b = Math.sqrt(p), w = o * Math.tan((bc - Math.acos((v + p - y) / (2 * m * b))) / 2), x = w / b, S = w / m;
      Math.abs(x - 1) > en && this._append`L${t + x * u},${r + x * d}`, this._append`A${o},${o},0,0,${+(d * h > u * g)},${this._x1 = t + S * s},${this._y1 = r + S * c}`;
    }
  }
  arc(t, r, n, i, o, a) {
    if (t = +t, r = +r, n = +n, a = !!a, n < 0) throw new Error(`negative radius: ${n}`);
    let l = n * Math.cos(i), s = n * Math.sin(i), c = t + l, u = r + s, d = 1 ^ a, p = a ? i - o : o - i;
    this._x1 === null ? this._append`M${c},${u}` : (Math.abs(this._x1 - c) > en || Math.abs(this._y1 - u) > en) && this._append`L${c},${u}`, n && (p < 0 && (p = p % wc + wc), p > B2 ? this._append`A${n},${n},0,1,${d},${t - l},${r - s}A${n},${n},0,1,${d},${this._x1 = c},${this._y1 = u}` : p > en && this._append`A${n},${n},0,${+(p >= bc)},${d},${this._x1 = t + n * Math.cos(o)},${this._y1 = r + n * Math.sin(o)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function mu(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new F2(t);
}
function xu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Yy(e) {
  this._context = e;
}
Yy.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ga(e) {
  return new Yy(e);
}
function Gy(e) {
  return e[0];
}
function Xy(e) {
  return e[1];
}
function Zy(e, t) {
  var r = Ie(!0), n = null, i = Ga, o = null, a = mu(l);
  e = typeof e == "function" ? e : e === void 0 ? Gy : Ie(e), t = typeof t == "function" ? t : t === void 0 ? Xy : Ie(t);
  function l(s) {
    var c, u = (s = xu(s)).length, d, p = !1, h;
    for (n == null && (o = i(h = a())), c = 0; c <= u; ++c)
      !(c < u && r(d = s[c], c, s)) === p && ((p = !p) ? o.lineStart() : o.lineEnd()), p && o.point(+e(d, c, s), +t(d, c, s));
    if (h) return o = null, h + "" || null;
  }
  return l.x = function(s) {
    return arguments.length ? (e = typeof s == "function" ? s : Ie(+s), l) : e;
  }, l.y = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : Ie(+s), l) : t;
  }, l.defined = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : Ie(!!s), l) : r;
  }, l.curve = function(s) {
    return arguments.length ? (i = s, n != null && (o = i(n)), l) : i;
  }, l.context = function(s) {
    return arguments.length ? (s == null ? n = o = null : o = i(n = s), l) : n;
  }, l;
}
function So(e, t, r) {
  var n = null, i = Ie(!0), o = null, a = Ga, l = null, s = mu(c);
  e = typeof e == "function" ? e : e === void 0 ? Gy : Ie(+e), t = typeof t == "function" ? t : Ie(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? Xy : Ie(+r);
  function c(d) {
    var p, h, g, v = (d = xu(d)).length, y, m = !1, b, w = new Array(v), x = new Array(v);
    for (o == null && (l = a(b = s())), p = 0; p <= v; ++p) {
      if (!(p < v && i(y = d[p], p, d)) === m)
        if (m = !m)
          h = p, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), g = p - 1; g >= h; --g)
            l.point(w[g], x[g]);
          l.lineEnd(), l.areaEnd();
        }
      m && (w[p] = +e(y, p, d), x[p] = +t(y, p, d), l.point(n ? +n(y, p, d) : w[p], r ? +r(y, p, d) : x[p]));
    }
    if (b) return l = null, b + "" || null;
  }
  function u() {
    return Zy().defined(i).curve(a).context(o);
  }
  return c.x = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ie(+d), n = null, c) : e;
  }, c.x0 = function(d) {
    return arguments.length ? (e = typeof d == "function" ? d : Ie(+d), c) : e;
  }, c.x1 = function(d) {
    return arguments.length ? (n = d == null ? null : typeof d == "function" ? d : Ie(+d), c) : n;
  }, c.y = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ie(+d), r = null, c) : t;
  }, c.y0 = function(d) {
    return arguments.length ? (t = typeof d == "function" ? d : Ie(+d), c) : t;
  }, c.y1 = function(d) {
    return arguments.length ? (r = d == null ? null : typeof d == "function" ? d : Ie(+d), c) : r;
  }, c.lineX0 = c.lineY0 = function() {
    return u().x(e).y(t);
  }, c.lineY1 = function() {
    return u().x(e).y(r);
  }, c.lineX1 = function() {
    return u().x(n).y(t);
  }, c.defined = function(d) {
    return arguments.length ? (i = typeof d == "function" ? d : Ie(!!d), c) : i;
  }, c.curve = function(d) {
    return arguments.length ? (a = d, o != null && (l = a(o)), c) : a;
  }, c.context = function(d) {
    return arguments.length ? (d == null ? o = l = null : l = a(o = d), c) : o;
  }, c;
}
class Jy {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function V2(e) {
  return new Jy(e, !0);
}
function K2(e) {
  return new Jy(e, !1);
}
const bu = {
  draw(e, t) {
    const r = rr(t / Qo);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Ya);
  }
}, H2 = {
  draw(e, t) {
    const r = rr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, Qy = rr(1 / 3), q2 = Qy * 2, U2 = {
  draw(e, t) {
    const r = rr(t / q2), n = r * Qy;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, Y2 = {
  draw(e, t) {
    const r = rr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, G2 = 0.8908130915292852, em = Jo(Qo / 10) / Jo(7 * Qo / 10), X2 = Jo(Ya / 10) * em, Z2 = -qy(Ya / 10) * em, J2 = {
  draw(e, t) {
    const r = rr(t * G2), n = X2 * r, i = Z2 * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let o = 1; o < 5; ++o) {
      const a = Ya * o / 5, l = qy(a), s = Jo(a);
      e.lineTo(s * r, -l * r), e.lineTo(l * n - s * i, s * n + l * i);
    }
    e.closePath();
  }
}, Bl = rr(3), Q2 = {
  draw(e, t) {
    const r = -rr(t / (Bl * 3));
    e.moveTo(0, r * 2), e.lineTo(-Bl * r, -r), e.lineTo(Bl * r, -r), e.closePath();
  }
}, Wt = -0.5, Ft = rr(3) / 2, jc = 1 / rr(12), ej = (jc / 2 + 1) * 3, tj = {
  draw(e, t) {
    const r = rr(t / ej), n = r / 2, i = r * jc, o = n, a = r * jc + r, l = -o, s = a;
    e.moveTo(n, i), e.lineTo(o, a), e.lineTo(l, s), e.lineTo(Wt * n - Ft * i, Ft * n + Wt * i), e.lineTo(Wt * o - Ft * a, Ft * o + Wt * a), e.lineTo(Wt * l - Ft * s, Ft * l + Wt * s), e.lineTo(Wt * n + Ft * i, Wt * i - Ft * n), e.lineTo(Wt * o + Ft * a, Wt * a - Ft * o), e.lineTo(Wt * l + Ft * s, Wt * s - Ft * l), e.closePath();
  }
};
function rj(e, t) {
  let r = null, n = mu(i);
  e = typeof e == "function" ? e : Ie(e || bu), t = typeof t == "function" ? t : Ie(t === void 0 ? 64 : +t);
  function i() {
    let o;
    if (r || (r = o = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), o) return r = null, o + "" || null;
  }
  return i.type = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(o), i) : e;
  }, i.size = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ie(+o), i) : t;
  }, i.context = function(o) {
    return arguments.length ? (r = o ?? null, i) : r;
  }, i;
}
function ea() {
}
function ta(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function tm(e) {
  this._context = e;
}
tm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ta(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        ta(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function nj(e) {
  return new tm(e);
}
function rm(e) {
  this._context = e;
}
rm.prototype = {
  areaStart: ea,
  areaEnd: ea,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        ta(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function ij(e) {
  return new rm(e);
}
function nm(e) {
  this._context = e;
}
nm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        ta(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function oj(e) {
  return new nm(e);
}
function im(e) {
  this._context = e;
}
im.prototype = {
  areaStart: ea,
  areaEnd: ea,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function aj(e) {
  return new im(e);
}
function Tf(e) {
  return e < 0 ? -1 : 1;
}
function If(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, o = (e._y1 - e._y0) / (n || i < 0 && -0), a = (r - e._y1) / (i || n < 0 && -0), l = (o * i + a * n) / (n + i);
  return (Tf(o) + Tf(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function Mf(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Wl(e, t, r) {
  var n = e._x0, i = e._y0, o = e._x1, a = e._y1, l = (o - n) / 3;
  e._context.bezierCurveTo(n + l, i + l * t, o - l, a - l * r, o, a);
}
function ra(e) {
  this._context = e;
}
ra.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Wl(this, this._t0, Mf(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Wl(this, Mf(this, r = If(this, e, t)), r);
          break;
        default:
          Wl(this, this._t0, r = If(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function om(e) {
  this._context = new am(e);
}
(om.prototype = Object.create(ra.prototype)).point = function(e, t) {
  ra.prototype.point.call(this, t, e);
};
function am(e) {
  this._context = e;
}
am.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, o) {
    this._context.bezierCurveTo(t, e, n, r, o, i);
  }
};
function lj(e) {
  return new ra(e);
}
function sj(e) {
  return new om(e);
}
function lm(e) {
  this._context = e;
}
lm.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = Df(e), i = Df(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(n[0][o], i[0][o], n[1][o], i[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function Df(e) {
  var t, r = e.length - 1, n, i = new Array(r), o = new Array(r), a = new Array(r);
  for (i[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / o[t - 1], o[t] -= n, a[t] -= n * a[t - 1];
  for (i[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) i[t] = (a[t] - i[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - i[t + 1];
  return [i, o];
}
function cj(e) {
  return new lm(e);
}
function Xa(e, t) {
  this._context = e, this._t = t;
}
Xa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function uj(e) {
  return new Xa(e, 0.5);
}
function dj(e) {
  return new Xa(e, 0);
}
function fj(e) {
  return new Xa(e, 1);
}
function hn(e, t) {
  if ((a = e.length) > 1)
    for (var r = 1, n, i, o = e[t[0]], a, l = o.length; r < a; ++r)
      for (i = o, o = e[t[r]], n = 0; n < l; ++n)
        o[n][1] += o[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Sc(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function pj(e, t) {
  return e[t];
}
function hj(e) {
  const t = [];
  return t.key = e, t;
}
function vj() {
  var e = Ie([]), t = Sc, r = hn, n = pj;
  function i(o) {
    var a = Array.from(e.apply(this, arguments), hj), l, s = a.length, c = -1, u;
    for (const d of o)
      for (l = 0, ++c; l < s; ++l)
        (a[l][c] = [0, +n(d, a[l].key, c, o)]).data = d;
    for (l = 0, u = xu(t(a)); l < s; ++l)
      a[u[l]].index = l;
    return r(a, u), a;
  }
  return i.keys = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ie(Array.from(o)), i) : e;
  }, i.value = function(o) {
    return arguments.length ? (n = typeof o == "function" ? o : Ie(+o), i) : n;
  }, i.order = function(o) {
    return arguments.length ? (t = o == null ? Sc : typeof o == "function" ? o : Ie(Array.from(o)), i) : t;
  }, i.offset = function(o) {
    return arguments.length ? (r = o ?? hn, i) : r;
  }, i;
}
function gj(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, o = e[0].length, a; i < o; ++i) {
      for (a = r = 0; r < n; ++r) a += e[r][i][1] || 0;
      if (a) for (r = 0; r < n; ++r) e[r][i][1] /= a;
    }
    hn(e, t);
  }
}
function yj(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, o = n.length; r < o; ++r) {
      for (var a = 0, l = 0; a < i; ++a) l += e[a][r][1] || 0;
      n[r][1] += n[r][0] = -l / 2;
    }
    hn(e, t);
  }
}
function mj(e, t) {
  if (!(!((a = e.length) > 0) || !((o = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, o, a; n < o; ++n) {
      for (var l = 0, s = 0, c = 0; l < a; ++l) {
        for (var u = e[t[l]], d = u[n][1] || 0, p = u[n - 1][1] || 0, h = (d - p) / 2, g = 0; g < l; ++g) {
          var v = e[t[g]], y = v[n][1] || 0, m = v[n - 1][1] || 0;
          h += y - m;
        }
        s += d, c += h * d;
      }
      i[n - 1][1] += i[n - 1][0] = r, s && (r -= c / s);
    }
    i[n - 1][1] += i[n - 1][0] = r, hn(e, t);
  }
}
var Fl = {}, Vl = {}, Nf;
function xj() {
  return Nf || (Nf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r === "__proto__";
    }
    e.isUnsafeProperty = t;
  })(Vl)), Vl;
}
var Kl = {}, Rf;
function sm() {
  return Rf || (Rf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      switch (typeof r) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return r.includes(".") || r.includes("[") || r.includes("]");
      }
    }
    e.isDeepKey = t;
  })(Kl)), Kl;
}
var Hl = {}, $f;
function wu() {
  return $f || ($f = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "string" || typeof r == "symbol" ? r : Object.is(r?.valueOf?.(), -0) ? "-0" : String(r);
    }
    e.toKey = t;
  })(Hl)), Hl;
}
var ql = {}, Ul = {}, zf;
function bj() {
  return zf || (zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (r == null)
        return "";
      if (typeof r == "string")
        return r;
      if (Array.isArray(r))
        return r.map(t).join(",");
      const n = String(r);
      return n === "0" && Object.is(Number(r), -0) ? "-0" : n;
    }
    e.toString = t;
  })(Ul)), Ul;
}
var Lf;
function ju() {
  return Lf || (Lf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ bj(), r = /* @__PURE__ */ wu();
    function n(i) {
      if (Array.isArray(i))
        return i.map(r.toKey);
      if (typeof i == "symbol")
        return [i];
      i = t.toString(i);
      const o = [], a = i.length;
      if (a === 0)
        return o;
      let l = 0, s = "", c = "", u = !1;
      for (i.charCodeAt(0) === 46 && (o.push(""), l++); l < a; ) {
        const d = i[l];
        c ? d === "\\" && l + 1 < a ? (l++, s += i[l]) : d === c ? c = "" : s += d : u ? d === '"' || d === "'" ? c = d : d === "]" ? (u = !1, o.push(s), s = "") : s += d : d === "[" ? (u = !0, s && (o.push(s), s = "")) : d === "." ? s && (o.push(s), s = "") : s += d, l++;
      }
      return s && o.push(s), o;
    }
    e.toPath = n;
  })(ql)), ql;
}
var Bf;
function Su() {
  return Bf || (Bf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xj(), r = /* @__PURE__ */ sm(), n = /* @__PURE__ */ wu(), i = /* @__PURE__ */ ju();
    function o(l, s, c) {
      if (l == null)
        return c;
      switch (typeof s) {
        case "string": {
          if (t.isUnsafeProperty(s))
            return c;
          const u = l[s];
          return u === void 0 ? r.isDeepKey(s) ? o(l, i.toPath(s), c) : c : u;
        }
        case "number":
        case "symbol": {
          typeof s == "number" && (s = n.toKey(s));
          const u = l[s];
          return u === void 0 ? c : u;
        }
        default: {
          if (Array.isArray(s))
            return a(l, s, c);
          if (Object.is(s?.valueOf(), -0) ? s = "-0" : s = String(s), t.isUnsafeProperty(s))
            return c;
          const u = l[s];
          return u === void 0 ? c : u;
        }
      }
    }
    function a(l, s, c) {
      if (s.length === 0)
        return c;
      let u = l;
      for (let d = 0; d < s.length; d++) {
        if (u == null || t.isUnsafeProperty(s[d]))
          return c;
        u = u[s[d]];
      }
      return u === void 0 ? c : u;
    }
    e.get = o;
  })(Fl)), Fl;
}
var Yl, Wf;
function wj() {
  return Wf || (Wf = 1, Yl = Su().get), Yl;
}
var jj = /* @__PURE__ */ wj();
const Hn = /* @__PURE__ */ Sn(jj);
var Sj = 4;
function Fr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Sj, r = 10 ** t, n = Math.round(e * r) / r;
  return Object.is(n, -0) ? 0 : n;
}
function Fe(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return e.reduce((i, o, a) => {
    var l = r[a - 1];
    return typeof l == "string" ? i + l + o : l !== void 0 ? i + Fr(l) + o : i + o;
  }, "");
}
var Ct = (e) => e === 0 ? 0 : e > 0 ? 1 : -1, Jt = (e) => typeof e == "number" && e != +e, vn = (e) => typeof e == "string" && e.indexOf("%") === e.length - 1, te = (e) => (typeof e == "number" || e instanceof Number) && !Jt(e), Ut = (e) => te(e) || typeof e == "string", Oj = 0, Mi = (e) => {
  var t = ++Oj;
  return "".concat(e || "").concat(t);
}, Qt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!te(t) && typeof t != "string")
    return n;
  var o;
  if (vn(t)) {
    if (r == null)
      return n;
    var a = t.indexOf("%");
    o = r * parseFloat(t.slice(0, a)) / 100;
  } else
    o = +t;
  return Jt(o) && (o = n), i && r != null && o > r && (o = r), o;
}, cm = (e) => {
  if (!Array.isArray(e))
    return !1;
  for (var t = e.length, r = {}, n = 0; n < t; n++)
    if (!r[String(e[n])])
      r[String(e[n])] = !0;
    else
      return !0;
  return !1;
};
function ze(e, t, r) {
  return te(e) && te(t) ? Fr(e + r * (t - e)) : t;
}
function um(e, t, r) {
  if (!(!e || !e.length))
    return e.find((n) => n && (typeof t == "function" ? t(n) : Hn(n, t)) === r);
}
var Le = (e) => e === null || typeof e > "u", Gi = (e) => Le(e) ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
function _t(e) {
  return e != null;
}
function On() {
}
var Pj = ["type", "size", "sizeType"];
function Oc() {
  return Oc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Oc.apply(null, arguments);
}
function Ff(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ff(Object(r), !0).forEach(function(n) {
      Cj(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ff(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Cj(e, t, r) {
  return (t = _j(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _j(e) {
  var t = Ej(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ej(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function kj(e, t) {
  if (e == null) return {};
  var r, n, i = Aj(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function Aj(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var dm = {
  symbolCircle: bu,
  symbolCross: H2,
  symbolDiamond: U2,
  symbolSquare: Y2,
  symbolStar: J2,
  symbolTriangle: Q2,
  symbolWye: tj
}, Tj = Math.PI / 180, Ij = (e) => {
  var t = "symbol".concat(Gi(e));
  return dm[t] || bu;
}, Mj = (e, t, r) => {
  if (t === "area")
    return e;
  switch (r) {
    case "cross":
      return 5 * e * e / 9;
    case "diamond":
      return 0.5 * e * e / Math.sqrt(3);
    case "square":
      return e * e;
    case "star": {
      var n = 18 * Tj;
      return 1.25 * e * e * (Math.tan(n) - Math.tan(n * 2) * Math.tan(n) ** 2);
    }
    case "triangle":
      return Math.sqrt(3) * e * e / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * e * e / 8;
    default:
      return Math.PI * e * e / 4;
  }
}, Dj = (e, t) => {
  dm["symbol".concat(Gi(e))] = t;
}, fm = (e) => {
  var {
    type: t = "circle",
    size: r = 64,
    sizeType: n = "area"
  } = e, i = kj(e, Pj), o = Vf(Vf({}, i), {}, {
    type: t,
    size: r,
    sizeType: n
  }), a = "circle";
  typeof t == "string" && (a = t);
  var l = () => {
    var p = Ij(a), h = rj().type(p).size(Mj(r, n, a)), g = h();
    if (g !== null)
      return g;
  }, {
    className: s,
    cx: c,
    cy: u
  } = o, d = vt(o);
  return te(c) && te(u) && te(r) ? /* @__PURE__ */ P.createElement("path", Oc({}, d, {
    className: Pe("recharts-symbols", s),
    transform: "translate(".concat(c, ", ").concat(u, ")"),
    d: l()
  })) : null;
};
fm.registerSymbol = Dj;
var pm = (e) => "radius" in e && "startAngle" in e && "endAngle" in e, Ou = (e, t) => {
  if (!e || typeof e == "function" || typeof e == "boolean")
    return null;
  var r = e;
  if (/* @__PURE__ */ Nt(e) && (r = e.props), typeof r != "object" && typeof r != "function")
    return null;
  var n = {};
  return Object.keys(r).forEach((i) => {
    yu(i) && typeof r[i] == "function" && (n[i] = ((o) => r[i](r, o)));
  }), n;
}, Nj = (e, t, r) => (n) => (e(t, r, n), null), Pu = (e, t, r) => {
  if (e === null || typeof e != "object" && typeof e != "function")
    return null;
  var n = null;
  return Object.keys(e).forEach((i) => {
    var o = e[i];
    yu(i) && typeof o == "function" && (n || (n = {}), n[i] = Nj(o, t, r));
  }), n;
};
function Kf(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rj(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kf(Object(r), !0).forEach(function(n) {
      $j(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kf(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $j(e, t, r) {
  return (t = zj(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zj(e) {
  var t = Lj(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Lj(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function jt(e, t) {
  var r = Rj({}, e), n = t, i = Object.keys(t), o = i.reduce((a, l) => (a[l] === void 0 && n[l] !== void 0 && (a[l] = n[l]), a), r);
  return o;
}
var Gl = {}, Xl = {}, Hf;
function Bj() {
  return Hf || (Hf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      const i = /* @__PURE__ */ new Map();
      for (let o = 0; o < r.length; o++) {
        const a = r[o], l = n(a, o, r);
        i.has(l) || i.set(l, a);
      }
      return Array.from(i.values());
    }
    e.uniqBy = t;
  })(Xl)), Xl;
}
var Zl = {}, qf;
function Wj() {
  return qf || (qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return function(...i) {
        return r.apply(this, i.slice(0, n));
      };
    }
    e.ary = t;
  })(Zl)), Zl;
}
var Jl = {}, Uf;
function hm() {
  return Uf || (Uf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r;
    }
    e.identity = t;
  })(Jl)), Jl;
}
var Ql = {}, es = {}, ts = {}, Yf;
function Fj() {
  return Yf || (Yf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Number.isSafeInteger(r) && r >= 0;
    }
    e.isLength = t;
  })(ts)), ts;
}
var Gf;
function vm() {
  return Gf || (Gf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Fj();
    function r(n) {
      return n != null && typeof n != "function" && t.isLength(n.length);
    }
    e.isArrayLike = r;
  })(es)), es;
}
var rs = {}, Xf;
function Vj() {
  return Xf || (Xf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "object" && r !== null;
    }
    e.isObjectLike = t;
  })(rs)), rs;
}
var Zf;
function Kj() {
  return Zf || (Zf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ vm(), r = /* @__PURE__ */ Vj();
    function n(i) {
      return r.isObjectLike(i) && t.isArrayLike(i);
    }
    e.isArrayLikeObject = n;
  })(Ql)), Ql;
}
var ns = {}, is = {}, Jf;
function Hj() {
  return Jf || (Jf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Su();
    function r(n) {
      return function(i) {
        return t.get(i, n);
      };
    }
    e.property = r;
  })(is)), is;
}
var os = {}, as = {}, ls = {}, ss = {}, Qf;
function gm() {
  return Qf || (Qf = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r !== null && (typeof r == "object" || typeof r == "function");
    }
    e.isObject = t;
  })(ss)), ss;
}
var cs = {}, ep;
function ym() {
  return ep || (ep = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null || typeof r != "object" && typeof r != "function";
    }
    e.isPrimitive = t;
  })(cs)), cs;
}
var us = {}, tp;
function mm() {
  return tp || (tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n) {
      return r === n || Number.isNaN(r) && Number.isNaN(n);
    }
    e.isEqualsSameValueZero = t;
  })(us)), us;
}
var rp;
function qj() {
  return rp || (rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ gm(), r = /* @__PURE__ */ ym(), n = /* @__PURE__ */ mm();
    function i(u, d, p) {
      return typeof p != "function" ? i(u, d, () => {
      }) : o(u, d, function h(g, v, y, m, b, w) {
        const x = p(g, v, y, m, b, w);
        return x !== void 0 ? !!x : o(g, v, h, w);
      }, /* @__PURE__ */ new Map());
    }
    function o(u, d, p, h) {
      if (d === u)
        return !0;
      switch (typeof d) {
        case "object":
          return a(u, d, p, h);
        case "function":
          return Object.keys(d).length > 0 ? o(u, { ...d }, p, h) : n.isEqualsSameValueZero(u, d);
        default:
          return t.isObject(u) ? typeof d == "string" ? d === "" : !0 : n.isEqualsSameValueZero(u, d);
      }
    }
    function a(u, d, p, h) {
      if (d == null)
        return !0;
      if (Array.isArray(d))
        return s(u, d, p, h);
      if (d instanceof Map)
        return l(u, d, p, h);
      if (d instanceof Set)
        return c(u, d, p, h);
      const g = Object.keys(d);
      if (u == null || r.isPrimitive(u))
        return g.length === 0;
      if (g.length === 0)
        return !0;
      if (h?.has(d))
        return h.get(d) === u;
      h?.set(d, u);
      try {
        for (let v = 0; v < g.length; v++) {
          const y = g[v];
          if (!r.isPrimitive(u) && !(y in u) || d[y] === void 0 && u[y] !== void 0 || d[y] === null && u[y] !== null || !p(u[y], d[y], y, u, d, h))
            return !1;
        }
        return !0;
      } finally {
        h?.delete(d);
      }
    }
    function l(u, d, p, h) {
      if (d.size === 0)
        return !0;
      if (!(u instanceof Map))
        return !1;
      for (const [g, v] of d.entries()) {
        const y = u.get(g);
        if (p(y, v, g, u, d, h) === !1)
          return !1;
      }
      return !0;
    }
    function s(u, d, p, h) {
      if (d.length === 0)
        return !0;
      if (!Array.isArray(u))
        return !1;
      const g = /* @__PURE__ */ new Set();
      for (let v = 0; v < d.length; v++) {
        const y = d[v];
        let m = !1;
        for (let b = 0; b < u.length; b++) {
          if (g.has(b))
            continue;
          const w = u[b];
          let x = !1;
          if (p(w, y, v, u, d, h) && (x = !0), x) {
            g.add(b), m = !0;
            break;
          }
        }
        if (!m)
          return !1;
      }
      return !0;
    }
    function c(u, d, p, h) {
      return d.size === 0 ? !0 : u instanceof Set ? s([...u], [...d], p, h) : !1;
    }
    e.isMatchWith = i, e.isSetMatch = c;
  })(ls)), ls;
}
var np;
function xm() {
  return np || (np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ qj();
    function r(n, i) {
      return t.isMatchWith(n, i, () => {
      });
    }
    e.isMatch = r;
  })(as)), as;
}
var ds = {}, fs = {}, ps = {}, ip;
function Uj() {
  return ip || (ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return Object.getOwnPropertySymbols(r).filter((n) => Object.prototype.propertyIsEnumerable.call(r, n));
    }
    e.getSymbols = t;
  })(ps)), ps;
}
var hs = {}, op;
function Cu() {
  return op || (op = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
    }
    e.getTag = t;
  })(hs)), hs;
}
var vs = {}, ap;
function bm() {
  return ap || (ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = "[object RegExp]", r = "[object String]", n = "[object Number]", i = "[object Boolean]", o = "[object Arguments]", a = "[object Symbol]", l = "[object Date]", s = "[object Map]", c = "[object Set]", u = "[object Array]", d = "[object Function]", p = "[object ArrayBuffer]", h = "[object Object]", g = "[object Error]", v = "[object DataView]", y = "[object Uint8Array]", m = "[object Uint8ClampedArray]", b = "[object Uint16Array]", w = "[object Uint32Array]", x = "[object BigUint64Array]", S = "[object Int8Array]", O = "[object Int16Array]", C = "[object Int32Array]", E = "[object BigInt64Array]", M = "[object Float32Array]", D = "[object Float64Array]";
    e.argumentsTag = o, e.arrayBufferTag = p, e.arrayTag = u, e.bigInt64ArrayTag = E, e.bigUint64ArrayTag = x, e.booleanTag = i, e.dataViewTag = v, e.dateTag = l, e.errorTag = g, e.float32ArrayTag = M, e.float64ArrayTag = D, e.functionTag = d, e.int16ArrayTag = O, e.int32ArrayTag = C, e.int8ArrayTag = S, e.mapTag = s, e.numberTag = n, e.objectTag = h, e.regexpTag = t, e.setTag = c, e.stringTag = r, e.symbolTag = a, e.uint16ArrayTag = b, e.uint32ArrayTag = w, e.uint8ArrayTag = y, e.uint8ClampedArrayTag = m;
  })(vs)), vs;
}
var gs = {}, lp;
function Yj() {
  return lp || (lp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return ArrayBuffer.isView(r) && !(r instanceof DataView);
    }
    e.isTypedArray = t;
  })(gs)), gs;
}
var sp;
function wm() {
  return sp || (sp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Uj(), r = /* @__PURE__ */ Cu(), n = /* @__PURE__ */ bm(), i = /* @__PURE__ */ ym(), o = /* @__PURE__ */ Yj();
    function a(u, d) {
      return l(u, void 0, u, /* @__PURE__ */ new Map(), d);
    }
    function l(u, d, p, h = /* @__PURE__ */ new Map(), g = void 0) {
      const v = g?.(u, d, p, h);
      if (v !== void 0)
        return v;
      if (i.isPrimitive(u))
        return u;
      if (h.has(u))
        return h.get(u);
      if (Array.isArray(u)) {
        const y = new Array(u.length);
        h.set(u, y);
        for (let m = 0; m < u.length; m++)
          y[m] = l(u[m], m, p, h, g);
        return Object.hasOwn(u, "index") && (y.index = u.index), Object.hasOwn(u, "input") && (y.input = u.input), y;
      }
      if (u instanceof Date)
        return new Date(u.getTime());
      if (u instanceof RegExp) {
        const y = new RegExp(u.source, u.flags);
        return y.lastIndex = u.lastIndex, y;
      }
      if (u instanceof Map) {
        const y = /* @__PURE__ */ new Map();
        h.set(u, y);
        for (const [m, b] of u)
          y.set(m, l(b, m, p, h, g));
        return y;
      }
      if (u instanceof Set) {
        const y = /* @__PURE__ */ new Set();
        h.set(u, y);
        for (const m of u)
          y.add(l(m, void 0, p, h, g));
        return y;
      }
      if (typeof Buffer < "u" && Buffer.isBuffer(u))
        return u.subarray();
      if (o.isTypedArray(u)) {
        const y = new (Object.getPrototypeOf(u)).constructor(u.length);
        h.set(u, y);
        for (let m = 0; m < u.length; m++)
          y[m] = l(u[m], m, p, h, g);
        return y;
      }
      if (u instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && u instanceof SharedArrayBuffer)
        return u.slice(0);
      if (u instanceof DataView) {
        const y = new DataView(u.buffer.slice(0), u.byteOffset, u.byteLength);
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof File < "u" && u instanceof File) {
        const y = new File([u], u.name, {
          type: u.type
        });
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof Blob < "u" && u instanceof Blob) {
        const y = new Blob([u], { type: u.type });
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof Error) {
        const y = structuredClone(u);
        return h.set(u, y), y.message = u.message, y.name = u.name, y.stack = u.stack, y.cause = u.cause, y.constructor = u.constructor, s(y, u, p, h, g), y;
      }
      if (u instanceof Boolean) {
        const y = new Boolean(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof Number) {
        const y = new Number(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (u instanceof String) {
        const y = new String(u.valueOf());
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      if (typeof u == "object" && c(u)) {
        const y = Object.create(Object.getPrototypeOf(u));
        return h.set(u, y), s(y, u, p, h, g), y;
      }
      return u;
    }
    function s(u, d, p = u, h, g) {
      const v = [...Object.keys(d), ...t.getSymbols(d)];
      for (let y = 0; y < v.length; y++) {
        const m = v[y], b = Object.getOwnPropertyDescriptor(u, m);
        (b == null || b.writable) && (u[m] = l(d[m], m, p, h, g));
      }
    }
    function c(u) {
      switch (r.getTag(u)) {
        case n.argumentsTag:
        case n.arrayTag:
        case n.arrayBufferTag:
        case n.dataViewTag:
        case n.booleanTag:
        case n.dateTag:
        case n.float32ArrayTag:
        case n.float64ArrayTag:
        case n.int8ArrayTag:
        case n.int16ArrayTag:
        case n.int32ArrayTag:
        case n.mapTag:
        case n.numberTag:
        case n.objectTag:
        case n.regexpTag:
        case n.setTag:
        case n.stringTag:
        case n.symbolTag:
        case n.uint8ArrayTag:
        case n.uint8ClampedArrayTag:
        case n.uint16ArrayTag:
        case n.uint32ArrayTag:
          return !0;
        default:
          return !1;
      }
    }
    e.cloneDeepWith = a, e.cloneDeepWithImpl = l, e.copyProperties = s;
  })(fs)), fs;
}
var cp;
function Gj() {
  return cp || (cp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ wm();
    function r(n) {
      return t.cloneDeepWithImpl(n, void 0, n, /* @__PURE__ */ new Map(), void 0);
    }
    e.cloneDeep = r;
  })(ds)), ds;
}
var up;
function Xj() {
  return up || (up = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xm(), r = /* @__PURE__ */ Gj();
    function n(i) {
      return i = r.cloneDeep(i), (o) => t.isMatch(o, i);
    }
    e.matches = n;
  })(os)), os;
}
var ys = {}, ms = {}, xs = {}, dp;
function Zj() {
  return dp || (dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ wm(), r = /* @__PURE__ */ Cu(), n = /* @__PURE__ */ bm();
    function i(o, a) {
      return t.cloneDeepWith(o, (l, s, c, u) => {
        const d = a?.(l, s, c, u);
        if (d !== void 0)
          return d;
        if (typeof o == "object") {
          if (r.getTag(o) === n.objectTag && typeof o.constructor != "function") {
            const p = {};
            return u.set(o, p), t.copyProperties(p, o, c, u), p;
          }
          switch (Object.prototype.toString.call(o)) {
            case n.numberTag:
            case n.stringTag:
            case n.booleanTag: {
              const p = new o.constructor(o?.valueOf());
              return t.copyProperties(p, o), p;
            }
            case n.argumentsTag: {
              const p = {};
              return t.copyProperties(p, o), p.length = o.length, p[Symbol.iterator] = o[Symbol.iterator], p;
            }
            default:
              return;
          }
        }
      });
    }
    e.cloneDeepWith = i;
  })(xs)), xs;
}
var fp;
function Jj() {
  return fp || (fp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Zj();
    function r(n) {
      return t.cloneDeepWith(n);
    }
    e.cloneDeep = r;
  })(ms)), ms;
}
var bs = {}, ws = {}, pp;
function jm() {
  return pp || (pp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /^(?:0|[1-9]\d*)$/;
    function r(n, i = Number.MAX_SAFE_INTEGER) {
      switch (typeof n) {
        case "number":
          return Number.isInteger(n) && n >= 0 && n < i;
        case "symbol":
          return !1;
        case "string":
          return t.test(n);
      }
    }
    e.isIndex = r;
  })(ws)), ws;
}
var js = {}, hp;
function Qj() {
  return hp || (hp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cu();
    function r(n) {
      return n !== null && typeof n == "object" && t.getTag(n) === "[object Arguments]";
    }
    e.isArguments = r;
  })(js)), js;
}
var vp;
function eS() {
  return vp || (vp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ sm(), r = /* @__PURE__ */ jm(), n = /* @__PURE__ */ Qj(), i = /* @__PURE__ */ ju();
    function o(a, l) {
      let s;
      if (Array.isArray(l) ? s = l : typeof l == "string" && t.isDeepKey(l) && a?.[l] == null ? s = i.toPath(l) : s = [l], s.length === 0)
        return !1;
      let c = a;
      for (let u = 0; u < s.length; u++) {
        const d = s[u];
        if ((c == null || !Object.hasOwn(c, d)) && !((Array.isArray(c) || n.isArguments(c)) && r.isIndex(d) && d < c.length))
          return !1;
        c = c[d];
      }
      return !0;
    }
    e.has = o;
  })(bs)), bs;
}
var gp;
function tS() {
  return gp || (gp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ xm(), r = /* @__PURE__ */ wu(), n = /* @__PURE__ */ Jj(), i = /* @__PURE__ */ Su(), o = /* @__PURE__ */ eS();
    function a(l, s) {
      switch (typeof l) {
        case "object": {
          Object.is(l?.valueOf(), -0) && (l = "-0");
          break;
        }
        case "number": {
          l = r.toKey(l);
          break;
        }
      }
      return s = n.cloneDeep(s), function(c) {
        const u = i.get(c, l);
        return u === void 0 ? o.has(c, l) : s === void 0 ? u === void 0 : t.isMatch(u, s);
      };
    }
    e.matchesProperty = a;
  })(ys)), ys;
}
var yp;
function rS() {
  return yp || (yp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ hm(), r = /* @__PURE__ */ Hj(), n = /* @__PURE__ */ Xj(), i = /* @__PURE__ */ tS();
    function o(a) {
      if (a == null)
        return t.identity;
      switch (typeof a) {
        case "function":
          return a;
        case "object":
          return Array.isArray(a) && a.length === 2 ? i.matchesProperty(a[0], a[1]) : n.matches(a);
        case "string":
        case "symbol":
        case "number":
          return r.property(a);
      }
    }
    e.iteratee = o;
  })(ns)), ns;
}
var mp;
function nS() {
  return mp || (mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Bj(), r = /* @__PURE__ */ Wj(), n = /* @__PURE__ */ hm(), i = /* @__PURE__ */ Kj(), o = /* @__PURE__ */ rS();
    function a(l, s = n.identity) {
      return i.isArrayLikeObject(l) ? t.uniqBy(Array.from(l), r.ary(o.iteratee(s), 1)) : [];
    }
    e.uniqBy = a;
  })(Gl)), Gl;
}
var Ss, xp;
function iS() {
  return xp || (xp = 1, Ss = nS().uniqBy), Ss;
}
var oS = /* @__PURE__ */ iS();
const bp = /* @__PURE__ */ Sn(oS);
function aS(e, t, r) {
  return t === !0 ? bp(e, r) : typeof t == "function" ? bp(e, t) : e;
}
var Oo = { exports: {} }, Os = {}, Po = { exports: {} }, Ps = {};
var wp;
function lS() {
  if (wp) return Ps;
  wp = 1;
  var e = Ke;
  function t(d, p) {
    return d === p && (d !== 0 || 1 / d === 1 / p) || d !== d && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, i = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function l(d, p) {
    var h = p(), g = n({ inst: { value: h, getSnapshot: p } }), v = g[0].inst, y = g[1];
    return o(
      function() {
        v.value = h, v.getSnapshot = p, s(v) && y({ inst: v });
      },
      [d, h, p]
    ), i(
      function() {
        return s(v) && y({ inst: v }), d(function() {
          s(v) && y({ inst: v });
        });
      },
      [d]
    ), a(h), h;
  }
  function s(d) {
    var p = d.getSnapshot;
    d = d.value;
    try {
      var h = p();
      return !r(d, h);
    } catch {
      return !0;
    }
  }
  function c(d, p) {
    return p();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : l;
  return Ps.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Ps;
}
var Cs = {};
var jp;
function sS() {
  return jp || (jp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(h, g) {
      return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
    }
    function t(h, g) {
      u || i.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var v = g();
      if (!d) {
        var y = g();
        o(v, y) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      y = a({
        inst: { value: v, getSnapshot: g }
      });
      var m = y[0].inst, b = y[1];
      return s(
        function() {
          m.value = v, m.getSnapshot = g, r(m) && b({ inst: m });
        },
        [h, v, g]
      ), l(
        function() {
          return r(m) && b({ inst: m }), h(function() {
            r(m) && b({ inst: m });
          });
        },
        [h]
      ), c(v), v;
    }
    function r(h) {
      var g = h.getSnapshot;
      h = h.value;
      try {
        var v = g();
        return !o(h, v);
      } catch {
        return !0;
      }
    }
    function n(h, g) {
      return g();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Ke, o = typeof Object.is == "function" ? Object.is : e, a = i.useState, l = i.useEffect, s = i.useLayoutEffect, c = i.useDebugValue, u = !1, d = !1, p = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? n : t;
    Cs.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : p, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Cs;
}
var Sp;
function Sm() {
  return Sp || (Sp = 1, process.env.NODE_ENV === "production" ? Po.exports = lS() : Po.exports = sS()), Po.exports;
}
var Op;
function cS() {
  if (Op) return Os;
  Op = 1;
  var e = Ke, t = Sm();
  function r(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, i = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, l = e.useMemo, s = e.useDebugValue;
  return Os.useSyncExternalStoreWithSelector = function(c, u, d, p, h) {
    var g = o(null);
    if (g.current === null) {
      var v = { hasValue: !1, value: null };
      g.current = v;
    } else v = g.current;
    g = l(
      function() {
        function m(O) {
          if (!b) {
            if (b = !0, w = O, O = p(O), h !== void 0 && v.hasValue) {
              var C = v.value;
              if (h(C, O))
                return x = C;
            }
            return x = O;
          }
          if (C = x, n(w, O)) return C;
          var E = p(O);
          return h !== void 0 && h(C, E) ? (w = O, C) : (w = O, x = E);
        }
        var b = !1, w, x, S = d === void 0 ? null : d;
        return [
          function() {
            return m(u());
          },
          S === null ? void 0 : function() {
            return m(S());
          }
        ];
      },
      [u, d, p, h]
    );
    var y = i(c, g[0], g[1]);
    return a(
      function() {
        v.hasValue = !0, v.value = y;
      },
      [y]
    ), s(y), y;
  }, Os;
}
var _s = {};
var Pp;
function uS() {
  return Pp || (Pp = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ke, r = Sm(), n = typeof Object.is == "function" ? Object.is : e, i = r.useSyncExternalStore, o = t.useRef, a = t.useEffect, l = t.useMemo, s = t.useDebugValue;
    _s.useSyncExternalStoreWithSelector = function(c, u, d, p, h) {
      var g = o(null);
      if (g.current === null) {
        var v = { hasValue: !1, value: null };
        g.current = v;
      } else v = g.current;
      g = l(
        function() {
          function m(O) {
            if (!b) {
              if (b = !0, w = O, O = p(O), h !== void 0 && v.hasValue) {
                var C = v.value;
                if (h(C, O))
                  return x = C;
              }
              return x = O;
            }
            if (C = x, n(w, O))
              return C;
            var E = p(O);
            return h !== void 0 && h(C, E) ? (w = O, C) : (w = O, x = E);
          }
          var b = !1, w, x, S = d === void 0 ? null : d;
          return [
            function() {
              return m(u());
            },
            S === null ? void 0 : function() {
              return m(S());
            }
          ];
        },
        [u, d, p, h]
      );
      var y = i(c, g[0], g[1]);
      return a(
        function() {
          v.hasValue = !0, v.value = y;
        },
        [y]
      ), s(y), y;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), _s;
}
var Cp;
function dS() {
  return Cp || (Cp = 1, process.env.NODE_ENV === "production" ? Oo.exports = cS() : Oo.exports = uS()), Oo.exports;
}
var fS = dS(), _u = /* @__PURE__ */ At(null), pS = (e) => e, $e = () => {
  var e = zt(_u);
  return e ? e.store.dispatch : pS;
}, qo = () => {
}, hS = () => qo, vS = (e, t) => e === t;
function oe(e) {
  var t = zt(_u), r = tr(() => t ? (n) => {
    if (n != null)
      return e(n);
  } : qo, [t, e]);
  return fS.useSyncExternalStoreWithSelector(t ? t.subscription.addNestedSub : hS, t ? t.store.getState : qo, t ? t.store.getState : qo, r, vS);
}
var gS = (e, t, r) => {
  if (t.length === 1 && t[0] === r) {
    let n = !1;
    try {
      const i = {};
      e(i) === i && (n = !0);
    } catch {
    }
    if (n) {
      let i;
      try {
        throw new Error();
      } catch (o) {
        ({ stack: i } = o);
      }
      console.warn(
        `The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,
        { stack: i }
      );
    }
  }
}, yS = (e, t, r) => {
  const { memoize: n, memoizeOptions: i } = t, { inputSelectorResults: o, inputSelectorResultsCopy: a } = e, l = n(() => ({}), ...i);
  if (!(l.apply(null, o) === l.apply(null, a))) {
    let c;
    try {
      throw new Error();
    } catch (u) {
      ({ stack: c } = u);
    }
    console.warn(
      `An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,
      {
        arguments: r,
        firstInputs: o,
        secondInputs: a,
        stack: c
      }
    );
  }
}, mS = {
  inputStabilityCheck: "once",
  identityFunctionCheck: "once"
};
function xS(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function bS(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function wS(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (n) => typeof n == "function" ? `function ${n.name || "unnamed"}()` : typeof n
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var _p = (e) => Array.isArray(e) ? e : [e];
function jS(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return wS(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function Ep(e, t) {
  const r = [], { length: n } = e;
  for (let i = 0; i < n; i++)
    r.push(e[i].apply(null, t));
  return r;
}
var SS = (e, t) => {
  const { identityFunctionCheck: r, inputStabilityCheck: n } = {
    ...mS,
    ...t
  };
  return {
    identityFunctionCheck: {
      shouldRun: r === "always" || r === "once" && e,
      run: gS
    },
    inputStabilityCheck: {
      shouldRun: n === "always" || n === "once" && e,
      run: yS
    }
  };
}, OS = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, PS = typeof WeakRef < "u" ? WeakRef : OS, CS = 0, kp = 1;
function Co() {
  return {
    s: CS,
    v: void 0,
    o: null,
    p: null
  };
}
function Om(e, t = {}) {
  let r = Co();
  const { resultEqualityCheck: n } = t;
  let i, o = 0;
  function a() {
    let l = r;
    const { length: s } = arguments;
    for (let d = 0, p = s; d < p; d++) {
      const h = arguments[d];
      if (typeof h == "function" || typeof h == "object" && h !== null) {
        let g = l.o;
        g === null && (l.o = g = /* @__PURE__ */ new WeakMap());
        const v = g.get(h);
        v === void 0 ? (l = Co(), g.set(h, l)) : l = v;
      } else {
        let g = l.p;
        g === null && (l.p = g = /* @__PURE__ */ new Map());
        const v = g.get(h);
        v === void 0 ? (l = Co(), g.set(h, l)) : l = v;
      }
    }
    const c = l;
    let u;
    if (l.s === kp)
      u = l.v;
    else if (u = e.apply(null, arguments), o++, n) {
      const d = i?.deref?.() ?? i;
      d != null && n(d, u) && (u = d, o !== 0 && o--), i = typeof u == "object" && u !== null || typeof u == "function" ? new PS(u) : u;
    }
    return c.s = kp, c.v = u, u;
  }
  return a.clearCache = () => {
    r = Co(), a.resetResultsCount();
  }, a.resultsCount = () => o, a.resetResultsCount = () => {
    o = 0;
  }, a;
}
function _S(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, n = (...i) => {
    let o = 0, a = 0, l, s = {}, c = i.pop();
    typeof c == "object" && (s = c, c = i.pop()), xS(
      c,
      `createSelector expects an output function after the inputs, but received: [${typeof c}]`
    );
    const u = {
      ...r,
      ...s
    }, {
      memoize: d,
      memoizeOptions: p = [],
      argsMemoize: h = Om,
      argsMemoizeOptions: g = [],
      devModeChecks: v = {}
    } = u, y = _p(p), m = _p(g), b = jS(i), w = d(function() {
      return o++, c.apply(
        null,
        arguments
      );
    }, ...y);
    let x = !0;
    const S = h(function() {
      a++;
      const C = Ep(
        b,
        arguments
      );
      if (l = w.apply(null, C), process.env.NODE_ENV !== "production") {
        const { identityFunctionCheck: E, inputStabilityCheck: M } = SS(x, v);
        if (E.shouldRun && E.run(
          c,
          C,
          l
        ), M.shouldRun) {
          const D = Ep(
            b,
            arguments
          );
          M.run(
            { inputSelectorResults: C, inputSelectorResultsCopy: D },
            { memoize: d, memoizeOptions: y },
            arguments
          );
        }
        x && (x = !1);
      }
      return l;
    }, ...m);
    return Object.assign(S, {
      resultFunc: c,
      memoizedResultFunc: w,
      dependencies: b,
      dependencyRecomputations: () => a,
      resetDependencyRecomputations: () => {
        a = 0;
      },
      lastResult: () => l,
      recomputations: () => o,
      resetRecomputations: () => {
        o = 0;
      },
      memoize: d,
      argsMemoize: h
    });
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var I = /* @__PURE__ */ _S(Om), ES = Object.assign(
  (e, t = I) => {
    bS(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), n = r.map(
      (o) => e[o]
    );
    return t(
      n,
      (...o) => o.reduce((a, l, s) => (a[r[s]] = l, a), {})
    );
  },
  { withTypes: () => ES }
), Es = {}, ks = {}, As = {}, Ap;
function kS() {
  return Ap || (Ap = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(n) {
      return typeof n == "symbol" ? 1 : n === null ? 2 : n === void 0 ? 3 : n !== n ? 4 : 0;
    }
    const r = (n, i, o) => {
      if (n !== i) {
        const a = t(n), l = t(i);
        if (a === l && a === 0) {
          if (n < i)
            return o === "desc" ? 1 : -1;
          if (n > i)
            return o === "desc" ? -1 : 1;
        }
        return o === "desc" ? l - a : a - l;
      }
      return 0;
    };
    e.compareValues = r;
  })(As)), As;
}
var Ts = {}, Is = {}, Tp;
function Pm() {
  return Tp || (Tp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      return typeof r == "symbol" || r instanceof Symbol;
    }
    e.isSymbol = t;
  })(Is)), Is;
}
var Ip;
function AS() {
  return Ip || (Ip = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Pm(), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;
    function i(o, a) {
      return Array.isArray(o) ? !1 : typeof o == "number" || typeof o == "boolean" || o == null || t.isSymbol(o) ? !0 : typeof o == "string" && (n.test(o) || !r.test(o)) || a != null && Object.hasOwn(a, o);
    }
    e.isKey = i;
  })(Ts)), Ts;
}
var Mp;
function TS() {
  return Mp || (Mp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ kS(), r = /* @__PURE__ */ AS(), n = /* @__PURE__ */ ju();
    function i(o, a, l, s) {
      if (o == null)
        return [];
      l = s ? void 0 : l, Array.isArray(o) || (o = Object.values(o)), Array.isArray(a) || (a = a == null ? [null] : [a]), a.length === 0 && (a = [null]), Array.isArray(l) || (l = l == null ? [] : [l]), l = l.map((h) => String(h));
      const c = (h, g) => {
        let v = h;
        for (let y = 0; y < g.length && v != null; ++y)
          v = v[g[y]];
        return v;
      }, u = (h, g) => g == null || h == null ? g : typeof h == "object" && "key" in h ? Object.hasOwn(g, h.key) ? g[h.key] : c(g, h.path) : typeof h == "function" ? h(g) : Array.isArray(h) ? c(g, h) : typeof g == "object" ? g[h] : g, d = a.map((h) => (Array.isArray(h) && h.length === 1 && (h = h[0]), h == null || typeof h == "function" || Array.isArray(h) || r.isKey(h) ? h : { key: h, path: n.toPath(h) }));
      return o.map((h) => ({
        original: h,
        criteria: d.map((g) => u(g, h))
      })).slice().sort((h, g) => {
        for (let v = 0; v < d.length; v++) {
          const y = t.compareValues(h.criteria[v], g.criteria[v], l[v]);
          if (y !== 0)
            return y;
        }
        return 0;
      }).map((h) => h.original);
    }
    e.orderBy = i;
  })(ks)), ks;
}
var Ms = {}, Dp;
function IS() {
  return Dp || (Dp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n = 1) {
      const i = [], o = Math.floor(n), a = (l, s) => {
        for (let c = 0; c < l.length; c++) {
          const u = l[c];
          Array.isArray(u) && s < o ? a(u, s + 1) : i.push(u);
        }
      };
      return a(r, 0), i;
    }
    e.flatten = t;
  })(Ms)), Ms;
}
var Ds = {}, Np;
function Cm() {
  return Np || (Np = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ jm(), r = /* @__PURE__ */ vm(), n = /* @__PURE__ */ gm(), i = /* @__PURE__ */ mm();
    function o(a, l, s) {
      return n.isObject(s) && (typeof l == "number" && r.isArrayLike(s) && t.isIndex(l) && l < s.length || typeof l == "string" && l in s) ? i.isEqualsSameValueZero(s[l], a) : !1;
    }
    e.isIterateeCall = o;
  })(Ds)), Ds;
}
var Rp;
function MS() {
  return Rp || (Rp = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ TS(), r = /* @__PURE__ */ IS(), n = /* @__PURE__ */ Cm();
    function i(o, ...a) {
      const l = a.length;
      return l > 1 && n.isIterateeCall(o, a[0], a[1]) ? a = [] : l > 2 && n.isIterateeCall(a[0], a[1], a[2]) && (a = [a[0]]), t.orderBy(o, r.flatten(a), ["asc"]);
    }
    e.sortBy = i;
  })(Es)), Es;
}
var Ns, $p;
function DS() {
  return $p || ($p = 1, Ns = MS().sortBy), Ns;
}
var NS = /* @__PURE__ */ DS();
const Za = /* @__PURE__ */ Sn(NS);
var _m = (e) => e.legend.settings, RS = (e) => e.legend.size, $S = (e) => e.legend.payload;
I([$S, _m], (e, t) => {
  var {
    itemSorter: r
  } = t, n = e.flat(1);
  return r ? Za(n, r) : n;
});
var _o = 1;
function zS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], [t, r] = W({
    height: 0,
    left: 0,
    top: 0,
    width: 0
  }), n = Ee(
    (i) => {
      if (i != null) {
        var o = i.getBoundingClientRect(), a = {
          height: o.height,
          left: o.left,
          top: o.top,
          width: o.width
        };
        (Math.abs(a.height - t.height) > _o || Math.abs(a.left - t.left) > _o || Math.abs(a.top - t.top) > _o || Math.abs(a.width - t.width) > _o) && r({
          height: a.height,
          left: a.left,
          top: a.top,
          width: a.width
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t.width, t.height, t.top, t.left, ...e]
  );
  return [t, n];
}
function at(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var LS = typeof Symbol == "function" && Symbol.observable || "@@observable", zp = LS, Rs = () => Math.random().toString(36).substring(7).split("").join("."), BS = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Rs()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Rs()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Rs()}`
}, cn = BS;
function Xi(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function WS(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (KS(e))
    return "date";
  if (VS(e))
    return "error";
  const r = FS(e);
  switch (r) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return r;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function FS(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function VS(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function KS(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function zr(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = WS(e)), t;
}
function Em(e, t, r) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(2) : `Expected the root reducer to be a function. Instead, received: '${zr(e)}'`);
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? at(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(1) : `Expected the enhancer to be a function. Instead, received: '${zr(r)}'`);
    return r(Em)(e, t);
  }
  let n = e, i = t, o = /* @__PURE__ */ new Map(), a = o, l = 0, s = !1;
  function c() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((y, m) => {
      a.set(m, y);
    }));
  }
  function u() {
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(4) : `Expected the listener to be a function. Instead, received: '${zr(y)}'`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let m = !0;
    c();
    const b = l++;
    return a.set(b, y), function() {
      if (m) {
        if (s)
          throw new Error(process.env.NODE_ENV === "production" ? at(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        m = !1, c(), a.delete(b), o = null;
      }
    };
  }
  function p(y) {
    if (!Xi(y))
      throw new Error(process.env.NODE_ENV === "production" ? at(7) : `Actions must be plain objects. Instead, the actual type was: '${zr(y)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof y.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof y.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? at(17) : `Action "type" property must be a string. Instead, the actual type was: '${zr(y.type)}'. Value was: '${y.type}' (stringified)`);
    if (s)
      throw new Error(process.env.NODE_ENV === "production" ? at(9) : "Reducers may not dispatch actions.");
    try {
      s = !0, i = n(i, y);
    } finally {
      s = !1;
    }
    return (o = a).forEach((b) => {
      b();
    }), y;
  }
  function h(y) {
    if (typeof y != "function")
      throw new Error(process.env.NODE_ENV === "production" ? at(10) : `Expected the nextReducer to be a function. Instead, received: '${zr(y)}`);
    n = y, p({
      type: cn.REPLACE
    });
  }
  function g() {
    const y = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(m) {
        if (typeof m != "object" || m === null)
          throw new Error(process.env.NODE_ENV === "production" ? at(11) : `Expected the observer to be an object. Instead, received: '${zr(m)}'`);
        function b() {
          const x = m;
          x.next && x.next(u());
        }
        return b(), {
          unsubscribe: y(b)
        };
      },
      [zp]() {
        return this;
      }
    };
  }
  return p({
    type: cn.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [zp]: g
  };
}
function Lp(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function HS(e, t, r, n) {
  const i = Object.keys(t), o = r && r.type === cn.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Xi(e))
    return `The ${o} has unexpected type of "${zr(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((l) => !t.hasOwnProperty(l) && !n[l]);
  if (a.forEach((l) => {
    n[l] = !0;
  }), !(r && r.type === cn.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function qS(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: cn.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof r(void 0, {
      type: cn.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? at(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${cn.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function km(e) {
  const t = Object.keys(e), r = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    process.env.NODE_ENV !== "production" && typeof e[l] > "u" && Lp(`No reducer provided for key "${l}"`), typeof e[l] == "function" && (r[l] = e[l]);
  }
  const n = Object.keys(r);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    qS(r);
  } catch (a) {
    o = a;
  }
  return function(l = {}, s) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const d = HS(l, r, s, i);
      d && Lp(d);
    }
    let c = !1;
    const u = {};
    for (let d = 0; d < n.length; d++) {
      const p = n[d], h = r[p], g = l[p], v = h(g, s);
      if (typeof v > "u") {
        const y = s && s.type;
        throw new Error(process.env.NODE_ENV === "production" ? at(14) : `When called with an action of type ${y ? `"${String(y)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = v, c = c || v !== g;
    }
    return c = c || n.length !== Object.keys(l).length, c ? u : l;
  };
}
function na(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...n) => t(r(...n)));
}
function US(...e) {
  return (t) => (r, n) => {
    const i = t(r, n);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? at(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (s, ...c) => o(s, ...c)
    }, l = e.map((s) => s(a));
    return o = na(...l)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function Eu(e) {
  return Xi(e) && "type" in e && typeof e.type == "string";
}
var Am = Symbol.for("immer-nothing"), Bp = Symbol.for("immer-draftable"), wt = Symbol.for("immer-state"), YS = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function It(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = YS[e], n = nn(r) ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Dt = Object, qn = Dt.getPrototypeOf, ia = "constructor", Ja = "prototype", Pc = "configurable", oa = "enumerable", Uo = "writable", Di = "value", _r = (e) => !!e && !!e[wt];
function er(e) {
  return e ? Tm(e) || el(e) || !!e[Bp] || !!e[ia]?.[Bp] || tl(e) || rl(e) : !1;
}
var GS = Dt[Ja][ia].toString(), Wp = /* @__PURE__ */ new WeakMap();
function Tm(e) {
  if (!e || !ku(e))
    return !1;
  const t = qn(e);
  if (t === null || t === Dt[Ja])
    return !0;
  const r = Dt.hasOwnProperty.call(t, ia) && t[ia];
  if (r === Object)
    return !0;
  if (!nn(r))
    return !1;
  let n = Wp.get(r);
  return n === void 0 && (n = Function.toString.call(r), Wp.set(r, n)), n === GS;
}
function Qa(e, t, r = !0) {
  Zi(e) === 0 ? (r ? Reflect.ownKeys(e) : Dt.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function Zi(e) {
  const t = e[wt];
  return t ? t.type_ : el(e) ? 1 : tl(e) ? 2 : rl(e) ? 3 : 0;
}
var Fp = (e, t, r = Zi(e)) => r === 2 ? e.has(t) : Dt[Ja].hasOwnProperty.call(e, t), Cc = (e, t, r = Zi(e)) => (
  // @ts-ignore
  r === 2 ? e.get(t) : e[t]
), aa = (e, t, r, n = Zi(e)) => {
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
};
function XS(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var el = Array.isArray, tl = (e) => e instanceof Map, rl = (e) => e instanceof Set, ku = (e) => typeof e == "object", nn = (e) => typeof e == "function", $s = (e) => typeof e == "boolean";
function ZS(e) {
  const t = +e;
  return Number.isInteger(t) && String(t) === e;
}
var br = (e) => e.copy_ || e.base_, Au = (e) => e.modified_ ? e.copy_ : e.base_;
function _c(e, t) {
  if (tl(e))
    return new Map(e);
  if (rl(e))
    return new Set(e);
  if (el(e))
    return Array[Ja].slice.call(e);
  const r = Tm(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Dt.getOwnPropertyDescriptors(e);
    delete n[wt];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l[Uo] === !1 && (l[Uo] = !0, l[Pc] = !0), (l.get || l.set) && (n[a] = {
        [Pc]: !0,
        [Uo]: !0,
        // could live with !!desc.set as well here...
        [oa]: l[oa],
        [Di]: e[a]
      });
    }
    return Dt.create(qn(e), n);
  } else {
    const n = qn(e);
    if (n !== null && r)
      return { ...e };
    const i = Dt.create(n);
    return Dt.assign(i, e);
  }
}
function Tu(e, t = !1) {
  return nl(e) || _r(e) || !er(e) || (Zi(e) > 1 && Dt.defineProperties(e, {
    set: Eo,
    add: Eo,
    clear: Eo,
    delete: Eo
  }), Dt.freeze(e), t && Qa(
    e,
    (r, n) => {
      Tu(n, !0);
    },
    !1
  )), e;
}
function JS() {
  It(2);
}
var Eo = {
  [Di]: JS
};
function nl(e) {
  return e === null || !ku(e) ? !0 : Dt.isFrozen(e);
}
var la = "MapSet", Ec = "Patches", Vp = "ArrayMethods", Im = {};
function gn(e) {
  const t = Im[e];
  return t || It(0, e), t;
}
var Kp = (e) => !!Im[e], Ni, Mm = () => Ni, QS = (e, t) => ({
  drafts_: [],
  parent_: e,
  immer_: t,
  // Whenever the modified draft contains a draft from another scope, we
  // need to prevent auto-freezing so the unowned draft can be finalized.
  canAutoFreeze_: !0,
  unfinalizedDrafts_: 0,
  handledSet_: /* @__PURE__ */ new Set(),
  processedForPatches_: /* @__PURE__ */ new Set(),
  mapSetPlugin_: Kp(la) ? gn(la) : void 0,
  arrayMethodsPlugin_: Kp(Vp) ? gn(Vp) : void 0
});
function Hp(e, t) {
  t && (e.patchPlugin_ = gn(Ec), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function kc(e) {
  Ac(e), e.drafts_.forEach(eO), e.drafts_ = null;
}
function Ac(e) {
  e === Ni && (Ni = e.parent_);
}
var qp = (e) => Ni = QS(Ni, e);
function eO(e) {
  const t = e[wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Up(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  if (e !== void 0 && e !== r) {
    r[wt].modified_ && (kc(t), It(4)), er(e) && (e = Yp(t, e));
    const { patchPlugin_: i } = t;
    i && i.generateReplacementPatches_(
      r[wt].base_,
      e,
      t
    );
  } else
    e = Yp(t, r);
  return tO(t, e, !0), kc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Am ? e : void 0;
}
function Yp(e, t) {
  if (nl(t))
    return t;
  const r = t[wt];
  if (!r)
    return sa(t, e.handledSet_, e);
  if (!il(r, e))
    return t;
  if (!r.modified_)
    return r.base_;
  if (!r.finalized_) {
    const { callbacks_: n } = r;
    if (n)
      for (; n.length > 0; )
        n.pop()(e);
    Rm(r, e);
  }
  return r.copy_;
}
function tO(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Tu(t, r);
}
function Dm(e) {
  e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var il = (e, t) => e.scope_ === t, rO = [];
function Nm(e, t, r, n) {
  const i = br(e), o = e.type_;
  if (n !== void 0 && Cc(i, n, o) === t) {
    aa(i, n, r, o);
    return;
  }
  if (!e.draftLocations_) {
    const l = e.draftLocations_ = /* @__PURE__ */ new Map();
    Qa(i, (s, c) => {
      if (_r(c)) {
        const u = l.get(c) || [];
        u.push(s), l.set(c, u);
      }
    });
  }
  const a = e.draftLocations_.get(t) ?? rO;
  for (const l of a)
    aa(i, l, r, o);
}
function nO(e, t, r) {
  e.callbacks_.push(function(i) {
    const o = t;
    if (!o || !il(o, i))
      return;
    i.mapSetPlugin_?.fixSetContents(o);
    const a = Au(o);
    Nm(e, o.draft_ ?? o, a, r), Rm(o, i);
  });
}
function Rm(e, t) {
  if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
    const { patchPlugin_: n } = t;
    if (n) {
      const i = n.getPath(e);
      i && n.generatePatches_(e, i, t);
    }
    Dm(e);
  }
}
function iO(e, t, r) {
  const { scope_: n } = e;
  if (_r(r)) {
    const i = r[wt];
    il(i, n) && i.callbacks_.push(function() {
      Yo(e);
      const a = Au(i);
      Nm(e, r, a, t);
    });
  } else er(r) && e.callbacks_.push(function() {
    const o = br(e);
    e.type_ === 3 ? o.has(r) && sa(r, n.handledSet_, n) : Cc(o, t, e.type_) === r && n.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && sa(
      Cc(e.copy_, t, e.type_),
      n.handledSet_,
      n
    );
  });
}
function sa(e, t, r) {
  return !r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1 || _r(e) || t.has(e) || !er(e) || nl(e) || (t.add(e), Qa(e, (n, i) => {
    if (_r(i)) {
      const o = i[wt];
      if (il(o, r)) {
        const a = Au(o);
        aa(e, n, a, e.type_), Dm(o);
      }
    } else er(i) && sa(i, t, r);
  })), e;
}
function oO(e, t) {
  const r = el(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Mm(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    // actually instantiated in `prepareCopy()`
    assigned_: void 0,
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1,
    // `callbacks` actually gets assigned in `createProxy`
    callbacks_: void 0
  };
  let i = n, o = ca;
  r && (i = [n], o = Ri);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, [l, n];
}
var ca = {
  get(e, t) {
    if (t === wt)
      return e;
    let r = e.scope_.arrayMethodsPlugin_;
    const n = e.type_ === 1 && typeof t == "string";
    if (n && r?.isArrayOperationMethod(t))
      return r.createMethodInterceptor(e, t);
    const i = br(e);
    if (!Fp(i, t, e.type_))
      return aO(e, i, t);
    const o = i[t];
    if (e.finalized_ || !er(o) || n && e.operationMethod && r?.isMutatingArrayMethod(
      e.operationMethod
    ) && ZS(t))
      return o;
    if (o === zs(e.base_, t)) {
      Yo(e);
      const a = e.type_ === 1 ? +t : t, l = Ic(e.scope_, o, e, a);
      return e.copy_[a] = l;
    }
    return o;
  },
  has(e, t) {
    return t in br(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(br(e));
  },
  set(e, t, r) {
    const n = $m(br(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = zs(br(e), t), o = i?.[wt];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_.set(t, !1), !0;
      if (XS(r, i) && (r !== void 0 || Fp(e.base_, t, e.type_)))
        return !0;
      Yo(e), Tc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_.set(t, !0), iO(e, t, r)), !0;
  },
  deleteProperty(e, t) {
    return Yo(e), zs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), Tc(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = br(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      [Uo]: !0,
      [Pc]: e.type_ !== 1 || t !== "length",
      [oa]: n[oa],
      [Di]: r[t]
    };
  },
  defineProperty() {
    It(11);
  },
  getPrototypeOf(e) {
    return qn(e.base_);
  },
  setPrototypeOf() {
    It(12);
  }
}, Ri = {};
for (let e in ca) {
  let t = ca[e];
  Ri[e] = function() {
    const r = arguments;
    return r[0] = r[0][0], t.apply(this, r);
  };
}
Ri.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && It(13), Ri.set.call(this, e, t, void 0);
};
Ri.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && It(14), ca.set.call(this, e[0], t, r, e[0]);
};
function zs(e, t) {
  const r = e[wt];
  return (r ? br(r) : e)[t];
}
function aO(e, t, r) {
  const n = $m(t, r);
  return n ? Di in n ? n[Di] : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function $m(e, t) {
  if (!(t in e))
    return;
  let r = qn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = qn(r);
  }
}
function Tc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Tc(e.parent_));
}
function Yo(e) {
  e.copy_ || (e.assigned_ = /* @__PURE__ */ new Map(), e.copy_ = _c(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var lO = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (r, n, i) => {
      if (nn(r) && !nn(n)) {
        const a = n;
        n = r;
        const l = this;
        return function(c = a, ...u) {
          return l.produce(c, (d) => n.call(this, d, ...u));
        };
      }
      nn(n) || It(6), i !== void 0 && !nn(i) && It(7);
      let o;
      if (er(r)) {
        const a = qp(this), l = Ic(a, r, void 0);
        let s = !0;
        try {
          o = n(l), s = !1;
        } finally {
          s ? kc(a) : Ac(a);
        }
        return Hp(a, i), Up(o, a);
      } else if (!r || !ku(r)) {
        if (o = n(r), o === void 0 && (o = r), o === Am && (o = void 0), this.autoFreeze_ && Tu(o, !0), i) {
          const a = [], l = [];
          gn(Ec).generateReplacementPatches_(r, o, {
            patches_: a,
            inversePatches_: l
          }), i(a, l);
        }
        return o;
      } else
        It(1, r);
    }, this.produceWithPatches = (r, n) => {
      if (nn(r))
        return (l, ...s) => this.produceWithPatches(l, (c) => r(c, ...s));
      let i, o;
      return [this.produce(r, n, (l, s) => {
        i = l, o = s;
      }), i, o];
    }, $s(t?.autoFreeze) && this.setAutoFreeze(t.autoFreeze), $s(t?.useStrictShallowCopy) && this.setUseStrictShallowCopy(t.useStrictShallowCopy), $s(t?.useStrictIteration) && this.setUseStrictIteration(t.useStrictIteration);
  }
  createDraft(t) {
    er(t) || It(8), _r(t) && (t = Kt(t));
    const r = qp(this), n = Ic(r, t, void 0);
    return n[wt].isManual_ = !0, Ac(r), n;
  }
  finishDraft(t, r) {
    const n = t && t[wt];
    (!n || !n.isManual_) && It(9);
    const { scope_: i } = n;
    return Hp(i, r), Up(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(t) {
    this.useStrictIteration_ = t;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(t, r) {
    let n;
    for (n = r.length - 1; n >= 0; n--) {
      const o = r[n];
      if (o.path.length === 0 && o.op === "replace") {
        t = o.value;
        break;
      }
    }
    n > -1 && (r = r.slice(n + 1));
    const i = gn(Ec).applyPatches_;
    return _r(t) ? i(t, r) : this.produce(
      t,
      (o) => i(o, r)
    );
  }
};
function Ic(e, t, r, n) {
  const [i, o] = tl(t) ? gn(la).proxyMap_(t, r) : rl(t) ? gn(la).proxySet_(t, r) : oO(t, r);
  return (r?.scope_ ?? Mm()).drafts_.push(i), o.callbacks_ = r?.callbacks_ ?? [], o.key_ = n, r && n !== void 0 ? nO(r, o, n) : o.callbacks_.push(function(s) {
    s.mapSetPlugin_?.fixSetContents(o);
    const { patchPlugin_: c } = s;
    o.modified_ && c && c.generatePatches_(o, [], s);
  }), i;
}
function Kt(e) {
  return _r(e) || It(10, e), zm(e);
}
function zm(e) {
  if (!er(e) || nl(e))
    return e;
  const t = e[wt];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = _c(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = _c(e, !0);
  return Qa(
    r,
    (i, o) => {
      aa(r, i, zm(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var sO = new lO(), Lm = sO.produce;
function Bm(e) {
  return ({ dispatch: r, getState: n }) => (i) => (o) => typeof o == "function" ? o(r, n, e) : i(o);
}
var cO = Bm(), uO = Bm, dO = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? na : na.apply(null, arguments);
}, fO = (e) => e && typeof e.match == "function";
function Rt(e, t) {
  function r(...n) {
    if (t) {
      let i = t(...n);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? je(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: n[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (n) => Eu(n) && n.type === e, r;
}
function pO(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  fO(e);
}
function hO(e) {
  const t = e ? `${e}`.split("/") : [], r = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${r}())\` instead of \`dispatch(${r})\`. This is necessary even if the action has no payload.`;
}
function vO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (r) => (n) => r(n);
  const {
    isActionCreator: t = pO
  } = e;
  return () => (r) => (n) => (t(n) && console.warn(hO(n.type)), r(n));
}
function Wm(e, t) {
  let r = 0;
  return {
    measureTime(n) {
      const i = Date.now();
      try {
        return n();
      } finally {
        const o = Date.now();
        r += o - i;
      }
    },
    warnIfExceeded() {
      r > e && console.warn(`${t} took ${r}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var Fm = class Ci extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ci.prototype);
  }
  static get [Symbol.species]() {
    return Ci;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ci(...t[0].concat(this)) : new Ci(...t.concat(this));
  }
};
function Gp(e) {
  return er(e) ? Lm(e, () => {
  }) : e;
}
function ko(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function gO(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function yO(e, t, r) {
  const n = Vm(e, t, r);
  return {
    detectMutations() {
      return Km(e, t, n, r);
    }
  };
}
function Vm(e, t = [], r, n = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: r
  };
  if (!e(r) && !i.has(r)) {
    i.add(r), o.children = {};
    const a = t.length > 0;
    for (const l in r) {
      const s = n ? n + "." + l : l;
      a && t.some((u) => u instanceof RegExp ? u.test(s) : s === u) || (o.children[l] = Vm(e, t, r[l], s));
    }
  }
  return o;
}
function Km(e, t = [], r, n, i = !1, o = "") {
  const a = r ? r.value : void 0, l = a === n;
  if (i && !l && !Number.isNaN(n))
    return {
      wasMutated: !0,
      path: o
    };
  if (e(a) || e(n))
    return {
      wasMutated: !1
    };
  const s = {};
  for (let u in r.children)
    s[u] = !0;
  for (let u in n)
    s[u] = !0;
  const c = t.length > 0;
  for (let u in s) {
    const d = o ? o + "." + u : u;
    if (c && t.some((g) => g instanceof RegExp ? g.test(d) : d === g))
      continue;
    const p = Km(e, t, r.children[u], n[u], l, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function mO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    let t = function(l, s, c, u) {
      return JSON.stringify(l, r(s, u), c);
    }, r = function(l, s) {
      let c = [], u = [];
      return s || (s = function(d, p) {
        return c[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, c.indexOf(p)).join(".") + "]";
      }), function(d, p) {
        if (c.length > 0) {
          var h = c.indexOf(this);
          ~h ? c.splice(h + 1) : c.push(this), ~h ? u.splice(h, 1 / 0, d) : u.push(d), ~c.indexOf(p) && (p = s.call(this, d, p));
        } else c.push(p);
        return l == null ? p : l.call(this, d, p);
      };
    }, {
      isImmutable: n = gO,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = yO.bind(null, n, i);
    return ({
      getState: l
    }) => {
      let s = l(), c = a(s), u;
      return (d) => (p) => {
        const h = Wm(o, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (s = l(), u = c.detectMutations(), c = a(s), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const g = d(p);
        return h.measureTime(() => {
          if (s = l(), u = c.detectMutations(), c = a(s), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? je(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), g;
      };
    };
  }
}
function Hm(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Xi(e);
}
function Mc(e, t = "", r = Hm, n, i = [], o) {
  let a;
  if (!r(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o?.has(e)) return !1;
  const l = n != null ? n(e) : Object.entries(e), s = i.length > 0;
  for (const [c, u] of l) {
    const d = t ? t + "." + c : c;
    if (!(s && i.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!r(u))
        return {
          keyPath: d,
          value: u
        };
      if (typeof u == "object" && (a = Mc(u, d, r, n, i, o), a))
        return a;
    }
  }
  return o && qm(e) && o.add(e), !1;
}
function qm(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !qm(t))
      return !1;
  return !0;
}
function xO(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (r) => t(r);
  {
    const {
      isSerializable: t = Hm,
      getEntries: r,
      ignoredActions: n = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: l = !1,
      ignoreActions: s = !1,
      disableCache: c = !1
    } = e, u = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!Eu(h))
        return p(h);
      const g = p(h), v = Wm(a, "SerializableStateInvariantMiddleware");
      return !s && !(n.length && n.indexOf(h.type) !== -1) && v.measureTime(() => {
        const y = Mc(h, "", t, r, i, u);
        if (y) {
          const {
            keyPath: m,
            value: b
          } = y;
          console.error(`A non-serializable value was detected in an action, in the path: \`${m}\`. Value:`, b, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), l || (v.measureTime(() => {
        const y = d.getState(), m = Mc(y, "", t, r, o, u);
        if (m) {
          const {
            keyPath: b,
            value: w
          } = m;
          console.error(`A non-serializable value was detected in the state, in the path: \`${b}\`. Value:`, w, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), v.warnIfExceeded()), g;
    };
  }
}
function Ao(e) {
  return typeof e == "boolean";
}
var bO = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: n = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new Fm();
  if (r && (Ao(r) ? a.push(cO) : a.push(uO(r.extraArgument))), process.env.NODE_ENV !== "production") {
    if (n) {
      let l = {};
      Ao(n) || (l = n), a.unshift(mO(l));
    }
    if (i) {
      let l = {};
      Ao(i) || (l = i), a.push(xO(l));
    }
    if (o) {
      let l = {};
      Ao(o) || (l = o), a.unshift(vO(l));
    }
  }
  return a;
}, Um = "RTK_autoBatch", De = () => (e) => ({
  payload: e,
  meta: {
    [Um]: !0
  }
}), Xp = (e) => (t) => {
  setTimeout(t, e);
}, Ym = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const n = t(...r);
  let i = !0, o = !1, a = !1;
  const l = /* @__PURE__ */ new Set(), s = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Xp(10)
  ) : e.type === "callback" ? e.queueNotification : Xp(e.timeout), c = () => {
    a = !1, o && (o = !1, l.forEach((u) => u()));
  };
  return Object.assign({}, n, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => i && u(), p = n.subscribe(d);
      return l.add(u), () => {
        p(), l.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      try {
        return i = !u?.meta?.[Um], o = !i, o && (a || (a = !0, s(c))), n.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, wO = (e) => function(r) {
  const {
    autoBatch: n = !0
  } = r ?? {};
  let i = new Fm(e);
  return n && i.push(Ym(typeof n == "object" ? n : void 0)), i;
};
function jO(e) {
  const t = bO(), {
    reducer: r = void 0,
    middleware: n,
    devTools: i = !0,
    duplicateMiddlewareCheck: o = !0,
    preloadedState: a = void 0,
    enhancers: l = void 0
  } = e || {};
  let s;
  if (typeof r == "function")
    s = r;
  else if (Xi(r))
    s = km(r);
  else
    throw new Error(process.env.NODE_ENV === "production" ? je(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && n && typeof n != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(2) : "`middleware` field must be a callback");
  let c;
  if (typeof n == "function") {
    if (c = n(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? je(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(4) : "each middleware provided to configureStore must be a function");
  if (process.env.NODE_ENV !== "production" && o) {
    let v = /* @__PURE__ */ new Set();
    c.forEach((y) => {
      if (v.has(y))
        throw new Error(process.env.NODE_ENV === "production" ? je(42) : "Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");
      v.add(y);
    });
  }
  let u = na;
  i && (u = dO({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const d = US(...c), p = wO(d);
  if (process.env.NODE_ENV !== "production" && l && typeof l != "function")
    throw new Error(process.env.NODE_ENV === "production" ? je(5) : "`enhancers` field must be a callback");
  let h = typeof l == "function" ? l(p) : p();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(h))
    throw new Error(process.env.NODE_ENV === "production" ? je(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && h.some((v) => typeof v != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? je(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !h.includes(d) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const g = u(...h);
  return Em(s, a, g);
}
function Gm(e) {
  const t = {}, r = [];
  let n;
  const i = {
    addCase(o, a) {
      if (process.env.NODE_ENV !== "production") {
        if (r.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? je(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (n)
          throw new Error(process.env.NODE_ENV === "production" ? je(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const l = typeof o == "string" ? o : o.type;
      if (!l)
        throw new Error(process.env.NODE_ENV === "production" ? je(28) : "`builder.addCase` cannot be called with an empty action type");
      if (l in t)
        throw new Error(process.env.NODE_ENV === "production" ? je(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${l}'`);
      return t[l] = a, i;
    },
    addAsyncThunk(o, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(43) : "`builder.addAsyncThunk` should only be called before calling `builder.addDefaultCase`");
      return a.pending && (t[o.pending.type] = a.pending), a.rejected && (t[o.rejected.type] = a.rejected), a.fulfilled && (t[o.fulfilled.type] = a.fulfilled), a.settled && r.push({
        matcher: o.settled,
        reducer: a.settled
      }), i;
    },
    addMatcher(o, a) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return r.push({
        matcher: o,
        reducer: a
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error(process.env.NODE_ENV === "production" ? je(31) : "`builder.addDefaultCase` can only be called once");
      return n = o, i;
    }
  };
  return e(i), [t, r, n];
}
function SO(e) {
  return typeof e == "function";
}
function OO(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? je(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [r, n, i] = Gm(t), o;
  if (SO(e))
    o = () => Gp(e());
  else {
    const l = Gp(e);
    o = () => l;
  }
  function a(l = o(), s) {
    let c = [r[s.type], ...n.filter(({
      matcher: u
    }) => u(s)).map(({
      reducer: u
    }) => u)];
    return c.filter((u) => !!u).length === 0 && (c = [i]), c.reduce((u, d) => {
      if (d)
        if (_r(u)) {
          const h = d(u, s);
          return h === void 0 ? u : h;
        } else {
          if (er(u))
            return Lm(u, (p) => d(p, s));
          {
            const p = d(u, s);
            if (p === void 0) {
              if (u === null)
                return u;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return u;
    }, l);
  }
  return a.getInitialState = o, a;
}
var PO = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", CO = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += PO[Math.random() * 64 | 0];
  return t;
}, _O = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function EO(e, t) {
  return `${e}/${t}`;
}
function kO({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[_O];
  return function(n) {
    const {
      name: i,
      reducerPath: o = i
    } = n;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? je(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && n.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const a = (typeof n.reducers == "function" ? n.reducers(TO()) : n.reducers) || {}, l = Object.keys(a), s = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, c = {
      addCase(w, x) {
        const S = typeof w == "string" ? w : w.type;
        if (!S)
          throw new Error(process.env.NODE_ENV === "production" ? je(12) : "`context.addCase` cannot be called with an empty action type");
        if (S in s.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? je(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + S);
        return s.sliceCaseReducersByType[S] = x, c;
      },
      addMatcher(w, x) {
        return s.sliceMatchers.push({
          matcher: w,
          reducer: x
        }), c;
      },
      exposeAction(w, x) {
        return s.actionCreators[w] = x, c;
      },
      exposeCaseReducer(w, x) {
        return s.sliceCaseReducersByName[w] = x, c;
      }
    };
    l.forEach((w) => {
      const x = a[w], S = {
        reducerName: w,
        type: EO(i, w),
        createNotation: typeof n.reducers == "function"
      };
      MO(x) ? NO(S, x, c, t) : IO(S, x, c);
    });
    function u() {
      if (process.env.NODE_ENV !== "production" && typeof n.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? je(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [w = {}, x = [], S = void 0] = typeof n.extraReducers == "function" ? Gm(n.extraReducers) : [n.extraReducers], O = {
        ...w,
        ...s.sliceCaseReducersByType
      };
      return OO(n.initialState, (C) => {
        for (let E in O)
          C.addCase(E, O[E]);
        for (let E of s.sliceMatchers)
          C.addMatcher(E.matcher, E.reducer);
        for (let E of x)
          C.addMatcher(E.matcher, E.reducer);
        S && C.addDefaultCase(S);
      });
    }
    const d = (w) => w, p = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new WeakMap();
    let g;
    function v(w, x) {
      return g || (g = u()), g(w, x);
    }
    function y() {
      return g || (g = u()), g.getInitialState();
    }
    function m(w, x = !1) {
      function S(C) {
        let E = C[w];
        if (typeof E > "u") {
          if (x)
            E = ko(h, S, y);
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? je(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return E;
      }
      function O(C = d) {
        const E = ko(p, x, () => /* @__PURE__ */ new WeakMap());
        return ko(E, C, () => {
          const M = {};
          for (const [D, N] of Object.entries(n.selectors ?? {}))
            M[D] = AO(N, C, () => ko(h, C, y), x);
          return M;
        });
      }
      return {
        reducerPath: w,
        getSelectors: O,
        get selectors() {
          return O(S);
        },
        selectSlice: S
      };
    }
    const b = {
      name: i,
      reducer: v,
      actions: s.actionCreators,
      caseReducers: s.sliceCaseReducersByName,
      getInitialState: y,
      ...m(o),
      injectInto(w, {
        reducerPath: x,
        ...S
      } = {}) {
        const O = x ?? o;
        return w.inject({
          reducerPath: O,
          reducer: v
        }, S), {
          ...b,
          ...m(O, !0)
        };
      }
    };
    return b;
  };
}
function AO(e, t, r, n) {
  function i(o, ...a) {
    let l = t(o);
    if (typeof l > "u") {
      if (n)
        l = r();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? je(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(l, ...a);
  }
  return i.unwrapped = e, i;
}
var gt = /* @__PURE__ */ kO();
function TO() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function IO({
  type: e,
  reducerName: t,
  createNotation: r
}, n, i) {
  let o, a;
  if ("reducer" in n) {
    if (r && !DO(n))
      throw new Error(process.env.NODE_ENV === "production" ? je(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = n.reducer, a = n.prepare;
  } else
    o = n;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? Rt(e, a) : Rt(e));
}
function MO(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function DO(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function NO({
  type: e,
  reducerName: t
}, r, n, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? je(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: a,
    pending: l,
    rejected: s,
    settled: c,
    options: u
  } = r, d = i(e, o, u);
  n.exposeAction(t, d), a && n.addCase(d.fulfilled, a), l && n.addCase(d.pending, l), s && n.addCase(d.rejected, s), c && n.addMatcher(d.settled, c), n.exposeCaseReducer(t, {
    fulfilled: a || To,
    pending: l || To,
    rejected: s || To,
    settled: c || To
  });
}
function To() {
}
var RO = "task", Xm = "listener", Zm = "completed", Iu = "cancelled", $O = `task-${Iu}`, zO = `task-${Zm}`, Dc = `${Xm}-${Iu}`, LO = `${Xm}-${Zm}`, ol = class {
  constructor(e) {
    this.code = e, this.message = `${RO} ${Iu} (reason: ${e})`;
  }
  name = "TaskAbortError";
  message;
}, Mu = (e, t) => {
  if (typeof e != "function")
    throw new TypeError(process.env.NODE_ENV === "production" ? je(32) : `${t} is not a function`);
}, ua = () => {
}, Jm = (e, t = ua) => (e.catch(t), e), Qm = (e, t) => (e.addEventListener("abort", t, {
  once: !0
}), () => e.removeEventListener("abort", t)), un = (e) => {
  if (e.aborted)
    throw new ol(e.reason);
};
function e0(e, t) {
  let r = ua;
  return new Promise((n, i) => {
    const o = () => i(new ol(e.reason));
    if (e.aborted) {
      o();
      return;
    }
    r = Qm(e, o), t.finally(() => r()).then(n, i);
  }).finally(() => {
    r = ua;
  });
}
var BO = async (e, t) => {
  try {
    return await Promise.resolve(), {
      status: "ok",
      value: await e()
    };
  } catch (r) {
    return {
      status: r instanceof ol ? "cancelled" : "rejected",
      error: r
    };
  } finally {
    t?.();
  }
}, da = (e) => (t) => Jm(e0(e, t).then((r) => (un(e), r))), t0 = (e) => {
  const t = da(e);
  return (r) => t(new Promise((n) => setTimeout(n, r)));
}, {
  assign: Fn
} = Object, Zp = {}, Ji = "listenerMiddleware", WO = (e, t) => {
  const r = (n) => Qm(e, () => n.abort(e.reason));
  return (n, i) => {
    Mu(n, "taskExecutor");
    const o = new AbortController();
    r(o);
    const a = BO(async () => {
      un(e), un(o.signal);
      const l = await n({
        pause: da(o.signal),
        delay: t0(o.signal),
        signal: o.signal
      });
      return un(o.signal), l;
    }, () => o.abort(zO));
    return i?.autoJoin && t.push(a.catch(ua)), {
      result: da(e)(a),
      cancel() {
        o.abort($O);
      }
    };
  };
}, FO = (e, t) => {
  const r = async (n, i) => {
    un(t);
    let o = () => {
    };
    const l = [new Promise((s, c) => {
      let u = e({
        predicate: n,
        effect: (d, p) => {
          p.unsubscribe(), s([d, p.getState(), p.getOriginalState()]);
        }
      });
      o = () => {
        u(), c();
      };
    })];
    i != null && l.push(new Promise((s) => setTimeout(s, i, null)));
    try {
      const s = await e0(t, Promise.race(l));
      return un(t), s;
    } finally {
      o();
    }
  };
  return (n, i) => Jm(r(n, i));
}, r0 = (e) => {
  let {
    type: t,
    actionCreator: r,
    matcher: n,
    predicate: i,
    effect: o
  } = e;
  if (t)
    i = Rt(t).match;
  else if (r)
    t = r.type, i = r.match;
  else if (n)
    i = n;
  else if (!i) throw new Error(process.env.NODE_ENV === "production" ? je(21) : "Creating or removing a listener requires one of the known fields for matching an action");
  return Mu(o, "options.listener"), {
    predicate: i,
    type: t,
    effect: o
  };
}, n0 = /* @__PURE__ */ Fn((e) => {
  const {
    type: t,
    predicate: r,
    effect: n
  } = r0(e);
  return {
    id: CO(),
    effect: n,
    type: t,
    predicate: r,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: () => {
      throw new Error(process.env.NODE_ENV === "production" ? je(22) : "Unsubscribe not initialized");
    }
  };
}, {
  withTypes: () => n0
}), Jp = (e, t) => {
  const {
    type: r,
    effect: n,
    predicate: i
  } = r0(t);
  return Array.from(e.values()).find((o) => (typeof r == "string" ? o.type === r : o.predicate === i) && o.effect === n);
}, Nc = (e) => {
  e.pending.forEach((t) => {
    t.abort(Dc);
  });
}, VO = (e, t) => () => {
  for (const r of t.keys())
    Nc(r);
  e.clear();
}, Qp = (e, t, r) => {
  try {
    e(t, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    }, 0);
  }
}, i0 = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${Ji}/add`), {
  withTypes: () => i0
}), KO = /* @__PURE__ */ Rt(`${Ji}/removeAll`), o0 = /* @__PURE__ */ Fn(/* @__PURE__ */ Rt(`${Ji}/remove`), {
  withTypes: () => o0
}), HO = (...e) => {
  console.error(`${Ji}/error`, ...e);
}, Qi = (e = {}) => {
  const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), n = (h) => {
    const g = r.get(h) ?? 0;
    r.set(h, g + 1);
  }, i = (h) => {
    const g = r.get(h) ?? 1;
    g === 1 ? r.delete(h) : r.set(h, g - 1);
  }, {
    extra: o,
    onError: a = HO
  } = e;
  Mu(a, "onError");
  const l = (h) => (h.unsubscribe = () => t.delete(h.id), t.set(h.id, h), (g) => {
    h.unsubscribe(), g?.cancelActive && Nc(h);
  }), s = (h) => {
    const g = Jp(t, h) ?? n0(h);
    return l(g);
  };
  Fn(s, {
    withTypes: () => s
  });
  const c = (h) => {
    const g = Jp(t, h);
    return g && (g.unsubscribe(), h.cancelActive && Nc(g)), !!g;
  };
  Fn(c, {
    withTypes: () => c
  });
  const u = async (h, g, v, y) => {
    const m = new AbortController(), b = FO(s, m.signal), w = [];
    try {
      h.pending.add(m), n(h), await Promise.resolve(h.effect(
        g,
        // Use assign() rather than ... to avoid extra helper functions added to bundle
        Fn({}, v, {
          getOriginalState: y,
          condition: (x, S) => b(x, S).then(Boolean),
          take: b,
          delay: t0(m.signal),
          pause: da(m.signal),
          extra: o,
          signal: m.signal,
          fork: WO(m.signal, w),
          unsubscribe: h.unsubscribe,
          subscribe: () => {
            t.set(h.id, h);
          },
          cancelActiveListeners: () => {
            h.pending.forEach((x, S, O) => {
              x !== m && (x.abort(Dc), O.delete(x));
            });
          },
          cancel: () => {
            m.abort(Dc), h.pending.delete(m);
          },
          throwIfCancelled: () => {
            un(m.signal);
          }
        })
      ));
    } catch (x) {
      x instanceof ol || Qp(a, x, {
        raisedBy: "effect"
      });
    } finally {
      await Promise.all(w), m.abort(LO), i(h), h.pending.delete(m);
    }
  }, d = VO(t, r);
  return {
    middleware: (h) => (g) => (v) => {
      if (!Eu(v))
        return g(v);
      if (i0.match(v))
        return s(v.payload);
      if (KO.match(v)) {
        d();
        return;
      }
      if (o0.match(v))
        return c(v.payload);
      let y = h.getState();
      const m = () => {
        if (y === Zp)
          throw new Error(process.env.NODE_ENV === "production" ? je(23) : `${Ji}: getOriginalState can only be called synchronously`);
        return y;
      };
      let b;
      try {
        if (b = g(v), t.size > 0) {
          const w = h.getState(), x = Array.from(t.values());
          for (const S of x) {
            let O = !1;
            try {
              O = S.predicate(v, w, y);
            } catch (C) {
              O = !1, Qp(a, C, {
                raisedBy: "predicate"
              });
            }
            O && u(S, v, h, m);
          }
        }
      } finally {
        y = Zp;
      }
      return b;
    },
    startListening: s,
    stopListening: c,
    clearListeners: d
  };
};
function je(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var qO = {
  layoutType: "horizontal",
  width: 0,
  height: 0,
  margin: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5
  },
  scale: 1
}, a0 = gt({
  name: "chartLayout",
  initialState: qO,
  reducers: {
    setLayout(e, t) {
      e.layoutType = t.payload;
    },
    setChartSize(e, t) {
      e.width = t.payload.width, e.height = t.payload.height;
    },
    setMargin(e, t) {
      var r, n, i, o;
      e.margin.top = (r = t.payload.top) !== null && r !== void 0 ? r : 0, e.margin.right = (n = t.payload.right) !== null && n !== void 0 ? n : 0, e.margin.bottom = (i = t.payload.bottom) !== null && i !== void 0 ? i : 0, e.margin.left = (o = t.payload.left) !== null && o !== void 0 ? o : 0;
    },
    setScale(e, t) {
      e.scale = t.payload;
    }
  }
}), {
  setMargin: UO,
  setLayout: YO,
  setChartSize: GO,
  setScale: XO
} = a0.actions, ZO = a0.reducer;
function l0(e, t, r) {
  return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
}
function pe(e) {
  return Number.isFinite(e);
}
function dr(e) {
  return typeof e == "number" && e > 0 && Number.isFinite(e);
}
function eh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? eh(Object(r), !0).forEach(function(n) {
      JO(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JO(e, t, r) {
  return (t = QO(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QO(e) {
  var t = eP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function eP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function He(e, t, r) {
  return Le(e) || Le(t) ? r : Ut(t) ? Hn(e, t, r) : typeof t == "function" ? t(e) : r;
}
var tP = (e, t, r) => {
  if (t && r) {
    var {
      width: n,
      height: i
    } = r, {
      align: o,
      verticalAlign: a,
      layout: l
    } = t;
    if ((l === "vertical" || l === "horizontal" && a === "middle") && o !== "center" && te(e[o]))
      return Ln(Ln({}, e), {}, {
        [o]: e[o] + (n || 0)
      });
    if ((l === "horizontal" || l === "vertical" && o === "center") && a !== "middle" && te(e[a]))
      return Ln(Ln({}, e), {}, {
        [a]: e[a] + (i || 0)
      });
  }
  return e;
}, hr = (e, t) => e === "horizontal" && t === "xAxis" || e === "vertical" && t === "yAxis" || e === "centric" && t === "angleAxis" || e === "radial" && t === "radiusAxis", s0 = (e, t, r, n) => {
  if (n)
    return e.map((l) => l.coordinate);
  var i, o, a = e.map((l) => (l.coordinate === t && (i = !0), l.coordinate === r && (o = !0), l.coordinate));
  return i || a.push(t), o || a.push(r), a;
}, c0 = (e, t, r) => {
  if (!e)
    return null;
  var {
    duplicateDomain: n,
    type: i,
    range: o,
    scale: a,
    realScaleType: l,
    isCategorical: s,
    categoricalDomain: c,
    tickCount: u,
    ticks: d,
    niceTicks: p,
    axisType: h
  } = e;
  if (!a)
    return null;
  var g = l === "scaleBand" && a.bandwidth ? a.bandwidth() / 2 : 2, v = i === "category" && a.bandwidth ? a.bandwidth() / g : 0;
  if (v = h === "angleAxis" && o && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * v : v, d || p) {
    var y = (d || p || []).map((m, b) => {
      var w = n ? n.indexOf(m) : m, x = a.map(w);
      return pe(x) ? {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: x + v,
        value: m,
        offset: v,
        index: b
      } : null;
    }).filter(_t);
    return y;
  }
  return s && c ? c.map((m, b) => {
    var w = a.map(m);
    return pe(w) ? {
      coordinate: w + v,
      value: m,
      index: b,
      offset: v
    } : null;
  }).filter(_t) : a.ticks && u != null ? a.ticks(u).map((m, b) => {
    var w = a.map(m);
    return pe(w) ? {
      coordinate: w + v,
      value: m,
      index: b,
      offset: v
    } : null;
  }).filter(_t) : a.domain().map((m, b) => {
    var w = a.map(m);
    return pe(w) ? {
      coordinate: w + v,
      // @ts-expect-error can't use Date as an index
      value: n ? n[m] : m,
      index: b,
      offset: v
    } : null;
  }).filter(_t);
}, rP = (e, t) => {
  if (!t || t.length !== 2 || !te(t[0]) || !te(t[1]))
    return e;
  var r = Math.min(t[0], t[1]), n = Math.max(t[0], t[1]), i = [e[0], e[1]];
  return (!te(e[0]) || e[0] < r) && (i[0] = r), (!te(e[1]) || e[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
}, nP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0, l = 0; l < r; ++l) {
          var s = e[l], c = s?.[i];
          if (c != null) {
            var u = c[1], d = c[0], p = Jt(u) ? d : u;
            p >= 0 ? (c[0] = o, o += p, c[1] = o) : (c[0] = a, a += p, c[1] = a);
          }
        }
  }
}, iP = (e) => {
  var t, r = e.length;
  if (!(r <= 0)) {
    var n = (t = e[0]) === null || t === void 0 ? void 0 : t.length;
    if (!(n == null || n <= 0))
      for (var i = 0; i < n; ++i)
        for (var o = 0, a = 0; a < r; ++a) {
          var l = e[a], s = l?.[i];
          if (s != null) {
            var c = Jt(s[1]) ? s[0] : s[1];
            c >= 0 ? (s[0] = o, o += c, s[1] = o) : (s[0] = 0, s[1] = 0);
          }
        }
  }
}, oP = {
  sign: nP,
  // @ts-expect-error definitelytyped types are incorrect
  expand: gj,
  // @ts-expect-error definitelytyped types are incorrect
  none: hn,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: yj,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: mj,
  positive: iP
}, aP = (e, t, r) => {
  var n, i = (n = oP[r]) !== null && n !== void 0 ? n : hn, o = vj().keys(t).value((l, s) => Number(He(l, s, 0))).order(Sc).offset(i), a = o(e);
  return a.forEach((l, s) => {
    l.forEach((c, u) => {
      var d = He(e[u], t[s], 0);
      Array.isArray(d) && d.length === 2 && te(d[0]) && te(d[1]) && (c[0] = d[0], c[1] = d[1]);
    });
  }), a;
};
function u0(e) {
  return e == null ? void 0 : String(e);
}
function th(e) {
  var {
    axis: t,
    ticks: r,
    bandSize: n,
    entry: i,
    index: o,
    dataKey: a
  } = e;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Le(i[t.dataKey])) {
      var l = um(r, "value", i[t.dataKey]);
      if (l)
        return l.coordinate + n / 2;
    }
    return r != null && r[o] ? r[o].coordinate + n / 2 : null;
  }
  var s = He(i, Le(a) ? t.dataKey : a), c = t.scale.map(s);
  return te(c) ? c : null;
}
var rh = (e) => {
  var {
    axis: t,
    ticks: r,
    offset: n,
    bandSize: i,
    entry: o,
    index: a
  } = e;
  if (t.type === "category")
    return r[a] ? r[a].coordinate + n : null;
  var l = He(o, t.dataKey, t.scale.domain()[a]);
  if (Le(l))
    return null;
  var s = t.scale.map(l);
  return te(s) ? s - i / 2 + n : null;
}, lP = (e) => {
  var {
    numericAxis: t
  } = e, r = t.scale.domain();
  if (t.type === "number") {
    var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
  }
  return r[0];
}, sP = (e) => {
  var t = e.flat(2).filter(te);
  return [Math.min(...t), Math.max(...t)];
}, cP = (e) => [e[0] === 1 / 0 ? 0 : e[0], e[1] === -1 / 0 ? 0 : e[1]], uP = (e, t, r) => {
  if (e != null)
    return cP(Object.keys(e).reduce((n, i) => {
      var o = e[i];
      if (!o)
        return n;
      var {
        stackedData: a
      } = o, l = a.reduce((s, c) => {
        var u = l0(c, t, r), d = sP(u);
        return !pe(d[0]) || !pe(d[1]) ? s : [Math.min(s[0], d[0]), Math.max(s[1], d[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(l[0], n[0]), Math.max(l[1], n[1])];
    }, [1 / 0, -1 / 0]));
}, nh = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, ih = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Un = (e, t, r) => {
  if (e && e.scale && e.scale.bandwidth) {
    var n = e.scale.bandwidth();
    if (!r || n > 0)
      return n;
  }
  if (e && t && t.length >= 2) {
    for (var i = Za(t, (u) => u.coordinate), o = 1 / 0, a = 1, l = i.length; a < l; a++) {
      var s = i[a], c = i[a - 1];
      o = Math.min((s?.coordinate || 0) - (c?.coordinate || 0), o);
    }
    return o === 1 / 0 ? 0 : o;
  }
  return r ? void 0 : 0;
};
function oh(e) {
  var {
    tooltipEntrySettings: t,
    dataKey: r,
    payload: n,
    value: i,
    name: o
  } = e;
  return Ln(Ln({}, t), {}, {
    dataKey: r,
    payload: n,
    value: i,
    name: o
  });
}
function al(e, t) {
  if (e)
    return String(e);
  if (typeof t == "string")
    return t;
}
var dP = (e, t) => {
  if (t === "horizontal")
    return e.relativeX;
  if (t === "vertical")
    return e.relativeY;
}, fP = (e, t) => t === "centric" ? e.angle : e.radius, Tr = (e) => e.layout.width, Ir = (e) => e.layout.height, pP = (e) => e.layout.scale, d0 = (e) => e.layout.margin, ll = I((e) => e.cartesianAxis.xAxis, (e) => Object.values(e)), sl = I((e) => e.cartesianAxis.yAxis, (e) => Object.values(e)), hP = "data-recharts-item-index", vP = "data-recharts-item-id", eo = 60;
function ah(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ah(Object(r), !0).forEach(function(n) {
      gP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ah(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function gP(e, t, r) {
  return (t = yP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yP(e) {
  var t = mP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function mP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xP = (e) => e.brush.height;
function bP(e) {
  var t = sl(e);
  return t.reduce((r, n) => {
    if (n.orientation === "left" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : eo;
      return r + i;
    }
    return r;
  }, 0);
}
function wP(e) {
  var t = sl(e);
  return t.reduce((r, n) => {
    if (n.orientation === "right" && !n.mirror && !n.hide) {
      var i = typeof n.width == "number" ? n.width : eo;
      return r + i;
    }
    return r;
  }, 0);
}
function jP(e) {
  var t = ll(e);
  return t.reduce((r, n) => n.orientation === "top" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
function SP(e) {
  var t = ll(e);
  return t.reduce((r, n) => n.orientation === "bottom" && !n.mirror && !n.hide ? r + n.height : r, 0);
}
var rt = I([Tr, Ir, d0, xP, bP, wP, jP, SP, _m, RS], (e, t, r, n, i, o, a, l, s, c) => {
  var u = {
    left: (r.left || 0) + i,
    right: (r.right || 0) + o
  }, d = {
    top: (r.top || 0) + a,
    bottom: (r.bottom || 0) + l
  }, p = Io(Io({}, d), u), h = p.bottom;
  p.bottom += n, p = tP(p, s, c);
  var g = e - p.left - p.right, v = t - p.top - p.bottom;
  return Io(Io({
    brushBottom: h
  }, p), {}, {
    // never return negative values for height and width
    width: Math.max(g, 0),
    height: Math.max(v, 0)
  });
}), OP = I(rt, (e) => ({
  x: e.left,
  y: e.top,
  width: e.width,
  height: e.height
})), Du = I(Tr, Ir, (e, t) => ({
  x: 0,
  y: 0,
  width: e,
  height: t
})), PP = /* @__PURE__ */ At(null), dt = () => zt(PP) != null, cl = (e) => e.brush, ul = I([cl, rt, d0], (e, t, r) => ({
  height: e.height,
  x: te(e.x) ? e.x : t.left,
  y: te(e.y) ? e.y : t.top + t.height + t.brushBottom - (r?.bottom || 0),
  width: te(e.width) ? e.width : t.width
})), Ls = {}, Bs = {}, Ws = {}, lh;
function CP() {
  return lh || (lh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r, n, { signal: i, edges: o } = {}) {
      let a, l = null;
      const s = o != null && o.includes("leading"), c = o == null || o.includes("trailing"), u = () => {
        l !== null && (r.apply(a, l), a = void 0, l = null);
      }, d = () => {
        c && u(), v();
      };
      let p = null;
      const h = () => {
        p != null && clearTimeout(p), p = setTimeout(() => {
          p = null, d();
        }, n);
      }, g = () => {
        p !== null && (clearTimeout(p), p = null);
      }, v = () => {
        g(), a = void 0, l = null;
      }, y = () => {
        u();
      }, m = function(...b) {
        if (i?.aborted)
          return;
        a = this, l = b;
        const w = p == null;
        h(), s && w && u();
      };
      return m.schedule = h, m.cancel = v, m.flush = y, i?.addEventListener("abort", v, { once: !0 }), m;
    }
    e.debounce = t;
  })(Ws)), Ws;
}
var sh;
function _P() {
  return sh || (sh = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ CP();
    function r(n, i = 0, o = {}) {
      typeof o != "object" && (o = {});
      const { leading: a = !1, trailing: l = !0, maxWait: s } = o, c = Array(2);
      a && (c[0] = "leading"), l && (c[1] = "trailing");
      let u, d = null;
      const p = t.debounce(function(...v) {
        u = n.apply(this, v), d = null;
      }, i, { edges: c }), h = function(...v) {
        return s != null && (d === null && (d = Date.now()), Date.now() - d >= s) ? (u = n.apply(this, v), d = Date.now(), p.cancel(), p.schedule(), u) : (p.apply(this, v), u);
      }, g = () => (p.flush(), u);
      return h.cancel = p.cancel, h.flush = g, h;
    }
    e.debounce = r;
  })(Bs)), Bs;
}
var ch;
function EP() {
  return ch || (ch = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ _P();
    function r(n, i = 0, o = {}) {
      const { leading: a = !0, trailing: l = !0 } = o;
      return t.debounce(n, i, {
        leading: a,
        maxWait: i,
        trailing: l
      });
    }
    e.throttle = r;
  })(Ls)), Ls;
}
var Fs, uh;
function kP() {
  return uh || (uh = 1, Fs = EP().throttle), Fs;
}
var AP = /* @__PURE__ */ kP();
const TP = /* @__PURE__ */ Sn(AP);
var fa = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    i[o - 2] = arguments[o];
  if (typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var a = 0;
      console.warn(r.replace(/%s/g, () => i[a++]));
    }
}, lr = {
  width: "100%",
  height: "100%",
  debounce: 0,
  minWidth: 0,
  initialDimension: {
    width: -1,
    height: -1
  }
}, f0 = (e, t, r) => {
  var {
    width: n = lr.width,
    height: i = lr.height,
    aspect: o,
    maxHeight: a
  } = r, l = vn(n) ? e : Number(n), s = vn(i) ? t : Number(i);
  return o && o > 0 && (l ? s = l / o : s && (l = s * o), a && s != null && s > a && (s = a)), {
    calculatedWidth: l,
    calculatedHeight: s
  };
}, IP = {
  width: 0,
  height: 0,
  overflow: "visible"
}, MP = {
  width: 0,
  overflowX: "visible"
}, DP = {
  height: 0,
  overflowY: "visible"
}, NP = {}, RP = (e) => {
  var {
    width: t,
    height: r
  } = e, n = vn(t), i = vn(r);
  return n && i ? IP : n ? MP : i ? DP : NP;
};
function $P(e) {
  var {
    width: t,
    height: r,
    aspect: n
  } = e, i = t, o = r;
  return i === void 0 && o === void 0 ? (i = lr.width, o = lr.height) : i === void 0 ? i = n && n > 0 ? void 0 : lr.width : o === void 0 && (o = n && n > 0 ? void 0 : lr.height), {
    width: i,
    height: o
  };
}
function Rc() {
  return Rc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Rc.apply(null, arguments);
}
function dh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dh(Object(r), !0).forEach(function(n) {
      zP(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function zP(e, t, r) {
  return (t = LP(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function LP(e) {
  var t = BP(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function BP(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var p0 = /* @__PURE__ */ At(lr.initialDimension);
function WP(e) {
  return dr(e.width) && dr(e.height);
}
function h0(e) {
  var {
    children: t,
    width: r,
    height: n
  } = e, i = tr(() => ({
    width: r,
    height: n
  }), [r, n]);
  return WP(i) ? /* @__PURE__ */ P.createElement(p0.Provider, {
    value: i
  }, t) : null;
}
var Nu = () => zt(p0), FP = /* @__PURE__ */ ut((e, t) => {
  var {
    aspect: r,
    initialDimension: n = lr.initialDimension,
    width: i,
    height: o,
    /*
     * default min-width to 0 if not specified - 'auto' causes issues with flexbox
     * https://github.com/recharts/recharts/issues/172
     */
    minWidth: a = lr.minWidth,
    minHeight: l,
    maxHeight: s,
    children: c,
    debounce: u = lr.debounce,
    id: d,
    className: p,
    onResize: h,
    style: g = {}
  } = e, v = ve(null), y = ve();
  y.current = h, My(t, () => v.current);
  var [m, b] = W({
    containerWidth: n.width,
    containerHeight: n.height
  }), w = Ee((E, M) => {
    b((D) => {
      var N = Math.round(E), _ = Math.round(M);
      return D.containerWidth === N && D.containerHeight === _ ? D : {
        containerWidth: N,
        containerHeight: _
      };
    });
  }, []);
  Oe(() => {
    if (v.current == null || typeof ResizeObserver > "u")
      return On;
    var E = (_) => {
      var L, F = _[0];
      if (F != null) {
        var {
          width: Y,
          height: Q
        } = F.contentRect;
        w(Y, Q), (L = y.current) === null || L === void 0 || L.call(y, Y, Q);
      }
    };
    u > 0 && (E = TP(E, u, {
      trailing: !0,
      leading: !1
    }));
    var M = new ResizeObserver(E), {
      width: D,
      height: N
    } = v.current.getBoundingClientRect();
    return w(D, N), M.observe(v.current), () => {
      M.disconnect();
    };
  }, [w, u]);
  var {
    containerWidth: x,
    containerHeight: S
  } = m;
  fa(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
  var {
    calculatedWidth: O,
    calculatedHeight: C
  } = f0(x, S, {
    width: i,
    height: o,
    aspect: r,
    maxHeight: s
  });
  return fa(O != null && O > 0 || C != null && C > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, O, C, i, o, a, l, r), /* @__PURE__ */ P.createElement("div", {
    id: d ? "".concat(d) : void 0,
    className: Pe("recharts-responsive-container", p),
    style: fh(fh({}, g), {}, {
      width: i,
      height: o,
      minWidth: a,
      minHeight: l,
      maxHeight: s
    }),
    ref: v
  }, /* @__PURE__ */ P.createElement("div", {
    style: RP({
      width: i,
      height: o
    })
  }, /* @__PURE__ */ P.createElement(h0, {
    width: O,
    height: C
  }, c)));
}), v0 = /* @__PURE__ */ ut((e, t) => {
  var r = Nu();
  if (dr(r.width) && dr(r.height))
    return e.children;
  var {
    width: n,
    height: i
  } = $P({
    width: e.width,
    height: e.height,
    aspect: e.aspect
  }), {
    calculatedWidth: o,
    calculatedHeight: a
  } = f0(void 0, void 0, {
    width: n,
    height: i,
    aspect: e.aspect,
    maxHeight: e.maxHeight
  });
  return te(o) && te(a) ? /* @__PURE__ */ P.createElement(h0, {
    width: o,
    height: a
  }, e.children) : /* @__PURE__ */ P.createElement(FP, Rc({}, e, {
    width: n,
    height: i,
    ref: t
  }));
});
function Ru(e) {
  if (e)
    return {
      x: e.x,
      y: e.y,
      upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
      lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
      width: e.width,
      height: e.height
    };
}
var to = () => {
  var e, t = dt(), r = oe(OP), n = oe(ul), i = (e = oe(cl)) === null || e === void 0 ? void 0 : e.padding;
  return !t || !n || !i ? r : {
    width: n.width - i.left - i.right,
    height: n.height - i.top - i.bottom,
    x: i.left,
    y: i.top
  };
}, VP = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: 0,
  height: 0,
  brushBottom: 0
}, g0 = () => {
  var e;
  return (e = oe(rt)) !== null && e !== void 0 ? e : VP;
}, y0 = () => oe(Tr), m0 = () => oe(Ir), Se = (e) => e.layout.layoutType, Pn = () => oe(Se), $u = () => {
  var e = Pn();
  if (e === "horizontal" || e === "vertical")
    return e;
}, x0 = (e) => {
  var t = e.layout.layoutType;
  if (t === "centric" || t === "radial")
    return t;
}, KP = () => {
  var e = Pn();
  return e !== void 0;
}, ro = (e) => {
  var t = $e(), r = dt(), {
    width: n,
    height: i
  } = e, o = Nu(), a = n, l = i;
  return o && (a = o.width > 0 ? o.width : n, l = o.height > 0 ? o.height : i), Oe(() => {
    !r && dr(a) && dr(l) && t(GO({
      width: a,
      height: l
    }));
  }, [t, r, a, l]), null;
}, b0 = Symbol.for("immer-nothing"), ph = Symbol.for("immer-draftable"), $t = Symbol.for("immer-state"), HP = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Pt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = HP[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var $i = Object.getPrototypeOf;
function Yn(e) {
  return !!e && !!e[$t];
}
function yn(e) {
  return e ? w0(e) || Array.isArray(e) || !!e[ph] || !!e.constructor?.[ph] || no(e) || fl(e) : !1;
}
var qP = Object.prototype.constructor.toString(), hh = /* @__PURE__ */ new WeakMap();
function w0(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  if (t === null || t === Object.prototype)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  if (r === Object)
    return !0;
  if (typeof r != "function")
    return !1;
  let n = hh.get(r);
  return n === void 0 && (n = Function.toString.call(r), hh.set(r, n)), n === qP;
}
function pa(e, t, r = !0) {
  dl(e) === 0 ? (r ? Reflect.ownKeys(e) : Object.keys(e)).forEach((i) => {
    t(i, e[i], e);
  }) : e.forEach((n, i) => t(i, n, e));
}
function dl(e) {
  const t = e[$t];
  return t ? t.type_ : Array.isArray(e) ? 1 : no(e) ? 2 : fl(e) ? 3 : 0;
}
function $c(e, t) {
  return dl(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function j0(e, t, r) {
  const n = dl(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function UP(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function no(e) {
  return e instanceof Map;
}
function fl(e) {
  return e instanceof Set;
}
function tn(e) {
  return e.copy_ || e.base_;
}
function zc(e, t) {
  if (no(e))
    return new Map(e);
  if (fl(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = w0(e);
  if (t === !0 || t === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(e);
    delete n[$t];
    let i = Reflect.ownKeys(n);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], l = n[a];
      l.writable === !1 && (l.writable = !0, l.configurable = !0), (l.get || l.set) && (n[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: l.enumerable,
        value: e[a]
      });
    }
    return Object.create($i(e), n);
  } else {
    const n = $i(e);
    if (n !== null && r)
      return { ...e };
    const i = Object.create(n);
    return Object.assign(i, e);
  }
}
function zu(e, t = !1) {
  return pl(e) || Yn(e) || !yn(e) || (dl(e) > 1 && Object.defineProperties(e, {
    set: Mo,
    add: Mo,
    clear: Mo,
    delete: Mo
  }), Object.freeze(e), t && Object.values(e).forEach((r) => zu(r, !0))), e;
}
function YP() {
  Pt(2);
}
var Mo = {
  value: YP
};
function pl(e) {
  return e === null || typeof e != "object" ? !0 : Object.isFrozen(e);
}
var GP = {};
function mn(e) {
  const t = GP[e];
  return t || Pt(0, e), t;
}
var zi;
function S0() {
  return zi;
}
function XP(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function vh(e, t) {
  t && (mn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Lc(e) {
  Bc(e), e.drafts_.forEach(ZP), e.drafts_ = null;
}
function Bc(e) {
  e === zi && (zi = e.parent_);
}
function gh(e) {
  return zi = XP(zi, e);
}
function ZP(e) {
  const t = e[$t];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function yh(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[$t].modified_ && (Lc(t), Pt(4)), yn(e) && (e = ha(t, e), t.parent_ || va(t, e)), t.patches_ && mn("Patches").generateReplacementPatches_(
    r[$t].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ha(t, r, []), Lc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== b0 ? e : void 0;
}
function ha(e, t, r) {
  if (pl(t))
    return t;
  const n = e.immer_.shouldUseStrictIteration(), i = t[$t];
  if (!i)
    return pa(
      t,
      (o, a) => mh(e, i, t, o, a, r),
      n
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return va(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const o = i.copy_;
    let a = o, l = !1;
    i.type_ === 3 && (a = new Set(o), o.clear(), l = !0), pa(
      a,
      (s, c) => mh(
        e,
        i,
        o,
        s,
        c,
        r,
        l
      ),
      n
    ), va(e, o, !1), r && e.patches_ && mn("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function mh(e, t, r, n, i, o, a) {
  if (i == null || typeof i != "object" && !a)
    return;
  const l = pl(i);
  if (!(l && !a)) {
    if (process.env.NODE_ENV !== "production" && i === r && Pt(5), Yn(i)) {
      const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
      !$c(t.assigned_, n) ? o.concat(n) : void 0, c = ha(e, i, s);
      if (j0(r, n, c), Yn(c))
        e.canAutoFreeze_ = !1;
      else
        return;
    } else a && r.add(i);
    if (yn(i) && !l) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1 || t && t.base_ && t.base_[n] === i && l)
        return;
      ha(e, i), (!t || !t.scope_.parent_) && typeof n != "symbol" && (no(r) ? r.has(n) : Object.prototype.propertyIsEnumerable.call(r, n)) && va(e, i);
    }
  }
}
function va(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && zu(t, r);
}
function JP(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : S0(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = n, o = Lu;
  r && (i = [n], o = Li);
  const { revoke: a, proxy: l } = Proxy.revocable(i, o);
  return n.draft_ = l, n.revoke_ = a, l;
}
var Lu = {
  get(e, t) {
    if (t === $t)
      return e;
    const r = tn(e);
    if (!$c(r, t))
      return QP(e, r, t);
    const n = r[t];
    return e.finalized_ || !yn(n) ? n : n === Vs(e.base_, t) ? (Ks(e), e.copy_[t] = Fc(n, e)) : n;
  },
  has(e, t) {
    return t in tn(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(tn(e));
  },
  set(e, t, r) {
    const n = O0(tn(e), t);
    if (n?.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const i = Vs(tn(e), t), o = i?.[$t];
      if (o && o.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (UP(r, i) && (r !== void 0 || $c(e.base_, t)))
        return !0;
      Ks(e), Wc(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Vs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ks(e), Wc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = tn(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    Pt(11);
  },
  getPrototypeOf(e) {
    return $i(e.base_);
  },
  setPrototypeOf() {
    Pt(12);
  }
}, Li = {};
pa(Lu, (e, t) => {
  Li[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Li.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Pt(13), Li.set.call(this, e, t, void 0);
};
Li.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Pt(14), Lu.set.call(this, e[0], t, r, e[0]);
};
function Vs(e, t) {
  const r = e[$t];
  return (r ? tn(r) : e)[t];
}
function QP(e, t, r) {
  const n = O0(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    n.get?.call(e.draft_)
  ) : void 0;
}
function O0(e, t) {
  if (!(t in e))
    return;
  let r = $i(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = $i(r);
  }
}
function Wc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Wc(e.parent_));
}
function Ks(e) {
  e.copy_ || (e.copy_ = zc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var eC = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !0, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const o = r;
        r = t;
        const a = this;
        return function(s = o, ...c) {
          return a.produce(s, (u) => r.call(this, u, ...c));
        };
      }
      typeof r != "function" && Pt(6), n !== void 0 && typeof n != "function" && Pt(7);
      let i;
      if (yn(t)) {
        const o = gh(this), a = Fc(t, void 0);
        let l = !0;
        try {
          i = r(a), l = !1;
        } finally {
          l ? Lc(o) : Bc(o);
        }
        return vh(o, n), yh(i, o);
      } else if (!t || typeof t != "object") {
        if (i = r(t), i === void 0 && (i = t), i === b0 && (i = void 0), this.autoFreeze_ && zu(i, !0), n) {
          const o = [], a = [];
          mn("Patches").generateReplacementPatches_(t, i, o, a), n(o, a);
        }
        return i;
      } else
        Pt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (a, ...l) => this.produceWithPatches(a, (s) => t(s, ...l));
      let n, i;
      return [this.produce(t, r, (a, l) => {
        n = a, i = l;
      }), n, i];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy), typeof e?.useStrictIteration == "boolean" && this.setUseStrictIteration(e.useStrictIteration);
  }
  createDraft(e) {
    yn(e) || Pt(8), Yn(e) && (e = tC(e));
    const t = gh(this), r = Fc(e, void 0);
    return r[$t].isManual_ = !0, Bc(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[$t];
    (!r || !r.isManual_) && Pt(9);
    const { scope_: n } = r;
    return vh(n, t), yh(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */
  setUseStrictIteration(e) {
    this.useStrictIteration_ = e;
  }
  shouldUseStrictIteration() {
    return this.useStrictIteration_;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const i = t[r];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = mn("Patches").applyPatches_;
    return Yn(e) ? n(e, t) : this.produce(
      e,
      (i) => n(i, t)
    );
  }
};
function Fc(e, t) {
  const r = no(e) ? mn("MapSet").proxyMap_(e, t) : fl(e) ? mn("MapSet").proxySet_(e, t) : JP(e, t);
  return (t ? t.scope_ : S0()).drafts_.push(r), r;
}
function tC(e) {
  return Yn(e) || Pt(10, e), P0(e);
}
function P0(e) {
  if (!yn(e) || pl(e))
    return e;
  const t = e[$t];
  let r, n = !0;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = zc(e, t.scope_.immer_.useStrictShallowCopy_), n = t.scope_.immer_.shouldUseStrictIteration();
  } else
    r = zc(e, !0);
  return pa(
    r,
    (i, o) => {
      j0(r, i, P0(o));
    },
    n
  ), t && (t.finalized_ = !1), r;
}
var rC = new eC();
rC.produce;
var nC = {
  settings: {
    layout: "horizontal",
    align: "center",
    verticalAlign: "middle",
    itemSorter: "value"
  },
  size: {
    width: 0,
    height: 0
  },
  payload: []
}, C0 = gt({
  name: "legend",
  initialState: nC,
  reducers: {
    setLegendSize(e, t) {
      e.size.width = t.payload.width, e.size.height = t.payload.height;
    },
    setLegendSettings(e, t) {
      e.settings.align = t.payload.align, e.settings.layout = t.payload.layout, e.settings.verticalAlign = t.payload.verticalAlign, e.settings.itemSorter = t.payload.itemSorter;
    },
    addLegendPayload: {
      reducer(e, t) {
        e.payload.push(t.payload);
      },
      prepare: De()
    },
    replaceLegendPayload: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Kt(e).payload.indexOf(r);
        i > -1 && (e.payload[i] = n);
      },
      prepare: De()
    },
    removeLegendPayload: {
      reducer(e, t) {
        var r = Kt(e).payload.indexOf(t.payload);
        r > -1 && e.payload.splice(r, 1);
      },
      prepare: De()
    }
  }
}), {
  setLegendSize: YR,
  setLegendSettings: GR,
  addLegendPayload: iC,
  replaceLegendPayload: oC,
  removeLegendPayload: aC
} = C0.actions, lC = C0.reducer, Do = { exports: {} }, Hs = {};
var xh;
function sC() {
  if (xh) return Hs;
  xh = 1;
  var e = Ke;
  function t(s, c) {
    return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, l = e.useDebugValue;
  return Hs.useSyncExternalStoreWithSelector = function(s, c, u, d, p) {
    var h = i(null);
    if (h.current === null) {
      var g = { hasValue: !1, value: null };
      h.current = g;
    } else g = h.current;
    h = a(
      function() {
        function y(S) {
          if (!m) {
            if (m = !0, b = S, S = d(S), p !== void 0 && g.hasValue) {
              var O = g.value;
              if (p(O, S))
                return w = O;
            }
            return w = S;
          }
          if (O = w, r(b, S)) return O;
          var C = d(S);
          return p !== void 0 && p(O, C) ? (b = S, O) : (b = S, w = C);
        }
        var m = !1, b, w, x = u === void 0 ? null : u;
        return [
          function() {
            return y(c());
          },
          x === null ? void 0 : function() {
            return y(x());
          }
        ];
      },
      [c, u, d, p]
    );
    var v = n(s, h[0], h[1]);
    return o(
      function() {
        g.hasValue = !0, g.value = v;
      },
      [v]
    ), l(v), v;
  }, Hs;
}
var qs = {};
var bh;
function cC() {
  return bh || (bh = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(s, c) {
      return s === c && (s !== 0 || 1 / s === 1 / c) || s !== s && c !== c;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = Ke, r = typeof Object.is == "function" ? Object.is : e, n = t.useSyncExternalStore, i = t.useRef, o = t.useEffect, a = t.useMemo, l = t.useDebugValue;
    qs.useSyncExternalStoreWithSelector = function(s, c, u, d, p) {
      var h = i(null);
      if (h.current === null) {
        var g = { hasValue: !1, value: null };
        h.current = g;
      } else g = h.current;
      h = a(
        function() {
          function y(S) {
            if (!m) {
              if (m = !0, b = S, S = d(S), p !== void 0 && g.hasValue) {
                var O = g.value;
                if (p(O, S))
                  return w = O;
              }
              return w = S;
            }
            if (O = w, r(b, S))
              return O;
            var C = d(S);
            return p !== void 0 && p(O, C) ? (b = S, O) : (b = S, w = C);
          }
          var m = !1, b, w, x = u === void 0 ? null : u;
          return [
            function() {
              return y(c());
            },
            x === null ? void 0 : function() {
              return y(x());
            }
          ];
        },
        [c, u, d, p]
      );
      var v = n(s, h[0], h[1]);
      return o(
        function() {
          g.hasValue = !0, g.value = v;
        },
        [v]
      ), l(v), v;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), qs;
}
var wh;
function uC() {
  return wh || (wh = 1, process.env.NODE_ENV === "production" ? Do.exports = sC() : Do.exports = cC()), Do.exports;
}
uC();
function dC(e) {
  e();
}
function fC() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      dC(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let n = e;
      for (; n; )
        r.push(n), n = n.next;
      return r;
    },
    subscribe(r) {
      let n = !0;
      const i = t = {
        callback: r,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !n || e === null || (n = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var jh = {
  notify() {
  },
  get: () => []
};
function pC(e, t) {
  let r, n = jh, i = 0, o = !1;
  function a(v) {
    u();
    const y = n.subscribe(v);
    let m = !1;
    return () => {
      m || (m = !0, y(), d());
    };
  }
  function l() {
    n.notify();
  }
  function s() {
    g.onStateChange && g.onStateChange();
  }
  function c() {
    return o;
  }
  function u() {
    i++, r || (r = e.subscribe(s), n = fC());
  }
  function d() {
    i--, r && i === 0 && (r(), r = void 0, n.clear(), n = jh);
  }
  function p() {
    o || (o = !0, u());
  }
  function h() {
    o && (o = !1, d());
  }
  const g = {
    addNestedSub: a,
    notifyNestedSubs: l,
    handleChangeWrapper: s,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => n
  };
  return g;
}
var hC = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vC = /* @__PURE__ */ hC(), gC = () => typeof navigator < "u" && navigator.product === "ReactNative", yC = /* @__PURE__ */ gC(), mC = () => vC || yC ? P.useLayoutEffect : P.useEffect, xC = /* @__PURE__ */ mC();
function Sh(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function bC(e, t) {
  if (Sh(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (let i = 0; i < r.length; i++)
    if (!Object.prototype.hasOwnProperty.call(t, r[i]) || !Sh(e[r[i]], t[r[i]]))
      return !1;
  return !0;
}
var wC = /* @__PURE__ */ Symbol.for("react-redux-context"), jC = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function SC() {
  if (!P.createContext) return {};
  const e = jC[wC] ??= /* @__PURE__ */ new Map();
  let t = e.get(P.createContext);
  return t || (t = P.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(P.createContext, t)), t;
}
var OC = /* @__PURE__ */ SC();
function PC(e) {
  const { children: t, context: r, serverState: n, store: i } = e, o = P.useMemo(() => {
    const s = pC(i), c = {
      store: i,
      subscription: s,
      getServerState: n ? () => n : void 0
    };
    if (process.env.NODE_ENV === "production")
      return c;
    {
      const { identityFunctionCheck: u = "once", stabilityCheck: d = "once" } = e;
      return /* @__PURE__ */ Object.assign(c, {
        stabilityCheck: d,
        identityFunctionCheck: u
      });
    }
  }, [i, n]), a = P.useMemo(() => i.getState(), [i]);
  xC(() => {
    const { subscription: s } = o;
    return s.onStateChange = s.notifyNestedSubs, s.trySubscribe(), a !== i.getState() && s.notifyNestedSubs(), () => {
      s.tryUnsubscribe(), s.onStateChange = void 0;
    };
  }, [o, a]);
  const l = r || OC;
  return /* @__PURE__ */ P.createElement(l.Provider, { value: o }, t);
}
var CC = PC, _C = /* @__PURE__ */ new Set([
  "axisLine",
  "tickLine",
  "activeBar",
  "activeDot",
  "activeLabel",
  "activeShape",
  "allowEscapeViewBox",
  "background",
  "cursor",
  "dot",
  "label",
  "line",
  "margin",
  "padding",
  "position",
  "shape",
  "style",
  "tick",
  "wrapperStyle",
  // radius can be an array of 4 numbers, easy to compare shallowly
  "radius",
  "throttledEvents"
]);
function EC(e, t) {
  return e == null && t == null ? !0 : typeof e == "number" && typeof t == "number" ? e === t || e !== e && t !== t : e === t;
}
function io(e, t) {
  var r = /* @__PURE__ */ new Set([...Object.keys(e), ...Object.keys(t)]);
  for (var n of r)
    if (_C.has(n)) {
      if (e[n] == null && t[n] == null)
        continue;
      if (!bC(e[n], t[n]))
        return !1;
    } else if (!EC(e[n], t[n]))
      return !1;
  return !0;
}
function Vc() {
  return Vc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Vc.apply(null, arguments);
}
function Oh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Oh(Object(r), !0).forEach(function(n) {
      kC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Oh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kC(e, t, r) {
  return (t = AC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AC(e) {
  var t = TC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IC(e) {
  return Array.isArray(e) && Ut(e[0]) && Ut(e[1]) ? e.join(" ~ ") : e;
}
var In = {
  separator: " : ",
  contentStyle: {
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  },
  itemStyle: {
    display: "block",
    paddingTop: 4,
    paddingBottom: 4,
    color: "#000"
  },
  labelStyle: {},
  accessibilityLayer: !1
};
function MC(e, t) {
  return t == null ? e : Za(e, t);
}
var DC = (e) => {
  var {
    separator: t = In.separator,
    contentStyle: r,
    itemStyle: n,
    labelStyle: i = In.labelStyle,
    payload: o,
    formatter: a,
    itemSorter: l,
    wrapperClassName: s,
    labelClassName: c,
    label: u,
    labelFormatter: d,
    accessibilityLayer: p = In.accessibilityLayer
  } = e, h = () => {
    if (o && o.length) {
      var S = {
        padding: 0,
        margin: 0
      }, O = MC(o, l), C = O.map((E, M) => {
        if (!E || E.type === "none")
          return null;
        var D = E.formatter || a || IC, {
          value: N,
          name: _
        } = E, L = N, F = _;
        if (D) {
          var Y = D(N, _, E, M, o);
          if (Array.isArray(Y))
            [L, F] = Y;
          else if (Y != null)
            L = Y;
          else
            return null;
        }
        var Q = vi(vi({}, In.itemStyle), {}, {
          color: E.color || In.itemStyle.color
        }, n);
        return /* @__PURE__ */ P.createElement("li", {
          className: "recharts-tooltip-item",
          key: "tooltip-item-".concat(M),
          style: Q
        }, Ut(F) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-name"
        }, F) : null, Ut(F) ? /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-separator"
        }, t) : null, /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-value"
        }, L), /* @__PURE__ */ P.createElement("span", {
          className: "recharts-tooltip-item-unit"
        }, E.unit || ""));
      });
      return /* @__PURE__ */ P.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: S
      }, C);
    }
    return null;
  }, g = vi(vi({}, In.contentStyle), r), v = vi({
    margin: 0
  }, i), y = !Le(u), m = y ? u : "", b = Pe("recharts-default-tooltip", s), w = Pe("recharts-tooltip-label", c);
  y && d && o !== void 0 && o !== null && (m = d(u, o));
  var x = p ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ P.createElement("div", Vc({
    className: b,
    style: g
  }, x), /* @__PURE__ */ P.createElement("p", {
    className: w,
    style: v
  }, /* @__PURE__ */ P.isValidElement(m) ? m : "".concat(m)), h());
}, gi = "recharts-tooltip-wrapper", NC = {
  visibility: "hidden"
};
function RC(e) {
  var {
    coordinate: t,
    translateX: r,
    translateY: n
  } = e;
  return Pe(gi, {
    ["".concat(gi, "-right")]: te(r) && t && te(t.x) && r >= t.x,
    ["".concat(gi, "-left")]: te(r) && t && te(t.x) && r < t.x,
    ["".concat(gi, "-bottom")]: te(n) && t && te(t.y) && n >= t.y,
    ["".concat(gi, "-top")]: te(n) && t && te(t.y) && n < t.y
  });
}
function Ph(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    key: n,
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l,
    viewBox: s,
    viewBoxDimension: c
  } = e;
  if (o && te(o[n]))
    return o[n];
  var u = r[n] - l - (i > 0 ? i : 0), d = r[n] + i;
  if (t[n])
    return a[n] ? u : d;
  var p = s[n];
  if (p == null)
    return 0;
  if (a[n]) {
    var h = u, g = p;
    return h < g ? Math.max(d, p) : Math.max(u, p);
  }
  if (c == null)
    return 0;
  var v = d + l, y = p + c;
  return v > y ? Math.max(u, p) : Math.max(d, p);
}
function $C(e) {
  var {
    translateX: t,
    translateY: r,
    useTranslate3d: n
  } = e;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function zC(e) {
  var {
    allowEscapeViewBox: t,
    coordinate: r,
    offsetTop: n,
    offsetLeft: i,
    position: o,
    reverseDirection: a,
    tooltipBox: l,
    useTranslate3d: s,
    viewBox: c
  } = e, u, d, p;
  return l.height > 0 && l.width > 0 && r ? (d = Ph({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offset: i,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.width,
    viewBox: c,
    viewBoxDimension: c.width
  }), p = Ph({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offset: n,
    position: o,
    reverseDirection: a,
    tooltipDimension: l.height,
    viewBox: c,
    viewBoxDimension: c.height
  }), u = $C({
    translateX: d,
    translateY: p,
    useTranslate3d: s
  })) : u = NC, {
    cssProperties: u,
    cssClasses: RC({
      translateX: d,
      translateY: p,
      coordinate: r
    })
  };
}
var LC = () => !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout), oo = {
  isSsr: LC()
};
function _0() {
  var [e, t] = W(() => oo.isSsr || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return Oe(() => {
    if (window.matchMedia) {
      var r = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
        t(r.matches);
      };
      return r.addEventListener("change", n), () => {
        r.removeEventListener("change", n);
      };
    }
  }, []), e;
}
function Ch(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ch(Object(r), !0).forEach(function(n) {
      BC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ch(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BC(e, t, r) {
  return (t = WC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WC(e) {
  var t = FC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function VC(e) {
  if (!(e.prefersReducedMotion && e.isAnimationActive === "auto") && e.isAnimationActive && e.active)
    return "transform ".concat(e.animationDuration, "ms ").concat(e.animationEasing);
}
function KC(e) {
  var t, r, n, i, o, a, l = _0(), [s, c] = P.useState(() => ({
    dismissed: !1,
    dismissedAtCoordinate: {
      x: 0,
      y: 0
    }
  }));
  P.useEffect(() => {
    var g = (v) => {
      if (v.key === "Escape") {
        var y, m, b, w;
        c({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (y = (m = e.coordinate) === null || m === void 0 ? void 0 : m.x) !== null && y !== void 0 ? y : 0,
            y: (b = (w = e.coordinate) === null || w === void 0 ? void 0 : w.y) !== null && b !== void 0 ? b : 0
          }
        });
      }
    };
    return document.addEventListener("keydown", g), () => {
      document.removeEventListener("keydown", g);
    };
  }, [(t = e.coordinate) === null || t === void 0 ? void 0 : t.x, (r = e.coordinate) === null || r === void 0 ? void 0 : r.y]), s.dismissed && (((n = (i = e.coordinate) === null || i === void 0 ? void 0 : i.x) !== null && n !== void 0 ? n : 0) !== s.dismissedAtCoordinate.x || ((o = (a = e.coordinate) === null || a === void 0 ? void 0 : a.y) !== null && o !== void 0 ? o : 0) !== s.dismissedAtCoordinate.y) && c(Mn(Mn({}, s), {}, {
    dismissed: !1
  }));
  var {
    cssClasses: u,
    cssProperties: d
  } = zC({
    allowEscapeViewBox: e.allowEscapeViewBox,
    coordinate: e.coordinate,
    offsetLeft: typeof e.offset == "number" ? e.offset : e.offset.x,
    offsetTop: typeof e.offset == "number" ? e.offset : e.offset.y,
    position: e.position,
    reverseDirection: e.reverseDirection,
    tooltipBox: {
      height: e.lastBoundingBox.height,
      width: e.lastBoundingBox.width
    },
    useTranslate3d: e.useTranslate3d,
    viewBox: e.viewBox
  }), p = e.hasPortalFromProps ? {} : Mn(Mn({
    transition: VC({
      prefersReducedMotion: l,
      isAnimationActive: e.isAnimationActive,
      active: e.active,
      animationDuration: e.animationDuration,
      animationEasing: e.animationEasing
    })
  }, d), {}, {
    pointerEvents: "none",
    position: "absolute",
    top: 0,
    left: 0
  }), h = Mn(Mn({}, p), {}, {
    visibility: !s.dismissed && e.active && e.hasPayload ? "visible" : "hidden"
  }, e.wrapperStyle);
  return /* @__PURE__ */ P.createElement("div", {
    // @ts-expect-error typescript library does not recognize xmlns attribute, but it's required for an HTML chunk inside SVG.
    xmlns: "http://www.w3.org/1999/xhtml",
    tabIndex: -1,
    className: u,
    style: h,
    ref: e.innerRef
  }, e.children);
}
var HC = /* @__PURE__ */ P.memo(KC), E0 = () => {
  var e;
  return (e = oe((t) => t.rootProps.accessibilityLayer)) !== null && e !== void 0 ? e : !0;
};
function Kc() {
  return Kc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kc.apply(null, arguments);
}
function _h(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Eh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _h(Object(r), !0).forEach(function(n) {
      qC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _h(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qC(e, t, r) {
  return (t = UC(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UC(e) {
  var t = YC(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function YC(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var kh = {
  curveBasisClosed: ij,
  curveBasisOpen: oj,
  curveBasis: nj,
  curveBumpX: V2,
  curveBumpY: K2,
  curveLinearClosed: aj,
  curveLinear: Ga,
  curveMonotoneX: lj,
  curveMonotoneY: sj,
  curveNatural: cj,
  curveStep: uj,
  curveStepAfter: fj,
  curveStepBefore: dj
}, ga = (e) => pe(e.x) && pe(e.y), Ah = (e) => e.base != null && ga(e.base) && ga(e), yi = (e) => e.x, mi = (e) => e.y, GC = (e, t) => {
  if (typeof e == "function")
    return e;
  var r = "curve".concat(Gi(e));
  if ((r === "curveMonotone" || r === "curveBump") && t) {
    var n = kh["".concat(r).concat(t === "vertical" ? "Y" : "X")];
    if (n)
      return n;
  }
  return kh[r] || Ga;
}, Th = {
  connectNulls: !1,
  type: "linear"
}, XC = (e) => {
  var {
    type: t = Th.type,
    points: r = [],
    baseLine: n,
    layout: i,
    connectNulls: o = Th.connectNulls
  } = e, a = GC(t, i), l = o ? r.filter(ga) : r;
  if (Array.isArray(n)) {
    var s, c = r.map((g, v) => Eh(Eh({}, g), {}, {
      base: n[v]
    }));
    i === "vertical" ? s = So().y(mi).x1(yi).x0((g) => g.base.x) : s = So().x(yi).y1(mi).y0((g) => g.base.y);
    var u = s.defined(Ah).curve(a), d = o ? c.filter(Ah) : c;
    return u(d);
  }
  var p;
  i === "vertical" && te(n) ? p = So().y(mi).x1(yi).x0(n) : te(n) ? p = So().x(yi).y1(mi).y0(n) : p = Zy().x(yi).y(mi);
  var h = p.defined(ga).curve(a);
  return h(l);
}, ki = (e) => {
  var {
    className: t,
    points: r,
    path: n,
    pathRef: i
  } = e, o = Pn();
  if ((!r || !r.length) && !n)
    return null;
  var a = {
    type: e.type,
    points: e.points,
    baseLine: e.baseLine,
    layout: e.layout || o,
    connectNulls: e.connectNulls
  }, l = r && r.length ? XC(a) : n;
  return /* @__PURE__ */ P.createElement("path", Kc({}, qt(e), Ou(e), {
    className: Pe("recharts-curve", t),
    d: l === null ? void 0 : l,
    ref: i
  }));
}, ZC = ["x", "y", "top", "left", "width", "height", "className"];
function Hc() {
  return Hc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hc.apply(null, arguments);
}
function Ih(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function JC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ih(Object(r), !0).forEach(function(n) {
      QC(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ih(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function QC(e, t, r) {
  return (t = e_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function e_(e) {
  var t = t_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function t_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function r_(e, t) {
  if (e == null) return {};
  var r, n, i = n_(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function n_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var i_ = (e, t, r, n, i, o) => "M".concat(e, ",").concat(i, "v").concat(n, "M").concat(o, ",").concat(t, "h").concat(r), o_ = (e) => {
  var {
    x: t = 0,
    y: r = 0,
    top: n = 0,
    left: i = 0,
    width: o = 0,
    height: a = 0,
    className: l
  } = e, s = r_(e, ZC), c = JC({
    x: t,
    y: r,
    top: n,
    left: i,
    width: o,
    height: a
  }, s);
  return !te(t) || !te(r) || !te(o) || !te(a) || !te(n) || !te(i) ? null : /* @__PURE__ */ P.createElement("path", Hc({}, vt(c), {
    className: Pe("recharts-cross", l),
    d: i_(t, r, o, a, n, i)
  }));
};
function a_(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function Mh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mh(Object(r), !0).forEach(function(n) {
      l_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function l_(e, t, r) {
  return (t = s_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function s_(e) {
  var t = c_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function c_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var u_ = (e) => e.replace(/([A-Z])/g, (t) => "-".concat(t.toLowerCase())), k0 = (e, t, r) => e.map((n) => "".concat(u_(n), " ").concat(t, "ms ").concat(r)).join(","), d_ = (e, t) => [Object.keys(e), Object.keys(t)].reduce((r, n) => r.filter((i) => n.includes(i))), Bi = (e, t) => Object.keys(t).reduce((r, n) => Dh(Dh({}, r), {}, {
  [n]: e(n, t[n])
}), {});
function Nh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nh(Object(r), !0).forEach(function(n) {
      f_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function f_(e, t, r) {
  return (t = p_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function p_(e) {
  var t = h_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function h_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ya = (e, t, r) => e + (t - e) * r, qc = (e) => {
  var {
    from: t,
    to: r
  } = e;
  return t !== r;
}, A0 = (e, t, r) => {
  var n = Bi((i, o) => {
    if (qc(o)) {
      var [a, l] = e(o.from, o.to, o.velocity);
      return Xe(Xe({}, o), {}, {
        from: a,
        velocity: l
      });
    }
    return o;
  }, t);
  return r < 1 ? Bi((i, o) => qc(o) && n[i] != null ? Xe(Xe({}, o), {}, {
    velocity: ya(o.velocity, n[i].velocity, r),
    from: ya(o.from, n[i].from, r)
  }) : o, t) : A0(e, n, r - 1);
};
function v_(e, t, r, n, i, o) {
  var a, l = n.reduce((p, h) => Xe(Xe({}, p), {}, {
    [h]: {
      from: e[h],
      velocity: 0,
      to: t[h]
    }
  }), {}), s = () => Bi((p, h) => h.from, l), c = () => !Object.values(l).filter(qc).length, u = null, d = (p) => {
    a || (a = p);
    var h = p - a, g = h / r.dt;
    l = A0(r, l, g), i(Xe(Xe(Xe({}, e), t), s())), a = p, c() || (u = o.setTimeout(d));
  };
  return () => (u = o.setTimeout(d), () => {
    var p;
    (p = u) === null || p === void 0 || p();
  });
}
function g_(e, t, r, n, i, o, a) {
  var l = null, s = i.reduce((d, p) => {
    var h = e[p], g = t[p];
    return h == null || g == null ? d : Xe(Xe({}, d), {}, {
      [p]: [h, g]
    });
  }, {}), c, u = (d) => {
    c || (c = d);
    var p = (d - c) / n, h = Bi((v, y) => ya(...y, r(p)), s);
    if (o(Xe(Xe(Xe({}, e), t), h)), p < 1)
      l = a.setTimeout(u);
    else {
      var g = Bi((v, y) => ya(...y, r(1)), s);
      o(Xe(Xe(Xe({}, e), t), g));
    }
  };
  return () => (l = a.setTimeout(u), () => {
    var d;
    (d = l) === null || d === void 0 || d();
  });
}
const y_ = (e, t, r, n, i, o) => {
  var a = d_(e, t);
  return r == null ? () => (i(Xe(Xe({}, e), t)), () => {
  }) : r.isStepper === !0 ? v_(e, t, r, a, i, o) : g_(e, t, r, n, a, i, o);
};
var ma = 1e-4, T0 = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1], I0 = (e, t) => e.map((r, n) => r * t ** n).reduce((r, n) => r + n), Rh = (e, t) => (r) => {
  var n = T0(e, t);
  return I0(n, r);
}, m_ = (e, t) => (r) => {
  var n = T0(e, t), i = [...n.map((o, a) => o * a).slice(1), 0];
  return I0(i, r);
}, x_ = (e) => {
  var t, r = e.split("(");
  if (r.length !== 2 || r[0] !== "cubic-bezier")
    return null;
  var n = (t = r[1]) === null || t === void 0 || (t = t.split(")")[0]) === null || t === void 0 ? void 0 : t.split(",");
  if (n == null || n.length !== 4)
    return null;
  var i = n.map((o) => parseFloat(o));
  return [i[0], i[1], i[2], i[3]];
}, b_ = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        return [0, 0, 1, 1];
      case "ease":
        return [0.25, 0.1, 0.25, 1];
      case "ease-in":
        return [0.42, 0, 1, 1];
      case "ease-out":
        return [0.42, 0, 0.58, 1];
      case "ease-in-out":
        return [0, 0, 0.58, 1];
      default: {
        var i = x_(r[0]);
        if (i)
          return i;
      }
    }
  return r.length === 4 ? r : [0, 0, 1, 1];
}, w_ = (e, t, r, n) => {
  var i = Rh(e, r), o = Rh(t, n), a = m_(e, r), l = (c) => c > 1 ? 1 : c < 0 ? 0 : c, s = (c) => {
    for (var u = c > 1 ? 1 : c, d = u, p = 0; p < 8; ++p) {
      var h = i(d) - u, g = a(d);
      if (Math.abs(h - u) < ma || g < ma)
        return o(d);
      d = l(d - h / g);
    }
    return o(d);
  };
  return s.isStepper = !1, s;
}, $h = function() {
  return w_(...b_(...arguments));
}, j_ = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, {
    stiff: r = 100,
    damping: n = 8,
    dt: i = 17
  } = t, o = (a, l, s) => {
    var c = -(a - l) * r, u = s * n, d = s + (c - u) * i / 1e3, p = s * i / 1e3 + a;
    return Math.abs(p - l) < ma && Math.abs(d) < ma ? [l, 0] : [p, d];
  };
  return o.isStepper = !0, o.dt = i, o;
}, S_ = (e) => {
  if (typeof e == "string")
    switch (e) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return $h(e);
      case "spring":
        return j_();
      default:
        if (e.split("(")[0] === "cubic-bezier")
          return $h(e);
    }
  return typeof e == "function" ? e : null;
};
function O_(e) {
  var t, r = () => null, n = !1, i = null, o = (a) => {
    if (!n) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var l = a, [s, ...c] = l;
        if (typeof s == "number") {
          i = e.setTimeout(o.bind(null, c), s);
          return;
        }
        o(s), i = e.setTimeout(o.bind(null, c));
        return;
      }
      typeof a == "string" && (t = a, r(t)), typeof a == "object" && (t = a, r(t)), typeof a == "function" && a();
    }
  };
  return {
    stop: () => {
      n = !0;
    },
    start: (a) => {
      n = !1, i && (i(), i = null), o(a);
    },
    subscribe: (a) => (r = a, () => {
      r = () => null;
    }),
    getTimeoutController: () => e
  };
}
class P_ {
  setTimeout(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = performance.now(), i = null, o = (a) => {
      a - n >= r ? t(a) : typeof requestAnimationFrame == "function" && (i = requestAnimationFrame(o));
    };
    return i = requestAnimationFrame(o), () => {
      i != null && cancelAnimationFrame(i);
    };
  }
}
function C_() {
  return O_(new P_());
}
var __ = /* @__PURE__ */ At(C_);
function E_(e, t) {
  var r = zt(__);
  return tr(() => t ?? r(e), [e, t, r]);
}
var k_ = {
  begin: 0,
  duration: 1e3,
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  onAnimationEnd: () => {
  },
  onAnimationStart: () => {
  }
}, zh = {
  t: 0
}, Us = {
  t: 1
};
function hl(e) {
  var t = jt(e, k_), {
    isActive: r,
    canBegin: n,
    duration: i,
    easing: o,
    begin: a,
    onAnimationEnd: l,
    onAnimationStart: s,
    children: c
  } = t, u = _0(), d = r === "auto" ? !oo.isSsr && !u : r, p = E_(t.animationId, t.animationManager), [h, g] = W(d ? zh : Us), v = ve(null);
  return Oe(() => {
    d || g(Us);
  }, [d]), Oe(() => {
    if (!d || !n)
      return On;
    var y = y_(zh, Us, S_(o), i, g, p.getTimeoutController()), m = () => {
      v.current = y();
    };
    return p.start([s, a, m, i, l]), () => {
      p.stop(), v.current && v.current(), l();
    };
  }, [d, n, i, o, a, s, l, p]), c(h.t);
}
function vl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "animation-", r = ve(Mi(t)), n = ve(e);
  return n.current !== e && (r.current = Mi(t), n.current = e), r.current;
}
var A_ = ["radius"], T_ = ["radius"], Lh, Bh, Wh, Fh, Vh, Kh, Hh, qh, Uh, Yh;
function Gh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gh(Object(r), !0).forEach(function(n) {
      I_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Gh(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function I_(e, t, r) {
  return (t = M_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function M_(e) {
  var t = D_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function D_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xa() {
  return xa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, xa.apply(null, arguments);
}
function Zh(e, t) {
  if (e == null) return {};
  var r, n, i = N_(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function N_(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ir(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var Jh = (e, t, r, n, i) => {
  var o = Fr(r), a = Fr(n), l = Math.min(Math.abs(o) / 2, Math.abs(a) / 2), s = a >= 0 ? 1 : -1, c = o >= 0 ? 1 : -1, u = a >= 0 && o >= 0 || a < 0 && o < 0 ? 1 : 0, d;
  if (l > 0 && Array.isArray(i)) {
    for (var p = [0, 0, 0, 0], h = 0, g = 4; h < g; h++) {
      var v, y = (v = i[h]) !== null && v !== void 0 ? v : 0;
      p[h] = y > l ? l : y;
    }
    d = Fe(Lh || (Lh = ir(["M", ",", ""])), e, t + s * p[0]), p[0] > 0 && (d += Fe(Bh || (Bh = ir(["A ", ",", ",0,0,", ",", ",", ""])), p[0], p[0], u, e + c * p[0], t)), d += Fe(Wh || (Wh = ir(["L ", ",", ""])), e + r - c * p[1], t), p[1] > 0 && (d += Fe(Fh || (Fh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[1], p[1], u, e + r, t + s * p[1])), d += Fe(Vh || (Vh = ir(["L ", ",", ""])), e + r, t + n - s * p[2]), p[2] > 0 && (d += Fe(Kh || (Kh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[2], p[2], u, e + r - c * p[2], t + n)), d += Fe(Hh || (Hh = ir(["L ", ",", ""])), e + c * p[3], t + n), p[3] > 0 && (d += Fe(qh || (qh = ir(["A ", ",", ",0,0,", `,
        `, ",", ""])), p[3], p[3], u, e, t + n - s * p[3])), d += "Z";
  } else if (l > 0 && i === +i && i > 0) {
    var m = Math.min(l, i);
    d = Fe(Uh || (Uh = ir(["M ", ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", `
            L `, ",", `
            A `, ",", ",0,0,", ",", ",", " Z"])), e, t + s * m, m, m, u, e + c * m, t, e + r - c * m, t, m, m, u, e + r, t + s * m, e + r, t + n - s * m, m, m, u, e + r - c * m, t + n, e + c * m, t + n, m, m, u, e, t + n - s * m);
  } else
    d = Fe(Yh || (Yh = ir(["M ", ",", " h ", " v ", " h ", " Z"])), e, t, r, n, -r);
  return d;
}, Qh = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, M0 = (e) => {
  var t = jt(e, Qh), r = ve(null), [n, i] = W(-1);
  Oe(() => {
    if (r.current && r.current.getTotalLength)
      try {
        var ie = r.current.getTotalLength();
        ie && i(ie);
      } catch {
      }
  }, []);
  var {
    x: o,
    y: a,
    width: l,
    height: s,
    radius: c,
    className: u
  } = t, {
    animationEasing: d,
    animationDuration: p,
    animationBegin: h,
    isAnimationActive: g,
    isUpdateAnimationActive: v
  } = t, y = ve(l), m = ve(s), b = ve(o), w = ve(a), x = tr(() => ({
    x: o,
    y: a,
    width: l,
    height: s,
    radius: c
  }), [o, a, l, s, c]), S = vl(x, "rectangle-");
  if (o !== +o || a !== +a || l !== +l || s !== +s || l === 0 || s === 0)
    return null;
  var O = Pe("recharts-rectangle", u);
  if (!v) {
    var C = vt(t), {
      radius: E
    } = C, M = Zh(C, A_);
    return /* @__PURE__ */ P.createElement("path", xa({}, M, {
      x: Fr(o),
      y: Fr(a),
      width: Fr(l),
      height: Fr(s),
      radius: typeof c == "number" ? c : void 0,
      className: O,
      d: Jh(o, a, l, s, c)
    }));
  }
  var D = y.current, N = m.current, _ = b.current, L = w.current, F = "0px ".concat(n === -1 ? 1 : n, "px"), Y = "".concat(n, "px ").concat(n, "px"), Q = k0(["strokeDasharray"], p, typeof d == "string" ? d : Qh.animationEasing);
  return /* @__PURE__ */ P.createElement(hl, {
    animationId: S,
    key: S,
    canBegin: n > 0,
    duration: p,
    easing: d,
    isActive: v,
    begin: h
  }, (ie) => {
    var R = ze(D, l, ie), re = ze(N, s, ie), ee = ze(_, o, ie), $ = ze(L, a, ie);
    r.current && (y.current = R, m.current = re, b.current = ee, w.current = $);
    var B;
    g ? ie > 0 ? B = {
      transition: Q,
      strokeDasharray: Y
    } : B = {
      strokeDasharray: F
    } : B = {
      strokeDasharray: Y
    };
    var z = vt(t), {
      radius: H
    } = z, le = Zh(z, T_);
    return /* @__PURE__ */ P.createElement("path", xa({}, le, {
      radius: typeof c == "number" ? c : void 0,
      className: O,
      d: Jh(ee, $, R, re, c),
      ref: r,
      style: Xh(Xh({}, B), t.style)
    }));
  });
};
function ev(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tv(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ev(Object(r), !0).forEach(function(n) {
      R_(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ev(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function R_(e, t, r) {
  return (t = $_(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $_(e) {
  var t = z_(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function z_(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ba = Math.PI / 180, L_ = (e) => e * 180 / Math.PI, st = (e, t, r, n) => ({
  x: e + Math.cos(-ba * n) * r,
  y: t + Math.sin(-ba * n) * r
}), B_ = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, W_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: o
  } = t;
  return Math.sqrt((r - i) ** 2 + (n - o) ** 2);
}, F_ = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    cx: i,
    cy: o
  } = t, a = W_({
    x: r,
    y: n
  }, {
    x: i,
    y: o
  });
  if (a <= 0)
    return {
      radius: a,
      angle: 0
    };
  var l = (r - i) / a, s = Math.acos(l);
  return n > o && (s = 2 * Math.PI - s), {
    radius: a,
    angle: L_(s),
    angleInRadian: s
  };
}, V_ = (e) => {
  var {
    startAngle: t,
    endAngle: r
  } = e, n = Math.floor(t / 360), i = Math.floor(r / 360), o = Math.min(n, i);
  return {
    startAngle: t - o * 360,
    endAngle: r - o * 360
  };
}, K_ = (e, t) => {
  var {
    startAngle: r,
    endAngle: n
  } = t, i = Math.floor(r / 360), o = Math.floor(n / 360), a = Math.min(i, o);
  return e + a * 360;
}, H_ = (e, t) => {
  var {
    relativeX: r,
    relativeY: n
  } = e, {
    radius: i,
    angle: o
  } = F_({
    x: r,
    y: n
  }, t), {
    innerRadius: a,
    outerRadius: l
  } = t;
  if (i < a || i > l || i === 0)
    return null;
  var {
    startAngle: s,
    endAngle: c
  } = V_(t), u = o, d;
  if (s <= c) {
    for (; u > c; )
      u -= 360;
    for (; u < s; )
      u += 360;
    d = u >= s && u <= c;
  } else {
    for (; u > s; )
      u -= 360;
    for (; u < c; )
      u += 360;
    d = u >= c && u <= s;
  }
  return d ? tv(tv({}, t), {}, {
    radius: i,
    angle: K_(u, t)
  }) : null;
};
function D0(e) {
  var {
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: o
  } = e, a = st(t, r, n, i), l = st(t, r, n, o);
  return {
    points: [a, l],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: o
  };
}
var rv, nv, iv, ov, av, lv, sv;
function Uc() {
  return Uc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Uc.apply(null, arguments);
}
function on(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var q_ = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 359.999);
  return r * n;
}, No = (e) => {
  var {
    cx: t,
    cy: r,
    radius: n,
    angle: i,
    sign: o,
    isExternal: a,
    cornerRadius: l,
    cornerIsExternal: s
  } = e, c = l * (a ? 1 : -1) + n, u = Math.asin(l / c) / ba, d = s ? i : i + o * u, p = st(t, r, c, d), h = st(t, r, n, d), g = s ? i - o * u : i, v = st(t, r, c * Math.cos(u * ba), g);
  return {
    center: p,
    circleTangency: h,
    lineTangency: v,
    theta: u
  };
}, N0 = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    startAngle: o,
    endAngle: a
  } = e, l = q_(o, a), s = o + l, c = st(t, r, i, o), u = st(t, r, i, s), d = Fe(rv || (rv = on(["M ", ",", `
    A `, ",", `,0,
    `, ",", `,
    `, ",", `
  `])), c.x, c.y, i, i, +(Math.abs(l) > 180), +(o > s), u.x, u.y);
  if (n > 0) {
    var p = st(t, r, n, o), h = st(t, r, n, s);
    d += Fe(nv || (nv = on(["L ", ",", `
            A `, ",", `,0,
            `, ",", `,
            `, ",", " Z"])), h.x, h.y, n, n, +(Math.abs(l) > 180), +(o <= s), p.x, p.y);
  } else
    d += Fe(iv || (iv = on(["L ", ",", " Z"])), t, r);
  return d;
}, U_ = (e) => {
  var {
    cx: t,
    cy: r,
    innerRadius: n,
    outerRadius: i,
    cornerRadius: o,
    forceCornerRadius: a,
    cornerIsExternal: l,
    startAngle: s,
    endAngle: c
  } = e, u = Ct(c - s), {
    circleTangency: d,
    lineTangency: p,
    theta: h
  } = No({
    cx: t,
    cy: r,
    radius: i,
    angle: s,
    sign: u,
    cornerRadius: o,
    cornerIsExternal: l
  }), {
    circleTangency: g,
    lineTangency: v,
    theta: y
  } = No({
    cx: t,
    cy: r,
    radius: i,
    angle: c,
    sign: -u,
    cornerRadius: o,
    cornerIsExternal: l
  }), m = l ? Math.abs(s - c) : Math.abs(s - c) - h - y;
  if (m < 0)
    return a ? Fe(ov || (ov = on(["M ", ",", `
        a`, ",", ",0,0,1,", `,0
        a`, ",", ",0,0,1,", `,0
      `])), p.x, p.y, o, o, o * 2, o, o, -o * 2) : N0({
      cx: t,
      cy: r,
      innerRadius: n,
      outerRadius: i,
      startAngle: s,
      endAngle: c
    });
  var b = Fe(av || (av = on(["M ", ",", `
    A`, ",", ",0,0,", ",", ",", `
    A`, ",", ",0,", ",", ",", ",", `
    A`, ",", ",0,0,", ",", ",", `
  `])), p.x, p.y, o, o, +(u < 0), d.x, d.y, i, i, +(m > 180), +(u < 0), g.x, g.y, o, o, +(u < 0), v.x, v.y);
  if (n > 0) {
    var {
      circleTangency: w,
      lineTangency: x,
      theta: S
    } = No({
      cx: t,
      cy: r,
      radius: n,
      angle: s,
      sign: u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), {
      circleTangency: O,
      lineTangency: C,
      theta: E
    } = No({
      cx: t,
      cy: r,
      radius: n,
      angle: c,
      sign: -u,
      isExternal: !0,
      cornerRadius: o,
      cornerIsExternal: l
    }), M = l ? Math.abs(s - c) : Math.abs(s - c) - S - E;
    if (M < 0 && o === 0)
      return "".concat(b, "L").concat(t, ",").concat(r, "Z");
    b += Fe(lv || (lv = on(["L", ",", `
      A`, ",", ",0,0,", ",", ",", `
      A`, ",", ",0,", ",", ",", ",", `
      A`, ",", ",0,0,", ",", ",", "Z"])), C.x, C.y, o, o, +(u < 0), O.x, O.y, n, n, +(M > 180), +(u > 0), w.x, w.y, o, o, +(u < 0), x.x, x.y);
  } else
    b += Fe(sv || (sv = on(["L", ",", "Z"])), t, r);
  return b;
}, Y_ = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, R0 = (e) => {
  var t = jt(e, Y_), {
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: a,
    forceCornerRadius: l,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u,
    className: d
  } = t;
  if (o < i || c === u)
    return null;
  var p = Pe("recharts-sector", d), h = o - i, g = Qt(a, h, 0, !0), v;
  return g > 0 && Math.abs(c - u) < 360 ? v = U_({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    cornerRadius: Math.min(g, h / 2),
    forceCornerRadius: l,
    cornerIsExternal: s,
    startAngle: c,
    endAngle: u
  }) : v = N0({
    cx: r,
    cy: n,
    innerRadius: i,
    outerRadius: o,
    startAngle: c,
    endAngle: u
  }), /* @__PURE__ */ P.createElement("path", Uc({}, vt(t), {
    className: p,
    d: v
  }));
};
function G_(e, t, r) {
  if (e === "horizontal")
    return [{
      x: t.x,
      y: r.top
    }, {
      x: t.x,
      y: r.top + r.height
    }];
  if (e === "vertical")
    return [{
      x: r.left,
      y: t.y
    }, {
      x: r.left + r.width,
      y: t.y
    }];
  if (pm(t)) {
    if (e === "centric") {
      var {
        cx: n,
        cy: i,
        innerRadius: o,
        outerRadius: a,
        angle: l
      } = t, s = st(n, i, o, l), c = st(n, i, a, l);
      return [{
        x: s.x,
        y: s.y
      }, {
        x: c.x,
        y: c.y
      }];
    }
    return D0(t);
  }
}
var Ys = {}, Gs = {}, Xs = {}, cv;
function X_() {
  return cv || (cv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Pm();
    function r(n) {
      return t.isSymbol(n) ? NaN : Number(n);
    }
    e.toNumber = r;
  })(Xs)), Xs;
}
var uv;
function Z_() {
  return uv || (uv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ X_();
    function r(n) {
      return n ? (n = t.toNumber(n), n === 1 / 0 || n === -1 / 0 ? (n < 0 ? -1 : 1) * Number.MAX_VALUE : n === n ? n : 0) : n === 0 ? n : 0;
    }
    e.toFinite = r;
  })(Gs)), Gs;
}
var dv;
function J_() {
  return dv || (dv = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    const t = /* @__PURE__ */ Cm(), r = /* @__PURE__ */ Z_();
    function n(i, o, a) {
      a && typeof a != "number" && t.isIterateeCall(i, o, a) && (o = a = void 0), i = r.toFinite(i), o === void 0 ? (o = i, i = 0) : o = r.toFinite(o), a = a === void 0 ? i < o ? 1 : -1 : r.toFinite(a);
      const l = Math.max(Math.ceil((o - i) / (a || 1)), 0), s = new Array(l);
      for (let c = 0; c < l; c++)
        s[c] = i, i += a;
      return s;
    }
    e.range = n;
  })(Ys)), Ys;
}
var Zs, fv;
function Q_() {
  return fv || (fv = 1, Zs = J_().range), Zs;
}
var eE = /* @__PURE__ */ Q_();
const $0 = /* @__PURE__ */ Sn(eE);
var nr = (e) => e.chartData, Bu = I([nr], (e) => {
  var t = e.chartData != null ? e.chartData.length - 1 : 0;
  return {
    chartData: e.chartData,
    computedData: e.computedData,
    dataEndIndex: t,
    dataStartIndex: 0
  };
}), gl = (e, t, r, n) => n ? Bu(e) : nr(e), z0 = (e, t, r) => r ? Bu(e) : nr(e), tE = I([gl], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
I([Bu], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
var rE = I([nr], (e) => {
  var {
    chartData: t,
    dataStartIndex: r,
    dataEndIndex: n
  } = e;
  return t != null ? t.slice(r, n + 1) : [];
});
function cr(e) {
  if (Array.isArray(e) && e.length === 2) {
    var [t, r] = e;
    if (pe(t) && pe(r))
      return !0;
  }
  return !1;
}
function pv(e, t, r) {
  return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
}
function L0(e, t) {
  if (t && typeof e != "function" && Array.isArray(e) && e.length === 2) {
    var [r, n] = e, i, o;
    if (pe(r))
      i = r;
    else if (typeof r == "function")
      return;
    if (pe(n))
      o = n;
    else if (typeof n == "function")
      return;
    var a = [i, o];
    if (cr(a))
      return a;
  }
}
function nE(e, t, r) {
  if (!(!r && t == null)) {
    if (typeof e == "function" && t != null)
      try {
        var n = e(t, r);
        if (cr(n))
          return pv(n, t, r);
      } catch {
      }
    if (Array.isArray(e) && e.length === 2) {
      var [i, o] = e, a, l;
      if (i === "auto")
        t != null && (a = Math.min(...t));
      else if (te(i))
        a = i;
      else if (typeof i == "function")
        try {
          t != null && (a = i(t?.[0]));
        } catch {
        }
      else if (typeof i == "string" && nh.test(i)) {
        var s = nh.exec(i);
        if (s == null || s[1] == null || t == null)
          a = void 0;
        else {
          var c = +s[1];
          a = t[0] - c;
        }
      } else
        a = t?.[0];
      if (o === "auto")
        t != null && (l = Math.max(...t));
      else if (te(o))
        l = o;
      else if (typeof o == "function")
        try {
          t != null && (l = o(t?.[1]));
        } catch {
        }
      else if (typeof o == "string" && ih.test(o)) {
        var u = ih.exec(o);
        if (u == null || u[1] == null || t == null)
          l = void 0;
        else {
          var d = +u[1];
          l = t[1] + d;
        }
      } else
        l = t?.[1];
      var p = [a, l];
      if (cr(p))
        return t == null ? p : pv(p, t, r);
    }
  }
}
var ri = 1e9, iE = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, Fu, Re = !0, Yt = "[DecimalError] ", dn = Yt + "Invalid argument: ", Wu = Yt + "Exponent out of range: ", ni = Math.floor, rn = Math.pow, oE = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Mt, et = 1e7, Ne = 7, B0 = 9007199254740991, wa = ni(B0 / Ne), ne = {};
ne.absoluteValue = ne.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
ne.comparedTo = ne.cmp = function(e) {
  var t, r, n, i, o = this;
  if (e = new o.constructor(e), o.s !== e.s) return o.s || -e.s;
  if (o.e !== e.e) return o.e > e.e ^ o.s < 0 ? 1 : -1;
  for (n = o.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (o.d[t] !== e.d[t]) return o.d[t] > e.d[t] ^ o.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
};
ne.decimalPlaces = ne.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * Ne;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
ne.dividedBy = ne.div = function(e) {
  return Or(this, new this.constructor(e));
};
ne.dividedToIntegerBy = ne.idiv = function(e) {
  var t = this, r = t.constructor;
  return Ae(Or(t, new r(e), 0, 1), r.precision);
};
ne.equals = ne.eq = function(e) {
  return !this.cmp(e);
};
ne.exponent = function() {
  return qe(this);
};
ne.greaterThan = ne.gt = function(e) {
  return this.cmp(e) > 0;
};
ne.greaterThanOrEqualTo = ne.gte = function(e) {
  return this.cmp(e) >= 0;
};
ne.isInteger = ne.isint = function() {
  return this.e > this.d.length - 2;
};
ne.isNegative = ne.isneg = function() {
  return this.s < 0;
};
ne.isPositive = ne.ispos = function() {
  return this.s > 0;
};
ne.isZero = function() {
  return this.s === 0;
};
ne.lessThan = ne.lt = function(e) {
  return this.cmp(e) < 0;
};
ne.lessThanOrEqualTo = ne.lte = function(e) {
  return this.cmp(e) < 1;
};
ne.logarithm = ne.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, o = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(Mt)) throw Error(Yt + "NaN");
  if (r.s < 1) throw Error(Yt + (r.s ? "NaN" : "-Infinity"));
  return r.eq(Mt) ? new n(0) : (Re = !1, t = Or(Wi(r, o), Wi(e, o), o), Re = !0, Ae(t, i));
};
ne.minus = ne.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? V0(t, e) : W0(t, (e.s = -e.s, e));
};
ne.modulo = ne.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(Yt + "NaN");
  return r.s ? (Re = !1, t = Or(r, e, 0, 1).times(e), Re = !0, r.minus(t)) : Ae(new n(r), i);
};
ne.naturalExponential = ne.exp = function() {
  return F0(this);
};
ne.naturalLogarithm = ne.ln = function() {
  return Wi(this);
};
ne.negated = ne.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
ne.plus = ne.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? W0(t, e) : V0(t, (e.s = -e.s, e));
};
ne.precision = ne.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(dn + e);
  if (t = qe(i) + 1, n = i.d.length - 1, r = n * Ne + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
ne.squareRoot = ne.sqrt = function() {
  var e, t, r, n, i, o, a, l = this, s = l.constructor;
  if (l.s < 1) {
    if (!l.s) return new s(0);
    throw Error(Yt + "NaN");
  }
  for (e = qe(l), Re = !1, i = Math.sqrt(+l), i == 0 || i == 1 / 0 ? (t = sr(l.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = ni((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new s(t)) : n = new s(i.toString()), r = s.precision, i = a = r + 3; ; )
    if (o = n, n = o.plus(Or(l, o, a + 2)).times(0.5), sr(o.d).slice(0, a) === (t = sr(n.d)).slice(0, a)) {
      if (t = t.slice(a - 3, a + 1), i == a && t == "4999") {
        if (Ae(o, r + 1, 0), o.times(o).eq(l)) {
          n = o;
          break;
        }
      } else if (t != "9999")
        break;
      a += 4;
    }
  return Re = !0, Ae(n, r);
};
ne.times = ne.mul = function(e) {
  var t, r, n, i, o, a, l, s, c, u = this, d = u.constructor, p = u.d, h = (e = new d(e)).d;
  if (!u.s || !e.s) return new d(0);
  for (e.s *= u.s, r = u.e + e.e, s = p.length, c = h.length, s < c && (o = p, p = h, h = o, a = s, s = c, c = a), o = [], a = s + c, n = a; n--; ) o.push(0);
  for (n = c; --n >= 0; ) {
    for (t = 0, i = s + n; i > n; )
      l = o[i] + h[n] * p[i - n - 1] + t, o[i--] = l % et | 0, t = l / et | 0;
    o[i] = (o[i] + t) % et | 0;
  }
  for (; !o[--a]; ) o.pop();
  return t ? ++r : o.shift(), e.d = o, e.e = r, Re ? Ae(e, d.precision) : e;
};
ne.toDecimalPlaces = ne.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (fr(e, 0, ri), t === void 0 ? t = n.rounding : fr(t, 0, 8), Ae(r, e + qe(r) + 1, t));
};
ne.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = xn(n, !0) : (fr(e, 0, ri), t === void 0 ? t = i.rounding : fr(t, 0, 8), n = Ae(new i(n), e + 1, t), r = xn(n, !0, e + 1)), r;
};
ne.toFixed = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? xn(i) : (fr(e, 0, ri), t === void 0 ? t = o.rounding : fr(t, 0, 8), n = Ae(new o(i), e + qe(i) + 1, t), r = xn(n.abs(), !1, e + qe(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
ne.toInteger = ne.toint = function() {
  var e = this, t = e.constructor;
  return Ae(new t(e), qe(e) + 1, t.rounding);
};
ne.toNumber = function() {
  return +this;
};
ne.toPower = ne.pow = function(e) {
  var t, r, n, i, o, a, l = this, s = l.constructor, c = 12, u = +(e = new s(e));
  if (!e.s) return new s(Mt);
  if (l = new s(l), !l.s) {
    if (e.s < 1) throw Error(Yt + "Infinity");
    return l;
  }
  if (l.eq(Mt)) return l;
  if (n = s.precision, e.eq(Mt)) return Ae(l, n);
  if (t = e.e, r = e.d.length - 1, a = t >= r, o = l.s, a) {
    if ((r = u < 0 ? -u : u) <= B0) {
      for (i = new s(Mt), t = Math.ceil(n / Ne + 4), Re = !1; r % 2 && (i = i.times(l), vv(i.d, t)), r = ni(r / 2), r !== 0; )
        l = l.times(l), vv(l.d, t);
      return Re = !0, e.s < 0 ? new s(Mt).div(i) : Ae(i, n);
    }
  } else if (o < 0) throw Error(Yt + "NaN");
  return o = o < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, l.s = 1, Re = !1, i = e.times(Wi(l, n + c)), Re = !0, i = F0(i), i.s = o, i;
};
ne.toPrecision = function(e, t) {
  var r, n, i = this, o = i.constructor;
  return e === void 0 ? (r = qe(i), n = xn(i, r <= o.toExpNeg || r >= o.toExpPos)) : (fr(e, 1, ri), t === void 0 ? t = o.rounding : fr(t, 0, 8), i = Ae(new o(i), e, t), r = qe(i), n = xn(i, e <= r || r <= o.toExpNeg, e)), n;
};
ne.toSignificantDigits = ne.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (fr(e, 1, ri), t === void 0 ? t = n.rounding : fr(t, 0, 8)), Ae(new n(r), e, t);
};
ne.toString = ne.valueOf = ne.val = ne.toJSON = ne[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = qe(e), r = e.constructor;
  return xn(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function W0(e, t) {
  var r, n, i, o, a, l, s, c, u = e.constructor, d = u.precision;
  if (!e.s || !t.s)
    return t.s || (t = new u(e)), Re ? Ae(t, d) : t;
  if (s = e.d, c = t.d, a = e.e, i = t.e, s = s.slice(), o = a - i, o) {
    for (o < 0 ? (n = s, o = -o, l = c.length) : (n = c, i = a, l = s.length), a = Math.ceil(d / Ne), l = a > l ? a + 1 : l + 1, o > l && (o = l, n.length = 1), n.reverse(); o--; ) n.push(0);
    n.reverse();
  }
  for (l = s.length, o = c.length, l - o < 0 && (o = l, n = c, c = s, s = n), r = 0; o; )
    r = (s[--o] = s[o] + c[o] + r) / et | 0, s[o] %= et;
  for (r && (s.unshift(r), ++i), l = s.length; s[--l] == 0; ) s.pop();
  return t.d = s, t.e = i, Re ? Ae(t, d) : t;
}
function fr(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(dn + e);
}
function sr(e) {
  var t, r, n, i = e.length - 1, o = "", a = e[0];
  if (i > 0) {
    for (o += a, t = 1; t < i; t++)
      n = e[t] + "", r = Ne - n.length, r && (o += Lr(r)), o += n;
    a = e[t], n = a + "", r = Ne - n.length, r && (o += Lr(r));
  } else if (a === 0)
    return "0";
  for (; a % 10 === 0; ) a /= 10;
  return o + a;
}
var Or = /* @__PURE__ */ (function() {
  function e(n, i) {
    var o, a = 0, l = n.length;
    for (n = n.slice(); l--; )
      o = n[l] * i + a, n[l] = o % et | 0, a = o / et | 0;
    return a && n.unshift(a), n;
  }
  function t(n, i, o, a) {
    var l, s;
    if (o != a)
      s = o > a ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (n[l] != i[l]) {
          s = n[l] > i[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(n, i, o) {
    for (var a = 0; o--; )
      n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * et + n[o] - i[o];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, o, a) {
    var l, s, c, u, d, p, h, g, v, y, m, b, w, x, S, O, C, E, M = n.constructor, D = n.s == i.s ? 1 : -1, N = n.d, _ = i.d;
    if (!n.s) return new M(n);
    if (!i.s) throw Error(Yt + "Division by zero");
    for (s = n.e - i.e, C = _.length, S = N.length, h = new M(D), g = h.d = [], c = 0; _[c] == (N[c] || 0); ) ++c;
    if (_[c] > (N[c] || 0) && --s, o == null ? b = o = M.precision : a ? b = o + (qe(n) - qe(i)) + 1 : b = o, b < 0) return new M(0);
    if (b = b / Ne + 2 | 0, c = 0, C == 1)
      for (u = 0, _ = _[0], b++; (c < S || u) && b--; c++)
        w = u * et + (N[c] || 0), g[c] = w / _ | 0, u = w % _ | 0;
    else {
      for (u = et / (_[0] + 1) | 0, u > 1 && (_ = e(_, u), N = e(N, u), C = _.length, S = N.length), x = C, v = N.slice(0, C), y = v.length; y < C; ) v[y++] = 0;
      E = _.slice(), E.unshift(0), O = _[0], _[1] >= et / 2 && ++O;
      do
        u = 0, l = t(_, v, C, y), l < 0 ? (m = v[0], C != y && (m = m * et + (v[1] || 0)), u = m / O | 0, u > 1 ? (u >= et && (u = et - 1), d = e(_, u), p = d.length, y = v.length, l = t(d, v, p, y), l == 1 && (u--, r(d, C < p ? E : _, p))) : (u == 0 && (l = u = 1), d = _.slice()), p = d.length, p < y && d.unshift(0), r(v, d, y), l == -1 && (y = v.length, l = t(_, v, C, y), l < 1 && (u++, r(v, C < y ? E : _, y))), y = v.length) : l === 0 && (u++, v = [0]), g[c++] = u, l && v[0] ? v[y++] = N[x] || 0 : (v = [N[x]], y = 1);
      while ((x++ < S || v[0] !== void 0) && b--);
    }
    return g[0] || g.shift(), h.e = s, Ae(h, a ? o + qe(h) + 1 : o);
  };
})();
function F0(e, t) {
  var r, n, i, o, a, l, s = 0, c = 0, u = e.constructor, d = u.precision;
  if (qe(e) > 16) throw Error(Wu + qe(e));
  if (!e.s) return new u(Mt);
  for (Re = !1, l = d, a = new u(0.03125); e.abs().gte(0.1); )
    e = e.times(a), c += 5;
  for (n = Math.log(rn(2, c)) / Math.LN10 * 2 + 5 | 0, l += n, r = i = o = new u(Mt), u.precision = l; ; ) {
    if (i = Ae(i.times(e), l), r = r.times(++s), a = o.plus(Or(i, r, l)), sr(a.d).slice(0, l) === sr(o.d).slice(0, l)) {
      for (; c--; ) o = Ae(o.times(o), l);
      return u.precision = d, t == null ? (Re = !0, Ae(o, d)) : o;
    }
    o = a;
  }
}
function qe(e) {
  for (var t = e.e * Ne, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function Js(e, t, r) {
  if (t > e.LN10.sd())
    throw Re = !0, r && (e.precision = r), Error(Yt + "LN10 precision limit exceeded");
  return Ae(new e(e.LN10), t);
}
function Lr(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Wi(e, t) {
  var r, n, i, o, a, l, s, c, u, d = 1, p = 10, h = e, g = h.d, v = h.constructor, y = v.precision;
  if (h.s < 1) throw Error(Yt + (h.s ? "NaN" : "-Infinity"));
  if (h.eq(Mt)) return new v(0);
  if (t == null ? (Re = !1, c = y) : c = t, h.eq(10))
    return t == null && (Re = !0), Js(v, c);
  if (c += p, v.precision = c, r = sr(g), n = r.charAt(0), o = qe(h), Math.abs(o) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      h = h.times(e), r = sr(h.d), n = r.charAt(0), d++;
    o = qe(h), n > 1 ? (h = new v("0." + r), o++) : h = new v(n + "." + r.slice(1));
  } else
    return s = Js(v, c + 2, y).times(o + ""), h = Wi(new v(n + "." + r.slice(1)), c - p).plus(s), v.precision = y, t == null ? (Re = !0, Ae(h, y)) : h;
  for (l = a = h = Or(h.minus(Mt), h.plus(Mt), c), u = Ae(h.times(h), c), i = 3; ; ) {
    if (a = Ae(a.times(u), c), s = l.plus(Or(a, new v(i), c)), sr(s.d).slice(0, c) === sr(l.d).slice(0, c))
      return l = l.times(2), o !== 0 && (l = l.plus(Js(v, c + 2, y).times(o + ""))), l = Or(l, new v(d), c), v.precision = y, t == null ? (Re = !0, Ae(l, y)) : l;
    l = s, i += 2;
  }
}
function hv(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = ni(r / Ne), e.d = [], n = (r + 1) % Ne, r < 0 && (n += Ne), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= Ne; n < i; ) e.d.push(+t.slice(n, n += Ne));
      t = t.slice(n), n = Ne - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), Re && (e.e > wa || e.e < -wa)) throw Error(Wu + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function Ae(e, t, r) {
  var n, i, o, a, l, s, c, u, d = e.d;
  for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
  if (n = t - a, n < 0)
    n += Ne, i = t, c = d[u = 0];
  else {
    if (u = Math.ceil((n + 1) / Ne), o = d.length, u >= o) return e;
    for (c = o = d[u], a = 1; o >= 10; o /= 10) a++;
    n %= Ne, i = n - Ne + a;
  }
  if (r !== void 0 && (o = rn(10, a - i - 1), l = c / o % 10 | 0, s = t < 0 || d[u + 1] !== void 0 || c % o, s = r < 4 ? (l || s) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || s || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? c / rn(10, a - i) : 0 : d[u - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !d[0])
    return s ? (o = qe(e), d.length = 1, t = t - o - 1, d[0] = rn(10, (Ne - t % Ne) % Ne), e.e = ni(-t / Ne) || 0) : (d.length = 1, d[0] = e.e = e.s = 0), e;
  if (n == 0 ? (d.length = u, o = 1, u--) : (d.length = u + 1, o = rn(10, Ne - n), d[u] = i > 0 ? (c / rn(10, a - i) % rn(10, i) | 0) * o : 0), s)
    for (; ; )
      if (u == 0) {
        (d[0] += o) == et && (d[0] = 1, ++e.e);
        break;
      } else {
        if (d[u] += o, d[u] != et) break;
        d[u--] = 0, o = 1;
      }
  for (n = d.length; d[--n] === 0; ) d.pop();
  if (Re && (e.e > wa || e.e < -wa))
    throw Error(Wu + qe(e));
  return e;
}
function V0(e, t) {
  var r, n, i, o, a, l, s, c, u, d, p = e.constructor, h = p.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new p(e), Re ? Ae(t, h) : t;
  if (s = e.d, d = t.d, n = t.e, c = e.e, s = s.slice(), a = c - n, a) {
    for (u = a < 0, u ? (r = s, a = -a, l = d.length) : (r = d, n = c, l = s.length), i = Math.max(Math.ceil(h / Ne), l) + 2, a > i && (a = i, r.length = 1), r.reverse(), i = a; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = s.length, l = d.length, u = i < l, u && (l = i), i = 0; i < l; i++)
      if (s[i] != d[i]) {
        u = s[i] < d[i];
        break;
      }
    a = 0;
  }
  for (u && (r = s, s = d, d = r, t.s = -t.s), l = s.length, i = d.length - l; i > 0; --i) s[l++] = 0;
  for (i = d.length; i > a; ) {
    if (s[--i] < d[i]) {
      for (o = i; o && s[--o] === 0; ) s[o] = et - 1;
      --s[o], s[i] += et;
    }
    s[i] -= d[i];
  }
  for (; s[--l] === 0; ) s.pop();
  for (; s[0] === 0; s.shift()) --n;
  return s[0] ? (t.d = s, t.e = n, Re ? Ae(t, h) : t) : new p(0);
}
function xn(e, t, r) {
  var n, i = qe(e), o = sr(e.d), a = o.length;
  return t ? (r && (n = r - a) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Lr(n) : a > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Lr(-i - 1) + o, r && (n = r - a) > 0 && (o += Lr(n))) : i >= a ? (o += Lr(i + 1 - a), r && (n = r - i - 1) > 0 && (o = o + "." + Lr(n))) : ((n = i + 1) < a && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - a) > 0 && (i + 1 === a && (o += "."), o += Lr(n))), e.s < 0 ? "-" + o : o;
}
function vv(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function K0(e) {
  var t, r, n;
  function i(o) {
    var a = this;
    if (!(a instanceof i)) return new i(o);
    if (a.constructor = i, o instanceof i) {
      a.s = o.s, a.e = o.e, a.d = (o = o.d) ? o.slice() : o;
      return;
    }
    if (typeof o == "number") {
      if (o * 0 !== 0)
        throw Error(dn + o);
      if (o > 0)
        a.s = 1;
      else if (o < 0)
        o = -o, a.s = -1;
      else {
        a.s = 0, a.e = 0, a.d = [0];
        return;
      }
      if (o === ~~o && o < 1e7) {
        a.e = 0, a.d = [o];
        return;
      }
      return hv(a, o.toString());
    } else if (typeof o != "string")
      throw Error(dn + o);
    if (o.charCodeAt(0) === 45 ? (o = o.slice(1), a.s = -1) : a.s = 1, oE.test(o)) hv(a, o);
    else throw Error(dn + o);
  }
  if (i.prototype = ne, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = K0, i.config = i.set = aE, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function aE(e) {
  if (!e || typeof e != "object")
    throw Error(Yt + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    ri,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (ni(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(dn + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(dn + r + ": " + n);
  return this;
}
var Fu = K0(iE);
Mt = new Fu(1);
const ye = Fu;
function H0(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new ye(e).abs().log(10).toNumber()) + 1, t;
}
function q0(e, t, r) {
  for (var n = new ye(e), i = 0, o = []; n.lt(t) && i < 1e5; )
    o.push(n.toNumber()), n = n.add(r), i++;
  return o;
}
var U0 = (e) => {
  var [t, r] = e, [n, i] = [t, r];
  return t > r && ([n, i] = [r, t]), [n, i];
}, Vu = (e, t, r) => {
  if (e.lte(0))
    return new ye(0);
  var n = H0(e.toNumber()), i = new ye(10).pow(n), o = e.div(i), a = n !== 1 ? 0.05 : 0.1, l = new ye(Math.ceil(o.div(a).toNumber())).add(r).mul(a), s = l.mul(i);
  return t ? new ye(s.toNumber()) : new ye(Math.ceil(s.toNumber()));
}, Y0 = (e, t, r) => {
  var n;
  if (e.lte(0))
    return new ye(0);
  var i = [1, 2, 2.5, 5], o = e.toNumber(), a = Math.floor(new ye(o).abs().log(10).toNumber()), l = new ye(10).pow(a), s = e.div(l).toNumber(), c = i.findIndex((h) => h >= s - 1e-10);
  if (c === -1 && (l = l.mul(10), c = 0), c += r, c >= i.length) {
    var u = Math.floor(c / i.length);
    c %= i.length, l = l.mul(new ye(10).pow(u));
  }
  var d = (n = i[c]) !== null && n !== void 0 ? n : 1, p = new ye(d).mul(l);
  return t ? p : new ye(Math.ceil(p.toNumber()));
}, lE = (e, t, r) => {
  var n = new ye(1), i = new ye(e);
  if (!i.isint() && r) {
    var o = Math.abs(e);
    o < 1 ? (n = new ye(10).pow(H0(e) - 1), i = new ye(Math.floor(i.div(n).toNumber())).mul(n)) : o > 1 && (i = new ye(Math.floor(e)));
  } else e === 0 ? i = new ye(Math.floor((t - 1) / 2)) : r || (i = new ye(Math.floor(e)));
  for (var a = Math.floor((t - 1) / 2), l = [], s = 0; s < t; s++)
    l.push(i.add(new ye(s - a).mul(n)).toNumber());
  return l;
}, G0 = function(t, r, n, i) {
  var o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : Vu;
  if (!Number.isFinite((r - t) / (n - 1)))
    return {
      step: new ye(0),
      tickMin: new ye(0),
      tickMax: new ye(0)
    };
  var l = a(new ye(r).sub(t).div(n - 1), i, o), s;
  t <= 0 && r >= 0 ? s = new ye(0) : (s = new ye(t).add(r).div(2), s = s.sub(new ye(s).mod(l)));
  var c = Math.ceil(s.sub(t).div(l).toNumber()), u = Math.ceil(new ye(r).sub(s).div(l).toNumber()), d = c + u + 1;
  return d > n ? G0(t, r, n, i, o + 1, a) : (d < n && (u = r > 0 ? u + (n - d) : u, c = r > 0 ? c : c + (n - d)), {
    step: l,
    tickMin: s.sub(new ye(c).mul(l)),
    tickMax: s.add(new ye(u).mul(l))
  });
}, gv = function(t) {
  var [r, n] = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", l = Math.max(i, 2), [s, c] = U0([r, n]);
  if (s === -1 / 0 || c === 1 / 0) {
    var u = c === 1 / 0 ? [s, ...Array(i - 1).fill(1 / 0)] : [...Array(i - 1).fill(-1 / 0), c];
    return r > n ? u.reverse() : u;
  }
  if (s === c)
    return lE(s, i, o);
  var d = a === "snap125" ? Y0 : Vu, {
    step: p,
    tickMin: h,
    tickMax: g
  } = G0(s, c, l, o, 0, d), v = q0(h, g.add(new ye(0.1).mul(p)), p);
  return r > n ? v.reverse() : v;
}, yv = function(t, r) {
  var [n, i] = t, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "auto", [l, s] = U0([n, i]);
  if (l === -1 / 0 || s === 1 / 0)
    return [n, i];
  if (l === s)
    return [l];
  var c = a === "snap125" ? Y0 : Vu, u = Math.max(r, 2), d = c(new ye(s).sub(l).div(u - 1), o, 0), p = [...q0(new ye(l), new ye(s), d), s];
  return o === !1 && (p = p.map((h) => Math.round(h))), n > i ? p.reverse() : p;
}, X0 = (e) => e.rootProps.maxBarSize, sE = (e) => e.rootProps.barGap, Z0 = (e) => e.rootProps.barCategoryGap, cE = (e) => e.rootProps.barSize, yl = (e) => e.rootProps.stackOffset, J0 = (e) => e.rootProps.reverseStackOrder, Ku = (e) => e.options.chartName, Hu = (e) => e.rootProps.syncId, Q0 = (e) => e.rootProps.syncMethod, qu = (e) => e.options.eventEmitter, uE = (e) => e.rootProps.baseValue, Ze = {
  /**
   * CartesianGrid and PolarGrid
   */
  grid: -100,
  /**
   * Background of Bar and RadialBar.
   * This is not visible by default but can be enabled by setting background={true} on Bar or RadialBar.
   */
  barBackground: -50,
  /*
   * other chart elements or custom elements without specific zIndex
   * render in here, at zIndex 0
   */
  /**
   * Area, Pie, Radar, and ReferenceArea
   */
  area: 100,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area. CursorRectangle is a rectangle box.
   * It renders below bar so that in a stacked bar chart the cursor rectangle does not hide the other bars.
   */
  cursorRectangle: 200,
  /**
   * Bar and RadialBar
   */
  bar: 300,
  /**
   * Line and ReferenceLine, and ErrorBor
   */
  line: 400,
  /**
   * XAxis and YAxis and PolarAngleAxis and PolarRadiusAxis ticks and lines and children
   */
  axis: 500,
  /**
   * Scatter and ReferenceDot,
   * and Dots of Line and Area and Radar if they have dot=true
   */
  scatter: 600,
  /**
   * Hovering over a Bar or RadialBar renders a highlight rectangle
   */
  activeBar: 1e3,
  /**
   * Cursor is embedded inside Tooltip and controlled by it.
   * The Tooltip itself has a separate portal and is not included in the zIndex system;
   * Cursor is the decoration inside the chart area, usually a cross or a box.
   * CursorLine is a line cursor rendered in Line, Area, Scatter, Radar charts.
   * It renders above the Line and Scatter so that it is always visible.
   * It renders below active dot so that the dot is always visible and shows the current point.
   * We're also assuming that the active dot is small enough that it does not fully cover the cursor line.
   *
   * This also applies to the radial cursor in RadialBarChart.
   */
  cursorLine: 1100,
  /**
   * Hovering over a Point in Line, Area, Scatter, Radar renders a highlight dot
   */
  activeDot: 1200,
  /**
   * LabelList and Label, including Axis labels
   */
  label: 2e3
}, Xr = {
  allowDecimals: !1,
  // if I set this to false then Tooltip synchronisation stops working in Radar, wtf
  allowDataOverflow: !1,
  angleAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  type: "auto"
}, or = {
  allowDataOverflow: !1,
  allowDecimals: !1,
  allowDuplicatedCategory: !0,
  includeHidden: !1,
  radiusAxisId: 0,
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  type: "auto"
}, ml = (e, t) => {
  if (!(!e || !t))
    return e != null && e.reversed ? [t[1], t[0]] : t;
};
function xl(e, t, r) {
  if (r !== "auto")
    return r;
  if (e != null)
    return hr(e, t) ? "category" : "number";
}
function mv(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mv(Object(r), !0).forEach(function(n) {
      dE(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mv(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function dE(e, t, r) {
  return (t = fE(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fE(e) {
  var t = pE(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function pE(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var xv = {
  allowDataOverflow: Xr.allowDataOverflow,
  allowDecimals: Xr.allowDecimals,
  allowDuplicatedCategory: !1,
  // defaultPolarAngleAxisProps.allowDuplicatedCategory has it set to true but the actual axis rendering ignores the prop because reasons,
  dataKey: void 0,
  domain: void 0,
  id: Xr.angleAxisId,
  includeHidden: !1,
  name: void 0,
  reversed: Xr.reversed,
  scale: Xr.scale,
  tick: Xr.tick,
  tickCount: void 0,
  ticks: void 0,
  type: Xr.type,
  unit: void 0,
  niceTicks: "auto"
}, bv = {
  allowDataOverflow: or.allowDataOverflow,
  allowDecimals: or.allowDecimals,
  allowDuplicatedCategory: or.allowDuplicatedCategory,
  dataKey: void 0,
  domain: void 0,
  id: or.radiusAxisId,
  includeHidden: or.includeHidden,
  name: void 0,
  reversed: or.reversed,
  scale: or.scale,
  tick: or.tick,
  tickCount: or.tickCount,
  ticks: void 0,
  type: or.type,
  unit: void 0,
  niceTicks: "auto"
}, hE = (e, t) => {
  if (t != null)
    return e.polarAxis.angleAxis[t];
}, Uu = I([hE, x0], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = xl(t, "angleAxis", xv.type)) !== null && r !== void 0 ? r : "category";
  return ja(ja({}, xv), {}, {
    type: n
  });
}), vE = (e, t) => e.polarAxis.radiusAxis[t], Yu = I([vE, x0], (e, t) => {
  var r;
  if (e != null)
    return e;
  var n = (r = xl(t, "radiusAxis", bv.type)) !== null && r !== void 0 ? r : "category";
  return ja(ja({}, bv), {}, {
    type: n
  });
}), bl = (e) => e.polarOptions, Gu = I([Tr, Ir, rt], B_), ex = I([bl, Gu], (e, t) => {
  if (e != null)
    return Qt(e.innerRadius, t, 0);
}), tx = I([bl, Gu], (e, t) => {
  if (e != null)
    return Qt(e.outerRadius, t, t * 0.8);
}), gE = (e) => {
  if (e == null)
    return [0, 0];
  var {
    startAngle: t,
    endAngle: r
  } = e;
  return [t, r];
}, rx = I([bl], gE);
I([Uu, rx], ml);
var nx = I([Gu, ex, tx], (e, t, r) => {
  if (!(e == null || t == null || r == null))
    return [t, r];
});
I([Yu, nx], ml);
var ix = I([Se, bl, ex, tx, Tr, Ir], (e, t, r, n, i, o) => {
  if (!(e !== "centric" && e !== "radial" || t == null || r == null || n == null)) {
    var {
      cx: a,
      cy: l,
      startAngle: s,
      endAngle: c
    } = t;
    return {
      cx: Qt(a, i, i / 2),
      cy: Qt(l, o, o / 2),
      innerRadius: r,
      outerRadius: n,
      startAngle: s,
      endAngle: c,
      clockWise: !1
      // this property look useful, why not use it?
    };
  }
}), nt = (e, t) => t, wl = (e, t, r) => r;
function jl(e) {
  return e?.id;
}
function ox(e, t, r) {
  var {
    chartData: n = []
  } = t, {
    allowDuplicatedCategory: i,
    dataKey: o
  } = r, a = /* @__PURE__ */ new Map();
  return e.forEach((l) => {
    var s, c = (s = l.data) !== null && s !== void 0 ? s : n;
    if (!(c == null || c.length === 0)) {
      var u = jl(l);
      c.forEach((d, p) => {
        var h = o == null || i ? p : String(He(d, o, null)), g = He(d, l.dataKey, 0), v;
        a.has(h) ? v = a.get(h) : v = {}, Object.assign(v, {
          [u]: g
        }), a.set(h, v);
      });
    }
  }), Array.from(a.values());
}
function Sl(e) {
  return "stackId" in e && e.stackId != null && e.dataKey != null;
}
var Ol = (e, t) => e === t ? !0 : e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1];
function Pl(e, t) {
  return Array.isArray(e) && Array.isArray(t) && e.length === 0 && t.length === 0 ? !0 : e === t;
}
function yE(e, t) {
  if (e.length === t.length) {
    for (var r = 0; r < e.length; r++)
      if (e[r] !== t[r])
        return !1;
    return !0;
  }
  return !1;
}
var it = (e) => {
  var t = Se(e);
  return t === "horizontal" ? "xAxis" : t === "vertical" ? "yAxis" : t === "centric" ? "angleAxis" : "radiusAxis";
}, ii = (e) => e.tooltip.settings.axisId;
function Xu(e) {
  if (e != null) {
    var t = e.ticks, r = e.bandwidth, n = e.range(), i = [Math.min(...n), Math.max(...n)];
    return {
      domain: () => e.domain(),
      range: (function(o) {
        function a() {
          return o.apply(this, arguments);
        }
        return a.toString = function() {
          return o.toString();
        }, a;
      })(() => i),
      rangeMin: () => i[0],
      rangeMax: () => i[1],
      isInRange(o) {
        var a = i[0], l = i[1];
        return a <= l ? o >= a && o <= l : o >= l && o <= a;
      },
      bandwidth: r ? () => r.call(e) : void 0,
      ticks: t ? (o) => t.call(e, o) : void 0,
      map: (o, a) => {
        var l = e(o);
        if (l != null) {
          if (e.bandwidth && a !== null && a !== void 0 && a.position) {
            var s = e.bandwidth();
            switch (a.position) {
              case "middle":
                l += s / 2;
                break;
              case "end":
                l += s;
                break;
            }
          }
          return l;
        }
      }
    };
  }
}
var mE = (e, t) => {
  if (t != null)
    switch (e) {
      case "linear": {
        if (!cr(t)) {
          for (var r, n, i = 0; i < t.length; i++) {
            var o = t[i];
            pe(o) && ((r === void 0 || o < r) && (r = o), (n === void 0 || o > n) && (n = o));
          }
          return r !== void 0 && n !== void 0 ? [r, n] : void 0;
        }
        return t;
      }
      default:
        return t;
    }
};
function Vr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xE(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Zu(e) {
  let t, r, n;
  e.length !== 2 ? (t = Vr, r = (l, s) => Vr(e(l), s), n = (l, s) => e(l) - s) : (t = e === Vr || e === xE ? e : bE, r = e, n = e);
  function i(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const d = c + u >>> 1;
        r(l[d], s) < 0 ? c = d + 1 : u = d;
      } while (c < u);
    }
    return c;
  }
  function o(l, s, c = 0, u = l.length) {
    if (c < u) {
      if (t(s, s) !== 0) return u;
      do {
        const d = c + u >>> 1;
        r(l[d], s) <= 0 ? c = d + 1 : u = d;
      } while (c < u);
    }
    return c;
  }
  function a(l, s, c = 0, u = l.length) {
    const d = i(l, s, c, u - 1);
    return d > c && n(l[d - 1], s) > -n(l[d], s) ? d - 1 : d;
  }
  return { left: i, center: a, right: o };
}
function bE() {
  return 0;
}
function ax(e) {
  return e === null ? NaN : +e;
}
function* wE(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const jE = Zu(Vr), ao = jE.right;
Zu(ax).center;
class wv extends Map {
  constructor(t, r = PE) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(jv(this, t));
  }
  has(t) {
    return super.has(jv(this, t));
  }
  set(t, r) {
    return super.set(SE(this, t), r);
  }
  delete(t) {
    return super.delete(OE(this, t));
  }
}
function jv({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function SE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function OE({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function PE(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function CE(e = Vr) {
  if (e === Vr) return lx;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function lx(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const _E = Math.sqrt(50), EE = Math.sqrt(10), kE = Math.sqrt(2);
function Sa(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), o = n / Math.pow(10, i), a = o >= _E ? 10 : o >= EE ? 5 : o >= kE ? 2 : 1;
  let l, s, c;
  return i < 0 ? (c = Math.pow(10, -i) / a, l = Math.round(e * c), s = Math.round(t * c), l / c < e && ++l, s / c > t && --s, c = -c) : (c = Math.pow(10, i) * a, l = Math.round(e / c), s = Math.round(t / c), l * c < e && ++l, s * c > t && --s), s < l && 0.5 <= r && r < 2 ? Sa(e, t, r * 2) : [l, s, c];
}
function Yc(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, o, a] = n ? Sa(t, e, r) : Sa(e, t, r);
  if (!(o >= i)) return [];
  const l = o - i + 1, s = new Array(l);
  if (n)
    if (a < 0) for (let c = 0; c < l; ++c) s[c] = (o - c) / -a;
    else for (let c = 0; c < l; ++c) s[c] = (o - c) * a;
  else if (a < 0) for (let c = 0; c < l; ++c) s[c] = (i + c) / -a;
  else for (let c = 0; c < l; ++c) s[c] = (i + c) * a;
  return s;
}
function Gc(e, t, r) {
  return t = +t, e = +e, r = +r, Sa(e, t, r)[2];
}
function Xc(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? Gc(t, e, r) : Gc(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Sv(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function Ov(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function sx(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? lx : CE(i); n > r; ) {
    if (n - r > 600) {
      const s = n - r + 1, c = t - r + 1, u = Math.log(s), d = 0.5 * Math.exp(2 * u / 3), p = 0.5 * Math.sqrt(u * d * (s - d) / s) * (c - s / 2 < 0 ? -1 : 1), h = Math.max(r, Math.floor(t - c * d / s + p)), g = Math.min(n, Math.floor(t + (s - c) * d / s + p));
      sx(e, t, h, g, i);
    }
    const o = e[t];
    let a = r, l = n;
    for (xi(e, r, t), i(e[n], o) > 0 && xi(e, r, n); a < l; ) {
      for (xi(e, a, l), ++a, --l; i(e[a], o) < 0; ) ++a;
      for (; i(e[l], o) > 0; ) --l;
    }
    i(e[r], o) === 0 ? xi(e, r, l) : (++l, xi(e, l, n)), l <= t && (r = l + 1), t <= l && (n = l - 1);
  }
  return e;
}
function xi(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function AE(e, t, r) {
  if (e = Float64Array.from(wE(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return Ov(e);
    if (t >= 1) return Sv(e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = Sv(sx(e, o).subarray(0, o + 1)), l = Ov(e.subarray(o + 1));
    return a + (l - a) * (i - o);
  }
}
function TE(e, t, r = ax) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, o = Math.floor(i), a = +r(e[o], o, e), l = +r(e[o + 1], o + 1, e);
    return a + (l - a) * (i - o);
  }
}
function IE(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, o = new Array(i); ++n < i; )
    o[n] = e + n * r;
  return o;
}
function Gt(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Mr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const Zc = Symbol("implicit");
function Ju() {
  var e = new wv(), t = [], r = [], n = Zc;
  function i(o) {
    let a = e.get(o);
    if (a === void 0) {
      if (n !== Zc) return n;
      e.set(o, a = t.push(o) - 1);
    }
    return r[a % r.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return t.slice();
    t = [], e = new wv();
    for (const a of o)
      e.has(a) || e.set(a, t.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (r = Array.from(o), i) : r.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return Ju(t, r).unknown(n);
  }, Gt.apply(i, arguments), i;
}
function Qu() {
  var e = Ju().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, o, a, l = !1, s = 0, c = 0, u = 0.5;
  delete e.unknown;
  function d() {
    var p = t().length, h = i < n, g = h ? i : n, v = h ? n : i;
    o = (v - g) / Math.max(1, p - s + c * 2), l && (o = Math.floor(o)), g += (v - g - o * (p - s)) * u, a = o * (1 - s), l && (g = Math.round(g), a = Math.round(a));
    var y = IE(p).map(function(m) {
      return g + o * m;
    });
    return r(h ? y.reverse() : y);
  }
  return e.domain = function(p) {
    return arguments.length ? (t(p), d()) : t();
  }, e.range = function(p) {
    return arguments.length ? ([n, i] = p, n = +n, i = +i, d()) : [n, i];
  }, e.rangeRound = function(p) {
    return [n, i] = p, n = +n, i = +i, l = !0, d();
  }, e.bandwidth = function() {
    return a;
  }, e.step = function() {
    return o;
  }, e.round = function(p) {
    return arguments.length ? (l = !!p, d()) : l;
  }, e.padding = function(p) {
    return arguments.length ? (s = Math.min(1, c = +p), d()) : s;
  }, e.paddingInner = function(p) {
    return arguments.length ? (s = Math.min(1, p), d()) : s;
  }, e.paddingOuter = function(p) {
    return arguments.length ? (c = +p, d()) : c;
  }, e.align = function(p) {
    return arguments.length ? (u = Math.max(0, Math.min(1, p)), d()) : u;
  }, e.copy = function() {
    return Qu(t(), [n, i]).round(l).paddingInner(s).paddingOuter(c).align(u);
  }, Gt.apply(d(), arguments);
}
function cx(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return cx(t());
  }, e;
}
function ME() {
  return cx(Qu.apply(null, arguments).paddingInner(1));
}
function ed(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function ux(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function lo() {
}
var Fi = 0.7, Oa = 1 / Fi, Vn = "\\s*([+-]?\\d+)\\s*", Vi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", DE = /^#([0-9a-f]{3,8})$/, NE = new RegExp(`^rgb\\(${Vn},${Vn},${Vn}\\)$`), RE = new RegExp(`^rgb\\(${ur},${ur},${ur}\\)$`), $E = new RegExp(`^rgba\\(${Vn},${Vn},${Vn},${Vi}\\)$`), zE = new RegExp(`^rgba\\(${ur},${ur},${ur},${Vi}\\)$`), LE = new RegExp(`^hsl\\(${Vi},${ur},${ur}\\)$`), BE = new RegExp(`^hsla\\(${Vi},${ur},${ur},${Vi}\\)$`), Pv = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ed(lo, Ki, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Cv,
  // Deprecated! Use color.formatHex.
  formatHex: Cv,
  formatHex8: WE,
  formatHsl: FE,
  formatRgb: _v,
  toString: _v
});
function Cv() {
  return this.rgb().formatHex();
}
function WE() {
  return this.rgb().formatHex8();
}
function FE() {
  return dx(this).formatHsl();
}
function _v() {
  return this.rgb().formatRgb();
}
function Ki(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = DE.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ev(t) : r === 3 ? new Et(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Ro(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Ro(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = NE.exec(e)) ? new Et(t[1], t[2], t[3], 1) : (t = RE.exec(e)) ? new Et(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $E.exec(e)) ? Ro(t[1], t[2], t[3], t[4]) : (t = zE.exec(e)) ? Ro(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = LE.exec(e)) ? Tv(t[1], t[2] / 100, t[3] / 100, 1) : (t = BE.exec(e)) ? Tv(t[1], t[2] / 100, t[3] / 100, t[4]) : Pv.hasOwnProperty(e) ? Ev(Pv[e]) : e === "transparent" ? new Et(NaN, NaN, NaN, 0) : null;
}
function Ev(e) {
  return new Et(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Ro(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Et(e, t, r, n);
}
function VE(e) {
  return e instanceof lo || (e = Ki(e)), e ? (e = e.rgb(), new Et(e.r, e.g, e.b, e.opacity)) : new Et();
}
function Jc(e, t, r, n) {
  return arguments.length === 1 ? VE(e) : new Et(e, t, r, n ?? 1);
}
function Et(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
ed(Et, Jc, ux(lo, {
  brighter(e) {
    return e = e == null ? Oa : Math.pow(Oa, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new Et(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Et(fn(this.r), fn(this.g), fn(this.b), Pa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: kv,
  // Deprecated! Use color.formatHex.
  formatHex: kv,
  formatHex8: KE,
  formatRgb: Av,
  toString: Av
}));
function kv() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}`;
}
function KE() {
  return `#${an(this.r)}${an(this.g)}${an(this.b)}${an((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Av() {
  const e = Pa(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${fn(this.r)}, ${fn(this.g)}, ${fn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Pa(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function fn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function an(e) {
  return e = fn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Tv(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Zt(e, t, r, n);
}
function dx(e) {
  if (e instanceof Zt) return new Zt(e.h, e.s, e.l, e.opacity);
  if (e instanceof lo || (e = Ki(e)), !e) return new Zt();
  if (e instanceof Zt) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), o = Math.max(t, r, n), a = NaN, l = o - i, s = (o + i) / 2;
  return l ? (t === o ? a = (r - n) / l + (r < n) * 6 : r === o ? a = (n - t) / l + 2 : a = (t - r) / l + 4, l /= s < 0.5 ? o + i : 2 - o - i, a *= 60) : l = s > 0 && s < 1 ? 0 : a, new Zt(a, l, s, e.opacity);
}
function HE(e, t, r, n) {
  return arguments.length === 1 ? dx(e) : new Zt(e, t, r, n ?? 1);
}
function Zt(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
ed(Zt, HE, ux(lo, {
  brighter(e) {
    return e = e == null ? Oa : Math.pow(Oa, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Fi : Math.pow(Fi, e), new Zt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Et(
      Qs(e >= 240 ? e - 240 : e + 120, i, n),
      Qs(e, i, n),
      Qs(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new Zt(Iv(this.h), $o(this.s), $o(this.l), Pa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Pa(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Iv(this.h)}, ${$o(this.s) * 100}%, ${$o(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Iv(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function $o(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Qs(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const td = (e) => () => e;
function qE(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function UE(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function YE(e) {
  return (e = +e) == 1 ? fx : function(t, r) {
    return r - t ? UE(t, r, e) : td(isNaN(t) ? r : t);
  };
}
function fx(e, t) {
  var r = t - e;
  return r ? qE(e, r) : td(isNaN(e) ? t : e);
}
const Mv = (function e(t) {
  var r = YE(t);
  function n(i, o) {
    var a = r((i = Jc(i)).r, (o = Jc(o)).r), l = r(i.g, o.g), s = r(i.b, o.b), c = fx(i.opacity, o.opacity);
    return function(u) {
      return i.r = a(u), i.g = l(u), i.b = s(u), i.opacity = c(u), i + "";
    };
  }
  return n.gamma = e, n;
})(1);
function GE(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(o) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - o) + t[i] * o;
    return n;
  };
}
function XE(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function ZE(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), o = new Array(r), a;
  for (a = 0; a < n; ++a) i[a] = oi(e[a], t[a]);
  for (; a < r; ++a) o[a] = t[a];
  return function(l) {
    for (a = 0; a < n; ++a) o[a] = i[a](l);
    return o;
  };
}
function JE(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Ca(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function QE(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = oi(e[i], t[i]) : n[i] = t[i];
  return function(o) {
    for (i in r) n[i] = r[i](o);
    return n;
  };
}
var Qc = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ec = new RegExp(Qc.source, "g");
function ek(e) {
  return function() {
    return e;
  };
}
function tk(e) {
  return function(t) {
    return e(t) + "";
  };
}
function rk(e, t) {
  var r = Qc.lastIndex = ec.lastIndex = 0, n, i, o, a = -1, l = [], s = [];
  for (e = e + "", t = t + ""; (n = Qc.exec(e)) && (i = ec.exec(t)); )
    (o = i.index) > r && (o = t.slice(r, o), l[a] ? l[a] += o : l[++a] = o), (n = n[0]) === (i = i[0]) ? l[a] ? l[a] += i : l[++a] = i : (l[++a] = null, s.push({ i: a, x: Ca(n, i) })), r = ec.lastIndex;
  return r < t.length && (o = t.slice(r), l[a] ? l[a] += o : l[++a] = o), l.length < 2 ? s[0] ? tk(s[0].x) : ek(t) : (t = s.length, function(c) {
    for (var u = 0, d; u < t; ++u) l[(d = s[u]).i] = d.x(c);
    return l.join("");
  });
}
function oi(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? td(t) : (r === "number" ? Ca : r === "string" ? (n = Ki(t)) ? (t = n, Mv) : rk : t instanceof Ki ? Mv : t instanceof Date ? JE : XE(t) ? GE : Array.isArray(t) ? ZE : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? QE : Ca)(e, t);
}
function rd(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function nk(e, t) {
  t === void 0 && (t = e, e = oi);
  for (var r = 0, n = t.length - 1, i = t[0], o = new Array(n < 0 ? 0 : n); r < n; ) o[r] = e(i, i = t[++r]);
  return function(a) {
    var l = Math.max(0, Math.min(n - 1, Math.floor(a *= n)));
    return o[l](a - l);
  };
}
function ik(e) {
  return function() {
    return e;
  };
}
function _a(e) {
  return +e;
}
var Dv = [0, 1];
function bt(e) {
  return e;
}
function eu(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : ik(isNaN(t) ? NaN : 0.5);
}
function ok(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function ak(e, t, r) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  return i < n ? (n = eu(i, n), o = r(a, o)) : (n = eu(n, i), o = r(o, a)), function(l) {
    return o(n(l));
  };
}
function lk(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), o = new Array(n), a = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < n; )
    i[a] = eu(e[a], e[a + 1]), o[a] = r(t[a], t[a + 1]);
  return function(l) {
    var s = ao(e, l, 1, n) - 1;
    return o[s](i[s](l));
  };
}
function so(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Cl() {
  var e = Dv, t = Dv, r = oi, n, i, o, a = bt, l, s, c;
  function u() {
    var p = Math.min(e.length, t.length);
    return a !== bt && (a = ok(e[0], e[p - 1])), l = p > 2 ? lk : ak, s = c = null, d;
  }
  function d(p) {
    return p == null || isNaN(p = +p) ? o : (s || (s = l(e.map(n), t, r)))(n(a(p)));
  }
  return d.invert = function(p) {
    return a(i((c || (c = l(t, e.map(n), Ca)))(p)));
  }, d.domain = function(p) {
    return arguments.length ? (e = Array.from(p, _a), u()) : e.slice();
  }, d.range = function(p) {
    return arguments.length ? (t = Array.from(p), u()) : t.slice();
  }, d.rangeRound = function(p) {
    return t = Array.from(p), r = rd, u();
  }, d.clamp = function(p) {
    return arguments.length ? (a = p ? !0 : bt, u()) : a !== bt;
  }, d.interpolate = function(p) {
    return arguments.length ? (r = p, u()) : r;
  }, d.unknown = function(p) {
    return arguments.length ? (o = p, d) : o;
  }, function(p, h) {
    return n = p, i = h, u();
  };
}
function nd() {
  return Cl()(bt, bt);
}
function sk(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Ea(e, t) {
  if (!isFinite(e) || e === 0) return null;
  var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"), n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Gn(e) {
  return e = Ea(Math.abs(e)), e ? e[1] : NaN;
}
function ck(e, t) {
  return function(r, n) {
    for (var i = r.length, o = [], a = 0, l = e[0], s = 0; i > 0 && l > 0 && (s + l + 1 > n && (l = Math.max(1, n - s)), o.push(r.substring(i -= l, i + l)), !((s += l + 1) > n)); )
      l = e[a = (a + 1) % e.length];
    return o.reverse().join(t);
  };
}
function uk(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var dk = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Hi(e) {
  if (!(t = dk.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new id({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
Hi.prototype = id.prototype;
function id(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
id.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function fk(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var ka;
function pk(e, t) {
  var r = Ea(e, t);
  if (!r) return ka = void 0, e.toPrecision(t);
  var n = r[0], i = r[1], o = i - (ka = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = n.length;
  return o === a ? n : o > a ? n + new Array(o - a + 1).join("0") : o > 0 ? n.slice(0, o) + "." + n.slice(o) : "0." + new Array(1 - o).join("0") + Ea(e, Math.max(0, t + o - 1))[0];
}
function Nv(e, t) {
  var r = Ea(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Rv = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sk,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Nv(e * 100, t),
  r: Nv,
  s: pk,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function $v(e) {
  return e;
}
var zv = Array.prototype.map, Lv = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hk(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? $v : ck(zv.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", o = e.numerals === void 0 ? $v : uk(zv.call(e.numerals, String)), a = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", s = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(d, p) {
    d = Hi(d);
    var h = d.fill, g = d.align, v = d.sign, y = d.symbol, m = d.zero, b = d.width, w = d.comma, x = d.precision, S = d.trim, O = d.type;
    O === "n" ? (w = !0, O = "g") : Rv[O] || (x === void 0 && (x = 12), S = !0, O = "g"), (m || h === "0" && g === "=") && (m = !0, h = "0", g = "=");
    var C = (p && p.prefix !== void 0 ? p.prefix : "") + (y === "$" ? r : y === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : ""), E = (y === "$" ? n : /[%p]/.test(O) ? a : "") + (p && p.suffix !== void 0 ? p.suffix : ""), M = Rv[O], D = /[defgprs%]/.test(O);
    x = x === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, x)) : Math.max(0, Math.min(20, x));
    function N(_) {
      var L = C, F = E, Y, Q, ie;
      if (O === "c")
        F = M(_) + F, _ = "";
      else {
        _ = +_;
        var R = _ < 0 || 1 / _ < 0;
        if (_ = isNaN(_) ? s : M(Math.abs(_), x), S && (_ = fk(_)), R && +_ == 0 && v !== "+" && (R = !1), L = (R ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + L, F = (O === "s" && !isNaN(_) && ka !== void 0 ? Lv[8 + ka / 3] : "") + F + (R && v === "(" ? ")" : ""), D) {
          for (Y = -1, Q = _.length; ++Y < Q; )
            if (ie = _.charCodeAt(Y), 48 > ie || ie > 57) {
              F = (ie === 46 ? i + _.slice(Y + 1) : _.slice(Y)) + F, _ = _.slice(0, Y);
              break;
            }
        }
      }
      w && !m && (_ = t(_, 1 / 0));
      var re = L.length + _.length + F.length, ee = re < b ? new Array(b - re + 1).join(h) : "";
      switch (w && m && (_ = t(ee + _, ee.length ? b - F.length : 1 / 0), ee = ""), g) {
        case "<":
          _ = L + _ + F + ee;
          break;
        case "=":
          _ = L + ee + _ + F;
          break;
        case "^":
          _ = ee.slice(0, re = ee.length >> 1) + L + _ + F + ee.slice(re);
          break;
        default:
          _ = ee + L + _ + F;
          break;
      }
      return o(_);
    }
    return N.toString = function() {
      return d + "";
    }, N;
  }
  function u(d, p) {
    var h = Math.max(-8, Math.min(8, Math.floor(Gn(p) / 3))) * 3, g = Math.pow(10, -h), v = c((d = Hi(d), d.type = "f", d), { suffix: Lv[8 + h / 3] });
    return function(y) {
      return v(g * y);
    };
  }
  return {
    format: c,
    formatPrefix: u
  };
}
var zo, od, px;
vk({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function vk(e) {
  return zo = hk(e), od = zo.format, px = zo.formatPrefix, zo;
}
function gk(e) {
  return Math.max(0, -Gn(Math.abs(e)));
}
function yk(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Gn(t) / 3))) * 3 - Gn(Math.abs(e)));
}
function mk(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Gn(t) - Gn(e)) + 1;
}
function hx(e, t, r, n) {
  var i = Xc(e, t, r), o;
  switch (n = Hi(n ?? ",f"), n.type) {
    case "s": {
      var a = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(o = yk(i, a)) && (n.precision = o), px(n, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(o = mk(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = o - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(o = gk(i)) && (n.precision = o - (n.type === "%") * 2);
      break;
    }
  }
  return od(n);
}
function Yr(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return Yc(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return hx(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, o = n.length - 1, a = n[i], l = n[o], s, c, u = 10;
    for (l < a && (c = a, a = l, l = c, c = i, i = o, o = c); u-- > 0; ) {
      if (c = Gc(a, l, r), c === s)
        return n[i] = a, n[o] = l, t(n);
      if (c > 0)
        a = Math.floor(a / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        a = Math.ceil(a * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      s = c;
    }
    return e;
  }, e;
}
function vx() {
  var e = nd();
  return e.copy = function() {
    return so(e, vx());
  }, Gt.apply(e, arguments), Yr(e);
}
function gx(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, _a), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return gx(e).unknown(t);
  }, e = arguments.length ? Array.from(e, _a) : [0, 1], Yr(r);
}
function yx(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], o = e[n], a;
  return o < i && (a = r, r = n, n = a, a = i, i = o, o = a), e[r] = t.floor(i), e[n] = t.ceil(o), e;
}
function Bv(e) {
  return Math.log(e);
}
function Wv(e) {
  return Math.exp(e);
}
function xk(e) {
  return -Math.log(-e);
}
function bk(e) {
  return -Math.exp(-e);
}
function wk(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function jk(e) {
  return e === 10 ? wk : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function Sk(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function Fv(e) {
  return (t, r) => -e(-t, r);
}
function ad(e) {
  const t = e(Bv, Wv), r = t.domain;
  let n = 10, i, o;
  function a() {
    return i = Sk(n), o = jk(n), r()[0] < 0 ? (i = Fv(i), o = Fv(o), e(xk, bk)) : e(Bv, Wv), t;
  }
  return t.base = function(l) {
    return arguments.length ? (n = +l, a()) : n;
  }, t.domain = function(l) {
    return arguments.length ? (r(l), a()) : r();
  }, t.ticks = (l) => {
    const s = r();
    let c = s[0], u = s[s.length - 1];
    const d = u < c;
    d && ([c, u] = [u, c]);
    let p = i(c), h = i(u), g, v;
    const y = l == null ? 10 : +l;
    let m = [];
    if (!(n % 1) && h - p < y) {
      if (p = Math.floor(p), h = Math.ceil(h), c > 0) {
        for (; p <= h; ++p)
          for (g = 1; g < n; ++g)
            if (v = p < 0 ? g / o(-p) : g * o(p), !(v < c)) {
              if (v > u) break;
              m.push(v);
            }
      } else for (; p <= h; ++p)
        for (g = n - 1; g >= 1; --g)
          if (v = p > 0 ? g / o(-p) : g * o(p), !(v < c)) {
            if (v > u) break;
            m.push(v);
          }
      m.length * 2 < y && (m = Yc(c, u, y));
    } else
      m = Yc(p, h, Math.min(h - p, y)).map(o);
    return d ? m.reverse() : m;
  }, t.tickFormat = (l, s) => {
    if (l == null && (l = 10), s == null && (s = n === 10 ? "s" : ","), typeof s != "function" && (!(n % 1) && (s = Hi(s)).precision == null && (s.trim = !0), s = od(s)), l === 1 / 0) return s;
    const c = Math.max(1, n * l / t.ticks().length);
    return (u) => {
      let d = u / o(Math.round(i(u)));
      return d * n < n - 0.5 && (d *= n), d <= c ? s(u) : "";
    };
  }, t.nice = () => r(yx(r(), {
    floor: (l) => o(Math.floor(i(l))),
    ceil: (l) => o(Math.ceil(i(l)))
  })), t;
}
function mx() {
  const e = ad(Cl()).domain([1, 10]);
  return e.copy = () => so(e, mx()).base(e.base()), Gt.apply(e, arguments), e;
}
function Vv(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function Kv(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function ld(e) {
  var t = 1, r = e(Vv(t), Kv(t));
  return r.constant = function(n) {
    return arguments.length ? e(Vv(t = +n), Kv(t)) : t;
  }, Yr(r);
}
function xx() {
  var e = ld(Cl());
  return e.copy = function() {
    return so(e, xx()).constant(e.constant());
  }, Gt.apply(e, arguments);
}
function Hv(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Ok(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Pk(e) {
  return e < 0 ? -e * e : e * e;
}
function sd(e) {
  var t = e(bt, bt), r = 1;
  function n() {
    return r === 1 ? e(bt, bt) : r === 0.5 ? e(Ok, Pk) : e(Hv(r), Hv(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, Yr(t);
}
function cd() {
  var e = sd(Cl());
  return e.copy = function() {
    return so(e, cd()).exponent(e.exponent());
  }, Gt.apply(e, arguments), e;
}
function Ck() {
  return cd.apply(null, arguments).exponent(0.5);
}
function qv(e) {
  return Math.sign(e) * e * e;
}
function _k(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function bx() {
  var e = nd(), t = [0, 1], r = !1, n;
  function i(o) {
    var a = _k(e(o));
    return isNaN(a) ? n : r ? Math.round(a) : a;
  }
  return i.invert = function(o) {
    return e.invert(qv(o));
  }, i.domain = function(o) {
    return arguments.length ? (e.domain(o), i) : e.domain();
  }, i.range = function(o) {
    return arguments.length ? (e.range((t = Array.from(o, _a)).map(qv)), i) : t.slice();
  }, i.rangeRound = function(o) {
    return i.range(o).round(!0);
  }, i.round = function(o) {
    return arguments.length ? (r = !!o, i) : r;
  }, i.clamp = function(o) {
    return arguments.length ? (e.clamp(o), i) : e.clamp();
  }, i.unknown = function(o) {
    return arguments.length ? (n = o, i) : n;
  }, i.copy = function() {
    return bx(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Gt.apply(i, arguments), Yr(i);
}
function wx() {
  var e = [], t = [], r = [], n;
  function i() {
    var a = 0, l = Math.max(1, t.length);
    for (r = new Array(l - 1); ++a < l; ) r[a - 1] = TE(e, a / l);
    return o;
  }
  function o(a) {
    return a == null || isNaN(a = +a) ? n : t[ao(r, a)];
  }
  return o.invertExtent = function(a) {
    var l = t.indexOf(a);
    return l < 0 ? [NaN, NaN] : [
      l > 0 ? r[l - 1] : e[0],
      l < r.length ? r[l] : e[e.length - 1]
    ];
  }, o.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let l of a) l != null && !isNaN(l = +l) && e.push(l);
    return e.sort(Vr), i();
  }, o.range = function(a) {
    return arguments.length ? (t = Array.from(a), i()) : t.slice();
  }, o.unknown = function(a) {
    return arguments.length ? (n = a, o) : n;
  }, o.quantiles = function() {
    return r.slice();
  }, o.copy = function() {
    return wx().domain(e).range(t).unknown(n);
  }, Gt.apply(o, arguments);
}
function jx() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], o;
  function a(s) {
    return s != null && s <= s ? i[ao(n, s, 0, r)] : o;
  }
  function l() {
    var s = -1;
    for (n = new Array(r); ++s < r; ) n[s] = ((s + 1) * t - (s - r) * e) / (r + 1);
    return a;
  }
  return a.domain = function(s) {
    return arguments.length ? ([e, t] = s, e = +e, t = +t, l()) : [e, t];
  }, a.range = function(s) {
    return arguments.length ? (r = (i = Array.from(s)).length - 1, l()) : i.slice();
  }, a.invertExtent = function(s) {
    var c = i.indexOf(s);
    return c < 0 ? [NaN, NaN] : c < 1 ? [e, n[0]] : c >= r ? [n[r - 1], t] : [n[c - 1], n[c]];
  }, a.unknown = function(s) {
    return arguments.length && (o = s), a;
  }, a.thresholds = function() {
    return n.slice();
  }, a.copy = function() {
    return jx().domain([e, t]).range(i).unknown(o);
  }, Gt.apply(Yr(a), arguments);
}
function Sx() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(o) {
    return o != null && o <= o ? t[ao(e, o, 0, n)] : r;
  }
  return i.domain = function(o) {
    return arguments.length ? (e = Array.from(o), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(o) {
    return arguments.length ? (t = Array.from(o), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(o) {
    var a = t.indexOf(o);
    return [e[a - 1], e[a]];
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return Sx().domain(e).range(t).unknown(r);
  }, Gt.apply(i, arguments);
}
const tc = /* @__PURE__ */ new Date(), rc = /* @__PURE__ */ new Date();
function Je(e, t, r, n) {
  function i(o) {
    return e(o = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+o)), o;
  }
  return i.floor = (o) => (e(o = /* @__PURE__ */ new Date(+o)), o), i.ceil = (o) => (e(o = new Date(o - 1)), t(o, 1), e(o), o), i.round = (o) => {
    const a = i(o), l = i.ceil(o);
    return o - a < l - o ? a : l;
  }, i.offset = (o, a) => (t(o = /* @__PURE__ */ new Date(+o), a == null ? 1 : Math.floor(a)), o), i.range = (o, a, l) => {
    const s = [];
    if (o = i.ceil(o), l = l == null ? 1 : Math.floor(l), !(o < a) || !(l > 0)) return s;
    let c;
    do
      s.push(c = /* @__PURE__ */ new Date(+o)), t(o, l), e(o);
    while (c < o && o < a);
    return s;
  }, i.filter = (o) => Je((a) => {
    if (a >= a) for (; e(a), !o(a); ) a.setTime(a - 1);
  }, (a, l) => {
    if (a >= a)
      if (l < 0) for (; ++l <= 0; )
        for (; t(a, -1), !o(a); )
          ;
      else for (; --l >= 0; )
        for (; t(a, 1), !o(a); )
          ;
  }), r && (i.count = (o, a) => (tc.setTime(+o), rc.setTime(+a), e(tc), e(rc), Math.floor(r(tc, rc))), i.every = (o) => (o = Math.floor(o), !isFinite(o) || !(o > 0) ? null : o > 1 ? i.filter(n ? (a) => n(a) % o === 0 : (a) => i.count(0, a) % o === 0) : i)), i;
}
const Aa = Je(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Aa.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Je((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Aa);
Aa.range;
const jr = 1e3, Ht = jr * 60, Sr = Ht * 60, Er = Sr * 24, ud = Er * 7, Uv = Er * 30, nc = Er * 365, ln = Je((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * jr);
}, (e, t) => (t - e) / jr, (e) => e.getUTCSeconds());
ln.range;
const dd = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getMinutes());
dd.range;
const fd = Je((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ht);
}, (e, t) => (t - e) / Ht, (e) => e.getUTCMinutes());
fd.range;
const pd = Je((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * jr - e.getMinutes() * Ht);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getHours());
pd.range;
const hd = Je((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Sr);
}, (e, t) => (t - e) / Sr, (e) => e.getUTCHours());
hd.range;
const co = Je(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ht) / Er,
  (e) => e.getDate() - 1
);
co.range;
const _l = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Er, (e) => e.getUTCDate() - 1);
_l.range;
const Ox = Je((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Er, (e) => Math.floor(e / Er));
Ox.range;
function Cn(e) {
  return Je((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ht) / ud);
}
const El = Cn(0), Ta = Cn(1), Ek = Cn(2), kk = Cn(3), Xn = Cn(4), Ak = Cn(5), Tk = Cn(6);
El.range;
Ta.range;
Ek.range;
kk.range;
Xn.range;
Ak.range;
Tk.range;
function _n(e) {
  return Je((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / ud);
}
const kl = _n(0), Ia = _n(1), Ik = _n(2), Mk = _n(3), Zn = _n(4), Dk = _n(5), Nk = _n(6);
kl.range;
Ia.range;
Ik.range;
Mk.range;
Zn.range;
Dk.range;
Nk.range;
const vd = Je((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
vd.range;
const gd = Je((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
gd.range;
const kr = Je((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
kr.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
kr.range;
const Ar = Je((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ar.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Je((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ar.range;
function Px(e, t, r, n, i, o) {
  const a = [
    [ln, 1, jr],
    [ln, 5, 5 * jr],
    [ln, 15, 15 * jr],
    [ln, 30, 30 * jr],
    [o, 1, Ht],
    [o, 5, 5 * Ht],
    [o, 15, 15 * Ht],
    [o, 30, 30 * Ht],
    [i, 1, Sr],
    [i, 3, 3 * Sr],
    [i, 6, 6 * Sr],
    [i, 12, 12 * Sr],
    [n, 1, Er],
    [n, 2, 2 * Er],
    [r, 1, ud],
    [t, 1, Uv],
    [t, 3, 3 * Uv],
    [e, 1, nc]
  ];
  function l(c, u, d) {
    const p = u < c;
    p && ([c, u] = [u, c]);
    const h = d && typeof d.range == "function" ? d : s(c, u, d), g = h ? h.range(c, +u + 1) : [];
    return p ? g.reverse() : g;
  }
  function s(c, u, d) {
    const p = Math.abs(u - c) / d, h = Zu(([, , y]) => y).right(a, p);
    if (h === a.length) return e.every(Xc(c / nc, u / nc, d));
    if (h === 0) return Aa.every(Math.max(Xc(c, u, d), 1));
    const [g, v] = a[p / a[h - 1][2] < a[h][2] / p ? h - 1 : h];
    return g.every(v);
  }
  return [l, s];
}
const [Rk, $k] = Px(Ar, gd, kl, Ox, hd, fd), [zk, Lk] = Px(kr, vd, El, co, pd, dd);
function ic(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function oc(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function bi(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Bk(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, o = e.days, a = e.shortDays, l = e.months, s = e.shortMonths, c = wi(i), u = ji(i), d = wi(o), p = ji(o), h = wi(a), g = ji(a), v = wi(l), y = ji(l), m = wi(s), b = ji(s), w = {
    a: ie,
    A: R,
    b: re,
    B: ee,
    c: null,
    d: Qv,
    e: Qv,
    f: cA,
    g: xA,
    G: wA,
    H: aA,
    I: lA,
    j: sA,
    L: Cx,
    m: uA,
    M: dA,
    p: $,
    q: B,
    Q: rg,
    s: ng,
    S: fA,
    u: pA,
    U: hA,
    V: vA,
    w: gA,
    W: yA,
    x: null,
    X: null,
    y: mA,
    Y: bA,
    Z: jA,
    "%": tg
  }, x = {
    a: z,
    A: H,
    b: le,
    B: me,
    c: null,
    d: eg,
    e: eg,
    f: CA,
    g: RA,
    G: zA,
    H: SA,
    I: OA,
    j: PA,
    L: Ex,
    m: _A,
    M: EA,
    p: de,
    q: ue,
    Q: rg,
    s: ng,
    S: kA,
    u: AA,
    U: TA,
    V: IA,
    w: MA,
    W: DA,
    x: null,
    X: null,
    y: NA,
    Y: $A,
    Z: LA,
    "%": tg
  }, S = {
    a: D,
    A: N,
    b: _,
    B: L,
    c: F,
    d: Zv,
    e: Zv,
    f: rA,
    g: Xv,
    G: Gv,
    H: Jv,
    I: Jv,
    j: Jk,
    L: tA,
    m: Zk,
    M: Qk,
    p: M,
    q: Xk,
    Q: iA,
    s: oA,
    S: eA,
    u: Hk,
    U: qk,
    V: Uk,
    w: Kk,
    W: Yk,
    x: Y,
    X: Q,
    y: Xv,
    Y: Gv,
    Z: Gk,
    "%": nA
  };
  w.x = O(r, w), w.X = O(n, w), w.c = O(t, w), x.x = O(r, x), x.X = O(n, x), x.c = O(t, x);
  function O(X, G) {
    return function(ae) {
      var V = [], Me = -1, xe = 0, T = X.length, q, K, he;
      for (ae instanceof Date || (ae = /* @__PURE__ */ new Date(+ae)); ++Me < T; )
        X.charCodeAt(Me) === 37 && (V.push(X.slice(xe, Me)), (K = Yv[q = X.charAt(++Me)]) != null ? q = X.charAt(++Me) : K = q === "e" ? " " : "0", (he = G[q]) && (q = he(ae, K)), V.push(q), xe = Me + 1);
      return V.push(X.slice(xe, Me)), V.join("");
    };
  }
  function C(X, G) {
    return function(ae) {
      var V = bi(1900, void 0, 1), Me = E(V, X, ae += "", 0), xe, T;
      if (Me != ae.length) return null;
      if ("Q" in V) return new Date(V.Q);
      if ("s" in V) return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (G && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53) return null;
        "w" in V || (V.w = 1), "Z" in V ? (xe = oc(bi(V.y, 0, 1)), T = xe.getUTCDay(), xe = T > 4 || T === 0 ? Ia.ceil(xe) : Ia(xe), xe = _l.offset(xe, (V.V - 1) * 7), V.y = xe.getUTCFullYear(), V.m = xe.getUTCMonth(), V.d = xe.getUTCDate() + (V.w + 6) % 7) : (xe = ic(bi(V.y, 0, 1)), T = xe.getDay(), xe = T > 4 || T === 0 ? Ta.ceil(xe) : Ta(xe), xe = co.offset(xe, (V.V - 1) * 7), V.y = xe.getFullYear(), V.m = xe.getMonth(), V.d = xe.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), T = "Z" in V ? oc(bi(V.y, 0, 1)).getUTCDay() : ic(bi(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (T + 5) % 7 : V.w + V.U * 7 - (T + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, oc(V)) : ic(V);
    };
  }
  function E(X, G, ae, V) {
    for (var Me = 0, xe = G.length, T = ae.length, q, K; Me < xe; ) {
      if (V >= T) return -1;
      if (q = G.charCodeAt(Me++), q === 37) {
        if (q = G.charAt(Me++), K = S[q in Yv ? G.charAt(Me++) : q], !K || (V = K(X, ae, V)) < 0) return -1;
      } else if (q != ae.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function M(X, G, ae) {
    var V = c.exec(G.slice(ae));
    return V ? (X.p = u.get(V[0].toLowerCase()), ae + V[0].length) : -1;
  }
  function D(X, G, ae) {
    var V = h.exec(G.slice(ae));
    return V ? (X.w = g.get(V[0].toLowerCase()), ae + V[0].length) : -1;
  }
  function N(X, G, ae) {
    var V = d.exec(G.slice(ae));
    return V ? (X.w = p.get(V[0].toLowerCase()), ae + V[0].length) : -1;
  }
  function _(X, G, ae) {
    var V = m.exec(G.slice(ae));
    return V ? (X.m = b.get(V[0].toLowerCase()), ae + V[0].length) : -1;
  }
  function L(X, G, ae) {
    var V = v.exec(G.slice(ae));
    return V ? (X.m = y.get(V[0].toLowerCase()), ae + V[0].length) : -1;
  }
  function F(X, G, ae) {
    return E(X, t, G, ae);
  }
  function Y(X, G, ae) {
    return E(X, r, G, ae);
  }
  function Q(X, G, ae) {
    return E(X, n, G, ae);
  }
  function ie(X) {
    return a[X.getDay()];
  }
  function R(X) {
    return o[X.getDay()];
  }
  function re(X) {
    return s[X.getMonth()];
  }
  function ee(X) {
    return l[X.getMonth()];
  }
  function $(X) {
    return i[+(X.getHours() >= 12)];
  }
  function B(X) {
    return 1 + ~~(X.getMonth() / 3);
  }
  function z(X) {
    return a[X.getUTCDay()];
  }
  function H(X) {
    return o[X.getUTCDay()];
  }
  function le(X) {
    return s[X.getUTCMonth()];
  }
  function me(X) {
    return l[X.getUTCMonth()];
  }
  function de(X) {
    return i[+(X.getUTCHours() >= 12)];
  }
  function ue(X) {
    return 1 + ~~(X.getUTCMonth() / 3);
  }
  return {
    format: function(X) {
      var G = O(X += "", w);
      return G.toString = function() {
        return X;
      }, G;
    },
    parse: function(X) {
      var G = C(X += "", !1);
      return G.toString = function() {
        return X;
      }, G;
    },
    utcFormat: function(X) {
      var G = O(X += "", x);
      return G.toString = function() {
        return X;
      }, G;
    },
    utcParse: function(X) {
      var G = C(X += "", !0);
      return G.toString = function() {
        return X;
      }, G;
    }
  };
}
var Yv = { "-": "", _: " ", 0: "0" }, ot = /^\s*\d+/, Wk = /^%/, Fk = /[\\^$*+?|[\]().{}]/g;
function we(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", o = i.length;
  return n + (o < r ? new Array(r - o + 1).join(t) + i : i);
}
function Vk(e) {
  return e.replace(Fk, "\\$&");
}
function wi(e) {
  return new RegExp("^(?:" + e.map(Vk).join("|") + ")", "i");
}
function ji(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Kk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function Hk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function qk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function Uk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function Yk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function Gv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function Xv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function Gk(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function Xk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function Zk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function Zv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function Jk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function Jv(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function Qk(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function eA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function tA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function rA(e, t, r) {
  var n = ot.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function nA(e, t, r) {
  var n = Wk.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function iA(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function oA(e, t, r) {
  var n = ot.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function Qv(e, t) {
  return we(e.getDate(), t, 2);
}
function aA(e, t) {
  return we(e.getHours(), t, 2);
}
function lA(e, t) {
  return we(e.getHours() % 12 || 12, t, 2);
}
function sA(e, t) {
  return we(1 + co.count(kr(e), e), t, 3);
}
function Cx(e, t) {
  return we(e.getMilliseconds(), t, 3);
}
function cA(e, t) {
  return Cx(e, t) + "000";
}
function uA(e, t) {
  return we(e.getMonth() + 1, t, 2);
}
function dA(e, t) {
  return we(e.getMinutes(), t, 2);
}
function fA(e, t) {
  return we(e.getSeconds(), t, 2);
}
function pA(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function hA(e, t) {
  return we(El.count(kr(e) - 1, e), t, 2);
}
function _x(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Xn(e) : Xn.ceil(e);
}
function vA(e, t) {
  return e = _x(e), we(Xn.count(kr(e), e) + (kr(e).getDay() === 4), t, 2);
}
function gA(e) {
  return e.getDay();
}
function yA(e, t) {
  return we(Ta.count(kr(e) - 1, e), t, 2);
}
function mA(e, t) {
  return we(e.getFullYear() % 100, t, 2);
}
function xA(e, t) {
  return e = _x(e), we(e.getFullYear() % 100, t, 2);
}
function bA(e, t) {
  return we(e.getFullYear() % 1e4, t, 4);
}
function wA(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? Xn(e) : Xn.ceil(e), we(e.getFullYear() % 1e4, t, 4);
}
function jA(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + we(t / 60 | 0, "0", 2) + we(t % 60, "0", 2);
}
function eg(e, t) {
  return we(e.getUTCDate(), t, 2);
}
function SA(e, t) {
  return we(e.getUTCHours(), t, 2);
}
function OA(e, t) {
  return we(e.getUTCHours() % 12 || 12, t, 2);
}
function PA(e, t) {
  return we(1 + _l.count(Ar(e), e), t, 3);
}
function Ex(e, t) {
  return we(e.getUTCMilliseconds(), t, 3);
}
function CA(e, t) {
  return Ex(e, t) + "000";
}
function _A(e, t) {
  return we(e.getUTCMonth() + 1, t, 2);
}
function EA(e, t) {
  return we(e.getUTCMinutes(), t, 2);
}
function kA(e, t) {
  return we(e.getUTCSeconds(), t, 2);
}
function AA(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function TA(e, t) {
  return we(kl.count(Ar(e) - 1, e), t, 2);
}
function kx(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Zn(e) : Zn.ceil(e);
}
function IA(e, t) {
  return e = kx(e), we(Zn.count(Ar(e), e) + (Ar(e).getUTCDay() === 4), t, 2);
}
function MA(e) {
  return e.getUTCDay();
}
function DA(e, t) {
  return we(Ia.count(Ar(e) - 1, e), t, 2);
}
function NA(e, t) {
  return we(e.getUTCFullYear() % 100, t, 2);
}
function RA(e, t) {
  return e = kx(e), we(e.getUTCFullYear() % 100, t, 2);
}
function $A(e, t) {
  return we(e.getUTCFullYear() % 1e4, t, 4);
}
function zA(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Zn(e) : Zn.ceil(e), we(e.getUTCFullYear() % 1e4, t, 4);
}
function LA() {
  return "+0000";
}
function tg() {
  return "%";
}
function rg(e) {
  return +e;
}
function ng(e) {
  return Math.floor(+e / 1e3);
}
var Dn, Ax, Tx;
BA({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function BA(e) {
  return Dn = Bk(e), Ax = Dn.format, Dn.parse, Tx = Dn.utcFormat, Dn.utcParse, Dn;
}
function WA(e) {
  return new Date(e);
}
function FA(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function yd(e, t, r, n, i, o, a, l, s, c) {
  var u = nd(), d = u.invert, p = u.domain, h = c(".%L"), g = c(":%S"), v = c("%I:%M"), y = c("%I %p"), m = c("%a %d"), b = c("%b %d"), w = c("%B"), x = c("%Y");
  function S(O) {
    return (s(O) < O ? h : l(O) < O ? g : a(O) < O ? v : o(O) < O ? y : n(O) < O ? i(O) < O ? m : b : r(O) < O ? w : x)(O);
  }
  return u.invert = function(O) {
    return new Date(d(O));
  }, u.domain = function(O) {
    return arguments.length ? p(Array.from(O, FA)) : p().map(WA);
  }, u.ticks = function(O) {
    var C = p();
    return e(C[0], C[C.length - 1], O ?? 10);
  }, u.tickFormat = function(O, C) {
    return C == null ? S : c(C);
  }, u.nice = function(O) {
    var C = p();
    return (!O || typeof O.range != "function") && (O = t(C[0], C[C.length - 1], O ?? 10)), O ? p(yx(C, O)) : u;
  }, u.copy = function() {
    return so(u, yd(e, t, r, n, i, o, a, l, s, c));
  }, u;
}
function VA() {
  return Gt.apply(yd(zk, Lk, kr, vd, El, co, pd, dd, ln, Ax).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function KA() {
  return Gt.apply(yd(Rk, $k, Ar, gd, kl, _l, hd, fd, ln, Tx).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Al() {
  var e = 0, t = 1, r, n, i, o, a = bt, l = !1, s;
  function c(d) {
    return d == null || isNaN(d = +d) ? s : a(i === 0 ? 0.5 : (d = (o(d) - r) * i, l ? Math.max(0, Math.min(1, d)) : d));
  }
  c.domain = function(d) {
    return arguments.length ? ([e, t] = d, r = o(e = +e), n = o(t = +t), i = r === n ? 0 : 1 / (n - r), c) : [e, t];
  }, c.clamp = function(d) {
    return arguments.length ? (l = !!d, c) : l;
  }, c.interpolator = function(d) {
    return arguments.length ? (a = d, c) : a;
  };
  function u(d) {
    return function(p) {
      var h, g;
      return arguments.length ? ([h, g] = p, a = d(h, g), c) : [a(0), a(1)];
    };
  }
  return c.range = u(oi), c.rangeRound = u(rd), c.unknown = function(d) {
    return arguments.length ? (s = d, c) : s;
  }, function(d) {
    return o = d, r = d(e), n = d(t), i = r === n ? 0 : 1 / (n - r), c;
  };
}
function Gr(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function Ix() {
  var e = Yr(Al()(bt));
  return e.copy = function() {
    return Gr(e, Ix());
  }, Mr.apply(e, arguments);
}
function Mx() {
  var e = ad(Al()).domain([1, 10]);
  return e.copy = function() {
    return Gr(e, Mx()).base(e.base());
  }, Mr.apply(e, arguments);
}
function Dx() {
  var e = ld(Al());
  return e.copy = function() {
    return Gr(e, Dx()).constant(e.constant());
  }, Mr.apply(e, arguments);
}
function md() {
  var e = sd(Al());
  return e.copy = function() {
    return Gr(e, md()).exponent(e.exponent());
  }, Mr.apply(e, arguments);
}
function HA() {
  return md.apply(null, arguments).exponent(0.5);
}
function Nx() {
  var e = [], t = bt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((ao(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(Vr), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, o) => AE(e, o / n));
  }, r.copy = function() {
    return Nx(t).domain(e);
  }, Mr.apply(r, arguments);
}
function Tl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, o, a, l, s, c = bt, u, d = !1, p;
  function h(v) {
    return isNaN(v = +v) ? p : (v = 0.5 + ((v = +u(v)) - o) * (n * v < n * o ? l : s), c(d ? Math.max(0, Math.min(1, v)) : v));
  }
  h.domain = function(v) {
    return arguments.length ? ([e, t, r] = v, i = u(e = +e), o = u(t = +t), a = u(r = +r), l = i === o ? 0 : 0.5 / (o - i), s = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h) : [e, t, r];
  }, h.clamp = function(v) {
    return arguments.length ? (d = !!v, h) : d;
  }, h.interpolator = function(v) {
    return arguments.length ? (c = v, h) : c;
  };
  function g(v) {
    return function(y) {
      var m, b, w;
      return arguments.length ? ([m, b, w] = y, c = nk(v, [m, b, w]), h) : [c(0), c(0.5), c(1)];
    };
  }
  return h.range = g(oi), h.rangeRound = g(rd), h.unknown = function(v) {
    return arguments.length ? (p = v, h) : p;
  }, function(v) {
    return u = v, i = v(e), o = v(t), a = v(r), l = i === o ? 0 : 0.5 / (o - i), s = o === a ? 0 : 0.5 / (a - o), n = o < i ? -1 : 1, h;
  };
}
function Rx() {
  var e = Yr(Tl()(bt));
  return e.copy = function() {
    return Gr(e, Rx());
  }, Mr.apply(e, arguments);
}
function $x() {
  var e = ad(Tl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return Gr(e, $x()).base(e.base());
  }, Mr.apply(e, arguments);
}
function zx() {
  var e = ld(Tl());
  return e.copy = function() {
    return Gr(e, zx()).constant(e.constant());
  }, Mr.apply(e, arguments);
}
function xd() {
  var e = sd(Tl());
  return e.copy = function() {
    return Gr(e, xd()).exponent(e.exponent());
  }, Mr.apply(e, arguments);
}
function qA() {
  return xd.apply(null, arguments).exponent(0.5);
}
const Lx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Qu,
  scaleDiverging: Rx,
  scaleDivergingLog: $x,
  scaleDivergingPow: xd,
  scaleDivergingSqrt: qA,
  scaleDivergingSymlog: zx,
  scaleIdentity: gx,
  scaleImplicit: Zc,
  scaleLinear: vx,
  scaleLog: mx,
  scaleOrdinal: Ju,
  scalePoint: ME,
  scalePow: cd,
  scaleQuantile: wx,
  scaleQuantize: jx,
  scaleRadial: bx,
  scaleSequential: Ix,
  scaleSequentialLog: Mx,
  scaleSequentialPow: md,
  scaleSequentialQuantile: Nx,
  scaleSequentialSqrt: HA,
  scaleSequentialSymlog: Dx,
  scaleSqrt: Ck,
  scaleSymlog: xx,
  scaleThreshold: Sx,
  scaleTime: VA,
  scaleUtc: KA,
  tickFormat: hx
}, Symbol.toStringTag, { value: "Module" }));
function UA(e) {
  var t = Lx;
  if (e in t && typeof t[e] == "function")
    return t[e]();
  var r = "scale".concat(Gi(e));
  if (r in t && typeof t[r] == "function")
    return t[r]();
}
function ig(e, t, r) {
  if (typeof e == "function")
    return e.copy().domain(t).range(r);
  if (e != null) {
    var n = UA(e);
    if (n != null)
      return n.domain(t).range(r), n;
  }
}
function bd(e, t, r, n) {
  if (!(r == null || n == null))
    return typeof e.scale == "function" ? ig(e.scale, r, n) : ig(t, r, n);
}
function YA(e) {
  return "scale".concat(Gi(e));
}
function GA(e) {
  return YA(e) in Lx;
}
var Bx = (e, t, r) => {
  if (e != null) {
    var {
      scale: n,
      type: i
    } = e;
    if (n === "auto")
      return i === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !t) ? "point" : i === "category" ? "band" : "linear";
    if (typeof n == "string")
      return GA(n) ? n : "point";
  }
};
function XA(e, t) {
  for (var r = 0, n = e.length, i = e[0] < e[e.length - 1]; r < n; ) {
    var o = Math.floor((r + n) / 2);
    (i ? e[o] < t : e[o] > t) ? r = o + 1 : n = o;
  }
  return r;
}
function Wx(e, t) {
  if (e) {
    var r = t ?? e.domain(), n = r.map((o) => {
      var a;
      return (a = e(o)) !== null && a !== void 0 ? a : 0;
    }), i = e.range();
    if (!(r.length === 0 || i.length < 2))
      return (o) => {
        var a, l, s = XA(n, o);
        if (s <= 0)
          return r[0];
        if (s >= r.length)
          return r[r.length - 1];
        var c = (a = n[s - 1]) !== null && a !== void 0 ? a : 0, u = (l = n[s]) !== null && l !== void 0 ? l : 0;
        return Math.abs(o - c) <= Math.abs(o - u) ? r[s - 1] : r[s];
      };
  }
}
function ZA(e) {
  if (e != null)
    return "invert" in e && typeof e.invert == "function" ? e.invert.bind(e) : Wx(e, void 0);
}
function og(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ma(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? og(Object(r), !0).forEach(function(n) {
      JA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : og(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function JA(e, t, r) {
  return (t = QA(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function QA(e) {
  var t = e4(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function e4(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var tu = [0, "auto"], Ye = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: void 0,
  height: 30,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "bottom",
  padding: {
    left: 0,
    right: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "category",
  unit: void 0,
  niceTicks: "auto"
}, Fx = (e, t) => e.cartesianAxis.xAxis[t], vr = (e, t) => {
  var r = Fx(e, t);
  return r ?? Ye;
}, Ge = {
  allowDataOverflow: !1,
  allowDecimals: !0,
  allowDuplicatedCategory: !0,
  angle: 0,
  dataKey: void 0,
  domain: tu,
  hide: !0,
  id: 0,
  includeHidden: !1,
  interval: "preserveEnd",
  minTickGap: 5,
  mirror: !1,
  name: void 0,
  orientation: "left",
  padding: {
    top: 0,
    bottom: 0
  },
  reversed: !1,
  scale: "auto",
  tick: !0,
  tickCount: 5,
  tickFormatter: void 0,
  ticks: void 0,
  type: "number",
  unit: void 0,
  niceTicks: "auto",
  width: eo
}, Vx = (e, t) => e.cartesianAxis.yAxis[t], gr = (e, t) => {
  var r = Vx(e, t);
  return r ?? Ge;
}, t4 = {
  domain: [0, "auto"],
  includeHidden: !1,
  reversed: !1,
  allowDataOverflow: !1,
  allowDuplicatedCategory: !1,
  dataKey: void 0,
  id: 0,
  name: "",
  range: [64, 64],
  scale: "auto",
  type: "number",
  unit: ""
}, wd = (e, t) => {
  var r = e.cartesianAxis.zAxis[t];
  return r ?? t4;
}, St = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "zAxis":
      return wd(e, r);
    case "angleAxis":
      return Uu(e, r);
    case "radiusAxis":
      return Yu(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, r4 = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, uo = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return vr(e, r);
    case "yAxis":
      return gr(e, r);
    case "angleAxis":
      return Uu(e, r);
    case "radiusAxis":
      return Yu(e, r);
    default:
      throw new Error("Unexpected axis type: ".concat(t));
  }
}, Kx = (e) => e.graphicalItems.cartesianItems.some((t) => t.type === "bar") || e.graphicalItems.polarItems.some((t) => t.type === "radialBar");
function Hx(e, t) {
  return (r) => {
    switch (e) {
      case "xAxis":
        return "xAxisId" in r && r.xAxisId === t;
      case "yAxis":
        return "yAxisId" in r && r.yAxisId === t;
      case "zAxis":
        return "zAxisId" in r && r.zAxisId === t;
      case "angleAxis":
        return "angleAxisId" in r && r.angleAxisId === t;
      case "radiusAxis":
        return "radiusAxisId" in r && r.radiusAxisId === t;
      default:
        return !1;
    }
  };
}
var Il = (e) => e.graphicalItems.cartesianItems, n4 = I([nt, wl], Hx), qx = (e, t, r) => e.filter(r).filter((n) => t?.includeHidden === !0 ? !0 : !n.hide), ai = I([Il, St, n4], qx, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), Ux = I([ai], (e) => e.filter((t) => t.type === "area" || t.type === "bar").filter(Sl)), Yx = (e) => e.filter((t) => !("stackId" in t) || t.stackId === void 0), i4 = I([ai], Yx), Gx = (e) => e.map((t) => t.data).filter(Boolean).flat(1), o4 = I([ai], (e) => e.some((t) => !t.data)), Xx = I([ai], Gx, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), Zx = (e, t) => {
  var {
    chartData: r = [],
    dataStartIndex: n,
    dataEndIndex: i
  } = t;
  return e.length > 0 ? e : r.slice(n, i + 1);
}, jd = I([Xx, gl], Zx), a4 = (e, t, r) => t?.dataKey != null ? e.map((n) => ({
  value: He(n, t.dataKey)
})) : r.length > 0 ? r.map((n) => n.dataKey).flatMap((n) => e.map((i) => ({
  value: He(i, n)
}))) : e.map((n) => ({
  value: n
})), Jx = (e, t, r, n, i, o) => {
  var {
    chartData: a = [],
    dataStartIndex: l,
    dataEndIndex: s
  } = n, c = a4(e, t, r);
  if (i && t?.dataKey != null && o.length > 0) {
    var u = a.slice(l, s + 1), d = u.map((p) => ({
      value: He(p, t.dataKey)
    })).filter((p) => p.value != null);
    return [...d, ...c];
  }
  return c;
}, fo = I([jd, St, ai, gl, o4, Xx], Jx);
function Kn(e) {
  if (Ut(e) || e instanceof Date) {
    var t = Number(e);
    if (pe(t))
      return t;
  }
}
function ag(e) {
  if (Array.isArray(e)) {
    var t = [Kn(e[0]), Kn(e[1])];
    return cr(t) ? t : void 0;
  }
  var r = Kn(e);
  if (r != null)
    return [r, r];
}
function pr(e) {
  return e.map(Kn).filter(_t);
}
function l4(e, t) {
  var r = Kn(e), n = Kn(t);
  return r == null && n == null ? 0 : r == null ? -1 : n == null ? 1 : r - n;
}
var s4 = I([fo], (e) => e?.map((t) => t.value).sort(l4));
function Qx(e, t) {
  switch (e) {
    case "xAxis":
      return t.direction === "x";
    case "yAxis":
      return t.direction === "y";
    default:
      return !1;
  }
}
function c4(e, t, r) {
  if (!r)
    return [];
  if (!r.length)
    return [];
  var n;
  if (typeof t == "number" && !Jt(t))
    n = t;
  else if (Array.isArray(t)) {
    var i = pr(t);
    i.length > 0 && (n = Math.max(...i));
  }
  return n == null ? [] : pr(r.flatMap((o) => {
    var a = He(e, o.dataKey), l, s;
    if (Array.isArray(a) ? [l, s] = a : l = s = a, !(!pe(l) || !pe(s)))
      return [n - l, n + s];
  }));
}
var Qe = (e) => {
  var t = it(e), r = ii(e);
  return uo(e, t, r);
}, Jn = I([Qe], (e) => e?.dataKey), u4 = I([Ux, gl, Qe], ox), eb = (e, t, r, n) => {
  var i = {}, o = t.reduce((a, l) => {
    if (l.stackId == null)
      return a;
    var s = a[l.stackId];
    return s == null && (s = []), s.push(l), a[l.stackId] = s, a;
  }, i);
  return Object.fromEntries(Object.entries(o).map((a) => {
    var [l, s] = a, c = n ? [...s].reverse() : s, u = c.map(jl);
    return [l, {
      // @ts-expect-error getStackedData requires that the input is array of objects, Recharts does not test for that
      stackedData: aP(e, u, r),
      graphicalItems: c
    }];
  }));
}, Da = I([u4, Ux, yl, J0], eb), tb = (e, t, r, n) => {
  var {
    dataStartIndex: i,
    dataEndIndex: o
  } = t;
  if (n == null && r !== "zAxis") {
    var a = uP(e, i, o);
    if (!(a != null && a[0] === 0 && a[1] === 0))
      return a;
  }
}, d4 = I([St], (e) => e.allowDataOverflow), Sd = (e) => {
  var t;
  if (e == null || !("domain" in e))
    return tu;
  if (e.domain != null)
    return e.domain;
  if ("ticks" in e && e.ticks != null) {
    if (e.type === "number") {
      var r = pr(e.ticks);
      return [Math.min(...r), Math.max(...r)];
    }
    if (e.type === "category")
      return e.ticks.map(String);
  }
  return (t = e?.domain) !== null && t !== void 0 ? t : tu;
}, rb = I([St], Sd), nb = I([rb, d4], L0), f4 = I([Da, nr, nt, nb], tb, {
  memoizeOptions: {
    resultEqualityCheck: Ol
  }
}), Od = (e) => e.errorBars, p4 = (e, t, r) => e.flatMap((n) => t[n.id]).filter(Boolean).filter((n) => Qx(r, n)), Na = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r.filter(Boolean);
  if (i.length !== 0) {
    var o = i.flat(), a = Math.min(...o), l = Math.max(...o);
    return [a, l];
  }
}, ib = function(t, r, n, i, o) {
  var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : [], l, s;
  if (n.length > 0 && n.forEach((c) => {
    var u, d = c.data != null ? [...c.data] : a, p = (u = i[c.id]) === null || u === void 0 ? void 0 : u.filter((h) => Qx(o, h));
    d.forEach((h) => {
      var g, v = He(h, (g = r.dataKey) !== null && g !== void 0 ? g : c.dataKey), y = c4(h, v, p);
      if (y.length >= 2) {
        var m = Math.min(...y), b = Math.max(...y);
        (l == null || m < l) && (l = m), (s == null || b > s) && (s = b);
      }
      var w = ag(v);
      w != null && (l = l == null ? w[0] : Math.min(l, w[0]), s = s == null ? w[1] : Math.max(s, w[1]));
    });
  }), r?.dataKey != null && n.length === 0 && t.forEach((c) => {
    var u = ag(He(c, r.dataKey));
    u != null && (l = l == null ? u[0] : Math.min(l, u[0]), s = s == null ? u[1] : Math.max(s, u[1]));
  }), pe(l) && pe(s))
    return [l, s];
}, h4 = I([jd, St, i4, Od, nt, tE], ib, {
  memoizeOptions: {
    resultEqualityCheck: Ol
  }
});
function v4(e) {
  var {
    value: t
  } = e;
  if (Ut(t) || t instanceof Date)
    return t;
}
var g4 = (e, t, r) => {
  var n = e.map(v4).filter((i) => i != null);
  return r && (t.dataKey == null || t.allowDuplicatedCategory && cm(n)) ? $0(0, e.length) : t.allowDuplicatedCategory ? n : Array.from(new Set(n));
}, ob = (e) => e.referenceElements.dots, li = (e, t, r) => e.filter((n) => n.ifOverflow === "extendDomain").filter((n) => t === "xAxis" ? n.xAxisId === r : n.yAxisId === r), y4 = I([ob, nt, wl], li), ab = (e) => e.referenceElements.areas, m4 = I([ab, nt, wl], li), lb = (e) => e.referenceElements.lines, x4 = I([lb, nt, wl], li), sb = (e, t) => {
  if (e != null) {
    var r = pr(e.map((n) => t === "xAxis" ? n.x : n.y));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, b4 = I(y4, nt, sb), cb = (e, t) => {
  if (e != null) {
    var r = pr(e.flatMap((n) => [t === "xAxis" ? n.x1 : n.y1, t === "xAxis" ? n.x2 : n.y2]));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, w4 = I([m4, nt], cb);
function j4(e) {
  var t;
  if (e.x != null)
    return pr([e.x]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.x);
  return r == null || r.length === 0 ? [] : pr(r);
}
function S4(e) {
  var t;
  if (e.y != null)
    return pr([e.y]);
  var r = (t = e.segment) === null || t === void 0 ? void 0 : t.map((n) => n.y);
  return r == null || r.length === 0 ? [] : pr(r);
}
var ub = (e, t) => {
  if (e != null) {
    var r = e.flatMap((n) => t === "xAxis" ? j4(n) : S4(n));
    if (r.length !== 0)
      return [Math.min(...r), Math.max(...r)];
  }
}, O4 = I([x4, nt], ub), P4 = I(b4, O4, w4, (e, t, r) => Na(e, r, t)), db = (e, t, r, n, i, o, a, l) => {
  if (r != null)
    return r;
  var s = a === "vertical" && l === "xAxis" || a === "horizontal" && l === "yAxis", c = s ? Na(n, o, i) : Na(o, i);
  return nE(t, c, e.allowDataOverflow);
}, C4 = I([St, rb, nb, f4, h4, P4, Se, nt], db, {
  memoizeOptions: {
    resultEqualityCheck: Ol
  }
}), _4 = [0, 1], fb = (e, t, r, n, i, o, a) => {
  if (!((e == null || r == null || r.length === 0) && a === void 0)) {
    var {
      dataKey: l,
      type: s
    } = e, c = hr(t, o);
    if (c && l == null) {
      var u;
      return $0(0, (u = r?.length) !== null && u !== void 0 ? u : 0);
    }
    return s === "category" ? g4(n, e, c) : i === "expand" && !c ? _4 : a;
  }
}, Pd = I([St, Se, jd, fo, yl, nt, C4], fb), si = I([St, Kx, Ku], Bx), pb = (e, t, r) => {
  var {
    niceTicks: n
  } = t;
  if (n !== "none") {
    var i = Sd(t), o = Array.isArray(i) && (i[0] === "auto" || i[1] === "auto");
    if ((n === "snap125" || n === "adaptive") && t != null && t.tickCount && cr(e)) {
      if (o)
        return gv(e, t.tickCount, t.allowDecimals, n);
      if (t.type === "number")
        return yv(e, t.tickCount, t.allowDecimals, n);
    }
    if (n === "auto" && r === "linear" && t != null && t.tickCount) {
      if (o && cr(e))
        return gv(e, t.tickCount, t.allowDecimals, "adaptive");
      if (t.type === "number" && cr(e))
        return yv(e, t.tickCount, t.allowDecimals, "adaptive");
    }
  }
}, Cd = I([Pd, uo, si], pb), hb = (e, t, r, n) => {
  if (
    /*
     * Angle axis for some reason uses nice ticks when rendering axis tick labels,
     * but doesn't use nice ticks for extending domain like all the other axes do.
     * Not really sure why? Is there a good reason,
     * or is it just because someone added support for nice ticks to the other axes and forgot this one?
     */
    n !== "angleAxis" && e?.type === "number" && cr(t) && Array.isArray(r) && r.length > 0
  ) {
    var i, o, a = t[0], l = (i = r[0]) !== null && i !== void 0 ? i : 0, s = t[1], c = (o = r[r.length - 1]) !== null && o !== void 0 ? o : 0;
    return [Math.min(a, l), Math.max(s, c)];
  }
  return t;
}, E4 = I([St, Pd, Cd, nt], hb), k4 = I(fo, St, (e, t) => {
  if (!(!t || t.type !== "number")) {
    var r = 1 / 0, n = Array.from(pr(e.map((d) => d.value))).sort((d, p) => d - p), i = n[0], o = n[n.length - 1];
    if (i == null || o == null)
      return 1 / 0;
    var a = o - i;
    if (a === 0)
      return 1 / 0;
    for (var l = 0; l < n.length - 1; l++) {
      var s = n[l], c = n[l + 1];
      if (!(s == null || c == null)) {
        var u = c - s;
        r = Math.min(r, u);
      }
    }
    return r / a;
  }
}), vb = I(k4, Se, Z0, rt, (e, t, r, n, i) => i, (e, t, r, n, i) => {
  if (!pe(e))
    return 0;
  var o = t === "vertical" ? n.height : n.width;
  if (i === "gap")
    return e * o / 2;
  if (i === "no-gap") {
    var a = Qt(r, e * o), l = e * o / 2;
    return l - a - (l - a) / o * a;
  }
  return 0;
}), A4 = (e, t, r) => {
  var n = vr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : vb(e, "xAxis", t, r, n.padding);
}, T4 = (e, t, r) => {
  var n = gr(e, t);
  return n == null || typeof n.padding != "string" ? 0 : vb(e, "yAxis", t, r, n.padding);
}, I4 = I(vr, A4, (e, t) => {
  var r, n;
  if (e == null)
    return {
      left: 0,
      right: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    left: t,
    right: t
  } : {
    left: ((r = i.left) !== null && r !== void 0 ? r : 0) + t,
    right: ((n = i.right) !== null && n !== void 0 ? n : 0) + t
  };
}), M4 = I(gr, T4, (e, t) => {
  var r, n;
  if (e == null)
    return {
      top: 0,
      bottom: 0
    };
  var {
    padding: i
  } = e;
  return typeof i == "string" ? {
    top: t,
    bottom: t
  } : {
    top: ((r = i.top) !== null && r !== void 0 ? r : 0) + t,
    bottom: ((n = i.bottom) !== null && n !== void 0 ? n : 0) + t
  };
}), D4 = I([rt, I4, ul, cl, (e, t, r) => r], (e, t, r, n, i) => {
  var {
    padding: o
  } = n;
  return i ? [o.left, r.width - o.right] : [e.left + t.left, e.left + e.width - t.right];
}), N4 = I([rt, Se, M4, ul, cl, (e, t, r) => r], (e, t, r, n, i, o) => {
  var {
    padding: a
  } = i;
  return o ? [n.height - a.bottom, a.top] : t === "horizontal" ? [e.top + e.height - r.bottom, e.top + r.top] : [e.top + r.top, e.top + e.height - r.bottom];
}), po = (e, t, r, n) => {
  var i;
  switch (t) {
    case "xAxis":
      return D4(e, r, n);
    case "yAxis":
      return N4(e, r, n);
    case "zAxis":
      return (i = wd(e, r)) === null || i === void 0 ? void 0 : i.range;
    case "angleAxis":
      return rx(e);
    case "radiusAxis":
      return nx(e, r);
    default:
      return;
  }
}, gb = I([St, po], ml), R4 = I([si, E4], mE), _d = I([St, si, R4, gb], bd), yb = (e, t, r, n) => {
  if (!(r == null || r.dataKey == null)) {
    var {
      type: i,
      scale: o
    } = r, a = hr(e, n);
    if (a && (i === "number" || o !== "auto"))
      return t.map((l) => l.value);
  }
}, Ed = I([Se, fo, uo, nt], yb), Qn = I([_d], Xu);
I([_d], ZA);
I([_d, s4], Wx);
I([ai, Od, nt], p4);
function mb(e, t) {
  return e.id < t.id ? -1 : e.id > t.id ? 1 : 0;
}
var Ml = (e, t) => t, Dl = (e, t, r) => r, $4 = I(ll, Ml, Dl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(mb)), z4 = I(sl, Ml, Dl, (e, t, r) => e.filter((n) => n.orientation === t).filter((n) => n.mirror === r).sort(mb)), xb = (e, t) => ({
  width: e.width,
  height: t.height
}), L4 = (e, t) => {
  var r = typeof t.width == "number" ? t.width : eo;
  return {
    width: r,
    height: e.height
  };
}, bb = I(rt, vr, xb), B4 = (e, t, r) => {
  switch (t) {
    case "top":
      return e.top;
    case "bottom":
      return r - e.bottom;
    default:
      return 0;
  }
}, W4 = (e, t, r) => {
  switch (t) {
    case "left":
      return e.left;
    case "right":
      return r - e.right;
    default:
      return 0;
  }
}, F4 = I(Ir, rt, $4, Ml, Dl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var s = xb(t, l);
    a == null && (a = B4(t, n, e));
    var c = n === "top" && !i || n === "bottom" && i;
    o[l.id] = a - Number(c) * s.height, a += (c ? -1 : 1) * s.height;
  }), o;
}), V4 = I(Tr, rt, z4, Ml, Dl, (e, t, r, n, i) => {
  var o = {}, a;
  return r.forEach((l) => {
    var s = L4(t, l);
    a == null && (a = W4(t, n, e));
    var c = n === "left" && !i || n === "right" && i;
    o[l.id] = a - Number(c) * s.width, a += (c ? -1 : 1) * s.width;
  }), o;
}), K4 = (e, t) => {
  var r = vr(e, t);
  if (r != null)
    return F4(e, r.orientation, r.mirror);
}, H4 = I([rt, vr, K4, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: e.left,
      y: 0
    } : {
      x: e.left,
      y: i
    };
  }
}), q4 = (e, t) => {
  var r = gr(e, t);
  if (r != null)
    return V4(e, r.orientation, r.mirror);
}, U4 = I([rt, gr, q4, (e, t) => t], (e, t, r, n) => {
  if (t != null) {
    var i = r?.[n];
    return i == null ? {
      x: 0,
      y: e.top
    } : {
      x: i,
      y: e.top
    };
  }
}), wb = I(rt, gr, (e, t) => {
  var r = typeof t.width == "number" ? t.width : eo;
  return {
    width: r,
    height: e.height
  };
}), lg = (e, t, r) => {
  switch (t) {
    case "xAxis":
      return bb(e, r).width;
    case "yAxis":
      return wb(e, r).height;
    default:
      return;
  }
}, jb = (e, t, r, n) => {
  if (r != null) {
    var {
      allowDuplicatedCategory: i,
      type: o,
      dataKey: a
    } = r, l = hr(e, n), s = t.map((u) => u.value), c = s.filter((u) => u != null);
    if (a && l && o === "category" && i && cm(c))
      return s;
  }
}, kd = I([Se, fo, St, nt], jb), sg = I([Se, r4, si, Qn, kd, Ed, po, Cd, nt], (e, t, r, n, i, o, a, l, s) => {
  if (t != null) {
    var c = hr(e, s);
    return {
      angle: t.angle,
      interval: t.interval,
      minTickGap: t.minTickGap,
      orientation: t.orientation,
      tick: t.tick,
      tickCount: t.tickCount,
      tickFormatter: t.tickFormatter,
      ticks: t.ticks,
      type: t.type,
      unit: t.unit,
      axisType: s,
      categoricalDomain: o,
      duplicateDomain: i,
      isCategorical: c,
      niceTicks: l,
      range: a,
      realScaleType: r,
      scale: n
    };
  }
}), Y4 = (e, t, r, n, i, o, a, l, s) => {
  if (!(t == null || n == null)) {
    var c = hr(e, s), {
      type: u,
      ticks: d,
      tickCount: p
    } = t, h = (
      // @ts-expect-error This is testing for `scaleBand` but for band axis the type is reported as `band` so this looks like a dead code with a workaround elsewhere?
      r === "scaleBand" && typeof n.bandwidth == "function" ? n.bandwidth() / 2 : 2
    ), g = u === "category" && n.bandwidth ? n.bandwidth() / h : 0;
    g = s === "angleAxis" && o != null && o.length >= 2 ? Ct(o[0] - o[1]) * 2 * g : g;
    var v = d || i;
    return v ? v.map((y, m) => {
      var b = a ? a.indexOf(y) : y, w = n.map(b);
      return pe(w) ? {
        index: m,
        coordinate: w + g,
        value: y,
        offset: g
      } : null;
    }).filter(_t) : c && l ? l.map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(_t) : n.ticks ? n.ticks(p).map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        value: y,
        index: m,
        offset: g
      } : null;
    }).filter(_t) : n.domain().map((y, m) => {
      var b = n.map(y);
      return pe(b) ? {
        coordinate: b + g,
        // @ts-expect-error can't use Date as index
        value: a ? a[y] : y,
        index: m,
        offset: g
      } : null;
    }).filter(_t);
  }
}, Sb = I([Se, uo, si, Qn, Cd, po, kd, Ed, nt], Y4), G4 = (e, t, r, n, i, o, a) => {
  if (!(t == null || r == null || n == null || n[0] === n[1])) {
    var l = hr(e, a), {
      tickCount: s
    } = t, c = 0;
    return c = a === "angleAxis" && n?.length >= 2 ? Ct(n[0] - n[1]) * 2 * c : c, l && o ? o.map((u, d) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        value: u,
        index: d,
        offset: c
      } : null;
    }).filter(_t) : r.ticks ? r.ticks(s).map((u, d) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        value: u,
        index: d,
        offset: c
      } : null;
    }).filter(_t) : r.domain().map((u, d) => {
      var p = r.map(u);
      return pe(p) ? {
        coordinate: p + c,
        // @ts-expect-error can't use unknown as index
        value: i ? i[u] : u,
        index: d,
        offset: c
      } : null;
    }).filter(_t);
  }
}, Hr = I([Se, uo, Qn, po, kd, Ed, nt], G4), qr = I(St, Qn, (e, t) => {
  if (!(e == null || t == null))
    return Ma(Ma({}, e), {}, {
      scale: t
    });
}), X4 = I([St, si, Pd, gb], bd), Z4 = I([X4], Xu);
I((e, t, r) => wd(e, r), Z4, (e, t) => {
  if (!(e == null || t == null))
    return Ma(Ma({}, e), {}, {
      scale: t
    });
});
var J4 = I([Se, ll, sl], (e, t, r) => {
  switch (e) {
    case "horizontal":
      return t.some((n) => n.reversed) ? "right-to-left" : "left-to-right";
    case "vertical":
      return r.some((n) => n.reversed) ? "bottom-to-top" : "top-to-bottom";
    // TODO: make this better. For now, right arrow triggers "forward", left arrow "back"
    // however, the tooltip moves an unintuitive direction because of how the indices are rendered
    case "centric":
    case "radial":
      return "left-to-right";
    default:
      return;
  }
}), Q4 = (e, t, r) => {
  var n;
  return (n = e.renderedTicks[t]) === null || n === void 0 ? void 0 : n[r];
};
I([Q4], (e) => {
  if (!(!e || e.length === 0))
    return (t) => {
      var r, n = 1 / 0, i = e[0];
      for (var o of e) {
        var a = Math.abs(o.coordinate - t);
        a < n && (n = a, i = o);
      }
      return (r = i) === null || r === void 0 ? void 0 : r.value;
    };
});
var Ob = (e) => e.options.defaultTooltipEventType, Pb = (e) => e.options.validateTooltipEventTypes;
function Cb(e, t, r) {
  if (e == null)
    return t;
  var n = e ? "axis" : "item";
  return r == null ? t : r.includes(n) ? n : t;
}
function ho(e, t) {
  var r = Ob(e), n = Pb(e);
  return Cb(t, r, n);
}
function e3(e) {
  return oe((t) => ho(t, e));
}
var _b = (e, t) => {
  var r, n = Number(t);
  if (!(Jt(n) || t == null))
    return n >= 0 ? e == null || (r = e[n]) === null || r === void 0 ? void 0 : r.value : void 0;
}, t3 = (e) => e.tooltip.settings, Wr = {
  active: !1,
  index: null,
  dataKey: void 0,
  graphicalItemId: void 0,
  coordinate: void 0
}, r3 = {
  itemInteraction: {
    click: Wr,
    hover: Wr
  },
  axisInteraction: {
    click: Wr,
    hover: Wr
  },
  keyboardInteraction: Wr,
  syncInteraction: {
    active: !1,
    index: null,
    dataKey: void 0,
    label: void 0,
    coordinate: void 0,
    sourceViewBox: void 0,
    graphicalItemId: void 0
  },
  tooltipItemPayloads: [],
  settings: {
    shared: void 0,
    trigger: "hover",
    axisId: 0,
    active: !1,
    defaultIndex: void 0
  }
}, Eb = gt({
  name: "tooltip",
  initialState: r3,
  reducers: {
    addTooltipEntrySettings: {
      reducer(e, t) {
        e.tooltipItemPayloads.push(t.payload);
      },
      prepare: De()
    },
    replaceTooltipEntrySettings: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Kt(e).tooltipItemPayloads.indexOf(r);
        i > -1 && (e.tooltipItemPayloads[i] = n);
      },
      prepare: De()
    },
    removeTooltipEntrySettings: {
      reducer(e, t) {
        var r = Kt(e).tooltipItemPayloads.indexOf(t.payload);
        r > -1 && e.tooltipItemPayloads.splice(r, 1);
      },
      prepare: De()
    },
    setTooltipSettingsState(e, t) {
      e.settings = t.payload;
    },
    setActiveMouseOverItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.itemInteraction.hover.active = !0, e.itemInteraction.hover.index = t.payload.activeIndex, e.itemInteraction.hover.dataKey = t.payload.activeDataKey, e.itemInteraction.hover.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    mouseLeaveChart(e) {
      e.itemInteraction.hover.active = !1, e.axisInteraction.hover.active = !1;
    },
    mouseLeaveItem(e) {
      e.itemInteraction.hover.active = !1;
    },
    setActiveClickItemIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.itemInteraction.click.active = !0, e.keyboardInteraction.active = !1, e.itemInteraction.click.index = t.payload.activeIndex, e.itemInteraction.click.dataKey = t.payload.activeDataKey, e.itemInteraction.click.graphicalItemId = t.payload.activeGraphicalItemId, e.itemInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setMouseOverAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.axisInteraction.hover.active = !0, e.keyboardInteraction.active = !1, e.axisInteraction.hover.index = t.payload.activeIndex, e.axisInteraction.hover.dataKey = t.payload.activeDataKey, e.axisInteraction.hover.coordinate = t.payload.activeCoordinate;
    },
    setMouseClickAxisIndex(e, t) {
      e.syncInteraction.active = !1, e.syncInteraction.sourceViewBox = void 0, e.keyboardInteraction.active = !1, e.axisInteraction.click.active = !0, e.axisInteraction.click.index = t.payload.activeIndex, e.axisInteraction.click.dataKey = t.payload.activeDataKey, e.axisInteraction.click.coordinate = t.payload.activeCoordinate;
    },
    setSyncInteraction(e, t) {
      e.syncInteraction = t.payload;
    },
    setKeyboardInteraction(e, t) {
      e.keyboardInteraction.active = t.payload.active, e.keyboardInteraction.index = t.payload.activeIndex, e.keyboardInteraction.coordinate = t.payload.activeCoordinate;
    }
  }
}), {
  addTooltipEntrySettings: n3,
  replaceTooltipEntrySettings: i3,
  removeTooltipEntrySettings: o3,
  setTooltipSettingsState: a3,
  setActiveMouseOverItemIndex: kb,
  mouseLeaveItem: l3,
  mouseLeaveChart: Ab,
  setActiveClickItemIndex: s3,
  setMouseOverAxisIndex: Tb,
  setMouseClickAxisIndex: c3,
  setSyncInteraction: _i,
  setKeyboardInteraction: Ra
} = Eb.actions, u3 = Eb.reducer;
function cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cg(Object(r), !0).forEach(function(n) {
      d3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d3(e, t, r) {
  return (t = f3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function f3(e) {
  var t = p3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function p3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function h3(e, t, r) {
  return t === "axis" ? r === "click" ? e.axisInteraction.click : e.axisInteraction.hover : r === "click" ? e.itemInteraction.click : e.itemInteraction.hover;
}
function v3(e) {
  return e.index != null;
}
var Ib = (e, t, r, n) => {
  if (t == null)
    return Wr;
  var i = h3(e, t, r);
  if (i == null)
    return Wr;
  if (i.active)
    return i;
  if (e.keyboardInteraction.active)
    return e.keyboardInteraction;
  if (e.syncInteraction.active && e.syncInteraction.index != null)
    return e.syncInteraction;
  var o = e.settings.active === !0;
  if (v3(i)) {
    if (o)
      return Lo(Lo({}, i), {}, {
        active: !0
      });
  } else if (n != null)
    return {
      active: !0,
      coordinate: void 0,
      dataKey: void 0,
      index: n,
      graphicalItemId: void 0
    };
  return Lo(Lo({}, Wr), {}, {
    coordinate: i.coordinate
  });
};
function g3(e) {
  if (typeof e == "number")
    return Number.isFinite(e) ? e : void 0;
  if (e instanceof Date) {
    var t = e.valueOf();
    return Number.isFinite(t) ? t : void 0;
  }
  var r = Number(e);
  return Number.isFinite(r) ? r : void 0;
}
function y3(e, t) {
  var r = g3(e), n = t[0], i = t[1];
  if (r === void 0)
    return !1;
  var o = Math.min(n, i), a = Math.max(n, i);
  return r >= o && r <= a;
}
function m3(e, t, r) {
  if (r == null || t == null)
    return !0;
  var n = He(e, t);
  return n == null || !cr(r) ? !0 : y3(n, r);
}
var Ai = (e, t, r, n) => {
  var i = e?.index;
  if (i == null)
    return null;
  var o = Number(i);
  if (!pe(o))
    return i;
  var a = 0, l = 1 / 0;
  t.length > 0 && (l = t.length - 1);
  var s = Math.max(a, Math.min(o, l)), c = t[s];
  return c == null || m3(c, r, n) ? String(s) : null;
}, Mb = (e, t, r, n, i, o, a) => {
  if (o != null) {
    var l = a[0], s = l?.getPosition(o);
    if (s != null)
      return s;
    var c = i?.[Number(o)];
    if (c)
      switch (r) {
        case "horizontal":
          return {
            x: c.coordinate,
            y: (n.top + t) / 2
          };
        default:
          return {
            x: (n.left + e) / 2,
            y: c.coordinate
          };
      }
  }
}, Db = (e, t, r, n) => {
  if (t === "axis")
    return e.tooltipItemPayloads;
  if (e.tooltipItemPayloads.length === 0)
    return [];
  var i;
  if (r === "hover" ? i = e.itemInteraction.hover.graphicalItemId : i = e.itemInteraction.click.graphicalItemId, e.syncInteraction.active && i == null)
    return e.tooltipItemPayloads;
  if (i == null && (n != null || e.keyboardInteraction.active)) {
    var o = e.tooltipItemPayloads[0];
    return o != null ? [o] : [];
  }
  return e.tooltipItemPayloads.filter((a) => {
    var l;
    return ((l = a.settings) === null || l === void 0 ? void 0 : l.graphicalItemId) === i;
  });
}, Nb = (e) => e.options.tooltipPayloadSearcher, ci = (e) => e.tooltip;
function ug(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ug(Object(r), !0).forEach(function(n) {
      x3(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ug(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function x3(e, t, r) {
  return (t = b3(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function b3(e) {
  var t = w3(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function w3(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function j3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
}
function S3(e) {
  if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
    return e;
}
function O3(e) {
  if (typeof e == "string" || typeof e == "number")
    return e;
  if (typeof e == "function")
    return (t) => e(t);
}
function fg(e) {
  if (typeof e == "string")
    return e;
}
function P3(e) {
  if (!(e == null || typeof e != "object")) {
    var t = "name" in e ? j3(e.name) : void 0, r = "unit" in e ? S3(e.unit) : void 0, n = "dataKey" in e ? O3(e.dataKey) : void 0, i = "payload" in e ? e.payload : void 0, o = "color" in e ? fg(e.color) : void 0, a = "fill" in e ? fg(e.fill) : void 0;
    return {
      name: t,
      unit: r,
      dataKey: n,
      payload: i,
      color: o,
      fill: a
    };
  }
}
function C3(e, t) {
  return e ?? t;
}
var Rb = (e, t, r, n, i, o, a) => {
  if (!(t == null || o == null)) {
    var {
      chartData: l,
      computedData: s,
      dataStartIndex: c,
      dataEndIndex: u
    } = r, d = [];
    return e.reduce((p, h) => {
      var g, {
        dataDefinedOnItem: v,
        settings: y
      } = h, m = C3(v, l), b = Array.isArray(m) ? l0(m, c, u) : m, w = (g = y?.dataKey) !== null && g !== void 0 ? g : n, x = y?.nameKey, S;
      if (n && Array.isArray(b) && /*
       * findEntryInArray won't work for Scatter because Scatter provides an array of arrays
       * as tooltip payloads and findEntryInArray is not prepared to handle that.
       * Sad but also ScatterChart only allows 'item' tooltipEventType
       * and also this is only a problem if there are multiple Scatters and each has its own data array
       * so let's fix that some other time.
       */
      !Array.isArray(b[0]) && /*
       * If the tooltipEventType is 'axis', we should search for the dataKey in the sliced data
       * because thanks to allowDuplicatedCategory=false, the order of elements in the array
       * no longer matches the order of elements in the original data
       * and so we need to search by the active dataKey + label rather than by index.
       *
       * The same happens if multiple graphical items are present in the chart
       * and each of them has its own data array. Those arrays get concatenated
       * and again the tooltip index no longer matches the original data.
       *
       * On the other hand the tooltipEventType 'item' should always search by index
       * because we get the index from interacting over the individual elements
       * which is always accurate, irrespective of the allowDuplicatedCategory setting.
       */
      a === "axis" ? S = um(b, n, i) : S = o(b, t, s, x), Array.isArray(S))
        S.forEach((C) => {
          var E, M, D = P3(C), N = D?.name, _ = D?.dataKey, L = D?.payload, F = dg(dg({}, y), {}, {
            name: N,
            unit: D?.unit,
            // Preserve item-level color/fill from graphical items.
            color: (E = D?.color) !== null && E !== void 0 ? E : y?.color,
            fill: (M = D?.fill) !== null && M !== void 0 ? M : y?.fill
          });
          p.push(oh({
            tooltipEntrySettings: F,
            dataKey: _,
            payload: L,
            value: He(L, _),
            name: N == null ? void 0 : String(N)
          }));
        });
      else {
        var O;
        p.push(oh({
          tooltipEntrySettings: y,
          dataKey: w,
          payload: S,
          // getValueByDataKey does not validate the output type
          value: He(S, w),
          // getValueByDataKey does not validate the output type
          name: (O = He(S, x)) !== null && O !== void 0 ? O : y?.name
        }));
      }
      return p;
    }, d);
  }
}, Ad = I([Qe, Kx, Ku], Bx), _3 = I([(e) => e.graphicalItems.cartesianItems, (e) => e.graphicalItems.polarItems], (e, t) => [...e, ...t]), E3 = I([it, ii], Hx), En = I([_3, Qe, E3], qx, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), k3 = I([En], (e) => e.filter(Sl)), $b = I([En], Gx, {
  memoizeOptions: {
    resultEqualityCheck: Pl
  }
}), A3 = I([En], (e) => e.some((t) => !t.data)), bn = I([$b, nr], Zx), T3 = I([k3, nr, Qe], ox), Td = I([bn, Qe, En, nr, A3, $b], Jx), zb = I([Qe], Sd), I3 = I([Qe], (e) => e.allowDataOverflow), Lb = I([zb, I3], L0), M3 = I([En], (e) => e.filter(Sl)), D3 = I([T3, M3, yl, J0], eb), N3 = I([D3, nr, it, Lb], tb), R3 = I([En], Yx), $3 = I([bn, Qe, R3, Od, it, rE], ib, {
  memoizeOptions: {
    resultEqualityCheck: Ol
  }
}), z3 = I([ob, it, ii], li), L3 = I([z3, it], sb), B3 = I([ab, it, ii], li), W3 = I([B3, it], cb), F3 = I([lb, it, ii], li), V3 = I([F3, it], ub), K3 = I([L3, V3, W3], Na), H3 = I([Qe, zb, Lb, N3, $3, K3, Se, it], db), ei = I([Qe, Se, bn, Td, yl, it, H3], fb), q3 = I([ei, Qe, Ad], pb), U3 = I([Qe, ei, q3, it], hb), Bb = (e) => {
  var t = it(e), r = ii(e), n = !1;
  return po(e, t, r, n);
}, Wb = I([Qe, Bb], ml), Y3 = I([Qe, Ad, U3, Wb], bd), Fb = I([Y3], Xu), G3 = I([Se, Td, Qe, it], jb), X3 = I([Se, Td, Qe, it], yb), Z3 = (e, t, r, n, i, o, a, l) => {
  if (t) {
    var {
      type: s
    } = t, c = hr(e, l);
    if (n) {
      var u = r === "scaleBand" && n.bandwidth ? n.bandwidth() / 2 : 2, d = s === "category" && n.bandwidth ? n.bandwidth() / u : 0;
      return d = l === "angleAxis" && i != null && i?.length >= 2 ? Ct(i[0] - i[1]) * 2 * d : d, c && a ? a.map((p, h) => {
        var g = n.map(p);
        return pe(g) ? {
          coordinate: g + d,
          value: p,
          index: h,
          offset: d
        } : null;
      }).filter(_t) : n.domain().map((p, h) => {
        var g = n.map(p);
        return pe(g) ? {
          coordinate: g + d,
          // @ts-expect-error can't use Date as an index
          value: o ? o[p] : p,
          index: h,
          offset: d
        } : null;
      }).filter(_t);
    }
  }
}, Dr = I([Se, Qe, Ad, Fb, Bb, G3, X3, it], Z3), Id = I([Ob, Pb, t3], (e, t, r) => Cb(r.shared, e, t)), Vb = (e) => e.tooltip.settings.trigger, Md = (e) => e.tooltip.settings.defaultIndex, vo = I([ci, Id, Vb, Md], Ib), wn = I([vo, bn, Jn, ei], Ai), Kb = I([Dr, wn], _b), Hb = I([vo], (e) => {
  if (e)
    return e.dataKey;
}), J3 = I([vo], (e) => {
  if (e)
    return e.graphicalItemId;
}), qb = I([ci, Id, Vb, Md], Db), Q3 = I([Tr, Ir, Se, rt, Dr, Md, qb], Mb), eT = I([vo, Q3], (e, t) => e != null && e.coordinate ? e.coordinate : t), tT = I([vo], (e) => {
  var t;
  return (t = e?.active) !== null && t !== void 0 ? t : !1;
}), rT = I([qb, wn, nr, Jn, Kb, Nb, Id], Rb), nT = I([rT], (e) => {
  if (e != null) {
    var t = e.map((r) => r.payload).filter((r) => r != null);
    return Array.from(new Set(t));
  }
});
function pg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pg(Object(r), !0).forEach(function(n) {
      iT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : pg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iT(e, t, r) {
  return (t = oT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function oT(e) {
  var t = aT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function aT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lT = () => oe(Qe), sT = () => {
  var e = lT(), t = oe(Dr), r = oe(Fb);
  return Un(!e || !r ? void 0 : hg(hg({}, e), {}, {
    scale: r
  }), t);
};
function vg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vg(Object(r), !0).forEach(function(n) {
      cT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cT(e, t, r) {
  return (t = uT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uT(e) {
  var t = dT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var fT = (e, t, r, n) => {
  var i = t.find((o) => o && o.index === r);
  if (i) {
    if (e === "horizontal")
      return {
        x: i.coordinate,
        y: n.relativeY
      };
    if (e === "vertical")
      return {
        x: n.relativeX,
        y: i.coordinate
      };
  }
  return {
    x: 0,
    y: 0
  };
}, pT = (e, t, r, n) => {
  var i = t.find((c) => c && c.index === r);
  if (i) {
    if (e === "centric") {
      var o = i.coordinate, {
        radius: a
      } = n;
      return Nn(Nn(Nn({}, n), st(n.cx, n.cy, a, o)), {}, {
        angle: o,
        radius: a
      });
    }
    var l = i.coordinate, {
      angle: s
    } = n;
    return Nn(Nn(Nn({}, n), st(n.cx, n.cy, l, s)), {}, {
      angle: s,
      radius: l
    });
  }
  return {
    angle: 0,
    clockWise: !1,
    cx: 0,
    cy: 0,
    endAngle: 0,
    innerRadius: 0,
    outerRadius: 0,
    radius: 0,
    startAngle: 0,
    x: 0,
    y: 0
  };
};
function hT(e, t) {
  var {
    relativeX: r,
    relativeY: n
  } = e;
  return r >= t.left && r <= t.left + t.width && n >= t.top && n <= t.top + t.height;
}
var Ub = (e, t, r, n, i) => {
  var o, a = (o = t?.length) !== null && o !== void 0 ? o : 0;
  if (a <= 1 || e == null)
    return 0;
  if (n === "angleAxis" && i != null && Math.abs(Math.abs(i[1] - i[0]) - 360) <= 1e-6)
    for (var l = 0; l < a; l++) {
      var s, c, u, d, p, h = l > 0 ? (s = r[l - 1]) === null || s === void 0 ? void 0 : s.coordinate : (c = r[a - 1]) === null || c === void 0 ? void 0 : c.coordinate, g = (u = r[l]) === null || u === void 0 ? void 0 : u.coordinate, v = l >= a - 1 ? (d = r[0]) === null || d === void 0 ? void 0 : d.coordinate : (p = r[l + 1]) === null || p === void 0 ? void 0 : p.coordinate, y = void 0;
      if (!(h == null || g == null || v == null))
        if (Ct(g - h) !== Ct(v - g)) {
          var m = [];
          if (Ct(v - g) === Ct(i[1] - i[0])) {
            y = v;
            var b = g + i[1] - i[0];
            m[0] = Math.min(b, (b + h) / 2), m[1] = Math.max(b, (b + h) / 2);
          } else {
            y = h;
            var w = v + i[1] - i[0];
            m[0] = Math.min(g, (w + g) / 2), m[1] = Math.max(g, (w + g) / 2);
          }
          var x = [Math.min(g, (y + g) / 2), Math.max(g, (y + g) / 2)];
          if (e > x[0] && e <= x[1] || e >= m[0] && e <= m[1]) {
            var S;
            return (S = r[l]) === null || S === void 0 ? void 0 : S.index;
          }
        } else {
          var O = Math.min(h, v), C = Math.max(h, v);
          if (e > (O + g) / 2 && e <= (C + g) / 2) {
            var E;
            return (E = r[l]) === null || E === void 0 ? void 0 : E.index;
          }
        }
    }
  else if (t)
    for (var M = 0; M < a; M++) {
      var D = t[M];
      if (D != null) {
        var N = t[M + 1], _ = t[M - 1];
        if (M === 0 && N != null && e <= (D.coordinate + N.coordinate) / 2 || M === a - 1 && _ != null && e > (D.coordinate + _.coordinate) / 2 || M > 0 && M < a - 1 && _ != null && N != null && e > (D.coordinate + _.coordinate) / 2 && e <= (D.coordinate + N.coordinate) / 2)
          return D.index;
      }
    }
  return -1;
}, Yb = () => oe(Ku), Dd = (e, t) => t, Gb = (e, t, r) => r, Nd = (e, t, r, n) => n, vT = I(Dr, (e) => Za(e, (t) => t.coordinate)), Rd = I([ci, Dd, Gb, Nd], Ib), $d = I([Rd, bn, Jn, ei], Ai), gT = (e, t, r) => {
  if (t != null) {
    var n = ci(e);
    return t === "axis" ? r === "hover" ? n.axisInteraction.hover.dataKey : n.axisInteraction.click.dataKey : r === "hover" ? n.itemInteraction.hover.dataKey : n.itemInteraction.click.dataKey;
  }
}, Xb = I([ci, Dd, Gb, Nd], Db), $a = I([Tr, Ir, Se, rt, Dr, Nd, Xb], Mb), yT = I([Rd, $a], (e, t) => {
  var r;
  return (r = e.coordinate) !== null && r !== void 0 ? r : t;
}), Zb = I([Dr, $d], _b), mT = I([Xb, $d, nr, Jn, Zb, Nb, Dd], Rb), xT = I([Rd, $d], (e, t) => ({
  isActive: e.active && t != null,
  activeIndex: t
})), bT = (e, t, r, n, i, o, a) => {
  if (!(!e || !r || !n || !i) && hT(e, a)) {
    var l = dP(e, t), s = Ub(l, o, i, r, n), c = fT(t, i, s, e);
    return {
      activeIndex: String(s),
      activeCoordinate: c
    };
  }
}, wT = (e, t, r, n, i, o, a) => {
  if (!(!e || !n || !i || !o || !r)) {
    var l = H_(e, r);
    if (l) {
      var s = fP(l, t), c = Ub(s, a, o, n, i), u = pT(t, o, c, l);
      return {
        activeIndex: String(c),
        activeCoordinate: u
      };
    }
  }
}, jT = (e, t, r, n, i, o, a, l) => {
  if (!(!e || !t || !n || !i || !o))
    return t === "horizontal" || t === "vertical" ? bT(e, t, n, i, o, a, l) : wT(e, t, r, n, i, o, a);
}, ST = I((e) => e.zIndex.zIndexMap, (e, t) => t, (e, t, r) => r, (e, t, r) => {
  if (t != null) {
    var n = e[t];
    if (n != null)
      return r ? n.panoramaElement : n.element;
  }
}), OT = I((e) => e.zIndex.zIndexMap, (e) => {
  var t = Object.keys(e).map((n) => parseInt(n, 10)).concat(Object.values(Ze)), r = Array.from(new Set(t));
  return r.sort((n, i) => n - i);
}, {
  memoizeOptions: {
    resultEqualityCheck: yE
  }
});
function gg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gg(Object(r), !0).forEach(function(n) {
      PT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PT(e, t, r) {
  return (t = CT(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CT(e) {
  var t = _T(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _T(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ET = {}, kT = {
  zIndexMap: Object.values(Ze).reduce((e, t) => yg(yg({}, e), {}, {
    [t]: {
      element: void 0,
      panoramaElement: void 0,
      consumers: 0
    }
  }), ET)
}, AT = new Set(Object.values(Ze));
function TT(e) {
  return AT.has(e);
}
var Jb = gt({
  name: "zIndex",
  initialState: kT,
  reducers: {
    registerZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] ? e.zIndexMap[r].consumers += 1 : e.zIndexMap[r] = {
          consumers: 1,
          element: void 0,
          panoramaElement: void 0
        };
      },
      prepare: De()
    },
    unregisterZIndexPortal: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (e.zIndexMap[r].consumers -= 1, e.zIndexMap[r].consumers <= 0 && !TT(r) && delete e.zIndexMap[r]);
      },
      prepare: De()
    },
    registerZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r,
          element: n,
          isPanorama: i
        } = t.payload;
        e.zIndexMap[r] ? i ? e.zIndexMap[r].panoramaElement = n : e.zIndexMap[r].element = n : e.zIndexMap[r] = {
          consumers: 0,
          element: i ? void 0 : n,
          panoramaElement: i ? n : void 0
        };
      },
      prepare: De()
    },
    unregisterZIndexPortalElement: {
      reducer: (e, t) => {
        var {
          zIndex: r
        } = t.payload;
        e.zIndexMap[r] && (t.payload.isPanorama ? e.zIndexMap[r].panoramaElement = void 0 : e.zIndexMap[r].element = void 0);
      },
      prepare: De()
    }
  }
}), {
  registerZIndexPortal: IT,
  unregisterZIndexPortal: ac,
  registerZIndexPortalElement: MT,
  unregisterZIndexPortalElement: DT
} = Jb.actions, NT = Jb.reducer;
function Lt(e) {
  var {
    zIndex: t,
    children: r
  } = e, n = KP(), i = n && t !== void 0 && t !== 0, o = dt(), a = ve(void 0), l = ve(/* @__PURE__ */ new Set()), s = $e(), c = oe((d) => ST(d, t, o));
  if (kt(() => {
    if (!i) {
      var d = l.current;
      d.forEach((h) => {
        s(ac({
          zIndex: h
        }));
      }), d.clear(), a.current = void 0;
      return;
    }
    if (l.current.has(t) || (s(IT({
      zIndex: t
    })), l.current.add(t)), c) {
      a.current = c;
      var p = l.current;
      p.forEach((h) => {
        h !== t && (s(ac({
          zIndex: h
        })), p.delete(h));
      });
    }
  }, [s, t, i, c]), kt(() => {
    var d = l.current;
    return () => {
      d.forEach((p) => {
        s(ac({
          zIndex: p
        }));
      }), d.clear();
    };
  }, [s]), !i)
    return r;
  var u = c ?? a.current;
  return u ? /* @__PURE__ */ Ry(r, u) : null;
}
function ru() {
  return ru = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ru.apply(null, arguments);
}
function mg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mg(Object(r), !0).forEach(function(n) {
      RT(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function RT(e, t, r) {
  return (t = $T(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function $T(e) {
  var t = zT(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function zT(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function LT(e) {
  var {
    cursor: t,
    cursorComp: r,
    cursorProps: n
  } = e;
  return /* @__PURE__ */ Nt(t) ? /* @__PURE__ */ ti(t, n) : /* @__PURE__ */ Dy(r, n);
}
function BT(e) {
  var t, {
    coordinate: r,
    payload: n,
    index: i,
    offset: o,
    tooltipAxisBandSize: a,
    layout: l,
    cursor: s,
    tooltipEventType: c,
    chartName: u
  } = e, d = r, p = n, h = i;
  if (!s || !d || u !== "ScatterChart" && c !== "axis")
    return null;
  var g, v, y;
  if (u === "ScatterChart")
    g = d, v = o_, y = Ze.cursorLine;
  else if (u === "BarChart")
    g = a_(l, d, o, a), v = M0, y = Ze.cursorRectangle;
  else if (l === "radial" && pm(d)) {
    var {
      cx: m,
      cy: b,
      radius: w,
      startAngle: x,
      endAngle: S
    } = D0(d);
    g = {
      cx: m,
      cy: b,
      startAngle: x,
      endAngle: S,
      innerRadius: w,
      outerRadius: w
    }, v = R0, y = Ze.cursorLine;
  } else
    g = {
      points: G_(l, d, o)
    }, v = ki, y = Ze.cursorLine;
  var O = typeof s == "object" && "className" in s ? s.className : void 0, C = Bo(Bo(Bo(Bo({
    stroke: "#ccc",
    pointerEvents: "none"
  }, o), g), Yi(s)), {}, {
    payload: p,
    payloadIndex: h,
    className: Pe("recharts-tooltip-cursor", O)
  });
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: (t = e.zIndex) !== null && t !== void 0 ? t : y
  }, /* @__PURE__ */ P.createElement(LT, {
    cursor: s,
    cursorComp: v,
    cursorProps: C
  }));
}
function WT(e) {
  var t = sT(), r = g0(), n = Pn(), i = Yb();
  return t == null || r == null || n == null || i == null ? null : /* @__PURE__ */ P.createElement(BT, ru({}, e, {
    offset: r,
    layout: n,
    tooltipAxisBandSize: t,
    chartName: i
  }));
}
var Qb = /* @__PURE__ */ At(null), FT = () => zt(Qb), lc = { exports: {} }, xg;
function VT() {
  return xg || (xg = 1, (function(e) {
    var t = Object.prototype.hasOwnProperty, r = "~";
    function n() {
    }
    Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
    function i(s, c, u) {
      this.fn = s, this.context = c, this.once = u || !1;
    }
    function o(s, c, u, d, p) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(u, d || s, p), g = r ? r + c : c;
      return s._events[g] ? s._events[g].fn ? s._events[g] = [s._events[g], h] : s._events[g].push(h) : (s._events[g] = h, s._eventsCount++), s;
    }
    function a(s, c) {
      --s._eventsCount === 0 ? s._events = new n() : delete s._events[c];
    }
    function l() {
      this._events = new n(), this._eventsCount = 0;
    }
    l.prototype.eventNames = function() {
      var c = [], u, d;
      if (this._eventsCount === 0) return c;
      for (d in u = this._events)
        t.call(u, d) && c.push(r ? d.slice(1) : d);
      return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(u)) : c;
    }, l.prototype.listeners = function(c) {
      var u = r ? r + c : c, d = this._events[u];
      if (!d) return [];
      if (d.fn) return [d.fn];
      for (var p = 0, h = d.length, g = new Array(h); p < h; p++)
        g[p] = d[p].fn;
      return g;
    }, l.prototype.listenerCount = function(c) {
      var u = r ? r + c : c, d = this._events[u];
      return d ? d.fn ? 1 : d.length : 0;
    }, l.prototype.emit = function(c, u, d, p, h, g) {
      var v = r ? r + c : c;
      if (!this._events[v]) return !1;
      var y = this._events[v], m = arguments.length, b, w;
      if (y.fn) {
        switch (y.once && this.removeListener(c, y.fn, void 0, !0), m) {
          case 1:
            return y.fn.call(y.context), !0;
          case 2:
            return y.fn.call(y.context, u), !0;
          case 3:
            return y.fn.call(y.context, u, d), !0;
          case 4:
            return y.fn.call(y.context, u, d, p), !0;
          case 5:
            return y.fn.call(y.context, u, d, p, h), !0;
          case 6:
            return y.fn.call(y.context, u, d, p, h, g), !0;
        }
        for (w = 1, b = new Array(m - 1); w < m; w++)
          b[w - 1] = arguments[w];
        y.fn.apply(y.context, b);
      } else {
        var x = y.length, S;
        for (w = 0; w < x; w++)
          switch (y[w].once && this.removeListener(c, y[w].fn, void 0, !0), m) {
            case 1:
              y[w].fn.call(y[w].context);
              break;
            case 2:
              y[w].fn.call(y[w].context, u);
              break;
            case 3:
              y[w].fn.call(y[w].context, u, d);
              break;
            case 4:
              y[w].fn.call(y[w].context, u, d, p);
              break;
            default:
              if (!b) for (S = 1, b = new Array(m - 1); S < m; S++)
                b[S - 1] = arguments[S];
              y[w].fn.apply(y[w].context, b);
          }
      }
      return !0;
    }, l.prototype.on = function(c, u, d) {
      return o(this, c, u, d, !1);
    }, l.prototype.once = function(c, u, d) {
      return o(this, c, u, d, !0);
    }, l.prototype.removeListener = function(c, u, d, p) {
      var h = r ? r + c : c;
      if (!this._events[h]) return this;
      if (!u)
        return a(this, h), this;
      var g = this._events[h];
      if (g.fn)
        g.fn === u && (!p || g.once) && (!d || g.context === d) && a(this, h);
      else {
        for (var v = 0, y = [], m = g.length; v < m; v++)
          (g[v].fn !== u || p && !g[v].once || d && g[v].context !== d) && y.push(g[v]);
        y.length ? this._events[h] = y.length === 1 ? y[0] : y : a(this, h);
      }
      return this;
    }, l.prototype.removeAllListeners = function(c) {
      var u;
      return c ? (u = r ? r + c : c, this._events[u] && a(this, u)) : (this._events = new n(), this._eventsCount = 0), this;
    }, l.prototype.off = l.prototype.removeListener, l.prototype.addListener = l.prototype.on, l.prefixed = r, l.EventEmitter = l, e.exports = l;
  })(lc)), lc.exports;
}
var KT = VT();
const HT = /* @__PURE__ */ Sn(KT);
var qi = new HT(), nu = "recharts.syncEvent.tooltip", bg = "recharts.syncEvent.brush", e1 = (e, t) => {
  if (t && Array.isArray(e)) {
    var r = Number.parseInt(t, 10);
    if (!Jt(r))
      return e[r];
  }
}, qT = {
  chartName: "",
  tooltipPayloadSearcher: () => {
  },
  eventEmitter: void 0,
  defaultTooltipEventType: "axis"
}, t1 = gt({
  name: "options",
  initialState: qT,
  reducers: {
    createEventEmitter: (e) => {
      e.eventEmitter == null && (e.eventEmitter = Symbol("rechartsEventEmitter"));
    }
  }
}), UT = t1.reducer, {
  createEventEmitter: YT
} = t1.actions;
function GT(e) {
  return e.tooltip.syncInteraction;
}
var XT = {
  chartData: void 0,
  computedData: void 0,
  dataStartIndex: 0,
  dataEndIndex: 0
}, r1 = gt({
  name: "chartData",
  initialState: XT,
  reducers: {
    setChartData(e, t) {
      if (e.chartData = t.payload, t.payload == null) {
        e.dataStartIndex = 0, e.dataEndIndex = 0;
        return;
      }
      t.payload.length > 0 && e.dataEndIndex !== t.payload.length - 1 && (e.dataEndIndex = t.payload.length - 1);
    },
    setComputedData(e, t) {
      e.computedData = t.payload;
    },
    setDataStartEndIndexes(e, t) {
      var {
        startIndex: r,
        endIndex: n
      } = t.payload;
      r != null && (e.dataStartIndex = r), n != null && (e.dataEndIndex = n);
    }
  }
}), {
  setChartData: wg,
  setDataStartEndIndexes: ZT,
  setComputedData: XR
} = r1.actions, JT = r1.reducer, QT = ["x", "y"];
function jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jg(Object(r), !0).forEach(function(n) {
      e6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e6(e, t, r) {
  return (t = t6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function t6(e) {
  var t = r6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function r6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function n6(e, t) {
  if (e == null) return {};
  var r, n, i = i6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function i6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function o6() {
  var e = oe(Hu), t = oe(qu), r = $e(), n = oe(Q0), i = oe(Dr), o = Pn(), a = to(), l = oe((s) => s.rootProps.className);
  Oe(() => {
    if (e == null)
      return On;
    var s = (c, u, d) => {
      if (t !== d && e === c) {
        if (u.payload.active === !1) {
          r(_i({
            active: !1,
            coordinate: void 0,
            dataKey: void 0,
            index: null,
            label: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0
          }));
          return;
        }
        if (n === "index") {
          var p;
          if (a && u !== null && u !== void 0 && (p = u.payload) !== null && p !== void 0 && p.coordinate && u.payload.sourceViewBox) {
            var h = u.payload.coordinate, {
              x: g,
              y: v
            } = h, y = n6(h, QT), {
              x: m,
              y: b,
              width: w,
              height: x
            } = u.payload.sourceViewBox, S = Rn(Rn({}, y), {}, {
              x: a.x + (w ? (g - m) / w : 0) * a.width,
              y: a.y + (x ? (v - b) / x : 0) * a.height
            });
            r(Rn(Rn({}, u), {}, {
              payload: Rn(Rn({}, u.payload), {}, {
                coordinate: S
              })
            }));
          } else
            r(u);
          return;
        }
        if (i != null) {
          var O;
          if (typeof n == "function") {
            var C = {
              activeTooltipIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              isTooltipActive: u.payload.active,
              activeIndex: u.payload.index == null ? void 0 : Number(u.payload.index),
              activeLabel: u.payload.label,
              activeDataKey: u.payload.dataKey,
              activeCoordinate: u.payload.coordinate
            }, E = n(i, C);
            O = i[E];
          } else n === "value" && (O = i.find((Q) => String(Q.value) === u.payload.label));
          var {
            coordinate: M
          } = u.payload;
          if (M == null || a == null) {
            r(_i({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: void 0,
              graphicalItemId: void 0
            }));
            return;
          }
          if (O == null) {
            r(_i({
              active: !1,
              coordinate: void 0,
              dataKey: void 0,
              index: null,
              label: void 0,
              sourceViewBox: u.payload.sourceViewBox,
              graphicalItemId: void 0
            }));
            return;
          }
          var {
            x: D,
            y: N
          } = M, _ = Math.min(D, a.x + a.width), L = Math.min(N, a.y + a.height), F = {
            x: o === "horizontal" ? O.coordinate : _,
            y: o === "horizontal" ? L : O.coordinate
          }, Y = _i({
            active: u.payload.active,
            coordinate: F,
            dataKey: u.payload.dataKey,
            index: String(O.index),
            label: u.payload.label,
            sourceViewBox: u.payload.sourceViewBox,
            graphicalItemId: u.payload.graphicalItemId
          });
          r(Y);
        }
      }
    };
    return qi.on(nu, s), () => {
      qi.off(nu, s);
    };
  }, [l, r, t, e, n, i, o, a]);
}
function a6() {
  var e = oe(Hu), t = oe(qu), r = $e();
  Oe(() => {
    if (e == null)
      return On;
    var n = (i, o, a) => {
      t !== a && e === i && r(ZT(o));
    };
    return qi.on(bg, n), () => {
      qi.off(bg, n);
    };
  }, [r, t, e]);
}
function l6() {
  var e = $e();
  Oe(() => {
    e(YT());
  }, [e]), o6(), a6();
}
function s6(e, t, r, n, i, o) {
  var a = oe((g) => gT(g, e, t)), l = oe(J3), s = oe(qu), c = oe(Hu), u = oe(Q0), d = oe(GT), p = d?.sourceViewBox != null, h = to();
  Oe(() => {
    if (!p && c != null && s != null) {
      var g = _i({
        active: o,
        coordinate: r,
        dataKey: a,
        index: i,
        label: typeof n == "number" ? String(n) : n,
        sourceViewBox: h,
        graphicalItemId: l
      });
      qi.emit(nu, c, g, s);
    }
  }, [p, r, a, l, i, n, s, c, u, o, h]);
}
function Sg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Og(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sg(Object(r), !0).forEach(function(n) {
      c6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function c6(e, t, r) {
  return (t = u6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function u6(e) {
  var t = d6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function d6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function f6(e) {
  return e.dataKey;
}
function p6(e, t) {
  return /* @__PURE__ */ P.isValidElement(e) ? /* @__PURE__ */ P.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ P.createElement(e, t) : /* @__PURE__ */ P.createElement(DC, t);
}
var Pg = [], h6 = {
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  axisId: 0,
  contentStyle: {},
  cursor: !0,
  filterNull: !0,
  includeHidden: !1,
  isAnimationActive: "auto",
  itemSorter: "name",
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  wrapperStyle: {}
};
function n1(e) {
  var t, r, n = jt(e, h6), {
    active: i,
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    content: s,
    filterNull: c,
    isAnimationActive: u,
    offset: d,
    payloadUniqBy: p,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    wrapperStyle: y,
    cursor: m,
    shared: b,
    trigger: w,
    defaultIndex: x,
    portal: S,
    axisId: O
  } = n, C = $e(), E = typeof x == "number" ? String(x) : x;
  Oe(() => {
    C(a3({
      shared: b,
      trigger: w,
      axisId: O,
      active: i,
      defaultIndex: E
    }));
  }, [C, b, w, O, i, E]);
  var M = to(), D = E0(), N = e3(b), {
    activeIndex: _,
    isActive: L
  } = (t = oe((ue) => xT(ue, N, w, E))) !== null && t !== void 0 ? t : {}, F = oe((ue) => mT(ue, N, w, E)), Y = oe((ue) => Zb(ue, N, w, E)), Q = oe((ue) => yT(ue, N, w, E)), ie = F, R = FT(), re = (r = i ?? L) !== null && r !== void 0 ? r : !1, [ee, $] = zS([ie, re]), B = N === "axis" ? Y : void 0;
  s6(N, w, Q, B, _, re);
  var z = S ?? R;
  if (z == null || M == null || N == null)
    return null;
  var H = ie ?? Pg;
  re || (H = Pg), c && H.length && (H = aS(H.filter((ue) => ue.value != null && (ue.hide !== !0 || n.includeHidden)), p, f6));
  var le = H.length > 0, me = Og(Og({}, n), {}, {
    payload: H,
    label: B,
    active: re,
    activeIndex: _,
    coordinate: Q,
    accessibilityLayer: D
  }), de = /* @__PURE__ */ P.createElement(HC, {
    allowEscapeViewBox: o,
    animationDuration: a,
    animationEasing: l,
    isAnimationActive: u,
    active: re,
    coordinate: Q,
    hasPayload: le,
    offset: d,
    position: h,
    reverseDirection: g,
    useTranslate3d: v,
    viewBox: M,
    wrapperStyle: y,
    lastBoundingBox: ee,
    innerRef: $,
    hasPortalFromProps: !!S
  }, p6(s, me));
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ Ry(de, z), re && /* @__PURE__ */ P.createElement(WT, {
    cursor: m,
    tooltipEventType: N,
    coordinate: Q,
    payload: H,
    index: _
  }));
}
var zd = (e) => null;
zd.displayName = "Cell";
function v6(e, t, r) {
  return (t = g6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function g6(e) {
  var t = y6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function y6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
class m6 {
  constructor(t) {
    v6(this, "cache", /* @__PURE__ */ new Map()), this.maxSize = t;
  }
  get(t) {
    var r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      var n = this.cache.keys().next().value;
      n != null && this.cache.delete(n);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
  size() {
    return this.cache.size;
  }
}
function Cg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x6(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cg(Object(r), !0).forEach(function(n) {
      b6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function b6(e, t, r) {
  return (t = w6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function w6(e) {
  var t = j6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function j6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var S6 = {
  cacheSize: 2e3,
  enableCache: !0
}, i1 = x6({}, S6), _g = new m6(i1.cacheSize), O6 = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, Eg = "recharts_measurement_span";
function P6(e, t) {
  var r = t.fontSize || "", n = t.fontFamily || "", i = t.fontWeight || "", o = t.fontStyle || "", a = t.letterSpacing || "", l = t.textTransform || "";
  return "".concat(e, "|").concat(r, "|").concat(n, "|").concat(i, "|").concat(o, "|").concat(a, "|").concat(l);
}
var kg = (e, t) => {
  try {
    var r = document.getElementById(Eg);
    r || (r = document.createElement("span"), r.setAttribute("id", Eg), r.setAttribute("aria-hidden", "true"), document.body.appendChild(r)), Object.assign(r.style, O6, t), r.textContent = "".concat(e);
    var n = r.getBoundingClientRect();
    return {
      width: n.width,
      height: n.height
    };
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, Ti = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || oo.isSsr)
    return {
      width: 0,
      height: 0
    };
  if (!i1.enableCache)
    return kg(t, r);
  var n = P6(t, r), i = _g.get(n);
  if (i)
    return i;
  var o = kg(t, r);
  return _g.set(n, o), o;
}, o1;
function C6(e, t, r) {
  return (t = _6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _6(e) {
  var t = E6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function E6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ag = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, Tg = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, k6 = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/, A6 = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, T6 = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, I6 = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
function M6(e) {
  return I6.includes(e);
}
var Bn = "NaN";
function D6(e, t) {
  return e * T6[t];
}
class lt {
  static parse(t) {
    var r, [, n, i] = (r = A6.exec(t)) !== null && r !== void 0 ? r : [];
    return n == null ? lt.NaN : new lt(parseFloat(n), i ?? "");
  }
  constructor(t, r) {
    this.num = t, this.unit = r, this.num = t, this.unit = r, Jt(t) && (this.unit = ""), r !== "" && !k6.test(r) && (this.num = NaN, this.unit = ""), M6(r) && (this.num = D6(t, r), this.unit = "px");
  }
  add(t) {
    return this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num + t.num, this.unit);
  }
  subtract(t) {
    return this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num - t.num, this.unit);
  }
  multiply(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num * t.num, this.unit || t.unit);
  }
  divide(t) {
    return this.unit !== "" && t.unit !== "" && this.unit !== t.unit ? new lt(NaN, "") : new lt(this.num / t.num, this.unit || t.unit);
  }
  toString() {
    return "".concat(this.num).concat(this.unit);
  }
  isNaN() {
    return Jt(this.num);
  }
}
o1 = lt;
C6(lt, "NaN", new o1(NaN, ""));
function a1(e) {
  if (e == null || e.includes(Bn))
    return Bn;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, [, n, i, o] = (r = Ag.exec(t)) !== null && r !== void 0 ? r : [], a = lt.parse(n ?? ""), l = lt.parse(o ?? ""), s = i === "*" ? a.multiply(l) : a.divide(l);
    if (s.isNaN())
      return Bn;
    t = t.replace(Ag, s.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var c, [, u, d, p] = (c = Tg.exec(t)) !== null && c !== void 0 ? c : [], h = lt.parse(u ?? ""), g = lt.parse(p ?? ""), v = d === "+" ? h.add(g) : h.subtract(g);
    if (v.isNaN())
      return Bn;
    t = t.replace(Tg, v.toString());
  }
  return t;
}
var Ig = /\(([^()]*)\)/;
function N6(e) {
  for (var t = e, r; (r = Ig.exec(t)) != null; ) {
    var [, n] = r;
    t = t.replace(Ig, a1(n));
  }
  return t;
}
function R6(e) {
  var t = e.replace(/\s+/g, "");
  return t = N6(t), t = a1(t), t;
}
function $6(e) {
  try {
    return R6(e);
  } catch {
    return Bn;
  }
}
function sc(e) {
  var t = $6(e.slice(5, -1));
  return t === Bn ? "" : t;
}
var z6 = ["x", "y", "lineHeight", "capHeight", "fill", "scaleToFit", "textAnchor", "verticalAnchor"], L6 = ["dx", "dy", "angle", "className", "breakAll"];
function iu() {
  return iu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, iu.apply(null, arguments);
}
function Mg(e, t) {
  if (e == null) return {};
  var r, n, i = B6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function B6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var l1 = /[ \f\n\r\t\v\u2028\u2029]+/, s1 = (e) => {
  var {
    children: t,
    breakAll: r,
    style: n
  } = e;
  try {
    var i = [];
    Le(t) || (r ? i = t.toString().split("") : i = t.toString().split(l1));
    var o = i.map((l) => ({
      word: l,
      width: Ti(l, n).width
    })), a = r ? 0 : Ti(" ", n).width;
    return {
      wordsWithComputedWidth: o,
      spaceWidth: a
    };
  } catch {
    return null;
  }
};
function c1(e) {
  return e === "start" || e === "middle" || e === "end" || e === "inherit";
}
function W6(e) {
  return Le(e) || typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
var u1 = (e, t, r, n) => e.reduce((i, o) => {
  var {
    word: a,
    width: l
  } = o, s = i[i.length - 1];
  if (s && l != null && (t == null || n || s.width + l + r < Number(t)))
    s.words.push(a), s.width += l + r;
  else {
    var c = {
      words: [a],
      width: l
    };
    i.push(c);
  }
  return i;
}, []), d1 = (e) => e.reduce((t, r) => t.width > r.width ? t : r), F6 = "…", Dg = (e, t, r, n, i, o, a, l) => {
  var s = e.slice(0, t), c = s1({
    breakAll: r,
    style: n,
    children: s + F6
  });
  if (!c)
    return [!1, []];
  var u = u1(c.wordsWithComputedWidth, o, a, l), d = u.length > i || d1(u).width > Number(o);
  return [d, u];
}, V6 = (e, t, r, n, i) => {
  var {
    maxLines: o,
    children: a,
    style: l,
    breakAll: s
  } = e, c = te(o), u = String(a), d = u1(t, n, r, i);
  if (!c || i)
    return d;
  var p = d.length > o || d1(d).width > Number(n);
  if (!p)
    return d;
  for (var h = 0, g = u.length - 1, v = 0, y; h <= g && v <= u.length - 1; ) {
    var m = Math.floor((h + g) / 2), b = m - 1, [w, x] = Dg(u, b, s, l, o, n, r, i), [S] = Dg(u, m, s, l, o, n, r, i);
    if (!w && !S && (h = m + 1), w && S && (g = m - 1), !w && S) {
      y = x;
      break;
    }
    v++;
  }
  return y || d;
}, Ng = (e) => {
  var t = Le(e) ? [] : e.toString().split(l1);
  return [{
    words: t,
    width: void 0
  }];
}, K6 = (e) => {
  var {
    width: t,
    scaleToFit: r,
    children: n,
    style: i,
    breakAll: o,
    maxLines: a
  } = e;
  if ((t || r) && !oo.isSsr) {
    var l, s, c = s1({
      breakAll: o,
      children: n,
      style: i
    });
    if (c) {
      var {
        wordsWithComputedWidth: u,
        spaceWidth: d
      } = c;
      l = u, s = d;
    } else
      return Ng(n);
    return V6({
      breakAll: o,
      children: n,
      maxLines: a,
      style: i
    }, l, s, t, !!r);
  }
  return Ng(n);
}, f1 = "#808080", H6 = {
  angle: 0,
  breakAll: !1,
  // Magic number from d3
  capHeight: "0.71em",
  fill: f1,
  lineHeight: "1em",
  scaleToFit: !1,
  textAnchor: "start",
  // Maintain compat with existing charts / default SVG behavior
  verticalAnchor: "end",
  x: 0,
  y: 0
}, Ld = /* @__PURE__ */ ut((e, t) => {
  var r = jt(e, H6), {
    x: n,
    y: i,
    lineHeight: o,
    capHeight: a,
    fill: l,
    scaleToFit: s,
    textAnchor: c,
    verticalAnchor: u
  } = r, d = Mg(r, z6), p = tr(() => K6({
    breakAll: d.breakAll,
    children: d.children,
    maxLines: d.maxLines,
    scaleToFit: s,
    style: d.style,
    width: d.width
  }), [d.breakAll, d.children, d.maxLines, s, d.style, d.width]), {
    dx: h,
    dy: g,
    angle: v,
    className: y,
    breakAll: m
  } = d, b = Mg(d, L6);
  if (!Ut(n) || !Ut(i) || p.length === 0)
    return null;
  var w = Number(n) + (te(h) ? h : 0), x = Number(i) + (te(g) ? g : 0);
  if (!pe(w) || !pe(x))
    return null;
  var S;
  switch (u) {
    case "start":
      S = sc("calc(".concat(a, ")"));
      break;
    case "middle":
      S = sc("calc(".concat((p.length - 1) / 2, " * -").concat(o, " + (").concat(a, " / 2))"));
      break;
    default:
      S = sc("calc(".concat(p.length - 1, " * -").concat(o, ")"));
      break;
  }
  var O = [], C = p[0];
  if (s && C != null) {
    var E = C.width, {
      width: M
    } = d;
    O.push("scale(".concat(te(M) && te(E) ? M / E : 1, ")"));
  }
  return v && O.push("rotate(".concat(v, ", ").concat(w, ", ").concat(x, ")")), O.length && (b.transform = O.join(" ")), /* @__PURE__ */ P.createElement("text", iu({}, vt(b), {
    ref: t,
    x: w,
    y: x,
    className: Pe("recharts-text", y),
    textAnchor: c,
    fill: l.includes("url") ? f1 : l
  }), p.map((D, N) => {
    var _ = D.words.join(m ? "" : " ");
    return (
      // duplicate words will cause duplicate keys which is why we add the array index here
      /* @__PURE__ */ P.createElement("tspan", {
        x: w,
        dy: N === 0 ? S : o,
        key: "".concat(_, "-").concat(N)
      }, _)
    );
  }));
});
Ld.displayName = "Text";
function Rg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rg(Object(r), !0).forEach(function(n) {
      q6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q6(e, t, r) {
  return (t = U6(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U6(e) {
  var t = Y6(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y6(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var G6 = (e) => {
  var {
    viewBox: t,
    position: r,
    offset: n = 0,
    parentViewBox: i
  } = e, {
    x: o,
    y: a,
    height: l,
    upperWidth: s,
    lowerWidth: c
  } = Ru(t), u = o, d = o + (s - c) / 2, p = (u + d) / 2, h = (s + c) / 2, g = u + s / 2, v = l >= 0 ? 1 : -1, y = v * n, m = v > 0 ? "end" : "start", b = v > 0 ? "start" : "end", w = s >= 0 ? 1 : -1, x = w * n, S = w > 0 ? "end" : "start", O = w > 0 ? "start" : "end", C = i;
  if (r === "top") {
    var E = {
      x: u + s / 2,
      y: a - y,
      horizontalAnchor: "middle",
      verticalAnchor: m
    };
    return C && (E.height = Math.max(a - C.y, 0), E.width = s), E;
  }
  if (r === "bottom") {
    var M = {
      x: d + c / 2,
      y: a + l + y,
      horizontalAnchor: "middle",
      verticalAnchor: b
    };
    return C && (M.height = Math.max(C.y + C.height - (a + l), 0), M.width = c), M;
  }
  if (r === "left") {
    var D = {
      x: p - x,
      y: a + l / 2,
      horizontalAnchor: S,
      verticalAnchor: "middle"
    };
    return C && (D.width = Math.max(D.x - C.x, 0), D.height = l), D;
  }
  if (r === "right") {
    var N = {
      x: p + h + x,
      y: a + l / 2,
      horizontalAnchor: O,
      verticalAnchor: "middle"
    };
    return C && (N.width = Math.max(C.x + C.width - N.x, 0), N.height = l), N;
  }
  var _ = C ? {
    width: h,
    height: l
  } : {};
  return r === "insideLeft" ? ar({
    x: p + x,
    y: a + l / 2,
    horizontalAnchor: O,
    verticalAnchor: "middle"
  }, _) : r === "insideRight" ? ar({
    x: p + h - x,
    y: a + l / 2,
    horizontalAnchor: S,
    verticalAnchor: "middle"
  }, _) : r === "insideTop" ? ar({
    x: u + s / 2,
    y: a + y,
    horizontalAnchor: "middle",
    verticalAnchor: b
  }, _) : r === "insideBottom" ? ar({
    x: d + c / 2,
    y: a + l - y,
    horizontalAnchor: "middle",
    verticalAnchor: m
  }, _) : r === "insideTopLeft" ? ar({
    x: u + x,
    y: a + y,
    horizontalAnchor: O,
    verticalAnchor: b
  }, _) : r === "insideTopRight" ? ar({
    x: u + s - x,
    y: a + y,
    horizontalAnchor: S,
    verticalAnchor: b
  }, _) : r === "insideBottomLeft" ? ar({
    x: d + x,
    y: a + l - y,
    horizontalAnchor: O,
    verticalAnchor: m
  }, _) : r === "insideBottomRight" ? ar({
    x: d + c - x,
    y: a + l - y,
    horizontalAnchor: S,
    verticalAnchor: m
  }, _) : r && typeof r == "object" && (te(r.x) || vn(r.x)) && (te(r.y) || vn(r.y)) ? ar({
    x: o + Qt(r.x, h),
    y: a + Qt(r.y, l),
    horizontalAnchor: "end",
    verticalAnchor: "end"
  }, _) : ar({
    x: g,
    y: a + l / 2,
    horizontalAnchor: "middle",
    verticalAnchor: "middle"
  }, _);
}, X6 = ["labelRef"], Z6 = ["content"];
function $g(e, t) {
  if (e == null) return {};
  var r, n, i = J6(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function J6(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function zg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zg(Object(r), !0).forEach(function(n) {
      Q6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Q6(e, t, r) {
  return (t = eI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function eI(e) {
  var t = tI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function tI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wr() {
  return wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, wr.apply(null, arguments);
}
var p1 = /* @__PURE__ */ At(null), h1 = (e) => {
  var {
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a,
    children: l
  } = e, s = tr(() => ({
    x: t,
    y: r,
    upperWidth: n,
    lowerWidth: i,
    width: o,
    height: a
  }), [t, r, n, i, o, a]);
  return /* @__PURE__ */ P.createElement(p1.Provider, {
    value: s
  }, l);
}, v1 = () => {
  var e = zt(p1), t = to();
  return e || (t ? Ru(t) : void 0);
}, rI = /* @__PURE__ */ At(null), nI = () => {
  var e = zt(rI), t = oe(ix);
  return e || t;
}, iI = (e) => {
  var {
    value: t,
    formatter: r
  } = e, n = Le(e.children) ? t : e.children;
  return typeof r == "function" ? r(n) : n;
}, Bd = (e) => e != null && typeof e == "function", oI = (e, t) => {
  var r = Ct(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
}, aI = (e, t, r, n, i) => {
  var {
    offset: o,
    className: a
  } = e, {
    cx: l,
    cy: s,
    innerRadius: c,
    outerRadius: u,
    startAngle: d,
    endAngle: p,
    clockWise: h
  } = i, g = (c + u) / 2, v = oI(d, p), y = v >= 0 ? 1 : -1, m, b;
  switch (t) {
    case "insideStart":
      m = d + y * o, b = h;
      break;
    case "insideEnd":
      m = p - y * o, b = !h;
      break;
    case "end":
      m = p + y * o, b = h;
      break;
    default:
      throw new Error("Unsupported position ".concat(t));
  }
  b = v <= 0 ? b : !b;
  var w = st(l, s, g, m), x = st(l, s, g, m + (b ? 1 : -1) * 359), S = "M".concat(w.x, ",").concat(w.y, `
    A`).concat(g, ",").concat(g, ",0,1,").concat(b ? 0 : 1, `,
    `).concat(x.x, ",").concat(x.y), O = Le(e.id) ? Mi("recharts-radial-line-") : e.id;
  return /* @__PURE__ */ P.createElement("text", wr({}, n, {
    dominantBaseline: "central",
    className: Pe("recharts-radial-bar-label", a)
  }), /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("path", {
    id: O,
    d: S
  })), /* @__PURE__ */ P.createElement("textPath", {
    xlinkHref: "#".concat(O)
  }, r));
}, lI = (e, t, r) => {
  var {
    cx: n,
    cy: i,
    innerRadius: o,
    outerRadius: a,
    startAngle: l,
    endAngle: s
  } = e, c = (l + s) / 2;
  if (r === "outside") {
    var {
      x: u,
      y: d
    } = st(n, i, a + t, c);
    return {
      x: u,
      y: d,
      textAnchor: u >= n ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (r === "center")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (r === "centerTop")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (r === "centerBottom")
    return {
      x: n,
      y: i,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var p = (o + a) / 2, {
    x: h,
    y: g
  } = st(n, i, p, c);
  return {
    x: h,
    y: g,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, Go = (e) => e != null && "cx" in e && te(e.cx), sI = {
  angle: 0,
  offset: 5,
  zIndex: Ze.label,
  position: "middle",
  textBreakAll: !1
};
function cI(e) {
  if (!Go(e))
    return e;
  var {
    cx: t,
    cy: r,
    outerRadius: n
  } = e, i = n * 2;
  return {
    x: t - n,
    y: r - n,
    width: i,
    upperWidth: i,
    lowerWidth: i,
    height: i
  };
}
function Br(e) {
  var t = jt(e, sI), {
    viewBox: r,
    parentViewBox: n,
    position: i,
    value: o,
    children: a,
    content: l,
    className: s = "",
    textBreakAll: c,
    labelRef: u
  } = t, d = nI(), p = v1(), h = i === "center" ? p : d ?? p, g, v, y;
  r == null ? g = h : Go(r) ? g = r : g = Ru(r);
  var m = cI(g);
  if (!g || Le(o) && Le(a) && !/* @__PURE__ */ Nt(l) && typeof l != "function")
    return null;
  var b = Ei(Ei({}, t), {}, {
    viewBox: g
  });
  if (/* @__PURE__ */ Nt(l)) {
    var {
      labelRef: w
    } = b, x = $g(b, X6);
    return /* @__PURE__ */ ti(l, x);
  }
  if (typeof l == "function") {
    var {
      content: S
    } = b, O = $g(b, Z6);
    if (v = /* @__PURE__ */ Dy(l, O), /* @__PURE__ */ Nt(v))
      return v;
  } else
    v = iI(t);
  var C = vt(t);
  if (Go(g)) {
    if (i === "insideStart" || i === "insideEnd" || i === "end")
      return aI(t, i, v, C, g);
    y = lI(g, t.offset, t.position);
  } else {
    if (!m)
      return null;
    var E = G6({
      viewBox: m,
      position: i,
      offset: t.offset,
      parentViewBox: Go(n) ? void 0 : n
    });
    y = Ei(Ei({
      x: E.x,
      y: E.y,
      textAnchor: E.horizontalAnchor,
      verticalAnchor: E.verticalAnchor
    }, E.width !== void 0 ? {
      width: E.width
    } : {}), E.height !== void 0 ? {
      height: E.height
    } : {});
  }
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(Ld, wr({
    ref: u,
    className: Pe("recharts-label", s)
  }, C, y, {
    /*
     * textAnchor is decided by default based on the `position`
     * but we allow overriding via props for precise control.
     */
    textAnchor: c1(C.textAnchor) ? C.textAnchor : y.textAnchor,
    breakAll: c
  }), v));
}
Br.displayName = "Label";
var uI = (e, t, r) => {
  if (!e)
    return null;
  var n = {
    viewBox: t,
    labelRef: r
  };
  return e === !0 ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit"
  }, n)) : Ut(e) ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    value: e
  }, n)) : /* @__PURE__ */ Nt(e) ? e.type === Br ? /* @__PURE__ */ ti(e, Ei({
    key: "label-implicit"
  }, n)) : /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    content: e
  }, n)) : Bd(e) ? /* @__PURE__ */ P.createElement(Br, wr({
    key: "label-implicit",
    content: e
  }, n)) : e && typeof e == "object" ? /* @__PURE__ */ P.createElement(Br, wr({}, e, {
    key: "label-implicit"
  }, n)) : null;
};
function g1(e) {
  var {
    label: t,
    labelRef: r
  } = e, n = v1();
  return uI(t, n, r) || null;
}
var dI = ["valueAccessor"], fI = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
function za() {
  return za = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, za.apply(null, arguments);
}
function Lg(e, t) {
  if (e == null) return {};
  var r, n, i = pI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function pI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var hI = (e) => {
  var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
  if (W6(t))
    return t;
}, y1 = /* @__PURE__ */ At(void 0), m1 = y1.Provider, x1 = /* @__PURE__ */ At(void 0);
x1.Provider;
function vI() {
  return zt(y1);
}
function gI() {
  return zt(x1);
}
function Pr(e) {
  var {
    valueAccessor: t = hI
  } = e, r = Lg(e, dI), {
    dataKey: n,
    clockWise: i,
    id: o,
    textBreakAll: a,
    zIndex: l
  } = r, s = Lg(r, fI), c = vI(), u = gI(), d = c || u;
  return !d || !d.length ? null : /* @__PURE__ */ P.createElement(Lt, {
    zIndex: l ?? Ze.label
  }, /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-label-list"
  }, d.map((p, h) => {
    var g, v = Le(n) ? t(p, h) : He(p.payload, n), y = Le(o) ? {} : {
      id: "".concat(o, "-").concat(h)
    };
    return /* @__PURE__ */ P.createElement(Br, za({
      key: "label-".concat(h)
    }, vt(p), s, y, {
      /*
       * Prefer to use the explicit fill from LabelList props.
       * Only in an absence of that, fall back to the fill of the entry.
       * The entry fill can be quite difficult to see especially in Bar, Pie, RadialBar in inside positions.
       * On the other hand it's quite convenient in Scatter, Line, or when the position is outside the Bar, Pie filled shapes.
       */
      fill: (g = r.fill) !== null && g !== void 0 ? g : p.fill,
      parentViewBox: p.parentViewBox,
      value: v,
      textBreakAll: a,
      viewBox: p.viewBox,
      index: h,
      zIndex: 0
    }));
  })));
}
Pr.displayName = "LabelList";
function b1(e) {
  var {
    label: t
  } = e;
  return t ? t === !0 ? /* @__PURE__ */ P.createElement(Pr, {
    key: "labelList-implicit"
  }) : /* @__PURE__ */ P.isValidElement(t) || Bd(t) ? /* @__PURE__ */ P.createElement(Pr, {
    key: "labelList-implicit",
    content: t
  }) : typeof t == "object" ? /* @__PURE__ */ P.createElement(Pr, za({
    key: "labelList-implicit"
  }, t, {
    type: String(t.type)
  })) : null : null;
}
function ou() {
  return ou = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ou.apply(null, arguments);
}
var w1 = (e) => {
  var {
    cx: t,
    cy: r,
    r: n,
    className: i
  } = e, o = Pe("recharts-dot", i);
  return te(t) && te(r) && te(n) ? /* @__PURE__ */ P.createElement("circle", ou({}, qt(e), Ou(e), {
    className: o,
    cx: t,
    cy: r,
    r: n
  })) : null;
}, yI = {
  radiusAxis: {},
  angleAxis: {}
}, j1 = gt({
  name: "polarAxis",
  initialState: yI,
  reducers: {
    addRadiusAxis(e, t) {
      e.radiusAxis[t.payload.id] = t.payload;
    },
    removeRadiusAxis(e, t) {
      delete e.radiusAxis[t.payload.id];
    },
    addAngleAxis(e, t) {
      e.angleAxis[t.payload.id] = t.payload;
    },
    removeAngleAxis(e, t) {
      delete e.angleAxis[t.payload.id];
    }
  }
}), {
  addRadiusAxis: ZR,
  removeRadiusAxis: JR,
  addAngleAxis: QR,
  removeAngleAxis: e$
} = j1.actions, mI = j1.reducer;
function xI(e) {
  return e && typeof e == "object" && "className" in e && typeof e.className == "string" ? e.className : "";
}
var Wo = { exports: {} }, Ce = {};
var Bg;
function bI() {
  if (Bg) return Ce;
  Bg = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.consumer"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), s = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function g(v) {
    if (typeof v == "object" && v !== null) {
      var y = v.$$typeof;
      switch (y) {
        case e:
          switch (v = v.type, v) {
            case r:
            case i:
            case n:
            case s:
            case c:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case a:
                case l:
                case d:
                case u:
                  return v;
                case o:
                  return v;
                default:
                  return y;
              }
          }
        case t:
          return y;
      }
    }
  }
  return Ce.ContextConsumer = o, Ce.ContextProvider = a, Ce.Element = e, Ce.ForwardRef = l, Ce.Fragment = r, Ce.Lazy = d, Ce.Memo = u, Ce.Portal = t, Ce.Profiler = i, Ce.StrictMode = n, Ce.Suspense = s, Ce.SuspenseList = c, Ce.isContextConsumer = function(v) {
    return g(v) === o;
  }, Ce.isContextProvider = function(v) {
    return g(v) === a;
  }, Ce.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, Ce.isForwardRef = function(v) {
    return g(v) === l;
  }, Ce.isFragment = function(v) {
    return g(v) === r;
  }, Ce.isLazy = function(v) {
    return g(v) === d;
  }, Ce.isMemo = function(v) {
    return g(v) === u;
  }, Ce.isPortal = function(v) {
    return g(v) === t;
  }, Ce.isProfiler = function(v) {
    return g(v) === i;
  }, Ce.isStrictMode = function(v) {
    return g(v) === n;
  }, Ce.isSuspense = function(v) {
    return g(v) === s;
  }, Ce.isSuspenseList = function(v) {
    return g(v) === c;
  }, Ce.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === i || v === n || v === s || v === c || typeof v == "object" && v !== null && (v.$$typeof === d || v.$$typeof === u || v.$$typeof === a || v.$$typeof === o || v.$$typeof === l || v.$$typeof === h || v.getModuleId !== void 0);
  }, Ce.typeOf = g, Ce;
}
var _e = {};
var Wg;
function wI() {
  return Wg || (Wg = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (typeof v == "object" && v !== null) {
        var y = v.$$typeof;
        switch (y) {
          case t:
            switch (v = v.type, v) {
              case n:
              case o:
              case i:
              case c:
              case u:
              case h:
                return v;
              default:
                switch (v = v && v.$$typeof, v) {
                  case l:
                  case s:
                  case p:
                  case d:
                    return v;
                  case a:
                    return v;
                  default:
                    return y;
                }
            }
          case r:
            return y;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), l = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), g = Symbol.for("react.client.reference");
    _e.ContextConsumer = a, _e.ContextProvider = l, _e.Element = t, _e.ForwardRef = s, _e.Fragment = n, _e.Lazy = p, _e.Memo = d, _e.Portal = r, _e.Profiler = o, _e.StrictMode = i, _e.Suspense = c, _e.SuspenseList = u, _e.isContextConsumer = function(v) {
      return e(v) === a;
    }, _e.isContextProvider = function(v) {
      return e(v) === l;
    }, _e.isElement = function(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }, _e.isForwardRef = function(v) {
      return e(v) === s;
    }, _e.isFragment = function(v) {
      return e(v) === n;
    }, _e.isLazy = function(v) {
      return e(v) === p;
    }, _e.isMemo = function(v) {
      return e(v) === d;
    }, _e.isPortal = function(v) {
      return e(v) === r;
    }, _e.isProfiler = function(v) {
      return e(v) === o;
    }, _e.isStrictMode = function(v) {
      return e(v) === i;
    }, _e.isSuspense = function(v) {
      return e(v) === c;
    }, _e.isSuspenseList = function(v) {
      return e(v) === u;
    }, _e.isValidElementType = function(v) {
      return typeof v == "string" || typeof v == "function" || v === n || v === o || v === i || v === c || v === u || typeof v == "object" && v !== null && (v.$$typeof === p || v.$$typeof === d || v.$$typeof === l || v.$$typeof === a || v.$$typeof === s || v.$$typeof === g || v.getModuleId !== void 0);
    }, _e.typeOf = e;
  })()), _e;
}
var Fg;
function jI() {
  return Fg || (Fg = 1, process.env.NODE_ENV === "production" ? Wo.exports = /* @__PURE__ */ bI() : Wo.exports = /* @__PURE__ */ wI()), Wo.exports;
}
var SI = /* @__PURE__ */ jI(), Vg = (e) => typeof e == "string" ? e : e ? e.displayName || e.name || "Component" : "", Kg = null, cc = null, S1 = (e) => {
  if (e === Kg && Array.isArray(cc))
    return cc;
  var t = [];
  return t2.forEach(e, (r) => {
    Le(r) || (SI.isFragment(r) ? t = t.concat(S1(r.props.children)) : t.push(r));
  }), cc = t, Kg = e, t;
};
function OI(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map((i) => Vg(i)) : n = [Vg(t)], S1(e).forEach((i) => {
    var o = Hn(i, "type.displayName") || Hn(i, "type.name");
    o && n.indexOf(o) !== -1 && r.push(i);
  }), r;
}
var O1 = (e) => e && typeof e == "object" && "clipDot" in e ? !!e.clipDot : !0, uc = {}, Hg;
function PI() {
  return Hg || (Hg = 1, (function(e) {
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
    function t(r) {
      if (typeof r != "object" || r == null)
        return !1;
      if (Object.getPrototypeOf(r) === null)
        return !0;
      if (Object.prototype.toString.call(r) !== "[object Object]") {
        const i = r[Symbol.toStringTag];
        return i == null || !Object.getOwnPropertyDescriptor(r, Symbol.toStringTag)?.writable ? !1 : r.toString() === `[object ${i}]`;
      }
      let n = r;
      for (; Object.getPrototypeOf(n) !== null; )
        n = Object.getPrototypeOf(n);
      return Object.getPrototypeOf(r) === n;
    }
    e.isPlainObject = t;
  })(uc)), uc;
}
var dc, qg;
function CI() {
  return qg || (qg = 1, dc = PI().isPlainObject), dc;
}
var _I = /* @__PURE__ */ CI();
const EI = /* @__PURE__ */ Sn(_I);
var Ug, Yg, Gg, Xg, Zg;
function Jg(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jg(Object(r), !0).forEach(function(n) {
      kI(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jg(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kI(e, t, r) {
  return (t = AI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AI(e) {
  var t = TI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function La() {
  return La = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, La.apply(null, arguments);
}
function Si(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var ey = (e, t, r, n, i) => {
  var o = r - n, a;
  return a = Fe(Ug || (Ug = Si(["M ", ",", ""])), e, t), a += Fe(Yg || (Yg = Si(["L ", ",", ""])), e + r, t), a += Fe(Gg || (Gg = Si(["L ", ",", ""])), e + r - o / 2, t + i), a += Fe(Xg || (Xg = Si(["L ", ",", ""])), e + r - o / 2 - n, t + i), a += Fe(Zg || (Zg = Si(["L ", ",", " Z"])), e, t), a;
}, II = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, MI = (e) => {
  var t = jt(e, II), {
    x: r,
    y: n,
    upperWidth: i,
    lowerWidth: o,
    height: a,
    className: l
  } = t, {
    animationEasing: s,
    animationDuration: c,
    animationBegin: u,
    isUpdateAnimationActive: d
  } = t, p = ve(null), [h, g] = W(-1), v = ve(i), y = ve(o), m = ve(a), b = ve(r), w = ve(n), x = vl(e, "trapezoid-");
  if (Oe(() => {
    if (p.current && p.current.getTotalLength)
      try {
        var F = p.current.getTotalLength();
        F && g(F);
      } catch {
      }
  }, []), r !== +r || n !== +n || i !== +i || o !== +o || a !== +a || i === 0 && o === 0 || a === 0)
    return null;
  var S = Pe("recharts-trapezoid", l);
  if (!d)
    return /* @__PURE__ */ P.createElement("g", null, /* @__PURE__ */ P.createElement("path", La({}, vt(t), {
      className: S,
      d: ey(r, n, i, o, a)
    })));
  var O = v.current, C = y.current, E = m.current, M = b.current, D = w.current, N = "0px ".concat(h === -1 ? 1 : h, "px"), _ = "".concat(h, "px ").concat(h, "px"), L = k0(["strokeDasharray"], c, s);
  return /* @__PURE__ */ P.createElement(hl, {
    animationId: x,
    key: x,
    canBegin: h > 0,
    duration: c,
    easing: s,
    isActive: d,
    begin: u
  }, (F) => {
    var Y = ze(O, i, F), Q = ze(C, o, F), ie = ze(E, a, F), R = ze(M, r, F), re = ze(D, n, F);
    p.current && (v.current = Y, y.current = Q, m.current = ie, b.current = R, w.current = re);
    var ee = F > 0 ? {
      transition: L,
      strokeDasharray: _
    } : {
      strokeDasharray: N
    };
    return /* @__PURE__ */ P.createElement("path", La({}, vt(t), {
      className: S,
      d: ey(R, re, Y, Q, ie),
      ref: p,
      style: Qg(Qg({}, ee), t.style)
    }));
  });
}, DI = ["option", "shapeType", "activeClassName", "inActiveClassName"];
function NI(e, t) {
  if (e == null) return {};
  var r, n, i = RI(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function RI(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ba(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ty(Object(r), !0).forEach(function(n) {
      $I(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $I(e, t, r) {
  return (t = zI(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function zI(e) {
  var t = LI(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function LI(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function BI(e, t) {
  return Ba(Ba({}, t), e);
}
function WI(e, t) {
  return e === "symbols";
}
function ry(e) {
  var {
    shapeType: t,
    elementProps: r
  } = e;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ P.createElement(M0, r);
    case "trapezoid":
      return /* @__PURE__ */ P.createElement(MI, r);
    case "sector":
      return /* @__PURE__ */ P.createElement(R0, r);
    case "symbols":
      if (WI(t))
        return /* @__PURE__ */ P.createElement(fm, r);
      break;
    case "curve":
      return /* @__PURE__ */ P.createElement(ki, r);
    default:
      return null;
  }
}
function FI(e) {
  return /* @__PURE__ */ Nt(e) ? e.props : e;
}
function VI(e) {
  var {
    option: t,
    shapeType: r,
    activeClassName: n = "recharts-active-shape",
    inActiveClassName: i = "recharts-shape"
  } = e, o = NI(e, DI), a;
  if (/* @__PURE__ */ Nt(t))
    a = /* @__PURE__ */ ti(t, Ba(Ba({}, o), FI(t)));
  else if (typeof t == "function")
    a = t(o, o.index);
  else if (EI(t) && typeof t != "boolean") {
    var l = BI(t, o);
    a = /* @__PURE__ */ P.createElement(ry, {
      shapeType: r,
      elementProps: l
    });
  } else {
    var s = o;
    a = /* @__PURE__ */ P.createElement(ry, {
      shapeType: r,
      elementProps: s
    });
  }
  return o.isActive ? /* @__PURE__ */ P.createElement(ct, {
    className: n
  }, a) : /* @__PURE__ */ P.createElement(ct, {
    className: i
  }, a);
}
var P1 = (e, t, r) => {
  var n = $e();
  return (i, o) => (a) => {
    e?.(i, o, a), n(kb({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
}, C1 = (e) => {
  var t = $e();
  return (r, n) => (i) => {
    e?.(r, n, i), t(l3());
  };
}, _1 = (e, t, r) => {
  var n = $e();
  return (i, o) => (a) => {
    e?.(i, o, a), n(s3({
      activeIndex: String(o),
      activeDataKey: t,
      activeCoordinate: i.tooltipPosition,
      activeGraphicalItemId: r
    }));
  };
};
function E1(e) {
  var {
    tooltipEntrySettings: t
  } = e, r = $e(), n = dt(), i = ve(null);
  return kt(() => {
    n || (i.current === null ? r(n3(t)) : i.current !== t && r(i3({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [t, r, n]), kt(() => () => {
    i.current && (r(o3(i.current)), i.current = null);
  }, [r]), null;
}
function k1(e) {
  var {
    legendPayload: t
  } = e, r = $e(), n = dt(), i = ve(null);
  return kt(() => {
    n || (i.current === null ? r(iC(t)) : i.current !== t && r(oC({
      prev: i.current,
      next: t
    })), i.current = t);
  }, [r, n, t]), kt(() => () => {
    i.current && (r(aC(i.current)), i.current = null);
  }, [r]), null;
}
var fc, KI = () => {
  var [e] = P.useState(() => Mi("uid-"));
  return e;
}, HI = (fc = P.useId) !== null && fc !== void 0 ? fc : KI;
function qI(e, t) {
  var r = HI();
  return t || (e ? "".concat(e, "-").concat(r) : r);
}
var UI = /* @__PURE__ */ At(void 0), A1 = (e) => {
  var {
    id: t,
    type: r,
    children: n
  } = e, i = qI("recharts-".concat(r), t);
  return /* @__PURE__ */ P.createElement(UI.Provider, {
    value: i
  }, n(i));
}, YI = {
  cartesianItems: [],
  polarItems: []
}, T1 = gt({
  name: "graphicalItems",
  initialState: YI,
  reducers: {
    addCartesianGraphicalItem: {
      reducer(e, t) {
        e.cartesianItems.push(t.payload);
      },
      prepare: De()
    },
    replaceCartesianGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Kt(e).cartesianItems.indexOf(r);
        i > -1 && (e.cartesianItems[i] = n);
      },
      prepare: De()
    },
    removeCartesianGraphicalItem: {
      reducer(e, t) {
        var r = Kt(e).cartesianItems.indexOf(t.payload);
        r > -1 && e.cartesianItems.splice(r, 1);
      },
      prepare: De()
    },
    addPolarGraphicalItem: {
      reducer(e, t) {
        e.polarItems.push(t.payload);
      },
      prepare: De()
    },
    removePolarGraphicalItem: {
      reducer(e, t) {
        var r = Kt(e).polarItems.indexOf(t.payload);
        r > -1 && e.polarItems.splice(r, 1);
      },
      prepare: De()
    },
    replacePolarGraphicalItem: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload, i = Kt(e).polarItems.indexOf(r);
        i > -1 && (e.polarItems[i] = n);
      },
      prepare: De()
    }
  }
}), {
  addCartesianGraphicalItem: GI,
  replaceCartesianGraphicalItem: XI,
  removeCartesianGraphicalItem: ZI,
  addPolarGraphicalItem: t$,
  removePolarGraphicalItem: r$,
  replacePolarGraphicalItem: n$
} = T1.actions, JI = T1.reducer, QI = (e) => {
  var t = $e(), r = ve(null);
  return kt(() => {
    r.current === null ? t(GI(e)) : r.current !== e && t(XI({
      prev: r.current,
      next: e
    })), r.current = e;
  }, [t, e]), kt(() => () => {
    r.current && (t(ZI(r.current)), r.current = null);
  }, [t]), null;
}, I1 = /* @__PURE__ */ gu(QI), eM = ["points"];
function ny(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ny(Object(r), !0).forEach(function(n) {
      tM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ny(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function tM(e, t, r) {
  return (t = rM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function rM(e) {
  var t = nM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function nM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wa.apply(null, arguments);
}
function iM(e, t) {
  if (e == null) return {};
  var r, n, i = oM(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function oM(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function aM(e) {
  var {
    option: t,
    dotProps: r,
    className: n
  } = e;
  if (/* @__PURE__ */ Nt(t))
    return /* @__PURE__ */ ti(t, r);
  if (typeof t == "function")
    return t(r);
  var i = Pe(n, typeof t != "boolean" ? t.className : ""), o = r ?? {}, {
    points: a
  } = o, l = iM(o, eM);
  return /* @__PURE__ */ P.createElement(w1, Wa({}, l, {
    className: i
  }));
}
function lM(e, t) {
  return e == null ? !1 : t ? !0 : e.length === 1;
}
function sM(e) {
  var {
    points: t,
    dot: r,
    className: n,
    dotClassName: i,
    dataKey: o,
    baseProps: a,
    needClip: l,
    clipPathId: s,
    zIndex: c = Ze.scatter
  } = e;
  if (!lM(t, r))
    return null;
  var u = O1(r), d = I2(r), p = t.map((g, v) => {
    var y, m, b = pc(pc(pc({
      r: 3
    }, a), d), {}, {
      index: v,
      cx: (y = g.x) !== null && y !== void 0 ? y : void 0,
      cy: (m = g.y) !== null && m !== void 0 ? m : void 0,
      dataKey: o,
      value: g.value,
      payload: g.payload,
      points: t
    });
    return /* @__PURE__ */ P.createElement(aM, {
      key: "dot-".concat(v),
      option: r,
      dotProps: b,
      className: i
    });
  }), h = {};
  return l && s != null && (h.clipPath = "url(#clipPath-".concat(u ? "" : "dots-").concat(s, ")")), /* @__PURE__ */ P.createElement(Lt, {
    zIndex: c
  }, /* @__PURE__ */ P.createElement(ct, Wa({
    className: n
  }, h), p));
}
function iy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? iy(Object(r), !0).forEach(function(n) {
      cM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : iy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cM(e, t, r) {
  return (t = uM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uM(e) {
  var t = dM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function dM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var M1 = 0, fM = {
  xAxis: {},
  yAxis: {},
  zAxis: {}
}, D1 = gt({
  name: "cartesianAxis",
  initialState: fM,
  reducers: {
    addXAxis: {
      reducer(e, t) {
        e.xAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceXAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.xAxis[r.id] !== void 0 && (r.id !== n.id && delete e.xAxis[r.id], e.xAxis[n.id] = n);
      },
      prepare: De()
    },
    removeXAxis: {
      reducer(e, t) {
        delete e.xAxis[t.payload.id];
      },
      prepare: De()
    },
    addYAxis: {
      reducer(e, t) {
        e.yAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceYAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.yAxis[r.id] !== void 0 && (r.id !== n.id && delete e.yAxis[r.id], e.yAxis[n.id] = n);
      },
      prepare: De()
    },
    removeYAxis: {
      reducer(e, t) {
        delete e.yAxis[t.payload.id];
      },
      prepare: De()
    },
    addZAxis: {
      reducer(e, t) {
        e.zAxis[t.payload.id] = t.payload;
      },
      prepare: De()
    },
    replaceZAxis: {
      reducer(e, t) {
        var {
          prev: r,
          next: n
        } = t.payload;
        e.zAxis[r.id] !== void 0 && (r.id !== n.id && delete e.zAxis[r.id], e.zAxis[n.id] = n);
      },
      prepare: De()
    },
    removeZAxis: {
      reducer(e, t) {
        delete e.zAxis[t.payload.id];
      },
      prepare: De()
    },
    updateYAxisWidth(e, t) {
      var {
        id: r,
        width: n
      } = t.payload, i = e.yAxis[r];
      if (i) {
        var o, a = i.widthHistory || [];
        if (a.length === 3 && a[0] === a[2] && n === a[1] && n !== i.width && Math.abs(n - ((o = a[0]) !== null && o !== void 0 ? o : 0)) <= 1)
          return;
        var l = [...a, n].slice(-3);
        e.yAxis[r] = oy(oy({}, i), {}, {
          width: n,
          widthHistory: l
        });
      }
    }
  }
}), {
  addXAxis: pM,
  replaceXAxis: hM,
  removeXAxis: vM,
  addYAxis: gM,
  replaceYAxis: yM,
  removeYAxis: mM,
  addZAxis: i$,
  replaceZAxis: o$,
  removeZAxis: a$,
  updateYAxisWidth: xM
} = D1.actions, bM = D1.reducer, wM = I([rt], (e) => ({
  top: e.top,
  bottom: e.bottom,
  left: e.left,
  right: e.right
})), jM = I([wM, Tr, Ir], (e, t, r) => {
  if (!(!e || t == null || r == null))
    return {
      x: e.left,
      y: e.top,
      width: Math.max(0, t - e.left - e.right),
      height: Math.max(0, r - e.top - e.bottom)
    };
}), Wd = () => oe(jM), SM = () => oe(nT);
function ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ay(Object(r), !0).forEach(function(n) {
      OM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OM(e, t, r) {
  return (t = PM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PM(e) {
  var t = CM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function CM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _M = (e) => {
  var {
    point: t,
    childIndex: r,
    mainColor: n,
    activeDot: i,
    dataKey: o,
    clipPath: a
  } = e;
  if (i === !1 || t.x == null || t.y == null)
    return null;
  var l = {
    index: r,
    dataKey: o,
    cx: t.x,
    cy: t.y,
    r: 4,
    fill: n ?? "none",
    strokeWidth: 2,
    stroke: "#fff",
    payload: t.payload,
    value: t.value
  }, s = hc(hc(hc({}, l), Yi(i)), Ou(i)), c;
  return /* @__PURE__ */ Nt(i) ? c = /* @__PURE__ */ ti(i, s) : typeof i == "function" ? c = i(s) : c = /* @__PURE__ */ P.createElement(w1, s), /* @__PURE__ */ P.createElement(ct, {
    className: "recharts-active-dot",
    clipPath: a
  }, c);
};
function ly(e) {
  var {
    points: t,
    mainColor: r,
    activeDot: n,
    itemDataKey: i,
    clipPath: o,
    zIndex: a = Ze.activeDot
  } = e, l = oe(wn), s = SM();
  if (t == null || s == null)
    return null;
  var c = t.find((u) => s.includes(u.payload));
  return Le(c) ? null : /* @__PURE__ */ P.createElement(Lt, {
    zIndex: a
  }, /* @__PURE__ */ P.createElement(_M, {
    point: c,
    childIndex: Number(l),
    mainColor: r,
    dataKey: i,
    activeDot: n,
    clipPath: o
  }));
}
var sy = (e, t, r) => {
  var n = r ?? e;
  if (!Le(n))
    return Qt(n, t, 0);
}, EM = (e, t, r) => {
  var n = {}, i = e.filter(Sl), o = e.filter((c) => c.stackId == null), a = i.reduce((c, u) => {
    var d = c[u.stackId];
    return d == null && (d = []), d.push(u), c[u.stackId] = d, c;
  }, n), l = Object.entries(a).map((c) => {
    var u, [d, p] = c, h = p.map((v) => v.dataKey), g = sy(t, r, (u = p[0]) === null || u === void 0 ? void 0 : u.barSize);
    return {
      stackId: d,
      dataKeys: h,
      barSize: g
    };
  }), s = o.map((c) => {
    var u = [c.dataKey].filter((p) => p != null), d = sy(t, r, c.barSize);
    return {
      stackId: void 0,
      dataKeys: u,
      barSize: d
    };
  });
  return [...l, ...s];
};
function cy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cy(Object(r), !0).forEach(function(n) {
      kM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : cy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function kM(e, t, r) {
  return (t = AM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AM(e) {
  var t = TM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function TM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function IM(e, t, r, n, i) {
  var o, a = n.length;
  if (!(a < 1)) {
    var l = Qt(e, r, 0, !0), s, c = [];
    if (pe((o = n[0]) === null || o === void 0 ? void 0 : o.barSize)) {
      var u = !1, d = r / a, p = n.reduce((b, w) => b + (w.barSize || 0), 0);
      p += (a - 1) * l, p >= r && (p -= (a - 1) * l, l = 0), p >= r && d > 0 && (u = !0, d *= 0.9, p = a * d);
      var h = (r - p) / 2 >> 0, g = {
        offset: h - l,
        size: 0
      };
      s = n.reduce((b, w) => {
        var x, S = {
          stackId: w.stackId,
          dataKeys: w.dataKeys,
          position: {
            offset: g.offset + g.size + l,
            size: u ? d : (x = w.barSize) !== null && x !== void 0 ? x : 0
          }
        }, O = [...b, S];
        return g = S.position, O;
      }, c);
    } else {
      var v = Qt(t, r, 0, !0);
      r - 2 * v - (a - 1) * l <= 0 && (l = 0);
      var y = (r - 2 * v - (a - 1) * l) / a;
      y > 1 && (y >>= 0);
      var m = pe(i) ? Math.min(y, i) : y;
      s = n.reduce((b, w, x) => [...b, {
        stackId: w.stackId,
        dataKeys: w.dataKeys,
        position: {
          offset: v + (y + l) * x + (y - m) / 2,
          size: m
        }
      }], c);
    }
    return s;
  }
}
var MM = (e, t, r, n, i, o, a) => {
  var l = Le(a) ? t : a, s = IM(r, n, i !== o ? i : o, e, l);
  return i !== o && s != null && (s = s.map((c) => Fo(Fo({}, c), {}, {
    position: Fo(Fo({}, c.position), {}, {
      offset: c.position.offset - i / 2
    })
  }))), s;
}, DM = (e, t) => {
  var r = jl(t);
  if (!(!e || r == null || t == null)) {
    var {
      stackId: n
    } = t;
    if (n != null) {
      var i = e[n];
      if (i) {
        var {
          stackedData: o
        } = i;
        if (o)
          return o.find((a) => a.key === r);
      }
    }
  }
}, NM = (e, t) => {
  if (!(e == null || t == null)) {
    var r = e.find((n) => n.stackId === t.stackId && t.dataKey != null && n.dataKeys.includes(t.dataKey));
    if (r != null)
      return r.position;
  }
};
function RM(e, t) {
  return e && typeof e == "object" && "zIndex" in e && typeof e.zIndex == "number" && pe(e.zIndex) ? e.zIndex : t;
}
var $M = (e) => {
  var {
    chartData: t
  } = e, r = $e(), n = dt();
  return Oe(() => n ? () => {
  } : (r(wg(t)), () => {
    r(wg(void 0));
  }), [t, r, n]), null;
}, uy = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
}, N1 = gt({
  name: "brush",
  initialState: uy,
  reducers: {
    setBrushSettings(e, t) {
      return t.payload == null ? uy : t.payload;
    }
  }
}), {
  setBrushSettings: l$
} = N1.actions, zM = N1.reducer, LM = (e, t) => {
  var {
    x: r,
    y: n
  } = e, {
    x: i,
    y: o
  } = t;
  return {
    x: Math.min(r, i),
    y: Math.min(n, o),
    width: Math.abs(i - r),
    height: Math.abs(o - n)
  };
}, BM = (e) => {
  var {
    x1: t,
    y1: r,
    x2: n,
    y2: i
  } = e;
  return LM({
    x: t,
    y: r
  }, {
    x: n,
    y: i
  });
};
function WM(e) {
  return (e % 180 + 180) % 180;
}
var FM = function(t) {
  var {
    width: r,
    height: n
  } = t, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, o = WM(i), a = o * Math.PI / 180, l = Math.atan(n / r), s = a > l && a < Math.PI - l ? n / Math.sin(a) : r / Math.cos(a);
  return Math.abs(s);
}, VM = {
  dots: [],
  areas: [],
  lines: []
}, R1 = gt({
  name: "referenceElements",
  initialState: VM,
  reducers: {
    addDot: (e, t) => {
      e.dots.push(t.payload);
    },
    removeDot: (e, t) => {
      var r = Kt(e).dots.findIndex((n) => n === t.payload);
      r !== -1 && e.dots.splice(r, 1);
    },
    addArea: (e, t) => {
      e.areas.push(t.payload);
    },
    removeArea: (e, t) => {
      var r = Kt(e).areas.findIndex((n) => n === t.payload);
      r !== -1 && e.areas.splice(r, 1);
    },
    addLine: (e, t) => {
      e.lines.push(t.payload);
    },
    removeLine: (e, t) => {
      var r = Kt(e).lines.findIndex((n) => n === t.payload);
      r !== -1 && e.lines.splice(r, 1);
    }
  }
}), {
  addDot: s$,
  removeDot: c$,
  addArea: u$,
  removeArea: d$,
  addLine: KM,
  removeLine: HM
} = R1.actions, qM = R1.reducer, $1 = /* @__PURE__ */ At(void 0), UM = (e) => {
  var {
    children: t
  } = e, [r] = W("".concat(Mi("recharts"), "-clip")), n = Wd();
  if (n == null)
    return null;
  var {
    x: i,
    y: o,
    width: a,
    height: l
  } = n;
  return /* @__PURE__ */ P.createElement($1.Provider, {
    value: r
  }, /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
    id: r
  }, /* @__PURE__ */ P.createElement("rect", {
    x: i,
    y: o,
    height: l,
    width: a
  }))), t);
}, YM = () => zt($1);
class GM {
  constructor(t) {
    var {
      x: r,
      y: n
    } = t;
    this.xAxisScale = r, this.yAxisScale = n;
  }
  map(t, r) {
    var n, i, {
      position: o
    } = r;
    return {
      x: (n = this.xAxisScale.map(t.x, {
        position: o
      })) !== null && n !== void 0 ? n : 0,
      y: (i = this.yAxisScale.map(t.y, {
        position: o
      })) !== null && i !== void 0 ? i : 0
    };
  }
  mapWithFallback(t, r) {
    var n, i, {
      position: o,
      fallback: a
    } = r, l, s;
    return a === "rangeMin" ? l = this.yAxisScale.rangeMin() : a === "rangeMax" ? l = this.yAxisScale.rangeMax() : l = 0, a === "rangeMin" ? s = this.xAxisScale.rangeMin() : a === "rangeMax" ? s = this.xAxisScale.rangeMax() : s = 0, {
      x: (n = this.xAxisScale.map(t.x, {
        position: o
      })) !== null && n !== void 0 ? n : s,
      y: (i = this.yAxisScale.map(t.y, {
        position: o
      })) !== null && i !== void 0 ? i : l
    };
  }
  isInRange(t) {
    var {
      x: r,
      y: n
    } = t, i = r == null || this.xAxisScale.isInRange(r), o = n == null || this.yAxisScale.isInRange(n);
    return i && o;
  }
}
function dy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? dy(Object(r), !0).forEach(function(n) {
      XM(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XM(e, t, r) {
  return (t = ZM(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZM(e) {
  var t = JM(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function JM(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fa() {
  return Fa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fa.apply(null, arguments);
}
var QM = (e, t) => {
  var r;
  if (/* @__PURE__ */ P.isValidElement(e))
    r = /* @__PURE__ */ P.cloneElement(e, t);
  else if (typeof e == "function")
    r = e(t);
  else {
    if (!pe(t.x1) || !pe(t.y1) || !pe(t.x2) || !pe(t.y2))
      return null;
    r = /* @__PURE__ */ P.createElement("line", Fa({}, t, {
      className: "recharts-reference-line-line"
    }));
  }
  return r;
}, eD = (e, t, r, n, i, o) => {
  var {
    x: a,
    width: l
  } = o, s = i.map(e, {
    position: r
  });
  if (!pe(s) || t === "discard" && !i.isInRange(s))
    return null;
  var c = [{
    x: a + l,
    y: s
  }, {
    x: a,
    y: s
  }];
  return n === "left" ? c.reverse() : c;
}, tD = (e, t, r, n, i, o) => {
  var {
    y: a,
    height: l
  } = o, s = i.map(e, {
    position: r
  });
  if (!pe(s) || t === "discard" && !i.isInRange(s))
    return null;
  var c = [{
    x: s,
    y: a + l
  }, {
    x: s,
    y: a
  }];
  return n === "top" ? c.reverse() : c;
}, rD = (e, t, r, n) => {
  var i = [n.mapWithFallback(e[0], {
    position: r,
    fallback: "rangeMin"
  }), n.mapWithFallback(e[1], {
    position: r,
    fallback: "rangeMax"
  })];
  return t === "discard" && i.some((o) => !n.isInRange(o)) ? null : i;
}, nD = (e, t, r, n, i, o, a) => {
  var {
    x: l,
    y: s,
    segment: c,
    ifOverflow: u
  } = a, d = Ut(l), p = Ut(s);
  return p ? eD(s, u, n, o, t, r) : d ? tD(l, u, n, i, e, r) : c != null && c.length === 2 ? rD(c, u, n, new GM({
    x: e,
    y: t
  })) : null;
};
function iD(e) {
  var t = $e();
  return Oe(() => (t(KM(e)), () => {
    t(HM(e));
  })), null;
}
function oD(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    shape: n,
    className: i,
    ifOverflow: o
  } = e, a = dt(), l = YM(), s = oe((C) => vr(C, t)), c = oe((C) => gr(C, r)), u = oe((C) => Qn(C, "xAxis", t, a)), d = oe((C) => Qn(C, "yAxis", r, a)), p = to();
  if (!l || !p || s == null || c == null || u == null || d == null)
    return null;
  var h = nD(u, d, p, e.position, s.orientation, c.orientation, e);
  if (!h)
    return null;
  var g = h[0], v = h[1];
  if (g == null || v == null)
    return null;
  var {
    x: y,
    y: m
  } = g, {
    x: b,
    y: w
  } = v, x = o === "hidden" ? "url(#".concat(l, ")") : void 0, S = fy(fy({
    clipPath: x
  }, vt(e)), {}, {
    x1: y,
    y1: m,
    x2: b,
    y2: w
  }), O = BM({
    x1: y,
    y1: m,
    x2: b,
    y2: w
  });
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(ct, {
    className: Pe("recharts-reference-line", i)
  }, QM(n, S), /* @__PURE__ */ P.createElement(h1, Fa({}, O, {
    lowerWidth: O.width,
    upperWidth: O.width
  }), /* @__PURE__ */ P.createElement(g1, {
    label: e.label
  }), e.children)));
}
var aD = {
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  label: !1,
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle",
  zIndex: Ze.line
};
function Fd(e) {
  var t = jt(e, aD);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(iD, {
    yAxisId: t.yAxisId,
    xAxisId: t.xAxisId,
    ifOverflow: t.ifOverflow,
    x: t.x,
    y: t.y,
    segment: t.segment
  }), /* @__PURE__ */ P.createElement(oD, t));
}
Fd.displayName = "ReferenceLine";
function z1(e, t) {
  if (t < 1)
    return [];
  if (t === 1)
    return e;
  for (var r = [], n = 0; n < e.length; n += t) {
    var i = e[n];
    i !== void 0 && r.push(i);
  }
  return r;
}
function lD(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return FM(n, r);
}
function sD(e, t, r) {
  var n = r === "width", {
    x: i,
    y: o,
    width: a,
    height: l
  } = e;
  return t === 1 ? {
    start: n ? i : o,
    end: n ? i + a : o + l
  } : {
    start: n ? i + a : o + l,
    end: n ? i : o
  };
}
function Ui(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var o = r();
  return e * (t - e * o / 2 - n) >= 0 && e * (t + e * o / 2 - i) <= 0;
}
function cD(e, t) {
  return z1(e, t + 1);
}
function uD(e, t, r, n, i) {
  for (var o = (n || []).slice(), {
    start: a,
    end: l
  } = t, s = 0, c = 1, u = a, d = function() {
    var g = n?.[s];
    if (g === void 0)
      return {
        v: z1(n, c)
      };
    var v = s, y, m = () => (y === void 0 && (y = r(g, v)), y), b = g.coordinate, w = s === 0 || Ui(e, b, m, u, l);
    w || (s = 0, u = a, c += 1), w && (u = b + e * (m() / 2 + i), s += c);
  }, p; c <= o.length; )
    if (p = d(), p) return p.v;
  return [];
}
function dD(e, t, r, n, i) {
  var o = (n || []).slice(), a = o.length;
  if (a === 0)
    return [];
  for (var {
    start: l,
    end: s
  } = t, c = 1; c <= a; c++) {
    for (var u = (a - 1) % c, d = l, p = !0, h = function() {
      var x = n[v];
      if (x == null)
        return 0;
      var S = v, O, C = () => (O === void 0 && (O = r(x, S)), O), E = x.coordinate, M = v === u || Ui(e, E, C, d, s);
      if (!M)
        return p = !1, 1;
      M && (d = E + e * (C() / 2 + i));
    }, g, v = u; v < a && (g = h(), !(g !== 0 && g === 1)); v += c)
      ;
    if (p) {
      for (var y = [], m = u; m < a; m += c) {
        var b = n[m];
        b != null && y.push(b);
      }
      return y;
    }
  }
  return [];
}
function py(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? py(Object(r), !0).forEach(function(n) {
      fD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : py(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fD(e, t, r) {
  return (t = pD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pD(e) {
  var t = hD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function hD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vD(e, t, r, n, i) {
  for (var o = (n || []).slice(), a = o.length, {
    start: l
  } = t, {
    end: s
  } = t, c = function(p) {
    var h = o[p];
    if (h == null)
      return 1;
    var g = h, v, y = () => (v === void 0 && (v = r(h, p)), v);
    if (p === a - 1) {
      var m = e * (g.coordinate + e * y() / 2 - s);
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: m > 0 ? g.coordinate - m * e : g.coordinate
      });
    } else
      o[p] = g = pt(pt({}, g), {}, {
        tickCoord: g.coordinate
      });
    if (g.tickCoord != null) {
      var b = Ui(e, g.tickCoord, y, l, s);
      b && (s = g.tickCoord - e * (y() / 2 + i), o[p] = pt(pt({}, g), {}, {
        isShow: !0
      }));
    }
  }, u = a - 1; u >= 0; u--)
    c(u);
  return o;
}
function gD(e, t, r, n, i, o) {
  var a = (n || []).slice(), l = a.length, {
    start: s,
    end: c
  } = t;
  if (o) {
    var u = n[l - 1];
    if (u != null) {
      var d = r(u, l - 1), p = e * (u.coordinate + e * d / 2 - c);
      if (a[l - 1] = u = pt(pt({}, u), {}, {
        tickCoord: p > 0 ? u.coordinate - p * e : u.coordinate
      }), u.tickCoord != null) {
        var h = Ui(e, u.tickCoord, () => d, s, c);
        h && (c = u.tickCoord - e * (d / 2 + i), a[l - 1] = pt(pt({}, u), {}, {
          isShow: !0
        }));
      }
    }
  }
  for (var g = o ? l - 1 : l, v = function(b) {
    var w = a[b];
    if (w == null)
      return 1;
    var x = w, S, O = () => (S === void 0 && (S = r(w, b)), S);
    if (b === 0) {
      var C = e * (x.coordinate - e * O() / 2 - s);
      a[b] = x = pt(pt({}, x), {}, {
        tickCoord: C < 0 ? x.coordinate - C * e : x.coordinate
      });
    } else
      a[b] = x = pt(pt({}, x), {}, {
        tickCoord: x.coordinate
      });
    if (x.tickCoord != null) {
      var E = Ui(e, x.tickCoord, O, s, c);
      E && (s = x.tickCoord + e * (O() / 2 + i), a[b] = pt(pt({}, x), {}, {
        isShow: !0
      }));
    }
  }, y = 0; y < g; y++)
    v(y);
  return a;
}
function Vd(e, t, r) {
  var {
    tick: n,
    ticks: i,
    viewBox: o,
    minTickGap: a,
    orientation: l,
    interval: s,
    tickFormatter: c,
    unit: u,
    angle: d
  } = e;
  if (!i || !i.length || !n)
    return [];
  if (te(s) || oo.isSsr) {
    var p;
    return (p = cD(i, te(s) ? s : 0)) !== null && p !== void 0 ? p : [];
  }
  var h = [], g = l === "top" || l === "bottom" ? "width" : "height", v = u && g === "width" ? Ti(u, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = (S, O) => {
    var C = typeof c == "function" ? c(S.value, O) : S.value;
    return g === "width" ? lD(Ti(C, {
      fontSize: t,
      letterSpacing: r
    }), v, d) : Ti(C, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, m = i[0], b = i[1], w = i.length >= 2 && m != null && b != null ? Ct(b.coordinate - m.coordinate) : 1, x = sD(o, w, g);
  return s === "equidistantPreserveStart" ? uD(w, x, y, i, a) : s === "equidistantPreserveEnd" ? dD(w, x, y, i, a) : (s === "preserveStart" || s === "preserveStartEnd" ? h = gD(w, x, y, i, a, s === "preserveStartEnd") : h = vD(w, x, y, i, a), h.filter((S) => S.isShow));
}
var yD = (e) => {
  var {
    ticks: t,
    label: r,
    labelGapWithTick: n = 5,
    // Default gap between label and tick
    tickSize: i = 0,
    tickMargin: o = 0
  } = e, a = 0;
  if (t) {
    Array.from(t).forEach((u) => {
      if (u) {
        var d = u.getBoundingClientRect();
        d.width > a && (a = d.width);
      }
    });
    var l = r ? r.getBoundingClientRect().width : 0, s = i + o, c = a + s + l + (r ? n : 0);
    return Math.round(c);
  }
  return 0;
}, mD = {
  xAxis: {},
  yAxis: {}
}, L1 = gt({
  name: "renderedTicks",
  initialState: mD,
  reducers: {
    setRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n,
        ticks: i
      } = t.payload;
      e[r][n] = i;
    },
    removeRenderedTicks: (e, t) => {
      var {
        axisType: r,
        axisId: n
      } = t.payload;
      delete e[r][n];
    }
  }
}), {
  setRenderedTicks: xD,
  removeRenderedTicks: bD
} = L1.actions, wD = L1.reducer, jD = ["axisLine", "width", "height", "className", "hide", "ticks", "axisType", "axisId"];
function SD(e, t) {
  if (e == null) return {};
  var r, n, i = OD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function OD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function jn() {
  return jn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, jn.apply(null, arguments);
}
function hy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function We(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hy(Object(r), !0).forEach(function(n) {
      PD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function PD(e, t, r) {
  return (t = CD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function CD(e) {
  var t = _D(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function _D(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Cr = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd",
  zIndex: Ze.axis
};
function ED(e) {
  var {
    x: t,
    y: r,
    width: n,
    height: i,
    orientation: o,
    mirror: a,
    axisLine: l,
    otherSvgProps: s
  } = e;
  if (!l)
    return null;
  var c = We(We(We({}, s), qt(l)), {}, {
    fill: "none"
  });
  if (o === "top" || o === "bottom") {
    var u = +(o === "top" && !a || o === "bottom" && a);
    c = We(We({}, c), {}, {
      x1: t,
      y1: r + u * i,
      x2: t + n,
      y2: r + u * i
    });
  } else {
    var d = +(o === "left" && !a || o === "right" && a);
    c = We(We({}, c), {}, {
      x1: t + d * n,
      y1: r,
      x2: t + d * n,
      y2: r + i
    });
  }
  return /* @__PURE__ */ P.createElement("line", jn({}, c, {
    className: Pe("recharts-cartesian-axis-line", Hn(l, "className"))
  }));
}
function kD(e, t, r, n, i, o, a, l, s) {
  var c, u, d, p, h, g, v = l ? -1 : 1, y = e.tickSize || a, m = te(e.tickCoord) ? e.tickCoord : e.coordinate;
  switch (o) {
    case "top":
      c = u = e.coordinate, p = r + +!l * i, d = p - v * y, g = d - v * s, h = m;
      break;
    case "left":
      d = p = e.coordinate, u = t + +!l * n, c = u - v * y, h = c - v * s, g = m;
      break;
    case "right":
      d = p = e.coordinate, u = t + +l * n, c = u + v * y, h = c + v * s, g = m;
      break;
    default:
      c = u = e.coordinate, p = r + +l * i, d = p + v * y, g = d + v * s, h = m;
      break;
  }
  return {
    line: {
      x1: c,
      y1: d,
      x2: u,
      y2: p
    },
    tick: {
      x: h,
      y: g
    }
  };
}
function AD(e, t) {
  switch (e) {
    case "left":
      return t ? "start" : "end";
    case "right":
      return t ? "end" : "start";
    default:
      return "middle";
  }
}
function TD(e, t) {
  switch (e) {
    case "left":
    case "right":
      return "middle";
    case "top":
      return t ? "start" : "end";
    default:
      return t ? "end" : "start";
  }
}
function ID(e) {
  var {
    option: t,
    tickProps: r,
    value: n
  } = e, i, o = Pe(r.className, "recharts-cartesian-axis-tick-value");
  if (/* @__PURE__ */ P.isValidElement(t))
    i = /* @__PURE__ */ P.cloneElement(t, We(We({}, r), {}, {
      className: o
    }));
  else if (typeof t == "function")
    i = t(We(We({}, r), {}, {
      className: o
    }));
  else {
    var a = "recharts-cartesian-axis-tick-value";
    typeof t != "boolean" && (a = Pe(a, xI(t))), i = /* @__PURE__ */ P.createElement(Ld, jn({}, r, {
      className: a
    }), n);
  }
  return i;
}
function MD(e) {
  var {
    ticks: t,
    axisType: r,
    axisId: n
  } = e, i = $e();
  return Oe(() => {
    if (n == null || r == null)
      return On;
    var o = t.map((a) => ({
      value: a.value,
      coordinate: a.coordinate,
      offset: a.offset,
      index: a.index
    }));
    return i(xD({
      ticks: o,
      axisId: n,
      axisType: r
    })), () => {
      i(bD({
        axisId: n,
        axisType: r
      }));
    };
  }, [i, t, n, r]), null;
}
var DD = /* @__PURE__ */ ut((e, t) => {
  var {
    ticks: r = [],
    tick: n,
    tickLine: i,
    stroke: o,
    tickFormatter: a,
    unit: l,
    padding: s,
    tickTextProps: c,
    orientation: u,
    mirror: d,
    x: p,
    y: h,
    width: g,
    height: v,
    tickSize: y,
    tickMargin: m,
    fontSize: b,
    letterSpacing: w,
    getTicksConfig: x,
    events: S,
    axisType: O,
    axisId: C
  } = e, E = Vd(We(We({}, x), {}, {
    ticks: r
  }), b, w), M = qt(x), D = Yi(n), N = c1(M.textAnchor) ? M.textAnchor : AD(u, d), _ = TD(u, d), L = {};
  typeof i == "object" && (L = i);
  var F = We(We({}, M), {}, {
    fill: "none"
  }, L), Y = E.map((R) => We({
    entry: R
  }, kD(R, p, h, g, v, u, y, d, m))), Q = Y.map((R) => {
    var {
      entry: re,
      line: ee
    } = R;
    return /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-cartesian-axis-tick",
      key: "tick-".concat(re.value, "-").concat(re.coordinate, "-").concat(re.tickCoord)
    }, i && /* @__PURE__ */ P.createElement("line", jn({}, F, ee, {
      className: Pe("recharts-cartesian-axis-tick-line", Hn(i, "className"))
    })));
  }), ie = Y.map((R, re) => {
    var ee, $, {
      entry: B,
      tick: z
    } = R, H = We(We(We(We({
      verticalAnchor: _
    }, M), {}, {
      textAnchor: N,
      stroke: "none",
      fill: o
    }, z), {}, {
      index: re,
      payload: B,
      visibleTicksCount: E.length,
      tickFormatter: a,
      padding: s
    }, c), {}, {
      angle: (ee = ($ = c?.angle) !== null && $ !== void 0 ? $ : M.angle) !== null && ee !== void 0 ? ee : 0
    }), le = We(We({}, H), D);
    return /* @__PURE__ */ P.createElement(ct, jn({
      className: "recharts-cartesian-axis-tick-label",
      key: "tick-label-".concat(B.value, "-").concat(B.coordinate, "-").concat(B.tickCoord)
    }, Pu(S, B, re)), n && /* @__PURE__ */ P.createElement(ID, {
      option: n,
      tickProps: le,
      value: "".concat(typeof a == "function" ? a(B.value, re) : B.value).concat(l || "")
    }));
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-ticks recharts-".concat(O, "-ticks")
  }, /* @__PURE__ */ P.createElement(MD, {
    ticks: E,
    axisId: C,
    axisType: O
  }), ie.length > 0 && /* @__PURE__ */ P.createElement(Lt, {
    zIndex: Ze.label
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-labels recharts-".concat(O, "-tick-labels"),
    ref: t
  }, ie)), Q.length > 0 && /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-axis-tick-lines recharts-".concat(O, "-tick-lines")
  }, Q));
}), ND = /* @__PURE__ */ ut((e, t) => {
  var {
    axisLine: r,
    width: n,
    height: i,
    className: o,
    hide: a,
    ticks: l,
    axisType: s,
    axisId: c
  } = e, u = SD(e, jD), [d, p] = W(""), [h, g] = W(""), v = ve(null);
  My(t, () => ({
    getCalculatedWidth: () => {
      var m;
      return yD({
        ticks: v.current,
        label: (m = e.labelRef) === null || m === void 0 ? void 0 : m.current,
        labelGapWithTick: 5,
        tickSize: e.tickSize,
        tickMargin: e.tickMargin
      });
    }
  }));
  var y = Ee((m) => {
    if (m) {
      var b = m.getElementsByClassName("recharts-cartesian-axis-tick-value");
      v.current = b;
      var w = b[0];
      if (w) {
        var x = window.getComputedStyle(w), S = x.fontSize, O = x.letterSpacing;
        (S !== d || O !== h) && (p(S), g(O));
      }
    }
  }, [d, h]);
  return a || n != null && n <= 0 || i != null && i <= 0 ? null : /* @__PURE__ */ P.createElement(Lt, {
    zIndex: e.zIndex
  }, /* @__PURE__ */ P.createElement(ct, {
    className: Pe("recharts-cartesian-axis", o)
  }, /* @__PURE__ */ P.createElement(ED, {
    x: e.x,
    y: e.y,
    width: n,
    height: i,
    orientation: e.orientation,
    mirror: e.mirror,
    axisLine: r,
    otherSvgProps: qt(e)
  }), /* @__PURE__ */ P.createElement(DD, {
    ref: y,
    axisType: s,
    events: u,
    fontSize: d,
    getTicksConfig: e,
    height: e.height,
    letterSpacing: h,
    mirror: e.mirror,
    orientation: e.orientation,
    padding: e.padding,
    stroke: e.stroke,
    tick: e.tick,
    tickFormatter: e.tickFormatter,
    tickLine: e.tickLine,
    tickMargin: e.tickMargin,
    tickSize: e.tickSize,
    tickTextProps: e.tickTextProps,
    ticks: l,
    unit: e.unit,
    width: e.width,
    x: e.x,
    y: e.y,
    axisId: c
  }), /* @__PURE__ */ P.createElement(h1, {
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    lowerWidth: e.width,
    upperWidth: e.width
  }, /* @__PURE__ */ P.createElement(g1, {
    label: e.label,
    labelRef: e.labelRef
  }), e.children)));
}), Kd = /* @__PURE__ */ P.forwardRef((e, t) => {
  var r = jt(e, Cr);
  return /* @__PURE__ */ P.createElement(ND, jn({}, r, {
    ref: t
  }));
});
Kd.displayName = "CartesianAxis";
var RD = ["x1", "y1", "x2", "y2", "key"], $D = ["offset"], zD = ["xAxisId", "yAxisId"], LD = ["xAxisId", "yAxisId"];
function vy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vy(Object(r), !0).forEach(function(n) {
      BD(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BD(e, t, r) {
  return (t = WD(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WD(e) {
  var t = FD(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function FD(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sn() {
  return sn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sn.apply(null, arguments);
}
function Va(e, t) {
  if (e == null) return {};
  var r, n, i = VD(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function VD(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var KD = (e) => {
  var {
    fill: t
  } = e;
  if (!t || t === "none")
    return null;
  var {
    fillOpacity: r,
    x: n,
    y: i,
    width: o,
    height: a,
    ry: l
  } = e;
  return /* @__PURE__ */ P.createElement("rect", {
    x: n,
    y: i,
    ry: l,
    width: o,
    height: a,
    stroke: "none",
    fill: t,
    fillOpacity: r,
    className: "recharts-cartesian-grid-bg"
  });
};
function B1(e) {
  var {
    option: t,
    lineItemProps: r
  } = e, n;
  if (/* @__PURE__ */ P.isValidElement(t))
    n = /* @__PURE__ */ P.cloneElement(t, r);
  else if (typeof t == "function")
    n = t(r);
  else {
    var i, {
      x1: o,
      y1: a,
      x2: l,
      y2: s,
      key: c
    } = r, u = Va(r, RD), d = (i = qt(u)) !== null && i !== void 0 ? i : {}, {
      offset: p
    } = d, h = Va(d, $D);
    n = /* @__PURE__ */ P.createElement("line", sn({}, h, {
      x1: o,
      y1: a,
      x2: l,
      y2: s,
      fill: "none",
      key: c
    }));
  }
  return n;
}
function HD(e) {
  var {
    x: t,
    width: r,
    horizontal: n = !0,
    horizontalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: o,
    yAxisId: a
  } = e, l = Va(e, zD), s = i.map((c, u) => {
    var d = ht(ht({}, l), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(B1, {
      key: "line-".concat(u),
      option: n,
      lineItemProps: d
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function qD(e) {
  var {
    y: t,
    height: r,
    vertical: n = !0,
    verticalPoints: i
  } = e;
  if (!n || !i || !i.length)
    return null;
  var {
    xAxisId: o,
    yAxisId: a
  } = e, l = Va(e, LD), s = i.map((c, u) => {
    var d = ht(ht({}, l), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(u),
      index: u
    });
    return /* @__PURE__ */ P.createElement(B1, {
      option: n,
      lineItemProps: d,
      key: "line-".concat(u)
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function UD(e) {
  var {
    horizontalFill: t,
    fillOpacity: r,
    x: n,
    y: i,
    width: o,
    height: a,
    horizontalPoints: l,
    horizontal: s = !0
  } = e;
  if (!s || !t || !t.length || l == null)
    return null;
  var c = l.map((d) => Math.round(d + i - i)).sort((d, p) => d - p);
  i !== c[0] && c.unshift(0);
  var u = c.map((d, p) => {
    var h = c[p + 1], g = h == null, v = g ? i + a - d : h - d;
    if (v <= 0)
      return null;
    var y = p % t.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      y: d,
      x: n,
      height: v,
      width: o,
      stroke: "none",
      fill: t[y],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, u);
}
function YD(e) {
  var {
    vertical: t = !0,
    verticalFill: r,
    fillOpacity: n,
    x: i,
    y: o,
    width: a,
    height: l,
    verticalPoints: s
  } = e;
  if (!t || !r || !r.length)
    return null;
  var c = s.map((d) => Math.round(d + i - i)).sort((d, p) => d - p);
  i !== c[0] && c.unshift(0);
  var u = c.map((d, p) => {
    var h = c[p + 1], g = h == null, v = g ? i + a - d : h - d;
    if (v <= 0)
      return null;
    var y = p % r.length;
    return /* @__PURE__ */ P.createElement("rect", {
      key: "react-".concat(p),
      x: d,
      y: o,
      width: v,
      height: l,
      stroke: "none",
      fill: r[y],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, u);
}
var GD = (e, t) => {
  var {
    xAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return s0(Vd(ht(ht(ht({}, Cr), r), {}, {
    ticks: c0(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.left, o.left + o.width, t);
}, XD = (e, t) => {
  var {
    yAxis: r,
    width: n,
    height: i,
    offset: o
  } = e;
  return s0(Vd(ht(ht(ht({}, Cr), r), {}, {
    ticks: c0(r),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: i
    }
  })), o.top, o.top + o.height, t);
}, ZD = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: [],
  xAxisId: 0,
  yAxisId: 0,
  syncWithTicks: !1,
  zIndex: Ze.grid
};
function Hd(e) {
  var t = y0(), r = m0(), n = g0(), i = ht(ht({}, jt(e, ZD)), {}, {
    x: te(e.x) ? e.x : n.left,
    y: te(e.y) ? e.y : n.top,
    width: te(e.width) ? e.width : n.width,
    height: te(e.height) ? e.height : n.height
  }), {
    xAxisId: o,
    yAxisId: a,
    x: l,
    y: s,
    width: c,
    height: u,
    syncWithTicks: d,
    horizontalValues: p,
    verticalValues: h
  } = i, g = dt(), v = oe((M) => sg(M, "xAxis", o, g)), y = oe((M) => sg(M, "yAxis", a, g));
  if (!dr(c) || !dr(u) || !te(l) || !te(s))
    return null;
  var m = i.verticalCoordinatesGenerator || GD, b = i.horizontalCoordinatesGenerator || XD, {
    horizontalPoints: w,
    verticalPoints: x
  } = i;
  if ((!w || !w.length) && typeof b == "function") {
    var S = p && p.length, O = b({
      yAxis: y ? ht(ht({}, y), {}, {
        ticks: S ? p : y.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? u,
      offset: n
    }, S ? !0 : d);
    fa(Array.isArray(O), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof O, "]")), Array.isArray(O) && (w = O);
  }
  if ((!x || !x.length) && typeof m == "function") {
    var C = h && h.length, E = m({
      xAxis: v ? ht(ht({}, v), {}, {
        ticks: C ? h : v.ticks
      }) : void 0,
      width: t ?? c,
      height: r ?? u,
      offset: n
    }, C ? !0 : d);
    fa(Array.isArray(E), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof E, "]")), Array.isArray(E) && (x = E);
  }
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: i.zIndex
  }, /* @__PURE__ */ P.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ P.createElement(KD, {
    fill: i.fill,
    fillOpacity: i.fillOpacity,
    x: i.x,
    y: i.y,
    width: i.width,
    height: i.height,
    ry: i.ry
  }), /* @__PURE__ */ P.createElement(UD, sn({}, i, {
    horizontalPoints: w
  })), /* @__PURE__ */ P.createElement(YD, sn({}, i, {
    verticalPoints: x
  })), /* @__PURE__ */ P.createElement(HD, sn({}, i, {
    offset: n,
    horizontalPoints: w,
    xAxis: v,
    yAxis: y
  })), /* @__PURE__ */ P.createElement(qD, sn({}, i, {
    offset: n,
    verticalPoints: x,
    xAxis: v,
    yAxis: y
  }))));
}
Hd.displayName = "CartesianGrid";
var JD = {}, W1 = gt({
  name: "errorBars",
  initialState: JD,
  reducers: {
    addErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] || (e[r] = []), e[r].push(n);
    },
    replaceErrorBar: (e, t) => {
      var {
        itemId: r,
        prev: n,
        next: i
      } = t.payload;
      e[r] && (e[r] = e[r].map((o) => o.dataKey === n.dataKey && o.direction === n.direction ? i : o));
    },
    removeErrorBar: (e, t) => {
      var {
        itemId: r,
        errorBar: n
      } = t.payload;
      e[r] && (e[r] = e[r].filter((i) => i.dataKey !== n.dataKey || i.direction !== n.direction));
    }
  }
}), {
  addErrorBar: f$,
  replaceErrorBar: p$,
  removeErrorBar: h$
} = W1.actions, QD = W1.reducer, e5 = ["children"];
function t5(e, t) {
  if (e == null) return {};
  var r, n, i = r5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function r5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var n5 = {
  data: [],
  xAxisId: "xAxis-0",
  yAxisId: "yAxis-0",
  dataPointFormatter: () => ({
    x: 0,
    y: 0,
    value: 0
  }),
  errorBarOffset: 0
}, i5 = /* @__PURE__ */ At(n5);
function o5(e) {
  var {
    children: t
  } = e, r = t5(e, e5);
  return /* @__PURE__ */ P.createElement(i5.Provider, {
    value: r
  }, t);
}
function qd(e, t) {
  var r, n, i = oe((c) => vr(c, e)), o = oe((c) => gr(c, t)), a = (r = i?.allowDataOverflow) !== null && r !== void 0 ? r : Ye.allowDataOverflow, l = (n = o?.allowDataOverflow) !== null && n !== void 0 ? n : Ge.allowDataOverflow, s = a || l;
  return {
    needClip: s,
    needClipX: a,
    needClipY: l
  };
}
function F1(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    clipPathId: n
  } = e, i = Wd(), {
    needClipX: o,
    needClipY: a,
    needClip: l
  } = qd(t, r);
  if (!l || !i)
    return null;
  var {
    x: s,
    y: c,
    width: u,
    height: d
  } = i;
  return /* @__PURE__ */ P.createElement("clipPath", {
    id: "clipPath-".concat(n)
  }, /* @__PURE__ */ P.createElement("rect", {
    x: o ? s : s - u / 2,
    y: a ? c : c - d / 2,
    width: o ? u : u * 2,
    height: a ? d : d * 2
  }));
}
function a5(e) {
  var t = Yi(e), r = 3, n = 2;
  if (t != null) {
    var {
      r: i,
      strokeWidth: o
    } = t, a = Number(i), l = Number(o);
    return (Number.isNaN(a) || a < 0) && (a = r), (Number.isNaN(l) || l < 0) && (l = n), {
      r: a,
      strokeWidth: l
    };
  }
  return {
    r,
    strokeWidth: n
  };
}
function yr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.xAxisId) !== null && r !== void 0 ? r : M1;
}
function mr(e, t) {
  var r, n;
  return (r = (n = e.graphicalItems.cartesianItems.find((i) => i.id === t)) === null || n === void 0 ? void 0 : n.yAxisId) !== null && r !== void 0 ? r : M1;
}
var V1 = (e, t, r) => qr(e, "xAxis", yr(e, t), r), K1 = (e, t, r) => Hr(e, "xAxis", yr(e, t), r), H1 = (e, t, r) => qr(e, "yAxis", mr(e, t), r), q1 = (e, t, r) => Hr(e, "yAxis", mr(e, t), r), l5 = I([Se, V1, H1, K1, q1], (e, t, r, n, i) => hr(e, "xAxis") ? Un(t, n, !1) : Un(r, i, !1)), s5 = (e, t) => t, U1 = I([Il, s5], (e, t) => e.filter((r) => r.type === "area").find((r) => r.id === t)), Y1 = (e) => {
  var t = Se(e), r = hr(t, "xAxis");
  return r ? "yAxis" : "xAxis";
}, c5 = (e, t) => {
  var r = Y1(e);
  return r === "yAxis" ? mr(e, t) : yr(e, t);
}, u5 = (e, t, r) => Da(e, Y1(e), c5(e, t), r), d5 = I([U1, u5], (e, t) => {
  var r;
  if (!(e == null || t == null)) {
    var {
      stackId: n
    } = e, i = jl(e);
    if (!(n == null || i == null)) {
      var o = (r = t[n]) === null || r === void 0 ? void 0 : r.stackedData, a = o?.find((l) => l.key === i);
      if (a != null)
        return a.map((l) => [l[0], l[1]]);
    }
  }
}), f5 = I([Se, V1, H1, K1, q1, d5, z0, l5, U1, uE], (e, t, r, n, i, o, a, l, s, c) => {
  var {
    chartData: u,
    dataStartIndex: d,
    dataEndIndex: p
  } = a;
  if (!(s == null || e !== "horizontal" && e !== "vertical" || t == null || r == null || n == null || i == null || n.length === 0 || i.length === 0 || l == null)) {
    var {
      data: h
    } = s, g;
    if (h && h.length > 0 ? g = h : g = u?.slice(d, p + 1), g != null)
      return I5({
        layout: e,
        xAxis: t,
        yAxis: r,
        xAxisTicks: n,
        yAxisTicks: i,
        dataStartIndex: d,
        areaSettings: s,
        stackedData: o,
        displayedData: g,
        chartBaseValue: c,
        bandSize: l
      });
  }
}), p5 = ["id"], h5 = ["activeDot", "animationBegin", "animationDuration", "animationEasing", "connectNulls", "dot", "fill", "fillOpacity", "hide", "isAnimationActive", "legendType", "stroke", "xAxisId", "yAxisId"];
function pn() {
  return pn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pn.apply(null, arguments);
}
function G1(e, t) {
  if (e == null) return {};
  var r, n, i = v5(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function v5(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function gy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? gy(Object(r), !0).forEach(function(n) {
      g5(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function g5(e, t, r) {
  return (t = y5(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function y5(e) {
  var t = m5(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function m5(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ka(e, t) {
  return e && e !== "none" ? e : t;
}
var x5 = (e) => {
  var {
    dataKey: t,
    name: r,
    stroke: n,
    fill: i,
    legendType: o,
    hide: a
  } = e;
  return [{
    inactive: a,
    dataKey: t,
    type: o,
    color: Ka(n, i),
    value: al(r, t),
    payload: e
  }];
}, b5 = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    data: r,
    stroke: n,
    strokeWidth: i,
    fill: o,
    name: a,
    hide: l,
    unit: s,
    tooltipType: c,
    id: u
  } = e, d = {
    dataDefinedOnItem: r,
    getPosition: On,
    settings: {
      stroke: n,
      strokeWidth: i,
      fill: o,
      dataKey: t,
      nameKey: void 0,
      name: al(a, t),
      hide: l,
      type: c,
      color: Ka(n, o),
      unit: s,
      graphicalItemId: u
    }
  };
  return /* @__PURE__ */ P.createElement(E1, {
    tooltipEntrySettings: d
  });
});
function w5(e) {
  var {
    clipPathId: t,
    points: r,
    props: n
  } = e, {
    needClip: i,
    dot: o,
    dataKey: a
  } = n, l = qt(n);
  return /* @__PURE__ */ P.createElement(sM, {
    points: r,
    dot: o,
    className: "recharts-area-dots",
    dotClassName: "recharts-area-dot",
    dataKey: a,
    baseProps: l,
    needClip: i,
    clipPathId: t
  });
}
function j5(e) {
  var {
    showLabels: t,
    children: r,
    points: n
  } = e, i = n.map((o) => {
    var a, l, s = {
      x: (a = o.x) !== null && a !== void 0 ? a : 0,
      y: (l = o.y) !== null && l !== void 0 ? l : 0,
      width: 0,
      lowerWidth: 0,
      upperWidth: 0,
      height: 0
    };
    return Wn(Wn({}, s), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: void 0,
      viewBox: s,
      fill: void 0
    });
  });
  return /* @__PURE__ */ P.createElement(m1, {
    value: t ? i : void 0
  }, r);
}
function yy(e) {
  var {
    points: t,
    baseLine: r,
    needClip: n,
    clipPathId: i,
    props: o
  } = e, {
    layout: a,
    type: l,
    stroke: s,
    connectNulls: c,
    isRange: u
  } = o, {
    id: d
  } = o, p = G1(o, p5), h = qt(p), g = vt(p);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, t?.length > 1 && /* @__PURE__ */ P.createElement(ct, {
    clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0
  }, /* @__PURE__ */ P.createElement(ki, pn({}, g, {
    id: d,
    points: t,
    connectNulls: c,
    type: l,
    baseLine: r,
    layout: a,
    stroke: "none",
    className: "recharts-area-area"
  })), s !== "none" && /* @__PURE__ */ P.createElement(ki, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: c,
    fill: "none",
    points: t
  })), s !== "none" && u && Array.isArray(r) && /* @__PURE__ */ P.createElement(ki, pn({}, h, {
    className: "recharts-area-curve",
    layout: a,
    type: l,
    connectNulls: c,
    fill: "none",
    points: r
  }))), /* @__PURE__ */ P.createElement(w5, {
    points: t,
    props: p,
    clipPathId: i
  }));
}
function S5(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.y, s = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.y;
  if (!pe(l) || !pe(s))
    return null;
  var c = n * Math.abs(l - s), u = Math.max(...o.map((d) => d.x || 0));
  return te(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((d) => d.x || 0), u)), te(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: 0,
    y: l < s ? l : l - c,
    width: u + (a ? parseInt("".concat(a), 10) : 1),
    height: Math.floor(c)
  }) : null;
}
function O5(e) {
  var t, r, {
    alpha: n,
    baseLine: i,
    points: o,
    strokeWidth: a
  } = e, l = (t = o[0]) === null || t === void 0 ? void 0 : t.x, s = (r = o[o.length - 1]) === null || r === void 0 ? void 0 : r.x;
  if (!pe(l) || !pe(s))
    return null;
  var c = n * Math.abs(l - s), u = Math.max(...o.map((d) => d.y || 0));
  return te(i) ? u = Math.max(i, u) : i && Array.isArray(i) && i.length && (u = Math.max(...i.map((d) => d.y || 0), u)), te(u) ? /* @__PURE__ */ P.createElement("rect", {
    x: l < s ? l : l - c,
    y: 0,
    width: c,
    height: Math.floor(u + (a ? parseInt("".concat(a), 10) : 1))
  }) : null;
}
function P5(e) {
  var {
    alpha: t,
    layout: r,
    points: n,
    baseLine: i,
    strokeWidth: o
  } = e;
  return r === "vertical" ? /* @__PURE__ */ P.createElement(S5, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  }) : /* @__PURE__ */ P.createElement(O5, {
    alpha: t,
    points: n,
    baseLine: i,
    strokeWidth: o
  });
}
function C5(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  } = e, {
    points: a,
    baseLine: l,
    isAnimationActive: s,
    animationBegin: c,
    animationDuration: u,
    animationEasing: d,
    onAnimationStart: p,
    onAnimationEnd: h
  } = n, g = tr(() => ({
    points: a,
    baseLine: l
  }), [a, l]), v = vl(g, "recharts-area-"), y = $u(), [m, b] = W(!1), w = !m, x = Ee(() => {
    typeof h == "function" && h(), b(!1);
  }, [h]), S = Ee(() => {
    typeof p == "function" && p(), b(!0);
  }, [p]);
  if (y == null)
    return null;
  var O = i.current, C = o.current;
  return /* @__PURE__ */ P.createElement(j5, {
    showLabels: w,
    points: a
  }, n.children, /* @__PURE__ */ P.createElement(hl, {
    animationId: v,
    begin: c,
    duration: u,
    isActive: s,
    easing: d,
    onAnimationEnd: x,
    onAnimationStart: S,
    key: v
  }, (E) => {
    if (O) {
      var M = O.length / a.length, D = (
        /*
         * Here it is important that at the very end of the animation, on the last frame,
         * we render the original points without any interpolation.
         * This is needed because the code above is checking for reference equality to decide if the animation should run
         * and if we create a new array instance (even if the numbers were the same)
         * then we would break animations.
         */
        E === 1 ? a : a.map((_, L) => {
          var F = Math.floor(L * M);
          if (O[F]) {
            var Y = O[F];
            return Wn(Wn({}, _), {}, {
              x: ze(Y.x, _.x, E),
              y: ze(Y.y, _.y, E)
            });
          }
          return _;
        })
      ), N;
      return te(l) ? N = ze(C, l, E) : Le(l) || Jt(l) ? N = ze(C, 0, E) : N = l.map((_, L) => {
        var F = Math.floor(L * M);
        if (Array.isArray(C) && C[F]) {
          var Y = C[F];
          return Wn(Wn({}, _), {}, {
            x: ze(Y.x, _.x, E),
            y: ze(Y.y, _.y, E)
          });
        }
        return _;
      }), E > 0 && (i.current = D, o.current = N), /* @__PURE__ */ P.createElement(yy, {
        points: D,
        baseLine: N,
        needClip: t,
        clipPathId: r,
        props: n
      });
    }
    return E > 0 && (i.current = a, o.current = l), /* @__PURE__ */ P.createElement(ct, null, s && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement("clipPath", {
      id: "animationClipPath-".concat(r)
    }, /* @__PURE__ */ P.createElement(P5, {
      alpha: E,
      points: a,
      baseLine: l,
      layout: y,
      strokeWidth: n.strokeWidth
    }))), /* @__PURE__ */ P.createElement(ct, {
      clipPath: "url(#animationClipPath-".concat(r, ")")
    }, /* @__PURE__ */ P.createElement(yy, {
      points: a,
      baseLine: l,
      needClip: t,
      clipPathId: r,
      props: n
    })));
  }), /* @__PURE__ */ P.createElement(b1, {
    label: n.label
  }));
}
function _5(e) {
  var {
    needClip: t,
    clipPathId: r,
    props: n
  } = e, i = ve(null), o = ve();
  return /* @__PURE__ */ P.createElement(C5, {
    needClip: t,
    clipPathId: r,
    props: n,
    previousPointsRef: i,
    previousBaselineRef: o
  });
}
class E5 extends Ny {
  render() {
    var {
      hide: t,
      dot: r,
      points: n,
      className: i,
      top: o,
      left: a,
      needClip: l,
      xAxisId: s,
      yAxisId: c,
      width: u,
      height: d,
      id: p,
      baseLine: h,
      zIndex: g
    } = this.props;
    if (t)
      return null;
    var v = Pe("recharts-area", i), y = p, {
      r: m,
      strokeWidth: b
    } = a5(r), w = O1(r), x = m * 2 + b, S = l ? "url(#clipPath-".concat(w ? "" : "dots-").concat(y, ")") : void 0;
    return /* @__PURE__ */ P.createElement(Lt, {
      zIndex: g
    }, /* @__PURE__ */ P.createElement(ct, {
      className: v
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(F1, {
      clipPathId: y,
      xAxisId: s,
      yAxisId: c
    }), !w && /* @__PURE__ */ P.createElement("clipPath", {
      id: "clipPath-dots-".concat(y)
    }, /* @__PURE__ */ P.createElement("rect", {
      x: a - x / 2,
      y: o - x / 2,
      width: u + x,
      height: d + x
    }))), /* @__PURE__ */ P.createElement(_5, {
      needClip: l,
      clipPathId: y,
      props: this.props
    })), /* @__PURE__ */ P.createElement(ly, {
      points: n,
      mainColor: Ka(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }), this.props.isRange && Array.isArray(h) && /* @__PURE__ */ P.createElement(ly, {
      points: h,
      mainColor: Ka(this.props.stroke, this.props.fill),
      itemDataKey: this.props.dataKey,
      activeDot: this.props.activeDot,
      clipPath: S
    }));
  }
}
var k5 = {
  activeDot: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  connectNulls: !1,
  dot: !1,
  fill: "#3182bd",
  fillOpacity: 0.6,
  hide: !1,
  isAnimationActive: "auto",
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  type: "linear",
  label: !1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Ze.area
};
function A5(e) {
  var t, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    connectNulls: a,
    dot: l,
    fill: s,
    fillOpacity: c,
    hide: u,
    isAnimationActive: d,
    legendType: p,
    stroke: h,
    xAxisId: g,
    yAxisId: v
  } = e, y = G1(e, h5), m = Pn(), b = Yb(), {
    needClip: w
  } = qd(g, v), x = dt(), {
    points: S,
    isRange: O,
    baseLine: C
  } = (t = oe((L) => f5(L, e.id, x))) !== null && t !== void 0 ? t : {}, E = Wd();
  if (m !== "horizontal" && m !== "vertical" || E == null || b !== "AreaChart" && b !== "ComposedChart")
    return null;
  var {
    height: M,
    width: D,
    x: N,
    y: _
  } = E;
  return !S || !S.length ? null : /* @__PURE__ */ P.createElement(E5, pn({}, y, {
    activeDot: r,
    animationBegin: n,
    animationDuration: i,
    animationEasing: o,
    baseLine: C,
    connectNulls: a,
    dot: l,
    fill: s,
    fillOpacity: c,
    height: M,
    hide: u,
    layout: m,
    isAnimationActive: d,
    isRange: O,
    legendType: p,
    needClip: w,
    points: S,
    stroke: h,
    width: D,
    left: N,
    top: _,
    xAxisId: g,
    yAxisId: v
  }));
}
var T5 = (e, t, r, n, i) => {
  var o = r ?? t;
  if (te(o))
    return o;
  var a = e === "horizontal" ? i : n, l = a.scale.domain();
  if (a.type === "number") {
    var s = Math.max(l[0], l[1]), c = Math.min(l[0], l[1]);
    return o === "dataMin" ? c : o === "dataMax" || s < 0 ? s : Math.max(Math.min(l[0], l[1]), 0);
  }
  return o === "dataMin" ? l[0] : o === "dataMax" ? l[1] : l[0];
};
function I5(e) {
  var {
    areaSettings: {
      connectNulls: t,
      baseValue: r,
      dataKey: n
    },
    stackedData: i,
    layout: o,
    chartBaseValue: a,
    xAxis: l,
    yAxis: s,
    displayedData: c,
    dataStartIndex: u,
    xAxisTicks: d,
    yAxisTicks: p,
    bandSize: h
  } = e, g = i && i.length, v = T5(o, a, r, l, s), y = o === "horizontal", m = !1, b = c.map((x, S) => {
    var O, C, E, M;
    if (g)
      M = i[u + S];
    else {
      var D = He(x, n);
      Array.isArray(D) ? (M = D, m = !0) : M = [v, D];
    }
    var N = (O = (C = M) === null || C === void 0 ? void 0 : C[1]) !== null && O !== void 0 ? O : null, _ = N == null || g && !t && He(x, n) == null;
    if (y) {
      var L;
      return {
        x: th({
          axis: l,
          ticks: d,
          bandSize: h,
          entry: x,
          index: S
        }),
        y: _ ? null : (L = s.scale.map(N)) !== null && L !== void 0 ? L : null,
        value: M,
        payload: x
      };
    }
    return {
      x: _ ? null : (E = l.scale.map(N)) !== null && E !== void 0 ? E : null,
      y: th({
        axis: s,
        ticks: p,
        bandSize: h,
        entry: x,
        index: S
      }),
      value: M,
      payload: x
    };
  }), w;
  return g || m ? w = b.map((x) => {
    var S, O = Array.isArray(x.value) ? x.value[0] : null;
    if (y) {
      var C;
      return {
        x: x.x,
        y: O != null && x.y != null && (C = s.scale.map(O)) !== null && C !== void 0 ? C : null,
        payload: x.payload
      };
    }
    return {
      x: O != null && (S = l.scale.map(O)) !== null && S !== void 0 ? S : null,
      y: x.y,
      payload: x.payload
    };
  }) : w = y ? s.scale.map(v) : l.scale.map(v), {
    points: b,
    baseLine: w ?? 0,
    isRange: m
  };
}
function M5(e) {
  var t = jt(e, k5), r = dt();
  return /* @__PURE__ */ P.createElement(A1, {
    id: t.id,
    type: "area"
  }, (n) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(k1, {
    legendPayload: x5(t)
  }), /* @__PURE__ */ P.createElement(b5, {
    dataKey: t.dataKey,
    data: t.data,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: n
  }), /* @__PURE__ */ P.createElement(I1, {
    type: "area",
    id: n,
    data: t.data,
    dataKey: t.dataKey,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    stackId: u0(t.stackId),
    hide: t.hide,
    barSize: void 0,
    baseValue: t.baseValue,
    isPanorama: r,
    connectNulls: t.connectNulls
  }), /* @__PURE__ */ P.createElement(A5, pn({}, t, {
    id: n
  }))));
}
var au = /* @__PURE__ */ P.memo(M5, io);
au.displayName = "Area";
var D5 = process.env.NODE_ENV === "production", vc = "Invariant failed";
function N5(e, t) {
  if (D5)
    throw new Error(vc);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(vc, ": ").concat(r) : vc;
  throw new Error(n);
}
function lu() {
  return lu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, lu.apply(null, arguments);
}
function Ud(e) {
  return /* @__PURE__ */ P.createElement(VI, lu({
    shapeType: "rectangle",
    activeClassName: "recharts-active-bar",
    inActiveClassName: "recharts-inactive-bar"
  }, e));
}
var R5 = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (n, i) => {
    if (te(t)) return t;
    var o = te(n) || Le(n);
    return o ? t(n, i) : (o || N5(!1, "minPointSize callback function received a value with type of ".concat(typeof n, ". Currently only numbers or null/undefined are supported.")), r);
  };
}, $5 = (e, t, r) => r, z5 = (e, t) => t, go = I([Il, z5], (e, t) => e.filter((r) => r.type === "bar").find((r) => r.id === t)), L5 = I([go], (e) => e?.maxBarSize), B5 = (e, t, r, n) => n, W5 = I([Se, Il, yr, mr, $5], (e, t, r, n, i) => t.filter((o) => e === "horizontal" ? o.xAxisId === r : o.yAxisId === n).filter((o) => o.isPanorama === i).filter((o) => o.hide === !1).filter((o) => o.type === "bar")), F5 = (e, t, r) => {
  var n = Se(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null))
    return n === "horizontal" ? Da(e, "yAxis", o, r) : Da(e, "xAxis", i, r);
}, V5 = (e, t) => {
  var r = Se(e), n = yr(e, t), i = mr(e, t);
  if (!(n == null || i == null))
    return r === "horizontal" ? lg(e, "xAxis", n) : lg(e, "yAxis", i);
}, K5 = I([W5, cE, V5], EM), H5 = (e, t, r) => {
  var n, i, o = go(e, t);
  if (o == null)
    return 0;
  var a = yr(e, t), l = mr(e, t);
  if (a == null || l == null)
    return 0;
  var s = Se(e), c = X0(e), {
    maxBarSize: u
  } = o, d = Le(u) ? c : u, p, h;
  return s === "horizontal" ? (p = qr(e, "xAxis", a, r), h = Hr(e, "xAxis", a, r)) : (p = qr(e, "yAxis", l, r), h = Hr(e, "yAxis", l, r)), (n = (i = Un(p, h, !0)) !== null && i !== void 0 ? i : d) !== null && n !== void 0 ? n : 0;
}, X1 = (e, t, r) => {
  var n = Se(e), i = yr(e, t), o = mr(e, t);
  if (!(i == null || o == null)) {
    var a, l;
    return n === "horizontal" ? (a = qr(e, "xAxis", i, r), l = Hr(e, "xAxis", i, r)) : (a = qr(e, "yAxis", o, r), l = Hr(e, "yAxis", o, r)), Un(a, l);
  }
}, q5 = I([K5, X0, sE, Z0, H5, X1, L5], MM), U5 = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return qr(e, "xAxis", n, r);
}, Y5 = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return qr(e, "yAxis", n, r);
}, G5 = (e, t, r) => {
  var n = yr(e, t);
  if (n != null)
    return Hr(e, "xAxis", n, r);
}, X5 = (e, t, r) => {
  var n = mr(e, t);
  if (n != null)
    return Hr(e, "yAxis", n, r);
}, Z5 = I([q5, go], NM), J5 = I([F5, go], DM), Q5 = I([rt, Du, U5, Y5, G5, X5, Z5, Se, z0, X1, J5, go, B5], (e, t, r, n, i, o, a, l, s, c, u, d, p) => {
  var {
    chartData: h,
    dataStartIndex: g,
    dataEndIndex: v
  } = s;
  if (!(d == null || a == null || t == null || l !== "horizontal" && l !== "vertical" || r == null || n == null || i == null || o == null || c == null)) {
    var {
      data: y
    } = d, m;
    if (y != null && y.length > 0 ? m = y : m = h?.slice(g, v + 1), m != null)
      return _8({
        layout: l,
        barSettings: d,
        pos: a,
        parentViewBox: t,
        bandSize: c,
        xAxis: r,
        yAxis: n,
        xAxisTicks: i,
        yAxisTicks: o,
        stackedData: u,
        displayedData: m,
        offset: e,
        cells: p,
        dataStartIndex: g
      });
  }
}), e8 = ["index"];
function su() {
  return su = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, su.apply(null, arguments);
}
function t8(e, t) {
  if (e == null) return {};
  var r, n, i = r8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function r8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var Z1 = /* @__PURE__ */ At(void 0), n8 = (e) => {
  var t = zt(Z1);
  if (t != null)
    return t.stackId;
  if (e != null)
    return u0(e);
}, i8 = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t), o8 = (e) => {
  var t = zt(Z1);
  if (t != null) {
    var {
      stackId: r
    } = t;
    return "url(#".concat(i8(r, e), ")");
  }
}, J1 = (e) => {
  var {
    index: t
  } = e, r = t8(e, e8), n = o8(t);
  return /* @__PURE__ */ P.createElement(ct, su({
    className: "recharts-bar-stack-layer",
    clipPath: n
  }, r));
}, a8 = ["onMouseEnter", "onMouseLeave", "onClick"], l8 = ["value", "background", "tooltipPosition"], s8 = ["id"], c8 = ["onMouseEnter", "onClick", "onMouseLeave"];
function Ur() {
  return Ur = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ur.apply(null, arguments);
}
function my(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? my(Object(r), !0).forEach(function(n) {
      u8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function u8(e, t, r) {
  return (t = d8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function d8(e) {
  var t = f8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function f8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ha(e, t) {
  if (e == null) return {};
  var r, n, i = p8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function p8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var h8 = (e) => {
  var {
    dataKey: t,
    name: r,
    fill: n,
    legendType: i,
    hide: o
  } = e;
  return [{
    inactive: o,
    dataKey: t,
    type: i,
    color: n,
    value: al(r, t),
    payload: e
  }];
}, v8 = /* @__PURE__ */ P.memo((e) => {
  var {
    dataKey: t,
    stroke: r,
    strokeWidth: n,
    fill: i,
    name: o,
    hide: a,
    unit: l,
    tooltipType: s,
    id: c
  } = e, u = {
    dataDefinedOnItem: void 0,
    getPosition: On,
    settings: {
      stroke: r,
      strokeWidth: n,
      fill: i,
      dataKey: t,
      nameKey: void 0,
      name: al(o, t),
      hide: a,
      type: s,
      color: i,
      unit: l,
      graphicalItemId: c
    }
  };
  return /* @__PURE__ */ P.createElement(E1, {
    tooltipEntrySettings: u
  });
});
function g8(e) {
  var t = oe(wn), {
    data: r,
    dataKey: n,
    background: i,
    allOtherBarProps: o
  } = e, {
    onMouseEnter: a,
    onMouseLeave: l,
    onClick: s
  } = o, c = Ha(o, a8), u = P1(a, n, o.id), d = C1(l), p = _1(s, n, o.id);
  if (!i || r == null)
    return null;
  var h = Yi(i);
  return /* @__PURE__ */ P.createElement(Lt, {
    zIndex: RM(i, Ze.barBackground)
  }, r.map((g, v) => {
    var {
      value: y,
      background: m,
      tooltipPosition: b
    } = g, w = Ha(g, l8);
    if (!m)
      return null;
    var x = u(g, v), S = d(g, v), O = p(g, v), C = xt(xt(xt(xt(xt({
      option: i,
      isActive: String(v) === t
    }, w), {}, {
      // @ts-expect-error backgroundProps is contributing unknown props
      fill: "#eee"
    }, m), h), Pu(c, g, v)), {}, {
      onMouseEnter: x,
      onMouseLeave: S,
      onClick: O,
      dataKey: n,
      index: v,
      className: "recharts-bar-background-rectangle"
    });
    return /* @__PURE__ */ P.createElement(Ud, Ur({
      key: "background-bar-".concat(v)
    }, C));
  }));
}
function y8(e) {
  var {
    showLabels: t,
    children: r,
    rects: n
  } = e, i = n?.map((o) => {
    var a = {
      x: o.x,
      y: o.y,
      width: o.width,
      lowerWidth: o.width,
      upperWidth: o.width,
      height: o.height
    };
    return xt(xt({}, a), {}, {
      value: o.value,
      payload: o.payload,
      parentViewBox: o.parentViewBox,
      viewBox: a,
      fill: o.fill
    });
  });
  return /* @__PURE__ */ P.createElement(m1, {
    value: t ? i : void 0
  }, r);
}
function m8(e) {
  var {
    shape: t,
    activeBar: r,
    baseProps: n,
    entry: i,
    index: o,
    dataKey: a
  } = e, l = oe(wn), s = oe(Hb), c = r && String(i.originalDataIndex) === l && (s == null || a === s), [u, d] = W(!1), [p, h] = W(!1);
  Oe(() => {
    var w;
    return c ? (d(!0), w = requestAnimationFrame(() => {
      h(!0);
    })) : h(!1), () => {
      cancelAnimationFrame(w);
    };
  }, [c]);
  var g = Ee(() => {
    c || d(!1);
  }, [c]), v = c && p, y = c || u, m;
  c ? r === !0 ? m = t : m = r : m = t;
  var b = /* @__PURE__ */ P.createElement(Ud, Ur({}, n, {
    name: String(n.name)
  }, i, {
    isActive: v,
    option: m,
    index: o,
    dataKey: a,
    onTransitionEnd: g
  }));
  return y ? /* @__PURE__ */ P.createElement(Lt, {
    zIndex: Ze.activeBar
  }, /* @__PURE__ */ P.createElement(J1, {
    index: i.originalDataIndex
  }, b)) : b;
}
function x8(e) {
  var {
    shape: t,
    baseProps: r,
    entry: n,
    index: i,
    dataKey: o
  } = e;
  return /* @__PURE__ */ P.createElement(Ud, Ur({}, r, {
    name: String(r.name)
  }, n, {
    isActive: !1,
    option: t,
    index: i,
    dataKey: o
  }));
}
function b8(e) {
  var t, {
    data: r,
    props: n
  } = e, i = (t = qt(n)) !== null && t !== void 0 ? t : {}, {
    id: o
  } = i, a = Ha(i, s8), {
    shape: l,
    dataKey: s,
    activeBar: c
  } = n, {
    onMouseEnter: u,
    onClick: d,
    onMouseLeave: p
  } = n, h = Ha(n, c8), g = P1(u, s, o), v = C1(p), y = _1(d, s, o);
  return r ? /* @__PURE__ */ P.createElement(P.Fragment, null, r.map((m, b) => /* @__PURE__ */ P.createElement(J1, Ur({
    index: m.originalDataIndex,
    key: "rectangle-".concat(m?.x, "-").concat(m?.y, "-").concat(m?.value, "-").concat(b),
    className: "recharts-bar-rectangle"
  }, Pu(h, m, b), {
    onMouseEnter: g(m, b),
    onMouseLeave: v(m, b),
    onClick: y(m, b)
  }), c ? /* @__PURE__ */ P.createElement(m8, {
    shape: l,
    activeBar: c,
    baseProps: a,
    entry: m,
    index: b,
    dataKey: s
  }) : (
    /*
     * If the `activeBar` prop is falsy, then let's call the variant without hooks.
     * Using the `selectActiveTooltipIndex` selector is usually fast
     * but in charts with large-ish amount of data even the few nanoseconds add up to a noticeable jank.
     * If the activeBar is false then we don't need to know which index is active - because we won't use it anyway.
     * So let's just skip the hooks altogether. That way, React can skip rendering the component,
     * and can skip the tree reconciliation for its children too.
     * Because we can't call hooks conditionally, we need to have a separate component for that.
     */
    /* @__PURE__ */ P.createElement(x8, {
      shape: l,
      baseProps: a,
      entry: m,
      index: b,
      dataKey: s
    })
  )))) : null;
}
function w8(e) {
  var {
    props: t,
    previousRectanglesRef: r
  } = e, {
    data: n,
    layout: i,
    isAnimationActive: o,
    animationBegin: a,
    animationDuration: l,
    animationEasing: s,
    onAnimationEnd: c,
    onAnimationStart: u
  } = t, d = r.current, p = vl(t, "recharts-bar-"), [h, g] = W(!1), v = !h, y = Ee(() => {
    typeof c == "function" && c(), g(!1);
  }, [c]), m = Ee(() => {
    typeof u == "function" && u(), g(!0);
  }, [u]);
  return /* @__PURE__ */ P.createElement(y8, {
    showLabels: v,
    rects: n
  }, /* @__PURE__ */ P.createElement(hl, {
    animationId: p,
    begin: a,
    duration: l,
    isActive: o,
    easing: s,
    onAnimationEnd: y,
    onAnimationStart: m,
    key: p
  }, (b) => {
    var w = b === 1 ? n : n?.map((x, S) => {
      var O = d && d[S];
      if (O)
        return xt(xt({}, x), {}, {
          x: ze(O.x, x.x, b),
          y: ze(O.y, x.y, b),
          width: ze(O.width, x.width, b),
          height: ze(O.height, x.height, b)
        });
      if (i === "horizontal") {
        var C = ze(0, x.height, b), E = ze(x.stackedBarStart, x.y, b);
        return xt(xt({}, x), {}, {
          y: E,
          height: C
        });
      }
      var M = ze(0, x.width, b), D = ze(x.stackedBarStart, x.x, b);
      return xt(xt({}, x), {}, {
        width: M,
        x: D
      });
    });
    return b > 0 && (r.current = w ?? null), w == null ? null : /* @__PURE__ */ P.createElement(ct, null, /* @__PURE__ */ P.createElement(b8, {
      props: t,
      data: w
    }));
  }), /* @__PURE__ */ P.createElement(b1, {
    label: t.label
  }), t.children);
}
function j8(e) {
  var t = ve(null);
  return /* @__PURE__ */ P.createElement(w8, {
    previousRectanglesRef: t,
    props: e
  });
}
var Q1 = 0, S8 = (e, t) => {
  var r = Array.isArray(e.value) ? e.value[1] : e.value;
  return {
    x: e.x,
    y: e.y,
    value: r,
    // getValueByDataKey does not validate the output type
    errorVal: He(e, t)
  };
};
class O8 extends Ny {
  render() {
    var {
      hide: t,
      data: r,
      dataKey: n,
      className: i,
      xAxisId: o,
      yAxisId: a,
      needClip: l,
      background: s,
      id: c
    } = this.props;
    if (t || r == null)
      return null;
    var u = Pe("recharts-bar", i), d = c;
    return /* @__PURE__ */ P.createElement(ct, {
      className: u,
      id: c
    }, l && /* @__PURE__ */ P.createElement("defs", null, /* @__PURE__ */ P.createElement(F1, {
      clipPathId: d,
      xAxisId: o,
      yAxisId: a
    })), /* @__PURE__ */ P.createElement(ct, {
      className: "recharts-bar-rectangles",
      clipPath: l ? "url(#clipPath-".concat(d, ")") : void 0
    }, /* @__PURE__ */ P.createElement(g8, {
      data: r,
      dataKey: n,
      background: s,
      allOtherBarProps: this.props
    }), /* @__PURE__ */ P.createElement(j8, this.props)));
  }
}
var P8 = {
  activeBar: !1,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease",
  background: !1,
  hide: !1,
  isAnimationActive: "auto",
  label: !1,
  legendType: "rect",
  minPointSize: Q1,
  xAxisId: 0,
  yAxisId: 0,
  zIndex: Ze.bar
};
function C8(e) {
  var {
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: u
  } = e, {
    needClip: d
  } = qd(t, r), p = Pn(), h = dt(), g = OI(e.children, zd), v = oe((b) => Q5(b, e.id, h, g));
  if (p !== "vertical" && p !== "horizontal")
    return null;
  var y, m = v?.[0];
  return m == null || m.height == null || m.width == null ? y = 0 : y = p === "vertical" ? m.height / 2 : m.width / 2, /* @__PURE__ */ P.createElement(o5, {
    xAxisId: t,
    yAxisId: r,
    data: v,
    dataPointFormatter: S8,
    errorBarOffset: y
  }, /* @__PURE__ */ P.createElement(O8, Ur({}, e, {
    layout: p,
    needClip: d,
    data: v,
    xAxisId: t,
    yAxisId: r,
    hide: n,
    legendType: i,
    minPointSize: o,
    activeBar: a,
    animationBegin: l,
    animationDuration: s,
    animationEasing: c,
    isAnimationActive: u
  })));
}
function _8(e) {
  var {
    layout: t,
    barSettings: {
      dataKey: r,
      minPointSize: n,
      hasCustomShape: i
    },
    pos: o,
    bandSize: a,
    xAxis: l,
    yAxis: s,
    xAxisTicks: c,
    yAxisTicks: u,
    stackedData: d,
    displayedData: p,
    offset: h,
    cells: g,
    parentViewBox: v,
    dataStartIndex: y
  } = e, m = t === "horizontal" ? s : l, b = d ? m.scale.domain() : null, w = lP({
    numericAxis: m
  }), x = m.scale.map(w);
  return p.map((S, O) => {
    var C, E, M, D, N, _;
    if (d) {
      var L = d[O + y];
      if (L == null)
        return null;
      C = rP(L, b);
    } else
      C = He(S, r), Array.isArray(C) || (C = [w, C]);
    var F = R5(n, Q1)(C[1], O);
    if (t === "horizontal") {
      var Y, Q = s.scale.map(C[0]), ie = s.scale.map(C[1]);
      if (Q == null || ie == null)
        return null;
      E = rh({
        axis: l,
        ticks: c,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), M = (Y = ie ?? Q) !== null && Y !== void 0 ? Y : void 0, D = o.size;
      var R = Q - ie;
      if (N = Jt(R) ? 0 : R, _ = {
        x: E,
        y: h.top,
        width: D,
        height: h.height
      }, Math.abs(F) > 0 && Math.abs(N) < Math.abs(F)) {
        var re = Ct(N || F) * (Math.abs(F) - Math.abs(N));
        M -= re, N += re;
      }
    } else {
      var ee = l.scale.map(C[0]), $ = l.scale.map(C[1]);
      if (ee == null || $ == null)
        return null;
      if (E = ee, M = rh({
        axis: s,
        ticks: u,
        bandSize: a,
        offset: o.offset,
        entry: S,
        index: O
      }), D = $ - ee, N = o.size, _ = {
        x: h.left,
        y: M,
        width: h.width,
        height: N
      }, Math.abs(F) > 0 && Math.abs(D) < Math.abs(F)) {
        var B = Ct(D || F) * (Math.abs(F) - Math.abs(D));
        D += B;
      }
    }
    if (E == null || M == null || D == null || N == null || !i && (D === 0 || N === 0))
      return null;
    var z = xt(xt({}, S), {}, {
      stackedBarStart: x,
      x: E,
      y: M,
      width: D,
      height: N,
      value: d ? C : C[1],
      payload: S,
      background: _,
      tooltipPosition: {
        x: E + D / 2,
        y: M + N / 2
      },
      parentViewBox: v,
      originalDataIndex: O
    }, g && g[O] && g[O].props);
    return z;
  }).filter(Boolean);
}
function E8(e) {
  var t = jt(e, P8), r = n8(t.stackId), n = dt();
  return /* @__PURE__ */ P.createElement(A1, {
    id: t.id,
    type: "bar"
  }, (i) => /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(k1, {
    legendPayload: h8(t)
  }), /* @__PURE__ */ P.createElement(v8, {
    dataKey: t.dataKey,
    stroke: t.stroke,
    strokeWidth: t.strokeWidth,
    fill: t.fill,
    name: t.name,
    hide: t.hide,
    unit: t.unit,
    tooltipType: t.tooltipType,
    id: i
  }), /* @__PURE__ */ P.createElement(I1, {
    type: "bar",
    id: i,
    data: void 0,
    xAxisId: t.xAxisId,
    yAxisId: t.yAxisId,
    zAxisId: 0,
    dataKey: t.dataKey,
    stackId: r,
    hide: t.hide,
    barSize: t.barSize,
    minPointSize: t.minPointSize,
    maxBarSize: t.maxBarSize,
    isPanorama: n,
    hasCustomShape: t.shape != null
  }), /* @__PURE__ */ P.createElement(Lt, {
    zIndex: t.zIndex
  }, /* @__PURE__ */ P.createElement(C8, Ur({}, t, {
    id: i
  })))));
}
var cu = /* @__PURE__ */ P.memo(E8, io);
cu.displayName = "Bar";
var k8 = ["domain", "range"], A8 = ["domain", "range"];
function xy(e, t) {
  if (e == null) return {};
  var r, n, i = T8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function T8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function by(e, t) {
  return e === t ? !0 : Array.isArray(e) && e.length === 2 && Array.isArray(t) && t.length === 2 ? e[0] === t[0] && e[1] === t[1] : !1;
}
function ew(e, t) {
  if (e === t)
    return !0;
  var {
    domain: r,
    range: n
  } = e, i = xy(e, k8), {
    domain: o,
    range: a
  } = t, l = xy(t, A8);
  return !by(r, o) || !by(n, a) ? !1 : io(i, l);
}
var I8 = ["type"], M8 = ["dangerouslySetInnerHTML", "ticks", "scale"], D8 = ["id", "scale"];
function uu() {
  return uu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, uu.apply(null, arguments);
}
function wy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wy(Object(r), !0).forEach(function(n) {
      N8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function N8(e, t, r) {
  return (t = R8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R8(e) {
  var t = $8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function $8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function du(e, t) {
  if (e == null) return {};
  var r, n, i = z8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function z8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function L8(e) {
  var t = $e(), r = ve(null), n = $u(), {
    type: i
  } = e, o = du(e, I8), a = xl(n, "xAxis", i), l = tr(() => {
    if (a != null)
      return jy(jy({}, o), {}, {
        type: a
      });
  }, [o, a]);
  return kt(() => {
    l != null && (r.current === null ? t(pM(l)) : r.current !== l && t(hM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), kt(() => () => {
    r.current && (t(vM(r.current)), r.current = null);
  }, [t]), null;
}
var B8 = (e) => {
  var {
    xAxisId: t,
    className: r
  } = e, n = oe(Du), i = dt(), o = "xAxis", a = oe((m) => Sb(m, o, t, i)), l = oe((m) => bb(m, t)), s = oe((m) => H4(m, t)), c = oe((m) => Fx(m, t));
  if (l == null || s == null || c == null)
    return null;
  var {
    dangerouslySetInnerHTML: u,
    ticks: d,
    scale: p
  } = e, h = du(e, M8), {
    id: g,
    scale: v
  } = c, y = du(c, D8);
  return /* @__PURE__ */ P.createElement(Kd, uu({}, h, y, {
    x: s.x,
    y: s.y,
    width: l.width,
    height: l.height,
    className: Pe("recharts-".concat(o, " ").concat(o), r),
    viewBox: n,
    ticks: a,
    axisType: o,
    axisId: t
  }));
}, W8 = {
  allowDataOverflow: Ye.allowDataOverflow,
  allowDecimals: Ye.allowDecimals,
  allowDuplicatedCategory: Ye.allowDuplicatedCategory,
  angle: Ye.angle,
  axisLine: Cr.axisLine,
  height: Ye.height,
  hide: !1,
  includeHidden: Ye.includeHidden,
  interval: Ye.interval,
  label: !1,
  minTickGap: Ye.minTickGap,
  mirror: Ye.mirror,
  orientation: Ye.orientation,
  padding: Ye.padding,
  reversed: Ye.reversed,
  scale: Ye.scale,
  tick: Ye.tick,
  tickCount: Ye.tickCount,
  tickLine: Cr.tickLine,
  tickSize: Cr.tickSize,
  type: Ye.type,
  niceTicks: Ye.niceTicks,
  xAxisId: 0
}, F8 = (e) => {
  var t = jt(e, W8);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(L8, {
    allowDataOverflow: t.allowDataOverflow,
    allowDecimals: t.allowDecimals,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    angle: t.angle,
    dataKey: t.dataKey,
    domain: t.domain,
    height: t.height,
    hide: t.hide,
    id: t.xAxisId,
    includeHidden: t.includeHidden,
    interval: t.interval,
    minTickGap: t.minTickGap,
    mirror: t.mirror,
    name: t.name,
    orientation: t.orientation,
    padding: t.padding,
    reversed: t.reversed,
    scale: t.scale,
    tick: t.tick,
    tickCount: t.tickCount,
    tickFormatter: t.tickFormatter,
    ticks: t.ticks,
    type: t.type,
    unit: t.unit,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ P.createElement(B8, t));
}, Yd = /* @__PURE__ */ P.memo(F8, ew);
Yd.displayName = "XAxis";
var V8 = ["type"], K8 = ["dangerouslySetInnerHTML", "ticks", "scale"], H8 = ["id", "scale"];
function fu() {
  return fu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fu.apply(null, arguments);
}
function Sy(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oy(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sy(Object(r), !0).forEach(function(n) {
      q8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sy(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q8(e, t, r) {
  return (t = U8(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U8(e) {
  var t = Y8(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Y8(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pu(e, t) {
  if (e == null) return {};
  var r, n, i = G8(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function G8(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function X8(e) {
  var t = $e(), r = ve(null), n = $u(), {
    type: i
  } = e, o = pu(e, V8), a = xl(n, "yAxis", i), l = tr(() => {
    if (a != null)
      return Oy(Oy({}, o), {}, {
        type: a
      });
  }, [a, o]);
  return kt(() => {
    l != null && (r.current === null ? t(gM(l)) : r.current !== l && t(yM({
      prev: r.current,
      next: l
    })), r.current = l);
  }, [l, t]), kt(() => () => {
    r.current && (t(mM(r.current)), r.current = null);
  }, [t]), null;
}
function Z8(e) {
  var {
    yAxisId: t,
    className: r,
    width: n,
    label: i
  } = e, o = ve(null), a = ve(null), l = oe(Du), s = dt(), c = $e(), u = "yAxis", d = oe((O) => wb(O, t)), p = oe((O) => U4(O, t)), h = oe((O) => Sb(O, u, t, s)), g = oe((O) => Vx(O, t));
  if (kt(() => {
    if (!(n !== "auto" || !d || Bd(i) || /* @__PURE__ */ Nt(i) || g == null)) {
      var O = o.current;
      if (O) {
        var C = O.getCalculatedWidth();
        Math.round(d.width) !== Math.round(C) && c(xM({
          id: t,
          width: C
        }));
      }
    }
  }, [
    // The dependency on cartesianAxisRef.current is not needed because useLayoutEffect will run after every render.
    // The ref will be populated by then.
    // To re-run this effect when ticks change, we can depend on the ticks array from the store.
    h,
    d,
    c,
    i,
    t,
    n,
    g
  ]), d == null || p == null || g == null)
    return null;
  var {
    dangerouslySetInnerHTML: v,
    ticks: y,
    scale: m
  } = e, b = pu(e, K8), {
    id: w,
    scale: x
  } = g, S = pu(g, H8);
  return /* @__PURE__ */ P.createElement(Kd, fu({}, b, S, {
    ref: o,
    labelRef: a,
    x: p.x,
    y: p.y,
    tickTextProps: n === "auto" ? {
      width: void 0
    } : {
      width: n
    },
    width: d.width,
    height: d.height,
    className: Pe("recharts-".concat(u, " ").concat(u), r),
    viewBox: l,
    ticks: h,
    axisType: u,
    axisId: t
  }));
}
var J8 = {
  allowDataOverflow: Ge.allowDataOverflow,
  allowDecimals: Ge.allowDecimals,
  allowDuplicatedCategory: Ge.allowDuplicatedCategory,
  angle: Ge.angle,
  axisLine: Cr.axisLine,
  hide: !1,
  includeHidden: Ge.includeHidden,
  interval: Ge.interval,
  label: !1,
  minTickGap: Ge.minTickGap,
  mirror: Ge.mirror,
  orientation: Ge.orientation,
  padding: Ge.padding,
  reversed: Ge.reversed,
  scale: Ge.scale,
  tick: Ge.tick,
  tickCount: Ge.tickCount,
  tickLine: Cr.tickLine,
  tickSize: Cr.tickSize,
  type: Ge.type,
  niceTicks: Ge.niceTicks,
  width: Ge.width,
  yAxisId: 0
}, Q8 = (e) => {
  var t = jt(e, J8);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(X8, {
    interval: t.interval,
    id: t.yAxisId,
    scale: t.scale,
    type: t.type,
    domain: t.domain,
    allowDataOverflow: t.allowDataOverflow,
    dataKey: t.dataKey,
    allowDuplicatedCategory: t.allowDuplicatedCategory,
    allowDecimals: t.allowDecimals,
    tickCount: t.tickCount,
    padding: t.padding,
    includeHidden: t.includeHidden,
    reversed: t.reversed,
    ticks: t.ticks,
    width: t.width,
    orientation: t.orientation,
    mirror: t.mirror,
    hide: t.hide,
    unit: t.unit,
    name: t.name,
    angle: t.angle,
    minTickGap: t.minTickGap,
    tick: t.tick,
    tickFormatter: t.tickFormatter,
    niceTicks: t.niceTicks
  }), /* @__PURE__ */ P.createElement(Z8, t));
}, Gd = /* @__PURE__ */ P.memo(Q8, ew);
Gd.displayName = "YAxis";
var eN = (e, t) => t, Xd = I([eN, Se, ix, it, Wb, Dr, vT, rt], jT);
function tN(e) {
  return "getBBox" in e.currentTarget && typeof e.currentTarget.getBBox == "function";
}
function Zd(e) {
  var t = e.currentTarget.getBoundingClientRect(), r, n;
  if (tN(e)) {
    var i = e.currentTarget.getBBox();
    r = i.width > 0 ? t.width / i.width : 1, n = i.height > 0 ? t.height / i.height : 1;
  } else {
    var o = e.currentTarget;
    r = o.offsetWidth > 0 ? t.width / o.offsetWidth : 1, n = o.offsetHeight > 0 ? t.height / o.offsetHeight : 1;
  }
  var a = (l, s) => ({
    /*
     * Here it's important to use:
     * - event.clientX and event.clientY to get the mouse position relative to the viewport, including scroll.
     * - pageX and pageY are not used because they are relative to the whole document, and ignore scroll.
     * - rect.left and rect.top are used to get the position of the chart relative to the viewport.
     * - offsetX and offsetY are not used because they are relative to the offset parent
     *  which may or may not be the same as the clientX and clientY, depending on the position of the chart in the DOM
     *  and surrounding element styles. CSS position: relative, absolute, fixed, will change the offset parent.
     * - scaleX and scaleY are necessary for when the chart element is scaled using CSS `transform: scale(N)`.
     */
    relativeX: Math.round((l - t.left) / r),
    relativeY: Math.round((s - t.top) / n)
  });
  return "touches" in e ? Array.from(e.touches).map((l) => a(l.clientX, l.clientY)) : a(e.clientX, e.clientY);
}
var tw = Rt("mouseClick"), rw = Qi();
rw.startListening({
  actionCreator: tw,
  effect: (e, t) => {
    var r = e.payload, n = Xd(t.getState(), Zd(r));
    n?.activeIndex != null && t.dispatch(c3({
      activeIndex: n.activeIndex,
      activeDataKey: void 0,
      activeCoordinate: n.activeCoordinate
    }));
  }
});
var hu = Rt("mouseMove"), nw = Qi(), $n = null, Zr = null, gc = null;
nw.startListening({
  actionCreator: hu,
  effect: (e, t) => {
    var r = e.payload, n = t.getState(), {
      throttleDelay: i,
      throttledEvents: o
    } = n.eventSettings, a = o === "all" || o?.includes("mousemove");
    $n !== null && (cancelAnimationFrame($n), $n = null), Zr !== null && (typeof i != "number" || !a) && (clearTimeout(Zr), Zr = null), gc = Zd(r);
    var l = () => {
      var s = t.getState(), c = ho(s, s.tooltip.settings.shared);
      if (!gc) {
        $n = null, Zr = null;
        return;
      }
      if (c === "axis") {
        var u = Xd(s, gc);
        u?.activeIndex != null ? t.dispatch(Tb({
          activeIndex: u.activeIndex,
          activeDataKey: void 0,
          activeCoordinate: u.activeCoordinate
        })) : t.dispatch(Ab());
      }
      $n = null, Zr = null;
    };
    if (!a) {
      l();
      return;
    }
    i === "raf" ? $n = requestAnimationFrame(l) : typeof i == "number" && Zr === null && (Zr = setTimeout(l, i));
  }
});
function rN(e, t) {
  return t instanceof HTMLElement ? "HTMLElement <".concat(t.tagName, ' class="').concat(t.className, '">') : t === window ? "global.window" : e === "children" && typeof t == "object" && t !== null ? "<<CHILDREN>>" : t;
}
var Py = {
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  barSize: void 0,
  className: void 0,
  maxBarSize: void 0,
  stackOffset: "none",
  syncId: void 0,
  syncMethod: "index",
  baseValue: void 0,
  reverseStackOrder: !1
}, iw = gt({
  name: "rootProps",
  initialState: Py,
  reducers: {
    updateOptions: (e, t) => {
      var r;
      e.accessibilityLayer = t.payload.accessibilityLayer, e.barCategoryGap = t.payload.barCategoryGap, e.barGap = (r = t.payload.barGap) !== null && r !== void 0 ? r : Py.barGap, e.barSize = t.payload.barSize, e.maxBarSize = t.payload.maxBarSize, e.stackOffset = t.payload.stackOffset, e.syncId = t.payload.syncId, e.syncMethod = t.payload.syncMethod, e.className = t.payload.className, e.baseValue = t.payload.baseValue, e.reverseStackOrder = t.payload.reverseStackOrder;
    }
  }
}), nN = iw.reducer, {
  updateOptions: iN
} = iw.actions, oN = null, aN = {
  updatePolarOptions: (e, t) => e === null ? t.payload : (e.startAngle = t.payload.startAngle, e.endAngle = t.payload.endAngle, e.cx = t.payload.cx, e.cy = t.payload.cy, e.innerRadius = t.payload.innerRadius, e.outerRadius = t.payload.outerRadius, e)
}, ow = gt({
  name: "polarOptions",
  initialState: oN,
  reducers: aN
}), {
  updatePolarOptions: v$
} = ow.actions, lN = ow.reducer, aw = Rt("keyDown"), lw = Rt("focus"), sw = Rt("blur"), Nl = Qi(), zn = null, Jr = null, Vo = null;
Nl.startListening({
  actionCreator: aw,
  effect: (e, t) => {
    Vo = e.payload, zn !== null && (cancelAnimationFrame(zn), zn = null);
    var r = t.getState(), {
      throttleDelay: n,
      throttledEvents: i
    } = r.eventSettings, o = i === "all" || i.includes("keydown");
    Jr !== null && (typeof n != "number" || !o) && (clearTimeout(Jr), Jr = null);
    var a = () => {
      try {
        var l = t.getState(), s = l.rootProps.accessibilityLayer !== !1;
        if (!s)
          return;
        var {
          keyboardInteraction: c
        } = l.tooltip, u = Vo;
        if (u !== "ArrowRight" && u !== "ArrowLeft" && u !== "Enter")
          return;
        var d = Ai(c, bn(l), Jn(l), ei(l)), p = d == null ? -1 : Number(d), h = !Number.isFinite(p) || p < 0, g = Dr(l), v = bn(l), y = ho(l, l.tooltip.settings.shared);
        if (u === "Enter") {
          if (h)
            return;
          var m = $a(l, y, "hover", String(c.index));
          t.dispatch(Ra({
            active: !c.active,
            activeIndex: c.index,
            activeCoordinate: m
          }));
          return;
        }
        var b = J4(l), w = b === "left-to-right" ? 1 : -1, x = u === "ArrowRight" ? 1 : -1, S;
        if (h) {
          var O = Jn(l), C = ei(l), E = x * w, M = (F) => ({
            active: !1,
            index: String(F),
            dataKey: void 0,
            graphicalItemId: void 0,
            coordinate: void 0
          });
          if (S = -1, E > 0) {
            for (var D = 0; D < v.length; D++)
              if (Ai(M(D), v, O, C) != null) {
                S = D;
                break;
              }
          } else
            for (var N = v.length - 1; N >= 0; N--)
              if (Ai(M(N), v, O, C) != null) {
                S = N;
                break;
              }
          if (S < 0)
            return;
        } else {
          S = p + x * w;
          var _ = g?.length || v.length;
          if (_ === 0 || S >= _ || S < 0)
            return;
        }
        var L = $a(l, y, "hover", String(S));
        t.dispatch(Ra({
          active: !0,
          activeIndex: S.toString(),
          activeCoordinate: L
        }));
      } finally {
        zn = null, Jr = null;
      }
    };
    if (!o) {
      a();
      return;
    }
    n === "raf" ? zn = requestAnimationFrame(a) : typeof n == "number" && Jr === null && (a(), Vo = null, Jr = setTimeout(() => {
      Vo ? a() : (Jr = null, zn = null);
    }, n));
  }
});
Nl.startListening({
  actionCreator: lw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      if (!i.active && i.index == null) {
        var o = "0", a = ho(r, r.tooltip.settings.shared), l = $a(r, a, "hover", String(o));
        t.dispatch(Ra({
          active: !0,
          activeIndex: o,
          activeCoordinate: l
        }));
      }
    }
  }
});
Nl.startListening({
  actionCreator: sw,
  effect: (e, t) => {
    var r = t.getState(), n = r.rootProps.accessibilityLayer !== !1;
    if (n) {
      var {
        keyboardInteraction: i
      } = r.tooltip;
      i.active && t.dispatch(Ra({
        active: !1,
        activeIndex: i.index,
        activeCoordinate: i.coordinate
      }));
    }
  }
});
function cw(e) {
  e.persist();
  var {
    currentTarget: t
  } = e;
  return new Proxy(e, {
    get: (r, n) => {
      if (n === "currentTarget")
        return t;
      var i = Reflect.get(r, n);
      return typeof i == "function" ? i.bind(r) : i;
    }
  });
}
var Vt = Rt("externalEvent"), uw = Qi(), Ko = /* @__PURE__ */ new Map(), Oi = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map();
uw.startListening({
  actionCreator: Vt,
  effect: (e, t) => {
    var {
      handler: r,
      reactEvent: n
    } = e.payload;
    if (r != null) {
      var i = n.type, o = cw(n);
      yc.set(i, {
        handler: r,
        reactEvent: o
      });
      var a = Ko.get(i);
      a !== void 0 && (cancelAnimationFrame(a), Ko.delete(i));
      var l = t.getState(), {
        throttleDelay: s,
        throttledEvents: c
      } = l.eventSettings, u = c, d = u === "all" || u?.includes(i), p = Oi.get(i);
      p !== void 0 && (typeof s != "number" || !d) && (clearTimeout(p), Oi.delete(i));
      var h = () => {
        var y = yc.get(i);
        try {
          if (!y)
            return;
          var {
            handler: m,
            reactEvent: b
          } = y, w = t.getState(), x = {
            activeCoordinate: eT(w),
            activeDataKey: Hb(w),
            activeIndex: wn(w),
            activeLabel: Kb(w),
            activeTooltipIndex: wn(w),
            isTooltipActive: tT(w)
          };
          m && m(x, b);
        } finally {
          Ko.delete(i), Oi.delete(i), yc.delete(i);
        }
      };
      if (!d) {
        h();
        return;
      }
      if (s === "raf") {
        var g = requestAnimationFrame(h);
        Ko.set(i, g);
      } else if (typeof s == "number") {
        if (!Oi.has(i)) {
          h();
          var v = setTimeout(h, s);
          Oi.set(i, v);
        }
      } else
        h();
    }
  }
});
var sN = I([ci], (e) => e.tooltipItemPayloads), cN = I([sN, (e, t) => t, (e, t, r) => r], (e, t, r) => {
  if (t != null) {
    var n = e.find((o) => o.settings.graphicalItemId === r);
    if (n != null) {
      var {
        getPosition: i
      } = n;
      if (i != null)
        return i(t);
    }
  }
}), dw = Rt("touchMove"), fw = Qi(), Qr = null, $r = null, Cy = null, Pi = null;
fw.startListening({
  actionCreator: dw,
  effect: (e, t) => {
    var r = e.payload;
    if (!(r.touches == null || r.touches.length === 0)) {
      Pi = cw(r);
      var n = t.getState(), {
        throttleDelay: i,
        throttledEvents: o
      } = n.eventSettings, a = o === "all" || o.includes("touchmove");
      Qr !== null && (cancelAnimationFrame(Qr), Qr = null), $r !== null && (typeof i != "number" || !a) && (clearTimeout($r), $r = null), Cy = Array.from(r.touches).map((s) => Zd({
        clientX: s.clientX,
        clientY: s.clientY,
        currentTarget: r.currentTarget
      }));
      var l = () => {
        if (Pi != null) {
          var s = t.getState(), c = ho(s, s.tooltip.settings.shared);
          if (c === "axis") {
            var u, d = (u = Cy) === null || u === void 0 ? void 0 : u[0];
            if (d == null) {
              Qr = null, $r = null;
              return;
            }
            var p = Xd(s, d);
            p?.activeIndex != null && t.dispatch(Tb({
              activeIndex: p.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: p.activeCoordinate
            }));
          } else if (c === "item") {
            var h, g = Pi.touches[0];
            if (document.elementFromPoint == null || g == null)
              return;
            var v = document.elementFromPoint(g.clientX, g.clientY);
            if (!v || !v.getAttribute)
              return;
            var y = v.getAttribute(hP), m = (h = v.getAttribute(vP)) !== null && h !== void 0 ? h : void 0, b = En(s).find((S) => S.id === m);
            if (y == null || b == null || m == null)
              return;
            var {
              dataKey: w
            } = b, x = cN(s, y, m);
            t.dispatch(kb({
              activeDataKey: w,
              activeIndex: y,
              activeCoordinate: x,
              activeGraphicalItemId: m
            }));
          }
          Qr = null, $r = null;
        }
      };
      if (!a) {
        l();
        return;
      }
      i === "raf" ? Qr = requestAnimationFrame(l) : typeof i == "number" && $r === null && (l(), Pi = null, $r = setTimeout(() => {
        Pi ? l() : ($r = null, Qr = null);
      }, i));
    }
  }
});
var pw = {
  throttleDelay: "raf",
  throttledEvents: ["mousemove", "touchmove", "pointermove", "scroll", "wheel"]
}, hw = gt({
  name: "eventSettings",
  initialState: pw,
  reducers: {
    setEventSettings: (e, t) => {
      t.payload.throttleDelay != null && (e.throttleDelay = t.payload.throttleDelay), t.payload.throttledEvents != null && (e.throttledEvents = t.payload.throttledEvents);
    }
  }
}), {
  setEventSettings: uN
} = hw.actions, dN = hw.reducer, fN = km({
  brush: zM,
  cartesianAxis: bM,
  chartData: JT,
  errorBars: QD,
  eventSettings: dN,
  graphicalItems: JI,
  layout: ZO,
  legend: lC,
  options: UT,
  polarAxis: mI,
  polarOptions: lN,
  referenceElements: qM,
  renderedTicks: wD,
  rootProps: nN,
  tooltip: u3,
  zIndex: NT
}), pN = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "Chart";
  return jO({
    reducer: fN,
    // redux-toolkit v1 types are unhappy with the preloadedState type. Remove the `as any` when bumping to v2
    preloadedState: t,
    // @ts-expect-error redux-toolkit v1 types are unhappy with the middleware array. Remove this comment when bumping to v2
    middleware: (n) => {
      var i;
      return n({
        serializableCheck: !1,
        immutableCheck: !["commonjs", "es6", "production"].includes((i = "es6") !== null && i !== void 0 ? i : "")
      }).concat([rw.middleware, nw.middleware, Nl.middleware, uw.middleware, fw.middleware]);
    },
    /*
     * I can't find out how to satisfy typescript here.
     * We return `EnhancerArray<[StoreEnhancer<{}, {}>, StoreEnhancer]>` from this function,
     * but the types say we should return `EnhancerArray<StoreEnhancer<{}, {}>`.
     * Looks like it's badly inferred generics, but it won't allow me to provide the correct type manually either.
     * So let's just ignore the error for now.
     */
    // @ts-expect-error mismatched generics
    enhancers: (n) => {
      var i = n;
      return typeof n == "function" && (i = n()), i.concat(Ym({
        type: "raf"
      }));
    },
    devTools: {
      serialize: {
        replacer: rN
      },
      name: "recharts-".concat(r)
    }
  });
};
function hN(e) {
  var {
    preloadedState: t,
    children: r,
    reduxStoreName: n
  } = e, i = dt(), o = ve(null);
  if (i)
    return r;
  o.current == null && (o.current = pN(t, n));
  var a = _u;
  return /* @__PURE__ */ P.createElement(CC, {
    context: a,
    store: o.current
  }, r);
}
function vN(e) {
  var {
    layout: t,
    margin: r
  } = e, n = $e(), i = dt();
  return Oe(() => {
    i || (n(YO(t)), n(UO(r)));
  }, [n, i, t, r]), null;
}
var gN = /* @__PURE__ */ gu(vN, io);
function yN(e) {
  var t = $e();
  return Oe(() => {
    t(iN(e));
  }, [t, e]), null;
}
var mN = (e) => {
  var t = $e();
  return Oe(() => {
    t(uN(e));
  }, [t, e]), null;
}, xN = /* @__PURE__ */ gu(mN, io);
function _y(e) {
  var {
    zIndex: t,
    isPanorama: r
  } = e, n = ve(null), i = $e();
  return kt(() => (n.current && i(MT({
    zIndex: t,
    element: n.current,
    isPanorama: r
  })), () => {
    i(DT({
      zIndex: t,
      isPanorama: r
    }));
  }), [i, t, r]), /* @__PURE__ */ P.createElement("g", {
    tabIndex: -1,
    ref: n,
    className: "recharts-zIndex-layer_".concat(t)
  });
}
function Ey(e) {
  var {
    children: t,
    isPanorama: r
  } = e, n = oe(OT);
  if (!n || n.length === 0)
    return t;
  var i = n.filter((a) => a < 0), o = n.filter((a) => a > 0);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, i.map((a) => /* @__PURE__ */ P.createElement(_y, {
    key: a,
    zIndex: a,
    isPanorama: r
  })), t, o.map((a) => /* @__PURE__ */ P.createElement(_y, {
    key: a,
    zIndex: a,
    isPanorama: r
  })));
}
var bN = ["children"];
function wN(e, t) {
  if (e == null) return {};
  var r, n, i = jN(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function jN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function qa() {
  return qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qa.apply(null, arguments);
}
var SN = {
  width: "100%",
  height: "100%",
  /*
   * display: block is necessary here because the default for an SVG is display: inline,
   * which in some browsers (Chrome) adds a little bit of extra space above and below the SVG
   * to make space for the descender of letters like "g" and "y". This throws off the height calculation
   * and causes the container to grow indefinitely on each render with responsive=true.
   * Display: block removes that extra space.
   *
   * Interestingly, Firefox does not have this problem, but it doesn't hurt to add the style anyway.
   */
  display: "block"
}, ON = /* @__PURE__ */ ut((e, t) => {
  var r = y0(), n = m0(), i = E0();
  if (!dr(r) || !dr(n))
    return null;
  var {
    children: o,
    otherAttributes: a,
    title: l,
    desc: s
  } = e, c, u;
  return a != null && (typeof a.tabIndex == "number" ? c = a.tabIndex : c = i ? 0 : void 0, typeof a.role == "string" ? u = a.role : u = i ? "application" : void 0), /* @__PURE__ */ P.createElement(Hy, qa({}, a, {
    title: l,
    desc: s,
    role: u,
    tabIndex: c,
    width: r,
    height: n,
    style: SN,
    ref: t
  }), o);
}), PN = (e) => {
  var {
    children: t
  } = e, r = oe(ul);
  if (!r)
    return null;
  var {
    width: n,
    height: i,
    y: o,
    x: a
  } = r;
  return /* @__PURE__ */ P.createElement(Hy, {
    width: n,
    height: i,
    x: a,
    y: o
  }, t);
}, ky = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r
  } = e, n = wN(e, bN), i = dt();
  return i ? /* @__PURE__ */ P.createElement(PN, null, /* @__PURE__ */ P.createElement(Ey, {
    isPanorama: !0
  }, r)) : /* @__PURE__ */ P.createElement(ON, qa({
    ref: t
  }, n), /* @__PURE__ */ P.createElement(Ey, {
    isPanorama: !1
  }, r));
});
function CN() {
  var e = $e(), [t, r] = W(null), n = oe(pP);
  return Oe(() => {
    if (t != null) {
      var i = t.getBoundingClientRect(), o = i.width / t.offsetWidth;
      pe(o) && o !== n && e(XO(o));
    }
  }, [t, e, n]), r;
}
function Ay(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ay(Object(r), !0).forEach(function(n) {
      EN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ay(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EN(e, t, r) {
  return (t = kN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kN(e) {
  var t = AN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function AN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Kr() {
  return Kr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kr.apply(null, arguments);
}
var TN = () => (l6(), null);
function Ua(e) {
  if (typeof e == "number")
    return e;
  if (typeof e == "string") {
    var t = parseFloat(e);
    if (!Number.isNaN(t))
      return t;
  }
  return 0;
}
var IN = /* @__PURE__ */ ut((e, t) => {
  var r, n, i = ve(null), [o, a] = W({
    containerWidth: Ua((r = e.style) === null || r === void 0 ? void 0 : r.width),
    containerHeight: Ua((n = e.style) === null || n === void 0 ? void 0 : n.height)
  }), l = Ee((c, u) => {
    a((d) => {
      var p = Math.round(c), h = Math.round(u);
      return d.containerWidth === p && d.containerHeight === h ? d : {
        containerWidth: p,
        containerHeight: h
      };
    });
  }, []), s = Ee((c) => {
    if (typeof t == "function" && t(c), i.current != null && (i.current.disconnect(), i.current = null), c != null && typeof ResizeObserver < "u") {
      var {
        width: u,
        height: d
      } = c.getBoundingClientRect();
      l(u, d);
      var p = (g) => {
        var v = g[0];
        if (v != null) {
          var {
            width: y,
            height: m
          } = v.contentRect;
          l(y, m);
        }
      }, h = new ResizeObserver(p);
      h.observe(c), i.current = h;
    }
  }, [t, l]);
  return Oe(() => () => {
    var c = i.current;
    c?.disconnect();
  }, [l]), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ro, {
    width: o.containerWidth,
    height: o.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: s
  }, e)));
}), MN = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e, [i, o] = W({
    containerWidth: Ua(r),
    containerHeight: Ua(n)
  }), a = Ee((s, c) => {
    o((u) => {
      var d = Math.round(s), p = Math.round(c);
      return u.containerWidth === d && u.containerHeight === p ? u : {
        containerWidth: d,
        containerHeight: p
      };
    });
  }, []), l = Ee((s) => {
    if (typeof t == "function" && t(s), s != null) {
      var {
        width: c,
        height: u
      } = s.getBoundingClientRect();
      a(c, u);
    }
  }, [t, a]);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ro, {
    width: i.containerWidth,
    height: i.containerHeight
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: l
  }, e)));
}), DN = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ro, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: t
  }, e)));
}), NN = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n
  } = e;
  return typeof r == "string" || typeof n == "string" ? /* @__PURE__ */ P.createElement(MN, Kr({}, e, {
    ref: t
  })) : typeof r == "number" && typeof n == "number" ? /* @__PURE__ */ P.createElement(DN, Kr({}, e, {
    width: r,
    height: n,
    ref: t
  })) : /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ro, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement("div", Kr({
    ref: t
  }, e)));
});
function RN(e) {
  return e ? IN : NN;
}
var $N = /* @__PURE__ */ ut((e, t) => {
  var {
    children: r,
    className: n,
    height: i,
    onClick: o,
    onContextMenu: a,
    onDoubleClick: l,
    onMouseDown: s,
    onMouseEnter: c,
    onMouseLeave: u,
    onMouseMove: d,
    onMouseUp: p,
    onTouchEnd: h,
    onTouchMove: g,
    onTouchStart: v,
    style: y,
    width: m,
    responsive: b,
    dispatchTouchEvents: w = !0
  } = e, x = ve(null), S = $e(), [O, C] = W(null), [E, M] = W(null), D = CN(), N = Nu(), _ = N?.width > 0 ? N.width : m, L = N?.height > 0 ? N.height : i, F = Ee((G) => {
    D(G), typeof t == "function" && t(G), C(G), M(G), G != null && (x.current = G);
  }, [D, t, C, M]), Y = Ee((G) => {
    S(tw(G)), S(Vt({
      handler: o,
      reactEvent: G
    }));
  }, [S, o]), Q = Ee((G) => {
    S(hu(G)), S(Vt({
      handler: c,
      reactEvent: G
    }));
  }, [S, c]), ie = Ee((G) => {
    S(Ab()), S(Vt({
      handler: u,
      reactEvent: G
    }));
  }, [S, u]), R = Ee((G) => {
    S(hu(G)), S(Vt({
      handler: d,
      reactEvent: G
    }));
  }, [S, d]), re = Ee(() => {
    S(lw());
  }, [S]), ee = Ee(() => {
    S(sw());
  }, [S]), $ = Ee((G) => {
    S(aw(G.key));
  }, [S]), B = Ee((G) => {
    S(Vt({
      handler: a,
      reactEvent: G
    }));
  }, [S, a]), z = Ee((G) => {
    S(Vt({
      handler: l,
      reactEvent: G
    }));
  }, [S, l]), H = Ee((G) => {
    S(Vt({
      handler: s,
      reactEvent: G
    }));
  }, [S, s]), le = Ee((G) => {
    S(Vt({
      handler: p,
      reactEvent: G
    }));
  }, [S, p]), me = Ee((G) => {
    S(Vt({
      handler: v,
      reactEvent: G
    }));
  }, [S, v]), de = Ee((G) => {
    w && S(dw(G)), S(Vt({
      handler: g,
      reactEvent: G
    }));
  }, [S, w, g]), ue = Ee((G) => {
    S(Vt({
      handler: h,
      reactEvent: G
    }));
  }, [S, h]), X = RN(b);
  return /* @__PURE__ */ P.createElement(Qb.Provider, {
    value: O
  }, /* @__PURE__ */ P.createElement(L2.Provider, {
    value: E
  }, /* @__PURE__ */ P.createElement(X, {
    width: _ ?? y?.width,
    height: L ?? y?.height,
    className: Pe("recharts-wrapper", n),
    style: _N({
      position: "relative",
      cursor: "default",
      width: _,
      height: L
    }, y),
    onClick: Y,
    onContextMenu: B,
    onDoubleClick: z,
    onFocus: re,
    onBlur: ee,
    onKeyDown: $,
    onMouseDown: H,
    onMouseEnter: Q,
    onMouseLeave: ie,
    onMouseMove: R,
    onMouseUp: le,
    onTouchEnd: ue,
    onTouchMove: de,
    onTouchStart: me,
    ref: F
  }, /* @__PURE__ */ P.createElement(TN, null), r)));
}), zN = ["width", "height", "responsive", "children", "className", "style", "compact", "title", "desc"];
function LN(e, t) {
  if (e == null) return {};
  var r, n, i = BN(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  }
  return i;
}
function BN(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
var WN = /* @__PURE__ */ ut((e, t) => {
  var {
    width: r,
    height: n,
    responsive: i,
    children: o,
    className: a,
    style: l,
    compact: s,
    title: c,
    desc: u
  } = e, d = LN(e, zN), p = qt(d);
  return s ? /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(ro, {
    width: r,
    height: n
  }), /* @__PURE__ */ P.createElement(ky, {
    otherAttributes: p,
    title: c,
    desc: u
  }, o)) : /* @__PURE__ */ P.createElement($N, {
    className: a,
    style: l,
    width: r,
    height: n,
    responsive: i ?? !1,
    onClick: e.onClick,
    onMouseLeave: e.onMouseLeave,
    onMouseEnter: e.onMouseEnter,
    onMouseMove: e.onMouseMove,
    onMouseDown: e.onMouseDown,
    onMouseUp: e.onMouseUp,
    onContextMenu: e.onContextMenu,
    onDoubleClick: e.onDoubleClick,
    onTouchStart: e.onTouchStart,
    onTouchMove: e.onTouchMove,
    onTouchEnd: e.onTouchEnd
  }, /* @__PURE__ */ P.createElement(ky, {
    otherAttributes: p,
    title: c,
    desc: u,
    ref: t
  }, /* @__PURE__ */ P.createElement(UM, null, o)));
});
function vu() {
  return vu = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vu.apply(null, arguments);
}
function Ty(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function FN(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ty(Object(r), !0).forEach(function(n) {
      VN(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ty(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VN(e, t, r) {
  return (t = KN(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KN(e) {
  var t = HN(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function HN(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qN = {
  top: 5,
  right: 5,
  bottom: 5,
  left: 5
}, UN = FN({
  accessibilityLayer: !0,
  barCategoryGap: "10%",
  barGap: 4,
  layout: "horizontal",
  margin: qN,
  responsive: !1,
  reverseStackOrder: !1,
  stackOffset: "none",
  syncMethod: "index"
}, pw), vw = /* @__PURE__ */ ut(function(t, r) {
  var n, i = jt(t.categoricalChartProps, UN), {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: s,
    categoricalChartProps: c
  } = t, u = {
    chartName: o,
    defaultTooltipEventType: a,
    validateTooltipEventTypes: l,
    tooltipPayloadSearcher: s,
    eventEmitter: void 0
  };
  return /* @__PURE__ */ P.createElement(hN, {
    preloadedState: {
      options: u
    },
    reduxStoreName: (n = c.id) !== null && n !== void 0 ? n : o
  }, /* @__PURE__ */ P.createElement($M, {
    chartData: c.data
  }), /* @__PURE__ */ P.createElement(gN, {
    layout: i.layout,
    margin: i.margin
  }), /* @__PURE__ */ P.createElement(xN, {
    throttleDelay: i.throttleDelay,
    throttledEvents: i.throttledEvents
  }), /* @__PURE__ */ P.createElement(yN, {
    baseValue: i.baseValue,
    accessibilityLayer: i.accessibilityLayer,
    barCategoryGap: i.barCategoryGap,
    maxBarSize: i.maxBarSize,
    stackOffset: i.stackOffset,
    barGap: i.barGap,
    barSize: i.barSize,
    syncId: i.syncId,
    syncMethod: i.syncMethod,
    className: i.className,
    reverseStackOrder: i.reverseStackOrder
  }), /* @__PURE__ */ P.createElement(WN, vu({}, i, {
    ref: r
  })));
}), YN = ["axis", "item"], GN = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(vw, {
  chartName: "BarChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: YN,
  tooltipPayloadSearcher: e1,
  categoricalChartProps: e,
  ref: t
})), XN = ["axis"], ZN = /* @__PURE__ */ ut((e, t) => /* @__PURE__ */ P.createElement(vw, {
  chartName: "AreaChart",
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: XN,
  tooltipPayloadSearcher: e1,
  categoricalChartProps: e,
  ref: t
}));
const JN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ f.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ f.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ f.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), QN = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: /* @__PURE__ */ f.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), eR = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ f.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ f.jsx("path", { d: "M7 16h10" })
] }), tR = ({ size: e = 24, className: t = "", style: r = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: t, style: r, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ f.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ f.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), Iy = [
  { month: "Aug 25", IP_Count: 2, OP_Count: 19, Therapy_Tests: 0, Lab_Tests: 31 },
  { month: "Sep 25", IP_Count: 20, OP_Count: 385, Therapy_Tests: 33, Lab_Tests: 288 },
  { month: "Oct 25", IP_Count: 25, OP_Count: 430, Therapy_Tests: 56, Lab_Tests: 326 },
  { month: "Nov 25", IP_Count: 47, OP_Count: 522, Therapy_Tests: 64, Lab_Tests: 545 },
  { month: "Dec 25", IP_Count: 22, OP_Count: 459, Therapy_Tests: 51, Lab_Tests: 651 },
  { month: "Jan 26", IP_Count: 46, OP_Count: 445, Therapy_Tests: 21, Lab_Tests: 667 },
  { month: "Feb 26", IP_Count: 39, OP_Count: 532, Therapy_Tests: 51, Lab_Tests: 653 },
  { month: "Mar 26", IP_Count: 37, OP_Count: 529, Therapy_Tests: 40, Lab_Tests: 699, IP_Count_Proj: 37, OP_Count_Proj: 529, Therapy_Tests_Proj: 40, Lab_Tests_Proj: 699 },
  { month: "Apr 26", IP_Count_Proj: 35, OP_Count_Proj: 540, Therapy_Tests_Proj: 45, Lab_Tests_Proj: 710 },
  { month: "May 26", IP_Count_Proj: 38, OP_Count_Proj: 555, Therapy_Tests_Proj: 42, Lab_Tests_Proj: 730 },
  { month: "Jun 26", IP_Count_Proj: 40, OP_Count_Proj: 570, Therapy_Tests_Proj: 48, Lab_Tests_Proj: 745 },
  { month: "Jul 26", IP_Count_Proj: 42, OP_Count_Proj: 590, Therapy_Tests_Proj: 50, Lab_Tests_Proj: 760 },
  { month: "Aug 26", IP_Count_Proj: 45, OP_Count_Proj: 605, Therapy_Tests_Proj: 55, Lab_Tests_Proj: 780 },
  { month: "Sep 26", IP_Count_Proj: 43, OP_Count_Proj: 620, Therapy_Tests_Proj: 58, Lab_Tests_Proj: 795 },
  { month: "Oct 26", IP_Count_Proj: 46, OP_Count_Proj: 640, Therapy_Tests_Proj: 60, Lab_Tests_Proj: 810 },
  { month: "Nov 26", IP_Count_Proj: 50, OP_Count_Proj: 660, Therapy_Tests_Proj: 65, Lab_Tests_Proj: 830 },
  { month: "Dec 26", IP_Count_Proj: 55, OP_Count_Proj: 680, Therapy_Tests_Proj: 70, Lab_Tests_Proj: 850 }
], rR = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: JN },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: QN },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: eR },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: tR }
}, nR = {
  "Aug 25": 31,
  "Sep 25": 30,
  "Oct 25": 31,
  "Nov 25": 30,
  "Dec 25": 31,
  "Jan 26": 31,
  "Feb 26": 28,
  "Mar 26": 31,
  "Apr 26": 30,
  "May 26": 31,
  "Jun 26": 30,
  "Jul 26": 31,
  "Aug 26": 31,
  "Sep 26": 30,
  "Oct 26": 31,
  "Nov 26": 30,
  "Dec 26": 31
}, iR = ({ active: e, payload: t, label: r, metricsConfig: n, daysInMonthMap: i }) => {
  if (e && t && t.length) {
    const o = t.filter((a) => {
      if (a.dataKey.endsWith("_Proj")) {
        const l = a.dataKey.replace("_Proj", "");
        if (t.some((s) => s.dataKey === l)) return !1;
      }
      return !0;
    });
    return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: o.map((a, l) => {
        const s = a.dataKey.endsWith("_Proj"), c = s ? a.dataKey.replace("_Proj", "") : a.dataKey, u = n[c] || { label: c, color: a.color };
        let d = null;
        if (i && i[r]) {
          const p = Math.ceil(a.value / i[r]);
          d = /* @__PURE__ */ f.jsxs("span", { style: { color: "#64748b", fontWeight: 400, fontSize: "10px" }, children: [
            "(DA - ",
            p,
            ")"
          ] });
        }
        return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
          /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
            /* @__PURE__ */ f.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: a.color } }),
            /* @__PURE__ */ f.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
              u.label,
              " ",
              s && /* @__PURE__ */ f.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
            ] })
          ] }),
          /* @__PURE__ */ f.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
            a.value,
            d
          ] })
        ] }, l);
      }) })
    ] });
  }
  return null;
}, g$ = ({
  title: e = "Annual Patient Trends",
  subtitle: t = "Aug 2025 - Dec 2026 Volume & Projections",
  dateRangeBadge: r = "Aug 25 - Dec 26",
  data: n = Iy,
  xAxisKey: i = "month",
  metricsConfig: o = rR,
  referenceLineValue: a = 200,
  referenceLineLabel: l = "Beds (200)",
  daysInMonthMap: s = nR
}) => {
  const c = n ?? Iy, [u, d] = W(() => {
    const h = {};
    return Object.keys(o).forEach((g) => h[g] = !0), h;
  }), p = (h) => {
    d((g) => ({
      ...g,
      [h]: !g[h]
    }));
  };
  return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }),
        t && /* @__PURE__ */ f.jsx("p", { style: { margin: "4px 0 0 0", color: "#64748b", fontSize: "14px" }, children: t })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(o).map(([h, g]) => {
        const v = u[h], y = g.icon;
        return /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => p(h),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              border: "1px solid",
              backgroundColor: v ? "#f1f5f9" : "transparent",
              color: v ? "#0f172a" : "#64748b",
              borderColor: v ? "#cbd5e1" : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              y && /* @__PURE__ */ f.jsx(
                y,
                {
                  size: 14,
                  style: { color: v ? g.color : "currentColor", opacity: v ? 1 : 0.5, transition: "all 0.2s ease-out" }
                }
              ),
              g.shortLabel
            ]
          },
          h
        );
      }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsx(v0, { width: "99%", height: 320, children: /* @__PURE__ */ f.jsxs(
      ZN,
      {
        data: c,
        margin: { top: 20, right: 30, left: -25, bottom: 0 },
        children: [
          /* @__PURE__ */ f.jsx("defs", { children: Object.entries(o).map(([h, g]) => /* @__PURE__ */ f.jsxs("linearGradient", { id: `color${h}`, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ f.jsx("stop", { offset: "5%", stopColor: g.color, stopOpacity: 0.3 }),
            /* @__PURE__ */ f.jsx("stop", { offset: "95%", stopColor: g.color, stopOpacity: 0 })
          ] }, `color${h}`)) }),
          /* @__PURE__ */ f.jsx(Hd, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
          /* @__PURE__ */ f.jsx(
            Yd,
            {
              dataKey: i,
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1
            }
          ),
          /* @__PURE__ */ f.jsx(
            Gd,
            {
              stroke: "#64748b",
              tick: { fill: "#64748b", fontSize: 10 },
              tickMargin: 8,
              axisLine: !1,
              tickLine: !1
            }
          ),
          /* @__PURE__ */ f.jsx(n1, { content: /* @__PURE__ */ f.jsx(iR, { metricsConfig: o, daysInMonthMap: s }) }),
          Number.isFinite(a) && /* @__PURE__ */ f.jsx(
            Fd,
            {
              y: a,
              stroke: "#ef4444",
              strokeDasharray: "4 4",
              label: l ? { position: "insideTopLeft", value: l, fill: "#ef4444", fontSize: 10, fontWeight: 600, offset: 5 } : void 0
            }
          ),
          Object.entries(o).map(([h, g]) => u[h] && /* @__PURE__ */ f.jsxs(r2, { children: [
            /* @__PURE__ */ f.jsx(
              au,
              {
                type: "monotone",
                dataKey: h,
                stroke: g.color,
                strokeWidth: 3,
                fillOpacity: 1,
                fill: `url(#color${h})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: g.color },
                activeDot: { r: 5, strokeWidth: 0, fill: g.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out",
                children: /* @__PURE__ */ f.jsx(Pr, { dataKey: h, position: "top", offset: 6, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } })
              }
            ),
            /* @__PURE__ */ f.jsxs(
              au,
              {
                type: "monotone",
                dataKey: `${h}_Proj`,
                stroke: g.color,
                strokeWidth: 3,
                strokeDasharray: "4 4",
                fillOpacity: 0.3,
                fill: `url(#color${h})`,
                dot: { r: 3, fill: "#ffffff", strokeWidth: 2, stroke: g.color },
                activeDot: { r: 5, strokeWidth: 0, fill: g.color },
                animationDuration: 1e3,
                animationEasing: "ease-in-out",
                children: [
                  /* @__PURE__ */ f.jsx(Pr, { dataKey: `${h}_Proj`, position: "top", offset: 6, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } }),
                  /* @__PURE__ */ f.jsx(
                    Pr,
                    {
                      content: (v) => {
                        const { x: y, y: m, index: b } = v;
                        return b === c.length - 1 ? /* @__PURE__ */ f.jsx(
                          "text",
                          {
                            x: y + 10,
                            y: m,
                            fill: g.color,
                            fontSize: 11,
                            fontWeight: 700,
                            alignmentBaseline: "middle",
                            children: g.shortLabel
                          }
                        ) : null;
                      }
                    }
                  )
                ]
              }
            )
          ] }, h))
        ]
      }
    ) }) }),
    c.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsxs("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: [
        e,
        r && /* @__PURE__ */ f.jsx("span", { style: { fontSize: "9px", fontWeight: 400, color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 6px", borderRadius: "4px" }, children: r })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ f.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          c.map((h, g) => {
            const v = Object.keys(o)[0], y = v && !h.hasOwnProperty(v) && h.hasOwnProperty(`${v}_Proj`);
            return /* @__PURE__ */ f.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: y ? "rgba(241, 245, 249, 0.5)" : "transparent" }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { letterSpacing: "-0.05em" }, children: h[i] }),
              /* @__PURE__ */ f.jsx("div", { style: { marginTop: "2px" }, children: /* @__PURE__ */ f.jsx("span", { style: { padding: "1px 4px", fontSize: "8px", textTransform: "uppercase", fontWeight: 700, borderRadius: "2px", backgroundColor: y ? "#e2e8f0" : "#d1fae5", color: y ? "#64748b" : "#047857", display: "inline-block" }, children: y ? "Prj" : "Act" }) })
            ] }, g);
          })
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: Object.entries(o).map(([h, g]) => u[h] ? /* @__PURE__ */ f.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
          /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: g.shortLabel }),
          c.map((v, y) => {
            const m = v[h] ?? v[`${h}_Proj`], b = !v.hasOwnProperty(h) && v.hasOwnProperty(`${h}_Proj`);
            return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: b ? "#64748b" : "#0f172a", backgroundColor: b ? "rgba(248, 250, 252, 0.3)" : "transparent", fontWeight: b ? 400 : 500 }, children: m !== void 0 ? m : "-" }, y);
          })
        ] }, h) : null) })
      ] }) })
    ] })
  ] }) });
}, oR = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
  /* @__PURE__ */ f.jsx("circle", { cx: "9", cy: "7", r: "4" }),
  /* @__PURE__ */ f.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
  /* @__PURE__ */ f.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
] }), aR = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: /* @__PURE__ */ f.jsx("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" }) }), lR = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a2.5 2.5 0 0 0 2.227 3.45h10.106a2.5 2.5 0 0 0 2.227-3.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" }),
  /* @__PURE__ */ f.jsx("path", { d: "M8.5 2h7" }),
  /* @__PURE__ */ f.jsx("path", { d: "M7 16h10" })
] }), sR = ({ size: e = 24, style: t = {} }) => /* @__PURE__ */ f.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", style: t, children: [
  /* @__PURE__ */ f.jsx("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }),
  /* @__PURE__ */ f.jsx("polyline", { points: "14 2 14 8 20 8" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "13", y2: "13" }),
  /* @__PURE__ */ f.jsx("line", { x1: "16", x2: "8", y1: "17", y2: "17" }),
  /* @__PURE__ */ f.jsx("line", { x1: "10", x2: "8", y1: "9", y2: "9" })
] }), cR = [
  { month: "Aug 25", IP_Count: 2, OP_Count: 19, Therapy_Tests: 0, Lab_Tests: 31 },
  { month: "Sep 25", IP_Count: 20, OP_Count: 385, Therapy_Tests: 33, Lab_Tests: 288 },
  { month: "Oct 25", IP_Count: 25, OP_Count: 430, Therapy_Tests: 56, Lab_Tests: 326 },
  { month: "Nov 25", IP_Count: 47, OP_Count: 522, Therapy_Tests: 64, Lab_Tests: 545 },
  { month: "Dec 25", IP_Count: 22, OP_Count: 459, Therapy_Tests: 51, Lab_Tests: 651 },
  { month: "Jan 26", IP_Count: 46, OP_Count: 445, Therapy_Tests: 21, Lab_Tests: 667 },
  { month: "Feb 26", IP_Count: 39, OP_Count: 532, Therapy_Tests: 51, Lab_Tests: 653 },
  { month: "Mar 26", IP_Count: 37, OP_Count: 529, Therapy_Tests: 40, Lab_Tests: 699, IP_Count_Proj: 37, OP_Count_Proj: 529, Therapy_Tests_Proj: 40, Lab_Tests_Proj: 699 },
  { month: "Apr 26", IP_Count_Proj: 35, OP_Count_Proj: 540, Therapy_Tests_Proj: 45, Lab_Tests_Proj: 710 },
  { month: "May 26", IP_Count_Proj: 38, OP_Count_Proj: 555, Therapy_Tests_Proj: 42, Lab_Tests_Proj: 730 },
  { month: "Jun 26", IP_Count_Proj: 40, OP_Count_Proj: 570, Therapy_Tests_Proj: 48, Lab_Tests_Proj: 745 },
  { month: "Jul 26", IP_Count_Proj: 42, OP_Count_Proj: 590, Therapy_Tests_Proj: 50, Lab_Tests_Proj: 760 },
  { month: "Aug 26", IP_Count_Proj: 45, OP_Count_Proj: 605, Therapy_Tests_Proj: 55, Lab_Tests_Proj: 780 },
  { month: "Sep 26", IP_Count_Proj: 43, OP_Count_Proj: 620, Therapy_Tests_Proj: 58, Lab_Tests_Proj: 795 },
  { month: "Oct 26", IP_Count_Proj: 46, OP_Count_Proj: 640, Therapy_Tests_Proj: 60, Lab_Tests_Proj: 810 },
  { month: "Nov 26", IP_Count_Proj: 50, OP_Count_Proj: 660, Therapy_Tests_Proj: 65, Lab_Tests_Proj: 830 },
  { month: "Dec 26", IP_Count_Proj: 55, OP_Count_Proj: 680, Therapy_Tests_Proj: 70, Lab_Tests_Proj: 850 }
], uR = {
  OP_Count: { label: "Outpatients (OP)", shortLabel: "OP", color: "#10b981", icon: oR },
  IP_Count: { label: "Inpatients (IP)", shortLabel: "IP", color: "#f59e0b", icon: aR },
  Lab_Tests: { label: "Lab Tests", shortLabel: "Lab", color: "#3b82f6", icon: lR },
  Therapy_Tests: { label: "Therapy Tests", shortLabel: "Therapy", color: "#ec4899", icon: sR }
}, dR = {
  "Aug 25": 31,
  "Sep 25": 30,
  "Oct 25": 31,
  "Nov 25": 30,
  "Dec 25": 31,
  "Jan 26": 31,
  "Feb 26": 28,
  "Mar 26": 31,
  "Apr 26": 30,
  "May 26": 31,
  "Jun 26": 30,
  "Jul 26": 31,
  "Aug 26": 31,
  "Sep 26": 30,
  "Oct 26": 31,
  "Nov 26": 30,
  "Dec 26": 31
}, fR = ({ active: e, payload: t, label: r, metricsConfig: n, daysInMonthMap: i }) => {
  if (!e || !t?.length) return null;
  const o = t.filter((a) => {
    if (a.dataKey.endsWith("_Proj")) {
      const l = a.dataKey.replace("_Proj", "");
      if (t.some((s) => s.dataKey === l)) return !1;
    }
    return !0;
  });
  return /* @__PURE__ */ f.jsxs("div", { style: { backgroundColor: "#ffffff", border: "1px solid #e2e8f0", padding: "12px", borderRadius: "8px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)", zIndex: 50, position: "relative", color: "#0f172a" }, children: [
    /* @__PURE__ */ f.jsx("p", { style: { margin: "0 0 8px 0", fontWeight: 600, borderBottom: "1px solid #f1f5f9", paddingBottom: "4px", fontSize: "14px", color: "#1e293b" }, children: r }),
    /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "6px" }, children: o.map((a, l) => {
      const s = a.dataKey.endsWith("_Proj"), c = s ? a.dataKey.replace("_Proj", "") : a.dataKey, u = n[c] || { label: c, color: a.color };
      let d = null;
      if (i?.[r]) {
        const p = Math.ceil(a.value / i[r]);
        d = /* @__PURE__ */ f.jsxs("span", { style: { color: "#64748b", fontWeight: 400, fontSize: "10px" }, children: [
          "(DA - ",
          p,
          ")"
        ] });
      }
      return /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }, children: [
        /* @__PURE__ */ f.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
          /* @__PURE__ */ f.jsx("div", { style: { width: "10px", height: "10px", borderRadius: "9999px", backgroundColor: a.color } }),
          /* @__PURE__ */ f.jsxs("span", { style: { color: "#475569", fontSize: "12px", fontWeight: 500 }, children: [
            u.label,
            " ",
            s && /* @__PURE__ */ f.jsx("span", { style: { color: "#94a3b8", fontSize: "10px", fontStyle: "italic", marginLeft: "2px" }, children: "(Projected)" })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs("span", { style: { color: "#0f172a", fontWeight: 700, fontSize: "14px", display: "flex", alignItems: "baseline", gap: "6px" }, children: [
          a.value,
          " ",
          d
        ] })
      ] }, l);
    }) })
  ] });
}, pR = (e) => {
  const { x: t, y: r, width: n, height: i, fill: o, patternId: a } = e;
  return !i || i <= 0 ? null : /* @__PURE__ */ f.jsx("rect", { x: t, y: r, width: n, height: i, fill: `url(#${a})`, stroke: o, strokeWidth: 1.5, strokeDasharray: "4 2", opacity: 0.7 });
}, y$ = ({
  title: e = "Annual Patient Trends",
  subtitle: t = "Aug 2025 - Dec 2026 Volume & Projections",
  dateRangeBadge: r = "Aug 25 - Dec 26",
  data: n = cR,
  xAxisKey: i = "month",
  metricsConfig: o = uR,
  referenceLineValue: a = 200,
  referenceLineLabel: l = "Beds (200)",
  daysInMonthMap: s = dR
}) => {
  const [c, u] = W(() => {
    const h = {};
    return Object.keys(o).forEach((g) => h[g] = !0), h;
  }), d = (h) => u((g) => ({ ...g, [h]: !g[h] })), p = Object.keys(o).filter((h) => c[h]);
  return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "center", fontFamily: "sans-serif", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsxs("div", { style: { width: "100%", maxWidth: "1400px", backgroundColor: "#ffffff", color: "#0f172a", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", overflow: "hidden", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderBottom: "1px solid #e2e8f0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }, children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsx("h1", { style: { margin: 0, fontSize: "24px", fontWeight: 700, color: "#0f172a" }, children: e }),
        t && /* @__PURE__ */ f.jsx("p", { style: { margin: "4px 0 0 0", color: "#64748b", fontSize: "14px" }, children: t })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexWrap: "wrap", gap: "8px" }, children: Object.entries(o).map(([h, g]) => {
        const v = c[h], y = g.icon;
        return /* @__PURE__ */ f.jsxs(
          "button",
          {
            onClick: () => d(h),
            style: {
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 12px",
              borderRadius: "9999px",
              fontSize: "12px",
              fontWeight: 500,
              cursor: "pointer",
              border: "1px solid",
              backgroundColor: v ? "#f1f5f9" : "transparent",
              color: v ? "#0f172a" : "#64748b",
              borderColor: v ? "#cbd5e1" : "#e2e8f0",
              transition: "all 0.2s ease-out"
            },
            children: [
              y && /* @__PURE__ */ f.jsx(y, { size: 14, style: { color: v ? g.color : "currentColor", opacity: v ? 1 : 0.5, transition: "all 0.2s ease-out" } }),
              g.shortLabel
            ]
          },
          h
        );
      }) })
    ] }),
    /* @__PURE__ */ f.jsx("div", { style: { padding: "16px", minHeight: 320, flexShrink: 0, width: "100%", boxSizing: "border-box" }, children: /* @__PURE__ */ f.jsx(v0, { width: "99%", height: 320, children: /* @__PURE__ */ f.jsxs(GN, { data: n, margin: { top: 20, right: 30, left: -25, bottom: 0 }, barCategoryGap: "20%", barGap: 2, children: [
      /* @__PURE__ */ f.jsx("defs", { children: Object.entries(o).map(([h, g]) => /* @__PURE__ */ f.jsx("pattern", { id: `pat${h}`, patternUnits: "userSpaceOnUse", width: "6", height: "6", patternTransform: "rotate(45)", children: /* @__PURE__ */ f.jsx("rect", { width: "3", height: "6", fill: g.color, fillOpacity: 0.25 }) }, `pat${h}`)) }),
      /* @__PURE__ */ f.jsx(Hd, { strokeDasharray: "3 3", stroke: "#e2e8f0", vertical: !1 }),
      /* @__PURE__ */ f.jsx(Yd, { dataKey: i, stroke: "#64748b", tick: { fill: "#64748b", fontSize: 10 }, tickMargin: 8, axisLine: !1, tickLine: !1 }),
      /* @__PURE__ */ f.jsx(Gd, { stroke: "#64748b", tick: { fill: "#64748b", fontSize: 10 }, tickMargin: 8, axisLine: !1, tickLine: !1 }),
      /* @__PURE__ */ f.jsx(n1, { content: /* @__PURE__ */ f.jsx(fR, { metricsConfig: o, daysInMonthMap: s }) }),
      Number.isFinite(a) && /* @__PURE__ */ f.jsx(
        Fd,
        {
          y: a,
          stroke: "#ef4444",
          strokeDasharray: "4 4",
          label: l ? { position: "insideTopLeft", value: l, fill: "#ef4444", fontSize: 10, fontWeight: 600, offset: 5 } : void 0
        }
      ),
      p.map((h) => {
        const g = o[h];
        return [
          /* @__PURE__ */ f.jsxs(cu, { dataKey: h, fill: g.color, radius: [3, 3, 0, 0], maxBarSize: 18, animationDuration: 1e3, animationEasing: "ease-in-out", children: [
            /* @__PURE__ */ f.jsx(Pr, { dataKey: h, position: "top", offset: 4, style: { fill: "#64748b", fontSize: 9, fontWeight: 600 } }),
            n.map((v, y) => /* @__PURE__ */ f.jsx(zd, { fill: g.color, fillOpacity: v[h] !== void 0 ? 1 : 0 }, y))
          ] }, h),
          /* @__PURE__ */ f.jsx(
            cu,
            {
              dataKey: `${h}_Proj`,
              maxBarSize: 18,
              animationDuration: 1e3,
              animationEasing: "ease-in-out",
              shape: (v) => /* @__PURE__ */ f.jsx(pR, { ...v, fill: g.color, patternId: `pat${h}` }),
              children: /* @__PURE__ */ f.jsx(Pr, { dataKey: `${h}_Proj`, position: "top", offset: 4, style: { fill: "#94a3b8", fontSize: 9, fontWeight: 500 } })
            },
            `${h}_Proj`
          )
        ];
      })
    ] }) }) }),
    n.length > 0 && /* @__PURE__ */ f.jsxs("div", { style: { padding: "16px", borderTop: "1px solid #e2e8f0", color: "#0f172a" }, children: [
      /* @__PURE__ */ f.jsxs("h2", { style: { fontSize: "14px", fontWeight: 700, margin: "0 0 8px 0", display: "flex", alignItems: "center", gap: "8px" }, children: [
        e,
        r && /* @__PURE__ */ f.jsx("span", { style: { fontSize: "9px", fontWeight: 400, color: "#64748b", backgroundColor: "#f1f5f9", padding: "2px 6px", borderRadius: "4px" }, children: r })
      ] }),
      /* @__PURE__ */ f.jsx("div", { style: { overflowX: "auto", boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)", border: "1px solid #e2e8f0", borderRadius: "8px" }, children: /* @__PURE__ */ f.jsxs("table", { style: { width: "100%", fontSize: "12px", textAlign: "left", whiteSpace: "nowrap", borderCollapse: "collapse", tableLayout: "fixed" }, children: [
        /* @__PURE__ */ f.jsx("thead", { style: { fontSize: "10px", color: "#64748b", textTransform: "uppercase", backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }, children: /* @__PURE__ */ f.jsxs("tr", { children: [
          /* @__PURE__ */ f.jsx("th", { style: { padding: "6px 8px", fontWeight: 600, borderRight: "1px solid #e2e8f0", width: "80px", position: "sticky", left: 0, backgroundColor: "#f8fafc", zIndex: 10 }, children: "Metric" }),
          n.map((h, g) => {
            const v = Object.keys(o)[0], y = v && !h.hasOwnProperty(v) && h.hasOwnProperty(`${v}_Proj`);
            return /* @__PURE__ */ f.jsxs("th", { style: { padding: "6px 2px", fontWeight: 600, textAlign: "center", backgroundColor: y ? "rgba(241,245,249,0.5)" : "transparent" }, children: [
              /* @__PURE__ */ f.jsx("div", { style: { letterSpacing: "-0.05em" }, children: h[i] }),
              /* @__PURE__ */ f.jsx("div", { style: { marginTop: "2px" }, children: /* @__PURE__ */ f.jsx("span", { style: { padding: "1px 4px", fontSize: "8px", textTransform: "uppercase", fontWeight: 700, borderRadius: "2px", backgroundColor: y ? "#e2e8f0" : "#d1fae5", color: y ? "#64748b" : "#047857", display: "inline-block" }, children: y ? "Prj" : "Act" }) })
            ] }, g);
          })
        ] }) }),
        /* @__PURE__ */ f.jsx("tbody", { children: Object.entries(o).map(([h, g]) => c[h] ? /* @__PURE__ */ f.jsxs("tr", { style: { borderBottom: "1px solid #f1f5f9" }, children: [
          /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 8px", fontWeight: 500, color: "#0f172a", borderRight: "1px solid #e2e8f0", position: "sticky", left: 0, backgroundColor: "#ffffff", zIndex: 10 }, children: g.shortLabel }),
          n.map((v, y) => {
            const m = v[h] ?? v[`${h}_Proj`], b = !v.hasOwnProperty(h) && v.hasOwnProperty(`${h}_Proj`);
            return /* @__PURE__ */ f.jsx("td", { style: { padding: "4px 2px", textAlign: "center", color: b ? "#64748b" : "#0f172a", backgroundColor: b ? "rgba(248,250,252,0.3)" : "transparent", fontWeight: b ? 400 : 500 }, children: m !== void 0 ? m : "-" }, y);
          })
        ] }, h) : null) })
      ] }) })
    ] })
  ] }) });
};
export {
  KR as AdvanceMapWidget,
  jR as AdvancePrescription,
  WR as AlertWidget,
  PR as BarChart,
  _R as BubbleChart,
  yR as Button,
  DR as DataWidget,
  HR as DonutChart,
  BR as FilterWidget,
  IR as GaugeWidget,
  ER as HeatMap,
  TR as KpiWidget,
  OR as LineChart,
  RR as ListWidget,
  $R as MapWidget,
  LR as MediaWidget,
  Of as NotionTable,
  xR as NotionTableWithLayout,
  CR as PieChart,
  NR as PivotTable,
  MR as ProgressBar,
  bR as ScaffoldTable,
  kR as ScatterPlot,
  wR as SimplePrescription,
  AR as StackedChart,
  qR as StatGrid,
  SR as StatusWidget,
  mR as Table,
  zR as TextWidget,
  VR as Toaster,
  y$ as TrendBarChart,
  g$ as TrendLinechart,
  FR as showToast,
  Ue as useContainerSize
};
