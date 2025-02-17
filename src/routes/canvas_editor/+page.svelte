
<script>
    import CanvasEditor from "$lib/slides/canvas/canvasEditor/CanvasEditor.svelte";
    let items = []; // Store rectangles
  </script>

<div class="page">
  <CanvasEditor {items} />
</div>  


<style>
.page{
  padding: 0px;
  margin:0px;
}
</style>

  