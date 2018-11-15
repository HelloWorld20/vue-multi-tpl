import commonApis from '@common/apis';

const apis = {
	init: '/init',
	submit: '/submit',
	comfirm: '/confirm'
};

// 合并后export，如命名相同，公共会覆盖业务接口
export default commonApis(apis);
