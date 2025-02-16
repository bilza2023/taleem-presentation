
<script>
    import {onMount} from "svelte";
    import Assets from "taleem-assets";
    import CanvasPlayer from "$lib/slides/canvas/canvasPlayer/CanvasPlayer.svelte";
    import loadImages from "$lib/loadImages.js"; 

    let assets = new Assets();
    let items;
    let ready = false;
onMount(async ()=>{
   
    items = [
        {
            "uuid": "7b16dca3-c521-4661-823c-cb63f2fa8711",
            "type": "text",
            "x": 400,
            "y": 50,
            "text": "Test Text",
            "fontSize": 30,
            "fontFamily": "Arial",
            "color": "black",
            "globalAlpha": 1,
            "width": 118,
            "height": 0
        },
        {
            "uuid": "bb4e92be-8a57-4410-813c-c665e4e4c096",
            "type": "image",
            "x": 300,
            "y": 120,
            "src": "scene.png",
            "width": 600,
            "height": 250,
            "globalAlpha": 1
        }
    ]; 
    assets.images = await loadImages(["/images/scene.png"]);
    ready=true;    
});    

</script>

{#if ready}
        <CanvasPlayer 
            {items}
            {assets}
        
        />
{/if}
