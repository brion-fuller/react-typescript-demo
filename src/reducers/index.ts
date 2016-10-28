import { IUpdateAction, IUpdateState } from '../types/IUpdateState';

const initialState: IUpdateState = {
  number: 1
}

export function update(state: IUpdateState = initialState, action: IUpdateAction): IUpdateState {
  var newState = JSON.parse(JSON.stringify(state));
  if(action.type === 'INCREASE') {
    state.number = state.number + action.amount;
  }
  else if(action.type === 'DECREASE') {
    state.number = state.number - action.amount;
  }
  return newState;
}