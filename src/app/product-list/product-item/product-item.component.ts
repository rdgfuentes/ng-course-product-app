import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../model/iproduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('image') image: string;
  constructor() { }

  ngOnInit() {
  }

}
