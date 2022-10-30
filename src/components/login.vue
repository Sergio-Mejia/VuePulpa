<template>
    <div class="container">
        <form v-on:submit.prevent="processLogin">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" v-model="user.user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios"; 

export default {

    name: 'login',
    data: function () {
        return {
            user: {
                user: "",
                password: ""
            }
        }
    },
    methods:{
        processLogin: function(){
            axios.post(
                "http://localhost:7777/login",
                this.user,
                {headers:{}}
            )
            .then((result) => {
                let dataLogin = {
                    token: result.data.token,
                    user: this.user.user,
                    cedula: result.data.user_id
                }
                this.$emit('completedLogin', dataLogin);
            })
            .catch((error) => {
                if(error.response.status == '401'){
                    alert('Error 401')
                }
            });
        }
    },
    created() {
        document.title = 'Login';
    }
}

</script>