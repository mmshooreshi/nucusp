globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1804-xbkdcEUFOKW4f/G8a6Gqqu7lqAE\"",
    "mtime": "2023-07-25T05:46:30.759Z",
    "size": 6148,
    "path": "../public/.DS_Store"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-X4OVmkPaZm9o4Rqkt+pXGnmmeWQ\"",
    "mtime": "2023-07-25T05:46:30.758Z",
    "size": 1150,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Large.7bc687db.js": {
    "type": "application/javascript",
    "etag": "\"4e9-9br0CuTysn4W+/7wN1c2ieSIDxs\"",
    "mtime": "2023-07-25T05:46:30.579Z",
    "size": 1257,
    "path": "../public/_nuxt/Large.7bc687db.js"
  },
  "/_nuxt/Large.a7f39440.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3f7a-eCv9N9+HaSSDho7iV6fIJQd0b/Y\"",
    "mtime": "2023-07-25T05:46:30.578Z",
    "size": 16250,
    "path": "../public/_nuxt/Large.a7f39440.css"
  },
  "/_nuxt/Notification.02e211ea.js": {
    "type": "application/javascript",
    "etag": "\"2b1-abKMK+AK9VpCBHQTAorYclj8KaM\"",
    "mtime": "2023-07-25T05:46:30.576Z",
    "size": 689,
    "path": "../public/_nuxt/Notification.02e211ea.js"
  },
  "/_nuxt/Notification.ee6b3c0d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32e5-Mld9dckjz0JyRwgidP29QGT1E9w\"",
    "mtime": "2023-07-25T05:46:30.575Z",
    "size": 13029,
    "path": "../public/_nuxt/Notification.ee6b3c0d.css"
  },
  "/_nuxt/ajax-loader.e7b44c86.gif": {
    "type": "image/gif",
    "etag": "\"1052-ehqkNhQ5Y4K7FeX95XTZzc0haY8\"",
    "mtime": "2023-07-25T05:46:30.573Z",
    "size": 4178,
    "path": "../public/_nuxt/ajax-loader.e7b44c86.gif"
  },
  "/_nuxt/blank-page.20511811.js": {
    "type": "application/javascript",
    "etag": "\"3a0-aAAnOdQwGqZcXFtTks4N0ua63RE\"",
    "mtime": "2023-07-25T05:46:30.572Z",
    "size": 928,
    "path": "../public/_nuxt/blank-page.20511811.js"
  },
  "/_nuxt/blank-page.d4e9919d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3031-RPQTCiEePWgoge6mY2vx9DRDmVk\"",
    "mtime": "2023-07-25T05:46:30.571Z",
    "size": 12337,
    "path": "../public/_nuxt/blank-page.d4e9919d.css"
  },
  "/_nuxt/contact.612baeda.js": {
    "type": "application/javascript",
    "etag": "\"1401-AEwHbeumLjNFhFl9Xxh3OsXcyRk\"",
    "mtime": "2023-07-25T05:46:30.569Z",
    "size": 5121,
    "path": "../public/_nuxt/contact.612baeda.js"
  },
  "/_nuxt/contact.a3b864bb.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e19-buy5/IL6AXaCrlVSfmG4grjlbhQ\"",
    "mtime": "2023-07-25T05:46:30.568Z",
    "size": 24089,
    "path": "../public/_nuxt/contact.a3b864bb.css"
  },
  "/_nuxt/default.0af1aa94.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2767-epuJCayKFC9qs2gB2h9+dkb44i0\"",
    "mtime": "2023-07-25T05:46:30.566Z",
    "size": 10087,
    "path": "../public/_nuxt/default.0af1aa94.css"
  },
  "/_nuxt/default.8f34ad25.js": {
    "type": "application/javascript",
    "etag": "\"5bf-oBXIC9Ohvy+M4EPh23eavtxCgIw\"",
    "mtime": "2023-07-25T05:46:30.564Z",
    "size": 1471,
    "path": "../public/_nuxt/default.8f34ad25.js"
  },
  "/_nuxt/en-US.a473b2d7.js": {
    "type": "application/javascript",
    "etag": "\"1d5a-88/l+/538sbPHQcscu/e8/Zyiig\"",
    "mtime": "2023-07-25T05:46:30.562Z",
    "size": 7514,
    "path": "../public/_nuxt/en-US.a473b2d7.js"
  },
  "/_nuxt/entry.18eea084.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"c71de-ji5wgPq8X1+v/+oKiExmymOGwWo\"",
    "mtime": "2023-07-25T05:46:30.560Z",
    "size": 815582,
    "path": "../public/_nuxt/entry.18eea084.css"
  },
  "/_nuxt/entry.a1459910.js": {
    "type": "application/javascript",
    "etag": "\"98064-NsuRqw3nXcBOD5rz36nzYgtoKWA\"",
    "mtime": "2023-07-25T05:46:30.552Z",
    "size": 622692,
    "path": "../public/_nuxt/entry.a1459910.js"
  },
  "/_nuxt/fa-IR.794c9999.js": {
    "type": "application/javascript",
    "etag": "\"2105-KZHGscfPHnK1cw4uacRJkpa07kM\"",
    "mtime": "2023-07-25T05:46:30.546Z",
    "size": 8453,
    "path": "../public/_nuxt/fa-IR.794c9999.js"
  },
  "/_nuxt/index.1166a91a.js": {
    "type": "application/javascript",
    "etag": "\"176aa-+Gl64Fy9yPZ9RgdfnXkR05USznk\"",
    "mtime": "2023-07-25T05:46:30.544Z",
    "size": 95914,
    "path": "../public/_nuxt/index.1166a91a.js"
  },
  "/_nuxt/index.8713106b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3fa72-DwhNwFEw1PMAS/bn6jpC/HelmSA\"",
    "mtime": "2023-07-25T05:46:30.542Z",
    "size": 260722,
    "path": "../public/_nuxt/index.8713106b.css"
  },
  "/_nuxt/materialdesignicons-webfont.67d24abe.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1388d4-MnWK6SbfCpKcnlAuemBtiwuopTo\"",
    "mtime": "2023-07-25T05:46:30.538Z",
    "size": 1280212,
    "path": "../public/_nuxt/materialdesignicons-webfont.67d24abe.eot"
  },
  "/_nuxt/materialdesignicons-webfont.80bb28b3.woff": {
    "type": "font/woff",
    "etag": "\"8ccec-5ZgN4S2fm96iQiYk/0JVsfifYgk\"",
    "mtime": "2023-07-25T05:46:30.529Z",
    "size": 576748,
    "path": "../public/_nuxt/materialdesignicons-webfont.80bb28b3.woff"
  },
  "/_nuxt/materialdesignicons-webfont.a58ecb54.ttf": {
    "type": "font/ttf",
    "etag": "\"1387f8-j78E9Zp9n71W2+dBoUcVh2zLaPY\"",
    "mtime": "2023-07-25T05:46:30.524Z",
    "size": 1279992,
    "path": "../public/_nuxt/materialdesignicons-webfont.a58ecb54.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.c1c004a9.woff2": {
    "type": "font/woff2",
    "etag": "\"60dbc-Ny7iWtVyfhmKnwTiem7ds7fgSTo\"",
    "mtime": "2023-07-25T05:46:30.516Z",
    "size": 396732,
    "path": "../public/_nuxt/materialdesignicons-webfont.c1c004a9.woff2"
  },
  "/_nuxt/mobile-logo.b9747a2d.svg": {
    "type": "image/svg+xml",
    "etag": "\"2651-BZW+fKMJ0SeKip2w7V++Je7TfaU\"",
    "mtime": "2023-07-25T05:46:30.511Z",
    "size": 9809,
    "path": "../public/_nuxt/mobile-logo.b9747a2d.svg"
  },
  "/_nuxt/slick.12459f22.svg": {
    "type": "image/svg+xml",
    "etag": "\"868-F/Y8b2ExOJRiuj2BS33fgzRHBfk\"",
    "mtime": "2023-07-25T05:46:30.510Z",
    "size": 2152,
    "path": "../public/_nuxt/slick.12459f22.svg"
  },
  "/_nuxt/tr-TR.cb5ab88e.js": {
    "type": "application/javascript",
    "etag": "\"1eec-6yixzjiP1wgzQD/ZqsDTAzQo0Qc\"",
    "mtime": "2023-07-25T05:46:30.508Z",
    "size": 7916,
    "path": "../public/_nuxt/tr-TR.cb5ab88e.js"
  },
  "/images/flag-logo.png": {
    "type": "image/png",
    "etag": "\"4599-PcenpPvP6STQ4oaMDy6iIm2uyXQ\"",
    "mtime": "2023-07-25T05:46:30.677Z",
    "size": 17817,
    "path": "../public/images/flag-logo.png"
  },
  "/images/loading.gif": {
    "type": "image/gif",
    "etag": "\"7e42-eEM7bxtXSuQUi/xymEut9Dfu2NM\"",
    "mtime": "2023-07-25T05:46:30.675Z",
    "size": 32322,
    "path": "../public/images/loading.gif"
  },
  "/images/mobile-logo.png": {
    "type": "image/png",
    "etag": "\"1e019-p9Ipoh35ghqTzwCL3R6XGM9BByg\"",
    "mtime": "2023-07-25T05:46:30.589Z",
    "size": 122905,
    "path": "../public/images/mobile-logo.png"
  },
  "/images/mobile-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"2651-BZW+fKMJ0SeKip2w7V++Je7TfaU\"",
    "mtime": "2023-07-25T05:46:30.586Z",
    "size": 9809,
    "path": "../public/images/mobile-logo.svg"
  },
  "/favicons/android-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"2bbf-WayrlfkR80Gk7xEPRk7OuDs8Ke4\"",
    "mtime": "2023-07-25T05:46:30.756Z",
    "size": 11199,
    "path": "../public/favicons/android-icon-144x144.png"
  },
  "/favicons/android-icon-192x192.png": {
    "type": "image/png",
    "etag": "\"35de-s5wxkphQQiHk5QgrKNLLoJjefsg\"",
    "mtime": "2023-07-25T05:46:30.755Z",
    "size": 13790,
    "path": "../public/favicons/android-icon-192x192.png"
  },
  "/favicons/android-icon-36x36.png": {
    "type": "image/png",
    "etag": "\"990-4qQBT4vk/7UPmdeUaik2PAs1evI\"",
    "mtime": "2023-07-25T05:46:30.753Z",
    "size": 2448,
    "path": "../public/favicons/android-icon-36x36.png"
  },
  "/favicons/android-icon-48x48.png": {
    "type": "image/png",
    "etag": "\"ca9-Z6TtcY5KPKn4nfCerdseSr2h1Xs\"",
    "mtime": "2023-07-25T05:46:30.751Z",
    "size": 3241,
    "path": "../public/favicons/android-icon-48x48.png"
  },
  "/favicons/android-icon-72x72.png": {
    "type": "image/png",
    "etag": "\"1356-eEbk+ew1nDgDMuOy6FdLKZX6i0A\"",
    "mtime": "2023-07-25T05:46:30.749Z",
    "size": 4950,
    "path": "../public/favicons/android-icon-72x72.png"
  },
  "/favicons/android-icon-96x96.png": {
    "type": "image/png",
    "etag": "\"1b20-l3pfqOo3a5nY4ACiimvryCFGFs4\"",
    "mtime": "2023-07-25T05:46:30.747Z",
    "size": 6944,
    "path": "../public/favicons/android-icon-96x96.png"
  },
  "/favicons/apple-icon-114x114.png": {
    "type": "image/png",
    "etag": "\"212d-nULYzsvclIyeW4jDxWsEz/Rgucw\"",
    "mtime": "2023-07-25T05:46:30.746Z",
    "size": 8493,
    "path": "../public/favicons/apple-icon-114x114.png"
  },
  "/favicons/apple-icon-120x120.png": {
    "type": "image/png",
    "etag": "\"22b2-W47kRrRDyqACy2eyTPm9vLdl+DU\"",
    "mtime": "2023-07-25T05:46:30.744Z",
    "size": 8882,
    "path": "../public/favicons/apple-icon-120x120.png"
  },
  "/favicons/apple-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"2bbf-WayrlfkR80Gk7xEPRk7OuDs8Ke4\"",
    "mtime": "2023-07-25T05:46:30.742Z",
    "size": 11199,
    "path": "../public/favicons/apple-icon-144x144.png"
  },
  "/favicons/apple-icon-152x152.png": {
    "type": "image/png",
    "etag": "\"2e75-VukDKf8rsyUk1Z6ZCf1/aKWQ0TQ\"",
    "mtime": "2023-07-25T05:46:30.741Z",
    "size": 11893,
    "path": "../public/favicons/apple-icon-152x152.png"
  },
  "/favicons/apple-icon-180x180.png": {
    "type": "image/png",
    "etag": "\"3ba2-mfJuxfG80u6VW1r0x7uU3V3cyJg\"",
    "mtime": "2023-07-25T05:46:30.739Z",
    "size": 15266,
    "path": "../public/favicons/apple-icon-180x180.png"
  },
  "/favicons/apple-icon-57x57.png": {
    "type": "image/png",
    "etag": "\"eeb-DpejgqwXfEZRBetB4RHDri9t0q4\"",
    "mtime": "2023-07-25T05:46:30.735Z",
    "size": 3819,
    "path": "../public/favicons/apple-icon-57x57.png"
  },
  "/favicons/apple-icon-60x60.png": {
    "type": "image/png",
    "etag": "\"1031-uSdKU3Cy52iyL9dIJorwC39KMaA\"",
    "mtime": "2023-07-25T05:46:30.733Z",
    "size": 4145,
    "path": "../public/favicons/apple-icon-60x60.png"
  },
  "/favicons/apple-icon-72x72.png": {
    "type": "image/png",
    "etag": "\"1356-eEbk+ew1nDgDMuOy6FdLKZX6i0A\"",
    "mtime": "2023-07-25T05:46:30.730Z",
    "size": 4950,
    "path": "../public/favicons/apple-icon-72x72.png"
  },
  "/favicons/apple-icon-76x76.png": {
    "type": "image/png",
    "etag": "\"148f-lt48/iH5KaESYLoligvDmgLJEng\"",
    "mtime": "2023-07-25T05:46:30.729Z",
    "size": 5263,
    "path": "../public/favicons/apple-icon-76x76.png"
  },
  "/favicons/apple-icon-precomposed.png": {
    "type": "image/png",
    "etag": "\"381c-+bRgk9dgq+hhJ/LTgmpYStSGOSI\"",
    "mtime": "2023-07-25T05:46:30.726Z",
    "size": 14364,
    "path": "../public/favicons/apple-icon-precomposed.png"
  },
  "/favicons/apple-icon.png": {
    "type": "image/png",
    "etag": "\"381c-+bRgk9dgq+hhJ/LTgmpYStSGOSI\"",
    "mtime": "2023-07-25T05:46:30.722Z",
    "size": 14364,
    "path": "../public/favicons/apple-icon.png"
  },
  "/favicons/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"119-hTOJtsQnOWWJnrEwLWZeuROV/Qw\"",
    "mtime": "2023-07-25T05:46:30.720Z",
    "size": 281,
    "path": "../public/favicons/browserconfig.xml"
  },
  "/favicons/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"618-qyUkKS+RBuiYblghUiniiKpDDE8\"",
    "mtime": "2023-07-25T05:46:30.718Z",
    "size": 1560,
    "path": "../public/favicons/favicon-16x16.png"
  },
  "/favicons/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"8b3-jHG+bODBAIZkAAFezalqIe20/QI\"",
    "mtime": "2023-07-25T05:46:30.716Z",
    "size": 2227,
    "path": "../public/favicons/favicon-32x32.png"
  },
  "/favicons/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"1b20-l3pfqOo3a5nY4ACiimvryCFGFs4\"",
    "mtime": "2023-07-25T05:46:30.714Z",
    "size": 6944,
    "path": "../public/favicons/favicon-96x96.png"
  },
  "/favicons/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-X4OVmkPaZm9o4Rqkt+pXGnmmeWQ\"",
    "mtime": "2023-07-25T05:46:30.712Z",
    "size": 1150,
    "path": "../public/favicons/favicon.ico"
  },
  "/favicons/manifest.json": {
    "type": "application/json",
    "etag": "\"300-1eZCjRlgOwVJh5QrGNwU4d3TKLQ\"",
    "mtime": "2023-07-25T05:46:30.711Z",
    "size": 768,
    "path": "../public/favicons/manifest.json"
  },
  "/favicons/ms-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"2bbf-WayrlfkR80Gk7xEPRk7OuDs8Ke4\"",
    "mtime": "2023-07-25T05:46:30.709Z",
    "size": 11199,
    "path": "../public/favicons/ms-icon-144x144.png"
  },
  "/favicons/ms-icon-150x150.png": {
    "type": "image/png",
    "etag": "\"2e04-lw57PcOrCMcl982gOinSZKaiS6U\"",
    "mtime": "2023-07-25T05:46:30.706Z",
    "size": 11780,
    "path": "../public/favicons/ms-icon-150x150.png"
  },
  "/favicons/ms-icon-310x310.png": {
    "type": "image/png",
    "etag": "\"82a6-kfbc+gCZh/q7vU5ux7nFDQicN/0\"",
    "mtime": "2023-07-25T05:46:30.703Z",
    "size": 33446,
    "path": "../public/favicons/ms-icon-310x310.png"
  },
  "/favicons/ms-icon-70x70.png": {
    "type": "image/png",
    "etag": "\"12a8-jD8cDMYmdUl6MuC1KtieLDdLKy0\"",
    "mtime": "2023-07-25T05:46:30.701Z",
    "size": 4776,
    "path": "../public/favicons/ms-icon-70x70.png"
  },
  "/scripts/particles-spray.js": {
    "type": "application/javascript",
    "etag": "\"f1e-K3R+eid/nQooDtyT22QaaFquvos\"",
    "mtime": "2023-07-25T05:46:30.583Z",
    "size": 3870,
    "path": "../public/scripts/particles-spray.js"
  },
  "/images/avatars/pp_boy.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e9-WWZmJp7MRAF+d9tcDvEp1BWrqWM\"",
    "mtime": "2023-07-25T05:46:30.697Z",
    "size": 745,
    "path": "../public/images/avatars/pp_boy.svg"
  },
  "/images/avatars/pp_boy2.svg": {
    "type": "image/svg+xml",
    "etag": "\"6aab-cg1osW9I3SQQHsHu8vatmDXGzTA\"",
    "mtime": "2023-07-25T05:46:30.696Z",
    "size": 27307,
    "path": "../public/images/avatars/pp_boy2.svg"
  },
  "/images/avatars/pp_boy3.svg": {
    "type": "image/svg+xml",
    "etag": "\"6a82-nH2sF9kcAbSjDpc1jgT03vkA660\"",
    "mtime": "2023-07-25T05:46:30.694Z",
    "size": 27266,
    "path": "../public/images/avatars/pp_boy3.svg"
  },
  "/images/avatars/pp_boy4.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b7d-vr5BWU+tdpWWxIkumYFficZTdnc\"",
    "mtime": "2023-07-25T05:46:30.692Z",
    "size": 27517,
    "path": "../public/images/avatars/pp_boy4.svg"
  },
  "/images/avatars/pp_boy5.svg": {
    "type": "image/svg+xml",
    "etag": "\"6b55-n5I/07nz5SQ6Giq7IMaxqNKeFcg\"",
    "mtime": "2023-07-25T05:46:30.690Z",
    "size": 27477,
    "path": "../public/images/avatars/pp_boy5.svg"
  },
  "/images/avatars/pp_girl.svg": {
    "type": "image/svg+xml",
    "etag": "\"3bc-4eWctLI8jzIrJ+g3SNOHJ7WCNi8\"",
    "mtime": "2023-07-25T05:46:30.688Z",
    "size": 956,
    "path": "../public/images/avatars/pp_girl.svg"
  },
  "/images/avatars/pp_girl2.svg": {
    "type": "image/svg+xml",
    "etag": "\"6c8c-d30pprwbgN8tb4j7R0FKV53TFjE\"",
    "mtime": "2023-07-25T05:46:30.686Z",
    "size": 27788,
    "path": "../public/images/avatars/pp_girl2.svg"
  },
  "/images/avatars/pp_girl3.svg": {
    "type": "image/svg+xml",
    "etag": "\"6c84-dp/jPJfURv+3816uhHPzitkYGv8\"",
    "mtime": "2023-07-25T05:46:30.684Z",
    "size": 27780,
    "path": "../public/images/avatars/pp_girl3.svg"
  },
  "/images/avatars/pp_girl4.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d52-j4ZIuC3mm7hpcIW1ZzRq2VB0aWc\"",
    "mtime": "2023-07-25T05:46:30.682Z",
    "size": 27986,
    "path": "../public/images/avatars/pp_girl4.svg"
  },
  "/images/avatars/pp_girl5.svg": {
    "type": "image/svg+xml",
    "etag": "\"6d67-TLKVS2y8C/YvRZ+ebM3aX7Iu32U\"",
    "mtime": "2023-07-25T05:46:30.680Z",
    "size": 28007,
    "path": "../public/images/avatars/pp_girl5.svg"
  },
  "/images/logos/agency.png": {
    "type": "image/png",
    "etag": "\"608-3AbrfUY4ZxwvXHe7hxhNl1wOgiQ\"",
    "mtime": "2023-07-25T05:46:30.672Z",
    "size": 1544,
    "path": "../public/images/logos/agency.png"
  },
  "/images/logos/architect.png": {
    "type": "image/png",
    "etag": "\"279c-ZP8sUyKPJj6k2Nry9OxssKNWGa0\"",
    "mtime": "2023-07-25T05:46:30.670Z",
    "size": 10140,
    "path": "../public/images/logos/architect.png"
  },
  "/images/logos/cloud.png": {
    "type": "image/png",
    "etag": "\"a87-Gw23Tzz8KzlcItAvb1Wbj5LLok8\"",
    "mtime": "2023-07-25T05:46:30.668Z",
    "size": 2695,
    "path": "../public/images/logos/cloud.png"
  },
  "/images/logos/coin.png": {
    "type": "image/png",
    "etag": "\"19b4-chHmtiJ01qsMNnPg47jJeAGhud8\"",
    "mtime": "2023-07-25T05:46:30.665Z",
    "size": 6580,
    "path": "../public/images/logos/coin.png"
  },
  "/images/logos/fashion.png": {
    "type": "image/png",
    "etag": "\"3d1-PY+WIUwrs6DOLcn3n2XBwOZECqo\"",
    "mtime": "2023-07-25T05:46:30.664Z",
    "size": 977,
    "path": "../public/images/logos/fashion.png"
  },
  "/images/logos/mobile.png": {
    "type": "image/png",
    "etag": "\"9cf-FaU23W/lfD3rK3JhMqseHHxsY6U\"",
    "mtime": "2023-07-25T05:46:30.662Z",
    "size": 2511,
    "path": "../public/images/logos/mobile.png"
  },
  "/images/logos/profile.png": {
    "type": "image/png",
    "etag": "\"467-igvAgNG7OrIoihTWCrUrsIU5lFQ\"",
    "mtime": "2023-07-25T05:46:30.661Z",
    "size": 1127,
    "path": "../public/images/logos/profile.png"
  },
  "/images/logos/saas.png": {
    "type": "image/png",
    "etag": "\"9c8-taLpNnjNvTurS+pf9NLOsh+2OhE\"",
    "mtime": "2023-07-25T05:46:30.660Z",
    "size": 2504,
    "path": "../public/images/logos/saas.png"
  },
  "/images/logos/starter.png": {
    "type": "image/png",
    "etag": "\"3bc-u8aJagO3DXxWdLBZkcRAF4vBr7w\"",
    "mtime": "2023-07-25T05:46:30.658Z",
    "size": 956,
    "path": "../public/images/logos/starter.png"
  },
  "/images/mobile/animation-banner.png": {
    "type": "image/png",
    "etag": "\"15fe-B/1LXpUHizMYyNE2NI68ryXslw4\"",
    "mtime": "2023-07-25T05:46:30.655Z",
    "size": 5630,
    "path": "../public/images/mobile/animation-banner.png"
  },
  "/images/mobile/app-store.png": {
    "type": "image/png",
    "etag": "\"39e6-CV+6AmnI4IcHXrTHI3o5I4UPrVs\"",
    "mtime": "2023-07-25T05:46:30.654Z",
    "size": 14822,
    "path": "../public/images/mobile/app-store.png"
  },
  "/images/mobile/circle.svg": {
    "type": "image/svg+xml",
    "etag": "\"16c-ntDD7w6XnbjNUqu9GS7lQ2/6Utc\"",
    "mtime": "2023-07-25T05:46:30.651Z",
    "size": 364,
    "path": "../public/images/mobile/circle.svg"
  },
  "/images/mobile/deco-dark-top.svg": {
    "type": "image/svg+xml",
    "etag": "\"29c-UnpSr9MgKsYiaRijdqV+3mVE+PY\"",
    "mtime": "2023-07-25T05:46:30.648Z",
    "size": 668,
    "path": "../public/images/mobile/deco-dark-top.svg"
  },
  "/images/mobile/deco-feature.svg": {
    "type": "image/svg+xml",
    "etag": "\"23f-KJ24aDeVPa+8yrDLd8H24CmSkHc\"",
    "mtime": "2023-07-25T05:46:30.646Z",
    "size": 575,
    "path": "../public/images/mobile/deco-feature.svg"
  },
  "/images/mobile/deco-light-top.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e0-/Vo//G/3zGCWMnveJYjj9sHKC7k\"",
    "mtime": "2023-07-25T05:46:30.645Z",
    "size": 736,
    "path": "../public/images/mobile/deco-light-top.svg"
  },
  "/images/mobile/deco-line-dark.png": {
    "type": "image/png",
    "etag": "\"2ae0-adVO+dbn1kPA/vsOjzAYzV4+K9Y\"",
    "mtime": "2023-07-25T05:46:30.644Z",
    "size": 10976,
    "path": "../public/images/mobile/deco-line-dark.png"
  },
  "/images/mobile/deco-line-light.png": {
    "type": "image/png",
    "etag": "\"28b1-gosiSd+zL++c8mTHOVZWV2ozJFY\"",
    "mtime": "2023-07-25T05:46:30.642Z",
    "size": 10417,
    "path": "../public/images/mobile/deco-line-light.png"
  },
  "/images/mobile/deco-line.svg": {
    "type": "image/svg+xml",
    "etag": "\"29a-kF122oyCC/NmY29ejsPKNdHJXNM\"",
    "mtime": "2023-07-25T05:46:30.641Z",
    "size": 666,
    "path": "../public/images/mobile/deco-line.svg"
  },
  "/images/mobile/deco-wave-bottom.svg": {
    "type": "image/svg+xml",
    "etag": "\"258-oTHwblK8yByTkgKZNJ+ckiu3bFw\"",
    "mtime": "2023-07-25T05:46:30.640Z",
    "size": 600,
    "path": "../public/images/mobile/deco-wave-bottom.svg"
  },
  "/images/mobile/deco-wave-dark.png": {
    "type": "image/png",
    "etag": "\"173d-/tlfy85dFX39y0NQWkOQV4Cyro4\"",
    "mtime": "2023-07-25T05:46:30.638Z",
    "size": 5949,
    "path": "../public/images/mobile/deco-wave-dark.png"
  },
  "/images/mobile/deco-wave-footer.png": {
    "type": "image/png",
    "etag": "\"54c1-nYUdG3SYHlf6bwK/xrflfvItkVI\"",
    "mtime": "2023-07-25T05:46:30.637Z",
    "size": 21697,
    "path": "../public/images/mobile/deco-wave-footer.png"
  },
  "/images/mobile/deco-wave-light.png": {
    "type": "image/png",
    "etag": "\"1a0d-lTeULY2Yqh6bLM/Qaq4DQUUiPqM\"",
    "mtime": "2023-07-25T05:46:30.635Z",
    "size": 6669,
    "path": "../public/images/mobile/deco-wave-light.png"
  },
  "/images/mobile/deco-wave-light.svg": {
    "type": "image/svg+xml",
    "etag": "\"2af-B5W0/R8/yyCQyn3t5ANRN3RcaV0\"",
    "mtime": "2023-07-25T05:46:30.634Z",
    "size": 687,
    "path": "../public/images/mobile/deco-wave-light.svg"
  },
  "/images/mobile/deco-wave-top.svg": {
    "type": "image/svg+xml",
    "etag": "\"238-lSk2SmTxEeWzvnqkJTskxlSkf/0\"",
    "mtime": "2023-07-25T05:46:30.633Z",
    "size": 568,
    "path": "../public/images/mobile/deco-wave-top.svg"
  },
  "/images/mobile/dot-many.svg": {
    "type": "image/svg+xml",
    "etag": "\"120e7-MRV0QdhvSMUpeReDbc7ml1hNupg\"",
    "mtime": "2023-07-25T05:46:30.631Z",
    "size": 73959,
    "path": "../public/images/mobile/dot-many.svg"
  },
  "/images/mobile/dot.svg": {
    "type": "image/svg+xml",
    "etag": "\"16ce-YIy3tf/mt1UdSQs7b0cuDT4cMYk\"",
    "mtime": "2023-07-25T05:46:30.629Z",
    "size": 5838,
    "path": "../public/images/mobile/dot.svg"
  },
  "/images/mobile/error-deco.svg": {
    "type": "image/svg+xml",
    "etag": "\"439-uOI4ETjkBT+2v8X4UlmdROhbcs8\"",
    "mtime": "2023-07-25T05:46:30.628Z",
    "size": 1081,
    "path": "../public/images/mobile/error-deco.svg"
  },
  "/images/mobile/faq.png": {
    "type": "image/png",
    "etag": "\"12b6e-O1Wf4Bge69+yC35ajOUxjNGuSjo\"",
    "mtime": "2023-07-25T05:46:30.627Z",
    "size": 76654,
    "path": "../public/images/mobile/faq.png"
  },
  "/images/mobile/mobile_banner.png": {
    "type": "image/png",
    "etag": "\"1a300-ydovFWqYDkPhjjolj++JH9jqnVU\"",
    "mtime": "2023-07-25T05:46:30.625Z",
    "size": 107264,
    "path": "../public/images/mobile/mobile_banner.png"
  },
  "/images/mobile/mobile_feature.png": {
    "type": "image/png",
    "etag": "\"1dd52-rB8X5W4DHv/2FwZxk+/FjC9I1Mw\"",
    "mtime": "2023-07-25T05:46:30.622Z",
    "size": 122194,
    "path": "../public/images/mobile/mobile_feature.png"
  },
  "/images/mobile/mobile_feature2.png": {
    "type": "image/png",
    "etag": "\"1e232-AFS6iU4F8MiqvWDcmAYUpjRldNg\"",
    "mtime": "2023-07-25T05:46:30.619Z",
    "size": 123442,
    "path": "../public/images/mobile/mobile_feature2.png"
  },
  "/images/mobile/play-store.png": {
    "type": "image/png",
    "etag": "\"4658-dri+OZkELULx20us+O/YoXqSIFM\"",
    "mtime": "2023-07-25T05:46:30.616Z",
    "size": 18008,
    "path": "../public/images/mobile/play-store.png"
  },
  "/images/mobile/square.svg": {
    "type": "image/svg+xml",
    "etag": "\"15c-xqB0KP/QceZ9YgDaOMGCSjPy5ys\"",
    "mtime": "2023-07-25T05:46:30.615Z",
    "size": 348,
    "path": "../public/images/mobile/square.svg"
  },
  "/images/mobile/triangle.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ef-EieqaQYP/0/bfx4+MehnMtHbcRE\"",
    "mtime": "2023-07-25T05:46:30.613Z",
    "size": 495,
    "path": "../public/images/mobile/triangle.svg"
  },
  "/images/mobile/widget-left.png": {
    "type": "image/png",
    "etag": "\"6c42-dVC7/0nCl6FJF7Cdr9aUBhpK0fA\"",
    "mtime": "2023-07-25T05:46:30.612Z",
    "size": 27714,
    "path": "../public/images/mobile/widget-left.png"
  },
  "/images/mobile/widget-right.png": {
    "type": "image/png",
    "etag": "\"767b-NC/AmOSBFO0zlgQlH4mkySS58Cw\"",
    "mtime": "2023-07-25T05:46:30.610Z",
    "size": 30331,
    "path": "../public/images/mobile/widget-right.png"
  },
  "/images/mobile/widget-top.png": {
    "type": "image/png",
    "etag": "\"821d-2pzSc++Ot6dT5H/EPCMAOrc0AiU\"",
    "mtime": "2023-07-25T05:46:30.608Z",
    "size": 33309,
    "path": "../public/images/mobile/widget-top.png"
  },
  "/images/mobile/widget_screen1.png": {
    "type": "image/png",
    "etag": "\"f156-Z9aeqY5tHhr3OF/GzhISIupN5AE\"",
    "mtime": "2023-07-25T05:46:30.606Z",
    "size": 61782,
    "path": "../public/images/mobile/widget_screen1.png"
  },
  "/images/mobile/widget_screen2.png": {
    "type": "image/png",
    "etag": "\"7909-UBSGU4V93ZRTk8WnXvHAnzq3P40\"",
    "mtime": "2023-07-25T05:46:30.604Z",
    "size": 30985,
    "path": "../public/images/mobile/widget_screen2.png"
  },
  "/images/mobile/widget_screen3.png": {
    "type": "image/png",
    "etag": "\"ba34-nkzB6HMarPZ64bvgy9EKxRe++qg\"",
    "mtime": "2023-07-25T05:46:30.601Z",
    "size": 47668,
    "path": "../public/images/mobile/widget_screen3.png"
  },
  "/images/mobile/widget_screen4.png": {
    "type": "image/png",
    "etag": "\"8a5d-rL/bGSjcfxg9KedBHAoCl4lZT50\"",
    "mtime": "2023-07-25T05:46:30.599Z",
    "size": 35421,
    "path": "../public/images/mobile/widget_screen4.png"
  },
  "/images/mobile/widget_screen5.png": {
    "type": "image/png",
    "etag": "\"12e3f-NBN4yh9VgFpUirVmRM1XMZr/qhM\"",
    "mtime": "2023-07-25T05:46:30.597Z",
    "size": 77375,
    "path": "../public/images/mobile/widget_screen5.png"
  },
  "/images/mobile/widget_screen6.png": {
    "type": "image/png",
    "etag": "\"1c6de-hxeJPRjvPFb4eKNmMHqr9URgd7M\"",
    "mtime": "2023-07-25T05:46:30.595Z",
    "size": 116446,
    "path": "../public/images/mobile/widget_screen6.png"
  },
  "/images/mobile/widget_screen7.png": {
    "type": "image/png",
    "etag": "\"51f1-/jjTciy/OcdKZR9LC9QanZkNYaM\"",
    "mtime": "2023-07-25T05:46:30.592Z",
    "size": 20977,
    "path": "../public/images/mobile/widget_screen7.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_LsrDil = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_LsrDil, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_LsrDil, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
