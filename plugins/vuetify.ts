import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#65E9B3',
            secondary: '#65E9B3',
            accent: '#65E9B3',
            error: '#65E9B3',
          },
        },
        dark: {
          colors: {
            primary: '#65E9B3',
            secondary: '#65E9B3',
            accent: '#65E9B3',
            error: '#65E9B3',
          },
        },
      },
    },
    components,
    directives,
  });

  nuxtApp.vueApp.use(vuetify);
});