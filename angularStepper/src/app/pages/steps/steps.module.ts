import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepComponent } from './step/step.component';
import { HomeComponent } from './home/home.component';
import { StepsRoutingModule } from './step.routing';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {ConfirmationService, MenuItem} from 'primeng/api';
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
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import {CheckboxModule} from 'primeng/checkbox'
import {RadioButtonModule} from 'primeng/radiobutton';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ProductComponent } from './product/product.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { InputSwitchModule } from 'primeng/inputswitch';


@NgModule({
  declarations: [
    StepComponent,
    HomeComponent,
    DadosPessoaisComponent,
    ProductComponent,
    ConfirmationComponent
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
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    InputTextareaModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmDialogModule,
    MessageModule,
    MessagesModule,
    InputSwitchModule,
    //SweetAlert2
    SweetAlert2Module
  ],
  providers: [
    MessageService,
    ConfirmationService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  exports: [
    StepComponent
  ]
})
export class StepperModule { }
