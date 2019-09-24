const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let responses = [];


rl.question("What's your name? Nicknames acceptable too\n", (answer) => {
  responses.push(answer);
  console.log(responses);
  // rl.close();
  rl.question("what's and activity you like doing?\n", (answer) => {
    responses.push(answer);
    rl.question("What do you listen to while doing that?\n", (answer) => {
      responses.push(answer);
      rl.question("Which meal is your favourite? (eg; dinner, breakfast, etc.)\n", (answer) => {
        responses.push(answer);
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          responses.push(answer);
          rl.question("Which sport is your absolute fav?\n", (answer) => {
            responses.push(answer);
            rl.question("finish this sentence: I am amazing at...\n", (answer) => {
              responses.push(answer);
              console.log(
                `my name is ${responses[0]}, I like to ${responses[1]} while listening to ${responses[2]}. My favourite meal is ${responses[3]}, I like to eat ${responses[4]}! My abso fav sports is ${responses[5]}. I am amazing at ${responses[6]}`
              );
              rl.close();
            });
          });
        });
      });
    });
  });
  // console.log(`Thank you for your valuable feedback: ${answer}`);

});
