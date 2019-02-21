import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    price: 0,
  };

  componentWillMount() {
    const { location: { search } } = this.props;
    const query = new URLSearchParams(search);
    const ingredients = {};
    let price = 0;

    for (const param of query.entries()) {
      if (param[0] === 'price') {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({ ingredients, price });
  }

  checkoutCancelledHandler = () => {
    const { history } = this.props;
    history.goBack();
  };

  checkoutContinuedHandler = () => {
    const { history } = this.props;
    history.replace('/checkout/contact-data');
  };

  render() {
    const { ingredients, price } = this.state;
    const { match } = this.props;

    return (
      <div>
        <CheckoutSummary
          ingredients={ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={`${match.path}/contact-data`}
          render={props => <ContactData {...props} ingredients={ingredients} price={price} />}
        />
      </div>
    );
  }
}

export default Checkout;
