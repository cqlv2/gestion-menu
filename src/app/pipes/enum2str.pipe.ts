import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum2str'
})
export class Enum2strPipe implements PipeTransform {

  transform(value: string): string {
    
    value=value.replace("_"," ")
    value = value.toLocaleLowerCase();
    value= (value+'').charAt(0).toUpperCase()+value.substr(1);
    
    return value;
  }

}


