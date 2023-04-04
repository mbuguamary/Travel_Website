import React,  {useState} from 'react'
import {NavLink} from 'react-router-dom'




const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <div>
      <div className='main'>
        
        <NavLink to='/' className='navlink'> Cliff Adventures</NavLink>
         <div className='menu-icon' onClick={handleClick}>
        
  <i className={click ? "fas fa-times" : "fa fa-bars"  }/>

  </div>
     
          
        <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
        <NavLink to="/About" className='link'  onClick={closeMobileMenu}>About</NavLink> 
        <NavLink  to="/Gallery" className='link'  onClick={closeMobileMenu}> Gallery </NavLink>
        <NavLink  to="/Book" className='link'  onClick={closeMobileMenu}>Book</NavLink>
         <NavLink to="/Contact" className='link'  onClick={closeMobileMenu}>Contact </NavLink>
         </ul>
          
         
            {/* <NavLink className='link'>Sign Up</NavLink> */}
         
        </div>
    </div>
  )
}

export default Navbar