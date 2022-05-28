import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-data-board',
  templateUrl: './role-data-board.component.html',
  styleUrls: ['./role-data-board.component.css']
})
export class RoleDataBoardComponent implements OnInit {
  localApi="https://localhost:44337";
  globalApi="api.thelostparadise.club";

  constructor(public http:HttpClient) { }
  respo:[]=[]

  ngOnInit(): void {
    // this.http.get('https://localhost:44337/api/Account/GetRoleDataBoard/'+ 5).subscribe((res)=>{
    // console.log(res)
    // })
  }
 
  doSomething($event:any){
    this.http.get(this.localApi+'/api/Account/GetRoleDataBoard/'+ $event.value).subscribe((res)=>{
      console.log(res)
      })
    console.log($event)
    }
}
