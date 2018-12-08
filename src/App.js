import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import QuestionsContainers from "./containers/questions-container";

class App extends Component {
  render() {
    return (
      <div className="App">
          <QuestionsContainers />
      </div>
    );
  }
}

export default App;
