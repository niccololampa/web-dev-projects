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
            buttonValue="AC"
            classStyle="clear"
            handleButtonClick={handleButtonReset}
          />
          <KeyPads
            buttonId="multiply"
            buttonValue="/"
            classStyle="operation"
            handleButtonClick={handleOperations}
          />
          <KeyPads
            buttonId="times"
            buttonValue="*"
            classStyle="operation"
            handleButtonClick={handleOperations}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="seven"
            buttonValue={7}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="eight"
            buttonValue={8}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="nine"
            buttonValue={9}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="four"
            buttonValue={4}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="five"
            buttonValue={5}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="six"
            buttonValue={6}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="normal-rows">
          <KeyPads
            buttonId="one"
            buttonValue={1}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="two"
            buttonValue={2}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="three"
            buttonValue={3}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
        </div>
        <div className="bottom-row">
          <KeyPads
            buttonId="zero"
            buttonValue={0}
            classStyle="calc-num"
            handleButtonClick={handleNumClick}
          />
          <KeyPads
            buttonId="decimal"
            buttonValue="."
            classStyle="calc-num"
            handleButtonClick={handleDecimal}
          />
        </div>
      </div>
      <div className="column-two">
        <KeyPads
          buttonId="subtract"
          buttonValue="-"
          classStyle="subtract"
          handleButtonClick={handleOperations}
        />
        <KeyPads
          buttonId="plus"
          buttonValue="+"
          classStyle="plus"
          handleButtonClick={handleOperations}
        />
        <KeyPads
          buttonId="equals"
          buttonValue="="
          classStyle="equals"
          handleButtonClick={handleButtonEquals}
        />
      </div>
    </div>
  );
}

export default KeyBoard;
