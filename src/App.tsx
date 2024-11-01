import React, { useState } from 'react';
import './App.css';
import { Question } from './components/Question';
import Intro from './components/Intro';
import questions from './data/questions.json';
import ProgressionBar from './components/ProgressionBar';
import { usePDF } from 'react-to-pdf';
import Pdf from './components/Pdf';

type questionsKeys = keyof typeof questions;
const section:questionsKeys[] = ["Communication","Concentration","Activation","Stress","Anxiété","Confiance","Motivation","Emotions","Estime de soi","Energie"];

function App() {
  const { toPDF, targetRef } = usePDF({filename: 'résultats.pdf'});
  const [subject,setSubject] = useState(0);
  const [points,setPoints] = useState([[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]]);
  const [progress,setProgress] = useState(0);
  
  const handleNextSubject = () => {
    if (subject < 9) {
      if (points[subject].includes(-1)) {
        const index = points[subject].indexOf(-1);
        const element = document.getElementById(''+index);
        element?.scrollIntoView({
          behavior:'smooth',
          block:'center'
        });
      } else {
        setSubject(subject+1);
        const element = document.getElementById(''+0);
        element?.scrollIntoView({
          behavior:'smooth',
          block:'center'
        });
      }
    } else {
      if (!points[subject].includes(-1)) {
        toPDF();
      }
    }
  }

  const handleUpdatePoints = (nbPoints:number,index:number) => {
    let pointsCopy = [...points];
    pointsCopy[subject][index] = nbPoints;
    setPoints(pointsCopy);
    let count = 0;
    points.map((type) => count += type.filter(x => x === -1).length);
    setProgress(100*(90-count)/90);
    const element = document.getElementById(''+(index+1));
    element?.scrollIntoView({
      behavior:'smooth',
      block:'center'
    });
  }

  console.log(subject)
  
  return (
    <div className='app_container'>
      <Intro />
      <ProgressionBar progression={progress} />
      {Object.values(questions[section[subject]]).map((question,index) => (
        <Question id={''+index} handleUpdatePoints={handleUpdatePoints} titre={question.question} indexQuestion={index} key={section[subject]+index} />
      ))}
      <div className='app_bouton' onClick={() => handleNextSubject()}>{subject >= 9 ? "Télécharger les résultats" : "Suivant"}</div>
      <div style={{backgroundColor:'#2aa089'}} ref={targetRef}>
        <Pdf points={[...points]} />
      </div>
    </div>
  );
}

export default App;