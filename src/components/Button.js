import React from 'react';

function Button(props) {
  return (
    <button key={props.buttonName}>{props.buttonName}</button>
  );
}

export default Button;
