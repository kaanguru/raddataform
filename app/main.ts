import Vue from 'nativescript-vue'
import App from './components/App.vue'
import VueDevtools from 'nativescript-vue-devtools'
import RadDataForm from 'nativescript-ui-dataform/vue';
Vue.use(RadDataForm);
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = true

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
