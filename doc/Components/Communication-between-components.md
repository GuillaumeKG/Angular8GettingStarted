# Communication Between Components

- [Communication Between Components](#communication-between-components)
  - [Input Output](#input-output)
    - [Input: Pass parameter downward](#input-pass-parameter-downward)
    - [Output: Emit Event back](#output-emit-event-back)
  - [Access Child From Parent](#access-child-from-parent)
  - [Content Projection](#content-projection)
  - [Dynamic Component](#dynamic-component)

## Input Output
### Input: Pass parameter downward
In parent component's template:  
```
<child-component [propertyName]="value"></child-component>
```

In child component definition, the attribute is decorated with @Input:
```
import { Input } from '@angular/core';

export class ChildComponent {
    @Input() propertyName: Type;
    ...
}
```

### Output: Emit Event back
* In child component
```Typescript
import { Input, Output, EventEmitter } from '@angular/core';

export class ChildComponent {
    @Ouput() notify = new EventEmitter();
    @Input() product: Product;
    ...
}
```

```HTML
<p *ngIf="product.price > 700">
  <button (click)="notify.emit()">Notify Me</button>
</p>
```

* In parent component
```Typescript
import { Output, EventEmitter } from '@angular/core';

export class ChildComponent {

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }
    ...
}
```

```HTML
<app-child
  [product]="product" 
  (notify)="onNotify()">
</app-child>
```

## Access Child From Parent
Allow parent to access properties/methods of its child 

* **Local variable way**  
    Only accessible from template

    ```HTML
    <!-- in .html -->
    <app-child #child1></app-child>
    <button (click)="child1.stop()">Stop</button>
    <div class="seconds">{{child1.myvalue}}</div>
    ```

* **ViewChild**  

```
 <app-child #child1></app-child>

---
export class CountdownViewChildParentComponent implements AfterViewInit {
 
  @ViewChild(AppChildComponent, {static: false})
  private appChild: AppChildComponent;
 
  start() { this.appChild.start(); }
```

## Content Projection
The content projection allows to inject custom HTML template int the child component.  
It's possible to project several block of content and use a selector in child component to project each block where it's supposed to be placed.

* **Directive**  
    Allow interactions between parent and child.

  1. Create a directive
    ```Typescript
    @Directive({
        selector: '[inputRef]'
    })
    export class InputRefDirective {
        focus = false;

        @HostListener("focus")
        onFocus() {
            this.focus = true;
        }

        @HostListener("blur")
        onBlur() {
            this.focus = false;
        }
    }
    ```

* **Parent**  
    ```HTML
    <child-component [data]="data">
        #any content to be projected in the child component
        <input inputRef class="element1" ...>
        ...
        <a href ="..."> xxx</a>
        <input inputRef class="element3" ...>
    </child-component>
    ```

* **Child**  

    ```Typescript
    @ContentChild(InputRefDirective)
    input: InputRefDirective;

    @HostBinding("class.focus")
    get focus() {
        return this.input ? this.input.focus : false;
    }
    ```

    ```HTML
    <div>
        <ng-content select=".element1"></ng-content>
    </div>
    <div>
        <ng-content select="a"></ng-content>
    </div>
    ...
    <div>
        <ng-content select=".element3"></ng-content>
    </div>
    <div>
        <!-- Display all the projected content not selected by other tags-->
        <ng-content ></ng-content>
    </div>
    ```

**Be aware** that the style of the child component won't be applied to the projected content as it comes from the parent component.
To avoid this behavior, you need to change the style, of the child component,as below:
```CSS
:host ::ng-deep input {
  border: none;
  outline: none;
}
```





## Dynamic Component

1. Create a directive
```TypeScript
@Directive({
  selector: '[dir-host]',
})
export class MyDirectiveDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
```

2. Setup the parent component
   * Add a directive ng-template referencing the new created directive
        ```HTML
        <div>
            <h3>Dynamic Component</h3>
            <ng-template dir-host></ng-template>
        </div>
        ```
   * Resolve component
```TypeScript
export class ParentComponent implements OnInit, {
  @Input() components: MyComponent[];
  @ViewChild(MyDirectiveDirective, {static: true}) dirHost: MyDirectiveDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const comp = components[0]; 
    # Create an instance of the component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);

    # Retrieve ViewContainerRef of the directive
    const viewContainerRef = this.dirHost.viewContainerRef;
    viewContainerRef.clear();

    # Create reference to the loaded component and assign it
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = comp.data;
  }
}

export interface AdComponent {
  data: any;
}

```

__Warning__: To ensure that the compiler still generates a factory, add dynamically loaded components to the NgModule's entryComponents array.  
