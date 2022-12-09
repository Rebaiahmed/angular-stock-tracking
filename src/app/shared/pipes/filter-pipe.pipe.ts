import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (value.length === 0 || filterString === '') {
        return value;
    }
    const resultArray = [];
    for (const name of value) {
        if (name.toLowerCase() === filterString.toLowerCase()) {
            resultArray.push(name);
        }
    }
    return resultArray;
}

}
