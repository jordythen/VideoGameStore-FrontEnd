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
  gridTemplate = '4fr 1.5fr';

  ngOnInit(): void {
    this.userService.checkLoggedUser().subscribe(
      resp => {
        this.loggedUser = resp.body;
        this.statusCode = resp.status;
        if (this.loggedUser) {
          console.log('User is logged in!');
          console.log('This is the status code received: ' + this.statusCode);
          // document.getElementById('mainGrid').style.gridTemplateColumns = "1fr";
          this.gridTemplate = '1fr';
        } else if (!this.loggedUser) {
          console.log('User is NOT logged in.');
        }
      }
    );
  }

}
