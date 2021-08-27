import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById, deleteCardThunk, editCardThunk, editDeckThunk } from '../../store/deck'
// import CardInfo from '../Card/Card.js'
import CardEdit from '../Card/EditCard';
import Modal from 'react-modal';
import './DeckView.css';

function DeckInfo(Deck){
    return (
        <div className="deckDiv">
            <h1>{Deck.game_name}</h1>
            <img className="gameArt" src={Deck.splash_image} alt={Deck.game_name}/>
            <div className="gameDesc">{Deck.description}</div>
            <div className="gameRules">
                <h1>Rules</h1>
                <div>{Deck.rules}</div>
            </div>
        </div>
    )
}

function DeckEdit(Deck){
    return (
        <form className="deckDiv">
            <h1>
                <div>Edit Deck Name</div>
                <input type="text" id="editDeckName">{Deck?.game_name}</input>
            </h1>
            <img className="gameArt" src={Deck?.splash_image} alt={Deck?.game_name}/>
            <div className="gameDesc">
                <h1>Edit Description</h1>
                <textarea>{Deck?.description}</textarea>
            </div>
            <div className="gameRules">
                <h1>Edit Rules</h1>
                <textarea>{Deck?.rules}</textarea>
            </div>
            <button>Save</button>
        </form>
    )
}

// Modal.setAppElement('CardEdit');

function DeckView(flag) {
    console.log(flag);

    const SelectedDeck = useSelector((state) => state.SelectedDeck)
    const user = useSelector((state) => state.session)
    console.log(SelectedDeck);
    
    //------------------------modal garbage starts here
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [cardToEdit, setCardToEdit] = useState();

    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }

      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: '50%',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    //------------------------


    const dispatch = useDispatch()

    const { deckId } = useParams();

    useEffect(() => {
        if(flag.flag !== "NEW")
            dispatch(getDeckById(deckId))
        else{
            SelectedDeck.Deck = {}
            SelectedDeck.Cards = {}
        }
    }, [dispatch, deckId]);

    function changeCard(option, card){
        if (option === "EDIT")
            return(
                <div className="edit-card">
                    <button onClick={openModal}>Edit Card</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Edit Card">
                        <CardEdit card={card}/>
                    </Modal> 
                </div>
            )
        else if (option === "NEW")
            return(
                <div className="new-card">
                    <button onClick={openModal}>New Card</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="New Card">
                        <CardEdit/>
                    </Modal>
                </div>
            )
    }

    function editModalClicked(e, card){
        e.preventDefault();
        setCardToEdit(card);
        openModal();
    }

    function handleDelete(e, card) {
        e.preventDefault();
        return dispatch(deleteCardThunk(card.id))
            .catch(async (res) => {
                await res.json();
            });
    }

    function handleEdit(e, card) {
        e.preventDefault();
        return dispatch(editCardThunk(card))
            .catch(async (res) => {
                await res.json();
            });
    }

    function ownerOptions(flag, card){
        switch (flag){
        case "EDITDECK":
            return (
                <>
                <button onClick={(e) => editModalClicked(e, {})}>Edit Deck</button>
                </>
            )
        case "NEWCARD":
            return (<button onClick={(e) => editModalClicked(e, {})}>New Card</button>)
        case "EDITCARD":
            return (<button onClick={(e) => editModalClicked(e, card)}>Edit Card</button>)
        case "DELETECARD":
            return (<button onClick={(e) => handleDelete(e, card)}>Delete</button>)
        }
    }

    return (
        <div className="DeckViewBackground">
            <div className="DeckViewContainer">
                {SelectedDeck?.Deck && DeckInfo(SelectedDeck.Deck)}
                {!SelectedDeck?.Deck && DeckEdit(SelectedDeck.Deck)}
                            <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Edit Card">
                            <button onClick={closeModal}>close</button>
                            <CardEdit card={cardToEdit}/>
                        </Modal> 
                {user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("EDITDECK")}
                {user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("NEWCARD")}
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
                        {SelectedDeck?.Cards?.map(card => (
                                    <tr>
                                        <td>{card.card_name}</td>
                                        <td>{card.card_text_slot_1}</td>
                                        <td>{card.card_text_slot_2}</td>
                                        <td>{card.card_text_slot_3}</td>
                                        <td>{card.card_text_slot_4}</td>
                                        <td>{card.card_text_slot_5}</td>
                                        <td>{user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("EDITCARD", card)}</td>
                                        {/* <td>{<button onClick={(e) => handleEdit(e, card)}>Edit</button>}</td>   */}
                                        {/* <td><button>Delete</button></td> */}
                                        <td>{user.user?.id === SelectedDeck.Deck?.owner_id && ownerOptions("DELETECARD", card)}</td>    
                                    </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
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