import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  items!: MenuItem[];
  activeIndex: number = 1;
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [{
      label: 'Dados Pessoais',
      routerLink: 'dados-pessoais',
  },
  {
      label: 'Seat',
      routerLink: 'seat'
  },
  {
      label: 'Payment',
      routerLink: 'payment'
  },
  {
      label: 'Confirmation',
      routerLink: 'confirmation'
  }
];
  }

}
