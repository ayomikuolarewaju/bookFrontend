<script>
    export let data
    $: datas = data.data.data
</script>



<div class="grid grid-cols-2 gap-5 justify-center mx-auto items-center">
    {#each datas as data (data.id)}
    <div class="h-[100px] w-[200px] rounded-lg justify-center border text-center px-auto pt-5 text-slate-600 font-bold capitalize hover:bg-slate-900 hover:text-white ">
        <a href="bookDetail/{data.id}"><h4>{data.title}</h4></a>
    </div>
    {/each}
</div>
