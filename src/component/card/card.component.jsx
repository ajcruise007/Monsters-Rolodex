import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        
        <img alt="cat" src={`https://robohash.org/${props.userId}?set=set2`}></img>
        <h2 >{props.userName}</h2>
        <p>{props.userEmail}</p>

    </div>
);