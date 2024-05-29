import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
  standalone: true
})
export class WeightPipe implements PipeTransform {

  transform(weight: number, ...args: unknown[]): unknown {
      return `${weight} Gramas`
  }

}
