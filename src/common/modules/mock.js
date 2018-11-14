import Mock from 'mockjs';
import { Apis } from './apis';

Mock.setup({
	timeout: '800 - 1000'
});

// 在这定义mock接口
// 每个接口为一个数组,
// 数组里的
// 第一个参数为接口url,
// 第二个可选,请求类型,默认为get,
// 第三个为返回值
const mockData = [
	[
		Apis.fire,	// 接口
		// 返回值
		{
			data: `来自公共接口:${Apis.fire}的get数据`
		}
	],
	[
		Apis.test,
		'post',		// 第二个参数可以是请求类型，默认为get
		{
			data: `来自公共接口:${Apis.test}的post数据`
		}
	]
];

export default function(businessMock) {
	// 在这统一执行Mock.js
	mockData.concat(businessMock).forEach(v => {
		Mock.mock(...v);
	});
}
