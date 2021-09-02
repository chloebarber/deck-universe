const GET_DECK_LISTING = 'decks/GET_DECK_LISTING'

const loadDecks = (decks) => {
    return {
        type: GET_DECK_LISTING,
        decks,
    }
}

export const getDeckListing = () => async (dispatch) => {
    const response = await fetch(`/api/decks`)
    if (response.ok) {
        const decks = await response.json()
        await dispatch(loadDecks(decks))
        return response
    }
}

export const getFilteredDeckListing = (filter) => async (dispatch) => {
    const response = await fetch(`/api/decks/filter/${filter.filter}`)
    console.log(filter.filter)
    if (response.ok) {
        const decks = await response.json()
        await dispatch(loadDecks(decks))
        return response
    }
}

const initialState = {}

export default function deckListing(state = initialState, action) {
    let newState;
    switch (action.type) {

        case GET_DECK_LISTING: {
            newState = Object.assign({}, state);
            newState = action.decks;
            return newState;
        }

        default:
            return state
    }
}