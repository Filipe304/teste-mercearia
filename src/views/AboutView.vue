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
          bottom: 0;
          top: -20px;">
          <v-img
            src="@/assets/CAKE-STYLE.png"
            style="left: 10px;width: 90%;height: 100%;"
          ></v-img>
          </v-card>
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
        <v-icon>mdi-arrow-left-bold-outline</v-icon>
        <router-link to="/">Sair
        </router-link> 
      </v-list>
    </v-navigation-drawer>
    <!-- FIM NAVBAR -->

        </v-card>
      </v-col>

      <v-col md="10" class="testando" style="padding: 24px;">
        <v-row cols="12">
        <!--/headerMain-->
          <v-col md="12">
            <v-card class="overflow-hidden">
              <v-app-bar
                absolute
                dark
                shrink-on-scroll
                prominent
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN"
                fade-img-on-scroll
                scroll-target="#scrolling-techniques-3"
              >
                <template v-slot:img="{ props }">
                  <v-img
                    v-bind="props"
                    gradient="to top right, rgba(28,28,28,.9), rgba(28,28,28,.1)"
                  ></v-img>
                </template>

                <v-app-bar-title>Delícias da Vovó</v-app-bar-title>

                <v-spacer></v-spacer>

                <v-btn href="https://www.instagram.com/nathsakunsler/" target="_blank" icon>
                  <v-icon style="color: #f800c9">mdi-heart</v-icon>
                </v-btn>

                <v-btn href="https://www.instagram.com/farthuur/" target="_blank" icon>
                  <v-icon style="color: #0007ff">mdi-heart</v-icon>
                </v-btn>

                <template v-slot:extension>
                  <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                  </v-tabs>
                </template>
              </v-app-bar>
              <v-sheet
                id="scrolling-techniques-3"
                class="overflow-y-auto"
                max-height="200"
              >
                <v-container style="height: 1000px;"></v-container>
              </v-sheet>
            </v-card>
          </v-col>
        </v-row>
        <v-row cols="12">
          <v-col md="12" style="height: 65px;">

            <v-card elevation="10" class="conteudo-geral" style="padding: 20px;">
              <v-title-card style="color: #000000; font-size: 32px; padding:15px;">
                Dashboard
            </v-title-card>

            <!--v-card class="card-data"  >
              <v-text-field  class="conteudo-card_data" hide-selected  v-model="dateFormated" label="Selecione a data" 
                  prepend-icon="mdi-calendar" v-bind="attrs" v-on="on">
              </v-text-field>
            </v-card-->

            <v-row cols="12">
              <v-col md="4">
                Escolha o periodo da consulta:
                <v-select
                :items="items"
                label="Mês"
                dense
                ></v-select>
              </v-col>
            </v-row>


            <v-row cols="12">
              <v-col md="6">
                <canvas 
                id="myChart" 
                style="box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
                border-radius: 10px;"></canvas>
              </v-col>


              <v-col md="3">
                <v-card elevation="10" outlined style="border-radius: 10px; margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">
                  <v-card-text style="font: status-bar;">
                    Entrou
                  <v-icon style="color: blue">mdi-arrow-top-right-thick</v-icon>
                    <br>
                    R$17632,89
                  </v-card-text>
                </v-card>
                <v-card elevation="10" outlined style="border-radius: 10px; margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"> 
                  <v-card-text style="font: status-bar;">
                    Lucro
                    <v-icon style="color: green;">mdi-cash-check</v-icon>
                    <br>R$5284,35
                  </v-card-text>
                </v-card>
                </v-col>

                <v-col md="3">
                <v-card elevation="10" outlined style="border-radius: 10px; margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">  
                  <v-card-text style="font: status-bar;">
                    Despesas
                    <v-icon style="color: red;">mdi-arrow-bottom-left-thick</v-icon>
                    <br>R$12348,54
                  </v-card-text>
                </v-card>
                <v-card elevation="10" outlined style="border-radius: 10px; margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"> 
                  <v-card-text style="font: status-bar;">
                    Caixa
                    <v-icon style="color: black;">mdi-cash-register</v-icon>
                    <br>R$2389,32
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>

            <v-row cols="12">
              <v-col md="12">
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    text
                  >
                    Detalhes
                  </v-btn>

                  <v-spacer></v-spacer>

                  <v-btn style="right: 900px;"
                    icon
                    @click="show = !show"
                  >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                      <v-row>
                        <v-col>
                          <v-card-title>Despesas</v-card-title>
                          <v-card-text style="display: flex;align-items: flex-start;justify-content: flex-start;">
                            Mantimentos: R$ 4.356,00<br>
                            Energia: R$ 2.879,00<br>
                            Aluguél: R$ 4.561,00<br>
                            Agua: R$ 150,00<br>
                            Internet: R$ 99,00<br>
                            Gasolina: R$ 659,54<br>
                            Salario funcionário: R$2.500,00<br>
                            Contabilidade: R$ 600,00<br>
                            Impostos: R$900,00
                          </v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-title>Valor Recebido</v-card-title>
                          <v-card-text style="display: flex;align-items: flex-start;justify-content: flex-start;">
                            Dinheiro: R$ 2.876,57<br>
                            Cartão: R$ 14.756,32
                          </v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-title>Valor em Caixa</v-card-title>
                          <v-card-text style="display: flex;align-items: flex-start;justify-content: flex-start;">V
                          alor restante: R$ 2.389,32</v-card-text>
                        </v-col>
                    </v-row>
                  </div>
                </v-expand-transition>
              </v-col>
            </v-row>

            </v-card> 
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
  </v-container>
