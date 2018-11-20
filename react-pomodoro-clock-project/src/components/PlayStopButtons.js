import React from 'react';
import ControlButton from './ControlButton';

function PlayStopButtons(props) {
  const { classStyle, clickButtons } = props;
  return (
    <div className={classStyle}>
      <ControlButton
        id="start_stop"
        value="start_stop"
        buttonDisplay="PLAY"
        clickButtons={clickButtons}
      />
      <ControlButton
        id="reset"
        value="reset"
        buttonDisplay="RESET"
        clickButtons={clickButtons}
      />
    </div>
  );
}

export default PlayStopButtons;
