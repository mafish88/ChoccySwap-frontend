<script lang="ts">
	import closeSvg from '$lib/images/close.svg';
	import { onMount } from 'svelte';

	let { close, isHidden } = $props();
	let lowSlippage: HTMLButtonElement | undefined;
	let currentSlippage: HTMLButtonElement | undefined = $state(undefined);

	function selectSlippage(e: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
		e.currentTarget.classList.add("selected")
		currentSlippage?.classList.remove("selected")
		currentSlippage = e.currentTarget;
	}

	onMount(()=>{
		currentSlippage = lowSlippage;
	})
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div onclick={close} class=" {isHidden? "!hidden" : ""} bg-[#0008] text-white absolute top-0 left-0 w-screen h-screen allcenter">
	<div onclick={e => e.stopPropagation()}
		class="allcenter flex-col bg-black rounded-3xl border-gray-600 border p-5 mx-2"
	>
		<div class="allcenter !justify-between w-full">
			<h2 class="font-extrabold text-xl">Settings</h2>
			<button onclick={close}><img class="w-[28px] h-[28px]" src={closeSvg} alt="close" /></button>
		</div>	

		<div class="flex flex-col m-3 w-full">
			<p class="font-bold mb-1 ml-1">Slippage</p>
			<div id="slippages" class="allcenter !justify-between mr-3 grid-cols-2">
				<button bind:this={lowSlippage} onclick={selectSlippage} class="selected">0.1%</button>
				<button onclick={selectSlippage}>0.5%</button>
				<button onclick={selectSlippage}>1.0%</button>
				<button onclick={selectSlippage}>2.0%</button>
				<button onclick={selectSlippage} class="col-span-2" aria-label="Custom">
					<input placeholder="Custom"/>
				</button>
			</div>
			<div class="allcenter mr-3">
				<p class="font-bold mt-4 mb-1 ml-1 mr-auto">Deadline</p>
				<input style="text-align:right;" value="20"/>
				&nbsp;minutes
			</div>
		</div>
	</div>
</div>

<style lang="less">
	input {
		all: unset;
		width: 4rem;
	}

	#slippages > button {
		padding: 0.25rem 0.75rem;
		border: solid grey 1px;
		border-radius: 1rem;
		&.selected{
			background: linear-gradient(276.31deg, #ed32bf -10.17%, #b5178e 97.19%);
		}
	}

	@media(max-width: 600px) {
		#slippages {
			display: grid !important;
			justify-items: center;
			gap: 0.25rem 0.25rem;
		}
	}
</style>