<template>
  <div>
    <h1 style="color:black;">Primeira pagina</h1>
      <v-btn
        elevation="8"
        plain
        @click="goBack" 
      >Sair</v-btn>
  </div>
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
</style>