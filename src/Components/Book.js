import React from 'react'

const Book = () => {
  return (
    <div className='book'>
    <input placeholder='Name' />
    <input placeholder='Email' />
    <select placeholder="Select Activity">
              <option value="Kayaking">Kayaking</option>
              <option value="Bonfire">Bonfire</option>
              <option value="Hiking">Hiking</option></select>
    <select placeholder='Select day'>
    <option value="Kayaking">Monday</option>
    <option value="Kayaking">Tuesday</option>
    <option value="Kayaking">Wednesday</option>
    <option value="Kayaking">Thursday</option>
    <option value="Kayaking">Friday</option>
    </select>
    <input type='date' placeholder='Date'/>
    <input placeholder='Price'/> 
    <select placeholder="Select Adults">
              <option value="1">1</option>
              <option value="2">2</option>
        </select>
    <select placeholder="Select Child">
              <option value="1">1</option>
              <option value="2">2</option></select>
    <button>Book</button>
   
  </div>
  )
}

export default Book