<script>
    import InputNumber from './InputNumber.svelte';
    import InputFloat from './InputFloat.svelte';
    import InputText from './InputText.svelte';
    import InputTextArea from './InputTextArea.svelte';
    import InputCheckbox from './InputCheckbox.svelte';
    import InputColor from './InputColor.svelte';
    import FontFamilyDD from '../canvas/canvasEditor/dialoguebox/inputs/FontFamilyDD.svelte';
    import ImagesListDD from './ImagesListDD.svelte';
  
  import SpriteDD from "./sprite/SpriteDD.svelte";
  import IconDD from "./icon/IconDD.svelte";
  import LinesDD from "./lines/LinesDD.svelte";
  //--item is item-extra here
    export let item;
    export let dialogueBox;
  
  
    const componentMap = {

      Number     :  InputNumber,
      Float      :  InputFloat,
      TextArea   :  InputTextArea,
      Text       :  InputText,
      Boolean    :  InputCheckbox,
      Color      :  InputColor,
      FontFamily :  FontFamilyDD,
      
    };
 
  </script>
  
  {#if item}
    <div class="flex flex-col overflow-y-auto max-h-[70vh] rounded-lg shadow mx-2 my-2">
     
     
      <!-- Special Command Components -->
      {#if item.itemExtra.type === 'image'} 
        <div>
          <div>
            <!-- <ImagesListDD bind:extra={item.itemExtra} trigger={loadImage} listArray={assets.imagesList} /> -->
          </div>
        </div>
      {/if}

      {#if item.itemExtra.type === 'sprite'} 
        <div>
          <div><SpriteDD bind:extra={item.itemExtra}/></div>
        </div>
      {/if}
  
      {#if item.itemExtra.type === 'icon'} 
        <div>
          <div><IconDD bind:extra={item.itemExtra}/></div>
        </div>
      {/if}
  
      {#if item.itemExtra.type === 'lines'} 
        <div>
          <div><LinesDD bind:extra={item.itemExtra}/></div>
        </div>
      {/if}
  
      <!-- ///////////////////////////////////////////////////// -->
      <div class="border-b border-gray-700">
        {#each dialogueBox as dialogueItem}
          {#if componentMap[dialogueItem.type]}
            <div class="border border-gray-700 px-2 text-[10px] text-yellow-200 text-left">
              {dialogueItem.name}
            </div>
            
            <div class="border border-gray-700 px-2 py-1">
              <svelte:component
                this={componentMap[dialogueItem.type]}
                bind:value={item.itemExtra[dialogueItem.name]}
                config={dialogueItem.config || {}} 
              />
            </div>
          {/if}
        {/each}
        
  
      </div>    
    </div>
  {:else}
    <h6 class="text-sm text-gray-400">No item selected</h6>
  {/if}