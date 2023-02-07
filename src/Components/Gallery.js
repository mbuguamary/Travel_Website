import React from 'react';
import hiking from '../Assests/hiking.jpg';
import boatriding from '../Assests/boatriding.jpg';
import snorkelling from '../Assests/snorkelling.jpg';
import camping from '../Assests/camping.jpg';
import bonfire from '../Assests/bonfire.jpg';
import kayaking from '../Assests/kayaking.jpg';
import  './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery'>
      
      <div className='div1'>
      <div>
        <img src={hiking} alt='Hiking'/>
        <h1>Hiking</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$65</h5>
        <button>Book Now</button>
      </div>
      <div>
        <img src={boatriding} alt='Boatriding'/>
        <h1>Boatriding</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$50</h5>
        <button>Book Now</button>
      </div>
      <div>
        <img src={camping} alt='Camping'/>
        <h1>Camping</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$55</h5>
        <button>Book Now</button>
      </div>
      </div>
      <div className='div2'>
      <div>
        <img src={snorkelling} alt='Snorkelling'/>
        <h1>Snorkelling</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$30</h5>
        <button>Book Now</button>
      </div>
      <div>
      <img src={bonfire} alt='bonfire'/>
        <h1>Bonfire</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$55</h5>
        <button>Book Now</button>
      </div>
      <div>
      <img src={kayaking} alt='Kayaking'/>
        <h1>Kayaking</h1>
        <h4>Mon Fri</h4>
        <h5>3hrs</h5>
        <h5>$45</h5>
        <button>Book Now</button>
      </div>
      </div>
      </div>
  )
}

export default Gallery