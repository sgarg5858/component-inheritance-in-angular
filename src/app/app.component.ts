import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'component-inheritance';

  constructor(public dataService:DataService){

  }
  ngOnInit(): void {
      this.dataService.getPosts();
      this.dataService.getUsers();
  }

  log(data:any)
  {
    console.log(data);
  }

}
