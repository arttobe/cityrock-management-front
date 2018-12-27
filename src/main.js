import "material-design-icons-iconfont/dist/material-design-icons.css"
// import "./styles/element_variables.scss"
import "fullcalendar/dist/fullcalendar.css"
// import "./styles/_plugin-fullcalendar.scss"
// import '@fortawesome/fontawesome-free/css/all.css'
import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.css"
import "dayspan-vuetify/dist/lib/dayspan-vuetify.min.css"
import de from "vuetify/es5/locale/de"
import DaySpanVuetify from "dayspan-vuetify"
import FullCalendar from "vue-full-calendar"
import router from "./router"
import store from "./store"
// import 'vuetify/dist/vuetify.css'
// sync(store, router);
import ApiService from "./common/api.service";
// const {codgen} = require ('swagger-axios-codegen');
// codgen({
//     outputDir: './api',
//     type: 'js',
//     // remoteUrl: 'http://localhost:8000/swagger/?format=openapi',
//     // methodNameMode:'operationId'
// })


import App from "./App.vue"

Vue.use(FullCalendar)
Vue.use(Vuetify, {

  lang: {
    locales: {
      de,
    },
    current: "de",
  },
})
Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => "#1976d2",
  },
});
ApiService.init();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app")
