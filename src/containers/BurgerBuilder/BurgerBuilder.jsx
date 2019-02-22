import React, { Component } from 'react';
import { connect } from 'react-redux';

import Burger from '../../components/Burger/Burger';
import BuildController from '../../components/Burger/BuildControls/BuildController';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actioTypes from '../../store/actions';

const mapStateToProps = state => ({
  ingredients: state.ingredients,
  price: state.totalPrice,
});

const mapDispatchToProps = dispatch => ({
  onIngredientAdded: ingName => dispatch({
    type: actioTypes.ADD_INGREDIENT,
    ingredientName: ingName,
  }),
  onIngredientRemoved: ingName => dispatch({
    type: actioTypes.REMOVE_INGREDIENT,
    ingredientName: ingName,
  }),
});

@connect(mapStateToProps, mapDispatchToProps)

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false,
  };

  // componentDidMount() {
  //   axios.get('/ingredients.json')
  //     .then((response) => {
  //       this.setState({ ingredients: response.data });
  //     })
  //     .catch(() => {
  //       this.setState({ error: true });
  //     });
  // }

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
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    const { history } = this.props;
    history.push('/checkout');
  };

  render() {
    const { purchasing, loading, error } = this.state;
    const {
      ingredients, onIngredientAdded, onIngredientRemoved, price,
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

export default (withErrorHandler(BurgerBuilder, axios));
