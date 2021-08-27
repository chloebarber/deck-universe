import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getDeckListing } from '../../store/deckListing';
import DeckListing from '../DeckListing/DeckListing';
import '../DeckListing/DeckListing.css';
import './MyGames.css';


function MyGames() {


    return (
        <div className="myGamesContainer">
            <h1>My Games</h1>
            <DeckListing filter={"ME"}/>
        </div>
    )
}

export default MyGames