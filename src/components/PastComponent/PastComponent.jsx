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

  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", hour: 'numeric', hour12: true }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }


  // for (let time of reflection) {
  // // LOOP THRU RESPONSES TO GET TIMESTAMPS
  //    const dateString = time.when
  //    console.log(dateString)

  //    const formatDate = (dateString) => {
  //      const options = {  month: "short", day: "numeric"}
  //      return new Date(dateString).toLocaleDateString(undefined, options)
  //    }

  //    console.log(formatDate(dateString))
  //    return show = formatDate(dateString)
  // //LOOP THRU RESPONSES TO GET TIME STAMPS
  // }









  const reflectionDetail = (id) => {
    console.log(id)
    history.push(`/detail/${id}`)
  }


  return (
    <div>
      <h2>Past Reflections</h2>
      <ul>
        {reflection.map(reflections => {
          //console.log(formatDate(reflections.when)) 
          return (
            <li key={reflections.id} onClick={(() => reflectionDetail(reflections.id))}>
             <p> {formatDate(reflections.when)} </p>
              <img src={reflections.imageurl}></img>
            </li>
          )
        })}
      </ul>


    </div>
  );
}

export default PastComponent;