import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Wrapper from './ContactDataStyled';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    const { ingredients, price, history } = this.props;

    this.setState({ loading: true });
    const order = {
      ingredients,
      price,
      customer: {
        name: 'Eugene Furmanov',
        address: {
          street: 'Lenina, 33',
          zipCode: '220113',
          country: 'New Zealand',
        },
        email: 'rind@mail.com',
      },
      deliveryMethod: 'fastest',
    };

    axios.post('/orders.json', order)
      .then(() => {
        this.setState({ loading: false });
        history.push('/');
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { loading } = this.state;
    let form = (
      <form>
        <input className="Input" type="text" name="name" placeholder="Your Name" />
        <input className="Input" type="text" name="email" placeholder="Your Email" />
        <input className="Input" type="text" name="street" placeholder="Street" />
        <input className="Input" type="text" name="postal" placeholder="Postal Code" />
        <Button btnType="success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (loading) {
      form = <Spinner />;
    }
    return (
      <Wrapper>
        <h4>Enter your Contact Data</h4>
        {form}
      </Wrapper>
    );
  }
}

export default ContactData;
