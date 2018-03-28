import { HttpClient } from '@angular/common/http';

import { IProduct } from '../model/iproduct';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/of';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';

const PRODUCTS_API = '//localhost:3000/products';

@Injectable()
export class ProductService {
  private _products: IProduct[] = [];

  private _productsSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  public productObservable$: Observable<IProduct[]> = this._productsSubject.asObservable();

  private _loadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this._loadingSubject.asObservable();

  constructor( private http: HttpClient) {
    this.loadProducts();
  }

  private loadProducts() {
    this._loadingSubject.next(true);
    // using generics to define the returning type of the response
    this.http.get<IProduct[]>(PRODUCTS_API)
      .delay(1000)
      .do( _ => this._loadingSubject.next(false))
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
    this._loadingSubject.next(true);
    this.http.post( PRODUCTS_API, product )
      .delay(1000)
      .do( _ => this._loadingSubject.next(false))
      .subscribe(
        ( response ) => this.loadProducts(),
        ( error ) => console.error( 'There was a problem adding the product', error)
      );
  }

  delete(id: number) {
    this._loadingSubject.next(true);
    this.http.delete( [PRODUCTS_API, id].join('/') )
      .delay(1000)
      .do( _ => this._loadingSubject.next(false))
      .subscribe(
        ( response ) => {
          console.log('Product Deleted', response);
          this.loadProducts();
        },
        ( error ) => console.error( 'There was a problem deleting the product', error)
      );
  }

  get(id: number): Observable<IProduct> {
    this._loadingSubject.next(true);
    // using generics to define the returning type of the response
    return this.http.get<IProduct>([PRODUCTS_API, id].join('/'))
      .delay(1000)
      .do( _ => this._loadingSubject.next(false))
      ;
  }

  exist(id: number): Observable<boolean | {}> {
    this._loadingSubject.next(true);
    // using generics to define the returning type of the response
    return this.http.head<boolean>([PRODUCTS_API, id].join('/'))
      .do( _ => this._loadingSubject.next(false))
      .catch( e => {
        return Observable.of(false);
      })

      // .mapTo(true)
      // .catch((error) => {
      //     console.log(error);
      //     return Observable.of(false);
      // })
      ;
  }
}
