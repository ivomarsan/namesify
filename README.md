# namesify
A Little Library to manipulate names.

With namesify you can get the First Name, Last Name or removes whitespace from Name

### How to Install
```
$ npm install namesify
```

### How I use
```
'use strict';

const Namesify = require('namesify')

let n_ = new Namesify(' Ivomar de  A.           Santos  ')

// Features
let first = n_.first()  // Ivomar
let last  = n_.last()   // Santos
let full  = n_.full()   // Ivomar de A. Santos
let up    = n_.up()     // IVOMAR DE A. SANTOS

```
