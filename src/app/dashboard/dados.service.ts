import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27],
  ];

  /**
   * retorna um observable contendo os dados a serem
   * exibidos no gráfico.
   * @return Observable<any>
   */
  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}
