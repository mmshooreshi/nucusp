<template>
  <v-theme-provider
    :theme="themeMode || defaultMode"
    with-background
  >
    <div :class="theme">
      <v-locale-provider :rtl="isRtl()" :dir="isRtl() ? 'rtl' : 'ltr'">
        <slot />
      </v-locale-provider>
    </div>
  </v-theme-provider>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ui from '@/composables/uiTheme';

export default {
  props: {
    theme: {
      type: String,
      required: true,
    },
  },
  setup() {
    // RTL Setup
    const i18nLocale = useI18n();
    const locale = i18nLocale.locale.value;

    const rtlDefault = locale === 'ar';
    const rtl = ui.rtl();
    const isRtl = () => {
      if (rtl.value !== undefined) {
        return rtl.value;
      }
      return rtlDefault;
    };

    // Dark Light Setup
    const defaultMode = ref('');
    const themeMode = ui.themeMode();

    onMounted(() => {
      // Set document language and direction
      document.documentElement.setAttribute('lang', locale);
      if (rtlDefault) {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }

      // Set theme
      defaultMode.value = localStorage.getItem('luxiDarkMode') || 'light';
    });

    return {
      defaultMode,
      themeMode,
      isRtl,
    };
  },
};
</script>
