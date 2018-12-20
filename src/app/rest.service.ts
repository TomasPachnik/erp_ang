import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';

const endpoint = 'http://localhost:8080/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getInvoices(): Observable<any> {
    return this.http.get(endpoint + 'invoices/').pipe(
      map(this.extractData));
  }

  getUsers(): Observable<any> {
    return this.http.get(endpoint + 'users/').pipe(
      map(this.extractData));
  }

  getUser(uuid): Observable<any> {
    return this.http.get(endpoint + 'users/' + uuid).pipe(
      map(this.extractData));
  }

  updateUser(user): Observable<any> {
    return this.http.post(endpoint + 'users/save', JSON.stringify(user), httpOptions).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addProduct(product): Observable<any> {
    console.log(product);
    return this.http.post<any>(endpoint + 'invoices', JSON.stringify(product), httpOptions).pipe(
      tap((product) => console.log(`added product w/ id=${product.id}`)),
      catchError(this.handleError<any>('addProduct'))
    );
  }

  updateProduct(id, product): Observable<any> {
    return this.http.put(endpoint + 'invoices/' + id, JSON.stringify(product), httpOptions).pipe(
      tap(_ => console.log(`updated product id=${id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

  deleteProduct(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'invoices/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted product id=${id}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
