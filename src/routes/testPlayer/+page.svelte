<script>
  import {SlideObject,healthCheckCanvas,Editor} from '$lib';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
    import {updateSlides} from "$lib";
  ////////////////////////////////////////////
  import {db} from "./db.js";

  function callback(incomming){
    // IMPORTANT DO NOT IMPORT SLIDE SINCE THAT IS OBJECT WE NEED ARRAY HERE
  //there is difference between slides = [incomming]; and slides = [...incomming];
    slides = [...incomming];
 }

 let item =null;
 let slides;
 let id; 

 /////////////////////////////////
onMount(async()=>{

    id = new URLSearchParams(location.search).get("id");
    const resp = await db.tcode.getOne(id);

    if (resp.ok){
    item = await resp.json();
    slides = item.slides;

    slides = await updateSlides(slides);  

    console.log("slides" , slides);

    // soundFilePath =  SOUND_FILE_PATH + item.filename + '.opus'; 
    }
    else {
      throw new Error('Failed to load');
    }
   
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