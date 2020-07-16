import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { HomeComponent } from '../home/home.component';
import { MainNavComponent } from '../main-nav/main-nav.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: User;
  username: string;
  password: string;
  statusCode: number;
  registerFlag: boolean;

  constructor(private userService: UserService, private homeComp: HomeComponent, private mainNavComp: MainNavComponent) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.registerFlag = this.homeComp.registerFlag;
  }

  login() {
    this.userService.loginUser(this.username, this.password).subscribe(
      resp => {
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if (this.statusCode !== 200) {
          alert(' WRONG USERNAME/PASSWORD ');
        } else { // its good to go
          this.mainNavComp.loggedUser = this.loggedUser;
          this.mainNavComp.account = `${this.loggedUser.firstName} ${this.loggedUser.lastName}`;
          this.homeComp.changeHomeGrid();
          this.homeComp.loggedUser = this.loggedUser;
        }
      }
    );
  }

  toRegister() {
    this.registerFlag = true;
    this.homeComp.registerFlag = true;
  }

}
