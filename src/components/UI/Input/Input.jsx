import React from 'react';
import Radium from 'radium';

import styled from 'styled-components';
import {
  inputElementStyle, inputStyle, labelStyle,
} from './InputStyled';

const input = (props) => {
  const {
    elementType, label, value, elementConfig, changed, invalid, shouldValidate, touched,
  } = props;

  if (invalid && shouldValidate && touched) {
    inputElementStyle.border = '1px solid red';
    inputElementStyle.backgroundColor = '#fda49a';
  } else {
    inputElementStyle.border = '1px solid #ccc';
    inputElementStyle.backgroundColor = 'white';
  }

  const choice = {
    input: <input
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
      onChange={changed}
    />,
    textarea: <textarea
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
      onChange={changed}
    />,
    select:
  <select
    style={inputElementStyle}
    value={value}
    onChange={changed}
  >
    {elementConfig.options ? elementConfig.options.map(option => (
      <option key={option.value} value={option.value}>{option.displayValue}</option>
    )) : null}
  </select>,
  };

  const inputElement = choice[elementType]
    || (
    <input
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
      onChange={changed}
    />
    );

  return (
    <div className={inputStyle}>
      <label className={labelStyle}>{label}</label>
      {inputElement}
    </div>
  );
};

export default Radium(input);
