import React from 'react';
import './Card.css'


export default function CardInfo(card){
    card = card.card
    return (
        <div className="CardInfo">
            <div className="CardName">{card.card_name}</div>
            <div className="art"></div>
            <div className="card_text_slot_1">{card.card_text_slot_1}</div>
            <div className="card_text_slot_2"></div>
            <div className="card_text_slot_3"></div>
            <div className="card_text_slot_4"></div>
        </div>
    )
}