import { NgModule } from '@angular/core';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { todosContainers } from './containers';
import { StoreModule } from '@ngrx/store';
import * as fromTodos from '../../store/reducers/todos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from '../../store/effects/todos.effects';
import { todosComponents } from './components';

@NgModule({
  declarations: [...todosComponents, ...todosContainers],
  imports: [
    SharedModule,
    TodosRoutingModule,
    StoreModule.forFeature(fromTodos.todosFeatureKey, fromTodos.reducer),
    EffectsModule.forFeature([TodosEffects]),
  ],
  exports: [],
})
export class TodosModule {}
