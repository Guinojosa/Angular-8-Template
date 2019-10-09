import { ToastService } from '../../Shared/Auxiliary Service/toast.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbacksComponent implements OnInit {
  array: number[];
  typeNps: number;
  breakpoint: number;
  // tslint:disable-next-line: variable-name
  constructor(private _toast: ToastService) {
    this.randomNumbers();
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 740) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 740) ? 1 : 3;
  }

  showToast(value) {
    const typeNps = value >= 0 && value  <= 6  ? 'Detractor' : value  >= 7 && value  <= 8  ? 'Neutral' : 'Promoter';
    this._toast.toastAlert('Type: ' + typeNps, 'info');
  }

  randomNumbers() {
    this.array = Array.from({length: 12}).map(i => {
      return Math.floor(Math.random() * (10 - 0) + 0);
    });
  }
}
