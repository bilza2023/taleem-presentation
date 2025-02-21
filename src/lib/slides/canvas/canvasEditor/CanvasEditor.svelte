<script>
  import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
  import EditorJs from "./EditorJs.js"
  import TaleemCanvas from "taleem-canvas";
  import AddToolbar from "./AddToolbar.svelte";
  import { onMount, onDestroy } from "svelte";
  import DialogueBox from "$lib/slides/dialogueBox/DialogueBox.svelte";
  import getItemDialogue from "./dialogueBoxData/getItemDialogue.js";
/////////////////////////////////////////////
  let interval = null;
  let taleemCanvas = null;
  let editor = null;
  let SelectedItemFromEditor = null;
  let SelectedDialogue = null;
/////////////////////////////////////////////
function getSelectedItemDislogueBox(SelectedDialogueIncomming){
  debugger;
  SelectedDialogue = SelectedDialogueIncomming;
}
/////////////////////////////////////////////

  function createTaleemCanvas(canvasElement) {
    const ctx = canvasElement.getContext("2d");
    taleemCanvas = new TaleemCanvas(canvasElement, ctx);
    return taleemCanvas;
  }

function gameloop() {
  if (taleemCanvas) {
      if (editor && editor.selectedItem) {

      } else {

      }
      taleemCanvas.draw();
  }
}

// $: {
//     if (editor && editor.selectedItem) {
//         console.log("Item Selected:", editor.selectedItem);
//         if (!SelectedDialogue) { // ✅ Assign only if not set
//           SelectedItemFromEditor = editor.selectedItem; 
//             SelectedDialogue = getItemDialogue();
//         }
//     } else {
//         SelectedItemFromEditor = null;
//         SelectedDialogue = null; // Reset when no item is selected
//     }
// }


  onMount(() => {
    interval = setInterval(gameloop, 20); // Start gameloop
    if(taleemCanvas){
      editor = new EditorJs(taleemCanvas);
    }
  });

  // Cleanup on unmount
  onDestroy(() => {
    if (interval) clearInterval(interval);
  });
</script>

{#if taleemCanvas}
  <AddToolbar {taleemCanvas} />
{/if}

<div class="page">
  <div class="container">
    <div class="canvas-container">
      <StaticPlayer {createTaleemCanvas} />
    </div>

    <div class="dialogue-box">
      {#if SelectedItemFromEditor}
          <DialogueBox item={SelectedItemFromEditor} dialogueBox={SelectedDialogue}  />
      {/if} 
    </div>
  </div>
</div>

<style>
  /* Reset global margins and paddings */
  :global(html),
  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  /* Apply background color to the entire component */
  .page {
    background: gray;
    width: 100%;
    min-height: 100vh; /* Ensures it covers full height */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Keeps content at the top */
  }

  .container {
    display: flex;
    height: 100vh;
    background-color: rgb(53, 54, 53);
    width: 100%;
    align-items: flex-start;
    gap: 10px; /* Space between canvas and dialogue box */
    padding: 10px;
  }

  .canvas-container {
    flex: 3; /* 75% */

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .dialogue-box {
    flex: 1; /* 25% */
    color: white;
    background-color: black;
    padding: 15px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>
