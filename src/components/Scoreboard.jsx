import React from "react";

function Scoreboard({ score, highScore }) {

    return (        
        <div className="header">
          <h1>Memory Card</h1>
          <div className="score">
            <p>Current Score is {score}</p>
            <p>High Score is {highScore}</p>
          </div>
        </div>
    )
}

export default Scoreboard;