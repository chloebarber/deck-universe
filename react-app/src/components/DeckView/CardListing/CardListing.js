import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createDeckThunk, editDeckThunk } from '../../../store/deck';
import '../DeckView.css'

function CardListing(SelectedDeck, user){
    return (
    <div className="cardsDiv">
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
            {SelectedDeck?.cards?.map(card => (
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
export default CardListing;