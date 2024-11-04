import { useState } from 'react';
import './App.css';
import CalcButtons, { ClearButton, OperatorButtons } from './CalcButtons';
import MainDisplay from './MainDisplay';

function App() {
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState([0]);
  const [display, setDisplay] = useState([]);

  function handleClick(event) {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const operators = ['C', 'Undo', '%', '+/-', 'X', '/', '-', '+'];

    let input =
      numbers.findIndex((item) => item === event.target.innerHTML) > 0
        ? setDisplay((prevVal) => {
            return [prevVal, event.target.innerHTML];
          })
        : operators.find((item) => item === event.target.innerHTML);

    console.log(setHistory(input));
    // typeof input === 'number' ? updateDisplay(input) : performCalc(input);
  }

  function updateDisplay(input) {
    // setDisplay((prevVal) => {
    //   let newValue = prevVal + input;
    //   return [newValue];
    console.log(display);
  }

  function performCalc(operator) {
    switch (operator) {
      case 'X':
        setHistory(display[display.length - 2] * display[display.length - 1]);

        break;
      default:
        break;
    }
  }

  // function multiply() {
  //   prevVal * currentValue;
  // }

  // function divide() {
  //   prevVal / currentValue;
  // }

  // function subtract() {
  //   prevVal - currentValue;
  // }

  // function add() {
  //   prevVal + currentValue;
  // }

  return (
    <>
      <div className="calc-body">
        <div className="history-container">{history}</div>
        <MainDisplay display={display} />
        <div onClick={handleClick} className="row">
          <ClearButton icon="C" />
          <OperatorButtons icon="Undo" />
          <OperatorButtons icon="+/-" />
          <OperatorButtons icon="%" />
        </div>
        <div onClick={handleClick} className="row">
          <CalcButtons icon="7" />
          <CalcButtons icon="8" />
          <CalcButtons icon="9" />
          <OperatorButtons icon="/" />
        </div>
        <div onClick={handleClick} className="row">
          <CalcButtons icon="4" />
          <CalcButtons icon="5" />
          <CalcButtons icon="6" />
          <OperatorButtons icon="X" />
        </div>
        <div onClick={handleClick} className="row">
          <CalcButtons icon="1" />
          <CalcButtons icon="2" />
          <CalcButtons icon="3" />
          <OperatorButtons icon="-" />
        </div>
        <div onClick={handleClick} className="row">
          <CalcButtons icon="0" />
          <CalcButtons icon="." />
          <CalcButtons icon="=" />
          <OperatorButtons icon="+" />
        </div>
      </div>
    </>
  );
}

export default App;
