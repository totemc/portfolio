import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private mockUrl: string = 'http://my-json-server.typicode.com/totemc/demo/currently';

  constructor(private http: HttpClient) { }

  getLearning(): Observable<string> {
    return this.http.get<string>(this.mockUrl);
  }


}
