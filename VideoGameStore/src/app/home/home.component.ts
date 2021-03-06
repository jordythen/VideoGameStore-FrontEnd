import { Component, OnInit, ApplicationRef } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private ref: ApplicationRef,
    private mainNav: MainNavComponent,
    private userService: UserService
  ) {}

  loggedUser: User;
  registerFlag = false;
  queryFlag = false;
  gridTemplate = '1fr';
  bgImgStyle = '-1%';
  isInitial: boolean;

  ngOnInit(): void {
    this.isInitial = false;
    
    this.userService.checkLoggedUser().subscribe((resp) => {
      console.log(resp.body);
      this.loggedUser = resp.body;
      if (this.loggedUser) {
        this.isInitial = false;
        this.loggedInGrid();
      } else {
        this.changeHomeGrid();
        this.isInitial = true;
      }
    });
    /* 
    if (!this.loggedUser){
      this.changeHomeGrid();
    }*/

  }

  changeHomeGrid() {
    this.gridTemplate = '4fr 1.5fr';
    this.bgImgStyle = '27%';
  }

  loggedInGrid() {
    this.gridTemplate = '1fr';
    this.bgImgStyle = '-1%';
  }
}
