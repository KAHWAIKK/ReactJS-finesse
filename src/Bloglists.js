import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Bloglists = ({blogsProp,title,/* handleDelete */}/* we could also destrucure this props object and access the values directly,{{ blogs,title}} */) => {
 //const blogs1 = props.blogsProp;
 //const title1 = props.title;
// const handleDeleteBlog = props.handleDelete

// console.log(props);//console returns the props object with two properties
// console.log(blogs1);//console returns the blogs array
// console.log(title1);//console returns All blogs


  return (
    <div className='blog-list'>
    <h2>{title}</h2>
    {blogsProp.map((eachblog1) =>(
            <div className="blog-preview" key={eachblog1.id}>
                <Link to={`/blogs/${eachblog1.id}`}>
                <h2>{ eachblog1.title}</h2>
                </Link>
                <p>Written by {eachblog1.author}</p>
               {/*  <button onClick={() =>handleDelete(eachblog1.id)}>Delete blog</button> */}
               
            </div>
        ))}
    </div>
  )
}


export default Bloglists

/* We have now created a blogs prop, we can reuse this component into differnet places and pass different data every time */