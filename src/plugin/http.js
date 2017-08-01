import Vue from "vue";
import Axios from "axios";
import {DomainSolver} from "@dreampie/vue2-common";

const VueHttp = Axios.create()
VueHttp.defaults.withCredentials = true
VueHttp.defaults.baseURL = window.localStorage.getItem("apiRootUrl")
VueHttp.defaults.timeout = 8000

VueHttp.interceptors.request.use((config) => {
    // Do something before request is sent
    Vue.bus.$emit('v-loading:start', {for: config.method + ":" + config.url})
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
})


VueHttp.interceptors.response.use((response) => {
    // Do something with response data
    Vue.bus.$emit('v-loading:complete', {for: response.config.method + ":" + response.config.url})
    return response;
}, (error) => {
    if (error.response) {
        // Do something with response error
        Vue.bus.$emit('v-loading:complete', {for: error.response.config.method + ":" + error.response.config.url})
        const errors = error.response.data
        errors.forEach((e) => {
            Vue.bus.$emit('v-alert:alert', {
                for: error.response.config.method + ":" + error.response.config.url,
                type: 'danger',
                keep: false,
                key: e.key,
                message: e.message
            })
        })

        if (error.response.status === 401) {
            const loginDisabled = window.localStorage.getItem("loginDisabled")
            if (loginDisabled == 1) {
                console.log("Login disabled.")
            } else {
                const rootUrl = window.localStorage.getItem("rootUrl")
                Vue.cookie.set("SAVED_URL", window.location.href, {domain: DomainSolver.getTopDomain(rootUrl)})
                window.localStorage.setItem("loginDisabled", 0)
                const loginUrl = window.localStorage.getItem("loginUrl")
                window.location.href = loginUrl
            }
        }
    } else {
        Vue.bus.$emit('v-loading:completeAll')
        Vue.bus.$emit('v-alert:alert', {
            for: 'connection',
            type: 'danger',
            keep: false,
            key: 'InvalidServer',
            message: '服务器连接失败'
        })
    }
    return Promise.reject(error)
})

export default {
    install(Vue) {
        Vue.prototype.$http = VueHttp
        Vue.http = VueHttp
    }
}

export {VueHttp}