import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {
  transform(value: string, pocetZnaku: number, znakyNaKonci: string): string {
    return value.slice(0, pocetZnaku - 1).concat(znakyNaKonci);
  }

}
