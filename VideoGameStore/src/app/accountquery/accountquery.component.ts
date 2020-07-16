import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-accountquery',
  templateUrl: './accountquery.component.html',
  styleUrls: ['./accountquery.component.css']
})
export class AccountqueryComponent implements OnInit {

  devQueryVal: any;
  devName: string;
  devDesc: string;
  responseStatus: number;
  loggedUserID: number;

  constructor(private homeComp: HomeComponent, private userService: UserService) { }

  ngOnInit(): void {
    this.devQueryVal = '';
    this.devName = '';
    this.devDesc = '';
  }

  devQuerySubmit(){
    // alert(this.devQueryVal);
    if (this.devQueryVal === 1){
      this.loggedUserID = this.homeComp.loggedUser.id;
      this.userService.registerDeveloper(this.loggedUserID, this.devName, this.devDesc).subscribe(
        resp => {
          this.responseStatus = resp.status;
          if (this.responseStatus === 200){
            this.homeComp.queryFlag = false;
            this.homeComp.changeHomeGrid();
          }else{
            alert("WRONG");
          }
        }
      );
    }
    else if (this.devQueryVal === 2){
      this.homeComp.queryFlag = false;
      this.homeComp.changeHomeGrid();
    }

  }

}
