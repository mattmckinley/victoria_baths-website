import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import History from './History/History';
import Support from './Support/Support';
import Hire from './Hire/Hire';
import Visit from './Visit/Visit';

function App() {
  return (
    <div className="App">
      <h1>Victoria Baths</h1>
      <div className="nav">
        <Nav />
      </div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Visit" component={Visit} />
        <Route path="/History" component={History} />
        <Route path="/Support" component={Support} />
        <Route path="/Hire" component={Hire} />
      </Switch>
    </div>
  );
}

export default App;
