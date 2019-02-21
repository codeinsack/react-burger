import React from 'react';
import Radium from 'radium';

import { inputElementStyle, inputStyle, labelStyle } from './InputStyled';

const input = (props) => {
  const { inputtype, label, value } = props;
  const choice = {
    input: <input
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
    />,
    textarea: <textarea
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
    />,
  };

  const inputElement = choice[inputtype]
    || (
    <input
      style={inputElementStyle}
      {...props.elementConfig}
      value={value}
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
