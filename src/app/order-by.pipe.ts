import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, field: string): any[] {
    array.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    return array;
  }
}