import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { ProductService } from '../service/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public loading: boolean;

  @ViewChild('myForm')
  myForm: NgForm;

  constructor( private productService: ProductService) {
    this.productService.loading$
      .subscribe( loading => {
        this.loading = loading;
      });
  }

  ngOnInit() { }

  add() {
    if ( this.myForm.valid ) {
      this.productService.add(
        {
          name: this.myForm.value.title,
          description: this.myForm.value.description,
          imageUrl: '//st.depositphotos.com/1605004/1559/v/950/depositphotos_15599555-stock-illustration-new-item-stamp.jpg'
        }
      );
    }
  }
}
