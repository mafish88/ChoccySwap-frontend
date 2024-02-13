<script lang="ts">
    import { page } from "$app/stores"
</script>

<div class="w-full h-full flx flex-col">
    <h3 class="text-[30pt]">
        {
            ["/exchange", "/stats", "/pools"].includes($page.url.pathname)?
                "In development" : "Not found"
        }
    </h3>
    <p class="text-gray-50 text-center" style="white-space:pre-line">
        {
            ["/exchange", "/stats", "/pools"].includes($page.url.pathname)?
                "The resource you're looking for is not yet accessible.\nPlease wait for the testing round to open." :
                "The resource you're looking for does not exist."
        }
    </p>
</div>