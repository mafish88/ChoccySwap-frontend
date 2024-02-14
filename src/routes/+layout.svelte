<script lang="ts">
	import Header from '$lib/components/complex/Header.svelte';
	import Domainwarn from '$lib/components/complex/domainwarn.svelte';
	import './styles.css';
	import type { Snapshot } from './$types';
	import Navpill from '$lib/components/complex/navpill.svelte';
	
	let closedWarning = false;
	let warningHeight = "";
	
	export const snapshot: Snapshot<boolean> = {
		capture: () => closedWarning,
		restore: (value) => (closedWarning = value),
	};
</script>

<div class="bg-gray min-h-screen flex flex-col app">
	<Domainwarn closed={closedWarning} bind:height={warningHeight}/>
	<Header marginTop={warningHeight}/>
	<Navpill />

	<main class="mb-20 bg-transparent">
		<slot />
	</main>

	<footer class="bg-gray h-10 mt-auto"></footer>
</div>

<style>
	.app {
		background-image: linear-gradient(
			to bottom right,
			rgb(34 34 34 / 0%),
			rgb(9 25 35 / 50%)
		), linear-gradient(
			to bottom left,
			rgb(34 34 34 / 0%),
			#ff9ced22
		), url("$lib/images/bg.png");	
	}
</style>
