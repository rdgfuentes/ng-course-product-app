import { IProduct } from './model/iproduct';
import { ProductService } from './service/product.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductResolver implements Resolve<IProduct> {
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const productId =  route.params.productId;
    return this.productService
      .get(productId)
      ;
  }
}
