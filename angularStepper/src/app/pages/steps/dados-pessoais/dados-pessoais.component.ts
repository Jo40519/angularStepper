import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { TicketService } from 'src/app/core/ticket.service';
import {ConfirmationService} from 'primeng/api';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss']
})
export class DadosPessoaisComponent implements OnInit {


  public dadosPessoaisForm!: FormGroup;
  public msgs: Array<Message> = [];
  dadosPessoais: any;
  get firstName() {return this.dadosPessoaisForm.get('firstName')}
  get lastName() {return this.dadosPessoaisForm.get('lastName')}
  get email() {return this.dadosPessoaisForm.get('email')}
  get dtBorn() {return this.dadosPessoaisForm.get('dtBorn')}
  constructor(
    private formBuilder: FormBuilder,
    private confirmationService: ConfirmationService,
    private ticketService: TicketService,
    private route: Router
    ) { }

  ngOnInit(): void {
    this.configurarFormulario();
    this.dadosPessoais = this.ticketService.getTicketInformation()
  }

  configurarFormulario() {
    this.dadosPessoaisForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.email],
      dtBorn: [null, Validators.required]
    });
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
    } else {
      this.ticketService.getTicketInformation().dadosPessoais = this.dadosPessoais;
      this.route.navigate(['/cadastrar-produto'])
    }
  }
}
