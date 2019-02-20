import React from 'react';
import PropTypes from 'prop-types';

import {
  BreadBottom, BreadTop, Seeds1, Seeds2, Meat, Cheese, Salad, Bacon,
} from './BurgerIngredientStyled';

const burgerIngredient = ({ type }) => {
  const ingredient = {
    'bread-bottom': <BreadBottom />,
    'bread-top': (
      <BreadTop>
        <Seeds1 />
        <Seeds2 />
      </BreadTop>
    ),
    meat: <Meat />,
    cheese: <Cheese />,
    salad: <Salad />,
    bacon: <Bacon />,
  };

  return (
    ingredient[type] || null
  );
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default burgerIngredient;
