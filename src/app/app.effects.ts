import {
  countActionsType,
  CountUpdatedAtAction,
} from './reducers/count/count.actions';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  updatedAt$() {
    return this.actions$.pipe(
      ofType(
        countActionsType.increase,
        countActionsType.decrease,
        countActionsType.clear
      ),
      map((value) => {
        return new CountUpdatedAtAction({ updatedAt: Date.now() });
      })
    );
  }
}
