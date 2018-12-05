import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import QuestionCard from './components/QuestionCard.js';
import Result from './components/Result.js';

import merlin from './img/Result/s-merlin.jpg';
import salazar from './img/Result/s-salazar.jpg';
import snape from './img/Result/s-snape.jpg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: [<Welcome pageHandler={this.changePage.bind(this)}/>, <QuestionCard pageHandler={this.changePage.bind(this)} houseHandler={this.setHouse.bind(this)}/>, <Result />],
      index: 0,
      house: sessionStorage.house,
      alumni: [],
      bio: [],
    }
  }

  changePage = event => {
    let currentValue = this.state.index
    this.setState({index: currentValue+=1});
  }

  setHouse = (house) => {
    switch(house) {
      case 'Slytherin':
      this.setState({
        house: sessionStorage.house,
        alumni: [
          salazar,
          merlin,
          snape
        ],

        bio: [
          "Salazar Slytherin",
          "Merlin",
          "Severus Snape"
        ],
      });
      return;

      case 'Gryffindor':
        this.setState({
          house: sessionStorage.house,
          alumni: [
            salazar,
            merlin,
            snape
          ],

          bio: [
            "Godric Gryffindor",
            "James Potter",
            "Harry Potter"
          ],
        });
        break;

      case 'Ravenclaw':
        this.setState({
          house: sessionStorage.house,
          alumni: [
            salazar,
            merlin,
            snape
          ],

          bio: [
            "RaveClaw1",
            "RaveClaw2",
            "RaveClaw3"
          ],
        });
        break;

      case 'Hufflepuff':
        this.setState({
          house: sessionStorage.house,
          alumni: [
            salazar,
            merlin,
            snape
          ],

          bio: [
            "Huff1",
            "Huff2",
            "Huff3"
          ],
        });
        break;
    }
  }

  render() {
    const index = this.state.index;
    let page = this.state.pages[index];

    if(page === this.state.pages[2]) {
      page = <Result house={this.state.house} alumni={this.state.alumni} bio={this.state.bio}/>
    }

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
