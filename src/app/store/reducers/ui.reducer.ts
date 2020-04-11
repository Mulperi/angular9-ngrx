import { createReducer, on, Action } from '@ngrx/store';
import * as UiActions from '../actions/ui.actions';

export interface UiState {
  sidenavExpanded: boolean;
}

const initialState: UiState = {
  sidenavExpanded: true,
};

const uiReducer = createReducer(
  initialState,
  on(UiActions.sidenavToggle, (state) => ({
    ...state,
    sidenavExpanded: !state.sidenavExpanded,
  }))
);

export function reducer(state: UiState | undefined, action: Action) {
  return uiReducer(state, action);
}
export const uiFeatureKey = 'ui';
