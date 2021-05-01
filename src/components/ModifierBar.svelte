<script lang="ts">
import Text from "../common/Text.svelte";

    export let isOpen: boolean;
    
    let padding = '';

</script>

<div id="modifier-bar" class="container align-center column inner-spacing-md" class:open={isOpen}>
    <ul>
        <li>
            <Text name="Padding" value={padding} />
        </li>
    </ul>
</div>

<style>
    #modifier-bar {
        position: fixed;
        top: 0;
        right: -200px;
        bottom: 0;
        width: 200px;
        max-width: 200px;
        background: var(--dark);
        transition: right 0.33s ease;
    }

    .open {
        right: 0 !important;
    }
</style>