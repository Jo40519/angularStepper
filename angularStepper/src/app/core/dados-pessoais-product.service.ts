import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { DadosPessoais } from '../models/dados-pessoais.model';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DadosPessoaisProductService {

  urlControllerUser = 'http://localhost:3001/user';
  urControllerProduct = 'http://localhost:3001/product';
  constructor(private httpClient: HttpClient) { }


  cadastrarUser(dadosPessoais: DadosPessoais) {
    return this.httpClient.post(this.urlControllerUser, dadosPessoais)
  }

  cadastrarProduct(product: Product) {
    return this.httpClient.post(this.urControllerProduct, product)
  }

  getDadosUser():Observable<DadosPessoais[]> {
    return this.httpClient.get<DadosPessoais[]>(this.urlControllerUser)
  }

  getDadosProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urControllerProduct)
  }
}
