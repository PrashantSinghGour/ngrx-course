import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";


/**
 * it returns the top level feature state.
 */
export const selectAuthState = createFeatureSelector<AuthState>(
  'auth'
);

/**
 * this will not be calculated until state is
 *  changed (memoised function).
 *  it can take multiple selector maps and at last
 *  it will call back the projector function.
 */
//v1.0
// export const isLoggedIn = createSelector(
//   state => state['auth'],
//   (auth) => !!auth.user
// );

//v2.0
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);


