import React, { useState } from 'react'
import './colorb.css'


export default function colorb() {
    const [selectedColor, setSelectedColor] = useState(null);

    const handleButtonClick = (color) => {
      setSelectedColor(color);
    };
  
  return (
            <div className='buttons'>
                <button className='brown' onClick={() => handleButtonClick('brown')}>
                {selectedColor === 'brown' && '✔'}
                </button>
                <button className='green' onClick={() => handleButtonClick('green')}>
                {selectedColor === 'green' && '✔'}
                </button>
                <button className='black' onClick={() => handleButtonClick('black')}>
                {selectedColor === 'black' && '✔'}
                </button>
            </div>
  )
}
