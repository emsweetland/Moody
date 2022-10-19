import './PastComponent.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

//mUI TINGS
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#eef0ae',
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



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



  const reflectionDetail = (id) => {
    console.log(id)
    history.push(`/detail/${id}`)
  }


  return (
    
    <Box>
    <Stack spacing={2}>
      <Item>
    <div>
    <h2>Past Reflections</h2>

            <ul className="mojis">

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
    </Item>
        </Stack>
      </Box>
  );
}

export default PastComponent;