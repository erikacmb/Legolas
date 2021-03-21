import React from 'react';
import './Dashboard.css';
import * as Constants from '../constants.js';

export default function Dashboard({ history }) { 

  const token = localStorage.getItem('@fronent/token')
  const logged = Boolean(localStorage.getItem('@frontend/logged'))

  async function handleButtonClick(e) { 
    localStorage.clear()
    localStorage.setItem('@frontend/logged', false)
    history.push('/')
  }

  if ((token) && (logged)) { 
    return (
      <div className='dashboard-container'>
        <p>{Constants.LOGGED_MESSAGE}</p><br/>
        <form onSubmit={handleButtonClick}>
          <button type='submit'>DESLOGAR</button>
        </form>
    </div>
    );
  } else {
    return (
      <div className='dashboard-unlogged'>
        <p>{Constants.NOT_LOGGED_MESSAGE}</p><br/>
        <form onSubmit={handleButtonClick}>
          <button type='submit'>Clique para logar!</button>
        </form>
      </div>
    );
  }

}