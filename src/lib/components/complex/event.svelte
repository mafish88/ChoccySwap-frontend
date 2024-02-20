<script lang="ts">
	import Openable from "../atomic/openable.svelte";

	export let color: string;
	export let title: string;
	export let description: string;

	let open = false;
</script>

<Openable {color} {title} class="border border-2 rounded-xl p-4 m-2 w-[300px]">
	<p class="overflow-hidden">{description}</p>
</Openable>

