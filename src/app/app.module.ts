import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './service/product.service';
import { CartService } from './service/cart.service';

const appRoutes: Routes = [
  {path: 'products', loadChildren: './product/product.module#ProductModule'},
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
  {path: 'checkout', loadChildren: './cart/cart.module#CartModule'},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    // My App Modules
    CoreModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ProductService,
    CartService,
  ]
})
export class AppModule { }
