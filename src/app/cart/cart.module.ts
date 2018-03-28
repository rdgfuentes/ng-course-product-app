import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart.component';
import { CoreModule } from '../core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

const moduleRoutes: Routes = [
  {
    path: '', component: CartComponent,
  },
  {
    path: 'checkout', component: CheckoutComponent,
  },
];
@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
  ],
  exports: [
    CartComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(moduleRoutes),
  ],
  providers: [
  ],
})
export class CartModule { }
