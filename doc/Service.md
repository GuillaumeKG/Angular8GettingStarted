# Angular Core Concepts - Service

## Overview


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

2. Implement method provided by the service.
   
3. Decalre the service at module level
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

  ngOnInit() {
    ...
  }
}
```
2.  Call a method of the service
```Typescript

  ngOnInit() {
    this.products = ProductService.getProducts()
  }
```

3.  


## Advanced Usage
#### Http module

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

4. 



