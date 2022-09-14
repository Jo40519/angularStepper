import { TestBed } from '@angular/core/testing';

import { DadosPessoaisProductService } from './dados-pessoais-product.service';

describe('DadosPessoaisProductService', () => {
  let service: DadosPessoaisProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosPessoaisProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
