<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">
          {{stock.name}}
          <small>(Price:{{stock.price | currency}}) (Quantity: {{stock.quantity}})</small>
        </h3>
      </div>
      <div class="card-body">
        <div class="pull-left">
          <input type="text" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success"
                  @click="sellPortfolioStock"
                  :disabled="inSufficientStocks || quantity <=0 || isNaN(quantity)"
          >
            {{ inSufficientStocks ? 'Insufficient Stocks' : 'Sell'  }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

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
