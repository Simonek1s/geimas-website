<script>
  /** @type {{ title: string, description: string, path: string }} */
  let { title, description, path } = $props();
  const siteUrl = (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, '');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Drift Dash" />
  {#if siteUrl}
    <link rel="canonical" href={`${siteUrl}${path}`} />
    <meta property="og:url" content={`${siteUrl}${path}`} />
  {/if}
</svelte:head>
