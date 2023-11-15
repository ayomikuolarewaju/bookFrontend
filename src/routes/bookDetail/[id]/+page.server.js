import { redirect } from '@sveltejs/kit'

export const load= async({params})=>{
 
   const detail=async()=>{
      try{
         const {id} = params
         const dt = await fetch(`https://ayomiku1.pythonanywhere.com/books/${id}`).then((res)=> res.json())
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
   delete:async({params})=>{
      const {id} = params
       await fetch(`https://ayomiku1.pythonanywhere.com/books/${id}`,{
         method:'DELETE',
         
      })
      throw redirect(303,'/')
   }
}