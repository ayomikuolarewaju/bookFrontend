
<script>
export let data
$:dt = data.data.dt
</script>
 


<div class="p-3 border w-[300px] flex flex-col justify-center items-start mx-auto my-auto mt-[50px] gap-3 font-semibold rounded-lg text-slate-800">
    <h3>{dt.title}</h3>
    <p>Pages: {dt.number_of_pages}</p>
    <p>Date: {dt.published_date}</p>
    <p>Quantity: {dt.quantity}</p>
    <div class="flex justify-around w-full">
        <form action="/bookDetail/{dt.id}?/delete" method="POST">
            <input type="button" name="bookID">
            <button class="border rounded-md hover:bg-slate-800 hover:text-white py-2 w-[100px] h-[40px] text-center">Delete</button>
        </form>
        <a href="/update/{dt.id}" class="border rounded-md hover:bg-slate-800 hover:text-white py-2 w-[100px] h-[40px] text-center">Update</a>
    </div>
</div>