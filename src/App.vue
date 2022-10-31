<template>
  <div class="App" id="App">
    <nav class="navbar navbar-expand-lg navbar-custom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="./assets/logo1Logo.png" alt="" style="height: 110px; width: 110px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" v-on:click="loadHome" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-on:click="loadAbout">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="is_admin == 1">Frutas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="is_auth == 1">Pedidos</a>
            </li>
          </ul>
          <div>
            <a v-if="is_auth == 0" v-on:click="loadSignup" class="btn btn-success">Registrate</a>
            <a v-if="is_auth == 0" v-on:click="loadLogin" class="btn btn-secondary">Login</a>
            <a v-if="is_auth == 1" v-on:click="loadLogout" class="btn btn-danger">Cerrar Sesión</a>
          </div>
        </div>
      </div>
    </nav>

    <br>
    <div>
      <router-view v-on:completedLogin="completedLogin" v-on:loadLogout="loadLogout"></router-view>
    </div>


    <footer>
      <p>&copy; Copyright </p>
    </footer>
  </div>
</template>


<script>
import jwt_decode from 'jwt-decode';

export default {
  name: 'App',
  data: function () {
    return {
      is_auth: 0,
      is_admin: 0,
      is_customer: 0
    }
  },
  components: {

  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem('is_auth') || 0;
      this.is_admin = localStorage.getItem('is_admin') || 0;
      // this.is_customer = localStorage.getItem('is_customer') || 0;
      if (this.is_auth == 0) {
        this.$router.push({ name: "home" })
      } 
      else if(this.is_admin == 1){
        this.$router.push({ name: "home" })
      }
      else{
        this.$router.push({ name: "about" })
      }
    },
    loadHome: function () {
      this.$router.push({ name: 'home' });
    },
    loadLogin: function () {
      this.$router.push({ name: "login" });
    },
    loadSignup: function () {
      this.$router.push({ name: "signup" });
    },
    loadLogout: function () {
      let confirmar = confirm("¿Desea cerrar la sesión?")
      if (confirmar) {
        localStorage.clear();
        alert("Sesión Cerrada");
        this.verifyAuth();
      }
    },
    loadAbout: function () {
      this.$router.push({ name: "about" });
    },
    completedLogin: function (data) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("cedula", data.cedula);
      localStorage.setItem("user", data.user);

      let tokenDecoded = jwt_decode(data.token);
      if(tokenDecoded.sub.idRol.nombre == 'Admin'){
        localStorage.setItem('is_admin', 1);
      }else{
        localStorage.setItem('is_admin', 0);
      }
      localStorage.setItem('is_auth', 1);
      this.verifyAuth();
    }
  },
  created: function () {
    document.title = "Pulpas";
    this.$router.push({ name: 'home' })
    this.verifyAuth();
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-custom {
  background-color: #389c6b;
  height: 100px;
}

.navbar-custom .navbar-brand,
.navbar-custom .navbar-text,
.navbar-custom .nav-link {
  color: white;
}
</style>
