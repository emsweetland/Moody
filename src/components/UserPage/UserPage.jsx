import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import GuyComponent from '../GuyComponent/GuyComponent';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const reflection = useSelector((store) => store.reflection)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REFLECTION' });
  }, [dispatch]);

  console.log({reflection});

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <button    onClick={() => {
            history.push('/past')}}>Past Reflections</button>
      <br />
      <GuyComponent/>
      <br />
      <button    onClick={() => {
            history.push('/new')}}>New Reflection</button>
      <p>Your ID is: {user.id}</p>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
