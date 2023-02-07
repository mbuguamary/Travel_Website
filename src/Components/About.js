import React from 'react'
import about from '../Assests/about.jpg';
import adv from '../Assests/adv.jpg';
import food from '../Assests/food.jpg';
import relax from '../Assests/relax.jpg';


const About = () => {
  return (
    <div className='about'>
        <div className='image'>
        <img src={about}/>
        </div>
        <div className='image2'>
            <div>
            <img src={adv} alt='Travel'/>
            </div> 
            <div>
            <img src={food} alt='Food'/>
            </div>
            <img src={relax} alt='Relax'/> 
            <div>
            </div> 
        </div>
      
        
        </div>
  )
}

export default About