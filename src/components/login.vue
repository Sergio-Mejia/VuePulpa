<template>
    <div class="container">
        <form v-on:submit.prevent="processLogin">
            <div class="mb-3">
                <label for="InputEmail" class="form-label">Email</label>
                <input type="email" v-model="user.user" class="form-control" id="InputEmail" aria-describedby="email">
            </div>
            <div class="mb-3">
                <label for="InputPassword" class="form-label">Password</label>
                <input type="password" v-model="user.password" class="form-control" id="InputPassword">
            </div>
            <button type="submit" class="btn btn-success form-control">LogIn</button>
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
                    alert('Error. Email o Contraseña incorrectos')
                }
            });
        }
    },
    created() {
        document.title = 'Login';
    }
}

</script>