import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unite'
})
export class UnitePipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "GRAMME":
        value = "g.";
        break;
      case "KILOGRAMME":
        value = "Kg.";
        break;
      case "LITRE":
        value = "l.";
        break;
      case "CENTILITRE":
        value = "cl.";
        break;
    }
    return value;
  }

}
