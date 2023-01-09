<template>
  <NavigatioBar/>
  <Home />
</template>

<script>
import Home from './components/Home.vue'
import NavigatioBar from './components/NavigatioBar.vue';
export default {
  name: 'App',
  components: {
    Home,
    NavigatioBar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
