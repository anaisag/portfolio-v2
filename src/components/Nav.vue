<template lang="html">
  <div class="nav">
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
export default {
	name: 'Nav',
	methods: {},
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
	display: flex;
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
