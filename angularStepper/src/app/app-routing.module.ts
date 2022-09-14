import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/consulta-dados',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/steps/steps.module').then(step => step.StepperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
