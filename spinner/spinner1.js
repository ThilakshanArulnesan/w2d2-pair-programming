let arr = ["\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|",
  "\r/",
  "\r-",
  "\r\\",
  "\r|"];

let time = 100;
for (let char in arr) {
  setTimeout(() => {
    process.stdout.write(arr[char] + "   ");
    if (char == arr.length - 1) {
      console.log();
    };
  }, time);
  time += 200;
}



/*
Old implementation:
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\-   ');
}, 1300);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1500);
setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\|   ');
  console.log();
}, 1700);
*/
// ... fill in the rest yourself ...
