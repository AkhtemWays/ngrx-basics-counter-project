import { ActionReducer } from '@ngrx/store';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`Prev state: ${JSON.stringify(state)}`);
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Next state ${JSON.stringify(nextState)}`);
    console.groupEnd();
    return nextState;
  };
}
