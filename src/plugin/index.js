import VueCookie from "vue-cookie";
import VueBus from "./bus.js";
import VueHttp from "./http.js";

export default {
    install(Vue) {
        Vue.use(VueCookie)
        Vue.use(VueBus)
        Vue.use(VueHttp)
    }
}

export {VueCookie, VueBus, VueHttp}

