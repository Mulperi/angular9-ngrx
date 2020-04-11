import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as fromUi from '../../store/selectors/ui.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sidenavExpanded$: Observable<boolean> = this.store.select(
    fromUi.selectUiSidenavExpanded
  );
  constructor(private store: Store<AppState>) {}
}
