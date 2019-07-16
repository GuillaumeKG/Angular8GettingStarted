# Angular Form

## Overview


## Setup

1. Add FormModule in your module
```Typescript
import { FormsModule } from '@angular/forms'; 

imports: [
  ...,
  FormsModule
],

```


2. 
```
import { FormBuilder } from '@angular/forms';

export class MyComponent {
    items;
    checkoutForm;

    constructor(
    private formBuilder: FormBuilder,
    ) {
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }

    onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);

        this.checkoutForm.reset();
    }
}
```

```
<form [formGroup]="checkoutForm" (ngSubmit)="onSubmit(checkoutForm.value)">
 
  <div>
    <label>Name</label>
    <input type="text" formControlName="name">
  </div>
 
  <div>
    <label>Address</label>
    <input type="text" formControlName="address">
  </div>
 
  <button class="button" type="submit">Purchase</button>
  
</form>
```


## 