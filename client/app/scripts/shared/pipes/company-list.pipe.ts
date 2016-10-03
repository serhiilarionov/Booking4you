import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {
  transform(list, obj) {
    let key = Object.keys(obj)[0];
    if (obj[key]) {
      return list.filter(instance => instance[key] === obj[key]);
    }
    return list;
  }
}
