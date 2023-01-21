import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import dice from './images/icon-dice.svg';
import divider from './images/pattern-divider-desktop.svg';

const App = () => {
  const [advices, setadvice] = useState('');
  const [adviceid, setAdviceId] = useState(0);
  const apiCall = () => {
    fetch("https://api.adviceslip.com/advice")
      .then(Response => Response.json())
      .then(data => {
        console.log(data);
        setadvice(data.slip.advice)
        setAdviceId(data.slip.id)
      })
  }
  useEffect(() => {
    apiCall();
  }, [])

  return (
    <div className='adviceBox'>
      <div id='id'>ADVICE  #{adviceid}</div>
      <div className='quote'>“{advices}”</div>
      <div><img id='divider' src={divider} alt="divider pattern" /></div>
      <div className='parentBtn'>
        <button onClick={apiCall}>
          <img src={dice} alt="disc" />
        </button>
      </div>
    </div>
  )
}

export default App