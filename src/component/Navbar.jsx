import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav style={{backgroundColor:"blue", display:"flex",justifyContent:"space-around"}}>
          <h1>logo</h1>
          <div className="links" style={{display:"flex",columnGap:"5px"}}>
              <Link to="/">Home
              </Link>
              <Link to="/Second">Second
              </Link>
          </div>
          
    </nav>
  )
}

export default Navbar