<template>
  <div class="parallax-wrap">
    <div v-if="loaded" class="inner-parallax large">
      <scroll-parallax :speed="0">
        <div class="figure">
          <svg class="triangle">
            <use xlink:href="/images/mobile/triangle.svg#main" />
          </svg>
        </div>
      </scroll-parallax>
      <scroll-parallax :speed="0">
        <div class="figure">
          <svg class="circle">
            <use xlink:href="/images/mobile/circle.svg#main" />
          </svg>
        </div>
      </scroll-parallax>
      <scroll-parallax :speed="0">
        <div class="figure">
          <div class="square-dot">
            <svg class="square">
              <use xlink:href="/images/mobile/square.svg#main" />
            </svg>
            <svg class="dot">
              <use xlink:href="/images/mobile/dot.svg#main" />
            </svg>
          </div>
        </div>
      </scroll-parallax>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './parallax-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  }
}
</script>
