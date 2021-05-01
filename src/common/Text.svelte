<script lang="ts">
    export let name:string;
    export let value:string;
    
</script>

<label class="text" for={name}>
    <input name={name} bind:value={value} />
</label>