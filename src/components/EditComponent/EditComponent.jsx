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


function EditComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const thisReflection = useSelector((store) => store.thisReflectionReducer);
  let { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  console.log('params.id', id);
  console.log('thisReflection', thisReflection);

  const [editMoodResponse, setEditMoodResponse] = useState(0)

  const handleSave = () => {
    //go back to detail view
  }

  const handleMood = () => {
    console.log('edit mood', id)
    setEditMoodResponse(event.target.value)
    history.push(`/editMood/${id}`);
  }


  return (

    <div>

      <h2>Past Reflections</h2>
      <p>date/time</p>
      {thisReflection[0] && (
        <ul>
          <li onClick={handleMood}>mood : {thisReflection[0].moodname}</li>
          <li >{thisReflection[0].text} {thisReflection[0].response.toString()}</li>
          <li>{thisReflection[1].text} {thisReflection[1].response.toString()}</li>
          <li>{thisReflection[2].text} {thisReflection[2].response.toString()}</li>
          <li>{thisReflection[3].text} {thisReflection[3].response.toString()}</li>
        </ul>
      )
      }
      <IconButton aria-label="edit">
        <SaveAltIcon onClick={handleSave} />
      </IconButton>
    </div>
  );
}

export default EditComponent;