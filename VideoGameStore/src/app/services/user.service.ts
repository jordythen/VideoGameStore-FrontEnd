import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { map, last } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public loader: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private encHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private regHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  public loggedUser: User;

  constructor(private http: HttpClient, private urlService: UrlService) { }

  loginUser(username: string, password: string): Observable<HttpResponse<User>> {
    if (username && password) { // if function was called with username and password
      // Display loading while waiting to get data
      this.loader.next(true);
      const body = `user=${username}&pass=${password}`;
      // tslint:disable-next-line: max-line-length
      return this.http.post(this.urlService.getUrl() + 'account/login', body, { headers: this.encHeaders, observe: 'response', withCredentials: true }).pipe(
        map(resp => resp as HttpResponse<User>) // Same thing as resp => resp, but instead it's resp => user
      );
    } else { // check log in
      return this.http.get(this.urlService.getUrl() + 'account/login', { observe: 'response', withCredentials: true }).pipe(
        map(resp => resp as HttpResponse<User>)
      );
    }
  }

  logoutUser(): Observable<object> {
    return this.http.delete(this.urlService.getUrl() + 'account/login', { withCredentials: true }).pipe();
  }

  checkLoggedUser(): Observable<HttpResponse<User>> {
    return this.http.get(this.urlService.getUrl() + 'account/login', { observe: 'response', withCredentials: true }).pipe(
      map(resp => resp as HttpResponse<User>)
    );
  }

  createAccount(firstName: string,
                lastName: string,
                username: string,
                password: string): Observable<HttpResponse<User>> {
    if (firstName && lastName) {
      this.loader.next(true);
      const body = `username=${username}&password=${password}&firstname=${firstName}&lastname=${lastName}`;

      return this.http.post(this.urlService.getUrl() + 'account/register',
        body, { headers: this.encHeaders, observe: 'response', withCredentials: true })
        .pipe(map(resp => resp as HttpResponse<User>));
    }
  }

  checkIfUsernameExist(username: string): Observable<HttpResponse<number>>{
    if (username){
      const body = `username=${username}`;
      return this.http.post(this.urlService.getUrl() + 'account/register/usernameVerification',
      body, { headers: this.encHeaders, observe: 'response', withCredentials: true })
      .pipe(map(resp => resp as HttpResponse<number>));
    }
  }

  public isLoading(): Observable<boolean> {
    return this.loader;
  }

  registerDeveloper(userId: number, devName: string, description: string): Observable<HttpResponse<any>> {
  const body = `userID=${userId}&name=${devName}&desc=${description}`;

  return this.http.post(this.urlService.getUrl() + 'account/devReg',
    body, { headers: this.encHeaders, observe: 'response', withCredentials: true })
    .pipe(map(resp => resp as HttpResponse<any>));
  }
}
