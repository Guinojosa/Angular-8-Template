import { ToastService } from './../../Shared/toast.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbacksComponent implements OnInit {
  array: number[] = [1, 8, 4, 10, 9, 8, 5 , 9, 7, 8, 7, 7, 7, 7, 7, 7, 10, 9, 8, 10];
  typeNps: number;
  breakpoint: number;
  // tslint:disable-next-line: variable-name
  constructor(private _toast: ToastService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 740) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 740) ? 1 : 3;
  }

  showToast(value) {
    const typeNps = value >= 0 && value  <= 6  ? 'Detractor' : value  >= 7 && value  <= 8  ? 'Neutral' : 'Promoter';
    this._toast.toastAlert('Type: ' + typeNps, 'success');
  }

}
