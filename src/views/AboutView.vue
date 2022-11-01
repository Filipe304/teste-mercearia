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
            style="top: 20px;"
          ></v-img>
          </v-card>

        <!-- <v-btn
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
        Produtos</v-btn>  -->

        <!-- INICIO NAVBAR -->
        <v-navigation-drawer
      v-model="drawer"
      permanent
    >
      <v-list-item class="px-2">
        <v-list-item-avatar >
          <v-img class="img-avatar" src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>João - Gerente</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon style="color: #F48FB1;">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <a @click="$util.go(item.link)"> </a>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn
          elevation="8"
          plain
          @click="goBack" 
        >
        <v-icon>mdi-arrow-left-bold-outline</v-icon>
        Sair</v-btn>
      </v-list>
    </v-navigation-drawer>
    <!-- FIM NAVBAR -->

        </v-card>
      </v-col>

      <v-col md="10" class="testando" style="padding: 24px;">
        <v-row cols="12" >
          <v-col md="12">
            <v-card elevation="10" class="header-principal">
            Delícias da Vovó
            </v-card>
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-col md="12">

            <v-card elevation="10" class="conteudo-geral" style="padding: 20px;">
              <v-title-card style="color: #000000; font-size: 32px; padding:15px;">
                Titulo Página 
            </v-title-card>

            <v-card class="card-data"  >
              <v-text-field  class="conteudo-card_data" hide-selected  v-model="dateFormated" label="Selecione a data" 
                  prepend-icon="mdi-calendar" v-bind="attrs" v-on="on">
              </v-text-field>
            </v-card>

            <div>
              Alguma coisa aqui ...
            </div>


            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
  </v-container>
</template>
<script src="path/to/chartjs/dist/chart.js"></script>
<script>
export default {
  methods: {
    goBack(){
      return this.$router.go(-1);
    }
  },
  data () {
      return {
        drawer: true,
        items: [
          { title: 'Dashboard', 
          icon: 'mdi-ice-cream',
          link: ''},

          { title: 'Planejamento',
          icon: 'mdi-candy',
          link: ''},

          { title: 'Despesas', icon: 
          'mdi-cupcake',
          link: '' },

          { title: 'Produtos',
          icon: 'mdi-cake',
          link: ''},
        ],
        mini: true,
      }
    },
    mounted () {
      const ctx = document.getElementById('myChart');
      const Chart = require('chart.js');
      const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
    myChart;
    }
};
</script>

<style scoped>
.v-btn > .v-btn__content .v-icon {
    color: #ff002d;
}
.header-principal{
    height: 70px;
    font-family: 'Caveat', cursive;
    font-size: 35px;
    padding: inherit;
    text-align:left;
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
  height: 468px;
  
}

.card-data {
  width: 200px;
  margin-left: 20px;
  border-radius: 10px;
}
.conteudo-card_data {
  width: 180px;
  margin-left: 8px;
}

@media screen and (max-width: 1366px) {
  .fundo-principal{
    height: 657px;
    width: 100%;
  }
  .conteudo-geral{
    width: 1080px !important;
  }

@media screen and (max-width: 1025px) {
}

@media screen and (max-width: 801px) {
}
.menu-vertical {
    height: 958px;
    width: 230px;
    margin-top: 19%;
  }
  .fundo-principal
  {
    height: 1025px;
  }
  .conteudo-geral{
    height: 885px;
    width: 490px;
  }
}
@media screen and (max-width: 600px) {
  .testando {
    min-width: 360px;
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