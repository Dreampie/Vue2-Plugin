<template>
    <div style="height: 2000px">
        <h1>
            {{welcome}}
        </h1>
    </div>

</template>

<script>

    export default {
        name: 'index-view',
        data () {
            return {
                welcome: "Welcome to Vue Plugins！"
            }
        },
        mounted(){
            
        }
    }
</script>