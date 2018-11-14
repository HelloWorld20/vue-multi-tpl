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
		return new Promise((resolve, reject) => {
			resolve(localStorage.getItem('data'));
		});
	},
	saveData(state, data) {
		return new Promise((resolve, reject) => {
			console.log('localStorage', data);
			localStorage.setItem('data', data);
			resolve();
		});
	}
};
