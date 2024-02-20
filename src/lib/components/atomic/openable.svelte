<script lang="ts">
	export let color: string;
    export let title: string;

	let open = false;
</script>

<button style:border-color={color} on:click|stopPropagation={() => {open = !open}} class:open
	class="{$$restProps.class} flex flex-col">
	<div class="flex justify-between w-full">
		<h4 style:color={color}>{title}</h4>
		<svg class="w-5" viewBox="0,0,7,10">
			<path style="fill:none;stroke-width:0.75;" style:stroke={color}
				d="M2,4 l2,2 l2,-2" />
		</svg>
	</div>
	<div class="wrapper">
		<div class="overflow-hidden">
			<slot />
		</div>
	</div>
</button>

<style>
	.wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.25s ease-out;
	}

	.open > .wrapper {
		grid-template-rows: 1fr;
	}
	.open > div > svg {
		transform: rotate(180deg);
	}
</style>