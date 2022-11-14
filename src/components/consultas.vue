<template>

    <h2>Hola Consultas</h2>

    <button type="reset" v-on:click="getPedidoFruta(null)">Ver Pedidos</button>

    <table>
        <thead>
            <tr>
                <td>Fruta</td>
                <td>Cantidad</td>
                <td>Fecha</td>
                <td>Precio</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, id) in pedidoFrutas">
                <td>{{item.Fruta}}</td>
                <td>{{item.Cantidad}}</td>
                <td>{{item.fecha_venta}}</td>
                <td>{{item.Total}}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import axios from 'axios';

export default {
    name: "consulta",
    data: function(){
        return {
            loaded: false,
            pedidoFrutas: [],
            pedidoFrutas1 :{
                fruta: ""
            }
        }
    },
    methods: {
        getPedidoFruta: async function(fruta){
            if(localStorage.getItem("token") === null){
                this.$emit("loadLogout");
                return;
            }
            let token = localStorage.getItem("token");
            if(token === null){
                axios.get("V1/consulta/get_pedido_fruta",
                {headers: {"Authorization": `Bearer ${token}`}}
                )
                .then((result) => {
                    this.pedidoFrutas = result.data;
                    this.loaded = true;
                })
                .catch((error) => {
                    console.log('Error: ' + error); 
                })
            }else{
                axios.get("V1/consulta/get_pedido_fruta?descripcion=" + this.pedidoFrutas1.fruta,
                {headers: {"Authorization": `Bearer ${token}`}}
                )
                .then((result) => {
                    this.pedidoFrutas = result.data;
                    this.loaded = true;
                })
                .catch((error) => {
                    console.log('Error: ' + error); 
                })
            }
        } 
    },
    created: function(){
        document.title = "Consultas"
        this.getPedidoFruta(null);
    }
}
</script>