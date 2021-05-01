<script lang="ts">
    export let isOpen: boolean;

</script>

<div id="modifier-bar" class="container align-center column" class:open={isOpen}>
    <button on:click={() => isOpen = !isOpen}>
        {#if isOpen}
            Close!
        {:else}
            Open!
        {/if}
    </button>
</div>

<style>
    #modifier-bar {
        position: fixed;
        top: 0;
        right: -200px;
        bottom: 0;
        width: 200px;
        background: var(--primary);
        transition: right 0.33s ease;
    }

    .open {
        right: 0 !important;
    }
</style>