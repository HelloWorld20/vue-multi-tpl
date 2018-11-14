import {Apis} from '@common/apis';
import {post} from '@common/http';
export default {
	getFireData({state, commit}) {
		return new Promise((resolve, reject) => {
			if (state.fireData) {
				// 如果本地有数据，则直接取本地数据
				resolve(state.fireData);
			} else {
				// 数据来自接口
				post({
					url: Apis.fire
				}).then(res => {
					commit('updateFireData', res);
					resolve(res);
				}).catch(err => {
					reject(err);
				});
			}
		});

	}
};
