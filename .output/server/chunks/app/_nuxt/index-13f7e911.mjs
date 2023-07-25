import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { defineComponent, ref, watch, onMounted, onUnmounted, openBlock, createElementBlock, renderSlot, createElementVNode, onUpdated, inject, onBeforeUnmount, provide, computed, resolveComponent, createBlock, resolveDynamicComponent, withCtx, useSSRContext, createVNode, mergeProps, createTextVNode, toDisplayString, resolveDirective, createCommentVNode, Fragment, renderList, withDirectives } from 'vue';
import { _ as _export_sfc$1, g as defineNuxtComponent, H as Header, a as Hidden, h as useRouter$1, i as useI18n, b as brand, u as useRequestEvent, d as link, F as Footer, m as menu, f as useNuxtApp, e as __nuxt_component_0$2 } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { P as ParallaxLarge, _ as _imports_0$2, a as _imports_1$3 } from './Large-bad17fca.mjs';
import AOS from 'aos';
import { N as Notification } from './Notification-a410b0cf.mjs';
import { parse } from 'cookie-es';
import { setCookie, getCookie, deleteCookie } from 'h3';
import destr from 'destr';
import { isEqual } from 'ohash';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';
import 'unctx';
import 'vue-router';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'is-https';
import 'vue-easy-lightbox';
import 'vue3-mq';
import 'vue-kinesis';
import 'vue3-smooth-scroll';
import 'vue3-youtube';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var t = function() {
  return t = Object.assign || function(t2) {
    for (var i2, n = 1, s = arguments.length; n < s; n++)
      for (var a in i2 = arguments[n])
        Object.prototype.hasOwnProperty.call(i2, a) && (t2[a] = i2[a]);
    return t2;
  }, t.apply(this, arguments);
}, i = function() {
  function i2(i3, n, s) {
    var a = this;
    this.endVal = n, this.options = s, this.version = "2.6.2", this.defaults = { startVal: 0, decimalPlaces: 0, duration: 2, useEasing: true, useGrouping: true, useIndianSeparators: false, smartEasingThreshold: 999, smartEasingAmount: 333, separator: ",", decimal: ".", prefix: "", suffix: "", enableScrollSpy: false, scrollSpyDelay: 200, scrollSpyOnce: false }, this.finalEndVal = null, this.useEasing = true, this.countDown = false, this.error = "", this.startVal = 0, this.paused = true, this.once = false, this.count = function(t2) {
      a.startTime || (a.startTime = t2);
      var i4 = t2 - a.startTime;
      a.remaining = a.duration - i4, a.useEasing ? a.countDown ? a.frameVal = a.startVal - a.easingFn(i4, 0, a.startVal - a.endVal, a.duration) : a.frameVal = a.easingFn(i4, a.startVal, a.endVal - a.startVal, a.duration) : a.frameVal = a.startVal + (a.endVal - a.startVal) * (i4 / a.duration);
      var n2 = a.countDown ? a.frameVal < a.endVal : a.frameVal > a.endVal;
      a.frameVal = n2 ? a.endVal : a.frameVal, a.frameVal = Number(a.frameVal.toFixed(a.options.decimalPlaces)), a.printValue(a.frameVal), i4 < a.duration ? a.rAF = requestAnimationFrame(a.count) : a.finalEndVal !== null ? a.update(a.finalEndVal) : a.options.onCompleteCallback && a.options.onCompleteCallback();
    }, this.formatNumber = function(t2) {
      var i4, n2, s2, e, o = t2 < 0 ? "-" : "";
      i4 = Math.abs(t2).toFixed(a.options.decimalPlaces);
      var r = (i4 += "").split(".");
      if (n2 = r[0], s2 = r.length > 1 ? a.options.decimal + r[1] : "", a.options.useGrouping) {
        e = "";
        for (var l = 3, h = 0, u = 0, p = n2.length; u < p; ++u)
          a.options.useIndianSeparators && u === 4 && (l = 2, h = 1), u !== 0 && h % l == 0 && (e = a.options.separator + e), h++, e = n2[p - u - 1] + e;
        n2 = e;
      }
      return a.options.numerals && a.options.numerals.length && (n2 = n2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      }), s2 = s2.replace(/[0-9]/g, function(t3) {
        return a.options.numerals[+t3];
      })), o + a.options.prefix + n2 + s2 + a.options.suffix;
    }, this.easeOutExpo = function(t2, i4, n2, s2) {
      return n2 * (1 - Math.pow(2, -10 * t2 / s2)) * 1024 / 1023 + i4;
    }, this.options = t(t({}, this.defaults), s), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(n), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, this.options.separator === "" && (this.options.useGrouping = false), this.el = typeof i3 == "string" ? document.getElementById(i3) : i3, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined";
  }
  return i2.prototype.handleScroll = function(t2) {
    if (t2 && window && !t2.once) {
      var i3 = window.innerHeight + window.scrollY, n = t2.el.getBoundingClientRect(), s = n.top + window.pageYOffset, a = n.top + n.height + window.pageYOffset;
      a < i3 && a > window.scrollY && t2.paused ? (t2.paused = false, setTimeout(function() {
        return t2.start();
      }, t2.options.scrollSpyDelay), t2.options.scrollSpyOnce && (t2.once = true)) : (window.scrollY > a || s > i3) && !t2.paused && t2.reset();
    }
  }, i2.prototype.determineDirectionAndSmartEasing = function() {
    var t2 = this.finalEndVal ? this.finalEndVal : this.endVal;
    this.countDown = this.startVal > t2;
    var i3 = t2 - this.startVal;
    if (Math.abs(i3) > this.options.smartEasingThreshold && this.options.useEasing) {
      this.finalEndVal = t2;
      var n = this.countDown ? 1 : -1;
      this.endVal = t2 + n * this.options.smartEasingAmount, this.duration = this.duration / 2;
    } else
      this.endVal = t2, this.finalEndVal = null;
    this.finalEndVal !== null ? this.useEasing = false : this.useEasing = this.options.useEasing;
  }, i2.prototype.start = function(t2) {
    this.error || (t2 && (this.options.onCompleteCallback = t2), this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = false, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal));
  }, i2.prototype.pauseResume = function() {
    this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused;
  }, i2.prototype.reset = function() {
    cancelAnimationFrame(this.rAF), this.paused = true, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal);
  }, i2.prototype.update = function(t2) {
    cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t2), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal == null && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count));
  }, i2.prototype.printValue = function(t2) {
    var i3;
    if (this.el) {
      var n = this.formattingFn(t2);
      if ((i3 = this.options.plugin) === null || i3 === void 0 ? void 0 : i3.render)
        this.options.plugin.render(this.el, n);
      else if (this.el.tagName === "INPUT")
        this.el.value = n;
      else
        this.el.tagName === "text" || this.el.tagName === "tspan" ? this.el.textContent = n : this.el.innerHTML = n;
    }
  }, i2.prototype.ensureNumber = function(t2) {
    return typeof t2 == "number" && !isNaN(t2);
  }, i2.prototype.validateValue = function(t2) {
    var i3 = Number(t2);
    return this.ensureNumber(i3) ? i3 : (this.error = "[CountUp] invalid start or end value: ".concat(t2), null);
  }, i2.prototype.resetDuration = function() {
    this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration;
  }, i2;
}();
function useRaf(cb, delaySeconds = 1) {
  const rafId = ref(-1);
  let startTime;
  function count(timestamp) {
    if (!startTime)
      startTime = timestamp;
    const diff = timestamp - startTime;
    if (diff < delaySeconds * 1e3) {
      rafId.value = requestAnimationFrame(count);
    } else {
      cb();
    }
  }
  rafId.value = requestAnimationFrame(count);
  function cancel() {
    window.cancelAnimationFrame(rafId.value);
  }
  return { cancel };
}
const _hoisted_1$2 = { class: "countup-wrap" };
const __default__ = {
  name: "CountUp"
};
const _sfc_main$i = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: {
    endVal: null,
    startVal: { default: 0 },
    duration: { default: 2.5 },
    decimalPlaces: { default: 0 },
    autoplay: { type: Boolean, default: true },
    loop: { type: [Boolean, Number], default: false },
    delay: { default: 0 },
    options: { default: void 0 }
  },
  emits: ["init", "finished"],
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    let elRef = ref();
    let countUp = ref();
    let loopCount = 0;
    const finished = ref(false);
    let rafCtx;
    function initCountUp() {
      if (!elRef.value) {
        console.warn("[vue-countup-v3]", `elRef can't found`);
        return;
      }
      loopCount = 0;
      finished.value = false;
      const startVal = Number(props.startVal);
      const endVal = Number(props.endVal);
      const duration = Number(props.duration);
      countUp.value = new i(elRef.value, endVal, __spreadValues({
        startVal,
        duration,
        decimalPlaces: props.decimalPlaces
      }, props.options));
      if (countUp.value.error) {
        console.error("[vue-countup-v3]", countUp.value.error);
        return;
      }
      emits("init", countUp.value);
    }
    function startAnimation() {
      var _a;
      if (!countUp.value) {
        initCountUp();
      }
      (_a = countUp.value) == null ? void 0 : _a.start(_loop);
      loopCount++;
      function _loop() {
        const isTruely = typeof props.loop === "boolean" && props.loop;
        if (isTruely || props.loop > loopCount) {
          rafCtx = useRaf(() => {
            var _a2;
            (_a2 = countUp.value) == null ? void 0 : _a2.reset();
            startAnimation();
          }, props.delay);
        } else {
          finished.value = true;
        }
      }
    }
    function restart() {
      rafCtx == null ? void 0 : rafCtx.cancel();
      initCountUp();
      startAnimation();
    }
    watch([() => props.startVal, () => props.endVal], () => {
      if (props.autoplay) {
        restart();
      }
    });
    watch(finished, (flag) => {
      if (flag) {
        emits("finished");
      }
    });
    onMounted(() => {
      initCountUp();
      if (props.autoplay) {
        startAnimation();
      }
    });
    onUnmounted(() => {
      var _a;
      rafCtx == null ? void 0 : rafCtx.cancel();
      (_a = countUp.value) == null ? void 0 : _a.reset();
    });
    expose({
      init: initCountUp,
      restart
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "prefix"),
        createElementVNode("span", {
          ref_key: "elRef",
          ref: elRef
        }, null, 512),
        renderSlot(_ctx.$slots, "suffix")
      ]);
    };
  }
}));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
var CREATED = 1;
var MOUNTED = 2;
var IDLE = 3;
var MOVING = 4;
var SCROLLING = 5;
var DRAGGING = 6;
var DESTROYED = 7;
var STATES = {
  CREATED,
  MOUNTED,
  IDLE,
  MOVING,
  SCROLLING,
  DRAGGING,
  DESTROYED
};
function empty(array) {
  array.length = 0;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
var nextTick = setTimeout;
var noop = function noop2() {
};
function raf(func) {
  return requestAnimationFrame(func);
}
function typeOf(type, subject) {
  return typeof subject === type;
}
function isObject$1(subject) {
  return !isNull(subject) && typeOf("object", subject);
}
var isArray = Array.isArray;
var isFunction = apply(typeOf, "function");
var isString = apply(typeOf, "string");
var isUndefined = apply(typeOf, "undefined");
function isNull(subject) {
  return subject === null;
}
function isHTMLElement(subject) {
  try {
    return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
  } catch (e) {
    return false;
  }
}
function toArray(value) {
  return isArray(value) ? value : [value];
}
function forEach(values, iteratee) {
  toArray(values).forEach(iteratee);
}
function includes(array, value) {
  return array.indexOf(value) > -1;
}
function push(array, items) {
  array.push.apply(array, toArray(items));
  return array;
}
function toggleClass(elm, classes, add) {
  if (elm) {
    forEach(classes, function(name) {
      if (name) {
        elm.classList[add ? "add" : "remove"](name);
      }
    });
  }
}
function addClass(elm, classes) {
  toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children2) {
  forEach(children2, parent.appendChild.bind(parent));
}
function before(nodes, ref2) {
  forEach(nodes, function(node) {
    var parent = (ref2 || node).parentNode;
    if (parent) {
      parent.insertBefore(node, ref2);
    }
  });
}
function matches(elm, selector) {
  return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
  var children2 = parent ? slice(parent.children) : [];
  return selector ? children2.filter(function(child2) {
    return matches(child2, selector);
  }) : children2;
}
function child(parent, selector) {
  return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
var ownKeys = Object.keys;
function forOwn$1(object, iteratee, right) {
  if (object) {
    (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
      key !== "__proto__" && iteratee(object[key], key);
    });
  }
  return object;
}
function assign(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      object[key] = source[key];
    });
  });
  return object;
}
function merge$1(object) {
  slice(arguments, 1).forEach(function(source) {
    forOwn$1(source, function(value, key) {
      if (isArray(value)) {
        object[key] = value.slice();
      } else if (isObject$1(value)) {
        object[key] = merge$1({}, isObject$1(object[key]) ? object[key] : {}, value);
      } else {
        object[key] = value;
      }
    });
  });
  return object;
}
function omit(object, keys) {
  forEach(keys || ownKeys(object), function(key) {
    delete object[key];
  });
}
function removeAttribute(elms, attrs) {
  forEach(elms, function(elm) {
    forEach(attrs, function(attr) {
      elm && elm.removeAttribute(attr);
    });
  });
}
function setAttribute(elms, attrs, value) {
  if (isObject$1(attrs)) {
    forOwn$1(attrs, function(value2, name) {
      setAttribute(elms, name, value2);
    });
  } else {
    forEach(elms, function(elm) {
      isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
    });
  }
}
function create(tag, attrs, parent) {
  var elm = document.createElement(tag);
  if (attrs) {
    isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
  }
  parent && append(parent, elm);
  return elm;
}
function style(elm, prop, value) {
  if (isUndefined(value)) {
    return getComputedStyle(elm)[prop];
  }
  if (!isNull(value)) {
    elm.style[prop] = "" + value;
  }
}
function display(elm, display2) {
  style(elm, "display", display2);
}
function focus(elm) {
  elm["setActive"] && elm["setActive"]() || elm.focus({
    preventScroll: true
  });
}
function getAttribute(elm, attr) {
  return elm.getAttribute(attr);
}
function hasClass(elm, className) {
  return elm && elm.classList.contains(className);
}
function rect(target) {
  return target.getBoundingClientRect();
}
function remove(nodes) {
  forEach(nodes, function(node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  });
}
function parseHtml(html) {
  return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
  e.preventDefault();
  if (stopPropagation) {
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
}
function query(parent, selector) {
  return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
  return selector ? slice(parent.querySelectorAll(selector)) : [];
}
function removeClass(elm, classes) {
  toggleClass(elm, classes, false);
}
function timeOf(e) {
  return e.timeStamp;
}
function unit(value) {
  return isString(value) ? value : value ? value + "px" : "";
}
var PROJECT_CODE = "splide";
var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
function assert(condition, message) {
  if (!condition) {
    throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
  }
}
var min = Math.min, max = Math.max, floor = Math.floor, ceil = Math.ceil, abs = Math.abs;
function approximatelyEqual(x, y, epsilon) {
  return abs(x - y) < epsilon;
}
function between(number, x, y, exclusive) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
  var minimum = min(x, y);
  var maximum = max(x, y);
  return min(max(minimum, number), maximum);
}
function sign(x) {
  return +(x > 0) - +(x < 0);
}
function format(string, replacements) {
  forEach(replacements, function(replacement) {
    string = string.replace("%s", "" + replacement);
  });
  return string;
}
function pad(number) {
  return number < 10 ? "0" + number : "" + number;
}
var ids = {};
function uniqueId(prefix) {
  return "" + prefix + pad(ids[prefix] = (ids[prefix] || 0) + 1);
}
function EventBinder() {
  var listeners = [];
  function bind(targets, events, callback, options) {
    forEachEvent(targets, events, function(target, event, namespace) {
      var isEventTarget = "addEventListener" in target;
      var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
      isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
      listeners.push([target, event, namespace, callback, remover]);
    });
  }
  function unbind(targets, events, callback) {
    forEachEvent(targets, events, function(target, event, namespace) {
      listeners = listeners.filter(function(listener) {
        if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
          listener[4]();
          return false;
        }
        return true;
      });
    });
  }
  function dispatch(target, type, detail) {
    var e;
    var bubbles = true;
    if (typeof CustomEvent === "function") {
      e = new CustomEvent(type, {
        bubbles,
        detail
      });
    } else {
      e = document.createEvent("CustomEvent");
      e.initCustomEvent(type, bubbles, false, detail);
    }
    target.dispatchEvent(e);
    return e;
  }
  function forEachEvent(targets, events, iteratee) {
    forEach(targets, function(target) {
      target && forEach(events, function(events2) {
        events2.split(" ").forEach(function(eventNS) {
          var fragment = eventNS.split(".");
          iteratee(target, fragment[0], fragment[1]);
        });
      });
    });
  }
  function destroy() {
    listeners.forEach(function(data) {
      data[4]();
    });
    empty(listeners);
  }
  return {
    bind,
    unbind,
    dispatch,
    destroy
  };
}
var EVENT_MOUNTED = "mounted";
var EVENT_READY = "ready";
var EVENT_MOVE = "move";
var EVENT_MOVED = "moved";
var EVENT_CLICK = "click";
var EVENT_ACTIVE = "active";
var EVENT_INACTIVE = "inactive";
var EVENT_VISIBLE = "visible";
var EVENT_HIDDEN = "hidden";
var EVENT_REFRESH = "refresh";
var EVENT_UPDATED = "updated";
var EVENT_RESIZE = "resize";
var EVENT_RESIZED = "resized";
var EVENT_DRAG = "drag";
var EVENT_DRAGGING = "dragging";
var EVENT_DRAGGED = "dragged";
var EVENT_SCROLL = "scroll";
var EVENT_SCROLLED = "scrolled";
var EVENT_OVERFLOW = "overflow";
var EVENT_DESTROY = "destroy";
var EVENT_ARROWS_MOUNTED = "arrows:mounted";
var EVENT_ARROWS_UPDATED = "arrows:updated";
var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
var EVENT_PAGINATION_UPDATED = "pagination:updated";
var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
var EVENT_AUTOPLAY_PLAY = "autoplay:play";
var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
var EVENT_SLIDE_KEYDOWN = "sk";
var EVENT_SHIFTED = "sh";
var EVENT_END_INDEX_CHANGED = "ei";
function EventInterface(Splide2) {
  var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
  var binder = EventBinder();
  function on(events, callback) {
    binder.bind(bus, toArray(events).join(" "), function(e) {
      callback.apply(callback, isArray(e.detail) ? e.detail : []);
    });
  }
  function emit(event) {
    binder.dispatch(bus, event, slice(arguments, 1));
  }
  if (Splide2) {
    Splide2.event.on(EVENT_DESTROY, binder.destroy);
  }
  return assign(binder, {
    bus,
    on,
    off: apply(binder.unbind, bus),
    emit
  });
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
  var now = Date.now;
  var startTime;
  var rate = 0;
  var id;
  var paused = true;
  var count = 0;
  function update() {
    if (!paused) {
      rate = interval ? min((now() - startTime) / interval, 1) : 1;
      onUpdate && onUpdate(rate);
      if (rate >= 1) {
        onInterval();
        startTime = now();
        if (limit && ++count >= limit) {
          return pause();
        }
      }
      id = raf(update);
    }
  }
  function start(resume) {
    resume || cancel();
    startTime = now() - (resume ? rate * interval : 0);
    paused = false;
    id = raf(update);
  }
  function pause() {
    paused = true;
  }
  function rewind() {
    startTime = now();
    rate = 0;
    if (onUpdate) {
      onUpdate(rate);
    }
  }
  function cancel() {
    id && cancelAnimationFrame(id);
    rate = 0;
    id = 0;
    paused = true;
  }
  function set(time) {
    interval = time;
  }
  function isPaused() {
    return paused;
  }
  return {
    start,
    rewind,
    pause,
    cancel,
    set,
    isPaused
  };
}
function State(initialState) {
  var state = initialState;
  function set(value) {
    state = value;
  }
  function is(states) {
    return includes(toArray(states), state);
  }
  return {
    set,
    is
  };
}
function Throttle(func, duration) {
  var interval = RequestInterval(duration || 0, func, null, 1);
  return function() {
    interval.isPaused() && interval.start();
  };
}
function Media(Splide2, Components2, options) {
  var state = Splide2.state;
  var breakpoints = options.breakpoints || {};
  var reducedMotion = options.reducedMotion || {};
  var binder = EventBinder();
  var queries = [];
  function setup() {
    var isMin = options.mediaQuery === "min";
    ownKeys(breakpoints).sort(function(n, m) {
      return isMin ? +n - +m : +m - +n;
    }).forEach(function(key) {
      register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
    });
    register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
    update();
  }
  function destroy(completely) {
    if (completely) {
      binder.destroy();
    }
  }
  function register(options2, query2) {
    var queryList = matchMedia(query2);
    binder.bind(queryList, "change", update);
    queries.push([options2, queryList]);
  }
  function update() {
    var destroyed = state.is(DESTROYED);
    var direction = options.direction;
    var merged = queries.reduce(function(merged2, entry) {
      return merge$1(merged2, entry[1].matches ? entry[0] : {});
    }, {});
    omit(options);
    set(merged);
    if (options.destroy) {
      Splide2.destroy(options.destroy === "completely");
    } else if (destroyed) {
      destroy(true);
      Splide2.mount();
    } else {
      direction !== options.direction && Splide2.refresh();
    }
  }
  function reduce(enable) {
    if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
      enable ? merge$1(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
    }
  }
  function set(opts, base, notify) {
    merge$1(options, opts);
    base && merge$1(Object.getPrototypeOf(options), opts);
    if (notify || !state.is(CREATED)) {
      Splide2.emit(EVENT_UPDATED, options);
    }
  }
  return {
    setup,
    destroy,
    reduce,
    set
  };
}
var ARROW = "Arrow";
var ARROW_LEFT = ARROW + "Left";
var ARROW_RIGHT = ARROW + "Right";
var ARROW_UP = ARROW + "Up";
var ARROW_DOWN = ARROW + "Down";
var RTL = "rtl";
var TTB = "ttb";
var ORIENTATION_MAP = {
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: [ARROW_UP, ARROW_RIGHT],
  ArrowRight: [ARROW_DOWN, ARROW_LEFT]
};
function Direction(Splide2, Components2, options) {
  function resolve(prop, axisOnly, direction) {
    direction = direction || options.direction;
    var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
    return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
      var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
      return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
    });
  }
  function orient(value) {
    return value * (options.direction === RTL ? 1 : -1);
  }
  return {
    resolve,
    orient
  };
}
var ROLE = "role";
var TAB_INDEX = "tabindex";
var DISABLED = "disabled";
var ARIA_PREFIX = "aria-";
var ARIA_CONTROLS = ARIA_PREFIX + "controls";
var ARIA_CURRENT = ARIA_PREFIX + "current";
var ARIA_SELECTED = ARIA_PREFIX + "selected";
var ARIA_LABEL = ARIA_PREFIX + "label";
var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
var ARIA_LIVE = ARIA_PREFIX + "live";
var ARIA_BUSY = ARIA_PREFIX + "busy";
var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
var CLASS_PREFIX = PROJECT_CODE + "__";
var STATUS_CLASS_PREFIX = "is-";
var CLASS_ROOT = PROJECT_CODE;
var CLASS_TRACK = CLASS_PREFIX + "track";
var CLASS_LIST = CLASS_PREFIX + "list";
var CLASS_SLIDE = CLASS_PREFIX + "slide";
var CLASS_CLONE = CLASS_SLIDE + "--clone";
var CLASS_CONTAINER = CLASS_SLIDE + "__container";
var CLASS_ARROWS = CLASS_PREFIX + "arrows";
var CLASS_ARROW = CLASS_PREFIX + "arrow";
var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
var CLASS_PROGRESS = CLASS_PREFIX + "progress";
var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
var CLASS_SPINNER = CLASS_PREFIX + "spinner";
var CLASS_SR = CLASS_PREFIX + "sr";
var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
var CLASSES = {
  slide: CLASS_SLIDE,
  clone: CLASS_CLONE,
  arrows: CLASS_ARROWS,
  arrow: CLASS_ARROW,
  prev: CLASS_ARROW_PREV,
  next: CLASS_ARROW_NEXT,
  pagination: CLASS_PAGINATION,
  page: CLASS_PAGINATION_PAGE,
  spinner: CLASS_SPINNER
};
function closest(from, selector) {
  if (isFunction(from.closest)) {
    return from.closest(selector);
  }
  var elm = from;
  while (elm && elm.nodeType === 1) {
    if (matches(elm, selector)) {
      break;
    }
    elm = elm.parentElement;
  }
  return elm;
}
var FRICTION = 5;
var LOG_INTERVAL = 200;
var POINTER_DOWN_EVENTS = "touchstart mousedown";
var POINTER_MOVE_EVENTS = "touchmove mousemove";
var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
function Elements(Splide2, Components2, options) {
  var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
  var root = Splide2.root;
  var i18n = options.i18n;
  var elements = {};
  var slides = [];
  var rootClasses = [];
  var trackClasses = [];
  var track;
  var list;
  var isUsingKey;
  function setup() {
    collect();
    init();
    update();
  }
  function mount() {
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, setup);
    on(EVENT_UPDATED, update);
    bind(document, POINTER_DOWN_EVENTS + " keydown", function(e) {
      isUsingKey = e.type === "keydown";
    }, {
      capture: true
    });
    bind(root, "focusin", function() {
      toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
    });
  }
  function destroy(completely) {
    var attrs = ALL_ATTRIBUTES.concat("style");
    empty(slides);
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    removeAttribute([track, list], attrs);
    removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
  }
  function update() {
    removeClass(root, rootClasses);
    removeClass(track, trackClasses);
    rootClasses = getClasses(CLASS_ROOT);
    trackClasses = getClasses(CLASS_TRACK);
    addClass(root, rootClasses);
    addClass(track, trackClasses);
    setAttribute(root, ARIA_LABEL, options.label);
    setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
  }
  function collect() {
    track = find("." + CLASS_TRACK);
    list = child(track, "." + CLASS_LIST);
    assert(track && list, "A track/list element is missing.");
    push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
    forOwn$1({
      arrows: CLASS_ARROWS,
      pagination: CLASS_PAGINATION,
      prev: CLASS_ARROW_PREV,
      next: CLASS_ARROW_NEXT,
      bar: CLASS_PROGRESS_BAR,
      toggle: CLASS_TOGGLE
    }, function(className, key) {
      elements[key] = find("." + className);
    });
    assign(elements, {
      root,
      track,
      list,
      slides
    });
  }
  function init() {
    var id = root.id || uniqueId(PROJECT_CODE);
    var role = options.role;
    root.id = id;
    track.id = track.id || id + "-track";
    list.id = list.id || id + "-list";
    if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
      setAttribute(root, ROLE, role);
    }
    setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
    setAttribute(list, ROLE, "presentation");
  }
  function find(selector) {
    var elm = query(root, selector);
    return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
  }
  function getClasses(base) {
    return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
  }
  return assign(elements, {
    setup,
    mount,
    destroy
  });
}
var SLIDE = "slide";
var LOOP = "loop";
var FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
  var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
  var resolve = Components.Direction.resolve;
  var styles = getAttribute(slide, "style");
  var label = getAttribute(slide, ARIA_LABEL);
  var isClone = slideIndex > -1;
  var container = child(slide, "." + CLASS_CONTAINER);
  var destroyed;
  function mount() {
    if (!isClone) {
      slide.id = root.id + "-slide" + pad(index + 1);
      setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
      setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
      setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
    }
    listen();
  }
  function listen() {
    bind(slide, "click", apply(emit, EVENT_CLICK, self));
    bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
    on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
    on(EVENT_NAVIGATION_MOUNTED, initNavigation);
    if (updateOnMove) {
      on(EVENT_MOVE, onMove);
    }
  }
  function destroy() {
    destroyed = true;
    event.destroy();
    removeClass(slide, STATUS_CLASSES);
    removeAttribute(slide, ALL_ATTRIBUTES);
    setAttribute(slide, "style", styles);
    setAttribute(slide, ARIA_LABEL, label || "");
  }
  function initNavigation() {
    var controls = Splide2.splides.map(function(target) {
      var Slide2 = target.splide.Components.Slides.getAt(index);
      return Slide2 ? Slide2.slide.id : "";
    }).join(" ");
    setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
    setAttribute(slide, ARIA_CONTROLS, controls);
    setAttribute(slide, ROLE, slideFocus ? "button" : "");
    slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
  }
  function onMove() {
    if (!destroyed) {
      update();
    }
  }
  function update() {
    if (!destroyed) {
      var curr = Splide2.index;
      updateActivity();
      updateVisibility();
      toggleClass(slide, CLASS_PREV, index === curr - 1);
      toggleClass(slide, CLASS_NEXT, index === curr + 1);
    }
  }
  function updateActivity() {
    var active = isActive();
    if (active !== hasClass(slide, CLASS_ACTIVE)) {
      toggleClass(slide, CLASS_ACTIVE, active);
      setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
      emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
    }
  }
  function updateVisibility() {
    var visible = isVisible();
    var hidden = !visible && (!isActive() || isClone);
    if (!Splide2.state.is([MOVING, SCROLLING])) {
      setAttribute(slide, ARIA_HIDDEN, hidden || "");
    }
    setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
    if (slideFocus) {
      setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
    }
    if (visible !== hasClass(slide, CLASS_VISIBLE)) {
      toggleClass(slide, CLASS_VISIBLE, visible);
      emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
    }
    if (!visible && document.activeElement === slide) {
      var Slide2 = Components.Slides.getAt(Splide2.index);
      Slide2 && focus(Slide2.slide);
    }
  }
  function style$1(prop, value, useContainer) {
    style(useContainer && container || slide, prop, value);
  }
  function isActive() {
    var curr = Splide2.index;
    return curr === index || options.cloneStatus && curr === slideIndex;
  }
  function isVisible() {
    if (Splide2.is(FADE)) {
      return isActive();
    }
    var trackRect = rect(Components.Elements.track);
    var slideRect = rect(slide);
    var left = resolve("left", true);
    var right = resolve("right", true);
    return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
  }
  function isWithin(from, distance) {
    var diff = abs(from - index);
    if (!isClone && (options.rewind || Splide2.is(LOOP))) {
      diff = min(diff, Splide2.length - diff);
    }
    return diff <= distance;
  }
  var self = {
    index,
    slideIndex,
    slide,
    container,
    isClone,
    mount,
    destroy,
    update,
    style: style$1,
    isWithin
  };
  return self;
}
function Slides(Splide2, Components2, options) {
  var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
  var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
  var Slides2 = [];
  function mount() {
    init();
    on(EVENT_REFRESH, destroy);
    on(EVENT_REFRESH, init);
  }
  function init() {
    slides.forEach(function(slide, index) {
      register(slide, index, -1);
    });
  }
  function destroy() {
    forEach$1(function(Slide2) {
      Slide2.destroy();
    });
    empty(Slides2);
  }
  function update() {
    forEach$1(function(Slide2) {
      Slide2.update();
    });
  }
  function register(slide, index, slideIndex) {
    var object = Slide$1(Splide2, index, slideIndex, slide);
    object.mount();
    Slides2.push(object);
    Slides2.sort(function(Slide1, Slide2) {
      return Slide1.index - Slide2.index;
    });
  }
  function get(excludeClones) {
    return excludeClones ? filter(function(Slide2) {
      return !Slide2.isClone;
    }) : Slides2;
  }
  function getIn(page) {
    var Controller2 = Components2.Controller;
    var index = Controller2.toIndex(page);
    var max2 = Controller2.hasFocus() ? 1 : options.perPage;
    return filter(function(Slide2) {
      return between(Slide2.index, index, index + max2 - 1);
    });
  }
  function getAt(index) {
    return filter(index)[0];
  }
  function add(items, index) {
    forEach(items, function(slide) {
      if (isString(slide)) {
        slide = parseHtml(slide);
      }
      if (isHTMLElement(slide)) {
        var ref2 = slides[index];
        ref2 ? before(slide, ref2) : append(list, slide);
        addClass(slide, options.classes.slide);
        observeImages(slide, apply(emit, EVENT_RESIZE));
      }
    });
    emit(EVENT_REFRESH);
  }
  function remove$1(matcher) {
    remove(filter(matcher).map(function(Slide2) {
      return Slide2.slide;
    }));
    emit(EVENT_REFRESH);
  }
  function forEach$1(iteratee, excludeClones) {
    get(excludeClones).forEach(iteratee);
  }
  function filter(matcher) {
    return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
      return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
    });
  }
  function style2(prop, value, useContainer) {
    forEach$1(function(Slide2) {
      Slide2.style(prop, value, useContainer);
    });
  }
  function observeImages(elm, callback) {
    var images = queryAll(elm, "img");
    var length = images.length;
    if (length) {
      images.forEach(function(img) {
        bind(img, "load error", function() {
          if (!--length) {
            callback();
          }
        });
      });
    } else {
      callback();
    }
  }
  function getLength(excludeClones) {
    return excludeClones ? slides.length : Slides2.length;
  }
  function isEnough() {
    return Slides2.length > options.perPage;
  }
  return {
    mount,
    destroy,
    update,
    register,
    get,
    getIn,
    getAt,
    add,
    remove: remove$1,
    forEach: forEach$1,
    filter,
    style: style2,
    getLength,
    isEnough
  };
}
function Layout(Splide2, Components2, options) {
  var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
  var Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
  var getAt = Slides2.getAt, styleSlides = Slides2.style;
  var vertical;
  var rootRect;
  var overflow;
  function mount() {
    init();
    bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
    on([EVENT_UPDATED, EVENT_REFRESH], init);
    on(EVENT_RESIZE, resize);
  }
  function init() {
    vertical = options.direction === TTB;
    style(root, "maxWidth", unit(options.width));
    style(track, resolve("paddingLeft"), cssPadding(false));
    style(track, resolve("paddingRight"), cssPadding(true));
    resize(true);
  }
  function resize(force) {
    var newRect = rect(root);
    if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
      style(track, "height", cssTrackHeight());
      styleSlides(resolve("marginRight"), unit(options.gap));
      styleSlides("width", cssSlideWidth());
      styleSlides("height", cssSlideHeight(), true);
      rootRect = newRect;
      emit(EVENT_RESIZED);
      if (overflow !== (overflow = isOverflow())) {
        toggleClass(root, CLASS_OVERFLOW, overflow);
        emit(EVENT_OVERFLOW, overflow);
      }
    }
  }
  function cssPadding(right) {
    var padding = options.padding;
    var prop = resolve(right ? "right" : "left");
    return padding && unit(padding[prop] || (isObject$1(padding) ? 0 : padding)) || "0px";
  }
  function cssTrackHeight() {
    var height = "";
    if (vertical) {
      height = cssHeight();
      assert(height, "height or heightRatio is missing.");
      height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
    }
    return height;
  }
  function cssHeight() {
    return unit(options.height || rect(list).width * options.heightRatio);
  }
  function cssSlideWidth() {
    return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
  }
  function cssSlideHeight() {
    return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
  }
  function cssSlideSize() {
    var gap = unit(options.gap);
    return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
  }
  function listSize() {
    return rect(list)[resolve("width")];
  }
  function slideSize(index, withoutGap) {
    var Slide2 = getAt(index || 0);
    return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
  }
  function totalSize(index, withoutGap) {
    var Slide2 = getAt(index);
    if (Slide2) {
      var right = rect(Slide2.slide)[resolve("right")];
      var left = rect(list)[resolve("left")];
      return abs(right - left) + (withoutGap ? 0 : getGap());
    }
    return 0;
  }
  function sliderSize(withoutGap) {
    return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
  }
  function getGap() {
    var Slide2 = getAt(0);
    return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
  }
  function getPadding(right) {
    return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
  }
  function isOverflow() {
    return Splide2.is(FADE) || sliderSize(true) > listSize();
  }
  return {
    mount,
    resize,
    listSize,
    slideSize,
    sliderSize,
    totalSize,
    getPadding,
    isOverflow
  };
}
var MULTIPLIER = 2;
function Clones(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on;
  var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
  var resolve = Components2.Direction.resolve;
  var clones = [];
  var cloneCount;
  function mount() {
    on(EVENT_REFRESH, remount);
    on([EVENT_UPDATED, EVENT_RESIZE], observe);
    if (cloneCount = computeCloneCount()) {
      generate(cloneCount);
      Components2.Layout.resize(true);
    }
  }
  function remount() {
    destroy();
    mount();
  }
  function destroy() {
    remove(clones);
    empty(clones);
    event.destroy();
  }
  function observe() {
    var count = computeCloneCount();
    if (cloneCount !== count) {
      if (cloneCount < count || !count) {
        event.emit(EVENT_REFRESH);
      }
    }
  }
  function generate(count) {
    var slides = Slides2.get().slice();
    var length = slides.length;
    if (length) {
      while (slides.length < count) {
        push(slides, slides);
      }
      push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
        var isHead = index < count;
        var clone = cloneDeep(Slide2.slide, index);
        isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
        push(clones, clone);
        Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
      });
    }
  }
  function cloneDeep(elm, index) {
    var clone = elm.cloneNode(true);
    addClass(clone, options.classes.clone);
    clone.id = Splide2.root.id + "-clone" + pad(index + 1);
    return clone;
  }
  function computeCloneCount() {
    var clones2 = options.clones;
    if (!Splide2.is(LOOP)) {
      clones2 = 0;
    } else if (isUndefined(clones2)) {
      var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
      var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
      clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
    }
    return clones2;
  }
  return {
    mount,
    destroy
  };
}
function Move(Splide2, Components2, options) {
  var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
  var set = Splide2.state.set;
  var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
  var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
  var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
  var Transition;
  function mount() {
    Transition = Components2.Transition;
    on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
  }
  function reposition() {
    if (!Components2.Controller.isBusy()) {
      Components2.Scroll.cancel();
      jump(Splide2.index);
      Components2.Slides.update();
    }
  }
  function move(dest, index, prev, callback) {
    if (dest !== index && canShift(dest > prev)) {
      cancel();
      translate(shift(getPosition(), dest > prev), true);
    }
    set(MOVING);
    emit(EVENT_MOVE, index, prev, dest);
    Transition.start(index, function() {
      set(IDLE);
      emit(EVENT_MOVED, index, prev, dest);
      callback && callback();
    });
  }
  function jump(index) {
    translate(toPosition(index, true));
  }
  function translate(position, preventLoop) {
    if (!Splide2.is(FADE)) {
      var destination = preventLoop ? position : loop(position);
      style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
      position !== destination && emit(EVENT_SHIFTED);
    }
  }
  function loop(position) {
    if (Splide2.is(LOOP)) {
      var index = toIndex(position);
      var exceededMax = index > Components2.Controller.getEnd();
      var exceededMin = index < 0;
      if (exceededMin || exceededMax) {
        position = shift(position, exceededMax);
      }
    }
    return position;
  }
  function shift(position, backwards) {
    var excess = position - getLimit(backwards);
    var size = sliderSize();
    position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
    return position;
  }
  function cancel() {
    translate(getPosition(), true);
    Transition.cancel();
  }
  function toIndex(position) {
    var Slides2 = Components2.Slides.get();
    var index = 0;
    var minDistance = Infinity;
    for (var i = 0; i < Slides2.length; i++) {
      var slideIndex = Slides2[i].index;
      var distance = abs(toPosition(slideIndex, true) - position);
      if (distance <= minDistance) {
        minDistance = distance;
        index = slideIndex;
      } else {
        break;
      }
    }
    return index;
  }
  function toPosition(index, trimming) {
    var position = orient(totalSize(index - 1) - offset(index));
    return trimming ? trim(position) : position;
  }
  function getPosition() {
    var left = resolve("left");
    return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
  }
  function trim(position) {
    if (options.trimSpace && Splide2.is(SLIDE)) {
      position = clamp(position, 0, orient(sliderSize(true) - listSize()));
    }
    return position;
  }
  function offset(index) {
    var focus2 = options.focus;
    return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
  }
  function getLimit(max2) {
    return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
  }
  function canShift(backwards) {
    var shifted = orient(shift(getPosition(), backwards));
    return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
  }
  function exceededLimit(max2, position) {
    position = isUndefined(position) ? getPosition() : position;
    var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
    var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
    return exceededMin || exceededMax;
  }
  return {
    mount,
    move,
    jump,
    translate,
    shift,
    cancel,
    toIndex,
    toPosition,
    getPosition,
    getLimit,
    exceededLimit,
    reposition
  };
}
function Controller(Splide2, Components2, options) {
  var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
  var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
  var omitEnd = options.omitEnd;
  var isLoop = Splide2.is(LOOP);
  var isSlide = Splide2.is(SLIDE);
  var getNext = apply(getAdjacent, false);
  var getPrev = apply(getAdjacent, true);
  var currIndex = options.start || 0;
  var endIndex;
  var prevIndex = currIndex;
  var slideCount;
  var perMove;
  var perPage;
  function mount() {
    init();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
    on(EVENT_RESIZED, onResized);
  }
  function init() {
    slideCount = getLength(true);
    perMove = options.perMove;
    perPage = options.perPage;
    endIndex = getEnd();
    var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
    if (index !== currIndex) {
      currIndex = index;
      Move2.reposition();
    }
  }
  function onResized() {
    if (endIndex !== getEnd()) {
      emit(EVENT_END_INDEX_CHANGED);
    }
  }
  function go(control, allowSameIndex, callback) {
    if (!isBusy()) {
      var dest = parse(control);
      var index = loop(dest);
      if (index > -1 && (allowSameIndex || index !== currIndex)) {
        setIndex(index);
        Move2.move(dest, index, prevIndex, callback);
      }
    }
  }
  function scroll(destination, duration, snap, callback) {
    Components2.Scroll.scroll(destination, duration, snap, function() {
      var index = loop(Move2.toIndex(getPosition()));
      setIndex(omitEnd ? min(index, endIndex) : index);
      callback && callback();
    });
  }
  function parse(control) {
    var index = currIndex;
    if (isString(control)) {
      var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
      if (indicator === "+" || indicator === "-") {
        index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
      } else if (indicator === ">") {
        index = number ? toIndex(+number) : getNext(true);
      } else if (indicator === "<") {
        index = getPrev(true);
      }
    } else {
      index = isLoop ? control : clamp(control, 0, endIndex);
    }
    return index;
  }
  function getAdjacent(prev, destination) {
    var number = perMove || (hasFocus() ? 1 : perPage);
    var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
    if (dest === -1 && isSlide) {
      if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
        return prev ? 0 : endIndex;
      }
    }
    return destination ? dest : loop(dest);
  }
  function computeDestIndex(dest, from, snapPage) {
    if (isEnough() || hasFocus()) {
      var index = computeMovableDestIndex(dest);
      if (index !== dest) {
        from = dest;
        dest = index;
        snapPage = false;
      }
      if (dest < 0 || dest > endIndex) {
        if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
          dest = toIndex(toPage(dest));
        } else {
          if (isLoop) {
            dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
          } else if (options.rewind) {
            dest = dest < 0 ? endIndex : 0;
          } else {
            dest = -1;
          }
        }
      } else {
        if (snapPage && dest !== from) {
          dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
        }
      }
    } else {
      dest = -1;
    }
    return dest;
  }
  function computeMovableDestIndex(dest) {
    if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
      var position = getPosition();
      while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
        dest < currIndex ? --dest : ++dest;
      }
    }
    return dest;
  }
  function loop(index) {
    return isLoop ? (index + slideCount) % slideCount || 0 : index;
  }
  function getEnd() {
    var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
    while (omitEnd && end-- > 0) {
      if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
        end++;
        break;
      }
    }
    return clamp(end, 0, slideCount - 1);
  }
  function toIndex(page) {
    return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
  }
  function toPage(index) {
    return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
  }
  function toDest(destination) {
    var closest2 = Move2.toIndex(destination);
    return isSlide ? clamp(closest2, 0, endIndex) : closest2;
  }
  function setIndex(index) {
    if (index !== currIndex) {
      prevIndex = currIndex;
      currIndex = index;
    }
  }
  function getIndex(prev) {
    return prev ? prevIndex : currIndex;
  }
  function hasFocus() {
    return !isUndefined(options.focus) || options.isNavigation;
  }
  function isBusy() {
    return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
  }
  return {
    mount,
    go,
    scroll,
    getNext,
    getPrev,
    getAdjacent,
    getEnd,
    setIndex,
    getIndex,
    toIndex,
    toPage,
    toDest,
    hasFocus,
    isBusy
  };
}
var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
var SIZE = 40;
function Arrows(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, bind = event.bind, emit = event.emit;
  var classes = options.classes, i18n = options.i18n;
  var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var placeholder = Elements2.arrows, track = Elements2.track;
  var wrapper = placeholder;
  var prev = Elements2.prev;
  var next = Elements2.next;
  var created;
  var wrapperClasses;
  var arrows = {};
  function mount() {
    init();
    on(EVENT_UPDATED, remount);
  }
  function remount() {
    destroy();
    mount();
  }
  function init() {
    var enabled = options.arrows;
    if (enabled && !(prev && next)) {
      createArrows();
    }
    if (prev && next) {
      assign(arrows, {
        prev,
        next
      });
      display(wrapper, enabled ? "" : "none");
      addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
      if (enabled) {
        listen();
        update();
        setAttribute([prev, next], ARIA_CONTROLS, track.id);
        emit(EVENT_ARROWS_MOUNTED, prev, next);
      }
    }
  }
  function destroy() {
    event.destroy();
    removeClass(wrapper, wrapperClasses);
    if (created) {
      remove(placeholder ? [prev, next] : wrapper);
      prev = next = null;
    } else {
      removeAttribute([prev, next], ALL_ATTRIBUTES);
    }
  }
  function listen() {
    on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
    bind(next, "click", apply(go, ">"));
    bind(prev, "click", apply(go, "<"));
  }
  function go(control) {
    Controller2.go(control, true);
  }
  function createArrows() {
    wrapper = placeholder || create("div", classes.arrows);
    prev = createArrow(true);
    next = createArrow(false);
    created = true;
    append(wrapper, [prev, next]);
    !placeholder && before(wrapper, track);
  }
  function createArrow(prev2) {
    var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
    return parseHtml(arrow);
  }
  function update() {
    if (prev && next) {
      var index = Splide2.index;
      var prevIndex = Controller2.getPrev();
      var nextIndex = Controller2.getNext();
      var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
      var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
      prev.disabled = prevIndex < 0;
      next.disabled = nextIndex < 0;
      setAttribute(prev, ARIA_LABEL, prevLabel);
      setAttribute(next, ARIA_LABEL, nextLabel);
      emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
  }
  return {
    arrows,
    mount,
    destroy,
    update
  };
}
var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
function Autoplay(Splide2, Components2, options) {
  var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
  var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
  var isPaused = interval.isPaused;
  var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
  var autoplay = options.autoplay;
  var hovered;
  var focused;
  var stopped = autoplay === "pause";
  function mount() {
    if (autoplay) {
      listen();
      toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
      stopped || play();
      update();
    }
  }
  function listen() {
    if (options.pauseOnHover) {
      bind(root, "mouseenter mouseleave", function(e) {
        hovered = e.type === "mouseenter";
        autoToggle();
      });
    }
    if (options.pauseOnFocus) {
      bind(root, "focusin focusout", function(e) {
        focused = e.type === "focusin";
        autoToggle();
      });
    }
    if (toggle) {
      bind(toggle, "click", function() {
        stopped ? play() : pause(true);
      });
    }
    on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
    on(EVENT_MOVE, onMove);
  }
  function play() {
    if (isPaused() && Components2.Slides.isEnough()) {
      interval.start(!options.resetProgress);
      focused = hovered = stopped = false;
      update();
      emit(EVENT_AUTOPLAY_PLAY);
    }
  }
  function pause(stop) {
    if (stop === void 0) {
      stop = true;
    }
    stopped = !!stop;
    update();
    if (!isPaused()) {
      interval.pause();
      emit(EVENT_AUTOPLAY_PAUSE);
    }
  }
  function autoToggle() {
    if (!stopped) {
      hovered || focused ? pause(false) : play();
    }
  }
  function update() {
    if (toggle) {
      toggleClass(toggle, CLASS_ACTIVE, !stopped);
      setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
    }
  }
  function onAnimationFrame(rate) {
    var bar = Elements2.bar;
    bar && style(bar, "width", rate * 100 + "%");
    emit(EVENT_AUTOPLAY_PLAYING, rate);
  }
  function onMove(index) {
    var Slide2 = Components2.Slides.getAt(index);
    interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
  }
  return {
    mount,
    destroy: interval.cancel,
    play,
    pause,
    isPaused
  };
}
function Cover(Splide2, Components2, options) {
  var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
  function mount() {
    if (options.cover) {
      on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
      on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
    }
  }
  function cover(cover2) {
    Components2.Slides.forEach(function(Slide2) {
      var img = child(Slide2.container || Slide2.slide, "img");
      if (img && img.src) {
        toggle(cover2, img, Slide2);
      }
    });
  }
  function toggle(cover2, img, Slide2) {
    Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
    display(img, cover2 ? "none" : "");
  }
  return {
    mount,
    destroy: apply(cover, false)
  };
}
var BOUNCE_DIFF_THRESHOLD = 10;
var BOUNCE_DURATION = 600;
var FRICTION_FACTOR = 0.6;
var BASE_VELOCITY = 1.5;
var MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
  var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
  var set = Splide2.state.set;
  var Move2 = Components2.Move;
  var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
  var isSlide = Splide2.is(SLIDE);
  var interval;
  var callback;
  var friction = 1;
  function mount() {
    on(EVENT_MOVE, clear);
    on([EVENT_UPDATED, EVENT_REFRESH], cancel);
  }
  function scroll(destination, duration, snap, onScrolled, noConstrain) {
    var from = getPosition();
    clear();
    if (snap && (!isSlide || !exceededLimit())) {
      var size = Components2.Layout.sliderSize();
      var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
      destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
    }
    var noDistance = approximatelyEqual(from, destination, 1);
    friction = 1;
    duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
    callback = onScrolled;
    interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
    set(SCROLLING);
    emit(EVENT_SCROLL);
    interval.start();
  }
  function onEnd() {
    set(IDLE);
    callback && callback();
    emit(EVENT_SCROLLED);
  }
  function update(from, to, noConstrain, rate) {
    var position = getPosition();
    var target = from + (to - from) * easing(rate);
    var diff = (target - position) * friction;
    translate(position + diff);
    if (isSlide && !noConstrain && exceededLimit()) {
      friction *= FRICTION_FACTOR;
      if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
        scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
      }
    }
  }
  function clear() {
    if (interval) {
      interval.cancel();
    }
  }
  function cancel() {
    if (interval && !interval.isPaused()) {
      clear();
      onEnd();
    }
  }
  function easing(t) {
    var easingFunc = options.easingFunc;
    return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
  }
  return {
    mount,
    destroy: clear,
    scroll,
    cancel
  };
}
var SCROLL_LISTENER_OPTIONS = {
  passive: false,
  capture: true
};
function Drag(Splide2, Components2, options) {
  var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
  var state = Splide2.state;
  var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
  var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
  var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
  var basePosition;
  var baseEvent;
  var prevBaseEvent;
  var isFree;
  var dragging;
  var exceeded = false;
  var clickPrevented;
  var disabled;
  var target;
  function mount() {
    bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
    bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
    bind(track, "click", onClick, {
      capture: true
    });
    bind(track, "dragstart", prevent);
    on([EVENT_MOUNTED, EVENT_UPDATED], init);
  }
  function init() {
    var drag = options.drag;
    disable(!drag);
    isFree = drag === "free";
  }
  function onPointerDown(e) {
    clickPrevented = false;
    if (!disabled) {
      var isTouch = isTouchEvent(e);
      if (isDraggable(e.target) && (isTouch || !e.button)) {
        if (!Controller2.isBusy()) {
          target = isTouch ? track : window;
          dragging = state.is([MOVING, SCROLLING]);
          prevBaseEvent = null;
          bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
          bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
          Move2.cancel();
          Scroll2.cancel();
          save(e);
        } else {
          prevent(e, true);
        }
      }
    }
  }
  function onPointerMove(e) {
    if (!state.is(DRAGGING)) {
      state.set(DRAGGING);
      emit(EVENT_DRAG);
    }
    if (e.cancelable) {
      if (dragging) {
        Move2.translate(basePosition + constrain(diffCoord(e)));
        var expired = diffTime(e) > LOG_INTERVAL;
        var hasExceeded = exceeded !== (exceeded = exceededLimit());
        if (expired || hasExceeded) {
          save(e);
        }
        clickPrevented = true;
        emit(EVENT_DRAGGING);
        prevent(e);
      } else if (isSliderDirection(e)) {
        dragging = shouldStart(e);
        prevent(e);
      }
    }
  }
  function onPointerUp(e) {
    if (state.is(DRAGGING)) {
      state.set(IDLE);
      emit(EVENT_DRAGGED);
    }
    if (dragging) {
      move(e);
      prevent(e);
    }
    unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
    unbind(target, POINTER_UP_EVENTS, onPointerUp);
    dragging = false;
  }
  function onClick(e) {
    if (!disabled && clickPrevented) {
      prevent(e, true);
    }
  }
  function save(e) {
    prevBaseEvent = baseEvent;
    baseEvent = e;
    basePosition = getPosition();
  }
  function move(e) {
    var velocity = computeVelocity(e);
    var destination = computeDestination(velocity);
    var rewind = options.rewind && options.rewindByDrag;
    reduce(false);
    if (isFree) {
      Controller2.scroll(destination, 0, options.snap);
    } else if (Splide2.is(FADE)) {
      Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
    } else if (Splide2.is(SLIDE) && exceeded && rewind) {
      Controller2.go(exceededLimit(true) ? ">" : "<");
    } else {
      Controller2.go(Controller2.toDest(destination), true);
    }
    reduce(true);
  }
  function shouldStart(e) {
    var thresholds = options.dragMinThreshold;
    var isObj = isObject$1(thresholds);
    var mouse = isObj && thresholds.mouse || 0;
    var touch = (isObj ? thresholds.touch : +thresholds) || 10;
    return abs(diffCoord(e)) > (isTouchEvent(e) ? touch : mouse);
  }
  function isSliderDirection(e) {
    return abs(diffCoord(e)) > abs(diffCoord(e, true));
  }
  function computeVelocity(e) {
    if (Splide2.is(LOOP) || !exceeded) {
      var time = diffTime(e);
      if (time && time < LOG_INTERVAL) {
        return diffCoord(e) / time;
      }
    }
    return 0;
  }
  function computeDestination(velocity) {
    return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
  }
  function diffCoord(e, orthogonal) {
    return coordOf(e, orthogonal) - coordOf(getBaseEvent(e), orthogonal);
  }
  function diffTime(e) {
    return timeOf(e) - timeOf(getBaseEvent(e));
  }
  function getBaseEvent(e) {
    return baseEvent === e && prevBaseEvent || baseEvent;
  }
  function coordOf(e, orthogonal) {
    return (isTouchEvent(e) ? e.changedTouches[0] : e)["page" + resolve(orthogonal ? "Y" : "X")];
  }
  function constrain(diff) {
    return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
  }
  function isDraggable(target2) {
    var noDrag = options.noDrag;
    return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
  }
  function isTouchEvent(e) {
    return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
  }
  function isDragging() {
    return dragging;
  }
  function disable(value) {
    disabled = value;
  }
  return {
    mount,
    disable,
    isDragging
  };
}
var NORMALIZATION_MAP = {
  Spacebar: " ",
  Right: ARROW_RIGHT,
  Left: ARROW_LEFT,
  Up: ARROW_UP,
  Down: ARROW_DOWN
};
function normalizeKey(key) {
  key = isString(key) ? key : key.key;
  return NORMALIZATION_MAP[key] || key;
}
var KEYBOARD_EVENT = "keydown";
function Keyboard(Splide2, Components2, options) {
  var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
  var root = Splide2.root;
  var resolve = Components2.Direction.resolve;
  var target;
  var disabled;
  function mount() {
    init();
    on(EVENT_UPDATED, destroy);
    on(EVENT_UPDATED, init);
    on(EVENT_MOVE, onMove);
  }
  function init() {
    var keyboard = options.keyboard;
    if (keyboard) {
      target = keyboard === "global" ? window : root;
      bind(target, KEYBOARD_EVENT, onKeydown);
    }
  }
  function destroy() {
    unbind(target, KEYBOARD_EVENT);
  }
  function disable(value) {
    disabled = value;
  }
  function onMove() {
    var _disabled = disabled;
    disabled = true;
    nextTick(function() {
      disabled = _disabled;
    });
  }
  function onKeydown(e) {
    if (!disabled) {
      var key = normalizeKey(e);
      if (key === resolve(ARROW_LEFT)) {
        Splide2.go("<");
      } else if (key === resolve(ARROW_RIGHT)) {
        Splide2.go(">");
      }
    }
  }
  return {
    mount,
    destroy,
    disable
  };
}
var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
function LazyLoad(Splide2, Components2, options) {
  var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
  var isSequential = options.lazyLoad === "sequential";
  var events = [EVENT_MOVED, EVENT_SCROLLED];
  var entries = [];
  function mount() {
    if (options.lazyLoad) {
      init();
      on(EVENT_REFRESH, init);
    }
  }
  function init() {
    empty(entries);
    register();
    if (isSequential) {
      loadNext();
    } else {
      off(events);
      on(events, check);
      check();
    }
  }
  function register() {
    Components2.Slides.forEach(function(Slide2) {
      queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
        var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
        var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
        if (src !== img.src || srcset !== img.srcset) {
          var className = options.classes.spinner;
          var parent = img.parentElement;
          var spinner = child(parent, "." + className) || create("span", className, parent);
          entries.push([img, Slide2, spinner]);
          img.src || display(img, "none");
        }
      });
    });
  }
  function check() {
    entries = entries.filter(function(data) {
      var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
      return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
    });
    entries.length || off(events);
  }
  function load(data) {
    var img = data[0];
    addClass(data[1].slide, CLASS_LOADING);
    bind(img, "load error", apply(onLoad, data));
    setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
    setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
    removeAttribute(img, SRC_DATA_ATTRIBUTE);
    removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
  }
  function onLoad(data, e) {
    var img = data[0], Slide2 = data[1];
    removeClass(Slide2.slide, CLASS_LOADING);
    if (e.type !== "error") {
      remove(data[2]);
      display(img, "");
      emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
      emit(EVENT_RESIZE);
    }
    isSequential && loadNext();
  }
  function loadNext() {
    entries.length && load(entries.shift());
  }
  return {
    mount,
    destroy: apply(empty, entries),
    check
  };
}
function Pagination(Splide2, Components2, options) {
  var event = EventInterface(Splide2);
  var on = event.on, emit = event.emit, bind = event.bind;
  var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
  var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
  var resolve = Components2.Direction.resolve;
  var placeholder = Elements2.pagination;
  var items = [];
  var list;
  var paginationClasses;
  function mount() {
    destroy();
    on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
    var enabled = options.pagination;
    placeholder && display(placeholder, enabled ? "" : "none");
    if (enabled) {
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
      createPagination();
      update();
      emit(EVENT_PAGINATION_MOUNTED, {
        list,
        items
      }, getAt(Splide2.index));
    }
  }
  function destroy() {
    if (list) {
      remove(placeholder ? slice(list.children) : list);
      removeClass(list, paginationClasses);
      empty(items);
      list = null;
    }
    event.destroy();
  }
  function createPagination() {
    var length = Splide2.length;
    var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
    var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
    list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
    addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
    setAttribute(list, ROLE, "tablist");
    setAttribute(list, ARIA_LABEL, i18n.select);
    setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
    for (var i = 0; i < max2; i++) {
      var li = create("li", null, list);
      var button = create("button", {
        class: classes.page,
        type: "button"
      }, li);
      var controls = Slides2.getIn(i).map(function(Slide2) {
        return Slide2.slide.id;
      });
      var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
      bind(button, "click", apply(onClick, i));
      if (options.paginationKeyboard) {
        bind(button, "keydown", apply(onKeydown, i));
      }
      setAttribute(li, ROLE, "presentation");
      setAttribute(button, ROLE, "tab");
      setAttribute(button, ARIA_CONTROLS, controls.join(" "));
      setAttribute(button, ARIA_LABEL, format(text, i + 1));
      setAttribute(button, TAB_INDEX, -1);
      items.push({
        li,
        button,
        page: i
      });
    }
  }
  function onClick(page) {
    go(">" + page, true);
  }
  function onKeydown(page, e) {
    var length = items.length;
    var key = normalizeKey(e);
    var dir = getDirection();
    var nextPage = -1;
    if (key === resolve(ARROW_RIGHT, false, dir)) {
      nextPage = ++page % length;
    } else if (key === resolve(ARROW_LEFT, false, dir)) {
      nextPage = (--page + length) % length;
    } else if (key === "Home") {
      nextPage = 0;
    } else if (key === "End") {
      nextPage = length - 1;
    }
    var item = items[nextPage];
    if (item) {
      focus(item.button);
      go(">" + nextPage);
      prevent(e, true);
    }
  }
  function getDirection() {
    return options.paginationDirection || options.direction;
  }
  function getAt(index) {
    return items[Controller2.toPage(index)];
  }
  function update() {
    var prev = getAt(getIndex(true));
    var curr = getAt(getIndex());
    if (prev) {
      var button = prev.button;
      removeClass(button, CLASS_ACTIVE);
      removeAttribute(button, ARIA_SELECTED);
      setAttribute(button, TAB_INDEX, -1);
    }
    if (curr) {
      var _button = curr.button;
      addClass(_button, CLASS_ACTIVE);
      setAttribute(_button, ARIA_SELECTED, true);
      setAttribute(_button, TAB_INDEX, "");
    }
    emit(EVENT_PAGINATION_UPDATED, {
      list,
      items
    }, prev, curr);
  }
  return {
    items,
    mount,
    destroy,
    getAt,
    update
  };
}
var TRIGGER_KEYS = [" ", "Enter"];
function Sync(Splide2, Components2, options) {
  var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
  var events = [];
  function mount() {
    Splide2.splides.forEach(function(target) {
      if (!target.isParent) {
        sync(Splide2, target.splide);
        sync(target.splide, Splide2);
      }
    });
    if (isNavigation) {
      navigate();
    }
  }
  function destroy() {
    events.forEach(function(event) {
      event.destroy();
    });
    empty(events);
  }
  function remount() {
    destroy();
    mount();
  }
  function sync(splide, target) {
    var event = EventInterface(splide);
    event.on(EVENT_MOVE, function(index, prev, dest) {
      target.go(target.is(LOOP) ? dest : index);
    });
    events.push(event);
  }
  function navigate() {
    var event = EventInterface(Splide2);
    var on = event.on;
    on(EVENT_CLICK, onClick);
    on(EVENT_SLIDE_KEYDOWN, onKeydown);
    on([EVENT_MOUNTED, EVENT_UPDATED], update);
    events.push(event);
    event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
  }
  function update() {
    setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
  }
  function onClick(Slide2) {
    Splide2.go(Slide2.index);
  }
  function onKeydown(Slide2, e) {
    if (includes(TRIGGER_KEYS, normalizeKey(e))) {
      onClick(Slide2);
      prevent(e);
    }
  }
  return {
    setup: apply(Components2.Media.set, {
      slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
    }, true),
    mount,
    destroy,
    remount
  };
}
function Wheel(Splide2, Components2, options) {
  var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
  var lastTime = 0;
  function mount() {
    if (options.wheel) {
      bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
    }
  }
  function onWheel(e) {
    if (e.cancelable) {
      var deltaY = e.deltaY;
      var backwards = deltaY < 0;
      var timeStamp = timeOf(e);
      var _min = options.wheelMinThreshold || 0;
      var sleep = options.wheelSleep || 0;
      if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
        Splide2.go(backwards ? "<" : ">");
        lastTime = timeStamp;
      }
      shouldPrevent(backwards) && prevent(e);
    }
  }
  function shouldPrevent(backwards) {
    return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
  }
  return {
    mount
  };
}
var SR_REMOVAL_DELAY = 90;
function Live(Splide2, Components2, options) {
  var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
  var track = Components2.Elements.track;
  var enabled = options.live && !options.isNavigation;
  var sr = create("span", CLASS_SR);
  var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
  function mount() {
    if (enabled) {
      disable(!Components2.Autoplay.isPaused());
      setAttribute(track, ARIA_ATOMIC, true);
      sr.textContent = "\u2026";
      on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
      on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
      on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
    }
  }
  function toggle(active) {
    setAttribute(track, ARIA_BUSY, active);
    if (active) {
      append(track, sr);
      interval.start();
    } else {
      remove(sr);
      interval.cancel();
    }
  }
  function destroy() {
    removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
    remove(sr);
  }
  function disable(disabled) {
    if (enabled) {
      setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
    }
  }
  return {
    mount,
    disable,
    destroy
  };
}
var ComponentConstructors = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Media,
  Direction,
  Elements,
  Slides,
  Layout,
  Clones,
  Move,
  Controller,
  Arrows,
  Autoplay,
  Cover,
  Scroll,
  Drag,
  Keyboard,
  LazyLoad,
  Pagination,
  Sync,
  Wheel,
  Live
});
var I18N = {
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
  slideLabel: "%s of %s"
};
var DEFAULTS = {
  type: "slide",
  role: "region",
  speed: 400,
  perPage: 1,
  cloneStatus: true,
  arrows: true,
  pagination: true,
  paginationKeyboard: true,
  interval: 5e3,
  pauseOnHover: true,
  pauseOnFocus: true,
  resetProgress: true,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: true,
  direction: "ltr",
  trimSpace: true,
  focusableNodes: "a, button, textarea, input, select, iframe",
  live: true,
  classes: CLASSES,
  i18n: I18N,
  reducedMotion: {
    speed: 0,
    rewindSpeed: 0,
    autoplay: "pause"
  }
};
function Fade(Splide2, Components2, options) {
  var Slides2 = Components2.Slides;
  function mount() {
    EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
  }
  function init() {
    Slides2.forEach(function(Slide2) {
      Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
    });
  }
  function start(index, done) {
    Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
    nextTick(done);
  }
  return {
    mount,
    start,
    cancel: noop
  };
}
function Slide(Splide2, Components2, options) {
  var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
  var list = Components2.Elements.list;
  var transition = apply(style, list, "transition");
  var endCallback;
  function mount() {
    EventInterface(Splide2).bind(list, "transitionend", function(e) {
      if (e.target === list && endCallback) {
        cancel();
        endCallback();
      }
    });
  }
  function start(index, done) {
    var destination = Move2.toPosition(index, true);
    var position = Move2.getPosition();
    var speed = getSpeed(index);
    if (abs(destination - position) >= 1 && speed >= 1) {
      if (options.useScroll) {
        Scroll2.scroll(destination, speed, false, done);
      } else {
        transition("transform " + speed + "ms " + options.easing);
        Move2.translate(destination, true);
        endCallback = done;
      }
    } else {
      Move2.jump(index);
      done();
    }
  }
  function cancel() {
    transition("");
    Scroll2.cancel();
  }
  function getSpeed(index) {
    var rewindSpeed = options.rewindSpeed;
    if (Splide2.is(SLIDE) && rewindSpeed) {
      var prev = Controller2.getIndex(true);
      var end = Controller2.getEnd();
      if (prev === 0 && index >= end || prev >= end && index === 0) {
        return rewindSpeed;
      }
    }
    return options.speed;
  }
  return {
    mount,
    start,
    cancel
  };
}
var _Splide = /* @__PURE__ */ function() {
  function _Splide2(target, options) {
    this.event = EventInterface();
    this.Components = {};
    this.state = State(CREATED);
    this.splides = [];
    this._o = {};
    this._E = {};
    var root = isString(target) ? query(document, target) : target;
    assert(root, root + " is invalid.");
    this.root = root;
    options = merge$1({
      label: getAttribute(root, ARIA_LABEL) || "",
      labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
    }, DEFAULTS, _Splide2.defaults, options || {});
    try {
      merge$1(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
    } catch (e) {
      assert(false, "Invalid JSON");
    }
    this._o = Object.create(merge$1({}, options));
  }
  var _proto = _Splide2.prototype;
  _proto.mount = function mount(Extensions, Transition) {
    var _this = this;
    var state = this.state, Components2 = this.Components;
    assert(state.is([CREATED, DESTROYED]), "Already mounted!");
    state.set(CREATED);
    this._C = Components2;
    this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
    this._E = Extensions || this._E;
    var Constructors = assign({}, ComponentConstructors, this._E, {
      Transition: this._T
    });
    forOwn$1(Constructors, function(Component, key) {
      var component = Component(_this, Components2, _this._o);
      Components2[key] = component;
      component.setup && component.setup();
    });
    forOwn$1(Components2, function(component) {
      component.mount && component.mount();
    });
    this.emit(EVENT_MOUNTED);
    addClass(this.root, CLASS_INITIALIZED);
    state.set(IDLE);
    this.emit(EVENT_READY);
    return this;
  };
  _proto.sync = function sync(splide) {
    this.splides.push({
      splide
    });
    splide.splides.push({
      splide: this,
      isParent: true
    });
    if (this.state.is(IDLE)) {
      this._C.Sync.remount();
      splide.Components.Sync.remount();
    }
    return this;
  };
  _proto.go = function go(control) {
    this._C.Controller.go(control);
    return this;
  };
  _proto.on = function on(events, callback) {
    this.event.on(events, callback);
    return this;
  };
  _proto.off = function off(events) {
    this.event.off(events);
    return this;
  };
  _proto.emit = function emit(event) {
    var _this$event;
    (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
    return this;
  };
  _proto.add = function add(slides, index) {
    this._C.Slides.add(slides, index);
    return this;
  };
  _proto.remove = function remove2(matcher) {
    this._C.Slides.remove(matcher);
    return this;
  };
  _proto.is = function is(type) {
    return this._o.type === type;
  };
  _proto.refresh = function refresh() {
    this.emit(EVENT_REFRESH);
    return this;
  };
  _proto.destroy = function destroy(completely) {
    if (completely === void 0) {
      completely = true;
    }
    var event = this.event, state = this.state;
    if (state.is(CREATED)) {
      EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
    } else {
      forOwn$1(this._C, function(component) {
        component.destroy && component.destroy(completely);
      }, true);
      event.emit(EVENT_DESTROY);
      event.destroy();
      completely && empty(this.splides);
      state.set(DESTROYED);
    }
    return this;
  };
  _createClass(_Splide2, [{
    key: "options",
    get: function get() {
      return this._o;
    },
    set: function set(options) {
      this._C.Media.set(options, true, true);
    }
  }, {
    key: "length",
    get: function get() {
      return this._C.Slides.getLength(true);
    }
  }, {
    key: "index",
    get: function get() {
      return this._C.Controller.getIndex();
    }
  }]);
  return _Splide2;
}();
var Splide$1 = _Splide;
Splide$1.defaults = {};
Splide$1.STATES = STATES;
const EVENTS = [
  EVENT_ACTIVE,
  EVENT_ARROWS_MOUNTED,
  EVENT_ARROWS_UPDATED,
  EVENT_AUTOPLAY_PAUSE,
  EVENT_AUTOPLAY_PLAY,
  EVENT_AUTOPLAY_PLAYING,
  EVENT_CLICK,
  EVENT_DESTROY,
  EVENT_DRAG,
  EVENT_DRAGGED,
  EVENT_DRAGGING,
  EVENT_HIDDEN,
  EVENT_INACTIVE,
  EVENT_LAZYLOAD_LOADED,
  EVENT_MOUNTED,
  EVENT_MOVE,
  EVENT_MOVED,
  EVENT_NAVIGATION_MOUNTED,
  EVENT_PAGINATION_MOUNTED,
  EVENT_PAGINATION_UPDATED,
  EVENT_REFRESH,
  EVENT_RESIZE,
  EVENT_RESIZED,
  EVENT_SCROLL,
  EVENT_SCROLLED,
  EVENT_UPDATED,
  EVENT_VISIBLE
];
const SPLIDE_INJECTION_KEY = "splide";
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
const _sfc_main$2$1 = defineComponent({
  name: "SplideTrack",
  setup() {
    onUpdated(() => {
      var _a;
      const splide = inject(SPLIDE_INJECTION_KEY);
      (_a = splide == null ? void 0 : splide.value) == null ? void 0 : _a.refresh();
    });
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "splide__track" };
const _hoisted_2 = { class: "splide__list" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("ul", _hoisted_2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]);
}
const SplideTrack = /* @__PURE__ */ _export_sfc(_sfc_main$2$1, [["render", _sfc_render$2]]);
const _sfc_main$1$1 = defineComponent({
  name: "Splide",
  emits: EVENTS.map((event) => `splide:${event}`),
  components: { SplideTrack },
  props: {
    tag: {
      default: "div",
      type: String
    },
    options: {
      default: {},
      type: Object
    },
    extensions: Object,
    transition: Function,
    hasTrack: {
      default: true,
      type: Boolean
    }
  },
  setup(props, context) {
    const splide = ref();
    const root = ref();
    onMounted(() => {
      if (root.value) {
        splide.value = new Splide$1(root.value, props.options);
        bind(splide.value);
        splide.value.mount(props.extensions, props.transition);
      }
    });
    onBeforeUnmount(() => {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.destroy();
    });
    watch(() => merge({}, props.options), (options) => {
      if (splide.value) {
        splide.value.options = options;
      }
    }, { deep: true });
    provide(SPLIDE_INJECTION_KEY, splide);
    const index = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.index) || 0;
    });
    const length = computed(() => {
      var _a;
      return ((_a = splide.value) == null ? void 0 : _a.length) || 0;
    });
    function go(control) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.go(control);
    }
    function sync(target) {
      var _a;
      (_a = splide.value) == null ? void 0 : _a.sync(target);
    }
    function bind(splide2) {
      EVENTS.forEach((event) => {
        splide2.on(event, (...args) => {
          context.emit(`splide:${event}`, splide2, ...args);
        });
      });
    }
    return {
      splide,
      root,
      index,
      length,
      go,
      sync
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SplideTrack = resolveComponent("SplideTrack");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
    class: "splide",
    ref: "root"
  }, {
    default: withCtx(() => [
      _ctx.hasTrack ? (openBlock(), createBlock(_component_SplideTrack, { key: 0 }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      })) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ]),
    _: 3
  }, 512);
}
const Splide = /* @__PURE__ */ _export_sfc(_sfc_main$1$1, [["render", _sfc_render$1]]);
const _sfc_main$h = defineComponent({
  name: "SplideSlide"
});
const _hoisted_1 = { class: "splide__slide" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", _hoisted_1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SplideSlide = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render]]);

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a2;
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = ref((_a2 = cookies[name]) != null ? _a2 : (_a = opts.default) == null ? void 0 : _a.call(opts));
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!isEqual(cookie.value, cookies[name])) {
        writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  var _a;
  {
    return parse(((_a = useRequestEvent()) == null ? void 0 : _a.node.req.headers.cookie) || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}
const imgAPI = {
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
    "/images/avatars/pp_boy5.svg"
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
    "https://via.placeholder.com/640x425/c4cdff/757575"
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
    ""
  ]
};
const _imports_1$2 = "" + publicAssetsURL("images/mobile/app-store.png");
const _imports_2$1 = "" + publicAssetsURL("images/mobile/play-store.png");
const _sfc_main$g = {
  components: {
    Hidden
  },
  data() {
    return {
      link,
      imgAPI
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    }
  },
  mounted() {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "/scripts/particles-spray.js";
    document.body.appendChild(script);
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hidden = resolveComponent("hidden");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_nuxt_link = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-591c188d><div class="background" data-v-591c188d><div class="gradient" data-v-591c188d><div class="deco-wave" data-v-591c188d></div>`);
  _push(ssrRenderComponent(_component_hidden, { point: "smDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="deco-line" data-v-591c188d${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "deco-line" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="deco-inner" data-v-591c188d><canvas id="particle_art_mobile" width="500" height="700" data-v-591c188d></canvas></div></div></div>`);
  _push(ssrRenderComponent(_component_v_container, {
    class: { fixed: $options.isDesktop }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "7",
                cols: "12",
                class: "px-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text" data-v-591c188d${_scopeId3}><h3 class="use-text-title" data-v-591c188d${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.banner_title"))} <strong data-v-591c188d${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.banner_titlestrong"))}</strong></h3><h5 class="use-text-subtitle" data-v-591c188d${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.banner_desc"))}</h5><div class="btn-area" data-v-591c188d${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_1$2)} alt="app store" data-v-591c188d${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_1$2,
                              alt: "app store"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", _imports_2$1)} alt="play store" data-v-591c188d${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: _imports_2$1,
                              alt: "play store"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<div id="watched_counter" data-v-591c188d${_scopeId3}></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text" }, [
                        createVNode("h3", { class: "use-text-title" }, [
                          createTextVNode(toDisplayString(_ctx.$t("mobileLanding.banner_title")) + " ", 1),
                          createVNode("strong", null, toDisplayString(_ctx.$t("mobileLanding.banner_titlestrong")), 1)
                        ]),
                        createVNode("h5", { class: "use-text-subtitle" }, toDisplayString(_ctx.$t("mobileLanding.banner_desc")), 1),
                        createVNode("div", { class: "btn-area" }, [
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_1$2,
                                alt: "app store"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_nuxt_link, { to: "/" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: _imports_2$1,
                                alt: "play store"
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("div", { id: "watched_counter" })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "5",
                cols: "12",
                class: "px-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="decoration" data-v-591c188d${_scopeId3}><div class="phone-illustration" data-v-591c188d${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.mobile[0])} class="phone" alt="illustration" data-v-591c188d${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<img${ssrRenderAttr("src", $data.imgAPI.mobile[1])} class="widget-top fragment-fadeUp" alt="illustration" data-v-591c188d${_scopeId4}><img${ssrRenderAttr("src", $data.imgAPI.mobile[2])} class="widget-left fragment-fadeUp" alt="illustration" data-v-591c188d${_scopeId4}><img${ssrRenderAttr("src", $data.imgAPI.mobile[3])} class="widget-right fragment-fadeUp" alt="illustration" data-v-591c188d${_scopeId4}>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: $data.imgAPI.mobile[1],
                              class: "widget-top fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              src: $data.imgAPI.mobile[2],
                              class: "widget-left fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              src: $data.imgAPI.mobile[3],
                              class: "widget-right fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "decoration" }, [
                        createVNode("div", { class: "phone-illustration" }, [
                          createVNode("img", {
                            src: $data.imgAPI.mobile[0],
                            class: "phone",
                            alt: "illustration"
                          }, null, 8, ["src"]),
                          createVNode(_component_hidden, { point: "mdDown" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: $data.imgAPI.mobile[1],
                                class: "widget-top fragment-fadeUp",
                                alt: "illustration"
                              }, null, 8, ["src"]),
                              createVNode("img", {
                                src: $data.imgAPI.mobile[2],
                                class: "widget-left fragment-fadeUp",
                                alt: "illustration"
                              }, null, 8, ["src"]),
                              createVNode("img", {
                                src: $data.imgAPI.mobile[3],
                                class: "widget-right fragment-fadeUp",
                                alt: "illustration"
                              }, null, 8, ["src"])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "7",
                  cols: "12",
                  class: "px-3"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode("h3", { class: "use-text-title" }, [
                        createTextVNode(toDisplayString(_ctx.$t("mobileLanding.banner_title")) + " ", 1),
                        createVNode("strong", null, toDisplayString(_ctx.$t("mobileLanding.banner_titlestrong")), 1)
                      ]),
                      createVNode("h5", { class: "use-text-subtitle" }, toDisplayString(_ctx.$t("mobileLanding.banner_desc")), 1),
                      createVNode("div", { class: "btn-area" }, [
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_1$2,
                              alt: "app store"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_nuxt_link, { to: "/" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: _imports_2$1,
                              alt: "play store"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { id: "watched_counter" })
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "5",
                  cols: "12",
                  class: "px-3"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "decoration" }, [
                      createVNode("div", { class: "phone-illustration" }, [
                        createVNode("img", {
                          src: $data.imgAPI.mobile[0],
                          class: "phone",
                          alt: "illustration"
                        }, null, 8, ["src"]),
                        createVNode(_component_hidden, { point: "mdDown" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: $data.imgAPI.mobile[1],
                              class: "widget-top fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              src: $data.imgAPI.mobile[2],
                              class: "widget-left fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"]),
                            createVNode("img", {
                              src: $data.imgAPI.mobile[3],
                              class: "widget-right fragment-fadeUp",
                              alt: "illustration"
                            }, null, 8, ["src"])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "7",
                cols: "12",
                class: "px-3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "text" }, [
                    createVNode("h3", { class: "use-text-title" }, [
                      createTextVNode(toDisplayString(_ctx.$t("mobileLanding.banner_title")) + " ", 1),
                      createVNode("strong", null, toDisplayString(_ctx.$t("mobileLanding.banner_titlestrong")), 1)
                    ]),
                    createVNode("h5", { class: "use-text-subtitle" }, toDisplayString(_ctx.$t("mobileLanding.banner_desc")), 1),
                    createVNode("div", { class: "btn-area" }, [
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_1$2,
                            alt: "app store"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_nuxt_link, { to: "/" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: _imports_2$1,
                            alt: "play store"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { id: "watched_counter" })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "5",
                cols: "12",
                class: "px-3"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "decoration" }, [
                    createVNode("div", { class: "phone-illustration" }, [
                      createVNode("img", {
                        src: $data.imgAPI.mobile[0],
                        class: "phone",
                        alt: "illustration"
                      }, null, 8, ["src"]),
                      createVNode(_component_hidden, { point: "mdDown" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: $data.imgAPI.mobile[1],
                            class: "widget-top fragment-fadeUp",
                            alt: "illustration"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            src: $data.imgAPI.mobile[2],
                            class: "widget-left fragment-fadeUp",
                            alt: "illustration"
                          }, null, 8, ["src"]),
                          createVNode("img", {
                            src: $data.imgAPI.mobile[3],
                            class: "widget-right fragment-fadeUp",
                            alt: "illustration"
                          }, null, 8, ["src"])
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Banner/Banner.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc$1(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__scopeId", "data-v-591c188d"]]);
const _sfc_main$f = {
  components: {
    CountUp: _sfc_main$i
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const windowBound = wrapper.value.getBoundingClientRect();
      if (windowBound.top < offset) {
        visible.value = true;
      }
    }
    return {
      visible,
      runCounter,
      wrapper
    };
  },
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 200);
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_count_up = resolveComponent("count-up");
  const _directive_scroll = resolveDirective("scroll");
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "wrapper",
    class: "counter-wrap"
  }, _attrs, ssrGetDirectiveProps(_ctx, _directive_scroll, $setup.runCounter)))} data-v-0433cc49>`);
  _push(ssrRenderComponent(_component_v_container, { class: "max-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, {
          justify: "center",
          align: "center",
          class: "counter-inner spacing6"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="counter-item" data-v-0433cc49${_scopeId3}>`);
                    if ($data.loaded) {
                      _push4(`<div class="text" data-v-0433cc49${_scopeId3}><h3 class="use-text-title" data-v-0433cc49${_scopeId3}><span data-v-0433cc49${_scopeId3}>${ssrInterpolate(!$setup.visible ? 0 : "")} `);
                      if ($setup.visible) {
                        _push4(ssrRenderComponent(_component_count_up, {
                          "start-val": 0,
                          "end-val": 200,
                          options: { suffix: "M" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</span></h3><p class="use-text-subtitle" data-v-0433cc49${_scopeId3}><i class="ion-ios-cloud-download-outline" data-v-0433cc49${_scopeId3}></i> ${ssrInterpolate(_ctx.$t("mobileLanding.counter_downloads"))}</p></div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "counter-item" }, [
                        $data.loaded ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text"
                        }, [
                          createVNode("h3", { class: "use-text-title" }, [
                            createVNode("span", null, [
                              createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                              $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                                key: 0,
                                "start-val": 0,
                                "end-val": 200,
                                options: { suffix: "M" }
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "use-text-subtitle" }, [
                            createVNode("i", { class: "ion-ios-cloud-download-outline" }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_downloads")), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="counter-item" data-v-0433cc49${_scopeId3}>`);
                    if ($data.loaded) {
                      _push4(`<div class="text" data-v-0433cc49${_scopeId3}><h3 class="use-text-title" data-v-0433cc49${_scopeId3}><span data-v-0433cc49${_scopeId3}>${ssrInterpolate(!$setup.visible ? 0 : "")} `);
                      if ($setup.visible) {
                        _push4(ssrRenderComponent(_component_count_up, {
                          "start-val": 0,
                          "end-val": 480,
                          options: { prefix: "+", suffix: "M" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</span></h3><p class="use-text-subtitle" data-v-0433cc49${_scopeId3}><i class="ion-ios-checkmark-circle-outline" data-v-0433cc49${_scopeId3}></i> ${ssrInterpolate(_ctx.$t("mobileLanding.counter_transaction"))}</p></div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "counter-item" }, [
                        $data.loaded ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text"
                        }, [
                          createVNode("h3", { class: "use-text-title" }, [
                            createVNode("span", null, [
                              createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                              $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                                key: 0,
                                "start-val": 0,
                                "end-val": 480,
                                options: { prefix: "+", suffix: "M" }
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "use-text-subtitle" }, [
                            createVNode("i", { class: "ion-ios-checkmark-circle-outline" }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_transaction")), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="counter-item" data-v-0433cc49${_scopeId3}>`);
                    if ($data.loaded) {
                      _push4(`<div class="text" data-v-0433cc49${_scopeId3}><h3 class="use-text-title" data-v-0433cc49${_scopeId3}><span data-v-0433cc49${_scopeId3}>${ssrInterpolate(!$setup.visible ? 0 : "")} `);
                      if ($setup.visible) {
                        _push4(ssrRenderComponent(_component_count_up, {
                          "start-val": 0,
                          "end-val": 180,
                          options: { prefix: "+", suffix: "M" }
                        }, null, _parent4, _scopeId3));
                      } else {
                        _push4(`<!---->`);
                      }
                      _push4(`</span></h3><p class="use-text-subtitle" data-v-0433cc49${_scopeId3}><i class="ion-ios-star-outline" data-v-0433cc49${_scopeId3}></i> ${ssrInterpolate(_ctx.$t("mobileLanding.counter_ratting"))}</p></div>`);
                    } else {
                      _push4(`<!---->`);
                    }
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "counter-item" }, [
                        $data.loaded ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text"
                        }, [
                          createVNode("h3", { class: "use-text-title" }, [
                            createVNode("span", null, [
                              createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                              $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                                key: 0,
                                "start-val": 0,
                                "end-val": 180,
                                options: { prefix: "+", suffix: "M" }
                              })) : createCommentVNode("", true)
                            ])
                          ]),
                          createVNode("p", { class: "use-text-subtitle" }, [
                            createVNode("i", { class: "ion-ios-star-outline" }),
                            createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_ratting")), 1)
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "4",
                  class: "px-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "counter-item" }, [
                      $data.loaded ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text"
                      }, [
                        createVNode("h3", { class: "use-text-title" }, [
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                            $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                              key: 0,
                              "start-val": 0,
                              "end-val": 200,
                              options: { suffix: "M" }
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("p", { class: "use-text-subtitle" }, [
                          createVNode("i", { class: "ion-ios-cloud-download-outline" }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_downloads")), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "4",
                  class: "px-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "counter-item" }, [
                      $data.loaded ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text"
                      }, [
                        createVNode("h3", { class: "use-text-title" }, [
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                            $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                              key: 0,
                              "start-val": 0,
                              "end-val": 480,
                              options: { prefix: "+", suffix: "M" }
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("p", { class: "use-text-subtitle" }, [
                          createVNode("i", { class: "ion-ios-checkmark-circle-outline" }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_transaction")), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "4",
                  class: "px-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "counter-item" }, [
                      $data.loaded ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "text"
                      }, [
                        createVNode("h3", { class: "use-text-title" }, [
                          createVNode("span", null, [
                            createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                            $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                              key: 0,
                              "start-val": 0,
                              "end-val": 180,
                              options: { prefix: "+", suffix: "M" }
                            })) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("p", { class: "use-text-subtitle" }, [
                          createVNode("i", { class: "ion-ios-star-outline" }),
                          createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_ratting")), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, {
            justify: "center",
            align: "center",
            class: "counter-inner spacing6"
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "counter-item" }, [
                    $data.loaded ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text"
                    }, [
                      createVNode("h3", { class: "use-text-title" }, [
                        createVNode("span", null, [
                          createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                          $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                            key: 0,
                            "start-val": 0,
                            "end-val": 200,
                            options: { suffix: "M" }
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("p", { class: "use-text-subtitle" }, [
                        createVNode("i", { class: "ion-ios-cloud-download-outline" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_downloads")), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "counter-item" }, [
                    $data.loaded ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text"
                    }, [
                      createVNode("h3", { class: "use-text-title" }, [
                        createVNode("span", null, [
                          createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                          $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                            key: 0,
                            "start-val": 0,
                            "end-val": 480,
                            options: { prefix: "+", suffix: "M" }
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("p", { class: "use-text-subtitle" }, [
                        createVNode("i", { class: "ion-ios-checkmark-circle-outline" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_transaction")), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "4",
                class: "px-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "counter-item" }, [
                    $data.loaded ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text"
                    }, [
                      createVNode("h3", { class: "use-text-title" }, [
                        createVNode("span", null, [
                          createTextVNode(toDisplayString(!$setup.visible ? 0 : "") + " ", 1),
                          $setup.visible ? (openBlock(), createBlock(_component_count_up, {
                            key: 0,
                            "start-val": 0,
                            "end-val": 180,
                            options: { prefix: "+", suffix: "M" }
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("p", { class: "use-text-subtitle" }, [
                        createVNode("i", { class: "ion-ios-star-outline" }),
                        createTextVNode(" " + toDisplayString(_ctx.$t("mobileLanding.counter_ratting")), 1)
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Counter/Counter.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Counter = /* @__PURE__ */ _export_sfc$1(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__scopeId", "data-v-0433cc49"]]);
const useYoutube = {
  use: true
};
const _imports_2 = "" + publicAssetsURL("images/mobile/dot-many.svg");
const _sfc_main$e = {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_parallax = resolveComponent("scroll-parallax");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "parallax-wrap" }, _attrs))} data-v-9cbf364d>`);
  if ($data.loaded) {
    _push(`<div class="inner-parallax small" data-v-9cbf364d>`);
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.1 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-9cbf364d${_scopeId}><svg class="triangle" data-v-9cbf364d${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_0$2 + "#main")} data-v-9cbf364d${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "triangle" }, [
                createVNode("use", { "xlink:href": _imports_0$2 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.15 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-9cbf364d${_scopeId}><svg class="circle" data-v-9cbf364d${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_1$3 + "#main")} data-v-9cbf364d${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "circle" }, [
                createVNode("use", { "xlink:href": _imports_1$3 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.15 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-9cbf364d${_scopeId}><div class="square-dot" data-v-9cbf364d${_scopeId}><svg class="dot-many" data-v-9cbf364d${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_2 + "#main")} data-v-9cbf364d${_scopeId}></use></svg></div></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              createVNode("div", { class: "square-dot" }, [
                (openBlock(), createBlock("svg", { class: "dot-many" }, [
                  createVNode("use", { "xlink:href": _imports_2 + "#main" })
                ]))
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Parallax/Small.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const ParallaxSmall = /* @__PURE__ */ _export_sfc$1(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__scopeId", "data-v-9cbf364d"]]);
const _sfc_main$d = {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_parallax = resolveComponent("scroll-parallax");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "parallax-wrap" }, _attrs))} data-v-6dda3e38>`);
  if ($data.loaded) {
    _push(`<div class="inner-parallax medium" data-v-6dda3e38>`);
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.1 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-6dda3e38${_scopeId}><svg class="triangle" data-v-6dda3e38${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_0$2 + "#main")} data-v-6dda3e38${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "triangle" }, [
                createVNode("use", { "xlink:href": _imports_0$2 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.15 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-6dda3e38${_scopeId}><svg class="circle" data-v-6dda3e38${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_1$3 + "#main")} data-v-6dda3e38${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "circle" }, [
                createVNode("use", { "xlink:href": _imports_1$3 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.15 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-6dda3e38${_scopeId}><div class="square-dot" data-v-6dda3e38${_scopeId}><svg class="dot-many" data-v-6dda3e38${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_2 + "#main")} data-v-6dda3e38${_scopeId}></use></svg></div></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              createVNode("div", { class: "square-dot" }, [
                (openBlock(), createBlock("svg", { class: "dot-many" }, [
                  createVNode("use", { "xlink:href": _imports_2 + "#main" })
                ]))
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Parallax/Medium.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const ParallaxMedium = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__scopeId", "data-v-6dda3e38"]]);
const _sfc_main$c = {
  props: {
    align: {
      type: String,
      default: "left"
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["title-main", [$props.align, { dark: $props.dark }]]
  }, _attrs))} data-v-316f0fe1><h3 data-v-316f0fe1>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</h3></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Title/Title.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Title = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__scopeId", "data-v-316f0fe1"]]);
const _sfc_main$b = {
  props: {
    align: {
      type: String,
      default: "left"
    },
    text: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["title-secondary", $props.align]
  }, _attrs))} data-v-c26371f5><h4 data-v-c26371f5>${ssrInterpolate($props.text)}</h4></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Title/TitleSecondary.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const TitleSecondary = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__scopeId", "data-v-c26371f5"]]);
const _imports_0$1 = "" + publicAssetsURL("images/mobile/deco-feature.svg");
const _sfc_main$a = {
  components: {
    ParallaxSmall,
    ParallaxMedium,
    TitleSecondary,
    "title-main": Title
  },
  data() {
    return {
      videoId: "MltGO66gTbo",
      imgAPI,
      dialog: false,
      player: null,
      playerVars: {
        autoplay: 0,
        controls: 1,
        rel: 0,
        showinfo: 1,
        mute: 0,
        origin: "https://localhost:8006"
      },
      yt: useYoutube
    };
  },
  methods: {
    handleVideoOpen() {
      if (this.yt.use) {
        this.dialog = true;
      }
    },
    onReady() {
      this.$refs.youtube.playVideo();
    },
    handleVideoClose() {
      this.dialog = false;
      this.$refs.youtube.pauseVideo();
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_YouTube = resolveComponent("YouTube");
  const _component_title_main = resolveComponent("title-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_parallax_small = resolveComponent("parallax-small");
  const _component_title_secondary = resolveComponent("title-secondary");
  const _component_parallax_medium = resolveComponent("parallax-medium");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-847c53a4>`);
  _push(ssrRenderComponent(_component_v_dialog, {
    modelValue: $data.dialog,
    "onUpdate:modelValue": ($event) => $data.dialog = $event,
    "max-width": "690"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card, { class: "video-popup" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card_title, { class: "headline" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h2 class="title-main" data-v-847c53a4${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.feature_video"))}</h2>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      variant: "flat",
                      icon: "",
                      onClick: ($event) => $options.handleVideoClose()
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_icon, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-close`);
                              } else {
                                return [
                                  createTextVNode("mdi-close")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_icon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h2", { class: "title-main" }, toDisplayString(_ctx.$t("mobileLanding.feature_video")), 1),
                      createVNode(_component_v_btn, {
                        variant: "flat",
                        icon: "",
                        onClick: ($event) => $options.handleVideoClose()
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              if ($data.yt.use) {
                _push3(`<div class="text-center mx-auto py-4" data-v-847c53a4${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_YouTube, {
                  src: $data.videoId,
                  vars: $data.playerVars,
                  width: 640,
                  height: 360,
                  ref: "youtube",
                  onReady: $options.onReady
                }, null, _parent3, _scopeId2));
                _push3(`</div>`);
              } else {
                _push3(`<!---->`);
              }
            } else {
              return [
                createVNode(_component_v_card_title, { class: "headline" }, {
                  default: withCtx(() => [
                    createVNode("h2", { class: "title-main" }, toDisplayString(_ctx.$t("mobileLanding.feature_video")), 1),
                    createVNode(_component_v_btn, {
                      variant: "flat",
                      icon: "",
                      onClick: ($event) => $options.handleVideoClose()
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                $data.yt.use ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center mx-auto py-4"
                }, [
                  createVNode(_component_YouTube, {
                    src: $data.videoId,
                    vars: $data.playerVars,
                    width: 640,
                    height: 360,
                    ref: "youtube",
                    onReady: $options.onReady
                  }, null, 8, ["src", "vars", "onReady"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card, { class: "video-popup" }, {
            default: withCtx(() => [
              createVNode(_component_v_card_title, { class: "headline" }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "title-main" }, toDisplayString(_ctx.$t("mobileLanding.feature_video")), 1),
                  createVNode(_component_v_btn, {
                    variant: "flat",
                    icon: "",
                    onClick: ($event) => $options.handleVideoClose()
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-close")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                _: 1
              }),
              $data.yt.use ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-center mx-auto py-4"
              }, [
                createVNode(_component_YouTube, {
                  src: $data.videoId,
                  vars: $data.playerVars,
                  width: 640,
                  height: 360,
                  ref: "youtube",
                  onReady: $options.onReady
                }, null, 8, ["src", "vars", "onReady"])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_title_main, { align: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("mobileLanding.feature_title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("mobileLanding.feature_title")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_container, { class: "fixed-width" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="item first" data-v-847c53a4${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_row, {
          class: [$options.isMobile ? "column-reverse" : "row"]
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                cols: "12",
                md: "6",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="illustration-left" data-v-847c53a4${_scopeId3}><svg class="deco-primary" data-v-847c53a4${_scopeId3}><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-847c53a4${_scopeId3}></use></svg>`);
                    _push4(ssrRenderComponent(_component_parallax_small, null, null, _parent4, _scopeId3));
                    _push4(`<figure class="screen" data-v-847c53a4${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.mobile[4])} alt="illustration" data-v-847c53a4${_scopeId3}></figure></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "illustration-left" }, [
                        (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                          createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                        ])),
                        createVNode(_component_parallax_small),
                        createVNode("figure", { class: "screen" }, [
                          createVNode("img", {
                            src: $data.imgAPI.mobile[4],
                            alt: "illustration"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text" data-v-847c53a4${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_title_secondary, {
                      align: $options.isMobile ? "center" : "left",
                      text: _ctx.$t("mobileLanding.feature_title1")
                    }, null, _parent4, _scopeId3));
                    _push4(`<p class="use-text-subtitle2" data-v-847c53a4${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.feature_desc1"))}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text" }, [
                        createVNode(_component_title_secondary, {
                          align: $options.isMobile ? "center" : "left",
                          text: _ctx.$t("mobileLanding.feature_title1")
                        }, null, 8, ["align", "text"]),
                        createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc1")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "illustration-left" }, [
                      (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                        createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                      ])),
                      createVNode(_component_parallax_small),
                      createVNode("figure", { class: "screen" }, [
                        createVNode("img", {
                          src: $data.imgAPI.mobile[4],
                          alt: "illustration"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode(_component_title_secondary, {
                        align: $options.isMobile ? "center" : "left",
                        text: _ctx.$t("mobileLanding.feature_title1")
                      }, null, 8, ["align", "text"]),
                      createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc1")), 1)
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "item first" }, [
            createVNode(_component_v_row, {
              class: [$options.isMobile ? "column-reverse" : "row"]
            }, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  cols: "12",
                  md: "6",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "illustration-left" }, [
                      (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                        createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                      ])),
                      createVNode(_component_parallax_small),
                      createVNode("figure", { class: "screen" }, [
                        createVNode("img", {
                          src: $data.imgAPI.mobile[4],
                          alt: "illustration"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode(_component_title_secondary, {
                        align: $options.isMobile ? "center" : "left",
                        text: _ctx.$t("mobileLanding.feature_title1")
                      }, null, 8, ["align", "text"]),
                      createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc1")), 1)
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["class"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="bg-color" data-v-847c53a4><div class="deco-bg-top" data-v-847c53a4></div>`);
  _push(ssrRenderComponent(_component_v_container, { class: "fixed-width" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="item" data-v-847c53a4${_scopeId}>`);
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="text" data-v-847c53a4${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_title_secondary, {
                      text: _ctx.$t("mobileLanding.feature_title2"),
                      align: $options.isMobile ? "center" : "left"
                    }, null, _parent4, _scopeId3));
                    _push4(`<p class="use-text-subtitle2" data-v-847c53a4${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.feature_desc2"))}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "text" }, [
                        createVNode(_component_title_secondary, {
                          text: _ctx.$t("mobileLanding.feature_title2"),
                          align: $options.isMobile ? "center" : "left"
                        }, null, 8, ["text", "align"]),
                        createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc2")), 1)
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "py-0"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="illustration-right" data-v-847c53a4${_scopeId3}><svg class="deco-secondary" data-v-847c53a4${_scopeId3}><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-847c53a4${_scopeId3}></use></svg>`);
                    _push4(ssrRenderComponent(_component_parallax_small, null, null, _parent4, _scopeId3));
                    _push4(`<figure class="screen" data-v-847c53a4${_scopeId3}><img${ssrRenderAttr("src", $data.imgAPI.mobile[5])} alt="screen" data-v-847c53a4${_scopeId3}></figure></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "illustration-right" }, [
                        (openBlock(), createBlock("svg", { class: "deco-secondary" }, [
                          createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                        ])),
                        createVNode(_component_parallax_small),
                        createVNode("figure", { class: "screen" }, [
                          createVNode("img", {
                            src: $data.imgAPI.mobile[5],
                            alt: "screen"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode(_component_title_secondary, {
                        text: _ctx.$t("mobileLanding.feature_title2"),
                        align: $options.isMobile ? "center" : "left"
                      }, null, 8, ["text", "align"]),
                      createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc2")), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "illustration-right" }, [
                      (openBlock(), createBlock("svg", { class: "deco-secondary" }, [
                        createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                      ])),
                      createVNode(_component_parallax_small),
                      createVNode("figure", { class: "screen" }, [
                        createVNode("img", {
                          src: $data.imgAPI.mobile[5],
                          alt: "screen"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="item last" data-v-847c53a4${_scopeId}>`);
        _push2(ssrRenderComponent(_component_title_secondary, {
          align: "center",
          text: _ctx.$t("mobileLanding.feature_title3")
        }, null, _parent2, _scopeId));
        _push2(`<p class="text-center use-text-subtitle2" data-v-847c53a4${_scopeId}>${ssrInterpolate(_ctx.$t("mobileLanding.feature_desc3"))}</p>`);
        _push2(ssrRenderComponent(_component_v_container, { class: "max-sm pa-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_col, {
                      sm: "12",
                      cols: "12",
                      class: "py-0"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<div class="illustration-center" data-v-847c53a4${_scopeId4}><svg class="deco-primary-big" data-v-847c53a4${_scopeId4}><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-847c53a4${_scopeId4}></use></svg>`);
                          _push5(ssrRenderComponent(_component_parallax_medium, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card, { class: "video" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img${ssrRenderAttr("src", $data.imgAPI.mobile[6])} alt="screen" data-v-847c53a4${_scopeId5}><h6 class="use-text-subtitle2" data-v-847c53a4${_scopeId5}>${ssrInterpolate(_ctx.$t("mobileLanding.feature_watch"))}</h6>`);
                                _push6(ssrRenderComponent(_component_v_btn, {
                                  icon: "",
                                  large: "",
                                  class: "button",
                                  onClick: ($event) => $options.handleVideoOpen()
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<i class="ion-ios-play-outline" data-v-847c53a4${_scopeId6}></i>`);
                                    } else {
                                      return [
                                        createVNode("i", { class: "ion-ios-play-outline" })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode("img", {
                                    src: $data.imgAPI.mobile[6],
                                    alt: "screen"
                                  }, null, 8, ["src"]),
                                  createVNode("h6", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_watch")), 1),
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    large: "",
                                    class: "button",
                                    onClick: ($event) => $options.handleVideoOpen()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ion-ios-play-outline" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "illustration-center" }, [
                              (openBlock(), createBlock("svg", { class: "deco-primary-big" }, [
                                createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                              ])),
                              createVNode(_component_parallax_medium),
                              createVNode(_component_v_card, { class: "video" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: $data.imgAPI.mobile[6],
                                    alt: "screen"
                                  }, null, 8, ["src"]),
                                  createVNode("h6", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_watch")), 1),
                                  createVNode(_component_v_btn, {
                                    icon: "",
                                    large: "",
                                    class: "button",
                                    onClick: ($event) => $options.handleVideoOpen()
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("i", { class: "ion-ios-play-outline" })
                                    ]),
                                    _: 1
                                  }, 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_col, {
                        sm: "12",
                        cols: "12",
                        class: "py-0"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "illustration-center" }, [
                            (openBlock(), createBlock("svg", { class: "deco-primary-big" }, [
                              createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                            ])),
                            createVNode(_component_parallax_medium),
                            createVNode(_component_v_card, { class: "video" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: $data.imgAPI.mobile[6],
                                  alt: "screen"
                                }, null, 8, ["src"]),
                                createVNode("h6", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_watch")), 1),
                                createVNode(_component_v_btn, {
                                  icon: "",
                                  large: "",
                                  class: "button",
                                  onClick: ($event) => $options.handleVideoOpen()
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "ion-ios-play-outline" })
                                  ]),
                                  _: 1
                                }, 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      sm: "12",
                      cols: "12",
                      class: "py-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "illustration-center" }, [
                          (openBlock(), createBlock("svg", { class: "deco-primary-big" }, [
                            createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                          ])),
                          createVNode(_component_parallax_medium),
                          createVNode(_component_v_card, { class: "video" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: $data.imgAPI.mobile[6],
                                alt: "screen"
                              }, null, 8, ["src"]),
                              createVNode("h6", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_watch")), 1),
                              createVNode(_component_v_btn, {
                                icon: "",
                                large: "",
                                class: "button",
                                onClick: ($event) => $options.handleVideoOpen()
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "ion-ios-play-outline" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "item" }, [
            createVNode(_component_v_row, null, {
              default: withCtx(() => [
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text" }, [
                      createVNode(_component_title_secondary, {
                        text: _ctx.$t("mobileLanding.feature_title2"),
                        align: $options.isMobile ? "center" : "left"
                      }, null, 8, ["text", "align"]),
                      createVNode("p", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc2")), 1)
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "py-0"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "illustration-right" }, [
                      (openBlock(), createBlock("svg", { class: "deco-secondary" }, [
                        createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                      ])),
                      createVNode(_component_parallax_small),
                      createVNode("figure", { class: "screen" }, [
                        createVNode("img", {
                          src: $data.imgAPI.mobile[5],
                          alt: "screen"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          createVNode("div", { class: "item last" }, [
            createVNode(_component_title_secondary, {
              align: "center",
              text: _ctx.$t("mobileLanding.feature_title3")
            }, null, 8, ["text"]),
            createVNode("p", { class: "text-center use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_desc3")), 1),
            createVNode(_component_v_container, { class: "max-sm pa-0" }, {
              default: withCtx(() => [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_col, {
                      sm: "12",
                      cols: "12",
                      class: "py-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "illustration-center" }, [
                          (openBlock(), createBlock("svg", { class: "deco-primary-big" }, [
                            createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                          ])),
                          createVNode(_component_parallax_medium),
                          createVNode(_component_v_card, { class: "video" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: $data.imgAPI.mobile[6],
                                alt: "screen"
                              }, null, 8, ["src"]),
                              createVNode("h6", { class: "use-text-subtitle2" }, toDisplayString(_ctx.$t("mobileLanding.feature_watch")), 1),
                              createVNode(_component_v_btn, {
                                icon: "",
                                large: "",
                                class: "button",
                                onClick: ($event) => $options.handleVideoOpen()
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "ion-ios-play-outline" })
                                ]),
                                _: 1
                              }, 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Feature/Feature.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Feature = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__scopeId", "data-v-847c53a4"]]);
const _imports_0 = "" + publicAssetsURL("images/mobile/deco-wave-top.svg");
const _imports_1$1 = "" + publicAssetsURL("images/mobile/deco-wave-bottom.svg");
const _sfc_main$9 = {
  components: {
    "title-main": Title,
    ParallaxLarge,
    Splide,
    SplideSlide
  },
  data: () => ({
    imgAPI,
    loaded: false,
    activeSlide: 0,
    settingsCenter: {
      pagination: true,
      type: "fade",
      speed: 500,
      arrows: false,
      focus: "center",
      updateOnMove: true,
      direction: "ltr"
    },
    settingsSide: {
      autoplay: true,
      interval: 5e3,
      pagination: false,
      type: "loop",
      speed: 500,
      perMove: 1,
      focus: "center",
      padding: "10px",
      perPage: 5,
      arrows: false,
      direction: "ltr",
      breakpoints: {
        800: {
          perPage: 3
        }
      }
    }
  }),
  mounted() {
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settingsSide.direction = "rtl";
        this.settingsCenter.direction = "rtl";
      } else {
        this.settingsSide.direction = "ltr";
        this.settingsCenter.direction = "ltr";
      }
    }, 100);
  },
  methods: {
    handleDotsNav(index2) {
      this.$refs.sliderCenter.go(index2);
    },
    handleActiveSlide(slide) {
      this.activeSlide = slide.index;
      this.$refs.sliderSide.go(slide.index);
    },
    handleSync(slide) {
      this.$refs.sliderCenter.go(slide.index);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_title_main = resolveComponent("title-main");
  const _component_parallax_large = resolveComponent("parallax-large");
  const _component_splide = resolveComponent("splide");
  const _component_splide_slide = resolveComponent("splide-slide");
  const _component_v_card = resolveComponent("v-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-4964a0ab><svg class="deco-top back" data-v-4964a0ab><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-4964a0ab></use></svg><svg class="deco-top cover" data-v-4964a0ab><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-4964a0ab></use></svg>`);
  _push(ssrRenderComponent(_component_title_main, {
    dark: "",
    align: "center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("mobileLanding.showcase_title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("mobileLanding.showcase_title")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="carousel-wrap" data-v-4964a0ab><div class="invert-parallax" data-v-4964a0ab>`);
  _push(ssrRenderComponent(_component_parallax_large, null, null, _parent));
  _push(`</div><div class="carousel-side" data-v-4964a0ab>`);
  _push(ssrRenderComponent(_component_splide, {
    options: _ctx.settingsSide,
    class: "slider-side",
    ref: "sliderSide",
    "onSplide:move": $options.handleSync
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[7])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[7],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[7],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[8])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[8],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[8],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[9])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[9],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[9],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[10])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[10],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[10],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[11])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[11],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[11],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[12])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[12],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[12],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_splide_slide, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="item" data-v-4964a0ab${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_card, { class: "frame" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img${ssrRenderAttr("src", _ctx.imgAPI.mobile[13])} alt="app" data-v-4964a0ab${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[13],
                        alt: "app"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "item" }, [
                  createVNode(_component_v_card, { class: "frame" }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[13],
                        alt: "app"
                      }, null, 8, ["src"])
                    ]),
                    _: 1
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[7],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[8],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[9],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[10],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[11],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[12],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_splide_slide, null, {
            default: withCtx(() => [
              createVNode("div", { class: "item" }, [
                createVNode(_component_v_card, { class: "frame" }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[13],
                      alt: "app"
                    }, null, 8, ["src"])
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="carousel-center" data-v-4964a0ab>`);
  _push(ssrRenderComponent(_component_v_card, { class: "frame" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_splide, {
          options: _ctx.settingsCenter,
          class: "slider-center",
          ref: "sliderCenter",
          "onSplide:move": $options.handleActiveSlide
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[7])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[14])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[7],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[14],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[8])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[15])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[8],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[15],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[9])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[16])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[9],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[16],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[10])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[17])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[10],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[17],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[11])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[18])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[11],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[18],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[12])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[19])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[12],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[19],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_splide_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="item" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[13])} alt="app" data-v-4964a0ab${_scopeId3}><div class="widget" data-v-4964a0ab${_scopeId3}><img${ssrRenderAttr("src", _ctx.imgAPI.mobile[20])} alt="app" data-v-4964a0ab${_scopeId3}></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "item" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[13],
                          alt: "app"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "widget" }, [
                          createVNode("img", {
                            src: _ctx.imgAPI.mobile[20],
                            alt: "app"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[7],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[14],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[8],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[15],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[9],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[16],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[10],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[17],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[11],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[18],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[12],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[19],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_splide_slide, null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "item" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[13],
                        alt: "app"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "widget" }, [
                        createVNode("img", {
                          src: _ctx.imgAPI.mobile[20],
                          alt: "app"
                        }, null, 8, ["src"])
                      ])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_splide, {
            options: _ctx.settingsCenter,
            class: "slider-center",
            ref: "sliderCenter",
            "onSplide:move": $options.handleActiveSlide
          }, {
            default: withCtx(() => [
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[7],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[14],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[8],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[15],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[9],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[16],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[10],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[17],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[11],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[18],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[12],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[19],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_splide_slide, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode("img", {
                      src: _ctx.imgAPI.mobile[13],
                      alt: "app"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "widget" }, [
                      createVNode("img", {
                        src: _ctx.imgAPI.mobile[20],
                        alt: "app"
                      }, null, 8, ["src"])
                    ])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["options", "onSplide:move"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><svg class="deco-bottom back" data-v-4964a0ab><use${ssrRenderAttr("xlink:href", _imports_1$1 + "#main")} data-v-4964a0ab></use></svg><svg class="deco-bottom cover" data-v-4964a0ab><use${ssrRenderAttr("xlink:href", _imports_1$1 + "#main")} data-v-4964a0ab></use></svg><div class="deco-bottom-mobile" data-v-4964a0ab></div><div class="pagination" data-v-4964a0ab><ul data-v-4964a0ab><!--[-->`);
  ssrRenderList(6, (index2) => {
    _push(`<li class="${ssrRenderClass({ active: _ctx.activeSlide === index2 })}" data-v-4964a0ab><button type="button" data-v-4964a0ab></button></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Showcase/Showcase.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Showcase = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__scopeId", "data-v-4964a0ab"]]);
const testiContent = [
  {
    text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
    avatar: imgAPI.avatar[10],
    name: "John Doe",
    title: "Chief Digital Officer"
  },
  {
    text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
    avatar: imgAPI.avatar[1],
    name: "Jean Doe",
    title: "Chief Digital Officer"
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[2],
    name: "Jena Doe",
    title: "Graphic Designer"
  },
  {
    text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
    avatar: imgAPI.avatar[3],
    name: "Jovelin Doe",
    title: "Senior Graphic Designer"
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[4],
    name: "Jihan Doe"
  },
  {
    text: "Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.",
    avatar: imgAPI.avatar[6],
    name: "Jovelin Doe",
    title: "Senior Graphic Designer"
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[7],
    name: "John Doe",
    title: "Senior Graphic Designer"
  },
  {
    text: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.",
    avatar: imgAPI.avatar[9],
    name: "John Doe",
    title: "Chief Digital Officer"
  },
  {
    text: "Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.",
    avatar: imgAPI.avatar[8],
    name: "Jean Doe",
    title: "Chief Digital Officer"
  }
];
const _sfc_main$8 = {
  components: {
    "title-main": Title,
    Splide,
    SplideSlide
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent,
      settingsText: {
        pagination: false,
        type: "fade",
        speed: 500,
        arrows: false,
        updateOnMove: true,
        direction: "ltr"
      },
      settingsAvatar: {
        pagination: false,
        type: "loop",
        speed: 500,
        autoplay: true,
        focus: "center",
        interval: 5e3,
        padding: "2px",
        perPage: 7,
        isNavigation: true,
        perMove: 1,
        arrows: false,
        direction: "ltr",
        breakpoints: {
          600: {
            perPage: 3
          }
        }
      }
    };
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settingsAvatar.direction = "rtl";
        this.settingsText.direction = "rtl";
      } else {
        this.settingsAvatar.direction = "ltr";
        this.settingsText.direction = "ltr";
      }
    }, 100);
    AOS.init({
      once: true
    });
  },
  methods: {
    handleSyncText(slide) {
      this.$refs.sliderAvatar.go(slide.index);
    },
    handleSyncAvatar(slide) {
      this.$refs.sliderText.go(slide.index);
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_title_main = resolveComponent("title-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_splide = resolveComponent("splide");
  const _component_splide_slide = resolveComponent("splide-slide");
  const _component_v_avatar = resolveComponent("v-avatar");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-ea1f0697><div data-v-ea1f0697><div data-aos="fade-up" data-aos-offset="100" data-aos-delay="300" data-aos-duration="500" data-v-ea1f0697><div data-v-ea1f0697>`);
  _push(ssrRenderComponent(_component_title_main, { align: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("mobileLanding.testimonial_title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("mobileLanding.testimonial_title")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="carousel-wrap" data-v-ea1f0697><div data-aos="fade-up" data-aos-offset="150" data-aos-delay="400" data-aos-duration="500" data-v-ea1f0697><div data-v-ea1f0697>`);
  _push(ssrRenderComponent(_component_v_container, { class: "max-sm" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($data.loaded) {
          _push2(`<div class="carousel-text" data-v-ea1f0697${_scopeId}>`);
          _push2(ssrRenderComponent(_component_splide, {
            options: $data.settingsText,
            class: "slider-text",
            ref: "sliderText",
            "onSplide:move": $options.handleSyncText
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList($data.testiContent, (item, index2) => {
                  _push3(ssrRenderComponent(_component_splide_slide, { key: index2 }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="item" data-v-ea1f0697${_scopeId3}><p class="content" data-v-ea1f0697${_scopeId3}>${ssrInterpolate(item.text)}</p><p class="name" data-v-ea1f0697${_scopeId3}><strong data-v-ea1f0697${_scopeId3}>${ssrInterpolate(item.name)}</strong> - ${ssrInterpolate(item.title)}</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "item" }, [
                            createVNode("p", { class: "content" }, toDisplayString(item.text), 1),
                            createVNode("p", { class: "name" }, [
                              createVNode("strong", null, toDisplayString(item.name), 1),
                              createTextVNode(" - " + toDisplayString(item.title), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList($data.testiContent, (item, index2) => {
                    return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "item" }, [
                          createVNode("p", { class: "content" }, toDisplayString(item.text), 1),
                          createVNode("p", { class: "name" }, [
                            createVNode("strong", null, toDisplayString(item.name), 1),
                            createTextVNode(" - " + toDisplayString(item.title), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $data.loaded ? (openBlock(), createBlock("div", {
            key: 0,
            class: "carousel-text"
          }, [
            createVNode(_component_splide, {
              options: $data.settingsText,
              class: "slider-text",
              ref: "sliderText",
              "onSplide:move": $options.handleSyncText
            }, {
              default: withCtx(() => [
                (openBlock(true), createBlock(Fragment, null, renderList($data.testiContent, (item, index2) => {
                  return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "item" }, [
                        createVNode("p", { class: "content" }, toDisplayString(item.text), 1),
                        createVNode("p", { class: "name" }, [
                          createVNode("strong", null, toDisplayString(item.name), 1),
                          createTextVNode(" - " + toDisplayString(item.title), 1)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ]),
              _: 1
            }, 8, ["options", "onSplide:move"])
          ])) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  if ($data.loaded) {
    _push(`<div class="carousel-avatar" data-v-ea1f0697>`);
    _push(ssrRenderComponent(_component_splide, {
      class: "slider-avatar",
      ref: "sliderAvatar",
      options: $data.settingsAvatar,
      "onSplide:move": $options.handleSyncAvatar
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<!--[-->`);
          ssrRenderList($data.testiContent, (item, index2) => {
            _push2(ssrRenderComponent(_component_splide_slide, { key: index2 }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="item" data-v-ea1f0697${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_avatar, { class: "avatar" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${ssrRenderAttr("alt", item.name)}${ssrRenderAttr("src", item.avatar)} data-v-ea1f0697${_scopeId3}>`);
                      } else {
                        return [
                          createVNode("img", {
                            alt: item.name,
                            src: item.avatar
                          }, null, 8, ["alt", "src"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "item" }, [
                      createVNode(_component_v_avatar, { class: "avatar" }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            alt: item.name,
                            src: item.avatar
                          }, null, 8, ["alt", "src"])
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]-->`);
        } else {
          return [
            (openBlock(true), createBlock(Fragment, null, renderList($data.testiContent, (item, index2) => {
              return openBlock(), createBlock(_component_splide_slide, { key: index2 }, {
                default: withCtx(() => [
                  createVNode("div", { class: "item" }, [
                    createVNode(_component_v_avatar, { class: "avatar" }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          alt: item.name,
                          src: item.avatar
                        }, null, 8, ["alt", "src"])
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ]),
                _: 2
              }, 1024);
            }), 128))
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div><div class="deco-bg-bottom" data-v-ea1f0697></div></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials/Testimonials.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Testimonials = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-ea1f0697"]]);
const _sfc_main$7 = {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_parallax = resolveComponent("scroll-parallax");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "parallax-wrap" }, _attrs))} data-v-4609a352>`);
  if ($data.loaded) {
    _push(`<div class="inner-parallax extra-small" data-v-4609a352>`);
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.3 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-4609a352${_scopeId}><svg class="triangle" data-v-4609a352${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_0$2 + "#main")} data-v-4609a352${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "triangle" }, [
                createVNode("use", { "xlink:href": _imports_0$2 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.2 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-4609a352${_scopeId}><svg class="circle" data-v-4609a352${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_1$3 + "#main")} data-v-4609a352${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "circle" }, [
                createVNode("use", { "xlink:href": _imports_1$3 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0.15 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-4609a352${_scopeId}><div class="square-dot" data-v-4609a352${_scopeId}><svg class="dot-many-small" data-v-4609a352${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_2 + "#main")} data-v-4609a352${_scopeId}></use></svg></div></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              createVNode("div", { class: "square-dot" }, [
                (openBlock(), createBlock("svg", { class: "dot-many-small" }, [
                  createVNode("use", { "xlink:href": _imports_2 + "#main" })
                ]))
              ])
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Parallax/ExtraSmall.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ParallaxExtraSmall = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-4609a352"]]);
const _imports_1 = "" + publicAssetsURL("images/mobile/faq.png");
const faqData = [
  {
    q: "Pellentesque ac bibendum tortor?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
  },
  {
    q: "In mi nulla, fringilla vestibulum?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Quisque lacinia purus ut libero?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Quisque ut metus sit amet augue?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  },
  {
    q: "Pellentesque ac bibendum tortor?",
    a: "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. "
  }
];
const _sfc_main$6 = {
  components: {
    ParallaxExtraSmall,
    "title-main": Title
  },
  data() {
    return {
      panel: 0,
      faqData
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_title_main = resolveComponent("title-main");
  const _component_parallax_extra_small = resolveComponent("parallax-extra-small");
  const _component_v_expansion_panels = resolveComponent("v-expansion-panels");
  const _component_v_expansion_panel = resolveComponent("v-expansion-panel");
  const _component_v_expansion_panel_title = resolveComponent("v-expansion-panel-title");
  const _component_v_expansion_panel_text = resolveComponent("v-expansion-panel-text");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-3e33d4cb>`);
  _push(ssrRenderComponent(_component_v_container, { class: "fixed-width" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                class: "pa-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_title_main, {
                      align: $options.isMobile ? "center" : "left"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<strong data-v-3e33d4cb${_scopeId4}> FAQ </strong>`);
                        } else {
                          return [
                            createVNode("strong", null, " FAQ ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<p class="${ssrRenderClass([[$options.isMobile ? "text-center" : "text-left"], "text use-text-subtitle2"])}" data-v-3e33d4cb${_scopeId3}>${ssrInterpolate(_ctx.$t("mobileLanding.faq_subtitle"))}</p><div class="illustration" data-v-3e33d4cb${_scopeId3}><svg class="deco-primary" data-v-3e33d4cb${_scopeId3}><use${ssrRenderAttr("xlink:href", _imports_0$1 + "#main")} data-v-3e33d4cb${_scopeId3}></use></svg>`);
                    _push4(ssrRenderComponent(_component_parallax_extra_small, null, null, _parent4, _scopeId3));
                    _push4(`<img${ssrRenderAttr("src", _imports_1)} alt="illustration" data-v-3e33d4cb${_scopeId3}></div>`);
                  } else {
                    return [
                      createVNode(_component_title_main, {
                        align: $options.isMobile ? "center" : "left"
                      }, {
                        default: withCtx(() => [
                          createVNode("strong", null, " FAQ ")
                        ]),
                        _: 1
                      }, 8, ["align"]),
                      createVNode("p", {
                        class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                      }, toDisplayString(_ctx.$t("mobileLanding.faq_subtitle")), 3),
                      createVNode("div", { class: "illustration" }, [
                        (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                          createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                        ])),
                        createVNode(_component_parallax_extra_small),
                        createVNode("img", {
                          src: _imports_1,
                          alt: "illustration"
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="accordion" data-v-3e33d4cb${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_expansion_panels, {
                      modelValue: $data.panel,
                      "onUpdate:modelValue": ($event) => $data.panel = $event,
                      variant: "accordion",
                      "active-class": "expanded"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`<!--[-->`);
                          ssrRenderList($data.faqData, (item, index2) => {
                            _push5(ssrRenderComponent(_component_v_expansion_panel, {
                              key: index2,
                              class: "paper"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p class="heading" data-v-3e33d4cb${_scopeId6}>${ssrInterpolate(item.q)}</p>`);
                                      } else {
                                        return [
                                          createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                  _push6(ssrRenderComponent(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`<p data-v-3e33d4cb${_scopeId6}>${ssrInterpolate(item.a)}</p>`);
                                      } else {
                                        return [
                                          createVNode("p", null, toDisplayString(item.a), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                      default: withCtx(() => [
                                        createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                      default: withCtx(() => [
                                        createVNode("p", null, toDisplayString(item.a), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          });
                          _push5(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                key: index2,
                                class: "paper"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx(() => [
                                      createVNode("p", null, toDisplayString(item.a), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "accordion" }, [
                        createVNode(_component_v_expansion_panels, {
                          modelValue: $data.panel,
                          "onUpdate:modelValue": ($event) => $data.panel = $event,
                          variant: "accordion",
                          "active-class": "expanded"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                              return openBlock(), createBlock(_component_v_expansion_panel, {
                                key: index2,
                                class: "paper"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                    default: withCtx(() => [
                                      createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                    default: withCtx(() => [
                                      createVNode("p", null, toDisplayString(item.a), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_title_main, {
                      align: $options.isMobile ? "center" : "left"
                    }, {
                      default: withCtx(() => [
                        createVNode("strong", null, " FAQ ")
                      ]),
                      _: 1
                    }, 8, ["align"]),
                    createVNode("p", {
                      class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                    }, toDisplayString(_ctx.$t("mobileLanding.faq_subtitle")), 3),
                    createVNode("div", { class: "illustration" }, [
                      (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                        createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                      ])),
                      createVNode(_component_parallax_extra_small),
                      createVNode("img", {
                        src: _imports_1,
                        alt: "illustration"
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "accordion" }, [
                      createVNode(_component_v_expansion_panels, {
                        modelValue: $data.panel,
                        "onUpdate:modelValue": ($event) => $data.panel = $event,
                        variant: "accordion",
                        "active-class": "expanded"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                            return openBlock(), createBlock(_component_v_expansion_panel, {
                              key: index2,
                              class: "paper"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                  default: withCtx(() => [
                                    createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, toDisplayString(item.a), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "spacing6" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "6",
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_title_main, {
                    align: $options.isMobile ? "center" : "left"
                  }, {
                    default: withCtx(() => [
                      createVNode("strong", null, " FAQ ")
                    ]),
                    _: 1
                  }, 8, ["align"]),
                  createVNode("p", {
                    class: ["text use-text-subtitle2", [$options.isMobile ? "text-center" : "text-left"]]
                  }, toDisplayString(_ctx.$t("mobileLanding.faq_subtitle")), 3),
                  createVNode("div", { class: "illustration" }, [
                    (openBlock(), createBlock("svg", { class: "deco-primary" }, [
                      createVNode("use", { "xlink:href": _imports_0$1 + "#main" })
                    ])),
                    createVNode(_component_parallax_extra_small),
                    createVNode("img", {
                      src: _imports_1,
                      alt: "illustration"
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "accordion" }, [
                    createVNode(_component_v_expansion_panels, {
                      modelValue: $data.panel,
                      "onUpdate:modelValue": ($event) => $data.panel = $event,
                      variant: "accordion",
                      "active-class": "expanded"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList($data.faqData, (item, index2) => {
                          return openBlock(), createBlock(_component_v_expansion_panel, {
                            key: index2,
                            class: "paper"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_expansion_panel_title, { class: "content" }, {
                                default: withCtx(() => [
                                  createVNode("p", { class: "heading" }, toDisplayString(item.q), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_expansion_panel_text, { class: "detail" }, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(item.a), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq/Faq.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Faq = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-3e33d4cb"]]);
const _sfc_main$5 = {
  data() {
    return {
      logos: [
        "/images/logos/architect.png",
        "/images/logos/cloud.png",
        "/images/logos/coin.png",
        "/images/logos/mobile.png",
        "/images/logos/profile.png",
        "/images/logos/mobile.png"
      ]
    };
  },
  mounted() {
    AOS.init({
      once: true
    });
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  _push(ssrRenderComponent(_component_v_container, mergeProps({ class: "fixed-width" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h4 class="text-center use-text-title2" data-v-b0b39382${_scopeId}>${ssrInterpolate(_ctx.$t("mobileLanding.company_title"))}</h4><div class="root" data-v-b0b39382${_scopeId}><div data-aos="fade-up" data-aos-offset="200" data-aos-delay="300" data-aos-duration="500" data-v-b0b39382${_scopeId}><div data-v-b0b39382${_scopeId}><!--[-->`);
        ssrRenderList($data.logos, (logo, index2) => {
          _push2(`<img${ssrRenderAttr("src", logo)}${ssrRenderAttr("alt", "logo" + index2)} data-v-b0b39382${_scopeId}>`);
        });
        _push2(`<!--]--></div></div></div>`);
      } else {
        return [
          createVNode("h4", { class: "text-center use-text-title2" }, toDisplayString(_ctx.$t("mobileLanding.company_title")), 1),
          createVNode("div", { class: "root" }, [
            createVNode("div", {
              "data-aos": "fade-up",
              "data-aos-offset": "200",
              "data-aos-delay": "300",
              "data-aos-duration": "500"
            }, [
              createVNode("div", null, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.logos, (logo, index2) => {
                  return openBlock(), createBlock("img", {
                    key: index2,
                    src: logo,
                    alt: "logo" + index2
                  }, null, 8, ["src", "alt"]);
                }), 128))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CompanyLogo/CompanyLogo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CompanyLogo = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-b0b39382"]]);
const _sfc_main$4 = {
  props: {
    caption: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_btn = resolveComponent("v-btn");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["news", $props.type]
  }, _attrs))} data-v-66987b93><figure data-v-66987b93><img${ssrRenderAttr("src", $props.img)} alt="thumb" data-v-66987b93></figure>`);
  _push(ssrRenderComponent(_component_v_card, { class: "desc" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="text" data-v-66987b93${_scopeId}><p class="type caption" data-v-66987b93${_scopeId}>${ssrInterpolate($props.caption)}</p><p data-v-66987b93${_scopeId}>${ssrInterpolate($props.text)}</p></div>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          text: "",
          class: "btn"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Read more `);
            } else {
              return [
                createTextVNode(" Read more ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode("div", { class: "text" }, [
            createVNode("p", { class: "type caption" }, toDisplayString($props.caption), 1),
            createVNode("p", null, toDisplayString($props.text), 1)
          ]),
          createVNode(_component_v_btn, {
            text: "",
            class: "btn"
          }, {
            default: withCtx(() => [
              createTextVNode(" Read more ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/News.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const NewsCard = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-66987b93"]]);
const _sfc_main$3 = {
  components: {
    NewsCard,
    ParallaxLarge,
    "title-main": Title
  },
  data: () => ({
    imgAPI
  }),
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xsAndDown;
      return xsDown;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_parallax_large = resolveComponent("parallax-large");
  const _component_title_main = resolveComponent("title-main");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_news_card = resolveComponent("news-card");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "root" }, _attrs))} data-v-cdd41e67><div class="deco-bg-top" data-v-cdd41e67></div><div class="parallax-event" data-v-cdd41e67>`);
  _push(ssrRenderComponent(_component_parallax_large, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_title_main, { align: "center" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("mobileLanding.news_title"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("mobileLanding.news_title")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p align="center" class="use-text-subtitle2" data-v-cdd41e67>${ssrInterpolate(_ctx.$t("mobileLanding.news_desc"))}</p><div class="blog-wrap" data-v-cdd41e67>`);
  _push(ssrRenderComponent(_component_v_container, { class: "fixed-width" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, { class: "spacing6 list-news" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_news_card, {
                      img: _ctx.imgAPI.photo[11],
                      type: "potrait",
                      caption: "headline",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_news_card, {
                        img: _ctx.imgAPI.photo[11],
                        type: "potrait",
                        caption: "headline",
                        text: "Sed imperdiet enim ligula, vitae viverra justo."
                      }, null, 8, ["img"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_news_card, {
                      type: $options.isMobile ? "potrait" : "landscape",
                      img: _ctx.imgAPI.photo[1],
                      caption: "news",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_news_card, {
                      type: $options.isMobile ? "potrait" : "landscape",
                      img: _ctx.imgAPI.photo[2],
                      caption: "news",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_news_card, {
                        type: $options.isMobile ? "potrait" : "landscape",
                        img: _ctx.imgAPI.photo[1],
                        caption: "news",
                        text: "Sed imperdiet enim ligula, vitae viverra justo."
                      }, null, 8, ["type", "img"]),
                      createVNode(_component_news_card, {
                        type: $options.isMobile ? "potrait" : "landscape",
                        img: _ctx.imgAPI.photo[2],
                        caption: "news",
                        text: "Sed imperdiet enim ligula, vitae viverra justo."
                      }, null, 8, ["type", "img"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_news_card, {
                      img: _ctx.imgAPI.photo[11],
                      type: "potrait",
                      caption: "headline",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, 8, ["img"])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  md: "6",
                  cols: "12",
                  class: "pa-6"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_news_card, {
                      type: $options.isMobile ? "potrait" : "landscape",
                      img: _ctx.imgAPI.photo[1],
                      caption: "news",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, 8, ["type", "img"]),
                    createVNode(_component_news_card, {
                      type: $options.isMobile ? "potrait" : "landscape",
                      img: _ctx.imgAPI.photo[2],
                      caption: "news",
                      text: "Sed imperdiet enim ligula, vitae viverra justo."
                    }, null, 8, ["type", "img"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, { class: "spacing6 list-news" }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_news_card, {
                    img: _ctx.imgAPI.photo[11],
                    type: "potrait",
                    caption: "headline",
                    text: "Sed imperdiet enim ligula, vitae viverra justo."
                  }, null, 8, ["img"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                md: "6",
                cols: "12",
                class: "pa-6"
              }, {
                default: withCtx(() => [
                  createVNode(_component_news_card, {
                    type: $options.isMobile ? "potrait" : "landscape",
                    img: _ctx.imgAPI.photo[1],
                    caption: "news",
                    text: "Sed imperdiet enim ligula, vitae viverra justo."
                  }, null, 8, ["type", "img"]),
                  createVNode(_component_news_card, {
                    type: $options.isMobile ? "potrait" : "landscape",
                    img: _ctx.imgAPI.photo[2],
                    caption: "news",
                    text: "Sed imperdiet enim ligula, vitae viverra justo."
                  }, null, 8, ["type", "img"])
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsEvent/NewsEvent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const NewsEvent = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-cdd41e67"]]);
const _sfc_main$2 = {
  components: {
    "footer-main": Footer
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_footer_main = resolveComponent("footer-main");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer-deco" }, _attrs))} data-v-2f909d91><svg class="deco-top back" data-v-2f909d91><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-2f909d91></use></svg><svg class="deco-top cover" data-v-2f909d91><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-2f909d91></use></svg><div class="decoration" data-v-2f909d91></div><div class="action" data-v-2f909d91><h4 class="use-text-subtitle" data-v-2f909d91>${ssrInterpolate(_ctx.$t("mobileLanding.footer_text"))}</h4><div class="btn-area" data-v-2f909d91>`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$2)} alt="app store" data-v-2f909d91${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$2,
            alt: "app store"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt="play store" data-v-2f909d91${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$1,
            alt: "play store"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_footer_main, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer/FooterWithDeco.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FooterWithDeco = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-2f909d91"]]);
let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}
const _sfc_main$1 = {
  data() {
    return {
      menu,
      show: false,
      sections: {},
      activeMenu: "",
      menuList: [
        createData(menu[0], menu[0]),
        createData(menu[1], menu[1]),
        createData(menu[2], menu[2]),
        createData(menu[3], menu[3])
      ]
    };
  },
  mounted() {
    const section = document.querySelectorAll(".scroll-nav-content > *");
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop || 0;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 100;
      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });
      if (window.scrollY > 500) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_tooltip = resolveComponent("v-tooltip");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _directive_smooth_scroll = resolveDirective("smooth-scroll");
  const _directive_scroll = resolveDirective("scroll");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: [{ show: $data.show }, "page-nav"]
  }, _attrs, ssrGetDirectiveProps(_ctx, _directive_scroll, $options.handleScroll)))} data-v-c4b36b7a><nav class="section-nav" data-v-c4b36b7a><!--[-->`);
  ssrRenderList($data.menuList, (item, index2) => {
    _push(`<a${ssrRenderAttrs(mergeProps({
      key: index2,
      style: { top: 30 * ($data.menu.length - item.id) + "px" },
      href: "#" + item.url,
      class: { active: $data.activeMenu === item.url }
    }, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll, { offset: -100 })))} data-v-c4b36b7a>`);
    _push(ssrRenderComponent(_component_v_tooltip, {
      "nudge-top": 5,
      location: "left"
    }, {
      activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span${ssrRenderAttrs(props)} data-v-c4b36b7a${_scopeId}>${ssrInterpolate(_ctx.$t("mobileLanding.header_" + item.name))}</span>`);
        } else {
          return [
            createVNode("span", props, toDisplayString(_ctx.$t("mobileLanding.header_" + item.name)), 17)
          ];
        }
      }),
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<span class="tooltip" data-v-c4b36b7a${_scopeId}>${ssrInterpolate(_ctx.$t("mobileLanding.header_" + item.name))}</span>`);
        } else {
          return [
            createVNode("span", { class: "tooltip" }, toDisplayString(_ctx.$t("mobileLanding.header_" + item.name)), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</a>`);
  });
  _push(`<!--]--></nav>`);
  _push(ssrRenderComponent(_component_v_tooltip, {
    "nudge-top": 25,
    location: "left"
  }, {
    activator: withCtx(({ props }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, mergeProps({
          icon: "",
          size: "large",
          class: "fab anchor-link scrollactive-item",
          href: "#home",
          color: "primary"
        }, props, ssrGetDirectiveProps(_ctx, _directive_smooth_scroll)), {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, { class: "icon" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` mdi-arrow-up `);
                  } else {
                    return [
                      createTextVNode(" mdi-arrow-up ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_icon, { class: "icon" }, {
                  default: withCtx(() => [
                    createTextVNode(" mdi-arrow-up ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          withDirectives((openBlock(), createBlock(_component_v_btn, mergeProps({
            icon: "",
            size: "large",
            class: "fab anchor-link scrollactive-item",
            href: "#home",
            color: "primary"
          }, props), {
            default: withCtx(() => [
              createVNode(_component_v_icon, { class: "icon" }, {
                default: withCtx(() => [
                  createTextVNode(" mdi-arrow-up ")
                ]),
                _: 1
              })
            ]),
            _: 2
          }, 1040)), [
            [_directive_smooth_scroll]
          ])
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="tooltip" data-v-c4b36b7a${_scopeId}>To Top</span>`);
      } else {
        return [
          createVNode("span", { class: "tooltip" }, "To Top")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageNav/PageNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PageNav = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c4b36b7a"]]);
const _sfc_main = /* @__PURE__ */ defineNuxtComponent({
  components: {
    "main-header": Header,
    Banner,
    Counter,
    Feature,
    Showcase,
    Testimonials,
    CompanyLogo,
    Faq,
    NewsEvent,
    FooterWithDeco,
    PageNav,
    Hidden,
    Notification
  },
  setup() {
    useRouter$1();
    useCookie("i18n_redirected");
    const i18nLocale = useI18n();
    "/" + i18nLocale.fallbackLocale.value;
  },
  head() {
    return {
      title: brand.mobile.name + " - Home Page"
    };
  }
}, "$PslAyef5YX");
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_header = resolveComponent("main-header");
  const _component_banner = resolveComponent("banner");
  const _component_counter = resolveComponent("counter");
  const _component_feature = resolveComponent("feature");
  const _component_showcase = resolveComponent("showcase");
  const _component_testimonials = resolveComponent("testimonials");
  const _component_faq = resolveComponent("faq");
  const _component_company_logo = resolveComponent("company-logo");
  const _component_news_event = resolveComponent("news-event");
  const _component_footer_with_deco = resolveComponent("footer-with-deco");
  const _component_hidden = resolveComponent("hidden");
  const _component_page_nav = resolveComponent("page-nav");
  const _component_notification = resolveComponent("notification");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-5b683222><div class="main-wrap" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_main_header, null, null, _parent));
  _push(`<div class="container-wrap scroll-nav-content" data-v-5b683222><section id="home" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_banner, null, null, _parent));
  _push(`</section><section id="counter" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_counter, null, null, _parent));
  _push(`</section><section id="feature" class="space-top" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_feature, null, null, _parent));
  _push(`</section><section id="showcase" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_showcase, null, null, _parent));
  _push(`</section><section id="testimonials" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_testimonials, null, null, _parent));
  _push(`</section><section id="faq" class="space-top-short" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_faq, null, null, _parent));
  _push(`</section><section class="space-top-short" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_company_logo, null, null, _parent));
  _push(`</section><section class="space-top-short" data-v-5b683222>`);
  _push(ssrRenderComponent(_component_news_event, null, null, _parent));
  _push(`</section></div>`);
  _push(ssrRenderComponent(_component_footer_with_deco, null, null, _parent));
  _push(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_page_nav, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_page_nav)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_hidden, { point: "mdDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_notification, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_notification)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5b683222"]]);

export { index as default };
//# sourceMappingURL=index-13f7e911.mjs.map
