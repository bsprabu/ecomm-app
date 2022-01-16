import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ConfigurationUIModel, ServerQueryParams } from '../models/server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private serverApi = `${environment.webHostUrl}api/servers`;
  private queryparamSource = new BehaviorSubject(new Map());
  currentQueryparam = this.queryparamSource.asObservable();

  constructor(private http: HttpClient) { }

  getAllServers(): Observable<ConfigurationUIModel> {
    return this.http.get<ConfigurationUIModel>(this.serverApi).pipe(catchError(this.handleError));
  }

  filterServersByParam(params: Map<string, string>):Observable<ConfigurationUIModel> {
    let queryParams = new HttpParams();
    for (let [key, value] of params) {
        queryParams = queryParams.set(key, value);
    }
    return this.http.get<ConfigurationUIModel>(this.serverApi, { params: queryParams });
  }

  setQueryParam(queryParam: Map<string, string>) {
    this.queryparamSource.next(queryParam);
  }

  // Http Error Handler
  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.message || "server error.");
  }

}
