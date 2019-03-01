import { $Action } from './types';

export const SET_MAX_X = 'SET_MAX_X';
export type SetMaxX = $Action<typeof SET_MAX_X, number>;
export const setMaxX = (x: number) => ({
  type: SET_MAX_X,
  payload: x
});