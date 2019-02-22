import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
        break;
      case 'dec':
        this.setState(prevState => ({ counter: prevState.counter - 1 }));
        break;
      case 'add':
        this.setState(prevState => ({ counter: prevState.counter + value }));
        break;
      case 'sub':
        this.setState(prevState => ({ counter: prevState.counter - value }));
        break;
      default:
        break;
    }
  };

  render() {
    const { counter } = this.state;

    return (
      <div>
        <CounterOutput value={counter} />
        <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} />
        <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')} />
        <CounterControl label="Add 5" clicked={() => this.counterChangedHandler('add', 5)} />
        <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler('sub', 5)} />
      </div>
    );
  }
}

export default Counter;
