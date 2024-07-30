import React, { useState } from 'react';

function Frase() {
  const [state, setState] = useState('Geminba');

  return (
    <>
      <input
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
      <p>
        <strong>Current value:</strong>
        {state}
      </p>
    </>
  );}

export default Frase;