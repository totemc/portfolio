import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LearningService {
  private mockUrl: string = 'https://my-json-server.typicode.com/totemc/demo/cards';

  constructor(private http: HttpClient) { }

  getLearning(): Observable<any[]> {
    return this.http.get<any[]>(this.mockUrl);
  }


}
