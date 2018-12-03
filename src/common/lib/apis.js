// 公共接口定义;
export const Apis = {
	commonApi1: '/commonApi1',
	commonApi2: '/commonApi1'
};
// 合并后export，如命名相同，公共会覆盖业务接口
export default function(businessApis) {
	return Object.assign({}, businessApis, Apis);
};

