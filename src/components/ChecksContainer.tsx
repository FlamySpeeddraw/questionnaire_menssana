import React, { useState } from 'react';
import CheckCircle from './CheckCircle';
import "./../styles/ChecksContainer.css";

interface checksContainerProps {
  updatePoints:(points:number) => void
}

export const ChecksContainer = ({updatePoints}:checksContainerProps) => {
  const [reponse,setReponse] = useState(-1);

  const handleChangeResponse = (numero:number) => {
    setReponse(numero);
    updatePoints(numero);
  }

  return (
    <div className='checkscircle_container'>
      <p className='checkscircle_bornes' id='toujours'>Toujours</p>
      <CheckCircle handleChangeReponse={handleChangeResponse} color={'#68b14c'} size={60} numero={0} checked={reponse === 0 ? true : false} />
      <CheckCircle handleChangeReponse={handleChangeResponse} color={'#68b14c'} size={50} numero={1} checked={reponse === 1 ? true : false} />
      <CheckCircle handleChangeReponse={handleChangeResponse} color={'#979d95'} size={40} numero={2} checked={reponse === 2 ? true : false} />
      <CheckCircle handleChangeReponse={handleChangeResponse} color={'#cb554f'} size={50} numero={3} checked={reponse === 3 ? true : false} />
      <CheckCircle handleChangeReponse={handleChangeResponse} color={'#cb554f'} size={60} numero={4} checked={reponse === 4 ? true : false} />
      <p className='checkscircle_bornes' id='jamais'>Jamais</p>
    </div>
  );
}

export default ChecksContainer;