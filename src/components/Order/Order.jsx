import React from 'react';

import Wrapper from './OrderStyled';

const order = ({ ingredients, price }) => {
  const newIngredients = [];

  for (const ingredientName in ingredients) {
    newIngredients.push({
      name: ingredientName,
      amount: ingredients[ingredientName],
    });
  }

  const ingredientOutput = newIngredients
    .map(ig => <span key={ig.name}>{ig.name} ({ig.amount})</span>);

  return (
    <Wrapper>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>USD {price.toFixed(2)}</strong></p>
    </Wrapper>
  );
};

export default order;
