import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById } from '../../store/deck'
import CardInfo from '../Card/Card.js'
import './Deck.css';

function DeckInfo(Deck){
    return (
        <div className="deckDiv">
            <h1>{Deck.game_name}</h1>
            <div className="gameArt"></div>
            <div className="gameDesc">{Deck.description}</div>
            <div className="gameRules">{Deck.rules}</div>
        </div>
    )
}

function DeckView() {

    const decks = useSelector((state) => state.decks)
    const dispatch = useDispatch()

    const { deckId } = useParams();

    useEffect(() => {
        dispatch(getDeckById(deckId))
    }, [dispatch, deckId]);

    return (
        <div>
            {decks.Deck && DeckInfo(decks.Deck)}
            <h3>Cards</h3>
            <div className="cardsDiv">
                {decks.Cards?.map(card => (
                    <>
                    <CardInfo card={card} />
                    </>
                ))}
            </div>
        </div>



    )
}
export default DeckView;