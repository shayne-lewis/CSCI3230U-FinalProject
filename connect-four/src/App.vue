<template>
    <AppNav />
    <router-view/>
</template>


<script>
import AppNav from './components/AppNav.vue'

export default {
    name: 'App',
    components:{
        AppNav
    }
}
</script>

<style>
    *{
        padding:0;
        margin:0;
    }
</style>


