import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  ticketInformation = {
    dadosPessoais: {
        firstName: '',
        lastName: '',
        email: '',
        dtBorn: null
    },
    product: {
        class: null,
        wagon: null,
        seat: null
    },
    paymentInformation: {
        cardholderName:'',
        cardholderNumber:'',
        date:'',
        cvv:'',
        remember:false
    }
};

private paymentComplete = new Subject<any>();

paymentComplete$ = this.paymentComplete.asObservable();

getTicketInformation() {
    return this.ticketInformation;
}

setTicketInformation(ticketInformation: any) {
    this.ticketInformation = ticketInformation;
}

complete() {
    this.paymentComplete.next(this.ticketInformation.dadosPessoais);
}
}
