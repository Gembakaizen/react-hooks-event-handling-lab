import React from "react";

function Keypad() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <input
        type="password"
        onChange={event => console.log('Entering password...')}
      />
    </div>
  );
}

export default Keypad;