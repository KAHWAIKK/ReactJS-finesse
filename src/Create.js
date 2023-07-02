import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


/* However we could type in stuff in there but we will not keep a trck of things, we would want to store that value, we would therefore need to setip some states  */



const Create = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('yoshi')
  const history = useHistory()

  /* ADDING THE LOADING STATEMENT */

  const [isPending, setIsPending] = useState(false)
   /* SUBMIT EVENTS
  When a button is pressed inside a form it triggers the submit event, we will therefore attach the submit event in the form and set it equal to a fn
  */
  const handleSubmit = (e)=>{
    e.preventDefault()//prevent the default action of forms to reload the browser page when we press the button which invokes submit action
    const blog = { title, body, author }
    /* log this blog object to the console to see it */
    //console.log(blog)
    //console returns the object(blog) with its title body and author property
    setIsPending(true)
    /* MAKING POST REQUEST 
 Now we have made the blog object and we can therefore submit the form,next is to make a POST request to the server to add the data to our data file , we will make the POST request inside the handleSubmit function
 */
/* We will use the fetch api,we will the add the second arguemnt which defines the method we will be using */

    fetch('http://localhost:8000/blogs',{
      method : 'POST',
      headers: {'Content-type':'application/json'},
      body:JSON.stringify(blog)//turns our blog object(js format) to a JSON string
    })
    /* this is an async therefore we can attach a then method that logs a message to the console when the POST requset is complete */
    .then(()=>{
      console.log('new blog added')//console returns  new blog added
      /* we can also confirm that in our .json file that contains all our blogs */

      setIsPending(false)
      /* An illustration of going back through useHistory hook */

    //history.go(-1)
    //going back one step through history
   // history.go(+1)
    //going forward one step through history

    /* After this code block has executed the POST request we may want to re-direct the user back to the homepage,we do this by use of the .push() method attached to the useHistory hook */

    history.push('/')
    })

    
  }
  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit} >
          <label >Blog Titke</label>
          <input 
            type="text" 
            required
            placeholder=''
            value={title}
            onChange={(e)=> {setTitle(e.target.value)
              console.log(e)
              console.log(e.target)
              console.log(e.target.value)
            }}
          />
          <label >Blog Body</label>
          <textarea
            required
            value={body}
            onChange={(e)=>{
              setBody(e.target.value)
              }}
          >
          </textarea>
          <label >Blog author:</label>
          <select
            value={author}
            onChange={(e)=>{
              setAuthor(e.target.value)
              }}
           >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add blog</button>}
          {isPending && <button disabled>Adding blog</button>}
         {/*  <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p> */}
        </form>
    </div>
  )
}

export default Create

/* console.log(e)
  console.log(e.target)
  console.log(e.target.value) */

 