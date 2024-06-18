import React from "react";

function Character(character) {
    return (
        <div className='card'>
            <img
                src={character.image}
                alt={character.name}
                className='card-img-top'
            />
            <h3 className='card-title'>{character.name}</h3>
        </div>
    );
};

export default Character;