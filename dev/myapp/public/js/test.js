var stormpath = require('stormpath');

var client = new stormpath.Client({
  apiKey: {
    id: '5Z9FR5F0AAJCLQHZOTPWPTESJ',
    secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'
  }
});
var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';

client.getApplication(href, function (err, application) {
//   var acc = {
//   givenName: 'Foo',
//   surname: 'Bar',
//   username: 'foolmeonce',
//   email: 'foo@example.com',
//   password: 'Changeme1!'
// };

// application.createAccount(acc, function(err, createdAccount) {
//   console.log(createdAccount);
// });
client.getAccount('https://api.stormpath.com/v1/accounts/5xeAvViIP3XwZjsYqixPot', function(err, account){
  console.log("Found Account: ", account.email);
  account.getCustomData(function(err, data){
    data.DOB = "18/01/1996";
    data.gender = "Male";
    data.skill = "3";
    data.lastLogin = {
      date: "31/01/2017",
      time: "15:07"
    };

    data.save(function(err){
      console.log("Saved account data!");
    });
  });
});
});
console.log("HERE");
