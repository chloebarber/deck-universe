const ADD_CARD = 'card/ADD_CARD';


const addCard = (card) => ({
    type: ADD_COMMENT,
    card
})

export const createCard = card => async (dispatch) => {
    const response = await fetch(`/api/cards/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(card)
    })
    if (response.ok) {
        const newCard = await response
        dispatch(addCard(newCard))
    }
    return response
}

export const deleteCard = id => async (dispatch) => {
    const response = await fetch(`/api/cards/${id}/`, {
        method: "DELETE",
    })
    if (response.ok) {
        const newCard = await response
        // dispatch(addCard(newCard))
    }
    return response
}

const initialState = {}

export default function cards(state = initialState, action) {
    // let updatedState = { ...state }
    let newState;
    switch (action.type) {
        case ADD_CARD: {
            newState = {}
            console.log(action.card);
            newState.cards[action.card.id] = action.card
            return newState;
        }
        default:
            return state
    }
}
