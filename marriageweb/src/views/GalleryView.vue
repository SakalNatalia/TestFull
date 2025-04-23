<template>
    <div class="container mt-4">
      <h1 class="mb-4">Photo Gallery</h1>
      <div class="row">
        <div class="col-md-4 mb-3" v-for="n in 6" :key="n">
          <img :src="`/assets/gallery${n}.jpg`" class="img-fluid rounded shadow-sm" alt="Wedding photo" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GalleryView'
  };
  </script>