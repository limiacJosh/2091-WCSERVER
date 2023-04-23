<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">VueJS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
            <span class="visually-hidden">(current)</span>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/blog">Blog</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/gallery">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link  class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-sm-2" type="search" placeholder="Search">
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  background-color: wheat;
}
</style>
