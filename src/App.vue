<template>
  <div>
    <app-header></app-header>
    <div class="container main">
          <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
  .main {
    padding-top:70px;
  }
</style>
<script>
  import header from './Components/Header.vue';
  export default {
      components : {
        appHeader: header
      },
      created() {
          this.$store.dispatch('initStocks');
      },
      data () {
        return {
      }
    }
  }
</script>

<style>

</style>
