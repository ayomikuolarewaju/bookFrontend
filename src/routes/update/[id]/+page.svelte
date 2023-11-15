
<script>
export let data
$:dt = data.data.dt
</script>


<div class="flex flex-col gap-4">
    <div class="flex-col justify-between mx-auto mt-10">
        <form action="/update/{dt.id}?/updater" method="POST" class="flex flex-col gap-3">
         <label for="" class="text-lg block capitalize font-medium text-slate-200">Title</label>
         <input type="text" name="title" bind:value={dt.title} class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">number of pages</label>
         <input type="number" name="number_of_pages" bind:value={dt.number_of_pages} class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">published_date</label>
         <input type="date" name="published_date" bind:value={dt.published_date} class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">quantity</label>
         <input type="number" name="quantity" bind:value={dt.quantity} class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <button class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-none capitalize rounded-lg border-none hover:bg-slate-600 hover:text-white">update book</button>
        </form>
    </div>
</div>
 
