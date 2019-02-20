import React from 'react';
import Wrapper from './BuildControlStyled';

const BuildControl = ({
  label, added, removed, disabled,
}) => (
  <Wrapper>
    <div className="Label">{label}</div>
    <button onClick={removed} type="button" className="Less" disabled={disabled}>Less</button>
    <button onClick={added} type="button" className="More">More</button>
  </Wrapper>
);

export default BuildControl;
