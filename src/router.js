import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Projects from './views/Projects.vue';
import Project from './views/Project.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects,
		},
		{
			path: '/project/:id',
			name: 'project',
			component: Project,
		},
	],
});
