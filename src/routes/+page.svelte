<script>
	import Animation from "$lib/components/complex/animation.svelte";
	import Features from "$lib/components/sections/features.svelte";
	import Partners from "$lib/components/sections/partners.svelte";
	import Roadmap from "$lib/components/sections/roadmap.svelte";
	import Swap from "$lib/components/sections/swap.svelte";
</script>

<svelte:head>
	<title>Choccy</title>
	<meta name="description" content="The one-stop shop for DeFi on Chromia" />
</svelte:head>

<section>
	<div class="w-screen overflow-hidden">
		<Animation class=""/>
	</div>
	<Swap/>
	<!--ValueProp/-->
	<Features />
	<Partners />
	<Roadmap />
</section>

<style>
</style>
