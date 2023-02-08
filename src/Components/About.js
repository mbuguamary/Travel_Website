import React from 'react'
import about from '../Assests/img.jpg';
import adv from '../Assests/adv.jpg';
import food from '../Assests/food.jpg';
import relax from '../Assests/relax.jpg';
import './About.css';


const About = () => {
  return (
    <div className='about'>
        <div className='image'>
        <img className='img' src={about}/>
        </div>
        <div className='image2'>
            <div>
            <img src={adv} alt='Travel'/>
            <h5>Travel</h5>
            </div> 
            <div>
            <img src={food} alt='Food'/>
            <h5>Eat</h5>
            </div>
            <div>
            <img src={relax} alt='Relax'/> 
            <h5>Relax</h5>
           </div>
            </div> 
        </div>
      
        
      
  )
}

export default About