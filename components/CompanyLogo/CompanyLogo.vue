<template>
  <v-container class="fixed-width">
    <h4 class="text-center use-text-title2">
      {{ $t('mobileLanding.company_title') }}
    </h4>
    <div class="root">
      <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div>
          <img
            v-for="(logo, index) in logos"
            :key="index"
            :src="logo"
            :alt="'logo' + index"
          >
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
import AOS from 'aos';

export default {
  data() {
    return {
      logos: [
        '/images/logos/architect.png',
        '/images/logos/cloud.png',
        '/images/logos/coin.png',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/mobile.png'
      ]
    }
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
