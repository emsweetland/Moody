import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'

function PastComponent() {
  const store = useSelector((store) => store);
  const history = useHistory();

  return (
    <div>
      <h2>Past Reflections</h2>
      <ul>
        <li onClick={() => {
            history.push('/detail')}}>date/time /mood</li>
        <li>date/time /mood</li>
        <li>date/time /mood</li>
        <li>date/time /mood</li>
        <li>date/time /mood</li>
      </ul>
    </div>
  );
}

export default PastComponent;