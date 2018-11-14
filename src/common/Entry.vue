// 业务首页面
<template>
	<div></div>
</template>

<script>
export default {
	created() {
		// 这里请求fire接口等，每个业务的默认路由必须是这个页面
		this.$store.dispatch('getFireData').then(res => {
			this.$router.replace('/main');
		});
	}
};
</script>
