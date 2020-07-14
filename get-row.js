// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

const getRow = function (str) {
  let row = [];

  for (let i = 0; i < pokemon.length; i++) {
    let rowNum = pokemon[i].indexOf(str);
    console.log(pokemon[i])
    if (rowNum >= 0) {
      return 'Row: ' + i
    } else {
      return null;
    }
  }
  return
}




// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
