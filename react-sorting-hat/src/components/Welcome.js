import React from 'react';

const Welcome = props => {
  console.log(props)
  return(
    <header className="Welcome">
      <div className="Welcome__container">
        <h1>Welcome Young Wizard</h1>
        <h2>Open The Doors and See What Wonders Await</h2>
        <button onClick={props.pageHandler}>Enter</button>
      </div>
    </header>
  );
}

export default Welcome;
