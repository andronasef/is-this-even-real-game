<script lang="ts">
	import randImg from '$lib/api/rand-img';
	import GameChoice from '$lib/components/home/game-choice.svelte';
	import GameImage from '$lib/components/home/game-image.svelte';
	import { onMount } from 'svelte';

	onMount(async () => await randImg());
</script>

<svelte:head>
	<title>Is This Even Real?</title>
</svelte:head>

<div class="center-cols md:flex-row w-full gap-5 md:gap-0">
	<!-- IMAGE -->
	<GameImage />
	<GameChoice />
	<!-- SCORE & CHOSSE -->
</div>
