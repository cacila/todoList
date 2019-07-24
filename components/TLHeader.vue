<template>
  <header class="">
    <h1>我的一天</h1>
		<ul>
			<li @click="navTo('/')" :class="{ active: $route.path==='/' }">未完成</li>
			<li @click="navTo('/done')" :class="{ active: $route.path==='/done' }">已完成</li>
		</ul>
	</header>
</template>

<script>
  export default {
    methods: {
      navTo(url) {
        if (url !== this.$route.path) {
          this.$router.push(url)
        }
      }
    },
    computed:{
    }
  }
</script>

<style scoped lang="less">
header > h1 {
  height: 100px;
  text-align: center;
  background-color: skyblue;
  line-height: 100px;
  color: black;
  font-size: 30px;
  font-weight: 600;
}
header > ul {
  background-color: skyblue;
  height: 52px;
  li {
    color: aliceblue;
    padding:0 8px;
    border-bottom: 2px solid skyblue;
    &:hover, &.active {
      background-color: royalblue;
      border-bottom: 2px solid black;
    }
  }
  line-height: 50px;
	display: flex;
}
</style>
