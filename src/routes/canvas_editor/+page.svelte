
<script>
    import CanvasEditor from "$lib/slides/canvas/canvasEditor/CanvasEditor.svelte";
    let items = []; // Store rectangles
    let slideExtra = {
      uuid: "0000asldkfj",
      type: 'background',  
      backgroundColor: 'green',
      cellHeight: 25,
      cellWidth: 25,
      backgroundImage: null,
      globalAlpha: 1,
      showGrid: false,
      gridLineWidth: 1,
      gridLineColor: '#685454'
    };
</script>

{#if items && slideExtra}
<div class="page">
  <CanvasEditor {items} {slideExtra} />
</div>  
{/if}

<style>
.page{
  padding: 0px;
  margin:0px;
}
</style>

  