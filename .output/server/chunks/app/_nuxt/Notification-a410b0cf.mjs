import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {
  data() {
    return {
      snackbar: true
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_snackbar = resolveComponent("v-snackbar");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_snackbar, mergeProps({
    modelValue: $data.snackbar,
    "onUpdate:modelValue": ($event) => $data.snackbar = $event,
    timeout: -1,
    class: "notification joker"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="d-sm-flex align-center me-2" data-v-e64a48f5${_scopeId}><div class="action me-4" data-v-e64a48f5${_scopeId}>${ssrInterpolate(_ctx.$t("common.notif_msg"))}</div>`);
        _push2(ssrRenderComponent(_component_v_btn, {
          color: "secondary",
          class: "button",
          onClick: ($event) => $data.snackbar = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate(_ctx.$t("common.accept"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(_ctx.$t("common.accept")), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "d-sm-flex align-center me-2" }, [
            createVNode("div", { class: "action me-4" }, toDisplayString(_ctx.$t("common.notif_msg")), 1),
            createVNode(_component_v_btn, {
              color: "secondary",
              class: "button",
              onClick: ($event) => $data.snackbar = false
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("common.accept")), 1)
              ]),
              _: 1
            }, 8, ["onClick"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Notification/Notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Notification = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e64a48f5"]]);

export { Notification as N };
//# sourceMappingURL=Notification-a410b0cf.mjs.map
