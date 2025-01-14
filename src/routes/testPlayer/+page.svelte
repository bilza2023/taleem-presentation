<script>
  import {SlideObject,Editor} from '$lib';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
  ////////////////////////////////////////////
  
    let slides;
    let showToolbar=true;

  function newPresentation(){
    slides = [];
  }  

  function callback(incomming){
    // IMPORTANT DO NOT IMPORT SLIDE SINCE THAT IS OBJECT WE NEED ARRAY HERE
  //there is difference between slides = [incomming]; and slides = [...incomming];
    slides = [...incomming];
 }
onMount(async()=>{
  slides = SlideObject.getDynamicDemoSlide();
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