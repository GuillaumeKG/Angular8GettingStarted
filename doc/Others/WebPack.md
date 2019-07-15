## Webpack

## Concepts

There are few core concepts:

* **Entry**  
  Entry point used by Webpack to build its dependency graph, allowing to identify all resources to be included in the build.  


* **Output**  
  Define where the generated bundles will be created at build.  

* **Loaders**
  The loaders allows specifying how resources are processed. They have 2 main properties:
  * Test  
    Regexp allowing to filter the target file based on their name
  * Loader list  
    List of loader to be used for these resources. They can be chained, and are executed from right to left.

* **Plugins**
  Plugin allows to perform advanced processing on resources.


## Setup

At root level:

1. Create the file `webpack.config.js`
```javascript


entry: {
    vendor: './src/vendor.ts',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
}



```

2. Create `/config/webpack.config.common.js`
```javascript

```
3. 
