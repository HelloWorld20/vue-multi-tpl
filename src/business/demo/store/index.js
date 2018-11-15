import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

import commonStore from '@/common/store';

// 合并公共store和私有store。如果命名重复，公共会覆盖私有
export default commonStore({
	state,
	getters,
	mutations,
	actions
});

