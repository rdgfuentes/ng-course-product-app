import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductItemComponent } from '../product-list/product-item/product-item.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../service/product.service';
import { CoreModule } from '../core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductIdGuard } from '../guard/product-id.guard';
import { ProductResolver } from '../product.resolver';

const moduleRoutes: Routes = [
  {
    path: '', component: ProductListComponent
  },
  {
    path: ':productId',
    component: ProductViewComponent,
    canActivate: [
      ProductIdGuard
    ],
    resolve: {
      product: ProductResolver
    }
  },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductViewComponent,
  ],
  exports: [
    ProductListComponent,
    ProductViewComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(moduleRoutes)
  ],
  providers: [
    ProductIdGuard,
    ProductResolver,
  ]
})
export class ProductModule { }
