import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightElementDirective } from './directive/highlight-element.directive';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductService } from './service/product.service';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CartService } from './service/cart.service';
import { LoadingComponent } from './common/loading/loading.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: 'products/:productId', component: ProductViewComponent
  },
  {
    path: 'cart', component: CartComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighlightElementDirective,
    ProductItemComponent,
    ProductViewComponent,
    CartComponent,
    CartItemComponent,
    LoadingComponent,
    ProductAddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
