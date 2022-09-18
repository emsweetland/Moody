import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
//MUI things
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
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



function EditComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const thisReflection = useSelector((store) => store.thisReflectionReducer);
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  //console.log('params.id', id);
 // console.log('thisReflection', thisReflection);

  const [editMoodResponse, setEditMoodResponse] = useState(0)
  const [editWaterResponse, setEditWaterResponse] = useState(thisReflection[0].response)

  const handleSave = () => {
    //go back to detail view
  }

  const handleMood = () => {
    console.log('edit mood', id)
    setEditMoodResponse(event.target.value)
    history.push(`/editMood/${id}`);
  }

  // const handleWater = () => {
  //   console.log('edit water', id)
  //   setEditWaterResponse(event.target.value)
  //   history.push(`/editWater/${id}`);
  // }
  


  const formatDate = (dateString) => {
    const options = { month: "short", day: "numeric", hour: 'numeric', hour12: true }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (

    <Box>
    <Stack spacing={2}>
    <Item>

    <div>

      <h2>Edit Reflection</h2>
      <p>{formatDate(thisReflection[0].when)}</p>
      {thisReflection[0] && (
        <ul>
          <li onClick={handleMood}>mood : {thisReflection[0].moodname}</li>
          {thisReflection[0].response === null && <li>{thisReflection[0].text}: Tried my best!</li>}
          {thisReflection[0].response === true && <li>{thisReflection[0].text}: Yep!</li>}
          {thisReflection[0].response === false && <li>{thisReflection[0].text}: Nope.</li>}
          {thisReflection[1].response === null && <li>{thisReflection[1].text}: Tried my best!</li>}
          {thisReflection[1].response === true && <li>{thisReflection[1].text}: Yep</li>}
          {thisReflection[1].response === false && <li>{thisReflection[1].text}: Nope</li>}
          {thisReflection[2].response === null && <li>{thisReflection[2].text}: Tried my best!</li>}
          {thisReflection[2].response === true && <li>{thisReflection[2].text}: Yep</li>}
          {thisReflection[2].response === false && <li>{thisReflection[2].text}: Nope</li>}
          {thisReflection[3].response === null && <li>{thisReflection[2].text}: Tried my best!</li>}
          {thisReflection[3].response === true && <li>{thisReflection[2].text}: Yep</li>}
          {thisReflection[3].response === false && <li>{thisReflection[2].text}: Nope</li>}
        </ul>
      )
      }

    </div>

    </Item>
        </Stack>
      </Box>
  );
}

export default EditComponent;