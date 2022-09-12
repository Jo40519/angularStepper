import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

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
      },
      {
        path: 'cadastrar-produto',
        component: ProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
