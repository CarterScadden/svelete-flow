<script lang="ts">
import ModifierBar from "./components/ModifierBar.svelte";
import ToolBar from "./components/ToolBar.svelte";


	let isOpen = true;
</script>

<main>
	<ToolBar />

	<div>
		<button on:click={() => isOpen = !isOpen}>Toggle!</button>
	</div>

	<ModifierBar isOpen={isOpen} />
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