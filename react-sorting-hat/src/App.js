import React, { Component } from 'react';
import Welcome from './components/Welcome.js';
import QuestionCard from './components/QuestionCard.js';
import Result from './components/Result.js';

import merlin from './img/Result/s-merlin.jpg';
import salazar from './img/Result/s-salazar.jpg';
import snape from './img/Result/s-snape.jpg';

import godric from './img/Result/g-godric.jpg';
import harry from './img/Result/g-harry.jpg';
import minerva from './img/Result/g-minerva.jpg';

import rowena from './img/Result/r-rowena.jpg';
import garrick from './img/Result/r-garrick.jpg';
import luna from './img/Result/r-luna.jpg';

import helga from './img/Result/h-helga.jpg';
import tonks from './img/Result/h-tonks.jpg';
import newt from './img/Result/h-newt.png';

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
            godric,
            minerva,
            harry
          ],

          bio: [
            "Godric Gryffindor",
            "Minerva McGonagall",
            "Harry Potter"
          ],
        });
        break;

      case 'Ravenclaw':
        this.setState({
          house: sessionStorage.house,
          alumni: [
            rowena,
            garrick,
            luna
          ],

          bio: [
            "Rowena Ravenclaw",
            "Garrick Ollivander",
            "Luna Lovegood"
          ],
        });
        break;

      case 'Hufflepuff':
        this.setState({
          house: sessionStorage.house,
          alumni: [
            helga,
            tonks,
            newt
          ],

          bio: [
            "Helga Hufflepuff",
            "Nymphadora Tonks",
            "Newt Scamander"
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
