import { SharedModule } from './../../Shared/shared.module';
import { PrincipalComponent } from './principal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalRoutingModule } from './principal-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    SharedModule
  ]
})
export class PrincipalModule { }
