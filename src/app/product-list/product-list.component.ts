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
  public loading: boolean;

  public newProduct: IProduct = { id: null, name: '', description: '', imageUrl: ''};

  constructor( private productService: ProductService) {
    this.productService.productObservable$
      .subscribe(
        (products: IProduct[]) => this.products = products,
        (error) => {
          console.log('Error Loading Product List', error);
        }
      );
      this.productService.loading$
        .subscribe( loading => {
          this.loading = loading;
        });
   }

  ngOnInit() {
  }

  delete(id: number) {
    this.productService.delete(id);
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
