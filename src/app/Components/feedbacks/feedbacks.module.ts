import { CommonModule } from '@angular/common';
import { SharedModule } from './../../Shared/shared.module';
import { FilterNpsPipe } from '../../Shared/Pipes/filter-nps.pipe';
import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { FeedbacksComponent } from './feedbacks.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FeedbacksComponent],
  imports: [
    FeedbacksRoutingModule,
    CommonModule,
    SharedModule
  ],
  providers: [FilterNpsPipe]
})
export class FeedbacksModule { }
