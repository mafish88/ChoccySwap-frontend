<script lang="ts">
	import MenuList from './menulist.svelte';

	let open = false;
	let menu: HTMLButtonElement;

	function focusout(e: FocusEvent & { currentTarget: EventTarget & HTMLButtonElement; }) {
		if (!menu.contains(e.relatedTarget as any)) { open=false }
	}
</script>


<div class="z-[200] flx space-x-8 px-4 py-1 mx-auto mt-6 bg-gray-400 rounded-full">
    <a href="stats" class="flx text-gray-100 hover:text-gray-0">
        Stats
    </a>
    <a href="pools" class="flx text-gray-100 hover:text-gray-0">
        Pools
    </a>
    <button on:click={()=>{open=!open}} on:focusout={focusout}
          class="flx relative" bind:this={menu}>
        <p class="menu flx text-gray-100 hover:text-gray-0
            stroke-gray-100 hover:stroke-gray-0">
            Resources
            <svg class="w-5" viewBox="0,0,7,10">
                <path style="fill:none;stroke-width:0.75;"
                    class="" d="M2,4 l2,2 l2,-2"/>
            </svg>
        </p>
        <MenuList {open}/>
    </button>
</div>
