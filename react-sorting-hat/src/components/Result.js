import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const house = this.props.house;
    return(
      <header>
        <div className={`result__container ${this.props.house}`}>
          <h1>Your house is {this.props.house}</h1>
          <h2>{this.props.house} Alumni</h2>
          <div className="alumni">

            <div className='alumni__card'>
              <img src={this.props.alumni[0]} />
              <p>{this.props.bio[0]}</p>
            </div>

            <div className='alumni__card'>
              <img src={this.props.alumni[1]} />
              <p>{this.props.bio[1]}</p>
            </div>

            <div className='alumni__card'>
              <img src={this.props.alumni[2]} />
              <p>{this.props.bio[2]}</p>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default Result;
