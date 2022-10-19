import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from '../../../models/dados-pessoais.model';
import { Product } from '../../../models/product.model';
import { TicketService } from '../../../core/ticket.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosPessoaisProductService } from '../../../core/dados-pessoais-product.service';
import { ConfirmationService, Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  public msgs: Array<Message> = [];
  public dadosPessoais!: DadosPessoais
  public product!: Product
  public formCadastro!: FormGroup;

  constructor(
    private ticketService: TicketService,
    private formBuilder: FormBuilder,
    private routerService: Router,
    private dadosPessoaisProductService: DadosPessoaisProductService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
    ) { }

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

    confirm(){
          let dadosPessoais: DadosPessoais = {
            id: this.dadosPessoais?.id,
            firstName: this.formCadastro.get('firstName')?.value,
            lastName: this.formCadastro.get('lastName')?.value,
            email: this.formCadastro.get('email')?.value,
            dtBorn: this.formCadastro.get('dtBorn')?.value
      }
      console.table(dadosPessoais)
      let product: Product = {
        id: this.product?.id,
        name: this.formCadastro.get('name')?.value,
        price: this.formCadastro.get('price')?.value
      }
      this.dadosPessoaisProductService.cadastrarUser(dadosPessoais).subscribe(() => {
        console.log('usuario criado')
      })
      this.dadosPessoaisProductService.cadastrarProduct(product).subscribe(async () => {
        await this.routerService.navigate(['home/consulta-dados'], {
          state: {
            msgs: [{severity:'success', summary:'Sucesso', detail:'Produto cadastrado com sucesso.'} as Message],
            cadastrar: false
          }
        })
      })

  }

  back() {
    this.routerService.navigate(['home/cadastrar/cadastrar-produto'])
  }
}
