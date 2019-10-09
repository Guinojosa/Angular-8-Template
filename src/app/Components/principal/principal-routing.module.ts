import { PrincipalComponent } from './principal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    loadChildren: () =>
      import(`../feedbacks/feedbacks.module`).then(
        m => m.FeedbacksModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
