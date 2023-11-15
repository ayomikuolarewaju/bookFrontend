//import { redirect } from '@sveltejs/kit'

import { redirect } from '@sveltejs/kit'


export const actions = {
    book:async({request})=>{
     try{
        const data = await request.formData()
        const title =  data.get('title')
        const pages =  data.get('number_of_pages')
        const date =   data.get('published_date')
        const quantity =  data.get('quantity')
   
         await fetch('https://ayomiku1.pythonanywhere.com/books/',{
           headers:{'Content-Type':'application/json'},
           method:'POST',
           body:JSON.stringify({
               title:title,
               number_of_pages:pages,
               published_date:date,
               quantity:quantity
           })
        })
        
        
     }catch (e){
        console.log(e)
     }
     throw redirect(303,'/')
  
    }
}

