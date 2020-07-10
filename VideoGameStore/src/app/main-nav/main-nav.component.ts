import { Component, ViewChild, OnInit, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit, OnChanges {

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService) { }
  loggedUser: User;
  account: string;
  statusCode: number;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  ngOnInit(): void {
    // Checking to see if user is already logged in or not.
    this.userService.loginUser(null, null).subscribe(
      resp => {
        console.log(resp);
        console.log(resp.body);
        console.log(resp.status);
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if (this.loggedUser) {
          console.log('User is logged in!');
          console.log('This is the status code received: ' + this.statusCode);
          this.account = `${this.loggedUser.firstName} ${this.loggedUser.lastName}`;
        } else if (!this.loggedUser) {
          console.log('User is NOT logged in.');
        }
      }
    );
  }

  ngOnChanges() {
    /* 
    this.userService.loginUser(null, null).subscribe(
      resp => {
        this.loggedUser = resp.body;
        if (this.loggedUser != null){
          console.log('User is logged in!');
        }else if (this.loggedUser == null){
          console.log('User is NOT logged in.');
        }
      }
    );*/
  }
  logout() {
    this.userService.logoutUser().subscribe(
      resp => {
        this.loggedUser = null;
        window.location.href = 'home';
      }
    );
  }

  someMethod() {
    this.trigger.openMenu();
  }

}
