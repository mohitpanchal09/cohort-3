

const fs = require('fs')
const {Command} = require('commander');
const program = new Command();

program
  .name('string-count')
  .description('CLI to some JavaScript word  count')
  .version('0.8.0');

program.command('count')
  .description('count the words in a string')
  .argument('<file>', 'file path')
  .option('--count', 'count the words in a string')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((file) => {
    fs.readFile(file,'utf-8',(err,data)=>{
        console.log(data)
    })
  });

program.parse();