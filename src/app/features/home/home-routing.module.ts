import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.HomeFeatureContainerComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
