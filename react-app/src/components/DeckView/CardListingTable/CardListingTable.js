import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCardThunk } from '../../../store/deck'
import CardEdit from '../../Card/EditCard';
import Modal from 'react-modal';
import '../DeckView.css'
import ownerOptions from '../DeckView'

function CardListingTable(){

    const dispatch = useDispatch()
    const SelectedDeck = useSelector((state) => state.SelectedDeck)
    const user = useSelector((state) => state.session)

    function ownerOptions(flag, card){
        switch (flag){
        case "NEWCARD":
            return (<button onClick={(e) => editModalClicked(e, {})}>New Card</button>)
        case "EDITCARD":
            return (<button onClick={(e) => editModalClicked(e, card)}>Edit Card</button>)
        case "DELETECARD":
            return (<button onClick={(e) => handleDelete(e, card)}>Delete</button>)
        }
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

    //------------------------modal garbage starts here
    const [modalIsOpen, setIsOpen] = useState(false);
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

    return (
    <div className="cardsDiv">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Edit Card">
            <button onClick={closeModal}>close</button>
            <CardEdit card={cardToEdit}/>
        </Modal> 
        <h3>Cards</h3>
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
    )
}
export default CardListingTable;