import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../service/product.service';
import 'rxjs/operator/map';

@Injectable()
export class ProductIdGuard implements CanActivate {

  constructor(
    private router: Router,
    private productService: ProductService,
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const productId =  next.params.productId;
      return this.productService
        .get(productId)
        .map(product => product !== null)
        .do(valid => {
          if ( !valid ) {
            this.router.navigate(['/products']);
          }
        })
        ;
  }
}
