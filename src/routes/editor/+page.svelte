<script>
  import {Taleem,Editor} from '$lib';
  // 15-dec-2024 :why import Editor directy ???? is it error--> NO-18dec2024--
    import audioData from "./audioData.js";
    import {onMount} from "svelte";
  ////////////////////////////////////////////
  import ToolbarDiv from "../../lib/components/ToolbarDiv.svelte";
  import OpenFileButton from "../../lib/components/OpenFileButton.svelte";
  import CallbackButton from '../../lib/components/CallbackButton.svelte';
  import SaveFileButton from "../../lib/components/SaveFileButton.svelte";
  
    // import SaveLoadToolbar from "$lib/components/SaveLoadToolbar.svelte";
    
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
  slides = Taleem.Slides.getDynamicSlides();
  console.log("slides Editor ::--->", slides);

});

</script>
<ToolbarDiv>
  <CallbackButton callback={newPresentation} title='New ' icon='🎉'/>
  <CallbackButton callback={()=>showToolbar=!showToolbar} title='Fold ' icon='🪜'/>
  
  <OpenFileButton 
    {callback}
    importAccept=".js"
    regexReplaceFilter={/export\s+const\s+\w+\s*=\s*/}
  />
  <!-- export const SlideSSSSSS -->
  <SaveFileButton content={slides}  PreTextToAdd='export const Slides'/>
  </ToolbarDiv>
  

  <div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      soundUrl = '/music.opus'
      imagesUrl= '/images/'
      {showToolbar}
      bind:slides={slides}
      {audioData}
    />
  {/if}
  </div>