import React from 'react';
import ControlButton from './ControlButton';

function LengthInput(props) {
  const { purpose, id, timeLength, classStyle, clickButtons } = props;

  return (
    <div className={classStyle}>
      <div id={`${id}-label`}> {purpose}</div>
      <div className="input-area">
        <ControlButton
          id={`${id}-decrement`}
          value="-"
          buttonDisplay="-"
          clickButtons={clickButtons}
        />
        <div>{timeLength}</div>
        <ControlButton
          id={`${id}-increment`}
          value="+"
          buttonDisplay="+"
          clickButtons={clickButtons}
        />
      </div>
    </div>
  );
}

export default LengthInput;
