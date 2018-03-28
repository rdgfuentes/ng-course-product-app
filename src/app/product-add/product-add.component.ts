import { Component, OnInit } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  public newProduct: IProduct = { id: null, name: '', description: '', imageUrl: ''};
  public loading: boolean;
  private maxProductId: number;

  constructor( private productService: ProductService) {
    this.productService.loading$
      .subscribe( loading => {
        this.loading = loading;
      });
  }

  ngOnInit() {}

  add(title: string, description: string) {
    this.productService.add(
      {
        name: title,
        description: description,
        imageUrl: '//st.depositphotos.com/1605004/1559/v/950/depositphotos_15599555-stock-illustration-new-item-stamp.jpg'
      }
    );
  }
}
