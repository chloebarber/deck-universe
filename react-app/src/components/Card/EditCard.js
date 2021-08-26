import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addCardThunk } from '../../store/deck'
import './Card.css'

export default function CardEdit(){

    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user)
    const deck = useSelector((state) => state.decks?.Deck)
    
    const [card_name, setCard_name] = useState();
    const [art, setArt] = useState();
    const [card_text_slot_1, setCard_text_slot_1] = useState();
    const [card_text_slot_2, setCard_text_slot_2] = useState();
    const [card_text_slot_3, setCard_text_slot_3] = useState();
    const [card_text_slot_4, setCard_text_slot_4] = useState();
    const [card_text_slot_5, setCard_text_slot_5] = useState();
    
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
        await dispatch(addCardThunk(newCard))
    
    };

    return (
        <form className="CardInfo CardEdit" onSubmit={handleSubmit}>
            {/* <div className="CardName">{card.card_name}</div>
            <img className="art" src={card.splash_image}/>
            <div className="card_text_slot_1">{card.card_text_slot_1}</div>
            <div className="card_text_slot_2"></div>
            <div className="card_text_slot_3"></div>
            <div className="card_text_slot_4"></div> */}
            <label>Card Name</label>
            <input type="text" onChange={createCard_name}/>
            <label>Art</label>
            <input type="text" onChange={createArt}/>
            <label>card_text_slot_1</label>
            <input type="text" onChange={createCard_text_slot_1}/>
            <label>card_text_slot_2</label>
            <input type="text" onChange={createCard_text_slot_2}/>
            <label>card_text_slot_3</label>
            <input type="text" onChange={createCard_text_slot_3}/>
            <label>card_text_slot_4</label>
            <input type="text" onChange={createCard_text_slot_4}/>
            <label>card_text_slot_5</label>
            <input type="text" onChange={createCard_text_slot_5}/>

            <button className='submitButton' type='submit'>Submit</button>
        </form>
    )
}