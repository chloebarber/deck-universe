import React, { useState, Redirect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createDeckThunk, editDeckThunk, deleteDeckThunk } from '../../../store/deck';
import { useHistory } from 'react-router-dom';
import '../DeckView.css'
import './DeckEdit.css'



function DeckEdit(passedDeck){
    passedDeck = passedDeck?.deck

    const sessionUser = useSelector(state => state.session.user)
    const deckId = useSelector(state => state.SelectedDeck?.Deck?.id)
    
    const [game_name, setGame_name] = useState(passedDeck?.game_name);
    const [splash_image, setSplash_image] = useState(passedDeck?.splash_image);
    const [rules, setRules] = useState(passedDeck?.rules);
    const [description, setDescription] = useState(passedDeck?.description);

    
    const createGame_name = (e) => setGame_name(e.target.value);
    const createSplash_image = (e) => setSplash_image(e.target.value);
    const createRules = (e) => setRules(e.target.value);
    const createDescription = (e) => setDescription(e.target.value);

    const dispatch = useDispatch();
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newDeck = {
            owner_id: sessionUser.id,
            game_name: game_name,
            splash_image: splash_image,
            rules: rules,
            description: description,
        };
        if(!game_name){
            alert("Games at least have to have a name!")
        }
        else if(passedDeck?.id){
            newDeck.id = passedDeck.id
            alert("edited a game")
            await dispatch(editDeckThunk(newDeck))
        }
        else{
            alert("created a new game")
            await dispatch(createDeckThunk(newDeck))
            console.log(deckId)
            history.push(`/decks/${deckId}`);
        }
    
    };

    function handleDeleteDeck(e) {
        e.preventDefault();
        return dispatch(deleteDeckThunk(passedDeck.id))
            .catch(async (res) => {
                await res.json();
            });
    }
    
    return (
                <form className="deckDiv" onSubmit={handleSubmit}>    
                    <div className="gameArt">
                        <h2>Splash Image URL</h2>
                        <input type="text" id="editArt" onChange={createSplash_image} value={splash_image}/>  
                    </div>
                    <div className="gameDesc">
                        <h2>Edit Deck Name</h2>
                        <input type="text" id="editDeckName" onChange={createGame_name} value={game_name}/>  
                        <h2>Edit Description</h2>
                        <textarea onChange={createDescription} value={description}/>
                    </div>
                    <div className="gameRules">
                        <h2>Edit Rules</h2>
                        <textarea onChange={createRules} value={rules}/>
                        <div className="saveAndDelete">
                            <button id="saveButton" type='submit'>Save Changes</button>
                            <button id="deleteButton"onClick={(e) => handleDeleteDeck(e)}>Delete Deck</button>
                        </div>
                    </div>
                </form>

    )
}

export default DeckEdit;