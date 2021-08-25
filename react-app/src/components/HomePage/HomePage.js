import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { getGames } from '../../store/game'
import './HomePage.css';



function HomePage() {
    // const games = useSelector(state => Object.values(state.games))
    // const gamesArray = Object.values(games)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getGames())
    // }, [dispatch]);

    return (
        <div className="homepage-container">
            <div className="homeInfoBox">
                <h1>Welcome to Deck Universe!</h1>
                <a href='/decks'>Deck Listing</a><p/>
                <a href='/decks/1'>View Deck 1</a><p/>
                <a href='/decks/2'>View Deck 2</a><p/>
                <a href='/decks/5'>View Deck 5</a><p/>
                <a href='/decks/new'>New Deck</a>
            </div>
        </div>



    )
}
export default HomePage;