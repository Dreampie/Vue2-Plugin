<template>
    <!--body-->
    <div class="bodyer">
        <!--head-->
        <div class="ui menu">
            <router-link class="ui item" to="/" exact>
                <img :src="logo.url">
            </router-link>
        </div>
        <router-view class="main"></router-view>
        <!--foot-->
        <footer class="ui footer segment">
            <div class="container">
                <div>Copyright&nbsp;©&nbsp;2017&nbsp;
                    <a :href="belong.url" target="_blank">@{{belong.name}}</a>.
                </div>

                <div>Base on <a :href="baseOn.url" target="_blank">{{baseOn.name}}</a> | Powered by
                    <a :href="poweredBy.url">{{poweredBy.name}}.</a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import '@dreampie/semantic-ui/semantic.min.js'
    import 'semantic-ui-calendar/dist/calendar.min.js'
    import logoImage from  './asset/logo.png'

    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'app',
        data () {
            return {
                logo: {url: logoImage},
                help: {url: 'https://www.vuejs.com'},
                belong: {name: 'Vue Components', url: 'https://www.vuejs.com'},
                baseOn: {name: 'Vuejs', url: 'https://github.com/vuejs'},
                poweredBy: {name: 'Dreampie', url: 'https://github.com/Dreampie'}
            }
        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<style lang="stylus">
    @import '~@dreampie/semantic-ui/semantic.min.css';
    @import '~semantic-ui-calendar/dist/calendar.min.css';

    body, html {
        z-index: 0;
        height: 100%;
    }

    html {
        overflow-y: scroll;
    }

    body {
        position: relative;
    }

    a {
        transition: color 0.2s;
        outline: none;
    }

    .bodyer {
        min-height: 100%;
        position: relative;
    }

    .bodyer .header {
        padding-bottom: 10px;
    }

    .bodyer .main {
        padding: 0 10px 76px 10px;
    }

    .bodyer .footer {
        border-radius: 0rem !important;
        margin: 0rem !important;
        width: 100%;
        position: absolute;
        bottom: 0;
    }

    .bodyer .footer .container {
        text-align: center;
    }

    .bodyer .footer .container a {
        color: rgba(0, 0, 0, 0.6);
    }

    .bodyer .footer .container a:hover {
        color: rgba(0, 0, 0, 0.8);
    }
</style>
