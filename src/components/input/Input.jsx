import React, { useState } from 'react'
import './input.css'

export default function Input() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  
  return (
    <div className='buttons'>
        <button  className={`customb ${selectedButton === 'Small' ? 'active' : ''}`} onClick={() => handleButtonClick('Small')}>Small</button>
        <button  className={`customb ${selectedButton === 'Medium' ? 'active' : ''}`} onClick={() => handleButtonClick('Medium')}>Medium</button>
        <button  className={`customb ${selectedButton === 'Large' ? 'active' : ''}`} onClick={() => handleButtonClick('Large')}>Large</button>
        <button  className={`customb ${selectedButton === 'X-Large' ? 'active' : ''}`} onClick={() => handleButtonClick('X-Large')}>X-Large</button>
    </div>
  )
}
