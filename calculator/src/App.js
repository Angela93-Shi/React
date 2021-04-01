import './App.css';
import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Calculator from './Calculator';
import Calculator_function from './Calculator_function'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={ Calculator }></Route>
        <Route exact path='/function' component={ Calculator_function }></Route>
      </Switch>
    </div>
  );
}

export default App;
