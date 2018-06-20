import { INCREMENT } from './action';
import { IAppState } from './store';
export interface IAppState {
  counter: Number;
}

export const INITAL_APP_STATE: IAppState = {
  counter: 0
};

export function rootReducer(state, action): IAppState {
  switch (action.type) {
    case INCREMENT: return { counter: state.counter + 1 };

  }
  return state;
}
