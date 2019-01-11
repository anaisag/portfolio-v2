<template lang="html">
  <div class="nav">
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/projects">works</router-link>
  </div>
</template>

<script>
export default {
	name: 'Nav',
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.nav {
	position: absolute;
	top: 0;
	right: 0;
	padding: 50px;
	font-family: 'Butler';
	font-size: 20px;
	a {
		color: $green;
		padding: 0 20px 0 20px;
		text-decoration: none;
		opacity: 0.73;
		transition: $fast-transition;
		&.router-link-exact-active,
		&:hover {
			opacity: 1;
			font-family: 'Butler-Medium';
		}
	}
}
</style>
