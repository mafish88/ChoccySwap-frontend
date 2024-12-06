<script lang="ts">
    import mna from "$lib/images/My-Neighbor-Alice_Logo.png"
    import cwlogo from "$lib/images/cwlogo.svelte"
    import cwtext from "$lib/images/cwtext.svelte"
    import chromia from "$lib/images/logo-chromia.svg"
</script>

<div id="Partners" class="allcenter flex-col mt-[100px]">
    <h2 id="gradient-title" class="text-3xl p-[20px] text-center">
        Our Ecosystem Partners
    </h2>
    <div class="allcenter min-[707px]:space-x-10 max-[706px]:flex-col">
        <img src={mna} class="w-[150px]" alt="my neighbor alice logo">
        <div class="cw flex">
            <svelte:component this={cwlogo}/>
            <svelte:component this={cwtext}/>
        </div>  
        <img src={chromia} class="w-[150px]" alt="chromia logo">
    </div>
</div>

<style>
    #gradient-title {
        background: linear-gradient(90.87deg, #FF02D1 -11.18%, #8EEAFC 108.08%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    img {
        filter: grayscale(1);
        transition: all 0.5s;

        &:hover {
            filter: none;
        }
    }

    .cw {
        color: #ccc;
        width: 300px;
        transition: all 0.5s;

        &:hover {
            color: white;
        }
    }
</style>