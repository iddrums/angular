import { ActionReducerMap } from '@ngrx/store';

import * as fromCart from '../cart/store/cart.reducer';

export interface AppState {
  cartList: fromCart.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cartList: fromCart.cartReducer
};
