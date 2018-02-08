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
  import {mapGetters} from 'vuex';
  import stock from './Stock.vue'
  export default {
      computed: {
        ...mapGetters({
            stocks: 'stockPortfolio'
        }),
      },
      components: {
        appStock: stock
      }
  }
</script>
