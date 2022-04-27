import axios from 'axios';

export default{
   
    login(username, password, callback){
        authRequest(username, password, (res) => {
            if (res.auth){
                localStorage.token = res.token;
                localStorage.username = username;
                callback({
                    auth: true,
                    token: res.token
                });
                this.onLoginStatus(true)
            }else{
                delete localStorage.token;
                callback({
                    auth:false
                });
                this.onLoginStatus(false)
            }
        })
    },

    logout(callback){
        delete localStorage.token;
        callback({
            auth:false
        });
        this.onLoginStatus(false)
    },

    isLoggedIn(){ return !!localStorage.token},

    onLoginStatus(status){
        console.log(status)
    },

    loginInfo(){return localStorage.username}
    
}


function authRequest(username, password, callback){
    axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}&website=${password}`)
        .then((result) => {
            if(result.data.length >0){
                callback({
                    auth: true,
                    token: Math.random().toString(36).substring(7) 
                })
            }else{
                callback({
                    auth:false
                })
            }
        })
        .catch(err => console.log(err));

}