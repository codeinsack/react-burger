import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildController from '../../components/Burger/BuildControls/BuildController';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    axios.get('/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data });
      })
      .catch(() => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState = () => {
    const { ingredients } = this.state;
    const copyIngredients = {
      ...ingredients,
    };
    const sum = Object
      .values(copyIngredients)
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchasable: sum > 0 });
  };

  addIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const price = totalPrice + priceAddition;
    this.setState({
      totalPrice: price,
      ingredients: updatedIngredients,
    }, () => {
      this.updatePurchaseState();
    });
  };

  removeIngredientHandler = (type) => {
    const { ingredients, totalPrice } = this.state;
    const oldCount = ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const price = totalPrice - priceDeduction;
    this.setState({
      totalPrice: price,
      ingredients: updatedIngredients,
    }, () => {
      this.updatePurchaseState();
    });
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    const { history } = this.props;
    const { ingredients, totalPrice } = this.state;
    const queryParams = [];

    for (const i in ingredients) {
      queryParams.push(`${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`);
    }

    queryParams.push(`price=${totalPrice}`);
    const queryString = queryParams.join('&');

    history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  render() {
    const {
      ingredients, totalPrice, purchasable, purchasing, loading, error,
    } = this.state;
    const disabledInfo = {
      ...ingredients,
    };
    let burger = error ? <p>Ingredients can not be loaded!</p> : <Spinner />;
    let orderSummary = null;

    if (ingredients) {
      burger = (
        <>
          <Burger ingredients={ingredients} />
          <BuildController
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchasable={purchasable}
            ordered={this.purchaseHandler}
            price={totalPrice}
          />
        </>

      );
      orderSummary = (
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={totalPrice}
        />
      );
    }

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }


    if (loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal show={purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
