<script>
  import {SlideObject,healthCheckCanvas,Editor} from '$lib';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
    import {updateSlides} from "$lib";
    import {Presentation} from './presentation.js';
  ////////////////////////////////////////////
  import {db} from "./db.js";

  function callback(incomming){
    // IMPORTANT DO NOT IMPORT SLIDE SINCE THAT IS OBJECT WE NEED ARRAY HERE
  //there is difference between slides = [incomming]; and slides = [...incomming];
    slides = [...incomming];
 }

 let slides;

 /////////////////////////////////
onMount(async()=>{
   debugger;
    slides = await updateSlides(Presentation.slides);  

    console.log("slides" , slides);
});

</script>

  <div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={true}
      bind:slides={slides}
      {audioData}
    />
  {/if}
  </div>