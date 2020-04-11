import { NgModule } from '@angular/core';
import { homeContainers } from './containers';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [...homeContainers],
  imports: [SharedModule, HomeRoutingModule],
  exports: [],
})
export class HomeModule {}
