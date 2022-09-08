import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { HomeComponent } from './home/home.component';
import { StepsRoutingModule } from './step.routing';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api'
import { ToastModule } from 'primeng/toast';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";




@NgModule({
  declarations: [
    StepComponent,
    HomeComponent,
    DadosPessoaisComponent
  ],
  imports: [
    //Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    //Aplicação
    StepsRoutingModule,

    //prirmeng
    ButtonModule,
    StepsModule,
    ToastModule,
    CardModule,
    InputTextModule,
    MultiSelectModule,
    AutoCompleteModule,
    CalendarModule
  ],
  providers: [
    MessageService
  ],
  exports: [
    StepComponent
  ]
})
export class StepperModule { }
