<template>
  <div class="footer">
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
.footer {
	position: absolute;
	bottom: 0;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	background-image: url('../assets/footer.svg');
	background-position: bottom;
	background-repeat: no-repeat;
	color: white;
	padding: 0 8% 0 8%;
	min-height: 149px;
	width: 100%;

	.contacts {
		font-size: 15px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		&--contacts p {
			text-decoration-style: none;
			color: white;
			margin: 3%;
		}
		&--socials {
			min-width: 15%;
			display: flex;
			justify-content: space-between;
			img {
				height: 20px;
			}
		}
	}
	.mentions {
		font-size: 11px;
		p {
			margin-top: 0;
		}
	}
}
</style>
