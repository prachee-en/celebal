// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Form from './components/Form';
import Success from './components/Success';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Form} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
