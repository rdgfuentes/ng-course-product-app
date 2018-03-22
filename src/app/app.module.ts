import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightElementDirective } from './directive/highlight-element.directive';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductService } from './service/product.service';

const appRoutes: Routes = [
  {
    path: 'products', component: ProductListComponent
  },
  {
    path: '', redirectTo: 'products', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighlightElementDirective,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
