import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// 统一配置
const $axios = axios.create({
	timeout: 100000
});
// 请求拦截
$axios.interceptors.request.use(ctf => {
	// 请求拦截，需要插入cancelTocken，然后后面调用source.cancel才能取消请求。
	ctf.cancelToken = source.token;
	// 如果重复，则取消
	if (isDuplicate(ctf)) {
		source.cancel('接口重复请求拦截');
	}

	return ctf;
}, error => {
	return Promise.reject(error);
});

// 返回拦截
$axios.interceptors.response.use(response => {
	// 返回拦截
	if (!isSuccess(response)) {
		return Promise.reject({
			msg: response.data.msg,
			code: response.data.code,
			type: 'HTTPERROR[HTTPERROR.LOGICERROR]',
			config: response.config
		});
	}

	return response;
}, error => {
	console.log('拦截器抛出错误');
	return Promise.reject({
		msg: error.message || '网络故障',
		type: /^timeout of/.test(error.message) ? 'HTTPERROR[HTTPERROR.TIMEOUTERROR]' : 'HTTPERROR[HTTPERROR.NETWORKERROR]',
		config: error.config
	});

});


// 这样export，可以在引入时用对象解构
export const get = options => {
	return new Promise((resolve, reject) => {
		$axios({
			method: 'get',
			url: options.url,
			params: options.data
		}).then(res => {
			console.log('统一成功处理', res);
			resolve(res.data);
		}).catch(err => {
			// 如果要自定义错误处理，传一个参数，然后reject
			if (options.error) {
				reject(err);
			} else {
				console.warn('统一错误处理', err);
			}
		});
	});
};


export const post = options => {
	return new Promise((resolve, reject) => {
		$axios({
			method: 'post',
			url: options.url,
			data: options.data
		}).then(res => {
			console.log('统一成功处理', res);
			resolve(res.data);
		}).catch(err => {
			// 如果要自定义错误处理，传一个参数，然后reject
			if (options.error) {
				reject(err);
			} else {
				console.warn('统一错误处理', err);
			}
		});
	});
};


// 是不是重复请求
function isDuplicate(request) {
	return false;
}

// 判断接口是否为成功
function isSuccess(res) {
	return res.status === 200 || res.status === 304;
}

export default $axios;
