import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import LengthInput from './components/LengthInput';
import TimeDisplay from './components/TimeDisplay';
import PlayStopButtons from './components/PlayStopButtons';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timeDisplayed: 25,
      countdown: false,
      sessionNow: true
    };

    this.handlePlayStopButtons = this.handlePlayStopButtons.bind(this);
    this.handleSessionInput = this.handleSessionInput.bind(this);
    this.handleBreakInput = this.handleBreakInput.bind(this);
  }

  handlePlayStopButtons(type) {
    const { countdown } = this.state;

    // if start/stop is pressed
    if (type === 'start_stop') {
      this.setState({ countdown: !countdown });
    }
    // if reset is pressed bring back to default
    else if (type === 'reset') {
      this.setState({
        sessionLength: 25,
        breakLength: 5,
        timeDisplayed: 25,
        countdown: false,
        sessionNow: true
      });
    }
  }

  handleSessionInput(type) {
    const { sessionLength, countdown } = this.state;

    /* only execute when countdown is not ongoing    */
    if (countdown === false) {
      let newSessionLength = sessionLength;

      /* add or subract minutes only if 
      greater than 0 and lower than or equal to 60 */
      if (type === '+' && sessionLength < 60) {
        newSessionLength += 1;
      } else if (type === '-' && sessionLength > 0) {
        newSessionLength -= 1;
      }

      this.setState({
        sessionLength: newSessionLength,
        timeDisplayed: newSessionLength
      });
    }
  }

  handleBreakInput(type) {
    const { breakLength, countdown } = this.state;

    /* only execute when countdown is not ongoing    */
    if (countdown === false) {
      let newBreakLength = breakLength;

      /* add or subract minutes only if 
      greater than 0 and lower than or equal to 60 */
      if (type === '+' && breakLength < 60) {
        newBreakLength += 1;
      } else if (type === '-' && breakLength > 0) {
        newBreakLength -= 1;
      }

      this.setState({ breakLength: newBreakLength });
    }
  }

  render() {
    const {
      sessionLength,
      breakLength,
      timeDisplayed,
      sessionNow
    } = this.state;
    return (
      <div className="App">
        <div className="title-area"> POMODORO CLOCK </div>
        <div className="play-stop-area">
          <PlayStopButtons
            classStyle=""
            clickButtons={this.handlePlayStopButtons}
          />
        </div>
        <div className="time-area">
          <TimeDisplay display={timeDisplayed} cycle={sessionNow} />
        </div>

        <div className="input-area">
          <LengthInput
            purpose="Session Length"
            id="session"
            timeLength={sessionLength}
            classStyle=""
            clickButtons={this.handleSessionInput}
          />
          <LengthInput
            purpose="Break Length"
            id="break"
            timeLength={breakLength}
            classStyle=""
            clickButtons={this.handleBreakInput}
          />
        </div>
      </div>
    );
  }
}

export default App;
