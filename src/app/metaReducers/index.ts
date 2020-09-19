import { MetaReducer } from '@ngrx/store';
import { debug } from './debug.meta-reducer';

export const metaReducers: MetaReducer<any>[] = [debug];
