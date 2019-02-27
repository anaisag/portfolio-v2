<template>
  <div class="page projects">
    <Nav></Nav>
    <div class="projects-content">
      <h1>Projects</h1>
      <div class="projects-content-items">
        <ProjectItem :project="project" v-for="project in projects"></ProjectItem>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
import ProjectItem from '@/components/ProjectItem.vue';

export default {
	name: 'projects',
	components: {
		Footer,
		Nav,
		ProjectItem,
	},
	computed: {
		...mapState({
			projects: state => state.projects,
		}),
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.projects-content {
	display: flex;
	flex-direction: column;
	padding: 10% 13% 0 13%;
	&-items {
		display: flex;
		flex-direction: column;
		margin: 50px 0 80px 0;
	}
}
</style>
