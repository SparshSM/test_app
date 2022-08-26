import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { userdata } from 'src/app/services/users';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  title = 'TEST_PROJ';
  // tusers: userdata[]=[];
  tusers:any[]=[];
  constructor(private userservice: UserService) {}
  getUsers(){
  this.userservice.getUsers().subscribe(data => {this.tusers = data
  console.log(this.tusers);
  console.log("name", this.tusers[0].name); 
  });
  }

  ngOnInit() {
    this.getUsers();
  }

}
