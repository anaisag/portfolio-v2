<template>
  <div class="page projects">
    <Nav></Nav>
    <h1>Projects</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';

export default {
	name: 'projects',
	components: {
		Footer,
		Nav,
	},
};
</script>

<style lang="css" scoped>
</style>
