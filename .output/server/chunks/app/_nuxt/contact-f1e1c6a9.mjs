import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, b as brand, a as Hidden, l as logo, d as link, e as __nuxt_component_0$2 } from '../server.mjs';
import { P as ParallaxLarge } from './Large-bad17fca.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
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
import 'cookie-es';
import 'is-https';
import 'vue-easy-lightbox';
import 'vue3-mq';
import 'vue-kinesis';
import 'vue3-smooth-scroll';
import 'vue3-youtube';

const _imports_0 = "" + publicAssetsURL("images/mobile/animation-banner.png");
const _sfc_main$1 = {
  components: {
    Hidden,
    ParallaxDeco: ParallaxLarge
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: "",
      hideDetail: true,
      nameRules: [(v) => !!v || "Name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      phone: "",
      company: "",
      message: "",
      checkbox: false,
      logo,
      brand,
      routeLink: link
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.snackbar = true;
        this.hideDetail = true;
      } else {
        this.hideDetail = false;
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hidden = resolveComponent("hidden");
  const _component_parallax_deco = resolveComponent("parallax-deco");
  const _component_v_snackbar = resolveComponent("v-snackbar");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_nuxt_link = __nuxt_component_0$2;
  const _component_v_container = resolveComponent("v-container");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_checkbox = resolveComponent("v-checkbox");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrap" }, _attrs))} data-v-0e7f9f53>`);
  _push(ssrRenderComponent(_component_hidden, { point: "smDown" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="background" data-v-0e7f9f53${_scopeId}><div class="gradient" data-v-0e7f9f53${_scopeId}><div class="deco-wave" data-v-0e7f9f53${_scopeId}></div><div class="deco-line" data-v-0e7f9f53${_scopeId}></div><div class="deco-inner" data-v-0e7f9f53${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="decoration" data-v-0e7f9f53${_scopeId}></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "background" }, [
            createVNode("div", { class: "gradient" }, [
              createVNode("div", { class: "deco-wave" }),
              createVNode("div", { class: "deco-line" }),
              createVNode("div", { class: "deco-inner" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "decoration"
                })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="parallax" data-v-0e7f9f53>`);
  _push(ssrRenderComponent(_component_parallax_deco, null, null, _parent));
  _push(`</div>`);
  _push(ssrRenderComponent(_component_v_snackbar, {
    modelValue: $data.snackbar,
    "onUpdate:modelValue": ($event) => $data.snackbar = $event,
    timeout: 4e3,
    location: "top right",
    class: "notification"
  }, {
    actions: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          variant: "text",
          icon: "",
          onClick: ($event) => $data.snackbar = false
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_icon, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`mdi-close`);
                  } else {
                    return [
                      createTextVNode("mdi-close")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            variant: "text",
            icon: "",
            onClick: ($event) => $data.snackbar = false
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
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="action" data-v-0e7f9f53${_scopeId}> Message Sent </div>`);
      } else {
        return [
          createVNode("div", { class: "action" }, " Message Sent ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_hidden, { point: "mdUp" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="logo logo-header" data-v-0e7f9f53${_scopeId}>`);
        _push2(ssrRenderComponent(_component_nuxt_link, {
          to: $data.routeLink.mobile.home
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img${ssrRenderAttr("src", $data.logo)} alt="logo" data-v-0e7f9f53${_scopeId2}><span class="use-text-title" data-v-0e7f9f53${_scopeId2}>${ssrInterpolate($data.brand.mobile.projectName)}</span>`);
            } else {
              return [
                createVNode("img", {
                  src: $data.logo,
                  alt: "logo"
                }, null, 8, ["src"]),
                createVNode("span", { class: "use-text-title" }, toDisplayString($data.brand.mobile.projectName), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "logo logo-header" }, [
            createVNode(_component_nuxt_link, {
              to: $data.routeLink.mobile.home
            }, {
              default: withCtx(() => [
                createVNode("img", {
                  src: $data.logo,
                  alt: "logo"
                }, null, 8, ["src"]),
                createVNode("span", { class: "use-text-title" }, toDisplayString($data.brand.mobile.projectName), 1)
              ]),
              _: 1
            }, 8, ["to"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_v_container, { class: "inner-wrap max-md" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_btn, {
          href: $data.routeLink.mobile.home,
          icon: "",
          variant: "text",
          class: "backtohome"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<i class="ion-ios-home-outline" data-v-0e7f9f53${_scopeId2}></i><i class="ion-ios-arrow-round-back-outline" data-v-0e7f9f53${_scopeId2}></i>`);
            } else {
              return [
                createVNode("i", { class: "ion-ios-home-outline" }),
                createVNode("i", { class: "ion-ios-arrow-round-back-outline" })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card, { class: "form-box fragment-fadeUp" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="full-form-wrap" data-v-0e7f9f53${_scopeId2}><h3 class="use-text-title title-contact pb-3 text-center" data-v-0e7f9f53${_scopeId2}>${ssrInterpolate(_ctx.$t("common.contact_title2"))}</h3><p class="desc use-text-subtitle2 text-center" data-v-0e7f9f53${_scopeId2}>${ssrInterpolate(_ctx.$t("common.contact_subtitle"))}</p><div class="form" data-v-0e7f9f53${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_v_form, {
                ref: "form",
                modelValue: $data.valid,
                "onUpdate:modelValue": ($event) => $data.valid = $event
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_row, { class: "spacing6" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_text_field, {
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event,
                                  rules: $data.nameRules,
                                  label: _ctx.$t("common.form_name"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_text_field, {
                                    modelValue: $data.name,
                                    "onUpdate:modelValue": ($event) => $data.name = $event,
                                    rules: $data.nameRules,
                                    label: _ctx.$t("common.form_name"),
                                    class: "input",
                                    color: "secondary",
                                    filled: "",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_text_field, {
                                  modelValue: $data.email,
                                  "onUpdate:modelValue": ($event) => $data.email = $event,
                                  rules: $data.emailRules,
                                  label: _ctx.$t("common.form_email"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_text_field, {
                                    modelValue: $data.email,
                                    "onUpdate:modelValue": ($event) => $data.email = $event,
                                    rules: $data.emailRules,
                                    label: _ctx.$t("common.form_email"),
                                    class: "input",
                                    color: "secondary",
                                    filled: "",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_text_field, {
                                  modelValue: $data.phone,
                                  "onUpdate:modelValue": ($event) => $data.phone = $event,
                                  label: _ctx.$t("common.form_phone"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_text_field, {
                                    modelValue: $data.phone,
                                    "onUpdate:modelValue": ($event) => $data.phone = $event,
                                    label: _ctx.$t("common.form_phone"),
                                    class: "input",
                                    color: "secondary",
                                    filled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_text_field, {
                                  modelValue: $data.company,
                                  "onUpdate:modelValue": ($event) => $data.company = $event,
                                  label: _ctx.$t("common.form_company"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_text_field, {
                                    modelValue: $data.company,
                                    "onUpdate:modelValue": ($event) => $data.company = $event,
                                    label: _ctx.$t("common.form_company"),
                                    class: "input",
                                    color: "secondary",
                                    filled: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_col, {
                            cols: "12",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_textarea, {
                                  modelValue: $data.message,
                                  "onUpdate:modelValue": ($event) => $data.message = $event,
                                  rows: "6",
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  label: _ctx.$t("common.form_message")
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_textarea, {
                                    modelValue: $data.message,
                                    "onUpdate:modelValue": ($event) => $data.message = $event,
                                    rows: "6",
                                    class: "input",
                                    color: "secondary",
                                    filled: "",
                                    label: _ctx.$t("common.form_message")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event,
                                  rules: $data.nameRules,
                                  label: _ctx.$t("common.form_name"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.email,
                                  "onUpdate:modelValue": ($event) => $data.email = $event,
                                  rules: $data.emailRules,
                                  label: _ctx.$t("common.form_email"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.phone,
                                  "onUpdate:modelValue": ($event) => $data.phone = $event,
                                  label: _ctx.$t("common.form_phone"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.company,
                                  "onUpdate:modelValue": ($event) => $data.company = $event,
                                  label: _ctx.$t("common.form_company"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_textarea, {
                                  modelValue: $data.message,
                                  "onUpdate:modelValue": ($event) => $data.message = $event,
                                  rows: "6",
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  label: _ctx.$t("common.form_message")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<div class="btn-area flex" data-v-0e7f9f53${_scopeId3}><div class="form-control-label" data-v-0e7f9f53${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_checkbox, {
                      modelValue: $data.checkbox,
                      "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                      color: "secondary",
                      "hide-details": $data.hideDetail,
                      rules: [(v) => !!v || "You must agree to continue!"],
                      label: _ctx.$t("common.form_terms"),
                      class: "white-label check-label",
                      required: ""
                    }, null, _parent4, _scopeId3));
                    _push4(`<span data-v-0e7f9f53${_scopeId3}><a href="#" class="link mx-3" data-v-0e7f9f53${_scopeId3}>${ssrInterpolate(_ctx.$t("common.form_privacy"))}</a></span></div>`);
                    _push4(ssrRenderComponent(_component_v_btn, {
                      block: $options.isMobile,
                      color: "secondary",
                      onClick: $options.validate,
                      size: "large"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`${ssrInterpolate(_ctx.$t("common.form_send"))} `);
                          _push5(ssrRenderComponent(_component_v_icon, { class: "right-icon" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-send`);
                              } else {
                                return [
                                  createTextVNode("mdi-send")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.$t("common.form_send")) + " ", 1),
                            createVNode(_component_v_icon, { class: "right-icon" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-send")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode(_component_v_row, { class: "spacing6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.name,
                                "onUpdate:modelValue": ($event) => $data.name = $event,
                                rules: $data.nameRules,
                                label: _ctx.$t("common.form_name"),
                                class: "input",
                                color: "secondary",
                                filled: "",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.email,
                                "onUpdate:modelValue": ($event) => $data.email = $event,
                                rules: $data.emailRules,
                                label: _ctx.$t("common.form_email"),
                                class: "input",
                                color: "secondary",
                                filled: "",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.phone,
                                "onUpdate:modelValue": ($event) => $data.phone = $event,
                                label: _ctx.$t("common.form_phone"),
                                class: "input",
                                color: "secondary",
                                filled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.company,
                                "onUpdate:modelValue": ($event) => $data.company = $event,
                                label: _ctx.$t("common.form_company"),
                                class: "input",
                                color: "secondary",
                                filled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_textarea, {
                                modelValue: $data.message,
                                "onUpdate:modelValue": ($event) => $data.message = $event,
                                rows: "6",
                                class: "input",
                                color: "secondary",
                                filled: "",
                                label: _ctx.$t("common.form_message")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "btn-area flex" }, [
                        createVNode("div", { class: "form-control-label" }, [
                          createVNode(_component_v_checkbox, {
                            modelValue: $data.checkbox,
                            "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                            color: "secondary",
                            "hide-details": $data.hideDetail,
                            rules: [(v) => !!v || "You must agree to continue!"],
                            label: _ctx.$t("common.form_terms"),
                            class: "white-label check-label",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "hide-details", "rules", "label"]),
                          createVNode("span", null, [
                            createVNode("a", {
                              href: "#",
                              class: "link mx-3"
                            }, toDisplayString(_ctx.$t("common.form_privacy")), 1)
                          ])
                        ]),
                        createVNode(_component_v_btn, {
                          block: $options.isMobile,
                          color: "secondary",
                          onClick: $options.validate,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("common.form_send")) + " ", 1),
                            createVNode(_component_v_icon, { class: "right-icon" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-send")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["block", "onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "full-form-wrap" }, [
                  createVNode("h3", { class: "use-text-title title-contact pb-3 text-center" }, toDisplayString(_ctx.$t("common.contact_title2")), 1),
                  createVNode("p", { class: "desc use-text-subtitle2 text-center" }, toDisplayString(_ctx.$t("common.contact_subtitle")), 1),
                  createVNode("div", { class: "form" }, [
                    createVNode(_component_v_form, {
                      ref: "form",
                      modelValue: $data.valid,
                      "onUpdate:modelValue": ($event) => $data.valid = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_row, { class: "spacing6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.name,
                                  "onUpdate:modelValue": ($event) => $data.name = $event,
                                  rules: $data.nameRules,
                                  label: _ctx.$t("common.form_name"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.email,
                                  "onUpdate:modelValue": ($event) => $data.email = $event,
                                  rules: $data.emailRules,
                                  label: _ctx.$t("common.form_email"),
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.phone,
                                  "onUpdate:modelValue": ($event) => $data.phone = $event,
                                  label: _ctx.$t("common.form_phone"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              sm: "6",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_text_field, {
                                  modelValue: $data.company,
                                  "onUpdate:modelValue": ($event) => $data.company = $event,
                                  label: _ctx.$t("common.form_company"),
                                  class: "input",
                                  color: "secondary",
                                  filled: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            }),
                            createVNode(_component_v_col, {
                              cols: "12",
                              class: "py-0 px-6"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_textarea, {
                                  modelValue: $data.message,
                                  "onUpdate:modelValue": ($event) => $data.message = $event,
                                  rows: "6",
                                  class: "input",
                                  color: "secondary",
                                  filled: "",
                                  label: _ctx.$t("common.form_message")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "btn-area flex" }, [
                          createVNode("div", { class: "form-control-label" }, [
                            createVNode(_component_v_checkbox, {
                              modelValue: $data.checkbox,
                              "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                              color: "secondary",
                              "hide-details": $data.hideDetail,
                              rules: [(v) => !!v || "You must agree to continue!"],
                              label: _ctx.$t("common.form_terms"),
                              class: "white-label check-label",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "hide-details", "rules", "label"]),
                            createVNode("span", null, [
                              createVNode("a", {
                                href: "#",
                                class: "link mx-3"
                              }, toDisplayString(_ctx.$t("common.form_privacy")), 1)
                            ])
                          ]),
                          createVNode(_component_v_btn, {
                            block: $options.isMobile,
                            color: "secondary",
                            onClick: $options.validate,
                            size: "large"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("common.form_send")) + " ", 1),
                              createVNode(_component_v_icon, { class: "right-icon" }, {
                                default: withCtx(() => [
                                  createTextVNode("mdi-send")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["block", "onClick"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_btn, {
            href: $data.routeLink.mobile.home,
            icon: "",
            variant: "text",
            class: "backtohome"
          }, {
            default: withCtx(() => [
              createVNode("i", { class: "ion-ios-home-outline" }),
              createVNode("i", { class: "ion-ios-arrow-round-back-outline" })
            ]),
            _: 1
          }, 8, ["href"]),
          createVNode(_component_v_card, { class: "form-box fragment-fadeUp" }, {
            default: withCtx(() => [
              createVNode("div", { class: "full-form-wrap" }, [
                createVNode("h3", { class: "use-text-title title-contact pb-3 text-center" }, toDisplayString(_ctx.$t("common.contact_title2")), 1),
                createVNode("p", { class: "desc use-text-subtitle2 text-center" }, toDisplayString(_ctx.$t("common.contact_subtitle")), 1),
                createVNode("div", { class: "form" }, [
                  createVNode(_component_v_form, {
                    ref: "form",
                    modelValue: $data.valid,
                    "onUpdate:modelValue": ($event) => $data.valid = $event
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_row, { class: "spacing6" }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.name,
                                "onUpdate:modelValue": ($event) => $data.name = $event,
                                rules: $data.nameRules,
                                label: _ctx.$t("common.form_name"),
                                class: "input",
                                color: "secondary",
                                filled: "",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.email,
                                "onUpdate:modelValue": ($event) => $data.email = $event,
                                rules: $data.emailRules,
                                label: _ctx.$t("common.form_email"),
                                class: "input",
                                color: "secondary",
                                filled: "",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.phone,
                                "onUpdate:modelValue": ($event) => $data.phone = $event,
                                label: _ctx.$t("common.form_phone"),
                                class: "input",
                                color: "secondary",
                                filled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            sm: "6",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_text_field, {
                                modelValue: $data.company,
                                "onUpdate:modelValue": ($event) => $data.company = $event,
                                label: _ctx.$t("common.form_company"),
                                class: "input",
                                color: "secondary",
                                filled: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_col, {
                            cols: "12",
                            class: "py-0 px-6"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_textarea, {
                                modelValue: $data.message,
                                "onUpdate:modelValue": ($event) => $data.message = $event,
                                rows: "6",
                                class: "input",
                                color: "secondary",
                                filled: "",
                                label: _ctx.$t("common.form_message")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "btn-area flex" }, [
                        createVNode("div", { class: "form-control-label" }, [
                          createVNode(_component_v_checkbox, {
                            modelValue: $data.checkbox,
                            "onUpdate:modelValue": ($event) => $data.checkbox = $event,
                            color: "secondary",
                            "hide-details": $data.hideDetail,
                            rules: [(v) => !!v || "You must agree to continue!"],
                            label: _ctx.$t("common.form_terms"),
                            class: "white-label check-label",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "hide-details", "rules", "label"]),
                          createVNode("span", null, [
                            createVNode("a", {
                              href: "#",
                              class: "link mx-3"
                            }, toDisplayString(_ctx.$t("common.form_privacy")), 1)
                          ])
                        ]),
                        createVNode(_component_v_btn, {
                          block: $options.isMobile,
                          color: "secondary",
                          onClick: $options.validate,
                          size: "large"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("common.form_send")) + " ", 1),
                            createVNode(_component_v_icon, { class: "right-icon" }, {
                              default: withCtx(() => [
                                createTextVNode("mdi-send")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["block", "onClick"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Forms/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Contact = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0e7f9f53"]]);
const _sfc_main = {
  components: {
    Contact
  },
  head() {
    return {
      title: brand.mobile.name + " - Contact"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_contact = resolveComponent("contact", true);
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_contact, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-f1e1c6a9.mjs.map
