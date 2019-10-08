import { FilterNpsPipe } from './filter-nps.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [FilterNpsPipe],
  exports: [
    FilterNpsPipe,
    MatBadgeModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
