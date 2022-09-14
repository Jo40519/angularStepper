import { Component, OnInit } from '@angular/core';
import { DadosPessoais } from 'src/app/models/dados-pessoais.model';
import { DadosPessoaisProductService } from '../../../core/dados-pessoais-product.service';

@Component({
  selector: 'app-consultar-user',
  templateUrl: './consultar-user.component.html',
  styleUrls: ['./consultar-user.component.scss']
})
export class ConsultarUserComponent implements OnInit {

  isLoading: boolean = true;
  dadosPessoais: Array<DadosPessoais> =[];
  constructor(private dadosPessoaisProductService: DadosPessoaisProductService) { }

  ngOnInit(): void {
    this.dadosPessoaisProductService.getDadosUser().subscribe((response: Array<DadosPessoais>) => {
      this.dadosPessoais = response
    })
  }

}
