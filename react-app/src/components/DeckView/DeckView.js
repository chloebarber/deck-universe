import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById, deleteDeckThunk } from '../../store/deck'
// import CardInfo from '../Card/Card.js'
import DeckEdit from './DeckEdit/DeckEdit'
import CardListingTable from './CardListingTable/CardListingTable'
import './DeckView.css';

function DeckInfo(Deck){
    return (
        <div className="deckDiv">
            <img className="gameArt" src={Deck.splash_image} alt={Deck.game_name}/>
            <div className="gameDesc">
                <h1>{Deck.game_name}</h1>
                <div>{Deck.description}</div>
            </div>
            <div className="gameRules">
                <h1>Rules</h1>
                <div>{Deck.rules}</div>
            </div>
        </div>
    )
}



// Modal.setAppElement('CardEdit');

function DeckView(flag) {

    const SelectedDeck = useSelector((state) => state.SelectedDeck)
    const user = useSelector((state) => state.session)

    const dispatch = useDispatch()

    const { deckId } = useParams();

    useEffect(() => {
        if(flag.flag !== "NEW")
            dispatch(getDeckById(deckId))
        else{
            SelectedDeck.Deck = {}
            // SelectedDeck.Cards = {}
        }
    }, [dispatch, deckId]);


    const [toggleEditFlag, setToggleEditFlag] = useState(flag === 'NEW');

    function toggleEdit() {
        setToggleEditFlag(!toggleEditFlag);
      }

    const [toggleCardsFlag, setToggleCardsFlag] = useState(false);

    function toggleCards() {
        setToggleCardsFlag(!toggleCardsFlag);
    }





    return (
        <div className="DeckViewBackground">
            <div className="DeckViewContainer">
                {SelectedDeck?.Deck && !toggleEditFlag && DeckInfo(SelectedDeck.Deck)}
                {SelectedDeck?.Deck && toggleEditFlag && <DeckEdit deck={SelectedDeck.Deck}/>}
                {!toggleEditFlag && <button className="editDeckButton" onClick={toggleEdit}>Edit Deck</button>}
                {toggleEditFlag && <button className="editDeckButton" onClick={toggleEdit}>Cancel</button>}
                <div className="cardsHeadingContainer">
                    <h1 id="cardsHeader">Cards</h1>
                    {!toggleCardsFlag && <button className="cardsToggleButton" onClick={toggleCards}>Expand Card List</button>}
                    {toggleCardsFlag && <button className="cardsToggleButton" onClick={toggleCards}>Hide Card List</button>}
                    {toggleCardsFlag && <CardListingTable/>}
                </div>
            </div>
        </div>


    )
}
export default DeckView;