import { _ as _export_sfc, H as Header, F as Footer, b as brand } from '../server.mjs';
import { N as Notification } from './Notification-a410b0cf.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'vue-easy-lightbox';
import 'vue3-mq';
import 'vue-kinesis';
import 'vue3-smooth-scroll';
import 'vue3-youtube';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  components: {
    "main-header": Header,
    Notification,
    "main-footer": Footer
  },
  head() {
    return {
      title: brand.mobile.name + " - Blank Page"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_main_header = resolveComponent("main-header");
  const _component_main_footer = resolveComponent("main-footer");
  const _component_notification = resolveComponent("notification");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-b6fde8bb><section id="home" data-v-b6fde8bb></section><div class="main-wrap" data-v-b6fde8bb>`);
  _push(ssrRenderComponent(_component_main_header, { invert: "" }, null, _parent));
  _push(`<div class="container-wrap" data-v-b6fde8bb><section class="space-top space-bottom" data-v-b6fde8bb><h2 class="use-text-title text-center mb-4" data-v-b6fde8bb>${ssrInterpolate(_ctx.$t("common.title"))}</h2><h4 class="use-text-subtitle2 text-center" data-v-b6fde8bb>${ssrInterpolate(_ctx.$t("common.subtitle"))}</h4></section></div><section class="spaceTop" data-v-b6fde8bb>`);
  _push(ssrRenderComponent(_component_main_footer, { invert: "" }, null, _parent));
  _push(`</section>`);
  _push(ssrRenderComponent(_component_notification, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blank-page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blankPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b6fde8bb"]]);

export { blankPage as default };
//# sourceMappingURL=blank-page-38643fe5.mjs.map
