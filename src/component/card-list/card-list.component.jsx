import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

function CardList(props){
    return (
        <div className="card-list"> {props.artists.map(user => 
            <Card key={user.id}userName ={user.name} userId = {user.id} userEmail={user.email}/>)} </div>
    );
}

export default CardList;