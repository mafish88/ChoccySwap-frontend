<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails } from 'svelte-inview';
    
    export let bottomMargin = "-20%"
    export let fadedStyle = "opacity:0;transform:translateY(100px);"

    let isInView: boolean;

    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView;
    };
</script>    

<span id="fader" use:inview={{ unobserveOnEnter: true, rootMargin: `20% 0% ${bottomMargin} 0%` }}
    on:inview_change={handleChange}
    style={isInView? "" : fadedStyle}
    class="{$$restProps.class}">
    <slot/>
</span>

<style>
    span {
        opacity: 100%;
        transform: none;
    }
    .animate {
        transition: 2s;
    }
</style>