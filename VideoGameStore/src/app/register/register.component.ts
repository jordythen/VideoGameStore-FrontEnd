import { Component, OnInit, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { first } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';
import { LoginComponent } from '../login/login.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private homeComp: HomeComponent, private userService: UserService, private mainNavComp: MainNavComponent) { }
  
  registerFlag: boolean;
  queryFlag: boolean;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPass: string;
  formStatus: boolean;
  passwordView: boolean;
  passInputType: string;
  tempUser: User;
  loggedUser: User;
  registerCode: number;
  loginCode: number;
  usernameCode: number;
  usernameTaken: boolean;
  usernameTooShort: boolean;
  usernameValid: boolean;
  public displayRegisterLoader: Observable<boolean> = this.userService.isLoading();

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
    this.confirmPass = '';
    this.passwordView = false;
    this.passInputType = 'password';
    this.formStatus = false;
    this.registerFlag = this.homeComp.registerFlag;
    this.queryFlag = this.homeComp.queryFlag;
    this.tempUser = new User();
    this.usernameCode = null;
    this.usernameTaken = false;
    this.usernameTooShort = false;
    this.usernameValid = false;
    
  }
  
  register() {
    this.userService.createAccount(this.firstName, this.lastName, this.username, this.confirmPass).subscribe(
      resp => {
        this.userService.loader.next(false);
        this.loggedUser = resp.body;
        this.registerCode = resp.status;
        if (this.registerCode === 200) {
          this.queryFlag = true;
          this.homeComp.queryFlag = true;
          this.homeComp.loggedUser = this.loggedUser;
          this.mainNavComp.loggedUser = this.loggedUser;
          this.mainNavComp.account = `${this.loggedUser.firstName} ${this.loggedUser.lastName}`;

        } else {
          alert('Error occured during register');
        }
      }
    );

  }


  toLogin() {
    this.registerFlag = false;
    this.homeComp.registerFlag = false;
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

  checkButtonLogin() {
    if (this.firstName && this.lastName && this.username && this.password && this.confirmPass
      && (this.usernameTaken === false)
      && (this.usernameTooShort === false)
      && (this.password === this.confirmPass)) {
      this.formStatus = true;
    } else {
      this.formStatus = false;
    }
  }

  verifyUsername(){

    if (this.username.length === 0) {
      this.usernameTooShort = false;
      this.usernameTaken = false;
      this.usernameValid = false;
    }
    else if (this.username.length < 5){
      this.usernameTooShort = true;
      this.usernameValid = false;
      this.usernameTaken = false;
    } else if (this.username.length >= 5){
      this.usernameTooShort = false;
      this.userService.checkIfUsernameExist(this.username).subscribe(
        resp => {
          this.usernameCode = resp.status;
          console.log(this.usernameCode);
          if (this.usernameCode === 202) { // Username is valid
            this.usernameTaken = false;
            this.usernameValid = true;
          } else if (this.usernameCode === 208) { // Username already exists
            this.usernameTaken = true;
            this.usernameValid = false;
          }
          this.checkButtonLogin();
        }
      );
    }
  }

}
