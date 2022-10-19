import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';
import { DadosPessoais } from '../../../models/dados-pessoais.model';
import { Product } from '../../../models/product.model';
import { DadosPessoaisProductService } from '../../../core/dados-pessoais-product.service';
import { DadosPessoaisProduct } from '../../../models/dados-pessoais-product';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductComponent } from '../product/product.component';

export interface IDadosConsultarDadosComponent {
  msgs?: Message[];
  cadastrar?: Boolean;
}

@Component({
  selector: 'app-consulta-dados-pessoais-product',
  templateUrl: './consulta-dados-pessoais-product.component.html',
  styleUrls: ['./consulta-dados-pessoais-product.component.scss']
})
export class ConsultaDadosPessoaisProductComponent implements OnInit {
  msgs: Array<Message> = [];
  product: Array<Product> = [];
  productId!: Product
  isLoading: boolean = true;

  public dados!: IDadosConsultarDadosComponent
  constructor(
    private routerService: Router,
    private dadosPessoaisProdcutService: DadosPessoaisProductService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService) {
    this.dados = this.routerService.getCurrentNavigation()?.extras.state as IDadosConsultarDadosComponent

    this.msgs = this.dados?.msgs ? this.dados?.msgs : [];
    }

  ngOnInit() {
    setTimeout(() => {
      this.dadosPessoaisProdcutService.getDadosProduct().subscribe((response: Array<Product>) => {
        this.product = response;
        this.isLoading = false
      })
    }, 1000)
  }

  deleteProduct(dados: Product) {
    this.dadosPessoaisProdcutService.deleteProduct(`${dados.id}`).subscribe(async () => {
      this.msgs = [{severity:'success', summary:'Sucesso!', detail:'Usuário excluído com sucesso.'}]
      await this.ngOnInit();
    })
  }

  abrirModalEditarProduct(product: any) {
  }

}
