import commonApis from '@common/apis';

const apis = {
	api1: '/api1',
	api2: '/api2'
};

// 合并后export，如命名相同，公共会覆盖业务接口
export default commonApis(apis);
