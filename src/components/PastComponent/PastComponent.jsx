import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function PastComponent() {
  // const store = useSelector((store) => store);
  const reflection = useSelector((store) => store.reflectionReducer)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REFLECTION' });
  }, [dispatch]);

  console.log(reflection);

  return (
    <div>
      <h2>Past Reflections</h2>
      <ul>
        {reflection.map(reflections => {
          return (
            <li key={reflections.id} onClick={() => {history.push('/detail')}}>
              {reflections.when}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default PastComponent;