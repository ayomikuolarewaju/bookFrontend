

<div class="flex flex-col gap-4">
    <div class="flex-col justify-between mx-auto mt-10">
        <form action="/createBook?/book" method="POST" class="flex flex-col gap-3">
         <label for="" class="text-lg block capitalize font-medium text-slate-200">Title</label>
         <input type="text" name="title" id="" class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">number of pages</label>
         <input type="number" name="number_of_pages" id="" class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">published_date</label>
         <input type="date" name="published_date" id="" class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <label for="" class="text-lg block capitalize font-medium text-slate-200">quantity</label>
         <input type="number" name="quantity" id="" class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-slate-600 rounded-lg border-none" required>
         <button class ="font-medium text-slate-800 h-[50px] w-[200px] p-2 focus:border-none border capitalize rounded-lg hover:bg-slate-600 hover:text-white border-none">make book</button>
        </form>
    </div>
</div>


