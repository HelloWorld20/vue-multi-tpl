import Vue from 'vue';
import Router from 'vue-router';
import Entry from '../Entry';

Vue.use(Router);

export default function(businessRouter) {
	// 合并路由后抛出
	return new Router({
		routes: [
			{
				path: '/',
				name: 'Entry',
				component: Entry
			}
		].concat(businessRouter)
	});
}
