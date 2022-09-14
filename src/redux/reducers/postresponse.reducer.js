const postResponseReducer = (state = 0, action) => {
    switch (action.type) {
        case'POST_RESPONSE_TO_SERVER':
        console.log('action.payload in postresponseReducer', action.payload)
    return action.payload
    default : return state;
    }
}

export default postResponseReducer;