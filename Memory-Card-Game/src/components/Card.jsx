import React from 'react';
import './Card.css';

export default function Card ({ card, handleChoice, flipped }) {
    const handleClick = () => {
        if (!flipped) {
            handleChoice(card);
        }
    };

    return (
        <div className="card">
            <div className ={flipped ? "flipped" : ""}>
                {/* Front Side */}
                <img className="front" src={card.src} alt="card front" />
                {/* Back Side */}
                <img 
                    className="back" 
                    src="/img/cover.png" 
                    alt="card back" 
                    onClick={handleClick} 
                />
            </div>
        </div>
    );
}


/*Card.jsx
This component represents an individual card in the memory card game. It takes in a card object, a function to handle when the card is chosen, and a boolean indicating whether the card is flipped or not. When the back of the card is clicked, it triggers the handleChoice function if the card is not already flipped. The component uses conditional rendering to apply a "flipped" class to show either the front or back of the card based on its state.
*/

