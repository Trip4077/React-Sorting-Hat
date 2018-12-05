import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import QuestionCard from './components/QuestionCard.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [<Welcome pageHandler={this.changePage.bind(this)}/>, <QuestionCard />],
      index: 0,
    }
  }

  changePage = event => {
    let currentValue = this.state.index
    this.setState({index: currentValue+=1});
  }

  render() {
    const index = this.state.index;
    const page = this.state.pages[index];

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
