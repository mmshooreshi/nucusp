<template>
  <footer class="footer" :class="{invert: invert}">
    <v-container class="max-lg">
      <v-row class="spacing4">
        <v-col class="pa-4" md="3" cols="12">
          <div class="logo">
            <img :src="logo" alt="logo" />
            <h6 class="use-text-subtitle2 font-weight-bold">
              {{ brand.mobile.projectName }}
            </h6>
          </div>
          <p class="body-2 text-center" v-if="isDesktop">
            &copy;&nbsp;
            {{ brand.mobile.footerText }}
          </p>
        </v-col>
        <v-col class="px-6 py-0" md="6" cols="12">
          <v-expansion-panels
            v-if="isMobile"
            :dark="!invert"
            class="accordion-root"
          >
            <v-expansion-panel
              v-for="(footer, index) in footers"
              :key="index"
              class="accordion-content"
            >
              <v-expansion-panel-title>
                <strong class="mb-4">
                  {{ footer.title }}
                </strong>
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul>
                  <li v-for="(item, index) in footer.description" :key="index">
                    <nuxt-link :to="footer.link[index]">
                      {{ item }}
                    </nuxt-link>
                  </li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-row justify="space-around" v-if="isDesktop">
            <v-col
              v-for="(footer, index) in footers"
              :key="index"
              sm="3"
              cols="12"
              class="px-4 site-map-item"
            >
              <h6 class="title-nav">
                {{ footer.title }}
              </h6>
              <ul>
                <li v-for="(item, index) in footer.description" :key="index">
                  <nuxt-link :to="footer.link[index]">
                    {{ item }}
                  </nuxt-link>
                </li>
              </ul>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="3" cols="12" class="pa-4">
          <div class="socmed">
            <v-btn text icon class="button">
              <span class="ion-logo-facebook icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-twitter icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-instagram icon" />
            </v-btn>
            <v-btn text icon class="button">
              <span class="ion-logo-linkedin icon" />
            </v-btn>
          </div>
          <v-select
            v-model="lang"
            :items="langList"
            :value="curLang"
            variant="outlined"
            class="select-lang"
            hide-details
            color="primary"
            prepend-inner-icon="mdi-web"
            @update:model-value="switchLang(lang)"
          />
        </v-col>
      </v-row>
      <p class="body-2 text-center" v-if="isMobile">
        &copy;&nbsp;
        {{ brand.mobile.footerText }}
      </p>
    </v-container>
  </footer>
</template>

<style scoped lang="scss">
@import "./footer-style";
</style>

<script>
import {ref} from "vue";
import {useI18n} from "vue-i18n";
import {useSwitchLocalePath} from "vue-i18n-routing";
import {setRtl} from "@/composables/uiTheme";
import logo from "@/assets/images/mobile-logo.svg";
import brand from "@/assets/text/brand";

export default {
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    const i18n = useI18n();
    const curLang = i18n.locale.value;
    const lang = ref(curLang);

    function switchLang(locale) {
      navigateTo(switchLocalePath(locale));
      lang.value = locale;

      // Set RTL and Document attr
      document.documentElement.setAttribute("lang", locale);

      if (locale === "ar" || locale === "fa") {
        setRtl(true);
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        setRtl(false);
        document.documentElement.setAttribute("dir", "ltr");
      }
    }

    return {
      curLang,
      switchLang,
      lang,
    };
  },
  data: () => ({
    logo,
    brand,
    lang: "en",
    footers: [
      {
        title: "Company",
        description: ["Team", "History", "Contact us", "Locations"],
        link: ["#team", "#history", "#contact-us", "#locations"],
      },
      {
        title: "Resources",
        description: [
          "Resource",
          "Resource name",
          "Another resource",
          "Final resource",
        ],
        link: [
          "#resource",
          "#resource-name",
          "#another-resource",
          "#final-resource",
        ],
      },
      {
        title: "Legal",
        description: ["Privacy policy", "Terms of use"],
        link: ["#privacy-policy", "#terms-of-use"],
      },
    ],
  }),
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
    langList() {
      const list = [];
      const i18n = this.$i18n.locales;

      i18n.map((locale) => {
        list.push({
          title: this.$t("common." + locale.code),
          value: locale.code,
        });
        return false;
      });
      return list;
    },
  },
};
</script>
