//this is where the reflections are stored
const editResponseReducer = (state = { sleepResponse: '', foodResponse: '', waterResponse: '', friendResponse: '', moodResponse: '' }, action) => {
    switch (action.type) {
      case 'EDIT_SLEEP':
        return { ...state, sleepResponse: action.payload };
      case 'EDIT_FOOD':
        return { ...state, foodResponse: action.payload };
      case 'EDIT_WATER':
        return { ...state, waterResponse: action.payload };
      case 'EDIT_FRIEND':
        return { ...state, friendResponse: action.payload };
      case 'EDIT_MOOD':
        return { ...state, moodResponse: action.payload };
      default:
        return state;
    }
  }
  
  
  
  
  
  export default editResponseReducer