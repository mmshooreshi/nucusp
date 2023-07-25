<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    class="counter-wrap"
  >
    <v-container class="max-md">
      <v-row
        justify="center"
        align="center"
        class="counter-inner spacing6"
      >
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                <span>
                  {{ !visible ? 0 : '' }}
                  <count-up
                    v-if="visible"
                    :start-val="0"
                    :end-val="200"
                    :options="{ suffix: 'M' }"
                  />
                </span>
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-cloud-download-outline" />
                {{ $t('mobileLanding.counter_downloads') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                <span>
                  {{ !visible ? 0 : '' }}
                  <count-up
                    v-if="visible"
                    :start-val="0"
                    :end-val="480"
                    :options="{ prefix: '+', suffix: 'M' }"
                  />
                </span>
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-checkmark-circle-outline" />
                {{ $t('mobileLanding.counter_transaction') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4" class="px-6">
          <div class="counter-item">
            <div v-if="loaded" class="text">
              <h3 class="use-text-title">
                <span>
                  {{ !visible ? 0 : '' }}
                  <count-up
                    v-if="visible"
                    :start-val="0"
                    :end-val="180"
                    :options="{ prefix: '+', suffix: 'M' }"
                  />
                </span>
              </h3>
              <p class="use-text-subtitle">
                <i class="ion-ios-star-outline" />
                {{ $t('mobileLanding.counter_ratting') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const windowBound = wrapper.value.getBoundingClientRect();

      if (windowBound.top < offset) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 200)
  }
}
</script>
