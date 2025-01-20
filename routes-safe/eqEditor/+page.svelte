
<script>
import {onMount} from "svelte"    
import StartStopToolbar from "./StartStopToolbar.svelte";
import {Taleem,EqsEditor} from "$lib"
import ToolbarDiv from "../../lib/components/ToolbarDiv.svelte";
import OpenFileButton from "../../lib/components/OpenFileButton.svelte";
import CallbackButton from '../../lib/components/CallbackButton.svelte';
import SaveFileButton from "../../lib/components/SaveFileButton.svelte";

let currentTime = 0;
let slide;
let interval;


function createNewSlide(){
    slide = Taleem.Slides.Canvas.getNewSlide();
}


function callback(incomming){
  slide = incomming;
 }

onMount(async () => {
    slide = Taleem.Slides.Eqs.getDynamicSlide();
    
});

function stop(){
        currentTime=0;
        clearInterval(interval);
}
function start(){
        interval =setInterval( ()=>{
                currentTime += 1;
        }, 1000);
}
</script>


{#if slide}

<ToolbarDiv>
        <CallbackButton callback={createNewSlide} title='New ' icon='🎉'/>
        
        <OpenFileButton 
          {callback}
          importAccept=".js"
          regexReplaceFilter={/export\s+const\s+\w+\s*=\s*/}
        />
        
        <SaveFileButton content={slide}  PreTextToAdd='export const Slide'/>
</ToolbarDiv>


<StartStopToolbar   {currentTime}  {slide} {start} {stop} />


<EqsEditor  
bind:items={slide.items}  
{currentTime}
bind:slideExtra={slide.slideExtra}

slideStartTime={slide.startTime}
slideEndTime={slide.endTime}
/>
{/if}

