import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightElementDirective } from './directive/highlight-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighlightElementDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
