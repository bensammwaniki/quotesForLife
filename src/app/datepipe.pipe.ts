import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipe'
})
export class DatepipePipe extends DatePipe  implements PipeTransform {
    transform(value: any, args?: any): any {
      const DATE_FMT = 'dd/MMM/yyyy';
      return super.transform(value,DATE_FMT);
    }

}
