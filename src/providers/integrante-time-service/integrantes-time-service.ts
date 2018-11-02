import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IntegrantesTimeService {
  time = [
    { codigoIntegrante: 1, codigoProjeto: 1, nome: 'Nicolly' },
    { codigoIntegrante: 2, codigoProjeto: 1, nome: 'Athur' },
    { codigoIntegrante: 3, codigoProjeto: 2, nome: 'Lucas' },
    { codigoIntegrante: 4, codigoProjeto: 2, nome: 'Sophia' },
    { codigoIntegrante: 5, codigoProjeto: 3, nome: 'Daiane' },
    { codigoIntegrante: 6, codigoProjeto: 3, nome: 'Jeferson' },

  ];

  ultimoCodigo = 6;

  constructor(public http: Http) {
  }

  getTime(p: number) {
    let time = [];
    for (let i = 0; i < this.time.length; i++) {
      if (this.time[i].codigoProjeto == p) {
        time.push(this.time[i]);
      }
    }
    return time;
  }

  deleteIntegranteTime(c: number) {
    for (let i = 0; i < this.time.length; i++) {
      if (this.time[i].codigoIntegrante == c) {
        this.time.splice(i, 1);
        break;
      }
    }
  }

  addIntegrante(c: number, n: string) {
    this.ultimoCodigo++;
    this.time.push({
      codigoProjeto: c,
      codigoIntegrante: this.ultimoCodigo,
      nome: n
    });
  }
}
