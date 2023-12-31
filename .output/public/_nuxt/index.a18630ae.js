import {
  j as Le,
  k as ho,
  m as mi,
  n as go,
  q as Ft,
  s as yo,
  u as bo,
  _ as se,
  f as hi,
  g as wo,
  r as L,
  o as z,
  c as W,
  a as l,
  d as g,
  w as b,
  h as le,
  t as Z,
  v as Ce,
  i as gi,
  p as ge,
  e as ye,
  x as Gt,
  y as pn,
  z as Ge,
  A as ln,
  B as Ct,
  C as xe,
  D as ve,
  E as Eo,
  G as So,
  I as Gn,
  J as xo,
  K as Ao,
  L as $o,
  M as et,
  N as tt,
  O as To,
  P as Io,
  F as ko,
  Q as Ie,
  R as Oo,
  S as Po,
  T as Lo,
  U as No,
  V as Co,
  H as Do,
  W as Vo,
  X as Ro,
  b as Mo,
} from "./entry.eadb0abd.js";
import {_ as mn, a as hn, P as yi} from "./Large.8263cdce.js";
import {N as Fo} from "./Notification.f84a6621.js";
const Pt = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function qo(e, o) {
  if (typeof e != "string")
    throw new TypeError("argument str must be a string");
  const i = {},
    n = (o || {}).decode || zo;
  let r = 0;
  for (; r < e.length; ) {
    const a = e.indexOf("=", r);
    if (a === -1) break;
    let c = e.indexOf(";", r);
    if (c === -1) c = e.length;
    else if (c < a) {
      r = e.lastIndexOf(";", a - 1) + 1;
      continue;
    }
    const u = e.slice(r, a).trim();
    if (i[u] === void 0) {
      let s = e.slice(a + 1, c).trim();
      s.codePointAt(0) === 34 && (s = s.slice(1, -1)), (i[u] = jo(s, n));
    }
    r = c + 1;
  }
  return i;
}
function Hn(e, o, i) {
  const t = i || {},
    n = t.encode || Bo;
  if (typeof n != "function") throw new TypeError("option encode is invalid");
  if (!Pt.test(e)) throw new TypeError("argument name is invalid");
  const r = n(o);
  if (r && !Pt.test(r)) throw new TypeError("argument val is invalid");
  let a = e + "=" + r;
  if (t.maxAge !== void 0 && t.maxAge !== null) {
    const c = t.maxAge - 0;
    if (Number.isNaN(c) || !Number.isFinite(c))
      throw new TypeError("option maxAge is invalid");
    a += "; Max-Age=" + Math.floor(c);
  }
  if (t.domain) {
    if (!Pt.test(t.domain)) throw new TypeError("option domain is invalid");
    a += "; Domain=" + t.domain;
  }
  if (t.path) {
    if (!Pt.test(t.path)) throw new TypeError("option path is invalid");
    a += "; Path=" + t.path;
  }
  if (t.expires) {
    if (!Uo(t.expires) || Number.isNaN(t.expires.valueOf()))
      throw new TypeError("option expires is invalid");
    a += "; Expires=" + t.expires.toUTCString();
  }
  if (
    (t.httpOnly && (a += "; HttpOnly"),
    t.secure && (a += "; Secure"),
    t.priority)
  )
    switch (
      typeof t.priority == "string" ? t.priority.toLowerCase() : t.priority
    ) {
      case "low":
        a += "; Priority=Low";
        break;
      case "medium":
        a += "; Priority=Medium";
        break;
      case "high":
        a += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  if (t.sameSite)
    switch (
      typeof t.sameSite == "string" ? t.sameSite.toLowerCase() : t.sameSite
    ) {
      case !0:
        a += "; SameSite=Strict";
        break;
      case "lax":
        a += "; SameSite=Lax";
        break;
      case "strict":
        a += "; SameSite=Strict";
        break;
      case "none":
        a += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  return a;
}
function Uo(e) {
  return (
    Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date
  );
}
function jo(e, o) {
  try {
    return o(e);
  } catch {
    return e;
  }
}
function zo(e) {
  return e.includes("%") ? decodeURIComponent(e) : e;
}
function Bo(e) {
  return encodeURIComponent(e);
}
const Go = {
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
};
function Wn(e, o = {}) {
  o = {...Go, ...o};
  const i = bi(o);
  return i.dispatch(e), i.toString();
}
function bi(e) {
  const o = [];
  let i = [];
  const t = (n) => {
    o.push(n);
  };
  return {
    toString() {
      return o.join("");
    },
    getContext() {
      return i;
    },
    dispatch(n) {
      return (
        e.replacer && (n = e.replacer(n)),
        this["_" + (n === null ? "null" : typeof n)](n)
      );
    },
    _object(n) {
      if (n && typeof n.toJSON == "function") return this._object(n.toJSON());
      const r = /\[object (.*)]/i,
        a = Object.prototype.toString.call(n),
        c = r.exec(a),
        u = c ? c[1].toLowerCase() : "unknown:[" + a.toLowerCase() + "]";
      let s = null;
      if ((s = i.indexOf(n)) >= 0) return this.dispatch("[CIRCULAR:" + s + "]");
      if (
        (i.push(n),
        typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(n))
      )
        return t("buffer:"), t(n.toString("utf8"));
      if (u !== "object" && u !== "function" && u !== "asyncfunction")
        this["_" + u]
          ? this["_" + u](n)
          : e.ignoreUnknown || this._unkown(n, u);
      else {
        let d = Object.keys(n);
        e.unorderedObjects && (d = d.sort()),
          e.respectType !== !1 &&
            !Yn(n) &&
            d.splice(0, 0, "prototype", "__proto__", "letructor"),
          e.excludeKeys &&
            (d = d.filter(function (f) {
              return !e.excludeKeys(f);
            })),
          t("object:" + d.length + ":");
        for (const f of d)
          this.dispatch(f),
            t(":"),
            e.excludeValues || this.dispatch(n[f]),
            t(",");
      }
    },
    _array(n, r) {
      if (
        ((r = typeof r < "u" ? r : e.unorderedArrays !== !1),
        t("array:" + n.length + ":"),
        !r || n.length <= 1)
      ) {
        for (const u of n) this.dispatch(u);
        return;
      }
      const a = [],
        c = n.map((u) => {
          const s = bi(e);
          return s.dispatch(u), a.push(s.getContext()), s.toString();
        });
      return (i = [...i, ...a]), c.sort(), this._array(c, !1);
    },
    _date(n) {
      return t("date:" + n.toJSON());
    },
    _symbol(n) {
      return t("symbol:" + n.toString());
    },
    _unkown(n, r) {
      if ((t(r), !!n && (t(":"), n && typeof n.entries == "function")))
        return this._array(Array.from(n.entries()), !0);
    },
    _error(n) {
      return t("error:" + n.toString());
    },
    _boolean(n) {
      return t("bool:" + n.toString());
    },
    _string(n) {
      t("string:" + n.length + ":"), t(n.toString());
    },
    _function(n) {
      t("fn:"),
        Yn(n) ? this.dispatch("[native]") : this.dispatch(n.toString()),
        e.respectFunctionNames !== !1 &&
          this.dispatch("function-name:" + String(n.name)),
        e.respectFunctionProperties && this._object(n);
    },
    _number(n) {
      return t("number:" + n.toString());
    },
    _xml(n) {
      return t("xml:" + n.toString());
    },
    _null() {
      return t("Null");
    },
    _undefined() {
      return t("Undefined");
    },
    _regexp(n) {
      return t("regex:" + n.toString());
    },
    _uint8array(n) {
      return t("uint8array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _uint8clampedarray(n) {
      return (
        t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(n))
      );
    },
    _int8array(n) {
      return t("int8array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _uint16array(n) {
      return t("uint16array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _int16array(n) {
      return t("int16array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _uint32array(n) {
      return t("uint32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _int32array(n) {
      return t("int32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _float32array(n) {
      return t("float32array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _float64array(n) {
      return t("float64array:"), this.dispatch(Array.prototype.slice.call(n));
    },
    _arraybuffer(n) {
      return t("arraybuffer:"), this.dispatch(new Uint8Array(n));
    },
    _url(n) {
      return t("url:" + n.toString());
    },
    _map(n) {
      t("map:");
      const r = [...n];
      return this._array(r, e.unorderedSets !== !1);
    },
    _set(n) {
      t("set:");
      const r = [...n];
      return this._array(r, e.unorderedSets !== !1);
    },
    _file(n) {
      return t("file:"), this.dispatch([n.name, n.size, n.type, n.lastModfied]);
    },
    _blob() {
      if (e.ignoreUnknown) return t("[blob]");
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`);
    },
    _domwindow() {
      return t("domwindow");
    },
    _bigint(n) {
      return t("bigint:" + n.toString());
    },
    _process() {
      return t("process");
    },
    _timer() {
      return t("timer");
    },
    _pipe() {
      return t("pipe");
    },
    _tcp() {
      return t("tcp");
    },
    _udp() {
      return t("udp");
    },
    _tty() {
      return t("tty");
    },
    _statwatcher() {
      return t("statwatcher");
    },
    _securecontext() {
      return t("securecontext");
    },
    _connection() {
      return t("connection");
    },
    _zlib() {
      return t("zlib");
    },
    _context() {
      return t("context");
    },
    _nodescript() {
      return t("nodescript");
    },
    _httpparser() {
      return t("httpparser");
    },
    _dataview() {
      return t("dataview");
    },
    _signal() {
      return t("signal");
    },
    _fsevent() {
      return t("fsevent");
    },
    _tlswrap() {
      return t("tlswrap");
    },
  };
}
function Yn(e) {
  return typeof e != "function"
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(e)
      ) != null;
}
function Ho(e, o, i = {}) {
  return e === o || Wn(e, i) === Wn(o, i);
}
const Wo = {
  path: "/",
  watch: !0,
  decode: (e) => yo(decodeURIComponent(e)),
  encode: (e) =>
    encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e)),
};
function Yo(e, o) {
  var r;
  const i = {...Wo, ...o},
    t = Xo(i) || {},
    n = Le(t[e] ?? ((r = i.default) == null ? void 0 : r.call(i)));
  {
    const a =
      typeof BroadcastChannel > "u"
        ? null
        : new BroadcastChannel(`nuxt:cookies:${e}`);
    ho() &&
      mi(() => {
        a == null || a.close();
      });
    const c = () => {
      Jo(e, n.value, i), a == null || a.postMessage(bo(n.value));
    };
    let u = !1;
    a &&
      (a.onmessage = (s) => {
        (u = !0),
          (n.value = s.data),
          go(() => {
            u = !1;
          });
      }),
      i.watch
        ? Ft(
            n,
            (s, d) => {
              u || Ho(s, d) || c();
            },
            {deep: i.watch !== "shallow"}
          )
        : c();
  }
  return n;
}
function Xo(e = {}) {
  return qo(document.cookie, e);
}
function Ko(e, o, i = {}) {
  return o == null ? Hn(e, o, {...i, maxAge: -1}) : Hn(e, o, i);
}
function Jo(e, o, i = {}) {
  document.cookie = Ko(e, o, i);
}
const fe = {
    avatar: [
      "/images/avatars/pp_girl.svg",
      "/images/avatars/pp_girl2.svg",
      "/images/avatars/pp_girl3.svg",
      "/images/avatars/pp_girl4.svg",
      "/images/avatars/pp_girl5.svg",
      "/images/avatars/pp_girl.svg",
      "/images/avatars/pp_boy.svg",
      "/images/avatars/pp_boy2.svg",
      "/images/avatars/pp_boy3.svg",
      "/images/avatars/pp_boy4.svg",
      "/images/avatars/pp_boy5.svg",
    ],
    photo: [
      "https://via.placeholder.com/675x900/e1ad92/fff",
      "https://via.placeholder.com/967x725/ea6d6d/fff",
      "https://via.placeholder.com/1280x849/ea6db7/fff",
      "https://via.placeholder.com/967x725/bb6dea/fff",
      "https://via.placeholder.com/1048x701/6d6fea/fff",
      "https://via.placeholder.com/1050x700/6dc0ea/fff",
      "https://via.placeholder.com/970x725/6deaa6/fff",
      "https://via.placeholder.com/1051x700/b8de27/fff",
      "https://via.placeholder.com/1051x701/de9f27/fff",
      "https://via.placeholder.com/1050x700/ef4545/fff",
      "https://via.placeholder.com/1050x700/ffc4c4/757575",
      "https://via.placeholder.com/640x447/fdffc4/757575",
      "https://via.placeholder.com/1280x851/c4ffd7/757575",
      "https://via.placeholder.com/640x425/c4cdff/757575",
    ],
    mobile: [
      "/images/mobile/mobile_banner.png",
      "/images/mobile/widget-top.png",
      "/images/mobile/widget-left.png",
      "/images/mobile/widget-right.png",
      "/images/mobile/mobile_feature.png",
      "/images/mobile/mobile_feature2.png",
      "https://via.placeholder.com/536x302/fbd2ff/757575",
      "https://via.placeholder.com/518x1120/fbd2ff/757575",
      "https://via.placeholder.com/518x1120/d2ffff/757575",
      "https://via.placeholder.com/518x1120/fbd2ff/757575",
      "https://via.placeholder.com/518x1120/d2ffff/757575",
      "https://via.placeholder.com/518x1120/fbd2ff/757575",
      "https://via.placeholder.com/518x1120/d2ffff/757575",
      "https://via.placeholder.com/518x1120/fbd2ff/757575",
      "/images/mobile/widget_screen1.png",
      "/images/mobile/widget_screen2.png",
      "/images/mobile/widget_screen3.png",
      "/images/mobile/widget_screen4.png",
      "/images/mobile/widget_screen5.png",
      "/images/mobile/widget_screen6.png",
      "/images/mobile/widget_screen7.png",
      "",
    ],
  },
  wi = "" + globalThis.__publicAssetsURL("images/mobile/app-store.png"),
  Ei = "" + globalThis.__publicAssetsURL("images/mobile/play-store.png");
const Zo = {
    components: {Hidden: hi},
    data() {
      return {link: wo, imgAPI: fe};
    },
    computed: {
      isDesktop() {
        return this.$vuetify.display.lgAndUp;
      },
    },
    mounted() {
      const e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.src = "/scripts/particles-spray.js"),
        document.body.appendChild(e);
    },
  },
  at = (e) => (ge("data-v-591c188d"), (e = e()), ye(), e),
  Qo = {class: "root"},
  ea = {class: "background"},
  ta = {class: "gradient"},
  na = at(() => l("div", {class: "deco-wave"}, null, -1)),
  ia = at(() => l("div", {class: "deco-line"}, null, -1)),
  oa = at(() =>
    l(
      "div",
      {class: "deco-inner"},
      [l("canvas", {id: "particle_art_mobile", width: "500", height: "700"})],
      -1
    )
  ),
  aa = {class: "text"},
  ra = {class: "use-text-title"},
  sa = {class: "use-text-subtitle"},
  la = {class: "btn-area"},
  ca = at(() => l("img", {src: wi, alt: "app store"}, null, -1)),
  ua = at(() => l("img", {src: Ei, alt: "play store"}, null, -1)),
  da = at(() => l("div", {id: "watched_counter"}, null, -1)),
  fa = {class: "decoration"},
  _a = {class: "phone-illustration"},
  va = ["src"],
  pa = ["src"],
  ma = ["src"],
  ha = ["src"];
function ga(e, o, i, t, n, r) {
  const a = L("hidden"),
    c = gi,
    u = L("v-col"),
    s = L("v-row"),
    d = L("v-container");
  return (
    z(),
    W("div", Qo, [
      l("div", ea, [
        l("div", ta, [
          na,
          g(a, {point: "smDown"}, {default: b(() => [ia]), _: 1}),
          oa,
        ]),
      ]),
      g(
        d,
        {class: Ce({fixed: r.isDesktop})},
        {
          default: b(() => [
            g(s, null, {
              default: b(() => [
                g(
                  u,
                  {md: "7", cols: "12", class: "px-3"},
                  {
                    default: b(() => [
                      l("div", aa, [
                        l("h3", ra, [
                          le(Z(e.$t("mobileLanding.banner_title")) + " ", 1),
                          l(
                            "strong",
                            null,
                            Z(e.$t("mobileLanding.banner_titlestrong")),
                            1
                          ),
                        ]),
                        l("h5", sa, Z(e.$t("mobileLanding.banner_desc")), 1),
                        l("div", la, [
                          g(c, {to: "/"}, {default: b(() => [ca]), _: 1}),
                          g(c, {to: "/"}, {default: b(() => [ua]), _: 1}),
                          da,
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
                g(
                  u,
                  {md: "5", cols: "12", class: "px-3"},
                  {
                    default: b(() => [
                      l("div", fa, [
                        l("div", _a, [
                          l(
                            "img",
                            {
                              src: n.imgAPI.mobile[0],
                              class: "phone",
                              alt: "illustration",
                            },
                            null,
                            8,
                            va
                          ),
                          g(
                            a,
                            {point: "mdDown"},
                            {
                              default: b(() => [
                                l(
                                  "img",
                                  {
                                    src: n.imgAPI.mobile[1],
                                    class: "widget-top fragment-fadeUp",
                                    alt: "illustration",
                                  },
                                  null,
                                  8,
                                  pa
                                ),
                                l(
                                  "img",
                                  {
                                    src: n.imgAPI.mobile[2],
                                    class: "widget-left fragment-fadeUp",
                                    alt: "illustration",
                                  },
                                  null,
                                  8,
                                  ma
                                ),
                                l(
                                  "img",
                                  {
                                    src: n.imgAPI.mobile[3],
                                    class: "widget-right fragment-fadeUp",
                                    alt: "illustration",
                                  },
                                  null,
                                  8,
                                  ha
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              _: 1,
            }),
          ]),
          _: 1,
        },
        8,
        ["class"]
      ),
    ])
  );
}
const ya = se(Zo, [
  ["render", ga],
  ["__scopeId", "data-v-591c188d"],
]);
var ba = Object.defineProperty,
  wa = Object.defineProperties,
  Ea = Object.getOwnPropertyDescriptors,
  Xn = Object.getOwnPropertySymbols,
  Sa = Object.prototype.hasOwnProperty,
  xa = Object.prototype.propertyIsEnumerable,
  Kn = (e, o, i) =>
    o in e
      ? ba(e, o, {enumerable: !0, configurable: !0, writable: !0, value: i})
      : (e[o] = i),
  Jn = (e, o) => {
    for (var i in o || (o = {})) Sa.call(o, i) && Kn(e, i, o[i]);
    if (Xn) for (var i of Xn(o)) xa.call(o, i) && Kn(e, i, o[i]);
    return e;
  },
  Aa = (e, o) => wa(e, Ea(o)),
  qt = function () {
    return (
      (qt =
        Object.assign ||
        function (e) {
          for (var o, i = 1, t = arguments.length; i < t; i++)
            for (var n in (o = arguments[i]))
              Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
          return e;
        }),
      qt.apply(this, arguments)
    );
  },
  $a = (function () {
    function e(o, i, t) {
      var n = this;
      (this.endVal = i),
        (this.options = t),
        (this.version = "2.6.2"),
        (this.defaults = {
          startVal: 0,
          decimalPlaces: 0,
          duration: 2,
          useEasing: !0,
          useGrouping: !0,
          useIndianSeparators: !1,
          smartEasingThreshold: 999,
          smartEasingAmount: 333,
          separator: ",",
          decimal: ".",
          prefix: "",
          suffix: "",
          enableScrollSpy: !1,
          scrollSpyDelay: 200,
          scrollSpyOnce: !1,
        }),
        (this.finalEndVal = null),
        (this.useEasing = !0),
        (this.countDown = !1),
        (this.error = ""),
        (this.startVal = 0),
        (this.paused = !0),
        (this.once = !1),
        (this.count = function (r) {
          n.startTime || (n.startTime = r);
          var a = r - n.startTime;
          (n.remaining = n.duration - a),
            n.useEasing
              ? n.countDown
                ? (n.frameVal =
                    n.startVal -
                    n.easingFn(a, 0, n.startVal - n.endVal, n.duration))
                : (n.frameVal = n.easingFn(
                    a,
                    n.startVal,
                    n.endVal - n.startVal,
                    n.duration
                  ))
              : (n.frameVal =
                  n.startVal + (n.endVal - n.startVal) * (a / n.duration));
          var c = n.countDown ? n.frameVal < n.endVal : n.frameVal > n.endVal;
          (n.frameVal = c ? n.endVal : n.frameVal),
            (n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces))),
            n.printValue(n.frameVal),
            a < n.duration
              ? (n.rAF = requestAnimationFrame(n.count))
              : n.finalEndVal !== null
              ? n.update(n.finalEndVal)
              : n.options.onCompleteCallback && n.options.onCompleteCallback();
        }),
        (this.formatNumber = function (r) {
          var a,
            c,
            u,
            s,
            d = r < 0 ? "-" : "";
          a = Math.abs(r).toFixed(n.options.decimalPlaces);
          var f = (a += "").split(".");
          if (
            ((c = f[0]),
            (u = f.length > 1 ? n.options.decimal + f[1] : ""),
            n.options.useGrouping)
          ) {
            s = "";
            for (var v = 3, p = 0, _ = 0, m = c.length; _ < m; ++_)
              n.options.useIndianSeparators && _ === 4 && ((v = 2), (p = 1)),
                _ !== 0 && p % v == 0 && (s = n.options.separator + s),
                p++,
                (s = c[m - _ - 1] + s);
            c = s;
          }
          return (
            n.options.numerals &&
              n.options.numerals.length &&
              ((c = c.replace(/[0-9]/g, function (w) {
                return n.options.numerals[+w];
              })),
              (u = u.replace(/[0-9]/g, function (w) {
                return n.options.numerals[+w];
              }))),
            d + n.options.prefix + c + u + n.options.suffix
          );
        }),
        (this.easeOutExpo = function (r, a, c, u) {
          return (c * (1 - Math.pow(2, (-10 * r) / u)) * 1024) / 1023 + a;
        }),
        (this.options = qt(qt({}, this.defaults), t)),
        (this.formattingFn = this.options.formattingFn
          ? this.options.formattingFn
          : this.formatNumber),
        (this.easingFn = this.options.easingFn
          ? this.options.easingFn
          : this.easeOutExpo),
        (this.startVal = this.validateValue(this.options.startVal)),
        (this.frameVal = this.startVal),
        (this.endVal = this.validateValue(i)),
        (this.options.decimalPlaces = Math.max(this.options.decimalPlaces)),
        this.resetDuration(),
        (this.options.separator = String(this.options.separator)),
        (this.useEasing = this.options.useEasing),
        this.options.separator === "" && (this.options.useGrouping = !1),
        (this.el = typeof o == "string" ? document.getElementById(o) : o),
        this.el
          ? this.printValue(this.startVal)
          : (this.error = "[CountUp] target is null or undefined"),
        typeof window < "u" &&
          this.options.enableScrollSpy &&
          (this.error
            ? console.error(this.error, o)
            : ((window.onScrollFns = window.onScrollFns || []),
              window.onScrollFns.push(function () {
                return n.handleScroll(n);
              }),
              (window.onscroll = function () {
                window.onScrollFns.forEach(function (r) {
                  return r();
                });
              }),
              this.handleScroll(this)));
    }
    return (
      (e.prototype.handleScroll = function (o) {
        if (o && window && !o.once) {
          var i = window.innerHeight + window.scrollY,
            t = o.el.getBoundingClientRect(),
            n = t.top + window.pageYOffset,
            r = t.top + t.height + window.pageYOffset;
          r < i && r > window.scrollY && o.paused
            ? ((o.paused = !1),
              setTimeout(function () {
                return o.start();
              }, o.options.scrollSpyDelay),
              o.options.scrollSpyOnce && (o.once = !0))
            : (window.scrollY > r || n > i) && !o.paused && o.reset();
        }
      }),
      (e.prototype.determineDirectionAndSmartEasing = function () {
        var o = this.finalEndVal ? this.finalEndVal : this.endVal;
        this.countDown = this.startVal > o;
        var i = o - this.startVal;
        if (
          Math.abs(i) > this.options.smartEasingThreshold &&
          this.options.useEasing
        ) {
          this.finalEndVal = o;
          var t = this.countDown ? 1 : -1;
          (this.endVal = o + t * this.options.smartEasingAmount),
            (this.duration = this.duration / 2);
        } else (this.endVal = o), (this.finalEndVal = null);
        this.finalEndVal !== null
          ? (this.useEasing = !1)
          : (this.useEasing = this.options.useEasing);
      }),
      (e.prototype.start = function (o) {
        this.error ||
          (o && (this.options.onCompleteCallback = o),
          this.duration > 0
            ? (this.determineDirectionAndSmartEasing(),
              (this.paused = !1),
              (this.rAF = requestAnimationFrame(this.count)))
            : this.printValue(this.endVal));
      }),
      (e.prototype.pauseResume = function () {
        this.paused
          ? ((this.startTime = null),
            (this.duration = this.remaining),
            (this.startVal = this.frameVal),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)))
          : cancelAnimationFrame(this.rAF),
          (this.paused = !this.paused);
      }),
      (e.prototype.reset = function () {
        cancelAnimationFrame(this.rAF),
          (this.paused = !0),
          this.resetDuration(),
          (this.startVal = this.validateValue(this.options.startVal)),
          (this.frameVal = this.startVal),
          this.printValue(this.startVal);
      }),
      (e.prototype.update = function (o) {
        cancelAnimationFrame(this.rAF),
          (this.startTime = null),
          (this.endVal = this.validateValue(o)),
          this.endVal !== this.frameVal &&
            ((this.startVal = this.frameVal),
            this.finalEndVal == null && this.resetDuration(),
            (this.finalEndVal = null),
            this.determineDirectionAndSmartEasing(),
            (this.rAF = requestAnimationFrame(this.count)));
      }),
      (e.prototype.printValue = function (o) {
        var i;
        if (this.el) {
          var t = this.formattingFn(o);
          !((i = this.options.plugin) === null || i === void 0) && i.render
            ? this.options.plugin.render(this.el, t)
            : this.el.tagName === "INPUT"
            ? (this.el.value = t)
            : this.el.tagName === "text" || this.el.tagName === "tspan"
            ? (this.el.textContent = t)
            : (this.el.innerHTML = t);
        }
      }),
      (e.prototype.ensureNumber = function (o) {
        return typeof o == "number" && !isNaN(o);
      }),
      (e.prototype.validateValue = function (o) {
        var i = Number(o);
        return this.ensureNumber(i)
          ? i
          : ((this.error = "[CountUp] invalid start or end value: ".concat(o)),
            null);
      }),
      (e.prototype.resetDuration = function () {
        (this.startTime = null),
          (this.duration = 1e3 * Number(this.options.duration)),
          (this.remaining = this.duration);
      }),
      e
    );
  })();
function Ta(e, o = 1) {
  const i = Le(-1);
  let t;
  function n(a) {
    t || (t = a), a - t < o * 1e3 ? (i.value = requestAnimationFrame(n)) : e();
  }
  i.value = requestAnimationFrame(n);
  function r() {
    window.cancelAnimationFrame(i.value);
  }
  return {cancel: r};
}
const Ia = {class: "countup-wrap"},
  ka = {name: "CountUp"},
  Oa = Gt(
    Aa(Jn({}, ka), {
      props: {
        endVal: null,
        startVal: {default: 0},
        duration: {default: 2.5},
        decimalPlaces: {default: 0},
        autoplay: {type: Boolean, default: !0},
        loop: {type: [Boolean, Number], default: !1},
        delay: {default: 0},
        options: {default: void 0},
      },
      emits: ["init", "finished"],
      setup(e, {expose: o, emit: i}) {
        const t = e;
        let n = Le(),
          r = Le(),
          a = 0;
        const c = Le(!1);
        let u;
        function s() {
          if (!n.value) {
            console.warn("[vue-countup-v3]", "elRef can't found");
            return;
          }
          (a = 0), (c.value = !1);
          const v = Number(t.startVal),
            p = Number(t.endVal),
            _ = Number(t.duration);
          if (
            ((r.value = new $a(
              n.value,
              p,
              Jn(
                {startVal: v, duration: _, decimalPlaces: t.decimalPlaces},
                t.options
              )
            )),
            r.value.error)
          ) {
            console.error("[vue-countup-v3]", r.value.error);
            return;
          }
          i("init", r.value);
        }
        function d() {
          var v;
          r.value || s(), (v = r.value) == null || v.start(p), a++;
          function p() {
            (typeof t.loop == "boolean" && t.loop) || t.loop > a
              ? (u = Ta(() => {
                  var m;
                  (m = r.value) == null || m.reset(), d();
                }, t.delay))
              : (c.value = !0);
          }
        }
        function f() {
          u == null || u.cancel(), s(), d();
        }
        return (
          Ft([() => t.startVal, () => t.endVal], () => {
            t.autoplay && f();
          }),
          Ft(c, (v) => {
            v && i("finished");
          }),
          pn(() => {
            s(), t.autoplay && d();
          }),
          mi(() => {
            var v;
            u == null || u.cancel(), (v = r.value) == null || v.reset();
          }),
          o({init: s, restart: f}),
          (v, p) => (
            z(),
            W("div", Ia, [
              Ge(v.$slots, "prefix"),
              l("span", {ref_key: "elRef", ref: n}, null, 512),
              Ge(v.$slots, "suffix"),
            ])
          )
        );
      },
    })
  );
const Pa = {
    components: {CountUp: Oa},
    setup() {
      const e = Le(!1),
        o = Le(null),
        i = 500;
      function t() {
        o.value.getBoundingClientRect().top < i && (e.value = !0);
      }
      return {visible: e, runCounter: t, wrapper: o};
    },
    data() {
      return {loaded: !1};
    },
    mounted() {
      setTimeout(() => {
        this.loaded = !0;
      }, 200);
    },
  },
  gn = (e) => (ge("data-v-0433cc49"), (e = e()), ye(), e),
  La = {ref: "wrapper", class: "counter-wrap"},
  Na = {class: "counter-item"},
  Ca = {key: 0, class: "text"},
  Da = {class: "use-text-title"},
  Va = {class: "use-text-subtitle"},
  Ra = gn(() => l("i", {class: "ion-ios-cloud-download-outline"}, null, -1)),
  Ma = {class: "counter-item"},
  Fa = {key: 0, class: "text"},
  qa = {class: "use-text-title"},
  Ua = {class: "use-text-subtitle"},
  ja = gn(() => l("i", {class: "ion-ios-checkmark-circle-outline"}, null, -1)),
  za = {class: "counter-item"},
  Ba = {key: 0, class: "text"},
  Ga = {class: "use-text-title"},
  Ha = {class: "use-text-subtitle"},
  Wa = gn(() => l("i", {class: "ion-ios-star-outline"}, null, -1));
function Ya(e, o, i, t, n, r) {
  const a = L("count-up"),
    c = L("v-col"),
    u = L("v-row"),
    s = L("v-container"),
    d = ln("scroll");
  return Ct(
    (z(),
    W("div", La, [
      g(
        s,
        {class: "max-md"},
        {
          default: b(() => [
            g(
              u,
              {
                justify: "center",
                align: "center",
                class: "counter-inner spacing6",
              },
              {
                default: b(() => [
                  g(
                    c,
                    {md: "4", class: "px-6"},
                    {
                      default: b(() => [
                        l("div", Na, [
                          n.loaded
                            ? (z(),
                              W("div", Ca, [
                                l("h3", Da, [
                                  l("span", null, [
                                    le(Z(t.visible ? "" : 0) + " ", 1),
                                    t.visible
                                      ? (z(),
                                        xe(a, {
                                          key: 0,
                                          "start-val": 0,
                                          "end-val": 200,
                                          options: {suffix: "M"},
                                        }))
                                      : ve("", !0),
                                  ]),
                                ]),
                                l("p", Va, [
                                  Ra,
                                  le(
                                    " " +
                                      Z(
                                        e.$t("mobileLanding.counter_downloads")
                                      ),
                                    1
                                  ),
                                ]),
                              ]))
                            : ve("", !0),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  g(
                    c,
                    {md: "4", class: "px-6"},
                    {
                      default: b(() => [
                        l("div", Ma, [
                          n.loaded
                            ? (z(),
                              W("div", Fa, [
                                l("h3", qa, [
                                  l("span", null, [
                                    le(Z(t.visible ? "" : 0) + " ", 1),
                                    t.visible
                                      ? (z(),
                                        xe(a, {
                                          key: 0,
                                          "start-val": 0,
                                          "end-val": 480,
                                          options: {prefix: "+", suffix: "M"},
                                        }))
                                      : ve("", !0),
                                  ]),
                                ]),
                                l("p", Ua, [
                                  ja,
                                  le(
                                    " " +
                                      Z(
                                        e.$t(
                                          "mobileLanding.counter_transaction"
                                        )
                                      ),
                                    1
                                  ),
                                ]),
                              ]))
                            : ve("", !0),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                  g(
                    c,
                    {md: "4", class: "px-6"},
                    {
                      default: b(() => [
                        l("div", za, [
                          n.loaded
                            ? (z(),
                              W("div", Ba, [
                                l("h3", Ga, [
                                  l("span", null, [
                                    le(Z(t.visible ? "" : 0) + " ", 1),
                                    t.visible
                                      ? (z(),
                                        xe(a, {
                                          key: 0,
                                          "start-val": 0,
                                          "end-val": 180,
                                          options: {prefix: "+", suffix: "M"},
                                        }))
                                      : ve("", !0),
                                  ]),
                                ]),
                                l("p", Ha, [
                                  Wa,
                                  le(
                                    " " +
                                      Z(e.$t("mobileLanding.counter_rating")),
                                    1
                                  ),
                                ]),
                              ]))
                            : ve("", !0),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        }
      ),
    ])),
    [[d, t.runCounter]]
  );
}
const Xa = se(Pa, [
    ["render", Ya],
    ["__scopeId", "data-v-0433cc49"],
  ]),
  Ka = {use: !0},
  yn = "" + globalThis.__publicAssetsURL("images/mobile/dot-many.svg");
const Ja = {
    data() {
      return {loaded: !1};
    },
    mounted() {
      this.loaded = !0;
    },
  },
  bn = (e) => (ge("data-v-9cbf364d"), (e = e()), ye(), e),
  Za = mn + "#main",
  Qa = hn + "#main",
  er = yn + "#main",
  tr = {class: "parallax-wrap"},
  nr = {key: 0, class: "inner-parallax small"},
  ir = bn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "triangle"}, [l("use", {"xlink:href": Za})])],
      -1
    )
  ),
  or = bn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "circle"}, [l("use", {"xlink:href": Qa})])],
      -1
    )
  ),
  ar = bn(() =>
    l(
      "div",
      {class: "figure"},
      [
        l("div", {class: "square-dot"}, [
          l("svg", {class: "dot-many"}, [l("use", {"xlink:href": er})]),
        ]),
      ],
      -1
    )
  );
function rr(e, o, i, t, n, r) {
  const a = L("scroll-parallax");
  return (
    z(),
    W("div", tr, [
      n.loaded
        ? (z(),
          W("div", nr, [
            g(a, {speed: 0.1}, {default: b(() => [ir]), _: 1}),
            g(a, {speed: 0.15}, {default: b(() => [or]), _: 1}),
            g(a, {speed: 0.15}, {default: b(() => [ar]), _: 1}),
          ]))
        : ve("", !0),
    ])
  );
}
const sr = se(Ja, [
  ["render", rr],
  ["__scopeId", "data-v-9cbf364d"],
]);
const lr = {
    data() {
      return {loaded: !1};
    },
    mounted() {
      this.loaded = !0;
    },
  },
  wn = (e) => (ge("data-v-6dda3e38"), (e = e()), ye(), e),
  cr = mn + "#main",
  ur = hn + "#main",
  dr = yn + "#main",
  fr = {class: "parallax-wrap"},
  _r = {key: 0, class: "inner-parallax medium"},
  vr = wn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "triangle"}, [l("use", {"xlink:href": cr})])],
      -1
    )
  ),
  pr = wn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "circle"}, [l("use", {"xlink:href": ur})])],
      -1
    )
  ),
  mr = wn(() =>
    l(
      "div",
      {class: "figure"},
      [
        l("div", {class: "square-dot"}, [
          l("svg", {class: "dot-many"}, [l("use", {"xlink:href": dr})]),
        ]),
      ],
      -1
    )
  );
function hr(e, o, i, t, n, r) {
  const a = L("scroll-parallax");
  return (
    z(),
    W("div", fr, [
      n.loaded
        ? (z(),
          W("div", _r, [
            g(a, {speed: 0.1}, {default: b(() => [vr]), _: 1}),
            g(a, {speed: 0.15}, {default: b(() => [pr]), _: 1}),
            g(a, {speed: 0.15}, {default: b(() => [mr]), _: 1}),
          ]))
        : ve("", !0),
    ])
  );
}
const gr = se(lr, [
  ["render", hr],
  ["__scopeId", "data-v-6dda3e38"],
]);
const yr = {
  props: {
    align: {type: String, default: "left"},
    dark: {type: Boolean, default: !1},
  },
};
function br(e, o, i, t, n, r) {
  return (
    z(),
    W(
      "div",
      {class: Ce(["title-main", [i.align, {dark: i.dark}]])},
      [l("h3", null, [Ge(e.$slots, "default", {}, void 0, !0)])],
      2
    )
  );
}
const gt = se(yr, [
  ["render", br],
  ["__scopeId", "data-v-316f0fe1"],
]);
const wr = {
  props: {
    align: {type: String, default: "left"},
    text: {type: String, required: !0},
  },
};
function Er(e, o, i, t, n, r) {
  return (
    z(),
    W(
      "div",
      {class: Ce(["title-secondary", i.align])},
      [l("h4", null, Z(i.text), 1)],
      2
    )
  );
}
const Sr = se(wr, [
    ["render", Er],
    ["__scopeId", "data-v-c26371f5"],
  ]),
  Si = "" + globalThis.__publicAssetsURL("images/mobile/deco-feature.svg");
const xr = {
    components: {
      ParallaxSmall: sr,
      ParallaxMedium: gr,
      TitleSecondary: Sr,
      "title-main": gt,
    },
    data() {
      return {
        videoId: "MltGO66gTbo",
        imgAPI: fe,
        dialog: !1,
        player: null,
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          showinfo: 1,
          mute: 0,
          origin: "https://localhost:8006",
        },
        yt: Ka,
      };
    },
    methods: {
      handleVideoOpen() {
        this.yt.use && (this.dialog = !0);
      },
      onReady() {
        this.$refs.youtube.playVideo();
      },
      handleVideoClose() {
        (this.dialog = !1), this.$refs.youtube.pauseVideo();
      },
    },
    computed: {
      isMobile() {
        return this.$vuetify.display.smAndDown;
      },
    },
  },
  yt = (e) => (ge("data-v-847c53a4"), (e = e()), ye(), e),
  En = Si + "#main",
  Ar = {class: "root"},
  $r = {class: "title-main"},
  Tr = {key: 0, class: "text-center mx-auto py-4"},
  Ir = {class: "item first"},
  kr = {class: "illustration-left"},
  Or = yt(() =>
    l("svg", {class: "deco-primary"}, [l("use", {"xlink:href": En})], -1)
  ),
  Pr = {class: "screen"},
  Lr = ["src"],
  Nr = {class: "text"},
  Cr = {class: "use-text-subtitle2"},
  Dr = {class: "bg-color"},
  Vr = yt(() => l("div", {class: "deco-bg-top"}, null, -1)),
  Rr = {class: "item"},
  Mr = {class: "text"},
  Fr = {class: "use-text-subtitle2"},
  qr = {class: "illustration-right"},
  Ur = yt(() =>
    l("svg", {class: "deco-secondary"}, [l("use", {"xlink:href": En})], -1)
  ),
  jr = {class: "screen"},
  zr = ["src"],
  Br = {class: "item last"},
  Gr = {class: "text-center use-text-subtitle2"},
  Hr = {class: "illustration-center"},
  Wr = yt(() =>
    l("svg", {class: "deco-primary-big"}, [l("use", {"xlink:href": En})], -1)
  ),
  Yr = ["src"],
  Xr = {class: "use-text-subtitle2"},
  Kr = yt(() => l("i", {class: "ion-ios-play-outline"}, null, -1));
function Jr(e, o, i, t, n, r) {
  const a = L("v-icon"),
    c = L("v-btn"),
    u = L("v-card-title"),
    s = L("YouTube"),
    d = L("v-card"),
    f = L("v-dialog"),
    v = L("title-main"),
    p = L("parallax-small"),
    _ = L("v-col"),
    m = L("title-secondary"),
    w = L("v-row"),
    S = L("v-container"),
    A = L("parallax-medium");
  return (
    z(),
    W("div", Ar, [
      g(
        f,
        {
          modelValue: n.dialog,
          "onUpdate:modelValue": o[1] || (o[1] = (x) => (n.dialog = x)),
          "max-width": "690",
        },
        {
          default: b(() => [
            g(
              d,
              {class: "video-popup"},
              {
                default: b(() => [
                  g(
                    u,
                    {class: "headline"},
                    {
                      default: b(() => [
                        l("h2", $r, Z(e.$t("mobileLanding.feature_video")), 1),
                        g(
                          c,
                          {
                            variant: "flat",
                            icon: "",
                            onClick:
                              o[0] || (o[0] = (x) => r.handleVideoClose()),
                          },
                          {
                            default: b(() => [
                              g(a, null, {
                                default: b(() => [le("mdi-close")]),
                                _: 1,
                              }),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  n.yt.use
                    ? (z(),
                      W("div", Tr, [
                        g(
                          s,
                          {
                            src: n.videoId,
                            vars: n.playerVars,
                            width: 640,
                            height: 360,
                            ref: "youtube",
                            onReady: r.onReady,
                          },
                          null,
                          8,
                          ["src", "vars", "onReady"]
                        ),
                      ]))
                    : ve("", !0),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        },
        8,
        ["modelValue"]
      ),
      g(
        v,
        {align: "center"},
        {
          default: b(() => [le(Z(e.$t("mobileLanding.feature_title")), 1)]),
          _: 1,
        }
      ),
      g(
        S,
        {class: "fixed-width"},
        {
          default: b(() => [
            l("div", Ir, [
              g(
                w,
                {class: Ce([r.isMobile ? "column-reverse" : "row"])},
                {
                  default: b(() => [
                    g(
                      _,
                      {cols: "12", md: "6", class: "py-0"},
                      {
                        default: b(() => [
                          l("div", kr, [
                            Or,
                            g(p),
                            l("figure", Pr, [
                              l(
                                "img",
                                {src: n.imgAPI.mobile[4], alt: "illustration"},
                                null,
                                8,
                                Lr
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    g(
                      _,
                      {md: "6", cols: "12", class: "py-0"},
                      {
                        default: b(() => [
                          l("div", Nr, [
                            g(
                              m,
                              {
                                align: r.isMobile ? "center" : "left",
                                text: e.$t("mobileLanding.feature_title1"),
                              },
                              null,
                              8,
                              ["align", "text"]
                            ),
                            l(
                              "p",
                              Cr,
                              Z(e.$t("mobileLanding.feature_desc1")),
                              1
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                },
                8,
                ["class"]
              ),
            ]),
          ]),
          _: 1,
        }
      ),
      l("div", Dr, [
        Vr,
        g(
          S,
          {class: "fixed-width"},
          {
            default: b(() => [
              l("div", Rr, [
                g(w, null, {
                  default: b(() => [
                    g(
                      _,
                      {md: "6", cols: "12", class: "py-0"},
                      {
                        default: b(() => [
                          l("div", Mr, [
                            g(
                              m,
                              {
                                text: e.$t("mobileLanding.feature_title2"),
                                align: r.isMobile ? "center" : "left",
                              },
                              null,
                              8,
                              ["text", "align"]
                            ),
                            l(
                              "p",
                              Fr,
                              Z(e.$t("mobileLanding.feature_desc2")),
                              1
                            ),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                    g(
                      _,
                      {md: "6", cols: "12", class: "py-0"},
                      {
                        default: b(() => [
                          l("div", qr, [
                            Ur,
                            g(p),
                            l("figure", jr, [
                              l(
                                "img",
                                {src: n.imgAPI.mobile[5], alt: "screen"},
                                null,
                                8,
                                zr
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }),
              ]),
              l("div", Br, [
                g(
                  m,
                  {align: "center", text: e.$t("mobileLanding.feature_title3")},
                  null,
                  8,
                  ["text"]
                ),
                l("p", Gr, Z(e.$t("mobileLanding.feature_desc3")), 1),
                g(
                  S,
                  {class: "max-sm pa-0"},
                  {
                    default: b(() => [
                      g(w, null, {
                        default: b(() => [
                          g(
                            _,
                            {sm: "12", cols: "12", class: "py-0"},
                            {
                              default: b(() => [
                                l("div", Hr, [
                                  Wr,
                                  g(A),
                                  g(
                                    d,
                                    {class: "video"},
                                    {
                                      default: b(() => [
                                        l(
                                          "img",
                                          {
                                            src: n.imgAPI.mobile[6],
                                            alt: "screen",
                                          },
                                          null,
                                          8,
                                          Yr
                                        ),
                                        l(
                                          "h6",
                                          Xr,
                                          Z(
                                            e.$t("mobileLanding.feature_watch")
                                          ),
                                          1
                                        ),
                                        g(
                                          c,
                                          {
                                            icon: "",
                                            large: "",
                                            class: "button",
                                            onClick:
                                              o[2] ||
                                              (o[2] = (x) =>
                                                r.handleVideoOpen()),
                                          },
                                          {default: b(() => [Kr]), _: 1}
                                        ),
                                      ]),
                                      _: 1,
                                    }
                                  ),
                                ]),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
            _: 1,
          }
        ),
      ]),
    ])
  );
}
const Zr = se(xr, [
  ["render", Jr],
  ["__scopeId", "data-v-847c53a4"],
]);
function Zn(e, o) {
  for (var i = 0; i < o.length; i++) {
    var t = o[i];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(e, t.key, t);
  }
}
function Qr(e, o, i) {
  return (
    o && Zn(e.prototype, o),
    i && Zn(e, i),
    Object.defineProperty(e, "prototype", {writable: !1}),
    e
  );
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */ var Qn = "(prefers-reduced-motion: reduce)",
  Je = 1,
  es = 2,
  nt = 3,
  rt = 4,
  bt = 5,
  Dt = 6,
  Ut = 7,
  ts = {
    CREATED: Je,
    MOUNTED: es,
    IDLE: nt,
    MOVING: rt,
    SCROLLING: bt,
    DRAGGING: Dt,
    DESTROYED: Ut,
  };
function De(e) {
  e.length = 0;
}
function qe(e, o, i) {
  return Array.prototype.slice.call(e, o, i);
}
function te(e) {
  return e.bind.apply(e, [null].concat(qe(arguments, 1)));
}
var xi = setTimeout,
  cn = function () {};
function ei(e) {
  return requestAnimationFrame(e);
}
function Ht(e, o) {
  return typeof o === e;
}
function dt(e) {
  return !xn(e) && Ht("object", e);
}
var Sn = Array.isArray,
  Ai = te(Ht, "function"),
  Me = te(Ht, "string"),
  wt = te(Ht, "undefined");
function xn(e) {
  return e === null;
}
function $i(e) {
  try {
    return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
  } catch {
    return !1;
  }
}
function Et(e) {
  return Sn(e) ? e : [e];
}
function he(e, o) {
  Et(e).forEach(o);
}
function An(e, o) {
  return e.indexOf(o) > -1;
}
function Vt(e, o) {
  return e.push.apply(e, Et(o)), e;
}
function Oe(e, o, i) {
  e &&
    he(o, function (t) {
      t && e.classList[i ? "add" : "remove"](t);
    });
}
function Ae(e, o) {
  Oe(e, Me(o) ? o.split(" ") : o, !0);
}
function St(e, o) {
  he(o, e.appendChild.bind(e));
}
function $n(e, o) {
  he(e, function (i) {
    var t = (o || i).parentNode;
    t && t.insertBefore(i, o);
  });
}
function ft(e, o) {
  return $i(e) && (e.msMatchesSelector || e.matches).call(e, o);
}
function Ti(e, o) {
  var i = e ? qe(e.children) : [];
  return o
    ? i.filter(function (t) {
        return ft(t, o);
      })
    : i;
}
function xt(e, o) {
  return o ? Ti(e, o)[0] : e.firstElementChild;
}
var _t = Object.keys;
function Be(e, o, i) {
  return (
    e &&
      (i ? _t(e).reverse() : _t(e)).forEach(function (t) {
        t !== "__proto__" && o(e[t], t);
      }),
    e
  );
}
function vt(e) {
  return (
    qe(arguments, 1).forEach(function (o) {
      Be(o, function (i, t) {
        e[t] = o[t];
      });
    }),
    e
  );
}
function Re(e) {
  return (
    qe(arguments, 1).forEach(function (o) {
      Be(o, function (i, t) {
        Sn(i)
          ? (e[t] = i.slice())
          : dt(i)
          ? (e[t] = Re({}, dt(e[t]) ? e[t] : {}, i))
          : (e[t] = i);
      });
    }),
    e
  );
}
function ti(e, o) {
  he(o || _t(e), function (i) {
    delete e[i];
  });
}
function $e(e, o) {
  he(e, function (i) {
    he(o, function (t) {
      i && i.removeAttribute(t);
    });
  });
}
function G(e, o, i) {
  dt(o)
    ? Be(o, function (t, n) {
        G(e, n, t);
      })
    : he(e, function (t) {
        xn(i) || i === "" ? $e(t, o) : t.setAttribute(o, String(i));
      });
}
function Ze(e, o, i) {
  var t = document.createElement(e);
  return o && (Me(o) ? Ae(t, o) : G(t, o)), i && St(i, t), t;
}
function be(e, o, i) {
  if (wt(i)) return getComputedStyle(e)[o];
  xn(i) || (e.style[o] = "" + i);
}
function pt(e, o) {
  be(e, "display", o);
}
function Ii(e) {
  (e.setActive && e.setActive()) || e.focus({preventScroll: !0});
}
function we(e, o) {
  return e.getAttribute(o);
}
function ni(e, o) {
  return e && e.classList.contains(o);
}
function pe(e) {
  return e.getBoundingClientRect();
}
function He(e) {
  he(e, function (o) {
    o && o.parentNode && o.parentNode.removeChild(o);
  });
}
function ki(e) {
  return xt(new DOMParser().parseFromString(e, "text/html").body);
}
function ke(e, o) {
  e.preventDefault(), o && (e.stopPropagation(), e.stopImmediatePropagation());
}
function Oi(e, o) {
  return e && e.querySelector(o);
}
function Tn(e, o) {
  return o ? qe(e.querySelectorAll(o)) : [];
}
function Pe(e, o) {
  Oe(e, o, !1);
}
function un(e) {
  return e.timeStamp;
}
function ze(e) {
  return Me(e) ? e : e ? e + "px" : "";
}
var At = "splide",
  In = "data-" + At;
function ct(e, o) {
  if (!e) throw new Error("[" + At + "] " + (o || ""));
}
var Fe = Math.min,
  jt = Math.max,
  zt = Math.floor,
  mt = Math.ceil,
  de = Math.abs;
function Pi(e, o, i) {
  return de(e - o) < i;
}
function Rt(e, o, i, t) {
  var n = Fe(o, i),
    r = jt(o, i);
  return t ? n < e && e < r : n <= e && e <= r;
}
function Xe(e, o, i) {
  var t = Fe(o, i),
    n = jt(o, i);
  return Fe(jt(t, e), n);
}
function dn(e) {
  return +(e > 0) - +(e < 0);
}
function fn(e, o) {
  return (
    he(o, function (i) {
      e = e.replace("%s", "" + i);
    }),
    e
  );
}
function kn(e) {
  return e < 10 ? "0" + e : "" + e;
}
var ii = {};
function ns(e) {
  return "" + e + kn((ii[e] = (ii[e] || 0) + 1));
}
function Li() {
  var e = [];
  function o(a, c, u, s) {
    n(a, c, function (d, f, v) {
      var p = "addEventListener" in d,
        _ = p
          ? d.removeEventListener.bind(d, f, u, s)
          : d.removeListener.bind(d, u);
      p ? d.addEventListener(f, u, s) : d.addListener(u),
        e.push([d, f, v, u, _]);
    });
  }
  function i(a, c, u) {
    n(a, c, function (s, d, f) {
      e = e.filter(function (v) {
        return v[0] === s && v[1] === d && v[2] === f && (!u || v[3] === u)
          ? (v[4](), !1)
          : !0;
      });
    });
  }
  function t(a, c, u) {
    var s,
      d = !0;
    return (
      typeof CustomEvent == "function"
        ? (s = new CustomEvent(c, {bubbles: d, detail: u}))
        : ((s = document.createEvent("CustomEvent")),
          s.initCustomEvent(c, d, !1, u)),
      a.dispatchEvent(s),
      s
    );
  }
  function n(a, c, u) {
    he(a, function (s) {
      s &&
        he(c, function (d) {
          d.split(" ").forEach(function (f) {
            var v = f.split(".");
            u(s, v[0], v[1]);
          });
        });
    });
  }
  function r() {
    e.forEach(function (a) {
      a[4]();
    }),
      De(e);
  }
  return {bind: o, unbind: i, dispatch: t, destroy: r};
}
var Ue = "mounted",
  oi = "ready",
  Ve = "move",
  st = "moved",
  On = "click",
  Ni = "active",
  Ci = "inactive",
  Di = "visible",
  Vi = "hidden",
  ae = "refresh",
  ce = "updated",
  it = "resize",
  Wt = "resized",
  Ri = "drag",
  Mi = "dragging",
  Fi = "dragged",
  Yt = "scroll",
  Ye = "scrolled",
  is = "overflow",
  Pn = "destroy",
  qi = "arrows:mounted",
  Ui = "arrows:updated",
  ji = "pagination:mounted",
  zi = "pagination:updated",
  Ln = "navigation:mounted",
  Nn = "autoplay:play",
  Bi = "autoplay:playing",
  Cn = "autoplay:pause",
  Dn = "lazyload:loaded",
  Gi = "sk",
  Hi = "sh",
  Bt = "ei";
function ie(e) {
  var o = e ? e.event.bus : document.createDocumentFragment(),
    i = Li();
  function t(r, a) {
    i.bind(o, Et(r).join(" "), function (c) {
      a.apply(a, Sn(c.detail) ? c.detail : []);
    });
  }
  function n(r) {
    i.dispatch(o, r, qe(arguments, 1));
  }
  return (
    e && e.event.on(Pn, i.destroy),
    vt(i, {bus: o, on: t, off: te(i.unbind, o), emit: n})
  );
}
function Xt(e, o, i, t) {
  var n = Date.now,
    r,
    a = 0,
    c,
    u = !0,
    s = 0;
  function d() {
    if (!u) {
      if (
        ((a = e ? Fe((n() - r) / e, 1) : 1),
        i && i(a),
        a >= 1 && (o(), (r = n()), t && ++s >= t))
      )
        return v();
      c = ei(d);
    }
  }
  function f(S) {
    S || _(), (r = n() - (S ? a * e : 0)), (u = !1), (c = ei(d));
  }
  function v() {
    u = !0;
  }
  function p() {
    (r = n()), (a = 0), i && i(a);
  }
  function _() {
    c && cancelAnimationFrame(c), (a = 0), (c = 0), (u = !0);
  }
  function m(S) {
    e = S;
  }
  function w() {
    return u;
  }
  return {start: f, rewind: p, pause: v, cancel: _, set: m, isPaused: w};
}
function os(e) {
  var o = e;
  function i(n) {
    o = n;
  }
  function t(n) {
    return An(Et(n), o);
  }
  return {set: i, is: t};
}
function as(e, o) {
  var i = Xt(o || 0, e, null, 1);
  return function () {
    i.isPaused() && i.start();
  };
}
function rs(e, o, i) {
  var t = e.state,
    n = i.breakpoints || {},
    r = i.reducedMotion || {},
    a = Li(),
    c = [];
  function u() {
    var _ = i.mediaQuery === "min";
    _t(n)
      .sort(function (m, w) {
        return _ ? +m - +w : +w - +m;
      })
      .forEach(function (m) {
        d(n[m], "(" + (_ ? "min" : "max") + "-width:" + m + "px)");
      }),
      d(r, Qn),
      f();
  }
  function s(_) {
    _ && a.destroy();
  }
  function d(_, m) {
    var w = matchMedia(m);
    a.bind(w, "change", f), c.push([_, w]);
  }
  function f() {
    var _ = t.is(Ut),
      m = i.direction,
      w = c.reduce(function (S, A) {
        return Re(S, A[1].matches ? A[0] : {});
      }, {});
    ti(i),
      p(w),
      i.destroy
        ? e.destroy(i.destroy === "completely")
        : _
        ? (s(!0), e.mount())
        : m !== i.direction && e.refresh();
  }
  function v(_) {
    matchMedia(Qn).matches && (_ ? Re(i, r) : ti(i, _t(r)));
  }
  function p(_, m, w) {
    Re(i, _),
      m && Re(Object.getPrototypeOf(i), _),
      (w || !t.is(Je)) && e.emit(ce, i);
  }
  return {setup: u, destroy: s, reduce: v, set: p};
}
var Kt = "Arrow",
  Jt = Kt + "Left",
  Zt = Kt + "Right",
  Wi = Kt + "Up",
  Yi = Kt + "Down",
  ai = "rtl",
  Qt = "ttb",
  on = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [Wi, Zt],
    ArrowRight: [Yi, Jt],
  };
function ss(e, o, i) {
  function t(r, a, c) {
    c = c || i.direction;
    var u = c === ai && !a ? 1 : c === Qt ? 0 : -1;
    return (
      (on[r] && on[r][u]) ||
      r.replace(/width|left|right/i, function (s, d) {
        var f = on[s.toLowerCase()][u] || s;
        return d > 0 ? f.charAt(0).toUpperCase() + f.slice(1) : f;
      })
    );
  }
  function n(r) {
    return r * (i.direction === ai ? 1 : -1);
  }
  return {resolve: t, orient: n};
}
var Ne = "role",
  Qe = "tabindex",
  ls = "disabled",
  Ee = "aria-",
  $t = Ee + "controls",
  Xi = Ee + "current",
  ri = Ee + "selected",
  me = Ee + "label",
  Vn = Ee + "labelledby",
  Ki = Ee + "hidden",
  Rn = Ee + "orientation",
  ht = Ee + "roledescription",
  si = Ee + "live",
  li = Ee + "busy",
  ci = Ee + "atomic",
  Mn = [Ne, Qe, ls, $t, Xi, me, Vn, Ki, Rn, ht],
  Te = At + "__",
  je = "is-",
  an = At,
  ui = Te + "track",
  cs = Te + "list",
  en = Te + "slide",
  Ji = en + "--clone",
  us = en + "__container",
  Fn = Te + "arrows",
  tn = Te + "arrow",
  Zi = tn + "--prev",
  Qi = tn + "--next",
  nn = Te + "pagination",
  eo = nn + "__page",
  ds = Te + "progress",
  fs = ds + "__bar",
  _s = Te + "toggle",
  vs = Te + "spinner",
  ps = Te + "sr",
  ms = je + "initialized",
  We = je + "active",
  to = je + "prev",
  no = je + "next",
  _n = je + "visible",
  vn = je + "loading",
  io = je + "focus-in",
  oo = je + "overflow",
  hs = [We, _n, to, no, vn, io, oo],
  gs = {
    slide: en,
    clone: Ji,
    arrows: Fn,
    arrow: tn,
    prev: Zi,
    next: Qi,
    pagination: nn,
    page: eo,
    spinner: vs,
  };
function ys(e, o) {
  if (Ai(e.closest)) return e.closest(o);
  for (var i = e; i && i.nodeType === 1 && !ft(i, o); ) i = i.parentElement;
  return i;
}
var bs = 5,
  di = 200,
  ao = "touchstart mousedown",
  rn = "touchmove mousemove",
  sn = "touchend touchcancel mouseup click";
function ws(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.bind,
    a = e.root,
    c = i.i18n,
    u = {},
    s = [],
    d = [],
    f = [],
    v,
    p,
    _;
  function m() {
    x(), j(), A();
  }
  function w() {
    n(ae, S),
      n(ae, m),
      n(ce, A),
      r(
        document,
        ao + " keydown",
        function (k) {
          _ = k.type === "keydown";
        },
        {capture: !0}
      ),
      r(a, "focusin", function () {
        Oe(a, io, !!_);
      });
  }
  function S(k) {
    var P = Mn.concat("style");
    De(s), Pe(a, d), Pe(v, f), $e([v, p], P), $e(a, k ? P : ["style", ht]);
  }
  function A() {
    Pe(a, d),
      Pe(v, f),
      (d = V(an)),
      (f = V(ui)),
      Ae(a, d),
      Ae(v, f),
      G(a, me, i.label),
      G(a, Vn, i.labelledby);
  }
  function x() {
    (v = N("." + ui)),
      (p = xt(v, "." + cs)),
      ct(v && p, "A track/list element is missing."),
      Vt(s, Ti(p, "." + en + ":not(." + Ji + ")")),
      Be(
        {arrows: Fn, pagination: nn, prev: Zi, next: Qi, bar: fs, toggle: _s},
        function (k, P) {
          u[P] = N("." + k);
        }
      ),
      vt(u, {root: a, track: v, list: p, slides: s});
  }
  function j() {
    var k = a.id || ns(At),
      P = i.role;
    (a.id = k),
      (v.id = v.id || k + "-track"),
      (p.id = p.id || k + "-list"),
      !we(a, Ne) && a.tagName !== "SECTION" && P && G(a, Ne, P),
      G(a, ht, c.carousel),
      G(p, Ne, "presentation");
  }
  function N(k) {
    var P = Oi(a, k);
    return P && ys(P, "." + an) === a ? P : void 0;
  }
  function V(k) {
    return [
      k + "--" + i.type,
      k + "--" + i.direction,
      i.drag && k + "--draggable",
      i.isNavigation && k + "--nav",
      k === an && We,
    ];
  }
  return vt(u, {setup: m, mount: w, destroy: S});
}
var ot = "slide",
  lt = "loop",
  Tt = "fade";
function Es(e, o, i, t) {
  var n = ie(e),
    r = n.on,
    a = n.emit,
    c = n.bind,
    u = e.Components,
    s = e.root,
    d = e.options,
    f = d.isNavigation,
    v = d.updateOnMove,
    p = d.i18n,
    _ = d.pagination,
    m = d.slideFocus,
    w = u.Direction.resolve,
    S = we(t, "style"),
    A = we(t, me),
    x = i > -1,
    j = xt(t, "." + us),
    N;
  function V() {
    x ||
      ((t.id = s.id + "-slide" + kn(o + 1)),
      G(t, Ne, _ ? "tabpanel" : "group"),
      G(t, ht, p.slide),
      G(t, me, A || fn(p.slideLabel, [o + 1, e.length]))),
      k();
  }
  function k() {
    c(t, "click", te(a, On, q)),
      c(t, "keydown", te(a, Gi, q)),
      r([st, Hi, Ye], y),
      r(Ln, U),
      v && r(Ve, R);
  }
  function P() {
    (N = !0),
      n.destroy(),
      Pe(t, hs),
      $e(t, Mn),
      G(t, "style", S),
      G(t, me, A || "");
  }
  function U() {
    var C = e.splides
      .map(function (O) {
        var M = O.splide.Components.Slides.getAt(o);
        return M ? M.slide.id : "";
      })
      .join(" ");
    G(t, me, fn(p.slideX, (x ? i : o) + 1)),
      G(t, $t, C),
      G(t, Ne, m ? "button" : ""),
      m && $e(t, ht);
  }
  function R() {
    N || y();
  }
  function y() {
    if (!N) {
      var C = e.index;
      h(), E(), Oe(t, to, o === C - 1), Oe(t, no, o === C + 1);
    }
  }
  function h() {
    var C = D();
    C !== ni(t, We) &&
      (Oe(t, We, C), G(t, Xi, (f && C) || ""), a(C ? Ni : Ci, q));
  }
  function E() {
    var C = K(),
      O = !C && (!D() || x);
    if (
      (e.state.is([rt, bt]) || G(t, Ki, O || ""),
      G(Tn(t, d.focusableNodes || ""), Qe, O ? -1 : ""),
      m && G(t, Qe, O ? -1 : 0),
      C !== ni(t, _n) && (Oe(t, _n, C), a(C ? Di : Vi, q)),
      !C && document.activeElement === t)
    ) {
      var M = u.Slides.getAt(e.index);
      M && Ii(M.slide);
    }
  }
  function $(C, O, M) {
    be((M && j) || t, C, O);
  }
  function D() {
    var C = e.index;
    return C === o || (d.cloneStatus && C === i);
  }
  function K() {
    if (e.is(Tt)) return D();
    var C = pe(u.Elements.track),
      O = pe(t),
      M = w("left", !0),
      H = w("right", !0);
    return zt(C[M]) <= mt(O[M]) && zt(O[H]) <= mt(C[H]);
  }
  function J(C, O) {
    var M = de(C - o);
    return !x && (d.rewind || e.is(lt)) && (M = Fe(M, e.length - M)), M <= O;
  }
  var q = {
    index: o,
    slideIndex: i,
    slide: t,
    container: j,
    isClone: x,
    mount: V,
    destroy: P,
    update: y,
    style: $,
    isWithin: J,
  };
  return q;
}
function Ss(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = t.bind,
    c = o.Elements,
    u = c.slides,
    s = c.list,
    d = [];
  function f() {
    v(), n(ae, p), n(ae, v);
  }
  function v() {
    u.forEach(function (y, h) {
      m(y, h, -1);
    });
  }
  function p() {
    N(function (y) {
      y.destroy();
    }),
      De(d);
  }
  function _() {
    N(function (y) {
      y.update();
    });
  }
  function m(y, h, E) {
    var $ = Es(e, h, E, y);
    $.mount(),
      d.push($),
      d.sort(function (D, K) {
        return D.index - K.index;
      });
  }
  function w(y) {
    return y
      ? V(function (h) {
          return !h.isClone;
        })
      : d;
  }
  function S(y) {
    var h = o.Controller,
      E = h.toIndex(y),
      $ = h.hasFocus() ? 1 : i.perPage;
    return V(function (D) {
      return Rt(D.index, E, E + $ - 1);
    });
  }
  function A(y) {
    return V(y)[0];
  }
  function x(y, h) {
    he(y, function (E) {
      if ((Me(E) && (E = ki(E)), $i(E))) {
        var $ = u[h];
        $ ? $n(E, $) : St(s, E), Ae(E, i.classes.slide), P(E, te(r, it));
      }
    }),
      r(ae);
  }
  function j(y) {
    He(
      V(y).map(function (h) {
        return h.slide;
      })
    ),
      r(ae);
  }
  function N(y, h) {
    w(h).forEach(y);
  }
  function V(y) {
    return d.filter(
      Ai(y)
        ? y
        : function (h) {
            return Me(y) ? ft(h.slide, y) : An(Et(y), h.index);
          }
    );
  }
  function k(y, h, E) {
    N(function ($) {
      $.style(y, h, E);
    });
  }
  function P(y, h) {
    var E = Tn(y, "img"),
      $ = E.length;
    $
      ? E.forEach(function (D) {
          a(D, "load error", function () {
            --$ || h();
          });
        })
      : h();
  }
  function U(y) {
    return y ? u.length : d.length;
  }
  function R() {
    return d.length > i.perPage;
  }
  return {
    mount: f,
    destroy: p,
    update: _,
    register: m,
    get: w,
    getIn: S,
    getAt: A,
    add: x,
    remove: j,
    forEach: N,
    filter: V,
    style: k,
    getLength: U,
    isEnough: R,
  };
}
function xs(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.bind,
    a = t.emit,
    c = o.Slides,
    u = o.Direction.resolve,
    s = o.Elements,
    d = s.root,
    f = s.track,
    v = s.list,
    p = c.getAt,
    _ = c.style,
    m,
    w,
    S;
  function A() {
    x(), r(window, "resize load", as(te(a, it))), n([ce, ae], x), n(it, j);
  }
  function x() {
    (m = i.direction === Qt),
      be(d, "maxWidth", ze(i.width)),
      be(f, u("paddingLeft"), N(!1)),
      be(f, u("paddingRight"), N(!0)),
      j(!0);
  }
  function j(q) {
    var C = pe(d);
    (q || w.width !== C.width || w.height !== C.height) &&
      (be(f, "height", V()),
      _(u("marginRight"), ze(i.gap)),
      _("width", P()),
      _("height", U(), !0),
      (w = C),
      a(Wt),
      S !== (S = J()) && (Oe(d, oo, S), a(is, S)));
  }
  function N(q) {
    var C = i.padding,
      O = u(q ? "right" : "left");
    return (C && ze(C[O] || (dt(C) ? 0 : C))) || "0px";
  }
  function V() {
    var q = "";
    return (
      m &&
        ((q = k()),
        ct(q, "height or heightRatio is missing."),
        (q = "calc(" + q + " - " + N(!1) + " - " + N(!0) + ")")),
      q
    );
  }
  function k() {
    return ze(i.height || pe(v).width * i.heightRatio);
  }
  function P() {
    return i.autoWidth ? null : ze(i.fixedWidth) || (m ? "" : R());
  }
  function U() {
    return ze(i.fixedHeight) || (m ? (i.autoHeight ? null : R()) : k());
  }
  function R() {
    var q = ze(i.gap);
    return (
      "calc((100%" +
      (q && " + " + q) +
      ")/" +
      (i.perPage || 1) +
      (q && " - " + q) +
      ")"
    );
  }
  function y() {
    return pe(v)[u("width")];
  }
  function h(q, C) {
    var O = p(q || 0);
    return O ? pe(O.slide)[u("width")] + (C ? 0 : D()) : 0;
  }
  function E(q, C) {
    var O = p(q);
    if (O) {
      var M = pe(O.slide)[u("right")],
        H = pe(v)[u("left")];
      return de(M - H) + (C ? 0 : D());
    }
    return 0;
  }
  function $(q) {
    return E(e.length - 1) - E(0) + h(0, q);
  }
  function D() {
    var q = p(0);
    return (q && parseFloat(be(q.slide, u("marginRight")))) || 0;
  }
  function K(q) {
    return parseFloat(be(f, u("padding" + (q ? "Right" : "Left")))) || 0;
  }
  function J() {
    return e.is(Tt) || $(!0) > y();
  }
  return {
    mount: A,
    resize: j,
    listSize: y,
    slideSize: h,
    sliderSize: $,
    totalSize: E,
    getPadding: K,
    isOverflow: J,
  };
}
var As = 2;
function $s(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = o.Elements,
    a = o.Slides,
    c = o.Direction.resolve,
    u = [],
    s;
  function d() {
    n(ae, f), n([ce, it], p), (s = w()) && (_(s), o.Layout.resize(!0));
  }
  function f() {
    v(), d();
  }
  function v() {
    He(u), De(u), t.destroy();
  }
  function p() {
    var S = w();
    s !== S && (s < S || !S) && t.emit(ae);
  }
  function _(S) {
    var A = a.get().slice(),
      x = A.length;
    if (x) {
      for (; A.length < S; ) Vt(A, A);
      Vt(A.slice(-S), A.slice(0, S)).forEach(function (j, N) {
        var V = N < S,
          k = m(j.slide, N);
        V ? $n(k, A[0].slide) : St(r.list, k),
          Vt(u, k),
          a.register(k, N - S + (V ? 0 : x), j.index);
      });
    }
  }
  function m(S, A) {
    var x = S.cloneNode(!0);
    return Ae(x, i.classes.clone), (x.id = e.root.id + "-clone" + kn(A + 1)), x;
  }
  function w() {
    var S = i.clones;
    if (!e.is(lt)) S = 0;
    else if (wt(S)) {
      var A = i[c("fixedWidth")] && o.Layout.slideSize(0),
        x = A && mt(pe(r.track)[c("width")] / A);
      S = x || (i[c("autoWidth")] && e.length) || i.perPage * As;
    }
    return S;
  }
  return {mount: d, destroy: v};
}
function Ts(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = e.state.set,
    c = o.Layout,
    u = c.slideSize,
    s = c.getPadding,
    d = c.totalSize,
    f = c.listSize,
    v = c.sliderSize,
    p = o.Direction,
    _ = p.resolve,
    m = p.orient,
    w = o.Elements,
    S = w.list,
    A = w.track,
    x;
  function j() {
    (x = o.Transition), n([Ue, Wt, ce, ae], N);
  }
  function N() {
    o.Controller.isBusy() || (o.Scroll.cancel(), k(e.index), o.Slides.update());
  }
  function V(O, M, H, ee) {
    O !== M && q(O > H) && (y(), P(R($(), O > H), !0)),
      a(rt),
      r(Ve, M, H, O),
      x.start(M, function () {
        a(nt), r(st, M, H, O), ee && ee();
      });
  }
  function k(O) {
    P(E(O, !0));
  }
  function P(O, M) {
    if (!e.is(Tt)) {
      var H = M ? O : U(O);
      be(S, "transform", "translate" + _("X") + "(" + H + "px)"),
        O !== H && r(Hi);
    }
  }
  function U(O) {
    if (e.is(lt)) {
      var M = h(O),
        H = M > o.Controller.getEnd(),
        ee = M < 0;
      (ee || H) && (O = R(O, H));
    }
    return O;
  }
  function R(O, M) {
    var H = O - J(M),
      ee = v();
    return (O -= m(ee * (mt(de(H) / ee) || 1)) * (M ? 1 : -1)), O;
  }
  function y() {
    P($(), !0), x.cancel();
  }
  function h(O) {
    for (var M = o.Slides.get(), H = 0, ee = 1 / 0, Q = 0; Q < M.length; Q++) {
      var re = M[Q].index,
        T = de(E(re, !0) - O);
      if (T <= ee) (ee = T), (H = re);
      else break;
    }
    return H;
  }
  function E(O, M) {
    var H = m(d(O - 1) - K(O));
    return M ? D(H) : H;
  }
  function $() {
    var O = _("left");
    return pe(S)[O] - pe(A)[O] + m(s(!1));
  }
  function D(O) {
    return i.trimSpace && e.is(ot) && (O = Xe(O, 0, m(v(!0) - f()))), O;
  }
  function K(O) {
    var M = i.focus;
    return M === "center" ? (f() - u(O, !0)) / 2 : +M * u(O) || 0;
  }
  function J(O) {
    return E(O ? o.Controller.getEnd() : 0, !!i.trimSpace);
  }
  function q(O) {
    var M = m(R($(), O));
    return O ? M >= 0 : M <= S[_("scrollWidth")] - pe(A)[_("width")];
  }
  function C(O, M) {
    M = wt(M) ? $() : M;
    var H = O !== !0 && m(M) < m(J(!1)),
      ee = O !== !1 && m(M) > m(J(!0));
    return H || ee;
  }
  return {
    mount: j,
    move: V,
    jump: k,
    translate: P,
    shift: R,
    cancel: y,
    toIndex: h,
    toPosition: E,
    getPosition: $,
    getLimit: J,
    exceededLimit: C,
    reposition: N,
  };
}
function Is(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = o.Move,
    c = a.getPosition,
    u = a.getLimit,
    s = a.toPosition,
    d = o.Slides,
    f = d.isEnough,
    v = d.getLength,
    p = i.omitEnd,
    _ = e.is(lt),
    m = e.is(ot),
    w = te($, !1),
    S = te($, !0),
    A = i.start || 0,
    x,
    j = A,
    N,
    V,
    k;
  function P() {
    U(), n([ce, ae, Bt], U), n(Wt, R);
  }
  function U() {
    (N = v(!0)), (V = i.perMove), (k = i.perPage), (x = q());
    var T = Xe(A, 0, p ? x : N - 1);
    T !== A && ((A = T), a.reposition());
  }
  function R() {
    x !== q() && r(Bt);
  }
  function y(T, B, Y) {
    if (!re()) {
      var X = E(T),
        ne = J(X);
      ne > -1 && (B || ne !== A) && (H(ne), a.move(X, ne, j, Y));
    }
  }
  function h(T, B, Y, X) {
    o.Scroll.scroll(T, B, Y, function () {
      var ne = J(a.toIndex(c()));
      H(p ? Fe(ne, x) : ne), X && X();
    });
  }
  function E(T) {
    var B = A;
    if (Me(T)) {
      var Y = T.match(/([+\-<>])(\d+)?/) || [],
        X = Y[1],
        ne = Y[2];
      X === "+" || X === "-"
        ? (B = D(A + +("" + X + (+ne || 1)), A))
        : X === ">"
        ? (B = ne ? C(+ne) : w(!0))
        : X === "<" && (B = S(!0));
    } else B = _ ? T : Xe(T, 0, x);
    return B;
  }
  function $(T, B) {
    var Y = V || (Q() ? 1 : k),
      X = D(A + Y * (T ? -1 : 1), A, !(V || Q()));
    return X === -1 && m && !Pi(c(), u(!T), 1) ? (T ? 0 : x) : B ? X : J(X);
  }
  function D(T, B, Y) {
    if (f() || Q()) {
      var X = K(T);
      X !== T && ((B = T), (T = X), (Y = !1)),
        T < 0 || T > x
          ? !V && (Rt(0, T, B, !0) || Rt(x, B, T, !0))
            ? (T = C(O(T)))
            : _
            ? (T = Y ? (T < 0 ? -(N % k || k) : N) : T)
            : i.rewind
            ? (T = T < 0 ? x : 0)
            : (T = -1)
          : Y && T !== B && (T = C(O(B) + (T < B ? -1 : 1)));
    } else T = -1;
    return T;
  }
  function K(T) {
    if (m && i.trimSpace === "move" && T !== A)
      for (var B = c(); B === s(T, !0) && Rt(T, 0, e.length - 1, !i.rewind); )
        T < A ? --T : ++T;
    return T;
  }
  function J(T) {
    return _ ? (T + N) % N || 0 : T;
  }
  function q() {
    for (var T = N - (Q() || (_ && V) ? 1 : k); p && T-- > 0; )
      if (s(N - 1, !0) !== s(T, !0)) {
        T++;
        break;
      }
    return Xe(T, 0, N - 1);
  }
  function C(T) {
    return Xe(Q() ? T : k * T, 0, x);
  }
  function O(T) {
    return Q() ? Fe(T, x) : zt((T >= x ? N - 1 : T) / k);
  }
  function M(T) {
    var B = a.toIndex(T);
    return m ? Xe(B, 0, x) : B;
  }
  function H(T) {
    T !== A && ((j = A), (A = T));
  }
  function ee(T) {
    return T ? j : A;
  }
  function Q() {
    return !wt(i.focus) || i.isNavigation;
  }
  function re() {
    return e.state.is([rt, bt]) && !!i.waitForTransition;
  }
  return {
    mount: P,
    go: y,
    scroll: h,
    getNext: w,
    getPrev: S,
    getAdjacent: $,
    getEnd: q,
    setIndex: H,
    getIndex: ee,
    toIndex: C,
    toPage: O,
    toDest: M,
    hasFocus: Q,
    isBusy: re,
  };
}
var ks = "http://www.w3.org/2000/svg",
  Os =
    "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z",
  Lt = 40;
function Ps(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.bind,
    a = t.emit,
    c = i.classes,
    u = i.i18n,
    s = o.Elements,
    d = o.Controller,
    f = s.arrows,
    v = s.track,
    p = f,
    _ = s.prev,
    m = s.next,
    w,
    S,
    A = {};
  function x() {
    N(), n(ce, j);
  }
  function j() {
    V(), x();
  }
  function N() {
    var h = i.arrows;
    h && !(_ && m) && U(),
      _ &&
        m &&
        (vt(A, {prev: _, next: m}),
        pt(p, h ? "" : "none"),
        Ae(p, (S = Fn + "--" + i.direction)),
        h && (k(), y(), G([_, m], $t, v.id), a(qi, _, m)));
  }
  function V() {
    t.destroy(),
      Pe(p, S),
      w ? (He(f ? [_, m] : p), (_ = m = null)) : $e([_, m], Mn);
  }
  function k() {
    n([Ue, st, ae, Ye, Bt], y),
      r(m, "click", te(P, ">")),
      r(_, "click", te(P, "<"));
  }
  function P(h) {
    d.go(h, !0);
  }
  function U() {
    (p = f || Ze("div", c.arrows)),
      (_ = R(!0)),
      (m = R(!1)),
      (w = !0),
      St(p, [_, m]),
      !f && $n(p, v);
  }
  function R(h) {
    var E =
      '<button class="' +
      c.arrow +
      " " +
      (h ? c.prev : c.next) +
      '" type="button"><svg xmlns="' +
      ks +
      '" viewBox="0 0 ' +
      Lt +
      " " +
      Lt +
      '" width="' +
      Lt +
      '" height="' +
      Lt +
      '" focusable="false"><path d="' +
      (i.arrowPath || Os) +
      '" />';
    return ki(E);
  }
  function y() {
    if (_ && m) {
      var h = e.index,
        E = d.getPrev(),
        $ = d.getNext(),
        D = E > -1 && h < E ? u.last : u.prev,
        K = $ > -1 && h > $ ? u.first : u.next;
      (_.disabled = E < 0),
        (m.disabled = $ < 0),
        G(_, me, D),
        G(m, me, K),
        a(Ui, _, m, E, $);
    }
  }
  return {arrows: A, mount: x, destroy: V, update: y};
}
var Ls = In + "-interval";
function Ns(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.bind,
    a = t.emit,
    c = Xt(i.interval, e.go.bind(e, ">"), k),
    u = c.isPaused,
    s = o.Elements,
    d = o.Elements,
    f = d.root,
    v = d.toggle,
    p = i.autoplay,
    _,
    m,
    w = p === "pause";
  function S() {
    p && (A(), v && G(v, $t, s.track.id), w || x(), V());
  }
  function A() {
    i.pauseOnHover &&
      r(f, "mouseenter mouseleave", function (U) {
        (_ = U.type === "mouseenter"), N();
      }),
      i.pauseOnFocus &&
        r(f, "focusin focusout", function (U) {
          (m = U.type === "focusin"), N();
        }),
      v &&
        r(v, "click", function () {
          w ? x() : j(!0);
        }),
      n([Ve, Yt, ae], c.rewind),
      n(Ve, P);
  }
  function x() {
    u() &&
      o.Slides.isEnough() &&
      (c.start(!i.resetProgress), (m = _ = w = !1), V(), a(Nn));
  }
  function j(U) {
    U === void 0 && (U = !0), (w = !!U), V(), u() || (c.pause(), a(Cn));
  }
  function N() {
    w || (_ || m ? j(!1) : x());
  }
  function V() {
    v && (Oe(v, We, !w), G(v, me, i.i18n[w ? "play" : "pause"]));
  }
  function k(U) {
    var R = s.bar;
    R && be(R, "width", U * 100 + "%"), a(Bi, U);
  }
  function P(U) {
    var R = o.Slides.getAt(U);
    c.set((R && +we(R.slide, Ls)) || i.interval);
  }
  return {mount: S, destroy: c.cancel, play: x, pause: j, isPaused: u};
}
function Cs(e, o, i) {
  var t = ie(e),
    n = t.on;
  function r() {
    i.cover && (n(Dn, te(c, !0)), n([Ue, ce, ae], te(a, !0)));
  }
  function a(u) {
    o.Slides.forEach(function (s) {
      var d = xt(s.container || s.slide, "img");
      d && d.src && c(u, d, s);
    });
  }
  function c(u, s, d) {
    d.style(
      "background",
      u ? 'center/cover no-repeat url("' + s.src + '")' : "",
      !0
    ),
      pt(s, u ? "none" : "");
  }
  return {mount: r, destroy: te(a, !1)};
}
var Ds = 10,
  Vs = 600,
  Rs = 0.6,
  Ms = 1.5,
  Fs = 800;
function qs(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = e.state.set,
    c = o.Move,
    u = c.getPosition,
    s = c.getLimit,
    d = c.exceededLimit,
    f = c.translate,
    v = e.is(ot),
    p,
    _,
    m = 1;
  function w() {
    n(Ve, j), n([ce, ae], N);
  }
  function S(k, P, U, R, y) {
    var h = u();
    if ((j(), U && (!v || !d()))) {
      var E = o.Layout.sliderSize(),
        $ = dn(k) * E * zt(de(k) / E) || 0;
      k = c.toPosition(o.Controller.toDest(k % E)) + $;
    }
    var D = Pi(h, k, 1);
    (m = 1),
      (P = D ? 0 : P || jt(de(k - h) / Ms, Fs)),
      (_ = R),
      (p = Xt(P, A, te(x, h, k, y), 1)),
      a(bt),
      r(Yt),
      p.start();
  }
  function A() {
    a(nt), _ && _(), r(Ye);
  }
  function x(k, P, U, R) {
    var y = u(),
      h = k + (P - k) * V(R),
      E = (h - y) * m;
    f(y + E),
      v && !U && d() && ((m *= Rs), de(E) < Ds && S(s(d(!0)), Vs, !1, _, !0));
  }
  function j() {
    p && p.cancel();
  }
  function N() {
    p && !p.isPaused() && (j(), A());
  }
  function V(k) {
    var P = i.easingFunc;
    return P ? P(k) : 1 - Math.pow(1 - k, 4);
  }
  return {mount: w, destroy: j, scroll: S, cancel: N};
}
var Ke = {passive: !1, capture: !0};
function Us(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = t.bind,
    c = t.unbind,
    u = e.state,
    s = o.Move,
    d = o.Scroll,
    f = o.Controller,
    v = o.Elements.track,
    p = o.Media.reduce,
    _ = o.Direction,
    m = _.resolve,
    w = _.orient,
    S = s.getPosition,
    A = s.exceededLimit,
    x,
    j,
    N,
    V,
    k,
    P = !1,
    U,
    R,
    y;
  function h() {
    a(v, rn, cn, Ke),
      a(v, sn, cn, Ke),
      a(v, ao, $, Ke),
      a(v, "click", J, {capture: !0}),
      a(v, "dragstart", ke),
      n([Ue, ce], E);
  }
  function E() {
    var I = i.drag;
    _e(!I), (V = I === "free");
  }
  function $(I) {
    if (((U = !1), !R)) {
      var F = ne(I);
      X(I.target) &&
        (F || !I.button) &&
        (f.isBusy()
          ? ke(I, !0)
          : ((y = F ? v : window),
            (k = u.is([rt, bt])),
            (N = null),
            a(y, rn, D, Ke),
            a(y, sn, K, Ke),
            s.cancel(),
            d.cancel(),
            q(I)));
    }
  }
  function D(I) {
    if ((u.is(Dt) || (u.set(Dt), r(Ri)), I.cancelable))
      if (k) {
        s.translate(x + Y(Q(I)));
        var F = re(I) > di,
          oe = P !== (P = A());
        (F || oe) && q(I), (U = !0), r(Mi), ke(I);
      } else M(I) && ((k = O(I)), ke(I));
  }
  function K(I) {
    u.is(Dt) && (u.set(nt), r(Fi)),
      k && (C(I), ke(I)),
      c(y, rn, D),
      c(y, sn, K),
      (k = !1);
  }
  function J(I) {
    !R && U && ke(I, !0);
  }
  function q(I) {
    (N = j), (j = I), (x = S());
  }
  function C(I) {
    var F = H(I),
      oe = ee(F),
      ue = i.rewind && i.rewindByDrag;
    p(!1),
      V
        ? f.scroll(oe, 0, i.snap)
        : e.is(Tt)
        ? f.go(w(dn(F)) < 0 ? (ue ? "<" : "-") : ue ? ">" : "+")
        : e.is(ot) && P && ue
        ? f.go(A(!0) ? ">" : "<")
        : f.go(f.toDest(oe), !0),
      p(!0);
  }
  function O(I) {
    var F = i.dragMinThreshold,
      oe = dt(F),
      ue = (oe && F.mouse) || 0,
      Ot = (oe ? F.touch : +F) || 10;
    return de(Q(I)) > (ne(I) ? Ot : ue);
  }
  function M(I) {
    return de(Q(I)) > de(Q(I, !0));
  }
  function H(I) {
    if (e.is(lt) || !P) {
      var F = re(I);
      if (F && F < di) return Q(I) / F;
    }
    return 0;
  }
  function ee(I) {
    return (
      S() +
      dn(I) *
        Fe(
          de(I) * (i.flickPower || 600),
          V ? 1 / 0 : o.Layout.listSize() * (i.flickMaxPages || 1)
        )
    );
  }
  function Q(I, F) {
    return B(I, F) - B(T(I), F);
  }
  function re(I) {
    return un(I) - un(T(I));
  }
  function T(I) {
    return (j === I && N) || j;
  }
  function B(I, F) {
    return (ne(I) ? I.changedTouches[0] : I)["page" + m(F ? "Y" : "X")];
  }
  function Y(I) {
    return I / (P && e.is(ot) ? bs : 1);
  }
  function X(I) {
    var F = i.noDrag;
    return !ft(I, "." + eo + ", ." + tn) && (!F || !ft(I, F));
  }
  function ne(I) {
    return typeof TouchEvent < "u" && I instanceof TouchEvent;
  }
  function Se() {
    return k;
  }
  function _e(I) {
    R = I;
  }
  return {mount: h, disable: _e, isDragging: Se};
}
var js = {Spacebar: " ", Right: Zt, Left: Jt, Up: Wi, Down: Yi};
function qn(e) {
  return (e = Me(e) ? e : e.key), js[e] || e;
}
var fi = "keydown";
function zs(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.bind,
    a = t.unbind,
    c = e.root,
    u = o.Direction.resolve,
    s,
    d;
  function f() {
    v(), n(ce, p), n(ce, v), n(Ve, m);
  }
  function v() {
    var S = i.keyboard;
    S && ((s = S === "global" ? window : c), r(s, fi, w));
  }
  function p() {
    a(s, fi);
  }
  function _(S) {
    d = S;
  }
  function m() {
    var S = d;
    (d = !0),
      xi(function () {
        d = S;
      });
  }
  function w(S) {
    if (!d) {
      var A = qn(S);
      A === u(Jt) ? e.go("<") : A === u(Zt) && e.go(">");
    }
  }
  return {mount: f, destroy: p, disable: _};
}
var ut = In + "-lazy",
  Mt = ut + "-srcset",
  Bs = "[" + ut + "], [" + Mt + "]";
function Gs(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.off,
    a = t.bind,
    c = t.emit,
    u = i.lazyLoad === "sequential",
    s = [st, Ye],
    d = [];
  function f() {
    i.lazyLoad && (v(), n(ae, v));
  }
  function v() {
    De(d), p(), u ? S() : (r(s), n(s, _), _());
  }
  function p() {
    o.Slides.forEach(function (A) {
      Tn(A.slide, Bs).forEach(function (x) {
        var j = we(x, ut),
          N = we(x, Mt);
        if (j !== x.src || N !== x.srcset) {
          var V = i.classes.spinner,
            k = x.parentElement,
            P = xt(k, "." + V) || Ze("span", V, k);
          d.push([x, A, P]), x.src || pt(x, "none");
        }
      });
    });
  }
  function _() {
    (d = d.filter(function (A) {
      var x = i.perPage * ((i.preloadPages || 1) + 1) - 1;
      return A[1].isWithin(e.index, x) ? m(A) : !0;
    })),
      d.length || r(s);
  }
  function m(A) {
    var x = A[0];
    Ae(A[1].slide, vn),
      a(x, "load error", te(w, A)),
      G(x, "src", we(x, ut)),
      G(x, "srcset", we(x, Mt)),
      $e(x, ut),
      $e(x, Mt);
  }
  function w(A, x) {
    var j = A[0],
      N = A[1];
    Pe(N.slide, vn),
      x.type !== "error" && (He(A[2]), pt(j, ""), c(Dn, j, N), c(it)),
      u && S();
  }
  function S() {
    d.length && m(d.shift());
  }
  return {mount: f, destroy: te(De, d), check: _};
}
function Hs(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = t.emit,
    a = t.bind,
    c = o.Slides,
    u = o.Elements,
    s = o.Controller,
    d = s.hasFocus,
    f = s.getIndex,
    v = s.go,
    p = o.Direction.resolve,
    _ = u.pagination,
    m = [],
    w,
    S;
  function A() {
    x(), n([ce, ae, Bt], A);
    var R = i.pagination;
    _ && pt(_, R ? "" : "none"),
      R &&
        (n([Ve, Yt, Ye], U), j(), U(), r(ji, {list: w, items: m}, P(e.index)));
  }
  function x() {
    w && (He(_ ? qe(w.children) : w), Pe(w, S), De(m), (w = null)), t.destroy();
  }
  function j() {
    var R = e.length,
      y = i.classes,
      h = i.i18n,
      E = i.perPage,
      $ = d() ? s.getEnd() + 1 : mt(R / E);
    (w = _ || Ze("ul", y.pagination, u.track.parentElement)),
      Ae(w, (S = nn + "--" + k())),
      G(w, Ne, "tablist"),
      G(w, me, h.select),
      G(w, Rn, k() === Qt ? "vertical" : "");
    for (var D = 0; D < $; D++) {
      var K = Ze("li", null, w),
        J = Ze("button", {class: y.page, type: "button"}, K),
        q = c.getIn(D).map(function (O) {
          return O.slide.id;
        }),
        C = !d() && E > 1 ? h.pageX : h.slideX;
      a(J, "click", te(N, D)),
        i.paginationKeyboard && a(J, "keydown", te(V, D)),
        G(K, Ne, "presentation"),
        G(J, Ne, "tab"),
        G(J, $t, q.join(" ")),
        G(J, me, fn(C, D + 1)),
        G(J, Qe, -1),
        m.push({li: K, button: J, page: D});
    }
  }
  function N(R) {
    v(">" + R, !0);
  }
  function V(R, y) {
    var h = m.length,
      E = qn(y),
      $ = k(),
      D = -1;
    E === p(Zt, !1, $)
      ? (D = ++R % h)
      : E === p(Jt, !1, $)
      ? (D = (--R + h) % h)
      : E === "Home"
      ? (D = 0)
      : E === "End" && (D = h - 1);
    var K = m[D];
    K && (Ii(K.button), v(">" + D), ke(y, !0));
  }
  function k() {
    return i.paginationDirection || i.direction;
  }
  function P(R) {
    return m[s.toPage(R)];
  }
  function U() {
    var R = P(f(!0)),
      y = P(f());
    if (R) {
      var h = R.button;
      Pe(h, We), $e(h, ri), G(h, Qe, -1);
    }
    if (y) {
      var E = y.button;
      Ae(E, We), G(E, ri, !0), G(E, Qe, "");
    }
    r(zi, {list: w, items: m}, R, y);
  }
  return {items: m, mount: A, destroy: x, getAt: P, update: U};
}
var Ws = [" ", "Enter"];
function Ys(e, o, i) {
  var t = i.isNavigation,
    n = i.slideFocus,
    r = [];
  function a() {
    e.splides.forEach(function (_) {
      _.isParent || (s(e, _.splide), s(_.splide, e));
    }),
      t && d();
  }
  function c() {
    r.forEach(function (_) {
      _.destroy();
    }),
      De(r);
  }
  function u() {
    c(), a();
  }
  function s(_, m) {
    var w = ie(_);
    w.on(Ve, function (S, A, x) {
      m.go(m.is(lt) ? x : S);
    }),
      r.push(w);
  }
  function d() {
    var _ = ie(e),
      m = _.on;
    m(On, v), m(Gi, p), m([Ue, ce], f), r.push(_), _.emit(Ln, e.splides);
  }
  function f() {
    G(o.Elements.list, Rn, i.direction === Qt ? "vertical" : "");
  }
  function v(_) {
    e.go(_.index);
  }
  function p(_, m) {
    An(Ws, qn(m)) && (v(_), ke(m));
  }
  return {
    setup: te(o.Media.set, {slideFocus: wt(n) ? t : n}, !0),
    mount: a,
    destroy: c,
    remount: u,
  };
}
function Xs(e, o, i) {
  var t = ie(e),
    n = t.bind,
    r = 0;
  function a() {
    i.wheel && n(o.Elements.track, "wheel", c, Ke);
  }
  function c(s) {
    if (s.cancelable) {
      var d = s.deltaY,
        f = d < 0,
        v = un(s),
        p = i.wheelMinThreshold || 0,
        _ = i.wheelSleep || 0;
      de(d) > p && v - r > _ && (e.go(f ? "<" : ">"), (r = v)), u(f) && ke(s);
    }
  }
  function u(s) {
    return (
      !i.releaseWheel || e.state.is(rt) || o.Controller.getAdjacent(s) !== -1
    );
  }
  return {mount: a};
}
var Ks = 90;
function Js(e, o, i) {
  var t = ie(e),
    n = t.on,
    r = o.Elements.track,
    a = i.live && !i.isNavigation,
    c = Ze("span", ps),
    u = Xt(Ks, te(d, !1));
  function s() {
    a &&
      (v(!o.Autoplay.isPaused()),
      G(r, ci, !0),
      (c.textContent = "…"),
      n(Nn, te(v, !0)),
      n(Cn, te(v, !1)),
      n([st, Ye], te(d, !0)));
  }
  function d(p) {
    G(r, li, p), p ? (St(r, c), u.start()) : (He(c), u.cancel());
  }
  function f() {
    $e(r, [si, ci, li]), He(c);
  }
  function v(p) {
    a && G(r, si, p ? "off" : "polite");
  }
  return {mount: s, disable: v, destroy: f};
}
var Zs = Object.freeze({
    __proto__: null,
    Media: rs,
    Direction: ss,
    Elements: ws,
    Slides: Ss,
    Layout: xs,
    Clones: $s,
    Move: Ts,
    Controller: Is,
    Arrows: Ps,
    Autoplay: Ns,
    Cover: Cs,
    Scroll: qs,
    Drag: Us,
    Keyboard: zs,
    LazyLoad: Gs,
    Pagination: Hs,
    Sync: Ys,
    Wheel: Xs,
    Live: Js,
  }),
  Qs = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s",
  },
  el = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: !0,
    arrows: !0,
    pagination: !0,
    paginationKeyboard: !0,
    interval: 5e3,
    pauseOnHover: !0,
    pauseOnFocus: !0,
    resetProgress: !0,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: !0,
    direction: "ltr",
    trimSpace: !0,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: !0,
    classes: gs,
    i18n: Qs,
    reducedMotion: {speed: 0, rewindSpeed: 0, autoplay: "pause"},
  };
function tl(e, o, i) {
  var t = o.Slides;
  function n() {
    ie(e).on([Ue, ae], r);
  }
  function r() {
    t.forEach(function (c) {
      c.style("transform", "translateX(-" + 100 * c.index + "%)");
    });
  }
  function a(c, u) {
    t.style("transition", "opacity " + i.speed + "ms " + i.easing), xi(u);
  }
  return {mount: n, start: a, cancel: cn};
}
function nl(e, o, i) {
  var t = o.Move,
    n = o.Controller,
    r = o.Scroll,
    a = o.Elements.list,
    c = te(be, a, "transition"),
    u;
  function s() {
    ie(e).bind(a, "transitionend", function (p) {
      p.target === a && u && (f(), u());
    });
  }
  function d(p, _) {
    var m = t.toPosition(p, !0),
      w = t.getPosition(),
      S = v(p);
    de(m - w) >= 1 && S >= 1
      ? i.useScroll
        ? r.scroll(m, S, !1, _)
        : (c("transform " + S + "ms " + i.easing), t.translate(m, !0), (u = _))
      : (t.jump(p), _());
  }
  function f() {
    c(""), r.cancel();
  }
  function v(p) {
    var _ = i.rewindSpeed;
    if (e.is(ot) && _) {
      var m = n.getIndex(!0),
        w = n.getEnd();
      if ((m === 0 && p >= w) || (m >= w && p === 0)) return _;
    }
    return i.speed;
  }
  return {mount: s, start: d, cancel: f};
}
var il = (function () {
    function e(i, t) {
      (this.event = ie()),
        (this.Components = {}),
        (this.state = os(Je)),
        (this.splides = []),
        (this._o = {}),
        (this._E = {});
      var n = Me(i) ? Oi(document, i) : i;
      ct(n, n + " is invalid."),
        (this.root = n),
        (t = Re(
          {label: we(n, me) || "", labelledby: we(n, Vn) || ""},
          el,
          e.defaults,
          t || {}
        ));
      try {
        Re(t, JSON.parse(we(n, In)));
      } catch {
        ct(!1, "Invalid JSON");
      }
      this._o = Object.create(Re({}, t));
    }
    var o = e.prototype;
    return (
      (o.mount = function (t, n) {
        var r = this,
          a = this.state,
          c = this.Components;
        ct(a.is([Je, Ut]), "Already mounted!"),
          a.set(Je),
          (this._C = c),
          (this._T = n || this._T || (this.is(Tt) ? tl : nl)),
          (this._E = t || this._E);
        var u = vt({}, Zs, this._E, {Transition: this._T});
        return (
          Be(u, function (s, d) {
            var f = s(r, c, r._o);
            (c[d] = f), f.setup && f.setup();
          }),
          Be(c, function (s) {
            s.mount && s.mount();
          }),
          this.emit(Ue),
          Ae(this.root, ms),
          a.set(nt),
          this.emit(oi),
          this
        );
      }),
      (o.sync = function (t) {
        return (
          this.splides.push({splide: t}),
          t.splides.push({splide: this, isParent: !0}),
          this.state.is(nt) &&
            (this._C.Sync.remount(), t.Components.Sync.remount()),
          this
        );
      }),
      (o.go = function (t) {
        return this._C.Controller.go(t), this;
      }),
      (o.on = function (t, n) {
        return this.event.on(t, n), this;
      }),
      (o.off = function (t) {
        return this.event.off(t), this;
      }),
      (o.emit = function (t) {
        var n;
        return (
          (n = this.event).emit.apply(n, [t].concat(qe(arguments, 1))), this
        );
      }),
      (o.add = function (t, n) {
        return this._C.Slides.add(t, n), this;
      }),
      (o.remove = function (t) {
        return this._C.Slides.remove(t), this;
      }),
      (o.is = function (t) {
        return this._o.type === t;
      }),
      (o.refresh = function () {
        return this.emit(ae), this;
      }),
      (o.destroy = function (t) {
        t === void 0 && (t = !0);
        var n = this.event,
          r = this.state;
        return (
          r.is(Je)
            ? ie(this).on(oi, this.destroy.bind(this, t))
            : (Be(
                this._C,
                function (a) {
                  a.destroy && a.destroy(t);
                },
                !0
              ),
              n.emit(Pn),
              n.destroy(),
              t && De(this.splides),
              r.set(Ut)),
          this
        );
      }),
      Qr(e, [
        {
          key: "options",
          get: function () {
            return this._o;
          },
          set: function (t) {
            this._C.Media.set(t, !0, !0);
          },
        },
        {
          key: "length",
          get: function () {
            return this._C.Slides.getLength(!0);
          },
        },
        {
          key: "index",
          get: function () {
            return this._C.Controller.getIndex();
          },
        },
      ]),
      e
    );
  })(),
  Un = il;
Un.defaults = {};
Un.STATES = ts;
const _i = [
    Ni,
    qi,
    Ui,
    Cn,
    Nn,
    Bi,
    On,
    Pn,
    Ri,
    Fi,
    Mi,
    Vi,
    Ci,
    Dn,
    Ue,
    Ve,
    st,
    Ln,
    ji,
    zi,
    ae,
    it,
    Wt,
    Yt,
    Ye,
    ce,
    Di,
  ],
  ro = "splide";
function vi(e) {
  return e !== null && typeof e == "object";
}
function ol(e, o) {
  if (e) {
    const i = Object.keys(e);
    for (let t = 0; t < i.length; t++) {
      const n = i[t];
      if (n !== "__proto__" && o(e[n], n) === !1) break;
    }
  }
  return e;
}
function so(e, o) {
  const i = e;
  return (
    ol(o, (t, n) => {
      Array.isArray(t)
        ? (i[n] = t.slice())
        : vi(t)
        ? (i[n] = so(vi(i[n]) ? i[n] : {}, t))
        : (i[n] = t);
    }),
    i
  );
}
const al = Gt({
    name: "SplideTrack",
    setup() {
      Ao(() => {
        var e;
        const o = $o(ro);
        (e = o == null ? void 0 : o.value) == null || e.refresh();
      });
    },
  }),
  jn = (e, o) => {
    const i = e.__vccOpts || e;
    for (const [t, n] of o) i[t] = n;
    return i;
  },
  rl = {class: "splide__track"},
  sl = {class: "splide__list"};
function ll(e, o, i, t, n, r) {
  return z(), W("div", rl, [l("ul", sl, [Ge(e.$slots, "default")])]);
}
const cl = jn(al, [["render", ll]]),
  ul = Gt({
    name: "Splide",
    emits: _i.map((e) => `splide:${e}`),
    components: {SplideTrack: cl},
    props: {
      tag: {default: "div", type: String},
      options: {default: {}, type: Object},
      extensions: Object,
      transition: Function,
      hasTrack: {default: !0, type: Boolean},
    },
    setup(e, o) {
      const i = Le(),
        t = Le();
      pn(() => {
        t.value &&
          ((i.value = new Un(t.value, e.options)),
          u(i.value),
          i.value.mount(e.extensions, e.transition));
      }),
        Eo(() => {
          var s;
          (s = i.value) == null || s.destroy();
        }),
        Ft(
          () => so({}, e.options),
          (s) => {
            i.value && (i.value.options = s);
          },
          {deep: !0}
        ),
        So(ro, i);
      const n = Gn(() => {
          var s;
          return ((s = i.value) == null ? void 0 : s.index) || 0;
        }),
        r = Gn(() => {
          var s;
          return ((s = i.value) == null ? void 0 : s.length) || 0;
        });
      function a(s) {
        var d;
        (d = i.value) == null || d.go(s);
      }
      function c(s) {
        var d;
        (d = i.value) == null || d.sync(s);
      }
      function u(s) {
        _i.forEach((d) => {
          s.on(d, (...f) => {
            o.emit(`splide:${d}`, s, ...f);
          });
        });
      }
      return {splide: i, root: t, index: n, length: r, go: a, sync: c};
    },
  });
function dl(e, o, i, t, n, r) {
  const a = L("SplideTrack");
  return (
    z(),
    xe(
      xo(e.tag),
      {class: "splide", ref: "root"},
      {
        default: b(() => [
          e.hasTrack
            ? (z(),
              xe(
                a,
                {key: 0},
                {default: b(() => [Ge(e.$slots, "default")]), _: 3}
              ))
            : Ge(e.$slots, "default", {key: 1}),
        ]),
        _: 3,
      },
      512
    )
  );
}
const lo = jn(ul, [["render", dl]]),
  fl = Gt({name: "SplideSlide"}),
  _l = {class: "splide__slide"};
function vl(e, o, i, t, n, r) {
  return z(), W("li", _l, [Ge(e.$slots, "default")]);
}
const co = jn(fl, [["render", vl]]),
  uo = "" + globalThis.__publicAssetsURL("images/mobile/deco-wave-top.svg"),
  pl = "" + globalThis.__publicAssetsURL("images/mobile/deco-wave-bottom.svg");
const ml = {
    components: {
      "title-main": gt,
      ParallaxLarge: yi,
      Splide: lo,
      SplideSlide: co,
    },
    data: () => ({
      imgAPI: fe,
      loaded: !1,
      activeSlide: 0,
      settingsCenter: {
        pagination: !0,
        type: "fade",
        speed: 500,
        arrows: !1,
        focus: "center",
        updateOnMove: !0,
        direction: "ltr",
      },
      settingsSide: {
        autoplay: !0,
        interval: 5e3,
        pagination: !1,
        type: "loop",
        speed: 500,
        perMove: 1,
        focus: "center",
        padding: "10px",
        perPage: 5,
        arrows: !1,
        direction: "ltr",
        breakpoints: {800: {perPage: 3}},
      },
    }),
    mounted() {
      setTimeout(() => {
        this.$vuetify.locale.isRtl
          ? ((this.settingsSide.direction = "rtl"),
            (this.settingsCenter.direction = "rtl"))
          : ((this.settingsSide.direction = "ltr"),
            (this.settingsCenter.direction = "ltr"));
      }, 100);
    },
    methods: {
      handleDotsNav(e) {
        this.$refs.sliderCenter.go(e);
      },
      handleActiveSlide(e) {
        (this.activeSlide = e.index), this.$refs.sliderSide.go(e.index);
      },
      handleSync(e) {
        this.$refs.sliderCenter.go(e.index);
      },
    },
  },
  It = (e) => (ge("data-v-4964a0ab"), (e = e()), ye(), e),
  fo = uo + "#main",
  _o = pl + "#main",
  hl = {class: "root"},
  gl = It(() =>
    l("svg", {class: "deco-top back"}, [l("use", {"xlink:href": fo})], -1)
  ),
  yl = It(() =>
    l("svg", {class: "deco-top cover"}, [l("use", {"xlink:href": fo})], -1)
  ),
  bl = {class: "carousel-wrap"},
  wl = {class: "invert-parallax"},
  El = {class: "carousel-side"},
  Sl = {class: "item"},
  xl = ["src"],
  Al = {class: "item"},
  $l = ["src"],
  Tl = {class: "item"},
  Il = ["src"],
  kl = {class: "item"},
  Ol = ["src"],
  Pl = {class: "item"},
  Ll = ["src"],
  Nl = {class: "item"},
  Cl = ["src"],
  Dl = {class: "item"},
  Vl = ["src"],
  Rl = {class: "carousel-center"},
  Ml = {class: "item"},
  Fl = ["src"],
  ql = {class: "widget"},
  Ul = ["src"],
  jl = {class: "item"},
  zl = ["src"],
  Bl = {class: "widget"},
  Gl = ["src"],
  Hl = {class: "item"},
  Wl = ["src"],
  Yl = {class: "widget"},
  Xl = ["src"],
  Kl = {class: "item"},
  Jl = ["src"],
  Zl = {class: "widget"},
  Ql = ["src"],
  ec = {class: "item"},
  tc = ["src"],
  nc = {class: "widget"},
  ic = ["src"],
  oc = {class: "item"},
  ac = ["src"],
  rc = {class: "widget"},
  sc = ["src"],
  lc = {class: "item"},
  cc = ["src"],
  uc = {class: "widget"},
  dc = ["src"],
  fc = It(() =>
    l("svg", {class: "deco-bottom back"}, [l("use", {"xlink:href": _o})], -1)
  ),
  _c = It(() =>
    l("svg", {class: "deco-bottom cover"}, [l("use", {"xlink:href": _o})], -1)
  ),
  vc = It(() => l("div", {class: "deco-bottom-mobile"}, null, -1)),
  pc = {class: "pagination"},
  mc = ["onClick"];
function hc(e, o, i, t, n, r) {
  const a = L("title-main"),
    c = L("parallax-large"),
    u = L("v-card"),
    s = L("splide-slide"),
    d = L("splide");
  return (
    z(),
    W("div", hl, [
      gl,
      yl,
      g(
        a,
        {dark: "", align: "center"},
        {
          default: b(() => [le(Z(e.$t("mobileLanding.showcase_title")), 1)]),
          _: 1,
        }
      ),
      l("div", bl, [
        l("div", wl, [g(c)]),
        l("div", El, [
          g(
            d,
            {
              options: e.settingsSide,
              class: "slider-side",
              ref: "sliderSide",
              "onSplide:move": r.handleSync,
            },
            {
              default: b(() => [
                g(s, null, {
                  default: b(() => [
                    l("div", Sl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[7], alt: "app"},
                              null,
                              8,
                              xl
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", Al, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[8], alt: "app"},
                              null,
                              8,
                              $l
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", Tl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[9], alt: "app"},
                              null,
                              8,
                              Il
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", kl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[10], alt: "app"},
                              null,
                              8,
                              Ol
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", Pl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[11], alt: "app"},
                              null,
                              8,
                              Ll
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", Nl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[12], alt: "app"},
                              null,
                              8,
                              Cl
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
                g(s, null, {
                  default: b(() => [
                    l("div", Dl, [
                      g(
                        u,
                        {class: "frame"},
                        {
                          default: b(() => [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[13], alt: "app"},
                              null,
                              8,
                              Vl
                            ),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                  ]),
                  _: 1,
                }),
              ]),
              _: 1,
            },
            8,
            ["options", "onSplide:move"]
          ),
        ]),
        l("div", Rl, [
          g(
            u,
            {class: "frame"},
            {
              default: b(() => [
                g(
                  d,
                  {
                    options: e.settingsCenter,
                    class: "slider-center",
                    ref: "sliderCenter",
                    "onSplide:move": r.handleActiveSlide,
                  },
                  {
                    default: b(() => [
                      g(s, null, {
                        default: b(() => [
                          l("div", Ml, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[7], alt: "app"},
                              null,
                              8,
                              Fl
                            ),
                            l("div", ql, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[14], alt: "app"},
                                null,
                                8,
                                Ul
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", jl, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[8], alt: "app"},
                              null,
                              8,
                              zl
                            ),
                            l("div", Bl, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[15], alt: "app"},
                                null,
                                8,
                                Gl
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", Hl, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[9], alt: "app"},
                              null,
                              8,
                              Wl
                            ),
                            l("div", Yl, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[16], alt: "app"},
                                null,
                                8,
                                Xl
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", Kl, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[10], alt: "app"},
                              null,
                              8,
                              Jl
                            ),
                            l("div", Zl, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[17], alt: "app"},
                                null,
                                8,
                                Ql
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", ec, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[11], alt: "app"},
                              null,
                              8,
                              tc
                            ),
                            l("div", nc, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[18], alt: "app"},
                                null,
                                8,
                                ic
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", oc, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[12], alt: "app"},
                              null,
                              8,
                              ac
                            ),
                            l("div", rc, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[19], alt: "app"},
                                null,
                                8,
                                sc
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                      g(s, null, {
                        default: b(() => [
                          l("div", lc, [
                            l(
                              "img",
                              {src: e.imgAPI.mobile[13], alt: "app"},
                              null,
                              8,
                              cc
                            ),
                            l("div", uc, [
                              l(
                                "img",
                                {src: e.imgAPI.mobile[20], alt: "app"},
                                null,
                                8,
                                dc
                              ),
                            ]),
                          ]),
                        ]),
                        _: 1,
                      }),
                    ]),
                    _: 1,
                  },
                  8,
                  ["options", "onSplide:move"]
                ),
              ]),
              _: 1,
            }
          ),
        ]),
      ]),
      fc,
      _c,
      vc,
      l("div", pc, [
        l("ul", null, [
          (z(),
          W(
            et,
            null,
            tt(6, (f) =>
              l(
                "li",
                {key: f, class: Ce({active: e.activeSlide === f})},
                [
                  l(
                    "button",
                    {type: "button", onClick: (v) => r.handleDotsNav(f)},
                    null,
                    8,
                    mc
                  ),
                ],
                2
              )
            ),
            64
          )),
        ]),
      ]),
    ])
  );
}
const gc = se(ml, [
  ["render", hc],
  ["__scopeId", "data-v-4964a0ab"],
]);
var vo = {exports: {}};
(function (e, o) {
  (function (i, t) {
    e.exports = t();
  })(To, function () {
    return (function (i) {
      function t(r) {
        if (n[r]) return n[r].exports;
        var a = (n[r] = {exports: {}, id: r, loaded: !1});
        return (
          i[r].call(a.exports, a, a.exports, t), (a.loaded = !0), a.exports
        );
      }
      var n = {};
      return (t.m = i), (t.c = n), (t.p = "dist/"), t(0);
    })([
      function (i, t, n) {
        function r($) {
          return $ && $.__esModule ? $ : {default: $};
        }
        var a =
            Object.assign ||
            function ($) {
              for (var D = 1; D < arguments.length; D++) {
                var K = arguments[D];
                for (var J in K)
                  Object.prototype.hasOwnProperty.call(K, J) && ($[J] = K[J]);
              }
              return $;
            },
          c = n(1),
          u = (r(c), n(6)),
          s = r(u),
          d = n(7),
          f = r(d),
          v = n(8),
          p = r(v),
          _ = n(9),
          m = r(_),
          w = n(10),
          S = r(w),
          A = n(11),
          x = r(A),
          j = n(14),
          N = r(j),
          V = [],
          k = !1,
          P = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            startEvent: "DOMContentLoaded",
            throttleDelay: 99,
            debounceDelay: 50,
            disableMutationObserver: !1,
          },
          U = function () {
            var $ =
              arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            if (($ && (k = !0), k))
              return (V = (0, x.default)(V, P)), (0, S.default)(V, P.once), V;
          },
          R = function () {
            (V = (0, N.default)()), U();
          },
          y = function () {
            V.forEach(function ($, D) {
              $.node.removeAttribute("data-aos"),
                $.node.removeAttribute("data-aos-easing"),
                $.node.removeAttribute("data-aos-duration"),
                $.node.removeAttribute("data-aos-delay");
            });
          },
          h = function ($) {
            return (
              $ === !0 ||
              ($ === "mobile" && m.default.mobile()) ||
              ($ === "phone" && m.default.phone()) ||
              ($ === "tablet" && m.default.tablet()) ||
              (typeof $ == "function" && $() === !0)
            );
          },
          E = function ($) {
            (P = a(P, $)), (V = (0, N.default)());
            var D = document.all && !window.atob;
            return h(P.disable) || D
              ? y()
              : (P.disableMutationObserver ||
                  p.default.isSupported() ||
                  (console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),
                  (P.disableMutationObserver = !0)),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-easing", P.easing),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-duration", P.duration),
                document
                  .querySelector("body")
                  .setAttribute("data-aos-delay", P.delay),
                P.startEvent === "DOMContentLoaded" &&
                ["complete", "interactive"].indexOf(document.readyState) > -1
                  ? U(!0)
                  : P.startEvent === "load"
                  ? window.addEventListener(P.startEvent, function () {
                      U(!0);
                    })
                  : document.addEventListener(P.startEvent, function () {
                      U(!0);
                    }),
                window.addEventListener(
                  "resize",
                  (0, f.default)(U, P.debounceDelay, !0)
                ),
                window.addEventListener(
                  "orientationchange",
                  (0, f.default)(U, P.debounceDelay, !0)
                ),
                window.addEventListener(
                  "scroll",
                  (0, s.default)(function () {
                    (0, S.default)(V, P.once);
                  }, P.throttleDelay)
                ),
                P.disableMutationObserver || p.default.ready("[data-aos]", R),
                V);
          };
        i.exports = {init: E, refresh: U, refreshHard: R};
      },
      function (i, t) {},
      ,
      ,
      ,
      ,
      function (i, t) {
        (function (n) {
          function r(h, E, $) {
            function D(F) {
              var oe = Q,
                ue = re;
              return (Q = re = void 0), (ne = F), (B = h.apply(ue, oe));
            }
            function K(F) {
              return (ne = F), (Y = setTimeout(C, E)), Se ? D(F) : B;
            }
            function J(F) {
              var oe = F - X,
                ue = F - ne,
                Ot = E - oe;
              return _e ? R(Ot, T - ue) : Ot;
            }
            function q(F) {
              var oe = F - X,
                ue = F - ne;
              return X === void 0 || oe >= E || oe < 0 || (_e && ue >= T);
            }
            function C() {
              var F = y();
              return q(F) ? O(F) : void (Y = setTimeout(C, J(F)));
            }
            function O(F) {
              return (Y = void 0), I && Q ? D(F) : ((Q = re = void 0), B);
            }
            function M() {
              Y !== void 0 && clearTimeout(Y),
                (ne = 0),
                (Q = X = re = Y = void 0);
            }
            function H() {
              return Y === void 0 ? B : O(y());
            }
            function ee() {
              var F = y(),
                oe = q(F);
              if (((Q = arguments), (re = this), (X = F), oe)) {
                if (Y === void 0) return K(X);
                if (_e) return (Y = setTimeout(C, E)), D(X);
              }
              return Y === void 0 && (Y = setTimeout(C, E)), B;
            }
            var Q,
              re,
              T,
              B,
              Y,
              X,
              ne = 0,
              Se = !1,
              _e = !1,
              I = !0;
            if (typeof h != "function") throw new TypeError(v);
            return (
              (E = d(E) || 0),
              c($) &&
                ((Se = !!$.leading),
                (_e = "maxWait" in $),
                (T = _e ? U(d($.maxWait) || 0, E) : T),
                (I = "trailing" in $ ? !!$.trailing : I)),
              (ee.cancel = M),
              (ee.flush = H),
              ee
            );
          }
          function a(h, E, $) {
            var D = !0,
              K = !0;
            if (typeof h != "function") throw new TypeError(v);
            return (
              c($) &&
                ((D = "leading" in $ ? !!$.leading : D),
                (K = "trailing" in $ ? !!$.trailing : K)),
              r(h, E, {leading: D, maxWait: E, trailing: K})
            );
          }
          function c(h) {
            var E = typeof h > "u" ? "undefined" : f(h);
            return !!h && (E == "object" || E == "function");
          }
          function u(h) {
            return !!h && (typeof h > "u" ? "undefined" : f(h)) == "object";
          }
          function s(h) {
            return (
              (typeof h > "u" ? "undefined" : f(h)) == "symbol" ||
              (u(h) && P.call(h) == _)
            );
          }
          function d(h) {
            if (typeof h == "number") return h;
            if (s(h)) return p;
            if (c(h)) {
              var E = typeof h.valueOf == "function" ? h.valueOf() : h;
              h = c(E) ? E + "" : E;
            }
            if (typeof h != "string") return h === 0 ? h : +h;
            h = h.replace(m, "");
            var $ = S.test(h);
            return $ || A.test(h)
              ? x(h.slice(2), $ ? 2 : 8)
              : w.test(h)
              ? p
              : +h;
          }
          var f =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (h) {
                    return typeof h;
                  }
                : function (h) {
                    return h &&
                      typeof Symbol == "function" &&
                      h.constructor === Symbol &&
                      h !== Symbol.prototype
                      ? "symbol"
                      : typeof h;
                  },
            v = "Expected a function",
            p = NaN,
            _ = "[object Symbol]",
            m = /^\s+|\s+$/g,
            w = /^[-+]0x[0-9a-f]+$/i,
            S = /^0b[01]+$/i,
            A = /^0o[0-7]+$/i,
            x = parseInt,
            j =
              (typeof n > "u" ? "undefined" : f(n)) == "object" &&
              n &&
              n.Object === Object &&
              n,
            N =
              (typeof self > "u" ? "undefined" : f(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            V = j || N || Function("return this")(),
            k = Object.prototype,
            P = k.toString,
            U = Math.max,
            R = Math.min,
            y = function () {
              return V.Date.now();
            };
          i.exports = a;
        }).call(
          t,
          (function () {
            return this;
          })()
        );
      },
      function (i, t) {
        (function (n) {
          function r(y, h, E) {
            function $(I) {
              var F = ee,
                oe = Q;
              return (ee = Q = void 0), (X = I), (T = y.apply(oe, F));
            }
            function D(I) {
              return (X = I), (B = setTimeout(q, h)), ne ? $(I) : T;
            }
            function K(I) {
              var F = I - Y,
                oe = I - X,
                ue = h - F;
              return Se ? U(ue, re - oe) : ue;
            }
            function J(I) {
              var F = I - Y,
                oe = I - X;
              return Y === void 0 || F >= h || F < 0 || (Se && oe >= re);
            }
            function q() {
              var I = R();
              return J(I) ? C(I) : void (B = setTimeout(q, K(I)));
            }
            function C(I) {
              return (B = void 0), _e && ee ? $(I) : ((ee = Q = void 0), T);
            }
            function O() {
              B !== void 0 && clearTimeout(B),
                (X = 0),
                (ee = Y = Q = B = void 0);
            }
            function M() {
              return B === void 0 ? T : C(R());
            }
            function H() {
              var I = R(),
                F = J(I);
              if (((ee = arguments), (Q = this), (Y = I), F)) {
                if (B === void 0) return D(Y);
                if (Se) return (B = setTimeout(q, h)), $(Y);
              }
              return B === void 0 && (B = setTimeout(q, h)), T;
            }
            var ee,
              Q,
              re,
              T,
              B,
              Y,
              X = 0,
              ne = !1,
              Se = !1,
              _e = !0;
            if (typeof y != "function") throw new TypeError(f);
            return (
              (h = s(h) || 0),
              a(E) &&
                ((ne = !!E.leading),
                (Se = "maxWait" in E),
                (re = Se ? P(s(E.maxWait) || 0, h) : re),
                (_e = "trailing" in E ? !!E.trailing : _e)),
              (H.cancel = O),
              (H.flush = M),
              H
            );
          }
          function a(y) {
            var h = typeof y > "u" ? "undefined" : d(y);
            return !!y && (h == "object" || h == "function");
          }
          function c(y) {
            return !!y && (typeof y > "u" ? "undefined" : d(y)) == "object";
          }
          function u(y) {
            return (
              (typeof y > "u" ? "undefined" : d(y)) == "symbol" ||
              (c(y) && k.call(y) == p)
            );
          }
          function s(y) {
            if (typeof y == "number") return y;
            if (u(y)) return v;
            if (a(y)) {
              var h = typeof y.valueOf == "function" ? y.valueOf() : y;
              y = a(h) ? h + "" : h;
            }
            if (typeof y != "string") return y === 0 ? y : +y;
            y = y.replace(_, "");
            var E = w.test(y);
            return E || S.test(y)
              ? A(y.slice(2), E ? 2 : 8)
              : m.test(y)
              ? v
              : +y;
          }
          var d =
              typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                ? function (y) {
                    return typeof y;
                  }
                : function (y) {
                    return y &&
                      typeof Symbol == "function" &&
                      y.constructor === Symbol &&
                      y !== Symbol.prototype
                      ? "symbol"
                      : typeof y;
                  },
            f = "Expected a function",
            v = NaN,
            p = "[object Symbol]",
            _ = /^\s+|\s+$/g,
            m = /^[-+]0x[0-9a-f]+$/i,
            w = /^0b[01]+$/i,
            S = /^0o[0-7]+$/i,
            A = parseInt,
            x =
              (typeof n > "u" ? "undefined" : d(n)) == "object" &&
              n &&
              n.Object === Object &&
              n,
            j =
              (typeof self > "u" ? "undefined" : d(self)) == "object" &&
              self &&
              self.Object === Object &&
              self,
            N = x || j || Function("return this")(),
            V = Object.prototype,
            k = V.toString,
            P = Math.max,
            U = Math.min,
            R = function () {
              return N.Date.now();
            };
          i.exports = r;
        }).call(
          t,
          (function () {
            return this;
          })()
        );
      },
      function (i, t) {
        function n(d) {
          var f = void 0,
            v = void 0;
          for (f = 0; f < d.length; f += 1)
            if (
              ((v = d[f]),
              (v.dataset && v.dataset.aos) || (v.children && n(v.children)))
            )
              return !0;
          return !1;
        }
        function r() {
          return (
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver
          );
        }
        function a() {
          return !!r();
        }
        function c(d, f) {
          var v = window.document,
            p = r(),
            _ = new p(u);
          (s = f),
            _.observe(v.documentElement, {
              childList: !0,
              subtree: !0,
              removedNodes: !0,
            });
        }
        function u(d) {
          d &&
            d.forEach(function (f) {
              var v = Array.prototype.slice.call(f.addedNodes),
                p = Array.prototype.slice.call(f.removedNodes),
                _ = v.concat(p);
              if (n(_)) return s();
            });
        }
        Object.defineProperty(t, "__esModule", {value: !0});
        var s = function () {};
        t.default = {isSupported: a, ready: c};
      },
      function (i, t) {
        function n(v, p) {
          if (!(v instanceof p))
            throw new TypeError("Cannot call a class as a function");
        }
        function r() {
          return navigator.userAgent || navigator.vendor || window.opera || "";
        }
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = (function () {
            function v(p, _) {
              for (var m = 0; m < _.length; m++) {
                var w = _[m];
                (w.enumerable = w.enumerable || !1),
                  (w.configurable = !0),
                  "value" in w && (w.writable = !0),
                  Object.defineProperty(p, w.key, w);
              }
            }
            return function (p, _, m) {
              return _ && v(p.prototype, _), m && v(p, m), p;
            };
          })(),
          c =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
          u =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          s =
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
          d =
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
          f = (function () {
            function v() {
              n(this, v);
            }
            return (
              a(v, [
                {
                  key: "phone",
                  value: function () {
                    var p = r();
                    return !(!c.test(p) && !u.test(p.substr(0, 4)));
                  },
                },
                {
                  key: "mobile",
                  value: function () {
                    var p = r();
                    return !(!s.test(p) && !d.test(p.substr(0, 4)));
                  },
                },
                {
                  key: "tablet",
                  value: function () {
                    return this.mobile() && !this.phone();
                  },
                },
              ]),
              v
            );
          })();
        t.default = new f();
      },
      function (i, t) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (a, c, u) {
            var s = a.node.getAttribute("data-aos-once");
            c > a.position
              ? a.node.classList.add("aos-animate")
              : typeof s < "u" &&
                (s === "false" || (!u && s !== "true")) &&
                a.node.classList.remove("aos-animate");
          },
          r = function (a, c) {
            var u = window.pageYOffset,
              s = window.innerHeight;
            a.forEach(function (d, f) {
              n(d, s + u, c);
            });
          };
        t.default = r;
      },
      function (i, t, n) {
        function r(s) {
          return s && s.__esModule ? s : {default: s};
        }
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(12),
          c = r(a),
          u = function (s, d) {
            return (
              s.forEach(function (f, v) {
                f.node.classList.add("aos-init"),
                  (f.position = (0, c.default)(f.node, d.offset));
              }),
              s
            );
          };
        t.default = u;
      },
      function (i, t, n) {
        function r(s) {
          return s && s.__esModule ? s : {default: s};
        }
        Object.defineProperty(t, "__esModule", {value: !0});
        var a = n(13),
          c = r(a),
          u = function (s, d) {
            var f = 0,
              v = 0,
              p = window.innerHeight,
              _ = {
                offset: s.getAttribute("data-aos-offset"),
                anchor: s.getAttribute("data-aos-anchor"),
                anchorPlacement: s.getAttribute("data-aos-anchor-placement"),
              };
            switch (
              (_.offset && !isNaN(_.offset) && (v = parseInt(_.offset)),
              _.anchor &&
                document.querySelectorAll(_.anchor) &&
                (s = document.querySelectorAll(_.anchor)[0]),
              (f = (0, c.default)(s).top),
              _.anchorPlacement)
            ) {
              case "top-bottom":
                break;
              case "center-bottom":
                f += s.offsetHeight / 2;
                break;
              case "bottom-bottom":
                f += s.offsetHeight;
                break;
              case "top-center":
                f += p / 2;
                break;
              case "bottom-center":
                f += p / 2 + s.offsetHeight;
                break;
              case "center-center":
                f += p / 2 + s.offsetHeight / 2;
                break;
              case "top-top":
                f += p;
                break;
              case "bottom-top":
                f += s.offsetHeight + p;
                break;
              case "center-top":
                f += s.offsetHeight / 2 + p;
            }
            return _.anchorPlacement || _.offset || isNaN(d) || (v = d), f + v;
          };
        t.default = u;
      },
      function (i, t) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (r) {
          for (
            var a = 0, c = 0;
            r && !isNaN(r.offsetLeft) && !isNaN(r.offsetTop);

          )
            (a += r.offsetLeft - (r.tagName != "BODY" ? r.scrollLeft : 0)),
              (c += r.offsetTop - (r.tagName != "BODY" ? r.scrollTop : 0)),
              (r = r.offsetParent);
          return {top: c, left: a};
        };
        t.default = n;
      },
      function (i, t) {
        Object.defineProperty(t, "__esModule", {value: !0});
        var n = function (r) {
          return (
            (r = r || document.querySelectorAll("[data-aos]")),
            Array.prototype.map.call(r, function (a) {
              return {node: a};
            })
          );
        };
        t.default = n;
      },
    ]);
  });
})(vo);
var yc = vo.exports;
const po = Io(yc);
const bc = [
    {
      text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
      avatar: fe.avatar[10],
      name: "John Doe",
      title: "Chief Digital Officer",
    },
    {
      text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
      avatar: fe.avatar[1],
      name: "Jean Doe",
      title: "Chief Digital Officer",
    },
    {
      text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
      avatar: fe.avatar[2],
      name: "Jena Doe",
      title: "Graphic Designer",
    },
    {
      text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
      avatar: fe.avatar[3],
      name: "Jovelin Doe",
      title: "Senior Graphic Designer",
    },
    {
      text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
      avatar: fe.avatar[4],
      name: "Jihan Doe",
    },
    {
      text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
      avatar: fe.avatar[6],
      name: "Jovelin Doe",
      title: "Senior Graphic Designer",
    },
    {
      text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
      avatar: fe.avatar[7],
      name: "John Doe",
      title: "Senior Graphic Designer",
    },
    {
      text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
      avatar: fe.avatar[9],
      name: "John Doe",
      title: "Chief Digital Officer",
    },
    {
      text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
      avatar: fe.avatar[8],
      name: "Jean Doe",
      title: "Chief Digital Officer",
    },
  ],
  wc = {
    components: {"title-main": gt, Splide: lo, SplideSlide: co},
    data() {
      return {
        loaded: !1,
        currentSlide: 0,
        testiContent: bc,
        settingsText: {
          pagination: !1,
          type: "fade",
          speed: 500,
          arrows: !1,
          updateOnMove: !0,
          direction: "ltr",
        },
        settingsAvatar: {
          pagination: !1,
          type: "loop",
          speed: 500,
          autoplay: !0,
          focus: "center",
          interval: 5e3,
          padding: "2px",
          perPage: 7,
          isNavigation: !0,
          perMove: 1,
          arrows: !1,
          direction: "ltr",
          breakpoints: {600: {perPage: 3}},
        },
      };
    },
    mounted() {
      (this.loaded = !0),
        setTimeout(() => {
          this.$vuetify.locale.isRtl
            ? ((this.settingsAvatar.direction = "rtl"),
              (this.settingsText.direction = "rtl"))
            : ((this.settingsAvatar.direction = "ltr"),
              (this.settingsText.direction = "ltr"));
        }, 100),
        po.init({once: !0});
    },
    methods: {
      handleSyncText(e) {
        this.$refs.sliderAvatar.go(e.index);
      },
      handleSyncAvatar(e) {
        this.$refs.sliderText.go(e.index);
      },
    },
  },
  Ec = (e) => (ge("data-v-ea1f0697"), (e = e()), ye(), e),
  Sc = {class: "root"},
  xc = {
    "data-aos": "fade-up",
    "data-aos-offset": "100",
    "data-aos-delay": "300",
    "data-aos-duration": "500",
  },
  Ac = {class: "carousel-wrap"},
  $c = {
    "data-aos": "fade-up",
    "data-aos-offset": "150",
    "data-aos-delay": "400",
    "data-aos-duration": "500",
  },
  Tc = {key: 0, class: "carousel-text"},
  Ic = {class: "item"},
  kc = {class: "content"},
  Oc = {class: "name"},
  Pc = {key: 0, class: "carousel-avatar"},
  Lc = {class: "item"},
  Nc = ["alt", "src"],
  Cc = Ec(() => l("div", {class: "deco-bg-bottom"}, null, -1));
function Dc(e, o, i, t, n, r) {
  const a = L("title-main"),
    c = L("splide-slide"),
    u = L("splide"),
    s = L("v-container"),
    d = L("v-avatar");
  return (
    z(),
    W("div", Sc, [
      l("div", null, [
        l("div", xc, [
          l("div", null, [
            g(
              a,
              {align: "center"},
              {
                default: b(() => [
                  le(Z(e.$t("mobileLanding.testimonial_title")), 1),
                ]),
                _: 1,
              }
            ),
          ]),
        ]),
        l("div", Ac, [
          l("div", $c, [
            l("div", null, [
              g(
                s,
                {class: "max-sm"},
                {
                  default: b(() => [
                    n.loaded
                      ? (z(),
                        W("div", Tc, [
                          g(
                            u,
                            {
                              options: n.settingsText,
                              class: "slider-text",
                              ref: "sliderText",
                              "onSplide:move": r.handleSyncText,
                            },
                            {
                              default: b(() => [
                                (z(!0),
                                W(
                                  et,
                                  null,
                                  tt(
                                    n.testiContent,
                                    (f, v) => (
                                      z(),
                                      xe(
                                        c,
                                        {key: v},
                                        {
                                          default: b(() => [
                                            l("div", Ic, [
                                              l("p", kc, Z(f.text), 1),
                                              l("p", Oc, [
                                                l("strong", null, Z(f.name), 1),
                                                le(" - " + Z(f.title), 1),
                                              ]),
                                            ]),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["options", "onSplide:move"]
                          ),
                        ]))
                      : ve("", !0),
                  ]),
                  _: 1,
                }
              ),
              n.loaded
                ? (z(),
                  W("div", Pc, [
                    g(
                      u,
                      {
                        class: "slider-avatar",
                        ref: "sliderAvatar",
                        options: n.settingsAvatar,
                        "onSplide:move": r.handleSyncAvatar,
                      },
                      {
                        default: b(() => [
                          (z(!0),
                          W(
                            et,
                            null,
                            tt(
                              n.testiContent,
                              (f, v) => (
                                z(),
                                xe(
                                  c,
                                  {key: v},
                                  {
                                    default: b(() => [
                                      l("div", Lc, [
                                        g(
                                          d,
                                          {class: "avatar"},
                                          {
                                            default: b(() => [
                                              l(
                                                "img",
                                                {alt: f.name, src: f.avatar},
                                                null,
                                                8,
                                                Nc
                                              ),
                                            ]),
                                            _: 2,
                                          },
                                          1024
                                        ),
                                      ]),
                                    ]),
                                    _: 2,
                                  },
                                  1024
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      ["options", "onSplide:move"]
                    ),
                  ]))
                : ve("", !0),
            ]),
          ]),
        ]),
        Cc,
      ]),
    ])
  );
}
const Vc = se(wc, [
  ["render", Dc],
  ["__scopeId", "data-v-ea1f0697"],
]);
const Rc = {
    data() {
      return {loaded: !1};
    },
    mounted() {
      this.loaded = !0;
    },
  },
  zn = (e) => (ge("data-v-4609a352"), (e = e()), ye(), e),
  Mc = mn + "#main",
  Fc = hn + "#main",
  qc = yn + "#main",
  Uc = {class: "parallax-wrap"},
  jc = {key: 0, class: "inner-parallax extra-small"},
  zc = zn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "triangle"}, [l("use", {"xlink:href": Mc})])],
      -1
    )
  ),
  Bc = zn(() =>
    l(
      "div",
      {class: "figure"},
      [l("svg", {class: "circle"}, [l("use", {"xlink:href": Fc})])],
      -1
    )
  ),
  Gc = zn(() =>
    l(
      "div",
      {class: "figure"},
      [
        l("div", {class: "square-dot"}, [
          l("svg", {class: "dot-many-small"}, [l("use", {"xlink:href": qc})]),
        ]),
      ],
      -1
    )
  );
function Hc(e, o, i, t, n, r) {
  const a = L("scroll-parallax");
  return (
    z(),
    W("div", Uc, [
      n.loaded
        ? (z(),
          W("div", jc, [
            g(a, {speed: 0.3}, {default: b(() => [zc]), _: 1}),
            g(a, {speed: 0.2}, {default: b(() => [Bc]), _: 1}),
            g(a, {speed: 0.15}, {default: b(() => [Gc]), _: 1}),
          ]))
        : ve("", !0),
    ])
  );
}
const Wc = se(Rc, [
    ["render", Hc],
    ["__scopeId", "data-v-4609a352"],
  ]),
  Yc = "" + globalThis.__publicAssetsURL("images/mobile/faq.png");
const Xc = [
    {
      q: "Pellentesque ac bibendum tortor?",
      a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
    },
    {
      q: "In mi nulla, fringilla vestibulum?",
      a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ",
    },
    {
      q: "Quisque lacinia purus ut libero?",
      a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ",
    },
    {
      q: "Quisque ut metus sit amet augue?",
      a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ",
    },
    {
      q: "Pellentesque ac bibendum tortor?",
      a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. ",
    },
  ],
  Kc = {
    components: {ParallaxExtraSmall: Wc, "title-main": gt},
    data() {
      return {panel: 0, faqData: Xc};
    },
    computed: {
      isMobile() {
        return this.$vuetify.display.smAndDown;
      },
    },
  },
  Bn = (e) => (ge("data-v-3e33d4cb"), (e = e()), ye(), e),
  Jc = Si + "#main",
  Zc = {class: "root"},
  Qc = Bn(() => l("strong", null, " FAQ ", -1)),
  eu = {class: "illustration"},
  tu = Bn(() =>
    l("svg", {class: "deco-primary"}, [l("use", {"xlink:href": Jc})], -1)
  ),
  nu = Bn(() => l("img", {src: Yc, alt: "illustration"}, null, -1)),
  iu = {class: "accordion"},
  ou = {class: "heading"};
function au(e, o, i, t, n, r) {
  const a = L("title-main"),
    c = L("parallax-extra-small"),
    u = L("v-col"),
    s = L("v-expansion-panel-title"),
    d = L("v-expansion-panel-text"),
    f = L("v-expansion-panel"),
    v = L("v-expansion-panels"),
    p = L("v-row"),
    _ = L("v-container");
  return (
    z(),
    W("div", Zc, [
      g(
        _,
        {class: "fixed-width"},
        {
          default: b(() => [
            g(
              p,
              {class: "spacing6"},
              {
                default: b(() => [
                  g(
                    u,
                    {md: "6", class: "pa-6"},
                    {
                      default: b(() => [
                        g(
                          a,
                          {align: r.isMobile ? "center" : "left"},
                          {default: b(() => [Qc]), _: 1},
                          8,
                          ["align"]
                        ),
                        l(
                          "p",
                          {
                            class: Ce([
                              "text use-text-subtitle2",
                              [r.isMobile ? "text-center" : "text-left"],
                            ]),
                          },
                          Z(e.$t("mobileLanding.faq_subtitle")),
                          3
                        ),
                        l("div", eu, [tu, g(c), nu]),
                      ]),
                      _: 1,
                    }
                  ),
                  g(
                    u,
                    {md: "6", cols: "12", class: "pa-6"},
                    {
                      default: b(() => [
                        l("div", iu, [
                          g(
                            v,
                            {
                              modelValue: n.panel,
                              "onUpdate:modelValue":
                                o[0] || (o[0] = (m) => (n.panel = m)),
                              variant: "accordion",
                              "active-class": "expanded",
                            },
                            {
                              default: b(() => [
                                (z(!0),
                                W(
                                  et,
                                  null,
                                  tt(
                                    n.faqData,
                                    (m, w) => (
                                      z(),
                                      xe(
                                        f,
                                        {key: w, class: "paper"},
                                        {
                                          default: b(() => [
                                            g(
                                              s,
                                              {class: "content"},
                                              {
                                                default: b(() => [
                                                  l("p", ou, Z(m.q), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                            g(
                                              d,
                                              {class: "detail"},
                                              {
                                                default: b(() => [
                                                  l("p", null, Z(m.a), 1),
                                                ]),
                                                _: 2,
                                              },
                                              1024
                                            ),
                                          ]),
                                          _: 2,
                                        },
                                        1024
                                      )
                                    )
                                  ),
                                  128
                                )),
                              ]),
                              _: 1,
                            },
                            8,
                            ["modelValue"]
                          ),
                        ]),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            ),
          ]),
          _: 1,
        }
      ),
    ])
  );
}
const ru = se(Kc, [
  ["render", au],
  ["__scopeId", "data-v-3e33d4cb"],
]);
const su = {
    data() {
      return {
        logos: [
          "/images/logos/architect.png",
          "/images/logos/cloud.png",
          "/images/logos/coin.png",
          "/images/logos/mobile.png",
          "/images/logos/profile.png",
          "/images/logos/mobile.png",
        ],
      };
    },
    mounted() {
      po.init({once: !0});
    },
  },
  lu = {class: "text-center use-text-title2"},
  cu = {class: "root"},
  uu = {
    "data-aos": "fade-up",
    "data-aos-offset": "200",
    "data-aos-delay": "300",
    "data-aos-duration": "500",
  },
  du = ["src", "alt"];
function fu(e, o, i, t, n, r) {
  const a = L("v-container");
  return (
    z(),
    xe(
      a,
      {class: "fixed-width"},
      {
        default: b(() => [
          l("h4", lu, Z(e.$t("mobileLanding.company_title")), 1),
          l("div", cu, [
            l("div", uu, [
              l("div", null, [
                (z(!0),
                W(
                  et,
                  null,
                  tt(
                    n.logos,
                    (c, u) => (
                      z(),
                      W("img", {key: u, src: c, alt: "logo" + u}, null, 8, du)
                    )
                  ),
                  128
                )),
              ]),
            ]),
          ]),
        ]),
        _: 1,
      }
    )
  );
}
const _u = se(su, [
  ["render", fu],
  ["__scopeId", "data-v-b0b39382"],
]);
const vu = {
    props: {
      caption: {type: String, required: !0},
      text: {type: String, required: !0},
      img: {type: String, required: !0},
      type: {type: String, required: !0},
    },
  },
  pu = ["src"],
  mu = {class: "text"},
  hu = {class: "type caption"};
function gu(e, o, i, t, n, r) {
  const a = L("v-btn"),
    c = L("v-card");
  return (
    z(),
    W(
      "div",
      {class: Ce(["news", i.type])},
      [
        l("figure", null, [l("img", {src: i.img, alt: "thumb"}, null, 8, pu)]),
        g(
          c,
          {class: "desc"},
          {
            default: b(() => [
              l("div", mu, [
                l("p", hu, Z(i.caption), 1),
                l("p", null, Z(i.text), 1),
              ]),
              g(
                a,
                {text: "", class: "btn"},
                {default: b(() => [le(" Read more ")]), _: 1}
              ),
            ]),
            _: 1,
          }
        ),
      ],
      2
    )
  );
}
const yu = se(vu, [
  ["render", gu],
  ["__scopeId", "data-v-66987b93"],
]);
const bu = {
    components: {NewsCard: yu, ParallaxLarge: yi, "title-main": gt},
    data: () => ({imgAPI: fe}),
    computed: {
      isMobile() {
        return this.$vuetify.display.xsAndDown;
      },
    },
  },
  wu = (e) => (ge("data-v-cdd41e67"), (e = e()), ye(), e),
  Eu = {class: "root"},
  Su = wu(() => l("div", {class: "deco-bg-top"}, null, -1)),
  xu = {class: "parallax-event"},
  Au = {align: "center", class: "use-text-subtitle2"},
  $u = {class: "blog-wrap"};
function Tu(e, o, i, t, n, r) {
  const a = L("parallax-large"),
    c = L("title-main"),
    u = L("news-card"),
    s = L("v-col"),
    d = L("v-row"),
    f = L("v-container");
  return (
    z(),
    W("div", Eu, [
      Su,
      l("div", xu, [g(a)]),
      g(
        c,
        {align: "center"},
        {default: b(() => [le(Z(e.$t("mobileLanding.news_title")), 1)]), _: 1}
      ),
      l("p", Au, Z(e.$t("mobileLanding.news_desc")), 1),
      l("div", $u, [
        g(
          f,
          {class: "fixed-width"},
          {
            default: b(() => [
              g(
                d,
                {class: "spacing6 list-news"},
                {
                  default: b(() => [
                    g(
                      s,
                      {md: "6", cols: "12", class: "pa-6"},
                      {
                        default: b(() => [
                          g(
                            u,
                            {
                              img: e.imgAPI.photo[11],
                              type: "potrait",
                              caption: "headline",
                              text: "Sed imperdiet enim ligula, vitae viverra justo.",
                            },
                            null,
                            8,
                            ["img"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                    g(
                      s,
                      {md: "6", cols: "12", class: "pa-6"},
                      {
                        default: b(() => [
                          g(
                            u,
                            {
                              type: r.isMobile ? "potrait" : "landscape",
                              img: e.imgAPI.photo[1],
                              caption: "news",
                              text: "Sed imperdiet enim ligula, vitae viverra justo.",
                            },
                            null,
                            8,
                            ["type", "img"]
                          ),
                          g(
                            u,
                            {
                              type: r.isMobile ? "potrait" : "landscape",
                              img: e.imgAPI.photo[2],
                              caption: "news",
                              text: "Sed imperdiet enim ligula, vitae viverra justo.",
                            },
                            null,
                            8,
                            ["type", "img"]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  _: 1,
                }
              ),
            ]),
            _: 1,
          }
        ),
      ]),
    ])
  );
}
const Iu = se(bu, [
  ["render", Tu],
  ["__scopeId", "data-v-cdd41e67"],
]);
const ku = {components: {"footer-main": ko}},
  kt = (e) => (ge("data-v-2f909d91"), (e = e()), ye(), e),
  mo = uo + "#main",
  Ou = {class: "footer-deco"},
  Pu = kt(() =>
    l("svg", {class: "deco-top back"}, [l("use", {"xlink:href": mo})], -1)
  ),
  Lu = kt(() =>
    l("svg", {class: "deco-top cover"}, [l("use", {"xlink:href": mo})], -1)
  ),
  Nu = kt(() => l("div", {class: "decoration"}, null, -1)),
  Cu = {class: "action"},
  Du = {class: "use-text-subtitle"},
  Vu = {class: "btn-area"},
  Ru = kt(() => l("img", {src: wi, alt: "app store"}, null, -1)),
  Mu = kt(() => l("img", {src: Ei, alt: "play store"}, null, -1));
function Fu(e, o, i, t, n, r) {
  const a = gi,
    c = L("footer-main");
  return (
    z(),
    W("div", Ou, [
      Pu,
      Lu,
      Nu,
      l("div", Cu, [
        l("h4", Du, Z(e.$t("mobileLanding.footer_text")), 1),
        l("div", Vu, [
          g(a, {to: "/"}, {default: b(() => [Ru]), _: 1}),
          g(a, {to: "/"}, {default: b(() => [Mu]), _: 1}),
        ]),
      ]),
      g(c),
    ])
  );
}
const qu = se(ku, [
  ["render", Fu],
  ["__scopeId", "data-v-2f909d91"],
]);
let pi = 0;
function Nt(e, o, i) {
  return (pi += 1), {id: pi, name: e, url: o, offset: i};
}
const Uu = {
    data() {
      return {
        menu: Ie,
        show: !1,
        sections: {},
        activeMenu: "",
        menuList: [
          Nt(Ie[0], Ie[0]),
          Nt(Ie[1], Ie[1]),
          Nt(Ie[2], Ie[2]),
          Nt(Ie[3], Ie[3]),
        ],
      };
    },
    mounted() {
      const e = document.querySelectorAll(".scroll-nav-content > *");
      Array.prototype.forEach.call(e, (o) => {
        this.sections[o.id] = o.offsetTop || 0;
      });
    },
    methods: {
      handleScroll() {
        const o =
          (document.documentElement.scrollTop || document.body.scrollTop) + 100;
        Object.keys(this.sections).forEach((i) => {
          this.sections[i] <= o && (this.activeMenu = i);
        }),
          window.scrollY > 500 ? (this.show = !0) : (this.show = !1);
      },
    },
  },
  ju = (e) => (ge("data-v-c4b36b7a"), (e = e()), ye(), e),
  zu = {class: "section-nav"},
  Bu = ["href"],
  Gu = {class: "tooltip"},
  Hu = ju(() => l("span", {class: "tooltip"}, "To Top", -1));
function Wu(e, o, i, t, n, r) {
  const a = L("v-tooltip"),
    c = L("v-icon"),
    u = L("v-btn"),
    s = ln("smooth-scroll"),
    d = ln("scroll");
  return Ct(
    (z(),
    W(
      "div",
      {class: Ce([{show: n.show}, "page-nav"])},
      [
        l("nav", zu, [
          (z(!0),
          W(
            et,
            null,
            tt(n.menuList, (f, v) =>
              Ct(
                (z(),
                W(
                  "a",
                  {
                    key: v,
                    style: Oo({top: 30 * (n.menu.length - f.id) + "px"}),
                    href: "#" + f.url,
                    class: Ce({active: n.activeMenu === f.url}),
                  },
                  [
                    g(
                      a,
                      {"nudge-top": 5, location: "left"},
                      {
                        activator: b(({props: p}) => [
                          l(
                            "span",
                            Po(Lo(p)),
                            Z(e.$t("mobileLanding.header_" + f.name)),
                            17
                          ),
                        ]),
                        default: b(() => [
                          l(
                            "span",
                            Gu,
                            Z(e.$t("mobileLanding.header_" + f.name)),
                            1
                          ),
                        ]),
                        _: 2,
                      },
                      1024
                    ),
                  ],
                  14,
                  Bu
                )),
                [[s, {offset: -100}]]
              )
            ),
            128
          )),
        ]),
        g(
          a,
          {"nudge-top": 25, location: "left"},
          {
            activator: b(({props: f}) => [
              Ct(
                (z(),
                xe(
                  u,
                  No(
                    {
                      icon: "",
                      size: "large",
                      class: "fab anchor-link scrollactive-item",
                      href: "#home",
                      color: "primary",
                    },
                    f
                  ),
                  {
                    default: b(() => [
                      g(
                        c,
                        {class: "icon"},
                        {default: b(() => [le(" mdi-arrow-up ")]), _: 1}
                      ),
                    ]),
                    _: 2,
                  },
                  1040
                )),
                [[s]]
              ),
            ]),
            default: b(() => [Hu]),
            _: 1,
          }
        ),
      ],
      2
    )),
    [[d, r.handleScroll]]
  );
}
const Yu = se(Uu, [
  ["render", Wu],
  ["__scopeId", "data-v-c4b36b7a"],
]);
const Xu = Co(
    {
      components: {
        "main-header": Do,
        Banner: ya,
        Counter: Xa,
        Feature: Zr,
        Showcase: gc,
        Testimonials: Vc,
        CompanyLogo: _u,
        Faq: ru,
        NewsEvent: Iu,
        FooterWithDeco: qu,
        PageNav: Yu,
        Hidden: hi,
        Notification: Fo,
      },
      setup() {
        const e = Vo(),
          o = Yo("i18n_redirected"),
          t = "/" + Ro().fallbackLocale.value;
        pn(() => {
          const n =
            document.location.pathname === "/" ||
            document.location.pathname === t;
          o.value && n && e.push({path: `/${o.value}`});
        });
      },
      head() {
        return {title: Mo.mobile.name + " - Home Page"};
      },
    },
    "$PslAyef5YX"
  ),
  Ku = {class: "main-wrap"},
  Ju = {class: "container-wrap scroll-nav-content"},
  Zu = {id: "home"},
  Qu = {id: "counter"},
  ed = {id: "feature", class: "space-top"},
  td = {id: "showcase"},
  nd = {id: "testimonials"},
  id = {id: "faq", class: "space-top-short"},
  od = {class: "space-top-short"},
  ad = {class: "space-top-short"};
function rd(e, o, i, t, n, r) {
  const a = L("main-header"),
    c = L("banner"),
    u = L("counter"),
    s = L("feature"),
    d = L("showcase"),
    f = L("testimonials"),
    v = L("faq"),
    p = L("company-logo"),
    _ = L("news-event"),
    m = L("footer-with-deco"),
    w = L("page-nav"),
    S = L("hidden"),
    A = L("notification");
  return (
    z(),
    W("div", null, [
      l("div", Ku, [
        g(a),
        l("div", Ju, [
          l("section", Zu, [g(c)]),
          l("section", Qu, [g(u)]),
          l("section", ed, [g(s)]),
          l("section", td, [g(d)]),
          l("section", nd, [g(f)]),
          l("section", id, [g(v)]),
          l("section", od, [g(p)]),
          l("section", ad, [g(_)]),
        ]),
        g(m),
        g(S, {point: "mdDown"}, {default: b(() => [g(w)]), _: 1}),
        g(S, {point: "mdDown"}, {default: b(() => [g(A)]), _: 1}),
      ]),
    ])
  );
}
const ud = se(Xu, [
  ["render", rd],
  ["__scopeId", "data-v-5b683222"],
]);
export {ud as default};
