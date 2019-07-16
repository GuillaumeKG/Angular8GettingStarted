
# Angular Routing

## Setup Routing Rules
1. Define routing rule  
A best practice is to create a dedicated module for routing feature, usually called app-routing.module.ts for the root module.

```Typescript
const routes: Routes = [
  {path: '', component: AuthentComponent},
  {path: 'home', component: AuthentComponent},
  
  {path: 'bfoas', loadChildren: () => import('../bfoa/bfoa.module').then(m => m.BfoaModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

In case of a sub-module, use `RouterModule.forChild(routes)` instead.

2. Then import the routing module to the main module:
```Typescript
@NgModule({
  ...
  imports: [
    AppRoutingModule,
    ...
  ],
  ...
})
export class AppModule { }
```

## Navigation

1. Set the tag where the routed components will be loaded, generally in app.component.html
```
<router-outlet></router-outlet>
```

2. Add a link (routerLink) in the template:  
```
    <a [title]="Product details" [routerLink]="['/products', productId]">
      {{ product.name }}
    </a>
```

3. To retrieve route information on target component:  
```Typescript
import { ActivatedRoute } from '@angular/router';

export class ProductDetailsComponent implements OnInit {
  product;

  # Inject ActivatedRoute in the constructor
  constructor(
    private route: ActivatedRoute,
  ) { }

  # Subscribe to route params and fetch them
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
}
```

## Location
Allows to interact with browser history.  
For instance, to go back in history:
```Typescript
import { Location } from '@angular/common'

...
  constructor(..., private location: Location, ...) {}

  goBack(): void{
      this.location.back()
  }
```

```HTML
<button (click)="goBack()">go back</button>
```

## Advanced Settings

* **Lazy loading of module**:  
```
const routes: Routes = [
  {path: 'bfoa', loadChildren: () => import('./bfoa/bfoa.module').then(m => m.BfoaModule)}
];
```
