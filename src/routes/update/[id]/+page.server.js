import { redirect } from '@sveltejs/kit'

export const load= async({params})=>{
 
   const detail=async()=>{
      try{
         const {id} = params
         const dt = await fetch(`http://127.0.0.1:8000/books/${id}`).then((res)=> res.json())
         return { 
             dt
         }
      }catch (e){
         return{e,msg:'fail to connect'}
      }
   }
   return {
      data:detail()
   }
}

export const actions = {
   updater:async({params,request})=>{

      const data = await request.formData()
        const title =  data.get('title')
        const pages =  data.get('number_of_pages')
        const date =   data.get('published_date')
        const quantity =  data.get('quantity')

      const {id} = params
        await fetch(`https://ayomiku1.pythonanywhere.com/books/${id}`,{
         headers:{'Content-Type':'application/json'},
         method:'PUT',
         body:JSON.stringify({
             title:title,
             number_of_pages:pages,
             published_date:date,
             quantity:quantity
         })
 
      })
      throw redirect(303,'/')
   }
}