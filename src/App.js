import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moonimages from "../moonimages.json";

class App extends Component {

  state = {
    moonimages,
    counter: 0,
    topScore: 0,
    clicked: []
  }

  
shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

imgClick = id => {
  if (this.state.clicked.indexOf(id) === -1) {
    this.imgInc();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.scoreReset();
  }
};

imgInc = () => {
  const newScore = this.state.counter + 1;
  this.setState({
    counter: newScore,
    rightWrong: ""
  });
  if (newScore >= this.state.topScore) {
    this.setState({ topScore: newScore });
  }
  this.shuffleArray();
};

scoreReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    clicked: []
  });
  this.shuffleArray();
};




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
