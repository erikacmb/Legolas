import React, { useState } from 'react';
import './Home.css';
import api from '../services/api';
import logo from '../assets/logo.png';
import * as Constants from '../constants.js';

export default function Home({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const token = localStorage.getItem('@fronent/token')
  const logged = Boolean(localStorage.getItem('@frontend/logged'))

  async function handleSubmit(e) {

    localStorage.clear()

    if (!email || !password) { 
      return
    }

    e.preventDefault();

    try {
      const response = await api.post('/admin/login', { email, password });
      console.log(response);
      if (response.status === 200 && response.data.token) { 
        localStorage.setItem('@fronent/token', response.data.token)
        localStorage.setItem('@frontend/logged', true)
        localStorage.setItem('@frontend/email', email)
        history.push('/dashboard')
      }
    } catch (error) {
      setErrorMessage(Constants.LOGIN_ERROR_MESSAGE)
      localStorage.setItem('@frontend/logged', false)
    }
  
  }

  if ((token) && (logged)) { 
    history.push('/dashboard')
    return(<></>)
  } else { 

    return(
    
      <div className='home-container'>
  
        <img className='logo' src={logo} alt='Legolas'/>
    
        <form onSubmit={handleSubmit}>
          <input
            placeholder={Constants.LOGIN_EMAIL_PLACEHOLDER}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
  
          <input
            type='password'
            placeholder={Constants.LOGIN_PASSWORD_PLACEHOLDER}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type='submit'>{Constants.LOGIN_BUTTON_TEXT}</button>
  
          <p className='home-error-message'>{errorMessage}</p>
  
        </form>
        
      </div>
    );

  }

}