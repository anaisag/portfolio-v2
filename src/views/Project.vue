<template lang="html">
  <div class="page project">
    <Nav></Nav>
    <div class="project-content">
      <div class="fil-d-ariane">
        <router-link to="/projects">Works</router-link>
        <router-link to="/project">Le Bonbon</router-link>
      </div>
      <div class="project-header">
        <div class="project-header-description">
          <h1>Le Bonbon</h1>
          <p>
            <a href="https://www.lebonbon.fr" target="_blank"><strong>Le Bonbon</strong></a>
             is a website that gives you news and good deals according to the city you live in. You can choose between 8 different french cities. We were asked to do an overhaul of this website during a three-day workshop. Our response ?
            <ul>
              <li>Make the difference between the cities more visible</li>
              <li>Galvanize the city</li>
              <li>Make a simpler navigation</li>
            </ul>
          </p>
        </div>
        <div class="project-header-properties">
          <ul>
            <li>Webdesign</li>
            <li>UX/UI</li>
          </ul>
          <p>- February 2018</p>
          <ul>
            <li>Photoshop</li>
            <li>Illustrator</li>
          </ul>
        </div>
      </div>
      <div class="project-cover">

      </div>
      <div class="project-gallery">

      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';

export default {
	name: 'project',
	components: {
		Nav,
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/_variables';
.project {
	padding: 10% 13% 0 13%;
	img {
		position: absolute;
		width: 50%;
		z-index: -1;
		right: -10%;
		top: 100px;
	}
	&-content {
		.fil-d-ariane {
			display: flex;
			a {
				color: $green;
				font-size: 13px;
				font-family: 'Butler-Stencil';
				opacity: 0.6;
				&.router-link-exact-active {
					opacity: 1;
				}
				&:not(:last-of-type)::after {
					content: '>';
					padding: 0 5px;
				}
			}
		}
		.project-header {
			margin-top: 50px;
			display: flex;
			justify-content: space-between;
			ul {
				list-style-type: none;
				padding: 0;
			}
			&-description {
				h1 {
					margin-bottom: 30px;
				}
				width: 50%;
				li::before {
					content: '//';
					padding-right: 5px;
				}
			}
			&-properties {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-right: 13%;
				padding-bottom: 5%;
				p {
					margin: 0;
				}
				ul {
					display: flex;
					color: $green;
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
		}
	}
	&-cover {
		height: 20vh;
		background-image: url(../assets/portraitsea.jpg);
		background-size: cover;
		background-attachment: fixed;
		margin-bottom: 100vh;
	}
}
</style>
