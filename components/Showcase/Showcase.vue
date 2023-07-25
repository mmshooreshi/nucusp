<template>
  <div class="root">
    <svg class="deco-top back">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <svg class="deco-top cover">
      <use xlink:href="/images/mobile/deco-wave-top.svg#main" />
    </svg>
    <title-main dark align="center">
      {{ $t('mobileLanding.showcase_title') }}
    </title-main>
    <div class="carousel-wrap">
      <div class="invert-parallax">
        <parallax-large />
      </div>
      <div class="carousel-side">
        <splide
          :options="settingsSide"
          class="slider-side"
          ref="sliderSide"
          @splide:move="handleSync"
        >
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[7]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[8]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[9]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[10]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[11]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[12]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <v-card class="frame">
                <img :src="imgAPI.mobile[13]" alt="app" />
              </v-card>
            </div>
          </splide-slide>
        </splide>
      </div>
      <div class="carousel-center">
        <v-card class="frame">
          <splide
            :options="settingsCenter"
            class="slider-center"
            ref="sliderCenter"
            @splide:move="handleActiveSlide"
          >
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[7]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[14]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[8]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[15]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[9]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[16]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[10]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[17]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[11]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[18]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[12]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[19]" alt="app" />
                </div>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="item">
                <img :src="imgAPI.mobile[13]" alt="app" />
                <div class="widget">
                  <img :src="imgAPI.mobile[20]" alt="app" />
                </div>
              </div>
            </splide-slide>
          </splide>
        </v-card>
      </div>
    </div>
    <svg class="deco-bottom back">
      <use xlink:href="/images/mobile/deco-wave-bottom.svg#main" />
    </svg>
    <svg class="deco-bottom cover">
      <use xlink:href="/images/mobile/deco-wave-bottom.svg#main" />
    </svg>
    <div class="deco-bottom-mobile" />
    <div class="pagination">
      <ul>
        <li
          v-for="index in 6"
          :key="index"
          :class="{ active: activeSlide === index }"
        >
          <button type="button" @click="handleDotsNav(index)" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './showcase-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI'
import ParallaxLarge from '../Parallax/Large'
import Title from '../Title'

export default {
  components: {
    'title-main': Title,
    ParallaxLarge,
    Splide,
    SplideSlide,
  },
  data: () => ({
    imgAPI: imgAPI,
    loaded: false,
    activeSlide: 0,
    settingsCenter: {
      pagination: true,
      type: 'fade',
      speed: 500,
      arrows: false,
      focus: 'center',
      updateOnMove: true,
      direction: 'ltr',
    },
    settingsSide: {
      autoplay: true,
      interval: 5000,
      pagination: false,
      type: 'loop',
      speed: 500,
      perMove: 1,
      focus  : 'center',
      padding: '10px',
      perPage: 5,
      arrows: false,
      direction: 'ltr',
      breakpoints: {
        800: {
          perPage: 3
        },
      },
    },
  }),
  mounted() {
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.settingsSide.direction = 'rtl';
        this.settingsCenter.direction = 'rtl';
      } else {
        this.settingsSide.direction = 'ltr';
        this.settingsCenter.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    handleDotsNav(index) {
      this.$refs.sliderCenter.go(index)
    },
    handleActiveSlide(slide) {
      this.activeSlide = slide.index;
      this.$refs.sliderSide.go(slide.index);
    },
    handleSync(slide) {
      this.$refs.sliderCenter.go(slide.index);
    },
  },
};
</script>
