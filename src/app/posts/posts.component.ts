import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base/base.component';
import { Post } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent extends BaseComponent<Post> implements OnInit {

  constructor(public override router:Router){
    super(router);
  }
  override ngOnInit(): void {
      super.ngOnInit();
      console.log("Posts NgOnInit")
  }

}
