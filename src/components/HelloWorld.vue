<template>
  <v-container>
    <v-row class="text-center" style="height: 350px;">
      <v-col cols="12">
        <h1 class="title-home">
          Welcome Back!
        </h1>
        <h3 class="subtitle-home">Delícias da vovó</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          :loading="loading"
          elevation="8"
          plain
          @click="remove"
          class="botao-home"
          router-link to="/about"
          >Entrar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
        loading: false
        }),
      methods: {
        async remove (){

          this.loading = true

          await new Promise ((resolve) => {setTimeout(resolve, 3000)})

          this.loading = false
          }
        }
      }
</script>
<style>
.botao-home{
  background: #f7d6c4;
  color: black;
  z-index: 10;
  height: 50px;
  min-width: 64px;
  width: 200px;
  padding: 0 16px;
  margin-top: 12%;
  border-radius: 10px;
  font-family:'KoHo', sans-serif;
}
.botao-home:hover:active {
  background-color: #e4a17f;
  transition-delay: 0.5s;
}
.title-home{
  font-size: 120px;
  text-shadow: 0px 2px 4px black;
  margin-top: 15%;
  font-family: 'Caveat', cursive;
  font-weight: 300;
}
.subtitle-home{
  font-family:'KoHo', sans-serif;
  font-size: 34px;
  text-shadow: 0px 2px 4px black;
}

  
  @media screen and (max-width: 1366px) {
  .homepage {
    height: 657px;
  }
  .title-home{
    margin-top: 12%;
  }
  .botao-home {
    margin-top: 8%;
  }
}

@media screen and (max-width: 1025px) {
}

@media screen and (max-width: 801px) {
}

@media screen and (max-width: 600px) {
}

@media screen and (max-width: 480px){
  .homepage{
    height: 800px;
  }
  .botao-home{
    margin-top: 80px;
  }
  .title-home{
    font-size: 95px;
    text-align: center;
  }
}
@media screen and (max-width: 320px) {
}

</style>
