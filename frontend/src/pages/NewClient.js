import React, { useState } from 'react';
import './NewClient.css';
import * as Constants from '../constants.js';

import NavigationBar from '../components/NavigationBar';

export default function Dashboard({ history }) { 

  const token = localStorage.getItem('@fronent/token');
  const logged = Boolean(localStorage.getItem('@frontend/logged'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');


  async function handleButtonClick(e) { 
    localStorage.clear()
    localStorage.setItem('@frontend/logged', false)
    history.push('/')
  }

  if ((token) && (logged)) { 
    return (

      <div>
        
        <NavigationBar history = {history}/>

        <div className="title">{Constants.NEW_CLIENT_TITLE}</div>
        
        <div className='new-client-container'>

          <form onSubmit={handleButtonClick}>

            <div className="new-client-form-container">

              <div className="new-client-form-column">

                <input
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  placeholder="Celular"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  placeholder="E-mail"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  placeholder="Aniversário"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  placeholder="Forma de Entrega Preferida"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  placeholder="Como nos conheceu?"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                    placeholder="Observações"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

              </div>

              <div className="new-client-form-column">

                <input
                  placeholder="Logradouro"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                  <input
                    placeholder="Número"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <input
                    placeholder="Bairro"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <input
                    placeholder="Cidade"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <input
                    placeholder="UF"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <input
                    placeholder="CEP"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

                  <input
                    placeholder="País"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />

              </div>


            </div>

            

          </form>
  
  
        </div>

        <div className="new-client-button-align">
          <button className="new-client-container-form-button" type='submit'>{Constants.NEW_CLIENT_BUTTON}</button>
        </div>
        

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