import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(status: unknown, ...args: unknown[]): unknown {
    return status ? 'Disponível' : 'Indisponível';
  }

}
