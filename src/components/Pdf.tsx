import React from 'react';
import './../styles/pdf.css';
import result from './../data/resultats.json';
import questions from './../data/questions.json';

interface pdfProps {
    points:number[][]
}

const Pdf = ({points}:pdfProps) => {
    const pointsCopy = [...points];
    const commPoints = pointsCopy[0].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Communication)[index].points[current]),0);
    const concPoints = pointsCopy[1].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Concentration)[index].points[current]),0);
    const actPoints = pointsCopy[2].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Activation)[index].points[current]),0);
    const strPoints = pointsCopy[3].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Stress)[index].points[current]),0);
    const anxPoints = pointsCopy[4].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Anxiété)[index].points[current]),0);
    const confPoints = pointsCopy[5].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Confiance)[index].points[current]),0);
    const motPoints = pointsCopy[6].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Motivation)[index].points[current]),0);
    const emoPoints = pointsCopy[7].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Emotions)[index].points[current]),0);
    const estPoints = pointsCopy[8].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions['Estime de soi'])[index].points[current]),0);
    const enePoints = pointsCopy[9].reduce((sum,current,index) => sum + (current === -1 ? 0 : Object.values(questions.Energie)[index].points[current]),0);
    const commEncadrement = ["10-20","21-35","36-50"]
    const concEncadrement = ["10-20","21-35","36-50"]
    const actEncadrement = ["10-20","21-35","36-50"]
    const strEncadrement = ["5-10","11-17","18-25"]
    const anxEncadrement = ["5-10","11-17","18-25"]
    const confEncadrement = ["10-20","21-35","36-50"]
    const motEncadrement = ["10-20","21-35","36-50"]
    const emoEncadrement = ["10-20","21-30","31-40","41-50"]
    const estEncadrement = ["10-20","21-35","36-50"]
    const eneEncadrement = ["10-20","21-35","36-50"]

    const getEncadrement = (point:number,encadrements:string[]) => {
        
        for (const encadrement in encadrements) {
          const [min, max] = encadrements[encadrement].split('-').map(Number);
          
          if (point >= min && point <= max) {
            return encadrements[encadrement];
          }
        }

        return '';
    }

    
    const commKey = getEncadrement(commPoints,commEncadrement);
    const concKey = getEncadrement(concPoints,concEncadrement);
    const actKey = getEncadrement(actPoints,actEncadrement);
    const strKey = getEncadrement(strPoints,strEncadrement);
    const anxKey = getEncadrement(anxPoints,anxEncadrement);
    const confKey = getEncadrement(confPoints,confEncadrement);
    const motKey = getEncadrement(motPoints,motEncadrement);
    const emoKey = getEncadrement(emoPoints,emoEncadrement);
    const estKey = getEncadrement(estPoints,estEncadrement);
    const eneKey = getEncadrement(enePoints,eneEncadrement);

  return (
    <div className='pdf_container'>
        <h1 className='pdf_titre'>Résultats</h1>
        <p className='pdf_intro'>Ce questionnaire a été conçu pour explorer et mieux comprendre le fonctionnement de notre mental. À travers des questions ciblées, il permet de dresser une image mentale unique des processus qui façonnent nos pensées, nos perceptions et nos réactions. En participant à ce test, vous découvrirez des pistes de réflexion sur les mécanismes de votre esprit, qui peuvent offrir une meilleure compréhension de vous-même.</p>
        <img className='pdf_image' src="./assets/diagramme.png" alt="diagramme" />
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Communication</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Communication.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Communication.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {commKey !== '' ? JSON.parse(JSON.stringify(result))["Communication"][commKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{commKey !== '' ? JSON.parse(JSON.stringify(result))["Communication"][commKey]["Description"] : ''}</p>
        </div>
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Concentration</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Concentration.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Concentration.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {concKey !== '' ? JSON.parse(JSON.stringify(result))["Concentration"][concKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{concKey !== '' ? JSON.parse(JSON.stringify(result))["Concentration"][concKey]["Description"] : ''}</p>
        </div>
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Activation</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Activation.Définition}</p>
                </div>
            </div>
            <p>Ton niveau : {actKey !== '' ? JSON.parse(JSON.stringify(result))["Activation"][actKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{actKey !== '' ? JSON.parse(JSON.stringify(result))["Activation"][actKey]["Description"] : ''}</p>
        </div>
        <br /><br /><br /><br /><br />
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Stress & anxiété</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result['Stress & anxiété'].Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result['Stress & anxiété'].Rôle}</p>
                </div>
            </div>
            <div className='pdf_roledefcontainer'>
            <div>
            <p>Ton niveau de stress : {strKey !== '' ? JSON.parse(JSON.stringify(result))['Stress & anxiété']['Stress'][strKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{strKey !== '' ? JSON.parse(JSON.stringify(result))['Stress & anxiété']['Stress'][strKey]["Description"] : ''}</p>
            </div>
            <div>
            <p>Ton niveau d'anxiété : {anxKey !== '' ? JSON.parse(JSON.stringify(result))['Stress & anxiété']['Anxiété'][anxKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{anxKey !== '' ? JSON.parse(JSON.stringify(result))['Stress & anxiété']['Anxiété'][anxKey]["Description"] : ''}</p>
            </div>
            </div>
            <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Confiance</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Confiance.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Confiance.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {confKey !== '' ? JSON.parse(JSON.stringify(result))["Confiance"][confKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{confKey !== '' ? JSON.parse(JSON.stringify(result))["Confiance"][confKey]["Description"] : ''}</p>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Motivation</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Motivation.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Motivation.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {motKey !== '' ? JSON.parse(JSON.stringify(result))["Motivation"][motKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{motKey !== '' ? JSON.parse(JSON.stringify(result))["Motivation"][motKey]["Description"] : ''}</p>
        </div>
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Emotions</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Emotions.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Emotions.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {emoKey !== '' ? JSON.parse(JSON.stringify(result))["Emotions"][emoKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{emoKey !== '' ? JSON.parse(JSON.stringify(result))["Emotions"][emoKey]["Description"] : ''}</p>
        </div>
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Estime de soi</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result['Estime de soi'].Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result['Estime de soi'].Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {estKey !== '' ? JSON.parse(JSON.stringify(result))["Estime de soi"][estKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{estKey !== '' ? JSON.parse(JSON.stringify(result))["Estime de soi"][estKey]["Description"] : ''}</p>
        </div>
        <div className='pdf_subjects'>
            <h1 className='pdf_titre'>Energie</h1>
            <div className='pdf_roledefcontainer'>
                <div>
                    <p>Définition :</p>
                    <p>{result.Energie.Définition}</p>
                </div>
                <div>
                    <p>Rôle :</p>
                    <p>{result.Energie.Rôle}</p>
                </div>
            </div>
            <p>Ton niveau : {eneKey !== '' ? JSON.parse(JSON.stringify(result))["Energie"][eneKey]["Titre"] : ''}</p>
            <p style={{marginTop:'40px'}}>{eneKey !== '' ? JSON.parse(JSON.stringify(result))["Energie"][eneKey]["Description"] : ''}</p>
        </div>
        </div>
    </div>
  )
}

export default Pdf