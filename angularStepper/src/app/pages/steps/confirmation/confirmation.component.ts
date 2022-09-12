import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../../../models/dados-pessoais.model';
import { Product } from '../../../models/product.model';
import { TicketService } from '../../../core/ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  public dadosPessoais!: DadosPessoais
  public product!: Product
  public formCadastro!: FormGroup;

  constructor(private ticketService: TicketService, private formBuilder: FormBuilder, private routerService: Router) { }

  ngOnInit(): void {
    this.dadosPessoais = this.ticketService.getTicketInformation().dadosPessoais;
    this.product = this.ticketService.getTicketInformation().product
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formCadastro = this.formBuilder.group({
      firstName: this.dadosPessoais.firstName,
      lastName: this.dadosPessoais.lastName,
      email: this.dadosPessoais.email,
      dtBorn: this.dadosPessoais.dtBorn,
      name: this.product.name,
      price: this.product.price
    })
  }

  back() {
    this.routerService.navigate(['home/cadastrar-produto'])
  }
}
