import React from 'react';
import Wrapper from './BurgerStyled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  let transformIngredients = Object
    .keys(ingredients)
    .map(key => [...Array(ingredients[key])]
      .map((_, index) => <BurgerIngredient key={key + index} type={key} />))
    .reduce((arr, el) => arr.concat(el), []);

  if (!transformIngredients.length) {
    transformIngredients = <p>Please start adding ingredients!</p>
  }

  return (
    <Wrapper>
      <BurgerIngredient type="bread-top" />
      {transformIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Wrapper>
  );
};

export default burger;
