# Angular HTTP Module

## Overview

### Setup
1. Declare HttpClientModule in your module
```
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    ...
  ],
  ...
})
export class AppModule { }
```
2. Import HttpClient in your service and inject it in the constructor
```
import { HttpClient } from '@angular/common/http';

export class ProductService {
  constructor(
    private http: HttpClient ) {  }
}
```
3. Perform call
```Typescript
return this.http.get('/assets/shipping.json');
```

### Operation
#### Get
The Get method return an Observable that emits a single value and then completes, never to emit again.  

```Typescript
this.http.get<Type>('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
  console.log(data); 
},
(err: HttpErrorResponse) => {
  if (err.error instanceof Error) {
    console.log('Client-side error occured.')
  } else {
    console.log('Server-side error occured.')
  }
})
```

```Typescript
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

...
  this.http.get<Product>('http://jsonplaceholder.typicode.com/posts')
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    )
...

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
```

#### Post
For create request.  

```Typescript
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

this.http.post<Product>(this.apiUrl, newProduct, httpOptions)
  .pipe(
    tap((newProduct: Product) => this.log(`added productid=${newProduct.id}`)),
    catchError(this.handleError<Product>('addProduct'))
  )
```

#### Put
For update request.  

```Typescript
this.http.put<Product>(this.apiUrl, updatedProduct, httpOptions)
  .pipe(
    tap(_ => this.log(`updated  product id=${updatedProduct.id}`)),
    catchError(this.handleError<any>('updateProduct'))
  )
```

##### Delete
For delete request.  

```Typescript
this.http.delete<Product>(`${this.apiUrl}/${id}`, httpOptions)
  .pipe(
    tap(_ => this.log(`deleted product id=${updatedProduct.id}`)),
    catchError(this.handleError<any>('deleteProduct'))
  )
```
### Interceptor
#### Overview
Allows to intercept query from/to backend and manipulate data, for instance add header info.  

```Typescript
    import { Injectable } from '@angular/core'
    import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
    import { Observable } from 'rxjs/observable'

    @Injectable()
    export class MyInterceptor implements HttpInterceptor {
        intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const authReq = req.clone({
            headers: req.headers.set('Accept-Language', 'Test')
            })
            return next.handle(authReq)
        }
    }
```

#### Setup
In app module we need to add a dedicated provider:  
```Typescript
    import { HTTP_INTERCEPTORS } from '@angular/common/http'
    import { myInterceptor } from './myInterceptor.interceptor'

    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: myInterceptor,
        multi: true
    }]
```


### In-memory Web API
#### Setup
Allows to mock server side call.

`npm install angular-in-memory-web-api --save`

Create an InMemoryDataService by adding it in app module:
```
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService }  from './in-memory-data.service'

...

    imports:[
        ...,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false })                
    ]
```