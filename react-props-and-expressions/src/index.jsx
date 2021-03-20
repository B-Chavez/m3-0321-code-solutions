import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
    <CustomButton text="Hurray!" />
  </div>
);

ReactDOM.render(element,
  document.querySelector('#root'));
