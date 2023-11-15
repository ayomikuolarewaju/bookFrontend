export const load =async()=>{
   const book = async()=>{
      try{
         const data = await fetch('https://ayomiku1.pythonanywhere.com/books/lists/').then((res)=>res.json())
         
         return{
          data
         }
      }catch (e){
         return{msg:'fail to connect'}
      }
   }
  return{
   data:book()
  }
 
}