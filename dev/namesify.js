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
