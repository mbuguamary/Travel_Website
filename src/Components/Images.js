import React from 'react'
import l1 from '../Assests/kayaking2.jpg'
import l2 from '../Assests/l3.jpg'
import l3 from '../Assests/camping2.jpg'
import l4 from '../Assests/hiking2.jpg'
import l5 from '../Assests/img6.jpg'
import './About.css'

const Images = () => {
  return (
    <div>
      <div className='images'>
          <div>
          <img src={l1} alt='l1'/>
          </div>
          <div>
          <img src={l2} alt='l2'/>
          </div>
          <div>
          <img src={l3} alt='l3'/>
          </div>
          <div>
          <img src={l4} alt='l4'/>
          </div>
          
        </div>  
    </div>
  )
}

export default Images