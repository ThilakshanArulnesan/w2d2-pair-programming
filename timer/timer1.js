let arr = process.argv.slice(2);

for (let time of arr) {
  if (!isNaN(time) && time >= 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
      console.log("BEEP");
    }, time * 1000);
  }
}