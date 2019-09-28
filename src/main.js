import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// ElementUI
import ElementUI from 'element-ui'
//チョークテーマのデフォルトCSS
import 'element-ui/lib/theme-chalk/index.css'

// ElementUIでの言語設定
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, {locale});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
