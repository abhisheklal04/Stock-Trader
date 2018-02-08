<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <router-link class="nav-item" activeClass="active"  to="/" tag="li"><a class="nav-link">Home</a><span class="sr-only">(current)</span></router-link>
          <router-link class="nav-item" to="/portfolio" tag="li"><a class="nav-link">Portfolio</a></router-link>
          <router-link class="nav-item" to="/stocks" tag="li"><a class="nav-link">Stocks</a></router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a href="#" class="nav-link" @click="endDay">End Day</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle"
                      type="button" id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                Save / Load
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Save</a>
                <a class="dropdown-item" href="#">Load</a>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <strong class="nav-link">Funds : {{ funds | currency }}</strong>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    computed: {
      funds() { return this.$store.getters.funds; }
    },
    methods: {
        ...mapActions([
          'randomizeStocks'
        ]),
        endDay() {
          this.randomizeStocks();
        }
    }
  }
</script>
