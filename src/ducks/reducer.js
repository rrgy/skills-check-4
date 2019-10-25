const initialState = {
    username: '',
    id: 0,
    picture: '',
}

const GET_USER = 'GET_USER'

export default function reducer(state = initialState, action) {
    switch (action) {
        case GET_USER:
            return state
        default:
            return state
    }
}