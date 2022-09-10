import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

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
  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.click.emit()
  }

}
