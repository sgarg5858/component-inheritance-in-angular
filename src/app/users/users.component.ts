import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { User } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseComponent<User> implements OnInit {

  override ngOnInit(): void {
      super.ngOnInit();
      console.log("Users NgOnInit");
  }

}
