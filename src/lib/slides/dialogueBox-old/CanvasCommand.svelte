<script>
  //@ts-nocheck
  // import InputNumber from "./InputNumber.svelte";   
  // import TrText from "../dialogueBoxModule/TrText.svelte";   
  // import TrColor from "../dialogueBoxModule/TrColor.svelte";   
  // import TrTf from "../dialogueBoxModule/TrTf.svelte";   
  
  export let extra;
  
  let displayBody=true;
  
  function applyTemplate(event) {
          debugger;
      switch (event.target.value) {
          case 'coastalHarmony':
              extra.backgroundColor = "#0077be"; // Ocean Blue
              extra.gridLineColor = "#d2b48c"; // Sandstone Yellow
              break;
          case 'blue':
              extra.backgroundColor = "#08063C"; // Ocean Blue
              extra.gridLineColor = "#323739"; // Sandstone Yellow
              break;
          case 'green':
              extra.backgroundColor = "#03260A"; // Ocean Blue
              extra.gridLineColor = "#363C34"; // Sandstone Yellow
              break;
          case 'brown':
              extra.backgroundColor = "#262103"; // Ocean Blue
              extra.gridLineColor = "#43413D"; // Sandstone Yellow
              break;
          case 'gold':
              extra.backgroundColor = "#EEE9CE"; // Ocean Blue
              extra.gridLineColor = "#605C52"; // Sandstone Yellow
              break;
          case 'red':
              extra.backgroundColor = "#190301"; // Ocean Blue
              extra.gridLineColor = "#3B3535"; // Sandstone Yellow
              break;
          case 'wood':
              extra.backgroundColor = "#555202"; // Ocean Blue
              extra.gridLineColor = "#696107"; // Sandstone Yellow
              break;
  
          case 'sereneForest':
              extra.backgroundColor = "#228b22"; // Forest Green
              extra.gridLineColor = "#d3d3d3"; // Misty Gray
              break;
  
          case 'horizonGlow':
              extra.backgroundColor = "#ff7f50"; // Sunset Orange
              extra.gridLineColor = "#87ceeb"; // Sky Blue
              break;
  
          case 'tranquilGarden':
              extra.backgroundColor = "#e6e6fa"; // Lavender Purple
              extra.gridLineColor = "#66cdaa"; // Meadow Green
              break;
  
          case 'starryEvening':
              extra.backgroundColor = "#daa520"; // Goldenrod Yellow
              extra.gridLineColor = "#191970"; // Midnight Blue
              break;
  
          default:
              break;
      }
  
  }
  
  </script>
   
  <div class="flex w-full text-white rounded-md justify-center bg-stone-700 p-1 m-1 border-2 border-white">
      <div class="flex justify-end gap-1">
          <button on:click={()=>displayBody = !displayBody} class="p-1 m-1 text-xs rounded-md hover:bg-slate-700">Canvas</button>
      </div>
  </div>
  
  {#if displayBody}
  <div class="flex flex-col w-full">
      
      <table class="border-collapse border-2 border-white">
        <tbody>
          <tr>
              <td class="border border-white p-1">Templates</td>
              <td class="border border-white p-1">
                  <select on:change={applyTemplate} class="bg-gray-900 text-white p-1">
                      <option value="">None</option>
                      <option value="blue">blue</option>
                      <option value="green">green</option>
                      <option value="gold">gold</option>
                      <option value="red">red</option>
                      <option value="brown">brown</option>
                      <option value="wood">wood</option>
                      <option value="starryEvening">starryEvening</option>
                      <option value="coastalHarmony">coastalHarmony</option>
                      <option value="sereneForest">sereneForest</option>
                      <option value="horizonGlow">horizonGlow</option>
                      <option value="tranquilGarden">tranquilGarden</option>
                  </select>
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Bg Img</td>
              <td class="border border-white p-1">
                  <select  class="bg-gray-900 text-white p-1" bind:value={extra.bgImg} >
                      <!-- do not change the sequence since it is based on index of array -->
                      <option value="null">None</option>
                      <option value="paper01">paper01</option>
                      <option value="drywall">drywall</option>
                      <option value="black_board">black-board</option>
                      <option value="black_board_mat">black-board-mat</option>
                      <option value="wood">wood</option>
                      <option value="tinted">tinted</option>
                      <option value="black_mat">Black-Mat</option>
                      <option value="white_mat">White-Mat</option>
                      <option value="granite">granite</option>
                      <option value="gray_marble">gray-marble</option>
                      <option value="brown_stone">brown-stone</option>
                      <option value="gray_stone">gray-stone</option>
                      <option value="design_old">design-old</option>
                      <option value="blue_waves">blue-waves</option>
                      <option value="wall">wall</option>
                  </select>
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Opacity</td>
              <td class="border border-white p-1">
                  <input type="number" min="0" max="1" step="0.1" bind:value={extra.bgGlobalAlpha} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Bg Color</td>
              <td class="border border-white p-1">
                  <input type="color" bind:value={extra.backgroundColor} class="bg-gray-900 text-white p-1">
              </td>
          </tr>       
          <tr>
              <td class="border border-white p-1">Show Grid</td>
              <td class="border border-white p-1">
                  <input type="checkbox" bind:checked={extra.showGrid} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Cell Width</td>
              <td class="border border-white p-1">
                  <input type="number" min="1" max="1000" bind:value={extra.cellWidth} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Cell Height</td>
              <td class="border border-white p-1">
                  <input type="number" min="1" max="1000" bind:value={extra.cellHeight} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Grid Line Width</td>
              <td class="border border-white p-1">
                  <input type="number" min="1" max="1000" bind:value={extra.gridLineWidth} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
          <tr>
              <td class="border border-white p-1">Grid Line Color</td>
              <td class="border border-white p-1">
                  <input type="color" bind:value={extra.gridLineColor} class="bg-gray-900 text-white p-1">
              </td>
          </tr>
        </tbody>
      </table>
      <br>
  </div>
  {/if}