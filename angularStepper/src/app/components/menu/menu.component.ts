import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../core/theme.service';

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
  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.click.emit()
  }
}
