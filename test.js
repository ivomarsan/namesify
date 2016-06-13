'use strict';

const Namesify = require('./index.js')

let n_ = new Namesify(' Ivomar de  A.           Santos  ')

// Features
let first = n_.first()  // Ivomar
let last  = n_.last()   // Santos
let full  = n_.full()   // Ivomar de A. Santos
let up    = n_.up()     // IVOMAR DE A. SANTOS
