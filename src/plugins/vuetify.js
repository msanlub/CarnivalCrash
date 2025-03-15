import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#F0D139',
          secondary: '#61B371',
          accent: '#E7544A',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          surface: '#FFFFFF',
          background: '#F9F9F9'
        }
      },
      dark: {
        colors: {
          primary: '#F0D139',
          secondary: '#61B371',
          accent: '#E7544A',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
          surface: '#333333',
          background: '#212121'
        }
      }
    }
  },
  defaults: {
    global: {
      style: {
        fontFamily: 'Oswald',
      },
    },
  },
});

export default vuetify;
