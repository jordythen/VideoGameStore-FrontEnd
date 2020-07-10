import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnChanges {

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
  ngOnChanges(): void {
    // if (this.firstName && this.lastName && this.username && this.password && this.confirmPass && (this.password === this.confirmPass)) {
    //   this.formStatus = false;
    // }
    if (this.password === this.confirmPass) {
      this.formStatus = false;
    }
  }

  ngOnInit(): void {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
    this.confirmPass = '';
    this.passwordView = false;
    this.passInputType = 'password';
    this.formStatus = true;
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

}
