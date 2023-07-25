<template>
  <v-navigation-drawer
    v-if="isMobile"
    v-model="openDrawer"
    fixed
    temporary
    class="mobile-nav"
  >
    <mobile-menu :open="openDrawer" />
  </v-navigation-drawer>
  <v-app-bar
    v-scroll="handleScroll"
    id="header"
    :class="{ fixed: fixed, 'open-drawer': openDrawer }"
    class="header"
    fixed
    app
  >
    <v-container :class="{ 'fixed-width': isDesktop }">
      <div class="header-content">
        <nav
          :class="{ invert: invert }"
          class="nav-logo nav-menu"
        >
          <v-btn
            v-if="isMobile"
            :class="{ 'is-active': openDrawer }"
            class="hamburger hamburger--spin mobile-menu"
            text
            icon
            @click.stop="handleToggleOpen"
          >
            <span class="hamburger-box">
              <span class="bar hamburger-inner" />
            </span>
          </v-btn>
          <div class="logo">
            <a
              v-if="invert"
              :href="link.mobile.home"
            >
              <img
                :src="logo"
                alt="logo"
              >
              <span v-if="!isMobile">
                {{ brand.mobile.name }}
              </span>
            </a>
            <span v-if="!invert && loaded">
              <a
                v-smooth-scroll="{ offset: 100 }"
                href="#home"
                class="anchor-link scrollactive-item"
              >
                <img
                  :src="logo"
                  alt="logo"
                >
                <span v-if="!isMobile">
                  {{ brand.mobile.name }}
                </span>
              </a>
            </span>
          </div>
          <div v-if="isDesktop">
            <ul class="scrollactive-nav">
              <li
                v-for="(item, index) in menuList"
                :key="index"
              >
                <v-btn
                  v-if="!invert"
                  :href="item.url"
                  :class="{ active: activeMenu === item.name }"
                  class="menu-link"
                  variant="text"
                  @click="scrollToMyEl(item.name)"
                  v-text="$t('mobileLanding.header_'+item.name)"
                />
                <v-btn
                  v-else
                  :href="'/' + item.url"
                  variant="text"
                  v-text="$t('mobileLanding.header_'+item.name)"
                />
              </li>
              <li>
                <v-btn
                  :href="link.mobile.contact"
                  varian="text"
                  v-text="$t('mobileLanding.header_contact')"
                />
              </li>
            </ul>
          </div>
        </nav>
        <nav
          :class="{ invert: invert }"
          class="nav-menu"
        >
          <hidden v-if="!invert" point="xsDown">
            <v-btn icon class="social-btn">
              <i class="ion-logo-twitter " />
            </v-btn>
            <v-btn icon class="social-btn">
              <i class="ion-logo-facebook" />
            </v-btn>
            <v-btn icon class="social-btn">
              <i class="ion-logo-instagram" />
            </v-btn>
            <v-btn icon class="social-btn">
              <i class="ion-logo-linkedin" />
            </v-btn>
          </hidden>
          <setting-menu />
        </nav>
      </div>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
@import './header-style.scss';
</style>

<script>
import { inject } from 'vue';
import logo from '@/assets/images/mobile-logo.svg'
import link from '@/assets/text/link'
import brand from '@/assets/text/brand'
import Hidden from '../Hidden'
import navMenu from './menu'
import Settings from './Settings'
import MobileMenu from './MobileMenu'
import { useRouter } from '#app';

let counter = 0
function createData(name, url, offset) {
  counter += 1
  return {
    id: counter,
    name,
    url,
    offset
  }
}

export default {
  components: {
    'setting-menu': Settings,
    Hidden,
    MobileMenu
  },
  props: {
    invert: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const smoothScroll = inject('smoothScroll');
    function scrollToMyEl(elemId) {
      const myEl = document.getElementById(elemId);
      const router = useRouter();

      router.push(`#${elemId}`);
      smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: `#${elemId}`, // required if updateHistory is true
        offset: -50,
      });
    }

    return {
      scrollToMyEl,
    };
  },
  data() {
    return {
      logo,
      link,
      loaded: false,
      brand,
      sections: {},
      fixed: false,
      activeMenu: '',
      openDrawer: null,
      navOffset: 20,
      menuList: [
        createData(navMenu[0], '#' + navMenu[0]),
        createData(navMenu[1], '#' + navMenu[1]),
        createData(navMenu[2], '#' + navMenu[2]),
        createData(navMenu[3], '#' + navMenu[3], -40)
      ]
    }
  },
  computed: {
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    }
  },
  mounted() {
    this.loaded = true;
    const id = window.location.hash;
    const content = id.replace('#', '');
    const element = document.getElementById(content);
    if (element) {
      element.scrollIntoView();
    }

    const section = document.querySelectorAll('.scroll-nav-content > *');
    Array.prototype.forEach.call(section, (e) => {
      this.sections[e.id] = e.offsetTop;
    });
  },
  methods: {
    handleScroll() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + 50;

      Object.keys(this.sections).forEach((i) => {
        if (this.sections[i] <= topPosition) {
          this.activeMenu = i;
        }
      });

      if (scrollPosition > 70) {
        this.fixed = true;
      } else {
        this.fixed = false;
      }
    },
    handleToggleOpen: function() {
      this.openDrawer = !this.openDrawer;
    }
  },
}
</script>
