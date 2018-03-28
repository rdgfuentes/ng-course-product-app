import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartService } from './service/cart.service';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { CoreModule } from './core/core.module';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
    HomeComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    ProductModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CartService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
