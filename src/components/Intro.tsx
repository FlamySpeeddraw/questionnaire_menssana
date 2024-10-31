import React from 'react';
import './../styles/intro.css'

export const Intro = () => {
  return (
    <div className='intro_container'>
        <p className='intro_bonjour'>Bonjour et bienvenue !</p>
        <div className='intro_cartesContainer'>
          <p>Réponds de manière spontannée et le plus sincérement possible</p>
          <p>Obtiens une photo de la manière dont fonctionne ton mental.</p>
          <p>Consulte et enregistre tes résultats en format PDF</p>
        </div>
    </div>
  )
}

export default Intro