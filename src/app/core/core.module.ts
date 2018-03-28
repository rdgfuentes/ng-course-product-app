import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from '../directive/highlight-element.directive';
import { LoadingComponent } from '../common/loading/loading.component';

@NgModule({
  declarations: [
    HighlightElementDirective,
    LoadingComponent,
  ],
  exports: [
    HighlightElementDirective,
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class CoreModule { }
