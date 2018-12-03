// 公共处理js

export default function(businessName) {
	require('@/assets/styles/app.less');
	// 全局对象
	window.winApp = window.winApp || {};

	// 引入项目公共值，如App、device、等等
	winApp.config = require('./common/config');
	winApp.apis = require(`@/business/${businessName}/modules/apis`).default;
	winApp.device = require('./common/modules/device').default;

	// 冻结全局对象
	Object.deepFreeze(window.winApp);

}

// 冻结全局对象，全局应该是只读的。避免使用全局对象来传值，逻辑控制
Object.deepFreeze = function(obj) {
	let propNames = Object.getOwnPropertyNames(obj);
	propNames.forEach(function(name) {
		let prop = obj[name];
		if (typeof prop === 'object' && prop !== null) {
			Object.deepFreeze(prop);
		}
	});
	return Object.freeze(obj);
};
