<script lang="ts">
  export let src = '';
  export let headerText = '';
  export let icon: ConstructorOfATypedSvelteComponent;
  export let url = '';
</script>

<a
  class="card card-hover shadow overflow-hidden max-w-[300px] h-auto min-h-[372px] flex-auto w-full"
  href={url}
>
  <header>
    <img {src} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
  </header>
  <div class="p-4 space-y-4">
    <h3 class="flex items-center gap-3"><svelte:component this={icon} />{headerText}</h3>
    <article>
      <slot />
    </article>
  </div>
  <!-- <hr class="opacity-50" />
  <footer class="p-4 flex justify-start items-center space-x-4">
    <div class="flex-auto flex justify-between items-center">
      <h6 class="font-bold" data-toc-ignore>By Alex</h6>
      <small>On {new Date().toLocaleDateString()}</small>
    </div>
  </footer> -->
</a>
