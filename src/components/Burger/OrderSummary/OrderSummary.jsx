import React from 'react';

import Wrapper from './OrderSummaryStyled';
import Button from '../../UI/Button/Button';

const MyComponent = ({ ingredients, purchaseCanceled, purchaseContinued, price }) => {
  const ingredientSummary = Object.keys(ingredients)
    .map(key => <li key={key}><span>{key}</span>: {ingredients[key]}</li>);

  return (
    <Wrapper>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total Price: {price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <div style={{ display: 'flex' }}>
        <Button type="button" clicked={purchaseContinued} btnType="success">CONTINUE</Button>
        <Button type="button" clicked={purchaseCanceled} btnType="danger">CANCEL</Button>
      </div>
    </Wrapper>
  );
};

export default MyComponent;
