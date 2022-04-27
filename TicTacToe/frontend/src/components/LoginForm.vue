// <template>
//     <form @submit.prevent="login">
//         <div class="name">
//             <label for="name"> name: </label>
//             <input class="textEntry" type="text" v-model="name" name="name" placeholder="Name"/>
//         </div>
//         <div class="password">
//             <label for="password"> Password: </label>
//             <input class="texEntry" type="password" v-model="password" name="password" placeholder="Password"/>
//         </div>
//         <div class="error" v-if="errorMessage"> {{errorMessage}} </div>
//         <div class="btnDiv"><button class="btn"> Login </button></div>
//     </form>
// </template>
 
// <script>
//     import login from '../auth.js';
//     export default {
//         data() {
//             return {
//                 name: "",
//                 password: ''
//             }
//         },
//         methods:{
//             async submit() {
//                 this.loading = true;
//                 const response = await login(this.item);
//                 if (response.data.accessToken) {
                    
//                     localStorage.setItem("user", JSON.stringify(response.data));
//                     this.item = {
//                     name: "",
//                     password: ""
//                     };
//                     this.loading = false;
//                     this.$router.push("/");
//                 } else {
//                     // error
//                     console.log("Error", response);
//                 }
//             }
//         }
//     };

// </script>

// <style scoped lang="scss">
//     @import '../assets/Styles/LoginForm.scss';
//     @import '../assets/Mobile/LoginForm.scss';
// </style>
