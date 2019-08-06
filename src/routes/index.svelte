<style>
	.background {
		background-size: cover;
		height: 100vh;
		width: 100vw;
		filter: blur(3px);
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.background-image {
		height: 100vh;
		width: 100vw;
	}
	.background-overlay {
		background-color: rgba(228, 242, 249, 0.5);
		height: 100vh;
		width: 100vw;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
	}
	.core {
		z-index: 1;
	}
	.face {
		height: 300px;
		width: 300px;
	}
	h1 {
		color: #002f47;
		font-weight: 300;
		font-size: 4rem;
		text-transform: lowercase;
	}
</style>

<div class="background">
	<div class="background-image" style="background-image: url('bg-large.jpg');"></div>
	<div class="background-overlay"></div>
</div>
<div class="core">
	<div>
		<div class="face"></div>
		<h1>Dave Lunny</h1>
	</div>
</div>

