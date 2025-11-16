import React from 'react';
import ' ./Score.css';

function Score({ score, attempts }) {
    return (
        <div className="score-board">
            <p>Score: {score}</p>
            <p>Attempts: {attempts}</p>
        </div>
    );
}

export default Score;

