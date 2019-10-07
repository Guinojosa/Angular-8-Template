import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastService } from './Shared/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Service SweetAlert 2';
  showFiller = false;
  array: number[] = [1, 2 , 3 , 3 , 3, 3, 4 , 5, 7 , 8 , 7, 7, 7, 7, 7 , 7, 10, 9, 8 , 10];
  // tslint:disable-next-line: variable-name
  constructor(private _toast: ToastService) { }
  toast() {
    this._toast.toastAlert('Deu bom', 'success');
  }

  filterNps(number) {
    if (number > 0 && number < 8) {
      this.array = this.array.filter(x => {
        return x > 0 && x < 8;
      });
    }
  }
}
