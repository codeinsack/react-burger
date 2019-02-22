export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUB = 'SUB';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const add = value => ({
  type: ADD,
  value,
});

export const sub = value => ({
  type: SUB,
  value,
});

export const storeResult = () => (dispatch, getState) => {
  setTimeout(() => {
    // const oldCounter = getState().counter;
    // console.log('oldCounter', oldCounter);
    dispatch({
      type: STORE_RESULT,
    });
  }, 2000);
};

export const deleteResult = id => ({
  type: DELETE_RESULT,
  id,
});
