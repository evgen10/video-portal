import { Pipe, PipeTransform } from '@angular/core';
import { ICource } from 'src/app/core/models/cource';

@Pipe({
  name: 'filterCources'
})
export class FilterCourcesPipe implements PipeTransform {
  transform(value: Array<ICource>, text: string): Array<ICource> {
    if (!text.trim()) {
      return value
    }
    return value.filter(value => {
      return value.title.toUpperCase().includes(text.trim().toUpperCase())
    });
  }
}
