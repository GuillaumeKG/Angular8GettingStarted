# Directives

## Overview
There are 2 types of Directive:
* **Structural Directive**  

* **Atrribute Directive**  

## Built-In Directives
### Structural
#### ngIf
```HTML
<div *ngIf="expression"></div>
```

#### ngFor
* Basic use with additional info  

```HTML
<div *nfFor="let item of list; count as count; index as i">
    {{i}} of {{count}} - {{item.name}}
</div>
```

* TrackId for performance  

```HTML
<div *ngFor="let product of products | TrackBy: getId">
    ...
</div>
```

* For Observable  
With async, the async pipe automatically subscribe/unsubscribe to the Observable, no need to do it in the component.   

```HTML
<div *ngFor="let product of products$ | async">
    ...
</div>
```

#### ngSwitch

```HTML
<div [ngSwitch]="hero?.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="hero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="hero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="hero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="hero"></app-unknown-hero>
</div>
```

### Attribute
#### ngStyle
```HTML
<div [ngStyle]="{backgroundColor: rating>3 ? 'green' : 'red'"></div>
<div [ngStyle]="currentStyles"></div>
```
```Typescript
currentStyles: {};
setCurrentStyles() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
}
```
#### ngClass
```HTML
<div [ngClass]="{'my-css-class' : rating >=3}"></div>

<div [ngClass]="currentClasses"></div>
```

You can create object for collection of classes:
```Typescript
currentClasses: {};
setCurrentClasses() {
  // CSS classes: added/removed per current state of component properties
  this.currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };
}
```

#### ngModel
The NgModel directive allows you to display a data property and update that property when the user makes changes. 

```HTML
<label for="example-ngModel">[(ngModel)]:</label>
<input [(ngModel)]="currentItem.name" id="example-ngModel">
```
Short version of:
```HTML
<label for="example-change">(ngModelChange)="...name=$event":</label>
<input [ngModel]="currentItem.name" (ngModelChange)="currentItem.name=$event" id="example-change">
```

 
The ngModel is inside the FormsModule, so it has to be imported in your module.  
