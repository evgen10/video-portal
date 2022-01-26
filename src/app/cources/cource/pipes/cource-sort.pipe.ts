import { Pipe, PipeTransform } from '@angular/core';
import { ICource } from 'src/app/core/models/cource';

@Pipe({
  name: 'courceSort'
})
export class CourceSortPipe implements PipeTransform {
  transform(value: Array<ICource>): Array<ICource> {
    return value.sort((a , b) =>{
      return a.length - b.length;
    });
  }
}
