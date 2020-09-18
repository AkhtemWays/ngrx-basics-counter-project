import countReducer, { countNode, CountState } from './count/count.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  [countNode]: CountState;
}

export const reducers: ActionReducerMap<State> = {
  [countNode]: countReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
