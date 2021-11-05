<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/range">Custom range</router-link>
      <router-link to="/list">Names list</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232323;
  background: #f5f5f5;
  min-height: 100vh;

  #nav {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #232323;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 32px;
    color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}

@media (max-width: 440px) {
  #app {

    #nav {
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #232323;

    a {
      text-decoration: none;
      font-weight: bold;
      font-size: 20px;
      color: #2c3e50;

        &.router-link-exact-active {
          color: #42b983;
        }
      }
    }
  }
}


</style>
