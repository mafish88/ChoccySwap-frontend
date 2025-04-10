<script lang="ts">
	import logo from '$lib/images/common/logo.svg';
	import writing from '$lib/images/common/writing.svg';
	import menu from '$lib/images/common/menu.svg';
	import { alerter, updateBalances } from '$lib/utils';
	import { mint } from '$lib/interactions/account';
	import Walletconnector from '../swap/walletconnector.svelte';
	import { getSession } from '$lib/interactions/connection';
	import type { Session } from '@chromia/ft4';

	let { isSwap } = $props();
	let menuDiv: HTMLDivElement;

	let text: string = $state('Get funds for testing');
	let session: Session | undefined = $state(undefined);
	let hideMinter = $state(false);

	function getBalance() {
		text = 'Receiving funds...';
		mint(getSession()!)
			.then(() => {
				text = 'Assets received!';
				updateBalances();
				new Promise<void>((resolve) => {
					setTimeout(() => {
						hideMinter = true;
						resolve();
					}, 3000);
				});
			})
			.catch((e) => {
				text = 'Error!';
				new Promise<void>((resolve) => {
					setTimeout(() => {
						text = 'Get funds for testing';
						resolve();
					}, 3000);
				});
				alerter(e);
			});
	}

	function toggleMenu() {
		if (menuDiv.classList.contains('open')) menuDiv.classList.remove('open');
		else menuDiv.classList.add('open');
	}
</script>

<div id="positioner" class="absolute w-full z-10">
	<div id="header" class="allcenter bg-transparent text-white py-3 px-7">
		<div id="header-content" class="allcenter max-w-[1200px] w-full">
			<a href="/" id="brand" class="allcenter">
				<img src={logo} alt="logo" class="h-[50px]" />
				<img src={writing} alt="choccyswap" class="h-[30px] px-3" />
			</a>
			<div class="max-[779px]:hidden allcenter ml-auto">
				<div id="links" class="allcenter ml-auto mr-5 space-x-8 font-medium">
					<a href="/pools" class=""> Pools </a>
				</div>
				{#if isSwap}
					{#if session && !hideMinter}
						<button class="mr-3" onclick={getBalance}>
							{text}
						</button>
					{/if}
					<Walletconnector bind:session={session} />
				{:else}
					<a href="/swap" class="pinkbutton py-1.5 px-7 font-semibold ml-8"> Swap Now </a>
				{/if}
			</div>

			<div class="min-[780px]:hidden ml-auto relative">
				<button onclick={toggleMenu}>
					<img src={menu} alt="menu" class="text-white" />
				</button>

				<div
					bind:this={menuDiv}
					id="topbarmenu"
					class="min-[780px]:!hidden absolute top-full right-0 p-3 gap-3 w-[500%]"
				>
					<a href="/pools" class=""> Pools </a>
					{#if isSwap}
						{#if session && !hideMinter}
							<button onclick={getBalance}>
								{text}
							</button>
						{/if}
						<Walletconnector bind:session={session} />
					{:else}
						<a href="/swap" class="pinkbutton py-1.5 px-7 font-semibold"> Swap Now </a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="less">
	.pinkbutton:hover {
		border: 2.34px solid #b5178e !important;
	}

	.pinkbutton {
		background: linear-gradient(276.31deg, #ed32bf -10.17%, #b5178e 97.19%);
		border-radius: 32px;
		backdrop-filter: blur(5.538px);
		border: 2.34px solid #b5178e;

		&:hover {
			border: 2.34px solid rgba(255, 255, 255, 0.326);
		}
	}

	#header::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		backdrop-filter: blur(5.538px);
	}

	#topbarmenu {
		display: none;

		&::before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background-color: #ed32bf22;
			border-radius: 5mm;
			backdrop-filter: blur(5.538px);
		}
	}

	:global(body) {
		font-family: Roboto, sans-serif;
	}
</style>
