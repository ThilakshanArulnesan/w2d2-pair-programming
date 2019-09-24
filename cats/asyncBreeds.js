const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('Callback: I have the data!');
    /*if (!error)*/ callback(data);
  });
};
module.exports = breedDetailsFromFile;

// breedDetailsFromFile('saimese', (bomb) => {
//   console.log(`Return Value: ${bomb}`); // => should print correctly
// });
