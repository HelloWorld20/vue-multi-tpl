import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

import commonState from '@/common/store/state';
import commonMutations from '@/common/store/mutations';
import commonActions from '@/common/store/actions';

Vue.use(Vuex);

// 合并公共store和私有store。如果命名重复，公共会覆盖私有
export default new Vuex.Store({
	state: {
		...state,
		...commonState
	},
	mutations: {
		...mutations,
		...commonMutations
	},
	actions: {
		...actions,
		...commonActions
	}
});

