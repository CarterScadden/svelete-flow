<style>
main {
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>

<script lang="ts">
import ToolBar from "./components/ToolBar.svelte";
import dragndropUtils from "./stores/dragndrop/utils";
</script>

<main>
  <ToolBar />
</main>
<svelte:body
  on:mouseleave="{dragndropUtils.handleMouseLeave}"
  on:mousemove="{dragndropUtils.handleMouseMove}" />
