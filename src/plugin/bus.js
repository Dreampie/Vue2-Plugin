import Vue from "vue";

const VueBus = new Vue()

export default {
    install(Vue) {
        Vue.prototype.$bus = VueBus
        Vue.bus = VueBus
    }
}

export {VueBus}