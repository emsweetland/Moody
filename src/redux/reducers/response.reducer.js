//this is where the reflections are stored
const responseReducer = (state = { sleepResponse: '', foodResponse: '', waterResponse: '', friendResponse: '', moodResponse: '' }, action) => {
  switch (action.type) {
    case 'NEW_SLEEP':
      return { ...state, sleepResponse: action.payload };
    case 'NEW_FOOD':
      return { ...state, foodResponse: action.payload };
    case 'NEW_WATER':
      return { ...state, waterResponse: action.payload };
    case 'NEW_FRIEND':
      return { ...state, friendResponse: action.payload };
    case 'NEW_MOOD':
      return { ...state, moodResponse: action.payload };
    default:
      return state;
  }
}





export default responseReducer