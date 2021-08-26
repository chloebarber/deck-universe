import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById, deleteCardThunk } from '../../store/deck'
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

    function handleDelete(e, card) {
        e.preventDefault();
        return dispatch(deleteCardThunk(card.id))
            .catch(async (res) => {
                await res.json();
            });
    }

    return (
        <div className="DeckViewContainer">
            {decks?.Deck && DeckInfo(decks.Deck)}
            {user.user?.id == decks.Deck?.owner_id && ownerOptions()}
            <h3>Cards</h3>
            <div className="cardsDiv">
                <table className = "cardsListingTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Card Text 1</th>
                            <th>Card Text 2</th>
                            <th>Card Text 3</th>
                            <th>Card Text 4</th>
                            <th>Card Text 5</th>
                        </tr>
                    </thead>
                    <tbody>
                    {decks.Cards?.map(card => (
                                <tr>
                                    <td>{card.card_name}</td>
                                    <td>{card.card_text_slot_1}</td>
                                    <td>{card.card_text_slot_2}</td>
                                    <td>{card.card_text_slot_3}</td>
                                    <td>{card.card_text_slot_4}</td>
                                    <td>{card.card_text_slot_5}</td>
                                    <td><button>Edit</button></td>  
                                    {/* <td><button>Delete</button></td> */}
                                    <td><button onClick={(e) => handleDelete(e, card)}>Delete</button></td>    
                                </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>



    )
}
export default DeckView;

//saving this for later
// {decks.Cards?.map(card => (
//     <>
//     <CardInfo card={card} />
//     </>
// ))}