import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent<T> implements OnInit {

  @Input() public baseItems: T[]=[];
  @Output() public baseItemClicked= new EventEmitter();

  public clicked(item:T)
  {
    console.log(item);
    this.baseItemClicked.emit(item);
    console.log(this.router.config);
  }

  constructor(public router:Router) { }

  ngOnInit(): void {
    console.log("Base Class NgOnInit");
  }

}
