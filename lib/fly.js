var child_process = require('child_process')
  , chalk = require('chalk')

var prep_http = function (s) {
  var prefix = 'http://';
  if (s.substr(0, prefix.length) !== prefix) {
      s = prefix + s     
  }
  return s
}

exports.upon = function (argv) {
  var url = null
  switch (argv._[0]) {
    case 'gg':
    case 'google':
      url = 'https://www.google.com/ncr'
      break
    case 'v2ex':
      url = 'https://www.v2ex.com'
      break
    case 'insekai':
    case 'sekai':
      url = 'https://insekai.com'
      break
    case 'ph':
    case 'producthunt':
      url = 'http://www.producthunt.com'
      break
    case 'hn':
    case 'hackernews':
      url = 'https://news.ycombinator.com'
      break
    case 'gh':
    case 'githunt':
      url = 'https://githunt.io'
      break
    case 'github':
    case 'git':
      url = 'https://github.com'
      break
    default:
      url = prep_http(argv._[0])
      break
  }
  console.log('hello ' + chalk.bgGreen(argv._[0]))
  child_process.exec("open -a '/Applications/Google Chrome.app' '"+url+"'", function(error, stdout, stderr) {
    console.log(stdout)
  });
}