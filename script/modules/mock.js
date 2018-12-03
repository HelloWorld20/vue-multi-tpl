// 引入公共mock
import commonMock from '@/common/modules/mock.js';
import Apis from './apis';

// 在这定义业务mock接口
// 每个接口为一个数组,
// 数组里的
// 第一个参数为接口url,
// 第二个可选,请求类型,默认为get,
// 第三个为返回值
const mock = [
	// [
	// 	Apis.init,
	// 	{
	// 		data: `来自业务接口:${Apis.init}的get数据`
	// 	}
	// ],
	// [
	// 	Apis.comfirm,
	// 	'post',
	// 	{
	// 		data: `来自业务接口:${Apis.comfirm}的get数据`
	// 	}
	// ]
];

// 把定义好的数据扔给公共mock即可
commonMock(mock);


