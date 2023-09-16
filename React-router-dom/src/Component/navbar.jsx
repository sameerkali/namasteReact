import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <h1 >navbar</h1>
    <Link style={{marginLeft: "1rem"}} to={`/`}>Home</Link>
    <Link style={{marginLeft: "1rem"}} to={`/login`}>Login</Link>
    <Link style={{marginLeft: "1rem"}} to={`/table`}>Table</Link>
    <Link style={{marginLeft: "1rem"}} to={`/error`}>Error Page</Link>
    </div>
  )
}

export default navbar