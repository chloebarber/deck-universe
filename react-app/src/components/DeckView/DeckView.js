import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById, deleteDeckThunk } from '../../store/deck'
// import CardInfo from '../Card/Card.js'
import DeckEdit from './DeckEdit/DeckEdit'
import CardListingTable from './CardListingTable/CardListingTable'
import { useHistory } from 'react-router-dom';
import './DeckView.css';

function DeckInfo(Deck){
    return (
        <div className="deckDiv">
            {Deck.splash_image && <img className="gameArt" src={Deck.splash_image} alt={Deck.game_name}/>}
            {(Deck.splash_image == '') && <img className="gameArt" src={'https://media.istockphoto.com/vectors/playing-card-back-side-vector-id133281126'} alt={Deck.game_name}/>}
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

    const history = useHistory();
    function printableButton(){
        history.push(`/decks/${deckId}/printable`)
    }


    return (
        <div className="DeckViewBackground">
            <div className="DeckViewContainer">
                {SelectedDeck?.Deck && !toggleEditFlag && DeckInfo(SelectedDeck.Deck)}
                {SelectedDeck?.Deck && toggleEditFlag && <DeckEdit deck={SelectedDeck.Deck}/>}
                {!toggleEditFlag && (user.user?.id === SelectedDeck.Deck?.owner_id) && <button className="editDeckButton" onClick={toggleEdit}>Edit Deck</button>}
                {toggleEditFlag && <button className="editDeckButton" onClick={toggleEdit}>Cancel</button>}
                <div className="cardsHeadingContainer">
                    <h1 id="cardsHeader">Cards</h1>
                    <div>
                    {!toggleCardsFlag && <button className="cardsToggleButton" onClick={toggleCards}>Expand Card List</button>}
                    {toggleCardsFlag && <button className="cardsToggleButton" onClick={toggleCards}>Hide Card List</button>}
                    {/* <button className="printButton" onClick={printableButton}>Print View</button> */}
                    </div>
                    {toggleCardsFlag && <CardListingTable/>}
                </div>
            </div>
        </div>


    )
}
export default DeckView;