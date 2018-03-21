import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('product') product: IProduct;
  constructor() { }

  ngOnInit() {
  }

}
