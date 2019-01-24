<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=M+PLUS+1p&subset=japanese');
#app {
  font-family: 'M PLUS 1p', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
export default {}

if (process.browser) {
  require('ie-buster')
}
</script>