</template>
<script src="path/to/chartjs/dist/chart.js"></script>
<script src="../IndexedDB.js"></script>
<script>
//import bancoDados from '../IndexedDB.js'
export default {
  methods: {
    goBack(){
      return this.$router.go(-1);
    }
  },
  data () {
      return {
        show: false,
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
        labels: ['Bruto', 'Despesas', 'Lucro', 'Caixa'],
        datasets: [{
            label: 'Financeiro',
            data: [17632.89, 12348.54, 5284.35, 2389.32 ],
            backgroundColor: [
                '#D2691E',
                '#B22222',
                '#8B4513',
                '#CD5C5C'
            ],
            borderColor: [
                '#D2691E',
                '#B22222',
                '#8B4513',
                '#CD5C5C'
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
.v-card-title{
  font-weight: bold;
}
.v-card-text {
  padding: 40px;
}
.v-btn > .v-btn__content .v-icon {
    color: #ff002d;
}
.header-principal[data-v-4cebd208] {
    height: 70px;
    font-family: 'Caveat', cursive;
    font-size: 35px;
    padding: inherit;
    text-align: left;
    width: 1080px !important;
    background: lightgray;
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
    height: 753px !important;
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
Dona Mafalda tem uma mercearia a anos e sua neta questionou ela sobre os seus ganhos;
 Sem saber sobre a resposta, a vovó falou: Eu sempre pago minhas contas e o meu salário às vezes vem variável. 
 Em caixa havia R$ 2.389,32
 e no mês de Março eu tive um gasto de R$ 4.356,00 em mantimentos para fazer os meus bolos, 
 recebi R$ 2.876,57 em dinheiro 
 e R$ 14.756,32 em cartão. 
 Meu salário é de R$ 3.566,00, 
 minha energia é R$ 2.879,00(Forno elétrico), 
 meu aluguel é R$ 4.561,00, 
 gasto R$ 150,00 com água 
 e R$ 99,00 com internet, 
 R$ 659,54 com gasolina para entregar os bolos 
 e 2.500,00 com o meu funcionário. 
 Eu também pago R$ 600,00 de contabilidade 
 e R$900,00 em impostos, INSS e Simples Nacional.