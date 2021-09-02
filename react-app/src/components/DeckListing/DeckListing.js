import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDeckListing, getFilteredDeckListing } from '../../store/deckListing';
import './DeckListing.css';


function DeckListing(filter) {
    const DeckListing = useSelector((state) => state.DeckListing)
    const dispatch = useDispatch()


    useEffect(() => {
        if(filter)
            dispatch(getFilteredDeckListing(filter))
        else
            dispatch(getDeckListing())
    }, [dispatch]);

    return (
        <div className="DeckListingContainer">
            {DeckListing.Decks?.map(deck => (
                <div className="deckItem">
                    <Link className="gameSplash" to={`/decks/${deck.id}`}>
                        <img src={deck.splash_image} alt={deck.game_name}/>
                    </Link>
                    <h1 className="gameName">
                        <Link to={`/decks/${deck.id}`}>{deck.game_name}</Link>
                    </h1>
                    <div className="gameDescription">{deck.description}</div>
                </div>
            ))}
        </div>
    )
}

export default DeckListing