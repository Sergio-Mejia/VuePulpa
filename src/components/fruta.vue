<template>
    <table >
        <thead>
            <tr>
                <td>Id</td>
                <td>Descripción</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, idx) in frutas">
                <td>{{item.id}}</td>
                <td>{{item.descripcion}}</td>
            </tr>
        </tbody>
    </table>
    <h2 > No hay frutas registradas</h2>
</template>


<script>
import axios from 'axios';

export default {
    name: 'fruta',
    data: function(){
        return {
            name:"",
            descripcion: "",
            loaded: false,
            frutas: [],
            fruta: {
                id: 0,
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
            axios.get('V1/fruta/get',
                {headers: {'Authorization': `Bearer ${token}`}})
                
            .then((result) => {
                console.log('Entro a Then'); 
                this.frutas = result.data.fruta;
                this.loaded = true;
            })
            .catch((error) => {
                console.log('Entro a error'); 
                console.log(error); 
                this.$emit('loadLogout');
            })
        }
    },
    created: function(){
        this.$emit('verifyAuth')
        this.getFrutas();
        document.title = "Fruta";
    }
}

</script>