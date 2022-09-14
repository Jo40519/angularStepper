import { DadosPessoais } from './dados-pessoais.model';
import { Product } from './product.model';
export class DadosPessoaisProduct {
  id?:number;
  firstName?: DadosPessoais;
  lastName?: DadosPessoais;
  email?: DadosPessoais;
  dtBorn?: DadosPessoais;
  name?: Product;
  price?: Product;
}
