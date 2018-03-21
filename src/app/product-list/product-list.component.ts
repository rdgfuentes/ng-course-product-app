import { Component, OnInit, ViewChild } from '@angular/core';
import { IProduct } from '../model/iproduct';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = [];

  public newProduct: IProduct = { id: null, name: '', description: '', imageUrl: ''};

  constructor( private productService: ProductService) {
    // this.products = this.productService.products;
    this.productService.productObservable$
      .subscribe( (products: IProduct[]) => this.products = products);
   }

  ngOnInit() {
  }

  delete(index: number) {
    this.productService.delete(index);
  }

  add(title: string, description: string) {
    this.productService.add(
      {
        id: this.products.length + 1,
        name: title,
        description: description,
        imageUrl: '//st.depositphotos.com/1605004/1559/v/950/depositphotos_15599555-stock-illustration-new-item-stamp.jpg'
      }
    ) ;
  }
}
