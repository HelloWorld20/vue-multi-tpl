import commonApis from '@common/apis';

// 合并后export
export default Object.assign({}, commonApis, {
	init: '/init',
	submit: '/submit',
	comfirm: '/confirm'
});
