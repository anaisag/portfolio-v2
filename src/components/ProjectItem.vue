<template lang="html">
  <div class="project-item">
    <div class="project-hero">
      <p>01</p>
      <router-link :to="`/project/${project.id}`" @click.native="saveClickedProject">
        <div class="project-hero-image" :style="`${getBgImage(project.hero_image)}`"></div>
      </router-link>
    </div>
    <svg id="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270.11 39.59">
      <path d="M.13,37.46A61.23,61.23,0,0,1,8.54,6.14c1.35-2.31,3-4.66,5.53-5.59,5.47-2,10.67,3.62,13.1,8.92,3.24,7.07,5.07,14.89,9.71,21.13S50.38,41,57.14,37.2c8.24-4.68,8.25-17.81,16.43-22.58C79,11.44,86.16,13.34,91.34,17s9.12,8.7,14,12.74a43.5,43.5,0,0,0,39.95,7.92c12.77-4,24.24-14,37.55-12.76,14.2,1.3,25.5,15.27,39.74,14.43C240.74,38.19,251.93,13.65,270.1,15"/>
    </svg>
    <div class="project-description">
      <h2 v-html="project.title"></h2>
      <ul>
        <li v-for ="t in project.type">{{t}}</li>
      </ul>
      <router-link :to="`/project/${project.id}`" @click.native="saveClickedProject" class="call-to-action">
        <svg viewBox="0 0 20 0.5">
          <line x1="0" y1="0" x2="20" y2="0"/>
        </svg>
        <p>View the project</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	props: {
		project: Object,
	},
	methods: {
		getBgImage(img) {
			return `background-image: url(${img.url})`;
		},
		saveClickedProject(evt) {
			this.$store.commit('SET_CLICKED_PROJECT', this.$el);
		},
	},
};
</script>

<style scoped lang="scss">
@import '../assets/_variables';

.project-item {
	margin-top: 130px;
	display: flex;
	position: relative;
	.project-hero {
		position: relative;
		min-width: 50%;
		min-height: 33vh;
		&:hover ~ #path {
			stroke-dashoffset: 0;
		}
		p {
			font-size: 80px;
			font-family: 'Butler-Stencil';
			position: absolute;
			margin: 0;
			top: -50px;
		}
		&-image {
			height: 100%;
			width: 100%;
			border-radius: 7px;
			background-size: cover;
			background-position: top;
		}
	}
	#path {
		stroke: $orange;
		stroke-width: 3px;
		position: absolute;
		stroke-linecap: round;
		fill: none;
		z-index: 1;
		width: 25%;
		transition: 0.2s $fast-transition;
		stroke-dasharray: 500px;
		stroke-dashoffset: 500px;
	}
	.project-description {
		height: 100%;
		align-self: flex-end;
		ul {
			display: flex;
			padding: 0;
			li {
				font-size: 16px;
				font-family: 'Butler';
				color: $green;
				list-style-type: none;
				padding-right: 7px;
				&:not(:last-of-type)::after {
					content: ', ';
					padding-left: 1px;
				}
			}
		}
		.call-to-action {
			display: flex;
			align-items: center;
			margin-top: 50%;
			&:hover {
				svg {
					width: 40px;
				}
				p {
					font-family: 'Butler-Medium';
				}
			}
			svg {
				stroke: $green;
				stroke-width: 0.5px;
				width: 50px;
				height: 2px;
				transition: $fast-transition;
			}
			p {
				margin-bottom: 0;
				margin-top: 0;
				transition: $fast-transition;
			}
		}
	}
	// NOTE: ODD PROJECT ITEM STYLING
	&:nth-child(odd) {
		.project-hero-image {
			margin-left: 30px;
		}
		#path {
			top: 17%;
			left: 50%;
		}
		.project-description {
			margin-left: 100px;
			.call-to-action {
				p {
					margin-left: 20px;
				}
			}
		}
	}
	// NOTE: EVEN PROJECT ITEM STYLE
	&:nth-child(even) {
		justify-content: flex-end;
		flex-shrink: 0;
		.project-hero {
			order: 2;
			p {
				right: 0;
			}
			&-image {
				margin-right: 30px;
			}
		}
		#path {
			top: 60%;
			left: 30%;
		}
		.project-description {
			margin-right: 100px;
			text-align: right;
			.call-to-action {
				justify-content: flex-end;
				svg {
					order: 2;
					transform: rotate(180deg);
				}
				p {
					margin-right: 20px;
				}
			}
		}
	}
}
</style>
