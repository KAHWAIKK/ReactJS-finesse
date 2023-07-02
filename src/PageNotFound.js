import React from 'react'
import {Link} from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='not-found'>
      <h2>Oops!</h2>
      <p>That page cannot be found</p>
      <Link></Link>
    </div>
  )
}

export default PageNotFound