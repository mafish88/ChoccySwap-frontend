<script lang="ts">
	import "@fontsource/roboto";
	import '../app.css';
	import logo from "$lib/images/logo.svg";
	import writing from "$lib/images/writing.svg";
	import menu from "$lib/images/menu.svg";
	import X from "$lib/images/x.svg";
	import telegram from "$lib/images/telegram.svg";
	import discord from "$lib/images/discord.svg";
	import coingecko from "$lib/images/coingecko.svg"

	let { children } = $props();

	let menuDiv: HTMLDivElement;

	function toggleMenu() {
		if (menuDiv.classList.contains("open")) menuDiv.classList.remove("open")
		else menuDiv.classList.add("open")
	}
</script>

<div class="overflow-hidden relative bg-black">
	
	<div id="positioner" class="absolute w-full z-10">
		<div id="header" class="allcenter bg-transparent text-white py-3 px-7">
			<div id="header-content" class="allcenter max-w-[1200px] w-full">
				
				<div id="brand" class="allcenter">
					<img src={logo} alt="logo" class="h-[50px]">
					<img src={writing} alt="choccyswap" class="h-[30px] px-3">
				</div>
				<div class="max-[549px]:hidden allcenter ml-auto">
					<div id="links" class="allcenter ml-auto space-x-8 font-medium">
						<a href="/" class="">
							Stats
						</a>
						<a href="/" class="">
							Pools
						</a>
					</div>
					
					<a href="/" id="swapbutton" class="py-1.5 px-7 font-semibold ml-8">
						Swap Now
					</a>
				</div>
				
				<button onclick={toggleMenu} class="min-[550px]:hidden ml-auto relative">
					<img src={menu} alt="menu" class="text-white">

					<div bind:this={menuDiv} id="topbarmenu" class="min-[550px]:hidden absolute top-full right-0 p-3 gap-3 w-[500%]">
						<a href="/" class="">
							Stats
						</a>
						<a href="/" class="">
							Pools
						</a>
					
						<a href="/" id="swapbutton" class="py-1.5 px-7 font-semibold">
							Swap Now
						</a>
					</div>
				</button>
			</div>
		</div>
	</div>
	
	
	{@render children()}
	


	<div id="footer" class="flex flex-col items-center w-full text-white bg-transparent">
		<span class="c ctopright"></span>
		<span class="c ctopleft"></span>
		<div id="socials" class="allcenter space-x-8 h-[6cm]">
			<a href="https://x.com/ChoccySwap" target="_blank">
				<img src={X} alt="X twitter">
			</a>
			<a href="https://t.me/ChoccySwapCommunity" target="_blank">
				<img src={telegram} alt="telegram">
			</a>
			<a href="https://discord.com/invite/cunRKsgbBz" target="_blank">
				<img src={discord} alt="discord">
			</a>
			<a href="https://www.coingecko.com/en/coins/choccyswap" target="_blank">
				<img src={coingecko} alt="coingecko">
			</a>
		</div>
		<img src={writing} alt="ChoccySwap">
	</div>

</div>

<style lang="less">
	#swapbutton {
		background: linear-gradient(276.31deg, #ED32BF -10.17%, #B5178E 97.19%);
		border-radius: 32px;
		backdrop-filter: blur(5.538px);
		border: 2.34px solid #B5178E;

		&:hover {
			border: 2.34px solid rgba(255, 255, 255, 0.326);
		}
	}

	#header::before {
		content: '';
		position: absolute;
		left: 0; top: 0;
		width: 100%; height: 100%;
		z-index: -1;
		backdrop-filter: blur(5.538px);
	}

	#topbarmenu {
		display: none;

		&::before {
			content: '';
			position: absolute;
			left: 0; top: 0;
			width: 100%; height: 100%;
			z-index: -1;
			background-color: #ED32BF22;
			border-radius: 5mm;
			backdrop-filter: blur(5.538px);
		}
	}

	#footer {
		border-radius: 5mm 5mm 0 0;
		overflow: hidden;
		position: relative;
		height: calc(7cm + min(100vw, 30cm)/5);
		&::before {
			content: '';
			position: absolute;
			left: 0; top: 0;
			width: 100%; height: 100%;
			z-index: -1;
			backdrop-filter: blur(5.538px);
		}
		&>img {
			max-width: 30cm;
			width: 100%;
			padding: 0 1rem;
			position: absolute;
			bottom: 1cm;
		}
	}

	:global(body) {
    	font-family: Roboto, sans-serif;
	}

    .c {
        position: absolute;
        height: 200px; width: 200px;
        border-radius: 100%;
        filter: blur(120px);
        
        &topright {
            height: 400px; width: 400px;
            transform: rotate(-45deg);

            background-image: linear-gradient(90deg, rgba(147, 238, 255, 0.6) 13%, rgba(255, 2, 209, 0.6) 85%);
            top: -100px; right: -100px;
        }
        
        &topleft {
            height: 400px; width: 400px;
            transform: rotate(45deg);

            background-image: linear-gradient(-90deg, rgba(147, 238, 255, 0.6) 13%, rgba(255, 2, 209, 0.6) 85%);
            top: -100px; left: -100px;
        }
	}
</style>
