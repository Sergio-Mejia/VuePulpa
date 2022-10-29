<template>
  <div class="App" id="App">
    <nav class="navbar navbar-expand-lg navbar-custom">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PULPAS</a>
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
              <a class="nav-link" href="#">Frutas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pedidos</a>
            </li>
          </ul>
          <button type="submit" class="btn btn-secondary">Log In</button>
        </div>
      </div>
    </nav>


    <div class="">
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

    }
  },
  components: {

  },
  methods: {
    loadHome: function () {
      this.$router.push({ name: 'home' });
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
  text-align: center;
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
}

.navbar-custom .navbar-brand,
.navbar-custom .navbar-text,
.navbar-custom .nav-link {
  color: white;
}
</style>
