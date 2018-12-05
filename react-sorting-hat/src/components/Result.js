import React from 'react';

const Result = props => {
  const house = sessionStorage.house;
  return(
    <header className="Welcome">
      <div className={`Welcome__container ${house}`}>
        <h1>Your house is {house}</h1>
        <h2>Blah blah blah</h2>
      </div>
    </header>
  );
}

export default Result;
