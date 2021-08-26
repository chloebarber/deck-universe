import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addCardThunk, editCardThunk } from '../../store/deck'
import './Card.css'

const CardEdit = (passedCard) => {
    //if the card edit form is passed a card, it prefills everything and does PUT
    //if it is not passed a card, it prefills nothing and does POST

    if (passedCard)
        passedCard = passedCard.card; //worst destructuring ever

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const deck = useSelector((state) => state.decks?.Deck)
    
    const [card_name, setCard_name] = useState(passedCard?.card_name);
    const [art, setArt] = useState(passedCard?.art);
    const [card_text_slot_1, setCard_text_slot_1] = useState(passedCard?.card_text_slot_1);
    const [card_text_slot_2, setCard_text_slot_2] = useState(passedCard?.card_text_slot_2);
    const [card_text_slot_3, setCard_text_slot_3] = useState(passedCard?.card_text_slot_3);
    const [card_text_slot_4, setCard_text_slot_4] = useState(passedCard?.card_text_slot_4);
    const [card_text_slot_5, setCard_text_slot_5] = useState(passedCard?.card_text_slot_5);

    
    
    const createCard_name = (e) => setCard_name(e.target.value);
    const createArt = (e) => setArt(e.target.value);
    const createCard_text_slot_1 = (e) => setCard_text_slot_1(e.target.value);
    const createCard_text_slot_2 = (e) => setCard_text_slot_2(e.target.value);
    const createCard_text_slot_3 = (e) => setCard_text_slot_3(e.target.value);
    const createCard_text_slot_4 = (e) => setCard_text_slot_4(e.target.value);
    const createCard_text_slot_5 = (e) => setCard_text_slot_5(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCard = {
           user_id: sessionUser.id,
           game_id: deck.id,
           card_name: card_name,
           art: art,
           card_text_slot_1: card_text_slot_1,
           card_text_slot_2: card_text_slot_2,
           card_text_slot_3: card_text_slot_3,
           card_text_slot_4: card_text_slot_4,
           card_text_slot_5: card_text_slot_5,
        };
        if(passedCard.id){
            newCard.id = passedCard.id
            console.log("edited a card")
            await dispatch(editCardThunk(newCard))
        }
        else{
            console.log("created a new card")
            await dispatch(addCardThunk(newCard))
        }
    
    };
    return (
        <form className="CardInfo CardEdit" onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" onChange={createCard_name} value={card_name}/>
            </div><div>
                <label>Art: </label>
                <input type="text" onChange={createArt} value={art}/>
            </div><div>
                <label>card_text_slot_1: </label>
                <input type="text" onChange={createCard_text_slot_1} value={card_text_slot_1}/>
            </div><div>
                <label>card_text_slot_2: </label>
                <input type="text" onChange={createCard_text_slot_2} value={card_text_slot_2}/>
            </div><div>
                <label>card_text_slot_3: </label>
                <input type="text" onChange={createCard_text_slot_3} value={card_text_slot_3}/>
            </div><div>
                <label>card_text_slot_4: </label>
                <input type="text" onChange={createCard_text_slot_4} value={card_text_slot_4}/>
            </div><div>
                <label>card_text_slot_5: </label>
                <input type="text" onChange={createCard_text_slot_5} value={card_text_slot_5}/>
            </div>
            <button className='submitButton' type='submit'>Submit</button>
        </form>
    )
}

export default CardEdit;