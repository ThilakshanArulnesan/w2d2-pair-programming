const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const stdout = process.stdout;
let numbers = "123456789";
stdin.on('data', (key) => {
  //process.stdout.write('.');
  if (key === 'b') {
    stdout.write("\x07");
    console.log("BEEP");
  }

  if (numbers.includes(key)) {
    stdout.write(key + '\n');
    stdout.write(`setting timer for ${key} seconds.`);
    setTimeout(() => {
      stdout.write("\n\x07");
      console.log("BEEP");
    }, key * 1000);

  }
  if (key === '\u0003') {
    stdout.write(`Thanks for using me, ciao!\n`);

    process.exit();
  }
});
