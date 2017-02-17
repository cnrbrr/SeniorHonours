var express = require('express');
var stormpath = require('express-stormpath');
  var client = new stormpath.Client({
  apiKey: {
    id: '5Z9FR5F0AAJCLQHZOTPWPTESJ',
    secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'
  }
});
var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';
var app = express();

app.use(stormpath.init(app, {
  // Optional configuration options.
}));

app.listen(3000);

// Stormpath will let you know when it's ready to start authenticating users.
app.on('stormpath.ready', function () {
  console.log('Stormpath Ready!');
});