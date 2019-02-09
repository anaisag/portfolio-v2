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
          <svg height="0" width="0"viewBox="0 0 74.16 77.09">
            <clipPath id="mask">
              <path stroke="black" d="M74.12,39c1,29-18.5,36.5-41,38C8.18,78.67-1.22,56.46.12,39c1.5-19.5,8.5-38.5,39-39C58.12-.31,73.38,17.48,74.12,39Z"/>
            </clipPath>
          </svg>
          <img id="photo" src="@/assets/portraitsea.jpg" alt="">
          <img id="shape"src="@/assets/graphics/shape.svg" alt="">
        </div>
      </div>
    </div>
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
.cls-1 {
	fill: #fff;
}
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
		padding: 0 13% 0 13%;
		&--texts {
			max-width: 50%;
		}
		&--pics {
			position: relative;
			width: 40%;
			.photo {
				position: relative;
			}
			#photo {
				width: 100%;
				position: relative;
				clip-path: url(#mask);
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
</style>
