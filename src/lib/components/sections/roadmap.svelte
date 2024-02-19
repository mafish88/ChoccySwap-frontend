<script lang="ts">
	import Mediaquery from '../atomic/mediaquery.svelte';
</script>    
    
<Mediaquery query="(min-width:700px)" let:matches>
    <div class="flx w-full mt-[8rem]">
        <div class="grid mx-2"
            style="grid-template-columns:repeat({matches? "2" : "1"}, minmax(0, 1fr));">
        </div>
    </div>
</Mediaquery>
