<script lang="ts">
	import Header from '$lib/components/complex/Header.svelte';
	import Domainwarn from '$lib/components/complex/domainwarn.svelte';
	import './styles.css';
	import type { Snapshot } from './$types';
	import Navpill from '$lib/components/complex/navpill.svelte';
	
	let closedWarning = false;
	
	export const snapshot: Snapshot<boolean> = {
		capture: () => closedWarning,
		restore: (value) => (closedWarning = value),
	};
</script>

<div class="bg-gray min-h-screen flex flex-col app">
	<div class="sticky top-0 z-[200] w-full">
		<Domainwarn closed={closedWarning}/>
		<Header />
	</div>
	<Navpill />

	<main class="mb-[10rem] bg-transparent">
		<slot />
	</main>
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
		), url("bg.png");
		
	}
</style>
