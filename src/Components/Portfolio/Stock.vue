<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          {{stock.name}}
          <small>(Price:{{stock.price | currency}}) (Quantity: {{stock.quantity}})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Quantity" v-model="quantity"
             :class="{danger : inSufficientStocks}"
          >
        </div>
        <button class="btn btn-success"
          @click="sellPortfolioStock"
          :disabled="inSufficientStocks || quantity <=0 || isNaN(quantity)"
        >
        {{ inSufficientStocks ? 'Insufficient Stocks' : 'Sell'  }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .danger {
    border: 1px solid mediumvioletred;
    box-shadow: 0 0 0 0.2rem mediumvioletred;
  }
</style>

<script>
  import {mapActions} from 'vuex';
  export default {
    props : ['stock'],
    data() {
      return {
        quantity : 0
      }
    },
    computed: {
      inSufficientStocks(){
        return this.quantity > this.stock.quantity;
      }
    },
    methods: {
      ...mapActions([
          'sellStock'
      ]),
      sellPortfolioStock() {
        const order = {
          stockId : this.stock.id,
          quantity  : parseInt(this.quantity),
          stockPrice : this.stock.price
        };
        console.log(order);
        this.sellStock(order);
        this.quantity=0;
      }
    }
  }
</script>
