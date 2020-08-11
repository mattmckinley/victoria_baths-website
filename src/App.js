import React, { Component } from 'react';
import { Link, Route, Switch, } from 'react-router-dom';

import './App.css';

import Nav from './Nav/Nav';
import Home from './Home/Home';
import History from './History/History';
import Support from './Support/Support';
import Hire from './Hire/Hire';
import Visit from './Visit/Visit';
import Error from './Error/Error';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Victoria Baths</h1>
        <div className="nav">
          <Nav />
        </div>
      </header>
      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/Visit" component={Visit} />
          <Route path="/History" component={History} />
          <Route path="/Support" component={Support} />
          <Route path="/Hire" component={Hire} />
          <Route component={Error} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
