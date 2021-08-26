const GET_DECK = 'decks/GET_DECK'
const ADD_CARD = 'card/ADD_CARD';
const DELETE_CARD = 'card/DELETE_CARD'

const addCard = (card) => {
    return {
        type: ADD_CARD,
        card,
    }
}
const deleteCard = (card) => {
    return {
        type: DELETE_CARD,
        card,
    }
}

const loadDeck = (deck) => {
    return {
        type: GET_DECK,
        deck,
    }
}


export const getDeckById = (deckId) => async (dispatch) => {
    const response = await fetch(`/api/decks/${deckId}`)

    if (response.ok) {
        const deck = await response.json()
        await dispatch(loadDeck(deck))
        return response
    }
}

export const addCardThunk = card => async (dispatch) => {
    const response = await fetch(`/api/cards`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
    if (response.ok) {
        const newCard = await response.json()
        await dispatch(addCard(newCard))
    }
    return response
}

export const deleteCardThunk = id => async (dispatch) => {
    const response = await fetch(`/api/cards/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const oldCard = await response.json()
        dispatch(deleteCard(oldCard))
    }
    return response
}


const initialState = {}

export default function decks(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_DECK: {
            newState = Object.assign({}, state);
            newState = action.deck;
            return newState;
        }
        case ADD_CARD: {
            newState = Object.assign({}, state);
            newState.Cards.push(action.card.card)
            return newState;
        }
        case DELETE_CARD: {
            newState = {...state};
            for (let i=0; i<newState.Cards.length; i++){
                if (newState.Cards[i].id === action.card.id)
                    newState.Cards.splice(i, 1);
            }
            return newState;
        }
        

        default:
            return state
    }
}