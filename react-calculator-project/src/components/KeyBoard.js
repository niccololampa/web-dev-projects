import React from 'react';
import KeyPads from './KeyPads';
import './KeyBoard.css';

// KeyBoard Component collection of KeyPads

function KeyBoard(props) {
  const {
    handleNumClick,
    handleDecimal,
    handleOperations,
    handleButtonEquals,
    handleButtonReset
  } = props;

  return (
    <div className="keyboard">
      <div className="column-one">
        <div className="normal-rows">
          <KeyPads
            buttonId="clear"
            name="Clear"
            buttonValue="AC"
            classStyle="clear"
            handleButtonClick={handleButtonReset}
          />
          <KeyPads
            buttonId="multiply"
            name="/"
            buttonValue="/"
            classStyle="operation"
            handleButtonClick={handleOperations}
          />
          <KeyPads
            buttonId="times"
            name="*"
            buttonValue="*"
            classStyle="operation"
            handleButtonClick={handleOperations}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="seven"
            name="7"
            buttonValue={7}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="eight"
            name="8"
            buttonValue={8}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="nine"
            name="9"
            buttonValue={9}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="four"
            name="4"
            buttonValue={4}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="five"
            name="5"
            buttonValue={5}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="six"
            name="6"
            buttonValue={6}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="one"
            name="1"
            buttonValue={1}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="two"
            name="2"
            buttonValue={2}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="three"
            name="3"
            buttonValue={3}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="bottom-row">
          <KeyPads
            buttonId="zero"
            name="0"
            buttonValue={0}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="decimal"
            name="."
            buttonValue="."
            classStyle="calc-num"
            handleButtonClick={handleDecimal}
          />
        </div>
      </div>
      <div className="column-two">
        <KeyPads
          buttonId="subtract"
          name="-"
          buttonValue="-"
          classStyle="subtract"
          handleButtonClick={handleOperations}
        />
        <KeyPads
          buttonId="plus"
          name="+"
          buttonValue="+"
          classStyle="plus"
          handleButtonClick={handleOperations}
        />
        <KeyPads
          buttonId="equals"
          name="Enter"
          buttonValue="="
          classStyle="equals"
          handleButtonClick={handleButtonEquals}
        />
      </div>
    </div>
  );
}

export default KeyBoard;
