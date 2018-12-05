import React from 'react';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        index: 0,
        title: 'You Come Across A Lost Wallet, You:',
        answer: [
          "Keep The Money",
          "Try To Find The Owner",
          "Turn It Over To The Authorities",
          "Leave It Where It Is",
        ],
      },

      allQuestions: [
        'Two Friends Are Fighting, You:',
        'You Accidently Hit Your Toe, Your Response:',
        'A Pet Is A',
        'You Are ',
        'Favorite Color',
      ],

      allAnswers: {
        0: ["Do Nothing", "Get Involed Trying To Break It Up", "Try To Talk To Them Calmly", "Try To Distract Them From The Issue"],
        1: ["Inhale Sharply", "Curse", "Focus On Something Else", "Grab Your Foot"],
        2: ["Tool", "Companion", "Animal", "Friend"],
        3: ["Logical, Some Creativity","Creative, Some Logic", "Logical", "Creative"],
        4: ["Silver", "Gold", "Blue", "Yellow"],
      },

      value: [
        's',
        'g',
        'r',
        'h'
      ],

      scores: [
        0,
        0,
        0,
        0,
      ]
    }
  }

  tallyScore = event => {


    const newScore = this.state.scores.slice();
    const answerArr = Array.from(document.querySelectorAll(`input`));
    const answer = answerArr.filter(item => item.checked)

    const qIndex = this.state.question.index;

    if(qIndex === this.state.allQuestions.length) {
      const scores = this.state.scores;
      let result = 0;

      for(let i = 0; i < scores.length; i++) {
        if(scores[i] > result) {
          result = i;
        }
      }

      switch(result) {
        case 0:
          sessionStorage.house = 'Slytherin';
          break;

        case 1:
          sessionStorage.house = 'Gryffindor';
          break;

        case 2:
          sessionStorage.house = 'Ravenclaw';
          break;

        case 3:
          sessionStorage.house = 'Hufflepuff';
          break;
      }

      this.props.pageHandler();
      return;
    }

    switch(answer[0].value) {
      case 's':
        newScore[0]++
        break;

      case 'g':
        newScore[1]++
        break;

      case 'r':
        newScore[2]++
        break;

      case 'h':
        newScore[3]++
        break;
    }

    this.setState({scores: newScore,
                  question: {
                    title: this.state.allQuestions[qIndex],
                    index: this.state.question.index += 1,
                    answer: this.state.allAnswers[qIndex]
                  }})
  }

  render() {
    return(
      <div className="question">
        <h2>{this.state.question.title}</h2>
        <form>
          <input type="radio" name="gender" value={this.state.value[0]} /> {this.state.question.answer[0]}<br />
          <input type="radio" name="gender" value={this.state.value[1]} /> {this.state.question.answer[1]}<br />
          <input type="radio" name="gender" value={this.state.value[2]} /> {this.state.question.answer[2]}<br />
          <input type="radio" name="gender" value={this.state.value[3]} /> {this.state.question.answer[3]}
        </form>
        <button onClick={this.tallyScore}>Submit</button>
      </div>
    );
  }
}

QuestionCard.defaultProps = {
  question: {
    title: "This is some kind of question?",
    answer: [
      'Gryffindor',
      'Hufflepuff',
      'Slytherin',
      'Ravenclaw'
    ]
  }
};

export default QuestionCard;
