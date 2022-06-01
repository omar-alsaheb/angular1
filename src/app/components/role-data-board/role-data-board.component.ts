import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-data-board',
  templateUrl: './role-data-board.component.html',
  styleUrls: ['./role-data-board.component.css']
})

export class RoleDataBoardComponent implements OnInit {
  localApi = "https://localhost:44337";
  globalApi = "https://api.thelostparadise.club";

  constructor(public http: HttpClient) { }
  

  displayedColumns: string[] = ['ranking' , 'roleName','stats'];
  dataSource:any = [];
  response: [] = []
  roleDataBoardTableLookup:any= [{
    typeId: 3,
    typeName: 'Strength'
  },
  {
    typeId: 4,
    typeName: 'Dexterity'
  },
  {
    typeId: 5,
    typeName: 'Stamina'
  },
  {
    typeId: 6,
    typeName: 'Intelligence'
  },
  {
    typeId: 7,
    typeName: 'Wisdom'
  },
  {
    typeId: 8,
    typeName: 'Melee Attack'
  },
  {
    typeId: 9,
    typeName: 'Magic Attack'
  },
  {
    typeId: 10,
    typeName: 'Physical Defense'
  },
  {
    typeId: 11,
    typeName: 'Magical Defense'
  }
  ]
  ngOnInit(): void {
    this.http.get(this.globalApi +'/api/Account/GetRoleDataBoard/'+ 4).subscribe((res)=>{
      this.dataSource = res
    })
  }

  doSomething($event: any) {
    this.http.get(this.globalApi + '/api/Account/GetRoleDataBoard/' + $event.value).subscribe((res) => {
      this.dataSource = res
      console.log(res)
    })
    console.log($event.value)
  }
}
