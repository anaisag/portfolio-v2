<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
#app {
	min-height: 100vh;
}

#nav {
	padding: 30px;
	&.router-link-exact-active {
		color: #42b983;
	}
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
