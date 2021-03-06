import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import { HomeComponent } from '../home/home.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loggedUser: User;
  username: string;
  password: string;
  statusCode: number;
  registerFlag: boolean;
  invalidLogin: boolean;
  passwordView: boolean;
  passInputType: string;
  public displayLoginLoader: Observable<boolean> = this.userService.isLoading();

  constructor(
    private userService: UserService,
    private homeComp: HomeComponent,
    private mainNavComp: MainNavComponent
  ) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.passwordView = false;
    this.passInputType = 'password';
    this.invalidLogin = false;
    this.registerFlag = this.homeComp.registerFlag;
  }

  login() {
    this.userService
      .loginUser(this.username, this.password)
      .subscribe((resp) => {
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if (this.statusCode !== 200) {
          this.userService.loader.next(false);
          this.invalidLogin = true;
        } else {
          // its good to go

          this.userService.loader.next(false);
          this.mainNavComp.loggedUser = this.loggedUser;
          this.mainNavComp.account = `${this.loggedUser.firstName} ${this.loggedUser.lastName}`;
          this.homeComp.loggedInGrid();
          this.homeComp.loggedUser = this.loggedUser;
        }
      });
  }

  toRegister() {
    this.registerFlag = true;
    this.homeComp.registerFlag = true;
  }

  togglePassView() {
    console.log('toggled');
    this.passwordView = !this.passwordView;
    if (this.passwordView) {
      this.passInputType = 'text';
    } else {
      this.passInputType = 'password';
    }
  }
}
