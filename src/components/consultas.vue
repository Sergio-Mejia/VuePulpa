<template>

    <h2>VENTAS</h2>

    <form action="">
        <label for="">Filtrar por fruta</label>
        <div class="input-group mb-3">
            <select  class="form-select" name="" id="" v-model="pedidoFrutas1.fruta">
                <option value="" selected>Seleccione Fruta</option>
                <option value="Mora">Mora</option>
                <option value="Feijoa">Feijoa</option>
                <!-- <option v-for="(item,idx) in partidos">{{ item.nombre }}</option> -->
            </select>
            <button type="submit" class="btn btn-secondary" v-on:click="getPedidoFruta('')">Buscar</button>
        </div>
        <div>
           
            <!-- <input type="text" placeholder="Fruta" v-model="pedidoFrutas1.fruta"> -->
            
        </div>
    </form>

    <button type="reset" class="btn btn-success" v-on:click="getPedidoFruta(null)">Ver Todos</button>
    <br><br>
    <table class="table  table-striped table-hover">
        <thead class="table-success">
            <tr>
                <th>Fruta</th>
                <th>Cantidad</th>
                <th>Fecha</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, id) in pedidoFrutas">
                <td>{{ item.Fruta }}</td>
                <td>{{ item.Cantidad }}</td>
                <td>{{ item.fecha_venta }}</td>
                <td>{{ item.Total }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import axios from 'axios';

export default {
    name: "consulta",
    data: function () {
        return {
            loaded: false,
            pedidoFrutas: [],
            pedidoFrutas1: {
                fruta: ""
            },
            frutas: []
        }
    },
    methods: {
        getPedidoFruta: async function (fruta) {
            if (localStorage.getItem("token") === null) {
                this.$emit("loadLogout");
                return;
            }
            let token = localStorage.getItem("token");
            if (fruta === null) {
                axios.get("V1/consulta/get_pedido_fruta",
                    { headers: { "Authorization": `Bearer ${token}` } }
                )
                    .then((result) => {
                        this.pedidoFrutas = result.data;
                        this.loaded = true;
                    })
                    .catch((error) => {
                        console.log('Error: ' + error);
                    })
            } else {
                axios.get("V1/consulta/get_pedido_fruta?descripcion=" + this.pedidoFrutas1.fruta,
                    { headers: { "Authorization": `Bearer ${token}` }, }
                )
                    .then((result) => {
                        console.log('Entro pedido frutas:' + this.pedidoFrutas1.fruta);
                        this.pedidoFrutas = result.data;
                        this.loaded = true;
                    })
                    .catch((error) => {
                        console.log('Error: ' + error);
                    })
            }
        },
        getFrutas: function () {
            if (localStorage.getItem("token") === null) {
                this.$emit("loadLogout");
                return;
            }

        }
    },
    created: function () {
        document.title = "Consultas"
        this.getPedidoFruta(null);
    }
}
</script>