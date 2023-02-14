import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='main'>
        
        <NavLink to='/' className='navlink'> Cliff Adventures</NavLink>
        
          
        <ul>
        < NavLink to="/About" className='link'>About</NavLink> 
        <NavLink  to="/Gallery" className='link'> Gallery </NavLink>
        <NavLink  to="/Book" className='link'>Book</NavLink>
         <NavLink to="/Contact" className='link'>Contact </NavLink>
         </ul>
          
         
            {/* <NavLink className='link'>Sign Up</NavLink> */}
         
        </div>
    </div>
  )
}

export default Navbar