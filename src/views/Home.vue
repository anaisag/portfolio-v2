<template>
  <div class="page home">
    <Nav></Nav>
      <svg id="header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1441 696.12">
        <path d="M0,0H1441l-1,675s-132,51.88-646-7C309.5,612.5,207,629,0,648Z"/>
      </svg>
    <div class="home-header">
      <div class="home-header-texts">
        <h1>Hi there !</h1>
        <p v-html="home.home_description"></p>
        <router-link to="/projects"><button type="button" name="button">See all my works</button></router-link>
      </div>
      <div class="home-header-slider">
        <div class="slider">
          <div class="slider-content">
            <div class="project one"></div>
            <div class="project two"></div>
            <div class="project three"></div>
          </div>
        </div>
        <div class="points">
          <div class="point active one"></div>
          <div class="point two"></div>
          <div class="point three"></div>
        </div>
      </div>
      </div>
      <div class="home-more">
        <div class="home-more-picture">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.51 40.34">
            <path class="cls-1" d="M.5,37.84A61.3,61.3,0,0,1,8.91,6.51c1.36-2.3,3-4.65,5.54-5.58,5.46-2,10.66,3.62,13.09,8.92,3.24,7.06,5.08,14.88,9.71,21.12s13.51,10.44,20.26,6.6C65.75,32.89,65.77,19.77,74,15c5.45-3.18,12.59-1.28,17.76,2.33s9.12,8.71,14,12.74A43.5,43.5,0,0,0,145.64,38c12.77-4,24.23-14,37.54-12.76,14.21,1.3,25.51,15.27,39.75,14.42C241.12,38.57,252.3,14,270.48,15.37"/>
          </svg>
          <img src="../assets/portraitsea.jpg" alt="">
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
	computed: mapState({
		home: state => state.home,
	}),
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
		border: none;
		font-family: 'Butler';
		color: white;
		padding: 5px 20px;
		margin-top: 60px;
		border-radius: 7px;
		transition: $fast-transition;
		&:hover {
			cursor: pointer;
			transform: scale(1.01);
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
					background-color: $plum;
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
		.project {
			width: 100%;
			flex-shrink: 0;
			height: 100%;
			&.one {
				background-color: $green;
			}
			&.two {
				background-color: $plum;
			}
			&.three {
				background-color: $orange;
			}
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
		}
	}
}
</style>
