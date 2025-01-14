<script>
  import {SlideObject,Editor} from '$lib';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
    import {Presentation} from './presentation.js';
    import updateBareMinimum from "./updateBareMinimum.js"
    ////////////////////////////////////////////
  
    let slides;
    let showToolbar=true;


onMount(async()=>{
  // slides = SlideObject.getDynamicDemoSlide();
  
  slides = Presentation.slides;

  // slides = await updateBareMinimum(slidesinit); 
  console.log("slides Editor ::--->", slides);

});

</script>
 

  <div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={true}
      {showToolbar}
      bind:slides={slides}
      {audioData}
    />
  {/if}
  </div>