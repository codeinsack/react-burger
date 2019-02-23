import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchOrders } from '../../store/actions';

const mapStateToProps = state => ({
  orders: state.order.orders,
  loading: state.order.loading,
  token: state.auth.token,
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: (token, userId) => dispatch(fetchOrders(token, userId)),
});

@connect(mapStateToProps, mapDispatchToProps)

class Orders extends Component {
  componentDidMount() {
    const { onFetchOrders, token, userId } = this.props;
    onFetchOrders(token, userId);
  }

  render() {
    const { orders, loading } = this.props;
    let outputOrders = (
      orders.map(order => (
        <Order
          key={order.id}
          ingredients={order.ingredients}
          price={+order.price}
        />
      ))
    );
    if (loading) {
      outputOrders = <Spinner />;
    }
    return (
      <div>
        {outputOrders}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
