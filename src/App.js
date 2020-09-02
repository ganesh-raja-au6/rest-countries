import React, { Fragment } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import Single from './pages/GetSingleCountry'

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/single" component={Single} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
