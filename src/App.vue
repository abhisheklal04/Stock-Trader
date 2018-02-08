<template>
  <div class="container">
    <app-header></app-header>
    <div class="container" style="padding-top:56px;">
      <div class="row">
        <div class="col-md-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

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
