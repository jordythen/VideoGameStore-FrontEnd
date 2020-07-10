import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { HomeComponent } from '../home/home.component';

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

  constructor(private userService: UserService, private homeComp: HomeComponent) { }

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
          window.location.reload();
        }
      }
    );
  }

  toRegister() {
    this.registerFlag = true;
    this.homeComp.registerFlag = true;
  }

}
