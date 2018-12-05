import React from 'react';

class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="question">
        <h2>{this.props.question.title}</h2>
        <form action="">
          <input type="radio" name="gender" value={this.props.question.answer[0]} /> {this.props.question.answer[0]}<br />
          <input type="radio" name="gender" value={this.props.question.answer[1]} /> {this.props.question.answer[1]}<br />
          <input type="radio" name="gender" value={this.props.question.answer[2]} /> {this.props.question.answer[2]}<br />
          <input type="radio" name="gender" value={this.props.question.answer[3]} /> {this.props.question.answer[3]}
        </form>
      </div>
    );
  }
}

QuestionCard.defaultProps = {
  question: {
    title: "Title",
    answer: [
      'A',
      'B',
      'C',
      'D'
    ]
  }
};

export default QuestionCard;
