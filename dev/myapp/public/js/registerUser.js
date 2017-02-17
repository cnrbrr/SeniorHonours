var stormpath = require('stormpath');
  var client = new stormpath.Client({
  apiKey: {
    id: '5Z9FR5F0AAJCLQHZOTPWPTESJ',
    secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'
  }
});
var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';

  client.getApplication(href, function (err, application) {
    alert(application);
//     var accHref = "";
//     var acc = {
//   givenName: fname,
//   surname: sname,
//   email: em,
//   password: pw
// };
//   application.createAccount(acc, function(err, createdAccount) {
//     alert("OK");
//     console.log(createdAccount);
//   //accHref = application.href;
// });
  // client.getAccount(accHref, function(err, account){
  // account.getCustomData(function(err, data){
  //   data.DOB = dob;
  //   data.gender = gender;
  //   data.skill = level;
  //   // data.lastLogin = {
  //   //   date: "31/01/2017",
  //   //   time: "15:07"
  //   // };

  //   data.save(function(err){
  //     alert("YAY");
  //   });
//   });
// });
});
