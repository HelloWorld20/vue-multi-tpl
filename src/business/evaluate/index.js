import Vue from 'vue';
import App from './App.vue';
import router from './modules/router';
import store from './store';

require('@/main.js');

// 加载mock数据
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'debugmock') {
	require('./modules/mock');
}

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
