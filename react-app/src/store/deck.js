const GET_DECK = 'decks/GET_DECK'

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


const initialState = {}

export default function decks(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_DECK: {
            newState = Object.assign({}, state);
            newState = action.deck;
            return newState;
        }

        default:
            return state
    }
}