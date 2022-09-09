import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function PastComponent() {
  // const store = useSelector((store) => store); //not using this one rn
 //reflectionReducer comes from _root.reducer.js (actually from reflection.reducer.js)
  const reflection = useSelector((store) => store.reflectionReducer)
  
  const history = useHistory();
  const dispatch = useDispatch();


  //this guy loads all of the reflections for the user on load
  useEffect(() => {
    dispatch({ type: 'FETCH_REFLECTION' });
  }, [dispatch]);

  console.log(reflection);

  const reflectionDetail = (id) => {
    console.log(id)
    dispatch({ type: 'GET_THIS_REFLECTION', payload: id})
    history.push(`/detail/${id}`)
  }


  return (
    <div>
      <h2>Past Reflections</h2>
      <ul>
        {reflection.map(reflections => {
          return (
            <li key={reflections.id} onClick={(() => reflectionDetail(reflections.id))}>
              {reflections.when}
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default PastComponent;