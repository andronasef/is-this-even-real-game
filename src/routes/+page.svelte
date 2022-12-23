<script lang="ts">
	import randImg, { ImgType } from '$lib/api/rand-img';
	import Loader from '$lib/components/loader.svelte';
	import { onMount } from 'svelte';

	let img: string;
	let imgLoaded = false;

	let type: ImgType;
	let score: number = 0;

	onMount(async () => {
		({ img, type } = await randImg());
	});
	async function chosse(userChosse: ImgType) {
		img = '';
		imgLoaded = false;
		if (userChosse === type) {
			score++;
		} else {
			score--;
		}
		({ img, type } = await randImg());
		console.log(img, type);
	}
</script>

<div class="center-cols md:flex-row w-full gap-5 md:gap-0">
	<!-- IMAGE -->
	<div class="center-cols md:w-1/2">
		<div class="imgsize md:h-[20rem]">
			{#if img}
				<link on:load={() => (imgLoaded = true)} rel="preload" href={img} as="image" />
			{/if}

			{#if img && imgLoaded}
				<img class="object-cover imgsize" src={img} alt="" transition:slide />
			{:else}
				<Loader />
			{/if}
		</div>
	</div>
	<!-- SCORE & CHOSSE -->
	<div class="center-cols flex-auto gap-3 md:gap-5">
		<h1 class="hidden md:flex text-5xl font-extrabold text-center">is this even real?</h1>
		<div class="text-3xl font-bold">Score: {score}</div>
		<div class="text-xl">Who Made This?</div>
		<div class="flex flex-row gap-5">
			<button class="w-16" on:click={() => chosse(ImgType.stable)}>🤖 AI</button>
			<button class="w-16" on:click={() => chosse(ImgType.stock)}>🧑 Real</button>
		</div>
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
