import React from 'react';
import './Card.css'
import './CardLayouts/SummoningGame.css'
import './CardLayouts/ClassicGame.css'
import './CardLayouts/FreeformGame.css'
import './CardLayouts/ImageUpload.css'
import './CardLayouts/MapGame.css'
import './CardLayouts/Generica.css'

export default function CardInfo(card){
    card = card.card

    let template = 1;
    switch (card.template){
        case 1:
            template="summoningGame";
            break;
        case 2:
            template="classicGame";
            break;
        case 3:
            template="generica";
            break;
        case 4:
            template="imageUpload";
            break;
        case 5:
            template="mapGame";
            break;
        default:
            template="generica";
    }

    return (
        <div className={`CardInfo ${template}`}>
            <div className="cardName">{card.card_name}</div>
            <img className="art" src={card.splash_image} alt=" "/>
            <div className="card_text_slot_1">{card.card_text_slot_1}</div>
            <div className="card_text_slot_2">{card.card_text_slot_2}</div>
            <div className="card_text_slot_3">{card.card_text_slot_3}</div>
            <div className="card_text_slot_4">{card.card_text_slot_4}</div>
            <div className="card_text_slot_5">{card.card_text_slot_5}</div>
        </div>
    )
}


