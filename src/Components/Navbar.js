import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='main'>
       
         <ul>
          
         <NavLink to='/' className='navlink'> Cliff Adventures</NavLink>
         
             
            < NavLink to="/About" className='link'>About</NavLink> 
           <NavLink  to="/Gallery" className='link'> Gallery </NavLink>
           <NavLink className='link'>Book</NavLink>
            <NavLink to="/Contact" className='link'>Contact </NavLink>
            {/* <NavLink className='link'>Sign Up</NavLink> */}
         </ul>
        </div>
    </div>
  )
}

export default Navbar