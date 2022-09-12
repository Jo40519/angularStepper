import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    visibleSidebar1: any;
    menuSelecionado = 'Home'
  constructor() { }

  ngOnInit(): void {
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao
  }


}
