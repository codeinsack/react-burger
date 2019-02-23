import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildController from '../../components/Burger/BuildControls/BuildController';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {
  addIngredient, removeIngredient, initIngredients, purchaseInit, setAuthRedirectPath,
} from '../../store/actions/index';

const mapStateToProps = state => ({
  ingredients: state.burgerBuilder.ingredients,
  price: state.burgerBuilder.totalPrice,
  error: state.burgerBuilder.error,
  isAuthenticated: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
  onIngredientAdded: ingName => dispatch(addIngredient(ingName)),
  onIngredientRemoved: ingName => dispatch(removeIngredient(ingName)),
  onInitIngredients: () => dispatch(initIngredients()),
  onInitPurchase: () => dispatch(purchaseInit()),
  onSetAuthRedirectPath: path => dispatch(setAuthRedirectPath(path)),
});

@connect(mapStateToProps, mapDispatchToProps)

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };

  componentDidMount() {
    const { onInitIngredients } = this.props;
    onInitIngredients();
  }

  updatePurchaseState = () => {
    const { ingredients } = this.props;
    const copyIngredients = {
      ...ingredients,
    };
    const sum = Object
      .values(copyIngredients)
      .reduce((sum, el) => sum + el, 0);

    return sum > 0;
  };

  purchaseHandler = () => {
    const { isAuthenticated, history, onSetAuthRedirectPath } = this.props;
    if (isAuthenticated) {
      this.setState({ purchasing: true });
    } else {
      onSetAuthRedirectPath('/checkout');
      history.push('/auth');
    }
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    const { history, onInitPurchase } = this.props;
    onInitPurchase();
    history.push('/checkout');
  };

  render() {
    const { purchasing } = this.state;
    const {
      ingredients, onIngredientAdded, onIngredientRemoved, price, error, isAuthenticated,
    } = this.props;

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
            ingredientAdded={onIngredientAdded}
            ingredientRemoved={onIngredientRemoved}
            disabled={disabledInfo}
            purchasable={this.updatePurchaseState()}
            ordered={this.purchaseHandler}
            isAuth={isAuthenticated}
            price={price}
          />
        </>

      );
      orderSummary = (
        <OrderSummary
          ingredients={ingredients}
          purchaseCanceled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
          price={price}
        />
      );
    }

    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
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

export default (withErrorHandler(BurgerBuilder, axios));
