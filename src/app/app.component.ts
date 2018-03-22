import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { CartService } from './cart.service';
import { ICartProduct } from './model/icart-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cart: ICartProduct[] = [];
  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {
    this.cartService.cart$.subscribe(cart => this.cart = cart );
  }

  countItemsInCart() {
    const q = this.cart.length > 0 ? this.cart.map( x => x.quantity).reduce( (x, y) => x + y) : 0;
    return q;
  }
}
