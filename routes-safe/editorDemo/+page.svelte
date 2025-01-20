<script>
  import {Editor} from '$lib';
  ////////////////////////////////////////////
    let slides=[];
    let showToolbar=true;
</script>

<div class="w-full bg-gray-800">
  {#if slides}
    <Editor
      isBlob={true}
      {showToolbar}
      bind:slides={slides}
    />
  {/if}
</div>