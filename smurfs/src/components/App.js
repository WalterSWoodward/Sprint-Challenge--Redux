import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurf Village 2.0</h1>
        <AddSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
