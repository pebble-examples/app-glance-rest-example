var request  = require('request');
var schedule = require('node-schedule');
var env      = require('node-env-file');

env(__dirname + '/.env');

//var j = schedule.scheduleJob({hour: 00, minute: 00}, function() {
var j = schedule.scheduleJob('*/1 * * * *', function() {
  // Run once per day
  updateAppGlanceSlice();
});


function updateAppGlanceSlice() {
  console.log(process.env.TIMELINE_API_KEY);
  return;

  //Lets configure and request
  request({
    url: 'https://modulus.io/contact/demo', //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'POST',
    //Lets post the following key/values as form
    json: {
      field1: 'data',
      field2: 'data'
    }
  }, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
    } 
  }); 
}



