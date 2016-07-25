var request  = require('request');
var schedule = require('node-schedule');
var env      = require('node-env-file');

// Load enviroment settings
env(__dirname + '/.env');

// Run once per day
var cronSchedule = { hour: 00, minute: 00 }

if(process.env.DEBUG) {
  // Run every minute
  cronSchedule = '*/1 * * * *';
}

// Schedule the job
var j = schedule.scheduleJob(cronSchedule, updateAppGlanceSlice);

// Send AppGlanceSlice to the REST API
function updateAppGlanceSlice() {
  console.log('Sending AppGlanceSlice...');

  var dateToday = new Date();

  var dateTomorrow = new Date();
  dateTomorrow.setDate(dateTomorrow.getDate() + 1);

  // Construct JSON containing our AppGlanceSlice
  var data = {
    "slices": [
      {
        "layout": {
          "icon": "system://images/TIMELINE_BASEBALL",
          "subtitleTemplateString": dateToday.toUTCString()
        },
        "expirationTime": dateTomorrow.toISOString()
      }
    ]
  }

  // Send a PUT request to the REST endpoint
  request({
    url: process.env.REST_ENDPOINT,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-User-Token': process.env.REST_API_KEY
    },
    json: data
  }, function(error, response, body){
    if(error) {
      console.log('FAILED sending AppGlanceSlice...');
      console.log(error);
    } else {
      console.log('SUCCESS sending AppGlanceSlice...');
      console.log(response.statusCode, body);
    } 
  }); 
}
