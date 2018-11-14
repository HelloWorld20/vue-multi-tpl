// 公共接口定义;
export const Apis = {
	fire: '/fire',
	test: '/test'
};
// 合并后export，如命名相同，公共会覆盖业务接口
export default function(businessApis) {
	return Object.assign({}, businessApis, Apis);
};

