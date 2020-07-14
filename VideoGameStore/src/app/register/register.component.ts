import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFlag: boolean;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPass: string;
  formStatus: boolean;
  passwordView: boolean;
  passInputType: string;

  constructor(private homeComp: HomeComponent) { }

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
  }

  register() {

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
    // tslint:disable-next-line: max-line-length
    (this.firstName && this.lastName && this.username && this.password && this.confirmPass && (this.password === this.confirmPass)) ? this.formStatus = true : this.formStatus = false;
  }

}
