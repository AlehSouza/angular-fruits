import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantity',
  standalone: true
})
export class QuantityPipe implements PipeTransform {

  transform(quantity: number, prefix?: number): unknown {
    if(quantity != 0) {
      return `Em estoque: ${quantity} Uni.`;
    }
    return 'Estoque indisponível'
  }

}
