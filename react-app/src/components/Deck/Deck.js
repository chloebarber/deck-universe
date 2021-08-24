import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckById } from '../../store/deck'
import './Deck.css';



function DeckView() {

    const decks = useSelector(state => Object.values(state.decks))
    const dispatch = useDispatch()

    const { deckId } = useParams();

    useEffect(() => {
        dispatch(getDeckById(deckId))
    }, [dispatch]);

    return (
        <div>
            <h1>Viewing Deck 1</h1>
        </div>



    )
}
export default DeckView;