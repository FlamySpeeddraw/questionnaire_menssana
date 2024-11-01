import React, { useState } from 'react';
import './../styles/checkCircle.css'

interface checkCircleProps {
  color:string,
  size:number,
  numero:number,
  checked:boolean,
  handleChangeReponse: (numero:number) => void
}

export const CheckCircle = ({color,size, handleChangeReponse,numero,checked}:checkCircleProps) => {
  const [hovered, setHovered] = useState(false);

  const handlePress = () => {
    handleChangeReponse(numero);
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} onClick={() => handlePress()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <circle
        className='checkCircle_circle'
        cx="50%"
        cy="50%"
        r={size / 2 - 2}
        stroke={color}
        strokeWidth="2"
        fill={checked || hovered ? color : "white"}
      />
    </svg>
  );
}

export default CheckCircle;