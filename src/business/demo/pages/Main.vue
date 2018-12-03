<template>
    <div>
        <h1>evaluate</h1>
        <img :src="require('@/assets/imgs/1.jpg')" style="width: 500px;height: 500px;">
    </div>
</template>

<script>
export default {

};
</script>

<style lang="less">
// 引入公共样式，别名
// @import '~@/assets/style/mixins.less';

// 无需引入，直接使用全局注入的mixins和变量
h1{
	.absolute;
	background-color: @bgColor;
}

</style>
