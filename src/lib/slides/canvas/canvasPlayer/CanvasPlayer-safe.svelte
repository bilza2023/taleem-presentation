<script>
/**
 1: TIME AWARENESS:
 * ================
 *  IS THIS COMPONENT TIME AWARE (But that time is slideStartTime , slideEndTime and currentTime)? the gameloop is ticking/drawn with change is currentTime.--each editor as well as player needs to be time aware since from point of view of my app the player is VIDEO-PLAYER where the static-player is the frame-player. similarly the editors need time so that they can sync to it.
 
 2: NOT Sound Aware: the sound is managed at Presentation-Player (which now are Player and Editor on top level). at this level we get "startTime" , "endTime" and "currentTime". THis is the display part the sound does not play here but we sync to is using "currentTime".
 - there PlayerNoSound is still totally different in which we sync play to ticker
 
 * 3: Non user facing: This component is taleem-app specific not for users (for users we have taleem-canvas).
 
 * 4: Data Aware : This component is aware of the app data structure where as static-player is just aware of its own data-structure.
 ================================================
 * This component is where we get all the plugins. for example for Player for my app i will use following plugins to  allow/filter items for static-player
 *  - showAt Filter : This has to be aware of the current time (maybe be start and end time as well) so that it can hold-back items which are not yet to be shown "ShowAt" 
 * - hideAt filter.
 * - animation filter
 * - goto filters
*/
    import StaticPlayer from "../staticPlayer/StaticPlayer.svelte";
    import TaleemCanvas from "taleem-canvas";
  
    export let assets = {}; //asssets should come with images loaded
    let taleemCanvas = null; // Store reference for later use
  
    function createTaleemCanvas(canvasElement) {
      const ctx = canvasElement.getContext("2d");
      taleemCanvas = new TaleemCanvas(canvasElement, ctx,assets);
      return taleemCanvas;
    }
  

  </script>
  
  <StaticPlayer {createTaleemCanvas} />
  