import React from 'react';
import ChecksContainer from './ChecksContainer';

interface questionProps {
  titre:string,
  cotationInversee?:boolean
}

export const Question = ({titre,cotationInversee}:questionProps) => {
  return (
    <div>
      <div>{titre}</div>
      <div>
        <ChecksContainer />
      </div>
    </div>
  );
}

export default Question;