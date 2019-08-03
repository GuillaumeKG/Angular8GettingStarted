# Directives

## Overview
There are 2 types of Directive:
* **[Structural Directive](#structural)**  
  Change the DOM layout by adding/removing DOM elements.

* **[Atrribute Directive](#attribute)**  
  Change the appearance and behaviour of a DOM element

Moreover, Components are also Directives. 

## Custom Directives
### Attribute

```Typescript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    @Input('color') highlightColor: string;

    constructor(private el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null);
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
```
**Note**: selector is between [], meaning it's HTML attribute.  
**Note**: The ElementRef injected in constructor represents the host DOM element.  

```HTML
<h1 appHighlight color="blue">Bfoas</h1>
<h1 appHighlight [color]="varname">Bfoas</h1>
```

### Structural
#### Basics
Structural directive always need "*" as prefix of their attribute name in tempalte (*ngIf, *ngFor...). This is a shorcut for usage of ng-template. For instance, the first expression is transformed automatically into the second:
```HTML
<div *ngIf="bool" >XXXXXXXXXXXXXXX</div>

<ng-template [ngIf]="bool">
  <div>XXXXXXXXXXXXXXX</div>
</ng-template>
```

```HTML
<div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
  ({{i}}) {{hero.name}}
</div>

<ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById">
  <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
</ng-template>
```

#### Implementation
```Typescript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * Add the template content to the DOM unless the condition is true.
 */
@Directive({ 
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    // Reference the content of the directive
    private templateRef: TemplateRef<any>,
    // Reference the host element
    private viewContainer: ViewContainerRef) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
```

```HTML
<p *appUnless="condition" class="unless a">
  (A) This paragraph is displayed because the condition is false.
</p>

<p *appUnless="!condition" class="unless b">
  (B) Although the condition is true,
  this paragraph is displayed because appUnless is set to false.
</p>
```


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
