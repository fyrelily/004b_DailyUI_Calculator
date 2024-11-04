import React from 'react';
import './Wrapper.css';

//{children} is a special prop that allows you to pass content between the opening and  closing tags of a component.

function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
