import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.username = '';
    this.password = '';

  }

  login() {
    alert("THIS username: " + this.username + " password: " + this.password);

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

}
