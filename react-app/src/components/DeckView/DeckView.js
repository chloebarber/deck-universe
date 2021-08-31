import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById, deleteCardThunk, editCardThunk, editDeckThunk, deleteDeckThunk } from '../../store/deck'
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


    const [toggleEditFlag, setToggleEditFlag] = useState(flag ==='NEW');

    function toggleEdit() {
        setToggleEditFlag(!toggleEditFlag);
      }



    function handleDeleteDeck(e) {
        e.preventDefault();
        return dispatch(deleteDeckThunk(SelectedDeck.Deck.id))
            .catch(async (res) => {
                await res.json();
            });
    }


    function ownerOptions(flag, card){
        switch (flag){
        case "EDITDECK":
            return (
                <>
                {/* <button onClick={(e) => DeckEdit(SelectedDeck.Deck)}>Edit Deck</button> */}
                <button onClick={(e) => handleDeleteDeck(e)}>Delete Deck</button>
                </>
            )}
    }

    return (
        <div className="DeckViewBackground">
            <div className="DeckViewContainer">
                {SelectedDeck?.Deck && !toggleEditFlag && DeckInfo(SelectedDeck.Deck)}
                {SelectedDeck?.Deck && toggleEditFlag && <DeckEdit deck={SelectedDeck.Deck}/>}
                {user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("EDITDECK")}
                {!toggleEditFlag && <button onClick={toggleEdit}>Edit Deck</button>}
                {user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("NEWCARD")}
                <CardListingTable/>
            </div>
        </div>


    )
}
export default DeckView;