import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductService } from './service/product.service';

const appRoutes: Routes = [
  {path: 'products', loadChildren: './product/product.module#ProductModule'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    // My App Modules
    CoreModule,
    HomeModule,
    CartModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ProductService
  ]
})
export class AppModule { }
