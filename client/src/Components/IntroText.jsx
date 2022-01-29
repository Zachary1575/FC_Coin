//Functional Component
import React from 'react';
import './IntroText.css';

function IntroText({MainTitle, SecondTitle, Description}) {

  return(
    <React.Fragment>
        <div className='Intro_Container'>
            <h1 className='Intro_Header1'>{MainTitle}</h1>
            <h2 className='Intro_Header2'>{SecondTitle}</h2>
            <p className='Intro_Para'>{Description}</p>
        </div>
    </React.Fragment>
  );
}

export default IntroText;
