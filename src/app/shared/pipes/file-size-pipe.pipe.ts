import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {

  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
