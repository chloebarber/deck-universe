import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById } from '../../store/deck'
import CardInfo from '../Card/Card.js'
import CardEdit from '../Card/EditCard';
import './Deck.css';

function DeckInfo(Deck){
    return (
        <div className="deckDiv">
            <h1>{Deck.game_name}</h1>
            <img className="gameArt" src={Deck.splash_image} alt="game image"/>
            <div className="gameDesc">{Deck.description}</div>
            <div className="gameRules">{Deck.rules}</div>
        </div>
    )
}

function DeckView() {

    const decks = useSelector((state) => state.decks)
    const user = useSelector((state) => state.session)
    const dispatch = useDispatch()

    const { deckId } = useParams();

    useEffect(() => {
        dispatch(getDeckById(deckId))
    }, [dispatch, deckId]);

    function ownerOptions(){
        return(
            <div className="owner-options">
                <CardEdit/>
            </div>
        )
    }

    return (
        <div className="DeckViewContainer">
            {decks?.Deck && DeckInfo(decks.Deck)}
            {user.user?.id == decks.Deck?.owner_id && ownerOptions()}
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