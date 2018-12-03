import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function(businessRouter) {
	return new Router({
		routes: businessRouter
	});
}
