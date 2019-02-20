import React from 'react';
import Wrapper from './BurgerStyled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = () => (
  <Wrapper>
    <BurgerIngredient type="bread-top" />
    <BurgerIngredient type="cheese" />
    <BurgerIngredient type="meat" />
    <BurgerIngredient type="bread-bottom" />
  </Wrapper>
);

export default burger;
