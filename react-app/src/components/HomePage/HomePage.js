import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
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
                <h1 className="welcomeTitle">Welcome to Deck Universe!</h1>
                <p>Deck Universe is a site dedicated to creating and sharing open-source card games. </p>
                <p>Whether you're an aspiring card game designer or just someone looking for a new game to play tonight - Deck Universe has something for you!</p>
                <a href='https://github.com/chloebarber/deck-universe'>GitHub Repository</a>
            </div>
        </div>



    )
}
export default HomePage;