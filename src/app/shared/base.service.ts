import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../enviorment/environment.development";


@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private resourcePath() : string {
    return   `${this.basePath}${this.resourceEndpoint}`;
  }

  handleError(error: HttpErrorResponse){
    //Default error handling
    if (error.error instanceof ErrorEvent){
      console.error(`An error ocurred: ${error.error.message}`);
    } else {
      // Unsuccesful response error code returned from backend
      console.log(`Backend returned core ${error.status}, body was ${error.error}`);
    }
    //Return an observable with a user-facing error message
    return throwError(()=>new Error('Something happened with request, please try again later.'));
  }
  getAll(): Observable<T> {
    return this.http.get<T>(this.resourcePath() , this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  // postuser<T>(data:T):Observable<T>{
  //   return this.http.post<T>(this.resourceEndpoint, data, this.httpOptions)
  //     .pipe(
  //       retry(2), // Intentará la solicitud dos veces en caso de error
  //       catchError(this.handleError) // Manejo de errores personalizado
  //     );
  // }
}


