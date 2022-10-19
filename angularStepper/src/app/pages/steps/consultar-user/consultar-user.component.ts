import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
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
  callbackAtualizarDadosTabela!: Function;
  dadosPessoaisid:DadosPessoais = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    dtBorn: ''
  };
  msgs: Array<Message> = [];
  constructor(
    private dadosPessoaisProductService: DadosPessoaisProductService,
    private messageService:MessageService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.dadosPessoaisProductService.getDadosUser().subscribe((response: Array<DadosPessoais>) => {
        this.dadosPessoais = response
        this.isLoading = false;
        console.log(response)
      });
    }, 1000)
    this.readByIdDelete();
  }

    deleteUser(dados: DadosPessoais) {
    this.dadosPessoaisProductService.deleteUser(`${dados.id}`).subscribe(async () => {
      this.msgs = [
        {severity:'success', summary:'Sucesso!', detail:'Usuário excluído com sucesso.'},
      ]
      await this.ngOnInit();
    })

  }

  readByIdDelete() {
    const id = this.route.snapshot.paramMap.get('id')
    this.dadosPessoaisProductService.getById(`${id}`).subscribe((dadosPessoais) => {
      this.dadosPessoaisid = dadosPessoais
      console.log(dadosPessoais)
    })
  }
}
