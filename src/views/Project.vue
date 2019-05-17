<template>
  <div class="page project">
    <div class="fil-d-ariane">
      <router-link to="/projects"> &#139; back to all projects</router-link>
    </div>
    <div class="project-header">
      <div class="project-header-properties">
        <img id="project-shape" src="../assets/graphics/project-description.svg" alt="background shape">
        <h1 v-html="project.title"></h1>
        <ul>
          <li v-for="t in project.type">{{t}}</li>
        </ul>
        <p v-html="`– ${project.date}`"></p>
        <ul>
          <li v-for="s in project.softwares">{{s}}</li>
        </ul>
      </div>
      <div class="project-header-cover" :style="`${getBgImage(project.hero_image)}`">
        <div class="project-header-cover-background">

        </div>
      </div>

    </div>

    <div class="project-content">
      <img id="top-wave" src="../assets/graphics/top-project-content.svg" alt="">
      <div class="project-content-description">
        <img id="side-shape" src="../assets/graphics/blob-shape.svg" alt="">
        <p class="description" v-html ="project.description"></p>
      </div>
      <div class="photos" data-aos="fade-up" data-aos-delay="100">
        <img class="photo" :src="getImage(0).url" :alt="getImage(0).title">
      </div>
      <div class="focus" data-aos="fade-up" data-aos-delay="100">
        <h2 v-html="project.focus_one.title"></h2>
        <p v-html="project.focus_one.content"></p>
      </div>
      <div class="photos second">
        <img data-aos="fade-up" data-aos-delay="100" :src="getImage(1).url" :alt="getImage(1).title">
        <img data-aos="fade-up" data-aos-delay="100" :src="getImage(2).url" :alt="getImage(2).title">
      </div>
      <div class="photos" data-aos="fade-up" data-aos-delay="100">
        <img class="photo" :src="getImage(3).url" :alt="getImage(3).title">
      </div>
      <div class="focus last" data-aos="fade-up" data-aos-delay="100">
        <h2 v-html="project.focus_two.title"></h2>
        <p v-html="project.focus_two.content"></p>
      </div>
      <div class="photos" data-aos="fade-up" data-aos-delay="100">
        <div v-for="image in getOtherImages()" class="">
            <img class="photo" :src="image.url" :alt="image.title">
        </div>
      </div>
      <video data-aos="fade-up" data-aos-delay="100" v-if="project.video" :src="project.video.url" controls preload="auto"></video>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Nav from '@/components/Nav.vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default {
	components: {
		Nav,
	},
	name: 'project',

	computed: {
		...mapState({
			projects: state => state.projects,
			project() {
				return this.$store.getters.getProjectById(this.$route.params.id);
			},
		}),
	},
	methods: {
		getBgImage(img) {
			return `background-image: url(${img.url})`;
		},
		getImage(index) {
			return this.project.gallery[index];
		},
		getOtherImages() {
			return this.project.gallery.slice(4);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables';
.project {
	+ .logo {
		right: 5%;
	}
	.fil-d-ariane {
		display: flex;
		margin-top: 10%;
		margin-left: 13%;
		a {
			color: $beige;
			font-size: 13px;
			font-family: 'Butler-Stencil';
			&:not(:last-of-type)::after {
				content: '>';
				padding: 0 5px;
			}
		}
	}
	&-header {
		display: flex;
		justify-content: space-between;
		padding: 5% 13%;
		color: white;
		h1 {
			color: white;
			margin-bottom: 30px;
			font-size: 3rem;
			font-family: 'Shrikhand';
			font-weight: normal;
		}
		ul {
			list-style-type: none;
			padding: 0;
		}
		&-properties {
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding-left: 13%;

			img {
				position: absolute;
				top: 0;
				left: 0;
				z-index: -1;
				width: 70%;
			}
			p {
				margin: 0;
				color: white;
			}
			ul {
				display: flex;
				flex-wrap: wrap;
				&:first-of-type {
					font-family: 'Butler-Medium';
					li:not(:last-of-type)::after {
						content: '//';
						padding: 0 5px;
					}
				}
				&:nth-of-type(2) {
					li:not(:last-of-type)::after {
						content: ', ';
						padding: 0 7px 0 1px;
					}
				}
			}
		}

		&-cover {
			position: absolute;
			width: 100%;
			height: 750px;
			z-index: -10;
			top: 0;
			right: 0;
			background-size: cover;
			background-attachment: fixed;
			&-background {
				position: absolute;
				width: 100%;
				height: 100%;
			}
		}
	}

	&-content {
		display: flex;
		flex-direction: column;
		position: relative;
		#top-wave {
			transform: translateY(50px);
		}
		&-description {
			background-color: white;
			padding-bottom: 0 !important;
			#side-shape {
				position: absolute;
				left: 0;
				top: 0;
			}
			.description {
				max-width: 50%;
				margin-left: auto;
				ul {
					list-style-type: none;
					padding: 0;
					background-color: red;
					li::before {
						content: '//';
						padding-right: 5px;
						color: red;
					}
				}
			}
		}
		> div {
			padding: 5% 13%;
			&.photos {
				max-width: 100%;
				z-index: 1;
				img {
					box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
				}
				&.second {
					justify-content: space-between;
					align-items: flex-start;
					flex-direction: row;
					max-width: 100%;
					display: flex;
					img {
						flex-shrink: 0;
						max-width: 48%;
						&:first-of-type {
							transform: translateY(-60px);
						}
					}
				}
				.photo {
					max-width: 100%;
				}
				&:last-of-type {
					display: grid;
					grid-template-columns: auto auto auto;
					grid-gap: 10px;
					img {
						width: auto;
					}
				}
			}
			&.focus {
				max-width: 70%;
				h2 {
					font-family: 'Butler-Medium';
					text-transform: uppercase;
					&::before {
						content: '//';
						padding-right: 10px;
					}
				}
			}
		}
		video {
			max-width: 100%;
			padding: 5% 13%;
		}
	}
}
</style>
