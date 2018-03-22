import { Component, OnInit } from '@angular/core';
import { ICartProduct } from '../model/icart-product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: ICartProduct[] = [];
  constructor(
    public cartService: CartService
  ) {
    this.cartService.cart$.subscribe(cart => this.cart = cart );
  }

  ngOnInit() {
  }

  delete(item: ICartProduct) {
    this.cartService.delete( item.product, item.quantity );
  }

  minus(item: ICartProduct) {
    this.cartService.delete( item.product );
  }

  plus(item: ICartProduct) {
    this.cartService.add( item.product );
  }
}
