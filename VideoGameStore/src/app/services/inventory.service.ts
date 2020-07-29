import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UrlService } from './url.service';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  public loader: Subject<boolean> = new BehaviorSubject<boolean>(false);
  private encHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  
  constructor(private http: HttpClient, private urlService: UrlService) { }

  retrieveAllGames(): Observable<HttpResponse<any>>{
    this.loader.next(true);
    return this.http.get(this.urlService.getUrl() + 'inventory/games', {observe: 'response', withCredentials: true}).pipe(
      map(resp => resp as HttpResponse<any>)
    );
  }

  public isLoading(): Observable<boolean> {
    return this.loader;
  }
}
