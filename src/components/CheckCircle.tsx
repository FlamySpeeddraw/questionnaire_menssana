import React from 'react';

interface checkCircleProps {
    color:string,
    size:number,
    points:number,
    checked:boolean
}

export const CheckCircle = ({color,size,points,checked}:checkCircleProps) => {
    const changeCheck = () => {
        
    }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size}>
      <circle
        cx="50%"
        cy="50%"
        r={size / 2 - 2}
        stroke={color}
        stroke-width="2"
        fill={checked ? color : "white"}
      />
    </svg>
  );
}

export default CheckCircle;