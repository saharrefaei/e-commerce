<template>
  <NavigatioBar/>
  <Home />
  <FooterBar/>
</template>

<script>
import Home from './components/Home.vue'
import NavigatioBar from './components/NavigatioBar.vue';
import FooterBar from './components/FooterBar.vue'
export default {
  name: 'App',
  components: {
    Home,
    NavigatioBar,
    FooterBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand") ;

*{
  font-family:"Quicksand" ;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
