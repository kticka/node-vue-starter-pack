import Vue         from 'vue';
import Vuex        from 'vuex';
import Axios       from 'axios';
import Application from './vue/app.vue';
import Store       from './vuex/store';

Vue.prototype.$http = Axios;
Vue.use(Vuex);

const Loader = Vue.extend(Application);

window.onload = function () {
  const element = document.getElementById('app');
  if (element) {
    window.App = new Loader({
      el:    element,
      store: new Vuex.Store(Store)
    });
  }
};
