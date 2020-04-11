import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { UiState, uiFeatureKey } from '../reducers/ui.reducer';

export const selectFeatureUi = createFeatureSelector<AppState, UiState>(
  uiFeatureKey
);

export const selectUiSidenavExpanded = createSelector(
  selectFeatureUi,
  (state: UiState) => state.sidenavExpanded as boolean
);
