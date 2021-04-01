import React, { useState } from 'react';
import './NewClient.css';
import * as Constants from '../constants.js';
import { Form, Button, Col, Row, Spinner } from 'react-bootstrap';


import NavigationBar from '../components/NavigationBar';

export default function Dashboard({ history }) { 

  const token = localStorage.getItem('@fronent/token');
  const logged = Boolean(localStorage.getItem('@frontend/logged'));

  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [mobile, setMobile] = useState('');
  const [referral, setReferral] = useState('');

  const [pregnancy, setPregnancy] = useState(false);
  const [breastFeeding, setBreastFeeding] = useState(false);
  const [orderForChild, setOrderForChild] = useState(false);
  const [takeMedicines, setTakeMedicines] = useState(false);
  const [allergies, setAllergies] = useState(false);
  const [highBloodPressure, setHighBloodPressure] = useState(false);
  const [epilepsy, setEpilepsy] = useState(false);
  const [hormonalProblems, setHormonalProblems] = useState(false);

  const [addressFields, setAddressFields] = useState(false);

  const [delivery, setDelivery] = useState('');
  const [address, setAddress] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [country, setCountry] = useState('Brasil');

  const [showSpinner, setShowSpinner] = useState(false);

  async function handleButtonClick(e) { 
    localStorage.clear()
    localStorage.setItem('@frontend/logged', false)
    history.push('/')
  }

  function showChildAgeTextField(value) { 
    if (value) { 
      return(
        <Form.Group as={Row} controlId="childAgeTextField">
          <Form.Label column sm={4}>Idade da criança</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Idade da Criança"/></Col>
        </Form.Group>
      );
    } else { 
      return(<></>);
    }
  }

  function showTakeMedicinesTextField(value) { 
    if (value) { 
      return(
        <Form.Group as={Row} controlId="medicinesTextField">
          <Form.Label column sm={4}>Remédios que toma</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Remédios que toma" /></Col>
        </Form.Group>
      );
    } else { 
      return(<></>);
    }
  }

  function showAllergiesTextField(value) { 
    if (value) { 
      return(
        <Form.Group as={Row} controlId="allergiesTextField">
          <Form.Label column sm={4}>Alergias</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Alergias" /></Col>
        </Form.Group>
      );
    } else { 
      return(<></>);
    }
  }

  function showLoading() { 
    return(<Spinner className="new-client-spinner" animation="grow" variant="light" size="sm" />);
  }

  function hideLoading() { 
    return(<></>);
  }

  function showAddressFields(value) { 
    if (value) { 
      return(
        <div>
        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Endereço</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Logradouro, número e complemento" onChange={e => setAddress(e.target.value)} /></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Bairro</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Bairro" onChange={e => setDistrict(e.target.value)} /></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Cidade</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Cidade" onChange={e => setCity(e.target.value)} /></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Estado</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Estado" onChange={e => setUf(e.target.value)} /></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>CEP</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="00000-000" onChange={e => setZipCode(e.target.value)} /></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>País</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Brasil" onChange={e => setCountry(e.target.value)}/></Col>
        </Form.Group>
        </div>
      );
    } else { 
      return(<></>);
    }
  }

  function handleSubmit() { 
    setShowSpinner(true);
  }

  function handleReset() { 
    setShowSpinner(false);
  }

  if ((token) && (logged)) { 
    return (

      <div>
        
        <NavigationBar history = {history}/>

        <div className="new-client-title">{Constants.NEW_CLIENT_TITLE}</div>

        <Form className="new-client-container"> 

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Cliente</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Cliente" onChange={e => setName(e.target.value)}/></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Instagram</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Instagram" onChange={e => setInstagram(e.target.value)}/></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Celular</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="(DDD) 00000-0000" onChange={e => setMobile(e.target.value)}/></Col>
        </Form.Group>

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Como nos conheceu?</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Como nos conheceu?" onChange={e => setReferral(e.target.value)}/></Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={4}>
              Especificidades
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="checkbox"
                label="Está ou pode estar grávida"
                name="checkButton"
                id="pregnancy"
                onChange={e => setPregnancy(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="É lactante"
                name="checkButton"
                id="breastFeeding"
                onChange={e => setBreastFeeding(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Faz pedido para criança"
                name="checkButton"
                id="orderForChild"
                onChange={e => setOrderForChild(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Toma remédio frequente"
                name="checkButton"
                id="takeMedicines"
                onChange={e => setTakeMedicines(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Possui alergias"
                name="checkButton"
                id="allergies"
                onChange={e => setAllergies(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Tem hipertensão"
                name="checkButton"
                id="highBloodPressure"
                onChange={e => setHighBloodPressure(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Tem epilepsia"
                name="checkButton"
                id="epilepsy"
                onChange={e => setEpilepsy(e.target.checked)}
              />
              <Form.Check
                type="checkbox"
                label="Tem problemas hormonais e/ou ginecológicos"
                name="checkButton"
                id="hormonalProblems"
                onChange={e => setHormonalProblems(e.target.checked)}
              />
            </Col>
          </Form.Group>
        </fieldset>

        {showChildAgeTextField(orderForChild)}

        {showTakeMedicinesTextField(takeMedicines)}

        {showAllergiesTextField(allergies)}

        <Form.Group as={Row} controlId="textField">
          <Form.Label column sm={4}>Outras observações</Form.Label>
          <Col sm={8}><Form.Control type="text" placeholder="Outras observações" /></Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row}>
            <Form.Label as="legend" column lg={4}>
              Entrega preferida
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label="Melhor Envio"
                name="formHorizontalRadios"
                id="formHorizontalMelhorEnvio"
                onChange={e => { setAddressFields(true); setDelivery('Melhor Envio')}}
              />
              <Form.Check
                type="radio"
                label="Uber Flash"
                name="formHorizontalRadios"
                id="formHorizontalUberFlash"
                onChange={e => { setAddressFields(true); setDelivery('Uber Flash')}}
              />
              <Form.Check
                type="radio"
                label="Retirada"
                name="formHorizontalRadios"
                id="formHorizontalTake"
                onChange={e => { setAddressFields(false); setDelivery('Retirada')}}
              />
            </Col>
          </Form.Group>
        </fieldset>

        {showAddressFields(addressFields)}

          <Form.Group as={Row}>
            <Form.Label as="legend" column lg={4}>
              
            </Form.Label>
            <div className="new-client-submit">
              <Button className="new-client-button" onClick={() => handleSubmit()}>Salvar {showSpinner ? showLoading() : hideLoading()}</Button> 
            </div>
          </Form.Group>
        </Form>

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