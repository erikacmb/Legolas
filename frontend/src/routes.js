import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NewClient from './pages/NewClient';
export default function Routes() {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/clients/new' component={NewClient}/>
    </BrowserRouter>
  );
}