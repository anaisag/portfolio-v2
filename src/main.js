import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/assets/base.scss';
import 'normalize.css';
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
	async created() {
		await this.$store.dispatch('getData');
	},
	watch: {
		$route() {
			setTimeout(() => {
				this.ps && this.ps.update();
			}, 1000);
		},
	},
}).$mount('#app');
