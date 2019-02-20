import React from 'react';

import Wrapper from './BuildControllerStyled';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const buildController = ({
  ingredientAdded, ingredientRemoved, disabled, price, purchasable, ordered
}) => (
  <Wrapper>
    <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => ingredientAdded(ctrl.type)}
        removed={() => ingredientRemoved(ctrl.type)}
        disabled={disabled[ctrl.type]}
      />
    ))}
    <button
      type="button"
      className="order-btn"
      disabled={!purchasable}
      onClick={ordered}
    >
      ORDER NOW
    </button>
  </Wrapper>
);

export default buildController;
