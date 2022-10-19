import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../core/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() descricao: string = '';
  @Input() selecionado = false;
  @Output() click = new EventEmitter<void>();
  items!: MenuItem[];
  constructor(private routerService: Router) { }

  ngOnInit(): void {

  }

  onClick() {
    this.click.emit()
  }

  async cadastrar() {
    await this.routerService.navigate(['home/cadastrar/dados-pessoais'])
  }

  async navigateConsultaDados() {
    await this.routerService.navigate(['home/consulta-dados'])
  }

  async navigateConsultaUser() {
    await this.routerService.navigate([`home/see-user`])
  }
}
