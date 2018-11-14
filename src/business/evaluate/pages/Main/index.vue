<template>
    <div>
        <h1>evaluate</h1>
        <img :src="require('@/assets/1.jpg')" style="width: 500px;height: 500px;">
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	async mounted() {
		// 获取初始化数据
		let initData = await this.getInitData();

		// 处理初始化数据
		console.log('initData', initData);

		// 获取另一份数据
		let testData = await this.getTestData(initData);

		// 处理另一份数据
		console.log('testData', testData);

		let otherData = await this.getStorageData();

		console.log('otherData', otherData);

		this.saveData('otherData');

	},
	computed: {
		...mapGetters(['getState'])
	},
	methods: {
		...mapActions(['getInitData', 'getTestData', 'getStorageData', 'saveData'])
	},
	watch: {
		getState(val) {

		}
	}
};
</script>

<style lang="less" scoped>
// 引入公共样式，别名
@import '~@/assets/css/common.less';

</style>
