import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart.component';
import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from '@angular/router';

const moduleRoutes: Routes = [
  {
    path: '', component: CartComponent
  },
];
@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
  ],
  exports: [
    CartComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    RouterModule.forChild(moduleRoutes),
  ],
  providers: [
  ],
})
export class CartModule { }
