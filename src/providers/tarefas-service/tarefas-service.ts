import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TarefasService {

  tarefas = [
    {
      codigo: 1, projeto: 1, descricao: 'Tarefa 1',
      data: new Date(2017, 2, 29), prioridade: 1
    },
    {
      codigo: 2, projeto: 1, descricao: 'Tarefa 2',
      data: new Date(2017, 5, 17), prioridade: 2
    },
    {
      codigo: 3, projeto: 2, descricao: 'Tarefa 3',
      data: new Date(2017, 2, 10), prioridade: 1
    },
    {
      codigo: 4, projeto: 3, descricao: 'Tarefa 4',
      data: new Date(2017, 3, 2), prioridade: 3
    },
    {
      codigo: 5, projeto: 3, descricao: 'Tarefa 5',
      data: new Date(2017, 2, 28), prioridade: 1
    }
  ];
  ultimoCodigo = 5;

  constructor(public http: Http) { }

  getTarefas(): any[] {
    return this.tarefas;
  }

  getTarefa(codigoTarefa){
    for (let i = 0; i < this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codigoTarefa) {
        return this.tarefas[i];
        }
      }
  }

  editTarefa(c, prj, desc, dat, prior) {
    for (let i = 0; i < this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == c) {
        this.tarefas[i].projeto = prj;
        this.tarefas[i].descricao = desc;
        this.tarefas[i].data = dat;
        this.tarefas[i].prioridade = prior;
        break;
      }
    }
  }

  addTarefa(prj, desc, dat, prior) {
    this.ultimoCodigo++;
    this.tarefas.push({
      codigo: this.ultimoCodigo,
      projeto: prj,
      descricao: desc,
      data: dat,
      prioridade: prior
    })
  }

  deleteTarefa(c) {
    for (let i = 0; i < this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == c) {
        this.tarefas.splice(i, 1);
        break;
      }
    }
  }
}
