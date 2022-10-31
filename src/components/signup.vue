<template>

    <div class="container">
        <form class="row g-3" v-on:submit.prevent="processSignup">
            <div class="col-md-12">
                <label for="cedula" class="form-label">Cedula</label>
                <input type="number" class="form-control" id="cedula" v-model="user.cedula" required>
            </div>
            <div class="col-md-6">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="user.user" required>
            </div>
            <div class="col-md-6">
                <label for="passwrod" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="passwrod" v-model="user.password" required>
            </div>
            <div class="col-md-6">
                <label for="nombres" class="form-label">Nombres</label>
                <input type="text" class="form-control" id="nombres" v-model="user.nombres" required>
            </div>
            <div class="col-md-6">
                <label for="apellidos" class="form-label">Apellidos</label>
                <input type="text" class="form-control" id="apellidos" v-model="user.apellidos" required>
            </div>
            <div class="col-6">
                <label for="Ciudad" class="form-label">Ciudad</label>
                <input type="text" class="form-control" id="Ciudad" placeholder="Bogota..." v-model="user.ciudad"
                    required>
            </div>
            <div class="col-6">
                <label for="direccion" class="form-label">Dirección</label>
                <input type="text" class="form-control" id="direccion" placeholder="1234 Main St"
                    v-model="user.direccion" required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Registrarme</button>
            </div>
        </form>
    </div>
</template>


<script>

import axios from "axios";

export default {
    name: 'signup',
    created() {
        document.title = 'Sign Up';
    },
    data: function () {
        return {
            user: {
                cedula: "",
                user: "",
                password: "",
                nombres: "",
                apellidos: "",
                ciudad: "",
                direccion: "",
            }
        }
    },
    methods: {
        processSignup: function () {
            axios.post(
                "V1/usuarios",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                  let dataSignup = {
                    user: this.user.user,
                    token: result.data.token,
                  }
                  alert("Usuario "+dataSignup.user+ " creado");
                })
                .catch((error) => {
                    alert("Error en el registro de los datos " + error);
                })
        }
    }
}

</script>