import React from 'react';
import './../styles/progressionBar.css';

interface progressionBarProps {
    progression:number
}

const ProgressionBar = ({progression}:progressionBarProps) => {
  return (
    <div className='progressionBar_container'>
        <p>{Math.round(progression)}%</p>
        <div className='progressionBar_bar'>
            <div style={{width:`${progression}%`}} className='progressionBar_barProgress'></div>
        </div>
    </div>
  )
}

export default ProgressionBar