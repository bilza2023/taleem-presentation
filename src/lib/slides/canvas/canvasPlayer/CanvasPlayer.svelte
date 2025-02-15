<script>
    import { onMount, onDestroy } from "svelte";
    import TaleemCanvas from "taleem-canvas"; 
    import Assets from "taleem-assets"; 
    import addItems from "./addItems.js"; 
    import loadImages from "$lib/loadImages.js";

    let canvasElement;
    let taleem_canvas;

    onMount(async () => {
    if (!canvasElement) return;

        const assets = new Assets();
        assets.images = await loadImages(['/images/scene.png']);     
        const ctx = canvasElement.getContext("2d");

        taleem_canvas = new TaleemCanvas(canvasElement, ctx, assets);
        addItems(taleem_canvas,assets); // Call the function to add items
        taleem_canvas.draw();
        return () => {
            // canvas.destroy(); // Cleanup on unmount
        };
    });

    onDestroy(() => {
        if (taleem_canvas) taleem_canvas.destroy();
    });
</script>

<canvas bind:this={canvasElement}></canvas>
