import React from 'react';

// Buttons Component

function KeyPads(props) {
  const { buttonId, buttonValue, classStyle, handleButtonClick } = props;

  return (
    <button
      type="button"
      id={buttonId}
      value={buttonValue}
      className={classStyle}
      onClick={() => handleButtonClick(buttonValue)}
    >
      {buttonValue}
    </button>
  );
}

export default KeyPads;
