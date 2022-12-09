import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: Date): any {
    const currentYear = new Date().getFullYear();
    const dobYear = value.getFullYear();     const age = currentYear - dobYear;

    return age + ' years old';
 }

}
