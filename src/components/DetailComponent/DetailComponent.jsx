import React, { useState } from 'react';
import {useSelector} from 'react-redux';

function DetailComponent() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
 

  return (
    <div>
      <h2>Past Reflections</h2>
      <p>date/time</p>
      <ul>
        <li>MOOD</li>
        <li>yea</li>
        <li>noo</li>
        <li>maybe</li>
        <li>soooo</li>
      </ul>

    </div>
  );
}

export default DetailComponent;