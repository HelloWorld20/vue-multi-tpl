<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">

#app {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: #c1c6cc;
}
</style>
<script>
export default {
	mounted() {
		// 在这调用fire接口。如果fire通过之后显示router-view

	}
};
</script>
