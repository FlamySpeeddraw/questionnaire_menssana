import React from 'react';
import CheckCircle from './CheckCircle';
import "./../styles/ChecksContainer.css"

export const ChecksContainer = () => {
  return (
    <div className='checkscircle_container'>
      <p>Toujours</p>
      <CheckCircle color={'red'} size={45} points={0} checked={false} />
      <CheckCircle color={'red'} size={35} points={0} checked={false} />
      <CheckCircle color={'red'} size={25} points={0} checked={false} />
      <CheckCircle color={'red'} size={35} points={0} checked={false} />
      <CheckCircle color={'red'} size={45} points={0} checked={false} />
      <p>Jamais</p>
    </div>
  );
}

export default ChecksContainer;