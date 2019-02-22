import * as actions from './actions/actions';
import updateObject from './utility';

const initialState = {
  counter: 0,
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return updateObject(state, { counter: state.counter + 1 });
    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actions.ADD:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actions.SUB:
      return {
        ...state,
        counter: state.counter - action.value,
      };
    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counter,
        }),
      };
    case actions.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter(el => el.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
