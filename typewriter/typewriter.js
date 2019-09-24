const sentence = "hello there from lighthouse labs";
// let time = 0;
// const count = function(time, letter, callback) {
//   setTimeout(() => {
//     process.stdout.write(letter);
//   }, time);
// };

// for (const char of sentence) {

//   // count(time, char);
//   // time += 50;
// }

const countRec = function(time, str) {
  if (str === "") {
    console.log();
  } else {
    process.stdout.write(str[0]);
    setTimeout(() => {
      countRec(time, str.slice(1));
    }, time);
  }
};

countRec(50, sentence);
