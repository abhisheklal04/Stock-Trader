<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-group">
        <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
      </div>
    </div>
  </div>
</template>
<script>
  import Stock from './Stock.vue';
  export default {
      data() {
          return {

          }
      },
      components: {
          appStock: Stock
      },
      computed: {
          stocks() {
              return this.$store.getters.stocks;
          }
      }
  }
</script>
