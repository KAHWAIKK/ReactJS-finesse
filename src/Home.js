import React from 'react'
import  useFetch   from './useFetch'/* Custom hooks are not placed inside curly brackets */
/* import {useState } from 'react' */
import Bloglists from './Bloglists'
const url = 'http://localhost:8000/blogs';
const Home = () => {
  const {data:blogs,isPending,/* error */} = useFetch(url)
 /*  const [name, setName] = useState('marion')  */
  return (
    <div className='home'>
      {/* {error && <div>{ error }</div>} */}
      { isPending && <div> Loading</div>}
      {blogs &&<Bloglists
       blogsProp={blogs} 
       title ="All blogs" >
      </Bloglists>}
     
      {/* {blogs &&<Bloglists 
        blogsProp={blogs.filter((blog) => blog.id !== 3)}
         title ="Kevin's blogs"
      ></Bloglists>} */}
      
      {/*  {blogs &&<button onClick ={() =>setName('luigi')}>Change Name</button>} */}
       
     {/*  { blogs&&<p>{name}</p>} */}
    </div>
  )
}

export default Home

/*  We cant invoke a function inside of the JSX as it will be called automaticcally without the user clicking the button.
But lets say we want to pass in an arguement on the function, we would now need to place our function inside of an anonymous function
*/

/* Right here in this component we are outputting list of blogs, but lets say you many blogs in various places eg in avhome page or about page,but the blogs use the same logic, if this was the case we would be repeating that code over and over in diff components in different pages.
To combat this we would need to have a separate blog component and then pass that component to each and every component that needs it,we will therefore have no need to repeat that code every time
*/

/* To start with we would first create a blog list component to house all the components */

/* When making a fetch request to a server we should be able to catch an error that the code may throw to us */