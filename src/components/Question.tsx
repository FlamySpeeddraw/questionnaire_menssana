import React from 'react';
import ChecksContainer from './ChecksContainer';
import './../styles/Questions.css';

interface questionProps {
  titre:string,
  indexQuestion:number,
  id:string,
  handleUpdatePoints: (nbPoints:number,index:number) => void
}

export const Question = ({titre,handleUpdatePoints,indexQuestion,id}:questionProps) => {

  const updatePoints = (nbPoints:number) => {
    handleUpdatePoints(nbPoints,indexQuestion)
  }

  return (
    <div id={id} className='questions_container'>
      <div className='questions_titre'>{titre}</div>
      <ChecksContainer updatePoints={updatePoints} />
    </div>
  );
}

export default Question;