import Vue from "vue";
import {VueBus, VueCookie, VueHttp} from "./plugin/index.js";
import router from "./router.js";
import App from "./App.vue";
import properties from "./../application.json";

Vue.use(VueCookie)
Vue.use(VueBus)
Vue.use(VueHttp)

console.log("App start env is: " + process.env.NODE_ENV)
console.log("App root url is: " + properties[process.env.NODE_ENV].rootUrl)
console.log("Api root url is: " + properties[process.env.NODE_ENV].apiRootUrl)
console.log("Login url is: " + properties[process.env.NODE_ENV].loginUrl)

window.localStorage.setItem("rootUrl", properties[process.env.NODE_ENV].rootUrl)
window.localStorage.setItem("apiRootUrl", properties[process.env.NODE_ENV].apiRootUrl)
window.localStorage.setItem("loginUrl", properties[process.env.NODE_ENV].loginUrl)

new Vue({
    router,
    ...App
}).$mount('#app')
