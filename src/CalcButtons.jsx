import React from 'react';
import './CalcButtons.css';

function CalcButtons(props) {
  return <div className={`calc-btn number`}>{props.icon}</div>;
}

function OperatorButtons(props) {
  return <div className={`calc-btn operator`}>{props.icon}</div>;
}

function ClearButton(props) {
  return <div className={`calc-btn clear`}>{props.icon}</div>;
}

export default CalcButtons;
export { OperatorButtons, ClearButton };
