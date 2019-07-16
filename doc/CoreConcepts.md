
# Angular Core Concepts

## Project structure
* /  
    Config file generated and handled by angular-cli

* /e2e  
    Folder containing End to End tests definitions.
* /src  
![alt text](https://github.com/GuillaumeKG/Angular5-Project/blob/master/Docs/img/Project_Structure-Src.jpg "Project structure - Src folder")  
    Application source folder. Here is a description of key files for an Angular application:  
    * /
        * index.html  
            Skeleton of the single page application. Include the HTML-like tag of main app component.

        * main.ts  
            Allows to bootstrap the angular application.  
            References app.module and environment files.

        * style.css  
            Contains global styling rules.

        * test.ts

        * tsconfig.app/spec.json  
            TypeScript compiler configuration for the Angular app (tsconfig.app.json) and for the unit tests (tsconfig.spec.json).
    * /app
        * app.module.ts  
            Define the root module of the application and all the dependencies used by this module (components, modules, providers, bootstrap component)  

                @NgModule({
                    declarations: [
                        AppComponent
                    ],
                    imports: [
                        BrowserModule,
                    ],
                    providers: [],
                    bootstrap: [AppComponent]
                })
                export class AppModule { }

        * components definitions  
            This folder contains all components/services created for the module.

    * /assets  
        For static resources.

    * /environments  
        Environment setup files. 1 file per target environment.

## Observables  



## xxxxx


