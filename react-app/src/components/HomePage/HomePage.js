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
                <p>Deck Universe is a way to share and print open-source card games!</p>
                <a href='https://github.com/chloebarber/deck-universe'>GitHub Repository</a>
            </div>
        </div>



    )
}
export default HomePage;