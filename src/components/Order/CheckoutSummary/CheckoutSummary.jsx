import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import Wrapper from './CheckoutSummaryStyled';

const checkoutSummary = ({ ingredients, checkoutCancelled, checkoutContinued }) => (
  <Wrapper>
    <h1>We hope it tastes well!</h1>
    <div style={{ width: '100%', margin: 'auto' }}>
      <Burger ingredients={ingredients} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button clicked={checkoutContinued} btnType="success">CONTINUE</Button>
        <Button clicked={checkoutCancelled} btnType="danger">CANCEL</Button>
      </div>
    </div>
  </Wrapper>
);

export default checkoutSummary;
