import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { CartModule } from './cart/cart.module';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    // My App Modules
    ProductModule,
    HomeModule,
    CartModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
