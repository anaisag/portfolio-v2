<template>
  <div class="footer">
    <img src="@/assets/graphics/footer.svg" alt="">
    <div class="footer--content">
      <div class="contacts">
        <div class="contacts--contacts">
          <a href="mailto:anais.appereg@gmail.com"><p>anais.appereg@gmail.com</p></a>
          <a href="tel:0615842193"><p>06.15.84.21.93</p></a>
        </div>
        <div class="contacts--socials">
          <a href="https://www.behance.net/thermopoli6590" target="_blank">
            <img src="@/assets/behance.svg" alt="">
          </a>
          <a href="https://www.linkedin.com/in/anais-appere-guillemot/" target="_blank">
            <img src="@/assets/linkedin.svg" alt="">
          </a>
          <a href="https://twitter.com/anaisappere" target="_blank">
            <img src="@/assets/twitter.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div class="mentions">
      <p> {{new Date().getFullYear()}} // designed and integrated by Anaïs AG</p>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Footer',
};
</script>

<style scoped lang="scss">
@import '../assets/_variables';

.footer {
	position: absolute;
	bottom: 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	width: 100%;
	& > img {
		object-fit: cover;
		z-index: -1;
	}
	.footer--content {
		position: absolute;
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 0 15% 0 15%;
		box-sizing: border-box;
		.contacts {
			font-size: 15px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			position: relative;
			&--contacts a {
				text-decoration: none;
				p {
					color: white;
				}
			}
			&--socials {
				min-width: 20%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				img {
					height: 20px;
					transition: $fast-transition;
					&:hover {
						transform: scale(1.1);
					}
				}
			}
		}
	}
	.mentions {
		font-size: 11px;
		position: absolute;
		bottom: 0;
		p {
			color: white;
			margin-top: 0;
		}
	}
}
</style>
