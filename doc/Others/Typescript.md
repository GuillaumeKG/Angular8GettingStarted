#

## Variables
### keywords
* **var**  
* **let**  
* **const**  

### Types
* **number**  
* **string**
* **boolean**
* **object**  
```Typescript
let myObj = {
    a:1,
    b:2
}

for(let prop in obj){
    obj[prop] = ...;
}
```

* **enum**  
By default, value attached to key are automatically assigned with a number auto-incremented starting from 0. But the initial value can be overrided or any other keys.
```Typescript
enum Direction {
    Up, // 0
    Down, // 1
    Left, // 2
    Right, // 3
}

enum Direction {
    Up =1 , // 1
    Down, // 2
    Left, // 3
    Right, // 4
}
```
Typescript also support string Enum: 
```Typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```
Enum value can be an expression:
```Typescript
enum FileAccess {
    // constant members
    None,
    Read    = 1 << 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
    // computed member
    G = "123".length
}
```

* **array**
```Typescript
let list: number[] = [1, 2, 3]

list.push(4)
list.unshift(0)

```  
* **map**  
```Typescript
let map: Map([
    ["key1", 12],[
    ["key2", 20],[
    ["key3",  25]
    ])

map.has("key1")

// Automatically call for map.entries()
for (let [key, value] of map){
    console.log(key, value)
}

```  

* **set**  
```Typescript
let set = new Set["XXXXX", "YYYY", "ZZZZ"]

let set = new Set()

set.add("EEEEEEE")

```

## Loop
* **For**  
```Typescript
# Return index/keys of the iterable
for(item in list){

}

# Return values of the iterable
for(item of list){

}

```  


## Syntax

* Conversion to Number: `+myVar` 
* 

## Decorator
Functions that add meta-data to "things" they are attached to.  
https://github.com/jayphelps/core-decorators

```Typescript
// target is the element decorated
Student(target){
    // Add dynamically a new method 'course' to the class decorated
    Object.defineProperty(target.prototype, 'course', {value: () => "xxxxx"})
}

@Student
class Person {
    firstName: string
    lastName: string

    ...
}
```

To pass parameters to the decorator you need to encapsulate the decorator method in another method which receive parameters in input:  
```Typescript
function Student(config){
    return function(target){
        Object.defineProperty(target.prototype, 'course', {value: () => config.course})
    }
}

@Student({
    course: "Physics"
})
class Person {
    firstName: string
    lastName: string

    ...
}
```