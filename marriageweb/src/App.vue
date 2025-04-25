<template>
   <div id="app">
    <NavBar :isRsvp="$route.path === '/rsvp'" />
    <router-view></router-view>
    <FooTer></FooTer>
  </div>
</template>

<script>
import FooTer from './components/FooTer.vue';
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooTer
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
  position: relative;
  overflow-x: hidden;
}
</style>
