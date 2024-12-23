<script lang="ts">
	import closeSvg from '$lib/images/close.svg';

	let { close, isHidden } = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div onclick={close} class=" {isHidden? "!hidden" : ""} bg-[#0008] text-white absolute top-0 left-0 w-screen h-screen allcenter">
	<div onclick={e => e.stopPropagation()}
		class="allcenter flex-col bg-black rounded-3xl border-gray-600 border w-[400px] h-[400px] mx-2 p-5"
	>
		<div class="allcenter !justify-between w-full">
			<h2 class="font-extrabold text-xl">Select Token</h2>
			<button onclick={close}><img class="w-[28px] h-[28px]" src={closeSvg} alt="close" /></button>
		</div>	

		<div class="allcenter mt-3 mb-auto ml-3 mr-auto text-gray-400">
			<span>Not yet ready to use!</span>
		</div>
	</div>
</div>
