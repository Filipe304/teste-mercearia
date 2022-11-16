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
        <v-row cols="12" >
          <v-col md="12">
            <v-card elevation="10" class="header-principal">
            Delícias da Vovó
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
                <canvas id="myChart"></canvas>
              </v-col>


              <v-col md="3" pb="5">
                <v-card elevation="10" outlined style="margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">
                  <v-card-text>
                    Entrou<br>R$17632,89
                  </v-card-text>
                </v-card>
                <v-card elevation="10" outlined style="margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;">  
                  <v-card-text>
                    Despesas<br>R$12348,54
                  </v-card-text>
                </v-card>
                </v-col>

                <v-col md="3">
                <v-card elevation="10" outlined style="margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"> 
                  <v-card-text>
                    Lucro<br>R$5284,35
                  </v-card-text>
                </v-card>
                <v-card elevation="10" outlined style="margin-bottom: 20px; box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;"> 
                  <v-card-text>
                    Caixa<br>R$2389,32
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
                          <v-card-text>
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
                          <v-card-text>
                            Dinheiro<br>R$ 2.876,57
                            Cartão<br>R$ 14.756,32
                          </v-card-text>
                        </v-col>
                        <v-col>
                          <v-card-title>Valor em Caixa</v-card-title>
                          <v-card-text>R$ 2.389,32</v-card-text>
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
        labels: ['Entrou', 'Despesas', 'Lucro', 'Caixa'],
        datasets: [{
            label: '# of Votes',
            data: [17632.89, 12348.54, 5284.35, 2389.32 ],
            backgroundColor: [
                'darkgreen',
                'darkred',
                'darkblue',
                'yellow'
            ],
            borderColor: [
                'green',
                'red',
                'blue',
                'purple'
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