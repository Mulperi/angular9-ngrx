import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import * as uiActions from '../../store/actions/ui.actions';
import * as fromUi from '../../store/selectors/ui.selectors';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  sideNavExpanded$: Observable<boolean> = this.store.select(
    fromUi.selectUiSidenavExpanded
  );

  constructor(
    private store: Store<AppState>,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/menu-black-18dp.svg'
      )
    );
    iconRegistry.addSvgIcon(
      'menu-open',
      sanitizer.bypassSecurityTrustResourceUrl(
        'assets/icons/menu_open-black-18dp.svg'
      )
    );
  }
  onMenuButtonClick(): void {
    this.store.dispatch(uiActions.sidenavToggle());
  }
}
