import { Injectable } from '@angular/core';
import { ICartProduct } from '../model/icart-product';
import { IProduct } from '../model/iproduct';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export class CartService {

  private _cart: ICartProduct[];
  private get cart(): ICartProduct[] {
    return this._cart;
  }
  private set cart(cart: ICartProduct[]) {
    this._cart = cart;
    localStorage.setItem('cart', JSON.stringify(this._cart) );
    this.cartSubject.next(this._cart);
  }

  private cartSubject: BehaviorSubject<ICartProduct[]> = new BehaviorSubject<ICartProduct[]>([]);
  public cart$: Observable<ICartProduct[]> = this.cartSubject.asObservable();

  constructor() {
    this.cart = localStorage.cart ? JSON.parse(localStorage.cart) : [];
  }

  add( product: IProduct ) {
    let item = this.cart.find( x => x.product.id === product.id);
    if ( !item ) {
      item = { quantity: 1, product };
      this.cart = [...this.cart, item];
    } else {
      item.quantity += 1;
      this.cart = this.cart;
    }
  }

  delete( product: IProduct, quantity: number = 1 ) {
    let index: number;
    const cart: ICartProduct[] = this.cart;
    const item = cart.find( (x, i) => {
      if ( x.product.id === product.id ) {
        index = i;
        return true;
      }
      return false;
    });
    if ( !item ) {
      this.cartSubject.error('Product can not be removed from cart because it was not found in it');
    }
    item.quantity -= quantity;
    if ( item.quantity <= 0) {
      cart.splice(index, 1);
    }
    this.cart = cart;
  }
}
