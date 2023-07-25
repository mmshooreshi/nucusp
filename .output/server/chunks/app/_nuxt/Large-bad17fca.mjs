import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _imports_0 = "" + publicAssetsURL("images/mobile/triangle.svg");
const _imports_1 = "" + publicAssetsURL("images/mobile/circle.svg");
const _imports_2 = "" + publicAssetsURL("images/mobile/square.svg");
const _imports_3 = "" + publicAssetsURL("images/mobile/dot.svg");
const _sfc_main = {
  data() {
    return {
      loaded: false
    };
  },
  mounted() {
    this.loaded = true;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_scroll_parallax = resolveComponent("scroll-parallax");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "parallax-wrap" }, _attrs))} data-v-042f63fe>`);
  if ($data.loaded) {
    _push(`<div class="inner-parallax large" data-v-042f63fe>`);
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-042f63fe${_scopeId}><svg class="triangle" data-v-042f63fe${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_0 + "#main")} data-v-042f63fe${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "triangle" }, [
                createVNode("use", { "xlink:href": _imports_0 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-042f63fe${_scopeId}><svg class="circle" data-v-042f63fe${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_1 + "#main")} data-v-042f63fe${_scopeId}></use></svg></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              (openBlock(), createBlock("svg", { class: "circle" }, [
                createVNode("use", { "xlink:href": _imports_1 + "#main" })
              ]))
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_scroll_parallax, { speed: 0 }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="figure" data-v-042f63fe${_scopeId}><div class="square-dot" data-v-042f63fe${_scopeId}><svg class="square" data-v-042f63fe${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_2 + "#main")} data-v-042f63fe${_scopeId}></use></svg><svg class="dot" data-v-042f63fe${_scopeId}><use${ssrRenderAttr("xlink:href", _imports_3 + "#main")} data-v-042f63fe${_scopeId}></use></svg></div></div>`);
        } else {
          return [
            createVNode("div", { class: "figure" }, [
              createVNode("div", { class: "square-dot" }, [
                (openBlock(), createBlock("svg", { class: "square" }, [
                  createVNode("use", { "xlink:href": _imports_2 + "#main" })
                ])),
                (openBlock(), createBlock("svg", { class: "dot" }, [
                  createVNode("use", { "xlink:href": _imports_3 + "#main" })
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Parallax/Large.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ParallaxLarge = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-042f63fe"]]);

export { ParallaxLarge as P, _imports_0 as _, _imports_1 as a };
//# sourceMappingURL=Large-bad17fca.mjs.map
