const readline = require('readline');

const interface = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});
interface.question(`how are you today?`, function(answer){
  console.log(`you answered:${answer}`);
  process.exit();

})
const number = Math.random();
