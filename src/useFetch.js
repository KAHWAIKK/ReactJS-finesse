/* this will be a custom hhok component that we will be able re-use over and over by exporting it to other components that may require the fetch request logic */

/* We would first need to create a function that would store the code, the fn would be the hook itself, remember custom hooks need to start with the word use*/

import { useState,useEffect } from "react"


const useFetch = (url) => {
    const[ data , setData] = useState(null)
    const[isPending,setIsPending] = useState(true)
  /*   const [name, setName] = useState('marion') */
    const [error, setError] = useState(null)

    
    useEffect(()=>{
      /* AbortController--an inbuilt fn within js(dont forget the new keyword) stops the fetch that goes on in the bachground especially when we are using custom hooks(read more on react series by the net ninja tutorial #24 ) */
      const abortCont = new AbortController();
        setTimeout(()=>{
           fetch(url, {signal: abortCont.signal})
         .then(responseData =>{
           console.log(responseData)//response object is working fine
           console.log(responseData.status)//console returns 200 if fetch request is successful
           console.log(responseData.ok)//console returns true if fetch request is successful
           /* conducting an if check to know if response is okay */
           if(!responseData.ok){
             throw Error(/* 'Could not fetch data for that resource' */)
           }
           return responseData.json();
         })
         .then((responseData)=>{
           
           //console.log(data)
           //checking if the code works
           /* Works perfectly fine as console returns an array with two objects in js format */
           setData(responseData)
           setIsPending(false)
           setError(null)
         })
         /* When making a fetch request to a server we should be able to catch an error that the code may throw to us,to do this we use the catch method */
         .catch((err)=>{
          if(err.abort === 'AbortError'){
            console.log('fetch aborted')
            console.log(err);
          }else{
            console.log(err);
            // console prints out The user aborted a request.
           console.log(err.message);
            setIsPending(false)
            setError(err.message)
          }
          
           
         })
       },1500)

       return () => abortCont.abort();
       },[url])
   return { data,isPending , error}

}

export default useFetch;

