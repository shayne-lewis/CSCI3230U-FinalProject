<template>
    <nav class="menu">
        <div id="logo">
            <img id="logoImg" alt="Vue logo" src="../assets/Images/logo.png">
        </div>

        <div id = "navigation">
            <router-link to="/">Play</router-link> |
            <router-link to="/highscores">Highscores</router-link> |
            <router-link class="links" v-if="!isLoggedIn" to="login" ><a>Login</a> </router-link>
            <a  v-if="isLoggedIn" v-on:click="logout"> Logout </a>
        </div>
    </nav>
</template>

<script>
    import auth from '../auth/auth'
    export default{
        name: 'AppNav',
        data() {
            return { isLoggedIn: auth.isLoggedIn()};
        },
        created(){
            auth.onLoginStatus = isLoggedIn =>{
                this.isLoggedIn = isLoggedIn;
            }
        },
        methods:{
            logout: function(){
                auth.logout( (res) =>{
                    console.log(res)
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/Styles/Nav.scss';
    @import '../assets/Mobile/Nav.scss';
</style>
