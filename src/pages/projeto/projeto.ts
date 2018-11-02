import { IntegrantesTimeService } from './../../providers/integrante-time-service/integrantes-time-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { ProjetosService } from '../../providers/projetos-service/projetos-service';


@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html'
})

export class ProjetoPage {
  codigoProjeto: number;
  time: any[];
  nomeProjeto: string = "";
  novo: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public projetosService: ProjetosService,
    public integrantesTimeService: IntegrantesTimeService,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
    this.codigoProjeto = navParams.get('codigo');
    this.novo = navParams.get('novo');
    let projetos = projetosService.getProjetos();
    if (!this.novo) {
      for (let i = 0; i < projetos.length; i++) {
        if (projetos[i].codigo == this.codigoProjeto) {
          this.nomeProjeto = projetos[i].nome;
          break;
        }
      }
    }

    this.time = integrantesTimeService.getTime(this.codigoProjeto);

  }

  alterar() {
    this.projetosService.editProjeto(this.codigoProjeto, this.nomeProjeto);
    this.navCtrl.pop();
  }

  excluir() {
    this.projetosService.deleteProjeto(this.codigoProjeto);
    this.navCtrl.pop();

    //Deleta os integrantes daquele projeto
    for (let i = 0; i < this.time.length; i++) {
      this.integrantesTimeService.deleteIntegranteTime(this.time[i].codigoIntegrante)
    };

    //Exibe confirmação de exclusão
    let toast = this.toastCtrl.create({
      message: 'Projeto e integrantes excluídos com sucesso!',
      duration: 3000
    });
    toast.present();
  }

  incluir() {
    this.projetosService.addProjeto(this.nomeProjeto);
    this.navCtrl.pop();
  }

  deleteIntegrante(e: number) {
    let confirm = this.alertCtrl.create({
      title: 'Tem certeza disso?',
      message: 'A operação não pode ser desfeita.',
      buttons: [
        {
          text: 'Deletar',
          handler: () => {
            this.integrantesTimeService.deleteIntegranteTime(e);
            this.time = this.integrantesTimeService.getTime(this.codigoProjeto);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    });
    confirm.present();
  }

  addIntegrante() {
    let prompt = this.alertCtrl.create({
      title: 'Integrante do time',
      message: "Informe o nome do novo integrante do time",
      inputs: [
        {
          name: 'nomeIntegrante',
          placeholder: 'Nome...'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => { }
        },
        {
          text: 'Salvar',
          handler: data => {
            this.integrantesTimeService.addIntegrante(this.codigoProjeto, data.nomeIntegrante);
            this.time = this.integrantesTimeService.getTime(this.codigoProjeto);
          }
        }
      ]
    });
    prompt.present();
  }
}