import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';
import { ICartProduct } from './model/icart-product';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  cartCount: number;
  displayCart: boolean =  false;
  constructor(
    public productService: ProductService,
    public cartService: CartService
  ) {
    this.countItemsInCart()
      .subscribe( quantity => {
        this.cartCount = quantity;
      });
  }

  countItemsInCart(): Observable<number> {
    return this.cartService.cart$
      .map( items => {
        return items.length > 0 ? items.map( x => x.quantity).reduce( (x, y) => x + y) : 0;
      });
  }

  toggleCart() {
    this.displayCart = !this.displayCart;
  }
}
