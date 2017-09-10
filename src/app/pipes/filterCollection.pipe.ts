import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "filterCollection" })
export class FilterCollectionPipe implements PipeTransform {
  transform(collection: Array<any>, prop: string, val: string): any {
    if (!collection) { return collection }
    return collection.filter(item => item[prop] === val);
  }
}
