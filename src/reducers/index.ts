const initialState = {
  number: 1
}

interface IAction {
    type: string;
    amount: number;
}

export function update(state = initialState, action: IAction) {
  if(action.type === 'INCREASE') {
    return { number: state.number + action.amount }
  }
  else if(action.type === 'DECREASE') {
    return { number: state.number - action.amount }
  }
  return state
}