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
});

const mapDispatchToProps = dispatch => ({
  onFetchOrders: orders => dispatch(fetchOrders(orders)),
});

@connect(mapStateToProps, mapDispatchToProps)

class Orders extends Component {
  componentDidMount() {
    const { onFetchOrders, orders } = this.props;
    onFetchOrders(orders);
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
