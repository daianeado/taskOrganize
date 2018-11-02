import { IntegrantesTimeService } from './../providers/integrante-time-service/integrantes-time-service';
import { Calendar } from '@ionic-native/calendar';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjetosPage } from '../pages/projetos/projetos';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetosService } from '../providers/projetos-service/projetos-service';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TarefasService } from '../providers/tarefas-service/tarefas-service';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { InfoPage } from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefaPage,
    TarefasPage,
    Filtro,
    TabsPage,
    InfoPage
  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TarefasPage,
    TarefaPage,
    TabsPage,
    InfoPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    ProjetosService,
    TarefasService,
    IntegrantesTimeService,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {
  
}
