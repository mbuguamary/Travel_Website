import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='main'>
       
         <ul>
          
         <NavLink to='/' className='navlink'> Cliff Adventures</NavLink>
         
            <NavLink className='link'>Home</NavLink> 
           
           <NavLink  to="/Gallery" className='link'> Gallery </NavLink>
          < NavLink to="/About" className='link'>About</NavLink> 
            <NavLink className='link'>Contact </NavLink>
         </ul>
        </div>
    </div>
  )
}

export default Navbar