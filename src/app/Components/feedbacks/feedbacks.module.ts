import { CommonModule } from '@angular/common';
import { SharedModule } from './../../Shared/shared.module';
import { FilterNpsPipe } from './../../Shared/filter-nps.pipe';
import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { FeedbacksComponent } from './feedbacks.component';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FeedbacksComponent],
  imports: [
    FeedbacksRoutingModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [FilterNpsPipe]
})
export class FeedbacksModule { }
