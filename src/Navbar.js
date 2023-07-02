import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className = "navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
           {/*  <p>{"Stling inline can be done as shown below-take note of the camelCase when writng the cvss property while the property value is inside quotes"}</p> */}
            {/* <a href="/create"
                style={{backgroundColor:'crimson',
                        color:'white',
                        borderRadius: '5px'}}
            >
            New Blog</a> */}
            <Link to="/create">New Blog</Link>
        </div>
    </div>
  )
}

export default Navbar