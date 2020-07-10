import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private encHeaders = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  private regHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient, private urlService: UrlService) { }

  loginUser(username: string, password: string): Observable<HttpResponse<User>> {
    if (username && password){ // if function was called with username and password
      const body = `user=${username}&pass=${password}`;
      // tslint:disable-next-line: max-line-length
      return this.http.post(this.urlService.getUrl() + 'account/login', body, {headers: this.encHeaders, observe: 'response', withCredentials: true}).pipe(
        map(resp => resp as HttpResponse<User>) // Same thing as resp => resp, but instead it's resp => user
      );
    }else{ // check log in
      return this.http.get(this.urlService.getUrl() + 'account/login', {observe: 'response', withCredentials: true}).pipe(
        map(resp => resp as HttpResponse<User>)
      );
    }
  }
  logoutUser(): Observable<object>{
    return this.http.delete(this.urlService.getUrl() + 'account/login', {withCredentials: true}).pipe();
  }

}
