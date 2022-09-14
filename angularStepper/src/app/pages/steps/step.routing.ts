import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConsultaDadosPessoaisProductComponent } from './consulta-dados-pessoais-product/consulta-dados-pessoais-product.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ConsultarUserComponent } from './consultar-user/consultar-user.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children:[
      {
        path: '',
        redirectTo: 'consulta-dados',
        pathMatch: 'full'
      },
      {
        path: 'consulta-dados',
        component: ConsultaDadosPessoaisProductComponent
      },
      {
        path: 'consultar-user',
        component: ConsultarUserComponent
      }
    ]
  },
  {
    path: 'cadastrar',
    component: CadastrarComponent,
    children: [
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
