import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { DadosPessoais } from '../../../models/dados-pessoais.model';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  cadastrar: Boolean = true;
  dadosPessoais!: DadosPessoais
  items!: MenuItem[];
  activeIndex: number = 1;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Dados Pessoais',
      routerLink: 'cadastrar/dados-pessoais',
  },
  {
      label: 'Cadastrar seu Produto',
      routerLink: 'cadastrar-produto'
  },
  {
      label: 'Conirmação',
      routerLink: 'confirmation'
  }
];
  }

}
