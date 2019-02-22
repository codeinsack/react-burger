import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increment, decrement, sub, add, storeResult, deleteResult
} from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const mapStateToProps = state => ({
  counter: state.counter,
  results: state.results,
});

const mapDispatchToProps = dispatch => ({
  onIncrementCounter: () => dispatch(increment()),
  onDecrementCounter: () => dispatch(decrement()),
  onAddCounter: value => dispatch(add(value)),
  onSubCounter: value => dispatch(sub(value)),
  onStoreResult: () => dispatch(storeResult()),
  onDeleteResult: id => dispatch(deleteResult(id)),
});

@connect(mapStateToProps, mapDispatchToProps)

class Counter extends Component {
  render() {
    const {
      counter, onIncrementCounter, onDecrementCounter, onAddCounter,
      onSubCounter, onStoreResult, onDeleteResult, results,
    } = this.props;

    return (
      <div>
        <CounterOutput value={counter} />
        <CounterControl label="Increment" clicked={onIncrementCounter} />
        <CounterControl label="Decrement" clicked={onDecrementCounter} />
        <CounterControl label="Add 5" clicked={() => onAddCounter(5)} />
        <CounterControl label="Subtract 5" clicked={() => onSubCounter(5)} />
        <hr />
        <button onClick={onStoreResult} type="button">Store Result</button>
        <ul>
          {results.map(result => (
            <li
              key={result.id}
              onClick={() => onDeleteResult(result.id)}
            >
              {result.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
