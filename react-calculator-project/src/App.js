import React, { Component } from 'react';
import KeyBoard from './components/KeyBoard';
import Display from './components/Display';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      display: '0',
      readyCalc: false,
      displayLimitReached: false,
      err: false,
      numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      operations: ['/', '*', '-', '+']
    };

    this.handleNumClick = this.handleNumClick.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperations = this.handleOperations.bind(this);
    this.handleButtonEquals = this.handleButtonEquals.bind(this);
    this.handleButtonReset = this.handleButtonReset.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', event => {
      const { numbers, operations } = this.state;

      if (numbers.indexOf(event.key) !== -1) {
        this.handleNumClick(event.key);
      } else if (operations.indexOf(event.key) !== -1) {
        this.handleOperations(event.key);
      } else if (event.key === '.') {
        this.handleDecimal();
      } else if (event.key === 'Enter') {
        this.handleButtonEquals();
      } else if (event.key === 'Clear') {
        this.handleButtonReset();
      }
    });
  }

  // to place the scroll of the input placed in the rightmost when oveflow occurs
  componentDidUpdate() {
    const element = document.getElementById('input');
    element.scrollLeft = element.scrollWidth;
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', event => {
      const valuesArray = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        '/',
        '*',
        '-',
        '+',
        'Enter'
      ];
      if (valuesArray.indexOf(event.key) !== -1) {
        this.handleButtonClick(event.key);
      }
    });
  }

  handleNumClick(keyVal) {
    const { input, display, operations, displayLimitReached, err } = this.state;
    let newInput = input.slice();
    let newDisplay = display.slice();

    if (display.length === 10) {
      this.setState({ displaylimitReached: true });
      return;
    }

    // execute only if display limit is not met
    if (displayLimitReached === false && err === false) {
      // clear input of previous operation resulting from equals

      if (input.indexOf('=') > -1 || display === '0') {
        newInput = '';
        newDisplay = '';
      }

      newInput = newInput.concat(keyVal);
      newDisplay = newDisplay.concat(keyVal);

      // clear display if operation is displayed
      if (operations.indexOf(display) > -1) {
        newDisplay = String(keyVal);
      }

      this.setState({ input: newInput, display: newDisplay });
    }
  }

  handleDecimal(keyVal) {
    const { input, display, operations, displayLimitReached, err } = this.state;
    let newInput = input.slice();
    let newDisplay = display.slice();

    if (display.length === 10) {
      this.setState({ displaylimitReached: true });
      return;
    }

    // only execcute if max is not reached {}
    if (displayLimitReached === false && err === false) {
      // clear input of previous operation resulting from equals

      if (input.indexOf('=') > -1) {
        newInput = '0.';
        newDisplay = '0.';
      }

      // if no decimal yet run
      if (newDisplay.indexOf('.') === -1) {
        if (input === '' || operations.indexOf(display) > -1) {
          newInput = newInput.concat('0.');
          newDisplay = '0.';
        } else {
          newInput = newInput.concat(keyVal);
          newDisplay = newDisplay.concat(keyVal);
        }
      }
      this.setState({ input: newInput, display: newDisplay });
    }
  }

  handleOperations(keyVal) {
    const { input, operations, err } = this.state;
    let newInput = input.slice(0);

    if (err === false) {
      // clear input of previous operation resulting from equals

      if (input.indexOf('=') > -1) {
        newInput = newInput.slice(input.indexOf('=') + 1);
      }

      const lastCharInput = input.substr(input.length - 1);

      // if last character is decimal put 0 after it

      if (lastCharInput === '.') {
        newInput = newInput.concat('0');
      }

      // no operations in the beginning and no consectuive operations in the input
      if (input !== '' && operations.indexOf(lastCharInput) === -1) {
        newInput = newInput.concat(keyVal);
        this.setState({ input: newInput, display: keyVal, readyCalc: true });
      }
    }
  }

  handleButtonEquals() {
    const { input, operations, readyCalc, err } = this.state;

    // remove operations char at the end of input string before executing operation

    let newInput = input.slice();
    const lastCharInput = input.substr(input.length - 1);

    if (operations.indexOf(lastCharInput) > -1) {
      newInput = input.slice(0, input.length - 1);
    }

    // conditional check before execution so not to display operations at the beginning of string.
    // AND display doesnt' have equal in it.
    // AND check if there is an operation already
    if (
      input !== '' &&
      input.indexOf('=') === -1 &&
      readyCalc === true &&
      err === false
    ) {
      const command = `return(${newInput})`;

      const computed = new Function(command)();

      let newResult = String(Math.round(computed * 10000) / 10000);

      if (newResult.length <= 18) {
        this.setState({
          input: `${newInput}=${newResult}`,
          display: newResult,
          readyCalc: false,
          displayLimitReached: false
        });
      } else {
        newResult = ' ERROR MAX LIMIT REACHED';
        this.setState({
          display: newResult,
          readyCalc: false,
          displayLimitReached: true,
          err: true
        });
      }
    }
  }

  handleButtonReset() {
    this.setState({
      input: '',
      display: '0',
      readyCalc: false,
      displayLimitReached: false,
      err: false
    });
  }

  render() {
    const { input, display } = this.state;
    return (
      <div className="App">
        <Display input={input} display={display} />
        <KeyBoard
          handleNumClick={this.handleNumClick}
          handleDecimal={this.handleDecimal}
          handleOperations={this.handleOperations}
          handleButtonEquals={this.handleButtonEquals}
          handleButtonReset={this.handleButtonReset}
        />
        <div> Designed by Niccolo Lampa. For demo purposes only.</div>
      </div>
    );
  }
}

export default App;
