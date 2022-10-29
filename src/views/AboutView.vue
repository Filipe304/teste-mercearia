<template>
  <v-container class="fundo-principal" 
  style="
    max-width: 1920px;
    margin: 0px;
    padding: 10px; 
    background-image:url(https://static.wixstatic.com/media/78f342_adb0386ab6c24378a548b4b3c43c491a~mv2.jpg/v1/fill/w_652,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Black%20board%20for%20website.jpg);">
  <div>

    <v-row cols="12">
      <v-col md="2" style="padding: 0px;">
        <v-card elevation="10" class="menu-vertical" style=" align-items: flex-start;">
          <v-card style="
          height: 250px;
          width: 230px;
          background-color: rgb(247, 214, 196);
          bottom: 0;
          top: -20px;">
          <v-img
            src="@/assets/BOLOS DA VOVÓ.png"
            style="top: 25px;"
          ></v-img>
          </v-card>
        <v-btn
          elevation="8"
          plain
        >
        <v-icon>mdi-ice-cream</v-icon>
        Dashboard</v-btn>
        <v-btn
          elevation="8"
          plain
        >
        <v-icon>mdi-candy</v-icon>
        Planejamento</v-btn>
        <v-btn
          elevation="8"
          plain
        >
        <v-icon>mdi-cupcake</v-icon>
        Despesas</v-btn>
        <v-btn
          elevation="8"
          plain
        >
        <v-icon>mdi-cake</v-icon>
        Produtos</v-btn>
        <v-btn
          elevation="8"
          plain
          @click="goBack" 
        >
        <v-icon>mdi-arrow-left-bold-outline</v-icon>
        Sair</v-btn>
        </v-card>
      </v-col>

      <v-col md="10" class="testando" style="padding: 24px;">
        <v-row cols="12" >
          <v-col md="12">
            <v-card elevation="10" class="header-principal">
            header here
            </v-card>
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-col md="12">
            <v-card elevation="10" class="conteudo-geral">
            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    goBack(){
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.v-btn > .v-btn__content .v-icon {
    color: #ff002d;
}
.header-principal{
    height: 70px;
}
.fundo-principal {
  opacity: 1;
  background-size: cover;
  height: 789px;
  width: 100%;
}
.menu-vertical{
  height: 588px;
  width: 230px;
  flex-direction: column;
  display: flex;
  align-items: center;
}
.conteudo-geral{
  height: 445px;
}

@media screen and (max-width: 1366px) {
  .fundo-principal{
    height: 657px;
    width: 100%;
  }

@media screen and (max-width: 1025px) {
}

@media screen and (max-width: 801px) {
}

@media screen and (max-width: 600px) {
  .testando {
    min-width: 360px;
  }
}

@media screen and (max-width: 480px){
  .fundo-principal{
    height: 100%;
    width: 100%;
  }
  .header-principal {
    width: 90%;
  }
  .conteudo-geral{
    width: 90%;
  }
  .menu-vertical{
    margin-left: 15%;
    margin-top: 12%;
  }
}

@media screen and (max-width: 320px) {
}
}
</style>