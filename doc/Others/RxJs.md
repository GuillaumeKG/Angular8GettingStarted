# RxJs - Observables

## Overview


## Observable


## Subject
A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.  
You can also push values into that Observable by calling its next(value) method.  

## Operator

* **of**  
Create an Observable from an object.
```
import { Observable, of } from 'rxjs';

PRODUCTS = {{...},...}

getProducts(): Observable<Products[]> {
  return of(PRODUCTS);
}
```

* **tap**  
The RxJS tap operator, which looks at the observable values, does something with those values, and passes them along. The tap call back doesn't touch the values themselves.
```
tap(_ => this.log('fetched heroes')),
```

* **debounceTime**  
  Waits until the flow of new string events pauses for X milliseconds before passing along the latest string. You'll never make requests more frequently than Xms.  

* **distinctUntilChanged**  
  Ensures that a request is sent only if the filter text changed.  

* **switchMap**  
  Preserves the original request order while returning only the observable from the most recent HTTP method call. Results from prior calls are canceled and discarded. 

* **pipe**  

* **catchError**  
* 