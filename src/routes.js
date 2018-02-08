import Home from './Components/Home.vue';
import Portfolio from './components/Portfolio/Portfolio.vue';
import Stocks from './components/Stocks/Stocks.vue';

export const routes = [
  { path: '/', component:Home  },
  { path: '/stock-trader', component:Home  },
  { path: '/portfolio', component:Portfolio  },
  { path: '/stocks', component:Stocks }
];
