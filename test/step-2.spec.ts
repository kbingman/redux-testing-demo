import { createStore } from 'redux';
import { reducer } from '../src/create-store';
import { setMaxX } from '../src/actions';

describe('reducers', () => {

  it('should set the max x value', () => {
    const initialState = { x: 0, y: 0 };
    const { dispatch, getState } = createStore(reducer, initialState);

    dispatch(setMaxX(100));
    
    const state = getState();

    expect(state).toEqual({
      x: 0,
      y: 0,
      maxX: 100
    });
  });

});
