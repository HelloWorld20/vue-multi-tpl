import Apis from '../modules/apis';
import {get, post} from '@common/http';
// 这里定义数据交互的方法，请求接口、提交接口、获取其他数据（设备、localStorage等），保存数据等。
// 这里定义的方法应该返回一个Promise，在使用的时候可以统一风格
export default {
	getInitData() {
		return get({
			url: Apis.init
		});
	},
	getTestData(state, params, error) {
		return post({
			url: Apis.test,
			data: params,
			error
		});
	},
	getStorageData() {
		// 即使不是异步也需要返回一个Promise，保证业务使用统一风格
		return new Promise((resolve, reject) => {
			resolve(localStorage.getItem('data'));
		});
	},
	saveData(state, data) {
		return new Promise((resolve, reject) => {
			localStorage.setItem('data', data);
			resolve();
		});
	}
};
