<template lang="html">
  <div class="project-item">
    <div class="project-hero">
      <router-link :to="`/project/${project.id}`" @click.native="saveClickedProject">
        <div class="project-hero-image" :style="`${getBgImage(project.hero_image)}`"></div>
      </router-link>
    </div>
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
import { mapState, mapGetters } from 'vuex';
export default {
	props: {
		project: Object,
	},
	computed: {
		...mapState({
			projects: state => state.projects,
		}),
	},
	methods: {
		getBgImage(img) {
			return `background-image: url(${img.sizes.medium_large})`;
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
		min-height: 40vh;
		&:hover + .project-description .call-to-action {
			svg {
				width: 40px;
			}
			p {
				font-family: 'Butler-Medium';
			}
		}
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
			transition: $fast-transition;
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
			flex-wrap: wrap;
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
			margin-top: 70px;
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
			ul {
				justify-content: flex-end;
			}
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
