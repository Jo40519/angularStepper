import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { TicketService } from 'src/app/core/ticket.service';
import {ConfirmationService} from 'primeng/api';

import Swal from 'sweetalert2';
import { state } from '@angular/animations';
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { DadosPessoaisInterface } from 'src/app/states/dados-pessoais-state';
@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {


  public dados!: unknown;
  public dadosPessoaisClass!: DadosPessoais | undefined;
  public dadosPessoaisForm!: FormGroup;
  public msgs: Array<Message> = [];
  public user!: DadosPessoais;
  dadosPessoais: any;
  public submitted: boolean = false;
  get firstName() {return this.dadosPessoaisForm.get('firstName')}
  get lastName() {return this.dadosPessoaisForm.get('lastName')}
  get email() {return this.dadosPessoaisForm.get('email')}
  get dtBorn() {return this.dadosPessoaisForm.get('dtBorn')}
  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private ticketService: TicketService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.dadosPessoaisClass = this.ticketService.getTicketInformation().dadosPessoais
    this.configurarFormulario();
    this.setValueForm();
  }

  configurarFormulario() {
    this.dadosPessoaisForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.email],
      dtBorn: [null, Validators.required]
    });
  }

  setValueForm() {
    this.dadosPessoaisForm.patchValue({
      firstName: this.dadosPessoaisClass?.firstName,
      lastName: this.dadosPessoaisClass?.lastName,
      email: this.dadosPessoaisClass?.email,
      dtBorn: this.dadosPessoaisClass?.dtBorn
    })
  }


validateMandatoryFields() {
  if(!this.firstName?.value
    || !this.lastName?.value
    || !this.email?.value
    || !this.dtBorn?.value) {
      return false
    }
    return true
}

  next() {
    if(!this.validateMandatoryFields()) {
      this.msgs = [
        {severity:'warn', summary:'Atenção!', detail:'Campos obrigatórios não preenchdidos.'},
      ]
      return
    } else if(this.validateMandatoryFields()){
     this.dadosPessoaisClass = this.ticketService.ticketInformation.dadosPessoais
      // let dadosPessoais: DadosPessoais = {
      //   id: this.dadosPessoais?.id,
      //   firstName: this.dadosPessoaisForm.get('firstName')?.value,
      //   lastName: this.dadosPessoaisForm.get('lastName')?.value,
      //   email: this.dadosPessoaisForm.get('email')?.value,
      //   dtBorn: this.dadosPessoaisForm.get('dtBorn')?.value
      // }
      this.route.navigate(['home/cadastrar-produto'])

      return;
    }

    this.submitted = true;
  }
}
