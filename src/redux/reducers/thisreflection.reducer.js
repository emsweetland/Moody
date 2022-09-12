//this is where an individual reflection is stored
 const thisReflectionReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_THIS_REFLECTION':
        return action.payload;
      default:
        return state
    }
  }

  export default thisReflectionReducer