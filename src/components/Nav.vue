<template lang="html">
  <div class="nav">
    <svg id="nav-design" xmlns="http://www.w3.org/2000/svg" width="694" height="237" viewBox="0 0 694 237">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_25" data-name="Rectangle 25" width="694" height="237" transform="translate(746)" fill="#fff"/>
        </clipPath>
      </defs>
      <g id="Groupe_de_masques_9" data-name="Groupe de masques 9" transform="translate(-746)" clip-path="url(#clip-path)">
        <path id="colored" data-name="Tracé 202" d="M783.977,1848.709s-2.88,195.178,268.049,215.3,434.851,33.049,447.284,100.9,0-361.337,0-361.337Z" transform="translate(-46 -1905)" :fill="fill"/>
        <path data-name="Tracé 203" d="M868.194,1900s-9.418,156.173,255.6,179.05,222.83-34.769,398.486,34.193,0-332.878,0-332.878Z" transform="translate(-46 -1905)" fill="#f2e4d6"/>
      </g>
    </svg>
    <router-link id="home" to="/">home
      <svg>
        <line x1="27.5" y1="2" x2="42.5" y2="2"/>
      </svg>
    </router-link>
    <router-link id="about" to="/about">about
      <svg>
        <line x1="27.5" y1="2" x2="42.5" y2="2"/>
      </svg>
    </router-link>
    <router-link id="works" to="/projects">works
      <svg>
        <line x1="27.5" y1="2" x2="42.5" y2="2"/>
      </svg>
    </router-link>
  </div>
</template>

<script>
import { getRandomColor } from '@/utils';

export default {
	name: 'Nav',
	data() {
		return {
			fill: getRandomColor(),
		};
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables';

.nav {
	position: absolute;
	top: 0;
	right: 0;
	padding: 50px;
	padding-right: 80px;
	font-family: 'Butler';
	font-size: 20px;
	display: flex;
	#nav-design {
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
	}
	a {
		color: $green;
		padding: 0 20px 0 20px;
		text-decoration: none;
		opacity: 0.73;
		transition: $fast-transition;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		svg {
			stroke: $green;
			max-width: 70px;
			max-height: 5px;
			stroke-linecap: round;
			stroke-width: 2px;
			opacity: 0;
		}
		&.router-link-exact-active {
			svg {
				opacity: 1;
			}
		}
		&.router-link-exact-active,
		&:hover {
			opacity: 1;
			font-family: 'Butler-Regular';
		}
	}
}
</style>
