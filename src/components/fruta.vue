<template>

    <form action="" v-on:submit.prevent="createFruta">
        <input type="text" placeholder="Nombre fruta" v-model="fruta.descripcion">
        <button type="submit">Agregar</button>
    </form>

    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Descripción</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, id) in frutas">
                <td>{{item.id}}</td>
                <td>{{item.descripcion}}</td>
            </tr>
        </tbody>
    </table>
    <!-- <h2> No hay frutas registradas</h2> -->
</template>


<script>
import axios from 'axios';

export default {
    name: 'fruta',
    data: function(){
        return {
            name: "",
            loaded: false,
            frutas: [],
            fruta: {
                descripcion: ""
            }
        }
    },
    methods: {
        getFrutas: async function(){
            if(localStorage.getItem("token") === null){
                this.$emit("loadLogout");
                return;
            }
            let token = localStorage.getItem("token");
            if(token === null){
            axios.get("V1/fruta/get",
                {headers: {"Authorization" : `Bearer ${token}`}}
            )    
            .then((result) => {
                console.log('Entro a Then'); 
                this.frutas = result.data;
                this.loaded = true;
            })
            .catch((error) => {
                console.log('Entro a error'); 
                console.log(error); 
            })
        }else{
            console.log('Nada'); 
        }
        },

        createFruta: async function(){
            if(localStorage.getItem("token") === null){
                this.$emit("loadLogout");
                return;
            }
            let token = localStorage.getItem("token");
            let url = "V1/fruta/create";
            let frutaData = {
                "descripcion": this.fruta.descripcion
            }
            axios.post(url, frutaData, {headers: {"Authorization" : `Bearer ${token}`}}
            )
            .then((result) => {
                alert("Fruta Creada");
            })
            .catch((error) => {
                console.log('Error al crear la fruta: '+error); 
            })
        }
    },
    created: function(){
        this.$emit('verifyAuth')
        document.title = "Fruta";
        this.getFrutas();
    }
}

</script>