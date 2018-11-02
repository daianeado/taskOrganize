import { Component } from '@angular/core';

import { ProjetosPage } from '../projetos/projetos';
import { TarefasPage } from '../tarefas/tarefas';
import { InfoPage } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TarefasPage;
  tab2Root = ProjetosPage;
  tab3Root = InfoPage;
  
  constructor() {

  }
}
