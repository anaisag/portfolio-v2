<template>
  <div id="app">
    <router-link to="/">
      <div class="logo"></div>
    </router-link>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
@import 'assets/_variables';

#app {
	min-height: 100vh;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
}
.logo {
	position: absolute;
	z-index: 1;
	left: 5%;
	top: 50px;
	border-radius: 50%;
	background-color: $brick;
	width: 60px;
	height: 60px;
}
</style>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';

export default {
	name: 'about',
	components: {
		Footer,
	},
};
</script>
