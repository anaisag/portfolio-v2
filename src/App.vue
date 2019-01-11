<template>
  <div id="app">
    <div class="logo"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'assets/_variables';

#app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}
.logo {
	position: absolute;
	left: 5%;
	top: 5%;
	border-radius: 50%;
	background-color: $beige;
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
