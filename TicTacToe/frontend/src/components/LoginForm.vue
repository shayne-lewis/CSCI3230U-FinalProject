<template>
    <form @submit.prevent="login">
        <div class="username">
            <label for="username"> Username: </label>
            <input class="textEntry" type="text" v-model="username" name="username" placeholder="Username"/>
        </div>
        <div class="password">
            <label for="password"> Password: </label>
            <input class="texEntry" type="password" v-model="password" name="password" placeholder="Password"/>
        </div>
        <div class="error" v-if="errorMessage"> {{errorMessage}} </div>
        <div class="btnDiv"><button class="btn"> Login </button></div>
    </form>
</template>

<script>
    import auth from '../auth/auth';
    export default {
        name: "LoginForm",
        data(){
            return{
                username: "Bret",
                password: "hildegard.org",
                errorMessage: ""
            }
        },
        methods:{
            login(){
                console.log('Call login()');
                auth.login(this.username, this.password, (res) => {
                    if (res.auth){
                        //Login succesful, go to home page.
                        console.log('Loggin success');
                        this.$router.replace('/');
                    } else{
                        //Login failed.
                        console.log('Loggin failed');
                        this.errorMessage = "Loggin failed";
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.username{
    margin-top: 2rem;
    text-align: left;
    margin-left: 5rem;
}
.username input{
    width: 20rem;
    margin-left: 5rem;
    display:inline-block;
}
.password{
    padding-top: 3rem;
    text-align: left;
    margin-left: 5rem;
}
.password input{
    width: 20rem;
    margin-left: 85px;
    display:inline-block;
}
.error{
    text-align: left;
    margin-left: 360px;
    margin-top: 1.5rem;
}
.btnDiv{
    text-align: left;
    margin-left: 85px;
}
.btn{
    width: 330px;
    margin-top: 4rem;
    margin-left: 10rem;
}
</style>
