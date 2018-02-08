<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">
          {{stock.name}}
          <small>(Price:{{stock.price | currency}})</small>
        </h4>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input type="text" placeholder="Quantity" v-model="quantity"
                 class="form-control"
                 :class="{danger : inSufficientFunds}"
          >
        </div>
          <button class="btn btn-success"
            @click="buyStock"
            :disabled="inSufficientFunds || quantity <=0 || isNaN(quantity)"
            >
              {{ inSufficientFunds ? 'Insufficient Funds' : 'Buy'  }}
          </button>
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
  export default {
      props : ['stock'],
      data() {
          return {
              quantity : 0
          }
      },
      computed: {
          inSufficientFunds(){
              return this.quantity * this.stock.price > this.$store.getters.funds;
          }
      },
      methods: {
          buyStock() {
              const order = {
                  stockId : this.stock.id,
                  quantity : parseInt(this.quantity),
                  stockPrice : this.stock.price
              };
              console.log(order);
              this.$store.dispatch('buyStock', order);
              this.quantity=0;
          }
      }
  }
</script>
