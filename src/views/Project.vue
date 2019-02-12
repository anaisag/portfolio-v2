<template lang="html">
  <div class="page project">
    <Nav></Nav>
    <svg height="0" width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.66 655">
      <clipPath id="cover">
        <path d="M.16,10.68s300,103,798,75,657-113,1122-76v582s-125.79,103.85-705.5,44.5c-586-60-838,11-1214-42"/>
      </clipPath>
    </svg>
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
    <div class="project-content">
      <div class="photos">
        <img src="../assets/portraitsea.jpg" alt="">
      </div>
      <div class="focus">
        <h2>Focus One</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla interdum feugiat. Nullam euismod facilisis mauris, quis auctor tortor convallis in. Etiam pulvinar quam eu congue aliquam. Nulla a risus vel lacus consectetur interdum. Cras vel augue metus. Mauris id congue dui. Ut a iaculis dolor. Aliquam erat volutpat.</p>
      </div>
      <div class="photos second">
        <img src="../assets/portraitsea.jpg" alt="">
        <img src="../assets/coverBonbon.png" alt="">
      </div>
      <div class="photos">
        <img src="../assets/portraitsea.jpg" alt="">
      </div>
      <div class="focus last">
        <h2>Focus two</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla interdum feugiat. Nullam euismod facilisis mauris, quis auctor tortor convallis in. Etiam pulvinar quam eu congue aliquam. Nulla a risus vel lacus consectetur interdum. Cras vel augue metus. Mauris id congue dui. Ut a iaculis dolor. Aliquam erat volutpat.</p>
      </div>
      <div class="photos">
        <img src="../assets/portraitsea.jpg" alt="">
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
	#cover {
		path {
			width: 100%;
		}
	}
	.fil-d-ariane {
		display: flex;
		margin-top: 10%;
		margin-left: 13%;
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
		display: flex;
		justify-content: space-between;
		padding: 5% 13%;
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
	&-cover {
		height: 40vh;
		background-image: url(../assets/coverBonbon.png);
		background-size: cover;
		background-attachment: fixed;
		clip-path: url(#cover);
	}
	&-content {
		display: flex;
		flex-direction: column;
		position: relative;
		div {
			padding: 5% 13%;
			&.photos {
				&.second {
					justify-content: space-between;
					img {
						max-width: 49%;
						&:not(:last-of-type) {
							margin-right: 10px;
						}
					}
				}
				img {
					max-width: 100%;
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
	}
}
</style>
