import { Component, OnInit } from '@angular/core';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private mainNav: MainNavComponent, private userService: UserService) { }

  loggedUser: User;
  statusCode: number;

  ngOnInit(): void {
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
          document.getElementById('mainGrid').style.gridTemplateColumns = "1fr";
        } else if (!this.loggedUser) {
          console.log('User is NOT logged in.');
        }
      }
    );
  }

}
