var time = 1

var colors = require('colors/safe');
 
// set single property
var error = colors.red;
error('this is red');
 
// set theme
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
// outputs red text
console.log(colors.error("this is an error"));
 
// outputs yellow text
console.log(colors.warn("this is a warning"));

var timer = setInterval(function(){
    time++;
    console.log(colors.cyan(time + ' ' + "Yeezy Supply Bookmarks Created, Check Webhook"));

    if(time>10000){
        clearInterval(timer);
    }

}, 50);

