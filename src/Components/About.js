import React from 'react'
import about from '../Assests/img.jpg';
import adv from '../Assests/adv.jpg';
import food from '../Assests/food.jpg';
import relax from '../Assests/relax.jpg';
import './About.css';


const About = () => {
  return (
    <div className='about'>
      <div>
         <h3>Cliff Adventures</h3>
         <p>Adventure travel allows you to connect with nature, improving your mental state so you can feel your best in every sense. And sharing an adventure with locals or other travelers is always the perfect way to bond quickly over incredible experiences and make fast friends</p>
         <p>Cliff Adventure is the go-to source for information on adventure travel that prioritizes sustainability, serves as a force for good, and transforms people and places. From research and trends to best travel practices, ideal gear, and destinations and operators with outstanding commitments to responsible travel, we have everything you need to make sure your adventures align with your values.</p>
      </div>
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
            <div className='testimonials'>
                <h1>Testimonials</h1>
             <div className='test'>
                <p>The place is awesome, we enjoyed the stay. The Resort is well planned, clean and very impressive. The staff is very well trained to help customers. We could not have thought of a more beautiful and picturesque property to spend a couple of days together right after our wedding.</p>
             </div>
             <div className='test'>
                <p>We had our company annual offsite at Royal Cliff in Pattaya. Royal Cliff was the perfect choice for us: there are multiple large event spaces for various activities and the great staff made sure the events went smoothly. The hotel food was also of a very high quality with an impressive choice at breakfast. Combined with a stunning view of the sea and a private beach, we couldn’t have asked for a better place for our company. Thank you for making our trip so special.</p>
             </div>
             <div className='test'>
            <p> The hotel is meticulous in its planning, providing excellent décor, signage and the like. Importantly, they never seemed to tire of the constant emails from an equally meticulous event manager. Always prompt and attentive.

Particularly, Ruchika Longani and Danaithep Chanhom were excellent in their roles. They and their team managed both events with the utmost professionalism. Highly competent and skilled, they were a pleasure to work with.

I recommend Royal Cliff Resort to anybody enquiring.</p>
             </div>
            </div>
        </div>
      
        
      
  )
}

export default About