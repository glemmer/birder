const yargs = require('yargs');
const addresses = require('./js/addresses.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch birding information',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

  addresses.requestAddress(argv.address,(res) => {
    console.log(res);
  });
