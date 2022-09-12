import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

const routes: Routes = [
  {
    path: 'home',
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
      },
      {
        path: 'cadastrar-produto',
        component: ProductComponent
      },
      {
        path: 'confirmation',
        component: ConfirmationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
