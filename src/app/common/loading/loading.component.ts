import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  @HostBinding('style.height')
  @Input() height: string;

  @HostBinding('style.width')
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }


}
