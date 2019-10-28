
const initialState = {
    username: '',
    id: 0,
    picture: '',
}

const GET_USER = 'GET_USER'

export const actionBuilder = (id, username, picture) => {
    return {
        type: 'GET_USER',
        payload: { id, username, picture }
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return { ...state }
        default:
            return state
    }
}