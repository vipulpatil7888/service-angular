import { Component } from '@angular/core';
import { NewserviceService } from './newservice.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'app';
  title: string;
  users;
  constructor(private newservice: NewserviceService) {
    this.users = newservice.getTitle();
  }
  
  ngOnInit() {
    this.title = this.newservice.newtitleReturn();
  }
}
