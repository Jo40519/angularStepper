import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { Product } from 'src/app/models/product.model';
import { TicketService } from '../../../core/ticket.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public dados!: unknown;
  public msgs: any[] = [];
  public product!: Product
  public dadosPessoais!: DadosPessoais;
  public cadastroProdutoForm!: FormGroup;

  get name() {return this.cadastroProdutoForm.get('name')}
  get price() {return this.cadastroProdutoForm.get('price')}
  constructor(private formBuilder: FormBuilder, private routerService: Router, private ticketService: TicketService) {
    this.dados = this.routerService.getCurrentNavigation()?.extras.state
  }

  ngOnInit(): void {
    this.product = this.ticketService.getTicketInformation().product
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.cadastroProdutoForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

  validateMandatoryFields() {
    if(!this.name?.value
      || !this.price?.value){
        return false
      }
      return true
  }

  next() {
    if(!this.validateMandatoryFields()) {
      this.msgs = [
        {severity:'warn', summary:'Atenção!', detail:'Campos obrigatórios não preenchdidos.'},
      ]
    } else {
      this.product = this.ticketService.ticketInformation.product;
      this.routerService.navigate(['cadastrar/confirmation'])
    }
  }


  back() {
    this.routerService.navigate(['cadastrar/dados-pessoais'],
    {
      state: {
        dadosPessoais: this.dadosPessoais
      }
    })
  }
}
