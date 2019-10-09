import { PrincipalComponent } from './principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatToolbarModule
  ]
})
export class PrincipalModule { }
