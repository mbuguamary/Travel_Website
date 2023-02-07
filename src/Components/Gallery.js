import React from 'react';
import hiking from '../Assests/hiking.jpg';
import boatriding from '../Assests/boatriding.jpg';
import snorkelling from '../Assests/snorkelling.jpg';
import camping from '../Assests/camping.jpg';
import bonfire from '../Assests/bonfire.jpg';
import kayaking from '../Assests/kayaking.jpg';

const Gallery = () => {
  return (
    <div>
      Gallery
      <div>
        <img src={hiking} alt='Hiking'/>
        <h1>Hiking</h1>
        <p></p>
      </div>
      <div>
        <img src={boatriding} alt='Boatriding'/>
        <h1>Boatriding</h1>
        <p></p>
      </div>
      <div>
        <img src={camping} alt='Camping'/>
        <h1>Camping</h1>
        <p></p>
      </div>
      <div>
        <img src={snorkelling} alt='Snorkelling'/>
        <h1>snorkelling</h1>
        <p></p>
      </div>
      <div>
      <img src={bonfire} alt='bonfire'/>
        <h1>Bonfire</h1>
        <p></p>
      </div>
      <div>
      <img src={kayaking} alt='Kayaking'/>
        <h1>Kayaking</h1>
        <p></p>
      </div>
      
      </div>
  )
}

export default Gallery