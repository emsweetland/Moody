import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import reflectionReducer from './reflection.reducer';
import thisReflectionReducer from './thisreflection.reducer';
import responseReducer from './response.reducer';
import postResponseReducer from './postresponse.reducer'
import editResponseReducer from './editresponse.reducer'
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  reflectionReducer, //this GETs all the reflections from the DB
  thisReflectionReducer, //lots of information about one single reflection
  responseReducer, //holding responses to POST to DB
  postResponseReducer, //posting response to db (mood only)
  editResponseReducer //posting response changes to db (mood only)
});

export default rootReducer;
