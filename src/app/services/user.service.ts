import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { userdata } from './users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiurl = "api/tusers";
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };
  constructor(private http: HttpClient) { }
  private handleerror(err: any) {
    console.error(err);
    return throwError(err);
  }
  getUsers(): Observable<userdata[]> {
    return this.http.get<userdata[]>(this.apiurl).
    pipe(
      tap(data => console.log(data)),
      catchError(this.handleerror)
    );
  }
}
