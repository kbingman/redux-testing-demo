import { createStore } from 'redux';
import { reducer } from '../src/create-store';

describe('reducers', () => {

  it('should set the max x value', () => {
    const initialState = { x: 0, y: 0 };
    const store = createStore(reducer, initialState);
    store.dispatch({ type: 'SET_MAX_X', payload: 100 });
    const state = store.getState();

    expect(state).toEqual({
      x: 0,
      y: 0,
      maxX: 100
    });
  });

});
