export type $Action<T, P> = {
  type: T;
  payload?: P;
};

export interface AppState {
  x: number;
  y: number;
  maxX?: number;
  maxY?: number;
}
