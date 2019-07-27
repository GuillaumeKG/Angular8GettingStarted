# Service

## Overview
Allows to mutualize reusable code, for instance call to back-end. This mechanism uses dependency injection.  

The service can be declared at several level:  
* **Application**  
  In this case, Angular creates a single, shared instance of the service for all classes of the application requesting its injection.  
  The service is declared as `providedIn: 'root'` in the annotation @Injectable.
* **Module**  
  In this case, Angular creates a single, shared instance of the service for all classes of the application requesting its injection.  
  The service is declared in the providers array of @Module.  

* **Component / parent component**  
  In this case, Angular creates a new instance of the service each time the component is instantiated.  
  The service is declared in the providers array of @Component. 


Then you inject it in the constructor and you can access the service anywhere in the class as any private class member. However if the service has to be used as binding data (i.e. in the template), the parameter has to be public and not private.  

## Setup

1. Create a service using Angular-cli: `ng g s product`

```Typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}
}
```
`providedIn: 'root'`: root means Angular creates a single, shared instance of the service for all classes requesting its injection.  



2. Implement method exposed by the service.
   
3. Declare the service at module level
```Typescript
@NgModule({
  ...
  providers: [
    ProductService
  ]
})
export class AppModule { }
```

## Call the Service

1.  Import and inject the service in your component:  
```Typescript
import { ProductService } from '../../services/product.service';

export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService ) {  }
}
```
2.  Call a method of the service
```Typescript

  ngOnInit() {
    this.products = ProductService.getProducts()
  }
```
Generally, data fetching from services has to be done in ngOnInit() method. Not in constructor.  
Constructor is limited for simple initialization, no complex ones as call asynchroneous method like service. 

## Advanced Usage
### Observable
#### Manual Subscription
For asynchroneous call, like REST API calls, we need to use asynchroneous abstraction. In our case it will be Observable (used by HttpClient angular module).  

So in service class, the impacts are:
```Typescript
import { Observable } from 'rxjs/Observable'
  ...

  getPosts(): Observable<Post[]> {
      return ... HTTP Call...;
  }
```
In caller component:  
```Typescript
getHeroes(): void {
    this.postService.getPosts()
        .subscribe(posts => this.posts = posts);
}
```

##### Subscription through pipe
The $ is a convention that indicates heroes$ is an Observable, not an array.

```Typescript
import { Observable, Subject } from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

...
  products$: Observable<Product[]>
  private searchTerm = new Subject<string>()

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getProducts(): void {
    this.products$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
```

```HTML
    <div id="search-component">
      <h4><label for="search-box">Product Search</label></h4>
     
      <input #searchBox id="search-box" (input)="search(searchBox.value)" />
     
      <ul class="search-result">
        <li *ngFor="let product of products$ | async" >
          <a routerLink="/products/{{product.id}}">
            {{product.name}}
          </a>
        </li>
      </ul>
    </div>
```

### Subject
### PubSub pattern

* **Service**  
```Typescript
@Injectable()
export class ProductService {
 
  // Observable sources
  private currentProductSource = new Subject<Product>();
 
  // Observable streams
  currentProduct$ = this.currentProductSource.asObservable();
 
  // Service message commands
  selectProduct(product: Product) {
    this.currentProductSource.next(product);
  }
}
```

* **Component**  
```Typescript
@Component({
  ...
  providers: [ProductService]
})
export class ProductOverviewComponent {

  constructor(private productService: ProductService) {
    this.subscription. = productService.currentProduct$.subscribe(
      p => {
        ...
      });
  }
  
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
```
