<template>
  <div>
    <tlheader></tlheader>
    <nuxt />
  </div>
</template>

<script>
	import tlheader from '~/components/TLHeader.vue'

	export default {
	  components: {
	  	tlheader,
	  }
	}
</script>

<style scoped lang="less">
div {
  background-color: #f7f8f9;
  @media(min-width: 800px) {
    width: 800px;
    margin: 0 auto;
  }
}
</style>
