import Vue from 'vue';
import Router from 'vue-router';
import Main from '../pages/Main';


Vue.use(Router);


export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Main
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			// 如果这里用动态路由的话，则about chunk会在当做commonchunk放到common里面
			component: () => import(/* webpackChunkName: "about" */ '../pages/About')
		}
	]
});
