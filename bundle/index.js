(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(() => {
  'use strict';

  ''.trim || (String.prototype.trim = () => this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') );

  const titleize = str => {
    let text = str.replace(/\s{2,}/g, ' ')
      , name = text.trim()
      , toLower = name.toLowerCase()
      , words = toLower.split(' ')
      , total = words.length
    ;

    for (let i = 0; i < total; i++)
      if(words[i] !== 'de' && words[i] !== 'da' && words[i] !== 'do' )
        words[i] = words[i].replace(/(^)\S/g, char => char.toUpperCase() )

    return words.join(' ');
  };


  class Namesify {
    constructor(str) {
      this.name = titleize(str)
    }
    first() {
      return this.name.split(' ')[0]
    }
    last() {
      return this.name.split(' ').pop()
    }
    full() {
      return this.name
    }
    up() {
      return this.name.toUpperCase()
    }
  }

  module.exports = Namesify;

})();

},{}]},{},[1])