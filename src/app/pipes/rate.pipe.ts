import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: number): string {
    let rate:string="";
    for (let i = 1; i <= 5; i++) {
      if(i<=value)
      rate+="⭐";
    }
    return rate;
  }

}
