<script lang="ts">
	import game from '$lib/stores/game';
	import Loader from '../loader.svelte';
</script>

<div class="center-cols md:w-1/2">
	{#if !$game.isImageLoaded}
		<div transition:fade class="absolute"><Loader /></div>
	{/if}

	<div class="imgsize">
		{#if $game.isImageLoaded}
			<img class="object-cover imgsize" src={$game.img} alt="" transition:scale />
		{/if}
	</div>
</div>

<style lang="scss">
	.imgsize {
		width: 14rem;
		height: 14rem;
	}
	@media (min-width: 768px) {
		.imgsize {
			width: 20rem;
			height: 20rem;
		}
	}
</style>
