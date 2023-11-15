<script>
	import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import "../app.css";
</script>

<Header /> 
<main class="md:w-[80%] flex flex-col h-screen mt-5">
  <slot />
</main>
<Footer/>