import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  public cadastroProdutoForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.cadastroProdutoForm = this.formBuilder.group({
      name: [null, Validators.required],
      price: [null, Validators.required]
    })
  }

}
