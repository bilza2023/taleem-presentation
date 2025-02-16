<script>
  //@ts-nocheck
 import CanvasEditor from "../../slides/canvas/CanvasEditor/CanvasEditor.svelte";
 import EqsEditor from "../../slides/eqs/EqsEditor/EqsEditor.svelte";
  import Slides from "../../taleemObject/Slides";
  export let currentTime = 0;
  export let currentSlide;
  export let assets;
  export let loadPresentationImages;


</script>

<div>
  {#if currentSlide}

      {#if currentSlide.type == "eqs"}
      <EqsEditor 
      {currentSlide}
      bind:items={currentSlide.items}
  
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime}
      
      bind:slideExtra={currentSlide.slideExtra}
      {currentTime}
      {assets}
      {loadPresentationImages}
      />
      {/if}
  <!-- ////////////////////Canvas editor////////////////////////// -->
      {#if currentSlide.type == "canvas"}
      <CanvasEditor 
      {currentSlide}
      bind:items={currentSlide.items}
  
      slideStartTime={currentSlide.startTime}
      slideEndTime={currentSlide.endTime}
      
      bind:slideExtra={currentSlide.slideExtra}
      {currentTime}
      {assets}
      {loadPresentationImages}
      />
      {/if}
{/if}
        
          
</div>
