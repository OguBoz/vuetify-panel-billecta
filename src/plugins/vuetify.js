import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#444',
        success: '#1ab394',
        info: '#ffaa2c',
        error: '#f83e70'
      },
    },
  },
})

export default vuetify