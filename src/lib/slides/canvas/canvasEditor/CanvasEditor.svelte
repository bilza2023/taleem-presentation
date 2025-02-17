<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import TaleemCanvas from "taleem-canvas";
  import AddToolbar from "./AddToolbar.svelte";
  import {onMount, onDestroy } from "svelte";
  
  let interval = null;
  let taleemCanvas = null;
 
function createTaleemCanvas(canvasElement) {
    const ctx = canvasElement.getContext("2d");
    taleemCanvas = new TaleemCanvas(canvasElement, ctx);
    return taleemCanvas;
}

  function gameloop() {
    if(taleemCanvas) {taleemCanvas.draw();}
  }

  onMount(async()=>{
    interval = setInterval(gameloop, 20); // Start gameloop
   
  });
  // Cleanup on unmount
  onDestroy(() => {
      if (interval) clearInterval(interval);
  });
</script>

    {#if taleemCanvas}
    <AddToolbar {taleemCanvas} /> 
    {/if}
      
      <StaticPlayer {createTaleemCanvas} />