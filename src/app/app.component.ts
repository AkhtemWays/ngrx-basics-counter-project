import {
  CountClearAction,
  CountDecreaseAction,
  CountIncreaseAction,
} from './reducers/count/count.actions';
import { selectCount, selectupdateAt } from './reducers/count/count.selectors';
import { CountState } from './reducers/count/count.reducer';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$: Observable<number>;
  updatedAt$: Observable<number>;
  disableDecrease: Observable<boolean>;
  constructor(private store$: Store<CountState>) {
    this.store$ = store$;
    this.count$ = this.store$.pipe(select(selectCount));
    this.updatedAt$ = this.store$.pipe(select(selectupdateAt));
    this.disableDecrease = this.count$.pipe(map((count) => count >= 4));
  }

  increment() {
    this.store$.dispatch(new CountIncreaseAction());
  }
  decrement() {
    this.store$.dispatch(new CountDecreaseAction());
  }
  reset() {
    this.store$.dispatch(new CountClearAction());
  }
}
