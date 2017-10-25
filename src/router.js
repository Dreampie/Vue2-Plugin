import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "./view/Index.vue";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {path: '/', component: IndexView}
    ]
})

router.beforeEach((to, from, next) => {
    Vue.bus.$emit('v-router:before')
    next()
})

router.afterEach((route) => {
    Vue.bus.$emit('v-router:after')
})

export default router