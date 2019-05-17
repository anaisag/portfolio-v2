<template>
  <div class="page home">
    <Nav></Nav>
    <div class="home-header">
      <div class="home-header-texts">
        <h1>Hi there !</h1>
        <p v-html="home.home_description"></p>
        <router-link to="/projects"><button type="button" name="button">See all my works</button></router-link>
      </div>
      <div class="home-header-slider">
        <div class="slider">
          <div class="slider-content">
            <router-link :style="project1.style" :to="`/project/${project1.id}`" @click.native="saveClickedProject" class="project"></router-link>
            <router-link :style="project2.style" :to="`/project/${project2.id}`" @click.native="saveClickedProject" class="project"></router-link>
            <router-link :style="project3.style" :to="`/project/${project3.id}`" @click.native="saveClickedProject" class="project"></router-link>
          </div>
        </div>
        <div class="points">
          <div v-on:click="translateX('0')" class="point active one"></div>
          <div v-on:click="translateX('-100%')" class="point two"></div>
          <div v-on:click="translateX('-200%')" class="point three"></div>
        </div>
      </div>
      </div>
      <div class="home-more">
        <div class="home-more-picture">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.51 40.34">
            <path class="cls-1" d="M.5,37.84A61.3,61.3,0,0,1,8.91,6.51c1.36-2.3,3-4.65,5.54-5.58,5.46-2,10.66,3.62,13.09,8.92,3.24,7.06,5.08,14.88,9.71,21.12s13.51,10.44,20.26,6.6C65.75,32.89,65.77,19.77,74,15c5.45-3.18,12.59-1.28,17.76,2.33s9.12,8.71,14,12.74A43.5,43.5,0,0,0,145.64,38c12.77-4,24.23-14,37.54-12.76,14.21,1.3,25.51,15.27,39.75,14.42C241.12,38.57,252.3,14,270.48,15.37"/>
          </svg>
          <img :src="home.profile.sizes.large" alt="">
        </div>
        <div class="home-more-texts">
          <h2>Want to know more about me ?</h2>
          <p v-html="home.home_about"></p>
          <router-link to="/about"><button type="button" name="button">More about me</button></router-link>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';
import { mapState } from 'vuex';

export default {
	name: 'home',
	components: {
		Footer,
		Nav,
	},
	computed: {
		...mapState({
			project1: state => ({
				id: state.projects[0].id,
				style: {
					backgroundImage: `url(${state.projects[0].hero_image.sizes.large})`,
				},
			}),
			project2: state => ({
				id: state.projects[1].id,
				style: {
					backgroundImage: `url(${state.projects[1].hero_image.sizes.large})`,
				},
			}),
			project3: state => ({
				id: state.projects[2].id,
				style: {
					backgroundImage: `url(${state.projects[2].hero_image.sizes.large})`,
				},
			}),
			home: state => state.home,
		}),
	},
	methods: {
		translateX(percent) {
			document.querySelector('.active').classList.remove('active');
			event.target.classList.add('active');
			document.querySelector('.slider-content').style.transform = `translateX(${percent})`;
		},
		saveClickedProject(evt) {
			let target;
			if (evt.path) {
				// chrome compatible
				target = evt.path.filter(e => e.tagName === 'A')[0];
			} else {
				// fallback for navigator without evt.path
				target = evt.target;
				while (target.tagName !== 'A') {
					target = target.parentElement;
				}
			}
			this.$store.commit('SET_CLICKED_PROJECT', target);
		},
	},
};
</script>

<style scoped lang="scss">
@import '../assets/_variables';

#header {
	fill: $beige;
	position: absolute;
	z-index: -1;
}
a {
	align-self: flex-end;
	flex-shrink: 0;
	button {
		background-color: $orange;
		border: 2px solid transparent;
		font-family: 'Butler';
		color: white;
		padding: 5px 20px;
		margin-top: 60px;
		border-radius: 7px;
		transition: $fast-transition;
		&:hover {
			cursor: pointer;
			transform: scale(1.03);
			color: $orange;
			background-color: transparent;
			border: 2px solid $orange;
		}
	}
}

.home-header {
	display: flex;
	padding: 15% 13% 0 13%;
	width: 100%;
	justify-content: space-between;
	&-texts {
		padding-right: 20%;
		display: flex;
		flex-direction: column;
	}
	&-slider {
		margin-top: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		.points {
			margin-top: 20px;
			display: flex;
			width: 20%;
			justify-content: space-between;
			.point {
				background-color: $orange;
				border-radius: 50%;
				height: 10px;
				width: 10px;
				&:hover {
					cursor: pointer;
				}
				&.active {
					background-color: $brick;
				}
			}
		}
	}
}
.slider {
	width: 32vw;
	height: 50vh;
	overflow: hidden;
	border-radius: 7px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
	position: relative;
	&-content {
		height: 100%;
		display: flex;
		transition: 0.5s ease;
		// animation: slide ease-in-out 10s infinite;
		.project {
			width: 100%;
			flex-shrink: 0;
			height: 100%;
			background-size: cover;
			background-position: center;
		}
	}
}
.home-more {
	margin: 100px 0 50px 0;
	padding: 0 13% 0 13%;
	display: flex;
	&-texts {
		display: flex;
		flex-direction: column;
		h2 {
			margin-top: 0;
		}
	}
	&-picture {
		margin-right: 70px;
		position: relative;
		svg {
			position: absolute;
			right: 20px;
			top: -30px;
			max-width: 75%;
			min-height: 50px;
			stroke: $orange;
			fill: none;
			stroke-miterlimit: 50;
			stroke-linecap: round;
			stroke-width: 4px;
		}
		img {
			max-width: 300px;
			border-radius: 7px;
		}
	}
}
@keyframes slide {
	0% {
		transform: translateX(0);
	}
	20% {
		transform: translateX(0);
	}
	33% {
		transform: translateX(-100%);
	}
	55% {
		transform: translateX(-100%);
	}
	70% {
		transform: translateX(-200%);
	}
	90% {
		transform: translateX(-200%);
	}
	100% {
		transform: translateX(0);
	}
}
</style>
