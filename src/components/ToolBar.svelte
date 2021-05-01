<script lang="ts">
    import { createElement } from '../utils/elementModifier'
</script>

<div id="tool-bar" class="container column align-center">
    <button on:click={() => createElement('div')}>
        Add Div
    </button>
</div>

<style>
    #tool-bar {
        background: var(--primary);
        padding: 1em;
        overflow-y: auto;
        min-width: 250px;
    }
</style>