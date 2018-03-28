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

}
