import { HttpClient } from '@angular/common/http';

import { IProduct } from '../model/iproduct';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _products: IProduct[] = [];

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    // using generics to define the returning type of the response
    this.http.get<IProduct[]>('//localhost:3000/products')
      .subscribe(response => {
        this._products = response;
      });
  }

  get products(): IProduct[] {
    return this._products;
  }

  delete(index: number) {
    this._products.splice(index, 1);
  }
}
