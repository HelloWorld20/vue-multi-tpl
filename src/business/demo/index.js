import Vue from 'vue';
import App from './App.vue';
import router from './lib/router';
import store from './store';

require('@/main.js');

// 加载mock数据
if (process.env.FRONT_ENV === 'development' || process.env.FRONT_ENV === 'debugmock') {
	require('./lib/mock');
}

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
