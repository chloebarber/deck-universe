import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckListing } from '../../store/deckListing';
import './DeckListing.css';


function DeckListing() {
    const DeckListing = useSelector((state) => state.DeckListing)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getDeckListing())
    }, [dispatch]);

    return (
        <div className="DeckListingContainer">
            <h1>poop</h1>
            {DeckListing.Decks?.map(deck => (
                <div className="deckItem">
                    <a className="gameSplash" href={`/decks/${deck.id}`}>
                        <img src={deck.splash_image} alt={deck.game_name}/>
                    </a>
                    <h1 className="gameName">
                        <a href={`/decks/${deck.id}`}>{deck.game_name}</a>
                    </h1>
                    <div className="gameDescription">{deck.description}</div>
                </div>
            ))}
        </div>
    )
}

export default DeckListing