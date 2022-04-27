<template>
    <nav class="menu">
        <div id="logo">
            <img id="logoImg" alt="Vue logo" src="../assets/Images/logo.png">
        </div>

        <div id = "navigation">
            <router-link to="/">Play</router-link> |
            <router-link to="/highscores">Highscores</router-link> |
            <!-- <router-link class="links" to="login" ><a>Login</a> </router-link> -->
        </div>
    </nav>
</template>

<script>
    export default{
        name: 'AppNav',
    }
</script>

<style scoped lang="scss">
    @import '../assets/Styles/Nav.scss';
    @import '../assets/Mobile/Nav.scss';
</style>
