import React from 'react';

function ControlButton(props) {
  const { id, classStyle, value, clickButtons, buttonDisplay } = props;

  return (
    <div>
      <button
        type="button"
        id={id}
        value={value}
        className={classStyle}
        onClick={() => clickButtons(value)}
      >
        {buttonDisplay}
      </button>
    </div>
  );
}

export default ControlButton;
