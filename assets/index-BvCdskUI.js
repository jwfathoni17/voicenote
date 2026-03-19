var Yh = (t) => {
  throw TypeError(t);
};
var lu = (t, e, r) => e.has(t) || Yh("Cannot " + r);
var O = (t, e, r) => (
    lu(t, e, "read from private field"), r ? r.call(t) : e.get(t)
  ),
  ce = (t, e, r) =>
    e.has(t)
      ? Yh("Cannot add the same private member more than once")
      : e instanceof WeakSet
      ? e.add(t)
      : e.set(t, r),
  ne = (t, e, r, n) => (
    lu(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r
  ),
  He = (t, e, r) => (lu(t, e, "access private method"), r);
var Go = (t, e, r, n) => ({
  set _(s) {
    ne(t, e, s, r);
  },
  get _() {
    return O(t, e, n);
  },
});
function Ew(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const s in n)
        if (s !== "default" && !(s in t)) {
          const i = Object.getOwnPropertyDescriptor(n, s);
          i &&
            Object.defineProperty(
              t,
              s,
              i.get ? i : { enumerable: !0, get: () => n[s] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) n(s);
  new MutationObserver((s) => {
    for (const i of s)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(s) {
    const i = {};
    return (
      s.integrity && (i.integrity = s.integrity),
      s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function n(s) {
    if (s.ep) return;
    s.ep = !0;
    const i = r(s);
    fetch(s.href, i);
  }
})();
function Km(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var Gm = { exports: {} },
  Tl = {},
  Qm = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Io = Symbol.for("react.element"),
  Cw = Symbol.for("react.portal"),
  Tw = Symbol.for("react.fragment"),
  Rw = Symbol.for("react.strict_mode"),
  Pw = Symbol.for("react.profiler"),
  Ow = Symbol.for("react.provider"),
  Aw = Symbol.for("react.context"),
  Nw = Symbol.for("react.forward_ref"),
  jw = Symbol.for("react.suspense"),
  Iw = Symbol.for("react.memo"),
  $w = Symbol.for("react.lazy"),
  Xh = Symbol.iterator;
function Lw(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Xh && t[Xh]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Jm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Zm = Object.assign,
  Ym = {};
function hi(t, e, r) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ym),
    (this.updater = r || Jm);
}
hi.prototype.isReactComponent = {};
hi.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
hi.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Xm() {}
Xm.prototype = hi.prototype;
function Sd(t, e, r) {
  (this.props = t),
    (this.context = e),
    (this.refs = Ym),
    (this.updater = r || Jm);
}
var Ed = (Sd.prototype = new Xm());
Ed.constructor = Sd;
Zm(Ed, hi.prototype);
Ed.isPureReactComponent = !0;
var ef = Array.isArray,
  eg = Object.prototype.hasOwnProperty,
  Cd = { current: null },
  tg = { key: !0, ref: !0, __self: !0, __source: !0 };
function rg(t, e, r) {
  var n,
    s = {},
    i = null,
    o = null;
  if (e != null)
    for (n in (e.ref !== void 0 && (o = e.ref),
    e.key !== void 0 && (i = "" + e.key),
    e))
      eg.call(e, n) && !tg.hasOwnProperty(n) && (s[n] = e[n]);
  var a = arguments.length - 2;
  if (a === 1) s.children = r;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    s.children = l;
  }
  if (t && t.defaultProps)
    for (n in ((a = t.defaultProps), a)) s[n] === void 0 && (s[n] = a[n]);
  return {
    $$typeof: Io,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: Cd.current,
  };
}
function Mw(t, e) {
  return {
    $$typeof: Io,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Td(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Io;
}
function Dw(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (r) {
      return e[r];
    })
  );
}
var tf = /\/+/g;
function uu(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Dw("" + t.key)
    : e.toString(36);
}
function Ea(t, e, r, n, s) {
  var i = typeof t;
  (i === "undefined" || i === "boolean") && (t = null);
  var o = !1;
  if (t === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Io:
          case Cw:
            o = !0;
        }
    }
  if (o)
    return (
      (o = t),
      (s = s(o)),
      (t = n === "" ? "." + uu(o, 0) : n),
      ef(s)
        ? ((r = ""),
          t != null && (r = t.replace(tf, "$&/") + "/"),
          Ea(s, e, r, "", function (u) {
            return u;
          }))
        : s != null &&
          (Td(s) &&
            (s = Mw(
              s,
              r +
                (!s.key || (o && o.key === s.key)
                  ? ""
                  : ("" + s.key).replace(tf, "$&/") + "/") +
                t
            )),
          e.push(s)),
      1
    );
  if (((o = 0), (n = n === "" ? "." : n + ":"), ef(t)))
    for (var a = 0; a < t.length; a++) {
      i = t[a];
      var l = n + uu(i, a);
      o += Ea(i, e, r, l, s);
    }
  else if (((l = Lw(t)), typeof l == "function"))
    for (t = l.call(t), a = 0; !(i = t.next()).done; )
      (i = i.value), (l = n + uu(i, a++)), (o += Ea(i, e, r, l, s));
  else if (i === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Qo(t, e, r) {
  if (t == null) return t;
  var n = [],
    s = 0;
  return (
    Ea(t, n, "", "", function (i) {
      return e.call(r, i, s++);
    }),
    n
  );
}
function Uw(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = r));
        },
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = r));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var rt = { current: null },
  Ca = { transition: null },
  Fw = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: Ca,
    ReactCurrentOwner: Cd,
  };
function ng() {
  throw Error("act(...) is not supported in production builds of React.");
}
oe.Children = {
  map: Qo,
  forEach: function (t, e, r) {
    Qo(
      t,
      function () {
        e.apply(this, arguments);
      },
      r
    );
  },
  count: function (t) {
    var e = 0;
    return (
      Qo(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      Qo(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Td(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
oe.Component = hi;
oe.Fragment = Tw;
oe.Profiler = Pw;
oe.PureComponent = Sd;
oe.StrictMode = Rw;
oe.Suspense = jw;
oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fw;
oe.act = ng;
oe.cloneElement = function (t, e, r) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var n = Zm({}, t.props),
    s = t.key,
    i = t.ref,
    o = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((i = e.ref), (o = Cd.current)),
      e.key !== void 0 && (s = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var a = t.type.defaultProps;
    for (l in e)
      eg.call(e, l) &&
        !tg.hasOwnProperty(l) &&
        (n[l] = e[l] === void 0 && a !== void 0 ? a[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) n.children = r;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    n.children = a;
  }
  return { $$typeof: Io, type: t.type, key: s, ref: i, props: n, _owner: o };
};
oe.createContext = function (t) {
  return (
    (t = {
      $$typeof: Aw,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Ow, _context: t }),
    (t.Consumer = t)
  );
};
oe.createElement = rg;
oe.createFactory = function (t) {
  var e = rg.bind(null, t);
  return (e.type = t), e;
};
oe.createRef = function () {
  return { current: null };
};
oe.forwardRef = function (t) {
  return { $$typeof: Nw, render: t };
};
oe.isValidElement = Td;
oe.lazy = function (t) {
  return { $$typeof: $w, _payload: { _status: -1, _result: t }, _init: Uw };
};
oe.memo = function (t, e) {
  return { $$typeof: Iw, type: t, compare: e === void 0 ? null : e };
};
oe.startTransition = function (t) {
  var e = Ca.transition;
  Ca.transition = {};
  try {
    t();
  } finally {
    Ca.transition = e;
  }
};
oe.unstable_act = ng;
oe.useCallback = function (t, e) {
  return rt.current.useCallback(t, e);
};
oe.useContext = function (t) {
  return rt.current.useContext(t);
};
oe.useDebugValue = function () {};
oe.useDeferredValue = function (t) {
  return rt.current.useDeferredValue(t);
};
oe.useEffect = function (t, e) {
  return rt.current.useEffect(t, e);
};
oe.useId = function () {
  return rt.current.useId();
};
oe.useImperativeHandle = function (t, e, r) {
  return rt.current.useImperativeHandle(t, e, r);
};
oe.useInsertionEffect = function (t, e) {
  return rt.current.useInsertionEffect(t, e);
};
oe.useLayoutEffect = function (t, e) {
  return rt.current.useLayoutEffect(t, e);
};
oe.useMemo = function (t, e) {
  return rt.current.useMemo(t, e);
};
oe.useReducer = function (t, e, r) {
  return rt.current.useReducer(t, e, r);
};
oe.useRef = function (t) {
  return rt.current.useRef(t);
};
oe.useState = function (t) {
  return rt.current.useState(t);
};
oe.useSyncExternalStore = function (t, e, r) {
  return rt.current.useSyncExternalStore(t, e, r);
};
oe.useTransition = function () {
  return rt.current.useTransition();
};
oe.version = "18.3.1";
Qm.exports = oe;
var b = Qm.exports;
const $ = Km(b),
  sg = Ew({ __proto__: null, default: $ }, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zw = b,
  Bw = Symbol.for("react.element"),
  Ww = Symbol.for("react.fragment"),
  Vw = Object.prototype.hasOwnProperty,
  Hw = zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  qw = { key: !0, ref: !0, __self: !0, __source: !0 };
function ig(t, e, r) {
  var n,
    s = {},
    i = null,
    o = null;
  r !== void 0 && (i = "" + r),
    e.key !== void 0 && (i = "" + e.key),
    e.ref !== void 0 && (o = e.ref);
  for (n in e) Vw.call(e, n) && !qw.hasOwnProperty(n) && (s[n] = e[n]);
  if (t && t.defaultProps)
    for (n in ((e = t.defaultProps), e)) s[n] === void 0 && (s[n] = e[n]);
  return {
    $$typeof: Bw,
    type: t,
    key: i,
    ref: o,
    props: s,
    _owner: Hw.current,
  };
}
Tl.Fragment = Ww;
Tl.jsx = ig;
Tl.jsxs = ig;
Gm.exports = Tl;
var w = Gm.exports,
  og = { exports: {} },
  bt = {},
  ag = { exports: {} },
  lg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(P, A) {
    var j = P.length;
    P.push(A);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        U = P[q];
      if (0 < s(U, A)) (P[q] = A), (P[j] = U), (j = q);
      else break e;
    }
  }
  function r(P) {
    return P.length === 0 ? null : P[0];
  }
  function n(P) {
    if (P.length === 0) return null;
    var A = P[0],
      j = P.pop();
    if (j !== A) {
      P[0] = j;
      e: for (var q = 0, U = P.length, K = U >>> 1; q < K; ) {
        var Z = 2 * (q + 1) - 1,
          he = P[Z],
          Ee = Z + 1,
          ue = P[Ee];
        if (0 > s(he, j))
          Ee < U && 0 > s(ue, he)
            ? ((P[q] = ue), (P[Ee] = j), (q = Ee))
            : ((P[q] = he), (P[Z] = j), (q = Z));
        else if (Ee < U && 0 > s(ue, j)) (P[q] = ue), (P[Ee] = j), (q = Ee);
        else break e;
      }
    }
    return A;
  }
  function s(P, A) {
    var j = P.sortIndex - A.sortIndex;
    return j !== 0 ? j : P.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    t.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      a = o.now();
    t.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    h = null,
    f = 3,
    d = !1,
    v = !1,
    p = !1,
    x = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(P) {
    for (var A = r(u); A !== null; ) {
      if (A.callback === null) n(u);
      else if (A.startTime <= P)
        n(u), (A.sortIndex = A.expirationTime), e(l, A);
      else break;
      A = r(u);
    }
  }
  function _(P) {
    if (((p = !1), y(P), !v))
      if (r(l) !== null) (v = !0), Q(S);
      else {
        var A = r(u);
        A !== null && X(_, A.startTime - P);
      }
  }
  function S(P, A) {
    (v = !1), p && ((p = !1), g(C), (C = -1)), (d = !0);
    var j = f;
    try {
      for (
        y(A), h = r(l);
        h !== null && (!(h.expirationTime > A) || (P && !D()));

      ) {
        var q = h.callback;
        if (typeof q == "function") {
          (h.callback = null), (f = h.priorityLevel);
          var U = q(h.expirationTime <= A);
          (A = t.unstable_now()),
            typeof U == "function" ? (h.callback = U) : h === r(l) && n(l),
            y(A);
        } else n(l);
        h = r(l);
      }
      if (h !== null) var K = !0;
      else {
        var Z = r(u);
        Z !== null && X(_, Z.startTime - A), (K = !1);
      }
      return K;
    } finally {
      (h = null), (f = j), (d = !1);
    }
  }
  var E = !1,
    k = null,
    C = -1,
    T = 5,
    R = -1;
  function D() {
    return !(t.unstable_now() - R < T);
  }
  function L() {
    if (k !== null) {
      var P = t.unstable_now();
      R = P;
      var A = !0;
      try {
        A = k(!0, P);
      } finally {
        A ? H() : ((E = !1), (k = null));
      }
    } else E = !1;
  }
  var H;
  if (typeof m == "function")
    H = function () {
      m(L);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      Y = M.port2;
    (M.port1.onmessage = L),
      (H = function () {
        Y.postMessage(null);
      });
  } else
    H = function () {
      x(L, 0);
    };
  function Q(P) {
    (k = P), E || ((E = !0), H());
  }
  function X(P, A) {
    C = x(function () {
      P(t.unstable_now());
    }, A);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || d || ((v = !0), Q(S));
    }),
    (t.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return r(l);
    }),
    (t.unstable_next = function (P) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = f;
      }
      var j = f;
      f = A;
      try {
        return P();
      } finally {
        f = j;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (P, A) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var j = f;
      f = P;
      try {
        return A();
      } finally {
        f = j;
      }
    }),
    (t.unstable_scheduleCallback = function (P, A, j) {
      var q = t.unstable_now();
      switch (
        (typeof j == "object" && j !== null
          ? ((j = j.delay), (j = typeof j == "number" && 0 < j ? q + j : q))
          : (j = q),
        P)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = j + U),
        (P = {
          id: c++,
          callback: A,
          priorityLevel: P,
          startTime: j,
          expirationTime: U,
          sortIndex: -1,
        }),
        j > q
          ? ((P.sortIndex = j),
            e(u, P),
            r(l) === null &&
              P === r(u) &&
              (p ? (g(C), (C = -1)) : (p = !0), X(_, j - q)))
          : ((P.sortIndex = U), e(l, P), v || d || ((v = !0), Q(S))),
        P
      );
    }),
    (t.unstable_shouldYield = D),
    (t.unstable_wrapCallback = function (P) {
      var A = f;
      return function () {
        var j = f;
        f = A;
        try {
          return P.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})(lg);
ag.exports = lg;
var Kw = ag.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gw = b,
  wt = Kw;
function N(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1;
    r < arguments.length;
    r++
  )
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ug = new Set(),
  Zi = {};
function rs(t, e) {
  Xs(t, e), Xs(t + "Capture", e);
}
function Xs(t, e) {
  for (Zi[t] = e, t = 0; t < e.length; t++) ug.add(e[t]);
}
var br = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Xu = Object.prototype.hasOwnProperty,
  Qw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rf = {},
  nf = {};
function Jw(t) {
  return Xu.call(nf, t)
    ? !0
    : Xu.call(rf, t)
    ? !1
    : Qw.test(t)
    ? (nf[t] = !0)
    : ((rf[t] = !0), !1);
}
function Zw(t, e, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function Yw(t, e, r, n) {
  if (e === null || typeof e > "u" || Zw(t, e, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function nt(t, e, r, n, s, i, o) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = n),
    (this.attributeNamespace = s),
    (this.mustUseProperty = r),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    Ve[t] = new nt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  Ve[e] = new nt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  Ve[t] = new nt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  Ve[t] = new nt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    Ve[t] = new nt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  Ve[t] = new nt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  Ve[t] = new nt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  Ve[t] = new nt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  Ve[t] = new nt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var Rd = /[\-:]([a-z])/g;
function Pd(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Rd, Pd);
    Ve[e] = new nt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(Rd, Pd);
    Ve[e] = new nt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(Rd, Pd);
  Ve[e] = new nt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  Ve[t] = new nt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Ve.xlinkHref = new nt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  Ve[t] = new nt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function Od(t, e, r, n) {
  var s = Ve.hasOwnProperty(e) ? Ve[e] : null;
  (s !== null
    ? s.type !== 0
    : n ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Yw(e, r, s, n) && (r = null),
    n || s === null
      ? Jw(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r))
      : s.mustUseProperty
      ? (t[s.propertyName] = r === null ? (s.type === 3 ? !1 : "") : r)
      : ((e = s.attributeName),
        (n = s.attributeNamespace),
        r === null
          ? t.removeAttribute(e)
          : ((s = s.type),
            (r = s === 3 || (s === 4 && r === !0) ? "" : "" + r),
            n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))));
}
var Rr = Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jo = Symbol.for("react.element"),
  _s = Symbol.for("react.portal"),
  ks = Symbol.for("react.fragment"),
  Ad = Symbol.for("react.strict_mode"),
  ec = Symbol.for("react.profiler"),
  cg = Symbol.for("react.provider"),
  dg = Symbol.for("react.context"),
  Nd = Symbol.for("react.forward_ref"),
  tc = Symbol.for("react.suspense"),
  rc = Symbol.for("react.suspense_list"),
  jd = Symbol.for("react.memo"),
  Fr = Symbol.for("react.lazy"),
  hg = Symbol.for("react.offscreen"),
  sf = Symbol.iterator;
function _i(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (sf && t[sf]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Se = Object.assign,
  cu;
function ji(t) {
  if (cu === void 0)
    try {
      throw Error();
    } catch (r) {
      var e = r.stack.trim().match(/\n( *(at )?)/);
      cu = (e && e[1]) || "";
    }
  return (
    `
` +
    cu +
    t
  );
}
var du = !1;
function hu(t, e) {
  if (!t || du) return "";
  du = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (u) {
          n = u;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      t();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var s = u.stack.split(`
`),
          i = n.stack.split(`
`),
          o = s.length - 1,
          a = i.length - 1;
        1 <= o && 0 <= a && s[o] !== i[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (s[o] !== i[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || s[o] !== i[a])) {
                var l =
                  `
` + s[o].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", t.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (du = !1), (Error.prepareStackTrace = r);
  }
  return (t = t ? t.displayName || t.name : "") ? ji(t) : "";
}
function Xw(t) {
  switch (t.tag) {
    case 5:
      return ji(t.type);
    case 16:
      return ji("Lazy");
    case 13:
      return ji("Suspense");
    case 19:
      return ji("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = hu(t.type, !1)), t;
    case 11:
      return (t = hu(t.type.render, !1)), t;
    case 1:
      return (t = hu(t.type, !0)), t;
    default:
      return "";
  }
}
function nc(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case ks:
      return "Fragment";
    case _s:
      return "Portal";
    case ec:
      return "Profiler";
    case Ad:
      return "StrictMode";
    case tc:
      return "Suspense";
    case rc:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case dg:
        return (t.displayName || "Context") + ".Consumer";
      case cg:
        return (t._context.displayName || "Context") + ".Provider";
      case Nd:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case jd:
        return (
          (e = t.displayName || null), e !== null ? e : nc(t.type) || "Memo"
        );
      case Fr:
        (e = t._payload), (t = t._init);
        try {
          return nc(t(e));
        } catch {}
    }
  return null;
}
function ex(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return nc(e);
    case 8:
      return e === Ad ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function fn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function fg(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function tx(t) {
  var e = fg(t) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    n = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var s = r.get,
      i = r.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (o) {
          (n = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(t, e, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (o) {
          n = "" + o;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Zo(t) {
  t._valueTracker || (t._valueTracker = tx(t));
}
function pg(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var r = e.getValue(),
    n = "";
  return (
    t && (n = fg(t) ? (t.checked ? "true" : "false") : t.value),
    (t = n),
    t !== r ? (e.setValue(t), !0) : !1
  );
}
function Fa(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function sc(t, e) {
  var r = e.checked;
  return Se({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? t._wrapperState.initialChecked,
  });
}
function of(t, e) {
  var r = e.defaultValue == null ? "" : e.defaultValue,
    n = e.checked != null ? e.checked : e.defaultChecked;
  (r = fn(e.value != null ? e.value : r)),
    (t._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function mg(t, e) {
  (e = e.checked), e != null && Od(t, "checked", e, !1);
}
function ic(t, e) {
  mg(t, e);
  var r = fn(e.value),
    n = e.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && t.value === "") || t.value != r) && (t.value = "" + r)
      : t.value !== "" + r && (t.value = "" + r);
  else if (n === "submit" || n === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? oc(t, e.type, r)
    : e.hasOwnProperty("defaultValue") && oc(t, e.type, fn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function af(t, e, r) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      r || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (r = t.name),
    r !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    r !== "" && (t.name = r);
}
function oc(t, e, r) {
  (e !== "number" || Fa(t.ownerDocument) !== t) &&
    (r == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
}
var Ii = Array.isArray;
function $s(t, e, r, n) {
  if (((t = t.options), e)) {
    e = {};
    for (var s = 0; s < r.length; s++) e["$" + r[s]] = !0;
    for (r = 0; r < t.length; r++)
      (s = e.hasOwnProperty("$" + t[r].value)),
        t[r].selected !== s && (t[r].selected = s),
        s && n && (t[r].defaultSelected = !0);
  } else {
    for (r = "" + fn(r), e = null, s = 0; s < t.length; s++) {
      if (t[s].value === r) {
        (t[s].selected = !0), n && (t[s].defaultSelected = !0);
        return;
      }
      e !== null || t[s].disabled || (e = t[s]);
    }
    e !== null && (e.selected = !0);
  }
}
function ac(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(N(91));
  return Se({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function lf(t, e) {
  var r = e.value;
  if (r == null) {
    if (((r = e.children), (e = e.defaultValue), r != null)) {
      if (e != null) throw Error(N(92));
      if (Ii(r)) {
        if (1 < r.length) throw Error(N(93));
        r = r[0];
      }
      e = r;
    }
    e == null && (e = ""), (r = e);
  }
  t._wrapperState = { initialValue: fn(r) };
}
function gg(t, e) {
  var r = fn(e.value),
    n = fn(e.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== t.value && (t.value = r),
    e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    n != null && (t.defaultValue = "" + n);
}
function uf(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function yg(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lc(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? yg(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var Yo,
  vg = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, r, n, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, r, n, s);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        Yo = Yo || document.createElement("div"),
          Yo.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = Yo.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Yi(t, e) {
  if (e) {
    var r = t.firstChild;
    if (r && r === t.lastChild && r.nodeType === 3) {
      r.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  rx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ui).forEach(function (t) {
  rx.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ui[e] = Ui[t]);
  });
});
function wg(t, e, r) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : r || typeof e != "number" || e === 0 || (Ui.hasOwnProperty(t) && Ui[t])
    ? ("" + e).trim()
    : e + "px";
}
function xg(t, e) {
  t = t.style;
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        s = wg(r, e[r], n);
      r === "float" && (r = "cssFloat"), n ? t.setProperty(r, s) : (t[r] = s);
    }
}
var nx = Se(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function uc(t, e) {
  if (e) {
    if (nx[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(N(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(N(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(N(62));
  }
}
function cc(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var dc = null;
function Id(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var hc = null,
  Ls = null,
  Ms = null;
function cf(t) {
  if ((t = Mo(t))) {
    if (typeof hc != "function") throw Error(N(280));
    var e = t.stateNode;
    e && ((e = Nl(e)), hc(t.stateNode, t.type, e));
  }
}
function bg(t) {
  Ls ? (Ms ? Ms.push(t) : (Ms = [t])) : (Ls = t);
}
function _g() {
  if (Ls) {
    var t = Ls,
      e = Ms;
    if (((Ms = Ls = null), cf(t), e)) for (t = 0; t < e.length; t++) cf(e[t]);
  }
}
function kg(t, e) {
  return t(e);
}
function Sg() {}
var fu = !1;
function Eg(t, e, r) {
  if (fu) return t(e, r);
  fu = !0;
  try {
    return kg(t, e, r);
  } finally {
    (fu = !1), (Ls !== null || Ms !== null) && (Sg(), _g());
  }
}
function Xi(t, e) {
  var r = t.stateNode;
  if (r === null) return null;
  var n = Nl(r);
  if (n === null) return null;
  r = n[e];
  e: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((t = t.type),
        (n = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !n);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (r && typeof r != "function") throw Error(N(231, e, typeof r));
  return r;
}
var fc = !1;
if (br)
  try {
    var ki = {};
    Object.defineProperty(ki, "passive", {
      get: function () {
        fc = !0;
      },
    }),
      window.addEventListener("test", ki, ki),
      window.removeEventListener("test", ki, ki);
  } catch {
    fc = !1;
  }
function sx(t, e, r, n, s, i, o, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(r, u);
  } catch (c) {
    this.onError(c);
  }
}
var Fi = !1,
  za = null,
  Ba = !1,
  pc = null,
  ix = {
    onError: function (t) {
      (Fi = !0), (za = t);
    },
  };
function ox(t, e, r, n, s, i, o, a, l) {
  (Fi = !1), (za = null), sx.apply(ix, arguments);
}
function ax(t, e, r, n, s, i, o, a, l) {
  if ((ox.apply(this, arguments), Fi)) {
    if (Fi) {
      var u = za;
      (Fi = !1), (za = null);
    } else throw Error(N(198));
    Ba || ((Ba = !0), (pc = u));
  }
}
function ns(t) {
  var e = t,
    r = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (r = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? r : null;
}
function Cg(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function df(t) {
  if (ns(t) !== t) throw Error(N(188));
}
function lx(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = ns(t)), e === null)) throw Error(N(188));
    return e !== t ? null : t;
  }
  for (var r = t, n = e; ; ) {
    var s = r.return;
    if (s === null) break;
    var i = s.alternate;
    if (i === null) {
      if (((n = s.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (s.child === i.child) {
      for (i = s.child; i; ) {
        if (i === r) return df(s), t;
        if (i === n) return df(s), e;
        i = i.sibling;
      }
      throw Error(N(188));
    }
    if (r.return !== n.return) (r = s), (n = i);
    else {
      for (var o = !1, a = s.child; a; ) {
        if (a === r) {
          (o = !0), (r = s), (n = i);
          break;
        }
        if (a === n) {
          (o = !0), (n = s), (r = i);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = i.child; a; ) {
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(N(189));
      }
    }
    if (r.alternate !== n) throw Error(N(190));
  }
  if (r.tag !== 3) throw Error(N(188));
  return r.stateNode.current === r ? t : e;
}
function Tg(t) {
  return (t = lx(t)), t !== null ? Rg(t) : null;
}
function Rg(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = Rg(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Pg = wt.unstable_scheduleCallback,
  hf = wt.unstable_cancelCallback,
  ux = wt.unstable_shouldYield,
  cx = wt.unstable_requestPaint,
  Oe = wt.unstable_now,
  dx = wt.unstable_getCurrentPriorityLevel,
  $d = wt.unstable_ImmediatePriority,
  Og = wt.unstable_UserBlockingPriority,
  Wa = wt.unstable_NormalPriority,
  hx = wt.unstable_LowPriority,
  Ag = wt.unstable_IdlePriority,
  Rl = null,
  ir = null;
function fx(t) {
  if (ir && typeof ir.onCommitFiberRoot == "function")
    try {
      ir.onCommitFiberRoot(Rl, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var qt = Math.clz32 ? Math.clz32 : gx,
  px = Math.log,
  mx = Math.LN2;
function gx(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((px(t) / mx) | 0)) | 0;
}
var Xo = 64,
  ea = 4194304;
function $i(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Va(t, e) {
  var r = t.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    s = t.suspendedLanes,
    i = t.pingedLanes,
    o = r & 268435455;
  if (o !== 0) {
    var a = o & ~s;
    a !== 0 ? (n = $i(a)) : ((i &= o), i !== 0 && (n = $i(i)));
  } else (o = r & ~s), o !== 0 ? (n = $i(o)) : i !== 0 && (n = $i(i));
  if (n === 0) return 0;
  if (
    e !== 0 &&
    e !== n &&
    !(e & s) &&
    ((s = n & -n), (i = e & -e), s >= i || (s === 16 && (i & 4194240) !== 0))
  )
    return e;
  if ((n & 4 && (n |= r & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= n; 0 < e; )
      (r = 31 - qt(e)), (s = 1 << r), (n |= t[r]), (e &= ~s);
  return n;
}
function yx(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vx(t, e) {
  for (
    var r = t.suspendedLanes,
      n = t.pingedLanes,
      s = t.expirationTimes,
      i = t.pendingLanes;
    0 < i;

  ) {
    var o = 31 - qt(i),
      a = 1 << o,
      l = s[o];
    l === -1
      ? (!(a & r) || a & n) && (s[o] = yx(a, e))
      : l <= e && (t.expiredLanes |= a),
      (i &= ~a);
  }
}
function mc(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function Ng() {
  var t = Xo;
  return (Xo <<= 1), !(Xo & 4194240) && (Xo = 64), t;
}
function pu(t) {
  for (var e = [], r = 0; 31 > r; r++) e.push(t);
  return e;
}
function $o(t, e, r) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - qt(e)),
    (t[e] = r);
}
function wx(t, e) {
  var r = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var n = t.eventTimes;
  for (t = t.expirationTimes; 0 < r; ) {
    var s = 31 - qt(r),
      i = 1 << s;
    (e[s] = 0), (n[s] = -1), (t[s] = -1), (r &= ~i);
  }
}
function Ld(t, e) {
  var r = (t.entangledLanes |= e);
  for (t = t.entanglements; r; ) {
    var n = 31 - qt(r),
      s = 1 << n;
    (s & e) | (t[n] & e) && (t[n] |= e), (r &= ~s);
  }
}
var fe = 0;
function jg(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ig,
  Md,
  $g,
  Lg,
  Mg,
  gc = !1,
  ta = [],
  rn = null,
  nn = null,
  sn = null,
  eo = new Map(),
  to = new Map(),
  Vr = [],
  xx =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ff(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      nn = null;
      break;
    case "mouseover":
    case "mouseout":
      sn = null;
      break;
    case "pointerover":
    case "pointerout":
      eo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      to.delete(e.pointerId);
  }
}
function Si(t, e, r, n, s, i) {
  return t === null || t.nativeEvent !== i
    ? ((t = {
        blockedOn: e,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: i,
        targetContainers: [s],
      }),
      e !== null && ((e = Mo(e)), e !== null && Md(e)),
      t)
    : ((t.eventSystemFlags |= n),
      (e = t.targetContainers),
      s !== null && e.indexOf(s) === -1 && e.push(s),
      t);
}
function bx(t, e, r, n, s) {
  switch (e) {
    case "focusin":
      return (rn = Si(rn, t, e, r, n, s)), !0;
    case "dragenter":
      return (nn = Si(nn, t, e, r, n, s)), !0;
    case "mouseover":
      return (sn = Si(sn, t, e, r, n, s)), !0;
    case "pointerover":
      var i = s.pointerId;
      return eo.set(i, Si(eo.get(i) || null, t, e, r, n, s)), !0;
    case "gotpointercapture":
      return (
        (i = s.pointerId), to.set(i, Si(to.get(i) || null, t, e, r, n, s)), !0
      );
  }
  return !1;
}
function Dg(t) {
  var e = Ln(t.target);
  if (e !== null) {
    var r = ns(e);
    if (r !== null) {
      if (((e = r.tag), e === 13)) {
        if (((e = Cg(r)), e !== null)) {
          (t.blockedOn = e),
            Mg(t.priority, function () {
              $g(r);
            });
          return;
        }
      } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Ta(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var r = yc(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (r === null) {
      r = t.nativeEvent;
      var n = new r.constructor(r.type, r);
      (dc = n), r.target.dispatchEvent(n), (dc = null);
    } else return (e = Mo(r)), e !== null && Md(e), (t.blockedOn = r), !1;
    e.shift();
  }
  return !0;
}
function pf(t, e, r) {
  Ta(t) && r.delete(e);
}
function _x() {
  (gc = !1),
    rn !== null && Ta(rn) && (rn = null),
    nn !== null && Ta(nn) && (nn = null),
    sn !== null && Ta(sn) && (sn = null),
    eo.forEach(pf),
    to.forEach(pf);
}
function Ei(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    gc ||
      ((gc = !0),
      wt.unstable_scheduleCallback(wt.unstable_NormalPriority, _x)));
}
function ro(t) {
  function e(s) {
    return Ei(s, t);
  }
  if (0 < ta.length) {
    Ei(ta[0], t);
    for (var r = 1; r < ta.length; r++) {
      var n = ta[r];
      n.blockedOn === t && (n.blockedOn = null);
    }
  }
  for (
    rn !== null && Ei(rn, t),
      nn !== null && Ei(nn, t),
      sn !== null && Ei(sn, t),
      eo.forEach(e),
      to.forEach(e),
      r = 0;
    r < Vr.length;
    r++
  )
    (n = Vr[r]), n.blockedOn === t && (n.blockedOn = null);
  for (; 0 < Vr.length && ((r = Vr[0]), r.blockedOn === null); )
    Dg(r), r.blockedOn === null && Vr.shift();
}
var Ds = Rr.ReactCurrentBatchConfig,
  Ha = !0;
function kx(t, e, r, n) {
  var s = fe,
    i = Ds.transition;
  Ds.transition = null;
  try {
    (fe = 1), Dd(t, e, r, n);
  } finally {
    (fe = s), (Ds.transition = i);
  }
}
function Sx(t, e, r, n) {
  var s = fe,
    i = Ds.transition;
  Ds.transition = null;
  try {
    (fe = 4), Dd(t, e, r, n);
  } finally {
    (fe = s), (Ds.transition = i);
  }
}
function Dd(t, e, r, n) {
  if (Ha) {
    var s = yc(t, e, r, n);
    if (s === null) Su(t, e, n, qa, r), ff(t, n);
    else if (bx(s, t, e, r, n)) n.stopPropagation();
    else if ((ff(t, n), e & 4 && -1 < xx.indexOf(t))) {
      for (; s !== null; ) {
        var i = Mo(s);
        if (
          (i !== null && Ig(i),
          (i = yc(t, e, r, n)),
          i === null && Su(t, e, n, qa, r),
          i === s)
        )
          break;
        s = i;
      }
      s !== null && n.stopPropagation();
    } else Su(t, e, n, null, r);
  }
}
var qa = null;
function yc(t, e, r, n) {
  if (((qa = null), (t = Id(n)), (t = Ln(t)), t !== null))
    if (((e = ns(t)), e === null)) t = null;
    else if (((r = e.tag), r === 13)) {
      if (((t = Cg(e)), t !== null)) return t;
      t = null;
    } else if (r === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (qa = t), null;
}
function Ug(t) {
  switch (t) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (dx()) {
        case $d:
          return 1;
        case Og:
          return 4;
        case Wa:
        case hx:
          return 16;
        case Ag:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Yr = null,
  Ud = null,
  Ra = null;
function Fg() {
  if (Ra) return Ra;
  var t,
    e = Ud,
    r = e.length,
    n,
    s = "value" in Yr ? Yr.value : Yr.textContent,
    i = s.length;
  for (t = 0; t < r && e[t] === s[t]; t++);
  var o = r - t;
  for (n = 1; n <= o && e[r - n] === s[i - n]; n++);
  return (Ra = s.slice(t, 1 < n ? 1 - n : void 0));
}
function Pa(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ra() {
  return !0;
}
function mf() {
  return !1;
}
function _t(t) {
  function e(r, n, s, i, o) {
    (this._reactName = r),
      (this._targetInst = s),
      (this.type = n),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in t)
      t.hasOwnProperty(a) && ((r = t[a]), (this[a] = r ? r(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? ra
        : mf),
      (this.isPropagationStopped = mf),
      this
    );
  }
  return (
    Se(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = ra));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = ra));
      },
      persist: function () {},
      isPersistent: ra,
    }),
    e
  );
}
var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fd = _t(fi),
  Lo = Se({}, fi, { view: 0, detail: 0 }),
  Ex = _t(Lo),
  mu,
  gu,
  Ci,
  Pl = Se({}, Lo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ci &&
            (Ci && t.type === "mousemove"
              ? ((mu = t.screenX - Ci.screenX), (gu = t.screenY - Ci.screenY))
              : (gu = mu = 0),
            (Ci = t)),
          mu);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : gu;
    },
  }),
  gf = _t(Pl),
  Cx = Se({}, Pl, { dataTransfer: 0 }),
  Tx = _t(Cx),
  Rx = Se({}, Lo, { relatedTarget: 0 }),
  yu = _t(Rx),
  Px = Se({}, fi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ox = _t(Px),
  Ax = Se({}, fi, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Nx = _t(Ax),
  jx = Se({}, fi, { data: 0 }),
  yf = _t(jx),
  Ix = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  $x = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Lx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Mx(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Lx[t]) ? !!e[t] : !1;
}
function zd() {
  return Mx;
}
var Dx = Se({}, Lo, {
    key: function (t) {
      if (t.key) {
        var e = Ix[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Pa(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? $x[t.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (t) {
      return t.type === "keypress" ? Pa(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Pa(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  Ux = _t(Dx),
  Fx = Se({}, Pl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  vf = _t(Fx),
  zx = Se({}, Lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Bx = _t(zx),
  Wx = Se({}, fi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vx = _t(Wx),
  Hx = Se({}, Pl, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qx = _t(Hx),
  Kx = [9, 13, 27, 32],
  Bd = br && "CompositionEvent" in window,
  zi = null;
br && "documentMode" in document && (zi = document.documentMode);
var Gx = br && "TextEvent" in window && !zi,
  zg = br && (!Bd || (zi && 8 < zi && 11 >= zi)),
  wf = " ",
  xf = !1;
function Bg(t, e) {
  switch (t) {
    case "keyup":
      return Kx.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Wg(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Ss = !1;
function Qx(t, e) {
  switch (t) {
    case "compositionend":
      return Wg(e);
    case "keypress":
      return e.which !== 32 ? null : ((xf = !0), wf);
    case "textInput":
      return (t = e.data), t === wf && xf ? null : t;
    default:
      return null;
  }
}
function Jx(t, e) {
  if (Ss)
    return t === "compositionend" || (!Bd && Bg(t, e))
      ? ((t = Fg()), (Ra = Ud = Yr = null), (Ss = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return zg && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Zx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function bf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!Zx[t.type] : e === "textarea";
}
function Vg(t, e, r, n) {
  bg(n),
    (e = Ka(e, "onChange")),
    0 < e.length &&
      ((r = new Fd("onChange", "change", null, r, n)),
      t.push({ event: r, listeners: e }));
}
var Bi = null,
  no = null;
function Yx(t) {
  ty(t, 0);
}
function Ol(t) {
  var e = Ts(t);
  if (pg(e)) return t;
}
function Xx(t, e) {
  if (t === "change") return e;
}
var Hg = !1;
if (br) {
  var vu;
  if (br) {
    var wu = "oninput" in document;
    if (!wu) {
      var _f = document.createElement("div");
      _f.setAttribute("oninput", "return;"),
        (wu = typeof _f.oninput == "function");
    }
    vu = wu;
  } else vu = !1;
  Hg = vu && (!document.documentMode || 9 < document.documentMode);
}
function kf() {
  Bi && (Bi.detachEvent("onpropertychange", qg), (no = Bi = null));
}
function qg(t) {
  if (t.propertyName === "value" && Ol(no)) {
    var e = [];
    Vg(e, no, t, Id(t)), Eg(Yx, e);
  }
}
function eb(t, e, r) {
  t === "focusin"
    ? (kf(), (Bi = e), (no = r), Bi.attachEvent("onpropertychange", qg))
    : t === "focusout" && kf();
}
function tb(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Ol(no);
}
function rb(t, e) {
  if (t === "click") return Ol(e);
}
function nb(t, e) {
  if (t === "input" || t === "change") return Ol(e);
}
function sb(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Gt = typeof Object.is == "function" ? Object.is : sb;
function so(t, e) {
  if (Gt(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var r = Object.keys(t),
    n = Object.keys(e);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var s = r[n];
    if (!Xu.call(e, s) || !Gt(t[s], e[s])) return !1;
  }
  return !0;
}
function Sf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Ef(t, e) {
  var r = Sf(t);
  t = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = t + r.textContent.length), t <= e && n >= e))
        return { node: r, offset: e - t };
      t = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = Sf(r);
  }
}
function Kg(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Kg(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Gg() {
  for (var t = window, e = Fa(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var r = typeof e.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) t = e.contentWindow;
    else break;
    e = Fa(t.document);
  }
  return e;
}
function Wd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function ib(t) {
  var e = Gg(),
    r = t.focusedElem,
    n = t.selectionRange;
  if (
    e !== r &&
    r &&
    r.ownerDocument &&
    Kg(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && Wd(r)) {
      if (
        ((e = n.start),
        (t = n.end),
        t === void 0 && (t = e),
        "selectionStart" in r)
      )
        (r.selectionStart = e), (r.selectionEnd = Math.min(t, r.value.length));
      else if (
        ((t = ((e = r.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var s = r.textContent.length,
          i = Math.min(n.start, s);
        (n = n.end === void 0 ? i : Math.min(n.end, s)),
          !t.extend && i > n && ((s = n), (n = i), (i = s)),
          (s = Ef(r, i));
        var o = Ef(r, n);
        s &&
          o &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== s.node ||
            t.anchorOffset !== s.offset ||
            t.focusNode !== o.node ||
            t.focusOffset !== o.offset) &&
          ((e = e.createRange()),
          e.setStart(s.node, s.offset),
          t.removeAllRanges(),
          i > n
            ? (t.addRange(e), t.extend(o.node, o.offset))
            : (e.setEnd(o.node, o.offset), t.addRange(e)));
      }
    }
    for (e = [], t = r; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++)
      (t = e[r]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var ob = br && "documentMode" in document && 11 >= document.documentMode,
  Es = null,
  vc = null,
  Wi = null,
  wc = !1;
function Cf(t, e, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  wc ||
    Es == null ||
    Es !== Fa(n) ||
    ((n = Es),
    "selectionStart" in n && Wd(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Wi && so(Wi, n)) ||
      ((Wi = n),
      (n = Ka(vc, "onSelect")),
      0 < n.length &&
        ((e = new Fd("onSelect", "select", null, e, r)),
        t.push({ event: e, listeners: n }),
        (e.target = Es))));
}
function na(t, e) {
  var r = {};
  return (
    (r[t.toLowerCase()] = e.toLowerCase()),
    (r["Webkit" + t] = "webkit" + e),
    (r["Moz" + t] = "moz" + e),
    r
  );
}
var Cs = {
    animationend: na("Animation", "AnimationEnd"),
    animationiteration: na("Animation", "AnimationIteration"),
    animationstart: na("Animation", "AnimationStart"),
    transitionend: na("Transition", "TransitionEnd"),
  },
  xu = {},
  Qg = {};
br &&
  ((Qg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cs.animationend.animation,
    delete Cs.animationiteration.animation,
    delete Cs.animationstart.animation),
  "TransitionEvent" in window || delete Cs.transitionend.transition);
function Al(t) {
  if (xu[t]) return xu[t];
  if (!Cs[t]) return t;
  var e = Cs[t],
    r;
  for (r in e) if (e.hasOwnProperty(r) && r in Qg) return (xu[t] = e[r]);
  return t;
}
var Jg = Al("animationend"),
  Zg = Al("animationiteration"),
  Yg = Al("animationstart"),
  Xg = Al("transitionend"),
  ey = new Map(),
  Tf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bn(t, e) {
  ey.set(t, e), rs(e, [t]);
}
for (var bu = 0; bu < Tf.length; bu++) {
  var _u = Tf[bu],
    ab = _u.toLowerCase(),
    lb = _u[0].toUpperCase() + _u.slice(1);
  bn(ab, "on" + lb);
}
bn(Jg, "onAnimationEnd");
bn(Zg, "onAnimationIteration");
bn(Yg, "onAnimationStart");
bn("dblclick", "onDoubleClick");
bn("focusin", "onFocus");
bn("focusout", "onBlur");
bn(Xg, "onTransitionEnd");
Xs("onMouseEnter", ["mouseout", "mouseover"]);
Xs("onMouseLeave", ["mouseout", "mouseover"]);
Xs("onPointerEnter", ["pointerout", "pointerover"]);
Xs("onPointerLeave", ["pointerout", "pointerover"]);
rs(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rs(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rs("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rs(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rs(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rs(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Li =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  ub = new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));
function Rf(t, e, r) {
  var n = t.type || "unknown-event";
  (t.currentTarget = r), ax(n, e, void 0, t), (t.currentTarget = null);
}
function ty(t, e) {
  e = (e & 4) !== 0;
  for (var r = 0; r < t.length; r++) {
    var n = t[r],
      s = n.event;
    n = n.listeners;
    e: {
      var i = void 0;
      if (e)
        for (var o = n.length - 1; 0 <= o; o--) {
          var a = n[o],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
          Rf(s, a, u), (i = l);
        }
      else
        for (o = 0; o < n.length; o++) {
          if (
            ((a = n[o]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== i && s.isPropagationStopped())
          )
            break e;
          Rf(s, a, u), (i = l);
        }
    }
  }
  if (Ba) throw ((t = pc), (Ba = !1), (pc = null), t);
}
function ve(t, e) {
  var r = e[Sc];
  r === void 0 && (r = e[Sc] = new Set());
  var n = t + "__bubble";
  r.has(n) || (ry(e, t, 2, !1), r.add(n));
}
function ku(t, e, r) {
  var n = 0;
  e && (n |= 4), ry(r, t, n, e);
}
var sa = "_reactListening" + Math.random().toString(36).slice(2);
function io(t) {
  if (!t[sa]) {
    (t[sa] = !0),
      ug.forEach(function (r) {
        r !== "selectionchange" && (ub.has(r) || ku(r, !1, t), ku(r, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[sa] || ((e[sa] = !0), ku("selectionchange", !1, e));
  }
}
function ry(t, e, r, n) {
  switch (Ug(e)) {
    case 1:
      var s = kx;
      break;
    case 4:
      s = Sx;
      break;
    default:
      s = Dd;
  }
  (r = s.bind(null, e, r, t)),
    (s = void 0),
    !fc ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (s = !0),
    n
      ? s !== void 0
        ? t.addEventListener(e, r, { capture: !0, passive: s })
        : t.addEventListener(e, r, !0)
      : s !== void 0
      ? t.addEventListener(e, r, { passive: s })
      : t.addEventListener(e, r, !1);
}
function Su(t, e, r, n, s) {
  var i = n;
  if (!(e & 1) && !(e & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var o = n.tag;
      if (o === 3 || o === 4) {
        var a = n.stateNode.containerInfo;
        if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
        if (o === 4)
          for (o = n.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === s || (l.nodeType === 8 && l.parentNode === s))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Ln(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            n = i = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      n = n.return;
    }
  Eg(function () {
    var u = i,
      c = Id(r),
      h = [];
    e: {
      var f = ey.get(t);
      if (f !== void 0) {
        var d = Fd,
          v = t;
        switch (t) {
          case "keypress":
            if (Pa(r) === 0) break e;
          case "keydown":
          case "keyup":
            d = Ux;
            break;
          case "focusin":
            (v = "focus"), (d = yu);
            break;
          case "focusout":
            (v = "blur"), (d = yu);
            break;
          case "beforeblur":
          case "afterblur":
            d = yu;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            d = gf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            d = Tx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            d = Bx;
            break;
          case Jg:
          case Zg:
          case Yg:
            d = Ox;
            break;
          case Xg:
            d = Vx;
            break;
          case "scroll":
            d = Ex;
            break;
          case "wheel":
            d = qx;
            break;
          case "copy":
          case "cut":
          case "paste":
            d = Nx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            d = vf;
        }
        var p = (e & 4) !== 0,
          x = !p && t === "scroll",
          g = p ? (f !== null ? f + "Capture" : null) : f;
        p = [];
        for (var m = u, y; m !== null; ) {
          y = m;
          var _ = y.stateNode;
          if (
            (y.tag === 5 &&
              _ !== null &&
              ((y = _),
              g !== null && ((_ = Xi(m, g)), _ != null && p.push(oo(m, _, y)))),
            x)
          )
            break;
          m = m.return;
        }
        0 < p.length &&
          ((f = new d(f, v, null, r, c)), h.push({ event: f, listeners: p }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((f = t === "mouseover" || t === "pointerover"),
          (d = t === "mouseout" || t === "pointerout"),
          f &&
            r !== dc &&
            (v = r.relatedTarget || r.fromElement) &&
            (Ln(v) || v[_r]))
        )
          break e;
        if (
          (d || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          d
            ? ((v = r.relatedTarget || r.toElement),
              (d = u),
              (v = v ? Ln(v) : null),
              v !== null &&
                ((x = ns(v)), v !== x || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((d = null), (v = u)),
          d !== v)
        ) {
          if (
            ((p = gf),
            (_ = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((p = vf),
              (_ = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (x = d == null ? f : Ts(d)),
            (y = v == null ? f : Ts(v)),
            (f = new p(_, m + "leave", d, r, c)),
            (f.target = x),
            (f.relatedTarget = y),
            (_ = null),
            Ln(c) === u &&
              ((p = new p(g, m + "enter", v, r, c)),
              (p.target = y),
              (p.relatedTarget = x),
              (_ = p)),
            (x = _),
            d && v)
          )
            t: {
              for (p = d, g = v, m = 0, y = p; y; y = cs(y)) m++;
              for (y = 0, _ = g; _; _ = cs(_)) y++;
              for (; 0 < m - y; ) (p = cs(p)), m--;
              for (; 0 < y - m; ) (g = cs(g)), y--;
              for (; m--; ) {
                if (p === g || (g !== null && p === g.alternate)) break t;
                (p = cs(p)), (g = cs(g));
              }
              p = null;
            }
          else p = null;
          d !== null && Pf(h, f, d, p, !1),
            v !== null && x !== null && Pf(h, x, v, p, !0);
        }
      }
      e: {
        if (
          ((f = u ? Ts(u) : window),
          (d = f.nodeName && f.nodeName.toLowerCase()),
          d === "select" || (d === "input" && f.type === "file"))
        )
          var S = Xx;
        else if (bf(f))
          if (Hg) S = nb;
          else {
            S = tb;
            var E = eb;
          }
        else
          (d = f.nodeName) &&
            d.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = rb);
        if (S && (S = S(t, u))) {
          Vg(h, S, r, c);
          break e;
        }
        E && E(t, f, u),
          t === "focusout" &&
            (E = f._wrapperState) &&
            E.controlled &&
            f.type === "number" &&
            oc(f, "number", f.value);
      }
      switch (((E = u ? Ts(u) : window), t)) {
        case "focusin":
          (bf(E) || E.contentEditable === "true") &&
            ((Es = E), (vc = u), (Wi = null));
          break;
        case "focusout":
          Wi = vc = Es = null;
          break;
        case "mousedown":
          wc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (wc = !1), Cf(h, r, c);
          break;
        case "selectionchange":
          if (ob) break;
        case "keydown":
        case "keyup":
          Cf(h, r, c);
      }
      var k;
      if (Bd)
        e: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break e;
            case "compositionend":
              C = "onCompositionEnd";
              break e;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break e;
          }
          C = void 0;
        }
      else
        Ss
          ? Bg(t, r) && (C = "onCompositionEnd")
          : t === "keydown" && r.keyCode === 229 && (C = "onCompositionStart");
      C &&
        (zg &&
          r.locale !== "ko" &&
          (Ss || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Ss && (k = Fg())
            : ((Yr = c),
              (Ud = "value" in Yr ? Yr.value : Yr.textContent),
              (Ss = !0))),
        (E = Ka(u, C)),
        0 < E.length &&
          ((C = new yf(C, t, null, r, c)),
          h.push({ event: C, listeners: E }),
          k ? (C.data = k) : ((k = Wg(r)), k !== null && (C.data = k)))),
        (k = Gx ? Qx(t, r) : Jx(t, r)) &&
          ((u = Ka(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new yf("onBeforeInput", "beforeinput", null, r, c)),
            h.push({ event: c, listeners: u }),
            (c.data = k)));
    }
    ty(h, e);
  });
}
function oo(t, e, r) {
  return { instance: t, listener: e, currentTarget: r };
}
function Ka(t, e) {
  for (var r = e + "Capture", n = []; t !== null; ) {
    var s = t,
      i = s.stateNode;
    s.tag === 5 &&
      i !== null &&
      ((s = i),
      (i = Xi(t, r)),
      i != null && n.unshift(oo(t, i, s)),
      (i = Xi(t, e)),
      i != null && n.push(oo(t, i, s))),
      (t = t.return);
  }
  return n;
}
function cs(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Pf(t, e, r, n, s) {
  for (var i = e._reactName, o = []; r !== null && r !== n; ) {
    var a = r,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === n) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      s
        ? ((l = Xi(r, i)), l != null && o.unshift(oo(r, l, a)))
        : s || ((l = Xi(r, i)), l != null && o.push(oo(r, l, a)))),
      (r = r.return);
  }
  o.length !== 0 && t.push({ event: e, listeners: o });
}
var cb = /\r\n?/g,
  db = /\u0000|\uFFFD/g;
function Of(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      cb,
      `
`
    )
    .replace(db, "");
}
function ia(t, e, r) {
  if (((e = Of(e)), Of(t) !== e && r)) throw Error(N(425));
}
function Ga() {}
var xc = null,
  bc = null;
function _c(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var kc = typeof setTimeout == "function" ? setTimeout : void 0,
  hb = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Af = typeof Promise == "function" ? Promise : void 0,
  fb =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Af < "u"
      ? function (t) {
          return Af.resolve(null).then(t).catch(pb);
        }
      : kc;
function pb(t) {
  setTimeout(function () {
    throw t;
  });
}
function Eu(t, e) {
  var r = e,
    n = 0;
  do {
    var s = r.nextSibling;
    if ((t.removeChild(r), s && s.nodeType === 8))
      if (((r = s.data), r === "/$")) {
        if (n === 0) {
          t.removeChild(s), ro(e);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = s;
  } while (r);
  ro(e);
}
function on(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function Nf(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (e === 0) return t;
        e--;
      } else r === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var pi = Math.random().toString(36).slice(2),
  nr = "__reactFiber$" + pi,
  ao = "__reactProps$" + pi,
  _r = "__reactContainer$" + pi,
  Sc = "__reactEvents$" + pi,
  mb = "__reactListeners$" + pi,
  gb = "__reactHandles$" + pi;
function Ln(t) {
  var e = t[nr];
  if (e) return e;
  for (var r = t.parentNode; r; ) {
    if ((e = r[_r] || r[nr])) {
      if (
        ((r = e.alternate),
        e.child !== null || (r !== null && r.child !== null))
      )
        for (t = Nf(t); t !== null; ) {
          if ((r = t[nr])) return r;
          t = Nf(t);
        }
      return e;
    }
    (t = r), (r = t.parentNode);
  }
  return null;
}
function Mo(t) {
  return (
    (t = t[nr] || t[_r]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Ts(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(N(33));
}
function Nl(t) {
  return t[ao] || null;
}
var Ec = [],
  Rs = -1;
function _n(t) {
  return { current: t };
}
function we(t) {
  0 > Rs || ((t.current = Ec[Rs]), (Ec[Rs] = null), Rs--);
}
function ge(t, e) {
  Rs++, (Ec[Rs] = t.current), (t.current = e);
}
var pn = {},
  Je = _n(pn),
  at = _n(!1),
  Qn = pn;
function ei(t, e) {
  var r = t.type.contextTypes;
  if (!r) return pn;
  var n = t.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
    return n.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    i;
  for (i in r) s[i] = e[i];
  return (
    n &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function lt(t) {
  return (t = t.childContextTypes), t != null;
}
function Qa() {
  we(at), we(Je);
}
function jf(t, e, r) {
  if (Je.current !== pn) throw Error(N(168));
  ge(Je, e), ge(at, r);
}
function ny(t, e, r) {
  var n = t.stateNode;
  if (((e = e.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var s in n) if (!(s in e)) throw Error(N(108, ex(t) || "Unknown", s));
  return Se({}, r, n);
}
function Ja(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || pn),
    (Qn = Je.current),
    ge(Je, t),
    ge(at, at.current),
    !0
  );
}
function If(t, e, r) {
  var n = t.stateNode;
  if (!n) throw Error(N(169));
  r
    ? ((t = ny(t, e, Qn)),
      (n.__reactInternalMemoizedMergedChildContext = t),
      we(at),
      we(Je),
      ge(Je, t))
    : we(at),
    ge(at, r);
}
var gr = null,
  jl = !1,
  Cu = !1;
function sy(t) {
  gr === null ? (gr = [t]) : gr.push(t);
}
function yb(t) {
  (jl = !0), sy(t);
}
function kn() {
  if (!Cu && gr !== null) {
    Cu = !0;
    var t = 0,
      e = fe;
    try {
      var r = gr;
      for (fe = 1; t < r.length; t++) {
        var n = r[t];
        do n = n(!0);
        while (n !== null);
      }
      (gr = null), (jl = !1);
    } catch (s) {
      throw (gr !== null && (gr = gr.slice(t + 1)), Pg($d, kn), s);
    } finally {
      (fe = e), (Cu = !1);
    }
  }
  return null;
}
var Ps = [],
  Os = 0,
  Za = null,
  Ya = 0,
  Et = [],
  Ct = 0,
  Jn = null,
  vr = 1,
  wr = "";
function An(t, e) {
  (Ps[Os++] = Ya), (Ps[Os++] = Za), (Za = t), (Ya = e);
}
function iy(t, e, r) {
  (Et[Ct++] = vr), (Et[Ct++] = wr), (Et[Ct++] = Jn), (Jn = t);
  var n = vr;
  t = wr;
  var s = 32 - qt(n) - 1;
  (n &= ~(1 << s)), (r += 1);
  var i = 32 - qt(e) + s;
  if (30 < i) {
    var o = s - (s % 5);
    (i = (n & ((1 << o) - 1)).toString(32)),
      (n >>= o),
      (s -= o),
      (vr = (1 << (32 - qt(e) + s)) | (r << s) | n),
      (wr = i + t);
  } else (vr = (1 << i) | (r << s) | n), (wr = t);
}
function Vd(t) {
  t.return !== null && (An(t, 1), iy(t, 1, 0));
}
function Hd(t) {
  for (; t === Za; )
    (Za = Ps[--Os]), (Ps[Os] = null), (Ya = Ps[--Os]), (Ps[Os] = null);
  for (; t === Jn; )
    (Jn = Et[--Ct]),
      (Et[Ct] = null),
      (wr = Et[--Ct]),
      (Et[Ct] = null),
      (vr = Et[--Ct]),
      (Et[Ct] = null);
}
var yt = null,
  gt = null,
  be = !1,
  Ht = null;
function oy(t, e) {
  var r = Tt(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = e),
    (r.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [r]), (t.flags |= 16)) : e.push(r);
}
function $f(t, e) {
  switch (t.tag) {
    case 5:
      var r = t.type;
      return (
        (e =
          e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (yt = t), (gt = on(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (yt = t), (gt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((r = Jn !== null ? { id: vr, overflow: wr } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = Tt(18, null, null, 0)),
            (r.stateNode = e),
            (r.return = t),
            (t.child = r),
            (yt = t),
            (gt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Cc(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Tc(t) {
  if (be) {
    var e = gt;
    if (e) {
      var r = e;
      if (!$f(t, e)) {
        if (Cc(t)) throw Error(N(418));
        e = on(r.nextSibling);
        var n = yt;
        e && $f(t, e)
          ? oy(n, r)
          : ((t.flags = (t.flags & -4097) | 2), (be = !1), (yt = t));
      }
    } else {
      if (Cc(t)) throw Error(N(418));
      (t.flags = (t.flags & -4097) | 2), (be = !1), (yt = t);
    }
  }
}
function Lf(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  yt = t;
}
function oa(t) {
  if (t !== yt) return !1;
  if (!be) return Lf(t), (be = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !_c(t.type, t.memoizedProps))),
    e && (e = gt))
  ) {
    if (Cc(t)) throw (ay(), Error(N(418)));
    for (; e; ) oy(t, e), (e = on(e.nextSibling));
  }
  if ((Lf(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(N(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var r = t.data;
          if (r === "/$") {
            if (e === 0) {
              gt = on(t.nextSibling);
              break e;
            }
            e--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      gt = null;
    }
  } else gt = yt ? on(t.stateNode.nextSibling) : null;
  return !0;
}
function ay() {
  for (var t = gt; t; ) t = on(t.nextSibling);
}
function ti() {
  (gt = yt = null), (be = !1);
}
function qd(t) {
  Ht === null ? (Ht = [t]) : Ht.push(t);
}
var vb = Rr.ReactCurrentBatchConfig;
function Ti(t, e, r) {
  if (
    ((t = r.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(N(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(N(147, t));
      var s = n,
        i = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === i
        ? e.ref
        : ((e = function (o) {
            var a = s.refs;
            o === null ? delete a[i] : (a[i] = o);
          }),
          (e._stringRef = i),
          e);
    }
    if (typeof t != "string") throw Error(N(284));
    if (!r._owner) throw Error(N(290, t));
  }
  return t;
}
function aa(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      N(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function Mf(t) {
  var e = t._init;
  return e(t._payload);
}
function ly(t) {
  function e(g, m) {
    if (t) {
      var y = g.deletions;
      y === null ? ((g.deletions = [m]), (g.flags |= 16)) : y.push(m);
    }
  }
  function r(g, m) {
    if (!t) return null;
    for (; m !== null; ) e(g, m), (m = m.sibling);
    return null;
  }
  function n(g, m) {
    for (g = new Map(); m !== null; )
      m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling);
    return g;
  }
  function s(g, m) {
    return (g = cn(g, m)), (g.index = 0), (g.sibling = null), g;
  }
  function i(g, m, y) {
    return (
      (g.index = y),
      t
        ? ((y = g.alternate),
          y !== null
            ? ((y = y.index), y < m ? ((g.flags |= 2), m) : y)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function o(g) {
    return t && g.alternate === null && (g.flags |= 2), g;
  }
  function a(g, m, y, _) {
    return m === null || m.tag !== 6
      ? ((m = ju(y, g.mode, _)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function l(g, m, y, _) {
    var S = y.type;
    return S === ks
      ? c(g, m, y.props.children, _, y.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Fr &&
            Mf(S) === m.type))
      ? ((_ = s(m, y.props)), (_.ref = Ti(g, m, y)), (_.return = g), _)
      : ((_ = La(y.type, y.key, y.props, null, g.mode, _)),
        (_.ref = Ti(g, m, y)),
        (_.return = g),
        _);
  }
  function u(g, m, y, _) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== y.containerInfo ||
      m.stateNode.implementation !== y.implementation
      ? ((m = Iu(y, g.mode, _)), (m.return = g), m)
      : ((m = s(m, y.children || [])), (m.return = g), m);
  }
  function c(g, m, y, _, S) {
    return m === null || m.tag !== 7
      ? ((m = Kn(y, g.mode, _, S)), (m.return = g), m)
      : ((m = s(m, y)), (m.return = g), m);
  }
  function h(g, m, y) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = ju("" + m, g.mode, y)), (m.return = g), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Jo:
          return (
            (y = La(m.type, m.key, m.props, null, g.mode, y)),
            (y.ref = Ti(g, null, m)),
            (y.return = g),
            y
          );
        case _s:
          return (m = Iu(m, g.mode, y)), (m.return = g), m;
        case Fr:
          var _ = m._init;
          return h(g, _(m._payload), y);
      }
      if (Ii(m) || _i(m))
        return (m = Kn(m, g.mode, y, null)), (m.return = g), m;
      aa(g, m);
    }
    return null;
  }
  function f(g, m, y, _) {
    var S = m !== null ? m.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return S !== null ? null : a(g, m, "" + y, _);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Jo:
          return y.key === S ? l(g, m, y, _) : null;
        case _s:
          return y.key === S ? u(g, m, y, _) : null;
        case Fr:
          return (S = y._init), f(g, m, S(y._payload), _);
      }
      if (Ii(y) || _i(y)) return S !== null ? null : c(g, m, y, _, null);
      aa(g, y);
    }
    return null;
  }
  function d(g, m, y, _, S) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (g = g.get(y) || null), a(m, g, "" + _, S);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case Jo:
          return (g = g.get(_.key === null ? y : _.key) || null), l(m, g, _, S);
        case _s:
          return (g = g.get(_.key === null ? y : _.key) || null), u(m, g, _, S);
        case Fr:
          var E = _._init;
          return d(g, m, y, E(_._payload), S);
      }
      if (Ii(_) || _i(_)) return (g = g.get(y) || null), c(m, g, _, S, null);
      aa(m, _);
    }
    return null;
  }
  function v(g, m, y, _) {
    for (
      var S = null, E = null, k = m, C = (m = 0), T = null;
      k !== null && C < y.length;
      C++
    ) {
      k.index > C ? ((T = k), (k = null)) : (T = k.sibling);
      var R = f(g, k, y[C], _);
      if (R === null) {
        k === null && (k = T);
        break;
      }
      t && k && R.alternate === null && e(g, k),
        (m = i(R, m, C)),
        E === null ? (S = R) : (E.sibling = R),
        (E = R),
        (k = T);
    }
    if (C === y.length) return r(g, k), be && An(g, C), S;
    if (k === null) {
      for (; C < y.length; C++)
        (k = h(g, y[C], _)),
          k !== null &&
            ((m = i(k, m, C)), E === null ? (S = k) : (E.sibling = k), (E = k));
      return be && An(g, C), S;
    }
    for (k = n(g, k); C < y.length; C++)
      (T = d(k, g, C, y[C], _)),
        T !== null &&
          (t && T.alternate !== null && k.delete(T.key === null ? C : T.key),
          (m = i(T, m, C)),
          E === null ? (S = T) : (E.sibling = T),
          (E = T));
    return (
      t &&
        k.forEach(function (D) {
          return e(g, D);
        }),
      be && An(g, C),
      S
    );
  }
  function p(g, m, y, _) {
    var S = _i(y);
    if (typeof S != "function") throw Error(N(150));
    if (((y = S.call(y)), y == null)) throw Error(N(151));
    for (
      var E = (S = null), k = m, C = (m = 0), T = null, R = y.next();
      k !== null && !R.done;
      C++, R = y.next()
    ) {
      k.index > C ? ((T = k), (k = null)) : (T = k.sibling);
      var D = f(g, k, R.value, _);
      if (D === null) {
        k === null && (k = T);
        break;
      }
      t && k && D.alternate === null && e(g, k),
        (m = i(D, m, C)),
        E === null ? (S = D) : (E.sibling = D),
        (E = D),
        (k = T);
    }
    if (R.done) return r(g, k), be && An(g, C), S;
    if (k === null) {
      for (; !R.done; C++, R = y.next())
        (R = h(g, R.value, _)),
          R !== null &&
            ((m = i(R, m, C)), E === null ? (S = R) : (E.sibling = R), (E = R));
      return be && An(g, C), S;
    }
    for (k = n(g, k); !R.done; C++, R = y.next())
      (R = d(k, g, C, R.value, _)),
        R !== null &&
          (t && R.alternate !== null && k.delete(R.key === null ? C : R.key),
          (m = i(R, m, C)),
          E === null ? (S = R) : (E.sibling = R),
          (E = R));
    return (
      t &&
        k.forEach(function (L) {
          return e(g, L);
        }),
      be && An(g, C),
      S
    );
  }
  function x(g, m, y, _) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === ks &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Jo:
          e: {
            for (var S = y.key, E = m; E !== null; ) {
              if (E.key === S) {
                if (((S = y.type), S === ks)) {
                  if (E.tag === 7) {
                    r(g, E.sibling),
                      (m = s(E, y.props.children)),
                      (m.return = g),
                      (g = m);
                    break e;
                  }
                } else if (
                  E.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Fr &&
                    Mf(S) === E.type)
                ) {
                  r(g, E.sibling),
                    (m = s(E, y.props)),
                    (m.ref = Ti(g, E, y)),
                    (m.return = g),
                    (g = m);
                  break e;
                }
                r(g, E);
                break;
              } else e(g, E);
              E = E.sibling;
            }
            y.type === ks
              ? ((m = Kn(y.props.children, g.mode, _, y.key)),
                (m.return = g),
                (g = m))
              : ((_ = La(y.type, y.key, y.props, null, g.mode, _)),
                (_.ref = Ti(g, m, y)),
                (_.return = g),
                (g = _));
          }
          return o(g);
        case _s:
          e: {
            for (E = y.key; m !== null; ) {
              if (m.key === E)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === y.containerInfo &&
                  m.stateNode.implementation === y.implementation
                ) {
                  r(g, m.sibling),
                    (m = s(m, y.children || [])),
                    (m.return = g),
                    (g = m);
                  break e;
                } else {
                  r(g, m);
                  break;
                }
              else e(g, m);
              m = m.sibling;
            }
            (m = Iu(y, g.mode, _)), (m.return = g), (g = m);
          }
          return o(g);
        case Fr:
          return (E = y._init), x(g, m, E(y._payload), _);
      }
      if (Ii(y)) return v(g, m, y, _);
      if (_i(y)) return p(g, m, y, _);
      aa(g, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        m !== null && m.tag === 6
          ? (r(g, m.sibling), (m = s(m, y)), (m.return = g), (g = m))
          : (r(g, m), (m = ju(y, g.mode, _)), (m.return = g), (g = m)),
        o(g))
      : r(g, m);
  }
  return x;
}
var ri = ly(!0),
  uy = ly(!1),
  Xa = _n(null),
  el = null,
  As = null,
  Kd = null;
function Gd() {
  Kd = As = el = null;
}
function Qd(t) {
  var e = Xa.current;
  we(Xa), (t._currentValue = e);
}
function Rc(t, e, r) {
  for (; t !== null; ) {
    var n = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
        : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
      t === r)
    )
      break;
    t = t.return;
  }
}
function Us(t, e) {
  (el = t),
    (Kd = As = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (ot = !0), (t.firstContext = null));
}
function Pt(t) {
  var e = t._currentValue;
  if (Kd !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), As === null)) {
      if (el === null) throw Error(N(308));
      (As = t), (el.dependencies = { lanes: 0, firstContext: t });
    } else As = As.next = t;
  return e;
}
var Mn = null;
function Jd(t) {
  Mn === null ? (Mn = [t]) : Mn.push(t);
}
function cy(t, e, r, n) {
  var s = e.interleaved;
  return (
    s === null ? ((r.next = r), Jd(e)) : ((r.next = s.next), (s.next = r)),
    (e.interleaved = r),
    kr(t, n)
  );
}
function kr(t, e) {
  t.lanes |= e;
  var r = t.alternate;
  for (r !== null && (r.lanes |= e), r = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (r = t.alternate),
      r !== null && (r.childLanes |= e),
      (r = t),
      (t = t.return);
  return r.tag === 3 ? r.stateNode : null;
}
var zr = !1;
function Zd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function dy(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function xr(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function an(t, e, r) {
  var n = t.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), ae & 2)) {
    var s = n.pending;
    return (
      s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
      (n.pending = e),
      kr(t, r)
    );
  }
  return (
    (s = n.interleaved),
    s === null ? ((e.next = e), Jd(n)) : ((e.next = s.next), (s.next = e)),
    (n.interleaved = e),
    kr(t, r)
  );
}
function Oa(t, e, r) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (r & 4194240) !== 0))
  ) {
    var n = e.lanes;
    (n &= t.pendingLanes), (r |= n), (e.lanes = r), Ld(t, r);
  }
}
function Df(t, e) {
  var r = t.updateQueue,
    n = t.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var s = null,
      i = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var o = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        i === null ? (s = i = o) : (i = i.next = o), (r = r.next);
      } while (r !== null);
      i === null ? (s = i = e) : (i = i.next = e);
    } else s = i = e;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: i,
      shared: n.shared,
      effects: n.effects,
    }),
      (t.updateQueue = r);
    return;
  }
  (t = r.lastBaseUpdate),
    t === null ? (r.firstBaseUpdate = e) : (t.next = e),
    (r.lastBaseUpdate = e);
}
function tl(t, e, r, n) {
  var s = t.updateQueue;
  zr = !1;
  var i = s.firstBaseUpdate,
    o = s.lastBaseUpdate,
    a = s.shared.pending;
  if (a !== null) {
    s.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
    var c = t.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== o &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (i !== null) {
    var h = s.baseState;
    (o = 0), (c = u = l = null), (a = i);
    do {
      var f = a.lane,
        d = a.eventTime;
      if ((n & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: d,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = t,
            p = a;
          switch (((f = e), (d = r), p.tag)) {
            case 1:
              if (((v = p.payload), typeof v == "function")) {
                h = v.call(d, h, f);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = p.payload),
                (f = typeof v == "function" ? v.call(d, h, f) : v),
                f == null)
              )
                break e;
              h = Se({}, h, f);
              break e;
            case 2:
              zr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((t.flags |= 64),
          (f = s.effects),
          f === null ? (s.effects = [a]) : f.push(a));
      } else
        (d = {
          eventTime: d,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = d), (l = h)) : (c = c.next = d),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = s.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (s.lastBaseUpdate = f),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = h),
      (s.baseState = l),
      (s.firstBaseUpdate = u),
      (s.lastBaseUpdate = c),
      (e = s.shared.interleaved),
      e !== null)
    ) {
      s = e;
      do (o |= s.lane), (s = s.next);
      while (s !== e);
    } else i === null && (s.shared.lanes = 0);
    (Yn |= o), (t.lanes = o), (t.memoizedState = h);
  }
}
function Uf(t, e, r) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var n = t[e],
        s = n.callback;
      if (s !== null) {
        if (((n.callback = null), (n = r), typeof s != "function"))
          throw Error(N(191, s));
        s.call(n);
      }
    }
}
var Do = {},
  or = _n(Do),
  lo = _n(Do),
  uo = _n(Do);
function Dn(t) {
  if (t === Do) throw Error(N(174));
  return t;
}
function Yd(t, e) {
  switch ((ge(uo, e), ge(lo, t), ge(or, Do), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : lc(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = lc(e, t));
  }
  we(or), ge(or, e);
}
function ni() {
  we(or), we(lo), we(uo);
}
function hy(t) {
  Dn(uo.current);
  var e = Dn(or.current),
    r = lc(e, t.type);
  e !== r && (ge(lo, t), ge(or, r));
}
function Xd(t) {
  lo.current === t && (we(or), we(lo));
}
var _e = _n(0);
function rl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Tu = [];
function eh() {
  for (var t = 0; t < Tu.length; t++)
    Tu[t]._workInProgressVersionPrimary = null;
  Tu.length = 0;
}
var Aa = Rr.ReactCurrentDispatcher,
  Ru = Rr.ReactCurrentBatchConfig,
  Zn = 0,
  ke = null,
  $e = null,
  De = null,
  nl = !1,
  Vi = !1,
  co = 0,
  wb = 0;
function qe() {
  throw Error(N(321));
}
function th(t, e) {
  if (e === null) return !1;
  for (var r = 0; r < e.length && r < t.length; r++)
    if (!Gt(t[r], e[r])) return !1;
  return !0;
}
function rh(t, e, r, n, s, i) {
  if (
    ((Zn = i),
    (ke = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Aa.current = t === null || t.memoizedState === null ? kb : Sb),
    (t = r(n, s)),
    Vi)
  ) {
    i = 0;
    do {
      if (((Vi = !1), (co = 0), 25 <= i)) throw Error(N(301));
      (i += 1),
        (De = $e = null),
        (e.updateQueue = null),
        (Aa.current = Eb),
        (t = r(n, s));
    } while (Vi);
  }
  if (
    ((Aa.current = sl),
    (e = $e !== null && $e.next !== null),
    (Zn = 0),
    (De = $e = ke = null),
    (nl = !1),
    e)
  )
    throw Error(N(300));
  return t;
}
function nh() {
  var t = co !== 0;
  return (co = 0), t;
}
function Xt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return De === null ? (ke.memoizedState = De = t) : (De = De.next = t), De;
}
function Ot() {
  if ($e === null) {
    var t = ke.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = $e.next;
  var e = De === null ? ke.memoizedState : De.next;
  if (e !== null) (De = e), ($e = t);
  else {
    if (t === null) throw Error(N(310));
    ($e = t),
      (t = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null,
      }),
      De === null ? (ke.memoizedState = De = t) : (De = De.next = t);
  }
  return De;
}
function ho(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function Pu(t) {
  var e = Ot(),
    r = e.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = t;
  var n = $e,
    s = n.baseQueue,
    i = r.pending;
  if (i !== null) {
    if (s !== null) {
      var o = s.next;
      (s.next = i.next), (i.next = o);
    }
    (n.baseQueue = s = i), (r.pending = null);
  }
  if (s !== null) {
    (i = s.next), (n = n.baseState);
    var a = (o = null),
      l = null,
      u = i;
    do {
      var c = u.lane;
      if ((Zn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (n = u.hasEagerState ? u.eagerState : t(n, u.action));
      else {
        var h = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = h), (o = n)) : (l = l.next = h),
          (ke.lanes |= c),
          (Yn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    l === null ? (o = n) : (l.next = a),
      Gt(n, e.memoizedState) || (ot = !0),
      (e.memoizedState = n),
      (e.baseState = o),
      (e.baseQueue = l),
      (r.lastRenderedState = n);
  }
  if (((t = r.interleaved), t !== null)) {
    s = t;
    do (i = s.lane), (ke.lanes |= i), (Yn |= i), (s = s.next);
    while (s !== t);
  } else s === null && (r.lanes = 0);
  return [e.memoizedState, r.dispatch];
}
function Ou(t) {
  var e = Ot(),
    r = e.queue;
  if (r === null) throw Error(N(311));
  r.lastRenderedReducer = t;
  var n = r.dispatch,
    s = r.pending,
    i = e.memoizedState;
  if (s !== null) {
    r.pending = null;
    var o = (s = s.next);
    do (i = t(i, o.action)), (o = o.next);
    while (o !== s);
    Gt(i, e.memoizedState) || (ot = !0),
      (e.memoizedState = i),
      e.baseQueue === null && (e.baseState = i),
      (r.lastRenderedState = i);
  }
  return [i, n];
}
function fy() {}
function py(t, e) {
  var r = ke,
    n = Ot(),
    s = e(),
    i = !Gt(n.memoizedState, s);
  if (
    (i && ((n.memoizedState = s), (ot = !0)),
    (n = n.queue),
    sh(yy.bind(null, r, n, t), [t]),
    n.getSnapshot !== e || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      fo(9, gy.bind(null, r, n, s, e), void 0, null),
      Ue === null)
    )
      throw Error(N(349));
    Zn & 30 || my(r, e, s);
  }
  return s;
}
function my(t, e, r) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: r }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.stores = [t]))
      : ((r = e.stores), r === null ? (e.stores = [t]) : r.push(t));
}
function gy(t, e, r, n) {
  (e.value = r), (e.getSnapshot = n), vy(e) && wy(t);
}
function yy(t, e, r) {
  return r(function () {
    vy(e) && wy(t);
  });
}
function vy(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var r = e();
    return !Gt(t, r);
  } catch {
    return !0;
  }
}
function wy(t) {
  var e = kr(t, 1);
  e !== null && Kt(e, t, 1, -1);
}
function Ff(t) {
  var e = Xt();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ho,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = _b.bind(null, ke, t)),
    [e.memoizedState, t]
  );
}
function fo(t, e, r, n) {
  return (
    (t = { tag: t, create: e, destroy: r, deps: n, next: null }),
    (e = ke.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ke.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((r = e.lastEffect),
        r === null
          ? (e.lastEffect = t.next = t)
          : ((n = r.next), (r.next = t), (t.next = n), (e.lastEffect = t))),
    t
  );
}
function xy() {
  return Ot().memoizedState;
}
function Na(t, e, r, n) {
  var s = Xt();
  (ke.flags |= t),
    (s.memoizedState = fo(1 | e, r, void 0, n === void 0 ? null : n));
}
function Il(t, e, r, n) {
  var s = Ot();
  n = n === void 0 ? null : n;
  var i = void 0;
  if ($e !== null) {
    var o = $e.memoizedState;
    if (((i = o.destroy), n !== null && th(n, o.deps))) {
      s.memoizedState = fo(e, r, i, n);
      return;
    }
  }
  (ke.flags |= t), (s.memoizedState = fo(1 | e, r, i, n));
}
function zf(t, e) {
  return Na(8390656, 8, t, e);
}
function sh(t, e) {
  return Il(2048, 8, t, e);
}
function by(t, e) {
  return Il(4, 2, t, e);
}
function _y(t, e) {
  return Il(4, 4, t, e);
}
function ky(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Sy(t, e, r) {
  return (
    (r = r != null ? r.concat([t]) : null), Il(4, 4, ky.bind(null, e, t), r)
  );
}
function ih() {}
function Ey(t, e) {
  var r = Ot();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && th(e, n[1])
    ? n[0]
    : ((r.memoizedState = [t, e]), t);
}
function Cy(t, e) {
  var r = Ot();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && th(e, n[1])
    ? n[0]
    : ((t = t()), (r.memoizedState = [t, e]), t);
}
function Ty(t, e, r) {
  return Zn & 21
    ? (Gt(r, e) || ((r = Ng()), (ke.lanes |= r), (Yn |= r), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (ot = !0)), (t.memoizedState = r));
}
function xb(t, e) {
  var r = fe;
  (fe = r !== 0 && 4 > r ? r : 4), t(!0);
  var n = Ru.transition;
  Ru.transition = {};
  try {
    t(!1), e();
  } finally {
    (fe = r), (Ru.transition = n);
  }
}
function Ry() {
  return Ot().memoizedState;
}
function bb(t, e, r) {
  var n = un(t);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Py(t))
  )
    Oy(e, r);
  else if (((r = cy(t, e, r, n)), r !== null)) {
    var s = tt();
    Kt(r, t, n, s), Ay(r, e, n);
  }
}
function _b(t, e, r) {
  var n = un(t),
    s = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Py(t)) Oy(e, s);
  else {
    var i = t.alternate;
    if (
      t.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = e.lastRenderedReducer), i !== null)
    )
      try {
        var o = e.lastRenderedState,
          a = i(o, r);
        if (((s.hasEagerState = !0), (s.eagerState = a), Gt(a, o))) {
          var l = e.interleaved;
          l === null
            ? ((s.next = s), Jd(e))
            : ((s.next = l.next), (l.next = s)),
            (e.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (r = cy(t, e, s, n)),
      r !== null && ((s = tt()), Kt(r, t, n, s), Ay(r, e, n));
  }
}
function Py(t) {
  var e = t.alternate;
  return t === ke || (e !== null && e === ke);
}
function Oy(t, e) {
  Vi = nl = !0;
  var r = t.pending;
  r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
    (t.pending = e);
}
function Ay(t, e, r) {
  if (r & 4194240) {
    var n = e.lanes;
    (n &= t.pendingLanes), (r |= n), (e.lanes = r), Ld(t, r);
  }
}
var sl = {
    readContext: Pt,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useInsertionEffect: qe,
    useLayoutEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useMutableSource: qe,
    useSyncExternalStore: qe,
    useId: qe,
    unstable_isNewReconciler: !1,
  },
  kb = {
    readContext: Pt,
    useCallback: function (t, e) {
      return (Xt().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: Pt,
    useEffect: zf,
    useImperativeHandle: function (t, e, r) {
      return (
        (r = r != null ? r.concat([t]) : null),
        Na(4194308, 4, ky.bind(null, e, t), r)
      );
    },
    useLayoutEffect: function (t, e) {
      return Na(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Na(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var r = Xt();
      return (
        (e = e === void 0 ? null : e), (t = t()), (r.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, r) {
      var n = Xt();
      return (
        (e = r !== void 0 ? r(e) : e),
        (n.memoizedState = n.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (n.queue = t),
        (t = t.dispatch = bb.bind(null, ke, t)),
        [n.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Xt();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Ff,
    useDebugValue: ih,
    useDeferredValue: function (t) {
      return (Xt().memoizedState = t);
    },
    useTransition: function () {
      var t = Ff(!1),
        e = t[0];
      return (t = xb.bind(null, t[1])), (Xt().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, r) {
      var n = ke,
        s = Xt();
      if (be) {
        if (r === void 0) throw Error(N(407));
        r = r();
      } else {
        if (((r = e()), Ue === null)) throw Error(N(349));
        Zn & 30 || my(n, e, r);
      }
      s.memoizedState = r;
      var i = { value: r, getSnapshot: e };
      return (
        (s.queue = i),
        zf(yy.bind(null, n, i, t), [t]),
        (n.flags |= 2048),
        fo(9, gy.bind(null, n, i, r, e), void 0, null),
        r
      );
    },
    useId: function () {
      var t = Xt(),
        e = Ue.identifierPrefix;
      if (be) {
        var r = wr,
          n = vr;
        (r = (n & ~(1 << (32 - qt(n) - 1))).toString(32) + r),
          (e = ":" + e + "R" + r),
          (r = co++),
          0 < r && (e += "H" + r.toString(32)),
          (e += ":");
      } else (r = wb++), (e = ":" + e + "r" + r.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  Sb = {
    readContext: Pt,
    useCallback: Ey,
    useContext: Pt,
    useEffect: sh,
    useImperativeHandle: Sy,
    useInsertionEffect: by,
    useLayoutEffect: _y,
    useMemo: Cy,
    useReducer: Pu,
    useRef: xy,
    useState: function () {
      return Pu(ho);
    },
    useDebugValue: ih,
    useDeferredValue: function (t) {
      var e = Ot();
      return Ty(e, $e.memoizedState, t);
    },
    useTransition: function () {
      var t = Pu(ho)[0],
        e = Ot().memoizedState;
      return [t, e];
    },
    useMutableSource: fy,
    useSyncExternalStore: py,
    useId: Ry,
    unstable_isNewReconciler: !1,
  },
  Eb = {
    readContext: Pt,
    useCallback: Ey,
    useContext: Pt,
    useEffect: sh,
    useImperativeHandle: Sy,
    useInsertionEffect: by,
    useLayoutEffect: _y,
    useMemo: Cy,
    useReducer: Ou,
    useRef: xy,
    useState: function () {
      return Ou(ho);
    },
    useDebugValue: ih,
    useDeferredValue: function (t) {
      var e = Ot();
      return $e === null ? (e.memoizedState = t) : Ty(e, $e.memoizedState, t);
    },
    useTransition: function () {
      var t = Ou(ho)[0],
        e = Ot().memoizedState;
      return [t, e];
    },
    useMutableSource: fy,
    useSyncExternalStore: py,
    useId: Ry,
    unstable_isNewReconciler: !1,
  };
function Dt(t, e) {
  if (t && t.defaultProps) {
    (e = Se({}, e)), (t = t.defaultProps);
    for (var r in t) e[r] === void 0 && (e[r] = t[r]);
    return e;
  }
  return e;
}
function Pc(t, e, r, n) {
  (e = t.memoizedState),
    (r = r(n, e)),
    (r = r == null ? e : Se({}, e, r)),
    (t.memoizedState = r),
    t.lanes === 0 && (t.updateQueue.baseState = r);
}
var $l = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? ns(t) === t : !1;
  },
  enqueueSetState: function (t, e, r) {
    t = t._reactInternals;
    var n = tt(),
      s = un(t),
      i = xr(n, s);
    (i.payload = e),
      r != null && (i.callback = r),
      (e = an(t, i, s)),
      e !== null && (Kt(e, t, s, n), Oa(e, t, s));
  },
  enqueueReplaceState: function (t, e, r) {
    t = t._reactInternals;
    var n = tt(),
      s = un(t),
      i = xr(n, s);
    (i.tag = 1),
      (i.payload = e),
      r != null && (i.callback = r),
      (e = an(t, i, s)),
      e !== null && (Kt(e, t, s, n), Oa(e, t, s));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var r = tt(),
      n = un(t),
      s = xr(r, n);
    (s.tag = 2),
      e != null && (s.callback = e),
      (e = an(t, s, n)),
      e !== null && (Kt(e, t, n, r), Oa(e, t, n));
  },
};
function Bf(t, e, r, n, s, i, o) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(n, i, o)
      : e.prototype && e.prototype.isPureReactComponent
      ? !so(r, n) || !so(s, i)
      : !0
  );
}
function Ny(t, e, r) {
  var n = !1,
    s = pn,
    i = e.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Pt(i))
      : ((s = lt(e) ? Qn : Je.current),
        (n = e.contextTypes),
        (i = (n = n != null) ? ei(t, s) : pn)),
    (e = new e(r, i)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = $l),
    (t.stateNode = e),
    (e._reactInternals = t),
    n &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = s),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    e
  );
}
function Wf(t, e, r, n) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(r, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(r, n),
    e.state !== t && $l.enqueueReplaceState(e, e.state, null);
}
function Oc(t, e, r, n) {
  var s = t.stateNode;
  (s.props = r), (s.state = t.memoizedState), (s.refs = {}), Zd(t);
  var i = e.contextType;
  typeof i == "object" && i !== null
    ? (s.context = Pt(i))
    : ((i = lt(e) ? Qn : Je.current), (s.context = ei(t, i))),
    (s.state = t.memoizedState),
    (i = e.getDerivedStateFromProps),
    typeof i == "function" && (Pc(t, e, i, r), (s.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((e = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      e !== s.state && $l.enqueueReplaceState(s, s.state, null),
      tl(t, r, s, n),
      (s.state = t.memoizedState)),
    typeof s.componentDidMount == "function" && (t.flags |= 4194308);
}
function si(t, e) {
  try {
    var r = "",
      n = e;
    do (r += Xw(n)), (n = n.return);
    while (n);
    var s = r;
  } catch (i) {
    s =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: t, source: e, stack: s, digest: null };
}
function Au(t, e, r) {
  return { value: t, source: null, stack: r ?? null, digest: e ?? null };
}
function Ac(t, e) {
  try {
    console.error(e.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Cb = typeof WeakMap == "function" ? WeakMap : Map;
function jy(t, e, r) {
  (r = xr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = e.value;
  return (
    (r.callback = function () {
      ol || ((ol = !0), (zc = n)), Ac(t, e);
    }),
    r
  );
}
function Iy(t, e, r) {
  (r = xr(-1, r)), (r.tag = 3);
  var n = t.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var s = e.value;
    (r.payload = function () {
      return n(s);
    }),
      (r.callback = function () {
        Ac(t, e);
      });
  }
  var i = t.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (r.callback = function () {
        Ac(t, e),
          typeof n != "function" &&
            (ln === null ? (ln = new Set([this])) : ln.add(this));
        var o = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    r
  );
}
function Vf(t, e, r) {
  var n = t.pingCache;
  if (n === null) {
    n = t.pingCache = new Cb();
    var s = new Set();
    n.set(e, s);
  } else (s = n.get(e)), s === void 0 && ((s = new Set()), n.set(e, s));
  s.has(r) || (s.add(r), (t = Fb.bind(null, t, e, r)), e.then(t, t));
}
function Hf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function qf(t, e, r, n, s) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = s), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((e = xr(-1, 1)), (e.tag = 2), an(r, e, 1))),
          (r.lanes |= 1)),
      t);
}
var Tb = Rr.ReactCurrentOwner,
  ot = !1;
function Xe(t, e, r, n) {
  e.child = t === null ? uy(e, null, r, n) : ri(e, t.child, r, n);
}
function Kf(t, e, r, n, s) {
  r = r.render;
  var i = e.ref;
  return (
    Us(e, s),
    (n = rh(t, e, r, n, i, s)),
    (r = nh()),
    t !== null && !ot
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Sr(t, e, s))
      : (be && r && Vd(e), (e.flags |= 1), Xe(t, e, n, s), e.child)
  );
}
function Gf(t, e, r, n, s) {
  if (t === null) {
    var i = r.type;
    return typeof i == "function" &&
      !fh(i) &&
      i.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((e.tag = 15), (e.type = i), $y(t, e, i, n, s))
      : ((t = La(r.type, null, n, e, e.mode, s)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((i = t.child), !(t.lanes & s))) {
    var o = i.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : so), r(o, n) && t.ref === e.ref)
    )
      return Sr(t, e, s);
  }
  return (
    (e.flags |= 1),
    (t = cn(i, n)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function $y(t, e, r, n, s) {
  if (t !== null) {
    var i = t.memoizedProps;
    if (so(i, n) && t.ref === e.ref)
      if (((ot = !1), (e.pendingProps = n = i), (t.lanes & s) !== 0))
        t.flags & 131072 && (ot = !0);
      else return (e.lanes = t.lanes), Sr(t, e, s);
  }
  return Nc(t, e, r, n, s);
}
function Ly(t, e, r) {
  var n = e.pendingProps,
    s = n.children,
    i = t !== null ? t.memoizedState : null;
  if (n.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ge(js, ht),
        (ht |= r);
    else {
      if (!(r & 1073741824))
        return (
          (t = i !== null ? i.baseLanes | r : r),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ge(js, ht),
          (ht |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = i !== null ? i.baseLanes : r),
        ge(js, ht),
        (ht |= n);
    }
  else
    i !== null ? ((n = i.baseLanes | r), (e.memoizedState = null)) : (n = r),
      ge(js, ht),
      (ht |= n);
  return Xe(t, e, s, r), e.child;
}
function My(t, e) {
  var r = e.ref;
  ((t === null && r !== null) || (t !== null && t.ref !== r)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Nc(t, e, r, n, s) {
  var i = lt(r) ? Qn : Je.current;
  return (
    (i = ei(e, i)),
    Us(e, s),
    (r = rh(t, e, r, n, i, s)),
    (n = nh()),
    t !== null && !ot
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~s),
        Sr(t, e, s))
      : (be && n && Vd(e), (e.flags |= 1), Xe(t, e, r, s), e.child)
  );
}
function Qf(t, e, r, n, s) {
  if (lt(r)) {
    var i = !0;
    Ja(e);
  } else i = !1;
  if ((Us(e, s), e.stateNode === null))
    ja(t, e), Ny(e, r, n), Oc(e, r, n, s), (n = !0);
  else if (t === null) {
    var o = e.stateNode,
      a = e.memoizedProps;
    o.props = a;
    var l = o.context,
      u = r.contextType;
    typeof u == "object" && u !== null
      ? (u = Pt(u))
      : ((u = lt(r) ? Qn : Je.current), (u = ei(e, u)));
    var c = r.getDerivedStateFromProps,
      h =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== n || l !== u) && Wf(e, o, n, u)),
      (zr = !1);
    var f = e.memoizedState;
    (o.state = f),
      tl(e, n, o, s),
      (l = e.memoizedState),
      a !== n || f !== l || at.current || zr
        ? (typeof c == "function" && (Pc(e, r, c, n), (l = e.memoizedState)),
          (a = zr || Bf(e, r, a, n, f, l, u))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = n),
              (e.memoizedState = l)),
          (o.props = n),
          (o.state = l),
          (o.context = u),
          (n = a))
        : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
          (n = !1));
  } else {
    (o = e.stateNode),
      dy(t, e),
      (a = e.memoizedProps),
      (u = e.type === e.elementType ? a : Dt(e.type, a)),
      (o.props = u),
      (h = e.pendingProps),
      (f = o.context),
      (l = r.contextType),
      typeof l == "object" && l !== null
        ? (l = Pt(l))
        : ((l = lt(r) ? Qn : Je.current), (l = ei(e, l)));
    var d = r.getDerivedStateFromProps;
    (c =
      typeof d == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== h || f !== l) && Wf(e, o, n, l)),
      (zr = !1),
      (f = e.memoizedState),
      (o.state = f),
      tl(e, n, o, s);
    var v = e.memoizedState;
    a !== h || f !== v || at.current || zr
      ? (typeof d == "function" && (Pc(e, r, d, n), (v = e.memoizedState)),
        (u = zr || Bf(e, r, u, n, f, v, l) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(n, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(n, v, l)),
            typeof o.componentDidUpdate == "function" && (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === t.memoizedProps && f === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = n),
            (e.memoizedState = v)),
        (o.props = n),
        (o.state = v),
        (o.context = l),
        (n = u))
      : (typeof o.componentDidUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === t.memoizedProps && f === t.memoizedState) ||
          (e.flags |= 1024),
        (n = !1));
  }
  return jc(t, e, r, n, i, s);
}
function jc(t, e, r, n, s, i) {
  My(t, e);
  var o = (e.flags & 128) !== 0;
  if (!n && !o) return s && If(e, r, !1), Sr(t, e, i);
  (n = e.stateNode), (Tb.current = e);
  var a =
    o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (e.flags |= 1),
    t !== null && o
      ? ((e.child = ri(e, t.child, null, i)), (e.child = ri(e, null, a, i)))
      : Xe(t, e, a, i),
    (e.memoizedState = n.state),
    s && If(e, r, !0),
    e.child
  );
}
function Dy(t) {
  var e = t.stateNode;
  e.pendingContext
    ? jf(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && jf(t, e.context, !1),
    Yd(t, e.containerInfo);
}
function Jf(t, e, r, n, s) {
  return ti(), qd(s), (e.flags |= 256), Xe(t, e, r, n), e.child;
}
var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function $c(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Uy(t, e, r) {
  var n = e.pendingProps,
    s = _e.current,
    i = !1,
    o = (e.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = t !== null && t.memoizedState === null ? !1 : (s & 2) !== 0),
    a
      ? ((i = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (s |= 1),
    ge(_e, s & 1),
    t === null)
  )
    return (
      Tc(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((o = n.children),
          (t = n.fallback),
          i
            ? ((n = e.mode),
              (i = e.child),
              (o = { mode: "hidden", children: o }),
              !(n & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = Dl(o, n, 0, null)),
              (t = Kn(t, n, r, null)),
              (i.return = e),
              (t.return = e),
              (i.sibling = t),
              (e.child = i),
              (e.child.memoizedState = $c(r)),
              (e.memoizedState = Ic),
              t)
            : oh(e, o))
    );
  if (((s = t.memoizedState), s !== null && ((a = s.dehydrated), a !== null)))
    return Rb(t, e, o, n, a, s, r);
  if (i) {
    (i = n.fallback), (o = e.mode), (s = t.child), (a = s.sibling);
    var l = { mode: "hidden", children: n.children };
    return (
      !(o & 1) && e.child !== s
        ? ((n = e.child),
          (n.childLanes = 0),
          (n.pendingProps = l),
          (e.deletions = null))
        : ((n = cn(s, l)), (n.subtreeFlags = s.subtreeFlags & 14680064)),
      a !== null ? (i = cn(a, i)) : ((i = Kn(i, o, r, null)), (i.flags |= 2)),
      (i.return = e),
      (n.return = e),
      (n.sibling = i),
      (e.child = n),
      (n = i),
      (i = e.child),
      (o = t.child.memoizedState),
      (o =
        o === null
          ? $c(r)
          : {
              baseLanes: o.baseLanes | r,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = t.childLanes & ~r),
      (e.memoizedState = Ic),
      n
    );
  }
  return (
    (i = t.child),
    (t = i.sibling),
    (n = cn(i, { mode: "visible", children: n.children })),
    !(e.mode & 1) && (n.lanes = r),
    (n.return = e),
    (n.sibling = null),
    t !== null &&
      ((r = e.deletions),
      r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t)),
    (e.child = n),
    (e.memoizedState = null),
    n
  );
}
function oh(t, e) {
  return (
    (e = Dl({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function la(t, e, r, n) {
  return (
    n !== null && qd(n),
    ri(e, t.child, null, r),
    (t = oh(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Rb(t, e, r, n, s, i, o) {
  if (r)
    return e.flags & 256
      ? ((e.flags &= -257), (n = Au(Error(N(422)))), la(t, e, o, n))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((i = n.fallback),
        (s = e.mode),
        (n = Dl({ mode: "visible", children: n.children }, s, 0, null)),
        (i = Kn(i, s, o, null)),
        (i.flags |= 2),
        (n.return = e),
        (i.return = e),
        (n.sibling = i),
        (e.child = n),
        e.mode & 1 && ri(e, t.child, null, o),
        (e.child.memoizedState = $c(o)),
        (e.memoizedState = Ic),
        i);
  if (!(e.mode & 1)) return la(t, e, o, null);
  if (s.data === "$!") {
    if (((n = s.nextSibling && s.nextSibling.dataset), n)) var a = n.dgst;
    return (n = a), (i = Error(N(419))), (n = Au(i, n, void 0)), la(t, e, o, n);
  }
  if (((a = (o & t.childLanes) !== 0), ot || a)) {
    if (((n = Ue), n !== null)) {
      switch (o & -o) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (n.suspendedLanes | o) ? 0 : s),
        s !== 0 &&
          s !== i.retryLane &&
          ((i.retryLane = s), kr(t, s), Kt(n, t, s, -1));
    }
    return hh(), (n = Au(Error(N(421)))), la(t, e, o, n);
  }
  return s.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = zb.bind(null, t)),
      (s._reactRetry = e),
      null)
    : ((t = i.treeContext),
      (gt = on(s.nextSibling)),
      (yt = e),
      (be = !0),
      (Ht = null),
      t !== null &&
        ((Et[Ct++] = vr),
        (Et[Ct++] = wr),
        (Et[Ct++] = Jn),
        (vr = t.id),
        (wr = t.overflow),
        (Jn = e)),
      (e = oh(e, n.children)),
      (e.flags |= 4096),
      e);
}
function Zf(t, e, r) {
  t.lanes |= e;
  var n = t.alternate;
  n !== null && (n.lanes |= e), Rc(t.return, e, r);
}
function Nu(t, e, r, n, s) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: s,
      })
    : ((i.isBackwards = e),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = n),
      (i.tail = r),
      (i.tailMode = s));
}
function Fy(t, e, r) {
  var n = e.pendingProps,
    s = n.revealOrder,
    i = n.tail;
  if ((Xe(t, e, n.children, r), (n = _e.current), n & 2))
    (n = (n & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Zf(t, r, e);
        else if (t.tag === 19) Zf(t, r, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    n &= 1;
  }
  if ((ge(_e, n), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (r = e.child, s = null; r !== null; )
          (t = r.alternate),
            t !== null && rl(t) === null && (s = r),
            (r = r.sibling);
        (r = s),
          r === null
            ? ((s = e.child), (e.child = null))
            : ((s = r.sibling), (r.sibling = null)),
          Nu(e, !1, s, r, i);
        break;
      case "backwards":
        for (r = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && rl(t) === null)) {
            e.child = s;
            break;
          }
          (t = s.sibling), (s.sibling = r), (r = s), (s = t);
        }
        Nu(e, !0, r, null, i);
        break;
      case "together":
        Nu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function ja(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Sr(t, e, r) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (Yn |= e.lanes),
    !(r & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(N(153));
  if (e.child !== null) {
    for (
      t = e.child, r = cn(t, t.pendingProps), e.child = r, r.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (r = r.sibling = cn(t, t.pendingProps)), (r.return = e);
    r.sibling = null;
  }
  return e.child;
}
function Pb(t, e, r) {
  switch (e.tag) {
    case 3:
      Dy(e), ti();
      break;
    case 5:
      hy(e);
      break;
    case 1:
      lt(e.type) && Ja(e);
      break;
    case 4:
      Yd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context,
        s = e.memoizedProps.value;
      ge(Xa, n._currentValue), (n._currentValue = s);
      break;
    case 13:
      if (((n = e.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ge(_e, _e.current & 1), (e.flags |= 128), null)
          : r & e.child.childLanes
          ? Uy(t, e, r)
          : (ge(_e, _e.current & 1),
            (t = Sr(t, e, r)),
            t !== null ? t.sibling : null);
      ge(_e, _e.current & 1);
      break;
    case 19:
      if (((n = (r & e.childLanes) !== 0), t.flags & 128)) {
        if (n) return Fy(t, e, r);
        e.flags |= 128;
      }
      if (
        ((s = e.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        ge(_e, _e.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Ly(t, e, r);
  }
  return Sr(t, e, r);
}
var zy, Lc, By, Wy;
zy = function (t, e) {
  for (var r = e.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
Lc = function () {};
By = function (t, e, r, n) {
  var s = t.memoizedProps;
  if (s !== n) {
    (t = e.stateNode), Dn(or.current);
    var i = null;
    switch (r) {
      case "input":
        (s = sc(t, s)), (n = sc(t, n)), (i = []);
        break;
      case "select":
        (s = Se({}, s, { value: void 0 })),
          (n = Se({}, n, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (s = ac(t, s)), (n = ac(t, n)), (i = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof n.onClick == "function" &&
          (t.onclick = Ga);
    }
    uc(r, n);
    var o;
    r = null;
    for (u in s)
      if (!n.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
        if (u === "style") {
          var a = s[u];
          for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Zi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in n) {
      var l = n[u];
      if (
        ((a = s != null ? s[u] : void 0),
        n.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (r || (r = {}), (r[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (r || (r = {}), (r[o] = l[o]));
          } else r || (i || (i = []), i.push(u, r)), (r = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (i = i || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (i = i || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Zi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && ve("scroll", t),
                  i || a === l || (i = []))
                : (i = i || []).push(u, l));
    }
    r && (i = i || []).push("style", r);
    var u = i;
    (e.updateQueue = u) && (e.flags |= 4);
  }
};
Wy = function (t, e, r, n) {
  r !== n && (e.flags |= 4);
};
function Ri(t, e) {
  if (!be)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var r = null; e !== null; )
          e.alternate !== null && (r = e), (e = e.sibling);
        r === null ? (t.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = t.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ke(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    r = 0,
    n = 0;
  if (e)
    for (var s = t.child; s !== null; )
      (r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags & 14680064),
        (n |= s.flags & 14680064),
        (s.return = t),
        (s = s.sibling);
  else
    for (s = t.child; s !== null; )
      (r |= s.lanes | s.childLanes),
        (n |= s.subtreeFlags),
        (n |= s.flags),
        (s.return = t),
        (s = s.sibling);
  return (t.subtreeFlags |= n), (t.childLanes = r), e;
}
function Ob(t, e, r) {
  var n = e.pendingProps;
  switch ((Hd(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ke(e), null;
    case 1:
      return lt(e.type) && Qa(), Ke(e), null;
    case 3:
      return (
        (n = e.stateNode),
        ni(),
        we(at),
        we(Je),
        eh(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (t === null || t.child === null) &&
          (oa(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Ht !== null && (Vc(Ht), (Ht = null)))),
        Lc(t, e),
        Ke(e),
        null
      );
    case 5:
      Xd(e);
      var s = Dn(uo.current);
      if (((r = e.type), t !== null && e.stateNode != null))
        By(t, e, r, n, s),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(N(166));
          return Ke(e), null;
        }
        if (((t = Dn(or.current)), oa(e))) {
          (n = e.stateNode), (r = e.type);
          var i = e.memoizedProps;
          switch (((n[nr] = e), (n[ao] = i), (t = (e.mode & 1) !== 0), r)) {
            case "dialog":
              ve("cancel", n), ve("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              ve("load", n);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Li.length; s++) ve(Li[s], n);
              break;
            case "source":
              ve("error", n);
              break;
            case "img":
            case "image":
            case "link":
              ve("error", n), ve("load", n);
              break;
            case "details":
              ve("toggle", n);
              break;
            case "input":
              of(n, i), ve("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!i.multiple }),
                ve("invalid", n);
              break;
            case "textarea":
              lf(n, i), ve("invalid", n);
          }
          uc(r, i), (s = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var a = i[o];
              o === "children"
                ? typeof a == "string"
                  ? n.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ia(n.textContent, a, t),
                    (s = ["children", a]))
                  : typeof a == "number" &&
                    n.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      ia(n.textContent, a, t),
                    (s = ["children", "" + a]))
                : Zi.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ve("scroll", n);
            }
          switch (r) {
            case "input":
              Zo(n), af(n, i, !0);
              break;
            case "textarea":
              Zo(n), uf(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (n.onclick = Ga);
          }
          (n = s), (e.updateQueue = n), n !== null && (e.flags |= 4);
        } else {
          (o = s.nodeType === 9 ? s : s.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = yg(r)),
            t === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((t = o.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof n.is == "string"
                ? (t = o.createElement(r, { is: n.is }))
                : ((t = o.createElement(r)),
                  r === "select" &&
                    ((o = t),
                    n.multiple
                      ? (o.multiple = !0)
                      : n.size && (o.size = n.size)))
              : (t = o.createElementNS(t, r)),
            (t[nr] = e),
            (t[ao] = n),
            zy(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((o = cc(r, n)), r)) {
              case "dialog":
                ve("cancel", t), ve("close", t), (s = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                ve("load", t), (s = n);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Li.length; s++) ve(Li[s], t);
                s = n;
                break;
              case "source":
                ve("error", t), (s = n);
                break;
              case "img":
              case "image":
              case "link":
                ve("error", t), ve("load", t), (s = n);
                break;
              case "details":
                ve("toggle", t), (s = n);
                break;
              case "input":
                of(t, n), (s = sc(t, n)), ve("invalid", t);
                break;
              case "option":
                s = n;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!n.multiple }),
                  (s = Se({}, n, { value: void 0 })),
                  ve("invalid", t);
                break;
              case "textarea":
                lf(t, n), (s = ac(t, n)), ve("invalid", t);
                break;
              default:
                s = n;
            }
            uc(r, s), (a = s);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var l = a[i];
                i === "style"
                  ? xg(t, l)
                  : i === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && vg(t, l))
                  : i === "children"
                  ? typeof l == "string"
                    ? (r !== "textarea" || l !== "") && Yi(t, l)
                    : typeof l == "number" && Yi(t, "" + l)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Zi.hasOwnProperty(i)
                      ? l != null && i === "onScroll" && ve("scroll", t)
                      : l != null && Od(t, i, l, o));
              }
            switch (r) {
              case "input":
                Zo(t), af(t, n, !1);
                break;
              case "textarea":
                Zo(t), uf(t);
                break;
              case "option":
                n.value != null && t.setAttribute("value", "" + fn(n.value));
                break;
              case "select":
                (t.multiple = !!n.multiple),
                  (i = n.value),
                  i != null
                    ? $s(t, !!n.multiple, i, !1)
                    : n.defaultValue != null &&
                      $s(t, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (t.onclick = Ga);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return Ke(e), null;
    case 6:
      if (t && e.stateNode != null) Wy(t, e, t.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(N(166));
        if (((r = Dn(uo.current)), Dn(or.current), oa(e))) {
          if (
            ((n = e.stateNode),
            (r = e.memoizedProps),
            (n[nr] = e),
            (i = n.nodeValue !== r) && ((t = yt), t !== null))
          )
            switch (t.tag) {
              case 3:
                ia(n.nodeValue, r, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  ia(n.nodeValue, r, (t.mode & 1) !== 0);
            }
          i && (e.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[nr] = e),
            (e.stateNode = n);
      }
      return Ke(e), null;
    case 13:
      if (
        (we(_e),
        (n = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (be && gt !== null && e.mode & 1 && !(e.flags & 128))
          ay(), ti(), (e.flags |= 98560), (i = !1);
        else if (((i = oa(e)), n !== null && n.dehydrated !== null)) {
          if (t === null) {
            if (!i) throw Error(N(318));
            if (
              ((i = e.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(N(317));
            i[nr] = e;
          } else
            ti(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          Ke(e), (i = !1);
        } else Ht !== null && (Vc(Ht), (Ht = null)), (i = !0);
        if (!i) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = r), e)
        : ((n = n !== null),
          n !== (t !== null && t.memoizedState !== null) &&
            n &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || _e.current & 1 ? Me === 0 && (Me = 3) : hh())),
          e.updateQueue !== null && (e.flags |= 4),
          Ke(e),
          null);
    case 4:
      return (
        ni(), Lc(t, e), t === null && io(e.stateNode.containerInfo), Ke(e), null
      );
    case 10:
      return Qd(e.type._context), Ke(e), null;
    case 17:
      return lt(e.type) && Qa(), Ke(e), null;
    case 19:
      if ((we(_e), (i = e.memoizedState), i === null)) return Ke(e), null;
      if (((n = (e.flags & 128) !== 0), (o = i.rendering), o === null))
        if (n) Ri(i, !1);
        else {
          if (Me !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((o = rl(t)), o !== null)) {
                for (
                  e.flags |= 128,
                    Ri(i, !1),
                    n = o.updateQueue,
                    n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    n = r,
                    r = e.child;
                  r !== null;

                )
                  (i = r),
                    (t = n),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = t),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (t = o.dependencies),
                        (i.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (r = r.sibling);
                return ge(_e, (_e.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          i.tail !== null &&
            Oe() > ii &&
            ((e.flags |= 128), (n = !0), Ri(i, !1), (e.lanes = 4194304));
        }
      else {
        if (!n)
          if (((t = rl(o)), t !== null)) {
            if (
              ((e.flags |= 128),
              (n = !0),
              (r = t.updateQueue),
              r !== null && ((e.updateQueue = r), (e.flags |= 4)),
              Ri(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !be)
            )
              return Ke(e), null;
          } else
            2 * Oe() - i.renderingStartTime > ii &&
              r !== 1073741824 &&
              ((e.flags |= 128), (n = !0), Ri(i, !1), (e.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = e.child), (e.child = o))
          : ((r = i.last),
            r !== null ? (r.sibling = o) : (e.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((e = i.tail),
          (i.rendering = e),
          (i.tail = e.sibling),
          (i.renderingStartTime = Oe()),
          (e.sibling = null),
          (r = _e.current),
          ge(_e, n ? (r & 1) | 2 : r & 1),
          e)
        : (Ke(e), null);
    case 22:
    case 23:
      return (
        dh(),
        (n = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== n && (e.flags |= 8192),
        n && e.mode & 1
          ? ht & 1073741824 && (Ke(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : Ke(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, e.tag));
}
function Ab(t, e) {
  switch ((Hd(e), e.tag)) {
    case 1:
      return (
        lt(e.type) && Qa(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        ni(),
        we(at),
        we(Je),
        eh(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Xd(e), null;
    case 13:
      if (
        (we(_e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(N(340));
        ti();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return we(_e), null;
    case 4:
      return ni(), null;
    case 10:
      return Qd(e.type._context), null;
    case 22:
    case 23:
      return dh(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ua = !1,
  Qe = !1,
  Nb = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Ns(t, e) {
  var r = t.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        Pe(t, e, n);
      }
    else r.current = null;
}
function Mc(t, e, r) {
  try {
    r();
  } catch (n) {
    Pe(t, e, n);
  }
}
var Yf = !1;
function jb(t, e) {
  if (((xc = Ha), (t = Gg()), Wd(t))) {
    if ("selectionStart" in t)
      var r = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        r = ((r = t.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var s = n.anchorOffset,
            i = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, i.nodeType;
          } catch {
            r = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            h = t,
            f = null;
          t: for (;;) {
            for (
              var d;
              h !== r || (s !== 0 && h.nodeType !== 3) || (a = o + s),
                h !== i || (n !== 0 && h.nodeType !== 3) || (l = o + n),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (d = h.firstChild) !== null;

            )
              (f = h), (h = d);
            for (;;) {
              if (h === t) break t;
              if (
                (f === r && ++u === s && (a = o),
                f === i && ++c === n && (l = o),
                (d = h.nextSibling) !== null)
              )
                break;
              (h = f), (f = h.parentNode);
            }
            h = d;
          }
          r = a === -1 || l === -1 ? null : { start: a, end: l };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (bc = { focusedElem: t, selectionRange: r }, Ha = !1, z = e; z !== null; )
    if (((e = z), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (z = t);
    else
      for (; z !== null; ) {
        e = z;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var p = v.memoizedProps,
                    x = v.memoizedState,
                    g = e.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? p : Dt(e.type, p),
                      x
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var y = e.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (_) {
          Pe(e, e.return, _);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (z = t);
          break;
        }
        z = e.return;
      }
  return (v = Yf), (Yf = !1), v;
}
function Hi(t, e, r) {
  var n = e.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var s = (n = n.next);
    do {
      if ((s.tag & t) === t) {
        var i = s.destroy;
        (s.destroy = void 0), i !== void 0 && Mc(e, r, i);
      }
      s = s.next;
    } while (s !== n);
  }
}
function Ll(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var r = (e = e.next);
    do {
      if ((r.tag & t) === t) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== e);
  }
}
function Dc(t) {
  var e = t.ref;
  if (e !== null) {
    var r = t.stateNode;
    switch (t.tag) {
      case 5:
        t = r;
        break;
      default:
        t = r;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function Vy(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Vy(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[nr], delete e[ao], delete e[Sc], delete e[mb], delete e[gb])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Hy(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Xf(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Hy(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Uc(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    (t = t.stateNode),
      e
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(t, e)
          : r.insertBefore(t, e)
        : (r.nodeType === 8
            ? ((e = r.parentNode), e.insertBefore(t, r))
            : ((e = r), e.appendChild(t)),
          (r = r._reactRootContainer),
          r != null || e.onclick !== null || (e.onclick = Ga));
  else if (n !== 4 && ((t = t.child), t !== null))
    for (Uc(t, e, r), t = t.sibling; t !== null; ) Uc(t, e, r), (t = t.sibling);
}
function Fc(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    (t = t.stateNode), e ? r.insertBefore(t, e) : r.appendChild(t);
  else if (n !== 4 && ((t = t.child), t !== null))
    for (Fc(t, e, r), t = t.sibling; t !== null; ) Fc(t, e, r), (t = t.sibling);
}
var Be = null,
  Wt = !1;
function Lr(t, e, r) {
  for (r = r.child; r !== null; ) qy(t, e, r), (r = r.sibling);
}
function qy(t, e, r) {
  if (ir && typeof ir.onCommitFiberUnmount == "function")
    try {
      ir.onCommitFiberUnmount(Rl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      Qe || Ns(r, e);
    case 6:
      var n = Be,
        s = Wt;
      (Be = null),
        Lr(t, e, r),
        (Be = n),
        (Wt = s),
        Be !== null &&
          (Wt
            ? ((t = Be),
              (r = r.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r))
            : Be.removeChild(r.stateNode));
      break;
    case 18:
      Be !== null &&
        (Wt
          ? ((t = Be),
            (r = r.stateNode),
            t.nodeType === 8
              ? Eu(t.parentNode, r)
              : t.nodeType === 1 && Eu(t, r),
            ro(t))
          : Eu(Be, r.stateNode));
      break;
    case 4:
      (n = Be),
        (s = Wt),
        (Be = r.stateNode.containerInfo),
        (Wt = !0),
        Lr(t, e, r),
        (Be = n),
        (Wt = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Qe &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        s = n = n.next;
        do {
          var i = s,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Mc(r, e, o),
            (s = s.next);
        } while (s !== n);
      }
      Lr(t, e, r);
      break;
    case 1:
      if (
        !Qe &&
        (Ns(r, e),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (a) {
          Pe(r, e, a);
        }
      Lr(t, e, r);
      break;
    case 21:
      Lr(t, e, r);
      break;
    case 22:
      r.mode & 1
        ? ((Qe = (n = Qe) || r.memoizedState !== null), Lr(t, e, r), (Qe = n))
        : Lr(t, e, r);
      break;
    default:
      Lr(t, e, r);
  }
}
function ep(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var r = t.stateNode;
    r === null && (r = t.stateNode = new Nb()),
      e.forEach(function (n) {
        var s = Bb.bind(null, t, n);
        r.has(n) || (r.add(n), n.then(s, s));
      });
  }
}
function $t(t, e) {
  var r = e.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var s = r[n];
      try {
        var i = t,
          o = e,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Be = a.stateNode), (Wt = !1);
              break e;
            case 3:
              (Be = a.stateNode.containerInfo), (Wt = !0);
              break e;
            case 4:
              (Be = a.stateNode.containerInfo), (Wt = !0);
              break e;
          }
          a = a.return;
        }
        if (Be === null) throw Error(N(160));
        qy(i, o, s), (Be = null), (Wt = !1);
        var l = s.alternate;
        l !== null && (l.return = null), (s.return = null);
      } catch (u) {
        Pe(s, e, u);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) Ky(e, t), (e = e.sibling);
}
function Ky(t, e) {
  var r = t.alternate,
    n = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (($t(e, t), Yt(t), n & 4)) {
        try {
          Hi(3, t, t.return), Ll(3, t);
        } catch (p) {
          Pe(t, t.return, p);
        }
        try {
          Hi(5, t, t.return);
        } catch (p) {
          Pe(t, t.return, p);
        }
      }
      break;
    case 1:
      $t(e, t), Yt(t), n & 512 && r !== null && Ns(r, r.return);
      break;
    case 5:
      if (
        ($t(e, t),
        Yt(t),
        n & 512 && r !== null && Ns(r, r.return),
        t.flags & 32)
      ) {
        var s = t.stateNode;
        try {
          Yi(s, "");
        } catch (p) {
          Pe(t, t.return, p);
        }
      }
      if (n & 4 && ((s = t.stateNode), s != null)) {
        var i = t.memoizedProps,
          o = r !== null ? r.memoizedProps : i,
          a = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && mg(s, i),
              cc(a, o);
            var u = cc(a, i);
            for (o = 0; o < l.length; o += 2) {
              var c = l[o],
                h = l[o + 1];
              c === "style"
                ? xg(s, h)
                : c === "dangerouslySetInnerHTML"
                ? vg(s, h)
                : c === "children"
                ? Yi(s, h)
                : Od(s, c, h, u);
            }
            switch (a) {
              case "input":
                ic(s, i);
                break;
              case "textarea":
                gg(s, i);
                break;
              case "select":
                var f = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!i.multiple;
                var d = i.value;
                d != null
                  ? $s(s, !!i.multiple, d, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? $s(s, !!i.multiple, i.defaultValue, !0)
                      : $s(s, !!i.multiple, i.multiple ? [] : "", !1));
            }
            s[ao] = i;
          } catch (p) {
            Pe(t, t.return, p);
          }
      }
      break;
    case 6:
      if (($t(e, t), Yt(t), n & 4)) {
        if (t.stateNode === null) throw Error(N(162));
        (s = t.stateNode), (i = t.memoizedProps);
        try {
          s.nodeValue = i;
        } catch (p) {
          Pe(t, t.return, p);
        }
      }
      break;
    case 3:
      if (
        ($t(e, t), Yt(t), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          ro(e.containerInfo);
        } catch (p) {
          Pe(t, t.return, p);
        }
      break;
    case 4:
      $t(e, t), Yt(t);
      break;
    case 13:
      $t(e, t),
        Yt(t),
        (s = t.child),
        s.flags & 8192 &&
          ((i = s.memoizedState !== null),
          (s.stateNode.isHidden = i),
          !i ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (uh = Oe())),
        n & 4 && ep(t);
      break;
    case 22:
      if (
        ((c = r !== null && r.memoizedState !== null),
        t.mode & 1 ? ((Qe = (u = Qe) || c), $t(e, t), (Qe = u)) : $t(e, t),
        Yt(t),
        n & 8192)
      ) {
        if (
          ((u = t.memoizedState !== null),
          (t.stateNode.isHidden = u) && !c && t.mode & 1)
        )
          for (z = t, c = t.child; c !== null; ) {
            for (h = z = c; z !== null; ) {
              switch (((f = z), (d = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, f, f.return);
                  break;
                case 1:
                  Ns(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (n = f), (r = f.return);
                    try {
                      (e = n),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (p) {
                      Pe(n, r, p);
                    }
                  }
                  break;
                case 5:
                  Ns(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    rp(h);
                    continue;
                  }
              }
              d !== null ? ((d.return = f), (z = d)) : rp(h);
            }
            c = c.sibling;
          }
        e: for (c = null, h = t; ; ) {
          if (h.tag === 5) {
            if (c === null) {
              c = h;
              try {
                (s = h.stateNode),
                  u
                    ? ((i = s.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = h.stateNode),
                      (l = h.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = wg("display", o)));
              } catch (p) {
                Pe(t, t.return, p);
              }
            }
          } else if (h.tag === 6) {
            if (c === null)
              try {
                h.stateNode.nodeValue = u ? "" : h.memoizedProps;
              } catch (p) {
                Pe(t, t.return, p);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === t) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === t) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === t) break e;
            c === h && (c = null), (h = h.return);
          }
          c === h && (c = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      $t(e, t), Yt(t), n & 4 && ep(t);
      break;
    case 21:
      break;
    default:
      $t(e, t), Yt(t);
  }
}
function Yt(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var r = t.return; r !== null; ) {
          if (Hy(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(N(160));
      }
      switch (n.tag) {
        case 5:
          var s = n.stateNode;
          n.flags & 32 && (Yi(s, ""), (n.flags &= -33));
          var i = Xf(t);
          Fc(t, i, s);
          break;
        case 3:
        case 4:
          var o = n.stateNode.containerInfo,
            a = Xf(t);
          Uc(t, a, o);
          break;
        default:
          throw Error(N(161));
      }
    } catch (l) {
      Pe(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function Ib(t, e, r) {
  (z = t), Gy(t);
}
function Gy(t, e, r) {
  for (var n = (t.mode & 1) !== 0; z !== null; ) {
    var s = z,
      i = s.child;
    if (s.tag === 22 && n) {
      var o = s.memoizedState !== null || ua;
      if (!o) {
        var a = s.alternate,
          l = (a !== null && a.memoizedState !== null) || Qe;
        a = ua;
        var u = Qe;
        if (((ua = o), (Qe = l) && !u))
          for (z = s; z !== null; )
            (o = z),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? np(s)
                : l !== null
                ? ((l.return = o), (z = l))
                : np(s);
        for (; i !== null; ) (z = i), Gy(i), (i = i.sibling);
        (z = s), (ua = a), (Qe = u);
      }
      tp(t);
    } else
      s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (z = i)) : tp(t);
  }
}
function tp(t) {
  for (; z !== null; ) {
    var e = z;
    if (e.flags & 8772) {
      var r = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Qe || Ll(5, e);
              break;
            case 1:
              var n = e.stateNode;
              if (e.flags & 4 && !Qe)
                if (r === null) n.componentDidMount();
                else {
                  var s =
                    e.elementType === e.type
                      ? r.memoizedProps
                      : Dt(e.type, r.memoizedProps);
                  n.componentDidUpdate(
                    s,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = e.updateQueue;
              i !== null && Uf(e, i, n);
              break;
            case 3:
              var o = e.updateQueue;
              if (o !== null) {
                if (((r = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      r = e.child.stateNode;
                      break;
                    case 1:
                      r = e.child.stateNode;
                  }
                Uf(e, o, r);
              }
              break;
            case 5:
              var a = e.stateNode;
              if (r === null && e.flags & 4) {
                r = a;
                var l = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && r.focus();
                    break;
                  case "img":
                    l.src && (r.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var u = e.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var h = c.dehydrated;
                    h !== null && ro(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Qe || (e.flags & 512 && Dc(e));
      } catch (f) {
        Pe(e, e.return, f);
      }
    }
    if (e === t) {
      z = null;
      break;
    }
    if (((r = e.sibling), r !== null)) {
      (r.return = e.return), (z = r);
      break;
    }
    z = e.return;
  }
}
function rp(t) {
  for (; z !== null; ) {
    var e = z;
    if (e === t) {
      z = null;
      break;
    }
    var r = e.sibling;
    if (r !== null) {
      (r.return = e.return), (z = r);
      break;
    }
    z = e.return;
  }
}
function np(t) {
  for (; z !== null; ) {
    var e = z;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var r = e.return;
          try {
            Ll(4, e);
          } catch (l) {
            Pe(e, r, l);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var s = e.return;
            try {
              n.componentDidMount();
            } catch (l) {
              Pe(e, s, l);
            }
          }
          var i = e.return;
          try {
            Dc(e);
          } catch (l) {
            Pe(e, i, l);
          }
          break;
        case 5:
          var o = e.return;
          try {
            Dc(e);
          } catch (l) {
            Pe(e, o, l);
          }
      }
    } catch (l) {
      Pe(e, e.return, l);
    }
    if (e === t) {
      z = null;
      break;
    }
    var a = e.sibling;
    if (a !== null) {
      (a.return = e.return), (z = a);
      break;
    }
    z = e.return;
  }
}
var $b = Math.ceil,
  il = Rr.ReactCurrentDispatcher,
  ah = Rr.ReactCurrentOwner,
  Rt = Rr.ReactCurrentBatchConfig,
  ae = 0,
  Ue = null,
  Ne = null,
  We = 0,
  ht = 0,
  js = _n(0),
  Me = 0,
  po = null,
  Yn = 0,
  Ml = 0,
  lh = 0,
  qi = null,
  it = null,
  uh = 0,
  ii = 1 / 0,
  pr = null,
  ol = !1,
  zc = null,
  ln = null,
  ca = !1,
  Xr = null,
  al = 0,
  Ki = 0,
  Bc = null,
  Ia = -1,
  $a = 0;
function tt() {
  return ae & 6 ? Oe() : Ia !== -1 ? Ia : (Ia = Oe());
}
function un(t) {
  return t.mode & 1
    ? ae & 2 && We !== 0
      ? We & -We
      : vb.transition !== null
      ? ($a === 0 && ($a = Ng()), $a)
      : ((t = fe),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Ug(t.type))),
        t)
    : 1;
}
function Kt(t, e, r, n) {
  if (50 < Ki) throw ((Ki = 0), (Bc = null), Error(N(185)));
  $o(t, r, n),
    (!(ae & 2) || t !== Ue) &&
      (t === Ue && (!(ae & 2) && (Ml |= r), Me === 4 && Hr(t, We)),
      ut(t, n),
      r === 1 && ae === 0 && !(e.mode & 1) && ((ii = Oe() + 500), jl && kn()));
}
function ut(t, e) {
  var r = t.callbackNode;
  vx(t, e);
  var n = Va(t, t === Ue ? We : 0);
  if (n === 0)
    r !== null && hf(r), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = n & -n), t.callbackPriority !== e)) {
    if ((r != null && hf(r), e === 1))
      t.tag === 0 ? yb(sp.bind(null, t)) : sy(sp.bind(null, t)),
        fb(function () {
          !(ae & 6) && kn();
        }),
        (r = null);
    else {
      switch (jg(n)) {
        case 1:
          r = $d;
          break;
        case 4:
          r = Og;
          break;
        case 16:
          r = Wa;
          break;
        case 536870912:
          r = Ag;
          break;
        default:
          r = Wa;
      }
      r = rv(r, Qy.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = r);
  }
}
function Qy(t, e) {
  if (((Ia = -1), ($a = 0), ae & 6)) throw Error(N(327));
  var r = t.callbackNode;
  if (Fs() && t.callbackNode !== r) return null;
  var n = Va(t, t === Ue ? We : 0);
  if (n === 0) return null;
  if (n & 30 || n & t.expiredLanes || e) e = ll(t, n);
  else {
    e = n;
    var s = ae;
    ae |= 2;
    var i = Zy();
    (Ue !== t || We !== e) && ((pr = null), (ii = Oe() + 500), qn(t, e));
    do
      try {
        Db();
        break;
      } catch (a) {
        Jy(t, a);
      }
    while (!0);
    Gd(),
      (il.current = i),
      (ae = s),
      Ne !== null ? (e = 0) : ((Ue = null), (We = 0), (e = Me));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((s = mc(t)), s !== 0 && ((n = s), (e = Wc(t, s)))), e === 1)
    )
      throw ((r = po), qn(t, 0), Hr(t, n), ut(t, Oe()), r);
    if (e === 6) Hr(t, n);
    else {
      if (
        ((s = t.current.alternate),
        !(n & 30) &&
          !Lb(s) &&
          ((e = ll(t, n)),
          e === 2 && ((i = mc(t)), i !== 0 && ((n = i), (e = Wc(t, i)))),
          e === 1))
      )
        throw ((r = po), qn(t, 0), Hr(t, n), ut(t, Oe()), r);
      switch (((t.finishedWork = s), (t.finishedLanes = n), e)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Nn(t, it, pr);
          break;
        case 3:
          if (
            (Hr(t, n), (n & 130023424) === n && ((e = uh + 500 - Oe()), 10 < e))
          ) {
            if (Va(t, 0) !== 0) break;
            if (((s = t.suspendedLanes), (s & n) !== n)) {
              tt(), (t.pingedLanes |= t.suspendedLanes & s);
              break;
            }
            t.timeoutHandle = kc(Nn.bind(null, t, it, pr), e);
            break;
          }
          Nn(t, it, pr);
          break;
        case 4:
          if ((Hr(t, n), (n & 4194240) === n)) break;
          for (e = t.eventTimes, s = -1; 0 < n; ) {
            var o = 31 - qt(n);
            (i = 1 << o), (o = e[o]), o > s && (s = o), (n &= ~i);
          }
          if (
            ((n = s),
            (n = Oe() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * $b(n / 1960)) - n),
            10 < n)
          ) {
            t.timeoutHandle = kc(Nn.bind(null, t, it, pr), n);
            break;
          }
          Nn(t, it, pr);
          break;
        case 5:
          Nn(t, it, pr);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return ut(t, Oe()), t.callbackNode === r ? Qy.bind(null, t) : null;
}
function Wc(t, e) {
  var r = qi;
  return (
    t.current.memoizedState.isDehydrated && (qn(t, e).flags |= 256),
    (t = ll(t, e)),
    t !== 2 && ((e = it), (it = r), e !== null && Vc(e)),
    t
  );
}
function Vc(t) {
  it === null ? (it = t) : it.push.apply(it, t);
}
function Lb(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var r = e.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var s = r[n],
            i = s.getSnapshot;
          s = s.value;
          try {
            if (!Gt(i(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = e.child), e.subtreeFlags & 16384 && r !== null))
      (r.return = e), (e = r);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Hr(t, e) {
  for (
    e &= ~lh,
      e &= ~Ml,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var r = 31 - qt(e),
      n = 1 << r;
    (t[r] = -1), (e &= ~n);
  }
}
function sp(t) {
  if (ae & 6) throw Error(N(327));
  Fs();
  var e = Va(t, 0);
  if (!(e & 1)) return ut(t, Oe()), null;
  var r = ll(t, e);
  if (t.tag !== 0 && r === 2) {
    var n = mc(t);
    n !== 0 && ((e = n), (r = Wc(t, n)));
  }
  if (r === 1) throw ((r = po), qn(t, 0), Hr(t, e), ut(t, Oe()), r);
  if (r === 6) throw Error(N(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    Nn(t, it, pr),
    ut(t, Oe()),
    null
  );
}
function ch(t, e) {
  var r = ae;
  ae |= 1;
  try {
    return t(e);
  } finally {
    (ae = r), ae === 0 && ((ii = Oe() + 500), jl && kn());
  }
}
function Xn(t) {
  Xr !== null && Xr.tag === 0 && !(ae & 6) && Fs();
  var e = ae;
  ae |= 1;
  var r = Rt.transition,
    n = fe;
  try {
    if (((Rt.transition = null), (fe = 1), t)) return t();
  } finally {
    (fe = n), (Rt.transition = r), (ae = e), !(ae & 6) && kn();
  }
}
function dh() {
  (ht = js.current), we(js);
}
function qn(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var r = t.timeoutHandle;
  if ((r !== -1 && ((t.timeoutHandle = -1), hb(r)), Ne !== null))
    for (r = Ne.return; r !== null; ) {
      var n = r;
      switch ((Hd(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Qa();
          break;
        case 3:
          ni(), we(at), we(Je), eh();
          break;
        case 5:
          Xd(n);
          break;
        case 4:
          ni();
          break;
        case 13:
          we(_e);
          break;
        case 19:
          we(_e);
          break;
        case 10:
          Qd(n.type._context);
          break;
        case 22:
        case 23:
          dh();
      }
      r = r.return;
    }
  if (
    ((Ue = t),
    (Ne = t = cn(t.current, null)),
    (We = ht = e),
    (Me = 0),
    (po = null),
    (lh = Ml = Yn = 0),
    (it = qi = null),
    Mn !== null)
  ) {
    for (e = 0; e < Mn.length; e++)
      if (((r = Mn[e]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var s = n.next,
          i = r.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = s), (n.next = o);
        }
        r.pending = n;
      }
    Mn = null;
  }
  return t;
}
function Jy(t, e) {
  do {
    var r = Ne;
    try {
      if ((Gd(), (Aa.current = sl), nl)) {
        for (var n = ke.memoizedState; n !== null; ) {
          var s = n.queue;
          s !== null && (s.pending = null), (n = n.next);
        }
        nl = !1;
      }
      if (
        ((Zn = 0),
        (De = $e = ke = null),
        (Vi = !1),
        (co = 0),
        (ah.current = null),
        r === null || r.return === null)
      ) {
        (Me = 1), (po = e), (Ne = null);
        break;
      }
      e: {
        var i = t,
          o = r.return,
          a = r,
          l = e;
        if (
          ((e = We),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            h = c.tag;
          if (!(c.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var d = Hf(o);
          if (d !== null) {
            (d.flags &= -257),
              qf(d, o, a, i, e),
              d.mode & 1 && Vf(i, u, e),
              (e = d),
              (l = u);
            var v = e.updateQueue;
            if (v === null) {
              var p = new Set();
              p.add(l), (e.updateQueue = p);
            } else v.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Vf(i, u, e), hh();
              break e;
            }
            l = Error(N(426));
          }
        } else if (be && a.mode & 1) {
          var x = Hf(o);
          if (x !== null) {
            !(x.flags & 65536) && (x.flags |= 256),
              qf(x, o, a, i, e),
              qd(si(l, a));
            break e;
          }
        }
        (i = l = si(l, a)),
          Me !== 4 && (Me = 2),
          qi === null ? (qi = [i]) : qi.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (e &= -e), (i.lanes |= e);
              var g = jy(i, l, e);
              Df(i, g);
              break e;
            case 1:
              a = l;
              var m = i.type,
                y = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (ln === null || !ln.has(y))))
              ) {
                (i.flags |= 65536), (e &= -e), (i.lanes |= e);
                var _ = Iy(i, a, e);
                Df(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Xy(r);
    } catch (S) {
      (e = S), Ne === r && r !== null && (Ne = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function Zy() {
  var t = il.current;
  return (il.current = sl), t === null ? sl : t;
}
function hh() {
  (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Ue === null || (!(Yn & 268435455) && !(Ml & 268435455)) || Hr(Ue, We);
}
function ll(t, e) {
  var r = ae;
  ae |= 2;
  var n = Zy();
  (Ue !== t || We !== e) && ((pr = null), qn(t, e));
  do
    try {
      Mb();
      break;
    } catch (s) {
      Jy(t, s);
    }
  while (!0);
  if ((Gd(), (ae = r), (il.current = n), Ne !== null)) throw Error(N(261));
  return (Ue = null), (We = 0), Me;
}
function Mb() {
  for (; Ne !== null; ) Yy(Ne);
}
function Db() {
  for (; Ne !== null && !ux(); ) Yy(Ne);
}
function Yy(t) {
  var e = tv(t.alternate, t, ht);
  (t.memoizedProps = t.pendingProps),
    e === null ? Xy(t) : (Ne = e),
    (ah.current = null);
}
function Xy(t) {
  var e = t;
  do {
    var r = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((r = Ab(r, e)), r !== null)) {
        (r.flags &= 32767), (Ne = r);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (Me = 6), (Ne = null);
        return;
      }
    } else if (((r = Ob(r, e, ht)), r !== null)) {
      Ne = r;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      Ne = e;
      return;
    }
    Ne = e = t;
  } while (e !== null);
  Me === 0 && (Me = 5);
}
function Nn(t, e, r) {
  var n = fe,
    s = Rt.transition;
  try {
    (Rt.transition = null), (fe = 1), Ub(t, e, r, n);
  } finally {
    (Rt.transition = s), (fe = n);
  }
  return null;
}
function Ub(t, e, r, n) {
  do Fs();
  while (Xr !== null);
  if (ae & 6) throw Error(N(327));
  r = t.finishedWork;
  var s = t.finishedLanes;
  if (r === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), r === t.current))
    throw Error(N(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var i = r.lanes | r.childLanes;
  if (
    (wx(t, i),
    t === Ue && ((Ne = Ue = null), (We = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ca ||
      ((ca = !0),
      rv(Wa, function () {
        return Fs(), null;
      })),
    (i = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || i)
  ) {
    (i = Rt.transition), (Rt.transition = null);
    var o = fe;
    fe = 1;
    var a = ae;
    (ae |= 4),
      (ah.current = null),
      jb(t, r),
      Ky(r, t),
      ib(bc),
      (Ha = !!xc),
      (bc = xc = null),
      (t.current = r),
      Ib(r),
      cx(),
      (ae = a),
      (fe = o),
      (Rt.transition = i);
  } else t.current = r;
  if (
    (ca && ((ca = !1), (Xr = t), (al = s)),
    (i = t.pendingLanes),
    i === 0 && (ln = null),
    fx(r.stateNode),
    ut(t, Oe()),
    e !== null)
  )
    for (n = t.onRecoverableError, r = 0; r < e.length; r++)
      (s = e[r]), n(s.value, { componentStack: s.stack, digest: s.digest });
  if (ol) throw ((ol = !1), (t = zc), (zc = null), t);
  return (
    al & 1 && t.tag !== 0 && Fs(),
    (i = t.pendingLanes),
    i & 1 ? (t === Bc ? Ki++ : ((Ki = 0), (Bc = t))) : (Ki = 0),
    kn(),
    null
  );
}
function Fs() {
  if (Xr !== null) {
    var t = jg(al),
      e = Rt.transition,
      r = fe;
    try {
      if (((Rt.transition = null), (fe = 16 > t ? 16 : t), Xr === null))
        var n = !1;
      else {
        if (((t = Xr), (Xr = null), (al = 0), ae & 6)) throw Error(N(331));
        var s = ae;
        for (ae |= 4, z = t.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (z = u; z !== null; ) {
                  var c = z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Hi(8, c, i);
                  }
                  var h = c.child;
                  if (h !== null) (h.return = c), (z = h);
                  else
                    for (; z !== null; ) {
                      c = z;
                      var f = c.sibling,
                        d = c.return;
                      if ((Vy(c), c === u)) {
                        z = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = d), (z = f);
                        break;
                      }
                      z = d;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var p = v.child;
                if (p !== null) {
                  v.child = null;
                  do {
                    var x = p.sibling;
                    (p.sibling = null), (p = x);
                  } while (p !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Hi(9, i, i.return);
                }
              var g = i.sibling;
              if (g !== null) {
                (g.return = i.return), (z = g);
                break e;
              }
              z = i.return;
            }
        }
        var m = t.current;
        for (z = m; z !== null; ) {
          o = z;
          var y = o.child;
          if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (z = y);
          else
            e: for (o = m; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ll(9, a);
                  }
                } catch (S) {
                  Pe(a, a.return, S);
                }
              if (a === o) {
                z = null;
                break e;
              }
              var _ = a.sibling;
              if (_ !== null) {
                (_.return = a.return), (z = _);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((ae = s), kn(), ir && typeof ir.onPostCommitFiberRoot == "function")
        )
          try {
            ir.onPostCommitFiberRoot(Rl, t);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (fe = r), (Rt.transition = e);
    }
  }
  return !1;
}
function ip(t, e, r) {
  (e = si(r, e)),
    (e = jy(t, e, 1)),
    (t = an(t, e, 1)),
    (e = tt()),
    t !== null && ($o(t, 1, e), ut(t, e));
}
function Pe(t, e, r) {
  if (t.tag === 3) ip(t, t, r);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        ip(e, t, r);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (ln === null || !ln.has(n)))
        ) {
          (t = si(r, t)),
            (t = Iy(e, t, 1)),
            (e = an(e, t, 1)),
            (t = tt()),
            e !== null && ($o(e, 1, t), ut(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function Fb(t, e, r) {
  var n = t.pingCache;
  n !== null && n.delete(e),
    (e = tt()),
    (t.pingedLanes |= t.suspendedLanes & r),
    Ue === t &&
      (We & r) === r &&
      (Me === 4 || (Me === 3 && (We & 130023424) === We && 500 > Oe() - uh)
        ? qn(t, 0)
        : (lh |= r)),
    ut(t, e);
}
function ev(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = ea), (ea <<= 1), !(ea & 130023424) && (ea = 4194304))
      : (e = 1));
  var r = tt();
  (t = kr(t, e)), t !== null && ($o(t, e, r), ut(t, r));
}
function zb(t) {
  var e = t.memoizedState,
    r = 0;
  e !== null && (r = e.retryLane), ev(t, r);
}
function Bb(t, e) {
  var r = 0;
  switch (t.tag) {
    case 13:
      var n = t.stateNode,
        s = t.memoizedState;
      s !== null && (r = s.retryLane);
      break;
    case 19:
      n = t.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  n !== null && n.delete(e), ev(t, r);
}
var tv;
tv = function (t, e, r) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || at.current) ot = !0;
    else {
      if (!(t.lanes & r) && !(e.flags & 128)) return (ot = !1), Pb(t, e, r);
      ot = !!(t.flags & 131072);
    }
  else (ot = !1), be && e.flags & 1048576 && iy(e, Ya, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var n = e.type;
      ja(t, e), (t = e.pendingProps);
      var s = ei(e, Je.current);
      Us(e, r), (s = rh(null, e, n, t, s, r));
      var i = nh();
      return (
        (e.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            lt(n) ? ((i = !0), Ja(e)) : (i = !1),
            (e.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            Zd(e),
            (s.updater = $l),
            (e.stateNode = s),
            (s._reactInternals = e),
            Oc(e, n, t, r),
            (e = jc(null, e, n, !0, i, r)))
          : ((e.tag = 0), be && i && Vd(e), Xe(null, e, s, r), (e = e.child)),
        e
      );
    case 16:
      n = e.elementType;
      e: {
        switch (
          (ja(t, e),
          (t = e.pendingProps),
          (s = n._init),
          (n = s(n._payload)),
          (e.type = n),
          (s = e.tag = Vb(n)),
          (t = Dt(n, t)),
          s)
        ) {
          case 0:
            e = Nc(null, e, n, t, r);
            break e;
          case 1:
            e = Qf(null, e, n, t, r);
            break e;
          case 11:
            e = Kf(null, e, n, t, r);
            break e;
          case 14:
            e = Gf(null, e, n, Dt(n.type, t), r);
            break e;
        }
        throw Error(N(306, n, ""));
      }
      return e;
    case 0:
      return (
        (n = e.type),
        (s = e.pendingProps),
        (s = e.elementType === n ? s : Dt(n, s)),
        Nc(t, e, n, s, r)
      );
    case 1:
      return (
        (n = e.type),
        (s = e.pendingProps),
        (s = e.elementType === n ? s : Dt(n, s)),
        Qf(t, e, n, s, r)
      );
    case 3:
      e: {
        if ((Dy(e), t === null)) throw Error(N(387));
        (n = e.pendingProps),
          (i = e.memoizedState),
          (s = i.element),
          dy(t, e),
          tl(e, n, null, r);
        var o = e.memoizedState;
        if (((n = o.element), i.isDehydrated))
          if (
            ((i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (e.updateQueue.baseState = i),
            (e.memoizedState = i),
            e.flags & 256)
          ) {
            (s = si(Error(N(423)), e)), (e = Jf(t, e, n, r, s));
            break e;
          } else if (n !== s) {
            (s = si(Error(N(424)), e)), (e = Jf(t, e, n, r, s));
            break e;
          } else
            for (
              gt = on(e.stateNode.containerInfo.firstChild),
                yt = e,
                be = !0,
                Ht = null,
                r = uy(e, null, n, r),
                e.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((ti(), n === s)) {
            e = Sr(t, e, r);
            break e;
          }
          Xe(t, e, n, r);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        hy(e),
        t === null && Tc(e),
        (n = e.type),
        (s = e.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (o = s.children),
        _c(n, s) ? (o = null) : i !== null && _c(n, i) && (e.flags |= 32),
        My(t, e),
        Xe(t, e, o, r),
        e.child
      );
    case 6:
      return t === null && Tc(e), null;
    case 13:
      return Uy(t, e, r);
    case 4:
      return (
        Yd(e, e.stateNode.containerInfo),
        (n = e.pendingProps),
        t === null ? (e.child = ri(e, null, n, r)) : Xe(t, e, n, r),
        e.child
      );
    case 11:
      return (
        (n = e.type),
        (s = e.pendingProps),
        (s = e.elementType === n ? s : Dt(n, s)),
        Kf(t, e, n, s, r)
      );
    case 7:
      return Xe(t, e, e.pendingProps, r), e.child;
    case 8:
      return Xe(t, e, e.pendingProps.children, r), e.child;
    case 12:
      return Xe(t, e, e.pendingProps.children, r), e.child;
    case 10:
      e: {
        if (
          ((n = e.type._context),
          (s = e.pendingProps),
          (i = e.memoizedProps),
          (o = s.value),
          ge(Xa, n._currentValue),
          (n._currentValue = o),
          i !== null)
        )
          if (Gt(i.value, o)) {
            if (i.children === s.children && !at.current) {
              e = Sr(t, e, r);
              break e;
            }
          } else
            for (i = e.child, i !== null && (i.return = e); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                o = i.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === n) {
                    if (i.tag === 1) {
                      (l = xr(-1, r & -r)), (l.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (i.lanes |= r),
                      (l = i.alternate),
                      l !== null && (l.lanes |= r),
                      Rc(i.return, r, e),
                      (a.lanes |= r);
                    break;
                  }
                  l = l.next;
                }
              } else if (i.tag === 10) o = i.type === e.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(N(341));
                (o.lanes |= r),
                  (a = o.alternate),
                  a !== null && (a.lanes |= r),
                  Rc(o, r, e),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === e) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Xe(t, e, s.children, r), (e = e.child);
      }
      return e;
    case 9:
      return (
        (s = e.type),
        (n = e.pendingProps.children),
        Us(e, r),
        (s = Pt(s)),
        (n = n(s)),
        (e.flags |= 1),
        Xe(t, e, n, r),
        e.child
      );
    case 14:
      return (
        (n = e.type),
        (s = Dt(n, e.pendingProps)),
        (s = Dt(n.type, s)),
        Gf(t, e, n, s, r)
      );
    case 15:
      return $y(t, e, e.type, e.pendingProps, r);
    case 17:
      return (
        (n = e.type),
        (s = e.pendingProps),
        (s = e.elementType === n ? s : Dt(n, s)),
        ja(t, e),
        (e.tag = 1),
        lt(n) ? ((t = !0), Ja(e)) : (t = !1),
        Us(e, r),
        Ny(e, n, s),
        Oc(e, n, s, r),
        jc(null, e, n, !0, t, r)
      );
    case 19:
      return Fy(t, e, r);
    case 22:
      return Ly(t, e, r);
  }
  throw Error(N(156, e.tag));
};
function rv(t, e) {
  return Pg(t, e);
}
function Wb(t, e, r, n) {
  (this.tag = t),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Tt(t, e, r, n) {
  return new Wb(t, e, r, n);
}
function fh(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function Vb(t) {
  if (typeof t == "function") return fh(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Nd)) return 11;
    if (t === jd) return 14;
  }
  return 2;
}
function cn(t, e) {
  var r = t.alternate;
  return (
    r === null
      ? ((r = Tt(t.tag, e, t.key, t.mode)),
        (r.elementType = t.elementType),
        (r.type = t.type),
        (r.stateNode = t.stateNode),
        (r.alternate = t),
        (t.alternate = r))
      : ((r.pendingProps = e),
        (r.type = t.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = t.flags & 14680064),
    (r.childLanes = t.childLanes),
    (r.lanes = t.lanes),
    (r.child = t.child),
    (r.memoizedProps = t.memoizedProps),
    (r.memoizedState = t.memoizedState),
    (r.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (r.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (r.sibling = t.sibling),
    (r.index = t.index),
    (r.ref = t.ref),
    r
  );
}
function La(t, e, r, n, s, i) {
  var o = 2;
  if (((n = t), typeof t == "function")) fh(t) && (o = 1);
  else if (typeof t == "string") o = 5;
  else
    e: switch (t) {
      case ks:
        return Kn(r.children, s, i, e);
      case Ad:
        (o = 8), (s |= 8);
        break;
      case ec:
        return (
          (t = Tt(12, r, e, s | 2)), (t.elementType = ec), (t.lanes = i), t
        );
      case tc:
        return (t = Tt(13, r, e, s)), (t.elementType = tc), (t.lanes = i), t;
      case rc:
        return (t = Tt(19, r, e, s)), (t.elementType = rc), (t.lanes = i), t;
      case hg:
        return Dl(r, s, i, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case cg:
              o = 10;
              break e;
            case dg:
              o = 9;
              break e;
            case Nd:
              o = 11;
              break e;
            case jd:
              o = 14;
              break e;
            case Fr:
              (o = 16), (n = null);
              break e;
          }
        throw Error(N(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = Tt(o, r, e, s)), (e.elementType = t), (e.type = n), (e.lanes = i), e
  );
}
function Kn(t, e, r, n) {
  return (t = Tt(7, t, n, e)), (t.lanes = r), t;
}
function Dl(t, e, r, n) {
  return (
    (t = Tt(22, t, n, e)),
    (t.elementType = hg),
    (t.lanes = r),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function ju(t, e, r) {
  return (t = Tt(6, t, null, e)), (t.lanes = r), t;
}
function Iu(t, e, r) {
  return (
    (e = Tt(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = r),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function Hb(t, e, r, n, s) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = pu(0)),
    (this.expirationTimes = pu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = pu(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function ph(t, e, r, n, s, i, o, a, l) {
  return (
    (t = new Hb(t, e, r, a, l)),
    e === 1 ? ((e = 1), i === !0 && (e |= 8)) : (e = 0),
    (i = Tt(3, null, null, e)),
    (t.current = i),
    (i.stateNode = t),
    (i.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Zd(i),
    t
  );
}
function qb(t, e, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _s,
    key: n == null ? null : "" + n,
    children: t,
    containerInfo: e,
    implementation: r,
  };
}
function nv(t) {
  if (!t) return pn;
  t = t._reactInternals;
  e: {
    if (ns(t) !== t || t.tag !== 1) throw Error(N(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (lt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(N(171));
  }
  if (t.tag === 1) {
    var r = t.type;
    if (lt(r)) return ny(t, r, e);
  }
  return e;
}
function sv(t, e, r, n, s, i, o, a, l) {
  return (
    (t = ph(r, n, !0, t, s, i, o, a, l)),
    (t.context = nv(null)),
    (r = t.current),
    (n = tt()),
    (s = un(r)),
    (i = xr(n, s)),
    (i.callback = e ?? null),
    an(r, i, s),
    (t.current.lanes = s),
    $o(t, s, n),
    ut(t, n),
    t
  );
}
function Ul(t, e, r, n) {
  var s = e.current,
    i = tt(),
    o = un(s);
  return (
    (r = nv(r)),
    e.context === null ? (e.context = r) : (e.pendingContext = r),
    (e = xr(i, o)),
    (e.payload = { element: t }),
    (n = n === void 0 ? null : n),
    n !== null && (e.callback = n),
    (t = an(s, e, o)),
    t !== null && (Kt(t, s, o, i), Oa(t, s, o)),
    o
  );
}
function ul(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function op(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var r = t.retryLane;
    t.retryLane = r !== 0 && r < e ? r : e;
  }
}
function mh(t, e) {
  op(t, e), (t = t.alternate) && op(t, e);
}
function Kb() {
  return null;
}
var iv =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function gh(t) {
  this._internalRoot = t;
}
Fl.prototype.render = gh.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(N(409));
  Ul(t, e, null, null);
};
Fl.prototype.unmount = gh.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Xn(function () {
      Ul(null, t, null, null);
    }),
      (e[_r] = null);
  }
};
function Fl(t) {
  this._internalRoot = t;
}
Fl.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Lg();
    t = { blockedOn: null, target: t, priority: e };
    for (var r = 0; r < Vr.length && e !== 0 && e < Vr[r].priority; r++);
    Vr.splice(r, 0, t), r === 0 && Dg(t);
  }
};
function yh(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function zl(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function ap() {}
function Gb(t, e, r, n, s) {
  if (s) {
    if (typeof n == "function") {
      var i = n;
      n = function () {
        var u = ul(o);
        i.call(u);
      };
    }
    var o = sv(e, n, t, 0, null, !1, !1, "", ap);
    return (
      (t._reactRootContainer = o),
      (t[_r] = o.current),
      io(t.nodeType === 8 ? t.parentNode : t),
      Xn(),
      o
    );
  }
  for (; (s = t.lastChild); ) t.removeChild(s);
  if (typeof n == "function") {
    var a = n;
    n = function () {
      var u = ul(l);
      a.call(u);
    };
  }
  var l = ph(t, 0, !1, null, null, !1, !1, "", ap);
  return (
    (t._reactRootContainer = l),
    (t[_r] = l.current),
    io(t.nodeType === 8 ? t.parentNode : t),
    Xn(function () {
      Ul(e, l, r, n);
    }),
    l
  );
}
function Bl(t, e, r, n, s) {
  var i = r._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof s == "function") {
      var a = s;
      s = function () {
        var l = ul(o);
        a.call(l);
      };
    }
    Ul(e, o, t, s);
  } else o = Gb(r, e, t, s, n);
  return ul(o);
}
Ig = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var r = $i(e.pendingLanes);
        r !== 0 &&
          (Ld(e, r | 1), ut(e, Oe()), !(ae & 6) && ((ii = Oe() + 500), kn()));
      }
      break;
    case 13:
      Xn(function () {
        var n = kr(t, 1);
        if (n !== null) {
          var s = tt();
          Kt(n, t, 1, s);
        }
      }),
        mh(t, 1);
  }
};
Md = function (t) {
  if (t.tag === 13) {
    var e = kr(t, 134217728);
    if (e !== null) {
      var r = tt();
      Kt(e, t, 134217728, r);
    }
    mh(t, 134217728);
  }
};
$g = function (t) {
  if (t.tag === 13) {
    var e = un(t),
      r = kr(t, e);
    if (r !== null) {
      var n = tt();
      Kt(r, t, e, n);
    }
    mh(t, e);
  }
};
Lg = function () {
  return fe;
};
Mg = function (t, e) {
  var r = fe;
  try {
    return (fe = t), e();
  } finally {
    fe = r;
  }
};
hc = function (t, e, r) {
  switch (e) {
    case "input":
      if ((ic(t, r), (e = r.name), r.type === "radio" && e != null)) {
        for (r = t; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < r.length;
          e++
        ) {
          var n = r[e];
          if (n !== t && n.form === t.form) {
            var s = Nl(n);
            if (!s) throw Error(N(90));
            pg(n), ic(n, s);
          }
        }
      }
      break;
    case "textarea":
      gg(t, r);
      break;
    case "select":
      (e = r.value), e != null && $s(t, !!r.multiple, e, !1);
  }
};
kg = ch;
Sg = Xn;
var Qb = { usingClientEntryPoint: !1, Events: [Mo, Ts, Nl, bg, _g, ch] },
  Pi = {
    findFiberByHostInstance: Ln,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Jb = {
    bundleType: Pi.bundleType,
    version: Pi.version,
    rendererPackageName: Pi.rendererPackageName,
    rendererConfig: Pi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Rr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Tg(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: Pi.findFiberByHostInstance || Kb,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var da = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!da.isDisabled && da.supportsFiber)
    try {
      (Rl = da.inject(Jb)), (ir = da);
    } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qb;
bt.createPortal = function (t, e) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!yh(e)) throw Error(N(200));
  return qb(t, e, null, r);
};
bt.createRoot = function (t, e) {
  if (!yh(t)) throw Error(N(299));
  var r = !1,
    n = "",
    s = iv;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (r = !0),
      e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (s = e.onRecoverableError)),
    (e = ph(t, 1, !1, null, null, r, !1, n, s)),
    (t[_r] = e.current),
    io(t.nodeType === 8 ? t.parentNode : t),
    new gh(e)
  );
};
bt.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(N(188))
      : ((t = Object.keys(t).join(",")), Error(N(268, t)));
  return (t = Tg(e)), (t = t === null ? null : t.stateNode), t;
};
bt.flushSync = function (t) {
  return Xn(t);
};
bt.hydrate = function (t, e, r) {
  if (!zl(e)) throw Error(N(200));
  return Bl(null, t, e, !0, r);
};
bt.hydrateRoot = function (t, e, r) {
  if (!yh(t)) throw Error(N(405));
  var n = (r != null && r.hydratedSources) || null,
    s = !1,
    i = "",
    o = iv;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (s = !0),
      r.identifierPrefix !== void 0 && (i = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
    (e = sv(e, null, t, 1, r ?? null, s, !1, i, o)),
    (t[_r] = e.current),
    io(t),
    n)
  )
    for (t = 0; t < n.length; t++)
      (r = n[t]),
        (s = r._getVersion),
        (s = s(r._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [r, s])
          : e.mutableSourceEagerHydrationData.push(r, s);
  return new Fl(e);
};
bt.render = function (t, e, r) {
  if (!zl(e)) throw Error(N(200));
  return Bl(null, t, e, !1, r);
};
bt.unmountComponentAtNode = function (t) {
  if (!zl(t)) throw Error(N(40));
  return t._reactRootContainer
    ? (Xn(function () {
        Bl(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[_r] = null);
        });
      }),
      !0)
    : !1;
};
bt.unstable_batchedUpdates = ch;
bt.unstable_renderSubtreeIntoContainer = function (t, e, r, n) {
  if (!zl(r)) throw Error(N(200));
  if (t == null || t._reactInternals === void 0) throw Error(N(38));
  return Bl(t, e, r, !1, n);
};
bt.version = "18.3.1-next-f1338f8080-20240426";
function ov() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ov);
    } catch (t) {
      console.error(t);
    }
}
ov(), (og.exports = bt);
var Uo = og.exports;
const av = Km(Uo);
var lv,
  lp = Uo;
(lv = lp.createRoot), lp.hydrateRoot;
const Zb = 1,
  Yb = 1e6;
let $u = 0;
function Xb() {
  return ($u = ($u + 1) % Number.MAX_SAFE_INTEGER), $u.toString();
}
const Lu = new Map(),
  up = (t) => {
    if (Lu.has(t)) return;
    const e = setTimeout(() => {
      Lu.delete(t), Gi({ type: "REMOVE_TOAST", toastId: t });
    }, Yb);
    Lu.set(t, e);
  },
  e_ = (t, e) => {
    switch (e.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [e.toast, ...t.toasts].slice(0, Zb) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((r) =>
            r.id === e.toast.id ? { ...r, ...e.toast } : r
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: r } = e;
        return (
          r
            ? up(r)
            : t.toasts.forEach((n) => {
                up(n.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((n) =>
              n.id === r || r === void 0 ? { ...n, open: !1 } : n
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return e.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((r) => r.id !== e.toastId) };
    }
  },
  Ma = [];
let Da = { toasts: [] };
function Gi(t) {
  (Da = e_(Da, t)),
    Ma.forEach((e) => {
      e(Da);
    });
}
function Hc({ ...t }) {
  const e = Xb(),
    r = (s) => Gi({ type: "UPDATE_TOAST", toast: { ...s, id: e } }),
    n = () => Gi({ type: "DISMISS_TOAST", toastId: e });
  return (
    Gi({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: e,
        open: !0,
        onOpenChange: (s) => {
          s || n();
        },
      },
    }),
    { id: e, dismiss: n, update: r }
  );
}
function t_() {
  const [t, e] = b.useState(Da);
  return (
    b.useEffect(
      () => (
        Ma.push(e),
        () => {
          const r = Ma.indexOf(e);
          r > -1 && Ma.splice(r, 1);
        }
      ),
      [t]
    ),
    {
      ...t,
      toast: Hc,
      dismiss: (r) => Gi({ type: "DISMISS_TOAST", toastId: r }),
    }
  );
}
function Le(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function (s) {
    if ((t == null || t(s), r === !1 || !s.defaultPrevented))
      return e == null ? void 0 : e(s);
  };
}
function cp(t, e) {
  if (typeof t == "function") return t(e);
  t != null && (t.current = e);
}
function uv(...t) {
  return (e) => {
    let r = !1;
    const n = t.map((s) => {
      const i = cp(s, e);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : cp(t[s], null);
        }
      };
  };
}
function Qt(...t) {
  return b.useCallback(uv(...t), t);
}
function Wl(t, e = []) {
  let r = [];
  function n(i, o) {
    const a = b.createContext(o),
      l = r.length;
    r = [...r, o];
    const u = (h) => {
      var g;
      const { scope: f, children: d, ...v } = h,
        p = ((g = f == null ? void 0 : f[t]) == null ? void 0 : g[l]) || a,
        x = b.useMemo(() => v, Object.values(v));
      return w.jsx(p.Provider, { value: x, children: d });
    };
    u.displayName = i + "Provider";
    function c(h, f) {
      var p;
      const d = ((p = f == null ? void 0 : f[t]) == null ? void 0 : p[l]) || a,
        v = b.useContext(d);
      if (v) return v;
      if (o !== void 0) return o;
      throw new Error(`\`${h}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = r.map((o) => b.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[t]) || i;
      return b.useMemo(() => ({ [`__scope${t}`]: { ...a, [t]: l } }), [a, l]);
    };
  };
  return (s.scopeName = t), [n, r_(s, ...e)];
}
function r_(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = n.reduce((a, { useScope: l, scopeName: u }) => {
        const h = l(i)[`__scope${u}`];
        return { ...a, ...h };
      }, {});
      return b.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return (r.scopeName = e.scopeName), r;
}
function cl(t) {
  const e = s_(t),
    r = b.forwardRef((n, s) => {
      const { children: i, ...o } = n,
        a = b.Children.toArray(i),
        l = a.find(o_);
      if (l) {
        const u = l.props.children,
          c = a.map((h) =>
            h === l
              ? b.Children.count(u) > 1
                ? b.Children.only(null)
                : b.isValidElement(u)
                ? u.props.children
                : null
              : h
          );
        return w.jsx(e, {
          ...o,
          ref: s,
          children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null,
        });
      }
      return w.jsx(e, { ...o, ref: s, children: i });
    });
  return (r.displayName = `${t}.Slot`), r;
}
var n_ = cl("Slot");
function s_(t) {
  const e = b.forwardRef((r, n) => {
    const { children: s, ...i } = r;
    if (b.isValidElement(s)) {
      const o = l_(s),
        a = a_(i, s.props);
      return (
        s.type !== b.Fragment && (a.ref = n ? uv(n, o) : o),
        b.cloneElement(s, a)
      );
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return (e.displayName = `${t}.SlotClone`), e;
}
var cv = Symbol("radix.slottable");
function i_(t) {
  const e = ({ children: r }) => w.jsx(w.Fragment, { children: r });
  return (e.displayName = `${t}.Slottable`), (e.__radixId = cv), e;
}
function o_(t) {
  return (
    b.isValidElement(t) &&
    typeof t.type == "function" &&
    "__radixId" in t.type &&
    t.type.__radixId === cv
  );
}
function a_(t, e) {
  const r = { ...e };
  for (const n in e) {
    const s = t[n],
      i = e[n];
    /^on[A-Z]/.test(n)
      ? s && i
        ? (r[n] = (...a) => {
            const l = i(...a);
            return s(...a), l;
          })
        : s && (r[n] = s)
      : n === "style"
      ? (r[n] = { ...s, ...i })
      : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function l_(t) {
  var n, s;
  let e =
      (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : n.get,
    r = e && "isReactWarning" in e && e.isReactWarning;
  return r
    ? t.ref
    : ((e =
        (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : s.get),
      (r = e && "isReactWarning" in e && e.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
function u_(t) {
  const e = t + "CollectionProvider",
    [r, n] = Wl(e),
    [s, i] = r(e, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (p) => {
      const { scope: x, children: g } = p,
        m = $.useRef(null),
        y = $.useRef(new Map()).current;
      return w.jsx(s, { scope: x, itemMap: y, collectionRef: m, children: g });
    };
  o.displayName = e;
  const a = t + "CollectionSlot",
    l = cl(a),
    u = $.forwardRef((p, x) => {
      const { scope: g, children: m } = p,
        y = i(a, g),
        _ = Qt(x, y.collectionRef);
      return w.jsx(l, { ref: _, children: m });
    });
  u.displayName = a;
  const c = t + "CollectionItemSlot",
    h = "data-radix-collection-item",
    f = cl(c),
    d = $.forwardRef((p, x) => {
      const { scope: g, children: m, ...y } = p,
        _ = $.useRef(null),
        S = Qt(x, _),
        E = i(c, g);
      return (
        $.useEffect(
          () => (
            E.itemMap.set(_, { ref: _, ...y }), () => void E.itemMap.delete(_)
          )
        ),
        w.jsx(f, { [h]: "", ref: S, children: m })
      );
    });
  d.displayName = c;
  function v(p) {
    const x = i(t + "CollectionConsumer", p);
    return $.useCallback(() => {
      const m = x.collectionRef.current;
      if (!m) return [];
      const y = Array.from(m.querySelectorAll(`[${h}]`));
      return Array.from(x.itemMap.values()).sort(
        (E, k) => y.indexOf(E.ref.current) - y.indexOf(k.ref.current)
      );
    }, [x.collectionRef, x.itemMap]);
  }
  return [{ Provider: o, Slot: u, ItemSlot: d }, v, n];
}
var c_ = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ct = c_.reduce((t, e) => {
    const r = cl(`Primitive.${e}`),
      n = b.forwardRef((s, i) => {
        const { asChild: o, ...a } = s,
          l = o ? r : e;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          w.jsx(l, { ...a, ref: i })
        );
      });
    return (n.displayName = `Primitive.${e}`), { ...t, [e]: n };
  }, {});
function dv(t, e) {
  t && Uo.flushSync(() => t.dispatchEvent(e));
}
function mn(t) {
  const e = b.useRef(t);
  return (
    b.useEffect(() => {
      e.current = t;
    }),
    b.useMemo(
      () =>
        (...r) => {
          var n;
          return (n = e.current) == null ? void 0 : n.call(e, ...r);
        },
      []
    )
  );
}
function d_(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(t);
  b.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return (
      e.addEventListener("keydown", n, { capture: !0 }),
      () => e.removeEventListener("keydown", n, { capture: !0 })
    );
  }, [r, e]);
}
var h_ = "DismissableLayer",
  qc = "dismissableLayer.update",
  f_ = "dismissableLayer.pointerDownOutside",
  p_ = "dismissableLayer.focusOutside",
  dp,
  hv = b.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  vh = b.forwardRef((t, e) => {
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: n,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = t,
      u = b.useContext(hv),
      [c, h] = b.useState(null),
      f =
        (c == null ? void 0 : c.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, d] = b.useState({}),
      v = Qt(e, (k) => h(k)),
      p = Array.from(u.layers),
      [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      g = p.indexOf(x),
      m = c ? p.indexOf(c) : -1,
      y = u.layersWithOutsidePointerEventsDisabled.size > 0,
      _ = m >= g,
      S = g_((k) => {
        const C = k.target,
          T = [...u.branches].some((R) => R.contains(C));
        !_ ||
          T ||
          (s == null || s(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f),
      E = y_((k) => {
        const C = k.target;
        [...u.branches].some((R) => R.contains(C)) ||
          (i == null || i(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f);
    return (
      d_((k) => {
        m === u.layers.size - 1 &&
          (n == null || n(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, f),
      b.useEffect(() => {
        if (c)
          return (
            r &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((dp = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(c)),
            u.layers.add(c),
            hp(),
            () => {
              r &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = dp);
            }
          );
      }, [c, f, r, u]),
      b.useEffect(
        () => () => {
          c &&
            (u.layers.delete(c),
            u.layersWithOutsidePointerEventsDisabled.delete(c),
            hp());
        },
        [c, u]
      ),
      b.useEffect(() => {
        const k = () => d({});
        return (
          document.addEventListener(qc, k),
          () => document.removeEventListener(qc, k)
        );
      }, []),
      w.jsx(ct.div, {
        ...l,
        ref: v,
        style: {
          pointerEvents: y ? (_ ? "auto" : "none") : void 0,
          ...t.style,
        },
        onFocusCapture: Le(t.onFocusCapture, E.onFocusCapture),
        onBlurCapture: Le(t.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: Le(
          t.onPointerDownCapture,
          S.onPointerDownCapture
        ),
      })
    );
  });
vh.displayName = h_;
var m_ = "DismissableLayerBranch",
  fv = b.forwardRef((t, e) => {
    const r = b.useContext(hv),
      n = b.useRef(null),
      s = Qt(e, n);
    return (
      b.useEffect(() => {
        const i = n.current;
        if (i)
          return (
            r.branches.add(i),
            () => {
              r.branches.delete(i);
            }
          );
      }, [r.branches]),
      w.jsx(ct.div, { ...t, ref: s })
    );
  });
fv.displayName = m_;
function g_(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(t),
    n = b.useRef(!1),
    s = b.useRef(() => {});
  return (
    b.useEffect(() => {
      const i = (a) => {
          if (a.target && !n.current) {
            let l = function () {
              pv(f_, r, u, { discrete: !0 });
            };
            const u = { originalEvent: a };
            a.pointerType === "touch"
              ? (e.removeEventListener("click", s.current),
                (s.current = l),
                e.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else e.removeEventListener("click", s.current);
          n.current = !1;
        },
        o = window.setTimeout(() => {
          e.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          e.removeEventListener("pointerdown", i),
          e.removeEventListener("click", s.current);
      };
    }, [e, r]),
    { onPointerDownCapture: () => (n.current = !0) }
  );
}
function y_(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = mn(t),
    n = b.useRef(!1);
  return (
    b.useEffect(() => {
      const s = (i) => {
        i.target &&
          !n.current &&
          pv(p_, r, { originalEvent: i }, { discrete: !1 });
      };
      return (
        e.addEventListener("focusin", s),
        () => e.removeEventListener("focusin", s)
      );
    }, [e, r]),
    {
      onFocusCapture: () => (n.current = !0),
      onBlurCapture: () => (n.current = !1),
    }
  );
}
function hp() {
  const t = new CustomEvent(qc);
  document.dispatchEvent(t);
}
function pv(t, e, r, { discrete: n }) {
  const s = r.originalEvent.target,
    i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && s.addEventListener(t, e, { once: !0 }),
    n ? dv(s, i) : s.dispatchEvent(i);
}
var v_ = vh,
  w_ = fv,
  gn = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {},
  x_ = "Portal",
  mv = b.forwardRef((t, e) => {
    var a;
    const { container: r, ...n } = t,
      [s, i] = b.useState(!1);
    gn(() => i(!0), []);
    const o =
      r ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? av.createPortal(w.jsx(ct.div, { ...n, ref: e }), o) : null;
  });
mv.displayName = x_;
function b_(t, e) {
  return b.useReducer((r, n) => e[r][n] ?? r, t);
}
var wh = (t) => {
  const { present: e, children: r } = t,
    n = __(e),
    s =
      typeof r == "function" ? r({ present: n.isPresent }) : b.Children.only(r),
    i = Qt(n.ref, k_(s));
  return typeof r == "function" || n.isPresent
    ? b.cloneElement(s, { ref: i })
    : null;
};
wh.displayName = "Presence";
function __(t) {
  const [e, r] = b.useState(),
    n = b.useRef(null),
    s = b.useRef(t),
    i = b.useRef("none"),
    o = t ? "mounted" : "unmounted",
    [a, l] = b_(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    b.useEffect(() => {
      const u = ha(n.current);
      i.current = a === "mounted" ? u : "none";
    }, [a]),
    gn(() => {
      const u = n.current,
        c = s.current;
      if (c !== t) {
        const f = i.current,
          d = ha(u);
        t
          ? l("MOUNT")
          : d === "none" || (u == null ? void 0 : u.display) === "none"
          ? l("UNMOUNT")
          : l(c && f !== d ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = t);
      }
    }, [t, l]),
    gn(() => {
      if (e) {
        let u;
        const c = e.ownerDocument.defaultView ?? window,
          h = (d) => {
            const p = ha(n.current).includes(d.animationName);
            if (d.target === e && p && (l("ANIMATION_END"), !s.current)) {
              const x = e.style.animationFillMode;
              (e.style.animationFillMode = "forwards"),
                (u = c.setTimeout(() => {
                  e.style.animationFillMode === "forwards" &&
                    (e.style.animationFillMode = x);
                }));
            }
          },
          f = (d) => {
            d.target === e && (i.current = ha(n.current));
          };
        return (
          e.addEventListener("animationstart", f),
          e.addEventListener("animationcancel", h),
          e.addEventListener("animationend", h),
          () => {
            c.clearTimeout(u),
              e.removeEventListener("animationstart", f),
              e.removeEventListener("animationcancel", h),
              e.removeEventListener("animationend", h);
          }
        );
      } else l("ANIMATION_END");
    }, [e, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: b.useCallback((u) => {
        (n.current = u ? getComputedStyle(u) : null), r(u);
      }, []),
    }
  );
}
function ha(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function k_(t) {
  var n, s;
  let e =
      (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null
        ? void 0
        : n.get,
    r = e && "isReactWarning" in e && e.isReactWarning;
  return r
    ? t.ref
    : ((e =
        (s = Object.getOwnPropertyDescriptor(t, "ref")) == null
          ? void 0
          : s.get),
      (r = e && "isReactWarning" in e && e.isReactWarning),
      r ? t.props.ref : t.props.ref || t.ref);
}
var S_ = sg[" useInsertionEffect ".trim().toString()] || gn;
function E_({ prop: t, defaultProp: e, onChange: r = () => {}, caller: n }) {
  const [s, i, o] = C_({ defaultProp: e, onChange: r }),
    a = t !== void 0,
    l = a ? t : s;
  {
    const c = b.useRef(t !== void 0);
    b.useEffect(() => {
      const h = c.current;
      h !== a &&
        console.warn(
          `${n} is changing from ${h ? "controlled" : "uncontrolled"} to ${
            a ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (c.current = a);
    }, [a, n]);
  }
  const u = b.useCallback(
    (c) => {
      var h;
      if (a) {
        const f = T_(c) ? c(t) : c;
        f !== t && ((h = o.current) == null || h.call(o, f));
      } else i(c);
    },
    [a, t, i, o]
  );
  return [l, u];
}
function C_({ defaultProp: t, onChange: e }) {
  const [r, n] = b.useState(t),
    s = b.useRef(r),
    i = b.useRef(e);
  return (
    S_(() => {
      i.current = e;
    }, [e]),
    b.useEffect(() => {
      var o;
      s.current !== r &&
        ((o = i.current) == null || o.call(i, r), (s.current = r));
    }, [r, s]),
    [r, n, i]
  );
}
function T_(t) {
  return typeof t == "function";
}
var R_ = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  P_ = "VisuallyHidden",
  Vl = b.forwardRef((t, e) =>
    w.jsx(ct.span, { ...t, ref: e, style: { ...R_, ...t.style } })
  );
Vl.displayName = P_;
var O_ = Vl,
  xh = "ToastProvider",
  [bh, A_, N_] = u_("Toast"),
  [gv, bO] = Wl("Toast", [N_]),
  [j_, Hl] = gv(xh),
  yv = (t) => {
    const {
        __scopeToast: e,
        label: r = "Notification",
        duration: n = 5e3,
        swipeDirection: s = "right",
        swipeThreshold: i = 50,
        children: o,
      } = t,
      [a, l] = b.useState(null),
      [u, c] = b.useState(0),
      h = b.useRef(!1),
      f = b.useRef(!1);
    return (
      r.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${xh}\`. Expected non-empty \`string\`.`
        ),
      w.jsx(bh.Provider, {
        scope: e,
        children: w.jsx(j_, {
          scope: e,
          label: r,
          duration: n,
          swipeDirection: s,
          swipeThreshold: i,
          toastCount: u,
          viewport: a,
          onViewportChange: l,
          onToastAdd: b.useCallback(() => c((d) => d + 1), []),
          onToastRemove: b.useCallback(() => c((d) => d - 1), []),
          isFocusedToastEscapeKeyDownRef: h,
          isClosePausedRef: f,
          children: o,
        }),
      })
    );
  };
yv.displayName = xh;
var vv = "ToastViewport",
  I_ = ["F8"],
  Kc = "toast.viewportPause",
  Gc = "toast.viewportResume",
  wv = b.forwardRef((t, e) => {
    const {
        __scopeToast: r,
        hotkey: n = I_,
        label: s = "Notifications ({hotkey})",
        ...i
      } = t,
      o = Hl(vv, r),
      a = A_(r),
      l = b.useRef(null),
      u = b.useRef(null),
      c = b.useRef(null),
      h = b.useRef(null),
      f = Qt(e, h, o.onViewportChange),
      d = n.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      v = o.toastCount > 0;
    b.useEffect(() => {
      const x = (g) => {
        var y;
        n.length !== 0 &&
          n.every((_) => g[_] || g.code === _) &&
          ((y = h.current) == null || y.focus());
      };
      return (
        document.addEventListener("keydown", x),
        () => document.removeEventListener("keydown", x)
      );
    }, [n]),
      b.useEffect(() => {
        const x = l.current,
          g = h.current;
        if (v && x && g) {
          const m = () => {
              if (!o.isClosePausedRef.current) {
                const E = new CustomEvent(Kc);
                g.dispatchEvent(E), (o.isClosePausedRef.current = !0);
              }
            },
            y = () => {
              if (o.isClosePausedRef.current) {
                const E = new CustomEvent(Gc);
                g.dispatchEvent(E), (o.isClosePausedRef.current = !1);
              }
            },
            _ = (E) => {
              !x.contains(E.relatedTarget) && y();
            },
            S = () => {
              x.contains(document.activeElement) || y();
            };
          return (
            x.addEventListener("focusin", m),
            x.addEventListener("focusout", _),
            x.addEventListener("pointermove", m),
            x.addEventListener("pointerleave", S),
            window.addEventListener("blur", m),
            window.addEventListener("focus", y),
            () => {
              x.removeEventListener("focusin", m),
                x.removeEventListener("focusout", _),
                x.removeEventListener("pointermove", m),
                x.removeEventListener("pointerleave", S),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", y);
            }
          );
        }
      }, [v, o.isClosePausedRef]);
    const p = b.useCallback(
      ({ tabbingDirection: x }) => {
        const m = a().map((y) => {
          const _ = y.ref.current,
            S = [_, ...K_(_)];
          return x === "forwards" ? S : S.reverse();
        });
        return (x === "forwards" ? m.reverse() : m).flat();
      },
      [a]
    );
    return (
      b.useEffect(() => {
        const x = h.current;
        if (x) {
          const g = (m) => {
            var S, E, k;
            const y = m.altKey || m.ctrlKey || m.metaKey;
            if (m.key === "Tab" && !y) {
              const C = document.activeElement,
                T = m.shiftKey;
              if (m.target === x && T) {
                (S = u.current) == null || S.focus();
                return;
              }
              const L = p({ tabbingDirection: T ? "backwards" : "forwards" }),
                H = L.findIndex((M) => M === C);
              Mu(L.slice(H + 1))
                ? m.preventDefault()
                : T
                ? (E = u.current) == null || E.focus()
                : (k = c.current) == null || k.focus();
            }
          };
          return (
            x.addEventListener("keydown", g),
            () => x.removeEventListener("keydown", g)
          );
        }
      }, [a, p]),
      w.jsxs(w_, {
        ref: l,
        role: "region",
        "aria-label": s.replace("{hotkey}", d),
        tabIndex: -1,
        style: { pointerEvents: v ? void 0 : "none" },
        children: [
          v &&
            w.jsx(Qc, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const x = p({ tabbingDirection: "forwards" });
                Mu(x);
              },
            }),
          w.jsx(bh.Slot, {
            scope: r,
            children: w.jsx(ct.ol, { tabIndex: -1, ...i, ref: f }),
          }),
          v &&
            w.jsx(Qc, {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const x = p({ tabbingDirection: "backwards" });
                Mu(x);
              },
            }),
        ],
      })
    );
  });
wv.displayName = vv;
var xv = "ToastFocusProxy",
  Qc = b.forwardRef((t, e) => {
    const { __scopeToast: r, onFocusFromOutsideViewport: n, ...s } = t,
      i = Hl(xv, r);
    return w.jsx(Vl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...s,
      ref: e,
      style: { position: "fixed" },
      onFocus: (o) => {
        var u;
        const a = o.relatedTarget;
        !((u = i.viewport) != null && u.contains(a)) && n();
      },
    });
  });
Qc.displayName = xv;
var Fo = "Toast",
  $_ = "toast.swipeStart",
  L_ = "toast.swipeMove",
  M_ = "toast.swipeCancel",
  D_ = "toast.swipeEnd",
  bv = b.forwardRef((t, e) => {
    const { forceMount: r, open: n, defaultOpen: s, onOpenChange: i, ...o } = t,
      [a, l] = E_({ prop: n, defaultProp: s ?? !0, onChange: i, caller: Fo });
    return w.jsx(wh, {
      present: r || a,
      children: w.jsx(z_, {
        open: a,
        ...o,
        ref: e,
        onClose: () => l(!1),
        onPause: mn(t.onPause),
        onResume: mn(t.onResume),
        onSwipeStart: Le(t.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Le(t.onSwipeMove, (u) => {
          const { x: c, y: h } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${h}px`
            );
        }),
        onSwipeCancel: Le(t.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Le(t.onSwipeEnd, (u) => {
          const { x: c, y: h } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${c}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${h}px`
            ),
            l(!1);
        }),
      }),
    });
  });
bv.displayName = Fo;
var [U_, F_] = gv(Fo, { onClose() {} }),
  z_ = b.forwardRef((t, e) => {
    const {
        __scopeToast: r,
        type: n = "foreground",
        duration: s,
        open: i,
        onClose: o,
        onEscapeKeyDown: a,
        onPause: l,
        onResume: u,
        onSwipeStart: c,
        onSwipeMove: h,
        onSwipeCancel: f,
        onSwipeEnd: d,
        ...v
      } = t,
      p = Hl(Fo, r),
      [x, g] = b.useState(null),
      m = Qt(e, (M) => g(M)),
      y = b.useRef(null),
      _ = b.useRef(null),
      S = s || p.duration,
      E = b.useRef(0),
      k = b.useRef(S),
      C = b.useRef(0),
      { onToastAdd: T, onToastRemove: R } = p,
      D = mn(() => {
        var Y;
        (x == null ? void 0 : x.contains(document.activeElement)) &&
          ((Y = p.viewport) == null || Y.focus()),
          o();
      }),
      L = b.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(C.current),
            (E.current = new Date().getTime()),
            (C.current = window.setTimeout(D, M)));
        },
        [D]
      );
    b.useEffect(() => {
      const M = p.viewport;
      if (M) {
        const Y = () => {
            L(k.current), u == null || u();
          },
          Q = () => {
            const X = new Date().getTime() - E.current;
            (k.current = k.current - X),
              window.clearTimeout(C.current),
              l == null || l();
          };
        return (
          M.addEventListener(Kc, Q),
          M.addEventListener(Gc, Y),
          () => {
            M.removeEventListener(Kc, Q), M.removeEventListener(Gc, Y);
          }
        );
      }
    }, [p.viewport, S, l, u, L]),
      b.useEffect(() => {
        i && !p.isClosePausedRef.current && L(S);
      }, [i, S, p.isClosePausedRef, L]),
      b.useEffect(() => (T(), () => R()), [T, R]);
    const H = b.useMemo(() => (x ? Rv(x) : null), [x]);
    return p.viewport
      ? w.jsxs(w.Fragment, {
          children: [
            H &&
              w.jsx(B_, {
                __scopeToast: r,
                role: "status",
                "aria-live": n === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: H,
              }),
            w.jsx(U_, {
              scope: r,
              onClose: D,
              children: Uo.createPortal(
                w.jsx(bh.ItemSlot, {
                  scope: r,
                  children: w.jsx(v_, {
                    asChild: !0,
                    onEscapeKeyDown: Le(a, () => {
                      p.isFocusedToastEscapeKeyDownRef.current || D(),
                        (p.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: w.jsx(ct.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": p.swipeDirection,
                      ...v,
                      ref: m,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...t.style,
                      },
                      onKeyDown: Le(t.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (a == null || a(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((p.isFocusedToastEscapeKeyDownRef.current = !0),
                            D()));
                      }),
                      onPointerDown: Le(t.onPointerDown, (M) => {
                        M.button === 0 &&
                          (y.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: Le(t.onPointerMove, (M) => {
                        if (!y.current) return;
                        const Y = M.clientX - y.current.x,
                          Q = M.clientY - y.current.y,
                          X = !!_.current,
                          P = ["left", "right"].includes(p.swipeDirection),
                          A = ["left", "up"].includes(p.swipeDirection)
                            ? Math.min
                            : Math.max,
                          j = P ? A(0, Y) : 0,
                          q = P ? 0 : A(0, Q),
                          U = M.pointerType === "touch" ? 10 : 2,
                          K = { x: j, y: q },
                          Z = { originalEvent: M, delta: K };
                        X
                          ? ((_.current = K), fa(L_, h, Z, { discrete: !1 }))
                          : fp(K, p.swipeDirection, U)
                          ? ((_.current = K),
                            fa($_, c, Z, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(Y) > U || Math.abs(Q) > U) &&
                            (y.current = null);
                      }),
                      onPointerUp: Le(t.onPointerUp, (M) => {
                        const Y = _.current,
                          Q = M.target;
                        if (
                          (Q.hasPointerCapture(M.pointerId) &&
                            Q.releasePointerCapture(M.pointerId),
                          (_.current = null),
                          (y.current = null),
                          Y)
                        ) {
                          const X = M.currentTarget,
                            P = { originalEvent: M, delta: Y };
                          fp(Y, p.swipeDirection, p.swipeThreshold)
                            ? fa(D_, d, P, { discrete: !0 })
                            : fa(M_, f, P, { discrete: !0 }),
                            X.addEventListener(
                              "click",
                              (A) => A.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                p.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  B_ = (t) => {
    const { __scopeToast: e, children: r, ...n } = t,
      s = Hl(Fo, e),
      [i, o] = b.useState(!1),
      [a, l] = b.useState(!1);
    return (
      H_(() => o(!0)),
      b.useEffect(() => {
        const u = window.setTimeout(() => l(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      a
        ? null
        : w.jsx(mv, {
            asChild: !0,
            children: w.jsx(Vl, {
              ...n,
              children:
                i && w.jsxs(w.Fragment, { children: [s.label, " ", r] }),
            }),
          })
    );
  },
  W_ = "ToastTitle",
  _v = b.forwardRef((t, e) => {
    const { __scopeToast: r, ...n } = t;
    return w.jsx(ct.div, { ...n, ref: e });
  });
_v.displayName = W_;
var V_ = "ToastDescription",
  kv = b.forwardRef((t, e) => {
    const { __scopeToast: r, ...n } = t;
    return w.jsx(ct.div, { ...n, ref: e });
  });
kv.displayName = V_;
var Sv = "ToastAction",
  Ev = b.forwardRef((t, e) => {
    const { altText: r, ...n } = t;
    return r.trim()
      ? w.jsx(Tv, {
          altText: r,
          asChild: !0,
          children: w.jsx(_h, { ...n, ref: e }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${Sv}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
Ev.displayName = Sv;
var Cv = "ToastClose",
  _h = b.forwardRef((t, e) => {
    const { __scopeToast: r, ...n } = t,
      s = F_(Cv, r);
    return w.jsx(Tv, {
      asChild: !0,
      children: w.jsx(ct.button, {
        type: "button",
        ...n,
        ref: e,
        onClick: Le(t.onClick, s.onClose),
      }),
    });
  });
_h.displayName = Cv;
var Tv = b.forwardRef((t, e) => {
  const { __scopeToast: r, altText: n, ...s } = t;
  return w.jsx(ct.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": n || void 0,
    ...s,
    ref: e,
  });
});
function Rv(t) {
  const e = [];
  return (
    Array.from(t.childNodes).forEach((n) => {
      if (
        (n.nodeType === n.TEXT_NODE && n.textContent && e.push(n.textContent),
        q_(n))
      ) {
        const s = n.ariaHidden || n.hidden || n.style.display === "none",
          i = n.dataset.radixToastAnnounceExclude === "";
        if (!s)
          if (i) {
            const o = n.dataset.radixToastAnnounceAlt;
            o && e.push(o);
          } else e.push(...Rv(n));
      }
    }),
    e
  );
}
function fa(t, e, r, { discrete: n }) {
  const s = r.originalEvent.currentTarget,
    i = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: r });
  e && s.addEventListener(t, e, { once: !0 }),
    n ? dv(s, i) : s.dispatchEvent(i);
}
var fp = (t, e, r = 0) => {
  const n = Math.abs(t.x),
    s = Math.abs(t.y),
    i = n > s;
  return e === "left" || e === "right" ? i && n > r : !i && s > r;
};
function H_(t = () => {}) {
  const e = mn(t);
  gn(() => {
    let r = 0,
      n = 0;
    return (
      (r = window.requestAnimationFrame(
        () => (n = window.requestAnimationFrame(e))
      )),
      () => {
        window.cancelAnimationFrame(r), window.cancelAnimationFrame(n);
      }
    );
  }, [e]);
}
function q_(t) {
  return t.nodeType === t.ELEMENT_NODE;
}
function K_(t) {
  const e = [],
    r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (n) => {
        const s = n.tagName === "INPUT" && n.type === "hidden";
        return n.disabled || n.hidden || s
          ? NodeFilter.FILTER_SKIP
          : n.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function Mu(t) {
  const e = document.activeElement;
  return t.some((r) =>
    r === e ? !0 : (r.focus(), document.activeElement !== e)
  );
}
var G_ = yv,
  Pv = wv,
  Ov = bv,
  Av = _v,
  Nv = kv,
  jv = Ev,
  Iv = _h;
function $v(t) {
  var e,
    r,
    n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object")
    if (Array.isArray(t)) {
      var s = t.length;
      for (e = 0; e < s; e++)
        t[e] && (r = $v(t[e])) && (n && (n += " "), (n += r));
    } else for (r in t) t[r] && (n && (n += " "), (n += r));
  return n;
}
function Lv() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++)
    (t = arguments[r]) && (e = $v(t)) && (n && (n += " "), (n += e));
  return n;
}
const pp = (t) => (typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t),
  mp = Lv,
  Mv = (t, e) => (r) => {
    var n;
    if ((e == null ? void 0 : e.variants) == null)
      return mp(
        t,
        r == null ? void 0 : r.class,
        r == null ? void 0 : r.className
      );
    const { variants: s, defaultVariants: i } = e,
      o = Object.keys(s).map((u) => {
        const c = r == null ? void 0 : r[u],
          h = i == null ? void 0 : i[u];
        if (c === null) return null;
        const f = pp(c) || pp(h);
        return s[u][f];
      }),
      a =
        r &&
        Object.entries(r).reduce((u, c) => {
          let [h, f] = c;
          return f === void 0 || (u[h] = f), u;
        }, {}),
      l =
        e == null || (n = e.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((u, c) => {
              let { class: h, className: f, ...d } = c;
              return Object.entries(d).every((v) => {
                let [p, x] = v;
                return Array.isArray(x)
                  ? x.includes({ ...i, ...a }[p])
                  : { ...i, ...a }[p] === x;
              })
                ? [...u, h, f]
                : u;
            }, []);
    return mp(
      t,
      o,
      l,
      r == null ? void 0 : r.class,
      r == null ? void 0 : r.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q_ = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Dv = (...t) =>
    t
      .filter((e, r, n) => !!e && e.trim() !== "" && n.indexOf(e) === r)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var J_ = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z_ = b.forwardRef(
  (
    {
      color: t = "currentColor",
      size: e = 24,
      strokeWidth: r = 2,
      absoluteStrokeWidth: n,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l
  ) =>
    b.createElement(
      "svg",
      {
        ref: l,
        ...J_,
        width: e,
        height: e,
        stroke: t,
        strokeWidth: n ? (Number(r) * 24) / Number(e) : r,
        className: Dv("lucide", s),
        ...a,
      },
      [
        ...o.map(([u, c]) => b.createElement(u, c)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ze = (t, e) => {
  const r = b.forwardRef(({ className: n, ...s }, i) =>
    b.createElement(Z_, {
      ref: i,
      iconNode: e,
      className: Dv(`lucide-${Q_(t)}`, n),
      ...s,
    })
  );
  return (r.displayName = `${t}`), r;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kh = Ze("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y_ = Ze("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X_ = Ze("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = Ze("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const t1 = Ze("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mo = Ze("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r1 = Ze("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uv = Ze("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n1 = Ze("Mic", [
  [
    "path",
    {
      d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
      key: "131961",
    },
  ],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s1 = Ze("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gp = Ze("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fv = Ze("Share", [
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["polyline", { points: "16 6 12 2 8 6", key: "m901s6" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "15", key: "1p0rca" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = Ze("Square", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const o1 = Ze("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = Ze("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zv = Ze("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Sh = "-",
  l1 = (t) => {
    const e = c1(t),
      { conflictingClassGroups: r, conflictingClassGroupModifiers: n } = t;
    return {
      getClassGroupId: (o) => {
        const a = o.split(Sh);
        return a[0] === "" && a.length !== 1 && a.shift(), Bv(a, e) || u1(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = r[o] || [];
        return a && n[o] ? [...l, ...n[o]] : l;
      },
    };
  },
  Bv = (t, e) => {
    var o;
    if (t.length === 0) return e.classGroupId;
    const r = t[0],
      n = e.nextPart.get(r),
      s = n ? Bv(t.slice(1), n) : void 0;
    if (s) return s;
    if (e.validators.length === 0) return;
    const i = t.join(Sh);
    return (o = e.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  yp = /^\[(.+)\]$/,
  u1 = (t) => {
    if (yp.test(t)) {
      const e = yp.exec(t)[1],
        r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
      if (r) return "arbitrary.." + r;
    }
  },
  c1 = (t) => {
    const { theme: e, prefix: r } = t,
      n = { nextPart: new Map(), validators: [] };
    return (
      h1(Object.entries(t.classGroups), r).forEach(([i, o]) => {
        Jc(o, n, i, e);
      }),
      n
    );
  },
  Jc = (t, e, r, n) => {
    t.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? e : vp(e, s);
        i.classGroupId = r;
        return;
      }
      if (typeof s == "function") {
        if (d1(s)) {
          Jc(s(n), e, r, n);
          return;
        }
        e.validators.push({ validator: s, classGroupId: r });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        Jc(o, vp(e, i), r, n);
      });
    });
  },
  vp = (t, e) => {
    let r = t;
    return (
      e.split(Sh).forEach((n) => {
        r.nextPart.has(n) ||
          r.nextPart.set(n, { nextPart: new Map(), validators: [] }),
          (r = r.nextPart.get(n));
      }),
      r
    );
  },
  d1 = (t) => t.isThemeGetter,
  h1 = (t, e) =>
    e
      ? t.map(([r, n]) => {
          const s = n.map((i) =>
            typeof i == "string"
              ? e + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([o, a]) => [e + o, a])
                )
              : i
          );
          return [r, s];
        })
      : t,
  f1 = (t) => {
    if (t < 1) return { get: () => {}, set: () => {} };
    let e = 0,
      r = new Map(),
      n = new Map();
    const s = (i, o) => {
      r.set(i, o), e++, e > t && ((e = 0), (n = r), (r = new Map()));
    };
    return {
      get(i) {
        let o = r.get(i);
        if (o !== void 0) return o;
        if ((o = n.get(i)) !== void 0) return s(i, o), o;
      },
      set(i, o) {
        r.has(i) ? r.set(i, o) : s(i, o);
      },
    };
  },
  Wv = "!",
  p1 = (t) => {
    const { separator: e, experimentalParseClassName: r } = t,
      n = e.length === 1,
      s = e[0],
      i = e.length,
      o = (a) => {
        const l = [];
        let u = 0,
          c = 0,
          h;
        for (let x = 0; x < a.length; x++) {
          let g = a[x];
          if (u === 0) {
            if (g === s && (n || a.slice(x, x + i) === e)) {
              l.push(a.slice(c, x)), (c = x + i);
              continue;
            }
            if (g === "/") {
              h = x;
              continue;
            }
          }
          g === "[" ? u++ : g === "]" && u--;
        }
        const f = l.length === 0 ? a : a.substring(c),
          d = f.startsWith(Wv),
          v = d ? f.substring(1) : f,
          p = h && h > c ? h - c : void 0;
        return {
          modifiers: l,
          hasImportantModifier: d,
          baseClassName: v,
          maybePostfixModifierPosition: p,
        };
      };
    return r ? (a) => r({ className: a, parseClassName: o }) : o;
  },
  m1 = (t) => {
    if (t.length <= 1) return t;
    const e = [];
    let r = [];
    return (
      t.forEach((n) => {
        n[0] === "[" ? (e.push(...r.sort(), n), (r = [])) : r.push(n);
      }),
      e.push(...r.sort()),
      e
    );
  },
  g1 = (t) => ({ cache: f1(t.cacheSize), parseClassName: p1(t), ...l1(t) }),
  y1 = /\s+/,
  v1 = (t, e) => {
    const {
        parseClassName: r,
        getClassGroupId: n,
        getConflictingClassGroupIds: s,
      } = e,
      i = [],
      o = t.trim().split(y1);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const u = o[l],
        {
          modifiers: c,
          hasImportantModifier: h,
          baseClassName: f,
          maybePostfixModifierPosition: d,
        } = r(u);
      let v = !!d,
        p = n(v ? f.substring(0, d) : f);
      if (!p) {
        if (!v) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((p = n(f)), !p)) {
          a = u + (a.length > 0 ? " " + a : a);
          continue;
        }
        v = !1;
      }
      const x = m1(c).join(":"),
        g = h ? x + Wv : x,
        m = g + p;
      if (i.includes(m)) continue;
      i.push(m);
      const y = s(p, v);
      for (let _ = 0; _ < y.length; ++_) {
        const S = y[_];
        i.push(g + S);
      }
      a = u + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function w1() {
  let t = 0,
    e,
    r,
    n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = Vv(e)) && (n && (n += " "), (n += r));
  return n;
}
const Vv = (t) => {
  if (typeof t == "string") return t;
  let e,
    r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = Vv(t[n])) && (r && (r += " "), (r += e));
  return r;
};
function x1(t, ...e) {
  let r,
    n,
    s,
    i = o;
  function o(l) {
    const u = e.reduce((c, h) => h(c), t());
    return (r = g1(u)), (n = r.cache.get), (s = r.cache.set), (i = a), a(l);
  }
  function a(l) {
    const u = n(l);
    if (u) return u;
    const c = v1(l, r);
    return s(l, c), c;
  }
  return function () {
    return i(w1.apply(null, arguments));
  };
}
const ye = (t) => {
    const e = (r) => r[t] || [];
    return (e.isThemeGetter = !0), e;
  },
  Hv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  b1 = /^\d+\/\d+$/,
  _1 = new Set(["px", "full", "screen"]),
  k1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  S1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  E1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  C1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  T1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  hr = (t) => zs(t) || _1.has(t) || b1.test(t),
  Mr = (t) => mi(t, "length", $1),
  zs = (t) => !!t && !Number.isNaN(Number(t)),
  Du = (t) => mi(t, "number", zs),
  Oi = (t) => !!t && Number.isInteger(Number(t)),
  R1 = (t) => t.endsWith("%") && zs(t.slice(0, -1)),
  se = (t) => Hv.test(t),
  Dr = (t) => k1.test(t),
  P1 = new Set(["length", "size", "percentage"]),
  O1 = (t) => mi(t, P1, qv),
  A1 = (t) => mi(t, "position", qv),
  N1 = new Set(["image", "url"]),
  j1 = (t) => mi(t, N1, M1),
  I1 = (t) => mi(t, "", L1),
  Ai = () => !0,
  mi = (t, e, r) => {
    const n = Hv.exec(t);
    return n
      ? n[1]
        ? typeof e == "string"
          ? n[1] === e
          : e.has(n[1])
        : r(n[2])
      : !1;
  },
  $1 = (t) => S1.test(t) && !E1.test(t),
  qv = () => !1,
  L1 = (t) => C1.test(t),
  M1 = (t) => T1.test(t),
  D1 = () => {
    const t = ye("colors"),
      e = ye("spacing"),
      r = ye("blur"),
      n = ye("brightness"),
      s = ye("borderColor"),
      i = ye("borderRadius"),
      o = ye("borderSpacing"),
      a = ye("borderWidth"),
      l = ye("contrast"),
      u = ye("grayscale"),
      c = ye("hueRotate"),
      h = ye("invert"),
      f = ye("gap"),
      d = ye("gradientColorStops"),
      v = ye("gradientColorStopPositions"),
      p = ye("inset"),
      x = ye("margin"),
      g = ye("opacity"),
      m = ye("padding"),
      y = ye("saturate"),
      _ = ye("scale"),
      S = ye("sepia"),
      E = ye("skew"),
      k = ye("space"),
      C = ye("translate"),
      T = () => ["auto", "contain", "none"],
      R = () => ["auto", "hidden", "clip", "visible", "scroll"],
      D = () => ["auto", se, e],
      L = () => [se, e],
      H = () => ["", hr, Mr],
      M = () => ["auto", zs, se],
      Y = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      Q = () => ["solid", "dashed", "dotted", "double", "none"],
      X = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      P = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      A = () => ["", "0", se],
      j = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      q = () => [zs, se];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Ai],
        spacing: [hr, Mr],
        blur: ["none", "", Dr, se],
        brightness: q(),
        borderColor: [t],
        borderRadius: ["none", "", "full", Dr, se],
        borderSpacing: L(),
        borderWidth: H(),
        contrast: q(),
        grayscale: A(),
        hueRotate: q(),
        invert: A(),
        gap: L(),
        gradientColorStops: [t],
        gradientColorStopPositions: [R1, Mr],
        inset: D(),
        margin: D(),
        opacity: q(),
        padding: L(),
        saturate: q(),
        scale: q(),
        sepia: A(),
        skew: q(),
        space: L(),
        translate: L(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", se] }],
        container: ["container"],
        columns: [{ columns: [Dr] }],
        "break-after": [{ "break-after": j() }],
        "break-before": [{ "break-before": j() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Y(), se] }],
        overflow: [{ overflow: R() }],
        "overflow-x": [{ "overflow-x": R() }],
        "overflow-y": [{ "overflow-y": R() }],
        overscroll: [{ overscroll: T() }],
        "overscroll-x": [{ "overscroll-x": T() }],
        "overscroll-y": [{ "overscroll-y": T() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Oi, se] }],
        basis: [{ basis: D() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", se] }],
        grow: [{ grow: A() }],
        shrink: [{ shrink: A() }],
        order: [{ order: ["first", "last", "none", Oi, se] }],
        "grid-cols": [{ "grid-cols": [Ai] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Oi, se] }, se] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Ai] }],
        "row-start-end": [{ row: ["auto", { span: [Oi, se] }, se] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", se] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", se] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...P()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...P(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...P(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [m] }],
        px: [{ px: [m] }],
        py: [{ py: [m] }],
        ps: [{ ps: [m] }],
        pe: [{ pe: [m] }],
        pt: [{ pt: [m] }],
        pr: [{ pr: [m] }],
        pb: [{ pb: [m] }],
        pl: [{ pl: [m] }],
        m: [{ m: [x] }],
        mx: [{ mx: [x] }],
        my: [{ my: [x] }],
        ms: [{ ms: [x] }],
        me: [{ me: [x] }],
        mt: [{ mt: [x] }],
        mr: [{ mr: [x] }],
        mb: [{ mb: [x] }],
        ml: [{ ml: [x] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", se, e] }],
        "min-w": [{ "min-w": [se, e, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              se,
              e,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Dr] },
              Dr,
            ],
          },
        ],
        h: [{ h: [se, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [se, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [se, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [se, e, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Dr, Mr] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Du,
            ],
          },
        ],
        "font-family": [{ font: [Ai] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              se,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", zs, Du] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              hr,
              se,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", se] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", se] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [t] }],
        "placeholder-opacity": [{ "placeholder-opacity": [g] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [t] }],
        "text-opacity": [{ "text-opacity": [g] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...Q(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", hr, Mr] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", hr, se] }],
        "text-decoration-color": [{ decoration: [t] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: L() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              se,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", se] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [g] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Y(), A1] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", O1] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              j1,
            ],
          },
        ],
        "bg-color": [{ bg: [t] }],
        "gradient-from-pos": [{ from: [v] }],
        "gradient-via-pos": [{ via: [v] }],
        "gradient-to-pos": [{ to: [v] }],
        "gradient-from": [{ from: [d] }],
        "gradient-via": [{ via: [d] }],
        "gradient-to": [{ to: [d] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [g] }],
        "border-style": [{ border: [...Q(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [g] }],
        "divide-style": [{ divide: Q() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...Q()] }],
        "outline-offset": [{ "outline-offset": [hr, se] }],
        "outline-w": [{ outline: [hr, Mr] }],
        "outline-color": [{ outline: [t] }],
        "ring-w": [{ ring: H() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [t] }],
        "ring-opacity": [{ "ring-opacity": [g] }],
        "ring-offset-w": [{ "ring-offset": [hr, Mr] }],
        "ring-offset-color": [{ "ring-offset": [t] }],
        shadow: [{ shadow: ["", "inner", "none", Dr, I1] }],
        "shadow-color": [{ shadow: [Ai] }],
        opacity: [{ opacity: [g] }],
        "mix-blend": [{ "mix-blend": [...X(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": X() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [r] }],
        brightness: [{ brightness: [n] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Dr, se] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [c] }],
        invert: [{ invert: [h] }],
        saturate: [{ saturate: [y] }],
        sepia: [{ sepia: [S] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [r] }],
        "backdrop-brightness": [{ "backdrop-brightness": [n] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
        "backdrop-invert": [{ "backdrop-invert": [h] }],
        "backdrop-opacity": [{ "backdrop-opacity": [g] }],
        "backdrop-saturate": [{ "backdrop-saturate": [y] }],
        "backdrop-sepia": [{ "backdrop-sepia": [S] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              se,
            ],
          },
        ],
        duration: [{ duration: q() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", se] }],
        delay: [{ delay: q() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", se] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [_] }],
        "scale-x": [{ "scale-x": [_] }],
        "scale-y": [{ "scale-y": [_] }],
        rotate: [{ rotate: [Oi, se] }],
        "translate-x": [{ "translate-x": [C] }],
        "translate-y": [{ "translate-y": [C] }],
        "skew-x": [{ "skew-x": [E] }],
        "skew-y": [{ "skew-y": [E] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              se,
            ],
          },
        ],
        accent: [{ accent: ["auto", t] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              se,
            ],
          },
        ],
        "caret-color": [{ caret: [t] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": L() }],
        "scroll-mx": [{ "scroll-mx": L() }],
        "scroll-my": [{ "scroll-my": L() }],
        "scroll-ms": [{ "scroll-ms": L() }],
        "scroll-me": [{ "scroll-me": L() }],
        "scroll-mt": [{ "scroll-mt": L() }],
        "scroll-mr": [{ "scroll-mr": L() }],
        "scroll-mb": [{ "scroll-mb": L() }],
        "scroll-ml": [{ "scroll-ml": L() }],
        "scroll-p": [{ "scroll-p": L() }],
        "scroll-px": [{ "scroll-px": L() }],
        "scroll-py": [{ "scroll-py": L() }],
        "scroll-ps": [{ "scroll-ps": L() }],
        "scroll-pe": [{ "scroll-pe": L() }],
        "scroll-pt": [{ "scroll-pt": L() }],
        "scroll-pr": [{ "scroll-pr": L() }],
        "scroll-pb": [{ "scroll-pb": L() }],
        "scroll-pl": [{ "scroll-pl": L() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", se] },
        ],
        fill: [{ fill: [t, "none"] }],
        "stroke-w": [{ stroke: [hr, Mr, Du] }],
        stroke: [{ stroke: [t, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  U1 = x1(D1);
function cr(...t) {
  return U1(Lv(t));
}
const F1 = G_,
  Kv = b.forwardRef(({ className: t, ...e }, r) =>
    w.jsx(Pv, {
      ref: r,
      className: cr(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t
      ),
      ...e,
    })
  );
Kv.displayName = Pv.displayName;
const z1 = Mv(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-[4px] border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full font-['Newsreader',serif]",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-[#a85656] bg-[#a85656] text-amber-100",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Gv = b.forwardRef(({ className: t, variant: e, ...r }, n) =>
    w.jsx(Ov, { ref: n, className: cr(z1({ variant: e }), t), ...r })
  );
Gv.displayName = Ov.displayName;
const B1 = b.forwardRef(({ className: t, ...e }, r) =>
  w.jsx(jv, {
    ref: r,
    className: cr(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      t
    ),
    ...e,
  })
);
B1.displayName = jv.displayName;
const Qv = b.forwardRef(({ className: t, ...e }, r) =>
  w.jsx(Iv, {
    ref: r,
    className: cr(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t
    ),
    "toast-close": "",
    ...e,
    children: w.jsx(zv, { className: "h-4 w-4" }),
  })
);
Qv.displayName = Iv.displayName;
const Jv = b.forwardRef(({ className: t, ...e }, r) =>
  w.jsx(Av, { ref: r, className: cr("text-sm font-semibold", t), ...e })
);
Jv.displayName = Av.displayName;
const Zv = b.forwardRef(({ className: t, ...e }, r) =>
  w.jsx(Nv, { ref: r, className: cr("text-sm opacity-90", t), ...e })
);
Zv.displayName = Nv.displayName;
function W1() {
  const { toasts: t } = t_();
  return w.jsxs(F1, {
    children: [
      t.map(function ({ id: e, title: r, description: n, action: s, ...i }) {
        return w.jsxs(
          Gv,
          {
            ...i,
            children: [
              w.jsxs("div", {
                className: "grid gap-1",
                children: [
                  r && w.jsx(Jv, { children: r }),
                  n && w.jsx(Zv, { children: n }),
                ],
              }),
              s,
              w.jsx(Qv, {}),
            ],
          },
          e
        );
      }),
      w.jsx(Kv, {}),
    ],
  });
}
var wp = ["light", "dark"],
  V1 = "(prefers-color-scheme: dark)",
  H1 = b.createContext(void 0),
  q1 = { setTheme: (t) => {}, themes: [] },
  K1 = () => {
    var t;
    return (t = b.useContext(H1)) != null ? t : q1;
  };
b.memo(
  ({
    forcedTheme: t,
    storageKey: e,
    attribute: r,
    enableSystem: n,
    enableColorScheme: s,
    defaultTheme: i,
    value: o,
    attrs: a,
    nonce: l,
  }) => {
    let u = i === "system",
      c =
        r === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${a
              .map((v) => `'${v}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${r}',s='setAttribute';`,
      h = s
        ? wp.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      f = (v, p = !1, x = !0) => {
        let g = o ? o[v] : v,
          m = p ? v + "|| ''" : `'${g}'`,
          y = "";
        return (
          s &&
            x &&
            !p &&
            wp.includes(v) &&
            (y += `d.style.colorScheme = '${v}';`),
          r === "class"
            ? p || g
              ? (y += `c.add(${m})`)
              : (y += "null")
            : g && (y += `d[s](n,${m})`),
          y
        );
      },
      d = t
        ? `!function(){${c}${f(t)}}()`
        : n
        ? `!function(){try{${c}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${u})){var t='${V1}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f(
            "dark"
          )}}else{${f("light")}}}else if(e){${
            o ? `var x=${JSON.stringify(o)};` : ""
          }${f(o ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + f(i, !1, !1) + "}"
          }${h}}catch(e){}}()`
        : `!function(){try{${c}var e=localStorage.getItem('${e}');if(e){${
            o ? `var x=${JSON.stringify(o)};` : ""
          }${f(o ? "x[e]" : "e", !0)}}else{${f(
            i,
            !1,
            !1
          )};}${h}}catch(t){}}();`;
    return b.createElement("script", {
      nonce: l,
      dangerouslySetInnerHTML: { __html: d },
    });
  }
);
var G1 = (t) => {
    switch (t) {
      case "success":
        return Z1;
      case "info":
        return X1;
      case "warning":
        return Y1;
      case "error":
        return ek;
      default:
        return null;
    }
  },
  Q1 = Array(12).fill(0),
  J1 = ({ visible: t, className: e }) =>
    $.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
        "data-visible": t,
      },
      $.createElement(
        "div",
        { className: "sonner-spinner" },
        Q1.map((r, n) =>
          $.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${n}`,
          })
        )
      )
    ),
  Z1 = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  Y1 = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  X1 = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  ek = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    $.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  tk = $.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    $.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    $.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  rk = () => {
    let [t, e] = $.useState(document.hidden);
    return (
      $.useEffect(() => {
        let r = () => {
          e(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", r),
          () => window.removeEventListener("visibilitychange", r)
        );
      }, []),
      t
    );
  },
  Zc = 1,
  nk = class {
    constructor() {
      (this.subscribe = (t) => (
        this.subscribers.push(t),
        () => {
          let e = this.subscribers.indexOf(t);
          this.subscribers.splice(e, 1);
        }
      )),
        (this.publish = (t) => {
          this.subscribers.forEach((e) => e(t));
        }),
        (this.addToast = (t) => {
          this.publish(t), (this.toasts = [...this.toasts, t]);
        }),
        (this.create = (t) => {
          var e;
          let { message: r, ...n } = t,
            s =
              typeof (t == null ? void 0 : t.id) == "number" ||
              ((e = t.id) == null ? void 0 : e.length) > 0
                ? t.id
                : Zc++,
            i = this.toasts.find((a) => a.id === s),
            o = t.dismissible === void 0 ? !0 : t.dismissible;
          return (
            this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
            i
              ? (this.toasts = this.toasts.map((a) =>
                  a.id === s
                    ? (this.publish({ ...a, ...t, id: s, title: r }),
                      { ...a, ...t, id: s, dismissible: o, title: r })
                    : a
                ))
              : this.addToast({ title: r, ...n, dismissible: o, id: s }),
            s
          );
        }),
        (this.dismiss = (t) => (
          this.dismissedToasts.add(t),
          t ||
            this.toasts.forEach((e) => {
              this.subscribers.forEach((r) => r({ id: e.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })),
          t
        )),
        (this.message = (t, e) => this.create({ ...e, message: t })),
        (this.error = (t, e) =>
          this.create({ ...e, message: t, type: "error" })),
        (this.success = (t, e) =>
          this.create({ ...e, type: "success", message: t })),
        (this.info = (t, e) => this.create({ ...e, type: "info", message: t })),
        (this.warning = (t, e) =>
          this.create({ ...e, type: "warning", message: t })),
        (this.loading = (t, e) =>
          this.create({ ...e, type: "loading", message: t })),
        (this.promise = (t, e) => {
          if (!e) return;
          let r;
          e.loading !== void 0 &&
            (r = this.create({
              ...e,
              promise: t,
              type: "loading",
              message: e.loading,
              description:
                typeof e.description != "function" ? e.description : void 0,
            }));
          let n = t instanceof Promise ? t : t(),
            s = r !== void 0,
            i,
            o = n
              .then(async (l) => {
                if (((i = ["resolve", l]), $.isValidElement(l)))
                  (s = !1), this.create({ id: r, type: "default", message: l });
                else if (ik(l) && !l.ok) {
                  s = !1;
                  let u =
                      typeof e.error == "function"
                        ? await e.error(`HTTP error! status: ${l.status}`)
                        : e.error,
                    c =
                      typeof e.description == "function"
                        ? await e.description(`HTTP error! status: ${l.status}`)
                        : e.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                } else if (e.success !== void 0) {
                  s = !1;
                  let u =
                      typeof e.success == "function"
                        ? await e.success(l)
                        : e.success,
                    c =
                      typeof e.description == "function"
                        ? await e.description(l)
                        : e.description;
                  this.create({
                    id: r,
                    type: "success",
                    message: u,
                    description: c,
                  });
                }
              })
              .catch(async (l) => {
                if (((i = ["reject", l]), e.error !== void 0)) {
                  s = !1;
                  let u =
                      typeof e.error == "function" ? await e.error(l) : e.error,
                    c =
                      typeof e.description == "function"
                        ? await e.description(l)
                        : e.description;
                  this.create({
                    id: r,
                    type: "error",
                    message: u,
                    description: c,
                  });
                }
              })
              .finally(() => {
                var l;
                s && (this.dismiss(r), (r = void 0)),
                  (l = e.finally) == null || l.call(e);
              }),
            a = () =>
              new Promise((l, u) =>
                o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u)
              );
          return typeof r != "string" && typeof r != "number"
            ? { unwrap: a }
            : Object.assign(r, { unwrap: a });
        }),
        (this.custom = (t, e) => {
          let r = (e == null ? void 0 : e.id) || Zc++;
          return this.create({ jsx: t(r), id: r, ...e }), r;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  st = new nk(),
  sk = (t, e) => {
    let r = (e == null ? void 0 : e.id) || Zc++;
    return st.addToast({ title: t, ...e, id: r }), r;
  },
  ik = (t) =>
    t &&
    typeof t == "object" &&
    "ok" in t &&
    typeof t.ok == "boolean" &&
    "status" in t &&
    typeof t.status == "number",
  ok = sk,
  ak = () => st.toasts,
  lk = () => st.getActiveToasts();
Object.assign(
  ok,
  {
    success: st.success,
    info: st.info,
    warning: st.warning,
    error: st.error,
    custom: st.custom,
    message: st.message,
    promise: st.promise,
    dismiss: st.dismiss,
    loading: st.loading,
  },
  { getHistory: ak, getToasts: lk }
);
function uk(t, { insertAt: e } = {}) {
  if (typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0],
    n = document.createElement("style");
  (n.type = "text/css"),
    e === "top" && r.firstChild
      ? r.insertBefore(n, r.firstChild)
      : r.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = t)
      : n.appendChild(document.createTextNode(t));
}
uk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function pa(t) {
  return t.label !== void 0;
}
var ck = 3,
  dk = "32px",
  hk = "16px",
  xp = 4e3,
  fk = 356,
  pk = 14,
  mk = 20,
  gk = 200;
function Lt(...t) {
  return t.filter(Boolean).join(" ");
}
function yk(t) {
  let [e, r] = t.split("-"),
    n = [];
  return e && n.push(e), r && n.push(r), n;
}
var vk = (t) => {
  var e, r, n, s, i, o, a, l, u, c, h;
  let {
      invert: f,
      toast: d,
      unstyled: v,
      interacting: p,
      setHeights: x,
      visibleToasts: g,
      heights: m,
      index: y,
      toasts: _,
      expanded: S,
      removeToast: E,
      defaultRichColors: k,
      closeButton: C,
      style: T,
      cancelButtonStyle: R,
      actionButtonStyle: D,
      className: L = "",
      descriptionClassName: H = "",
      duration: M,
      position: Y,
      gap: Q,
      loadingIcon: X,
      expandByDefault: P,
      classNames: A,
      icons: j,
      closeButtonAriaLabel: q = "Close toast",
      pauseWhenPageIsHidden: U,
    } = t,
    [K, Z] = $.useState(null),
    [he, Ee] = $.useState(null),
    [ue, En] = $.useState(!1),
    [Or, Cn] = $.useState(!1),
    [Ar, is] = $.useState(!1),
    [Nr, Ho] = $.useState(!1),
    [su, qo] = $.useState(!1),
    [iu, xi] = $.useState(0),
    [os, qh] = $.useState(0),
    bi = $.useRef(d.duration || M || xp),
    Kh = $.useRef(null),
    Tn = $.useRef(null),
    gw = y === 0,
    yw = y + 1 <= g,
    kt = d.type,
    as = d.dismissible !== !1,
    vw = d.className || "",
    ww = d.descriptionClassName || "",
    Ko = $.useMemo(
      () => m.findIndex((re) => re.toastId === d.id) || 0,
      [m, d.id]
    ),
    xw = $.useMemo(() => {
      var re;
      return (re = d.closeButton) != null ? re : C;
    }, [d.closeButton, C]),
    Gh = $.useMemo(() => d.duration || M || xp, [d.duration, M]),
    ou = $.useRef(0),
    ls = $.useRef(0),
    Qh = $.useRef(0),
    us = $.useRef(null),
    [bw, _w] = Y.split("-"),
    Jh = $.useMemo(
      () => m.reduce((re, pe, xe) => (xe >= Ko ? re : re + pe.height), 0),
      [m, Ko]
    ),
    Zh = rk(),
    kw = d.invert || f,
    au = kt === "loading";
  (ls.current = $.useMemo(() => Ko * Q + Jh, [Ko, Jh])),
    $.useEffect(() => {
      bi.current = Gh;
    }, [Gh]),
    $.useEffect(() => {
      En(!0);
    }, []),
    $.useEffect(() => {
      let re = Tn.current;
      if (re) {
        let pe = re.getBoundingClientRect().height;
        return (
          qh(pe),
          x((xe) => [
            { toastId: d.id, height: pe, position: d.position },
            ...xe,
          ]),
          () => x((xe) => xe.filter((Nt) => Nt.toastId !== d.id))
        );
      }
    }, [x, d.id]),
    $.useLayoutEffect(() => {
      if (!ue) return;
      let re = Tn.current,
        pe = re.style.height;
      re.style.height = "auto";
      let xe = re.getBoundingClientRect().height;
      (re.style.height = pe),
        qh(xe),
        x((Nt) =>
          Nt.find((jt) => jt.toastId === d.id)
            ? Nt.map((jt) => (jt.toastId === d.id ? { ...jt, height: xe } : jt))
            : [{ toastId: d.id, height: xe, position: d.position }, ...Nt]
        );
    }, [ue, d.title, d.description, x, d.id]);
  let jr = $.useCallback(() => {
    Cn(!0),
      xi(ls.current),
      x((re) => re.filter((pe) => pe.toastId !== d.id)),
      setTimeout(() => {
        E(d);
      }, gk);
  }, [d, E, x, ls]);
  $.useEffect(() => {
    if (
      (d.promise && kt === "loading") ||
      d.duration === 1 / 0 ||
      d.type === "loading"
    )
      return;
    let re;
    return (
      S || p || (U && Zh)
        ? (() => {
            if (Qh.current < ou.current) {
              let pe = new Date().getTime() - ou.current;
              bi.current = bi.current - pe;
            }
            Qh.current = new Date().getTime();
          })()
        : bi.current !== 1 / 0 &&
          ((ou.current = new Date().getTime()),
          (re = setTimeout(() => {
            var pe;
            (pe = d.onAutoClose) == null || pe.call(d, d), jr();
          }, bi.current))),
      () => clearTimeout(re)
    );
  }, [S, p, d, kt, U, Zh, jr]),
    $.useEffect(() => {
      d.delete && jr();
    }, [jr, d.delete]);
  function Sw() {
    var re, pe, xe;
    return j != null && j.loading
      ? $.createElement(
          "div",
          {
            className: Lt(
              A == null ? void 0 : A.loader,
              (re = d == null ? void 0 : d.classNames) == null
                ? void 0
                : re.loader,
              "sonner-loader"
            ),
            "data-visible": kt === "loading",
          },
          j.loading
        )
      : X
      ? $.createElement(
          "div",
          {
            className: Lt(
              A == null ? void 0 : A.loader,
              (pe = d == null ? void 0 : d.classNames) == null
                ? void 0
                : pe.loader,
              "sonner-loader"
            ),
            "data-visible": kt === "loading",
          },
          X
        )
      : $.createElement(J1, {
          className: Lt(
            A == null ? void 0 : A.loader,
            (xe = d == null ? void 0 : d.classNames) == null
              ? void 0
              : xe.loader
          ),
          visible: kt === "loading",
        });
  }
  return $.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Tn,
      className: Lt(
        L,
        vw,
        A == null ? void 0 : A.toast,
        (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast,
        A == null ? void 0 : A.default,
        A == null ? void 0 : A[kt],
        (r = d == null ? void 0 : d.classNames) == null ? void 0 : r[kt]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (n = d.richColors) != null ? n : k,
      "data-styled": !(d.jsx || d.unstyled || v),
      "data-mounted": ue,
      "data-promise": !!d.promise,
      "data-swiped": su,
      "data-removed": Or,
      "data-visible": yw,
      "data-y-position": bw,
      "data-x-position": _w,
      "data-index": y,
      "data-front": gw,
      "data-swiping": Ar,
      "data-dismissible": as,
      "data-type": kt,
      "data-invert": kw,
      "data-swipe-out": Nr,
      "data-swipe-direction": he,
      "data-expanded": !!(S || (P && ue)),
      style: {
        "--index": y,
        "--toasts-before": y,
        "--z-index": _.length - y,
        "--offset": `${Or ? iu : ls.current}px`,
        "--initial-height": P ? "auto" : `${os}px`,
        ...T,
        ...d.style,
      },
      onDragEnd: () => {
        is(!1), Z(null), (us.current = null);
      },
      onPointerDown: (re) => {
        au ||
          !as ||
          ((Kh.current = new Date()),
          xi(ls.current),
          re.target.setPointerCapture(re.pointerId),
          re.target.tagName !== "BUTTON" &&
            (is(!0), (us.current = { x: re.clientX, y: re.clientY })));
      },
      onPointerUp: () => {
        var re, pe, xe, Nt;
        if (Nr || !as) return;
        us.current = null;
        let jt = Number(
            ((re = Tn.current) == null
              ? void 0
              : re.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          Ir = Number(
            ((pe = Tn.current) == null
              ? void 0
              : pe.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          Rn =
            new Date().getTime() -
            ((xe = Kh.current) == null ? void 0 : xe.getTime()),
          It = K === "x" ? jt : Ir,
          $r = Math.abs(It) / Rn;
        if (Math.abs(It) >= mk || $r > 0.11) {
          xi(ls.current),
            (Nt = d.onDismiss) == null || Nt.call(d, d),
            Ee(
              K === "x" ? (jt > 0 ? "right" : "left") : Ir > 0 ? "down" : "up"
            ),
            jr(),
            Ho(!0),
            qo(!1);
          return;
        }
        is(!1), Z(null);
      },
      onPointerMove: (re) => {
        var pe, xe, Nt, jt;
        if (
          !us.current ||
          !as ||
          ((pe = window.getSelection()) == null
            ? void 0
            : pe.toString().length) > 0
        )
          return;
        let Ir = re.clientY - us.current.y,
          Rn = re.clientX - us.current.x,
          It = (xe = t.swipeDirections) != null ? xe : yk(Y);
        !K &&
          (Math.abs(Rn) > 1 || Math.abs(Ir) > 1) &&
          Z(Math.abs(Rn) > Math.abs(Ir) ? "x" : "y");
        let $r = { x: 0, y: 0 };
        K === "y"
          ? (It.includes("top") || It.includes("bottom")) &&
            ((It.includes("top") && Ir < 0) ||
              (It.includes("bottom") && Ir > 0)) &&
            ($r.y = Ir)
          : K === "x" &&
            (It.includes("left") || It.includes("right")) &&
            ((It.includes("left") && Rn < 0) ||
              (It.includes("right") && Rn > 0)) &&
            ($r.x = Rn),
          (Math.abs($r.x) > 0 || Math.abs($r.y) > 0) && qo(!0),
          (Nt = Tn.current) == null ||
            Nt.style.setProperty("--swipe-amount-x", `${$r.x}px`),
          (jt = Tn.current) == null ||
            jt.style.setProperty("--swipe-amount-y", `${$r.y}px`);
      },
    },
    xw && !d.jsx
      ? $.createElement(
          "button",
          {
            "aria-label": q,
            "data-disabled": au,
            "data-close-button": !0,
            onClick:
              au || !as
                ? () => {}
                : () => {
                    var re;
                    jr(), (re = d.onDismiss) == null || re.call(d, d);
                  },
            className: Lt(
              A == null ? void 0 : A.closeButton,
              (s = d == null ? void 0 : d.classNames) == null
                ? void 0
                : s.closeButton
            ),
          },
          (i = j == null ? void 0 : j.close) != null ? i : tk
        )
      : null,
    d.jsx || b.isValidElement(d.title)
      ? d.jsx
        ? d.jsx
        : typeof d.title == "function"
        ? d.title()
        : d.title
      : $.createElement(
          $.Fragment,
          null,
          kt || d.icon || d.promise
            ? $.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Lt(
                    A == null ? void 0 : A.icon,
                    (o = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : o.icon
                  ),
                },
                d.promise || (d.type === "loading" && !d.icon)
                  ? d.icon || Sw()
                  : null,
                d.type !== "loading"
                  ? d.icon || (j == null ? void 0 : j[kt]) || G1(kt)
                  : null
              )
            : null,
          $.createElement(
            "div",
            {
              "data-content": "",
              className: Lt(
                A == null ? void 0 : A.content,
                (a = d == null ? void 0 : d.classNames) == null
                  ? void 0
                  : a.content
              ),
            },
            $.createElement(
              "div",
              {
                "data-title": "",
                className: Lt(
                  A == null ? void 0 : A.title,
                  (l = d == null ? void 0 : d.classNames) == null
                    ? void 0
                    : l.title
                ),
              },
              typeof d.title == "function" ? d.title() : d.title
            ),
            d.description
              ? $.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Lt(
                      H,
                      ww,
                      A == null ? void 0 : A.description,
                      (u = d == null ? void 0 : d.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof d.description == "function"
                    ? d.description()
                    : d.description
                )
              : null
          ),
          b.isValidElement(d.cancel)
            ? d.cancel
            : d.cancel && pa(d.cancel)
            ? $.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: d.cancelButtonStyle || R,
                  onClick: (re) => {
                    var pe, xe;
                    pa(d.cancel) &&
                      as &&
                      ((xe = (pe = d.cancel).onClick) == null ||
                        xe.call(pe, re),
                      jr());
                  },
                  className: Lt(
                    A == null ? void 0 : A.cancelButton,
                    (c = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : c.cancelButton
                  ),
                },
                d.cancel.label
              )
            : null,
          b.isValidElement(d.action)
            ? d.action
            : d.action && pa(d.action)
            ? $.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: d.actionButtonStyle || D,
                  onClick: (re) => {
                    var pe, xe;
                    pa(d.action) &&
                      ((xe = (pe = d.action).onClick) == null ||
                        xe.call(pe, re),
                      !re.defaultPrevented && jr());
                  },
                  className: Lt(
                    A == null ? void 0 : A.actionButton,
                    (h = d == null ? void 0 : d.classNames) == null
                      ? void 0
                      : h.actionButton
                  ),
                },
                d.action.label
              )
            : null
        )
  );
};
function bp() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t
    ? window.getComputedStyle(document.documentElement).direction
    : t;
}
function wk(t, e) {
  let r = {};
  return (
    [t, e].forEach((n, s) => {
      let i = s === 1,
        o = i ? "--mobile-offset" : "--offset",
        a = i ? hk : dk;
      function l(u) {
        ["top", "right", "bottom", "left"].forEach((c) => {
          r[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof n == "number" || typeof n == "string"
        ? l(n)
        : typeof n == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            n[u] === void 0
              ? (r[`${o}-${u}`] = a)
              : (r[`${o}-${u}`] = typeof n[u] == "number" ? `${n[u]}px` : n[u]);
          })
        : l(a);
    }),
    r
  );
}
var xk = b.forwardRef(function (t, e) {
  let {
      invert: r,
      position: n = "bottom-right",
      hotkey: s = ["altKey", "KeyT"],
      expand: i,
      closeButton: o,
      className: a,
      offset: l,
      mobileOffset: u,
      theme: c = "light",
      richColors: h,
      duration: f,
      style: d,
      visibleToasts: v = ck,
      toastOptions: p,
      dir: x = bp(),
      gap: g = pk,
      loadingIcon: m,
      icons: y,
      containerAriaLabel: _ = "Notifications",
      pauseWhenPageIsHidden: S,
    } = t,
    [E, k] = $.useState([]),
    C = $.useMemo(
      () =>
        Array.from(
          new Set(
            [n].concat(E.filter((U) => U.position).map((U) => U.position))
          )
        ),
      [E, n]
    ),
    [T, R] = $.useState([]),
    [D, L] = $.useState(!1),
    [H, M] = $.useState(!1),
    [Y, Q] = $.useState(
      c !== "system"
        ? c
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    X = $.useRef(null),
    P = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    A = $.useRef(null),
    j = $.useRef(!1),
    q = $.useCallback((U) => {
      k((K) => {
        var Z;
        return (
          ((Z = K.find((he) => he.id === U.id)) != null && Z.delete) ||
            st.dismiss(U.id),
          K.filter(({ id: he }) => he !== U.id)
        );
      });
    }, []);
  return (
    $.useEffect(
      () =>
        st.subscribe((U) => {
          if (U.dismiss) {
            k((K) => K.map((Z) => (Z.id === U.id ? { ...Z, delete: !0 } : Z)));
            return;
          }
          setTimeout(() => {
            av.flushSync(() => {
              k((K) => {
                let Z = K.findIndex((he) => he.id === U.id);
                return Z !== -1
                  ? [...K.slice(0, Z), { ...K[Z], ...U }, ...K.slice(Z + 1)]
                  : [U, ...K];
              });
            });
          });
        }),
      []
    ),
    $.useEffect(() => {
      if (c !== "system") {
        Q(c);
        return;
      }
      if (
        (c === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? Q("dark")
            : Q("light")),
        typeof window > "u")
      )
        return;
      let U = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        U.addEventListener("change", ({ matches: K }) => {
          Q(K ? "dark" : "light");
        });
      } catch {
        U.addListener(({ matches: Z }) => {
          try {
            Q(Z ? "dark" : "light");
          } catch (he) {
            console.error(he);
          }
        });
      }
    }, [c]),
    $.useEffect(() => {
      E.length <= 1 && L(!1);
    }, [E]),
    $.useEffect(() => {
      let U = (K) => {
        var Z, he;
        s.every((Ee) => K[Ee] || K.code === Ee) &&
          (L(!0), (Z = X.current) == null || Z.focus()),
          K.code === "Escape" &&
            (document.activeElement === X.current ||
              ((he = X.current) != null &&
                he.contains(document.activeElement))) &&
            L(!1);
      };
      return (
        document.addEventListener("keydown", U),
        () => document.removeEventListener("keydown", U)
      );
    }, [s]),
    $.useEffect(() => {
      if (X.current)
        return () => {
          A.current &&
            (A.current.focus({ preventScroll: !0 }),
            (A.current = null),
            (j.current = !1));
        };
    }, [X.current]),
    $.createElement(
      "section",
      {
        ref: e,
        "aria-label": `${_} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      C.map((U, K) => {
        var Z;
        let [he, Ee] = U.split("-");
        return E.length
          ? $.createElement(
              "ol",
              {
                key: U,
                dir: x === "auto" ? bp() : x,
                tabIndex: -1,
                ref: X,
                className: a,
                "data-sonner-toaster": !0,
                "data-theme": Y,
                "data-y-position": he,
                "data-lifted": D && E.length > 1 && !i,
                "data-x-position": Ee,
                style: {
                  "--front-toast-height": `${
                    ((Z = T[0]) == null ? void 0 : Z.height) || 0
                  }px`,
                  "--width": `${fk}px`,
                  "--gap": `${g}px`,
                  ...d,
                  ...wk(l, u),
                },
                onBlur: (ue) => {
                  j.current &&
                    !ue.currentTarget.contains(ue.relatedTarget) &&
                    ((j.current = !1),
                    A.current &&
                      (A.current.focus({ preventScroll: !0 }),
                      (A.current = null)));
                },
                onFocus: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    j.current ||
                    ((j.current = !0), (A.current = ue.relatedTarget));
                },
                onMouseEnter: () => L(!0),
                onMouseMove: () => L(!0),
                onMouseLeave: () => {
                  H || L(!1);
                },
                onDragEnd: () => L(!1),
                onPointerDown: (ue) => {
                  (ue.target instanceof HTMLElement &&
                    ue.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              E.filter(
                (ue) => (!ue.position && K === 0) || ue.position === U
              ).map((ue, En) => {
                var Or, Cn;
                return $.createElement(vk, {
                  key: ue.id,
                  icons: y,
                  index: En,
                  toast: ue,
                  defaultRichColors: h,
                  duration:
                    (Or = p == null ? void 0 : p.duration) != null ? Or : f,
                  className: p == null ? void 0 : p.className,
                  descriptionClassName:
                    p == null ? void 0 : p.descriptionClassName,
                  invert: r,
                  visibleToasts: v,
                  closeButton:
                    (Cn = p == null ? void 0 : p.closeButton) != null ? Cn : o,
                  interacting: H,
                  position: U,
                  style: p == null ? void 0 : p.style,
                  unstyled: p == null ? void 0 : p.unstyled,
                  classNames: p == null ? void 0 : p.classNames,
                  cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                  actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                  removeToast: q,
                  toasts: E.filter((Ar) => Ar.position == ue.position),
                  heights: T.filter((Ar) => Ar.position == ue.position),
                  setHeights: R,
                  expandByDefault: i,
                  gap: g,
                  loadingIcon: m,
                  expanded: D,
                  pauseWhenPageIsHidden: S,
                  swipeDirections: t.swipeDirections,
                });
              })
            )
          : null;
      })
    )
  );
});
const bk = ({ ...t }) => {
    const { theme: e = "system" } = K1();
    return w.jsx(xk, {
      theme: e,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...t,
    });
  },
  _k = ["top", "right", "bottom", "left"],
  yn = Math.min,
  ft = Math.max,
  dl = Math.round,
  ma = Math.floor,
  ar = (t) => ({ x: t, y: t }),
  kk = { left: "right", right: "left", bottom: "top", top: "bottom" },
  Sk = { start: "end", end: "start" };
function Yc(t, e, r) {
  return ft(t, yn(e, r));
}
function Er(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function Cr(t) {
  return t.split("-")[0];
}
function gi(t) {
  return t.split("-")[1];
}
function Eh(t) {
  return t === "x" ? "y" : "x";
}
function Ch(t) {
  return t === "y" ? "height" : "width";
}
const Ek = new Set(["top", "bottom"]);
function sr(t) {
  return Ek.has(Cr(t)) ? "y" : "x";
}
function Th(t) {
  return Eh(sr(t));
}
function Ck(t, e, r) {
  r === void 0 && (r = !1);
  const n = gi(t),
    s = Th(t),
    i = Ch(s);
  let o =
    s === "x"
      ? n === (r ? "end" : "start")
        ? "right"
        : "left"
      : n === "start"
      ? "bottom"
      : "top";
  return e.reference[i] > e.floating[i] && (o = hl(o)), [o, hl(o)];
}
function Tk(t) {
  const e = hl(t);
  return [Xc(t), e, Xc(e)];
}
function Xc(t) {
  return t.replace(/start|end/g, (e) => Sk[e]);
}
const _p = ["left", "right"],
  kp = ["right", "left"],
  Rk = ["top", "bottom"],
  Pk = ["bottom", "top"];
function Ok(t, e, r) {
  switch (t) {
    case "top":
    case "bottom":
      return r ? (e ? kp : _p) : e ? _p : kp;
    case "left":
    case "right":
      return e ? Rk : Pk;
    default:
      return [];
  }
}
function Ak(t, e, r, n) {
  const s = gi(t);
  let i = Ok(Cr(t), r === "start", n);
  return (
    s && ((i = i.map((o) => o + "-" + s)), e && (i = i.concat(i.map(Xc)))), i
  );
}
function hl(t) {
  return t.replace(/left|right|bottom|top/g, (e) => kk[e]);
}
function Nk(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Yv(t) {
  return typeof t != "number"
    ? Nk(t)
    : { top: t, right: t, bottom: t, left: t };
}
function fl(t) {
  const { x: e, y: r, width: n, height: s } = t;
  return {
    width: n,
    height: s,
    top: r,
    left: e,
    right: e + n,
    bottom: r + s,
    x: e,
    y: r,
  };
}
function Sp(t, e, r) {
  let { reference: n, floating: s } = t;
  const i = sr(e),
    o = Th(e),
    a = Ch(o),
    l = Cr(e),
    u = i === "y",
    c = n.x + n.width / 2 - s.width / 2,
    h = n.y + n.height / 2 - s.height / 2,
    f = n[a] / 2 - s[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = { x: c, y: n.y - s.height };
      break;
    case "bottom":
      d = { x: c, y: n.y + n.height };
      break;
    case "right":
      d = { x: n.x + n.width, y: h };
      break;
    case "left":
      d = { x: n.x - s.width, y: h };
      break;
    default:
      d = { x: n.x, y: n.y };
  }
  switch (gi(e)) {
    case "start":
      d[o] -= f * (r && u ? -1 : 1);
      break;
    case "end":
      d[o] += f * (r && u ? -1 : 1);
      break;
  }
  return d;
}
const jk = async (t, e, r) => {
  const {
      placement: n = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = r,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(e));
  let u = await o.getElementRects({ reference: t, floating: e, strategy: s }),
    { x: c, y: h } = Sp(u, n, l),
    f = n,
    d = {},
    v = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: x, fn: g } = a[p],
      {
        x: m,
        y,
        data: _,
        reset: S,
      } = await g({
        x: c,
        y: h,
        initialPlacement: n,
        placement: f,
        strategy: s,
        middlewareData: d,
        rects: u,
        platform: o,
        elements: { reference: t, floating: e },
      });
    (c = m ?? c),
      (h = y ?? h),
      (d = { ...d, [x]: { ...d[x], ..._ } }),
      S &&
        v <= 50 &&
        (v++,
        typeof S == "object" &&
          (S.placement && (f = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await o.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: s,
                  })
                : S.rects),
          ({ x: c, y: h } = Sp(u, f, l))),
        (p = -1));
  }
  return { x: c, y: h, placement: f, strategy: s, middlewareData: d };
};
async function go(t, e) {
  var r;
  e === void 0 && (e = {});
  const { x: n, y: s, platform: i, rects: o, elements: a, strategy: l } = t,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: c = "viewport",
      elementContext: h = "floating",
      altBoundary: f = !1,
      padding: d = 0,
    } = Er(e, t),
    v = Yv(d),
    x = a[f ? (h === "floating" ? "reference" : "floating") : h],
    g = fl(
      await i.getClippingRect({
        element:
          (r = await (i.isElement == null ? void 0 : i.isElement(x))) == null ||
          r
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: u,
        rootBoundary: c,
        strategy: l,
      })
    ),
    m =
      h === "floating"
        ? { x: n, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    y = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    _ = (await (i.isElement == null ? void 0 : i.isElement(y)))
      ? (await (i.getScale == null ? void 0 : i.getScale(y))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = fl(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: m,
            offsetParent: y,
            strategy: l,
          })
        : m
    );
  return {
    top: (g.top - S.top + v.top) / _.y,
    bottom: (S.bottom - g.bottom + v.bottom) / _.y,
    left: (g.left - S.left + v.left) / _.x,
    right: (S.right - g.right + v.right) / _.x,
  };
}
const Ik = (t) => ({
    name: "arrow",
    options: t,
    async fn(e) {
      const {
          x: r,
          y: n,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = e,
        { element: u, padding: c = 0 } = Er(t, e) || {};
      if (u == null) return {};
      const h = Yv(c),
        f = { x: r, y: n },
        d = Th(s),
        v = Ch(d),
        p = await o.getDimensions(u),
        x = d === "y",
        g = x ? "top" : "left",
        m = x ? "bottom" : "right",
        y = x ? "clientHeight" : "clientWidth",
        _ = i.reference[v] + i.reference[d] - f[d] - i.floating[v],
        S = f[d] - i.reference[d],
        E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
      let k = E ? E[y] : 0;
      (!k || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
        (k = a.floating[y] || i.floating[v]);
      const C = _ / 2 - S / 2,
        T = k / 2 - p[v] / 2 - 1,
        R = yn(h[g], T),
        D = yn(h[m], T),
        L = R,
        H = k - p[v] - D,
        M = k / 2 - p[v] / 2 + C,
        Y = Yc(L, M, H),
        Q =
          !l.arrow &&
          gi(s) != null &&
          M !== Y &&
          i.reference[v] / 2 - (M < L ? R : D) - p[v] / 2 < 0,
        X = Q ? (M < L ? M - L : M - H) : 0;
      return {
        [d]: f[d] + X,
        data: {
          [d]: Y,
          centerOffset: M - Y - X,
          ...(Q && { alignmentOffset: X }),
        },
        reset: Q,
      };
    },
  }),
  $k = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "flip",
        options: t,
        async fn(e) {
          var r, n;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: u,
            } = e,
            {
              mainAxis: c = !0,
              crossAxis: h = !0,
              fallbackPlacements: f,
              fallbackStrategy: d = "bestFit",
              fallbackAxisSideDirection: v = "none",
              flipAlignment: p = !0,
              ...x
            } = Er(t, e);
          if ((r = i.arrow) != null && r.alignmentOffset) return {};
          const g = Cr(s),
            m = sr(a),
            y = Cr(a) === a,
            _ = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
            S = f || (y || !p ? [hl(a)] : Tk(a)),
            E = v !== "none";
          !f && E && S.push(...Ak(a, p, v, _));
          const k = [a, ...S],
            C = await go(e, x),
            T = [];
          let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
          if ((c && T.push(C[g]), h)) {
            const M = Ck(s, o, _);
            T.push(C[M[0]], C[M[1]]);
          }
          if (
            ((R = [...R, { placement: s, overflows: T }]),
            !T.every((M) => M <= 0))
          ) {
            var D, L;
            const M = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1,
              Y = k[M];
            if (
              Y &&
              (!(h === "alignment" ? m !== sr(Y) : !1) ||
                R.every((P) => P.overflows[0] > 0 && sr(P.placement) === m))
            )
              return {
                data: { index: M, overflows: R },
                reset: { placement: Y },
              };
            let Q =
              (L = R.filter((X) => X.overflows[0] <= 0).sort(
                (X, P) => X.overflows[1] - P.overflows[1]
              )[0]) == null
                ? void 0
                : L.placement;
            if (!Q)
              switch (d) {
                case "bestFit": {
                  var H;
                  const X =
                    (H = R.filter((P) => {
                      if (E) {
                        const A = sr(P.placement);
                        return A === m || A === "y";
                      }
                      return !0;
                    })
                      .map((P) => [
                        P.placement,
                        P.overflows
                          .filter((A) => A > 0)
                          .reduce((A, j) => A + j, 0),
                      ])
                      .sort((P, A) => P[1] - A[1])[0]) == null
                      ? void 0
                      : H[0];
                  X && (Q = X);
                  break;
                }
                case "initialPlacement":
                  Q = a;
                  break;
              }
            if (s !== Q) return { reset: { placement: Q } };
          }
          return {};
        },
      }
    );
  };
function Ep(t, e) {
  return {
    top: t.top - e.height,
    right: t.right - e.width,
    bottom: t.bottom - e.height,
    left: t.left - e.width,
  };
}
function Cp(t) {
  return _k.some((e) => t[e] >= 0);
}
const Lk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "hide",
        options: t,
        async fn(e) {
          const { rects: r } = e,
            { strategy: n = "referenceHidden", ...s } = Er(t, e);
          switch (n) {
            case "referenceHidden": {
              const i = await go(e, { ...s, elementContext: "reference" }),
                o = Ep(i, r.reference);
              return {
                data: { referenceHiddenOffsets: o, referenceHidden: Cp(o) },
              };
            }
            case "escaped": {
              const i = await go(e, { ...s, altBoundary: !0 }),
                o = Ep(i, r.floating);
              return { data: { escapedOffsets: o, escaped: Cp(o) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Xv = new Set(["left", "top"]);
async function Mk(t, e) {
  const { placement: r, platform: n, elements: s } = t,
    i = await (n.isRTL == null ? void 0 : n.isRTL(s.floating)),
    o = Cr(r),
    a = gi(r),
    l = sr(r) === "y",
    u = Xv.has(o) ? -1 : 1,
    c = i && l ? -1 : 1,
    h = Er(e, t);
  let {
    mainAxis: f,
    crossAxis: d,
    alignmentAxis: v,
  } = typeof h == "number"
    ? { mainAxis: h, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: h.mainAxis || 0,
        crossAxis: h.crossAxis || 0,
        alignmentAxis: h.alignmentAxis,
      };
  return (
    a && typeof v == "number" && (d = a === "end" ? v * -1 : v),
    l ? { x: d * c, y: f * u } : { x: f * u, y: d * c }
  );
}
const Dk = function (t) {
    return (
      t === void 0 && (t = 0),
      {
        name: "offset",
        options: t,
        async fn(e) {
          var r, n;
          const { x: s, y: i, placement: o, middlewareData: a } = e,
            l = await Mk(e, t);
          return o === ((r = a.offset) == null ? void 0 : r.placement) &&
            (n = a.arrow) != null &&
            n.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  Uk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "shift",
        options: t,
        async fn(e) {
          const { x: r, y: n, placement: s } = e,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: g, y: m } = x;
                  return { x: g, y: m };
                },
              },
              ...l
            } = Er(t, e),
            u = { x: r, y: n },
            c = await go(e, l),
            h = sr(Cr(s)),
            f = Eh(h);
          let d = u[f],
            v = u[h];
          if (i) {
            const x = f === "y" ? "top" : "left",
              g = f === "y" ? "bottom" : "right",
              m = d + c[x],
              y = d - c[g];
            d = Yc(m, d, y);
          }
          if (o) {
            const x = h === "y" ? "top" : "left",
              g = h === "y" ? "bottom" : "right",
              m = v + c[x],
              y = v - c[g];
            v = Yc(m, v, y);
          }
          const p = a.fn({ ...e, [f]: d, [h]: v });
          return {
            ...p,
            data: { x: p.x - r, y: p.y - n, enabled: { [f]: i, [h]: o } },
          };
        },
      }
    );
  },
  Fk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        options: t,
        fn(e) {
          const { x: r, y: n, placement: s, rects: i, middlewareData: o } = e,
            { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = Er(t, e),
            c = { x: r, y: n },
            h = sr(s),
            f = Eh(h);
          let d = c[f],
            v = c[h];
          const p = Er(a, e),
            x =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const y = f === "y" ? "height" : "width",
              _ = i.reference[f] - i.floating[y] + x.mainAxis,
              S = i.reference[f] + i.reference[y] - x.mainAxis;
            d < _ ? (d = _) : d > S && (d = S);
          }
          if (u) {
            var g, m;
            const y = f === "y" ? "width" : "height",
              _ = Xv.has(Cr(s)),
              S =
                i.reference[h] -
                i.floating[y] +
                ((_ && ((g = o.offset) == null ? void 0 : g[h])) || 0) +
                (_ ? 0 : x.crossAxis),
              E =
                i.reference[h] +
                i.reference[y] +
                (_ ? 0 : ((m = o.offset) == null ? void 0 : m[h]) || 0) -
                (_ ? x.crossAxis : 0);
            v < S ? (v = S) : v > E && (v = E);
          }
          return { [f]: d, [h]: v };
        },
      }
    );
  },
  zk = function (t) {
    return (
      t === void 0 && (t = {}),
      {
        name: "size",
        options: t,
        async fn(e) {
          var r, n;
          const { placement: s, rects: i, platform: o, elements: a } = e,
            { apply: l = () => {}, ...u } = Er(t, e),
            c = await go(e, u),
            h = Cr(s),
            f = gi(s),
            d = sr(s) === "y",
            { width: v, height: p } = i.floating;
          let x, g;
          h === "top" || h === "bottom"
            ? ((x = h),
              (g =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((g = h), (x = f === "end" ? "top" : "bottom"));
          const m = p - c.top - c.bottom,
            y = v - c.left - c.right,
            _ = yn(p - c[x], m),
            S = yn(v - c[g], y),
            E = !e.middlewareData.shift;
          let k = _,
            C = S;
          if (
            ((r = e.middlewareData.shift) != null && r.enabled.x && (C = y),
            (n = e.middlewareData.shift) != null && n.enabled.y && (k = m),
            E && !f)
          ) {
            const R = ft(c.left, 0),
              D = ft(c.right, 0),
              L = ft(c.top, 0),
              H = ft(c.bottom, 0);
            d
              ? (C = v - 2 * (R !== 0 || D !== 0 ? R + D : ft(c.left, c.right)))
              : (k =
                  p - 2 * (L !== 0 || H !== 0 ? L + H : ft(c.top, c.bottom)));
          }
          await l({ ...e, availableWidth: C, availableHeight: k });
          const T = await o.getDimensions(a.floating);
          return v !== T.width || p !== T.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function ql() {
  return typeof window < "u";
}
function yi(t) {
  return e0(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function vt(t) {
  var e;
  return (
    (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) ||
    window
  );
}
function dr(t) {
  var e;
  return (e = (e0(t) ? t.ownerDocument : t.document) || window.document) == null
    ? void 0
    : e.documentElement;
}
function e0(t) {
  return ql() ? t instanceof Node || t instanceof vt(t).Node : !1;
}
function Jt(t) {
  return ql() ? t instanceof Element || t instanceof vt(t).Element : !1;
}
function ur(t) {
  return ql() ? t instanceof HTMLElement || t instanceof vt(t).HTMLElement : !1;
}
function Tp(t) {
  return !ql() || typeof ShadowRoot > "u"
    ? !1
    : t instanceof ShadowRoot || t instanceof vt(t).ShadowRoot;
}
const Bk = new Set(["inline", "contents"]);
function zo(t) {
  const { overflow: e, overflowX: r, overflowY: n, display: s } = Zt(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + r) && !Bk.has(s);
}
const Wk = new Set(["table", "td", "th"]);
function Vk(t) {
  return Wk.has(yi(t));
}
const Hk = [":popover-open", ":modal"];
function Kl(t) {
  return Hk.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
const qk = ["transform", "translate", "scale", "rotate", "perspective"],
  Kk = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  Gk = ["paint", "layout", "strict", "content"];
function Rh(t) {
  const e = Ph(),
    r = Jt(t) ? Zt(t) : t;
  return (
    qk.some((n) => (r[n] ? r[n] !== "none" : !1)) ||
    (r.containerType ? r.containerType !== "normal" : !1) ||
    (!e && (r.backdropFilter ? r.backdropFilter !== "none" : !1)) ||
    (!e && (r.filter ? r.filter !== "none" : !1)) ||
    Kk.some((n) => (r.willChange || "").includes(n)) ||
    Gk.some((n) => (r.contain || "").includes(n))
  );
}
function Qk(t) {
  let e = vn(t);
  for (; ur(e) && !oi(e); ) {
    if (Rh(e)) return e;
    if (Kl(e)) return null;
    e = vn(e);
  }
  return null;
}
function Ph() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const Jk = new Set(["html", "body", "#document"]);
function oi(t) {
  return Jk.has(yi(t));
}
function Zt(t) {
  return vt(t).getComputedStyle(t);
}
function Gl(t) {
  return Jt(t)
    ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
    : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function vn(t) {
  if (yi(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || (Tp(t) && t.host) || dr(t);
  return Tp(e) ? e.host : e;
}
function t0(t) {
  const e = vn(t);
  return oi(e)
    ? t.ownerDocument
      ? t.ownerDocument.body
      : t.body
    : ur(e) && zo(e)
    ? e
    : t0(e);
}
function yo(t, e, r) {
  var n;
  e === void 0 && (e = []), r === void 0 && (r = !0);
  const s = t0(t),
    i = s === ((n = t.ownerDocument) == null ? void 0 : n.body),
    o = vt(s);
  if (i) {
    const a = ed(o);
    return e.concat(
      o,
      o.visualViewport || [],
      zo(s) ? s : [],
      a && r ? yo(a) : []
    );
  }
  return e.concat(s, yo(s, [], r));
}
function ed(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function r0(t) {
  const e = Zt(t);
  let r = parseFloat(e.width) || 0,
    n = parseFloat(e.height) || 0;
  const s = ur(t),
    i = s ? t.offsetWidth : r,
    o = s ? t.offsetHeight : n,
    a = dl(r) !== i || dl(n) !== o;
  return a && ((r = i), (n = o)), { width: r, height: n, $: a };
}
function Oh(t) {
  return Jt(t) ? t : t.contextElement;
}
function Bs(t) {
  const e = Oh(t);
  if (!ur(e)) return ar(1);
  const r = e.getBoundingClientRect(),
    { width: n, height: s, $: i } = r0(e);
  let o = (i ? dl(r.width) : r.width) / n,
    a = (i ? dl(r.height) : r.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const Zk = ar(0);
function n0(t) {
  const e = vt(t);
  return !Ph() || !e.visualViewport
    ? Zk
    : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function Yk(t, e, r) {
  return e === void 0 && (e = !1), !r || (e && r !== vt(t)) ? !1 : e;
}
function es(t, e, r, n) {
  e === void 0 && (e = !1), r === void 0 && (r = !1);
  const s = t.getBoundingClientRect(),
    i = Oh(t);
  let o = ar(1);
  e && (n ? Jt(n) && (o = Bs(n)) : (o = Bs(t)));
  const a = Yk(i, r, n) ? n0(i) : ar(0);
  let l = (s.left + a.x) / o.x,
    u = (s.top + a.y) / o.y,
    c = s.width / o.x,
    h = s.height / o.y;
  if (i) {
    const f = vt(i),
      d = n && Jt(n) ? vt(n) : n;
    let v = f,
      p = ed(v);
    for (; p && n && d !== v; ) {
      const x = Bs(p),
        g = p.getBoundingClientRect(),
        m = Zt(p),
        y = g.left + (p.clientLeft + parseFloat(m.paddingLeft)) * x.x,
        _ = g.top + (p.clientTop + parseFloat(m.paddingTop)) * x.y;
      (l *= x.x),
        (u *= x.y),
        (c *= x.x),
        (h *= x.y),
        (l += y),
        (u += _),
        (v = vt(p)),
        (p = ed(v));
    }
  }
  return fl({ width: c, height: h, x: l, y: u });
}
function Ah(t, e) {
  const r = Gl(t).scrollLeft;
  return e ? e.left + r : es(dr(t)).left + r;
}
function s0(t, e, r) {
  r === void 0 && (r = !1);
  const n = t.getBoundingClientRect(),
    s = n.left + e.scrollLeft - (r ? 0 : Ah(t, n)),
    i = n.top + e.scrollTop;
  return { x: s, y: i };
}
function Xk(t) {
  let { elements: e, rect: r, offsetParent: n, strategy: s } = t;
  const i = s === "fixed",
    o = dr(n),
    a = e ? Kl(e.floating) : !1;
  if (n === o || (a && i)) return r;
  let l = { scrollLeft: 0, scrollTop: 0 },
    u = ar(1);
  const c = ar(0),
    h = ur(n);
  if (
    (h || (!h && !i)) &&
    ((yi(n) !== "body" || zo(o)) && (l = Gl(n)), ur(n))
  ) {
    const d = es(n);
    (u = Bs(n)), (c.x = d.x + n.clientLeft), (c.y = d.y + n.clientTop);
  }
  const f = o && !h && !i ? s0(o, l, !0) : ar(0);
  return {
    width: r.width * u.x,
    height: r.height * u.y,
    x: r.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: r.y * u.y - l.scrollTop * u.y + c.y + f.y,
  };
}
function eS(t) {
  return Array.from(t.getClientRects());
}
function tS(t) {
  const e = dr(t),
    r = Gl(t),
    n = t.ownerDocument.body,
    s = ft(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth),
    i = ft(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -r.scrollLeft + Ah(t);
  const a = -r.scrollTop;
  return (
    Zt(n).direction === "rtl" && (o += ft(e.clientWidth, n.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function rS(t, e) {
  const r = vt(t),
    n = dr(t),
    s = r.visualViewport;
  let i = n.clientWidth,
    o = n.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const u = Ph();
    (!u || (u && e === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
const nS = new Set(["absolute", "fixed"]);
function sS(t, e) {
  const r = es(t, !0, e === "fixed"),
    n = r.top + t.clientTop,
    s = r.left + t.clientLeft,
    i = ur(t) ? Bs(t) : ar(1),
    o = t.clientWidth * i.x,
    a = t.clientHeight * i.y,
    l = s * i.x,
    u = n * i.y;
  return { width: o, height: a, x: l, y: u };
}
function Rp(t, e, r) {
  let n;
  if (e === "viewport") n = rS(t, r);
  else if (e === "document") n = tS(dr(t));
  else if (Jt(e)) n = sS(e, r);
  else {
    const s = n0(t);
    n = { x: e.x - s.x, y: e.y - s.y, width: e.width, height: e.height };
  }
  return fl(n);
}
function i0(t, e) {
  const r = vn(t);
  return r === e || !Jt(r) || oi(r)
    ? !1
    : Zt(r).position === "fixed" || i0(r, e);
}
function iS(t, e) {
  const r = e.get(t);
  if (r) return r;
  let n = yo(t, [], !1).filter((a) => Jt(a) && yi(a) !== "body"),
    s = null;
  const i = Zt(t).position === "fixed";
  let o = i ? vn(t) : t;
  for (; Jt(o) && !oi(o); ) {
    const a = Zt(o),
      l = Rh(o);
    !l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l && a.position === "static" && !!s && nS.has(s.position)) ||
            (zo(o) && !l && i0(t, o))
      )
        ? (n = n.filter((c) => c !== o))
        : (s = a),
      (o = vn(o));
  }
  return e.set(t, n), n;
}
function oS(t) {
  let { element: e, boundary: r, rootBoundary: n, strategy: s } = t;
  const o = [
      ...(r === "clippingAncestors"
        ? Kl(e)
          ? []
          : iS(e, this._c)
        : [].concat(r)),
      n,
    ],
    a = o[0],
    l = o.reduce((u, c) => {
      const h = Rp(e, c, s);
      return (
        (u.top = ft(h.top, u.top)),
        (u.right = yn(h.right, u.right)),
        (u.bottom = yn(h.bottom, u.bottom)),
        (u.left = ft(h.left, u.left)),
        u
      );
    }, Rp(e, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function aS(t) {
  const { width: e, height: r } = r0(t);
  return { width: e, height: r };
}
function lS(t, e, r) {
  const n = ur(e),
    s = dr(e),
    i = r === "fixed",
    o = es(t, !0, i, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = ar(0);
  function u() {
    l.x = Ah(s);
  }
  if (n || (!n && !i))
    if (((yi(e) !== "body" || zo(s)) && (a = Gl(e)), n)) {
      const d = es(e, !0, i, e);
      (l.x = d.x + e.clientLeft), (l.y = d.y + e.clientTop);
    } else s && u();
  i && !n && s && u();
  const c = s && !n && !i ? s0(s, a) : ar(0),
    h = o.left + a.scrollLeft - l.x - c.x,
    f = o.top + a.scrollTop - l.y - c.y;
  return { x: h, y: f, width: o.width, height: o.height };
}
function Uu(t) {
  return Zt(t).position === "static";
}
function Pp(t, e) {
  if (!ur(t) || Zt(t).position === "fixed") return null;
  if (e) return e(t);
  let r = t.offsetParent;
  return dr(t) === r && (r = r.ownerDocument.body), r;
}
function o0(t, e) {
  const r = vt(t);
  if (Kl(t)) return r;
  if (!ur(t)) {
    let s = vn(t);
    for (; s && !oi(s); ) {
      if (Jt(s) && !Uu(s)) return s;
      s = vn(s);
    }
    return r;
  }
  let n = Pp(t, e);
  for (; n && Vk(n) && Uu(n); ) n = Pp(n, e);
  return n && oi(n) && Uu(n) && !Rh(n) ? r : n || Qk(t) || r;
}
const uS = async function (t) {
  const e = this.getOffsetParent || o0,
    r = this.getDimensions,
    n = await r(t.floating);
  return {
    reference: lS(t.reference, await e(t.floating), t.strategy),
    floating: { x: 0, y: 0, width: n.width, height: n.height },
  };
};
function cS(t) {
  return Zt(t).direction === "rtl";
}
const dS = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Xk,
  getDocumentElement: dr,
  getClippingRect: oS,
  getOffsetParent: o0,
  getElementRects: uS,
  getClientRects: eS,
  getDimensions: aS,
  getScale: Bs,
  isElement: Jt,
  isRTL: cS,
};
function a0(t, e) {
  return (
    t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
  );
}
function hS(t, e) {
  let r = null,
    n;
  const s = dr(t);
  function i() {
    var a;
    clearTimeout(n), (a = r) == null || a.disconnect(), (r = null);
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = t.getBoundingClientRect(),
      { left: c, top: h, width: f, height: d } = u;
    if ((a || e(), !f || !d)) return;
    const v = ma(h),
      p = ma(s.clientWidth - (c + f)),
      x = ma(s.clientHeight - (h + d)),
      g = ma(c),
      y = {
        rootMargin: -v + "px " + -p + "px " + -x + "px " + -g + "px",
        threshold: ft(0, yn(1, l)) || 1,
      };
    let _ = !0;
    function S(E) {
      const k = E[0].intersectionRatio;
      if (k !== l) {
        if (!_) return o();
        k
          ? o(!1, k)
          : (n = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !a0(u, t.getBoundingClientRect()) && o(), (_ = !1);
    }
    try {
      r = new IntersectionObserver(S, { ...y, root: s.ownerDocument });
    } catch {
      r = new IntersectionObserver(S, y);
    }
    r.observe(t);
  }
  return o(!0), i;
}
function fS(t, e, r, n) {
  n === void 0 && (n = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = n,
    u = Oh(t),
    c = s || i ? [...(u ? yo(u) : []), ...yo(e)] : [];
  c.forEach((g) => {
    s && g.addEventListener("scroll", r, { passive: !0 }),
      i && g.addEventListener("resize", r);
  });
  const h = u && a ? hS(u, r) : null;
  let f = -1,
    d = null;
  o &&
    ((d = new ResizeObserver((g) => {
      let [m] = g;
      m &&
        m.target === u &&
        d &&
        (d.unobserve(e),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var y;
          (y = d) == null || y.observe(e);
        }))),
        r();
    })),
    u && !l && d.observe(u),
    d.observe(e));
  let v,
    p = l ? es(t) : null;
  l && x();
  function x() {
    const g = es(t);
    p && !a0(p, g) && r(), (p = g), (v = requestAnimationFrame(x));
  }
  return (
    r(),
    () => {
      var g;
      c.forEach((m) => {
        s && m.removeEventListener("scroll", r),
          i && m.removeEventListener("resize", r);
      }),
        h == null || h(),
        (g = d) == null || g.disconnect(),
        (d = null),
        l && cancelAnimationFrame(v);
    }
  );
}
const pS = Dk,
  mS = Uk,
  gS = $k,
  yS = zk,
  vS = Lk,
  Op = Ik,
  wS = Fk,
  xS = (t, e, r) => {
    const n = new Map(),
      s = { platform: dS, ...r },
      i = { ...s.platform, _c: n };
    return jk(t, e, { ...s, platform: i });
  };
var bS = typeof document < "u",
  _S = function () {},
  Ua = bS ? b.useLayoutEffect : _S;
function pl(t, e) {
  if (t === e) return !0;
  if (typeof t != typeof e) return !1;
  if (typeof t == "function" && t.toString() === e.toString()) return !0;
  let r, n, s;
  if (t && e && typeof t == "object") {
    if (Array.isArray(t)) {
      if (((r = t.length), r !== e.length)) return !1;
      for (n = r; n-- !== 0; ) if (!pl(t[n], e[n])) return !1;
      return !0;
    }
    if (((s = Object.keys(t)), (r = s.length), r !== Object.keys(e).length))
      return !1;
    for (n = r; n-- !== 0; ) if (!{}.hasOwnProperty.call(e, s[n])) return !1;
    for (n = r; n-- !== 0; ) {
      const i = s[n];
      if (!(i === "_owner" && t.$$typeof) && !pl(t[i], e[i])) return !1;
    }
    return !0;
  }
  return t !== t && e !== e;
}
function l0(t) {
  return typeof window > "u"
    ? 1
    : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ap(t, e) {
  const r = l0(t);
  return Math.round(e * r) / r;
}
function Fu(t) {
  const e = b.useRef(t);
  return (
    Ua(() => {
      e.current = t;
    }),
    e
  );
}
function kS(t) {
  t === void 0 && (t = {});
  const {
      placement: e = "bottom",
      strategy: r = "absolute",
      middleware: n = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: u,
    } = t,
    [c, h] = b.useState({
      x: 0,
      y: 0,
      strategy: r,
      placement: e,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, d] = b.useState(n);
  pl(f, n) || d(n);
  const [v, p] = b.useState(null),
    [x, g] = b.useState(null),
    m = b.useCallback((P) => {
      P !== E.current && ((E.current = P), p(P));
    }, []),
    y = b.useCallback((P) => {
      P !== k.current && ((k.current = P), g(P));
    }, []),
    _ = i || v,
    S = o || x,
    E = b.useRef(null),
    k = b.useRef(null),
    C = b.useRef(c),
    T = l != null,
    R = Fu(l),
    D = Fu(s),
    L = Fu(u),
    H = b.useCallback(() => {
      if (!E.current || !k.current) return;
      const P = { placement: e, strategy: r, middleware: f };
      D.current && (P.platform = D.current),
        xS(E.current, k.current, P).then((A) => {
          const j = { ...A, isPositioned: L.current !== !1 };
          M.current &&
            !pl(C.current, j) &&
            ((C.current = j),
            Uo.flushSync(() => {
              h(j);
            }));
        });
    }, [f, e, r, D, L]);
  Ua(() => {
    u === !1 &&
      C.current.isPositioned &&
      ((C.current.isPositioned = !1), h((P) => ({ ...P, isPositioned: !1 })));
  }, [u]);
  const M = b.useRef(!1);
  Ua(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    Ua(() => {
      if ((_ && (E.current = _), S && (k.current = S), _ && S)) {
        if (R.current) return R.current(_, S, H);
        H();
      }
    }, [_, S, H, R, T]);
  const Y = b.useMemo(
      () => ({ reference: E, floating: k, setReference: m, setFloating: y }),
      [m, y]
    ),
    Q = b.useMemo(() => ({ reference: _, floating: S }), [_, S]),
    X = b.useMemo(() => {
      const P = { position: r, left: 0, top: 0 };
      if (!Q.floating) return P;
      const A = Ap(Q.floating, c.x),
        j = Ap(Q.floating, c.y);
      return a
        ? {
            ...P,
            transform: "translate(" + A + "px, " + j + "px)",
            ...(l0(Q.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: r, left: A, top: j };
    }, [r, a, Q.floating, c.x, c.y]);
  return b.useMemo(
    () => ({ ...c, update: H, refs: Y, elements: Q, floatingStyles: X }),
    [c, H, Y, Q, X]
  );
}
const SS = (t) => {
    function e(r) {
      return {}.hasOwnProperty.call(r, "current");
    }
    return {
      name: "arrow",
      options: t,
      fn(r) {
        const { element: n, padding: s } = typeof t == "function" ? t(r) : t;
        return n && e(n)
          ? n.current != null
            ? Op({ element: n.current, padding: s }).fn(r)
            : {}
          : n
          ? Op({ element: n, padding: s }).fn(r)
          : {};
      },
    };
  },
  ES = (t, e) => ({ ...pS(t), options: [t, e] }),
  CS = (t, e) => ({ ...mS(t), options: [t, e] }),
  TS = (t, e) => ({ ...wS(t), options: [t, e] }),
  RS = (t, e) => ({ ...gS(t), options: [t, e] }),
  PS = (t, e) => ({ ...yS(t), options: [t, e] }),
  OS = (t, e) => ({ ...vS(t), options: [t, e] }),
  AS = (t, e) => ({ ...SS(t), options: [t, e] });
var NS = "Arrow",
  u0 = b.forwardRef((t, e) => {
    const { children: r, width: n = 10, height: s = 5, ...i } = t;
    return w.jsx(ct.svg, {
      ...i,
      ref: e,
      width: n,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: t.asChild ? r : w.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
u0.displayName = NS;
var jS = u0;
function IS(t) {
  const [e, r] = b.useState(void 0);
  return (
    gn(() => {
      if (t) {
        r({ width: t.offsetWidth, height: t.offsetHeight });
        const n = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              u = Array.isArray(l) ? l[0] : l;
            (o = u.inlineSize), (a = u.blockSize);
          } else (o = t.offsetWidth), (a = t.offsetHeight);
          r({ width: o, height: a });
        });
        return n.observe(t, { box: "border-box" }), () => n.unobserve(t);
      } else r(void 0);
    }, [t]),
    e
  );
}
var c0 = "Popper",
  [d0, h0] = Wl(c0),
  [_O, f0] = d0(c0),
  p0 = "PopperAnchor",
  m0 = b.forwardRef((t, e) => {
    const { __scopePopper: r, virtualRef: n, ...s } = t,
      i = f0(p0, r),
      o = b.useRef(null),
      a = Qt(e, o);
    return (
      b.useEffect(() => {
        i.onAnchorChange((n == null ? void 0 : n.current) || o.current);
      }),
      n ? null : w.jsx(ct.div, { ...s, ref: a })
    );
  });
m0.displayName = p0;
var Nh = "PopperContent",
  [$S, LS] = d0(Nh),
  g0 = b.forwardRef((t, e) => {
    var ue, En, Or, Cn, Ar, is;
    const {
        __scopePopper: r,
        side: n = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u = [],
        collisionPadding: c = 0,
        sticky: h = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: d = "optimized",
        onPlaced: v,
        ...p
      } = t,
      x = f0(Nh, r),
      [g, m] = b.useState(null),
      y = Qt(e, (Nr) => m(Nr)),
      [_, S] = b.useState(null),
      E = IS(_),
      k = (E == null ? void 0 : E.width) ?? 0,
      C = (E == null ? void 0 : E.height) ?? 0,
      T = n + (i !== "center" ? "-" + i : ""),
      R =
        typeof c == "number"
          ? c
          : { top: 0, right: 0, bottom: 0, left: 0, ...c },
      D = Array.isArray(u) ? u : [u],
      L = D.length > 0,
      H = { padding: R, boundary: D.filter(DS), altBoundary: L },
      {
        refs: M,
        floatingStyles: Y,
        placement: Q,
        isPositioned: X,
        middlewareData: P,
      } = kS({
        strategy: "fixed",
        placement: T,
        whileElementsMounted: (...Nr) =>
          fS(...Nr, { animationFrame: d === "always" }),
        elements: { reference: x.anchor },
        middleware: [
          ES({ mainAxis: s + C, alignmentAxis: o }),
          l &&
            CS({
              mainAxis: !0,
              crossAxis: !1,
              limiter: h === "partial" ? TS() : void 0,
              ...H,
            }),
          l && RS({ ...H }),
          PS({
            ...H,
            apply: ({
              elements: Nr,
              rects: Ho,
              availableWidth: su,
              availableHeight: qo,
            }) => {
              const { width: iu, height: xi } = Ho.reference,
                os = Nr.floating.style;
              os.setProperty("--radix-popper-available-width", `${su}px`),
                os.setProperty("--radix-popper-available-height", `${qo}px`),
                os.setProperty("--radix-popper-anchor-width", `${iu}px`),
                os.setProperty("--radix-popper-anchor-height", `${xi}px`);
            },
          }),
          _ && AS({ element: _, padding: a }),
          US({ arrowWidth: k, arrowHeight: C }),
          f && OS({ strategy: "referenceHidden", ...H }),
        ],
      }),
      [A, j] = w0(Q),
      q = mn(v);
    gn(() => {
      X && (q == null || q());
    }, [X, q]);
    const U = (ue = P.arrow) == null ? void 0 : ue.x,
      K = (En = P.arrow) == null ? void 0 : En.y,
      Z = ((Or = P.arrow) == null ? void 0 : Or.centerOffset) !== 0,
      [he, Ee] = b.useState();
    return (
      gn(() => {
        g && Ee(window.getComputedStyle(g).zIndex);
      }, [g]),
      w.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...Y,
          transform: X ? Y.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: he,
          "--radix-popper-transform-origin": [
            (Cn = P.transformOrigin) == null ? void 0 : Cn.x,
            (Ar = P.transformOrigin) == null ? void 0 : Ar.y,
          ].join(" "),
          ...(((is = P.hide) == null ? void 0 : is.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: t.dir,
        children: w.jsx($S, {
          scope: r,
          placedSide: A,
          onArrowChange: S,
          arrowX: U,
          arrowY: K,
          shouldHideArrow: Z,
          children: w.jsx(ct.div, {
            "data-side": A,
            "data-align": j,
            ...p,
            ref: y,
            style: { ...p.style, animation: X ? void 0 : "none" },
          }),
        }),
      })
    );
  });
g0.displayName = Nh;
var y0 = "PopperArrow",
  MS = { top: "bottom", right: "left", bottom: "top", left: "right" },
  v0 = b.forwardRef(function (e, r) {
    const { __scopePopper: n, ...s } = e,
      i = LS(y0, n),
      o = MS[i.placedSide];
    return w.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: w.jsx(jS, {
        ...s,
        ref: r,
        style: { ...s.style, display: "block" },
      }),
    });
  });
v0.displayName = y0;
function DS(t) {
  return t !== null;
}
var US = (t) => ({
  name: "transformOrigin",
  options: t,
  fn(e) {
    var x, g, m;
    const { placement: r, rects: n, middlewareData: s } = e,
      o = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0,
      a = o ? 0 : t.arrowWidth,
      l = o ? 0 : t.arrowHeight,
      [u, c] = w0(r),
      h = { start: "0%", center: "50%", end: "100%" }[c],
      f = (((g = s.arrow) == null ? void 0 : g.x) ?? 0) + a / 2,
      d = (((m = s.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
    let v = "",
      p = "";
    return (
      u === "bottom"
        ? ((v = o ? h : `${f}px`), (p = `${-l}px`))
        : u === "top"
        ? ((v = o ? h : `${f}px`), (p = `${n.floating.height + l}px`))
        : u === "right"
        ? ((v = `${-l}px`), (p = o ? h : `${d}px`))
        : u === "left" &&
          ((v = `${n.floating.width + l}px`), (p = o ? h : `${d}px`)),
      { data: { x: v, y: p } }
    );
  },
});
function w0(t) {
  const [e, r = "center"] = t.split("-");
  return [e, r];
}
var FS = m0,
  zS = g0,
  BS = v0,
  [Ql, kO] = Wl("Tooltip", [h0]),
  jh = h0(),
  x0 = "TooltipProvider",
  WS = 700,
  Np = "tooltip.open",
  [VS, b0] = Ql(x0),
  _0 = (t) => {
    const {
        __scopeTooltip: e,
        delayDuration: r = WS,
        skipDelayDuration: n = 300,
        disableHoverableContent: s = !1,
        children: i,
      } = t,
      o = b.useRef(!0),
      a = b.useRef(!1),
      l = b.useRef(0);
    return (
      b.useEffect(() => {
        const u = l.current;
        return () => window.clearTimeout(u);
      }, []),
      w.jsx(VS, {
        scope: e,
        isOpenDelayedRef: o,
        delayDuration: r,
        onOpen: b.useCallback(() => {
          window.clearTimeout(l.current), (o.current = !1);
        }, []),
        onClose: b.useCallback(() => {
          window.clearTimeout(l.current),
            (l.current = window.setTimeout(() => (o.current = !0), n));
        }, [n]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback((u) => {
          a.current = u;
        }, []),
        disableHoverableContent: s,
        children: i,
      })
    );
  };
_0.displayName = x0;
var k0 = "Tooltip",
  [SO, Jl] = Ql(k0),
  td = "TooltipTrigger",
  HS = b.forwardRef((t, e) => {
    const { __scopeTooltip: r, ...n } = t,
      s = Jl(td, r),
      i = b0(td, r),
      o = jh(r),
      a = b.useRef(null),
      l = Qt(e, a, s.onTriggerChange),
      u = b.useRef(!1),
      c = b.useRef(!1),
      h = b.useCallback(() => (u.current = !1), []);
    return (
      b.useEffect(
        () => () => document.removeEventListener("pointerup", h),
        [h]
      ),
      w.jsx(FS, {
        asChild: !0,
        ...o,
        children: w.jsx(ct.button, {
          "aria-describedby": s.open ? s.contentId : void 0,
          "data-state": s.stateAttribute,
          ...n,
          ref: l,
          onPointerMove: Le(t.onPointerMove, (f) => {
            f.pointerType !== "touch" &&
              !c.current &&
              !i.isPointerInTransitRef.current &&
              (s.onTriggerEnter(), (c.current = !0));
          }),
          onPointerLeave: Le(t.onPointerLeave, () => {
            s.onTriggerLeave(), (c.current = !1);
          }),
          onPointerDown: Le(t.onPointerDown, () => {
            s.open && s.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", h, { once: !0 });
          }),
          onFocus: Le(t.onFocus, () => {
            u.current || s.onOpen();
          }),
          onBlur: Le(t.onBlur, s.onClose),
          onClick: Le(t.onClick, s.onClose),
        }),
      })
    );
  });
HS.displayName = td;
var qS = "TooltipPortal",
  [EO, KS] = Ql(qS, { forceMount: void 0 }),
  ai = "TooltipContent",
  S0 = b.forwardRef((t, e) => {
    const r = KS(ai, t.__scopeTooltip),
      { forceMount: n = r.forceMount, side: s = "top", ...i } = t,
      o = Jl(ai, t.__scopeTooltip);
    return w.jsx(wh, {
      present: n || o.open,
      children: o.disableHoverableContent
        ? w.jsx(E0, { side: s, ...i, ref: e })
        : w.jsx(GS, { side: s, ...i, ref: e }),
    });
  }),
  GS = b.forwardRef((t, e) => {
    const r = Jl(ai, t.__scopeTooltip),
      n = b0(ai, t.__scopeTooltip),
      s = b.useRef(null),
      i = Qt(e, s),
      [o, a] = b.useState(null),
      { trigger: l, onClose: u } = r,
      c = s.current,
      { onPointerInTransitChange: h } = n,
      f = b.useCallback(() => {
        a(null), h(!1);
      }, [h]),
      d = b.useCallback(
        (v, p) => {
          const x = v.currentTarget,
            g = { x: v.clientX, y: v.clientY },
            m = XS(g, x.getBoundingClientRect()),
            y = eE(g, m),
            _ = tE(p.getBoundingClientRect()),
            S = nE([...y, ..._]);
          a(S), h(!0);
        },
        [h]
      );
    return (
      b.useEffect(() => () => f(), [f]),
      b.useEffect(() => {
        if (l && c) {
          const v = (x) => d(x, c),
            p = (x) => d(x, l);
          return (
            l.addEventListener("pointerleave", v),
            c.addEventListener("pointerleave", p),
            () => {
              l.removeEventListener("pointerleave", v),
                c.removeEventListener("pointerleave", p);
            }
          );
        }
      }, [l, c, d, f]),
      b.useEffect(() => {
        if (o) {
          const v = (p) => {
            const x = p.target,
              g = { x: p.clientX, y: p.clientY },
              m =
                (l == null ? void 0 : l.contains(x)) ||
                (c == null ? void 0 : c.contains(x)),
              y = !rE(g, o);
            m ? f() : y && (f(), u());
          };
          return (
            document.addEventListener("pointermove", v),
            () => document.removeEventListener("pointermove", v)
          );
        }
      }, [l, c, o, u, f]),
      w.jsx(E0, { ...t, ref: i })
    );
  }),
  [QS, JS] = Ql(k0, { isInside: !1 }),
  ZS = i_("TooltipContent"),
  E0 = b.forwardRef((t, e) => {
    const {
        __scopeTooltip: r,
        children: n,
        "aria-label": s,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        ...a
      } = t,
      l = Jl(ai, r),
      u = jh(r),
      { onClose: c } = l;
    return (
      b.useEffect(
        () => (
          document.addEventListener(Np, c),
          () => document.removeEventListener(Np, c)
        ),
        [c]
      ),
      b.useEffect(() => {
        if (l.trigger) {
          const h = (f) => {
            const d = f.target;
            d != null && d.contains(l.trigger) && c();
          };
          return (
            window.addEventListener("scroll", h, { capture: !0 }),
            () => window.removeEventListener("scroll", h, { capture: !0 })
          );
        }
      }, [l.trigger, c]),
      w.jsx(vh, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: o,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: c,
        children: w.jsxs(zS, {
          "data-state": l.stateAttribute,
          ...u,
          ...a,
          ref: e,
          style: {
            ...a.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            w.jsx(ZS, { children: n }),
            w.jsx(QS, {
              scope: r,
              isInside: !0,
              children: w.jsx(O_, {
                id: l.contentId,
                role: "tooltip",
                children: s || n,
              }),
            }),
          ],
        }),
      })
    );
  });
S0.displayName = ai;
var C0 = "TooltipArrow",
  YS = b.forwardRef((t, e) => {
    const { __scopeTooltip: r, ...n } = t,
      s = jh(r);
    return JS(C0, r).isInside ? null : w.jsx(BS, { ...s, ...n, ref: e });
  });
YS.displayName = C0;
function XS(t, e) {
  const r = Math.abs(e.top - t.y),
    n = Math.abs(e.bottom - t.y),
    s = Math.abs(e.right - t.x),
    i = Math.abs(e.left - t.x);
  switch (Math.min(r, n, s, i)) {
    case i:
      return "left";
    case s:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function eE(t, e, r = 5) {
  const n = [];
  switch (e) {
    case "top":
      n.push({ x: t.x - r, y: t.y + r }, { x: t.x + r, y: t.y + r });
      break;
    case "bottom":
      n.push({ x: t.x - r, y: t.y - r }, { x: t.x + r, y: t.y - r });
      break;
    case "left":
      n.push({ x: t.x + r, y: t.y - r }, { x: t.x + r, y: t.y + r });
      break;
    case "right":
      n.push({ x: t.x - r, y: t.y - r }, { x: t.x - r, y: t.y + r });
      break;
  }
  return n;
}
function tE(t) {
  const { top: e, right: r, bottom: n, left: s } = t;
  return [
    { x: s, y: e },
    { x: r, y: e },
    { x: r, y: n },
    { x: s, y: n },
  ];
}
function rE(t, e) {
  const { x: r, y: n } = t;
  let s = !1;
  for (let i = 0, o = e.length - 1; i < e.length; o = i++) {
    const a = e[i],
      l = e[o],
      u = a.x,
      c = a.y,
      h = l.x,
      f = l.y;
    c > n != f > n && r < ((h - u) * (n - c)) / (f - c) + u && (s = !s);
  }
  return s;
}
function nE(t) {
  const e = t.slice();
  return (
    e.sort((r, n) =>
      r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0
    ),
    sE(e)
  );
}
function sE(t) {
  if (t.length <= 1) return t.slice();
  const e = [];
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (; e.length >= 2; ) {
      const i = e[e.length - 1],
        o = e[e.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) e.pop();
      else break;
    }
    e.push(s);
  }
  e.pop();
  const r = [];
  for (let n = t.length - 1; n >= 0; n--) {
    const s = t[n];
    for (; r.length >= 2; ) {
      const i = r[r.length - 1],
        o = r[r.length - 2];
      if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) r.pop();
      else break;
    }
    r.push(s);
  }
  return (
    r.pop(),
    e.length === 1 && r.length === 1 && e[0].x === r[0].x && e[0].y === r[0].y
      ? e
      : e.concat(r)
  );
}
var iE = _0,
  T0 = S0;
const oE = iE,
  aE = b.forwardRef(({ className: t, sideOffset: e = 4, ...r }, n) =>
    w.jsx(T0, {
      ref: n,
      sideOffset: e,
      className: cr(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t
      ),
      ...r,
    })
  );
aE.displayName = T0.displayName;
var Zl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(t) {
      return (
        this.listeners.add(t),
        this.onSubscribe(),
        () => {
          this.listeners.delete(t), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  Yl = typeof window > "u" || "Deno" in globalThis;
function Ut() {}
function lE(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function uE(t) {
  return typeof t == "number" && t >= 0 && t !== 1 / 0;
}
function cE(t, e) {
  return Math.max(t + (e || 0) - Date.now(), 0);
}
function rd(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function dE(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function jp(t, e) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a,
  } = t;
  if (o) {
    if (n) {
      if (e.queryHash !== Ih(o, e.options)) return !1;
    } else if (!wo(e.queryKey, o)) return !1;
  }
  if (r !== "all") {
    const l = e.isActive();
    if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
  }
  return !(
    (typeof a == "boolean" && e.isStale() !== a) ||
    (s && s !== e.state.fetchStatus) ||
    (i && !i(e))
  );
}
function Ip(t, e) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = t;
  if (i) {
    if (!e.options.mutationKey) return !1;
    if (r) {
      if (vo(e.options.mutationKey) !== vo(i)) return !1;
    } else if (!wo(e.options.mutationKey, i)) return !1;
  }
  return !((n && e.state.status !== n) || (s && !s(e)));
}
function Ih(t, e) {
  return ((e == null ? void 0 : e.queryKeyHashFn) || vo)(t);
}
function vo(t) {
  return JSON.stringify(t, (e, r) =>
    nd(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r
  );
}
function wo(t, e) {
  return t === e
    ? !0
    : typeof t != typeof e
    ? !1
    : t && e && typeof t == "object" && typeof e == "object"
    ? Object.keys(e).every((r) => wo(t[r], e[r]))
    : !1;
}
function R0(t, e) {
  if (t === e) return t;
  const r = $p(t) && $p(e);
  if (r || (nd(t) && nd(e))) {
    const n = r ? t : Object.keys(t),
      s = n.length,
      i = r ? e : Object.keys(e),
      o = i.length,
      a = r ? [] : {},
      l = new Set(n);
    let u = 0;
    for (let c = 0; c < o; c++) {
      const h = r ? c : i[c];
      ((!r && l.has(h)) || r) && t[h] === void 0 && e[h] === void 0
        ? ((a[h] = void 0), u++)
        : ((a[h] = R0(t[h], e[h])), a[h] === t[h] && t[h] !== void 0 && u++);
    }
    return s === o && u === s ? t : a;
  }
  return e;
}
function $p(t) {
  return Array.isArray(t) && t.length === Object.keys(t).length;
}
function nd(t) {
  if (!Lp(t)) return !1;
  const e = t.constructor;
  if (e === void 0) return !0;
  const r = e.prototype;
  return !(
    !Lp(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(t) !== Object.prototype
  );
}
function Lp(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function hE(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function fE(t, e, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(t, e)
    : r.structuralSharing !== !1
    ? R0(t, e)
    : e;
}
function pE(t, e, r = 0) {
  const n = [...t, e];
  return r && n.length > r ? n.slice(1) : n;
}
function mE(t, e, r = 0) {
  const n = [e, ...t];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var $h = Symbol();
function P0(t, e) {
  return !t.queryFn && e != null && e.initialPromise
    ? () => e.initialPromise
    : !t.queryFn || t.queryFn === $h
    ? () => Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`))
    : t.queryFn;
}
var Fn,
  Kr,
  Hs,
  Um,
  gE =
    ((Um = class extends Zl {
      constructor() {
        super();
        ce(this, Fn);
        ce(this, Kr);
        ce(this, Hs);
        ne(this, Hs, (e) => {
          if (!Yl && window.addEventListener) {
            const r = () => e();
            return (
              window.addEventListener("visibilitychange", r, !1),
              () => {
                window.removeEventListener("visibilitychange", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        O(this, Kr) || this.setEventListener(O(this, Hs));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = O(this, Kr)) == null || e.call(this), ne(this, Kr, void 0));
      }
      setEventListener(e) {
        var r;
        ne(this, Hs, e),
          (r = O(this, Kr)) == null || r.call(this),
          ne(
            this,
            Kr,
            e((n) => {
              typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
            })
          );
      }
      setFocused(e) {
        O(this, Fn) !== e && (ne(this, Fn, e), this.onFocus());
      }
      onFocus() {
        const e = this.isFocused();
        this.listeners.forEach((r) => {
          r(e);
        });
      }
      isFocused() {
        var e;
        return typeof O(this, Fn) == "boolean"
          ? O(this, Fn)
          : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !==
              "hidden";
      }
    }),
    (Fn = new WeakMap()),
    (Kr = new WeakMap()),
    (Hs = new WeakMap()),
    Um),
  O0 = new gE(),
  qs,
  Gr,
  Ks,
  Fm,
  yE =
    ((Fm = class extends Zl {
      constructor() {
        super();
        ce(this, qs, !0);
        ce(this, Gr);
        ce(this, Ks);
        ne(this, Ks, (e) => {
          if (!Yl && window.addEventListener) {
            const r = () => e(!0),
              n = () => e(!1);
            return (
              window.addEventListener("online", r, !1),
              window.addEventListener("offline", n, !1),
              () => {
                window.removeEventListener("online", r),
                  window.removeEventListener("offline", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        O(this, Gr) || this.setEventListener(O(this, Ks));
      }
      onUnsubscribe() {
        var e;
        this.hasListeners() ||
          ((e = O(this, Gr)) == null || e.call(this), ne(this, Gr, void 0));
      }
      setEventListener(e) {
        var r;
        ne(this, Ks, e),
          (r = O(this, Gr)) == null || r.call(this),
          ne(this, Gr, e(this.setOnline.bind(this)));
      }
      setOnline(e) {
        O(this, qs) !== e &&
          (ne(this, qs, e),
          this.listeners.forEach((n) => {
            n(e);
          }));
      }
      isOnline() {
        return O(this, qs);
      }
    }),
    (qs = new WeakMap()),
    (Gr = new WeakMap()),
    (Ks = new WeakMap()),
    Fm),
  ml = new yE();
function vE() {
  let t, e;
  const r = new Promise((s, i) => {
    (t = s), (e = i);
  });
  (r.status = "pending"), r.catch(() => {});
  function n(s) {
    Object.assign(r, s), delete r.resolve, delete r.reject;
  }
  return (
    (r.resolve = (s) => {
      n({ status: "fulfilled", value: s }), t(s);
    }),
    (r.reject = (s) => {
      n({ status: "rejected", reason: s }), e(s);
    }),
    r
  );
}
function wE(t) {
  return Math.min(1e3 * 2 ** t, 3e4);
}
function A0(t) {
  return (t ?? "online") === "online" ? ml.isOnline() : !0;
}
var N0 = class extends Error {
  constructor(t) {
    super("CancelledError"),
      (this.revert = t == null ? void 0 : t.revert),
      (this.silent = t == null ? void 0 : t.silent);
  }
};
function zu(t) {
  return t instanceof N0;
}
function j0(t) {
  let e = !1,
    r = 0,
    n = !1,
    s;
  const i = vE(),
    o = (p) => {
      var x;
      n || (f(new N0(p)), (x = t.abort) == null || x.call(t));
    },
    a = () => {
      e = !0;
    },
    l = () => {
      e = !1;
    },
    u = () =>
      O0.isFocused() &&
      (t.networkMode === "always" || ml.isOnline()) &&
      t.canRun(),
    c = () => A0(t.networkMode) && t.canRun(),
    h = (p) => {
      var x;
      n ||
        ((n = !0),
        (x = t.onSuccess) == null || x.call(t, p),
        s == null || s(),
        i.resolve(p));
    },
    f = (p) => {
      var x;
      n ||
        ((n = !0),
        (x = t.onError) == null || x.call(t, p),
        s == null || s(),
        i.reject(p));
    },
    d = () =>
      new Promise((p) => {
        var x;
        (s = (g) => {
          (n || u()) && p(g);
        }),
          (x = t.onPause) == null || x.call(t);
      }).then(() => {
        var p;
        (s = void 0), n || (p = t.onContinue) == null || p.call(t);
      }),
    v = () => {
      if (n) return;
      let p;
      const x = r === 0 ? t.initialPromise : void 0;
      try {
        p = x ?? t.fn();
      } catch (g) {
        p = Promise.reject(g);
      }
      Promise.resolve(p)
        .then(h)
        .catch((g) => {
          var E;
          if (n) return;
          const m = t.retry ?? (Yl ? 0 : 3),
            y = t.retryDelay ?? wE,
            _ = typeof y == "function" ? y(r, g) : y,
            S =
              m === !0 ||
              (typeof m == "number" && r < m) ||
              (typeof m == "function" && m(r, g));
          if (e || !S) {
            f(g);
            return;
          }
          r++,
            (E = t.onFail) == null || E.call(t, r, g),
            hE(_)
              .then(() => (u() ? void 0 : d()))
              .then(() => {
                e ? f(g) : v();
              });
        });
    };
  return {
    promise: i,
    cancel: o,
    continue: () => (s == null || s(), i),
    cancelRetry: a,
    continueRetry: l,
    canStart: c,
    start: () => (c() ? v() : d().then(v), i),
  };
}
var xE = (t) => setTimeout(t, 0);
function bE() {
  let t = [],
    e = 0,
    r = (a) => {
      a();
    },
    n = (a) => {
      a();
    },
    s = xE;
  const i = (a) => {
      e
        ? t.push(a)
        : s(() => {
            r(a);
          });
    },
    o = () => {
      const a = t;
      (t = []),
        a.length &&
          s(() => {
            n(() => {
              a.forEach((l) => {
                r(l);
              });
            });
          });
    };
  return {
    batch: (a) => {
      let l;
      e++;
      try {
        l = a();
      } finally {
        e--, e || o();
      }
      return l;
    },
    batchCalls:
      (a) =>
      (...l) => {
        i(() => {
          a(...l);
        });
      },
    schedule: i,
    setNotifyFunction: (a) => {
      r = a;
    },
    setBatchNotifyFunction: (a) => {
      n = a;
    },
    setScheduler: (a) => {
      s = a;
    },
  };
}
var et = bE(),
  zn,
  zm,
  I0 =
    ((zm = class {
      constructor() {
        ce(this, zn);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          uE(this.gcTime) &&
            ne(
              this,
              zn,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(t) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          t ?? (Yl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        O(this, zn) && (clearTimeout(O(this, zn)), ne(this, zn, void 0));
      }
    }),
    (zn = new WeakMap()),
    zm),
  Gs,
  Bn,
  St,
  Wn,
  Ge,
  No,
  Vn,
  zt,
  fr,
  Bm,
  _E =
    ((Bm = class extends I0 {
      constructor(e) {
        super();
        ce(this, zt);
        ce(this, Gs);
        ce(this, Bn);
        ce(this, St);
        ce(this, Wn);
        ce(this, Ge);
        ce(this, No);
        ce(this, Vn);
        ne(this, Vn, !1),
          ne(this, No, e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          ne(this, Wn, e.client),
          ne(this, St, O(this, Wn).getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          ne(this, Gs, SE(this.options)),
          (this.state = e.state ?? O(this, Gs)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var e;
        return (e = O(this, Ge)) == null ? void 0 : e.promise;
      }
      setOptions(e) {
        (this.options = { ...O(this, No), ...e }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          O(this, St).remove(this);
      }
      setData(e, r) {
        const n = fE(this.state.data, e, this.options);
        return (
          He(this, zt, fr).call(this, {
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
          }),
          n
        );
      }
      setState(e, r) {
        He(this, zt, fr).call(this, {
          type: "setState",
          state: e,
          setStateOptions: r,
        });
      }
      cancel(e) {
        var n, s;
        const r = (n = O(this, Ge)) == null ? void 0 : n.promise;
        return (
          (s = O(this, Ge)) == null || s.cancel(e),
          r ? r.then(Ut).catch(Ut) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(O(this, Gs));
      }
      isActive() {
        return this.observers.some((e) => dE(e.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === $h ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (e) => rd(e.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return this.state.data === void 0
          ? !0
          : e === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !cE(this.state.dataUpdatedAt, e);
      }
      onFocus() {
        var r;
        const e = this.observers.find((n) => n.shouldFetchOnWindowFocus());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (r = O(this, Ge)) == null || r.continue();
      }
      onOnline() {
        var r;
        const e = this.observers.find((n) => n.shouldFetchOnReconnect());
        e == null || e.refetch({ cancelRefetch: !1 }),
          (r = O(this, Ge)) == null || r.continue();
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          O(this, St).notify({
            type: "observerAdded",
            query: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((r) => r !== e)),
          this.observers.length ||
            (O(this, Ge) &&
              (O(this, Vn)
                ? O(this, Ge).cancel({ revert: !0 })
                : O(this, Ge).cancelRetry()),
            this.scheduleGc()),
          O(this, St).notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          He(this, zt, fr).call(this, { type: "invalidate" });
      }
      fetch(e, r) {
        var u, c, h;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (O(this, Ge))
            return O(this, Ge).continueRetry(), O(this, Ge).promise;
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          const f = this.observers.find((d) => d.options.queryFn);
          f && this.setOptions(f.options);
        }
        const n = new AbortController(),
          s = (f) => {
            Object.defineProperty(f, "signal", {
              enumerable: !0,
              get: () => (ne(this, Vn, !0), n.signal),
            });
          },
          i = () => {
            const f = P0(this.options, r),
              v = (() => {
                const p = {
                  client: O(this, Wn),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return s(p), p;
              })();
            return (
              ne(this, Vn, !1),
              this.options.persister ? this.options.persister(f, v, this) : f(v)
            );
          },
          a = (() => {
            const f = {
              fetchOptions: r,
              options: this.options,
              queryKey: this.queryKey,
              client: O(this, Wn),
              state: this.state,
              fetchFn: i,
            };
            return s(f), f;
          })();
        (u = this.options.behavior) == null || u.onFetch(a, this),
          ne(this, Bn, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
            He(this, zt, fr).call(this, {
              type: "fetch",
              meta: (h = a.fetchOptions) == null ? void 0 : h.meta,
            });
        const l = (f) => {
          var d, v, p, x;
          (zu(f) && f.silent) ||
            He(this, zt, fr).call(this, { type: "error", error: f }),
            zu(f) ||
              ((v = (d = O(this, St).config).onError) == null ||
                v.call(d, f, this),
              (x = (p = O(this, St).config).onSettled) == null ||
                x.call(p, this.state.data, f, this)),
            this.scheduleGc();
        };
        return (
          ne(
            this,
            Ge,
            j0({
              initialPromise: r == null ? void 0 : r.initialPromise,
              fn: a.fetchFn,
              abort: n.abort.bind(n),
              onSuccess: (f) => {
                var d, v, p, x;
                if (f === void 0) {
                  l(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(f);
                } catch (g) {
                  l(g);
                  return;
                }
                (v = (d = O(this, St).config).onSuccess) == null ||
                  v.call(d, f, this),
                  (x = (p = O(this, St).config).onSettled) == null ||
                    x.call(p, f, this.state.error, this),
                  this.scheduleGc();
              },
              onError: l,
              onFail: (f, d) => {
                He(this, zt, fr).call(this, {
                  type: "failed",
                  failureCount: f,
                  error: d,
                });
              },
              onPause: () => {
                He(this, zt, fr).call(this, { type: "pause" });
              },
              onContinue: () => {
                He(this, zt, fr).call(this, { type: "continue" });
              },
              retry: a.options.retry,
              retryDelay: a.options.retryDelay,
              networkMode: a.options.networkMode,
              canRun: () => !0,
            })
          ),
          O(this, Ge).start()
        );
      }
    }),
    (Gs = new WeakMap()),
    (Bn = new WeakMap()),
    (St = new WeakMap()),
    (Wn = new WeakMap()),
    (Ge = new WeakMap()),
    (No = new WeakMap()),
    (Vn = new WeakMap()),
    (zt = new WeakSet()),
    (fr = function (e) {
      const r = (n) => {
        switch (e.type) {
          case "failed":
            return {
              ...n,
              fetchFailureCount: e.failureCount,
              fetchFailureReason: e.error,
            };
          case "pause":
            return { ...n, fetchStatus: "paused" };
          case "continue":
            return { ...n, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...n,
              ...kE(n.data, this.options),
              fetchMeta: e.meta ?? null,
            };
          case "success":
            return (
              ne(this, Bn, void 0),
              {
                ...n,
                data: e.data,
                dataUpdateCount: n.dataUpdateCount + 1,
                dataUpdatedAt: e.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const s = e.error;
            return zu(s) && s.revert && O(this, Bn)
              ? { ...O(this, Bn), fetchStatus: "idle" }
              : {
                  ...n,
                  error: s,
                  errorUpdateCount: n.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: n.fetchFailureCount + 1,
                  fetchFailureReason: s,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...n, isInvalidated: !0 };
          case "setState":
            return { ...n, ...e.state };
        }
      };
      (this.state = r(this.state)),
        et.batch(() => {
          this.observers.forEach((n) => {
            n.onQueryUpdate();
          }),
            O(this, St).notify({ query: this, type: "updated", action: e });
        });
    }),
    Bm);
function kE(t, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: A0(e.networkMode) ? "fetching" : "paused",
    ...(t === void 0 && { error: null, status: "pending" }),
  };
}
function SE(t) {
  const e =
      typeof t.initialData == "function" ? t.initialData() : t.initialData,
    r = e !== void 0,
    n = r
      ? typeof t.initialDataUpdatedAt == "function"
        ? t.initialDataUpdatedAt()
        : t.initialDataUpdatedAt
      : 0;
  return {
    data: e,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var er,
  Wm,
  EE =
    ((Wm = class extends Zl {
      constructor(e = {}) {
        super();
        ce(this, er);
        (this.config = e), ne(this, er, new Map());
      }
      build(e, r, n) {
        const s = r.queryKey,
          i = r.queryHash ?? Ih(s, r);
        let o = this.get(i);
        return (
          o ||
            ((o = new _E({
              client: e,
              queryKey: s,
              queryHash: i,
              options: e.defaultQueryOptions(r),
              state: n,
              defaultOptions: e.getQueryDefaults(s),
            })),
            this.add(o)),
          o
        );
      }
      add(e) {
        O(this, er).has(e.queryHash) ||
          (O(this, er).set(e.queryHash, e),
          this.notify({ type: "added", query: e }));
      }
      remove(e) {
        const r = O(this, er).get(e.queryHash);
        r &&
          (e.destroy(),
          r === e && O(this, er).delete(e.queryHash),
          this.notify({ type: "removed", query: e }));
      }
      clear() {
        et.batch(() => {
          this.getAll().forEach((e) => {
            this.remove(e);
          });
        });
      }
      get(e) {
        return O(this, er).get(e);
      }
      getAll() {
        return [...O(this, er).values()];
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((n) => jp(r, n));
      }
      findAll(e = {}) {
        const r = this.getAll();
        return Object.keys(e).length > 0 ? r.filter((n) => jp(e, n)) : r;
      }
      notify(e) {
        et.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      onFocus() {
        et.batch(() => {
          this.getAll().forEach((e) => {
            e.onFocus();
          });
        });
      }
      onOnline() {
        et.batch(() => {
          this.getAll().forEach((e) => {
            e.onOnline();
          });
        });
      }
    }),
    (er = new WeakMap()),
    Wm),
  tr,
  Ye,
  Hn,
  rr,
  Ur,
  Vm,
  CE =
    ((Vm = class extends I0 {
      constructor(e) {
        super();
        ce(this, rr);
        ce(this, tr);
        ce(this, Ye);
        ce(this, Hn);
        (this.mutationId = e.mutationId),
          ne(this, Ye, e.mutationCache),
          ne(this, tr, []),
          (this.state = e.state || TE()),
          this.setOptions(e.options),
          this.scheduleGc();
      }
      setOptions(e) {
        (this.options = e), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(e) {
        O(this, tr).includes(e) ||
          (O(this, tr).push(e),
          this.clearGcTimeout(),
          O(this, Ye).notify({
            type: "observerAdded",
            mutation: this,
            observer: e,
          }));
      }
      removeObserver(e) {
        ne(
          this,
          tr,
          O(this, tr).filter((r) => r !== e)
        ),
          this.scheduleGc(),
          O(this, Ye).notify({
            type: "observerRemoved",
            mutation: this,
            observer: e,
          });
      }
      optionalRemove() {
        O(this, tr).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : O(this, Ye).remove(this));
      }
      continue() {
        var e;
        return (
          ((e = O(this, Hn)) == null ? void 0 : e.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(e) {
        var i, o, a, l, u, c, h, f, d, v, p, x, g, m, y, _, S, E, k, C;
        const r = () => {
          He(this, rr, Ur).call(this, { type: "continue" });
        };
        ne(
          this,
          Hn,
          j0({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(e)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (T, R) => {
              He(this, rr, Ur).call(this, {
                type: "failed",
                failureCount: T,
                error: R,
              });
            },
            onPause: () => {
              He(this, rr, Ur).call(this, { type: "pause" });
            },
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => O(this, Ye).canRun(this),
          })
        );
        const n = this.state.status === "pending",
          s = !O(this, Hn).canStart();
        try {
          if (n) r();
          else {
            He(this, rr, Ur).call(this, {
              type: "pending",
              variables: e,
              isPaused: s,
            }),
              await ((o = (i = O(this, Ye).config).onMutate) == null
                ? void 0
                : o.call(i, e, this));
            const R = await ((l = (a = this.options).onMutate) == null
              ? void 0
              : l.call(a, e));
            R !== this.state.context &&
              He(this, rr, Ur).call(this, {
                type: "pending",
                context: R,
                variables: e,
                isPaused: s,
              });
          }
          const T = await O(this, Hn).start();
          return (
            await ((c = (u = O(this, Ye).config).onSuccess) == null
              ? void 0
              : c.call(u, T, e, this.state.context, this)),
            await ((f = (h = this.options).onSuccess) == null
              ? void 0
              : f.call(h, T, e, this.state.context)),
            await ((v = (d = O(this, Ye).config).onSettled) == null
              ? void 0
              : v.call(
                  d,
                  T,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((x = (p = this.options).onSettled) == null
              ? void 0
              : x.call(p, T, null, e, this.state.context)),
            He(this, rr, Ur).call(this, { type: "success", data: T }),
            T
          );
        } catch (T) {
          try {
            throw (
              (await ((m = (g = O(this, Ye).config).onError) == null
                ? void 0
                : m.call(g, T, e, this.state.context, this)),
              await ((_ = (y = this.options).onError) == null
                ? void 0
                : _.call(y, T, e, this.state.context)),
              await ((E = (S = O(this, Ye).config).onSettled) == null
                ? void 0
                : E.call(
                    S,
                    void 0,
                    T,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((C = (k = this.options).onSettled) == null
                ? void 0
                : C.call(k, void 0, T, e, this.state.context)),
              T)
            );
          } finally {
            He(this, rr, Ur).call(this, { type: "error", error: T });
          }
        } finally {
          O(this, Ye).runNext(this);
        }
      }
    }),
    (tr = new WeakMap()),
    (Ye = new WeakMap()),
    (Hn = new WeakMap()),
    (rr = new WeakSet()),
    (Ur = function (e) {
      const r = (n) => {
        switch (e.type) {
          case "failed":
            return {
              ...n,
              failureCount: e.failureCount,
              failureReason: e.error,
            };
          case "pause":
            return { ...n, isPaused: !0 };
          case "continue":
            return { ...n, isPaused: !1 };
          case "pending":
            return {
              ...n,
              context: e.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: e.isPaused,
              status: "pending",
              variables: e.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...n,
              data: e.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...n,
              data: void 0,
              error: e.error,
              failureCount: n.failureCount + 1,
              failureReason: e.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = r(this.state)),
        et.batch(() => {
          O(this, tr).forEach((n) => {
            n.onMutationUpdate(e);
          }),
            O(this, Ye).notify({ mutation: this, type: "updated", action: e });
        });
    }),
    Vm);
function TE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var yr,
  Bt,
  jo,
  Hm,
  RE =
    ((Hm = class extends Zl {
      constructor(e = {}) {
        super();
        ce(this, yr);
        ce(this, Bt);
        ce(this, jo);
        (this.config = e),
          ne(this, yr, new Set()),
          ne(this, Bt, new Map()),
          ne(this, jo, 0);
      }
      build(e, r, n) {
        const s = new CE({
          mutationCache: this,
          mutationId: ++Go(this, jo)._,
          options: e.defaultMutationOptions(r),
          state: n,
        });
        return this.add(s), s;
      }
      add(e) {
        O(this, yr).add(e);
        const r = ga(e);
        if (typeof r == "string") {
          const n = O(this, Bt).get(r);
          n ? n.push(e) : O(this, Bt).set(r, [e]);
        }
        this.notify({ type: "added", mutation: e });
      }
      remove(e) {
        if (O(this, yr).delete(e)) {
          const r = ga(e);
          if (typeof r == "string") {
            const n = O(this, Bt).get(r);
            if (n)
              if (n.length > 1) {
                const s = n.indexOf(e);
                s !== -1 && n.splice(s, 1);
              } else n[0] === e && O(this, Bt).delete(r);
          }
        }
        this.notify({ type: "removed", mutation: e });
      }
      canRun(e) {
        const r = ga(e);
        if (typeof r == "string") {
          const n = O(this, Bt).get(r),
            s =
              n == null ? void 0 : n.find((i) => i.state.status === "pending");
          return !s || s === e;
        } else return !0;
      }
      runNext(e) {
        var n;
        const r = ga(e);
        if (typeof r == "string") {
          const s =
            (n = O(this, Bt).get(r)) == null
              ? void 0
              : n.find((i) => i !== e && i.state.isPaused);
          return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        et.batch(() => {
          O(this, yr).forEach((e) => {
            this.notify({ type: "removed", mutation: e });
          }),
            O(this, yr).clear(),
            O(this, Bt).clear();
        });
      }
      getAll() {
        return Array.from(O(this, yr));
      }
      find(e) {
        const r = { exact: !0, ...e };
        return this.getAll().find((n) => Ip(r, n));
      }
      findAll(e = {}) {
        return this.getAll().filter((r) => Ip(e, r));
      }
      notify(e) {
        et.batch(() => {
          this.listeners.forEach((r) => {
            r(e);
          });
        });
      }
      resumePausedMutations() {
        const e = this.getAll().filter((r) => r.state.isPaused);
        return et.batch(() =>
          Promise.all(e.map((r) => r.continue().catch(Ut)))
        );
      }
    }),
    (yr = new WeakMap()),
    (Bt = new WeakMap()),
    (jo = new WeakMap()),
    Hm);
function ga(t) {
  var e;
  return (e = t.options.scope) == null ? void 0 : e.id;
}
function Mp(t) {
  return {
    onFetch: (e, r) => {
      var c, h, f, d, v;
      const n = e.options,
        s =
          (f =
            (h = (c = e.fetchOptions) == null ? void 0 : c.meta) == null
              ? void 0
              : h.fetchMore) == null
            ? void 0
            : f.direction,
        i = ((d = e.state.data) == null ? void 0 : d.pages) || [],
        o = ((v = e.state.data) == null ? void 0 : v.pageParams) || [];
      let a = { pages: [], pageParams: [] },
        l = 0;
      const u = async () => {
        let p = !1;
        const x = (y) => {
            Object.defineProperty(y, "signal", {
              enumerable: !0,
              get: () => (
                e.signal.aborted
                  ? (p = !0)
                  : e.signal.addEventListener("abort", () => {
                      p = !0;
                    }),
                e.signal
              ),
            });
          },
          g = P0(e.options, e.fetchOptions),
          m = async (y, _, S) => {
            if (p) return Promise.reject();
            if (_ == null && y.pages.length) return Promise.resolve(y);
            const k = (() => {
                const D = {
                  client: e.client,
                  queryKey: e.queryKey,
                  pageParam: _,
                  direction: S ? "backward" : "forward",
                  meta: e.options.meta,
                };
                return x(D), D;
              })(),
              C = await g(k),
              { maxPages: T } = e.options,
              R = S ? mE : pE;
            return {
              pages: R(y.pages, C, T),
              pageParams: R(y.pageParams, _, T),
            };
          };
        if (s && i.length) {
          const y = s === "backward",
            _ = y ? PE : Dp,
            S = { pages: i, pageParams: o },
            E = _(n, S);
          a = await m(S, E, y);
        } else {
          const y = t ?? i.length;
          do {
            const _ = l === 0 ? o[0] ?? n.initialPageParam : Dp(n, a);
            if (l > 0 && _ == null) break;
            (a = await m(a, _)), l++;
          } while (l < y);
        }
        return a;
      };
      e.options.persister
        ? (e.fetchFn = () => {
            var p, x;
            return (x = (p = e.options).persister) == null
              ? void 0
              : x.call(
                  p,
                  u,
                  {
                    client: e.client,
                    queryKey: e.queryKey,
                    meta: e.options.meta,
                    signal: e.signal,
                  },
                  r
                );
          })
        : (e.fetchFn = u);
    },
  };
}
function Dp(t, { pages: e, pageParams: r }) {
  const n = e.length - 1;
  return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0;
}
function PE(t, { pages: e, pageParams: r }) {
  var n;
  return e.length > 0
    ? (n = t.getPreviousPageParam) == null
      ? void 0
      : n.call(t, e[0], e, r[0], r)
    : void 0;
}
var Ce,
  Qr,
  Jr,
  Qs,
  Js,
  Zr,
  Zs,
  Ys,
  qm,
  OE =
    ((qm = class {
      constructor(t = {}) {
        ce(this, Ce);
        ce(this, Qr);
        ce(this, Jr);
        ce(this, Qs);
        ce(this, Js);
        ce(this, Zr);
        ce(this, Zs);
        ce(this, Ys);
        ne(this, Ce, t.queryCache || new EE()),
          ne(this, Qr, t.mutationCache || new RE()),
          ne(this, Jr, t.defaultOptions || {}),
          ne(this, Qs, new Map()),
          ne(this, Js, new Map()),
          ne(this, Zr, 0);
      }
      mount() {
        Go(this, Zr)._++,
          O(this, Zr) === 1 &&
            (ne(
              this,
              Zs,
              O0.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), O(this, Ce).onFocus());
              })
            ),
            ne(
              this,
              Ys,
              ml.subscribe(async (t) => {
                t &&
                  (await this.resumePausedMutations(), O(this, Ce).onOnline());
              })
            ));
      }
      unmount() {
        var t, e;
        Go(this, Zr)._--,
          O(this, Zr) === 0 &&
            ((t = O(this, Zs)) == null || t.call(this),
            ne(this, Zs, void 0),
            (e = O(this, Ys)) == null || e.call(this),
            ne(this, Ys, void 0));
      }
      isFetching(t) {
        return O(this, Ce).findAll({ ...t, fetchStatus: "fetching" }).length;
      }
      isMutating(t) {
        return O(this, Qr).findAll({ ...t, status: "pending" }).length;
      }
      getQueryData(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = O(this, Ce).get(e.queryHash)) == null
          ? void 0
          : r.state.data;
      }
      ensureQueryData(t) {
        const e = this.defaultQueryOptions(t),
          r = O(this, Ce).build(this, e),
          n = r.state.data;
        return n === void 0
          ? this.fetchQuery(t)
          : (t.revalidateIfStale &&
              r.isStaleByTime(rd(e.staleTime, r)) &&
              this.prefetchQuery(e),
            Promise.resolve(n));
      }
      getQueriesData(t) {
        return O(this, Ce)
          .findAll(t)
          .map(({ queryKey: e, state: r }) => {
            const n = r.data;
            return [e, n];
          });
      }
      setQueryData(t, e, r) {
        const n = this.defaultQueryOptions({ queryKey: t }),
          s = O(this, Ce).get(n.queryHash),
          i = s == null ? void 0 : s.state.data,
          o = lE(e, i);
        if (o !== void 0)
          return O(this, Ce)
            .build(this, n)
            .setData(o, { ...r, manual: !0 });
      }
      setQueriesData(t, e, r) {
        return et.batch(() =>
          O(this, Ce)
            .findAll(t)
            .map(({ queryKey: n }) => [n, this.setQueryData(n, e, r)])
        );
      }
      getQueryState(t) {
        var r;
        const e = this.defaultQueryOptions({ queryKey: t });
        return (r = O(this, Ce).get(e.queryHash)) == null ? void 0 : r.state;
      }
      removeQueries(t) {
        const e = O(this, Ce);
        et.batch(() => {
          e.findAll(t).forEach((r) => {
            e.remove(r);
          });
        });
      }
      resetQueries(t, e) {
        const r = O(this, Ce);
        return et.batch(
          () => (
            r.findAll(t).forEach((n) => {
              n.reset();
            }),
            this.refetchQueries({ type: "active", ...t }, e)
          )
        );
      }
      cancelQueries(t, e = {}) {
        const r = { revert: !0, ...e },
          n = et.batch(() =>
            O(this, Ce)
              .findAll(t)
              .map((s) => s.cancel(r))
          );
        return Promise.all(n).then(Ut).catch(Ut);
      }
      invalidateQueries(t, e = {}) {
        return et.batch(
          () => (
            O(this, Ce)
              .findAll(t)
              .forEach((r) => {
                r.invalidate();
              }),
            (t == null ? void 0 : t.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...t,
                    type:
                      (t == null ? void 0 : t.refetchType) ??
                      (t == null ? void 0 : t.type) ??
                      "active",
                  },
                  e
                )
          )
        );
      }
      refetchQueries(t, e = {}) {
        const r = { ...e, cancelRefetch: e.cancelRefetch ?? !0 },
          n = et.batch(() =>
            O(this, Ce)
              .findAll(t)
              .filter((s) => !s.isDisabled() && !s.isStatic())
              .map((s) => {
                let i = s.fetch(void 0, r);
                return (
                  r.throwOnError || (i = i.catch(Ut)),
                  s.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(n).then(Ut);
      }
      fetchQuery(t) {
        const e = this.defaultQueryOptions(t);
        e.retry === void 0 && (e.retry = !1);
        const r = O(this, Ce).build(this, e);
        return r.isStaleByTime(rd(e.staleTime, r))
          ? r.fetch(e)
          : Promise.resolve(r.state.data);
      }
      prefetchQuery(t) {
        return this.fetchQuery(t).then(Ut).catch(Ut);
      }
      fetchInfiniteQuery(t) {
        return (t.behavior = Mp(t.pages)), this.fetchQuery(t);
      }
      prefetchInfiniteQuery(t) {
        return this.fetchInfiniteQuery(t).then(Ut).catch(Ut);
      }
      ensureInfiniteQueryData(t) {
        return (t.behavior = Mp(t.pages)), this.ensureQueryData(t);
      }
      resumePausedMutations() {
        return ml.isOnline()
          ? O(this, Qr).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return O(this, Ce);
      }
      getMutationCache() {
        return O(this, Qr);
      }
      getDefaultOptions() {
        return O(this, Jr);
      }
      setDefaultOptions(t) {
        ne(this, Jr, t);
      }
      setQueryDefaults(t, e) {
        O(this, Qs).set(vo(t), { queryKey: t, defaultOptions: e });
      }
      getQueryDefaults(t) {
        const e = [...O(this, Qs).values()],
          r = {};
        return (
          e.forEach((n) => {
            wo(t, n.queryKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      setMutationDefaults(t, e) {
        O(this, Js).set(vo(t), { mutationKey: t, defaultOptions: e });
      }
      getMutationDefaults(t) {
        const e = [...O(this, Js).values()],
          r = {};
        return (
          e.forEach((n) => {
            wo(t, n.mutationKey) && Object.assign(r, n.defaultOptions);
          }),
          r
        );
      }
      defaultQueryOptions(t) {
        if (t._defaulted) return t;
        const e = {
          ...O(this, Jr).queries,
          ...this.getQueryDefaults(t.queryKey),
          ...t,
          _defaulted: !0,
        };
        return (
          e.queryHash || (e.queryHash = Ih(e.queryKey, e)),
          e.refetchOnReconnect === void 0 &&
            (e.refetchOnReconnect = e.networkMode !== "always"),
          e.throwOnError === void 0 && (e.throwOnError = !!e.suspense),
          !e.networkMode && e.persister && (e.networkMode = "offlineFirst"),
          e.queryFn === $h && (e.enabled = !1),
          e
        );
      }
      defaultMutationOptions(t) {
        return t != null && t._defaulted
          ? t
          : {
              ...O(this, Jr).mutations,
              ...((t == null ? void 0 : t.mutationKey) &&
                this.getMutationDefaults(t.mutationKey)),
              ...t,
              _defaulted: !0,
            };
      }
      clear() {
        O(this, Ce).clear(), O(this, Qr).clear();
      }
    }),
    (Ce = new WeakMap()),
    (Qr = new WeakMap()),
    (Jr = new WeakMap()),
    (Qs = new WeakMap()),
    (Js = new WeakMap()),
    (Zr = new WeakMap()),
    (Zs = new WeakMap()),
    (Ys = new WeakMap()),
    qm),
  AE = b.createContext(void 0),
  NE = ({ client: t, children: e }) => (
    b.useEffect(
      () => (
        t.mount(),
        () => {
          t.unmount();
        }
      ),
      [t]
    ),
    w.jsx(AE.Provider, { value: t, children: e })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xo() {
  return (
    (xo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    xo.apply(this, arguments)
  );
}
var en;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(en || (en = {}));
const Up = "popstate";
function jE(t) {
  t === void 0 && (t = {});
  function e(n, s) {
    let { pathname: i, search: o, hash: a } = n.location;
    return sd(
      "",
      { pathname: i, search: o, hash: a },
      (s.state && s.state.usr) || null,
      (s.state && s.state.key) || "default"
    );
  }
  function r(n, s) {
    return typeof s == "string" ? s : gl(s);
  }
  return $E(e, r, null, t);
}
function je(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function $0(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function IE() {
  return Math.random().toString(36).substr(2, 8);
}
function Fp(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function sd(t, e, r, n) {
  return (
    r === void 0 && (r = null),
    xo(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? vi(e) : e,
      { state: r, key: (e && e.key) || n || IE() }
    )
  );
}
function gl(t) {
  let { pathname: e = "/", search: r = "", hash: n = "" } = t;
  return (
    r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function vi(t) {
  let e = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((e.hash = t.substr(r)), (t = t.substr(0, r)));
    let n = t.indexOf("?");
    n >= 0 && ((e.search = t.substr(n)), (t = t.substr(0, n))),
      t && (e.pathname = t);
  }
  return e;
}
function $E(t, e, r, n) {
  n === void 0 && (n = {});
  let { window: s = document.defaultView, v5Compat: i = !1 } = n,
    o = s.history,
    a = en.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(xo({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function h() {
    a = en.Pop;
    let x = c(),
      g = x == null ? null : x - u;
    (u = x), l && l({ action: a, location: p.location, delta: g });
  }
  function f(x, g) {
    a = en.Push;
    let m = sd(p.location, x, g);
    u = c() + 1;
    let y = Fp(m, u),
      _ = p.createHref(m);
    try {
      o.pushState(y, "", _);
    } catch (S) {
      if (S instanceof DOMException && S.name === "DataCloneError") throw S;
      s.location.assign(_);
    }
    i && l && l({ action: a, location: p.location, delta: 1 });
  }
  function d(x, g) {
    a = en.Replace;
    let m = sd(p.location, x, g);
    u = c();
    let y = Fp(m, u),
      _ = p.createHref(m);
    o.replaceState(y, "", _),
      i && l && l({ action: a, location: p.location, delta: 0 });
  }
  function v(x) {
    let g = s.location.origin !== "null" ? s.location.origin : s.location.href,
      m = typeof x == "string" ? x : gl(x);
    return (
      (m = m.replace(/ $/, "%20")),
      je(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m
      ),
      new URL(m, g)
    );
  }
  let p = {
    get action() {
      return a;
    },
    get location() {
      return t(s, o);
    },
    listen(x) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        s.addEventListener(Up, h),
        (l = x),
        () => {
          s.removeEventListener(Up, h), (l = null);
        }
      );
    },
    createHref(x) {
      return e(s, x);
    },
    createURL: v,
    encodeLocation(x) {
      let g = v(x);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: d,
    go(x) {
      return o.go(x);
    },
  };
  return p;
}
var zp;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(zp || (zp = {}));
function LE(t, e, r) {
  return r === void 0 && (r = "/"), ME(t, e, r, !1);
}
function ME(t, e, r, n) {
  let s = typeof e == "string" ? vi(e) : e,
    i = Lh(s.pathname || "/", r);
  if (i == null) return null;
  let o = L0(t);
  DE(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let u = QE(i);
    a = KE(o[l], u, n);
  }
  return a;
}
function L0(t, e, r, n) {
  e === void 0 && (e = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let s = (i, o, a) => {
    let l = {
      relativePath: a === void 0 ? i.path || "" : a,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (je(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = dn([n, l.relativePath]),
      c = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (je(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      L0(i.children, e, c, u)),
      !(i.path == null && !i.index) &&
        e.push({ path: u, score: HE(u, i.index), routesMeta: c });
  };
  return (
    t.forEach((i, o) => {
      var a;
      if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
      else for (let l of M0(i.path)) s(i, o, l);
    }),
    e
  );
}
function M0(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [r, ...n] = e,
    s = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return s ? [i, ""] : [i];
  let o = M0(n.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    s && a.push(...o),
    a.map((l) => (t.startsWith("/") && l === "" ? "/" : l))
  );
}
function DE(t) {
  t.sort((e, r) =>
    e.score !== r.score
      ? r.score - e.score
      : qE(
          e.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const UE = /^:[\w-]+$/,
  FE = 3,
  zE = 2,
  BE = 1,
  WE = 10,
  VE = -2,
  Bp = (t) => t === "*";
function HE(t, e) {
  let r = t.split("/"),
    n = r.length;
  return (
    r.some(Bp) && (n += VE),
    e && (n += zE),
    r
      .filter((s) => !Bp(s))
      .reduce((s, i) => s + (UE.test(i) ? FE : i === "" ? BE : WE), n)
  );
}
function qE(t, e) {
  return t.length === e.length && t.slice(0, -1).every((n, s) => n === e[s])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function KE(t, e, r) {
  let { routesMeta: n } = t,
    s = {},
    i = "/",
    o = [];
  for (let a = 0; a < n.length; ++a) {
    let l = n[a],
      u = a === n.length - 1,
      c = i === "/" ? e : e.slice(i.length) || "/",
      h = Wp(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c
      ),
      f = l.route;
    if (
      (!h &&
        u &&
        r &&
        !n[n.length - 1].route.index &&
        (h = Wp(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c
        )),
      !h)
    )
      return null;
    Object.assign(s, h.params),
      o.push({
        params: s,
        pathname: dn([i, h.pathname]),
        pathnameBase: XE(dn([i, h.pathnameBase])),
        route: f,
      }),
      h.pathnameBase !== "/" && (i = dn([i, h.pathnameBase]));
  }
  return o;
}
function Wp(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, n] = GE(t.path, t.caseSensitive, t.end),
    s = e.match(r);
  if (!s) return null;
  let i = s[0],
    o = i.replace(/(.)\/+$/, "$1"),
    a = s.slice(1);
  return {
    params: n.reduce((u, c, h) => {
      let { paramName: f, isOptional: d } = c;
      if (f === "*") {
        let p = a[h] || "";
        o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[h];
      return (
        d && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: t,
  };
}
function GE(t, e, r) {
  e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    $0(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    s =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            n.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (s += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (s += "\\/*$")
      : t !== "" && t !== "/" && (s += "(?:(?=\\/|$))"),
    [new RegExp(s, e ? void 0 : "i"), n]
  );
}
function QE(t) {
  try {
    return t
      .split("/")
      .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
      .join("/");
  } catch (e) {
    return (
      $0(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function Lh(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let r = e.endsWith("/") ? e.length - 1 : e.length,
    n = t.charAt(r);
  return n && n !== "/" ? null : t.slice(r) || "/";
}
function JE(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: r,
    search: n = "",
    hash: s = "",
  } = typeof t == "string" ? vi(t) : t;
  return {
    pathname: r ? (r.startsWith("/") ? r : ZE(r, e)) : e,
    search: eC(n),
    hash: tC(s),
  };
}
function ZE(t, e) {
  let r = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((s) => {
      s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Bu(t, e, r, n) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function YE(t) {
  return t.filter(
    (e, r) => r === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function D0(t, e) {
  let r = YE(t);
  return e
    ? r.map((n, s) => (s === r.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function U0(t, e, r, n) {
  n === void 0 && (n = !1);
  let s;
  typeof t == "string"
    ? (s = vi(t))
    : ((s = xo({}, t)),
      je(
        !s.pathname || !s.pathname.includes("?"),
        Bu("?", "pathname", "search", s)
      ),
      je(
        !s.pathname || !s.pathname.includes("#"),
        Bu("#", "pathname", "hash", s)
      ),
      je(!s.search || !s.search.includes("#"), Bu("#", "search", "hash", s)));
  let i = t === "" || s.pathname === "",
    o = i ? "/" : s.pathname,
    a;
  if (o == null) a = r;
  else {
    let h = e.length - 1;
    if (!n && o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; ) f.shift(), (h -= 1);
      s.pathname = f.join("/");
    }
    a = h >= 0 ? e[h] : "/";
  }
  let l = JE(s, a),
    u = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const dn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  XE = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  eC = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  tC = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function rC(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const F0 = ["post", "put", "patch", "delete"];
new Set(F0);
const nC = ["get", ...F0];
new Set(nC);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bo() {
  return (
    (bo = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    bo.apply(this, arguments)
  );
}
const Mh = b.createContext(null),
  sC = b.createContext(null),
  ss = b.createContext(null),
  Xl = b.createContext(null),
  Sn = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  z0 = b.createContext(null);
function iC(t, e) {
  let { relative: r } = e === void 0 ? {} : e;
  Bo() || je(!1);
  let { basename: n, navigator: s } = b.useContext(ss),
    { hash: i, pathname: o, search: a } = V0(t, { relative: r }),
    l = o;
  return (
    n !== "/" && (l = o === "/" ? n : dn([n, o])),
    s.createHref({ pathname: l, search: a, hash: i })
  );
}
function Bo() {
  return b.useContext(Xl) != null;
}
function Wo() {
  return Bo() || je(!1), b.useContext(Xl).location;
}
function B0(t) {
  b.useContext(ss).static || b.useLayoutEffect(t);
}
function W0() {
  let { isDataRoute: t } = b.useContext(Sn);
  return t ? wC() : oC();
}
function oC() {
  Bo() || je(!1);
  let t = b.useContext(Mh),
    { basename: e, future: r, navigator: n } = b.useContext(ss),
    { matches: s } = b.useContext(Sn),
    { pathname: i } = Wo(),
    o = JSON.stringify(D0(s, r.v7_relativeSplatPath)),
    a = b.useRef(!1);
  return (
    B0(() => {
      a.current = !0;
    }),
    b.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !a.current)) return;
        if (typeof u == "number") {
          n.go(u);
          return;
        }
        let h = U0(u, JSON.parse(o), i, c.relative === "path");
        t == null &&
          e !== "/" &&
          (h.pathname = h.pathname === "/" ? e : dn([e, h.pathname])),
          (c.replace ? n.replace : n.push)(h, c.state, c);
      },
      [e, n, o, i, t]
    )
  );
}
function aC() {
  let { matches: t } = b.useContext(Sn),
    e = t[t.length - 1];
  return e ? e.params : {};
}
function V0(t, e) {
  let { relative: r } = e === void 0 ? {} : e,
    { future: n } = b.useContext(ss),
    { matches: s } = b.useContext(Sn),
    { pathname: i } = Wo(),
    o = JSON.stringify(D0(s, n.v7_relativeSplatPath));
  return b.useMemo(() => U0(t, JSON.parse(o), i, r === "path"), [t, o, i, r]);
}
function lC(t, e) {
  return uC(t, e);
}
function uC(t, e, r, n) {
  Bo() || je(!1);
  let { navigator: s } = b.useContext(ss),
    { matches: i } = b.useContext(Sn),
    o = i[i.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let u = Wo(),
    c;
  if (e) {
    var h;
    let x = typeof e == "string" ? vi(e) : e;
    l === "/" || ((h = x.pathname) != null && h.startsWith(l)) || je(!1),
      (c = x);
  } else c = u;
  let f = c.pathname || "/",
    d = f;
  if (l !== "/") {
    let x = l.replace(/^\//, "").split("/");
    d = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let v = LE(t, { pathname: d }),
    p = pC(
      v &&
        v.map((x) =>
          Object.assign({}, x, {
            params: Object.assign({}, a, x.params),
            pathname: dn([
              l,
              s.encodeLocation
                ? s.encodeLocation(x.pathname).pathname
                : x.pathname,
            ]),
            pathnameBase:
              x.pathnameBase === "/"
                ? l
                : dn([
                    l,
                    s.encodeLocation
                      ? s.encodeLocation(x.pathnameBase).pathname
                      : x.pathnameBase,
                  ]),
          })
        ),
      i,
      r,
      n
    );
  return e && p
    ? b.createElement(
        Xl.Provider,
        {
          value: {
            location: bo(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c
            ),
            navigationType: en.Pop,
          },
        },
        p
      )
    : p;
}
function cC() {
  let t = vC(),
    e = rC(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, e),
    r ? b.createElement("pre", { style: s }, r) : null,
    null
  );
}
const dC = b.createElement(cC, null);
class hC extends b.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, r) {
    return r.location !== e.location ||
      (r.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : r.error,
          location: r.location,
          revalidation: e.revalidation || r.revalidation,
        };
  }
  componentDidCatch(e, r) {
    console.error(
      "React Router caught the following error during render",
      e,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          Sn.Provider,
          { value: this.props.routeContext },
          b.createElement(z0.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function fC(t) {
  let { routeContext: e, match: r, children: n } = t,
    s = b.useContext(Mh);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    b.createElement(Sn.Provider, { value: e }, n)
  );
}
function pC(t, e, r, n) {
  var s;
  if (
    (e === void 0 && (e = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    t == null)
  ) {
    var i;
    if (!r) return null;
    if (r.errors) t = r.matches;
    else if (
      (i = n) != null &&
      i.v7_partialHydration &&
      e.length === 0 &&
      !r.initialized &&
      r.matches.length > 0
    )
      t = r.matches;
    else return null;
  }
  let o = t,
    a = (s = r) == null ? void 0 : s.errors;
  if (a != null) {
    let c = o.findIndex(
      (h) => h.route.id && (a == null ? void 0 : a[h.route.id]) !== void 0
    );
    c >= 0 || je(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
  }
  let l = !1,
    u = -1;
  if (r && n && n.v7_partialHydration)
    for (let c = 0; c < o.length; c++) {
      let h = o[c];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (u = c),
        h.route.id)
      ) {
        let { loaderData: f, errors: d } = r,
          v =
            h.route.loader &&
            f[h.route.id] === void 0 &&
            (!d || d[h.route.id] === void 0);
        if (h.route.lazy || v) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((c, h, f) => {
    let d,
      v = !1,
      p = null,
      x = null;
    r &&
      ((d = a && h.route.id ? a[h.route.id] : void 0),
      (p = h.route.errorElement || dC),
      l &&
        (u < 0 && f === 0
          ? ((v = !0), (x = null))
          : u === f &&
            ((v = !0), (x = h.route.hydrateFallbackElement || null))));
    let g = e.concat(o.slice(0, f + 1)),
      m = () => {
        let y;
        return (
          d
            ? (y = p)
            : v
            ? (y = x)
            : h.route.Component
            ? (y = b.createElement(h.route.Component, null))
            : h.route.element
            ? (y = h.route.element)
            : (y = c),
          b.createElement(fC, {
            match: h,
            routeContext: { outlet: c, matches: g, isDataRoute: r != null },
            children: y,
          })
        );
      };
    return r && (h.route.ErrorBoundary || h.route.errorElement || f === 0)
      ? b.createElement(hC, {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: d,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var H0 = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(H0 || {}),
  yl = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(yl || {});
function mC(t) {
  let e = b.useContext(Mh);
  return e || je(!1), e;
}
function gC(t) {
  let e = b.useContext(sC);
  return e || je(!1), e;
}
function yC(t) {
  let e = b.useContext(Sn);
  return e || je(!1), e;
}
function q0(t) {
  let e = yC(),
    r = e.matches[e.matches.length - 1];
  return r.route.id || je(!1), r.route.id;
}
function vC() {
  var t;
  let e = b.useContext(z0),
    r = gC(yl.UseRouteError),
    n = q0(yl.UseRouteError);
  return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n];
}
function wC() {
  let { router: t } = mC(H0.UseNavigateStable),
    e = q0(yl.UseNavigateStable),
    r = b.useRef(!1);
  return (
    B0(() => {
      r.current = !0;
    }),
    b.useCallback(
      function (s, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof s == "number"
              ? t.navigate(s)
              : t.navigate(s, bo({ fromRouteId: e }, i)));
      },
      [t, e]
    )
  );
}
function xC(t, e) {
  t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath;
}
function ys(t) {
  je(!1);
}
function bC(t) {
  let {
    basename: e = "/",
    children: r = null,
    location: n,
    navigationType: s = en.Pop,
    navigator: i,
    static: o = !1,
    future: a,
  } = t;
  Bo() && je(!1);
  let l = e.replace(/^\/*/, "/"),
    u = b.useMemo(
      () => ({
        basename: l,
        navigator: i,
        static: o,
        future: bo({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, i, o]
    );
  typeof n == "string" && (n = vi(n));
  let {
      pathname: c = "/",
      search: h = "",
      hash: f = "",
      state: d = null,
      key: v = "default",
    } = n,
    p = b.useMemo(() => {
      let x = Lh(c, l);
      return x == null
        ? null
        : {
            location: { pathname: x, search: h, hash: f, state: d, key: v },
            navigationType: s,
          };
    }, [l, c, h, f, d, v, s]);
  return p == null
    ? null
    : b.createElement(
        ss.Provider,
        { value: u },
        b.createElement(Xl.Provider, { children: r, value: p })
      );
}
function _C(t) {
  let { children: e, location: r } = t;
  return lC(id(e), r);
}
new Promise(() => {});
function id(t, e) {
  e === void 0 && (e = []);
  let r = [];
  return (
    b.Children.forEach(t, (n, s) => {
      if (!b.isValidElement(n)) return;
      let i = [...e, s];
      if (n.type === b.Fragment) {
        r.push.apply(r, id(n.props.children, i));
        return;
      }
      n.type !== ys && je(!1), !n.props.index || !n.props.children || je(!1);
      let o = {
        id: n.props.id || i.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (o.children = id(n.props.children, i)), r.push(o);
    }),
    r
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function od() {
  return (
    (od = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    od.apply(this, arguments)
  );
}
function kC(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    s,
    i;
  for (i = 0; i < n.length; i++)
    (s = n[i]), !(e.indexOf(s) >= 0) && (r[s] = t[s]);
  return r;
}
function SC(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function EC(t, e) {
  return t.button === 0 && (!e || e === "_self") && !SC(t);
}
const CC = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  TC = "6";
try {
  window.__reactRouterVersion = TC;
} catch {}
const RC = "startTransition",
  Vp = sg[RC];
function PC(t) {
  let { basename: e, children: r, future: n, window: s } = t,
    i = b.useRef();
  i.current == null && (i.current = jE({ window: s, v5Compat: !0 }));
  let o = i.current,
    [a, l] = b.useState({ action: o.action, location: o.location }),
    { v7_startTransition: u } = n || {},
    c = b.useCallback(
      (h) => {
        u && Vp ? Vp(() => l(h)) : l(h);
      },
      [l, u]
    );
  return (
    b.useLayoutEffect(() => o.listen(c), [o, c]),
    b.useEffect(() => xC(n), [n]),
    b.createElement(bC, {
      basename: e,
      children: r,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: n,
    })
  );
}
const OC =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  AC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Gn = b.forwardRef(function (e, r) {
    let {
        onClick: n,
        relative: s,
        reloadDocument: i,
        replace: o,
        state: a,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: h,
      } = e,
      f = kC(e, CC),
      { basename: d } = b.useContext(ss),
      v,
      p = !1;
    if (typeof u == "string" && AC.test(u) && ((v = u), OC))
      try {
        let y = new URL(window.location.href),
          _ = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          S = Lh(_.pathname, d);
        _.origin === y.origin && S != null
          ? (u = S + _.search + _.hash)
          : (p = !0);
      } catch {}
    let x = iC(u, { relative: s }),
      g = NC(u, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: c,
        relative: s,
        viewTransition: h,
      });
    function m(y) {
      n && n(y), y.defaultPrevented || g(y);
    }
    return b.createElement(
      "a",
      od({}, f, { href: v || x, onClick: p || i ? n : m, ref: r, target: l })
    );
  });
var Hp;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(Hp || (Hp = {}));
var qp;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(qp || (qp = {}));
function NC(t, e) {
  let {
      target: r,
      replace: n,
      state: s,
      preventScrollReset: i,
      relative: o,
      viewTransition: a,
    } = e === void 0 ? {} : e,
    l = W0(),
    u = Wo(),
    c = V0(t, { relative: o });
  return b.useCallback(
    (h) => {
      if (EC(h, r)) {
        h.preventDefault();
        let f = n !== void 0 ? n : gl(u) === gl(c);
        l(t, {
          replace: f,
          state: s,
          preventScrollReset: i,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [u, l, c, n, s, r, t, i, o, a]
  );
}
function jC(t = 3600) {
  const [e, r] = b.useState(!1),
    [n, s] = b.useState(0),
    [i, o] = b.useState(null),
    a = b.useRef(null),
    l = b.useRef([]),
    u = b.useRef(null),
    c = b.useRef(null),
    h = b.useCallback(async () => {
      try {
        o(null), (l.current = []);
        const d = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: !0, noiseSuppression: !0 },
        });
        c.current = d;
        const v = new MediaRecorder(d, {
          mimeType: MediaRecorder.isTypeSupported("audio/webm")
            ? "audio/webm"
            : "audio/mp4",
        });
        (a.current = v),
          (v.ondataavailable = (p) => {
            p.data.size > 0 && l.current.push(p.data);
          }),
          v.start(100),
          r(!0),
          s(0),
          (u.current = window.setInterval(() => {
            s((p) => (p >= t ? (f(), p) : p + 1));
          }, 1e3));
      } catch (d) {
        o(
          "Microphone access denied. Please allow microphone access to record."
        ),
          console.error("Recording error:", d);
      }
    }, [t]),
    f = b.useCallback(
      async () =>
        new Promise((d) => {
          if (
            (u.current && (clearInterval(u.current), (u.current = null)),
            !a.current || a.current.state === "inactive")
          ) {
            r(!1), d(null);
            return;
          }
          (a.current.onstop = () => {
            var p;
            const v = new Blob(l.current, {
              type:
                ((p = a.current) == null ? void 0 : p.mimeType) || "audio/webm",
            });
            c.current &&
              (c.current.getTracks().forEach((x) => x.stop()),
              (c.current = null)),
              r(!1),
              d(v);
          }),
            a.current.stop();
        }),
      []
    );
  return {
    isRecording: e,
    recordingTime: n,
    startRecording: h,
    stopRecording: f,
    error: i,
  };
}
function IC(t) {
  const r = new Float32Array(44100),
    n = Math.PI / 180;
  for (let s = 0; s < 44100; s++) {
    const i = (s * 2) / 44100 - 1;
    r[s] = ((3 + t) * i * 20 * n) / (Math.PI + t * Math.abs(i));
  }
  return r;
}
function K0() {
  const [t, e] = b.useState(!1),
    [r, n] = b.useState(0),
    [s, i] = b.useState(0),
    [o, a] = b.useState([]),
    l = b.useRef(0),
    u = b.useRef(null),
    c = b.useRef(null),
    h = b.useRef(null),
    f = b.useRef(null),
    d = b.useRef(!1),
    v = b.useRef(!1),
    p0 = b.useRef(null),
    p1 = b.useRef(null),
    p2 = b.useRef(null),
    p3 = b.useRef(null),
    p4 = b.useRef(null),
    p5 = b.useRef(null),
    p = b.useCallback(async (k) => {
      let C = null;
      try {
        C = new AudioContext();
        const T = await C.decodeAudioData(k),
          R = T.getChannelData(0),
          D = 150,
          L = Math.floor(R.length / D),
          H = [];
        for (let U = 0; U < D; U++) {
          let K = 0;
          for (let he = 0; he < L; he++) {
            const Ee = R[U * L + he];
            K += Ee * Ee;
          }
          const Z = Math.sqrt(K / L);
          H.push(Z);
        }
        const M = Math.max(...H),
          Y = Math.min(...H),
          Q = M - Y || 1,
          j = H.map((U) => {
            const K = (U - Y) / Q,
              Z = Math.pow(K, 0.6),
              he = 0.15;
            return he + Z * (1 - he);
          })
            .map((U, K) => {
              const Z = K / D,
                he = Math.sin(Z * Math.PI * 6) * 0.25,
                Ee = Math.sin(Z * Math.PI * 14 + 0.5) * 0.15,
                ue = Math.sin(Z * Math.PI * 23 + 1.2) * 0.1;
              return U + he + Ee + ue;
            })
            .map((U, K, Z) =>
              K === 0 || K === Z.length - 1
                ? U
                : Z[K - 1] * 0.2 + U * 0.6 + Z[K + 1] * 0.2
            )
            .map((U) => {
              const K = (Math.random() - 0.5) * 0.15;
              return Math.max(0.15, Math.min(1, U + K));
            });
        a(j);
        const q = T.duration;
        isFinite(q) &&
          q > 0 &&
          ((l.current = q), i(q), console.log("Duration (AudioBuffer):", q));
      } catch (T) {
        console.error("Error generating waveform:", T),
          a(Array.from({ length: 150 }, () => Math.random() * 0.6 + 0.2));
      } finally {
        if (C && C.state !== "closed")
          try {
            await C.close();
          } catch {}
      }
    }, []),
    x = b.useCallback((k) => {
      if (d.current) return !0;
      try {
        let C = c.current;
        C || ((C = new AudioContext()), (c.current = C)),
          console.log("AudioContext state:", C.state);
        const T = C.createMediaElementSource(k);
        (h.current = T), (d.current = !0);
        const R = C.createBiquadFilter();
        (R.type = "highpass"), (R.frequency.value = 400), (R.Q.value = 0.8);
        const D = C.createBiquadFilter();
        (D.type = "lowpass"), (D.frequency.value = 3000), (D.Q.value = 0.8);
        const L = C.createBiquadFilter();
        (L.type = "peaking"),
          (L.frequency.value = 1200),
          (L.Q.value = 1.2),
          (L.gain.value = 5);
        const H = C.createWaveShaper();
        (H.curve = IC(3)), (H.oversample = "2x");
        const M = C.createGain();
        M.gain.value = 1.3;
        const Y = C.createGain();
        (Y.gain.value = 0.8);
        
        // Add romantic static/crackle
        const noiseSize = C.sampleRate * 2;
        const noiseBuf = C.createBuffer(1, noiseSize, C.sampleRate);
        const crackleBuf = C.createBuffer(1, noiseSize, C.sampleRate);
        const nData = noiseBuf.getChannelData(0);
        const cData = crackleBuf.getChannelData(0);
        for(let i=0; i<noiseSize; i++) {
            nData[i] = (Math.random() * 2 - 1) * 0.02;
            if(Math.random() < 0.0005) cData[i] = (Math.random() * 2 - 1) * 0.1;
        }
        
        const nGain = C.createGain(); nGain.gain.value = 0.05;
        const cGain = C.createGain(); cGain.gain.value = 0.03;
        nGain.connect(Y); cGain.connect(Y);
        p0.current = noiseBuf; p1.current = crackleBuf;
        p4.current = nGain; p5.current = cGain;

        return (
          T.connect(M)
            .connect(R)
            .connect(D)
            .connect(L)
            .connect(H)
            .connect(Y)
            .connect(C.destination),
          console.log("Romantic vintage radio effect applied"),
          !0
        );
      } catch (C) {
        return console.error("Error setting up vintage effect:", C), !1;
      }
    }, []),
    g = b.useCallback(
      async (k) => {
        if (u.current) {
          u.current.pause();
          const D = u.current.src;
          (u.current = null), D.startsWith("blob:") && URL.revokeObjectURL(D);
        }
        if (c.current && c.current.state !== "closed")
          try {
            await c.current.close();
          } catch {}
        (c.current = null), (h.current = null), (d.current = !1);
        let C, T;
        k instanceof Blob
          ? ((C = URL.createObjectURL(k)), (T = await k.arrayBuffer()))
          : ((C = k), (T = await (await fetch(k)).arrayBuffer())),
          await p(T.slice(0));
        const R = new Audio(C);
        (u.current = R),
          await new Promise((D, L) => {
            R.addEventListener("loadedmetadata", () => {
              console.log("Audio metadata loaded, duration:", R.duration),
                (!isFinite(R.duration) || isNaN(R.duration)) && l.current > 0
                  ? i(l.current)
                  : i(R.duration);
            }),
              R.addEventListener("canplaythrough", () => {
                console.log("Audio can play through"), x(R), D();
              }),
              R.addEventListener("error", (H) => {
                console.error("Audio load error:", H), L(H);
              }),
              R.addEventListener("ended", () => {
                e(!1), n(0);
                p2.current && (p2.current.stop(), p2.current = null);
                p3.current && (p3.current.stop(), p3.current = null);
              }),
              R.load();
          }),
          console.log(
            "Audio fully loaded and ready to play with vintage effect"
          );
      },
      [p, x]
    ),
    m = b.useCallback(() => {
      u.current && n(u.current.currentTime),
        t && (f.current = requestAnimationFrame(m));
    }, [t]),
    y = b.useCallback(() => {
      var C;
      const k = u.current;
      if (!k) {
        console.log("No audio element available");
        return;
      }
      console.log("Attempting to play audio...");
      try {
        ((C = c.current) == null ? void 0 : C.state) === "suspended" &&
          (console.log("Resuming suspended AudioContext..."),
          c.current.resume().catch((R) => {
            console.warn("AudioContext resume failed:", R);
          })),
          p0.current && !p2.current && (() => {
            const ns = c.current.createBufferSource();
            ns.buffer = p0.current; ns.loop = !0;
            ns.connect(p4.current); ns.start(0);
            p2.current = ns;
          })(),
          p1.current && !p3.current && (() => {
            const cs = c.current.createBufferSource();
            cs.buffer = p1.current; cs.loop = !0;
            cs.connect(p5.current); cs.start(0);
            p3.current = cs;
          })(),
          d.current ||
            (console.log("Ensuring vintage effect chain is connected..."),
            x(k)),
          k
            .play()
            .then(() => {
              console.log("Audio playback started"), e(!0);
            })
            .catch((R) => {
              console.error("Audio playback failed:", R);
            });
      } catch (T) {
        console.error("Unexpected play error:", T);
      }
    }, [x]),
    _ = b.useCallback(() => {
      u.current && (u.current.pause(), e(!1));
      p2.current && (p2.current.stop(), p2.current = null);
      p3.current && (p3.current.stop(), p3.current = null);
    }, []),
    S = b.useCallback(
      (k) => {
        u.current &&
          ((u.current.currentTime = Math.max(0, Math.min(k, s))),
          n(u.current.currentTime));
      },
      [s]
    ),
    E = b.useCallback(
      (k) => {
        k !== v.current && ((v.current = k), k ? y() : _());
      },
      [y, _]
    );
  return (
    b.useEffect(
      () => (
        t
          ? (f.current = requestAnimationFrame(m))
          : f.current && cancelAnimationFrame(f.current),
        () => {
          f.current && cancelAnimationFrame(f.current);
        }
      ),
      [t, m]
    ),
    b.useEffect(
      () => () => {
        if (u.current) {
          u.current.pause();
          const k = u.current.src;
          k.startsWith("blob:") && URL.revokeObjectURL(k);
        }
        c.current &&
          c.current.state !== "closed" &&
          c.current.close().catch(() => {});
      },
      []
    ),
    {
      isPlaying: t,
      currentTime: r,
      duration: s,
      waveformData: o,
      loadAudio: g,
      play: y,
      pause: _,
      seek: S,
      setPlaybackActive: E,
    }
  );
}
const Wu = "memorybox_user_email",
  $C = () => {
    const [t, e] = b.useState(null),
      [r, n] = b.useState(!0);
    b.useEffect(() => {
      try {
        const o = localStorage.getItem(Wu);
        o && e(o);
      } catch (o) {
        console.warn("Could not access localStorage:", o);
      }
      n(!1);
    }, []);
    const s = b.useCallback((o) => {
        e(o);
        try {
          localStorage.setItem(Wu, o);
        } catch (a) {
          console.warn("Could not save to localStorage:", a);
        }
      }, []),
      i = b.useCallback(() => {
        e(null);
        try {
          localStorage.removeItem(Wu);
        } catch (o) {
          console.warn("Could not clear localStorage:", o);
        }
      }, []);
    return {
      email: t,
      setEmail: s,
      clearEmail: i,
      isLoading: r,
      isReturningUser: !r && t !== null,
    };
  },
  Kp = "/assets/paper-texture-DFKCe1CV.png",
  ad = "/assets/strip-texture-DCo_IPsy.png",
  ya = 280,
  Gp = 200,
  LC = 400,
  Vu = 20,
  G0 = b.memo(({ photo: t, index: e }) =>
    w.jsxs("div", {
      className: "flex-shrink-0 relative overflow-hidden shadow-lg h-full",
      style: { width: `${t.displayWidth}px`, willChange: "auto" },
      children: [
        w.jsx("img", {
          src: t.imageUrl,
          alt: `Memory ${e + 1}`,
          className: "w-full h-full object-cover",
          loading: "eager",
          decoding: "async",
        }),
        w.jsx("div", {
          className:
            "absolute inset-0 pointer-events-none mix-blend-multiply opacity-30",
          style: {
            backgroundImage: `url(${ad})`,
            backgroundSize: "150px",
            backgroundRepeat: "repeat",
          },
        }),
      ],
    })
  );
G0.displayName = "PhotoItem";
const Q0 = b.memo(
  ({
    amplitude: t,
    isPlayed: e,
    isNearPlayhead: r,
    isPlaying: n,
    barWidth: s,
    maxHeight: i,
  }) => {
    const o = Math.max(4, t * i);
    return w.jsx("div", {
      className: `waveform-bar flex-shrink-0 rounded-full ${
        r && n ? "animate-waveform-bounce" : ""
      }`,
      style: {
        width: `${s}px`,
        height: `${o}px`,
        backgroundColor: e
          ? "hsl(var(--waveform-active))"
          : "hsl(var(--waveform))",
        opacity: e ? 0.9 : 0.5,
        transition: "background-color 50ms, opacity 50ms",
      },
    });
  }
);
Q0.displayName = "WaveformBar";
const Dh = ({
    photos: t,
    waveformData: e,
    currentTime: r,
    duration: n,
    isPlaying: s = !1,
  }) => {
    const [i, o] = b.useState([]);
    b.useEffect(() => {
      if (t.length === 0) {
        o([]);
        return;
      }
      const _ = t.map((E) => ({
        ...E,
        naturalWidth: ya,
        naturalHeight: ya,
        displayWidth: ya,
      }));
      o(_),
        (async () => {
          const E = await Promise.all(
            t.map(
              (k) =>
                new Promise((C) => {
                  const T = new Image();
                  (T.onload = () => {
                    const R = T.naturalWidth / T.naturalHeight;
                    let D = ya * R;
                    (D = Math.max(Gp, Math.min(LC, D))),
                      C({
                        ...k,
                        naturalWidth: T.naturalWidth,
                        naturalHeight: T.naturalHeight,
                        displayWidth: D,
                      });
                  }),
                    (T.onerror = () => {
                      C({
                        ...k,
                        naturalWidth: 300,
                        naturalHeight: 400,
                        displayWidth: Gp,
                      });
                    }),
                    (T.src = k.imageUrl);
                })
            )
          );
          o(E);
        })();
    }, [t]);
    const a = n > 0 ? (r / n) * 100 : 0,
      l = 85,
      { photoSegments: u, totalFilmstripWidth: c } = b.useMemo(() => {
        if (i.length === 0)
          return { photoSegments: [], totalFilmstripWidth: 0 };
        const _ =
            i.reduce((T, R) => T + R.displayWidth, 0) + (i.length - 1) * Vu,
          S = i.map((T) => {
            const R = T.displayWidth / _;
            return Math.round(e.length * R);
          });
        let E = 0,
          k = 0;
        const C = i.map((T, R) => {
          const D = (k / _) * 100;
          k += T.displayWidth + (R < i.length - 1 ? Vu : 0);
          const L = (k / _) * 100,
            H = S[R],
            M = Math.min(E + H, e.length),
            Y = e.slice(E, M);
          return (E = M), { photo: T, startPercent: D, endPercent: L, bars: Y };
        });
        return (
          E < e.length &&
            C.length > 0 &&
            (C[C.length - 1].bars = [...C[C.length - 1].bars, ...e.slice(E)]),
          { photoSegments: C, totalFilmstripWidth: _ }
        );
      }, [i, e]),
      h = 3,
      f = 2,
      d = h + f,
      v = 60,
      p = 50,
      x = b.useMemo(
        () => (n <= 0 || c === 0 ? p : p + (a / 100) * c),
        [a, n, c]
      ),
      g = b.useMemo(() => (c <= 0 ? 0 : Math.floor(c / d)), [c]),
      m = b.useMemo(() => {
        if (g <= 0 || e.length === 0) return [];
        const _ = [],
          S = e.length / g;
        for (let E = 0; E < g; E++) {
          const k = Math.floor(E * S);
          _.push(e[Math.min(k, e.length - 1)]);
        }
        return _;
      }, [e, g]),
      y = Math.floor(x / d);
    if (t.length === 0 || i.length === 0) {
      const S = n > 0 ? a : 0;
      return w.jsx("div", {
        className: "relative w-full h-full overflow-hidden",
        children: w.jsxs("div", {
          className: "absolute inset-0 rounded-l-[2rem] rounded-r-none",
          style: {
            backgroundColor: "hsl(40 30% 95%)",
            backgroundImage: `url(${Kp})`,
            backgroundSize: "300px",
            backgroundRepeat: "repeat",
          },
          children: [
            w.jsx("div", {
              className:
                "absolute inset-0 flex items-center overflow-hidden rounded-l-[2rem] rounded-r-none",
              children: w.jsx("div", {
                className: "flex items-end justify-start h-3/4",
                style: {
                  transform: `translateX(calc(${l}% - ${(S / 100) * 85}%))`,
                  willChange: "transform",
                  width: "85%",
                  gap: `${f}px`,
                },
                children: e.map((E, k) => {
                  const T = (k / e.length) * 100 <= a,
                    R = Math.max(4, E * v);
                  return w.jsx(
                    "div",
                    {
                      className: "waveform-bar flex-shrink-0 rounded-full",
                      style: {
                        width: `${h}px`,
                        height: `${R}px`,
                        backgroundColor: T
                          ? "hsl(var(--waveform-active))"
                          : "hsl(var(--waveform))",
                        opacity: T ? 0.9 : 0.5,
                        transition: "background-color 50ms, opacity 50ms",
                      },
                    },
                    k
                  );
                }),
              }),
            }),
            w.jsx("div", {
              className: "absolute top-0 bottom-0 w-0.5 z-10",
              style: {
                left: `${l}%`,
                opacity: n > 0 ? 1 : 0,
                background: "hsl(var(--waveform-active))",
                boxShadow: s
                  ? "0 0 12px 2px hsl(var(--waveform-active) / 0.6)"
                  : "0 0 4px 1px hsl(var(--waveform-active) / 0.3)",
              },
            }),
            w.jsx("div", {
              className:
                "absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-platform to-transparent pointer-events-none z-5",
            }),
            w.jsx("div", {
              className:
                "absolute inset-0 pointer-events-none mix-blend-multiply opacity-50 rounded-l-[2rem] rounded-r-none",
              style: {
                backgroundImage: `url(${ad})`,
                backgroundSize: "300px",
                backgroundRepeat: "repeat",
              },
            }),
          ],
        }),
      });
    }
    return w.jsx("div", {
      className: "relative w-full h-full overflow-hidden",
      children: w.jsxs("div", {
        className: "absolute inset-0 rounded-l-[2rem] rounded-r-none",
        style: {
          backgroundColor: "hsl(40 30% 95%)",
          backgroundImage: `url(${Kp})`,
          backgroundSize: "300px",
          backgroundRepeat: "repeat",
        },
        children: [
          w.jsx("div", {
            className:
              "absolute inset-0 overflow-hidden rounded-l-[2rem] rounded-r-none",
            children: w.jsx("div", {
              className: "absolute inset-y-0",
              style: { left: `${l}%` },
              children: w.jsxs("div", {
                className: "h-full flex flex-col gpu-accelerated",
                style: {
                  transform: `translate3d(-${x}px, 0, 0)`,
                  width: `${c}px`,
                  willChange: "transform",
                },
                children: [
                  w.jsx("div", {
                    className: "flex pt-3 pb-1",
                    style: { gap: `${Vu}px`, height: "75%" },
                    children: u.map(({ photo: _ }, S) =>
                      w.jsx(G0, { photo: _, index: S }, _.id)
                    ),
                  }),
                  w.jsx("div", {
                    className: "flex items-end justify-start pb-3",
                    style: { gap: `${f}px`, height: "25%" },
                    children: m.map((_, S) => {
                      const E = S <= y,
                        k = Math.abs(S - y) < 3;
                      return w.jsx(
                        Q0,
                        {
                          amplitude: _,
                          isPlayed: E,
                          isNearPlayhead: k,
                          isPlaying: s,
                          barWidth: h,
                          maxHeight: v,
                        },
                        S
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
          w.jsx("div", {
            className: "absolute top-0 bottom-0 w-0.5 z-10",
            style: {
              left: `${l}%`,
              opacity: n > 0 ? 1 : 0,
              background: "hsl(var(--waveform-active))",
              boxShadow: s
                ? "0 0 12px 2px hsl(var(--waveform-active) / 0.6)"
                : "0 0 4px 1px hsl(var(--waveform-active) / 0.3)",
            },
          }),
          w.jsx("div", {
            className:
              "absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-platform to-transparent pointer-events-none z-5",
          }),
          w.jsx("div", {
            className:
              "absolute inset-0 pointer-events-none mix-blend-multiply opacity-50 rounded-l-[2rem] rounded-r-none",
            style: {
              backgroundImage: `url(${ad})`,
              backgroundSize: "300px",
              backgroundRepeat: "repeat",
            },
          }),
        ],
      }),
    });
  },
  Uh = "/assets/handle_turn-Cuf3WVzW.png",
  MC = 33,
  ld = new Image();
ld.src = Uh;
const Fh = ({ onRotationChange: t, isPlaying: e, hideHint: r = !1 }) => {
    const [n, s] = b.useState(0),
      [i, o] = b.useState(ld.complete),
      [a, l] = b.useState(!1),
      u = b.useRef(null),
      c = b.useRef(null),
      h = b.useRef(null),
      f = b.useRef(0),
      d = b.useRef(!1);
    b.useEffect(() => {
      i || (ld.onload = () => o(!0));
    }, [i]);
    const v = b.useRef(0),
      p = b.useRef(null),
      x = b.useCallback((k, C) => {
        if (!c.current) return null;
        const T = k - c.current.x,
          R = C - c.current.y;
        return Math.atan2(R, T) * (180 / Math.PI);
      }, []),
      g = b.useCallback(
        (k, C) => {
          if (!u.current) return;
          const T = u.current.getBoundingClientRect();
          (c.current = { x: T.left + T.width / 2, y: T.top + T.height / 2 }),
            (h.current = x(k, C)),
            (v.current = 0),
            l(!0),
            "vibrate" in navigator && navigator.vibrate(10),
            d.current ||
              ((d.current = !0),
              console.log(
                "Handle touched - starting playback (user gesture context)"
              ),
              t(!0));
        },
        [x, t]
      ),
      m = b.useCallback(
        (k, C) => {
          if (!a || h.current === null) return;
          const T = x(k, C);
          if (T === null) return;
          let R = T - h.current;
          if ((R > 180 && (R -= 360), R < -180 && (R += 360), R > 0)) {
            v.current += R;
            const D = performance.now();
            D - f.current >= MC &&
              ((f.current = D),
              p.current && cancelAnimationFrame(p.current),
              (p.current = requestAnimationFrame(() => {
                s((L) => L + v.current), (v.current = 0);
              })));
          }
          h.current = T;
        },
        [a, x]
      ),
      y = b.useCallback(() => {
        v.current > 0 && (s((k) => k + v.current), (v.current = 0)),
          p.current && (cancelAnimationFrame(p.current), (p.current = null)),
          l(!1),
          (h.current = null),
          (c.current = null),
          (d.current = !1),
          t(!1);
      }, [t]),
      _ = b.useCallback(
        (k) => {
          k.preventDefault(), g(k.clientX, k.clientY);
        },
        [g]
      ),
      S = b.useCallback(
        (k) => {
          const C = k.touches[0];
          g(C.clientX, C.clientY);
        },
        [g]
      ),
      E = b.useCallback(
        (k) => {
          k.preventDefault();
          const C = k.touches[0];
          m(C.clientX, C.clientY);
        },
        [m]
      );
    return (
      b.useEffect(() => {
        const k = (T) => {
            m(T.clientX, T.clientY);
          },
          C = () => {
            a && y();
          };
        return (
          a &&
            (window.addEventListener("mousemove", k),
            window.addEventListener("mouseup", C)),
          () => {
            window.removeEventListener("mousemove", k),
              window.removeEventListener("mouseup", C);
          }
        );
      }, [a, m, y]),
      w.jsxs("div", {
        className: "flex flex-col items-center",
        children: [
          w.jsxs("div", {
            ref: u,
            className: `relative cursor-grab select-none touch-none ${
              a ? "cursor-grabbing" : ""
            }`,
            style: { width: "100px", height: "150px" },
            onMouseDown: _,
            onTouchStart: S,
            onTouchMove: E,
            onTouchEnd: y,
            children: [
              w.jsx("div", {
                className: "absolute",
                style: {
                  transform: `rotate(${n}deg)`,
                  transformOrigin: "50% 8%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  opacity: i ? 1 : 0,
                  transition: "opacity 0.2s ease-in-out",
                },
                children: w.jsx("img", {
                  src: Uh,
                  alt: "Music box handle",
                  className: "h-full w-auto object-contain pointer-events-none",
                  style: { filter: "drop-shadow(2px 4px 8px rgba(0,0,0,0.3))" },
                  draggable: !1,
                  loading: "eager",
                  decoding: "async",
                }),
              }),
              !i &&
                w.jsx("div", {
                  className:
                    "absolute inset-0 flex items-center justify-center",
                  style: { opacity: 0.5 },
                  children: w.jsx("div", {
                    className:
                      "w-8 h-24 bg-muted-foreground/30 rounded-full animate-pulse",
                  }),
                }),
            ],
          }),
          !r &&
            w.jsx("p", {
              className: `mt-6 text-center text-sm text-amber-100 transition-opacity duration-300 ${
                a ? "opacity-0" : "opacity-100"
              }`,
              style: { fontFamily: "'Newsreader', serif" },
              children: e ? "Keep turning..." : "Turn the handle clockwise",
            }),
        ],
      })
    );
  },
  DC = ({
    isRecording: t,
    recordingTime: e,
    onStartRecording: r,
    onStopRecording: n,
    error: s,
  }) => {
    const i = (o) => {
      const a = Math.floor(o / 60),
        l = o % 60;
      return `${a}:${l.toString().padStart(2, "0")}`;
    };
    return w.jsxs("div", {
      className: "flex flex-col items-center gap-4 w-full max-w-xs mx-auto",
      children: [
        s &&
          w.jsx("div", {
            className:
              "w-full p-3 rounded-lg bg-destructive/20 text-destructive text-sm text-center",
            children: s,
          }),
        w.jsx("div", {
          className: "flex items-center justify-center",
          children: w.jsx("button", {
            className: `rounded-full w-16 h-16 flex items-center justify-center transition-all ${
              t
                ? "bg-red-500 hover:bg-red-600 animate-recording"
                : "bg-red-500 hover:bg-red-600"
            }`,
            onClick: t ? n : r,
            children: t
              ? w.jsx(i1, { className: "w-5 h-5 fill-white text-white" })
              : w.jsx(n1, { className: "w-6 h-6 text-amber-100" }),
          }),
        }),
        t &&
          w.jsxs("div", {
            className: "flex items-center gap-2 text-red-400 font-mono text-sm",
            children: [
              w.jsx("div", {
                className: "w-2 h-2 rounded-full bg-red-400 animate-pulse",
              }),
              w.jsx("span", { children: i(e) }),
              w.jsx("span", {
                className: "text-amber-200/50",
                children: "/ 60:00",
              }),
            ],
          }),
        !t &&
          w.jsx("p", {
            className: "text-sm text-amber-200/70",
            style: { fontFamily: "'Newsreader', serif" },
            children: "Tap to record",
          }),
      ],
    });
  },
  Qp = 2e3,
  Jp = 2e3,
  UC = 0.8,
  FC = 2;
async function zC(t) {
  return !t.type.startsWith("image/") || t.size < 500 * 1024
    ? t
    : new Promise((e, r) => {
        const n = new Image(),
          s = document.createElement("canvas"),
          i = s.getContext("2d");
        (n.onload = () => {
          try {
            let { width: a, height: l } = n;
            if (a > Qp || l > Jp) {
              const u = Math.min(Qp / a, Jp / l);
              (a = Math.round(a * u)), (l = Math.round(l * u));
            }
            if (((s.width = a), (s.height = l), !i)) {
              e(t);
              return;
            }
            i.drawImage(n, 0, 0, a, l),
              s.toBlob(
                (u) => {
                  if (!u) {
                    e(t);
                    return;
                  }
                  if (u.size > FC * 1024 * 1024)
                    s.toBlob(
                      (c) => {
                        if (!c) {
                          e(t);
                          return;
                        }
                        const h = new File(
                          [c],
                          t.name.replace(/\.[^/.]+$/, ".jpg"),
                          { type: "image/jpeg" }
                        );
                        e(h);
                      },
                      "image/jpeg",
                      0.6
                    );
                  else {
                    const c = new File(
                      [u],
                      t.name.replace(/\.[^/.]+$/, ".jpg"),
                      { type: "image/jpeg" }
                    );
                    e(c);
                  }
                },
                "image/jpeg",
                UC
              );
          } catch (a) {
            console.error("Image compression error:", a), e(t);
          }
        }),
          (n.onerror = () => {
            console.error("Failed to load image for compression"), e(t);
          });
        const o = new FileReader();
        (o.onload = (a) => {
          var l;
          n.src = (l = a.target) == null ? void 0 : l.result;
        }),
          (o.onerror = () => {
            e(t);
          }),
          o.readAsDataURL(t);
      });
}
async function BC(t) {
  return Promise.all(t.map(zC));
}
const WC = ({
    photos: t,
    onPhotosChange: e,
    maxPhotos: r = 8,
    disabled: n = !1,
  }) => {
    const s = b.useRef(null),
      [i, o] = b.useState(!1),
      a = async (c) => {
        const h = c.target.files;
        if (!h) return;
        const f = r - t.length,
          d = Array.from(h).slice(0, f);
        if (d.length !== 0) {
          o(!0);
          try {
            const p = (await BC(d)).map((x) => ({
              id: crypto.randomUUID(),
              imageUrl: URL.createObjectURL(x),
            }));
            p.length > 0 && e([...t, ...p]);
          } catch (v) {
            console.error("Photo processing error:", v);
          } finally {
            o(!1);
          }
          s.current && (s.current.value = "");
        }
      },
      l = (c) => {
        const h = t.find((f) => f.id === c);
        h && URL.revokeObjectURL(h.imageUrl), e(t.filter((f) => f.id !== c));
      },
      u = t.length < r;
    return w.jsxs("div", {
      className: "w-full flex flex-col items-center",
      children: [
        t.length > 0 &&
          w.jsx("div", {
            className: "flex flex-wrap gap-2 justify-center mb-4",
            children: t.map((c, h) =>
              w.jsxs(
                "div",
                {
                  className:
                    "relative w-14 h-14 rounded-lg overflow-hidden group",
                  children: [
                    w.jsx("img", {
                      src: c.imageUrl,
                      alt: `Memory ${h + 1}`,
                      className: "w-full h-full object-cover",
                    }),
                    w.jsx("button", {
                      onClick: () => l(c.id),
                      className:
                        "absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                      disabled: n,
                      children: w.jsx(zv, { className: "w-2.5 h-2.5" }),
                    }),
                  ],
                },
                c.id
              )
            ),
          }),
        u &&
          w.jsx("button", {
            onClick: () => {
              var c;
              return (c = s.current) == null ? void 0 : c.click();
            },
            disabled: n || i,
            className:
              "w-14 h-14 rounded-lg border-2 border-dashed border-amber-200/40 flex items-center justify-center text-amber-200/40 hover:border-amber-200/60 hover:text-amber-200/60 transition-colors disabled:opacity-50",
            children: i
              ? w.jsx(mo, { className: "w-5 h-5 animate-spin" })
              : w.jsx(s1, { className: "w-6 h-6", strokeWidth: 1.5 }),
          }),
        w.jsxs("p", {
          className: "mt-4 text-center text-sm text-amber-200/70",
          style: { fontFamily: "'Newsreader', serif" },
          children: ["Add up to ", r, " photos"],
        }),
        w.jsx("input", {
          ref: s,
          type: "file",
          accept: "image/*,.jpg,.jpeg,.png,.webp",
          multiple: !0,
          className: "hidden",
          onChange: a,
          disabled: n,
        }),
      ],
    });
  },
  zh = ({ height: t = "470px" }) =>
    w.jsx("div", {
      className: "flex items-center justify-center flex-shrink-0",
      style: { height: t },
      children: w.jsxs("div", {
        className: "relative flex items-center justify-center h-full",
        style: {
          width: "44px",
          background:
            "linear-gradient(90deg, #B5AEA8 0%, #AFA89F 15%, #9B948E 50%, #7A7570 85%, #6B6661 100%)",
          borderRadius: "16px",
          boxShadow: `
            inset 2px 2px 4px rgba(255,255,255,0.3),
            inset -2px -2px 4px rgba(0,0,0,0.2),
            4px 4px 12px rgba(0,0,0,0.3),
            -2px 0 8px rgba(0,0,0,0.15)
          `,
        },
        children: [
          w.jsx("div", {
            className: "absolute left-0 top-4 bottom-4",
            style: {
              width: "4px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.2) 100%)",
              borderRadius: "2px 0 0 2px",
            },
          }),
          w.jsx("div", {
            className: "absolute right-0 top-4 bottom-4",
            style: {
              width: "4px",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.3) 100%)",
              borderRadius: "0 2px 2px 0",
            },
          }),
          Array.from({ length: 120 }, (e, r) => 3 + r * 0.78).map((e, r) =>
            w.jsx(
              "div",
              {
                className: "absolute left-0.5 right-0.5 pointer-events-none",
                style: {
                  top: `${e}%`,
                  height: "0.25px",
                  background: `linear-gradient(90deg, rgba(139,132,125,${
                    0.1 + (r % 4) * 0.05
                  }) 0%, rgba(90,85,80,${
                    0.15 + (r % 4) * 0.05
                  }) 50%, rgba(70,65,60,${0.2 + (r % 4) * 0.05}) 100%)`,
                },
              },
              r
            )
          ),
          w.jsx("div", {
            className: "relative flex items-center justify-center",
            style: {
              width: "16px",
              height: "calc(100% - 30px)",
              background:
                "linear-gradient(90deg, #87827D 0%, #7A7570 50%, #6B6661 100%)",
              borderRadius: "8px",
              boxShadow: `
              inset 2px 2px 4px rgba(0,0,0,0.4),
              inset -1px -1px 2px rgba(255,255,255,0.1)
            `,
            },
            children: w.jsx("div", {
              style: {
                width: "8px",
                height: "calc(100% - 20px)",
                background:
                  "linear-gradient(90deg, #1a1816 0%, #0f0e0d 50%, #0a0908 100%)",
                borderRadius: "4px",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.8)",
              },
            }),
          }),
          w.jsx("div", {
            className: "absolute top-0 left-2 right-2",
            style: {
              height: "8px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
              borderRadius: "14px 14px 0 0",
            },
          }),
          w.jsx("div", {
            className: "absolute bottom-0 left-2 right-2",
            style: {
              height: "8px",
              background:
                "linear-gradient(0deg, rgba(0,0,0,0.25) 0%, transparent 100%)",
              borderRadius: "0 0 14px 14px",
            },
          }),
          w.jsx("div", {
            className: "absolute top-1/2 -translate-y-1/2 pointer-events-none",
            style: {
              right: "2px",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              fontFamily: "Georgia, serif",
              fontSize: "12px",
              letterSpacing: "1.5px",
              color: "rgba(20, 18, 15, 0.75)",
              textShadow: "0 0.5px 0 rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
            },
            children: "@jwfathoni",
          }),
        ],
      }),
    }),
  VC = Mv(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  pt = b.forwardRef(
    ({ className: t, variant: e, size: r, asChild: n = !1, ...s }, i) => {
      const o = n ? n_ : "button";
      return w.jsx(o, {
        className: cr(VC({ variant: e, size: r, className: t })),
        ref: i,
        ...s,
      });
    }
  );
pt.displayName = "Button";
function eu(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) &&
      e.indexOf(n) < 0 &&
      (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, n[s]) &&
        (r[n[s]] = t[n[s]]);
  return r;
}
function HC(t, e, r, n) {
  function s(i) {
    return i instanceof r
      ? i
      : new r(function (o) {
          o(i);
        });
  }
  return new (r || (r = Promise))(function (i, o) {
    function a(c) {
      try {
        u(n.next(c));
      } catch (h) {
        o(h);
      }
    }
    function l(c) {
      try {
        u(n.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      c.done ? i(c.value) : s(c.value).then(a, l);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
const qC = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e));
class Bh extends Error {
  constructor(e, r = "FunctionsError", n) {
    super(e), (this.name = r), (this.context = n);
  }
}
class KC extends Bh {
  constructor(e) {
    super(
      "Failed to send a request to the Edge Function",
      "FunctionsFetchError",
      e
    );
  }
}
class Zp extends Bh {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Yp extends Bh {
  constructor(e) {
    super(
      "Edge Function returned a non-2xx status code",
      "FunctionsHttpError",
      e
    );
  }
}
var ud;
(function (t) {
  (t.Any = "any"),
    (t.ApNortheast1 = "ap-northeast-1"),
    (t.ApNortheast2 = "ap-northeast-2"),
    (t.ApSouth1 = "ap-south-1"),
    (t.ApSoutheast1 = "ap-southeast-1"),
    (t.ApSoutheast2 = "ap-southeast-2"),
    (t.CaCentral1 = "ca-central-1"),
    (t.EuCentral1 = "eu-central-1"),
    (t.EuWest1 = "eu-west-1"),
    (t.EuWest2 = "eu-west-2"),
    (t.EuWest3 = "eu-west-3"),
    (t.SaEast1 = "sa-east-1"),
    (t.UsEast1 = "us-east-1"),
    (t.UsWest1 = "us-west-1"),
    (t.UsWest2 = "us-west-2");
})(ud || (ud = {}));
class GC {
  constructor(e, { headers: r = {}, customFetch: n, region: s = ud.Any } = {}) {
    (this.url = e), (this.headers = r), (this.region = s), (this.fetch = qC(n));
  }
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  invoke(e) {
    return HC(this, arguments, void 0, function* (r, n = {}) {
      var s;
      let i, o;
      try {
        const { headers: a, method: l, body: u, signal: c, timeout: h } = n;
        let f = {},
          { region: d } = n;
        d || (d = this.region);
        const v = new URL(`${this.url}/${r}`);
        d &&
          d !== "any" &&
          ((f["x-region"] = d), v.searchParams.set("forceFunctionRegion", d));
        let p;
        u &&
        ((a && !Object.prototype.hasOwnProperty.call(a, "Content-Type")) || !a)
          ? (typeof Blob < "u" && u instanceof Blob) || u instanceof ArrayBuffer
            ? ((f["Content-Type"] = "application/octet-stream"), (p = u))
            : typeof u == "string"
            ? ((f["Content-Type"] = "text/plain"), (p = u))
            : typeof FormData < "u" && u instanceof FormData
            ? (p = u)
            : ((f["Content-Type"] = "application/json"),
              (p = JSON.stringify(u)))
          : u &&
            typeof u != "string" &&
            !(typeof Blob < "u" && u instanceof Blob) &&
            !(u instanceof ArrayBuffer) &&
            !(typeof FormData < "u" && u instanceof FormData)
          ? (p = JSON.stringify(u))
          : (p = u);
        let x = c;
        h &&
          ((o = new AbortController()),
          (i = setTimeout(() => o.abort(), h)),
          c
            ? ((x = o.signal), c.addEventListener("abort", () => o.abort()))
            : (x = o.signal));
        const g = yield this.fetch(v.toString(), {
            method: l || "POST",
            headers: Object.assign(
              Object.assign(Object.assign({}, f), this.headers),
              a
            ),
            body: p,
            signal: x,
          }).catch((S) => {
            throw new KC(S);
          }),
          m = g.headers.get("x-relay-error");
        if (m && m === "true") throw new Zp(g);
        if (!g.ok) throw new Yp(g);
        let y = (
            (s = g.headers.get("Content-Type")) !== null && s !== void 0
              ? s
              : "text/plain"
          )
            .split(";")[0]
            .trim(),
          _;
        return (
          y === "application/json"
            ? (_ = yield g.json())
            : y === "application/octet-stream" || y === "application/pdf"
            ? (_ = yield g.blob())
            : y === "text/event-stream"
            ? (_ = g)
            : y === "multipart/form-data"
            ? (_ = yield g.formData())
            : (_ = yield g.text()),
          { data: _, error: null, response: g }
        );
      } catch (a) {
        return {
          data: null,
          error: a,
          response: a instanceof Yp || a instanceof Zp ? a.context : void 0,
        };
      } finally {
        i && clearTimeout(i);
      }
    });
  }
}
var QC = class extends Error {
    constructor(t) {
      super(t.message),
        (this.name = "PostgrestError"),
        (this.details = t.details),
        (this.hint = t.hint),
        (this.code = t.code);
    }
  },
  JC = class {
    constructor(t) {
      var e, r, n;
      (this.shouldThrowOnError = !1),
        (this.method = t.method),
        (this.url = t.url),
        (this.headers = new Headers(t.headers)),
        (this.schema = t.schema),
        (this.body = t.body),
        (this.shouldThrowOnError =
          (e = t.shouldThrowOnError) !== null && e !== void 0 ? e : !1),
        (this.signal = t.signal),
        (this.isMaybeSingle =
          (r = t.isMaybeSingle) !== null && r !== void 0 ? r : !1),
        (this.urlLengthLimit =
          (n = t.urlLengthLimit) !== null && n !== void 0 ? n : 8e3),
        t.fetch ? (this.fetch = t.fetch) : (this.fetch = fetch);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    setHeader(t, e) {
      return (
        (this.headers = new Headers(this.headers)), this.headers.set(t, e), this
      );
    }
    then(t, e) {
      var r = this;
      this.schema === void 0 ||
        (["GET", "HEAD"].includes(this.method)
          ? this.headers.set("Accept-Profile", this.schema)
          : this.headers.set("Content-Profile", this.schema)),
        this.method !== "GET" &&
          this.method !== "HEAD" &&
          this.headers.set("Content-Type", "application/json");
      const n = this.fetch;
      let s = n(this.url.toString(), {
        method: this.method,
        headers: this.headers,
        body: JSON.stringify(this.body),
        signal: this.signal,
      }).then(async (i) => {
        let o = null,
          a = null,
          l = null,
          u = i.status,
          c = i.statusText;
        if (i.ok) {
          var h, f;
          if (r.method !== "HEAD") {
            var d;
            const g = await i.text();
            g === "" ||
              (r.headers.get("Accept") === "text/csv" ||
              (r.headers.get("Accept") &&
                !((d = r.headers.get("Accept")) === null || d === void 0) &&
                d.includes("application/vnd.pgrst.plan+text"))
                ? (a = g)
                : (a = JSON.parse(g)));
          }
          const p =
              (h = r.headers.get("Prefer")) === null || h === void 0
                ? void 0
                : h.match(/count=(exact|planned|estimated)/),
            x =
              (f = i.headers.get("content-range")) === null || f === void 0
                ? void 0
                : f.split("/");
          p && x && x.length > 1 && (l = parseInt(x[1])),
            r.isMaybeSingle &&
              r.method === "GET" &&
              Array.isArray(a) &&
              (a.length > 1
                ? ((o = {
                    code: "PGRST116",
                    details: `Results contain ${a.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                    hint: null,
                    message:
                      "JSON object requested, multiple (or no) rows returned",
                  }),
                  (a = null),
                  (l = null),
                  (u = 406),
                  (c = "Not Acceptable"))
                : a.length === 1
                ? (a = a[0])
                : (a = null));
        } else {
          var v;
          const p = await i.text();
          try {
            (o = JSON.parse(p)),
              Array.isArray(o) &&
                i.status === 404 &&
                ((a = []), (o = null), (u = 200), (c = "OK"));
          } catch {
            i.status === 404 && p === ""
              ? ((u = 204), (c = "No Content"))
              : (o = { message: p });
          }
          if (
            (o &&
              r.isMaybeSingle &&
              !(o == null || (v = o.details) === null || v === void 0) &&
              v.includes("0 rows") &&
              ((o = null), (u = 200), (c = "OK")),
            o && r.shouldThrowOnError)
          )
            throw new QC(o);
        }
        return { error: o, data: a, count: l, status: u, statusText: c };
      });
      return (
        this.shouldThrowOnError ||
          (s = s.catch((i) => {
            var o;
            let a = "",
              l = "",
              u = "";
            const c = i == null ? void 0 : i.cause;
            if (c) {
              var h, f, d, v;
              const g =
                  (h = c == null ? void 0 : c.message) !== null && h !== void 0
                    ? h
                    : "",
                m =
                  (f = c == null ? void 0 : c.code) !== null && f !== void 0
                    ? f
                    : "";
              (a = `${
                (d = i == null ? void 0 : i.name) !== null && d !== void 0
                  ? d
                  : "FetchError"
              }: ${i == null ? void 0 : i.message}`),
                (a += `

Caused by: ${
                  (v = c == null ? void 0 : c.name) !== null && v !== void 0
                    ? v
                    : "Error"
                }: ${g}`),
                m && (a += ` (${m})`),
                c != null &&
                  c.stack &&
                  (a += `
${c.stack}`);
            } else {
              var p;
              a =
                (p = i == null ? void 0 : i.stack) !== null && p !== void 0
                  ? p
                  : "";
            }
            const x = this.url.toString().length;
            return (
              (i == null ? void 0 : i.name) === "AbortError" ||
              (i == null ? void 0 : i.code) === "ABORT_ERR"
                ? ((u = ""),
                  (l = "Request was aborted (timeout or manual cancellation)"),
                  x > this.urlLengthLimit &&
                    (l += `. Note: Your request URL is ${x} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`))
                : ((c == null ? void 0 : c.name) === "HeadersOverflowError" ||
                    (c == null ? void 0 : c.code) ===
                      "UND_ERR_HEADERS_OVERFLOW") &&
                  ((u = ""),
                  (l = "HTTP headers exceeded server limits (typically 16KB)"),
                  x > this.urlLengthLimit &&
                    (l += `. Your request URL is ${x} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),
              {
                error: {
                  message: `${
                    (o = i == null ? void 0 : i.name) !== null && o !== void 0
                      ? o
                      : "FetchError"
                  }: ${i == null ? void 0 : i.message}`,
                  details: a,
                  hint: l,
                  code: u,
                },
                data: null,
                count: null,
                status: 0,
                statusText: "",
              }
            );
          })),
        s.then(t, e)
      );
    }
    returns() {
      return this;
    }
    overrideTypes() {
      return this;
    }
  },
  ZC = class extends JC {
    select(t) {
      let e = !1;
      const r = (t ?? "*")
        .split("")
        .map((n) => (/\s/.test(n) && !e ? "" : (n === '"' && (e = !e), n)))
        .join("");
      return (
        this.url.searchParams.set("select", r),
        this.headers.append("Prefer", "return=representation"),
        this
      );
    }
    order(
      t,
      {
        ascending: e = !0,
        nullsFirst: r,
        foreignTable: n,
        referencedTable: s = n,
      } = {}
    ) {
      const i = s ? `${s}.order` : "order",
        o = this.url.searchParams.get(i);
      return (
        this.url.searchParams.set(
          i,
          `${o ? `${o},` : ""}${t}.${e ? "asc" : "desc"}${
            r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"
          }`
        ),
        this
      );
    }
    limit(t, { foreignTable: e, referencedTable: r = e } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return this.url.searchParams.set(n, `${t}`), this;
    }
    range(t, e, { foreignTable: r, referencedTable: n = r } = {}) {
      const s = typeof n > "u" ? "offset" : `${n}.offset`,
        i = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
        this.url.searchParams.set(s, `${t}`),
        this.url.searchParams.set(i, `${e - t + 1}`),
        this
      );
    }
    abortSignal(t) {
      return (this.signal = t), this;
    }
    single() {
      return (
        this.headers.set("Accept", "application/vnd.pgrst.object+json"), this
      );
    }
    maybeSingle() {
      return (
        this.method === "GET"
          ? this.headers.set("Accept", "application/json")
          : this.headers.set("Accept", "application/vnd.pgrst.object+json"),
        (this.isMaybeSingle = !0),
        this
      );
    }
    csv() {
      return this.headers.set("Accept", "text/csv"), this;
    }
    geojson() {
      return this.headers.set("Accept", "application/geo+json"), this;
    }
    explain({
      analyze: t = !1,
      verbose: e = !1,
      settings: r = !1,
      buffers: n = !1,
      wal: s = !1,
      format: i = "text",
    } = {}) {
      var o;
      const a = [
          t ? "analyze" : null,
          e ? "verbose" : null,
          r ? "settings" : null,
          n ? "buffers" : null,
          s ? "wal" : null,
        ]
          .filter(Boolean)
          .join("|"),
        l =
          (o = this.headers.get("Accept")) !== null && o !== void 0
            ? o
            : "application/json";
      return (
        this.headers.set(
          "Accept",
          `application/vnd.pgrst.plan+${i}; for="${l}"; options=${a};`
        ),
        i === "json" ? this : this
      );
    }
    rollback() {
      return this.headers.append("Prefer", "tx=rollback"), this;
    }
    returns() {
      return this;
    }
    maxAffected(t) {
      return (
        this.headers.append("Prefer", "handling=strict"),
        this.headers.append("Prefer", `max-affected=${t}`),
        this
      );
    }
  };
const Xp = new RegExp("[,()]");
var vs = class extends ZC {
    eq(t, e) {
      return this.url.searchParams.append(t, `eq.${e}`), this;
    }
    neq(t, e) {
      return this.url.searchParams.append(t, `neq.${e}`), this;
    }
    gt(t, e) {
      return this.url.searchParams.append(t, `gt.${e}`), this;
    }
    gte(t, e) {
      return this.url.searchParams.append(t, `gte.${e}`), this;
    }
    lt(t, e) {
      return this.url.searchParams.append(t, `lt.${e}`), this;
    }
    lte(t, e) {
      return this.url.searchParams.append(t, `lte.${e}`), this;
    }
    like(t, e) {
      return this.url.searchParams.append(t, `like.${e}`), this;
    }
    likeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(all).{${e.join(",")}}`), this
      );
    }
    likeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `like(any).{${e.join(",")}}`), this
      );
    }
    ilike(t, e) {
      return this.url.searchParams.append(t, `ilike.${e}`), this;
    }
    ilikeAllOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(all).{${e.join(",")}}`), this
      );
    }
    ilikeAnyOf(t, e) {
      return (
        this.url.searchParams.append(t, `ilike(any).{${e.join(",")}}`), this
      );
    }
    regexMatch(t, e) {
      return this.url.searchParams.append(t, `match.${e}`), this;
    }
    regexIMatch(t, e) {
      return this.url.searchParams.append(t, `imatch.${e}`), this;
    }
    is(t, e) {
      return this.url.searchParams.append(t, `is.${e}`), this;
    }
    isDistinct(t, e) {
      return this.url.searchParams.append(t, `isdistinct.${e}`), this;
    }
    in(t, e) {
      const r = Array.from(new Set(e))
        .map((n) => (typeof n == "string" && Xp.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return this.url.searchParams.append(t, `in.(${r})`), this;
    }
    notIn(t, e) {
      const r = Array.from(new Set(e))
        .map((n) => (typeof n == "string" && Xp.test(n) ? `"${n}"` : `${n}`))
        .join(",");
      return this.url.searchParams.append(t, `not.in.(${r})`), this;
    }
    contains(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cs.${e}`)
          : Array.isArray(e)
          ? this.url.searchParams.append(t, `cs.{${e.join(",")}}`)
          : this.url.searchParams.append(t, `cs.${JSON.stringify(e)}`),
        this
      );
    }
    containedBy(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `cd.${e}`)
          : Array.isArray(e)
          ? this.url.searchParams.append(t, `cd.{${e.join(",")}}`)
          : this.url.searchParams.append(t, `cd.${JSON.stringify(e)}`),
        this
      );
    }
    rangeGt(t, e) {
      return this.url.searchParams.append(t, `sr.${e}`), this;
    }
    rangeGte(t, e) {
      return this.url.searchParams.append(t, `nxl.${e}`), this;
    }
    rangeLt(t, e) {
      return this.url.searchParams.append(t, `sl.${e}`), this;
    }
    rangeLte(t, e) {
      return this.url.searchParams.append(t, `nxr.${e}`), this;
    }
    rangeAdjacent(t, e) {
      return this.url.searchParams.append(t, `adj.${e}`), this;
    }
    overlaps(t, e) {
      return (
        typeof e == "string"
          ? this.url.searchParams.append(t, `ov.${e}`)
          : this.url.searchParams.append(t, `ov.{${e.join(",")}}`),
        this
      );
    }
    textSearch(t, e, { config: r, type: n } = {}) {
      let s = "";
      n === "plain"
        ? (s = "pl")
        : n === "phrase"
        ? (s = "ph")
        : n === "websearch" && (s = "w");
      const i = r === void 0 ? "" : `(${r})`;
      return this.url.searchParams.append(t, `${s}fts${i}.${e}`), this;
    }
    match(t) {
      return (
        Object.entries(t).forEach(([e, r]) => {
          this.url.searchParams.append(e, `eq.${r}`);
        }),
        this
      );
    }
    not(t, e, r) {
      return this.url.searchParams.append(t, `not.${e}.${r}`), this;
    }
    or(t, { foreignTable: e, referencedTable: r = e } = {}) {
      const n = r ? `${r}.or` : "or";
      return this.url.searchParams.append(n, `(${t})`), this;
    }
    filter(t, e, r) {
      return this.url.searchParams.append(t, `${e}.${r}`), this;
    }
  },
  YC = class {
    constructor(
      t,
      { headers: e = {}, schema: r, fetch: n, urlLengthLimit: s = 8e3 }
    ) {
      (this.url = t),
        (this.headers = new Headers(e)),
        (this.schema = r),
        (this.fetch = n),
        (this.urlLengthLimit = s);
    }
    cloneRequestState() {
      return {
        url: new URL(this.url.toString()),
        headers: new Headers(this.headers),
      };
    }
    select(t, e) {
      const { head: r = !1, count: n } = e ?? {},
        s = r ? "HEAD" : "GET";
      let i = !1;
      const o = (t ?? "*")
          .split("")
          .map((u) => (/\s/.test(u) && !i ? "" : (u === '"' && (i = !i), u)))
          .join(""),
        { url: a, headers: l } = this.cloneRequestState();
      return (
        a.searchParams.set("select", o),
        n && l.append("Prefer", `count=${n}`),
        new vs({
          method: s,
          url: a,
          headers: l,
          schema: this.schema,
          fetch: this.fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    insert(t, { count: e, defaultToNull: r = !0 } = {}) {
      var n;
      const s = "POST",
        { url: i, headers: o } = this.cloneRequestState();
      if (
        (e && o.append("Prefer", `count=${e}`),
        r || o.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const a = t.reduce((l, u) => l.concat(Object.keys(u)), []);
        if (a.length > 0) {
          const l = [...new Set(a)].map((u) => `"${u}"`);
          i.searchParams.set("columns", l.join(","));
        }
      }
      return new vs({
        method: s,
        url: i,
        headers: o,
        schema: this.schema,
        body: t,
        fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    upsert(
      t,
      {
        onConflict: e,
        ignoreDuplicates: r = !1,
        count: n,
        defaultToNull: s = !0,
      } = {}
    ) {
      var i;
      const o = "POST",
        { url: a, headers: l } = this.cloneRequestState();
      if (
        (l.append("Prefer", `resolution=${r ? "ignore" : "merge"}-duplicates`),
        e !== void 0 && a.searchParams.set("on_conflict", e),
        n && l.append("Prefer", `count=${n}`),
        s || l.append("Prefer", "missing=default"),
        Array.isArray(t))
      ) {
        const u = t.reduce((c, h) => c.concat(Object.keys(h)), []);
        if (u.length > 0) {
          const c = [...new Set(u)].map((h) => `"${h}"`);
          a.searchParams.set("columns", c.join(","));
        }
      }
      return new vs({
        method: o,
        url: a,
        headers: l,
        schema: this.schema,
        body: t,
        fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch,
        urlLengthLimit: this.urlLengthLimit,
      });
    }
    update(t, { count: e } = {}) {
      var r;
      const n = "PATCH",
        { url: s, headers: i } = this.cloneRequestState();
      return (
        e && i.append("Prefer", `count=${e}`),
        new vs({
          method: n,
          url: s,
          headers: i,
          schema: this.schema,
          body: t,
          fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
    delete({ count: t } = {}) {
      var e;
      const r = "DELETE",
        { url: n, headers: s } = this.cloneRequestState();
      return (
        t && s.append("Prefer", `count=${t}`),
        new vs({
          method: r,
          url: n,
          headers: s,
          schema: this.schema,
          fetch: (e = this.fetch) !== null && e !== void 0 ? e : fetch,
          urlLengthLimit: this.urlLengthLimit,
        })
      );
    }
  };
function _o(t) {
  "@babel/helpers - typeof";
  return (
    (_o =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _o(t)
  );
}
function XC(t, e) {
  if (_o(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (_o(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function eT(t) {
  var e = XC(t, "string");
  return _o(e) == "symbol" ? e : e + "";
}
function tT(t, e, r) {
  return (
    (e = eT(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function em(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function va(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? em(Object(r), !0).forEach(function (n) {
          tT(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : em(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
var rT = class J0 {
  constructor(
    e,
    {
      headers: r = {},
      schema: n,
      fetch: s,
      timeout: i,
      urlLengthLimit: o = 8e3,
    } = {}
  ) {
    (this.url = e),
      (this.headers = new Headers(r)),
      (this.schemaName = n),
      (this.urlLengthLimit = o);
    const a = s ?? globalThis.fetch;
    i !== void 0 && i > 0
      ? (this.fetch = (l, u) => {
          const c = new AbortController(),
            h = setTimeout(() => c.abort(), i),
            f = u == null ? void 0 : u.signal;
          if (f) {
            if (f.aborted) return clearTimeout(h), a(l, u);
            const d = () => {
              clearTimeout(h), c.abort();
            };
            return (
              f.addEventListener("abort", d, { once: !0 }),
              a(l, va(va({}, u), {}, { signal: c.signal })).finally(() => {
                clearTimeout(h), f.removeEventListener("abort", d);
              })
            );
          }
          return a(l, va(va({}, u), {}, { signal: c.signal })).finally(() =>
            clearTimeout(h)
          );
        })
      : (this.fetch = a);
  }
  from(e) {
    if (!e || typeof e != "string" || e.trim() === "")
      throw new Error(
        "Invalid relation name: relation must be a non-empty string."
      );
    return new YC(new URL(`${this.url}/${e}`), {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  schema(e) {
    return new J0(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch,
      urlLengthLimit: this.urlLengthLimit,
    });
  }
  rpc(e, r = {}, { head: n = !1, get: s = !1, count: i } = {}) {
    var o;
    let a;
    const l = new URL(`${this.url}/rpc/${e}`);
    let u;
    const c = (d) =>
        d !== null && typeof d == "object" && (!Array.isArray(d) || d.some(c)),
      h = n && Object.values(r).some(c);
    h
      ? ((a = "POST"), (u = r))
      : n || s
      ? ((a = n ? "HEAD" : "GET"),
        Object.entries(r)
          .filter(([d, v]) => v !== void 0)
          .map(([d, v]) => [d, Array.isArray(v) ? `{${v.join(",")}}` : `${v}`])
          .forEach(([d, v]) => {
            l.searchParams.append(d, v);
          }))
      : ((a = "POST"), (u = r));
    const f = new Headers(this.headers);
    return (
      h
        ? f.set("Prefer", i ? `count=${i},return=minimal` : "return=minimal")
        : i && f.set("Prefer", `count=${i}`),
      new vs({
        method: a,
        url: l,
        headers: f,
        schema: this.schemaName,
        body: u,
        fetch: (o = this.fetch) !== null && o !== void 0 ? o : fetch,
        urlLengthLimit: this.urlLengthLimit,
      })
    );
  }
};
class nT {
  constructor() {}
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (
      typeof globalThis < "u" &&
      typeof globalThis.WebSocketPair < "u" &&
      typeof globalThis.WebSocket > "u"
    )
      return {
        type: "cloudflare",
        error:
          "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround:
          "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime.",
      };
    if (
      (typeof globalThis < "u" && globalThis.EdgeRuntime) ||
      (typeof navigator < "u" &&
        !((e = navigator.userAgent) === null || e === void 0) &&
        e.includes("Vercel-Edge"))
    )
      return {
        type: "unsupported",
        error:
          "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround:
          "Use serverless functions or a different deployment target for WebSocket functionality.",
      };
    const r = globalThis.process;
    if (r) {
      const n = r.versions;
      if (n && n.node) {
        const s = n.node,
          i = parseInt(s.replace(/^v/, "").split(".")[0]);
        return i >= 22
          ? typeof globalThis.WebSocket < "u"
            ? { type: "native", constructor: globalThis.WebSocket }
            : {
                type: "unsupported",
                error: `Node.js ${i} detected but native WebSocket not found.`,
                workaround:
                  "Provide a WebSocket implementation via the transport option.",
              }
          : {
              type: "unsupported",
              error: `Node.js ${i} detected without native WebSocket support.`,
              workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`,
            };
      }
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround:
        "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation.",
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor) return e.constructor;
    let r = e.error || "WebSocket not supported in this environment.";
    throw (
      (e.workaround &&
        (r += `

Suggested solution: ${e.workaround}`),
      new Error(r))
    );
  }
  static createWebSocket(e, r) {
    const n = this.getWebSocketConstructor();
    return new n(e, r);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const sT = "2.95.3",
  iT = `realtime-js/${sT}`,
  oT = "1.0.0",
  Z0 = "2.0.0",
  tm = Z0,
  cd = 1e4,
  aT = 1e3,
  lT = 100;
var Br;
(function (t) {
  (t[(t.connecting = 0)] = "connecting"),
    (t[(t.open = 1)] = "open"),
    (t[(t.closing = 2)] = "closing"),
    (t[(t.closed = 3)] = "closed");
})(Br || (Br = {}));
var Ie;
(function (t) {
  (t.closed = "closed"),
    (t.errored = "errored"),
    (t.joined = "joined"),
    (t.joining = "joining"),
    (t.leaving = "leaving");
})(Ie || (Ie = {}));
var Vt;
(function (t) {
  (t.close = "phx_close"),
    (t.error = "phx_error"),
    (t.join = "phx_join"),
    (t.reply = "phx_reply"),
    (t.leave = "phx_leave"),
    (t.access_token = "access_token");
})(Vt || (Vt = {}));
var dd;
(function (t) {
  t.websocket = "websocket";
})(dd || (dd = {}));
var In;
(function (t) {
  (t.Connecting = "connecting"),
    (t.Open = "open"),
    (t.Closing = "closing"),
    (t.Closed = "closed");
})(In || (In = {}));
class uT {
  constructor(e) {
    (this.HEADER_LENGTH = 1),
      (this.USER_BROADCAST_PUSH_META_LENGTH = 6),
      (this.KINDS = { userBroadcastPush: 3, userBroadcast: 4 }),
      (this.BINARY_ENCODING = 0),
      (this.JSON_ENCODING = 1),
      (this.BROADCAST_EVENT = "broadcast"),
      (this.allowedMetadataKeys = []),
      (this.allowedMetadataKeys = e ?? []);
  }
  encode(e, r) {
    if (
      e.event === this.BROADCAST_EVENT &&
      !(e.payload instanceof ArrayBuffer) &&
      typeof e.payload.event == "string"
    )
      return r(this._binaryEncodeUserBroadcastPush(e));
    let n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
    return r(JSON.stringify(n));
  }
  _binaryEncodeUserBroadcastPush(e) {
    var r;
    return this._isArrayBuffer(
      (r = e.payload) === null || r === void 0 ? void 0 : r.payload
    )
      ? this._encodeBinaryUserBroadcastPush(e)
      : this._encodeJsonUserBroadcastPush(e);
  }
  _encodeBinaryUserBroadcastPush(e) {
    var r, n;
    const s =
      (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
        null && n !== void 0
        ? n
        : new ArrayBuffer(0);
    return this._encodeUserBroadcastPush(e, this.BINARY_ENCODING, s);
  }
  _encodeJsonUserBroadcastPush(e) {
    var r, n;
    const s =
        (n = (r = e.payload) === null || r === void 0 ? void 0 : r.payload) !==
          null && n !== void 0
          ? n
          : {},
      o = new TextEncoder().encode(JSON.stringify(s)).buffer;
    return this._encodeUserBroadcastPush(e, this.JSON_ENCODING, o);
  }
  _encodeUserBroadcastPush(e, r, n) {
    var s, i;
    const o = e.topic,
      a = (s = e.ref) !== null && s !== void 0 ? s : "",
      l = (i = e.join_ref) !== null && i !== void 0 ? i : "",
      u = e.payload.event,
      c = this.allowedMetadataKeys
        ? this._pick(e.payload, this.allowedMetadataKeys)
        : {},
      h = Object.keys(c).length === 0 ? "" : JSON.stringify(c);
    if (l.length > 255)
      throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);
    if (a.length > 255)
      throw new Error(`ref length ${a.length} exceeds maximum of 255`);
    if (o.length > 255)
      throw new Error(`topic length ${o.length} exceeds maximum of 255`);
    if (u.length > 255)
      throw new Error(`userEvent length ${u.length} exceeds maximum of 255`);
    if (h.length > 255)
      throw new Error(`metadata length ${h.length} exceeds maximum of 255`);
    const f =
        this.USER_BROADCAST_PUSH_META_LENGTH +
        l.length +
        a.length +
        o.length +
        u.length +
        h.length,
      d = new ArrayBuffer(this.HEADER_LENGTH + f);
    let v = new DataView(d),
      p = 0;
    v.setUint8(p++, this.KINDS.userBroadcastPush),
      v.setUint8(p++, l.length),
      v.setUint8(p++, a.length),
      v.setUint8(p++, o.length),
      v.setUint8(p++, u.length),
      v.setUint8(p++, h.length),
      v.setUint8(p++, r),
      Array.from(l, (g) => v.setUint8(p++, g.charCodeAt(0))),
      Array.from(a, (g) => v.setUint8(p++, g.charCodeAt(0))),
      Array.from(o, (g) => v.setUint8(p++, g.charCodeAt(0))),
      Array.from(u, (g) => v.setUint8(p++, g.charCodeAt(0))),
      Array.from(h, (g) => v.setUint8(p++, g.charCodeAt(0)));
    var x = new Uint8Array(d.byteLength + n.byteLength);
    return (
      x.set(new Uint8Array(d), 0),
      x.set(new Uint8Array(n), d.byteLength),
      x.buffer
    );
  }
  decode(e, r) {
    if (this._isArrayBuffer(e)) {
      let n = this._binaryDecode(e);
      return r(n);
    }
    if (typeof e == "string") {
      const n = JSON.parse(e),
        [s, i, o, a, l] = n;
      return r({ join_ref: s, ref: i, topic: o, event: a, payload: l });
    }
    return r({});
  }
  _binaryDecode(e) {
    const r = new DataView(e),
      n = r.getUint8(0),
      s = new TextDecoder();
    switch (n) {
      case this.KINDS.userBroadcast:
        return this._decodeUserBroadcast(e, r, s);
    }
  }
  _decodeUserBroadcast(e, r, n) {
    const s = r.getUint8(1),
      i = r.getUint8(2),
      o = r.getUint8(3),
      a = r.getUint8(4);
    let l = this.HEADER_LENGTH + 4;
    const u = n.decode(e.slice(l, l + s));
    l = l + s;
    const c = n.decode(e.slice(l, l + i));
    l = l + i;
    const h = n.decode(e.slice(l, l + o));
    l = l + o;
    const f = e.slice(l, e.byteLength),
      d = a === this.JSON_ENCODING ? JSON.parse(n.decode(f)) : f,
      v = { type: this.BROADCAST_EVENT, event: c, payload: d };
    return (
      o > 0 && (v.meta = JSON.parse(h)),
      {
        join_ref: null,
        ref: null,
        topic: u,
        event: this.BROADCAST_EVENT,
        payload: v,
      }
    );
  }
  _isArrayBuffer(e) {
    var r;
    return (
      e instanceof ArrayBuffer ||
      ((r = e == null ? void 0 : e.constructor) === null || r === void 0
        ? void 0
        : r.name) === "ArrayBuffer"
    );
  }
  _pick(e, r) {
    return !e || typeof e != "object"
      ? {}
      : Object.fromEntries(Object.entries(e).filter(([n]) => r.includes(n)));
  }
}
class Y0 {
  constructor(e, r) {
    (this.callback = e),
      (this.timerCalc = r),
      (this.timer = void 0),
      (this.tries = 0),
      (this.callback = e),
      (this.timerCalc = r);
  }
  reset() {
    (this.tries = 0), clearTimeout(this.timer), (this.timer = void 0);
  }
  scheduleTimeout() {
    clearTimeout(this.timer),
      (this.timer = setTimeout(() => {
        (this.tries = this.tries + 1), this.callback();
      }, this.timerCalc(this.tries + 1)));
  }
}
var me;
(function (t) {
  (t.abstime = "abstime"),
    (t.bool = "bool"),
    (t.date = "date"),
    (t.daterange = "daterange"),
    (t.float4 = "float4"),
    (t.float8 = "float8"),
    (t.int2 = "int2"),
    (t.int4 = "int4"),
    (t.int4range = "int4range"),
    (t.int8 = "int8"),
    (t.int8range = "int8range"),
    (t.json = "json"),
    (t.jsonb = "jsonb"),
    (t.money = "money"),
    (t.numeric = "numeric"),
    (t.oid = "oid"),
    (t.reltime = "reltime"),
    (t.text = "text"),
    (t.time = "time"),
    (t.timestamp = "timestamp"),
    (t.timestamptz = "timestamptz"),
    (t.timetz = "timetz"),
    (t.tsrange = "tsrange"),
    (t.tstzrange = "tstzrange");
})(me || (me = {}));
const rm = (t, e, r = {}) => {
    var n;
    const s = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
    return e
      ? Object.keys(e).reduce((i, o) => ((i[o] = cT(o, t, e, s)), i), {})
      : {};
  },
  cT = (t, e, r, n) => {
    const s = e.find((a) => a.name === t),
      i = s == null ? void 0 : s.type,
      o = r[t];
    return i && !n.includes(i) ? X0(i, o) : hd(o);
  },
  X0 = (t, e) => {
    if (t.charAt(0) === "_") {
      const r = t.slice(1, t.length);
      return pT(e, r);
    }
    switch (t) {
      case me.bool:
        return dT(e);
      case me.float4:
      case me.float8:
      case me.int2:
      case me.int4:
      case me.int8:
      case me.numeric:
      case me.oid:
        return hT(e);
      case me.json:
      case me.jsonb:
        return fT(e);
      case me.timestamp:
        return mT(e);
      case me.abstime:
      case me.date:
      case me.daterange:
      case me.int4range:
      case me.int8range:
      case me.money:
      case me.reltime:
      case me.text:
      case me.time:
      case me.timestamptz:
      case me.timetz:
      case me.tsrange:
      case me.tstzrange:
        return hd(e);
      default:
        return hd(e);
    }
  },
  hd = (t) => t,
  dT = (t) => {
    switch (t) {
      case "t":
        return !0;
      case "f":
        return !1;
      default:
        return t;
    }
  },
  hT = (t) => {
    if (typeof t == "string") {
      const e = parseFloat(t);
      if (!Number.isNaN(e)) return e;
    }
    return t;
  },
  fT = (t) => {
    if (typeof t == "string")
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    return t;
  },
  pT = (t, e) => {
    if (typeof t != "string") return t;
    const r = t.length - 1,
      n = t[r];
    if (t[0] === "{" && n === "}") {
      let i;
      const o = t.slice(1, r);
      try {
        i = JSON.parse("[" + o + "]");
      } catch {
        i = o ? o.split(",") : [];
      }
      return i.map((a) => X0(e, a));
    }
    return t;
  },
  mT = (t) => (typeof t == "string" ? t.replace(" ", "T") : t),
  ew = (t) => {
    const e = new URL(t);
    return (
      (e.protocol = e.protocol.replace(/^ws/i, "http")),
      (e.pathname = e.pathname
        .replace(/\/+$/, "")
        .replace(/\/socket\/websocket$/i, "")
        .replace(/\/socket$/i, "")
        .replace(/\/websocket$/i, "")),
      e.pathname === "" || e.pathname === "/"
        ? (e.pathname = "/api/broadcast")
        : (e.pathname = e.pathname + "/api/broadcast"),
      e.href
    );
  };
class Hu {
  constructor(e, r, n = {}, s = cd) {
    (this.channel = e),
      (this.event = r),
      (this.payload = n),
      (this.timeout = s),
      (this.sent = !1),
      (this.timeoutTimer = void 0),
      (this.ref = ""),
      (this.receivedResp = null),
      (this.recHooks = []),
      (this.refEvent = null);
  }
  resend(e) {
    (this.timeout = e),
      this._cancelRefEvent(),
      (this.ref = ""),
      (this.refEvent = null),
      (this.receivedResp = null),
      (this.sent = !1),
      this.send();
  }
  send() {
    this._hasReceived("timeout") ||
      (this.startTimeout(),
      (this.sent = !0),
      this.channel.socket.push({
        topic: this.channel.topic,
        event: this.event,
        payload: this.payload,
        ref: this.ref,
        join_ref: this.channel._joinRef(),
      }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, r) {
    var n;
    return (
      this._hasReceived(e) &&
        r(
          (n = this.receivedResp) === null || n === void 0 ? void 0 : n.response
        ),
      this.recHooks.push({ status: e, callback: r }),
      this
    );
  }
  startTimeout() {
    if (this.timeoutTimer) return;
    (this.ref = this.channel.socket._makeRef()),
      (this.refEvent = this.channel._replyEventName(this.ref));
    const e = (r) => {
      this._cancelRefEvent(),
        this._cancelTimeout(),
        (this.receivedResp = r),
        this._matchReceive(r);
    };
    this.channel._on(this.refEvent, {}, e),
      (this.timeoutTimer = setTimeout(() => {
        this.trigger("timeout", {});
      }, this.timeout));
  }
  trigger(e, r) {
    this.refEvent &&
      this.channel._trigger(this.refEvent, { status: e, response: r });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
  }
  _matchReceive({ status: e, response: r }) {
    this.recHooks.filter((n) => n.status === e).forEach((n) => n.callback(r));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var nm;
(function (t) {
  (t.SYNC = "sync"), (t.JOIN = "join"), (t.LEAVE = "leave");
})(nm || (nm = {}));
class Qi {
  constructor(e, r) {
    (this.channel = e),
      (this.state = {}),
      (this.pendingDiffs = []),
      (this.joinRef = null),
      (this.enabled = !1),
      (this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
    const n = (r == null ? void 0 : r.events) || {
      state: "presence_state",
      diff: "presence_diff",
    };
    this.channel._on(n.state, {}, (s) => {
      const { onJoin: i, onLeave: o, onSync: a } = this.caller;
      (this.joinRef = this.channel._joinRef()),
        (this.state = Qi.syncState(this.state, s, i, o)),
        this.pendingDiffs.forEach((l) => {
          this.state = Qi.syncDiff(this.state, l, i, o);
        }),
        (this.pendingDiffs = []),
        a();
    }),
      this.channel._on(n.diff, {}, (s) => {
        const { onJoin: i, onLeave: o, onSync: a } = this.caller;
        this.inPendingSyncState()
          ? this.pendingDiffs.push(s)
          : ((this.state = Qi.syncDiff(this.state, s, i, o)), a());
      }),
      this.onJoin((s, i, o) => {
        this.channel._trigger("presence", {
          event: "join",
          key: s,
          currentPresences: i,
          newPresences: o,
        });
      }),
      this.onLeave((s, i, o) => {
        this.channel._trigger("presence", {
          event: "leave",
          key: s,
          currentPresences: i,
          leftPresences: o,
        });
      }),
      this.onSync(() => {
        this.channel._trigger("presence", { event: "sync" });
      });
  }
  static syncState(e, r, n, s) {
    const i = this.cloneDeep(e),
      o = this.transformState(r),
      a = {},
      l = {};
    return (
      this.map(i, (u, c) => {
        o[u] || (l[u] = c);
      }),
      this.map(o, (u, c) => {
        const h = i[u];
        if (h) {
          const f = c.map((x) => x.presence_ref),
            d = h.map((x) => x.presence_ref),
            v = c.filter((x) => d.indexOf(x.presence_ref) < 0),
            p = h.filter((x) => f.indexOf(x.presence_ref) < 0);
          v.length > 0 && (a[u] = v), p.length > 0 && (l[u] = p);
        } else a[u] = c;
      }),
      this.syncDiff(i, { joins: a, leaves: l }, n, s)
    );
  }
  static syncDiff(e, r, n, s) {
    const { joins: i, leaves: o } = {
      joins: this.transformState(r.joins),
      leaves: this.transformState(r.leaves),
    };
    return (
      n || (n = () => {}),
      s || (s = () => {}),
      this.map(i, (a, l) => {
        var u;
        const c = (u = e[a]) !== null && u !== void 0 ? u : [];
        if (((e[a] = this.cloneDeep(l)), c.length > 0)) {
          const h = e[a].map((d) => d.presence_ref),
            f = c.filter((d) => h.indexOf(d.presence_ref) < 0);
          e[a].unshift(...f);
        }
        n(a, c, l);
      }),
      this.map(o, (a, l) => {
        let u = e[a];
        if (!u) return;
        const c = l.map((h) => h.presence_ref);
        (u = u.filter((h) => c.indexOf(h.presence_ref) < 0)),
          (e[a] = u),
          s(a, u, l),
          u.length === 0 && delete e[a];
      }),
      e
    );
  }
  static map(e, r) {
    return Object.getOwnPropertyNames(e).map((n) => r(n, e[n]));
  }
  static transformState(e) {
    return (
      (e = this.cloneDeep(e)),
      Object.getOwnPropertyNames(e).reduce((r, n) => {
        const s = e[n];
        return (
          "metas" in s
            ? (r[n] = s.metas.map(
                (i) => (
                  (i.presence_ref = i.phx_ref),
                  delete i.phx_ref,
                  delete i.phx_ref_prev,
                  i
                )
              ))
            : (r[n] = s),
          r
        );
      }, {})
    );
  }
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  onJoin(e) {
    this.caller.onJoin = e;
  }
  onLeave(e) {
    this.caller.onLeave = e;
  }
  onSync(e) {
    this.caller.onSync = e;
  }
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var sm;
(function (t) {
  (t.ALL = "*"),
    (t.INSERT = "INSERT"),
    (t.UPDATE = "UPDATE"),
    (t.DELETE = "DELETE");
})(sm || (sm = {}));
var Ji;
(function (t) {
  (t.BROADCAST = "broadcast"),
    (t.PRESENCE = "presence"),
    (t.POSTGRES_CHANGES = "postgres_changes"),
    (t.SYSTEM = "system");
})(Ji || (Ji = {}));
var mr;
(function (t) {
  (t.SUBSCRIBED = "SUBSCRIBED"),
    (t.TIMED_OUT = "TIMED_OUT"),
    (t.CLOSED = "CLOSED"),
    (t.CHANNEL_ERROR = "CHANNEL_ERROR");
})(mr || (mr = {}));
class Is {
  constructor(e, r = { config: {} }, n) {
    var s, i;
    if (
      ((this.topic = e),
      (this.params = r),
      (this.socket = n),
      (this.bindings = {}),
      (this.state = Ie.closed),
      (this.joinedOnce = !1),
      (this.pushBuffer = []),
      (this.subTopic = e.replace(/^realtime:/i, "")),
      (this.params.config = Object.assign(
        {
          broadcast: { ack: !1, self: !1 },
          presence: { key: "", enabled: !1 },
          private: !1,
        },
        r.config
      )),
      (this.timeout = this.socket.timeout),
      (this.joinPush = new Hu(this, Vt.join, this.params, this.timeout)),
      (this.rejoinTimer = new Y0(
        () => this._rejoinUntilConnected(),
        this.socket.reconnectAfterMs
      )),
      this.joinPush.receive("ok", () => {
        (this.state = Ie.joined),
          this.rejoinTimer.reset(),
          this.pushBuffer.forEach((o) => o.send()),
          (this.pushBuffer = []);
      }),
      this._onClose(() => {
        this.rejoinTimer.reset(),
          this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
          (this.state = Ie.closed),
          this.socket._remove(this);
      }),
      this._onError((o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = Ie.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("timeout", () => {
        this._isJoining() &&
          (this.socket.log(
            "channel",
            `timeout ${this.topic}`,
            this.joinPush.timeout
          ),
          (this.state = Ie.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this.joinPush.receive("error", (o) => {
        this._isLeaving() ||
          this._isClosed() ||
          (this.socket.log("channel", `error ${this.topic}`, o),
          (this.state = Ie.errored),
          this.rejoinTimer.scheduleTimeout());
      }),
      this._on(Vt.reply, {}, (o, a) => {
        this._trigger(this._replyEventName(a), o);
      }),
      (this.presence = new Qi(this)),
      (this.broadcastEndpointURL = ew(this.socket.endPoint)),
      (this.private = this.params.config.private || !1),
      !this.private &&
        !(
          (i =
            (s = this.params.config) === null || s === void 0
              ? void 0
              : s.broadcast) === null || i === void 0
        ) &&
        i.replay)
    )
      throw `tried to use replay on public channel '${this.topic}'. It must be a private channel.`;
  }
  subscribe(e, r = this.timeout) {
    var n, s, i;
    if (
      (this.socket.isConnected() || this.socket.connect(),
      this.state == Ie.closed)
    ) {
      const {
          config: { broadcast: o, presence: a, private: l },
        } = this.params,
        u =
          (s =
            (n = this.bindings.postgres_changes) === null || n === void 0
              ? void 0
              : n.map((d) => d.filter)) !== null && s !== void 0
            ? s
            : [],
        c =
          (!!this.bindings[Ji.PRESENCE] &&
            this.bindings[Ji.PRESENCE].length > 0) ||
          ((i = this.params.config.presence) === null || i === void 0
            ? void 0
            : i.enabled) === !0,
        h = {},
        f = {
          broadcast: o,
          presence: Object.assign(Object.assign({}, a), { enabled: c }),
          postgres_changes: u,
          private: l,
        };
      this.socket.accessTokenValue &&
        (h.access_token = this.socket.accessTokenValue),
        this._onError((d) => (e == null ? void 0 : e(mr.CHANNEL_ERROR, d))),
        this._onClose(() => (e == null ? void 0 : e(mr.CLOSED))),
        this.updateJoinPayload(Object.assign({ config: f }, h)),
        (this.joinedOnce = !0),
        this._rejoin(r),
        this.joinPush
          .receive("ok", async ({ postgres_changes: d }) => {
            var v;
            if (
              (this.socket._isManualToken() || this.socket.setAuth(),
              d === void 0)
            ) {
              e == null || e(mr.SUBSCRIBED);
              return;
            } else {
              const p = this.bindings.postgres_changes,
                x =
                  (v = p == null ? void 0 : p.length) !== null && v !== void 0
                    ? v
                    : 0,
                g = [];
              for (let m = 0; m < x; m++) {
                const y = p[m],
                  {
                    filter: { event: _, schema: S, table: E, filter: k },
                  } = y,
                  C = d && d[m];
                if (
                  C &&
                  C.event === _ &&
                  Is.isFilterValueEqual(C.schema, S) &&
                  Is.isFilterValueEqual(C.table, E) &&
                  Is.isFilterValueEqual(C.filter, k)
                )
                  g.push(Object.assign(Object.assign({}, y), { id: C.id }));
                else {
                  this.unsubscribe(),
                    (this.state = Ie.errored),
                    e == null ||
                      e(
                        mr.CHANNEL_ERROR,
                        new Error(
                          "mismatch between server and client bindings for postgres changes"
                        )
                      );
                  return;
                }
              }
              (this.bindings.postgres_changes = g), e && e(mr.SUBSCRIBED);
              return;
            }
          })
          .receive("error", (d) => {
            (this.state = Ie.errored),
              e == null ||
                e(
                  mr.CHANNEL_ERROR,
                  new Error(
                    JSON.stringify(Object.values(d).join(", ") || "error")
                  )
                );
          })
          .receive("timeout", () => {
            e == null || e(mr.TIMED_OUT);
          });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, r = {}) {
    return await this.send(
      { type: "presence", event: "track", payload: e },
      r.timeout || this.timeout
    );
  }
  async untrack(e = {}) {
    return await this.send({ type: "presence", event: "untrack" }, e);
  }
  on(e, r, n) {
    return (
      this.state === Ie.joined &&
        e === Ji.PRESENCE &&
        (this.socket.log(
          "channel",
          `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`
        ),
        this.unsubscribe().then(async () => await this.subscribe())),
      this._on(e, r, n)
    );
  }
  async httpSend(e, r, n = {}) {
    var s;
    if (r == null) return Promise.reject("Payload is required for httpSend()");
    const i = {
      apikey: this.socket.apiKey ? this.socket.apiKey : "",
      "Content-Type": "application/json",
    };
    this.socket.accessTokenValue &&
      (i.Authorization = `Bearer ${this.socket.accessTokenValue}`);
    const o = {
        method: "POST",
        headers: i,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: e,
              payload: r,
              private: this.private,
            },
          ],
        }),
      },
      a = await this._fetchWithTimeout(
        this.broadcastEndpointURL,
        o,
        (s = n.timeout) !== null && s !== void 0 ? s : this.timeout
      );
    if (a.status === 202) return { success: !0 };
    let l = a.statusText;
    try {
      const u = await a.json();
      l = u.error || u.message || l;
    } catch {}
    return Promise.reject(new Error(l));
  }
  async send(e, r = {}) {
    var n, s;
    if (!this._canPush() && e.type === "broadcast") {
      console.warn(
        "Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery."
      );
      const { event: i, payload: o } = e,
        a = {
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json",
        };
      this.socket.accessTokenValue &&
        (a.Authorization = `Bearer ${this.socket.accessTokenValue}`);
      const l = {
        method: "POST",
        headers: a,
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: i,
              payload: o,
              private: this.private,
            },
          ],
        }),
      };
      try {
        const u = await this._fetchWithTimeout(
          this.broadcastEndpointURL,
          l,
          (n = r.timeout) !== null && n !== void 0 ? n : this.timeout
        );
        return (
          await ((s = u.body) === null || s === void 0 ? void 0 : s.cancel()),
          u.ok ? "ok" : "error"
        );
      } catch (u) {
        return u.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((i) => {
        var o, a, l;
        const u = this._push(e.type, e, r.timeout || this.timeout);
        e.type === "broadcast" &&
          !(
            !(
              (l =
                (a =
                  (o = this.params) === null || o === void 0
                    ? void 0
                    : o.config) === null || a === void 0
                  ? void 0
                  : a.broadcast) === null || l === void 0
            ) && l.ack
          ) &&
          i("ok"),
          u.receive("ok", () => i("ok")),
          u.receive("error", () => i("error")),
          u.receive("timeout", () => i("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  unsubscribe(e = this.timeout) {
    this.state = Ie.leaving;
    const r = () => {
      this.socket.log("channel", `leave ${this.topic}`),
        this._trigger(Vt.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((s) => {
      (n = new Hu(this, Vt.leave, {}, e)),
        n
          .receive("ok", () => {
            r(), s("ok");
          })
          .receive("timeout", () => {
            r(), s("timed out");
          })
          .receive("error", () => {
            s("error");
          }),
        n.send(),
        this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n == null || n.destroy();
    });
  }
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()),
      (this.pushBuffer = []),
      this.rejoinTimer.reset(),
      this.joinPush.destroy(),
      (this.state = Ie.closed),
      (this.bindings = {});
  }
  async _fetchWithTimeout(e, r, n) {
    const s = new AbortController(),
      i = setTimeout(() => s.abort(), n),
      o = await this.socket.fetch(
        e,
        Object.assign(Object.assign({}, r), { signal: s.signal })
      );
    return clearTimeout(i), o;
  }
  _push(e, r, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let s = new Hu(this, e, r, n);
    return this._canPush() ? s.send() : this._addToPushBuffer(s), s;
  }
  _addToPushBuffer(e) {
    if (
      (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > lT)
    ) {
      const r = this.pushBuffer.shift();
      r &&
        (r.destroy(),
        this.socket.log(
          "channel",
          `discarded push due to buffer overflow: ${r.event}`,
          r.payload
        ));
    }
  }
  _onMessage(e, r, n) {
    return r;
  }
  _isMember(e) {
    return this.topic === e;
  }
  _joinRef() {
    return this.joinPush.ref;
  }
  _trigger(e, r, n) {
    var s, i;
    const o = e.toLocaleLowerCase(),
      { close: a, error: l, leave: u, join: c } = Vt;
    if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef()) return;
    let f = this._onMessage(o, r, n);
    if (r && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o)
      ? (s = this.bindings.postgres_changes) === null ||
        s === void 0 ||
        s
          .filter((d) => {
            var v, p, x;
            return (
              ((v = d.filter) === null || v === void 0 ? void 0 : v.event) ===
                "*" ||
              ((x =
                (p = d.filter) === null || p === void 0 ? void 0 : p.event) ===
                null || x === void 0
                ? void 0
                : x.toLocaleLowerCase()) === o
            );
          })
          .map((d) => d.callback(f, n))
      : (i = this.bindings[o]) === null ||
        i === void 0 ||
        i
          .filter((d) => {
            var v, p, x, g, m, y;
            if (["broadcast", "presence", "postgres_changes"].includes(o))
              if ("id" in d) {
                const _ = d.id,
                  S =
                    (v = d.filter) === null || v === void 0 ? void 0 : v.event;
                return (
                  _ &&
                  ((p = r.ids) === null || p === void 0
                    ? void 0
                    : p.includes(_)) &&
                  (S === "*" ||
                    (S == null ? void 0 : S.toLocaleLowerCase()) ===
                      ((x = r.data) === null || x === void 0
                        ? void 0
                        : x.type.toLocaleLowerCase()))
                );
              } else {
                const _ =
                  (m =
                    (g = d == null ? void 0 : d.filter) === null || g === void 0
                      ? void 0
                      : g.event) === null || m === void 0
                    ? void 0
                    : m.toLocaleLowerCase();
                return (
                  _ === "*" ||
                  _ ===
                    ((y = r == null ? void 0 : r.event) === null || y === void 0
                      ? void 0
                      : y.toLocaleLowerCase())
                );
              }
            else return d.type.toLocaleLowerCase() === o;
          })
          .map((d) => {
            if (typeof f == "object" && "ids" in f) {
              const v = f.data,
                {
                  schema: p,
                  table: x,
                  commit_timestamp: g,
                  type: m,
                  errors: y,
                } = v;
              f = Object.assign(
                Object.assign(
                  {},
                  {
                    schema: p,
                    table: x,
                    commit_timestamp: g,
                    eventType: m,
                    new: {},
                    old: {},
                    errors: y,
                  }
                ),
                this._getPayloadRecords(v)
              );
            }
            d.callback(f, n);
          });
  }
  _isClosed() {
    return this.state === Ie.closed;
  }
  _isJoined() {
    return this.state === Ie.joined;
  }
  _isJoining() {
    return this.state === Ie.joining;
  }
  _isLeaving() {
    return this.state === Ie.leaving;
  }
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  _on(e, r, n) {
    const s = e.toLocaleLowerCase(),
      i = { type: s, filter: r, callback: n };
    return (
      this.bindings[s] ? this.bindings[s].push(i) : (this.bindings[s] = [i]),
      this
    );
  }
  _off(e, r) {
    const n = e.toLocaleLowerCase();
    return (
      this.bindings[n] &&
        (this.bindings[n] = this.bindings[n].filter((s) => {
          var i;
          return !(
            ((i = s.type) === null || i === void 0
              ? void 0
              : i.toLocaleLowerCase()) === n && Is.isEqual(s.filter, r)
          );
        })),
      this
    );
  }
  static isEqual(e, r) {
    if (Object.keys(e).length !== Object.keys(r).length) return !1;
    for (const n in e) if (e[n] !== r[n]) return !1;
    return !0;
  }
  static isFilterValueEqual(e, r) {
    return (e ?? void 0) === (r ?? void 0);
  }
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(),
      this.socket.isConnected() && this._rejoin();
  }
  _onClose(e) {
    this._on(Vt.close, {}, e);
  }
  _onError(e) {
    this._on(Vt.error, {}, (r) => e(r));
  }
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  _rejoin(e = this.timeout) {
    this._isLeaving() ||
      (this.socket._leaveOpenTopic(this.topic),
      (this.state = Ie.joining),
      this.joinPush.resend(e));
  }
  _getPayloadRecords(e) {
    const r = { new: {}, old: {} };
    return (
      (e.type === "INSERT" || e.type === "UPDATE") &&
        (r.new = rm(e.columns, e.record)),
      (e.type === "UPDATE" || e.type === "DELETE") &&
        (r.old = rm(e.columns, e.old_record)),
      r
    );
  }
}
const qu = () => {},
  wa = {
    HEARTBEAT_INTERVAL: 25e3,
    RECONNECT_DELAY: 10,
    HEARTBEAT_TIMEOUT_FALLBACK: 100,
  },
  gT = [1e3, 2e3, 5e3, 1e4],
  yT = 1e4,
  vT = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class wT {
  constructor(e, r) {
    var n;
    if (
      ((this.accessTokenValue = null),
      (this.apiKey = null),
      (this._manuallySetToken = !1),
      (this.channels = new Array()),
      (this.endPoint = ""),
      (this.httpEndpoint = ""),
      (this.headers = {}),
      (this.params = {}),
      (this.timeout = cd),
      (this.transport = null),
      (this.heartbeatIntervalMs = wa.HEARTBEAT_INTERVAL),
      (this.heartbeatTimer = void 0),
      (this.pendingHeartbeatRef = null),
      (this.heartbeatCallback = qu),
      (this.ref = 0),
      (this.reconnectTimer = null),
      (this.vsn = tm),
      (this.logger = qu),
      (this.conn = null),
      (this.sendBuffer = []),
      (this.serializer = new uT()),
      (this.stateChangeCallbacks = {
        open: [],
        close: [],
        error: [],
        message: [],
      }),
      (this.accessToken = null),
      (this._connectionState = "disconnected"),
      (this._wasManualDisconnect = !1),
      (this._authPromise = null),
      (this._heartbeatSentAt = null),
      (this._resolveFetch = (s) =>
        s ? (...i) => s(...i) : (...i) => fetch(...i)),
      !(
        !((n = r == null ? void 0 : r.params) === null || n === void 0) &&
        n.apikey
      ))
    )
      throw new Error("API key is required to connect to Realtime");
    (this.apiKey = r.params.apikey),
      (this.endPoint = `${e}/${dd.websocket}`),
      (this.httpEndpoint = ew(e)),
      this._initializeOptions(r),
      this._setupReconnectionTimer(),
      (this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch));
  }
  connect() {
    if (
      !(
        this.isConnecting() ||
        this.isDisconnecting() ||
        (this.conn !== null && this.isConnected())
      )
    ) {
      if (
        (this._setConnectionState("connecting"),
        this.accessToken &&
          !this._authPromise &&
          this._setAuthSafely("connect"),
        this.transport)
      )
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = nT.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const r = e.message;
          throw r.includes("Node.js")
            ? new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`)
            : new Error(`WebSocket not available: ${r}`);
        }
      this._setupConnectionHandlers();
    }
  }
  endpointURL() {
    return this._appendParams(
      this.endPoint,
      Object.assign({}, this.params, { vsn: this.vsn })
    );
  }
  disconnect(e, r) {
    if (!this.isDisconnecting())
      if ((this._setConnectionState("disconnecting", !0), this.conn)) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        (this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }),
          typeof this.conn.close == "function" &&
            (e ? this.conn.close(e, r ?? "") : this.conn.close()),
          this._teardownConnection();
      } else this._setConnectionState("disconnected");
  }
  getChannels() {
    return this.channels;
  }
  async removeChannel(e) {
    const r = await e.unsubscribe();
    return (
      r === "ok" && this._remove(e),
      this.channels.length === 0 && this.disconnect(),
      r
    );
  }
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((r) => r.unsubscribe()));
    return (this.channels = []), this.disconnect(), e;
  }
  log(e, r, n) {
    this.logger(e, r, n);
  }
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Br.connecting:
        return In.Connecting;
      case Br.open:
        return In.Open;
      case Br.closing:
        return In.Closing;
      default:
        return In.Closed;
    }
  }
  isConnected() {
    return this.connectionState() === In.Open;
  }
  isConnecting() {
    return this._connectionState === "connecting";
  }
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, r = { config: {} }) {
    const n = `realtime:${e}`,
      s = this.getChannels().find((i) => i.topic === n);
    if (s) return s;
    {
      const i = new Is(`realtime:${e}`, r, this);
      return this.channels.push(i), i;
    }
  }
  push(e) {
    const { topic: r, event: n, payload: s, ref: i } = e,
      o = () => {
        this.encode(e, (a) => {
          var l;
          (l = this.conn) === null || l === void 0 || l.send(a);
        });
      };
    this.log("push", `${r} ${n} (${i})`, s),
      this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  _isManualToken() {
    return this._manuallySetToken;
  }
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      (this.pendingHeartbeatRef = null),
        (this._heartbeatSentAt = null),
        this.log(
          "transport",
          "heartbeat timeout. Attempting to re-establish connection"
        );
      try {
        this.heartbeatCallback("timeout");
      } catch (r) {
        this.log("error", "error in heartbeat callback", r);
      }
      (this._wasManualDisconnect = !1),
        (e = this.conn) === null ||
          e === void 0 ||
          e.close(aT, "heartbeat timeout"),
        setTimeout(() => {
          var r;
          this.isConnected() ||
            (r = this.reconnectTimer) === null ||
            r === void 0 ||
            r.scheduleTimeout();
        }, wa.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    (this._heartbeatSentAt = Date.now()),
      (this.pendingHeartbeatRef = this._makeRef()),
      this.push({
        topic: "phoenix",
        event: "heartbeat",
        payload: {},
        ref: this.pendingHeartbeatRef,
      });
    try {
      this.heartbeatCallback("sent");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  flushSendBuffer() {
    this.isConnected() &&
      this.sendBuffer.length > 0 &&
      (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
  }
  _makeRef() {
    let e = this.ref + 1;
    return (
      e === this.ref ? (this.ref = 0) : (this.ref = e), this.ref.toString()
    );
  }
  _leaveOpenTopic(e) {
    let r = this.channels.find(
      (n) => n.topic === e && (n._isJoined() || n._isJoining())
    );
    r &&
      (this.log("transport", `leaving duplicate topic "${e}"`),
      r.unsubscribe());
  }
  _remove(e) {
    this.channels = this.channels.filter((r) => r.topic !== e.topic);
  }
  _onConnMessage(e) {
    this.decode(e.data, (r) => {
      if (
        r.topic === "phoenix" &&
        r.event === "phx_reply" &&
        r.ref &&
        r.ref === this.pendingHeartbeatRef
      ) {
        const u = this._heartbeatSentAt
          ? Date.now() - this._heartbeatSentAt
          : void 0;
        try {
          this.heartbeatCallback(r.payload.status === "ok" ? "ok" : "error", u);
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
        (this._heartbeatSentAt = null), (this.pendingHeartbeatRef = null);
      }
      const { topic: n, event: s, payload: i, ref: o } = r,
        a = o ? `(${o})` : "",
        l = i.status || "";
      this.log("receive", `${l} ${n} ${s} ${a}`.trim(), i),
        this.channels
          .filter((u) => u._isMember(n))
          .forEach((u) => u._trigger(s, i, o)),
        this._triggerStateCallbacks("message", r);
    });
  }
  _clearTimer(e) {
    var r;
    e === "heartbeat" && this.heartbeatTimer
      ? (clearInterval(this.heartbeatTimer), (this.heartbeatTimer = void 0))
      : e === "reconnect" &&
        ((r = this.reconnectTimer) === null || r === void 0 || r.reset());
  }
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  _setupConnectionHandlers() {
    this.conn &&
      ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"),
      (this.conn.onopen = () => this._onConnOpen()),
      (this.conn.onerror = (e) => this._onConnError(e)),
      (this.conn.onmessage = (e) => this._onConnMessage(e)),
      (this.conn.onclose = (e) => this._onConnClose(e)),
      this.conn.readyState === Br.open && this._onConnOpen());
  }
  _teardownConnection() {
    if (this.conn) {
      if (
        this.conn.readyState === Br.open ||
        this.conn.readyState === Br.connecting
      )
        try {
          this.conn.close();
        } catch (e) {
          this.log("error", "Error closing connection", e);
        }
      (this.conn.onopen = null),
        (this.conn.onerror = null),
        (this.conn.onmessage = null),
        (this.conn.onclose = null),
        (this.conn = null);
    }
    this._clearAllTimers(),
      this._terminateWorker(),
      this.channels.forEach((e) => e.teardown());
  }
  _onConnOpen() {
    this._setConnectionState("connected"),
      this.log("transport", `connected to ${this.endpointURL()}`),
      (
        this._authPromise ||
        (this.accessToken && !this.accessTokenValue
          ? this.setAuth()
          : Promise.resolve())
      )
        .then(() => {
          this.flushSendBuffer();
        })
        .catch((r) => {
          this.log("error", "error waiting for auth on connect", r),
            this.flushSendBuffer();
        }),
      this._clearTimer("reconnect"),
      this.worker
        ? this.workerRef || this._startWorkerHeartbeat()
        : this._startHeartbeat(),
      this._triggerStateCallbacks("open");
  }
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer),
      (this.heartbeatTimer = setInterval(
        () => this.sendHeartbeat(),
        this.heartbeatIntervalMs
      ));
  }
  _startWorkerHeartbeat() {
    this.workerUrl
      ? this.log("worker", `starting worker for from ${this.workerUrl}`)
      : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    (this.workerRef = new Worker(e)),
      (this.workerRef.onerror = (r) => {
        this.log("worker", "worker error", r.message), this._terminateWorker();
      }),
      (this.workerRef.onmessage = (r) => {
        r.data.event === "keepAlive" && this.sendHeartbeat();
      }),
      this.workerRef.postMessage({
        event: "start",
        interval: this.heartbeatIntervalMs,
      });
  }
  _terminateWorker() {
    this.workerRef &&
      (this.log("worker", "terminating worker"),
      this.workerRef.terminate(),
      (this.workerRef = void 0));
  }
  _onConnClose(e) {
    var r;
    this._setConnectionState("disconnected"),
      this.log("transport", "close", e),
      this._triggerChanError(),
      this._clearTimer("heartbeat"),
      this._wasManualDisconnect ||
        (r = this.reconnectTimer) === null ||
        r === void 0 ||
        r.scheduleTimeout(),
      this._triggerStateCallbacks("close", e);
  }
  _onConnError(e) {
    this._setConnectionState("disconnected"),
      this.log("transport", `${e}`),
      this._triggerChanError(),
      this._triggerStateCallbacks("error", e);
    try {
      this.heartbeatCallback("error");
    } catch (r) {
      this.log("error", "error in heartbeat callback", r);
    }
  }
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Vt.error));
  }
  _appendParams(e, r) {
    if (Object.keys(r).length === 0) return e;
    const n = e.match(/\?/) ? "&" : "?",
      s = new URLSearchParams(r);
    return `${e}${n}${s}`;
  }
  _workerObjectUrl(e) {
    let r;
    if (e) r = e;
    else {
      const n = new Blob([vT], { type: "application/javascript" });
      r = URL.createObjectURL(n);
    }
    return r;
  }
  _setConnectionState(e, r = !1) {
    (this._connectionState = e),
      e === "connecting"
        ? (this._wasManualDisconnect = !1)
        : e === "disconnecting" && (this._wasManualDisconnect = r);
  }
  async _performAuth(e = null) {
    let r,
      n = !1;
    if (e) (r = e), (n = !0);
    else if (this.accessToken)
      try {
        r = await this.accessToken();
      } catch (s) {
        this.log("error", "Error fetching access token from callback", s),
          (r = this.accessTokenValue);
      }
    else r = this.accessTokenValue;
    n
      ? (this._manuallySetToken = !0)
      : this.accessToken && (this._manuallySetToken = !1),
      this.accessTokenValue != r &&
        ((this.accessTokenValue = r),
        this.channels.forEach((s) => {
          const i = { access_token: r, version: iT };
          r && s.updateJoinPayload(i),
            s.joinedOnce &&
              s._isJoined() &&
              s._push(Vt.access_token, { access_token: r });
        }));
  }
  async _waitForAuthIfNeeded() {
    this._authPromise && (await this._authPromise);
  }
  _setAuthSafely(e = "general") {
    this._isManualToken() ||
      this.setAuth().catch((r) => {
        this.log("error", `Error setting auth in ${e}`, r);
      });
  }
  _triggerStateCallbacks(e, r) {
    try {
      this.stateChangeCallbacks[e].forEach((n) => {
        try {
          n(r);
        } catch (s) {
          this.log("error", `error in ${e} callback`, s);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${e} callbacks`, n);
    }
  }
  _setupReconnectionTimer() {
    this.reconnectTimer = new Y0(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, wa.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  _initializeOptions(e) {
    var r, n, s, i, o, a, l, u, c, h, f, d;
    switch (
      ((this.transport =
        (r = e == null ? void 0 : e.transport) !== null && r !== void 0
          ? r
          : null),
      (this.timeout =
        (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : cd),
      (this.heartbeatIntervalMs =
        (s = e == null ? void 0 : e.heartbeatIntervalMs) !== null &&
        s !== void 0
          ? s
          : wa.HEARTBEAT_INTERVAL),
      (this.worker =
        (i = e == null ? void 0 : e.worker) !== null && i !== void 0 ? i : !1),
      (this.accessToken =
        (o = e == null ? void 0 : e.accessToken) !== null && o !== void 0
          ? o
          : null),
      (this.heartbeatCallback =
        (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0
          ? a
          : qu),
      (this.vsn =
        (l = e == null ? void 0 : e.vsn) !== null && l !== void 0 ? l : tm),
      e != null && e.params && (this.params = e.params),
      e != null && e.logger && (this.logger = e.logger),
      ((e != null && e.logLevel) || (e != null && e.log_level)) &&
        ((this.logLevel = e.logLevel || e.log_level),
        (this.params = Object.assign(Object.assign({}, this.params), {
          log_level: this.logLevel,
        }))),
      (this.reconnectAfterMs =
        (u = e == null ? void 0 : e.reconnectAfterMs) !== null && u !== void 0
          ? u
          : (v) => gT[v - 1] || yT),
      this.vsn)
    ) {
      case oT:
        (this.encode =
          (c = e == null ? void 0 : e.encode) !== null && c !== void 0
            ? c
            : (v, p) => p(JSON.stringify(v))),
          (this.decode =
            (h = e == null ? void 0 : e.decode) !== null && h !== void 0
              ? h
              : (v, p) => p(JSON.parse(v)));
        break;
      case Z0:
        (this.encode =
          (f = e == null ? void 0 : e.encode) !== null && f !== void 0
            ? f
            : this.serializer.encode.bind(this.serializer)),
          (this.decode =
            (d = e == null ? void 0 : e.decode) !== null && d !== void 0
              ? d
              : this.serializer.decode.bind(this.serializer));
        break;
      default:
        throw new Error(`Unsupported serializer version: ${this.vsn}`);
    }
    if (this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
var ko = class extends Error {
  constructor(t, e) {
    var r;
    super(t),
      (this.name = "IcebergError"),
      (this.status = e.status),
      (this.icebergType = e.icebergType),
      (this.icebergCode = e.icebergCode),
      (this.details = e.details),
      (this.isCommitStateUnknown =
        e.icebergType === "CommitStateUnknownException" ||
        ([500, 502, 504].includes(e.status) &&
          ((r = e.icebergType) == null ? void 0 : r.includes("CommitState")) ===
            !0));
  }
  isNotFound() {
    return this.status === 404;
  }
  isConflict() {
    return this.status === 409;
  }
  isAuthenticationTimeout() {
    return this.status === 419;
  }
};
function xT(t, e, r) {
  const n = new URL(e, t);
  if (r)
    for (const [s, i] of Object.entries(r))
      i !== void 0 && n.searchParams.set(s, i);
  return n.toString();
}
async function bT(t) {
  return !t || t.type === "none"
    ? {}
    : t.type === "bearer"
    ? { Authorization: `Bearer ${t.token}` }
    : t.type === "header"
    ? { [t.name]: t.value }
    : t.type === "custom"
    ? await t.getHeaders()
    : {};
}
function _T(t) {
  const e = t.fetchImpl ?? globalThis.fetch;
  return {
    async request({ method: r, path: n, query: s, body: i, headers: o }) {
      const a = xT(t.baseUrl, n, s),
        l = await bT(t.auth),
        u = await e(a, {
          method: r,
          headers: {
            ...(i ? { "Content-Type": "application/json" } : {}),
            ...l,
            ...o,
          },
          body: i ? JSON.stringify(i) : void 0,
        }),
        c = await u.text(),
        h = (u.headers.get("content-type") || "").includes("application/json"),
        f = h && c ? JSON.parse(c) : c;
      if (!u.ok) {
        const d = h ? f : void 0,
          v = d == null ? void 0 : d.error;
        throw new ko(
          (v == null ? void 0 : v.message) ??
            `Request failed with status ${u.status}`,
          {
            status: u.status,
            icebergType: v == null ? void 0 : v.type,
            icebergCode: v == null ? void 0 : v.code,
            details: d,
          }
        );
      }
      return { status: u.status, headers: u.headers, data: f };
    },
  };
}
function xa(t) {
  return t.join("");
}
var kT = class {
  constructor(t, e = "") {
    (this.client = t), (this.prefix = e);
  }
  async listNamespaces(t) {
    const e = t ? { parent: xa(t.namespace) } : void 0;
    return (
      await this.client.request({
        method: "GET",
        path: `${this.prefix}/namespaces`,
        query: e,
      })
    ).data.namespaces.map((n) => ({ namespace: n }));
  }
  async createNamespace(t, e) {
    const r = {
      namespace: t.namespace,
      properties: e == null ? void 0 : e.properties,
    };
    return (
      await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces`,
        body: r,
      })
    ).data;
  }
  async dropNamespace(t) {
    await this.client.request({
      method: "DELETE",
      path: `${this.prefix}/namespaces/${xa(t.namespace)}`,
    });
  }
  async loadNamespaceMetadata(t) {
    return {
      properties: (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${xa(t.namespace)}`,
        })
      ).data.properties,
    };
  }
  async namespaceExists(t) {
    try {
      return (
        await this.client.request({
          method: "HEAD",
          path: `${this.prefix}/namespaces/${xa(t.namespace)}`,
        }),
        !0
      );
    } catch (e) {
      if (e instanceof ko && e.status === 404) return !1;
      throw e;
    }
  }
  async createNamespaceIfNotExists(t, e) {
    try {
      return await this.createNamespace(t, e);
    } catch (r) {
      if (r instanceof ko && r.status === 409) return;
      throw r;
    }
  }
};
function ds(t) {
  return t.join("");
}
var ST = class {
    constructor(t, e = "", r) {
      (this.client = t), (this.prefix = e), (this.accessDelegation = r);
    }
    async listTables(t) {
      return (
        await this.client.request({
          method: "GET",
          path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables`,
        })
      ).data.identifiers;
    }
    async createTable(t, e) {
      const r = {};
      return (
        this.accessDelegation &&
          (r["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables`,
            body: e,
            headers: r,
          })
        ).data.metadata
      );
    }
    async updateTable(t, e) {
      const r = await this.client.request({
        method: "POST",
        path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables/${t.name}`,
        body: e,
      });
      return {
        "metadata-location": r.data["metadata-location"],
        metadata: r.data.metadata,
      };
    }
    async dropTable(t, e) {
      await this.client.request({
        method: "DELETE",
        path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables/${t.name}`,
        query: { purgeRequested: String((e == null ? void 0 : e.purge) ?? !1) },
      });
    }
    async loadTable(t) {
      const e = {};
      return (
        this.accessDelegation &&
          (e["X-Iceberg-Access-Delegation"] = this.accessDelegation),
        (
          await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables/${
              t.name
            }`,
            headers: e,
          })
        ).data.metadata
      );
    }
    async tableExists(t) {
      const e = {};
      this.accessDelegation &&
        (e["X-Iceberg-Access-Delegation"] = this.accessDelegation);
      try {
        return (
          await this.client.request({
            method: "HEAD",
            path: `${this.prefix}/namespaces/${ds(t.namespace)}/tables/${
              t.name
            }`,
            headers: e,
          }),
          !0
        );
      } catch (r) {
        if (r instanceof ko && r.status === 404) return !1;
        throw r;
      }
    }
    async createTableIfNotExists(t, e) {
      try {
        return await this.createTable(t, e);
      } catch (r) {
        if (r instanceof ko && r.status === 409)
          return await this.loadTable({ namespace: t.namespace, name: e.name });
        throw r;
      }
    }
  },
  ET = class {
    constructor(t) {
      var n;
      let e = "v1";
      t.catalogName && (e += `/${t.catalogName}`);
      const r = t.baseUrl.endsWith("/") ? t.baseUrl : `${t.baseUrl}/`;
      (this.client = _T({ baseUrl: r, auth: t.auth, fetchImpl: t.fetch })),
        (this.accessDelegation =
          (n = t.accessDelegation) == null ? void 0 : n.join(",")),
        (this.namespaceOps = new kT(this.client, e)),
        (this.tableOps = new ST(this.client, e, this.accessDelegation));
    }
    async listNamespaces(t) {
      return this.namespaceOps.listNamespaces(t);
    }
    async createNamespace(t, e) {
      return this.namespaceOps.createNamespace(t, e);
    }
    async dropNamespace(t) {
      await this.namespaceOps.dropNamespace(t);
    }
    async loadNamespaceMetadata(t) {
      return this.namespaceOps.loadNamespaceMetadata(t);
    }
    async listTables(t) {
      return this.tableOps.listTables(t);
    }
    async createTable(t, e) {
      return this.tableOps.createTable(t, e);
    }
    async updateTable(t, e) {
      return this.tableOps.updateTable(t, e);
    }
    async dropTable(t, e) {
      await this.tableOps.dropTable(t, e);
    }
    async loadTable(t) {
      return this.tableOps.loadTable(t);
    }
    async namespaceExists(t) {
      return this.namespaceOps.namespaceExists(t);
    }
    async tableExists(t) {
      return this.tableOps.tableExists(t);
    }
    async createNamespaceIfNotExists(t, e) {
      return this.namespaceOps.createNamespaceIfNotExists(t, e);
    }
    async createTableIfNotExists(t, e) {
      return this.tableOps.createTableIfNotExists(t, e);
    }
  },
  tu = class extends Error {
    constructor(t, e = "storage", r, n) {
      super(t),
        (this.__isStorageError = !0),
        (this.namespace = e),
        (this.name = e === "vectors" ? "StorageVectorsError" : "StorageError"),
        (this.status = r),
        (this.statusCode = n);
    }
  };
function ru(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
var ba = class extends tu {
    constructor(t, e, r, n = "storage") {
      super(t, n, e, r),
        (this.name =
          n === "vectors" ? "StorageVectorsApiError" : "StorageApiError"),
        (this.status = e),
        (this.statusCode = r);
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        status: this.status,
        statusCode: this.statusCode,
      };
    }
  },
  tw = class extends tu {
    constructor(t, e, r = "storage") {
      super(t, r),
        (this.name =
          r === "vectors"
            ? "StorageVectorsUnknownError"
            : "StorageUnknownError"),
        (this.originalError = e);
    }
  };
const CT = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  TT = (t) => {
    if (typeof t != "object" || t === null) return !1;
    const e = Object.getPrototypeOf(t);
    return (
      (e === null ||
        e === Object.prototype ||
        Object.getPrototypeOf(e) === null) &&
      !(Symbol.toStringTag in t) &&
      !(Symbol.iterator in t)
    );
  },
  fd = (t) => {
    if (Array.isArray(t)) return t.map((r) => fd(r));
    if (typeof t == "function" || t !== Object(t)) return t;
    const e = {};
    return (
      Object.entries(t).forEach(([r, n]) => {
        const s = r.replace(/([-_][a-z])/gi, (i) =>
          i.toUpperCase().replace(/[-_]/g, "")
        );
        e[s] = fd(n);
      }),
      e
    );
  },
  RT = (t) =>
    !t ||
    typeof t != "string" ||
    t.length === 0 ||
    t.length > 100 ||
    t.trim() !== t ||
    t.includes("/") ||
    t.includes("\\")
      ? !1
      : /^[\w!.\*'() &$@=;:+,?-]+$/.test(t);
function So(t) {
  "@babel/helpers - typeof";
  return (
    (So =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    So(t)
  );
}
function PT(t, e) {
  if (So(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (So(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function OT(t) {
  var e = PT(t, "string");
  return So(e) == "symbol" ? e : e + "";
}
function AT(t, e, r) {
  return (
    (e = OT(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function im(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function J(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? im(Object(r), !0).forEach(function (n) {
          AT(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : im(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
const om = (t) => {
    var e;
    return (
      t.msg ||
      t.message ||
      t.error_description ||
      (typeof t.error == "string"
        ? t.error
        : (e = t.error) === null || e === void 0
        ? void 0
        : e.message) ||
      JSON.stringify(t)
    );
  },
  NT = async (t, e, r, n) => {
    if (
      t &&
      typeof t == "object" &&
      "status" in t &&
      "ok" in t &&
      typeof t.status == "number" &&
      !(r != null && r.noResolveJson)
    ) {
      const s = t,
        i = s.status || 500;
      if (typeof s.json == "function")
        s.json()
          .then((o) => {
            const a =
              (o == null ? void 0 : o.statusCode) ||
              (o == null ? void 0 : o.code) ||
              i + "";
            e(new ba(om(o), i, a, n));
          })
          .catch(() => {
            if (n === "vectors") {
              const o = i + "";
              e(new ba(s.statusText || `HTTP ${i} error`, i, o, n));
            } else {
              const o = i + "";
              e(new ba(s.statusText || `HTTP ${i} error`, i, o, n));
            }
          });
      else {
        const o = i + "";
        e(new ba(s.statusText || `HTTP ${i} error`, i, o, n));
      }
    } else e(new tw(om(t), t, n));
  },
  jT = (t, e, r, n) => {
    const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
    return t === "GET" || t === "HEAD" || !n
      ? J(J({}, s), r)
      : (TT(n)
          ? ((s.headers = J(
              { "Content-Type": "application/json" },
              e == null ? void 0 : e.headers
            )),
            (s.body = JSON.stringify(n)))
          : (s.body = n),
        e != null && e.duplex && (s.duplex = e.duplex),
        J(J({}, s), r));
  };
async function Ni(t, e, r, n, s, i, o) {
  return new Promise((a, l) => {
    t(r, jT(e, n, s, i))
      .then((u) => {
        if (!u.ok) throw u;
        if (n != null && n.noResolveJson) return u;
        if (o === "vectors") {
          const c = u.headers.get("content-type");
          if (u.headers.get("content-length") === "0" || u.status === 204)
            return {};
          if (!c || !c.includes("application/json")) return {};
        }
        return u.json();
      })
      .then((u) => a(u))
      .catch((u) => NT(u, l, n, o));
  });
}
function rw(t = "storage") {
  return {
    get: async (e, r, n, s) => Ni(e, "GET", r, n, s, void 0, t),
    post: async (e, r, n, s, i) => Ni(e, "POST", r, s, i, n, t),
    put: async (e, r, n, s, i) => Ni(e, "PUT", r, s, i, n, t),
    head: async (e, r, n, s) =>
      Ni(e, "HEAD", r, J(J({}, n), {}, { noResolveJson: !0 }), s, void 0, t),
    remove: async (e, r, n, s, i) => Ni(e, "DELETE", r, s, i, n, t),
  };
}
const IT = rw("storage"),
  { get: Eo, post: Ft, put: pd, head: $T, remove: Wh } = IT,
  mt = rw("vectors");
var wi = class {
    constructor(t, e = {}, r, n = "storage") {
      (this.shouldThrowOnError = !1),
        (this.url = t),
        (this.headers = e),
        (this.fetch = CT(r)),
        (this.namespace = n);
    }
    throwOnError() {
      return (this.shouldThrowOnError = !0), this;
    }
    async handleOperation(t) {
      var e = this;
      try {
        return { data: await t(), error: null };
      } catch (r) {
        if (e.shouldThrowOnError) throw r;
        if (ru(r)) return { data: null, error: r };
        throw r;
      }
    }
  },
  LT = class {
    constructor(t, e) {
      (this.downloadFn = t), (this.shouldThrowOnError = e);
    }
    then(t, e) {
      return this.execute().then(t, e);
    }
    async execute() {
      var t = this;
      try {
        return { data: (await t.downloadFn()).body, error: null };
      } catch (e) {
        if (t.shouldThrowOnError) throw e;
        if (ru(e)) return { data: null, error: e };
        throw e;
      }
    }
  };
let nw;
nw = Symbol.toStringTag;
var MT = class {
  constructor(t, e) {
    (this.downloadFn = t),
      (this.shouldThrowOnError = e),
      (this[nw] = "BlobDownloadBuilder"),
      (this.promise = null);
  }
  asStream() {
    return new LT(this.downloadFn, this.shouldThrowOnError);
  }
  then(t, e) {
    return this.getPromise().then(t, e);
  }
  catch(t) {
    return this.getPromise().catch(t);
  }
  finally(t) {
    return this.getPromise().finally(t);
  }
  getPromise() {
    return this.promise || (this.promise = this.execute()), this.promise;
  }
  async execute() {
    var t = this;
    try {
      return { data: await (await t.downloadFn()).blob(), error: null };
    } catch (e) {
      if (t.shouldThrowOnError) throw e;
      if (ru(e)) return { data: null, error: e };
      throw e;
    }
  }
};
const DT = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
  am = {
    cacheControl: "3600",
    contentType: "text/plain;charset=UTF-8",
    upsert: !1,
  };
var UT = class extends wi {
  constructor(t, e = {}, r, n) {
    super(t, e, n, "storage"), (this.bucketId = r);
  }
  async uploadOrUpdate(t, e, r, n) {
    var s = this;
    return s.handleOperation(async () => {
      let i;
      const o = J(J({}, am), n);
      let a = J(
        J({}, s.headers),
        t === "POST" && { "x-upsert": String(o.upsert) }
      );
      const l = o.metadata;
      typeof Blob < "u" && r instanceof Blob
        ? ((i = new FormData()),
          i.append("cacheControl", o.cacheControl),
          l && i.append("metadata", s.encodeMetadata(l)),
          i.append("", r))
        : typeof FormData < "u" && r instanceof FormData
        ? ((i = r),
          i.has("cacheControl") || i.append("cacheControl", o.cacheControl),
          l && !i.has("metadata") && i.append("metadata", s.encodeMetadata(l)))
        : ((i = r),
          (a["cache-control"] = `max-age=${o.cacheControl}`),
          (a["content-type"] = o.contentType),
          l && (a["x-metadata"] = s.toBase64(s.encodeMetadata(l))),
          ((typeof ReadableStream < "u" && i instanceof ReadableStream) ||
            (i &&
              typeof i == "object" &&
              "pipe" in i &&
              typeof i.pipe == "function")) &&
            !o.duplex &&
            (o.duplex = "half")),
        n != null && n.headers && (a = J(J({}, a), n.headers));
      const u = s._removeEmptyFolders(e),
        c = s._getFinalPath(u),
        h = await (t == "PUT" ? pd : Ft)(
          s.fetch,
          `${s.url}/object/${c}`,
          i,
          J({ headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {})
        );
      return { path: u, id: h.Id, fullPath: h.Key };
    });
  }
  async upload(t, e, r) {
    return this.uploadOrUpdate("POST", t, e, r);
  }
  async uploadToSignedUrl(t, e, r, n) {
    var s = this;
    const i = s._removeEmptyFolders(t),
      o = s._getFinalPath(i),
      a = new URL(s.url + `/object/upload/sign/${o}`);
    return (
      a.searchParams.set("token", e),
      s.handleOperation(async () => {
        let l;
        const u = J({ upsert: am.upsert }, n),
          c = J(J({}, s.headers), { "x-upsert": String(u.upsert) });
        return (
          typeof Blob < "u" && r instanceof Blob
            ? ((l = new FormData()),
              l.append("cacheControl", u.cacheControl),
              l.append("", r))
            : typeof FormData < "u" && r instanceof FormData
            ? ((l = r), l.append("cacheControl", u.cacheControl))
            : ((l = r),
              (c["cache-control"] = `max-age=${u.cacheControl}`),
              (c["content-type"] = u.contentType)),
          {
            path: i,
            fullPath: (await pd(s.fetch, a.toString(), l, { headers: c })).Key,
          }
        );
      })
    );
  }
  async createSignedUploadUrl(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      let n = r._getFinalPath(t);
      const s = J({}, r.headers);
      e != null && e.upsert && (s["x-upsert"] = "true");
      const i = await Ft(
          r.fetch,
          `${r.url}/object/upload/sign/${n}`,
          {},
          { headers: s }
        ),
        o = new URL(r.url + i.url),
        a = o.searchParams.get("token");
      if (!a) throw new tu("No token returned by API");
      return { signedUrl: o.toString(), path: t, token: a };
    });
  }
  async update(t, e, r) {
    return this.uploadOrUpdate("PUT", t, e, r);
  }
  async move(t, e, r) {
    var n = this;
    return n.handleOperation(
      async () =>
        await Ft(
          n.fetch,
          `${n.url}/object/move`,
          {
            bucketId: n.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers }
        )
    );
  }
  async copy(t, e, r) {
    var n = this;
    return n.handleOperation(async () => ({
      path: (
        await Ft(
          n.fetch,
          `${n.url}/object/copy`,
          {
            bucketId: n.bucketId,
            sourceKey: t,
            destinationKey: e,
            destinationBucket: r == null ? void 0 : r.destinationBucket,
          },
          { headers: n.headers }
        )
      ).Key,
    }));
  }
  async createSignedUrl(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      let s = n._getFinalPath(t),
        i = await Ft(
          n.fetch,
          `${n.url}/object/sign/${s}`,
          J(
            { expiresIn: e },
            r != null && r.transform ? { transform: r.transform } : {}
          ),
          { headers: n.headers }
        );
      const o =
        r != null && r.download
          ? `&download=${r.download === !0 ? "" : r.download}`
          : "";
      return { signedUrl: encodeURI(`${n.url}${i.signedURL}${o}`) };
    });
  }
  async createSignedUrls(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = await Ft(
          n.fetch,
          `${n.url}/object/sign/${n.bucketId}`,
          { expiresIn: e, paths: t },
          { headers: n.headers }
        ),
        i =
          r != null && r.download
            ? `&download=${r.download === !0 ? "" : r.download}`
            : "";
      return s.map((o) =>
        J(
          J({}, o),
          {},
          {
            signedUrl: o.signedURL
              ? encodeURI(`${n.url}${o.signedURL}${i}`)
              : null,
          }
        )
      );
    });
  }
  download(t, e, r) {
    const n =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image/authenticated"
          : "object",
      s = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {}
      ),
      i = s ? `?${s}` : "",
      o = this._getFinalPath(t),
      a = () =>
        Eo(
          this.fetch,
          `${this.url}/${n}/${o}${i}`,
          { headers: this.headers, noResolveJson: !0 },
          r
        );
    return new MT(a, this.shouldThrowOnError);
  }
  async info(t) {
    var e = this;
    const r = e._getFinalPath(t);
    return e.handleOperation(async () =>
      fd(await Eo(e.fetch, `${e.url}/object/info/${r}`, { headers: e.headers }))
    );
  }
  async exists(t) {
    var e = this;
    const r = e._getFinalPath(t);
    try {
      return (
        await $T(e.fetch, `${e.url}/object/${r}`, { headers: e.headers }),
        { data: !0, error: null }
      );
    } catch (n) {
      if (e.shouldThrowOnError) throw n;
      if (ru(n) && n instanceof tw) {
        const s = n.originalError;
        if ([400, 404].includes(s == null ? void 0 : s.status))
          return { data: !1, error: n };
      }
      throw n;
    }
  }
  getPublicUrl(t, e) {
    const r = this._getFinalPath(t),
      n = [],
      s =
        e != null && e.download
          ? `download=${e.download === !0 ? "" : e.download}`
          : "";
    s !== "" && n.push(s);
    const i =
        typeof (e == null ? void 0 : e.transform) < "u"
          ? "render/image"
          : "object",
      o = this.transformOptsToQueryString(
        (e == null ? void 0 : e.transform) || {}
      );
    o !== "" && n.push(o);
    let a = n.join("&");
    return (
      a !== "" && (a = `?${a}`),
      { data: { publicUrl: encodeURI(`${this.url}/${i}/public/${r}${a}`) } }
    );
  }
  async remove(t) {
    var e = this;
    return e.handleOperation(
      async () =>
        await Wh(
          e.fetch,
          `${e.url}/object/${e.bucketId}`,
          { prefixes: t },
          { headers: e.headers }
        )
    );
  }
  async list(t, e, r) {
    var n = this;
    return n.handleOperation(async () => {
      const s = J(J(J({}, DT), e), {}, { prefix: t || "" });
      return await Ft(
        n.fetch,
        `${n.url}/object/list/${n.bucketId}`,
        s,
        { headers: n.headers },
        r
      );
    });
  }
  async listV2(t, e) {
    var r = this;
    return r.handleOperation(async () => {
      const n = J({}, t);
      return await Ft(
        r.fetch,
        `${r.url}/object/list-v2/${r.bucketId}`,
        n,
        { headers: r.headers },
        e
      );
    });
  }
  encodeMetadata(t) {
    return JSON.stringify(t);
  }
  toBase64(t) {
    return typeof Buffer < "u" ? Buffer.from(t).toString("base64") : btoa(t);
  }
  _getFinalPath(t) {
    return `${this.bucketId}/${t.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(t) {
    return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(t) {
    const e = [];
    return (
      t.width && e.push(`width=${t.width}`),
      t.height && e.push(`height=${t.height}`),
      t.resize && e.push(`resize=${t.resize}`),
      t.format && e.push(`format=${t.format}`),
      t.quality && e.push(`quality=${t.quality}`),
      e.join("&")
    );
  }
};
const FT = "2.95.3",
  Vo = { "X-Client-Info": `storage-js/${FT}` };
var zT = class extends wi {
    constructor(t, e = {}, r, n) {
      const s = new URL(t);
      n != null &&
        n.useNewHostname &&
        /supabase\.(co|in|red)$/.test(s.hostname) &&
        !s.hostname.includes("storage.supabase.") &&
        (s.hostname = s.hostname.replace("supabase.", "storage.supabase."));
      const i = s.href.replace(/\/$/, ""),
        o = J(J({}, Vo), e);
      super(i, o, r, "storage");
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const r = e.listBucketOptionsToQueryString(t);
        return await Eo(e.fetch, `${e.url}/bucket${r}`, { headers: e.headers });
      });
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Eo(e.fetch, `${e.url}/bucket/${t}`, { headers: e.headers })
      );
    }
    async createBucket(t, e = { public: !1 }) {
      var r = this;
      return r.handleOperation(
        async () =>
          await Ft(
            r.fetch,
            `${r.url}/bucket`,
            {
              id: t,
              name: t,
              type: e.type,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: r.headers }
          )
      );
    }
    async updateBucket(t, e) {
      var r = this;
      return r.handleOperation(
        async () =>
          await pd(
            r.fetch,
            `${r.url}/bucket/${t}`,
            {
              id: t,
              name: t,
              public: e.public,
              file_size_limit: e.fileSizeLimit,
              allowed_mime_types: e.allowedMimeTypes,
            },
            { headers: r.headers }
          )
      );
    }
    async emptyBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ft(
            e.fetch,
            `${e.url}/bucket/${t}/empty`,
            {},
            { headers: e.headers }
          )
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Wh(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers })
      );
    }
    listBucketOptionsToQueryString(t) {
      const e = {};
      return (
        t &&
          ("limit" in t && (e.limit = String(t.limit)),
          "offset" in t && (e.offset = String(t.offset)),
          t.search && (e.search = t.search),
          t.sortColumn && (e.sortColumn = t.sortColumn),
          t.sortOrder && (e.sortOrder = t.sortOrder)),
        Object.keys(e).length > 0 ? "?" + new URLSearchParams(e).toString() : ""
      );
    }
  },
  BT = class extends wi {
    constructor(t, e = {}, r) {
      const n = t.replace(/\/$/, ""),
        s = J(J({}, Vo), e);
      super(n, s, r, "storage");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Ft(
            e.fetch,
            `${e.url}/bucket`,
            { name: t },
            { headers: e.headers }
          )
      );
    }
    async listBuckets(t) {
      var e = this;
      return e.handleOperation(async () => {
        const r = new URLSearchParams();
        (t == null ? void 0 : t.limit) !== void 0 &&
          r.set("limit", t.limit.toString()),
          (t == null ? void 0 : t.offset) !== void 0 &&
            r.set("offset", t.offset.toString()),
          t != null && t.sortColumn && r.set("sortColumn", t.sortColumn),
          t != null && t.sortOrder && r.set("sortOrder", t.sortOrder),
          t != null && t.search && r.set("search", t.search);
        const n = r.toString(),
          s = n ? `${e.url}/bucket?${n}` : `${e.url}/bucket`;
        return await Eo(e.fetch, s, { headers: e.headers });
      });
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await Wh(e.fetch, `${e.url}/bucket/${t}`, {}, { headers: e.headers })
      );
    }
    from(t) {
      var e = this;
      if (!RT(t))
        throw new tu(
          "Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters."
        );
      const r = new ET({
          baseUrl: this.url,
          catalogName: t,
          auth: { type: "custom", getHeaders: async () => e.headers },
          fetch: this.fetch,
        }),
        n = this.shouldThrowOnError;
      return new Proxy(r, {
        get(s, i) {
          const o = s[i];
          return typeof o != "function"
            ? o
            : async (...a) => {
                try {
                  return { data: await o.apply(s, a), error: null };
                } catch (l) {
                  if (n) throw l;
                  return { data: null, error: l };
                }
              };
        },
      });
    }
  },
  WT = class extends wi {
    constructor(t, e = {}, r) {
      const n = t.replace(/\/$/, ""),
        s = J(J({}, Vo), {}, { "Content-Type": "application/json" }, e);
      super(n, s, r, "vectors");
    }
    async createIndex(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await mt.post(e.fetch, `${e.url}/CreateIndex`, t, {
            headers: e.headers,
          })) || {}
      );
    }
    async getIndex(t, e) {
      var r = this;
      return r.handleOperation(
        async () =>
          await mt.post(
            r.fetch,
            `${r.url}/GetIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: r.headers }
          )
      );
    }
    async listIndexes(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await mt.post(e.fetch, `${e.url}/ListIndexes`, t, {
            headers: e.headers,
          })
      );
    }
    async deleteIndex(t, e) {
      var r = this;
      return r.handleOperation(
        async () =>
          (await mt.post(
            r.fetch,
            `${r.url}/DeleteIndex`,
            { vectorBucketName: t, indexName: e },
            { headers: r.headers }
          )) || {}
      );
    }
  },
  VT = class extends wi {
    constructor(t, e = {}, r) {
      const n = t.replace(/\/$/, ""),
        s = J(J({}, Vo), {}, { "Content-Type": "application/json" }, e);
      super(n, s, r, "vectors");
    }
    async putVectors(t) {
      var e = this;
      if (t.vectors.length < 1 || t.vectors.length > 500)
        throw new Error("Vector batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await mt.post(e.fetch, `${e.url}/PutVectors`, t, {
            headers: e.headers,
          })) || {}
      );
    }
    async getVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await mt.post(e.fetch, `${e.url}/GetVectors`, t, {
            headers: e.headers,
          })
      );
    }
    async listVectors(t) {
      var e = this;
      if (t.segmentCount !== void 0) {
        if (t.segmentCount < 1 || t.segmentCount > 16)
          throw new Error("segmentCount must be between 1 and 16");
        if (
          t.segmentIndex !== void 0 &&
          (t.segmentIndex < 0 || t.segmentIndex >= t.segmentCount)
        )
          throw new Error(
            `segmentIndex must be between 0 and ${t.segmentCount - 1}`
          );
      }
      return e.handleOperation(
        async () =>
          await mt.post(e.fetch, `${e.url}/ListVectors`, t, {
            headers: e.headers,
          })
      );
    }
    async queryVectors(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await mt.post(e.fetch, `${e.url}/QueryVectors`, t, {
            headers: e.headers,
          })
      );
    }
    async deleteVectors(t) {
      var e = this;
      if (t.keys.length < 1 || t.keys.length > 500)
        throw new Error("Keys batch size must be between 1 and 500 items");
      return e.handleOperation(
        async () =>
          (await mt.post(e.fetch, `${e.url}/DeleteVectors`, t, {
            headers: e.headers,
          })) || {}
      );
    }
  },
  HT = class extends wi {
    constructor(t, e = {}, r) {
      const n = t.replace(/\/$/, ""),
        s = J(J({}, Vo), {}, { "Content-Type": "application/json" }, e);
      super(n, s, r, "vectors");
    }
    async createBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await mt.post(
            e.fetch,
            `${e.url}/CreateVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers }
          )) || {}
      );
    }
    async getBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          await mt.post(
            e.fetch,
            `${e.url}/GetVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers }
          )
      );
    }
    async listBuckets(t = {}) {
      var e = this;
      return e.handleOperation(
        async () =>
          await mt.post(e.fetch, `${e.url}/ListVectorBuckets`, t, {
            headers: e.headers,
          })
      );
    }
    async deleteBucket(t) {
      var e = this;
      return e.handleOperation(
        async () =>
          (await mt.post(
            e.fetch,
            `${e.url}/DeleteVectorBucket`,
            { vectorBucketName: t },
            { headers: e.headers }
          )) || {}
      );
    }
  },
  qT = class extends HT {
    constructor(t, e = {}) {
      super(t, e.headers || {}, e.fetch);
    }
    from(t) {
      return new KT(this.url, this.headers, t, this.fetch);
    }
    async createBucket(t) {
      var e = () => super.createBucket,
        r = this;
      return e().call(r, t);
    }
    async getBucket(t) {
      var e = () => super.getBucket,
        r = this;
      return e().call(r, t);
    }
    async listBuckets(t = {}) {
      var e = () => super.listBuckets,
        r = this;
      return e().call(r, t);
    }
    async deleteBucket(t) {
      var e = () => super.deleteBucket,
        r = this;
      return e().call(r, t);
    }
  },
  KT = class extends WT {
    constructor(t, e, r, n) {
      super(t, e, n), (this.vectorBucketName = r);
    }
    async createIndex(t) {
      var e = () => super.createIndex,
        r = this;
      return e().call(
        r,
        J(J({}, t), {}, { vectorBucketName: r.vectorBucketName })
      );
    }
    async listIndexes(t = {}) {
      var e = () => super.listIndexes,
        r = this;
      return e().call(
        r,
        J(J({}, t), {}, { vectorBucketName: r.vectorBucketName })
      );
    }
    async getIndex(t) {
      var e = () => super.getIndex,
        r = this;
      return e().call(r, r.vectorBucketName, t);
    }
    async deleteIndex(t) {
      var e = () => super.deleteIndex,
        r = this;
      return e().call(r, r.vectorBucketName, t);
    }
    index(t) {
      return new GT(
        this.url,
        this.headers,
        this.vectorBucketName,
        t,
        this.fetch
      );
    }
  },
  GT = class extends VT {
    constructor(t, e, r, n, s) {
      super(t, e, s), (this.vectorBucketName = r), (this.indexName = n);
    }
    async putVectors(t) {
      var e = () => super.putVectors,
        r = this;
      return e().call(
        r,
        J(
          J({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async getVectors(t) {
      var e = () => super.getVectors,
        r = this;
      return e().call(
        r,
        J(
          J({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async listVectors(t = {}) {
      var e = () => super.listVectors,
        r = this;
      return e().call(
        r,
        J(
          J({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async queryVectors(t) {
      var e = () => super.queryVectors,
        r = this;
      return e().call(
        r,
        J(
          J({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
    async deleteVectors(t) {
      var e = () => super.deleteVectors,
        r = this;
      return e().call(
        r,
        J(
          J({}, t),
          {},
          { vectorBucketName: r.vectorBucketName, indexName: r.indexName }
        )
      );
    }
  },
  QT = class extends zT {
    constructor(t, e = {}, r, n) {
      super(t, e, r, n);
    }
    from(t) {
      return new UT(this.url, this.headers, t, this.fetch);
    }
    get vectors() {
      return new qT(this.url + "/vector", {
        headers: this.headers,
        fetch: this.fetch,
      });
    }
    get analytics() {
      return new BT(this.url + "/iceberg", this.headers, this.fetch);
    }
  };
const sw = "2.95.3",
  ws = 30 * 1e3,
  md = 3,
  Ku = md * ws,
  JT = "http://localhost:9999",
  ZT = "supabase.auth.token",
  YT = { "X-Client-Info": `gotrue-js/${sw}` },
  gd = "X-Supabase-Api-Version",
  iw = {
    "2024-01-01": {
      timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
      name: "2024-01-01",
    },
  },
  XT = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
  eR = 10 * 60 * 1e3;
class Co extends Error {
  constructor(e, r, n) {
    super(e),
      (this.__isAuthError = !0),
      (this.name = "AuthError"),
      (this.status = r),
      (this.code = n);
  }
}
function V(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class tR extends Co {
  constructor(e, r, n) {
    super(e, r, n),
      (this.name = "AuthApiError"),
      (this.status = r),
      (this.code = n);
  }
}
function rR(t) {
  return V(t) && t.name === "AuthApiError";
}
class $n extends Co {
  constructor(e, r) {
    super(e), (this.name = "AuthUnknownError"), (this.originalError = r);
  }
}
class Pr extends Co {
  constructor(e, r, n, s) {
    super(e, n, s), (this.name = r), (this.status = n);
  }
}
class dt extends Pr {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Gu(t) {
  return V(t) && t.name === "AuthSessionMissingError";
}
class hs extends Pr {
  constructor() {
    super(
      "Auth session or user missing",
      "AuthInvalidTokenResponseError",
      500,
      void 0
    );
  }
}
class _a extends Pr {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ka extends Pr {
  constructor(e, r = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
function nR(t) {
  return V(t) && t.name === "AuthImplicitGrantRedirectError";
}
class lm extends Pr {
  constructor(e, r = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0),
      (this.details = null),
      (this.details = r);
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details,
    };
  }
}
class sR extends Pr {
  constructor() {
    super(
      "PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.",
      "AuthPKCECodeVerifierMissingError",
      400,
      "pkce_code_verifier_not_found"
    );
  }
}
class yd extends Pr {
  constructor(e, r) {
    super(e, "AuthRetryableFetchError", r, void 0);
  }
}
function Qu(t) {
  return V(t) && t.name === "AuthRetryableFetchError";
}
class um extends Pr {
  constructor(e, r, n) {
    super(e, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = n);
  }
}
class vd extends Pr {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const vl =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
      ""
    ),
  cm = ` 	
\r=`.split(""),
  iR = (() => {
    const t = new Array(128);
    for (let e = 0; e < t.length; e += 1) t[e] = -1;
    for (let e = 0; e < cm.length; e += 1) t[cm[e].charCodeAt(0)] = -2;
    for (let e = 0; e < vl.length; e += 1) t[vl[e].charCodeAt(0)] = e;
    return t;
  })();
function dm(t, e, r) {
  if (t !== null)
    for (e.queue = (e.queue << 8) | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const n = (e.queue >> (e.queuedBits - 6)) & 63;
      r(vl[n]), (e.queuedBits -= 6);
    }
  else if (e.queuedBits > 0)
    for (
      e.queue = e.queue << (6 - e.queuedBits), e.queuedBits = 6;
      e.queuedBits >= 6;

    ) {
      const n = (e.queue >> (e.queuedBits - 6)) & 63;
      r(vl[n]), (e.queuedBits -= 6);
    }
}
function ow(t, e, r) {
  const n = iR[t];
  if (n > -1)
    for (e.queue = (e.queue << 6) | n, e.queuedBits += 6; e.queuedBits >= 8; )
      r((e.queue >> (e.queuedBits - 8)) & 255), (e.queuedBits -= 8);
  else {
    if (n === -2) return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function hm(t) {
  const e = [],
    r = (o) => {
      e.push(String.fromCodePoint(o));
    },
    n = { utf8seq: 0, codepoint: 0 },
    s = { queue: 0, queuedBits: 0 },
    i = (o) => {
      lR(o, n, r);
    };
  for (let o = 0; o < t.length; o += 1) ow(t.charCodeAt(o), s, i);
  return e.join("");
}
function oR(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(192 | (t >> 6)), e(128 | (t & 63));
    return;
  } else if (t <= 65535) {
    e(224 | (t >> 12)), e(128 | ((t >> 6) & 63)), e(128 | (t & 63));
    return;
  } else if (t <= 1114111) {
    e(240 | (t >> 18)),
      e(128 | ((t >> 12) & 63)),
      e(128 | ((t >> 6) & 63)),
      e(128 | (t & 63));
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function aR(t, e) {
  for (let r = 0; r < t.length; r += 1) {
    let n = t.charCodeAt(r);
    if (n > 55295 && n <= 56319) {
      const s = ((n - 55296) * 1024) & 65535;
      (n = (((t.charCodeAt(r + 1) - 56320) & 65535) | s) + 65536), (r += 1);
    }
    oR(n, e);
  }
}
function lR(t, e, r) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      r(t);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!((t >> (7 - n)) & 1)) {
        e.utf8seq = n;
        break;
      }
    if (e.utf8seq === 2) e.codepoint = t & 31;
    else if (e.utf8seq === 3) e.codepoint = t & 15;
    else if (e.utf8seq === 4) e.codepoint = t & 7;
    else throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127) throw new Error("Invalid UTF-8 sequence");
    (e.codepoint = (e.codepoint << 6) | (t & 63)),
      (e.utf8seq -= 1),
      e.utf8seq === 0 && r(e.codepoint);
  }
}
function Ws(t) {
  const e = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      e.push(s);
    };
  for (let s = 0; s < t.length; s += 1) ow(t.charCodeAt(s), r, n);
  return new Uint8Array(e);
}
function uR(t) {
  const e = [];
  return aR(t, (r) => e.push(r)), new Uint8Array(e);
}
function Un(t) {
  const e = [],
    r = { queue: 0, queuedBits: 0 },
    n = (s) => {
      e.push(s);
    };
  return t.forEach((s) => dm(s, r, n)), dm(null, r, n), e.join("");
}
function cR(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function dR() {
  return Symbol("auth-callback");
}
const ze = () => typeof window < "u" && typeof document < "u",
  Pn = { tested: !1, writable: !1 },
  aw = () => {
    if (!ze()) return !1;
    try {
      if (typeof globalThis.localStorage != "object") return !1;
    } catch {
      return !1;
    }
    if (Pn.tested) return Pn.writable;
    const t = `lswt-${Math.random()}${Math.random()}`;
    try {
      globalThis.localStorage.setItem(t, t),
        globalThis.localStorage.removeItem(t),
        (Pn.tested = !0),
        (Pn.writable = !0);
    } catch {
      (Pn.tested = !0), (Pn.writable = !1);
    }
    return Pn.writable;
  };
function hR(t) {
  const e = {},
    r = new URL(t);
  if (r.hash && r.hash[0] === "#")
    try {
      new URLSearchParams(r.hash.substring(1)).forEach((s, i) => {
        e[i] = s;
      });
    } catch {}
  return (
    r.searchParams.forEach((n, s) => {
      e[s] = n;
    }),
    e
  );
}
const lw = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  fR = (t) =>
    typeof t == "object" &&
    t !== null &&
    "status" in t &&
    "ok" in t &&
    "json" in t &&
    typeof t.json == "function",
  xs = async (t, e, r) => {
    await t.setItem(e, JSON.stringify(r));
  },
  On = async (t, e) => {
    const r = await t.getItem(e);
    if (!r) return null;
    try {
      return JSON.parse(r);
    } catch {
      return r;
    }
  },
  Fe = async (t, e) => {
    await t.removeItem(e);
  };
class nu {
  constructor() {
    this.promise = new nu.promiseConstructor((e, r) => {
      (this.resolve = e), (this.reject = r);
    });
  }
}
nu.promiseConstructor = Promise;
function Sa(t) {
  const e = t.split(".");
  if (e.length !== 3) throw new vd("Invalid JWT structure");
  for (let n = 0; n < e.length; n++)
    if (!XT.test(e[n])) throw new vd("JWT not in base64url format");
  return {
    header: JSON.parse(hm(e[0])),
    payload: JSON.parse(hm(e[1])),
    signature: Ws(e[2]),
    raw: { header: e[0], payload: e[1] },
  };
}
async function pR(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function mR(t, e) {
  return new Promise((n, s) => {
    (async () => {
      for (let i = 0; i < 1 / 0; i++)
        try {
          const o = await t(i);
          if (!e(i, null, o)) {
            n(o);
            return;
          }
        } catch (o) {
          if (!e(i, o)) {
            s(o);
            return;
          }
        }
    })();
  });
}
function gR(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function yR() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const r =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
      n = r.length;
    let s = "";
    for (let i = 0; i < 56; i++) s += r.charAt(Math.floor(Math.random() * n));
    return s;
  }
  return crypto.getRandomValues(e), Array.from(e, gR).join("");
}
async function vR(t) {
  const r = new TextEncoder().encode(t),
    n = await crypto.subtle.digest("SHA-256", r),
    s = new Uint8Array(n);
  return Array.from(s)
    .map((i) => String.fromCharCode(i))
    .join("");
}
async function wR(t) {
  if (
    !(
      typeof crypto < "u" &&
      typeof crypto.subtle < "u" &&
      typeof TextEncoder < "u"
    )
  )
    return (
      console.warn(
        "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
      ),
      t
    );
  const r = await vR(t);
  return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function fs(t, e, r = !1) {
  const n = yR();
  let s = n;
  r && (s += "/PASSWORD_RECOVERY"), await xs(t, `${e}-code-verifier`, s);
  const i = await wR(n);
  return [i, n === i ? "plain" : "s256"];
}
const xR = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function bR(t) {
  const e = t.headers.get(gd);
  if (!e || !e.match(xR)) return null;
  try {
    return new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function _R(t) {
  if (!t) throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e) throw new Error("JWT has expired");
}
function kR(t) {
  switch (t) {
    case "RS256":
      return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
    case "ES256":
      return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
    default:
      throw new Error("Invalid alg claim");
  }
}
const SR = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ps(t) {
  if (!SR.test(t))
    throw new Error(
      "@supabase/auth-js: Expected parameter to be UUID but is not"
    );
}
function Ju() {
  const t = {};
  return new Proxy(t, {
    get: (e, r) => {
      if (r === "__isUserNotAvailableProxy") return !0;
      if (typeof r == "symbol") {
        const n = r.toString();
        if (
          n === "Symbol(Symbol.toPrimitive)" ||
          n === "Symbol(Symbol.toStringTag)" ||
          n === "Symbol(util.inspect.custom)"
        )
          return;
      }
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`
      );
    },
    set: (e, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
    deleteProperty: (e, r) => {
      throw new Error(
        `@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`
      );
    },
  });
}
function ER(t, e) {
  return new Proxy(t, {
    get: (r, n, s) => {
      if (n === "__isInsecureUserWarningProxy") return !0;
      if (typeof n == "symbol") {
        const i = n.toString();
        if (
          i === "Symbol(Symbol.toPrimitive)" ||
          i === "Symbol(Symbol.toStringTag)" ||
          i === "Symbol(util.inspect.custom)" ||
          i === "Symbol(nodejs.util.inspect.custom)"
        )
          return Reflect.get(r, n, s);
      }
      return (
        !e.value &&
          typeof n == "string" &&
          (console.warn(
            "Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."
          ),
          (e.value = !0)),
        Reflect.get(r, n, s)
      );
    },
  });
}
function fm(t) {
  return JSON.parse(JSON.stringify(t));
}
const jn = (t) =>
    t.msg || t.message || t.error_description || t.error || JSON.stringify(t),
  CR = [502, 503, 504];
async function pm(t) {
  var e;
  if (!fR(t)) throw new yd(jn(t), 0);
  if (CR.includes(t.status)) throw new yd(jn(t), t.status);
  let r;
  try {
    r = await t.json();
  } catch (i) {
    throw new $n(jn(i), i);
  }
  let n;
  const s = bR(t);
  if (
    (s &&
    s.getTime() >= iw["2024-01-01"].timestamp &&
    typeof r == "object" &&
    r &&
    typeof r.code == "string"
      ? (n = r.code)
      : typeof r == "object" &&
        r &&
        typeof r.error_code == "string" &&
        (n = r.error_code),
    n)
  ) {
    if (n === "weak_password")
      throw new um(
        jn(r),
        t.status,
        ((e = r.weak_password) === null || e === void 0 ? void 0 : e.reasons) ||
          []
      );
    if (n === "session_not_found") throw new dt();
  } else if (
    typeof r == "object" &&
    r &&
    typeof r.weak_password == "object" &&
    r.weak_password &&
    Array.isArray(r.weak_password.reasons) &&
    r.weak_password.reasons.length &&
    r.weak_password.reasons.reduce((i, o) => i && typeof o == "string", !0)
  )
    throw new um(jn(r), t.status, r.weak_password.reasons);
  throw new tR(jn(r), t.status || 500, n);
}
const TR = (t, e, r, n) => {
  const s = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET"
    ? s
    : ((s.headers = Object.assign(
        { "Content-Type": "application/json;charset=UTF-8" },
        e == null ? void 0 : e.headers
      )),
      (s.body = JSON.stringify(n)),
      Object.assign(Object.assign({}, s), r));
};
async function G(t, e, r, n) {
  var s;
  const i = Object.assign({}, n == null ? void 0 : n.headers);
  i[gd] || (i[gd] = iw["2024-01-01"].name),
    n != null && n.jwt && (i.Authorization = `Bearer ${n.jwt}`);
  const o =
    (s = n == null ? void 0 : n.query) !== null && s !== void 0 ? s : {};
  n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
  const a = Object.keys(o).length
      ? "?" + new URLSearchParams(o).toString()
      : "",
    l = await RR(
      t,
      e,
      r + a,
      { headers: i, noResolveJson: n == null ? void 0 : n.noResolveJson },
      {},
      n == null ? void 0 : n.body
    );
  return n != null && n.xform
    ? n == null
      ? void 0
      : n.xform(l)
    : { data: Object.assign({}, l), error: null };
}
async function RR(t, e, r, n, s, i) {
  const o = TR(e, n, s, i);
  let a;
  try {
    a = await t(r, Object.assign({}, o));
  } catch (l) {
    throw (console.error(l), new yd(jn(l), 0));
  }
  if ((a.ok || (await pm(a)), n != null && n.noResolveJson)) return a;
  try {
    return await a.json();
  } catch (l) {
    await pm(l);
  }
}
function Mt(t) {
  var e;
  let r = null;
  AR(t) &&
    ((r = Object.assign({}, t)),
    t.expires_at || (r.expires_at = cR(t.expires_in)));
  const n = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: r, user: n }, error: null };
}
function mm(t) {
  const e = Mt(t);
  return (
    !e.error &&
      t.weak_password &&
      typeof t.weak_password == "object" &&
      Array.isArray(t.weak_password.reasons) &&
      t.weak_password.reasons.length &&
      t.weak_password.message &&
      typeof t.weak_password.message == "string" &&
      t.weak_password.reasons.reduce((r, n) => r && typeof n == "string", !0) &&
      (e.data.weak_password = t.weak_password),
    e
  );
}
function qr(t) {
  var e;
  return {
    data: { user: (e = t.user) !== null && e !== void 0 ? e : t },
    error: null,
  };
}
function PR(t) {
  return { data: t, error: null };
}
function OR(t) {
  const {
      action_link: e,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    } = t,
    o = eu(t, [
      "action_link",
      "email_otp",
      "hashed_token",
      "redirect_to",
      "verification_type",
    ]),
    a = {
      action_link: e,
      email_otp: r,
      hashed_token: n,
      redirect_to: s,
      verification_type: i,
    },
    l = Object.assign({}, o);
  return { data: { properties: a, user: l }, error: null };
}
function gm(t) {
  return t;
}
function AR(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const Zu = ["global", "local", "others"];
class NR {
  constructor({ url: e = "", headers: r = {}, fetch: n }) {
    (this.url = e),
      (this.headers = r),
      (this.fetch = lw(n)),
      (this.mfa = {
        listFactors: this._listFactors.bind(this),
        deleteFactor: this._deleteFactor.bind(this),
      }),
      (this.oauth = {
        listClients: this._listOAuthClients.bind(this),
        createClient: this._createOAuthClient.bind(this),
        getClient: this._getOAuthClient.bind(this),
        updateClient: this._updateOAuthClient.bind(this),
        deleteClient: this._deleteOAuthClient.bind(this),
        regenerateClientSecret: this._regenerateOAuthClientSecret.bind(this),
      });
  }
  async signOut(e, r = Zu[0]) {
    if (Zu.indexOf(r) < 0)
      throw new Error(
        `@supabase/auth-js: Parameter scope must be one of ${Zu.join(", ")}`
      );
    try {
      return (
        await G(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
          headers: this.headers,
          jwt: e,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (n) {
      if (V(n)) return { data: null, error: n };
      throw n;
    }
  }
  async inviteUserByEmail(e, r = {}) {
    try {
      return await G(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: r.data },
        headers: this.headers,
        redirectTo: r.redirectTo,
        xform: qr,
      });
    } catch (n) {
      if (V(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async generateLink(e) {
    try {
      const { options: r } = e,
        n = eu(e, ["options"]),
        s = Object.assign(Object.assign({}, n), r);
      return (
        "newEmail" in n &&
          ((s.new_email = n == null ? void 0 : n.newEmail), delete s.newEmail),
        await G(this.fetch, "POST", `${this.url}/admin/generate_link`, {
          body: s,
          headers: this.headers,
          xform: OR,
          redirectTo: r == null ? void 0 : r.redirectTo,
        })
      );
    } catch (r) {
      if (V(r)) return { data: { properties: null, user: null }, error: r };
      throw r;
    }
  }
  async createUser(e) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: qr,
      });
    } catch (r) {
      if (V(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async listUsers(e) {
    var r, n, s, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await G(this.fetch, "GET", `${this.url}/admin/users`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = e == null ? void 0 : e.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: gm,
        });
      if (c.error) throw c.error;
      const h = await c.json(),
        f =
          (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((v) => {
            const p = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(v.split(";")[1].split("=")[1]);
            u[`${x}Page`] = p;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, h), u), error: null }
      );
    } catch (u) {
      if (V(u)) return { data: { users: [] }, error: u };
      throw u;
    }
  }
  async getUserById(e) {
    ps(e);
    try {
      return await G(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: qr,
      });
    } catch (r) {
      if (V(r)) return { data: { user: null }, error: r };
      throw r;
    }
  }
  async updateUserById(e, r) {
    ps(e);
    try {
      return await G(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: r,
        headers: this.headers,
        xform: qr,
      });
    } catch (n) {
      if (V(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async deleteUser(e, r = !1) {
    ps(e);
    try {
      return await G(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: { should_soft_delete: r },
        xform: qr,
      });
    } catch (n) {
      if (V(n)) return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(e) {
    ps(e.userId);
    try {
      const { data: r, error: n } = await G(
        this.fetch,
        "GET",
        `${this.url}/admin/users/${e.userId}/factors`,
        {
          headers: this.headers,
          xform: (s) => ({ data: { factors: s }, error: null }),
        }
      );
      return { data: r, error: n };
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _deleteFactor(e) {
    ps(e.userId), ps(e.id);
    try {
      return {
        data: await G(
          this.fetch,
          "DELETE",
          `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
          { headers: this.headers }
        ),
        error: null,
      };
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _listOAuthClients(e) {
    var r, n, s, i, o, a, l;
    try {
      const u = { nextPage: null, lastPage: 0, total: 0 },
        c = await G(this.fetch, "GET", `${this.url}/admin/oauth/clients`, {
          headers: this.headers,
          noResolveJson: !0,
          query: {
            page:
              (n =
                (r = e == null ? void 0 : e.page) === null || r === void 0
                  ? void 0
                  : r.toString()) !== null && n !== void 0
                ? n
                : "",
            per_page:
              (i =
                (s = e == null ? void 0 : e.perPage) === null || s === void 0
                  ? void 0
                  : s.toString()) !== null && i !== void 0
                ? i
                : "",
          },
          xform: gm,
        });
      if (c.error) throw c.error;
      const h = await c.json(),
        f =
          (o = c.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0,
        d =
          (l =
            (a = c.headers.get("link")) === null || a === void 0
              ? void 0
              : a.split(",")) !== null && l !== void 0
            ? l
            : [];
      return (
        d.length > 0 &&
          (d.forEach((v) => {
            const p = parseInt(v.split(";")[0].split("=")[1].substring(0, 1)),
              x = JSON.parse(v.split(";")[1].split("=")[1]);
            u[`${x}Page`] = p;
          }),
          (u.total = parseInt(f))),
        { data: Object.assign(Object.assign({}, h), u), error: null }
      );
    } catch (u) {
      if (V(u)) return { data: { clients: [] }, error: u };
      throw u;
    }
  }
  async _createOAuthClient(e) {
    try {
      return await G(this.fetch, "POST", `${this.url}/admin/oauth/clients`, {
        body: e,
        headers: this.headers,
        xform: (r) => ({ data: r, error: null }),
      });
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _getOAuthClient(e) {
    try {
      return await G(
        this.fetch,
        "GET",
        `${this.url}/admin/oauth/clients/${e}`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) }
      );
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _updateOAuthClient(e, r) {
    try {
      return await G(
        this.fetch,
        "PUT",
        `${this.url}/admin/oauth/clients/${e}`,
        {
          body: r,
          headers: this.headers,
          xform: (n) => ({ data: n, error: null }),
        }
      );
    } catch (n) {
      if (V(n)) return { data: null, error: n };
      throw n;
    }
  }
  async _deleteOAuthClient(e) {
    try {
      return (
        await G(this.fetch, "DELETE", `${this.url}/admin/oauth/clients/${e}`, {
          headers: this.headers,
          noResolveJson: !0,
        }),
        { data: null, error: null }
      );
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
  async _regenerateOAuthClientSecret(e) {
    try {
      return await G(
        this.fetch,
        "POST",
        `${this.url}/admin/oauth/clients/${e}/regenerate_secret`,
        { headers: this.headers, xform: (r) => ({ data: r, error: null }) }
      );
    } catch (r) {
      if (V(r)) return { data: null, error: r };
      throw r;
    }
  }
}
function ym(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, r) => {
      t[e] = r;
    },
    removeItem: (e) => {
      delete t[e];
    },
  };
}
const ms = {
  debug: !!(
    globalThis &&
    aw() &&
    globalThis.localStorage &&
    globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
  ),
};
class uw extends Error {
  constructor(e) {
    super(e), (this.isAcquireTimeout = !0);
  }
}
class jR extends uw {}
async function IR(t, e, r) {
  ms.debug &&
    console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const n = new globalThis.AbortController();
  return (
    e > 0 &&
      setTimeout(() => {
        n.abort(),
          ms.debug &&
            console.log(
              "@supabase/gotrue-js: navigatorLock acquire timed out",
              t
            );
      }, e),
    await Promise.resolve().then(() =>
      globalThis.navigator.locks.request(
        t,
        e === 0
          ? { mode: "exclusive", ifAvailable: !0 }
          : { mode: "exclusive", signal: n.signal },
        async (s) => {
          if (s) {
            ms.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquired",
                t,
                s.name
              );
            try {
              return await r();
            } finally {
              ms.debug &&
                console.log(
                  "@supabase/gotrue-js: navigatorLock: released",
                  t,
                  s.name
                );
            }
          } else {
            if (e === 0)
              throw (
                (ms.debug &&
                  console.log(
                    "@supabase/gotrue-js: navigatorLock: not immediately available",
                    t
                  ),
                new jR(
                  `Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`
                ))
              );
            if (ms.debug)
              try {
                const i = await globalThis.navigator.locks.query();
                console.log(
                  "@supabase/gotrue-js: Navigator LockManager state",
                  JSON.stringify(i, null, "  ")
                );
              } catch (i) {
                console.warn(
                  "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                  i
                );
              }
            return (
              console.warn(
                "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
              ),
              await r()
            );
          }
        }
      )
    )
  );
}
function $R() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function () {
          return this;
        },
        configurable: !0,
      }),
        (__magic__.globalThis = __magic__),
        delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
function cw(t) {
  if (!/^0x[a-fA-F0-9]{40}$/.test(t))
    throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);
  return t.toLowerCase();
}
function LR(t) {
  return parseInt(t, 16);
}
function MR(t) {
  const e = new TextEncoder().encode(t);
  return "0x" + Array.from(e, (n) => n.toString(16).padStart(2, "0")).join("");
}
function DR(t) {
  var e;
  const {
    chainId: r,
    domain: n,
    expirationTime: s,
    issuedAt: i = new Date(),
    nonce: o,
    notBefore: a,
    requestId: l,
    resources: u,
    scheme: c,
    uri: h,
    version: f,
  } = t;
  {
    if (!Number.isInteger(r))
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`
      );
    if (!n)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.'
      );
    if (o && o.length < 8)
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${o}`
      );
    if (!h)
      throw new Error(
        '@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.'
      );
    if (f !== "1")
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${f}`
      );
    if (
      !((e = t.statement) === null || e === void 0) &&
      e.includes(`
`)
    )
      throw new Error(
        `@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`
      );
  }
  const d = cw(t.address),
    v = c ? `${c}://${n}` : n,
    p = t.statement
      ? `${t.statement}
`
      : "",
    x = `${v} wants you to sign in with your Ethereum account:
${d}

${p}`;
  let g = `URI: ${h}
Version: ${f}
Chain ID: ${r}${
    o
      ? `
Nonce: ${o}`
      : ""
  }
Issued At: ${i.toISOString()}`;
  if (
    (s &&
      (g += `
Expiration Time: ${s.toISOString()}`),
    a &&
      (g += `
Not Before: ${a.toISOString()}`),
    l &&
      (g += `
Request ID: ${l}`),
    u)
  ) {
    let m = `
Resources:`;
    for (const y of u) {
      if (!y || typeof y != "string")
        throw new Error(
          `@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`
        );
      m += `
- ${y}`;
    }
    g += m;
  }
  return `${x}
${g}`;
}
class Ae extends Error {
  constructor({ message: e, code: r, cause: n, name: s }) {
    var i;
    super(e, { cause: n }),
      (this.__isWebAuthnError = !0),
      (this.name =
        (i = s ?? (n instanceof Error ? n.name : void 0)) !== null &&
        i !== void 0
          ? i
          : "Unknown Error"),
      (this.code = r);
  }
}
class wl extends Ae {
  constructor(e, r) {
    super({
      code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
      cause: r,
      message: e,
    }),
      (this.name = "WebAuthnUnknownError"),
      (this.originalError = r);
  }
}
function UR({ error: t, options: e }) {
  var r, n, s;
  const { publicKey: i } = e;
  if (!i) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new Ae({
        message: "Registration ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else if (t.name === "ConstraintError") {
    if (
      ((r = i.authenticatorSelection) === null || r === void 0
        ? void 0
        : r.requireResidentKey) === !0
    )
      return new Ae({
        message:
          "Discoverable credentials were required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",
        cause: t,
      });
    if (
      e.mediation === "conditional" &&
      ((n = i.authenticatorSelection) === null || n === void 0
        ? void 0
        : n.userVerification) === "required"
    )
      return new Ae({
        message:
          "User verification was required during automatic registration but it could not be performed",
        code: "ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",
        cause: t,
      });
    if (
      ((s = i.authenticatorSelection) === null || s === void 0
        ? void 0
        : s.userVerification) === "required"
    )
      return new Ae({
        message:
          "User verification was required but no available authenticator supported it",
        code: "ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",
        cause: t,
      });
  } else {
    if (t.name === "InvalidStateError")
      return new Ae({
        message: "The authenticator was previously registered",
        code: "ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",
        cause: t,
      });
    if (t.name === "NotAllowedError")
      return new Ae({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "NotSupportedError")
      return i.pubKeyCredParams.filter((a) => a.type === "public-key")
        .length === 0
        ? new Ae({
            message: 'No entry in pubKeyCredParams was of type "public-key"',
            code: "ERROR_MALFORMED_PUBKEYCREDPARAMS",
            cause: t,
          })
        : new Ae({
            message:
              "No available authenticator supported any of the specified pubKeyCredParams algorithms",
            code: "ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",
            cause: t,
          });
    if (t.name === "SecurityError") {
      const o = window.location.hostname;
      if (dw(o)) {
        if (i.rp.id !== o)
          return new Ae({
            message: `The RP ID "${i.rp.id}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new Ae({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "TypeError") {
      if (i.user.id.byteLength < 1 || i.user.id.byteLength > 64)
        return new Ae({
          message: "User ID was not between 1 and 64 characters",
          code: "ERROR_INVALID_USER_ID_LENGTH",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new Ae({
        message:
          "The authenticator was unable to process the specified options, or could not create a new credential",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new Ae({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
function FR({ error: t, options: e }) {
  const { publicKey: r } = e;
  if (!r) throw Error("options was missing required publicKey property");
  if (t.name === "AbortError") {
    if (e.signal instanceof AbortSignal)
      return new Ae({
        message: "Authentication ceremony was sent an abort signal",
        code: "ERROR_CEREMONY_ABORTED",
        cause: t,
      });
  } else {
    if (t.name === "NotAllowedError")
      return new Ae({
        message: t.message,
        code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
        cause: t,
      });
    if (t.name === "SecurityError") {
      const n = window.location.hostname;
      if (dw(n)) {
        if (r.rpId !== n)
          return new Ae({
            message: `The RP ID "${r.rpId}" is invalid for this domain`,
            code: "ERROR_INVALID_RP_ID",
            cause: t,
          });
      } else
        return new Ae({
          message: `${window.location.hostname} is an invalid domain`,
          code: "ERROR_INVALID_DOMAIN",
          cause: t,
        });
    } else if (t.name === "UnknownError")
      return new Ae({
        message:
          "The authenticator was unable to process the specified options, or could not create a new assertion signature",
        code: "ERROR_AUTHENTICATOR_GENERAL_ERROR",
        cause: t,
      });
  }
  return new Ae({
    message: "a Non-Webauthn related error has occurred",
    code: "ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",
    cause: t,
  });
}
class zR {
  createNewAbortSignal() {
    if (this.controller) {
      const r = new Error("Cancelling existing WebAuthn API call for new one");
      (r.name = "AbortError"), this.controller.abort(r);
    }
    const e = new AbortController();
    return (this.controller = e), e.signal;
  }
  cancelCeremony() {
    if (this.controller) {
      const e = new Error("Manually cancelling existing WebAuthn API call");
      (e.name = "AbortError"),
        this.controller.abort(e),
        (this.controller = void 0);
    }
  }
}
const BR = new zR();
function WR(t) {
  if (!t) throw new Error("Credential creation options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseCreationOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseCreationOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseCreationOptionsFromJSON(t);
  const { challenge: e, user: r, excludeCredentials: n } = t,
    s = eu(t, ["challenge", "user", "excludeCredentials"]),
    i = Ws(e).buffer,
    o = Object.assign(Object.assign({}, r), { id: Ws(r.id).buffer }),
    a = Object.assign(Object.assign({}, s), { challenge: i, user: o });
  if (n && n.length > 0) {
    a.excludeCredentials = new Array(n.length);
    for (let l = 0; l < n.length; l++) {
      const u = n[l];
      a.excludeCredentials[l] = Object.assign(Object.assign({}, u), {
        id: Ws(u.id).buffer,
        type: u.type || "public-key",
        transports: u.transports,
      });
    }
  }
  return a;
}
function VR(t) {
  if (!t) throw new Error("Credential request options are required");
  if (
    typeof PublicKeyCredential < "u" &&
    "parseRequestOptionsFromJSON" in PublicKeyCredential &&
    typeof PublicKeyCredential.parseRequestOptionsFromJSON == "function"
  )
    return PublicKeyCredential.parseRequestOptionsFromJSON(t);
  const { challenge: e, allowCredentials: r } = t,
    n = eu(t, ["challenge", "allowCredentials"]),
    s = Ws(e).buffer,
    i = Object.assign(Object.assign({}, n), { challenge: s });
  if (r && r.length > 0) {
    i.allowCredentials = new Array(r.length);
    for (let o = 0; o < r.length; o++) {
      const a = r[o];
      i.allowCredentials[o] = Object.assign(Object.assign({}, a), {
        id: Ws(a.id).buffer,
        type: a.type || "public-key",
        transports: a.transports,
      });
    }
  }
  return i;
}
function HR(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const r = t;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      attestationObject: Un(new Uint8Array(t.response.attestationObject)),
      clientDataJSON: Un(new Uint8Array(t.response.clientDataJSON)),
    },
    type: "public-key",
    clientExtensionResults: t.getClientExtensionResults(),
    authenticatorAttachment:
      (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function qR(t) {
  var e;
  if ("toJSON" in t && typeof t.toJSON == "function") return t.toJSON();
  const r = t,
    n = t.getClientExtensionResults(),
    s = t.response;
  return {
    id: t.id,
    rawId: t.id,
    response: {
      authenticatorData: Un(new Uint8Array(s.authenticatorData)),
      clientDataJSON: Un(new Uint8Array(s.clientDataJSON)),
      signature: Un(new Uint8Array(s.signature)),
      userHandle: s.userHandle ? Un(new Uint8Array(s.userHandle)) : void 0,
    },
    type: "public-key",
    clientExtensionResults: n,
    authenticatorAttachment:
      (e = r.authenticatorAttachment) !== null && e !== void 0 ? e : void 0,
  };
}
function dw(t) {
  return t === "localhost" || /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t);
}
function vm() {
  var t, e;
  return !!(
    ze() &&
    "PublicKeyCredential" in window &&
    window.PublicKeyCredential &&
    "credentials" in navigator &&
    typeof ((t = navigator == null ? void 0 : navigator.credentials) === null ||
    t === void 0
      ? void 0
      : t.create) == "function" &&
    typeof ((e = navigator == null ? void 0 : navigator.credentials) === null ||
    e === void 0
      ? void 0
      : e.get) == "function"
  );
}
async function KR(t) {
  try {
    const e = await navigator.credentials.create(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new wl("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new wl("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: UR({ error: e, options: t }) };
  }
}
async function GR(t) {
  try {
    const e = await navigator.credentials.get(t);
    return e
      ? e instanceof PublicKeyCredential
        ? { data: e, error: null }
        : {
            data: null,
            error: new wl("Browser returned unexpected credential type", e),
          }
      : { data: null, error: new wl("Empty credential response", e) };
  } catch (e) {
    return { data: null, error: FR({ error: e, options: t }) };
  }
}
const QR = {
    hints: ["security-key"],
    authenticatorSelection: {
      authenticatorAttachment: "cross-platform",
      requireResidentKey: !1,
      userVerification: "preferred",
      residentKey: "discouraged",
    },
    attestation: "direct",
  },
  JR = {
    userVerification: "preferred",
    hints: ["security-key"],
    attestation: "direct",
  };
function xl(...t) {
  const e = (s) => s !== null && typeof s == "object" && !Array.isArray(s),
    r = (s) => s instanceof ArrayBuffer || ArrayBuffer.isView(s),
    n = {};
  for (const s of t)
    if (s)
      for (const i in s) {
        const o = s[i];
        if (o !== void 0)
          if (Array.isArray(o)) n[i] = o;
          else if (r(o)) n[i] = o;
          else if (e(o)) {
            const a = n[i];
            e(a) ? (n[i] = xl(a, o)) : (n[i] = xl(o));
          } else n[i] = o;
      }
  return n;
}
function ZR(t, e) {
  return xl(QR, t, e || {});
}
function YR(t, e) {
  return xl(JR, t, e || {});
}
class XR {
  constructor(e) {
    (this.client = e),
      (this.enroll = this._enroll.bind(this)),
      (this.challenge = this._challenge.bind(this)),
      (this.verify = this._verify.bind(this)),
      (this.authenticate = this._authenticate.bind(this)),
      (this.register = this._register.bind(this));
  }
  async _enroll(e) {
    return this.client.mfa.enroll(
      Object.assign(Object.assign({}, e), { factorType: "webauthn" })
    );
  }
  async _challenge(
    { factorId: e, webauthn: r, friendlyName: n, signal: s },
    i
  ) {
    var o;
    try {
      const { data: a, error: l } = await this.client.mfa.challenge({
        factorId: e,
        webauthn: r,
      });
      if (!a) return { data: null, error: l };
      const u = s ?? BR.createNewAbortSignal();
      if (a.webauthn.type === "create") {
        const { user: c } = a.webauthn.credential_options.publicKey;
        if (!c.name) {
          const h = n;
          if (h) c.name = `${c.id}:${h}`;
          else {
            const d = (await this.client.getUser()).data.user,
              v =
                ((o = d == null ? void 0 : d.user_metadata) === null ||
                o === void 0
                  ? void 0
                  : o.name) ||
                (d == null ? void 0 : d.email) ||
                (d == null ? void 0 : d.id) ||
                "User";
            c.name = `${c.id}:${v}`;
          }
        }
        c.displayName || (c.displayName = c.name);
      }
      switch (a.webauthn.type) {
        case "create": {
          const c = ZR(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.create
            ),
            { data: h, error: f } = await KR({ publicKey: c, signal: u });
          return h
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: h },
                },
                error: null,
              }
            : { data: null, error: f };
        }
        case "request": {
          const c = YR(
              a.webauthn.credential_options.publicKey,
              i == null ? void 0 : i.request
            ),
            { data: h, error: f } = await GR(
              Object.assign(Object.assign({}, a.webauthn.credential_options), {
                publicKey: c,
                signal: u,
              })
            );
          return h
            ? {
                data: {
                  factorId: e,
                  challengeId: a.id,
                  webauthn: { type: a.webauthn.type, credential_response: h },
                },
                error: null,
              }
            : { data: null, error: f };
        }
      }
    } catch (a) {
      return V(a)
        ? { data: null, error: a }
        : { data: null, error: new $n("Unexpected error in challenge", a) };
    }
  }
  async _verify({ challengeId: e, factorId: r, webauthn: n }) {
    return this.client.mfa.verify({ factorId: r, challengeId: e, webauthn: n });
  }
  async _authenticate(
    {
      factorId: e,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i
  ) {
    if (!r)
      return {
        data: null,
        error: new Co("rpId is required for WebAuthn authentication"),
      };
    try {
      if (!vm())
        return {
          data: null,
          error: new $n("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this.challenge(
        { factorId: e, webauthn: { rpId: r, rpOrigins: n }, signal: s },
        { request: i }
      );
      if (!o) return { data: null, error: a };
      const { webauthn: l } = o;
      return this._verify({
        factorId: e,
        challengeId: o.challengeId,
        webauthn: {
          type: l.type,
          rpId: r,
          rpOrigins: n,
          credential_response: l.credential_response,
        },
      });
    } catch (o) {
      return V(o)
        ? { data: null, error: o }
        : { data: null, error: new $n("Unexpected error in authenticate", o) };
    }
  }
  async _register(
    {
      friendlyName: e,
      webauthn: {
        rpId: r = typeof window < "u" ? window.location.hostname : void 0,
        rpOrigins: n = typeof window < "u" ? [window.location.origin] : void 0,
        signal: s,
      } = {},
    },
    i
  ) {
    if (!r)
      return {
        data: null,
        error: new Co("rpId is required for WebAuthn registration"),
      };
    try {
      if (!vm())
        return {
          data: null,
          error: new $n("Browser does not support WebAuthn", null),
        };
      const { data: o, error: a } = await this._enroll({ friendlyName: e });
      if (!o)
        return (
          await this.client.mfa
            .listFactors()
            .then((c) => {
              var h;
              return (h = c.data) === null || h === void 0
                ? void 0
                : h.all.find(
                    (f) =>
                      f.factor_type === "webauthn" &&
                      f.friendly_name === e &&
                      f.status !== "unverified"
                  );
            })
            .then((c) =>
              c
                ? this.client.mfa.unenroll({
                    factorId: c == null ? void 0 : c.id,
                  })
                : void 0
            ),
          { data: null, error: a }
        );
      const { data: l, error: u } = await this._challenge(
        {
          factorId: o.id,
          friendlyName: o.friendly_name,
          webauthn: { rpId: r, rpOrigins: n },
          signal: s,
        },
        { create: i }
      );
      return l
        ? this._verify({
            factorId: o.id,
            challengeId: l.challengeId,
            webauthn: {
              rpId: r,
              rpOrigins: n,
              type: l.webauthn.type,
              credential_response: l.webauthn.credential_response,
            },
          })
        : { data: null, error: u };
    } catch (o) {
      return V(o)
        ? { data: null, error: o }
        : { data: null, error: new $n("Unexpected error in register", o) };
    }
  }
}
$R();
const eP = {
  url: JT,
  storageKey: ZT,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: YT,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1,
  throwOnError: !1,
  lockAcquireTimeout: 1e4,
};
async function wm(t, e, r) {
  return await r();
}
const gs = {};
class To {
  get jwks() {
    var e, r;
    return (r =
      (e = gs[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !==
      null && r !== void 0
      ? r
      : { keys: [] };
  }
  set jwks(e) {
    gs[this.storageKey] = Object.assign(
      Object.assign({}, gs[this.storageKey]),
      { jwks: e }
    );
  }
  get jwks_cached_at() {
    var e, r;
    return (r =
      (e = gs[this.storageKey]) === null || e === void 0
        ? void 0
        : e.cachedAt) !== null && r !== void 0
      ? r
      : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    gs[this.storageKey] = Object.assign(
      Object.assign({}, gs[this.storageKey]),
      { cachedAt: e }
    );
  }
  constructor(e) {
    var r, n, s;
    (this.userStorage = null),
      (this.memoryStorage = null),
      (this.stateChangeEmitters = new Map()),
      (this.autoRefreshTicker = null),
      (this.autoRefreshTickTimeout = null),
      (this.visibilityChangedCallback = null),
      (this.refreshingDeferred = null),
      (this.initializePromise = null),
      (this.detectSessionInUrl = !0),
      (this.hasCustomAuthorizationHeader = !1),
      (this.suppressGetSessionWarning = !1),
      (this.lockAcquired = !1),
      (this.pendingInLock = []),
      (this.broadcastChannel = null),
      (this.logger = console.log);
    const i = Object.assign(Object.assign({}, eP), e);
    if (
      ((this.storageKey = i.storageKey),
      (this.instanceID =
        (r = To.nextInstanceID[this.storageKey]) !== null && r !== void 0
          ? r
          : 0),
      (To.nextInstanceID[this.storageKey] = this.instanceID + 1),
      (this.logDebugMessages = !!i.debug),
      typeof i.debug == "function" && (this.logger = i.debug),
      this.instanceID > 0 && ze())
    ) {
      const o = `${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;
      console.warn(o), this.logDebugMessages && console.trace(o);
    }
    if (
      ((this.persistSession = i.persistSession),
      (this.autoRefreshToken = i.autoRefreshToken),
      (this.admin = new NR({ url: i.url, headers: i.headers, fetch: i.fetch })),
      (this.url = i.url),
      (this.headers = i.headers),
      (this.fetch = lw(i.fetch)),
      (this.lock = i.lock || wm),
      (this.detectSessionInUrl = i.detectSessionInUrl),
      (this.flowType = i.flowType),
      (this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader),
      (this.throwOnError = i.throwOnError),
      (this.lockAcquireTimeout = i.lockAcquireTimeout),
      i.lock
        ? (this.lock = i.lock)
        : this.persistSession &&
          ze() &&
          !(
            (n = globalThis == null ? void 0 : globalThis.navigator) === null ||
            n === void 0
          ) &&
          n.locks
        ? (this.lock = IR)
        : (this.lock = wm),
      this.jwks ||
        ((this.jwks = { keys: [] }),
        (this.jwks_cached_at = Number.MIN_SAFE_INTEGER)),
      (this.mfa = {
        verify: this._verify.bind(this),
        enroll: this._enroll.bind(this),
        unenroll: this._unenroll.bind(this),
        challenge: this._challenge.bind(this),
        listFactors: this._listFactors.bind(this),
        challengeAndVerify: this._challengeAndVerify.bind(this),
        getAuthenticatorAssuranceLevel:
          this._getAuthenticatorAssuranceLevel.bind(this),
        webauthn: new XR(this),
      }),
      (this.oauth = {
        getAuthorizationDetails: this._getAuthorizationDetails.bind(this),
        approveAuthorization: this._approveAuthorization.bind(this),
        denyAuthorization: this._denyAuthorization.bind(this),
        listGrants: this._listOAuthGrants.bind(this),
        revokeGrant: this._revokeOAuthGrant.bind(this),
      }),
      this.persistSession
        ? (i.storage
            ? (this.storage = i.storage)
            : aw()
            ? (this.storage = globalThis.localStorage)
            : ((this.memoryStorage = {}),
              (this.storage = ym(this.memoryStorage))),
          i.userStorage && (this.userStorage = i.userStorage))
        : ((this.memoryStorage = {}), (this.storage = ym(this.memoryStorage))),
      ze() &&
        globalThis.BroadcastChannel &&
        this.persistSession &&
        this.storageKey)
    ) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(
          this.storageKey
        );
      } catch (o) {
        console.error(
          "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
          o
        );
      }
      (s = this.broadcastChannel) === null ||
        s === void 0 ||
        s.addEventListener("message", async (o) => {
          this._debug(
            "received broadcast notification from other tab or client",
            o
          );
          try {
            await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
          } catch (a) {
            this._debug("#broadcastChannel", "error", a);
          }
        });
    }
    this.initialize().catch((o) => {
      this._debug("#initialize()", "error", o);
    });
  }
  isThrowOnErrorEnabled() {
    return this.throwOnError;
  }
  _returnResult(e) {
    if (this.throwOnError && e && e.error) throw e.error;
    return e;
  }
  _logPrefix() {
    return `GoTrueClient@${this.storageKey}:${
      this.instanceID
    } (${sw}) ${new Date().toISOString()}`;
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(this._logPrefix(), ...e), this;
  }
  async initialize() {
    return this.initializePromise
      ? await this.initializePromise
      : ((this.initializePromise = (async () =>
          await this._acquireLock(
            this.lockAcquireTimeout,
            async () => await this._initialize()
          ))()),
        await this.initializePromise);
  }
  async _initialize() {
    var e;
    try {
      let r = {},
        n = "none";
      if (
        (ze() &&
          ((r = hR(window.location.href)),
          this._isImplicitGrantCallback(r)
            ? (n = "implicit")
            : (await this._isPKCECallback(r)) && (n = "pkce")),
        ze() && this.detectSessionInUrl && n !== "none")
      ) {
        const { data: s, error: i } = await this._getSessionFromURL(r, n);
        if (i) {
          if (
            (this._debug(
              "#_initialize()",
              "error detecting session from URL",
              i
            ),
            nR(i))
          ) {
            const l =
              (e = i.details) === null || e === void 0 ? void 0 : e.code;
            if (
              l === "identity_already_exists" ||
              l === "identity_not_found" ||
              l === "single_identity_not_deletable"
            )
              return { error: i };
          }
          return { error: i };
        }
        const { session: o, redirectType: a } = s;
        return (
          this._debug(
            "#_initialize()",
            "detected session in URL",
            o,
            "redirect type",
            a
          ),
          await this._saveSession(o),
          setTimeout(async () => {
            a === "recovery"
              ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o)
              : await this._notifyAllSubscribers("SIGNED_IN", o);
          }, 0),
          { error: null }
        );
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (r) {
      return V(r)
        ? this._returnResult({ error: r })
        : this._returnResult({
            error: new $n("Unexpected error during initialization", r),
          });
    } finally {
      await this._handleVisibilityChange(),
        this._debug("#_initialize()", "end");
    }
  }
  async signInAnonymously(e) {
    var r, n, s;
    try {
      const i = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            data:
              (n =
                (r = e == null ? void 0 : e.options) === null || r === void 0
                  ? void 0
                  : r.data) !== null && n !== void 0
                ? n
                : {},
            gotrue_meta_security: {
              captcha_token:
                (s = e == null ? void 0 : e.options) === null || s === void 0
                  ? void 0
                  : s.captchaToken,
            },
          },
          xform: Mt,
        }),
        { data: o, error: a } = i;
      if (a || !o)
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if (V(i))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signUp(e) {
    var r, n, s;
    try {
      let i;
      if ("email" in e) {
        const { email: c, password: h, options: f } = e;
        let d = null,
          v = null;
        this.flowType === "pkce" &&
          ([d, v] = await fs(this.storage, this.storageKey)),
          (i = await G(this.fetch, "POST", `${this.url}/signup`, {
            headers: this.headers,
            redirectTo: f == null ? void 0 : f.emailRedirectTo,
            body: {
              email: c,
              password: h,
              data:
                (r = f == null ? void 0 : f.data) !== null && r !== void 0
                  ? r
                  : {},
              gotrue_meta_security: {
                captcha_token: f == null ? void 0 : f.captchaToken,
              },
              code_challenge: d,
              code_challenge_method: v,
            },
            xform: Mt,
          }));
      } else if ("phone" in e) {
        const { phone: c, password: h, options: f } = e;
        i = await G(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: c,
            password: h,
            data:
              (n = f == null ? void 0 : f.data) !== null && n !== void 0
                ? n
                : {},
            channel:
              (s = f == null ? void 0 : f.channel) !== null && s !== void 0
                ? s
                : "sms",
            gotrue_meta_security: {
              captcha_token: f == null ? void 0 : f.captchaToken,
            },
          },
          xform: Mt,
        });
      } else
        throw new _a(
          "You must provide either an email or phone number and a password"
        );
      const { data: o, error: a } = i;
      if (a || !o)
        return (
          await Fe(this.storage, `${this.storageKey}-code-verifier`),
          this._returnResult({ data: { user: null, session: null }, error: a })
        );
      const l = o.session,
        u = o.user;
      return (
        o.session &&
          (await this._saveSession(o.session),
          await this._notifyAllSubscribers("SIGNED_IN", l)),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (i) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(i)))
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithPassword(e) {
    try {
      let r;
      if ("email" in e) {
        const { email: i, password: o, options: a } = e;
        r = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              email: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: mm,
          }
        );
      } else if ("phone" in e) {
        const { phone: i, password: o, options: a } = e;
        r = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=password`,
          {
            headers: this.headers,
            body: {
              phone: i,
              password: o,
              gotrue_meta_security: {
                captcha_token: a == null ? void 0 : a.captchaToken,
              },
            },
            xform: mm,
          }
        );
      } else
        throw new _a(
          "You must provide either an email or phone number and a password"
        );
      const { data: n, error: s } = r;
      if (s)
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      if (!n || !n.session || !n.user) {
        const i = new hs();
        return this._returnResult({
          data: { user: null, session: null },
          error: i,
        });
      }
      return (
        n.session &&
          (await this._saveSession(n.session),
          await this._notifyAllSubscribers("SIGNED_IN", n.session)),
        this._returnResult({
          data: Object.assign(
            { user: n.user, session: n.session },
            n.weak_password ? { weakPassword: n.weak_password } : null
          ),
          error: s,
        })
      );
    } catch (r) {
      if (V(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOAuth(e) {
    var r, n, s, i;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo:
        (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo,
      scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams:
        (s = e.options) === null || s === void 0 ? void 0 : s.queryParams,
      skipBrowserRedirect:
        (i = e.options) === null || i === void 0
          ? void 0
          : i.skipBrowserRedirect,
    });
  }
  async exchangeCodeForSession(e) {
    return (
      await this.initializePromise,
      this._acquireLock(this.lockAcquireTimeout, async () =>
        this._exchangeCodeForSession(e)
      )
    );
  }
  async signInWithWeb3(e) {
    const { chain: r } = e;
    switch (r) {
      case "ethereum":
        return await this.signInWithEthereum(e);
      case "solana":
        return await this.signInWithSolana(e);
      default:
        throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
    }
  }
  async signInWithEthereum(e) {
    var r, n, s, i, o, a, l, u, c, h, f;
    let d, v;
    if ("message" in e) (d = e.message), (v = e.signature);
    else {
      const { chain: p, wallet: x, statement: g, options: m } = e;
      let y;
      if (ze())
        if (typeof x == "object") y = x;
        else {
          const T = window;
          if (
            "ethereum" in T &&
            typeof T.ethereum == "object" &&
            "request" in T.ethereum &&
            typeof T.ethereum.request == "function"
          )
            y = T.ethereum;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof x != "object" || !(m != null && m.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        y = x;
      }
      const _ = new URL(
          (r = m == null ? void 0 : m.url) !== null && r !== void 0
            ? r
            : window.location.href
        ),
        S = await y
          .request({ method: "eth_requestAccounts" })
          .then((T) => T)
          .catch(() => {
            throw new Error(
              "@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid"
            );
          });
      if (!S || S.length === 0)
        throw new Error(
          "@supabase/auth-js: No accounts available. Please ensure the wallet is connected."
        );
      const E = cw(S[0]);
      let k =
        (n = m == null ? void 0 : m.signInWithEthereum) === null || n === void 0
          ? void 0
          : n.chainId;
      if (!k) {
        const T = await y.request({ method: "eth_chainId" });
        k = LR(T);
      }
      const C = {
        domain: _.host,
        address: E,
        statement: g,
        uri: _.href,
        version: "1",
        chainId: k,
        nonce:
          (s = m == null ? void 0 : m.signInWithEthereum) === null ||
          s === void 0
            ? void 0
            : s.nonce,
        issuedAt:
          (o =
            (i = m == null ? void 0 : m.signInWithEthereum) === null ||
            i === void 0
              ? void 0
              : i.issuedAt) !== null && o !== void 0
            ? o
            : new Date(),
        expirationTime:
          (a = m == null ? void 0 : m.signInWithEthereum) === null ||
          a === void 0
            ? void 0
            : a.expirationTime,
        notBefore:
          (l = m == null ? void 0 : m.signInWithEthereum) === null ||
          l === void 0
            ? void 0
            : l.notBefore,
        requestId:
          (u = m == null ? void 0 : m.signInWithEthereum) === null ||
          u === void 0
            ? void 0
            : u.requestId,
        resources:
          (c = m == null ? void 0 : m.signInWithEthereum) === null ||
          c === void 0
            ? void 0
            : c.resources,
      };
      (d = DR(C)),
        (v = await y.request({ method: "personal_sign", params: [MR(d), E] }));
    }
    try {
      const { data: p, error: x } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "ethereum", message: d, signature: v },
            !((h = e.options) === null || h === void 0) && h.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (f = e.options) === null || f === void 0
                        ? void 0
                        : f.captchaToken,
                  },
                }
              : null
          ),
          xform: Mt,
        }
      );
      if (x) throw x;
      if (!p || !p.session || !p.user) {
        const g = new hs();
        return this._returnResult({
          data: { user: null, session: null },
          error: g,
        });
      }
      return (
        p.session &&
          (await this._saveSession(p.session),
          await this._notifyAllSubscribers("SIGNED_IN", p.session)),
        this._returnResult({ data: Object.assign({}, p), error: x })
      );
    } catch (p) {
      if (V(p))
        return this._returnResult({
          data: { user: null, session: null },
          error: p,
        });
      throw p;
    }
  }
  async signInWithSolana(e) {
    var r, n, s, i, o, a, l, u, c, h, f, d;
    let v, p;
    if ("message" in e) (v = e.message), (p = e.signature);
    else {
      const { chain: x, wallet: g, statement: m, options: y } = e;
      let _;
      if (ze())
        if (typeof g == "object") _ = g;
        else {
          const E = window;
          if (
            "solana" in E &&
            typeof E.solana == "object" &&
            (("signIn" in E.solana && typeof E.solana.signIn == "function") ||
              ("signMessage" in E.solana &&
                typeof E.solana.signMessage == "function"))
          )
            _ = E.solana;
          else
            throw new Error(
              "@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead."
            );
        }
      else {
        if (typeof g != "object" || !(y != null && y.url))
          throw new Error(
            "@supabase/auth-js: Both wallet and url must be specified in non-browser environments."
          );
        _ = g;
      }
      const S = new URL(
        (r = y == null ? void 0 : y.url) !== null && r !== void 0
          ? r
          : window.location.href
      );
      if ("signIn" in _ && _.signIn) {
        const E = await _.signIn(
          Object.assign(
            Object.assign(
              Object.assign(
                { issuedAt: new Date().toISOString() },
                y == null ? void 0 : y.signInWithSolana
              ),
              { version: "1", domain: S.host, uri: S.href }
            ),
            m ? { statement: m } : null
          )
        );
        let k;
        if (Array.isArray(E) && E[0] && typeof E[0] == "object") k = E[0];
        else if (
          E &&
          typeof E == "object" &&
          "signedMessage" in E &&
          "signature" in E
        )
          k = E;
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() returned unrecognized value"
          );
        if (
          "signedMessage" in k &&
          "signature" in k &&
          (typeof k.signedMessage == "string" ||
            k.signedMessage instanceof Uint8Array) &&
          k.signature instanceof Uint8Array
        )
          (v =
            typeof k.signedMessage == "string"
              ? k.signedMessage
              : new TextDecoder().decode(k.signedMessage)),
            (p = k.signature);
        else
          throw new Error(
            "@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields"
          );
      } else {
        if (
          !("signMessage" in _) ||
          typeof _.signMessage != "function" ||
          !("publicKey" in _) ||
          typeof _ != "object" ||
          !_.publicKey ||
          !("toBase58" in _.publicKey) ||
          typeof _.publicKey.toBase58 != "function"
        )
          throw new Error(
            "@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API"
          );
        v = [
          `${S.host} wants you to sign in with your Solana account:`,
          _.publicKey.toBase58(),
          ...(m ? ["", m, ""] : [""]),
          "Version: 1",
          `URI: ${S.href}`,
          `Issued At: ${
            (s =
              (n = y == null ? void 0 : y.signInWithSolana) === null ||
              n === void 0
                ? void 0
                : n.issuedAt) !== null && s !== void 0
              ? s
              : new Date().toISOString()
          }`,
          ...(!(
            (i = y == null ? void 0 : y.signInWithSolana) === null ||
            i === void 0
          ) && i.notBefore
            ? [`Not Before: ${y.signInWithSolana.notBefore}`]
            : []),
          ...(!(
            (o = y == null ? void 0 : y.signInWithSolana) === null ||
            o === void 0
          ) && o.expirationTime
            ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`]
            : []),
          ...(!(
            (a = y == null ? void 0 : y.signInWithSolana) === null ||
            a === void 0
          ) && a.chainId
            ? [`Chain ID: ${y.signInWithSolana.chainId}`]
            : []),
          ...(!(
            (l = y == null ? void 0 : y.signInWithSolana) === null ||
            l === void 0
          ) && l.nonce
            ? [`Nonce: ${y.signInWithSolana.nonce}`]
            : []),
          ...(!(
            (u = y == null ? void 0 : y.signInWithSolana) === null ||
            u === void 0
          ) && u.requestId
            ? [`Request ID: ${y.signInWithSolana.requestId}`]
            : []),
          ...(!(
            (h =
              (c = y == null ? void 0 : y.signInWithSolana) === null ||
              c === void 0
                ? void 0
                : c.resources) === null || h === void 0
          ) && h.length
            ? [
                "Resources",
                ...y.signInWithSolana.resources.map((k) => `- ${k}`),
              ]
            : []),
        ].join(`
`);
        const E = await _.signMessage(new TextEncoder().encode(v), "utf8");
        if (!E || !(E instanceof Uint8Array))
          throw new Error(
            "@supabase/auth-js: Wallet signMessage() API returned an recognized value"
          );
        p = E;
      }
    }
    try {
      const { data: x, error: g } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=web3`,
        {
          headers: this.headers,
          body: Object.assign(
            { chain: "solana", message: v, signature: Un(p) },
            !((f = e.options) === null || f === void 0) && f.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token:
                      (d = e.options) === null || d === void 0
                        ? void 0
                        : d.captchaToken,
                  },
                }
              : null
          ),
          xform: Mt,
        }
      );
      if (g) throw g;
      if (!x || !x.session || !x.user) {
        const m = new hs();
        return this._returnResult({
          data: { user: null, session: null },
          error: m,
        });
      }
      return (
        x.session &&
          (await this._saveSession(x.session),
          await this._notifyAllSubscribers("SIGNED_IN", x.session)),
        this._returnResult({ data: Object.assign({}, x), error: g })
      );
    } catch (x) {
      if (V(x))
        return this._returnResult({
          data: { user: null, session: null },
          error: x,
        });
      throw x;
    }
  }
  async _exchangeCodeForSession(e) {
    const r = await On(this.storage, `${this.storageKey}-code-verifier`),
      [n, s] = (r ?? "").split("/");
    try {
      if (!n && this.flowType === "pkce") throw new sR();
      const { data: i, error: o } = await G(
        this.fetch,
        "POST",
        `${this.url}/token?grant_type=pkce`,
        {
          headers: this.headers,
          body: { auth_code: e, code_verifier: n },
          xform: Mt,
        }
      );
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), o))
        throw o;
      if (!i || !i.session || !i.user) {
        const a = new hs();
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: a,
        });
      }
      return (
        i.session &&
          (await this._saveSession(i.session),
          await this._notifyAllSubscribers("SIGNED_IN", i.session)),
        this._returnResult({
          data: Object.assign(Object.assign({}, i), {
            redirectType: s ?? null,
          }),
          error: o,
        })
      );
    } catch (i) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(i)))
        return this._returnResult({
          data: { user: null, session: null, redirectType: null },
          error: i,
        });
      throw i;
    }
  }
  async signInWithIdToken(e) {
    try {
      const {
          options: r,
          provider: n,
          token: s,
          access_token: i,
          nonce: o,
        } = e,
        a = await G(
          this.fetch,
          "POST",
          `${this.url}/token?grant_type=id_token`,
          {
            headers: this.headers,
            body: {
              provider: n,
              id_token: s,
              access_token: i,
              nonce: o,
              gotrue_meta_security: {
                captcha_token: r == null ? void 0 : r.captchaToken,
              },
            },
            xform: Mt,
          }
        ),
        { data: l, error: u } = a;
      if (u)
        return this._returnResult({
          data: { user: null, session: null },
          error: u,
        });
      if (!l || !l.session || !l.user) {
        const c = new hs();
        return this._returnResult({
          data: { user: null, session: null },
          error: c,
        });
      }
      return (
        l.session &&
          (await this._saveSession(l.session),
          await this._notifyAllSubscribers("SIGNED_IN", l.session)),
        this._returnResult({ data: l, error: u })
      );
    } catch (r) {
      if (V(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async signInWithOtp(e) {
    var r, n, s, i, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let u = null,
          c = null;
        this.flowType === "pkce" &&
          ([u, c] = await fs(this.storage, this.storageKey));
        const { error: h } = await G(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data:
              (r = l == null ? void 0 : l.data) !== null && r !== void 0
                ? r
                : {},
            create_user:
              (n = l == null ? void 0 : l.shouldCreateUser) !== null &&
              n !== void 0
                ? n
                : !0,
            gotrue_meta_security: {
              captcha_token: l == null ? void 0 : l.captchaToken,
            },
            code_challenge: u,
            code_challenge_method: c,
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo,
        });
        return this._returnResult({
          data: { user: null, session: null },
          error: h,
        });
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e,
          { data: u, error: c } = await G(
            this.fetch,
            "POST",
            `${this.url}/otp`,
            {
              headers: this.headers,
              body: {
                phone: a,
                data:
                  (s = l == null ? void 0 : l.data) !== null && s !== void 0
                    ? s
                    : {},
                create_user:
                  (i = l == null ? void 0 : l.shouldCreateUser) !== null &&
                  i !== void 0
                    ? i
                    : !0,
                gotrue_meta_security: {
                  captcha_token: l == null ? void 0 : l.captchaToken,
                },
                channel:
                  (o = l == null ? void 0 : l.channel) !== null && o !== void 0
                    ? o
                    : "sms",
              },
            }
          );
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: u == null ? void 0 : u.message_id,
          },
          error: c,
        });
      }
      throw new _a("You must provide either an email or phone number.");
    } catch (a) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(a)))
        return this._returnResult({
          data: { user: null, session: null },
          error: a,
        });
      throw a;
    }
  }
  async verifyOtp(e) {
    var r, n;
    try {
      let s, i;
      "options" in e &&
        ((s = (r = e.options) === null || r === void 0 ? void 0 : r.redirectTo),
        (i =
          (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken));
      const { data: o, error: a } = await G(
        this.fetch,
        "POST",
        `${this.url}/verify`,
        {
          headers: this.headers,
          body: Object.assign(Object.assign({}, e), {
            gotrue_meta_security: { captcha_token: i },
          }),
          redirectTo: s,
          xform: Mt,
        }
      );
      if (a) throw a;
      if (!o) throw new Error("An error occurred on token verification.");
      const l = o.session,
        u = o.user;
      return (
        l != null &&
          l.access_token &&
          (await this._saveSession(l),
          await this._notifyAllSubscribers(
            e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
            l
          )),
        this._returnResult({ data: { user: u, session: l }, error: null })
      );
    } catch (s) {
      if (V(s))
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      throw s;
    }
  }
  async signInWithSSO(e) {
    var r, n, s, i, o;
    try {
      let a = null,
        l = null;
      this.flowType === "pkce" &&
        ([a, l] = await fs(this.storage, this.storageKey));
      const u = await G(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  {},
                  "providerId" in e ? { provider_id: e.providerId } : null
                ),
                "domain" in e ? { domain: e.domain } : null
              ),
              {
                redirect_to:
                  (n =
                    (r = e.options) === null || r === void 0
                      ? void 0
                      : r.redirectTo) !== null && n !== void 0
                    ? n
                    : void 0,
              }
            ),
            !((s = e == null ? void 0 : e.options) === null || s === void 0) &&
              s.captchaToken
              ? {
                  gotrue_meta_security: {
                    captcha_token: e.options.captchaToken,
                  },
                }
              : null
          ),
          {
            skip_http_redirect: !0,
            code_challenge: a,
            code_challenge_method: l,
          }
        ),
        headers: this.headers,
        xform: PR,
      });
      return (
        !((i = u.data) === null || i === void 0) &&
          i.url &&
          ze() &&
          !(
            !((o = e.options) === null || o === void 0) && o.skipBrowserRedirect
          ) &&
          window.location.assign(u.data.url),
        this._returnResult(u)
      );
    } catch (a) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(a)))
        return this._returnResult({ data: null, error: a });
      throw a;
    }
  }
  async reauthenticate() {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._reauthenticate()
      )
    );
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: r },
          error: n,
        } = e;
        if (n) throw n;
        if (!r) throw new dt();
        const { error: s } = await G(
          this.fetch,
          "GET",
          `${this.url}/reauthenticate`,
          { headers: this.headers, jwt: r.access_token }
        );
        return this._returnResult({
          data: { user: null, session: null },
          error: s,
        });
      });
    } catch (e) {
      if (V(e))
        return this._returnResult({
          data: { user: null, session: null },
          error: e,
        });
      throw e;
    }
  }
  async resend(e) {
    try {
      const r = `${this.url}/resend`;
      if ("email" in e) {
        const { email: n, type: s, options: i } = e,
          { error: o } = await G(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              email: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
            redirectTo: i == null ? void 0 : i.emailRedirectTo,
          });
        return this._returnResult({
          data: { user: null, session: null },
          error: o,
        });
      } else if ("phone" in e) {
        const { phone: n, type: s, options: i } = e,
          { data: o, error: a } = await G(this.fetch, "POST", r, {
            headers: this.headers,
            body: {
              phone: n,
              type: s,
              gotrue_meta_security: {
                captcha_token: i == null ? void 0 : i.captchaToken,
              },
            },
          });
        return this._returnResult({
          data: {
            user: null,
            session: null,
            messageId: o == null ? void 0 : o.message_id,
          },
          error: a,
        });
      }
      throw new _a(
        "You must provide either an email or phone number and a type"
      );
    } catch (r) {
      if (V(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async getSession() {
    return (
      await this.initializePromise,
      await this._acquireLock(this.lockAcquireTimeout, async () =>
        this._useSession(async (r) => r)
      )
    );
  }
  async _acquireLock(e, r) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length
            ? this.pendingInLock[this.pendingInLock.length - 1]
            : Promise.resolve(),
          s = (async () => (await n, await r()))();
        return (
          this.pendingInLock.push(
            (async () => {
              try {
                await s;
              } catch {}
            })()
          ),
          s
        );
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug(
          "#_acquireLock",
          "lock acquired for storage key",
          this.storageKey
        );
        try {
          this.lockAcquired = !0;
          const n = r();
          for (
            this.pendingInLock.push(
              (async () => {
                try {
                  await n;
                } catch {}
              })()
            ),
              await n;
            this.pendingInLock.length;

          ) {
            const s = [...this.pendingInLock];
            await Promise.all(s), this.pendingInLock.splice(0, s.length);
          }
          return await n;
        } finally {
          this._debug(
            "#_acquireLock",
            "lock released for storage key",
            this.storageKey
          ),
            (this.lockAcquired = !1);
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const r = await this.__loadSession();
      return await e(r);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  async __loadSession() {
    this._debug("#__loadSession()", "begin"),
      this.lockAcquired ||
        this._debug(
          "#__loadSession()",
          "used outside of an acquired lock!",
          new Error().stack
        );
    try {
      let e = null;
      const r = await On(this.storage, this.storageKey);
      if (
        (this._debug("#getSession()", "session from storage", r),
        r !== null &&
          (this._isValidSession(r)
            ? (e = r)
            : (this._debug(
                "#getSession()",
                "session from storage is not valid"
              ),
              await this._removeSession())),
        !e)
      )
        return { data: { session: null }, error: null };
      const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < Ku : !1;
      if (
        (this._debug(
          "#__loadSession()",
          `session has${n ? "" : " not"} expired`,
          "expires_at",
          e.expires_at
        ),
        !n)
      ) {
        if (this.userStorage) {
          const o = await On(this.userStorage, this.storageKey + "-user");
          o != null && o.user ? (e.user = o.user) : (e.user = Ju());
        }
        if (
          this.storage.isServer &&
          e.user &&
          !e.user.__isUserNotAvailableProxy
        ) {
          const o = { value: this.suppressGetSessionWarning };
          (e.user = ER(e.user, o)),
            o.value && (this.suppressGetSessionWarning = !0);
        }
        return { data: { session: e }, error: null };
      }
      const { data: s, error: i } = await this._callRefreshToken(
        e.refresh_token
      );
      return i
        ? this._returnResult({ data: { session: null }, error: i })
        : this._returnResult({ data: { session: s }, error: null });
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  async getUser(e) {
    if (e) return await this._getUser(e);
    await this.initializePromise;
    const r = await this._acquireLock(
      this.lockAcquireTimeout,
      async () => await this._getUser()
    );
    return r.data.user && (this.suppressGetSessionWarning = !0), r;
  }
  async _getUser(e) {
    try {
      return e
        ? await G(this.fetch, "GET", `${this.url}/user`, {
            headers: this.headers,
            jwt: e,
            xform: qr,
          })
        : await this._useSession(async (r) => {
            var n, s, i;
            const { data: o, error: a } = r;
            if (a) throw a;
            return !(
              !((n = o.session) === null || n === void 0) && n.access_token
            ) && !this.hasCustomAuthorizationHeader
              ? { data: { user: null }, error: new dt() }
              : await G(this.fetch, "GET", `${this.url}/user`, {
                  headers: this.headers,
                  jwt:
                    (i =
                      (s = o.session) === null || s === void 0
                        ? void 0
                        : s.access_token) !== null && i !== void 0
                      ? i
                      : void 0,
                  xform: qr,
                });
          });
    } catch (r) {
      if (V(r))
        return (
          Gu(r) &&
            (await this._removeSession(),
            await Fe(this.storage, `${this.storageKey}-code-verifier`)),
          this._returnResult({ data: { user: null }, error: r })
        );
      throw r;
    }
  }
  async updateUser(e, r = {}) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._updateUser(e, r)
      )
    );
  }
  async _updateUser(e, r = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: s, error: i } = n;
        if (i) throw i;
        if (!s.session) throw new dt();
        const o = s.session;
        let a = null,
          l = null;
        this.flowType === "pkce" &&
          e.email != null &&
          ([a, l] = await fs(this.storage, this.storageKey));
        const { data: u, error: c } = await G(
          this.fetch,
          "PUT",
          `${this.url}/user`,
          {
            headers: this.headers,
            redirectTo: r == null ? void 0 : r.emailRedirectTo,
            body: Object.assign(Object.assign({}, e), {
              code_challenge: a,
              code_challenge_method: l,
            }),
            jwt: o.access_token,
            xform: qr,
          }
        );
        if (c) throw c;
        return (
          (o.user = u.user),
          await this._saveSession(o),
          await this._notifyAllSubscribers("USER_UPDATED", o),
          this._returnResult({ data: { user: o.user }, error: null })
        );
      });
    } catch (n) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(n)))
        return this._returnResult({ data: { user: null }, error: n });
      throw n;
    }
  }
  async setSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._setSession(e)
      )
    );
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token) throw new dt();
      const r = Date.now() / 1e3;
      let n = r,
        s = !0,
        i = null;
      const { payload: o } = Sa(e.access_token);
      if ((o.exp && ((n = o.exp), (s = n <= r)), s)) {
        const { data: a, error: l } = await this._callRefreshToken(
          e.refresh_token
        );
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        if (!a) return { data: { user: null, session: null }, error: null };
        i = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          return this._returnResult({
            data: { user: null, session: null },
            error: l,
          });
        (i = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - r,
          expires_at: n,
        }),
          await this._saveSession(i),
          await this._notifyAllSubscribers("SIGNED_IN", i);
      }
      return this._returnResult({
        data: { user: i.user, session: i },
        error: null,
      });
    } catch (r) {
      if (V(r))
        return this._returnResult({
          data: { session: null, user: null },
          error: r,
        });
      throw r;
    }
  }
  async refreshSession(e) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._refreshSession(e)
      )
    );
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (r) => {
        var n;
        if (!e) {
          const { data: o, error: a } = r;
          if (a) throw a;
          e = (n = o.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(e != null && e.refresh_token)) throw new dt();
        const { data: s, error: i } = await this._callRefreshToken(
          e.refresh_token
        );
        return i
          ? this._returnResult({
              data: { user: null, session: null },
              error: i,
            })
          : s
          ? this._returnResult({
              data: { user: s.user, session: s },
              error: null,
            })
          : this._returnResult({
              data: { user: null, session: null },
              error: null,
            });
      });
    } catch (r) {
      if (V(r))
        return this._returnResult({
          data: { user: null, session: null },
          error: r,
        });
      throw r;
    }
  }
  async _getSessionFromURL(e, r) {
    try {
      if (!ze()) throw new ka("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ka(
          e.error_description ||
            "Error in URL with unspecified error_description",
          {
            error: e.error || "unspecified_error",
            code: e.error_code || "unspecified_code",
          }
        );
      switch (r) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new lm("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ka("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (r === "pkce") {
        if (
          (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
        )
          throw new lm("No code detected.");
        const { data: m, error: y } = await this._exchangeCodeForSession(
          e.code
        );
        if (y) throw y;
        const _ = new URL(window.location.href);
        return (
          _.searchParams.delete("code"),
          window.history.replaceState(window.history.state, "", _.toString()),
          { data: { session: m.session, redirectType: null }, error: null }
        );
      }
      const {
        provider_token: n,
        provider_refresh_token: s,
        access_token: i,
        refresh_token: o,
        expires_in: a,
        expires_at: l,
        token_type: u,
      } = e;
      if (!i || !a || !o || !u) throw new ka("No session defined in URL");
      const c = Math.round(Date.now() / 1e3),
        h = parseInt(a);
      let f = c + h;
      l && (f = parseInt(l));
      const d = f - c;
      d * 1e3 <= ws &&
        console.warn(
          `@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${h}s`
        );
      const v = f - h;
      c - v >= 120
        ? console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
            v,
            f,
            c
          )
        : c - v < 0 &&
          console.warn(
            "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
            v,
            f,
            c
          );
      const { data: p, error: x } = await this._getUser(i);
      if (x) throw x;
      const g = {
        provider_token: n,
        provider_refresh_token: s,
        access_token: i,
        expires_in: h,
        expires_at: f,
        refresh_token: o,
        token_type: u,
        user: p.user,
      };
      return (
        (window.location.hash = ""),
        this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
        this._returnResult({
          data: { session: g, redirectType: e.type },
          error: null,
        })
      );
    } catch (n) {
      if (V(n))
        return this._returnResult({
          data: { session: null, redirectType: null },
          error: n,
        });
      throw n;
    }
  }
  _isImplicitGrantCallback(e) {
    return typeof this.detectSessionInUrl == "function"
      ? this.detectSessionInUrl(new URL(window.location.href), e)
      : !!(e.access_token || e.error_description);
  }
  async _isPKCECallback(e) {
    const r = await On(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && r);
  }
  async signOut(e = { scope: "global" }) {
    return (
      await this.initializePromise,
      await this._acquireLock(
        this.lockAcquireTimeout,
        async () => await this._signOut(e)
      )
    );
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (r) => {
      var n;
      const { data: s, error: i } = r;
      if (i && !Gu(i)) return this._returnResult({ error: i });
      const o =
        (n = s.session) === null || n === void 0 ? void 0 : n.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (
          a &&
          !(
            (rR(a) &&
              (a.status === 404 || a.status === 401 || a.status === 403)) ||
            Gu(a)
          )
        )
          return this._returnResult({ error: a });
      }
      return (
        e !== "others" &&
          (await this._removeSession(),
          await Fe(this.storage, `${this.storageKey}-code-verifier`)),
        this._returnResult({ error: null })
      );
    });
  }
  onAuthStateChange(e) {
    const r = dR(),
      n = {
        id: r,
        callback: e,
        unsubscribe: () => {
          this._debug(
            "#unsubscribe()",
            "state change callback with id removed",
            r
          ),
            this.stateChangeEmitters.delete(r);
        },
      };
    return (
      this._debug("#onAuthStateChange()", "registered callback with id", r),
      this.stateChangeEmitters.set(r, n),
      (async () => (
        await this.initializePromise,
        await this._acquireLock(this.lockAcquireTimeout, async () => {
          this._emitInitialSession(r);
        })
      ))(),
      { data: { subscription: n } }
    );
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (r) => {
      var n, s;
      try {
        const {
          data: { session: i },
          error: o,
        } = r;
        if (o) throw o;
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0
          ? void 0
          : n.callback("INITIAL_SESSION", i)),
          this._debug("INITIAL_SESSION", "callback id", e, "session", i);
      } catch (i) {
        await ((s = this.stateChangeEmitters.get(e)) === null || s === void 0
          ? void 0
          : s.callback("INITIAL_SESSION", null)),
          this._debug("INITIAL_SESSION", "callback id", e, "error", i),
          console.error(i);
      }
    });
  }
  async resetPasswordForEmail(e, r = {}) {
    let n = null,
      s = null;
    this.flowType === "pkce" &&
      ([n, s] = await fs(this.storage, this.storageKey, !0));
    try {
      return await G(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: n,
          code_challenge_method: s,
          gotrue_meta_security: { captcha_token: r.captchaToken },
        },
        headers: this.headers,
        redirectTo: r.redirectTo,
      });
    } catch (i) {
      if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(i)))
        return this._returnResult({ data: null, error: i });
      throw i;
    }
  }
  async getUserIdentities() {
    var e;
    try {
      const { data: r, error: n } = await this.getUser();
      if (n) throw n;
      return this._returnResult({
        data: {
          identities: (e = r.user.identities) !== null && e !== void 0 ? e : [],
        },
        error: null,
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async linkIdentity(e) {
    return "token" in e
      ? this.linkIdentityIdToken(e)
      : this.linkIdentityOAuth(e);
  }
  async linkIdentityOAuth(e) {
    var r;
    try {
      const { data: n, error: s } = await this._useSession(async (i) => {
        var o, a, l, u, c;
        const { data: h, error: f } = i;
        if (f) throw f;
        const d = await this._getUrlForProvider(
          `${this.url}/user/identities/authorize`,
          e.provider,
          {
            redirectTo:
              (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
            scopes:
              (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
            queryParams:
              (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
            skipBrowserRedirect: !0,
          }
        );
        return await G(this.fetch, "GET", d, {
          headers: this.headers,
          jwt:
            (c =
              (u = h.session) === null || u === void 0
                ? void 0
                : u.access_token) !== null && c !== void 0
              ? c
              : void 0,
        });
      });
      if (s) throw s;
      return (
        ze() &&
          !(
            !((r = e.options) === null || r === void 0) && r.skipBrowserRedirect
          ) &&
          window.location.assign(n == null ? void 0 : n.url),
        this._returnResult({
          data: { provider: e.provider, url: n == null ? void 0 : n.url },
          error: null,
        })
      );
    } catch (n) {
      if (V(n))
        return this._returnResult({
          data: { provider: e.provider, url: null },
          error: n,
        });
      throw n;
    }
  }
  async linkIdentityIdToken(e) {
    return await this._useSession(async (r) => {
      var n;
      try {
        const {
          error: s,
          data: { session: i },
        } = r;
        if (s) throw s;
        const {
            options: o,
            provider: a,
            token: l,
            access_token: u,
            nonce: c,
          } = e,
          h = await G(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=id_token`,
            {
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.access_token) !== null &&
                n !== void 0
                  ? n
                  : void 0,
              body: {
                provider: a,
                id_token: l,
                access_token: u,
                nonce: c,
                link_identity: !0,
                gotrue_meta_security: {
                  captcha_token: o == null ? void 0 : o.captchaToken,
                },
              },
              xform: Mt,
            }
          ),
          { data: f, error: d } = h;
        return d
          ? this._returnResult({
              data: { user: null, session: null },
              error: d,
            })
          : !f || !f.session || !f.user
          ? this._returnResult({
              data: { user: null, session: null },
              error: new hs(),
            })
          : (f.session &&
              (await this._saveSession(f.session),
              await this._notifyAllSubscribers("USER_UPDATED", f.session)),
            this._returnResult({ data: f, error: d }));
      } catch (s) {
        if ((await Fe(this.storage, `${this.storageKey}-code-verifier`), V(s)))
          return this._returnResult({
            data: { user: null, session: null },
            error: s,
          });
        throw s;
      }
    });
  }
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) throw o;
        return await G(
          this.fetch,
          "DELETE",
          `${this.url}/user/identities/${e.identity_id}`,
          {
            headers: this.headers,
            jwt:
              (s =
                (n = i.session) === null || n === void 0
                  ? void 0
                  : n.access_token) !== null && s !== void 0
                ? s
                : void 0,
          }
        );
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _refreshAccessToken(e) {
    const r = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      const n = Date.now();
      return await mR(
        async (s) => (
          s > 0 && (await pR(200 * Math.pow(2, s - 1))),
          this._debug(r, "refreshing attempt", s),
          await G(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=refresh_token`,
            { body: { refresh_token: e }, headers: this.headers, xform: Mt }
          )
        ),
        (s, i) => {
          const o = 200 * Math.pow(2, s);
          return i && Qu(i) && Date.now() + o - n < ws;
        }
      );
    } catch (n) {
      if ((this._debug(r, "error", n), V(n)))
        return this._returnResult({
          data: { session: null, user: null },
          error: n,
        });
      throw n;
    } finally {
      this._debug(r, "end");
    }
  }
  _isValidSession(e) {
    return (
      typeof e == "object" &&
      e !== null &&
      "access_token" in e &&
      "refresh_token" in e &&
      "expires_at" in e
    );
  }
  async _handleProviderSignIn(e, r) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: r.redirectTo,
      scopes: r.scopes,
      queryParams: r.queryParams,
    });
    return (
      this._debug(
        "#_handleProviderSignIn()",
        "provider",
        e,
        "options",
        r,
        "url",
        n
      ),
      ze() && !r.skipBrowserRedirect && window.location.assign(n),
      { data: { provider: e, url: n }, error: null }
    );
  }
  async _recoverAndRefresh() {
    var e, r;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const s = await On(this.storage, this.storageKey);
      if (s && this.userStorage) {
        let o = await On(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer &&
          Object.is(this.storage, this.userStorage) &&
          !o &&
          ((o = { user: s.user }),
          await xs(this.userStorage, this.storageKey + "-user", o)),
          (s.user =
            (e = o == null ? void 0 : o.user) !== null && e !== void 0
              ? e
              : Ju());
      } else if (s && !s.user && !s.user) {
        const o = await On(this.storage, this.storageKey + "-user");
        o && o != null && o.user
          ? ((s.user = o.user),
            await Fe(this.storage, this.storageKey + "-user"),
            await xs(this.storage, this.storageKey, s))
          : (s.user = Ju());
      }
      if (
        (this._debug(n, "session from storage", s), !this._isValidSession(s))
      ) {
        this._debug(n, "session is not valid"),
          s !== null && (await this._removeSession());
        return;
      }
      const i =
        ((r = s.expires_at) !== null && r !== void 0 ? r : 1 / 0) * 1e3 -
          Date.now() <
        Ku;
      if (
        (this._debug(
          n,
          `session has${i ? "" : " not"} expired with margin of ${Ku}s`
        ),
        i)
      ) {
        if (this.autoRefreshToken && s.refresh_token) {
          const { error: o } = await this._callRefreshToken(s.refresh_token);
          o &&
            (console.error(o),
            Qu(o) ||
              (this._debug(
                n,
                "refresh failed with a non-retryable error, removing the session",
                o
              ),
              await this._removeSession()));
        }
      } else if (s.user && s.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: o, error: a } = await this._getUser(s.access_token);
          !a && o != null && o.user
            ? ((s.user = o.user),
              await this._saveSession(s),
              await this._notifyAllSubscribers("SIGNED_IN", s))
            : this._debug(
                n,
                "could not get user data, skipping SIGNED_IN notification"
              );
        } catch (o) {
          console.error("Error getting user data:", o),
            this._debug(
              n,
              "error getting user data, skipping SIGNED_IN notification",
              o
            );
        }
      else await this._notifyAllSubscribers("SIGNED_IN", s);
    } catch (s) {
      this._debug(n, "error", s), console.error(s);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(e) {
    var r, n;
    if (!e) throw new dt();
    if (this.refreshingDeferred) return this.refreshingDeferred.promise;
    const s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      this.refreshingDeferred = new nu();
      const { data: i, error: o } = await this._refreshAccessToken(e);
      if (o) throw o;
      if (!i.session) throw new dt();
      await this._saveSession(i.session),
        await this._notifyAllSubscribers("TOKEN_REFRESHED", i.session);
      const a = { data: i.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (i) {
      if ((this._debug(s, "error", i), V(i))) {
        const o = { data: null, error: i };
        return (
          Qu(i) || (await this._removeSession()),
          (r = this.refreshingDeferred) === null ||
            r === void 0 ||
            r.resolve(o),
          o
        );
      }
      throw (
        ((n = this.refreshingDeferred) === null || n === void 0 || n.reject(i),
        i)
      );
    } finally {
      (this.refreshingDeferred = null), this._debug(s, "end");
    }
  }
  async _notifyAllSubscribers(e, r, n = !0) {
    const s = `#_notifyAllSubscribers(${e})`;
    this._debug(s, "begin", r, `broadcast = ${n}`);
    try {
      this.broadcastChannel &&
        n &&
        this.broadcastChannel.postMessage({ event: e, session: r });
      const i = [],
        o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
          try {
            await a.callback(e, r);
          } catch (l) {
            i.push(l);
          }
        });
      if ((await Promise.all(o), i.length > 0)) {
        for (let a = 0; a < i.length; a += 1) console.error(i[a]);
        throw i[0];
      }
    } finally {
      this._debug(s, "end");
    }
  }
  async _saveSession(e) {
    this._debug("#_saveSession()", e),
      (this.suppressGetSessionWarning = !0),
      await Fe(this.storage, `${this.storageKey}-code-verifier`);
    const r = Object.assign({}, e),
      n = r.user && r.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n &&
        r.user &&
        (await xs(this.userStorage, this.storageKey + "-user", {
          user: r.user,
        }));
      const s = Object.assign({}, r);
      delete s.user;
      const i = fm(s);
      await xs(this.storage, this.storageKey, i);
    } else {
      const s = fm(r);
      await xs(this.storage, this.storageKey, s);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"),
      (this.suppressGetSessionWarning = !1),
      await Fe(this.storage, this.storageKey),
      await Fe(this.storage, this.storageKey + "-code-verifier"),
      await Fe(this.storage, this.storageKey + "-user"),
      this.userStorage &&
        (await Fe(this.userStorage, this.storageKey + "-user")),
      await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e &&
        ze() &&
        window != null &&
        window.removeEventListener &&
        window.removeEventListener("visibilitychange", e);
    } catch (r) {
      console.error("removing visibilitychange callback failed", r);
    }
  }
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), ws);
    (this.autoRefreshTicker = e),
      e && typeof e == "object" && typeof e.unref == "function"
        ? e.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(e);
    const r = setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
    (this.autoRefreshTickTimeout = r),
      r && typeof r == "object" && typeof r.unref == "function"
        ? r.unref()
        : typeof Deno < "u" &&
          typeof Deno.unrefTimer == "function" &&
          Deno.unrefTimer(r);
  }
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    (this.autoRefreshTicker = null), e && clearInterval(e);
    const r = this.autoRefreshTickTimeout;
    (this.autoRefreshTickTimeout = null), r && clearTimeout(r);
  }
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (r) => {
              const {
                data: { session: n },
              } = r;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const s = Math.floor((n.expires_at * 1e3 - e) / ws);
              this._debug(
                "#_autoRefreshTokenTick()",
                `access token expires in ${s} ticks, a tick lasts ${ws}ms, refresh threshold is ${md} ticks`
              ),
                s <= md && (await this._callRefreshToken(n.refresh_token));
            });
          } catch (r) {
            console.error(
              "Auto refresh tick failed with error. This is likely a transient error.",
              r
            );
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof uw)
        this._debug("auto refresh token tick lock not available");
      else throw e;
    }
  }
  async _handleVisibilityChange() {
    if (
      (this._debug("#_handleVisibilityChange()"),
      !ze() || !(window != null && window.addEventListener))
    )
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      (this.visibilityChangedCallback = async () => {
        try {
          await this._onVisibilityChanged(!1);
        } catch (e) {
          this._debug("#visibilityChangedCallback", "error", e);
        }
      }),
        window == null ||
          window.addEventListener(
            "visibilitychange",
            this.visibilityChangedCallback
          ),
        await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  async _onVisibilityChanged(e) {
    const r = `#_onVisibilityChanged(${e})`;
    this._debug(r, "visibilityState", document.visibilityState),
      document.visibilityState === "visible"
        ? (this.autoRefreshToken && this._startAutoRefresh(),
          e ||
            (await this.initializePromise,
            await this._acquireLock(this.lockAcquireTimeout, async () => {
              if (document.visibilityState !== "visible") {
                this._debug(
                  r,
                  "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                );
                return;
              }
              await this._recoverAndRefresh();
            })))
        : document.visibilityState === "hidden" &&
          this.autoRefreshToken &&
          this._stopAutoRefresh();
  }
  async _getUrlForProvider(e, r, n) {
    const s = [`provider=${encodeURIComponent(r)}`];
    if (
      (n != null &&
        n.redirectTo &&
        s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),
      n != null && n.scopes && s.push(`scopes=${encodeURIComponent(n.scopes)}`),
      this.flowType === "pkce")
    ) {
      const [i, o] = await fs(this.storage, this.storageKey),
        a = new URLSearchParams({
          code_challenge: `${encodeURIComponent(i)}`,
          code_challenge_method: `${encodeURIComponent(o)}`,
        });
      s.push(a.toString());
    }
    if (n != null && n.queryParams) {
      const i = new URLSearchParams(n.queryParams);
      s.push(i.toString());
    }
    return (
      n != null &&
        n.skipBrowserRedirect &&
        s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),
      `${e}?${s.join("&")}`
    );
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (r) => {
        var n;
        const { data: s, error: i } = r;
        return i
          ? this._returnResult({ data: null, error: i })
          : await G(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            });
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (r) => {
        var n, s;
        const { data: i, error: o } = r;
        if (o) return this._returnResult({ data: null, error: o });
        const a = Object.assign(
            { friendly_name: e.friendlyName, factor_type: e.factorType },
            e.factorType === "phone"
              ? { phone: e.phone }
              : e.factorType === "totp"
              ? { issuer: e.issuer }
              : {}
          ),
          { data: l, error: u } = await G(
            this.fetch,
            "POST",
            `${this.url}/factors`,
            {
              body: a,
              headers: this.headers,
              jwt:
                (n = i == null ? void 0 : i.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            }
          );
        return u
          ? this._returnResult({ data: null, error: u })
          : (e.factorType === "totp" &&
              l.type === "totp" &&
              !((s = l == null ? void 0 : l.totp) === null || s === void 0) &&
              s.qr_code &&
              (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`),
            this._returnResult({ data: l, error: null }));
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _verify(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = Object.assign(
              { challenge_id: e.challengeId },
              "webauthn" in e
                ? {
                    webauthn: Object.assign(Object.assign({}, e.webauthn), {
                      credential_response:
                        e.webauthn.type === "create"
                          ? HR(e.webauthn.credential_response)
                          : qR(e.webauthn.credential_response),
                    }),
                  }
                : { code: e.code }
            ),
            { data: a, error: l } = await G(
              this.fetch,
              "POST",
              `${this.url}/factors/${e.factorId}/verify`,
              {
                body: o,
                headers: this.headers,
                jwt:
                  (n = s == null ? void 0 : s.session) === null || n === void 0
                    ? void 0
                    : n.access_token,
              }
            );
          return l
            ? this._returnResult({ data: null, error: l })
            : (await this._saveSession(
                Object.assign(
                  { expires_at: Math.round(Date.now() / 1e3) + a.expires_in },
                  a
                )
              ),
              await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a),
              this._returnResult({ data: a, error: l }));
        });
      } catch (r) {
        if (V(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challenge(e) {
    return this._acquireLock(this.lockAcquireTimeout, async () => {
      try {
        return await this._useSession(async (r) => {
          var n;
          const { data: s, error: i } = r;
          if (i) return this._returnResult({ data: null, error: i });
          const o = await G(
            this.fetch,
            "POST",
            `${this.url}/factors/${e.factorId}/challenge`,
            {
              body: e,
              headers: this.headers,
              jwt:
                (n = s == null ? void 0 : s.session) === null || n === void 0
                  ? void 0
                  : n.access_token,
            }
          );
          if (o.error) return o;
          const { data: a } = o;
          if (a.type !== "webauthn") return { data: a, error: null };
          switch (a.webauthn.type) {
            case "create":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      { publicKey: WR(a.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
            case "request":
              return {
                data: Object.assign(Object.assign({}, a), {
                  webauthn: Object.assign(Object.assign({}, a.webauthn), {
                    credential_options: Object.assign(
                      Object.assign({}, a.webauthn.credential_options),
                      { publicKey: VR(a.webauthn.credential_options.publicKey) }
                    ),
                  }),
                }),
                error: null,
              };
          }
        });
      } catch (r) {
        if (V(r)) return this._returnResult({ data: null, error: r });
        throw r;
      }
    });
  }
  async _challengeAndVerify(e) {
    const { data: r, error: n } = await this._challenge({
      factorId: e.factorId,
    });
    return n
      ? this._returnResult({ data: null, error: n })
      : await this._verify({
          factorId: e.factorId,
          challengeId: r.id,
          code: e.code,
        });
  }
  async _listFactors() {
    var e;
    const {
      data: { user: r },
      error: n,
    } = await this.getUser();
    if (n) return { data: null, error: n };
    const s = { all: [], phone: [], totp: [], webauthn: [] };
    for (const i of (e = r == null ? void 0 : r.factors) !== null &&
    e !== void 0
      ? e
      : [])
      s.all.push(i), i.status === "verified" && s[i.factor_type].push(i);
    return { data: s, error: null };
  }
  async _getAuthenticatorAssuranceLevel(e) {
    var r, n, s, i;
    if (e)
      try {
        const { payload: d } = Sa(e);
        let v = null;
        d.aal && (v = d.aal);
        let p = v;
        const {
          data: { user: x },
          error: g,
        } = await this.getUser(e);
        if (g) return this._returnResult({ data: null, error: g });
        ((n =
          (r = x == null ? void 0 : x.factors) === null || r === void 0
            ? void 0
            : r.filter((_) => _.status === "verified")) !== null && n !== void 0
          ? n
          : []
        ).length > 0 && (p = "aal2");
        const y = d.amr || [];
        return {
          data: {
            currentLevel: v,
            nextLevel: p,
            currentAuthenticationMethods: y,
          },
          error: null,
        };
      } catch (d) {
        if (V(d)) return this._returnResult({ data: null, error: d });
        throw d;
      }
    const {
      data: { session: o },
      error: a,
    } = await this.getSession();
    if (a) return this._returnResult({ data: null, error: a });
    if (!o)
      return {
        data: {
          currentLevel: null,
          nextLevel: null,
          currentAuthenticationMethods: [],
        },
        error: null,
      };
    const { payload: l } = Sa(o.access_token);
    let u = null;
    l.aal && (u = l.aal);
    let c = u;
    ((i =
      (s = o.user.factors) === null || s === void 0
        ? void 0
        : s.filter((d) => d.status === "verified")) !== null && i !== void 0
      ? i
      : []
    ).length > 0 && (c = "aal2");
    const f = l.amr || [];
    return {
      data: { currentLevel: u, nextLevel: c, currentAuthenticationMethods: f },
      error: null,
    };
  }
  async _getAuthorizationDetails(e) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
          ? await G(
              this.fetch,
              "GET",
              `${this.url}/oauth/authorizations/${e}`,
              {
                headers: this.headers,
                jwt: n.access_token,
                xform: (i) => ({ data: i, error: null }),
              }
            )
          : this._returnResult({ data: null, error: new dt() });
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async _approveAuthorization(e, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new dt() });
        const o = await G(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "approve" },
            xform: (a) => ({ data: a, error: null }),
          }
        );
        return (
          o.data &&
            o.data.redirect_url &&
            ze() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (V(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _denyAuthorization(e, r) {
    try {
      return await this._useSession(async (n) => {
        const {
          data: { session: s },
          error: i,
        } = n;
        if (i) return this._returnResult({ data: null, error: i });
        if (!s) return this._returnResult({ data: null, error: new dt() });
        const o = await G(
          this.fetch,
          "POST",
          `${this.url}/oauth/authorizations/${e}/consent`,
          {
            headers: this.headers,
            jwt: s.access_token,
            body: { action: "deny" },
            xform: (a) => ({ data: a, error: null }),
          }
        );
        return (
          o.data &&
            o.data.redirect_url &&
            ze() &&
            !(r != null && r.skipBrowserRedirect) &&
            window.location.assign(o.data.redirect_url),
          o
        );
      });
    } catch (n) {
      if (V(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
  async _listOAuthGrants() {
    try {
      return await this._useSession(async (e) => {
        const {
          data: { session: r },
          error: n,
        } = e;
        return n
          ? this._returnResult({ data: null, error: n })
          : r
          ? await G(this.fetch, "GET", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: r.access_token,
              xform: (s) => ({ data: s, error: null }),
            })
          : this._returnResult({ data: null, error: new dt() });
      });
    } catch (e) {
      if (V(e)) return this._returnResult({ data: null, error: e });
      throw e;
    }
  }
  async _revokeOAuthGrant(e) {
    try {
      return await this._useSession(async (r) => {
        const {
          data: { session: n },
          error: s,
        } = r;
        return s
          ? this._returnResult({ data: null, error: s })
          : n
          ? (await G(this.fetch, "DELETE", `${this.url}/user/oauth/grants`, {
              headers: this.headers,
              jwt: n.access_token,
              query: { client_id: e.clientId },
              noResolveJson: !0,
            }),
            { data: {}, error: null })
          : this._returnResult({ data: null, error: new dt() });
      });
    } catch (r) {
      if (V(r)) return this._returnResult({ data: null, error: r });
      throw r;
    }
  }
  async fetchJwk(e, r = { keys: [] }) {
    let n = r.keys.find((a) => a.kid === e);
    if (n) return n;
    const s = Date.now();
    if (
      ((n = this.jwks.keys.find((a) => a.kid === e)),
      n && this.jwks_cached_at + eR > s)
    )
      return n;
    const { data: i, error: o } = await G(
      this.fetch,
      "GET",
      `${this.url}/.well-known/jwks.json`,
      { headers: this.headers }
    );
    if (o) throw o;
    return !i.keys ||
      i.keys.length === 0 ||
      ((this.jwks = i),
      (this.jwks_cached_at = s),
      (n = i.keys.find((a) => a.kid === e)),
      !n)
      ? null
      : n;
  }
  async getClaims(e, r = {}) {
    try {
      let n = e;
      if (!n) {
        const { data: d, error: v } = await this.getSession();
        if (v || !d.session)
          return this._returnResult({ data: null, error: v });
        n = d.session.access_token;
      }
      const {
        header: s,
        payload: i,
        signature: o,
        raw: { header: a, payload: l },
      } = Sa(n);
      (r != null && r.allowExpired) || _R(i.exp);
      const u =
        !s.alg ||
        s.alg.startsWith("HS") ||
        !s.kid ||
        !("crypto" in globalThis && "subtle" in globalThis.crypto)
          ? null
          : await this.fetchJwk(
              s.kid,
              r != null && r.keys
                ? { keys: r.keys }
                : r == null
                ? void 0
                : r.jwks
            );
      if (!u) {
        const { error: d } = await this.getUser(n);
        if (d) throw d;
        return { data: { claims: i, header: s, signature: o }, error: null };
      }
      const c = kR(s.alg),
        h = await crypto.subtle.importKey("jwk", u, c, !0, ["verify"]);
      if (!(await crypto.subtle.verify(c, h, o, uR(`${a}.${l}`))))
        throw new vd("Invalid JWT signature");
      return { data: { claims: i, header: s, signature: o }, error: null };
    } catch (n) {
      if (V(n)) return this._returnResult({ data: null, error: n });
      throw n;
    }
  }
}
To.nextInstanceID = {};
const tP = To,
  rP = "2.95.3";
let Mi = "";
typeof Deno < "u"
  ? (Mi = "deno")
  : typeof document < "u"
  ? (Mi = "web")
  : typeof navigator < "u" && navigator.product === "ReactNative"
  ? (Mi = "react-native")
  : (Mi = "node");
const nP = { "X-Client-Info": `supabase-js-${Mi}/${rP}` },
  sP = { headers: nP },
  iP = { schema: "public" },
  oP = {
    autoRefreshToken: !0,
    persistSession: !0,
    detectSessionInUrl: !0,
    flowType: "implicit",
  },
  aP = {};
function Ro(t) {
  "@babel/helpers - typeof";
  return (
    (Ro =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    Ro(t)
  );
}
function lP(t, e) {
  if (Ro(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function uP(t) {
  var e = lP(t, "string");
  return Ro(e) == "symbol" ? e : e + "";
}
function cP(t, e, r) {
  return (
    (e = uP(e)) in t
      ? Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = r),
    t
  );
}
function xm(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(t, s).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? xm(Object(r), !0).forEach(function (n) {
          cP(t, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
      : xm(Object(r)).forEach(function (n) {
          Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return t;
}
const dP = (t) => (t ? (...e) => t(...e) : (...e) => fetch(...e)),
  hP = () => Headers,
  fP = (t, e, r) => {
    const n = dP(r),
      s = hP();
    return async (i, o) => {
      var a;
      const l = (a = await e()) !== null && a !== void 0 ? a : t;
      let u = new s(o == null ? void 0 : o.headers);
      return (
        u.has("apikey") || u.set("apikey", t),
        u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
        n(i, Te(Te({}, o), {}, { headers: u }))
      );
    };
  };
function pP(t) {
  return t.endsWith("/") ? t : t + "/";
}
function mP(t, e) {
  var r, n;
  const { db: s, auth: i, realtime: o, global: a } = t,
    { db: l, auth: u, realtime: c, global: h } = e,
    f = {
      db: Te(Te({}, l), s),
      auth: Te(Te({}, u), i),
      realtime: Te(Te({}, c), o),
      storage: {},
      global: Te(
        Te(Te({}, h), a),
        {},
        {
          headers: Te(
            Te(
              {},
              (r = h == null ? void 0 : h.headers) !== null && r !== void 0
                ? r
                : {}
            ),
            (n = a == null ? void 0 : a.headers) !== null && n !== void 0
              ? n
              : {}
          ),
        }
      ),
      accessToken: async () => "",
    };
  return (
    t.accessToken ? (f.accessToken = t.accessToken) : delete f.accessToken, f
  );
}
function gP(t) {
  const e = t == null ? void 0 : t.trim();
  if (!e) throw new Error("supabaseUrl is required.");
  if (!e.match(/^https?:\/\//i))
    throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");
  try {
    return new URL(pP(e));
  } catch {
    throw Error("Invalid supabaseUrl: Provided URL is malformed.");
  }
}
var yP = class extends tP {
    constructor(t) {
      super(t);
    }
  },
  vP = class {
    constructor(t, e, r) {
      var n, s;
      (this.supabaseUrl = t), (this.supabaseKey = e);
      const i = gP(t);
      if (!e) throw new Error("supabaseKey is required.");
      (this.realtimeUrl = new URL("realtime/v1", i)),
        (this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
          "http",
          "ws"
        )),
        (this.authUrl = new URL("auth/v1", i)),
        (this.storageUrl = new URL("storage/v1", i)),
        (this.functionsUrl = new URL("functions/v1", i));
      const o = `sb-${i.hostname.split(".")[0]}-auth-token`,
        a = {
          db: iP,
          realtime: aP,
          auth: Te(Te({}, oP), {}, { storageKey: o }),
          global: sP,
        },
        l = mP(r ?? {}, a);
      if (
        ((this.storageKey =
          (n = l.auth.storageKey) !== null && n !== void 0 ? n : ""),
        (this.headers =
          (s = l.global.headers) !== null && s !== void 0 ? s : {}),
        l.accessToken)
      )
        (this.accessToken = l.accessToken),
          (this.auth = new Proxy(
            {},
            {
              get: (c, h) => {
                throw new Error(
                  `@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(
                    h
                  )} is not possible`
                );
              },
            }
          ));
      else {
        var u;
        this.auth = this._initSupabaseAuthClient(
          (u = l.auth) !== null && u !== void 0 ? u : {},
          this.headers,
          l.global.fetch
        );
      }
      (this.fetch = fP(e, this._getAccessToken.bind(this), l.global.fetch)),
        (this.realtime = this._initRealtimeClient(
          Te(
            {
              headers: this.headers,
              accessToken: this._getAccessToken.bind(this),
            },
            l.realtime
          )
        )),
        this.accessToken &&
          Promise.resolve(this.accessToken())
            .then((c) => this.realtime.setAuth(c))
            .catch((c) =>
              console.warn("Failed to set initial Realtime auth token:", c)
            ),
        (this.rest = new rT(new URL("rest/v1", i).href, {
          headers: this.headers,
          schema: l.db.schema,
          fetch: this.fetch,
          timeout: l.db.timeout,
          urlLengthLimit: l.db.urlLengthLimit,
        })),
        (this.storage = new QT(
          this.storageUrl.href,
          this.headers,
          this.fetch,
          r == null ? void 0 : r.storage
        )),
        l.accessToken || this._listenForAuthEvents();
    }
    get functions() {
      return new GC(this.functionsUrl.href, {
        headers: this.headers,
        customFetch: this.fetch,
      });
    }
    from(t) {
      return this.rest.from(t);
    }
    schema(t) {
      return this.rest.schema(t);
    }
    rpc(t, e = {}, r = { head: !1, get: !1, count: void 0 }) {
      return this.rest.rpc(t, e, r);
    }
    channel(t, e = { config: {} }) {
      return this.realtime.channel(t, e);
    }
    getChannels() {
      return this.realtime.getChannels();
    }
    removeChannel(t) {
      return this.realtime.removeChannel(t);
    }
    removeAllChannels() {
      return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
      var t = this,
        e,
        r;
      if (t.accessToken) return await t.accessToken();
      const { data: n } = await t.auth.getSession();
      return (e =
        (r = n.session) === null || r === void 0 ? void 0 : r.access_token) !==
        null && e !== void 0
        ? e
        : t.supabaseKey;
    }
    _initSupabaseAuthClient(
      {
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        storageKey: i,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: u,
      },
      c,
      h
    ) {
      const f = {
        Authorization: `Bearer ${this.supabaseKey}`,
        apikey: `${this.supabaseKey}`,
      };
      return new yP({
        url: this.authUrl.href,
        headers: Te(Te({}, f), c),
        storageKey: i,
        autoRefreshToken: t,
        persistSession: e,
        detectSessionInUrl: r,
        storage: n,
        userStorage: s,
        flowType: o,
        lock: a,
        debug: l,
        throwOnError: u,
        fetch: h,
        hasCustomAuthorizationHeader: Object.keys(this.headers).some(
          (d) => d.toLowerCase() === "authorization"
        ),
      });
    }
    _initRealtimeClient(t) {
      return new wT(
        this.realtimeUrl.href,
        Te(
          Te({}, t),
          {},
          {
            params: Te(
              Te({}, { apikey: this.supabaseKey }),
              t == null ? void 0 : t.params
            ),
          }
        )
      );
    }
    _listenForAuthEvents() {
      return this.auth.onAuthStateChange((t, e) => {
        this._handleTokenChanged(
          t,
          "CLIENT",
          e == null ? void 0 : e.access_token
        );
      });
    }
    _handleTokenChanged(t, e, r) {
      (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
      this.changedAccessToken !== r
        ? ((this.changedAccessToken = r), this.realtime.setAuth(r))
        : t === "SIGNED_OUT" &&
          (this.realtime.setAuth(),
          e == "STORAGE" && this.auth.signOut(),
          (this.changedAccessToken = void 0));
    }
  };
const wP = (t, e, r) => new vP(t, e, r);
function xP() {
  if (typeof window < "u") return !1;
  const t = globalThis.process;
  if (!t) return !1;
  const e = t.version;
  if (e == null) return !1;
  const r = e.match(/^v(\d+)\./);
  return r ? parseInt(r[1], 10) <= 18 : !1;
}
xP() &&
  console.warn(
    "⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217"
  );
const bP = "https://jfhzrugypgsoulujwjkp.supabase.co",
  _P =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmaHpydWd5cGdzb3VsdWp3amtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MjQyMjQsImV4cCI6MjA4NjAwMDIyNH0.80ey3E9GdyDJisIRy0uRta-A2uYb0tzs4kBviDO1Oug",
  Vs = wP(bP, _P, {
    auth: { storage: localStorage, persistSession: !0, autoRefreshToken: !0 },
  });
function bl(t) {
  const e = t instanceof Error ? t.message : String(t);
  return e.includes("violates not-null constraint") || e.includes("required")
    ? "Please fill in all required fields"
    : e.includes("unique constraint") || e.includes("duplicate")
    ? "This item already exists"
    : e.includes("row-level security") || e.includes("permission denied")
    ? "You do not have permission for this action"
    : e.includes("storage") || e.includes("upload")
    ? "Failed to upload file. Please try again."
    : e.includes("valid_sender_email") ||
      e.includes("valid_email") ||
      e.includes("email")
    ? "Please enter a valid email address"
    : e.includes("max_audio_duration")
    ? "Audio recording exceeds maximum duration"
    : e.includes("expired") || e.includes("expires_at")
    ? "This memory has expired"
    : "An error occurred. Please try again.";
}
function kP(t, ...e) {}
async function bm(t, e, r) {
  const n = `${e}/${r}`,
    { error: s } = await Vs.storage
      .from("memory-files")
      .upload(n, t, { contentType: t.type, upsert: !1 });
  if (s) throw new Error(bl(s));
  const { data: i } = Vs.storage.from("memory-files").getPublicUrl(n);
  return i.publicUrl;
}
async function SP(t, e) {
  const n = await (await fetch(t)).blob();
  return new File([n], e, { type: n.type });
}
async function EP({
  senderEmail: t,
  audioBlob: e,
  audioDuration: r,
  photos: n,
}) {
  const s = crypto.randomUUID(),
    i = Date.now(),
    o = crypto.randomUUID().substring(0, 8),
    a = `${s}-audio-${o}-${i}.webm`,
    l = await bm(e, s, a),
    u = await Promise.all(
      n.map(async (v, p) => {
        const x = await SP(v.imageUrl, `photo-${p}.jpg`),
          g = crypto.randomUUID().substring(0, 8),
          m = `${s}-photo-${p}-${g}-${i}.jpg`;
        return { photoUrl: await bm(x, s, m), displayOrder: p };
      })
    ),
    c = t || "anonymous@noemail.local",
    { data: h, error: f } = await Vs.rpc("create_memory", {
      p_audio_url: l,
      p_audio_duration: r,
      p_sender_email: c,
    }).single();
  if (f || !h) throw new Error(bl(f));
  if (u.length > 0)
    for (const v of u) {
      const { error: p } = await Vs.rpc("add_memory_photo", {
        p_memory_id: h.id,
        p_photo_url: v.photoUrl,
        p_display_order: v.displayOrder,
      });
      if (p) throw new Error(bl(p));
    }
  t &&
    (await Vs.from("email_captures").insert({
      memory_id: h.id,
      email: t,
      capture_type: "sender",
    }));
  const d = `${window.location.origin}/m/${h.share_code}`;
  return { shareCode: h.share_code, shareUrl: d };
}
const hw = ({ size: t = 80 }) =>
    w.jsx("div", {
      className: "relative animate-spin",
      style: {
        width: t,
        height: t,
        animationDuration: "2s",
        animationTimingFunction: "linear",
      },
      children: w.jsx("img", {
        src: Uh,
        alt: "Loading",
        className: "w-full h-full object-contain",
        style: { filter: "brightness(0.9) sepia(0.2)" },
      }),
    }),
  CP = ({
    photos: t,
    audioBlob: e,
    audioDuration: r,
    senderEmail: n,
    onBack: s,
  }) => {
    const [i, o] = b.useState("uploading"),
      [a, l] = b.useState(null),
      [u, c] = b.useState(!1);
    b.useEffect(() => {
      (async () => {
        try {
          const v = await EP({
            senderEmail: n,
            audioBlob: e,
            audioDuration: r,
            photos: t,
          });
          l(v.shareUrl), o("success");
        } catch (v) {
          console.error("Error creating memory:", v),
            Hc({
              title: "Failed to create memory",
              description: "Please try again",
              variant: "destructive",
            }),
            s();
        }
      })();
    }, [n, e, r, t, s]);
    const h = async () => {
        if (a)
          try {
            await navigator.clipboard.writeText(a),
              c(!0),
              setTimeout(() => c(!1), 2e3);
          } catch {
            Hc({
              title: "Couldn't copy",
              description: "Please copy the link manually",
              variant: "destructive",
            });
          }
      },
      f = async () => {
        if (a)
          if (navigator.share)
            try {
              await navigator.share({
                title: "A Memory Box for You ❤️",
                text: "Someone made a special memory for you!",
                url: a,
              });
            } catch (d) {
              d.name !== "AbortError" && h();
            }
          else h();
      };
    return w.jsxs(w.Fragment, {
      children: [
        i === "success" &&
          w.jsxs(w.Fragment, {
            children: [
              w.jsx("button", {
                onClick: s,
                className:
                  "fixed top-6 left-6 p-2 text-amber-200/60 hover:text-amber-100 transition-colors z-50",
                "aria-label": "Go back",
                children: w.jsx(kh, { className: "w-6 h-6" }),
              }),
              w.jsx(Gn, {
                to: "/about",
                className:
                  "fixed top-6 right-6 text-amber-100 hover:text-amber-50 transition-colors z-50",
                style: { fontFamily: "'Newsreader', serif" },
                children: "About",
              }),
            ],
          }),
        w.jsxs("div", {
          className: "flex flex-col items-center gap-8 w-full max-w-md px-8",
          children: [
            i === "uploading" &&
              w.jsxs("div", {
                className: "flex flex-col items-center gap-6 py-12",
                children: [
                  w.jsx(hw, { size: 96 }),
                  w.jsx("p", {
                    className: "text-amber-200/80",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "Creating your memory...",
                  }),
                ],
              }),
            i === "success" &&
              a &&
              w.jsxs("div", {
                className: "flex flex-col items-center gap-6 text-center",
                children: [
                  w.jsxs("div", {
                    children: [
                      w.jsx("h2", {
                        className: "text-2xl font-light text-amber-100 mb-2",
                        style: { fontFamily: "'Newsreader', serif" },
                        children: "Voice note created!",
                      }),
                      w.jsx("p", {
                        className: "text-amber-200/40 text-sm",
                        style: { fontFamily: "'Newsreader', serif" },
                        children: "Link expires in 7 days",
                      }),
                    ],
                  }),
                  w.jsx("div", {
                    className:
                      "w-full bg-black/20 rounded-[4px] p-3 border border-amber-200/20",
                    children: w.jsx("p", {
                      className: "text-amber-100 text-sm break-all font-mono",
                      children: a,
                    }),
                  }),
                  w.jsxs("div", {
                    className: "flex gap-3 w-full",
                    children: [
                      w.jsx(pt, {
                        variant: "outline",
                        className:
                          "flex-1 border-amber-200/30 text-amber-100 hover:bg-amber-100/10 rounded-[4px]",
                        onClick: h,
                        style: { fontFamily: "'Newsreader', serif" },
                        children: u
                          ? w.jsxs(w.Fragment, {
                              children: [
                                w.jsx(X_, { className: "w-4 h-4 mr-2" }),
                                "Copied!",
                              ],
                            })
                          : w.jsxs(w.Fragment, {
                              children: [
                                w.jsx(e1, { className: "w-4 h-4 mr-2" }),
                                "Copy Link",
                              ],
                            }),
                      }),
                      w.jsxs(pt, {
                        className:
                          "flex-1 bg-[#78624A] hover:bg-[#8a7055] text-white rounded-[4px]",
                        onClick: f,
                        style: { fontFamily: "'Newsreader', serif" },
                        children: [
                          w.jsx(Fv, { className: "w-4 h-4 mr-2" }),
                          "Share",
                        ],
                      }),
                    ],
                  }),
                  w.jsx("a", {
                    href: "https://instagram.com/jwfathoni",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-amber-200/60 text-sm hover:text-amber-100 transition-colors",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "tag @jwfathoni when you post on social ♡",
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  Vh = b.forwardRef(({ className: t, type: e, ...r }, n) =>
    w.jsx("input", {
      type: e,
      className: cr(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        t
      ),
      ref: n,
      ...r,
    })
  );
Vh.displayName = "Input";
var de;
(function (t) {
  t.assertEqual = (s) => {};
  function e(s) {}
  t.assertIs = e;
  function r(s) {
    throw new Error();
  }
  (t.assertNever = r),
    (t.arrayToEnum = (s) => {
      const i = {};
      for (const o of s) i[o] = o;
      return i;
    }),
    (t.getValidEnumValues = (s) => {
      const i = t.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        o = {};
      for (const a of i) o[a] = s[a];
      return t.objectValues(o);
    }),
    (t.objectValues = (s) =>
      t.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (t.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
            return i;
          }),
    (t.find = (s, i) => {
      for (const o of s) if (i(o)) return o;
    }),
    (t.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) =>
            typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s);
  function n(s, i = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
  }
  (t.joinValues = n),
    (t.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(de || (de = {}));
var _m;
(function (t) {
  t.mergeShapes = (e, r) => ({ ...e, ...r });
})(_m || (_m = {}));
const B = de.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Wr = (t) => {
    switch (typeof t) {
      case "undefined":
        return B.undefined;
      case "string":
        return B.string;
      case "number":
        return Number.isNaN(t) ? B.nan : B.number;
      case "boolean":
        return B.boolean;
      case "function":
        return B.function;
      case "bigint":
        return B.bigint;
      case "symbol":
        return B.symbol;
      case "object":
        return Array.isArray(t)
          ? B.array
          : t === null
          ? B.null
          : t.then &&
            typeof t.then == "function" &&
            t.catch &&
            typeof t.catch == "function"
          ? B.promise
          : typeof Map < "u" && t instanceof Map
          ? B.map
          : typeof Set < "u" && t instanceof Set
          ? B.set
          : typeof Date < "u" && t instanceof Date
          ? B.date
          : B.object;
      default:
        return B.unknown;
    }
  },
  I = de.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]);
class Tr extends Error {
  get errors() {
    return this.issues;
  }
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (n) => {
        this.issues = [...this.issues, n];
      }),
      (this.addIssues = (n = []) => {
        this.issues = [...this.issues, ...n];
      });
    const r = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, r)
      : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = e);
  }
  format(e) {
    const r =
        e ||
        function (i) {
          return i.message;
        },
      n = { _errors: [] },
      s = (i) => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) n._errors.push(r(o));
          else {
            let a = n,
              l = 0;
            for (; l < o.path.length; ) {
              const u = o.path[l];
              l === o.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(r(o)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++;
            }
          }
      };
    return s(this), n;
  }
  static assert(e) {
    if (!(e instanceof Tr)) throw new Error(`Not a ZodError: ${e}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, de.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (r) => r.message) {
    const r = {},
      n = [];
    for (const s of this.issues)
      if (s.path.length > 0) {
        const i = s.path[0];
        (r[i] = r[i] || []), r[i].push(e(s));
      } else n.push(e(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
Tr.create = (t) => new Tr(t);
const wd = (t, e) => {
  let r;
  switch (t.code) {
    case I.invalid_type:
      t.received === B.undefined
        ? (r = "Required")
        : (r = `Expected ${t.expected}, received ${t.received}`);
      break;
    case I.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(
        t.expected,
        de.jsonStringifyReplacer
      )}`;
      break;
    case I.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${de.joinValues(t.keys, ", ")}`;
      break;
    case I.invalid_union:
      r = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${de.joinValues(t.options)}`;
      break;
    case I.invalid_enum_value:
      r = `Invalid enum value. Expected ${de.joinValues(
        t.options
      )}, received '${t.received}'`;
      break;
    case I.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      r = "Invalid function return type";
      break;
    case I.invalid_date:
      r = "Invalid date";
      break;
    case I.invalid_string:
      typeof t.validation == "object"
        ? "includes" in t.validation
          ? ((r = `Invalid input: must include "${t.validation.includes}"`),
            typeof t.validation.position == "number" &&
              (r = `${r} at one or more positions greater than or equal to ${t.validation.position}`))
          : "startsWith" in t.validation
          ? (r = `Invalid input: must start with "${t.validation.startsWith}"`)
          : "endsWith" in t.validation
          ? (r = `Invalid input: must end with "${t.validation.endsWith}"`)
          : de.assertNever(t.validation)
        : t.validation !== "regex"
        ? (r = `Invalid ${t.validation}`)
        : (r = "Invalid");
      break;
    case I.too_small:
      t.type === "array"
        ? (r = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "more than"
          } ${t.minimum} element(s)`)
        : t.type === "string"
        ? (r = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at least" : "over"
          } ${t.minimum} character(s)`)
        : t.type === "number"
        ? (r = `Number must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${t.minimum}`)
        : t.type === "bigint"
        ? (r = `Number must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${t.minimum}`)
        : t.type === "date"
        ? (r = `Date must be ${
            t.exact
              ? "exactly equal to "
              : t.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(t.minimum))}`)
        : (r = "Invalid input");
      break;
    case I.too_big:
      t.type === "array"
        ? (r = `Array must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "less than"
          } ${t.maximum} element(s)`)
        : t.type === "string"
        ? (r = `String must contain ${
            t.exact ? "exactly" : t.inclusive ? "at most" : "under"
          } ${t.maximum} character(s)`)
        : t.type === "number"
        ? (r = `Number must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "bigint"
        ? (r = `BigInt must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "less than or equal to"
              : "less than"
          } ${t.maximum}`)
        : t.type === "date"
        ? (r = `Date must be ${
            t.exact
              ? "exactly"
              : t.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(t.maximum))}`)
        : (r = "Invalid input");
      break;
    case I.custom:
      r = "Invalid input";
      break;
    case I.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      r = `Number must be a multiple of ${t.multipleOf}`;
      break;
    case I.not_finite:
      r = "Number must be finite";
      break;
    default:
      (r = e.defaultError), de.assertNever(t);
  }
  return { message: r };
};
let TP = wd;
function RP() {
  return TP;
}
const PP = (t) => {
  const { data: e, path: r, errorMaps: n, issueData: s } = t,
    i = [...r, ...(s.path || [])],
    o = { ...s, path: i };
  if (s.message !== void 0) return { ...s, path: i, message: s.message };
  let a = "";
  const l = n
    .filter((u) => !!u)
    .slice()
    .reverse();
  for (const u of l) a = u(o, { data: e, defaultError: a }).message;
  return { ...s, path: i, message: a };
};
function F(t, e) {
  const r = RP(),
    n = PP({
      issueData: e,
      data: t.data,
      path: t.path,
      errorMaps: [
        t.common.contextualErrorMap,
        t.schemaErrorMap,
        r,
        r === wd ? void 0 : wd,
      ].filter((s) => !!s),
    });
  t.common.issues.push(n);
}
class xt {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(e, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted") return ee;
      s.status === "dirty" && e.dirty(), n.push(s.value);
    }
    return { status: e.value, value: n };
  }
  static async mergeObjectAsync(e, r) {
    const n = [];
    for (const s of r) {
      const i = await s.key,
        o = await s.value;
      n.push({ key: i, value: o });
    }
    return xt.mergeObjectSync(e, n);
  }
  static mergeObjectSync(e, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return ee;
      i.status === "dirty" && e.dirty(),
        o.status === "dirty" && e.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (n[i.value] = o.value);
    }
    return { status: e.value, value: n };
  }
}
const ee = Object.freeze({ status: "aborted" }),
  Di = (t) => ({ status: "dirty", value: t }),
  At = (t) => ({ status: "valid", value: t }),
  km = (t) => t.status === "aborted",
  Sm = (t) => t.status === "dirty",
  li = (t) => t.status === "valid",
  _l = (t) => typeof Promise < "u" && t instanceof Promise;
var W;
(function (t) {
  (t.errToObj = (e) => (typeof e == "string" ? { message: e } : e || {})),
    (t.toString = (e) =>
      typeof e == "string" ? e : e == null ? void 0 : e.message);
})(W || (W = {}));
class wn {
  constructor(e, r, n, s) {
    (this._cachedPath = []),
      (this.parent = e),
      (this.data = r),
      (this._path = n),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (Array.isArray(this._key)
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Em = (t, e) => {
  if (li(e)) return { success: !0, data: e.value };
  if (!t.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const r = new Tr(t.common.issues);
      return (this._error = r), this._error;
    },
  };
};
function ie(t) {
  if (!t) return {};
  const {
    errorMap: e,
    invalid_type_error: r,
    required_error: n,
    description: s,
  } = t;
  if (e && (r || n))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return e
    ? { errorMap: e, description: s }
    : {
        errorMap: (o, a) => {
          const { message: l } = t;
          return o.code === "invalid_enum_value"
            ? { message: l ?? a.defaultError }
            : typeof a.data > "u"
            ? { message: l ?? n ?? a.defaultError }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : { message: l ?? r ?? a.defaultError };
        },
        description: s,
      };
}
class le {
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return Wr(e.data);
  }
  _getOrReturnCtx(e, r) {
    return (
      r || {
        common: e.parent.common,
        data: e.data,
        parsedType: Wr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new xt(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: Wr(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const r = this._parse(e);
    if (_l(r)) throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(e) {
    const r = this._parse(e);
    return Promise.resolve(r);
  }
  parse(e, r) {
    const n = this.safeParse(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  safeParse(e, r) {
    const n = {
        common: {
          issues: [],
          async: (r == null ? void 0 : r.async) ?? !1,
          contextualErrorMap: r == null ? void 0 : r.errorMap,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Wr(e),
      },
      s = this._parseSync({ data: e, path: n.path, parent: n });
    return Em(n, s);
  }
  "~validate"(e) {
    var n, s;
    const r = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: e,
      parsedType: Wr(e),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: e, path: [], parent: r });
        return li(i) ? { value: i.value } : { issues: r.common.issues };
      } catch (i) {
        (s =
          (n = i == null ? void 0 : i.message) == null
            ? void 0
            : n.toLowerCase()) != null &&
          s.includes("encountered") &&
          (this["~standard"].async = !0),
          (r.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: e, path: [], parent: r }).then((i) =>
      li(i) ? { value: i.value } : { issues: r.common.issues }
    );
  }
  async parseAsync(e, r) {
    const n = await this.safeParseAsync(e, r);
    if (n.success) return n.data;
    throw n.error;
  }
  async safeParseAsync(e, r) {
    const n = {
        common: {
          issues: [],
          contextualErrorMap: r == null ? void 0 : r.errorMap,
          async: !0,
        },
        path: (r == null ? void 0 : r.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: Wr(e),
      },
      s = this._parse({ data: e, path: n.path, parent: n }),
      i = await (_l(s) ? s : Promise.resolve(s));
    return Em(n, i);
  }
  refine(e, r) {
    const n = (s) =>
      typeof r == "string" || typeof r > "u"
        ? { message: r }
        : typeof r == "function"
        ? r(s)
        : r;
    return this._refinement((s, i) => {
      const o = e(s),
        a = () => i.addIssue({ code: I.custom, ...n(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((l) => (l ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(e, r) {
    return this._refinement((n, s) =>
      e(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1)
    );
  }
  _refinement(e) {
    return new ci({
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "refinement", refinement: e },
    });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (r) => this["~validate"](r),
      });
  }
  optional() {
    return hn.create(this, this._def);
  }
  nullable() {
    return di.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return lr.create(this);
  }
  promise() {
    return Cl.create(this, this._def);
  }
  or(e) {
    return Sl.create([this, e], this._def);
  }
  and(e) {
    return El.create(this, e, this._def);
  }
  transform(e) {
    return new ci({
      ...ie(this._def),
      schema: this,
      typeName: te.ZodEffects,
      effect: { type: "transform", transform: e },
    });
  }
  default(e) {
    const r = typeof e == "function" ? e : () => e;
    return new bd({
      ...ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: te.ZodDefault,
    });
  }
  brand() {
    return new YP({ typeName: te.ZodBranded, type: this, ...ie(this._def) });
  }
  catch(e) {
    const r = typeof e == "function" ? e : () => e;
    return new _d({
      ...ie(this._def),
      innerType: this,
      catchValue: r,
      typeName: te.ZodCatch,
    });
  }
  describe(e) {
    const r = this.constructor;
    return new r({ ...this._def, description: e });
  }
  pipe(e) {
    return Hh.create(this, e);
  }
  readonly() {
    return kd.create(this);
  }
  isNullable() {
    return this.safeParse(null).success;
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
}
const OP = /^c[^\s-]{8,}$/i,
  AP = /^[0-9a-z]+$/,
  NP = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  jP =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  IP = /^[a-z0-9_-]{21}$/i,
  $P = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  LP =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  MP =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  DP = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Yu;
const UP =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  FP =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  zP =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  BP =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  WP = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  VP = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  fw =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  HP = new RegExp(`^${fw}$`);
function pw(t) {
  let e = "[0-5]\\d";
  t.precision
    ? (e = `${e}\\.\\d{${t.precision}}`)
    : t.precision == null && (e = `${e}(\\.\\d+)?`);
  const r = t.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${e})${r}`;
}
function qP(t) {
  return new RegExp(`^${pw(t)}$`);
}
function KP(t) {
  let e = `${fw}T${pw(t)}`;
  const r = [];
  return (
    r.push(t.local ? "Z?" : "Z"),
    t.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (e = `${e}(${r.join("|")})`),
    new RegExp(`^${e}$`)
  );
}
function GP(t, e) {
  return !!(
    ((e === "v4" || !e) && UP.test(t)) ||
    ((e === "v6" || !e) && zP.test(t))
  );
}
function QP(t, e) {
  if (!$P.test(t)) return !1;
  try {
    const [r] = t.split(".");
    if (!r) return !1;
    const n = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      s = JSON.parse(atob(n));
    return !(
      typeof s != "object" ||
      s === null ||
      ("typ" in s && (s == null ? void 0 : s.typ) !== "JWT") ||
      !s.alg ||
      (e && s.alg !== e)
    );
  } catch {
    return !1;
  }
}
function JP(t, e) {
  return !!(
    ((e === "v4" || !e) && FP.test(t)) ||
    ((e === "v6" || !e) && BP.test(t))
  );
}
class tn extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = String(e.data)),
      this._getType(e) !== B.string)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        F(i, {
          code: I.invalid_type,
          expected: B.string,
          received: i.parsedType,
        }),
        ee
      );
    }
    const n = new xt();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        e.data.length < i.value &&
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            code: I.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "max")
        e.data.length > i.value &&
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            code: I.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "length") {
        const o = e.data.length > i.value,
          a = e.data.length < i.value;
        (o || a) &&
          ((s = this._getOrReturnCtx(e, s)),
          o
            ? F(s, {
                code: I.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              F(s, {
                code: I.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          n.dirty());
      } else if (i.kind === "email")
        MP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "email",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "emoji")
        Yu || (Yu = new RegExp(DP, "u")),
          Yu.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "emoji",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty());
      else if (i.kind === "uuid")
        jP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "uuid",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "nanoid")
        IP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "nanoid",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "cuid")
        OP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "cuid",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "cuid2")
        AP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "cuid2",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "ulid")
        NP.test(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            validation: "ulid",
            code: I.invalid_string,
            message: i.message,
          }),
          n.dirty());
      else if (i.kind === "url")
        try {
          new URL(e.data);
        } catch {
          (s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "url",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(e.data) ||
              ((s = this._getOrReturnCtx(e, s)),
              F(s, {
                validation: "regex",
                code: I.invalid_string,
                message: i.message,
              }),
              n.dirty()))
          : i.kind === "trim"
          ? (e.data = e.data.trim())
          : i.kind === "includes"
          ? e.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: { includes: i.value, position: i.position },
              message: i.message,
            }),
            n.dirty())
          : i.kind === "toLowerCase"
          ? (e.data = e.data.toLowerCase())
          : i.kind === "toUpperCase"
          ? (e.data = e.data.toUpperCase())
          : i.kind === "startsWith"
          ? e.data.startsWith(i.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            n.dirty())
          : i.kind === "endsWith"
          ? e.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            n.dirty())
          : i.kind === "datetime"
          ? KP(i).test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            n.dirty())
          : i.kind === "date"
          ? HP.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: "date",
              message: i.message,
            }),
            n.dirty())
          : i.kind === "time"
          ? qP(i).test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              code: I.invalid_string,
              validation: "time",
              message: i.message,
            }),
            n.dirty())
          : i.kind === "duration"
          ? LP.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "duration",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "ip"
          ? GP(e.data, i.version) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "ip",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "jwt"
          ? QP(e.data, i.alg) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "jwt",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "cidr"
          ? JP(e.data, i.version) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "cidr",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "base64"
          ? WP.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "base64",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : i.kind === "base64url"
          ? VP.test(e.data) ||
            ((s = this._getOrReturnCtx(e, s)),
            F(s, {
              validation: "base64url",
              code: I.invalid_string,
              message: i.message,
            }),
            n.dirty())
          : de.assertNever(i);
    return { status: n.value, value: e.data };
  }
  _regex(e, r, n) {
    return this.refinement((s) => e.test(s), {
      validation: r,
      code: I.invalid_string,
      ...W.errToObj(n),
    });
  }
  _addCheck(e) {
    return new tn({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: "email", ...W.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: "url", ...W.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: "emoji", ...W.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: "uuid", ...W.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: "nanoid", ...W.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: "cuid", ...W.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: "cuid2", ...W.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: "ulid", ...W.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: "base64", ...W.errToObj(e) });
  }
  base64url(e) {
    return this._addCheck({ kind: "base64url", ...W.errToObj(e) });
  }
  jwt(e) {
    return this._addCheck({ kind: "jwt", ...W.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: "ip", ...W.errToObj(e) });
  }
  cidr(e) {
    return this._addCheck({ kind: "cidr", ...W.errToObj(e) });
  }
  datetime(e) {
    return typeof e == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: e,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          offset: (e == null ? void 0 : e.offset) ?? !1,
          local: (e == null ? void 0 : e.local) ?? !1,
          ...W.errToObj(e == null ? void 0 : e.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: "date", message: e });
  }
  time(e) {
    return typeof e == "string"
      ? this._addCheck({ kind: "time", precision: null, message: e })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (e == null ? void 0 : e.precision) > "u"
              ? null
              : e == null
              ? void 0
              : e.precision,
          ...W.errToObj(e == null ? void 0 : e.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: "duration", ...W.errToObj(e) });
  }
  regex(e, r) {
    return this._addCheck({ kind: "regex", regex: e, ...W.errToObj(r) });
  }
  includes(e, r) {
    return this._addCheck({
      kind: "includes",
      value: e,
      position: r == null ? void 0 : r.position,
      ...W.errToObj(r == null ? void 0 : r.message),
    });
  }
  startsWith(e, r) {
    return this._addCheck({ kind: "startsWith", value: e, ...W.errToObj(r) });
  }
  endsWith(e, r) {
    return this._addCheck({ kind: "endsWith", value: e, ...W.errToObj(r) });
  }
  min(e, r) {
    return this._addCheck({ kind: "min", value: e, ...W.errToObj(r) });
  }
  max(e, r) {
    return this._addCheck({ kind: "max", value: e, ...W.errToObj(r) });
  }
  length(e, r) {
    return this._addCheck({ kind: "length", value: e, ...W.errToObj(r) });
  }
  nonempty(e) {
    return this.min(1, W.errToObj(e));
  }
  trim() {
    return new tn({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new tn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new tn({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((e) => e.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((e) => e.kind === "base64url");
  }
  get minLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxLength() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
tn.create = (t) =>
  new tn({
    checks: [],
    typeName: te.ZodString,
    coerce: (t == null ? void 0 : t.coerce) ?? !1,
    ...ie(t),
  });
function ZP(t, e) {
  const r = (t.toString().split(".")[1] || "").length,
    n = (e.toString().split(".")[1] || "").length,
    s = r > n ? r : n,
    i = Number.parseInt(t.toFixed(s).replace(".", "")),
    o = Number.parseInt(e.toFixed(s).replace(".", ""));
  return (i % o) / 10 ** s;
}
class Po extends le {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(e) {
    if (
      (this._def.coerce && (e.data = Number(e.data)),
      this._getType(e) !== B.number)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        F(i, {
          code: I.invalid_type,
          expected: B.number,
          received: i.parsedType,
        }),
        ee
      );
    }
    let n;
    const s = new xt();
    for (const i of this._def.checks)
      i.kind === "int"
        ? de.isInteger(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? ZP(e.data, i.value) !== 0 &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          F(n, { code: I.not_finite, message: i.message }),
          s.dirty())
        : de.assertNever(i);
    return { status: s.value, value: e.data };
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, W.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, W.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, W.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, W.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Po({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: W.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new Po({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: "int", message: W.toString(e) });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: W.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: W.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: W.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: W.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: W.toString(r),
    });
  }
  finite(e) {
    return this._addCheck({ kind: "finite", message: W.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: W.toString(e),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: W.toString(e),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
  get isInt() {
    return !!this._def.checks.find(
      (e) =>
        e.kind === "int" || (e.kind === "multipleOf" && de.isInteger(e.value))
    );
  }
  get isFinite() {
    let e = null,
      r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min"
        ? (r === null || n.value > r) && (r = n.value)
        : n.kind === "max" && (e === null || n.value < e) && (e = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(e);
  }
}
Po.create = (t) =>
  new Po({
    checks: [],
    typeName: te.ZodNumber,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ie(t),
  });
class Oo extends le {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if (this._def.coerce)
      try {
        e.data = BigInt(e.data);
      } catch {
        return this._getInvalidInput(e);
      }
    if (this._getType(e) !== B.bigint) return this._getInvalidInput(e);
    let n;
    const s = new xt();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? e.data < i.value : e.data <= i.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? e.data > i.value : e.data >= i.value) &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? e.data % i.value !== BigInt(0) &&
          ((n = this._getOrReturnCtx(e, n)),
          F(n, {
            code: I.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : de.assertNever(i);
    return { status: s.value, value: e.data };
  }
  _getInvalidInput(e) {
    const r = this._getOrReturnCtx(e);
    return (
      F(r, {
        code: I.invalid_type,
        expected: B.bigint,
        received: r.parsedType,
      }),
      ee
    );
  }
  gte(e, r) {
    return this.setLimit("min", e, !0, W.toString(r));
  }
  gt(e, r) {
    return this.setLimit("min", e, !1, W.toString(r));
  }
  lte(e, r) {
    return this.setLimit("max", e, !0, W.toString(r));
  }
  lt(e, r) {
    return this.setLimit("max", e, !1, W.toString(r));
  }
  setLimit(e, r, n, s) {
    return new Oo({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: e, value: r, inclusive: n, message: W.toString(s) },
      ],
    });
  }
  _addCheck(e) {
    return new Oo({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: W.toString(e),
    });
  }
  negative(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: W.toString(e),
    });
  }
  nonpositive(e) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: W.toString(e),
    });
  }
  nonnegative(e) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: W.toString(e),
    });
  }
  multipleOf(e, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: e,
      message: W.toString(r),
    });
  }
  get minValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e;
  }
  get maxValue() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e;
  }
}
Oo.create = (t) =>
  new Oo({
    checks: [],
    typeName: te.ZodBigInt,
    coerce: (t == null ? void 0 : t.coerce) ?? !1,
    ...ie(t),
  });
class Cm extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = !!e.data), this._getType(e) !== B.boolean)
    ) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.boolean,
          received: n.parsedType,
        }),
        ee
      );
    }
    return At(e.data);
  }
}
Cm.create = (t) =>
  new Cm({
    typeName: te.ZodBoolean,
    coerce: (t == null ? void 0 : t.coerce) || !1,
    ...ie(t),
  });
class kl extends le {
  _parse(e) {
    if (
      (this._def.coerce && (e.data = new Date(e.data)),
      this._getType(e) !== B.date)
    ) {
      const i = this._getOrReturnCtx(e);
      return (
        F(i, {
          code: I.invalid_type,
          expected: B.date,
          received: i.parsedType,
        }),
        ee
      );
    }
    if (Number.isNaN(e.data.getTime())) {
      const i = this._getOrReturnCtx(e);
      return F(i, { code: I.invalid_date }), ee;
    }
    const n = new xt();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? e.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            code: I.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          n.dirty())
        : i.kind === "max"
        ? e.data.getTime() > i.value &&
          ((s = this._getOrReturnCtx(e, s)),
          F(s, {
            code: I.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          n.dirty())
        : de.assertNever(i);
    return { status: n.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new kl({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, r) {
    return this._addCheck({
      kind: "min",
      value: e.getTime(),
      message: W.toString(r),
    });
  }
  max(e, r) {
    return this._addCheck({
      kind: "max",
      value: e.getTime(),
      message: W.toString(r),
    });
  }
  get minDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "min" && (e === null || r.value > e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const r of this._def.checks)
      r.kind === "max" && (e === null || r.value < e) && (e = r.value);
    return e != null ? new Date(e) : null;
  }
}
kl.create = (t) =>
  new kl({
    checks: [],
    coerce: (t == null ? void 0 : t.coerce) || !1,
    typeName: te.ZodDate,
    ...ie(t),
  });
class Tm extends le {
  _parse(e) {
    if (this._getType(e) !== B.symbol) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.symbol,
          received: n.parsedType,
        }),
        ee
      );
    }
    return At(e.data);
  }
}
Tm.create = (t) => new Tm({ typeName: te.ZodSymbol, ...ie(t) });
class Rm extends le {
  _parse(e) {
    if (this._getType(e) !== B.undefined) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.undefined,
          received: n.parsedType,
        }),
        ee
      );
    }
    return At(e.data);
  }
}
Rm.create = (t) => new Rm({ typeName: te.ZodUndefined, ...ie(t) });
class Pm extends le {
  _parse(e) {
    if (this._getType(e) !== B.null) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.null,
          received: n.parsedType,
        }),
        ee
      );
    }
    return At(e.data);
  }
}
Pm.create = (t) => new Pm({ typeName: te.ZodNull, ...ie(t) });
class Om extends le {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return At(e.data);
  }
}
Om.create = (t) => new Om({ typeName: te.ZodAny, ...ie(t) });
class Am extends le {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return At(e.data);
  }
}
Am.create = (t) => new Am({ typeName: te.ZodUnknown, ...ie(t) });
class xn extends le {
  _parse(e) {
    const r = this._getOrReturnCtx(e);
    return (
      F(r, { code: I.invalid_type, expected: B.never, received: r.parsedType }),
      ee
    );
  }
}
xn.create = (t) => new xn({ typeName: te.ZodNever, ...ie(t) });
class Nm extends le {
  _parse(e) {
    if (this._getType(e) !== B.undefined) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.void,
          received: n.parsedType,
        }),
        ee
      );
    }
    return At(e.data);
  }
}
Nm.create = (t) => new Nm({ typeName: te.ZodVoid, ...ie(t) });
class lr extends le {
  _parse(e) {
    const { ctx: r, status: n } = this._processInputParams(e),
      s = this._def;
    if (r.parsedType !== B.array)
      return (
        F(r, {
          code: I.invalid_type,
          expected: B.array,
          received: r.parsedType,
        }),
        ee
      );
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value,
        a = r.data.length < s.exactLength.value;
      (o || a) &&
        (F(r, {
          code: o ? I.too_big : I.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        n.dirty());
    }
    if (
      (s.minLength !== null &&
        r.data.length < s.minLength.value &&
        (F(r, {
          code: I.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        n.dirty()),
      s.maxLength !== null &&
        r.data.length > s.maxLength.value &&
        (F(r, {
          code: I.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        n.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((o, a) => s.type._parseAsync(new wn(r, o, r.path, a)))
      ).then((o) => xt.mergeArray(n, o));
    const i = [...r.data].map((o, a) =>
      s.type._parseSync(new wn(r, o, r.path, a))
    );
    return xt.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(e, r) {
    return new lr({
      ...this._def,
      minLength: { value: e, message: W.toString(r) },
    });
  }
  max(e, r) {
    return new lr({
      ...this._def,
      maxLength: { value: e, message: W.toString(r) },
    });
  }
  length(e, r) {
    return new lr({
      ...this._def,
      exactLength: { value: e, message: W.toString(r) },
    });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
lr.create = (t, e) =>
  new lr({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: te.ZodArray,
    ...ie(e),
  });
function bs(t) {
  if (t instanceof Re) {
    const e = {};
    for (const r in t.shape) {
      const n = t.shape[r];
      e[r] = hn.create(bs(n));
    }
    return new Re({ ...t._def, shape: () => e });
  } else
    return t instanceof lr
      ? new lr({ ...t._def, type: bs(t.element) })
      : t instanceof hn
      ? hn.create(bs(t.unwrap()))
      : t instanceof di
      ? di.create(bs(t.unwrap()))
      : t instanceof ts
      ? ts.create(t.items.map((e) => bs(e)))
      : t;
}
class Re extends le {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const e = this._def.shape(),
      r = de.objectKeys(e);
    return (this._cached = { shape: e, keys: r }), this._cached;
  }
  _parse(e) {
    if (this._getType(e) !== B.object) {
      const u = this._getOrReturnCtx(e);
      return (
        F(u, {
          code: I.invalid_type,
          expected: B.object,
          received: u.parsedType,
        }),
        ee
      );
    }
    const { status: n, ctx: s } = this._processInputParams(e),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof xn && this._def.unknownKeys === "strip")
    )
      for (const u in s.data) o.includes(u) || a.push(u);
    const l = [];
    for (const u of o) {
      const c = i[u],
        h = s.data[u];
      l.push({
        key: { status: "valid", value: u },
        value: c._parse(new wn(s, h, s.path, u)),
        alwaysSet: u in s.data,
      });
    }
    if (this._def.catchall instanceof xn) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const c of a)
          l.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: s.data[c] },
          });
      else if (u === "strict")
        a.length > 0 &&
          (F(s, { code: I.unrecognized_keys, keys: a }), n.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const c of a) {
        const h = s.data[c];
        l.push({
          key: { status: "valid", value: c },
          value: u._parse(new wn(s, h, s.path, c)),
          alwaysSet: c in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const c of l) {
              const h = await c.key,
                f = await c.value;
              u.push({ key: h, value: f, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => xt.mergeObjectSync(n, u))
      : xt.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      W.errToObj,
      new Re({
        ...this._def,
        unknownKeys: "strict",
        ...(e !== void 0
          ? {
              errorMap: (r, n) => {
                var i, o;
                const s =
                  ((o = (i = this._def).errorMap) == null
                    ? void 0
                    : o.call(i, r, n).message) ?? n.defaultError;
                return r.code === "unrecognized_keys"
                  ? { message: W.errToObj(e).message ?? s }
                  : { message: s };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new Re({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new Re({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(e) {
    return new Re({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...e }),
    });
  }
  merge(e) {
    return new Re({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: te.ZodObject,
    });
  }
  setKey(e, r) {
    return this.augment({ [e]: r });
  }
  catchall(e) {
    return new Re({ ...this._def, catchall: e });
  }
  pick(e) {
    const r = {};
    for (const n of de.objectKeys(e))
      e[n] && this.shape[n] && (r[n] = this.shape[n]);
    return new Re({ ...this._def, shape: () => r });
  }
  omit(e) {
    const r = {};
    for (const n of de.objectKeys(this.shape)) e[n] || (r[n] = this.shape[n]);
    return new Re({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return bs(this);
  }
  partial(e) {
    const r = {};
    for (const n of de.objectKeys(this.shape)) {
      const s = this.shape[n];
      e && !e[n] ? (r[n] = s) : (r[n] = s.optional());
    }
    return new Re({ ...this._def, shape: () => r });
  }
  required(e) {
    const r = {};
    for (const n of de.objectKeys(this.shape))
      if (e && !e[n]) r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof hn; ) i = i._def.innerType;
        r[n] = i;
      }
    return new Re({ ...this._def, shape: () => r });
  }
  keyof() {
    return mw(de.objectKeys(this.shape));
  }
}
Re.create = (t, e) =>
  new Re({
    shape: () => t,
    unknownKeys: "strip",
    catchall: xn.create(),
    typeName: te.ZodObject,
    ...ie(e),
  });
Re.strictCreate = (t, e) =>
  new Re({
    shape: () => t,
    unknownKeys: "strict",
    catchall: xn.create(),
    typeName: te.ZodObject,
    ...ie(e),
  });
Re.lazycreate = (t, e) =>
  new Re({
    shape: t,
    unknownKeys: "strip",
    catchall: xn.create(),
    typeName: te.ZodObject,
    ...ie(e),
  });
class Sl extends le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new Tr(a.ctx.common.issues));
      return F(r, { code: I.invalid_union, unionErrors: o }), ee;
    }
    if (r.common.async)
      return Promise.all(
        n.map(async (i) => {
          const o = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: r.data,
              path: r.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let i;
      const o = [];
      for (const l of n) {
        const u = { ...r, common: { ...r.common, issues: [] }, parent: null },
          c = l._parseSync({ data: r.data, path: r.path, parent: u });
        if (c.status === "valid") return c;
        c.status === "dirty" && !i && (i = { result: c, ctx: u }),
          u.common.issues.length && o.push(u.common.issues);
      }
      if (i) return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new Tr(l));
      return F(r, { code: I.invalid_union, unionErrors: a }), ee;
    }
  }
  get options() {
    return this._def.options;
  }
}
Sl.create = (t, e) => new Sl({ options: t, typeName: te.ZodUnion, ...ie(e) });
function xd(t, e) {
  const r = Wr(t),
    n = Wr(e);
  if (t === e) return { valid: !0, data: t };
  if (r === B.object && n === B.object) {
    const s = de.objectKeys(e),
      i = de.objectKeys(t).filter((a) => s.indexOf(a) !== -1),
      o = { ...t, ...e };
    for (const a of i) {
      const l = xd(t[a], e[a]);
      if (!l.valid) return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (r === B.array && n === B.array) {
    if (t.length !== e.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const o = t[i],
        a = e[i],
        l = xd(o, a);
      if (!l.valid) return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === B.date && n === B.date && +t == +e
      ? { valid: !0, data: t }
      : { valid: !1 };
}
class El extends le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = (i, o) => {
        if (km(i) || km(o)) return ee;
        const a = xd(i.value, o.value);
        return a.valid
          ? ((Sm(i) || Sm(o)) && r.dirty(), { status: r.value, value: a.data })
          : (F(n, { code: I.invalid_intersection_types }), ee);
      };
    return n.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseAsync({
            data: n.data,
            path: n.path,
            parent: n,
          }),
        ]).then(([i, o]) => s(i, o))
      : s(
          this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
          this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
        );
  }
}
El.create = (t, e, r) =>
  new El({ left: t, right: e, typeName: te.ZodIntersection, ...ie(r) });
class ts extends le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== B.array)
      return (
        F(n, {
          code: I.invalid_type,
          expected: B.array,
          received: n.parsedType,
        }),
        ee
      );
    if (n.data.length < this._def.items.length)
      return (
        F(n, {
          code: I.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ee
      );
    !this._def.rest &&
      n.data.length > this._def.items.length &&
      (F(n, {
        code: I.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    const i = [...n.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new wn(n, o, n.path, a)) : null;
      })
      .filter((o) => !!o);
    return n.common.async
      ? Promise.all(i).then((o) => xt.mergeArray(r, o))
      : xt.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new ts({ ...this._def, rest: e });
  }
}
ts.create = (t, e) => {
  if (!Array.isArray(t))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ts({ items: t, typeName: te.ZodTuple, rest: null, ...ie(e) });
};
class jm extends le {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== B.map)
      return (
        F(n, { code: I.invalid_type, expected: B.map, received: n.parsedType }),
        ee
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...n.data.entries()].map(([a, l], u) => ({
        key: s._parse(new wn(n, a, n.path, [u, "key"])),
        value: i._parse(new wn(n, l, n.path, [u, "value"])),
      }));
    if (n.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const u = await l.key,
            c = await l.value;
          if (u.status === "aborted" || c.status === "aborted") return ee;
          (u.status === "dirty" || c.status === "dirty") && r.dirty(),
            a.set(u.value, c.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of o) {
        const u = l.key,
          c = l.value;
        if (u.status === "aborted" || c.status === "aborted") return ee;
        (u.status === "dirty" || c.status === "dirty") && r.dirty(),
          a.set(u.value, c.value);
      }
      return { status: r.value, value: a };
    }
  }
}
jm.create = (t, e, r) =>
  new jm({ valueType: e, keyType: t, typeName: te.ZodMap, ...ie(r) });
class Ao extends le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.parsedType !== B.set)
      return (
        F(n, { code: I.invalid_type, expected: B.set, received: n.parsedType }),
        ee
      );
    const s = this._def;
    s.minSize !== null &&
      n.data.size < s.minSize.value &&
      (F(n, {
        code: I.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      r.dirty()),
      s.maxSize !== null &&
        n.data.size > s.maxSize.value &&
        (F(n, {
          code: I.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        r.dirty());
    const i = this._def.valueType;
    function o(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === "aborted") return ee;
        c.status === "dirty" && r.dirty(), u.add(c.value);
      }
      return { status: r.value, value: u };
    }
    const a = [...n.data.values()].map((l, u) =>
      i._parse(new wn(n, l, n.path, u))
    );
    return n.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(e, r) {
    return new Ao({
      ...this._def,
      minSize: { value: e, message: W.toString(r) },
    });
  }
  max(e, r) {
    return new Ao({
      ...this._def,
      maxSize: { value: e, message: W.toString(r) },
    });
  }
  size(e, r) {
    return this.min(e, r).max(e, r);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
Ao.create = (t, e) =>
  new Ao({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: te.ZodSet,
    ...ie(e),
  });
class Im extends le {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Im.create = (t, e) => new Im({ getter: t, typeName: te.ZodLazy, ...ie(e) });
class $m extends le {
  _parse(e) {
    if (e.data !== this._def.value) {
      const r = this._getOrReturnCtx(e);
      return (
        F(r, {
          received: r.data,
          code: I.invalid_literal,
          expected: this._def.value,
        }),
        ee
      );
    }
    return { status: "valid", value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
$m.create = (t, e) => new $m({ value: t, typeName: te.ZodLiteral, ...ie(e) });
function mw(t, e) {
  return new ui({ values: t, typeName: te.ZodEnum, ...ie(e) });
}
class ui extends le {
  _parse(e) {
    if (typeof e.data != "string") {
      const r = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        F(r, {
          expected: de.joinValues(n),
          received: r.parsedType,
          code: I.invalid_type,
        }),
        ee
      );
    }
    if (
      (this._cache || (this._cache = new Set(this._def.values)),
      !this._cache.has(e.data))
    ) {
      const r = this._getOrReturnCtx(e),
        n = this._def.values;
      return (
        F(r, { received: r.data, code: I.invalid_enum_value, options: n }), ee
      );
    }
    return At(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Values() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  get Enum() {
    const e = {};
    for (const r of this._def.values) e[r] = r;
    return e;
  }
  extract(e, r = this._def) {
    return ui.create(e, { ...this._def, ...r });
  }
  exclude(e, r = this._def) {
    return ui.create(
      this.options.filter((n) => !e.includes(n)),
      { ...this._def, ...r }
    );
  }
}
ui.create = mw;
class Lm extends le {
  _parse(e) {
    const r = de.getValidEnumValues(this._def.values),
      n = this._getOrReturnCtx(e);
    if (n.parsedType !== B.string && n.parsedType !== B.number) {
      const s = de.objectValues(r);
      return (
        F(n, {
          expected: de.joinValues(s),
          received: n.parsedType,
          code: I.invalid_type,
        }),
        ee
      );
    }
    if (
      (this._cache ||
        (this._cache = new Set(de.getValidEnumValues(this._def.values))),
      !this._cache.has(e.data))
    ) {
      const s = de.objectValues(r);
      return (
        F(n, { received: n.data, code: I.invalid_enum_value, options: s }), ee
      );
    }
    return At(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Lm.create = (t, e) =>
  new Lm({ values: t, typeName: te.ZodNativeEnum, ...ie(e) });
class Cl extends le {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    if (r.parsedType !== B.promise && r.common.async === !1)
      return (
        F(r, {
          code: I.invalid_type,
          expected: B.promise,
          received: r.parsedType,
        }),
        ee
      );
    const n = r.parsedType === B.promise ? r.data : Promise.resolve(r.data);
    return At(
      n.then((s) =>
        this._def.type.parseAsync(s, {
          path: r.path,
          errorMap: r.common.contextualErrorMap,
        })
      )
    );
  }
}
Cl.create = (t, e) => new Cl({ type: t, typeName: te.ZodPromise, ...ie(e) });
class ci extends le {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === te.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          F(n, o), o.fatal ? r.abort() : r.dirty();
        },
        get path() {
          return n.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(n.data, i);
      if (n.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (r.value === "aborted") return ee;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: n.path,
            parent: n,
          });
          return l.status === "aborted"
            ? ee
            : l.status === "dirty" || r.value === "dirty"
            ? Di(l.value)
            : l;
        });
      {
        if (r.value === "aborted") return ee;
        const a = this._def.schema._parseSync({
          data: o,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? ee
          : a.status === "dirty" || r.value === "dirty"
          ? Di(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (n.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return a.status === "aborted"
          ? ee
          : (a.status === "dirty" && r.dirty(),
            o(a.value),
            { status: r.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((a) =>
            a.status === "aborted"
              ? ee
              : (a.status === "dirty" && r.dirty(),
                o(a.value).then(() => ({ status: r.value, value: a.value })))
          );
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        if (!li(o)) return ee;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: r.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: n.data, path: n.path, parent: n })
          .then((o) =>
            li(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: r.value,
                  value: a,
                }))
              : ee
          );
    de.assertNever(s);
  }
}
ci.create = (t, e, r) =>
  new ci({ schema: t, typeName: te.ZodEffects, effect: e, ...ie(r) });
ci.createWithPreprocess = (t, e, r) =>
  new ci({
    schema: e,
    effect: { type: "preprocess", transform: t },
    typeName: te.ZodEffects,
    ...ie(r),
  });
class hn extends le {
  _parse(e) {
    return this._getType(e) === B.undefined
      ? At(void 0)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
hn.create = (t, e) =>
  new hn({ innerType: t, typeName: te.ZodOptional, ...ie(e) });
class di extends le {
  _parse(e) {
    return this._getType(e) === B.null
      ? At(null)
      : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
di.create = (t, e) =>
  new di({ innerType: t, typeName: te.ZodNullable, ...ie(e) });
class bd extends le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e);
    let n = r.data;
    return (
      r.parsedType === B.undefined && (n = this._def.defaultValue()),
      this._def.innerType._parse({ data: n, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
bd.create = (t, e) =>
  new bd({
    innerType: t,
    typeName: te.ZodDefault,
    defaultValue: typeof e.default == "function" ? e.default : () => e.default,
    ...ie(e),
  });
class _d extends le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = { ...r, common: { ...r.common, issues: [] } },
      s = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n },
      });
    return _l(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new Tr(n.common.issues);
                  },
                  input: n.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Tr(n.common.issues);
                  },
                  input: n.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
_d.create = (t, e) =>
  new _d({
    innerType: t,
    typeName: te.ZodCatch,
    catchValue: typeof e.catch == "function" ? e.catch : () => e.catch,
    ...ie(e),
  });
class Mm extends le {
  _parse(e) {
    if (this._getType(e) !== B.nan) {
      const n = this._getOrReturnCtx(e);
      return (
        F(n, { code: I.invalid_type, expected: B.nan, received: n.parsedType }),
        ee
      );
    }
    return { status: "valid", value: e.data };
  }
}
Mm.create = (t) => new Mm({ typeName: te.ZodNaN, ...ie(t) });
class YP extends le {
  _parse(e) {
    const { ctx: r } = this._processInputParams(e),
      n = r.data;
    return this._def.type._parse({ data: n, path: r.path, parent: r });
  }
  unwrap() {
    return this._def.type;
  }
}
class Hh extends le {
  _parse(e) {
    const { status: r, ctx: n } = this._processInputParams(e);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n,
        });
        return i.status === "aborted"
          ? ee
          : i.status === "dirty"
          ? (r.dirty(), Di(i.value))
          : this._def.out._parseAsync({
              data: i.value,
              path: n.path,
              parent: n,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n,
      });
      return s.status === "aborted"
        ? ee
        : s.status === "dirty"
        ? (r.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: n.path, parent: n });
    }
  }
  static create(e, r) {
    return new Hh({ in: e, out: r, typeName: te.ZodPipeline });
  }
}
class kd extends le {
  _parse(e) {
    const r = this._def.innerType._parse(e),
      n = (s) => (li(s) && (s.value = Object.freeze(s.value)), s);
    return _l(r) ? r.then((s) => n(s)) : n(r);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kd.create = (t, e) =>
  new kd({ innerType: t, typeName: te.ZodReadonly, ...ie(e) });
Re.lazycreate;
var te;
(function (t) {
  (t.ZodString = "ZodString"),
    (t.ZodNumber = "ZodNumber"),
    (t.ZodNaN = "ZodNaN"),
    (t.ZodBigInt = "ZodBigInt"),
    (t.ZodBoolean = "ZodBoolean"),
    (t.ZodDate = "ZodDate"),
    (t.ZodSymbol = "ZodSymbol"),
    (t.ZodUndefined = "ZodUndefined"),
    (t.ZodNull = "ZodNull"),
    (t.ZodAny = "ZodAny"),
    (t.ZodUnknown = "ZodUnknown"),
    (t.ZodNever = "ZodNever"),
    (t.ZodVoid = "ZodVoid"),
    (t.ZodArray = "ZodArray"),
    (t.ZodObject = "ZodObject"),
    (t.ZodUnion = "ZodUnion"),
    (t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (t.ZodIntersection = "ZodIntersection"),
    (t.ZodTuple = "ZodTuple"),
    (t.ZodRecord = "ZodRecord"),
    (t.ZodMap = "ZodMap"),
    (t.ZodSet = "ZodSet"),
    (t.ZodFunction = "ZodFunction"),
    (t.ZodLazy = "ZodLazy"),
    (t.ZodLiteral = "ZodLiteral"),
    (t.ZodEnum = "ZodEnum"),
    (t.ZodEffects = "ZodEffects"),
    (t.ZodNativeEnum = "ZodNativeEnum"),
    (t.ZodOptional = "ZodOptional"),
    (t.ZodNullable = "ZodNullable"),
    (t.ZodDefault = "ZodDefault"),
    (t.ZodCatch = "ZodCatch"),
    (t.ZodPromise = "ZodPromise"),
    (t.ZodBranded = "ZodBranded"),
    (t.ZodPipeline = "ZodPipeline"),
    (t.ZodReadonly = "ZodReadonly");
})(te || (te = {}));
const XP = tn.create;
xn.create;
lr.create;
Re.create;
Re.strictCreate;
Sl.create;
El.create;
ts.create;
ui.create;
Cl.create;
hn.create;
di.create;
const eO = XP().email("Please enter a valid email"),
  tO = ({
    onSubmit: t,
    onSkip: e,
    title: r = "Save this memory",
    description: n = "Enter your email to keep this memory before it expires",
    submitLabel: s = "Continue",
    showSkip: i = !0,
    placeholder: o = "your@email.com",
    allowEmpty: a = !1,
  }) => {
    const [l, u] = b.useState(""),
      [c, h] = b.useState(null),
      [f, d] = b.useState(!1),
      v = async (p) => {
        p.preventDefault(), h(null);
        const x = l.trim();
        if (x === "" && a) {
          d(!0);
          try {
            await t("");
          } catch {
            h("Something went wrong. Please try again.");
          } finally {
            d(!1);
          }
          return;
        }
        if (x !== "") {
          const g = eO.safeParse(x);
          if (!g.success) {
            h(g.error.errors[0].message);
            return;
          }
        }
        if (x === "" && !a) {
          h("Please enter an email address");
          return;
        }
        d(!0);
        try {
          await t(x);
        } catch {
          h("Something went wrong. Please try again.");
        } finally {
          d(!1);
        }
      };
    return w.jsxs("div", {
      className: "w-full max-w-sm mx-auto",
      children: [
        w.jsxs("div", {
          className: "text-center mb-4",
          children: [
            w.jsx("h3", {
              className: "text-2xl font-light text-amber-100 mb-2",
              style: { fontFamily: "'Newsreader', serif" },
              children: r,
            }),
            w.jsx("p", {
              className: "text-sm text-amber-200/60",
              style: { fontFamily: "'Newsreader', serif" },
              children: n,
            }),
          ],
        }),
        w.jsxs("form", {
          onSubmit: v,
          className: "space-y-3",
          children: [
            w.jsxs("div", {
              className: "relative",
              children: [
                w.jsx(Uv, {
                  className:
                    "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-200/40",
                }),
                w.jsx(Vh, {
                  type: "email",
                  value: l,
                  onChange: (p) => u(p.target.value),
                  placeholder: o,
                  className:
                    "pl-10 rounded-[4px] bg-black/20 border-amber-200/20 text-amber-100 placeholder:text-amber-200/40 focus:border-amber-200/40",
                  disabled: f,
                }),
              ],
            }),
            c &&
              w.jsx("p", {
                className: "text-sm text-red-400 text-center",
                children: c,
              }),
            w.jsx(pt, {
              type: "submit",
              className:
                "w-full rounded-[4px] bg-[#78624A] hover:bg-[#8a7055] text-white",
              disabled: f,
              style: { fontFamily: "'Newsreader', serif" },
              children: f
                ? w.jsxs(w.Fragment, {
                    children: [
                      w.jsx(mo, { className: "w-4 h-4 mr-2 animate-spin" }),
                      l.trim() ? "Saving..." : "Continuing...",
                    ],
                  })
                : s,
            }),
          ],
        }),
      ],
    });
  },
  rO = "/assets/demo-photo-1-BJ9Nxbph.png",
  nO = "/assets/demo-photo-2-CKP7ZKQm.png",
  sO = "/assets/demo-photo-3-DeH5kgMB.png",
  iO = [
    { id: "1", imageUrl: rO },
    { id: "2", imageUrl: nO },
    { id: "3", imageUrl: sO },
  ],
  oO = (t) => {
    const e = [];
    for (let r = 0; r < t; r++) {
      const n = 0.3 + Math.sin(r * 0.1) * 0.2,
        s = Math.random() * 0.3;
      e.push(Math.min(1, Math.max(0.1, n + s)));
    }
    return e;
  },
  aO = ({ className: t = "" }) => {
    const [e, r] = b.useState(!1),
      [n, s] = b.useState(0),
      i = 30,
      o = b.useMemo(() => oO(200), []);
    b.useEffect(() => {
      let l = null;
      return (
        e &&
          (l = setInterval(() => {
            s((u) => {
              const c = u + 0.1;
              return c >= i ? 0 : c;
            });
          }, 100)),
        () => {
          l && clearInterval(l);
        }
      );
    }, [e, i]);
    const a = b.useCallback((l) => {
      r(l);
    }, []);
    return w.jsxs("div", {
      className: `flex flex-col items-center gap-0 w-full max-w-sm ${t}`,
      style: { transform: "scale(0.75)", transformOrigin: "top center" },
      children: [
        w.jsx("div", {
          className: "perspective-container w-full",
          children: w.jsx("div", {
            className: "platform-3d relative flex items-center w-full",
            children: w.jsxs("div", {
              className: "relative flex items-center w-full",
              style: { height: "280px" },
              children: [
                w.jsx("div", {
                  className:
                    "absolute right-0 z-0 flex items-center justify-center",
                  style: {
                    height: "117%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  },
                  children: w.jsx(zh, { height: "100%" }),
                }),
                w.jsx("div", {
                  className:
                    "flex-1 mr-6 z-10 h-full rounded-l-[2rem] rounded-r-none shadow-2xl overflow-hidden",
                  children: w.jsx(Dh, {
                    photos: iO,
                    waveformData: o,
                    currentTime: n,
                    duration: i,
                    isPlaying: e,
                  }),
                }),
              ],
            }),
          }),
        }),
        w.jsx("div", {
          className: "mt-0 -translate-y-2",
          children: w.jsx(Fh, {
            onRotationChange: a,
            isPlaying: e,
            hideHint: !0,
          }),
        }),
      ],
    });
  },
  lO = () => {
    const isRecordRoute = window.location.pathname.startsWith("/record");
    const isAdmin = sessionStorage.getItem("admin_auth") === "true";
    const [t, e] = b.useState(isRecordRoute && isAdmin ? "upload" : "home");
    const [r, n] = b.useState([]);
    const [s, i] = b.useState(null);
    const [o, a] = b.useState(0);
    const [l, u] = b.useState(!1);
    const { email: c, setEmail: h, isLoading: f, isReturningUser: d } = $C();
    const {
        isRecording: v,
        recordingTime: p,
        startRecording: x,
        stopRecording: g,
        error: m,
    } = jC();
    const {
        isPlaying: y,
        currentTime: _,
        duration: S,
        waveformData: E,
        loadAudio: k,
        setPlaybackActive: C,
    } = K0();
    const T = b.useCallback(async () => {
        await x();
    }, [x]);
    const R = b.useCallback(async () => {
        const j = await g();
        j && (i(j), a(p), e("review"));
    }, [g, p]);
    const D = b.useCallback(() => {
        i(null), e("upload");
    }, []);
    const L = b.useCallback(async () => {
        if (s) {
            u(!0);
            try {
                r.length > 0 &&
                    (await Promise.all(
                        r.map(
                            (j) =>
                                new Promise((q) => {
                                    const U = new Image();
                                    (U.onload = () => q()),
                                        (U.onerror = () => q()),
                                        (U.src = j.imageUrl);
                                })
                        )
                    ));
                await k(s);
                await window.voiceNoteStorage.save(r, s).catch(err => console.error("Save local failed", err));
                e("player");
            } finally {
                u(!1);
            }
        }
    }, [s, r, k]);
    const H = b.useCallback((j) => {
        n(j);
    }, []);
    const M = b.useCallback(
        (j) => {
            console.log("Handle rotation:", j), C(j);
        },
        [C]
    );
    const Y = b.useCallback(() => {
        r.forEach((j) => URL.revokeObjectURL(j.imageUrl)),
            n([]),
            i(null),
            e("home");
    }, [r]);
    const Q = b.useCallback(() => {
        e("player");
    }, []);
    const X = b.useCallback(() => {
        e("upload");
    }, [d, c]);
    const P = b.useCallback(
        async (j) => {
            j && h(j), e("upload");
        },
        [h]
    );
    const A = (j) => {
        if (!isFinite(j) || isNaN(j)) return "0:00";
        const q = Math.floor(j / 60),
            U = Math.floor(j % 60);
        return `${q}:${U.toString().padStart(2, "0")}`;
    };
    b.useEffect(() => {
        const checkLocal = async () => {
            if (isRecordRoute && !isAdmin) {
                // Do nothing, HTML will handle login overlay
                return;
            }
            if (!isRecordRoute && t === "home") {
                const active = await window.voiceNoteStorage.getActive();
                if (active) {
                    const photoUrls = active.photos.map(p => typeof p === 'string' ? p : (p instanceof Blob ? URL.createObjectURL(p) : p));
                    n(photoUrls.map((url, idx) => ({ id: "local-" + idx, imageUrl: url })));
                    i(active.audio);
                    await k(active.audio);
                    e("player");
                }
            }
        };
        checkLocal();
    }, [isRecordRoute, isAdmin]);
    return w.jsxs("div", {
      className:
        "min-h-screen flex flex-col items-center justify-center p-4 bg-background",
      children: [
        t === "home" &&
          w.jsxs(w.Fragment, {
            children: [
              w.jsx(Gn, {
                to: "/about",
                className:
                  "fixed top-6 right-6 text-amber-100 hover:text-amber-50 transition-colors z-50",
                style: { fontFamily: "'Newsreader', serif" },
                children: "About",
              }),
              w.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center gap-1 w-full max-w-md text-center px-4",
                children: [
                  w.jsx(aO, {}),
                  w.jsx("h1", {
                    className: "text-3xl font-light text-amber-100 -mt-24",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "Voice note keepsake",
                  }),
                  w.jsx("p", {
                    className: "text-sm text-amber-200/50 -mt-1",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: (isRecordRoute && !isAdmin) ? "Admin Authentication Required" : "built by @jwfathoni",
                  }),
                  w.jsx(pt, {
                    size: "lg",
                    className:
                      "rounded-[4px] bg-[#78624A] hover:bg-[#8a7055] text-white px-12 py-6 text-lg border-0 mt-3",
                    onClick: X,
                    disabled: f || (isRecordRoute && !isAdmin),
                    style: { fontFamily: "'Newsreader', serif", display: (isRecordRoute && isAdmin) ? "inline-flex" : "none" },
                    children: f
                      ? w.jsx(mo, { className: "w-5 h-5 animate-spin" })
                      : "Start Here",
                  }),
                ],
              }),
            ],
          }),
        t === "email" &&
          w.jsx("div", {
            className:
              "flex flex-col items-center justify-center gap-8 w-full max-w-md text-center px-8",
            children: w.jsx(tO, {
              onSubmit: P,
              title: "Before we begin...",
              description:
                "Enter your email if you'd like updates about this voice note and future projects.",
              submitLabel: "Continue",
              showSkip: !1,
              placeholder: "your@email.com",
              allowEmpty: !0,
            }),
          }),
        (t === "upload" || t === "review") &&
          w.jsxs(w.Fragment, {
            children: [
              w.jsx(Gn, {
                to: "/about",
                className:
                  "fixed top-6 right-6 text-amber-100 hover:text-amber-50 transition-colors z-50",
                style: { fontFamily: "'Newsreader', serif" },
                children: "About",
              }),
              w.jsxs("div", {
                className:
                  "flex flex-col items-center gap-10 w-full max-w-md px-8",
                children: [
                  w.jsxs("div", {
                    className: "flex flex-col items-center w-full",
                    children: [
                      w.jsx("h2", {
                        className: "text-2xl font-light text-amber-100 mb-6",
                        style: { fontFamily: "'Newsreader', serif" },
                        children: "Add Photos",
                      }),
                      w.jsx(WC, {
                        photos: r,
                        onPhotosChange: H,
                        maxPhotos: 8,
                        disabled: v || l,
                      }),
                    ],
                  }),
                  w.jsxs("div", {
                    className: "flex flex-col items-center w-full",
                    children: [
                      w.jsx("h2", {
                        className: "text-2xl font-light text-amber-100 mb-6",
                        style: { fontFamily: "'Newsreader', serif" },
                        children: "Record Voice Note",
                      }),
                      t === "upload" || !s
                        ? w.jsx(DC, {
                            isRecording: v,
                            recordingTime: p,
                            onStartRecording: T,
                            onStopRecording: R,
                            error: m,
                          })
                        : w.jsxs("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                              w.jsxs("div", {
                                className: "flex items-center gap-2 text-sm",
                                children: [
                                  w.jsx("div", {
                                    className:
                                      "w-2 h-2 rounded-full bg-green-500",
                                  }),
                                  w.jsx("span", {
                                    className: "text-amber-100 font-mono",
                                    children: A(p),
                                  }),
                                  w.jsx("span", {
                                    className: "text-amber-200/50 font-mono",
                                    children: "/ 1:00",
                                  }),
                                ],
                              }),
                              w.jsxs(pt, {
                                variant: "ghost",
                                size: "sm",
                                className:
                                  "rounded-[4px] text-amber-200/70 hover:text-amber-100 hover:bg-amber-100/10",
                                onClick: D,
                                disabled: l,
                                style: { fontFamily: "'Newsreader', serif" },
                                children: [
                                  w.jsx(gp, { className: "w-4 h-4 mr-2" }),
                                  "Re-record",
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                  w.jsx(pt, {
                    size: "lg",
                    className:
                      "w-full max-w-xs rounded-[4px] bg-[#78624A] hover:bg-[#8a7055] text-white text-lg border-0",
                    onClick: L,
                    disabled: l || !s,
                    style: { fontFamily: "'Newsreader', serif" },
                    children: l
                      ? w.jsxs(w.Fragment, {
                          children: [
                            w.jsx(mo, {
                              className: "w-4 h-4 mr-2 animate-spin",
                            }),
                            "Preparing...",
                          ],
                        })
                      : "Continue",
                  }),
                ],
              }),
            ],
          }),
        t === "player" &&
          w.jsxs("div", {
            className: "flex flex-col items-center gap-0 w-full max-w-md",
            children: [
              w.jsxs("div", {
                className: "mb-4 font-mono text-xs text-amber-200/70",
                children: [
                  w.jsx("span", {
                    className: "text-amber-100",
                    children: A(_),
                  }),
                  w.jsxs("span", { children: [" / ", A(S)] }),
                ],
              }),
              w.jsx("div", {
                className: "perspective-container w-full",
                children: w.jsx("div", {
                  className: "platform-3d relative flex items-center w-full",
                  children: w.jsxs("div", {
                    className: "relative flex items-center w-full",
                    style: { height: "min(50vh, 400px)" },
                    children: [
                      w.jsx("div", {
                        className:
                          "absolute right-0 z-0 flex items-center justify-center",
                        style: {
                          height: "117%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        children: w.jsx(zh, { height: "100%" }),
                      }),
                      w.jsx("div", {
                        className:
                          "flex-1 mr-6 z-10 h-full rounded-l-[2rem] rounded-r-none shadow-2xl overflow-hidden",
                        children: w.jsx(Dh, {
                          photos: r,
                          waveformData: E,
                          currentTime: _,
                          duration: S,
                          isPlaying: y,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              w.jsx("div", {
                className: "mt-0 -translate-y-2",
                children: w.jsx(Fh, { onRotationChange: M, isPlaying: y }),
              }),
            ],
          }),
        t === "share" &&
          s &&
          w.jsx(CP, {
            photos: r,
            audioBlob: s,
            audioDuration: o,
            senderEmail: c || "",
            onBack: Q,
          }),
      ],
    });
  },
  uO = () => w.jsx(lO, {});
function cO() {
  return `${"https://jfhzrugypgsoulujwjkp.supabase.co".replace(
    /\/$/,
    ""
  )}/functions/v1`;
}
function Dm() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmaHpydWd5cGdzb3VsdWp3amtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MjQyMjQsImV4cCI6MjA4NjAwMDIyNH0.80ey3E9GdyDJisIRy0uRta-A2uYb0tzs4kBviDO1Oug";
}
async function dO(t) {
  try {
    const e = await fetch(`${cO()}/get-memory-view`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: Dm(),
        Authorization: `Bearer ${Dm()}`,
      },
      body: JSON.stringify({ shareCode: t }),
    });
    if (e.status === 404) return null;
    if (!e.ok) {
      const r = await e.text().catch(() => "");
      throw (
        (kP("get-memory-view failed:", e.status, r),
        new Error(r || `Request failed (${e.status})`))
      );
    }
    return await e.json();
  } catch (e) {
    throw new Error(bl(e));
  }
}
const hO = () => {
    const { shareCode: t } = aC(),
      e = W0(),
      [r, n] = b.useState(!0),
      [s, i] = b.useState(null),
      [o, a] = b.useState(null),
      {
        isPlaying: l,
        currentTime: u,
        duration: c,
        waveformData: h,
        loadAudio: f,
        setPlaybackActive: d,
      } = K0();
    b.useEffect(() => {
      let x = !1;
      async function g() {
        var m;
        if (!t) {
          i("Invalid link"), n(!1);
          return;
        }
        try {
          console.log("Fetching memory for share code:", t);
          const y = await dO(t);
          if (x) return;
          if (!y) {
            i("This memory has expired or doesn't exist"), n(!1);
            return;
          }
          if (new Date(y.expires_at) < new Date()) {
            i("This memory has expired"), n(!1);
            return;
          }
          console.log(
            "Memory data received, audio URL:",
            ((m = y.audio_url) == null ? void 0 : m.substring(0, 80)) + "..."
          );
          const _ = y.photos.map((k, C) => ({
            id: `photo-${C}`,
            imageUrl: k.photo_url,
          }));
          a({
            id: y.id,
            audioUrl: y.audio_url,
            audioDuration: y.audio_duration,
            expiresAt: y.expires_at,
            photos: _,
          }),
            console.log("Fetching audio blob...");
          const S = await fetch(y.audio_url);
          if (!S.ok)
            throw (
              (console.error("Audio fetch failed:", S.status, S.statusText),
              new Error(`Failed to fetch audio: ${S.status}`))
            );
          const E = await S.blob();
          if (
            (console.log("Audio blob received, size:", E.size, "type:", E.type),
            x)
          )
            return;
          await f(E), console.log("Audio loaded successfully"), x || n(!1);
        } catch (y) {
          console.error("Error loading memory:", y),
            x || (i("Failed to load memory"), n(!1));
        }
      }
      return (
        g(),
        () => {
          x = !0;
        }
      );
    }, [t]);
    const v = b.useCallback(
        (x) => {
          d(x);
        },
        [d]
      ),
      p = (x) => {
        if (!isFinite(x) || isNaN(x)) return "0:00";
        const g = Math.floor(x / 60),
          m = Math.floor(x % 60);
        return `${g}:${m.toString().padStart(2, "0")}`;
      };
    return r
      ? w.jsxs("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center p-4 bg-background",
          children: [
            w.jsx(hw, { size: 80 }),
            w.jsx("p", {
              className: "text-amber-200/80 mt-6",
              style: { fontFamily: "'Newsreader', serif" },
              children: "Loading your memory...",
            }),
          ],
        })
      : s
      ? w.jsxs("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center p-4 bg-background text-center",
          children: [
            w.jsx("h1", {
              className: "text-2xl font-light text-amber-100 mb-2",
              style: { fontFamily: "'Newsreader', serif" },
              children: s,
            }),
            w.jsx("p", {
              className: "text-amber-200/60 mb-6",
              style: { fontFamily: "'Newsreader', serif" },
              children: "This link may have expired or been removed",
            }),
            w.jsx(pt, {
              className:
                "rounded-[4px] bg-[#78624A] hover:bg-[#8a7055] text-white",
              onClick: () => e("/"),
              style: { fontFamily: "'Newsreader', serif" },
              children: "Create Your Own Memory",
            }),
          ],
        })
      : o
      ? w.jsx("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center p-4 bg-background",
          children: w.jsxs("div", {
            className: "flex flex-col items-center gap-0 w-full max-w-md",
            children: [
              w.jsxs("div", {
                className:
                  "w-full flex justify-between items-center mb-4 px-4 mt-12",
                children: [
                  w.jsx("a", {
                    href: "https://instagram.com/jwfathoni",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className:
                      "text-amber-200/50 hover:text-amber-100 text-sm transition-colors",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "@jwfathoni",
                  }),
                  w.jsx(Gn, {
                    to: "/about",
                    className:
                      "text-amber-100 hover:text-amber-50 transition-colors",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "About",
                  }),
                ],
              }),
              w.jsxs("div", {
                className: "mb-4 font-mono text-xs text-amber-200/70",
                children: [
                  w.jsx("span", {
                    className: "text-amber-100",
                    children: p(u),
                  }),
                  w.jsxs("span", { children: [" / ", p(c)] }),
                ],
              }),
              w.jsx("div", {
                className: "perspective-container w-full",
                children: w.jsx("div", {
                  className: "platform-3d relative flex items-center w-full",
                  children: w.jsxs("div", {
                    className: "relative flex items-center w-full",
                    style: { height: "min(50vh, 400px)" },
                    children: [
                      w.jsx("div", {
                        className:
                          "absolute right-0 z-0 flex items-center justify-center",
                        style: {
                          height: "117%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        },
                        children: w.jsx(zh, { height: "100%" }),
                      }),
                      w.jsx("div", {
                        className:
                          "flex-1 mr-6 z-10 h-full rounded-l-[2rem] rounded-r-none shadow-2xl overflow-hidden",
                        children: w.jsx(Dh, {
                          photos: o.photos,
                          waveformData: h,
                          currentTime: u,
                          duration: c,
                          isPlaying: l,
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              w.jsx("div", {
                className: "mt-0 -translate-y-2",
                children: w.jsx(Fh, { onRotationChange: v, isPlaying: l }),
              }),
              w.jsx("div", {
                className: "mt-8",
                children: w.jsx(pt, {
                  variant: "ghost",
                  className:
                    "text-amber-200/60 hover:text-amber-100 hover:bg-amber-100/10",
                  onClick: () => e("/"),
                  style: { fontFamily: "'Newsreader', serif" },
                  children: "Create your own voice note",
                }),
              }),
            ],
          }),
        })
      : null;
  },
  fO = "/assets/music-box-inspiration-BISLJaIB.png";
function pO({ className: t, ...e }) {
  return w.jsx("div", {
    className: cr("animate-pulse rounded-md bg-muted", t),
    ...e,
  });
}
const mO = () => {
  const [t, e] = b.useState(!1);
  return w.jsxs("div", {
    className: "min-h-screen flex flex-col items-center p-4 bg-background",
    children: [
      w.jsx("div", {
        className: "w-full max-w-md flex justify-start mb-8",
        children: w.jsx(pt, {
          variant: "ghost",
          size: "sm",
          className:
            "rounded-[4px] text-amber-200/70 hover:text-amber-100 hover:bg-amber-100/10",
          asChild: !0,
          children: w.jsxs(Gn, {
            to: "/",
            children: [
              w.jsx(kh, { className: "w-4 h-4 mr-2" }),
              w.jsx("span", {
                style: { fontFamily: "'Newsreader', serif" },
                children: "Back",
              }),
            ],
          }),
        }),
      }),
      w.jsxs("div", {
        className: "w-full max-w-md px-4",
        children: [
          w.jsxs("section", {
            className: "mb-12",
            children: [
              w.jsx("h1", {
                className: "text-3xl font-light text-amber-100 mb-8",
                style: { fontFamily: "'Newsreader', serif" },
                children: "About me",
              }),
              w.jsxs("div", {
                className: "space-y-6 text-amber-100",
                style: { fontFamily: "'Newsreader', serif" },
                children: [
                  w.jsx("p", { children: "Hi, I'm Marisa." }),
                  w.jsx("p", {
                    children:
                      "I'm a designer and creative technologist who likes building small, thoughtful internet things.",
                  }),
                  w.jsx("p", {
                    children:
                      "I share how I design, prototype, and experiment with technology in a very hands-on way.",
                  }),
                  w.jsx("p", {
                    children:
                      "If you're curious about how this was made, I break things down and share the process on my other platforms.",
                  }),
                  w.jsxs("div", {
                    className: "space-y-2 pt-2",
                    children: [
                      w.jsx("a", {
                        href: "https://instagram.com/jwfathoni",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "block hover:text-amber-50 transition-colors",
                        children: "→ Instagram",
                      }),
                      w.jsx("a", {
                        href: "https://tiktok.com/@jwfathoni",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "block hover:text-amber-50 transition-colors",
                        children: "→ TikTok",
                      }),
                      w.jsx("a", {
                        href: "https://www.youtube.com/@jwfathoni",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "block hover:text-amber-50 transition-colors",
                        children: "→ YouTube",
                      }),
                      w.jsx("a", {
                        href: "https://substack.com/@jwfathoni",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "block hover:text-amber-50 transition-colors",
                        children: "→ Newsletter",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          w.jsx("div", { className: "w-full h-px bg-amber-200/20 mb-12" }),
          w.jsxs("section", {
            className: "mb-12",
            children: [
              w.jsx("h2", {
                className: "text-3xl font-light text-amber-100 mb-8",
                style: { fontFamily: "'Newsreader', serif" },
                children: "The inspiration",
              }),
              w.jsxs("div", {
                className: "relative w-full",
                children: [
                  !t &&
                    w.jsx(pO, {
                      className:
                        "w-full aspect-[4/3] rounded-[4px] bg-amber-200/10",
                    }),
                  w.jsx("img", {
                    src: fO,
                    alt: "Hand-crank music box with paper strip",
                    className: `w-full rounded-[4px] transition-opacity duration-300 ${
                      t ? "opacity-100" : "opacity-0 absolute top-0 left-0"
                    }`,
                    loading: "lazy",
                    onLoad: () => e(!0),
                  }),
                ],
              }),
            ],
          }),
          w.jsx("div", { className: "w-full h-px bg-amber-200/20 mb-12" }),
          w.jsxs("section", {
            className: "mb-12",
            children: [
              w.jsx("h2", {
                className: "font-light text-amber-100 mb-8 font-serif text-3xl",
                style: { fontFamily: "'Newsreader', serif" },
                children: "Why I built this",
              }),
              w.jsxs("div", {
                className: "space-y-6 text-amber-100",
                style: { fontFamily: "'Newsreader', serif" },
                children: [
                  w.jsx("p", {
                    children:
                      "Most things today are designed to be consumed passively.",
                  }),
                  w.jsx("p", { children: "We listen while multitasking." }),
                  w.jsx("p", { children: "We play things in the background." }),
                  w.jsx("p", { children: "We move on quickly." }),
                  w.jsx("p", {
                    children:
                      "I was craving something slower — something that asks for presence.",
                  }),
                  w.jsx("p", {
                    children:
                      "So I designed an experience that requires interaction to listen.",
                  }),
                  w.jsx("p", {
                    children:
                      "Listening only works if you engage, and that engagement is what makes it feel mindful and intimate.",
                  }),
                  w.jsx("p", {
                    children:
                      "Instead of optimizing for convenience, this experiment explores what happens when we design for attention.",
                  }),
                  w.jsx("p", {
                    children:
                      "When listening becomes intentional, it starts to feel personal again.",
                  }),
                  w.jsx("p", {
                    className: "italic pt-4",
                    children: "A question I keep coming back to:",
                  }),
                  w.jsx("p", {
                    children:
                      "In a world obsessed with optimization, how do we design digital experiences that feel intentional?",
                  }),
                ],
              }),
            ],
          }),
          w.jsx("div", { className: "w-full h-px bg-amber-200/20 mb-12" }),
          w.jsxs("section", {
            className: "mb-16",
            children: [
              w.jsx("h2", {
                className: "text-3xl font-light text-amber-100 mb-8",
                style: { fontFamily: "'Newsreader', serif" },
                children: "I also write about design & technology.",
              }),
              w.jsx("div", {
                className: "w-full flex justify-center",
                children: w.jsx("iframe", {
                  src: "https://meshtimes.substack.com/embed",
                  width: "100%",
                  height: "320",
                  style: {
                    border: "1px solid rgba(251, 191, 36, 0.2)",
                    background: "transparent",
                    borderRadius: "4px",
                    maxWidth: "480px",
                  },
                  frameBorder: "0",
                  scrolling: "no",
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
function gO() {
  const [t, e] = b.useState(""),
    [r, n] = b.useState(!1),
    [s, i] = b.useState(!1),
    [o, a] = b.useState(null),
    [l, u] = b.useState(null),
    c = async (f) => {
      f.preventDefault(), a(null), i(!0);
      try {
        const { data: d, error: v } = await Vs.functions.invoke(
          "get-analytics",
          { body: { password: t } }
        );
        if (v) {
          a("Failed to fetch analytics");
          return;
        }
        if (d.error) {
          a(d.error);
          return;
        }
        u(d), n(!0);
      } catch {
        a("Something went wrong");
      } finally {
        i(!1);
      }
    },
    h = ({ icon: f, label: d, value: v, subtext: p }) =>
      w.jsxs("div", {
        className: "bg-black/20 border border-amber-200/20 rounded-[4px] p-6",
        children: [
          w.jsxs("div", {
            className: "flex items-center gap-3 mb-3",
            children: [
              w.jsx(f, { className: "w-5 h-5 text-amber-200/60" }),
              w.jsx("span", {
                className: "text-amber-200/60 text-sm",
                style: { fontFamily: "'Newsreader', serif" },
                children: d,
              }),
            ],
          }),
          w.jsx("div", {
            className: "text-3xl font-light text-amber-100",
            style: { fontFamily: "'Newsreader', serif" },
            children: v,
          }),
          p &&
            w.jsx("div", {
              className: "text-sm text-amber-200/40 mt-1",
              style: { fontFamily: "'Newsreader', serif" },
              children: p,
            }),
        ],
      });
  return w.jsxs("div", {
    className:
      "min-h-screen flex flex-col items-center justify-center p-4 bg-background",
    children: [
      w.jsx(Gn, {
        to: "/",
        className:
          "fixed top-6 left-6 p-2 text-amber-200/60 hover:text-amber-100 transition-colors z-50",
        "aria-label": "Go back",
        children: w.jsx(kh, { className: "w-6 h-6" }),
      }),
      r
        ? l &&
          w.jsxs("div", {
            className: "w-full max-w-2xl px-4",
            children: [
              w.jsx("h1", {
                className:
                  "text-2xl font-light text-amber-100 text-center mb-8",
                style: { fontFamily: "'Newsreader', serif" },
                children: "Analytics Dashboard",
              }),
              w.jsxs("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                children: [
                  w.jsx(h, {
                    icon: a1,
                    label: "Total Memories",
                    value: l.totalMemories,
                  }),
                  w.jsx(h, {
                    icon: t1,
                    label: "Viewed",
                    value: l.viewedMemories,
                    subtext: `${l.viewRate}% view rate`,
                  }),
                  w.jsx(h, {
                    icon: Uv,
                    label: "Emails Captured",
                    value: l.senderEmails,
                    subtext: `${l.emailCaptureRate}% capture rate`,
                  }),
                  w.jsx(h, {
                    icon: Y_,
                    label: "Last 24 Hours",
                    value: l.todayMemories,
                  }),
                  w.jsx(h, {
                    icon: o1,
                    label: "Last 7 Days",
                    value: l.recentMemories,
                  }),
                ],
              }),
            ],
          })
        : w.jsxs("div", {
            className: "flex flex-col items-center gap-6 w-full max-w-sm px-8",
            children: [
              w.jsxs("div", {
                className: "flex items-center gap-3 text-amber-100",
                children: [
                  w.jsx(r1, { className: "w-6 h-6" }),
                  w.jsx("h1", {
                    className: "text-2xl font-light",
                    style: { fontFamily: "'Newsreader', serif" },
                    children: "Analytics",
                  }),
                ],
              }),
              w.jsxs("form", {
                onSubmit: c,
                className: "w-full space-y-4",
                children: [
                  w.jsx(Vh, {
                    type: "password",
                    value: t,
                    onChange: (f) => e(f.target.value),
                    placeholder: "Enter password",
                    className:
                      "rounded-[4px] bg-black/20 border-amber-200/20 text-amber-100 placeholder:text-amber-200/40 focus:border-amber-200/40",
                    disabled: s,
                  }),
                  o &&
                    w.jsx("p", {
                      className: "text-sm text-red-400 text-center",
                      children: o,
                    }),
                  w.jsx(pt, {
                    type: "submit",
                    className:
                      "w-full rounded-[4px] bg-[#78624A] hover:bg-[#8a7055] text-white",
                    disabled: s || !t,
                    style: { fontFamily: "'Newsreader', serif" },
                    children: s
                      ? w.jsx(mo, { className: "w-4 h-4 animate-spin" })
                      : "View Stats",
                  }),
                ],
              }),
            ],
          }),
    ],
  });
}
const yO = () => {
    const t = Wo();
    return (
      b.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          t.pathname
        );
      }, [t.pathname]),
      w.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: w.jsxs("div", {
          className: "text-center",
          children: [
            w.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            w.jsx("p", {
              className: "mb-4 text-xl text-muted-foreground",
              children: "Oops! Page not found",
            }),
            w.jsx("a", {
              href: "/",
              className: "text-primary underline hover:text-primary/90",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  vO = new OE(),
  wO = () =>
    w.jsx(NE, {
      client: vO,
      children: w.jsxs(oE, {
        children: [
          w.jsx(W1, {}),
          w.jsx(bk, {}),
          w.jsx(PC, {
            children: w.jsxs(_C, {
              children: [
                w.jsx(ys, { path: "/", element: w.jsx(uO, {}) }),
                w.jsx(ys, { path: "/record", element: w.jsx(uO, {}) }),
                w.jsx(ys, { path: "/m/:shareCode", element: w.jsx(hO, {}) }),
                w.jsx(ys, { path: "/about", element: w.jsx(mO, {}) }),
                w.jsx(ys, { path: "/stats", element: w.jsx(gO, {}) }),
                w.jsx(ys, { path: "*", element: w.jsx(yO, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
lv(document.getElementById("root")).render(w.jsx(wO, {}));
