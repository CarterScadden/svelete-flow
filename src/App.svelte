<script lang="ts">
import ToolBar from "./components/ToolBar.svelte";


</script>

<main>
	<ToolBar />
</main>

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