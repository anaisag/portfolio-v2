<template>
  <div class="page about">
    <Nav></Nav>
    <div class="about--contents">
      <div class="about--contents--texts">
        <h1>Anaïs Appéré-Guillemot</h1>
        <p>I’m in second year at ECV Digital in Nantes.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae ornare ante. Etiam lobortis elit ac convallis faucibus. Donec sit amet sollicitudin velit. Vestibulum in varius dui, et tincidunt metus.</p>
      </div>
      <div class="about--contents--pics">
        <div class="photo">
          <img id="shape"src="@/assets/graphics/shape.svg" alt="">

          <div id="mask"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Nav from '@/components/Nav.vue';

export default {
	name: 'about',
	components: {
		Footer,
		Nav,
	},
};
</script>

<style scoped lang="scss">
.about {
	justify-content: center;
	h1 {
		margin-bottom: 15%;
	}
	&--contents {
		display: flex;
		position: relative;
		justify-content: space-around;
		box-sizing: border-box;
		width: 100%;
		min-height: 40vh;
		padding: 0 11% 0 13%;
		&--texts {
			max-width: 50%;
		}
		&--pics {
			position: relative;
			.photo {
				width: 25vw;
				height: 30vh;
				background-image: url('../assets/portraitsea.jpg');
				background-size: cover;
				background-position: center;
				position: relative;
				&:hover #mask {
					transform: rotate(360deg);
				}
				#mask {
					width: 100%;
					height: 101%;
					position: absolute;
					background-image: url('../assets/graphics/mask.svg');
					background-size: cover;
					background-position: 55% 50%;
					transition: 1.5s ease;
				}
				#shape {
					position: absolute;
					bottom: -10%;
					right: 10%;
					width: 25%;
					z-index: 1;
				}
			}
		}
	}
}
</style>
