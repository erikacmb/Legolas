import React, { useState } from 'react';
import './Home.css';
import api from '../services/api';
import logo from '../assets/logo.png';

export default function Home({ history }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {

    if (!email || !password) { 
      return
    }

    e.preventDefault();

    const response = await api.post('/admin/login', {
      email,
      password
    });

    const { status, message } = response.data;

    if (status === 200) { 
      history.push('/dashboard')
    } else { 
      // aqui não está printando e não atualiza a variável errorMessage
      setErrorMessage(message)
    }
  
  }

  return(
    
    <div className='home-container'>

      <img className='logo' src={logo} alt='Legolas'/>
  
      <form onSubmit={handleSubmit}>
        <input
          placeholder='email@legolas.com'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='***********************'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type='submit'>Legolaaaas!</button>

        <p className='home-error-message'>{errorMessage}</p>

      </form>
      
    </div>
  );
}