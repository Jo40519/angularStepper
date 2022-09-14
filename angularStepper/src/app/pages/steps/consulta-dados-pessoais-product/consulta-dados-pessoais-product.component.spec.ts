import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDadosPessoaisProductComponent } from './consulta-dados-pessoais-product.component';

describe('ConsultaDadosPessoaisProductComponent', () => {
  let component: ConsultaDadosPessoaisProductComponent;
  let fixture: ComponentFixture<ConsultaDadosPessoaisProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaDadosPessoaisProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDadosPessoaisProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
