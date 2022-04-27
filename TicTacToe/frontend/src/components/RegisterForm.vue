<template>
    <form @submit.prevent="register">
        <div class="name">
            <label for="name"> name: </label>
            <input class="textEntry" type="text" v-model="name" name="name" placeholder="Name"/>
        </div>
        <div class="password">
            <label for="password"> Password: </label>
            <input class="texEntry" type="password" v-model="password" name="password" placeholder="Password"/>
        </div>
        <div class="error" v-if="errorMessage"> {{errorMessage}} </div>
        <div class="btnDiv"><button class="btn"> Register </button></div>
    </form>
</template>

<script>
    import register from '../auth.js';
    export default {
        data() {
            return {
                name: "",
                password: '',
                errorMessage: ""
            }
        },
        methods:{
            async submit() {
                this.loading = true;
                const response = await register(this.item);
                if (response === "Login Succesful") {
                    
                    localStorage.setItem("user", JSON.stringify(response.data));
                    this.item = {
                    name: "",
                    password: "",
                    roles: ["user"]
                    };
                    this.loading = false;
                    this.$router.push("/");
                } else {
                    // error
                    console.log("Error", response);
                    setTimeout(() => {
                    this.loading = false;
                    }, 1000);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import '../assets/Styles/RegisterForm.scss';
</style>