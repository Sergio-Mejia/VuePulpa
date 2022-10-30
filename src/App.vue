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
              <a class="nav-link" aria-current="page" v-if="is_auth == 0" v-on:click="loadHome" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="is_auth == 0" v-on:click="loadAbout">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="is_auth == 1">Frutas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" v-if="is_auth == 1">Pedidos</a>
            </li>
          </ul>
          <a v-if="is_auth == 0" v-on:click="loadLogin" class="btn btn-secondary">Login</a>
        </div>
      </div>
    </nav>

    <br>
    <div>
      <router-view />
    </div>


    <footer>
      <p>&copy; Copyright </p>
    </footer>
  </div>
</template>


<script>

export default {
  name: 'App',

  data: function () {
    return {
      is_auth: 0
    }
  },
  components: {

  },
  methods: {
    verifyAuth: function () {
      if (this.is_auth == 0)
        this.$router.push({ name: "login" })
    },
    loadHome: function () {
      this.$router.push({ name: 'home' });
    },
    loadLogin: function () {
      this.$router.push({ name: "login" });
    },
    loadAbout: function () {
      this.$router.push({ name: "about" });
    }
  },
  created: function () {
    document.title = "Pulpas";
    this.$router.push({ name: 'home' })
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
