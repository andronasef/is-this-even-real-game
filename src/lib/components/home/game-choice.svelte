<script lang="ts">
	import randImg, { ImgType } from '$lib/api/rand-img';
	import game from '$lib/stores/game';

	async function chosse(userChosse: ImgType) {
		if (!$game.isImageLoaded) return;
		$game.img = '';
		$game.isImageLoaded = false;

		if (userChosse === $game.imgType) {
			console.log('correct');

			$game.score += 1;
		} else {
			console.log('wrong');
			$game.score -= 1;
		}
		await randImg();
	}
</script>

<div class="center-cols flex-auto gap-3 md:gap-5">
	<h1 class="hidden md:flex text-5xl font-extrabold text-center">is this even real?</h1>
	<div class="text-3xl font-bold">Score: {$game.score}</div>
	<div class="text-xl">Who Made This?</div>
	<div class="flex flex-row gap-5">
		<button class="w-16" disabled={!$game.isImageLoaded} on:click={() => chosse(ImgType.stable)}
			>🤖 AI</button
		>
		<button class="w-16" disabled={!$game.isImageLoaded} on:click={() => chosse(ImgType.stock)}
			>🧑 Real</button
		>
	</div>
</div>
