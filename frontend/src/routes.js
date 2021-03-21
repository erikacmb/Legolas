import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
export default function Routes() {
  return(
    <BrowserRouter>
      <Route path='/' exact component={Home}/>
      <Route path='/dashboard' component={Dashboard}/>
    </BrowserRouter>
  );
}