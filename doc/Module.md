# Module

## Overview
There is at least 1 root Module, usually called AppModule.  
A module allows to define a consistent set of features to an application domain, workflow or set of responsabilities. It can contains:
* Component
* Service
* Pipe
* Directive
* Other modules 

### Properties

* **Declarations**  
    Declare components, directives and pipes
* **Exports**  
    Subset of declarations that should be visible and usable in the component templates of other modules
* **Imports**  
    Others modules whose export classes that are needed by component of this module
* **Providers**  
    Services from this module that are added to the global collection of services. They are available in all part of the application.
* **Bootstrap**  



## Lazy Loading

