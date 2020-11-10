import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr'
})
export class ShortStrPipe implements PipeTransform {

  transform(value: string,): string {
    if (value.length > 25)
      return value.substr(0, 24) + "...";
    else return value;
  }

}
