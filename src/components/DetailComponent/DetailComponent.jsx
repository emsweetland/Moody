import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';

function DetailComponent(id) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const thisReflection = useSelector (store => store.thisReflectionReducer);

  const dispatch = useDispatch();

  //loads the reflection for this id
  // useEffect(() => {
  //   dispatch({type: 'FETCH_THIS_REFLECTION'});
  // }, [dispatch]);

  console.log(thisReflection)

  return (
    <div>
      <h2>Past Reflections</h2>
      <p>date/time</p>
      <ul>
        <li>MOOD{thisReflection.mood}</li>
        <li>yea</li>
        <li>noo</li>
        <li>maybe</li>
        <li>soooo</li>
      </ul>

    </div>
  );
}

export default DetailComponent;