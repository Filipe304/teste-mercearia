<template>
  <div id="app">
    <!--nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.homepage{
  background-image:url("https://www.jacalculei.com.br/wp-content/uploads/2021/09/Como-abrir-uma-padaria-.png");
  opacity: 1;
  background-size: cover;
  height: 789px;
}



</style>
