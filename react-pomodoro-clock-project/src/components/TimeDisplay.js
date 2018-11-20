import React from 'react';

function TimeDisplay(props) {
  const { cycle, display } = props;

  return (
    <div>
      <div id="timer-label"> {cycle}</div>
      <div id="timer-left"> {display} </div>
    </div>
  );
}

export default TimeDisplay;
