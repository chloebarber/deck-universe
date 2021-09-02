import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getGames } from '../../store/game'
import { Link } from 'react-router-dom';
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
                <Link to='/decks/1'>View Deck 1</Link><p/>
                <Link to='/decks/2'>View Deck 2</Link><p/>
                <Link to='/decks/5'>View Deck 5</Link><p/>
                <a href='https://github.com/chloebarber/deck-universe'>GitHub Repository</a>
            </div>
        </div>



    )
}
export default HomePage;