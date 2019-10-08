import * as _ from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';
import { TypeNps } from 'src/Models/TypeNps';

@Pipe({
  name: 'filterNps'
})
export class FilterNpsPipe implements PipeTransform {

  transform(args: any[], type: TypeNps): any {
    switch (type) {
      case TypeNps.Promoter: {
        return _.filter(args, row => {
          return row > 8;
        });
      }
      case TypeNps.Neutral : {
        return _.filter(args, row => {
          return row > 6 && row < 9;
        });
      }
      case TypeNps.Detractor : {
        return _.filter(args, row => {
          return row < 7;
        });
      }
      default: {
        return args;
      }
    }
  }
}
