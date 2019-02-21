import React, { Component } from 'react';
import axios from '../../axios-orders';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios.get('/orders.json')
      .then((res) => {
        const fetchedOrders = [];
        for (const key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({
          loading: false,
          orders: fetchedOrders,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    const { orders, loading } = this.state;
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
