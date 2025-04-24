<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand"></a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/story">Story</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/wedding">Wedding</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/gallery">Gallery</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/pages">Pages</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/rsvp">RSVP</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar-brand {
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    color: #d26a5c;
  }
  </style>
  