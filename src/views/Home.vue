<template>
  <div class="home">
    <Nav></Nav>
    <h1>Hi there !</h1>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';

export default {
	name: 'home',
	components: {
		Footer,
		Nav,
	},
};
</script>
