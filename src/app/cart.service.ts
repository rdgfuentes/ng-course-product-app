import { Injectable } from '@angular/core';
import { ICartProduct } from './model/icart-product';
import { IProduct } from './model/iproduct';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

// @Injectable()
export class CartService {

  private cart: ICartProduct[];

  private cartSubject: BehaviorSubject<ICartProduct[]> = new BehaviorSubject<ICartProduct[]>([]);
  public cart$: Observable<ICartProduct[]> = this.cartSubject.asObservable();

  constructor() {
    this.cart = [];
  }

  add( product: IProduct ) {
    let item = this.cart.find( x => x.product.id === product.id);
    if ( !item ) {
      item = { quantity: 0, product };
      this.cart.push(item);
    }
    item.quantity += 1;
    this.cartSubject.next(this.cart);
  }

  delete( product: IProduct ) {
    const item = this.cart.find( x => x.product.id === product.id);
    if ( !item ) {
      this.cartSubject.error('Product can not be removed from cart because it was not found in it');
    }
    item.quantity -= 1;
    this.cartSubject.next(this.cart);
  }
}
