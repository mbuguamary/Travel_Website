import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='main'>
         <ul>
            <li className='home'>Home</li>
            <li>Services</li>
           <NavLink to="/Gallery"> <li>Gallery</li> </NavLink>
          < NavLink to="/About"><li>About</li></NavLink> 
            <li>Contact</li>
         </ul>
        </div>
    </div>
  )
}

export default Navbar