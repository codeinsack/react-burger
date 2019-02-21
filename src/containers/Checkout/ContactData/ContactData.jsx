import React, { Component } from 'react';
import axios from '../../../axios-orders';

import Button from '../../../components/UI/Button/Button';
import Wrapper from './ContactDataStyled';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street',
        },
        value: '',
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code',
        },
        value: '',
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail',
        },
        value: '',
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'cheapest', displayValue: 'Cheapest' }, { value: 'fastest', displayValue: 'Fastets' },
          ],
        },
        value: '',
      },
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
    const { loading, orderForm } = this.state;
    const formElementsArray = [];
    for (const key in orderForm) {
      formElementsArray.push({
        id: key,
        config: orderForm[key],
      });
    }

    let form = (
      <form>
        {formElementsArray.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
          />
        ))}
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
