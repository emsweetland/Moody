const deleteResponseReducer = (state = 0, action) => {
    switch (action.type) {
        case'DELETE_RESPONSE_ON_SERVER':
        console.log('action.payload in delete reducer', action.payload)
    return action.payload
    default : return state;
    }
}

export default deleteResponseReducer;