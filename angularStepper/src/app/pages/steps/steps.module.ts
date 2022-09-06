import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { HomeComponent } from './home/home.component';
import { StepsRoutingModule } from './step.routing';



@NgModule({
  declarations: [
    StepComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    StepsRoutingModule
  ]
})
export class StepsModule { }
