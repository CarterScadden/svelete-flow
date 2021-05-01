<script lang="ts">
    import { createElement } from '../utils/elementModifier'
</script>

<div id="tool-bar" class="container column align-center inner-spacing-md">
    <button on:click={() => createElement('div')}>
        Add Div
    </button>
</div>

<style>
    #tool-bar {
        background: var(--dark);
        padding: 1em;
        overflow-y: auto;
        max-width: 250px;
        min-width: 250px;
    }
</style>