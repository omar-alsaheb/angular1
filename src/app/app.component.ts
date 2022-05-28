import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Lost Paradise';

  ngOnInit() {

  }
}
