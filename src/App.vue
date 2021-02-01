<template>
  <v-app id="app" class="grey lighten-4">
    <Navbar />

    <v-main class="mx-4 mb-4" id="main">
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Darkmode from 'darkmode-js';

const options = {
  bottom: '20px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#000',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



export default {
  components: { Navbar },
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>


<style>
#app {
  background-color: #f3f3f4;
}

.darkmode-layer, .darkmode-toggle {
  z-index: 500;
}

body.darkmode--activated .navb {
  background: #87264b !important;
}

body.darkmode--activated .navb-btn{
  background: white !important;
  color: #000 !important;
}

body.darkmode--activated .darkmode-succes-btn {
  background: #87264b !important;
  color: white !important;
}

body.darkmode--activated aside.v-navigation-drawer button div{
  color: #bd4472 !important;
}

.darkmode--activated img {
    filter: invert(1);
}

/* Works on Firefox */
* {
  scrollbar-width: 200px;
  scrollbar-color: #047364 white;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 200px;
}

*::-webkit-scrollbar-track {
  background: #047364;
}

*::-webkit-scrollbar-thumb {
  background-color: #047364;
  border: 3px solid white;
}

.full-width-card {
  flex-grow: 1 !important;
}

</style>