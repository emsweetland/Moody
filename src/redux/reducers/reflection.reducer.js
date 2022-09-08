//this is where the reflections are stored
const reflectionReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_REFLECTION':
        return action.payload;
      default:
        return state;
    }
  }


  export default reflectionReducer;