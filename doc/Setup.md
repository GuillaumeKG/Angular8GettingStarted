

## Setup Environment

1. Install Node (https://nodejs.org/en/download/)

2. Update npm version if needed  
```Bash
npm install -g npm
```

3. Install [Angular CLI](https://github.com/angular/angular-cli/blob/master/README.md)
```Bash
npm install -g @angular/cli
```

## Initialize Project

1. Initialize a template project
```Bash
ng new my-app --style=scss
cd my-app
```

2. Launch the server
```Bash
ng serve --open
```


If you didn't enable scss at the creation of the project, you can the following command:  
```
ng config schematics.@schematics/angular:component.styleext scss
```

## Setup Webpack
Angular-cli use Webpack under the hood, however it doesn't provide any mean to customize the webpack config.  
Fortunately, a builder allows to customize the config: https://github.com/just-jeb/angular-builders/tree/master/packages/custom-webpack  

1. Install the following library:  
```
npm i -D @angular-builders/custom-webpack
npm i -D @angular-builders/dev-server
```

2. Modify the `angular.json` file to change the native builders:  
```
"architect": {
    ...
    "build": {
        "builder": "@angular-builders/custom-webpack:browser"
        "options": {
                     "customWebpackConfig": {
                        path: "./extra-webpack.config.js"
                     }
            ...
        },
    "serve": {
        "builder": "@angular-builders/custom-webpack:dev-server",
        "options": {
            "browserTarget": "my-project:build"
        }
    }
```

3. Create the `extra-webpack.config.js` config file
```
console.log('custom webpack config');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');module.exports = {
  plugins: [
    new SVGSpritemapPlugin('src/assets/symbols/svg/*.svg', {
      output: {
        filename: 'assets/symbols/symbols.svg',
        svgo: true
      },
      sprite: {
        prefix: 'i-'
      }
    })
  ]
};
```

## Setup Angular Material


```
npm install --save @angular/material @angular/cdk @angular/animations
```

Enable animations and import needed UI modules at module level:
```
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [
    ...
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule],
  ...
})
export class AppModule { }
```

* To specify a given theme, add this line in the styles.css file:  
`@import "~@angular/material/prebuilt-themes/indigo-pink.css";`

* To use Materail icon add, this line in index.html:
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`
