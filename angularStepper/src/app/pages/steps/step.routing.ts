import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'dados-pessoais',
        pathMatch: 'full'
      },
      {
        path: 'dados-pessoais',
        component: DadosPessoaisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
