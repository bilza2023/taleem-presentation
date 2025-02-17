<script>
    import CanvasPlayer from "$lib/slides/canvas/canvasPlayer/CanvasPlayer.svelte";
    import { onDestroy } from "svelte";
  
    let items = []; // Store rectangles
    let interval = null;
  
    function addRectangle() {
        const rect = {
            type: "rectangle",
            x: Math.floor(Math.random() * 1000) + 1, // x between 1-1000
            y: Math.floor(Math.random() * 350) + 1,  // y between 1-350
            width: 100,
            height: 100,
            color: "blue"
        };
        items = [...items, rect]; // Trigger Svelte reactivity
    }
  
    // Start interval to add a rectangle every 2 seconds
    interval = setInterval(addRectangle, 2000);
  
    // Cleanup interval on unmount
    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
  </script>
  
  <!-- Render CanvasPlayer -->
  <CanvasPlayer {items} />
  