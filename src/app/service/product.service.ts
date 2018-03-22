import { HttpClient } from '@angular/common/http';

import { IProduct } from '../model/iproduct';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const PRODUCTS_API: string = '//localhost:3000/products';

@Injectable()
export class ProductService {
  private _products: IProduct[] = [];

  private _productsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  public productObservable$: Observable<IProduct[]> = this._productsSubject.asObservable();

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    // using generics to define the returning type of the response
    this.http.get<IProduct[]>(PRODUCTS_API)
      .subscribe(
        (response) => {
          this.setProducts(response);
        },
        (error) => console.error( 'There was a problem trying to get the product list', error)
      );
  }

  private setProducts(products: IProduct[]) {
    this._products = products;
    this._productsSubject.next(this._products);
  }

  get products(): IProduct[] {
    return this._products;
  }

  add(product: IProduct) {
    this.http.post( PRODUCTS_API, product )
      .subscribe(
        ( response ) => this.loadProducts(),
        ( error ) => console.error( 'There was a problem adding the product', error)
      );
  }

  delete(id: number) {
    this.http.delete( [PRODUCTS_API, id].join('/') )
      .subscribe(
        ( response ) => {
          console.log('Product Deleted', response);
          this.loadProducts();
        },
        ( error ) => console.error( 'There was a problem deleting the product', error)
      );
  }

}
