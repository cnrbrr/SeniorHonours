'use strict';
var stormpath = require('stormpath');
var blocklyOrder = ["blockly1-1", "blockly1-2", "blockly1-3"];
var textOrder = ["text1-1", "text1-2", "text1-3"];

// var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';
var fs = require('file-system');
var EVAL = require('eval');
var esprima = require('esprima');
var test = require('unit.js');
var changeLimit = 10;
var percentLimit = 66;
const Hapi = require('hapi');
const Good = require('good');
const Path = require('path');
const mime = require('mime');
const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});

//from https://api.stormpath.com/ui2/index.html#/quickstart/none/nodejs/backend/project-type/existing   
// application data
var my_api_key =  {id: '5Z9FR5F0AAJCLQHZOTPWPTESJ', secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'};
var my_href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';

//create the stormpath client object based on api info
var client = new stormpath.Client({ apiKey: my_api_key });
console.log("Client connection established");
console.log("Connecting to application...");
//get the right stormpath application for client
var application;
client.getApplication(my_href,
    function(err, app) {
     if (err) {
      return console.error(err);
  }
  application = app;
  console.log("Application Connected!");
});

server.register({
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }

}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

        if (err) {
            throw err;
        }
        server.log('info', 'Server running at: ' + server.info.uri);
    });
});


server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./public/html/index.html')
        }
    });

    server.route({
        method: 'POST',
        path: '/submit',
        handler: function (request, reply) {
            reply.file('./public/html/index.html')
        }
    });

    server.route({
        method: 'GET',
        path: '/public/css/index.css',
        handler: function (request, reply) {
            reply.file('./public/css/index.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/public/js/index.js',
        handler: function (request, reply) {
            reply.file('./public/js/index.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/public/html/Images/LoginBackground.jpg',
        handler: function (request, reply) {
            reply.file('./public/html/Images/LoginBackground.jpg');
        }
    });
    server.route({
        method: 'GET',
        path: '/home',
        handler: function (request, reply) {
            reply.file('./public/html/index.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/register',
        handler: function (request, reply) {
            reply.file('./public/html/register.html');
        }
    });
    server.route({
        method: 'GET',
        path: '/css/register.css',
        handler: function (request, reply) {
            reply.file('./public/css/register.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/register.js',
        handler: function (request, reply) {
            reply.file('./public/js/register.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/registerUser.js',
        handler: function (request, reply) {
            reply.file('./public/js/registerUser.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/Images/LoginBackground.jpg',
        handler: function (request, reply) {
            reply.file('./public/html/Images/LoginBackground.jpg');
        }
    });

    server.route({
        method: 'GET',
        path: '/javahome',
        handler: function (request, reply) {
            reply.file('./public/html/javaHome.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/Images/text1-1',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/text1-1.png');
        }
    });
    server.route({
        method: 'GET',
        path: '/Images/text1-2',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/text1-2.PNG');
        }
    });

    server.route({
        method: 'GET',
        path: '/Images/text1-3',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/text1-3.PNG');
        }
    });

    server.route({
        method: 'GET',
        path: '/Images/blockly1-1',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/blockly1-1.PNG');
        }
    });
    server.route({
        method: 'GET',
        path: '/Images/blockly1-2',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/blockly1-2.PNG');
        }
    });

    server.route({
        method: 'GET',
        path: '/Images/blockly1-3',
        handler: function (request, reply) {
            reply.file('./public/JSON/Images/blockly1-3.PNG');
        }
    });
    server.route({
        method: 'GET',
        path: '/css/javaHome.css',
        handler: function (request, reply) {
            reply.file('./public/css/javaHome.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/javaHome.js',
        handler: function (request, reply) {
            reply.file('./public/js/javaHome.js');
        }
    });

    server.route({
        method: 'GET',
        path: '/main',
        handler: function (request, reply) {
            reply.file('./public/html/home.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/css/home.css',
        handler: function (request, reply) {
            reply.file('./public/css/home.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/css/jstext.css',
        handler: function (request, reply) {
            reply.file('./public/css/jstext.css');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/home.js',
        handler: function (request, reply) {
            reply.file('./public/js/home.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/Images/java.png',
        handler: function (request, reply) {
            reply.file('./public/html/Images/java.png');
        }
    });

    server.route({
        method: 'GET',
        path: '/css/simple-sidebar.css',
        handler: function (request, reply) {
            reply.file('./public/css/simple-sidebar.css');
        }
    });

    server.route({
        method: 'GET',
        path: '/js/blockly_compressed.js',
        handler: function (request, reply) {
            reply.file('./public/js/blockly_compressed.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/js/blocks_compressed.js',
        handler: function (request, reply) {
            reply.file('./public/js/blocks_compressed.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/msg/js/en.js',
        handler: function (request, reply) {
            reply.file('./public/js/msg/js/en.js');
        }
    });
    server.route({
        method: 'GET',
        path: '/javaHome.js',
        handler: function (request, reply) {
            reply.file('./public/js/javaHome.js');
        }
    });
///////////////////////////////////////////
server.route({
    method: 'GET',
    path: '/js/alertify.js',
    handler: function (request, reply) {
        reply.file('./public/js/alertify.js');
    }
});
server.route({
    method: 'GET',
    path: '/js/css/alertify.css',
    handler: function (request, reply) {
        reply.file('./public/js/css/alertify.css');
    }
});
server.route({
    method: 'GET',
    path: '/js/css/themes/default.css',
    handler: function (request, reply) {
        reply.file('./public/js/css/themes/default.css');
    }
});

server.route({
    method: 'GET',
    path: '/ace/src-noconflict/ace.js',
    handler: function (request, reply) {
        reply.file('./public/js/ace.js');
    }
});

server.route({
    method: 'GET',
    path: '/jstext',
    handler: function (request, reply) {
        reply.file('./public/html/jstext.html');
    }
});

server.route({
    method: 'GET',
    path: '/js/jstext.js',
    handler: function (request, reply) {
        reply.file('./public/js/jstext.js');
    }
});
server.route({
    method: 'GET',
    path: '/jstext2',
    handler: function (request, reply) {
        reply.file('./public/html/jstext2.html');
    }
});

server.route({
    method: 'GET',
    path: '/ace/src-noconflict/theme-merbivore.js',
    handler: function (request, reply) {
        reply.file('./public/js/theme-merbivore.js');
    }
});


server.route({
    method: 'GET',
    path: '/ace/src-noconflict/mode-javascript.js',
    handler: function (request, reply) {
        reply.file('./public/js/mode-javascript.js');
    }
});

server.route({
    method: 'GET',
    path: '/ace/src-noconflict/worker-javascript.js',
    handler: function (request, reply) {
        reply.file('./public/js/worker-javascript.js');
    }
});

server.route({
    method: 'GET',
    path: '/text1-1',
    handler: function (request, reply) {
        reply.file('./public/JSON/text1-1.JSON');
    }
});

server.route({
    method: 'GET',
    path: '/text1-2',
    handler: function (request, reply) {
        reply.file('./public/JSON/text1-2.JSON');
    }
});

server.route({
    method: 'GET',
    path: '/text1-3',
    handler: function (request, reply) {
        reply.file('./public/JSON/text1-3.JSON');
    }
});
server.route({
    method: 'GET',
    path: '/blockly1-1',
    handler: function (request, reply) {
        reply.file('./public/JSON/blockly1-1.JSON');
    }
});

server.route({
    method: 'GET',
    path: '/blockly1-2',
    handler: function (request, reply) {
        reply.file('./public/JSON/blockly1-2.JSON');
    }
});

server.route({
    method: 'GET',
    path: '/blockly1-3',
    handler: function (request, reply) {
        reply.file('./public/JSON/blockly1-3.JSON');
    }
});
server.route({
    method: 'GET',
    path: '/javascript_compressed.js',
    handler: function (request, reply) {
        reply.file('./public/js/javascript_compressed.js');
    }
});

server.route({
    method: 'POST',
    path: '/regSubmit',
    handler: function (request, reply) {
        var newUser = {
            givenName: request.payload.givenName,
            surname: request.payload.surname,
            username: request.payload.username,
            email: request.payload.email,
            password: request.payload.password
        };
               //register the user
               application.createAccount(newUser, function(err, createdAccount) {
                 if (err) {
                  console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                  if(String(err).includes("2001")){
                    reply("USED");
                }else{
                    reply("N");
                }
            }else{
             console.log('Account Registered!');


             createdAccount.getCustomData(function(err, customData){
                customData.DOB = request.payload.DOB;
                customData.level = request.payload.level;
                customData.gender = request.payload.gender;
                    customData.crntJSON = "text1-1";//saves the current progress of the files, always starts here
                    customData.txtHist = [];
                    customData.blHist = [];
                    customData.opportunity = 0;
                    customData.diff = 0;
                    customData.save(function(err, callback){
                        if(!err) {
                            console.log('Custom data added');
                            var authenticator = new stormpath.OAuthAuthenticator(application);
                            authenticator.authenticate({
                                body: {
                                    grant_type: 'password',
                                    username: request.payload.email,
                                    password: request.payload.password
                                }
                            }, function(err2, result){
                                if(err2){
                                    console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                                    reply("N");
                                }else{
                                    console.log("Token Generated! ");
                                    reply(result.accessTokenResponse.access_token);
                                }
                    //A successful request will result in an accessTokenResponse
                });
                        }else{
                           console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                           reply("N");
                       }
                   });
});
}

});
}
});

server.route({
    method: 'POST',
    path: '/logSubmit',
    handler: function (request, reply) {
        var userAuth = {
            username: request.payload.email,
            password: request.payload.password
        };

               //register the user
               application.authenticateAccount(userAuth, function(err, validAccount) {
                 if (err) {
                  console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                  reply("N");
              }else{
                 console.log('Account Valid!');
                 var authenticator = new stormpath.OAuthAuthenticator(application);
                 authenticator.authenticate({
                    body: {
                        grant_type: 'password',
                        username: request.payload.email,
                        password: request.payload.password
                    }
                }, function(err2, result){
                    if(err2){
                        console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                        reply("N");
                    }else{
                        console.log("Token Generated! ");
                        reply(result.accessTokenResponse.access_token);
                    }
                    //A successful request will result in an accessTokenResponse
                });
             }

         });
}
});

server.route({
    method: 'POST',
    path: '/blocklySubmit',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        account.getCustomData(function(err3, customData){
                            if(!err3){
                                if(customData.crntJSON.charAt(0) != 'b'){
                                    if(customData.blHist.length > 0){
                                        blocklyNext(customData.blHist[customData.blHist.length - 1], function(nextBlockVal){
                                            if(nextBlockVal != "END"){
                                                customData.crntJSON = nextBlockVal;
                                                customData.save(function(err4, callback){
                                                    if(!err4){
                                                        reply("Y");
                                                        console.log("blockly Confirmed!");
                                                    }else{
                                                        console.log(err4);
                                                        reply("N");
                                                    }
                                                });
                                            }else{
                                                customData.crntJSON = customData.blHist[customData.blHist.length - 1]
                                                customData.save(function(err4, callback){
                                                    if(!err4){
                                                        reply("Y");
                                                        console.log("blockly Confirmed!");
                                                    }else{
                                                        console.log(err4);
                                                        reply("N");
                                                    }
                                                });
                                            }
                                        });

                                    }else{
                                        customData.crntJSON = "blockly1-1";
                                        customData.save(function(err, callback){
                                            if(!err){
                                                reply("Y");
                                                console.log("Blockly Confirmed!");
                                            }else{
                                                reply("N");
                                            }
                                        });
                                    }
                                }else{
                                    reply("Y");
                                }
                            }else{
                                reply("N");
                            }
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });
    }
});

server.route({
    method: 'POST',
    path: '/textSubmit',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        account.getCustomData(function(err3, customData){
                            if(!err3){
                                if(customData.crntJSON.charAt(0) != 't'){
                                    if(customData.txtHist.length > 0){
                                        textNext(customData.txtHist[customData.txtHist.length - 1], function(nextTextVal){
                                            if(nextTextVal != "END"){
                                                customData.crntJSON = nextTextVal;
                                                customData.save(function(err4, callback){
                                                    if(!err4){
                                                        reply("Y");
                                                        console.log("text Confirmed!");
                                                    }else{
                                                        console.log(err4);
                                                        reply("N");
                                                    }
                                                });
                                            }else{
                                                customData.crntJSON = customData.txtHist[customData.txtHist.length - 1]
                                                customData.save(function(err4, callback){
                                                    if(!err4){
                                                        reply("Y");
                                                        console.log("text Confirmed!");
                                                    }else{
                                                        console.log(err4);
                                                        reply("N");
                                                    }
                                                });
                                            }
                                        });
                                    }else{
                                        customData.crntJSON = "text1-1";
                                        customData.save(function(err, callback){
                                            if(!err){
                                                reply("Y");
                                                console.log("Text Confirmed!");
                                            }else{
                                                reply("N");
                                            }
                                        });
                                    }
                                }else{
                                    reply("Y");
                                }
                            }else{
                                reply("N");
                            }
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });
    }
});

server.route({
    method: 'POST',
    path: '/pageChange',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        reply("Y");
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });


    }
});

server.route({
    method: 'POST',
    path: '/continueAccount',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        reply("Y");
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });


    }
});

server.route({
    method: 'POST',
    path: '/getCurrentJSON',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        account.getCustomData(function(err, customData){
                            console.log("Current JSON sending... ");
                            reply(customData.crntJSON);
                            console.log("Current JSON sent!");
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });


    }
});

server.route({
    method: 'POST',
    path: '/changeCurrentJSON',
    handler: function (request, reply) {
        var token = request.payload.data;
        var changeTo = request.payload.changeTo;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        account.getCustomData(function(err, customData){
                            if(!err){
                                validateVal(changeTo, function(boolVal){
                                    if(boolVal == true){
                                        if(changeTo == customData.crntJSON){
                                            reply("SAME");
                                            console.log("Attempting to change to same file");
                                        }else{
                                        if(changeTo.charAt(0) == 't'){
                                            var arr = customData.txtHist;
                                            validateHistory(changeTo, arr, function(returned){
                                                if(returned == true){
                                                    customData.crntJSON = changeTo;
                                                    customData.save(function(err, callback){
                                                        if(!err){
                                                            console.log("New JSON Confirmed!");
                                                            reply("Y");
                                                        }else{
                                                            console.log("N")
                                                            console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                        }
                                                    });
                                                }else{
                                                    console.log("User Not at this point yet");
                                                    reply("H");
                                                }
                                            });
                                        }else if(changeTo.charAt(0) == 'b'){
                                            var arr = customData.blHist;
                                            validateHistory(changeTo, arr, function(returned){
                                                if(returned == true){
                                                    customData.crntJSON = changeTo;
                                                    customData.save(function(err, callback){
                                                        if(!err){
                                                            console.log("New JSON Confirmed!");
                                                            reply("Y");
                                                        }else{
                                                            reply("N");
                                                            console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                        }
                                                    });
                                                }else{
                                                    console.log("User Not at this point yet");
                                                    reply("H");
                                                }
                                            });
                                        }
                                    }
                                    }else{
                                        reply("Err");
                                        console.log("Not a valid subission");
                                    }
                            });


                            }else{
                                console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                reply("N");
                            }
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
}else{
    console.log("SOMETHING WENT WRONG!\n" + err + "-----");
    reply("N");
}
});


}
});

server.route({
    method: 'POST',
    path: '/getLevel',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        console.log("Account valid!");
                        account.getCustomData(function(err, customData){
                            console.log("Level sending... ");
                            reply(customData.level);
                            console.log("Level sent!");
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });


    }
});

server.route({
    method: 'POST',
    path: '/getNext',
    handler: function (request, reply) {
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        account.getCustomData(function(err, customData){
                            var fileName = customData.crntJSON;
                            if(fileName.charAt(0) == 't'){
                                var arr = customData.txtHist;
                                validateContains(fileName, arr, function(replyVal){
                                    if(replyVal == true){
                                        textNext(fileName, function(jsonNext){
                                            if(jsonNext.charAt(0) == 'E'){
                                                reply("END");
                                            }else{
                                            customData.crntJSON = jsonNext;
                                            customData.save(function(err, callback){
                                                if(!err){
                                                    console.log("Next Confirmed!");
                                                    reply("Y");
                                                }else{
                                                    console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                }
                                            }); 
                                            }
                                        });
                                    }else{
                                        textNext(fileName, function(jsonNext){
                                            if(jsonNext.charAt(0) == 'E'){
                                                if(customData.txtHist.length > 0){
                                                    customData.txtHist[customData.txtHist.length] = customData.crntJSON;
                                                }else{
                                                    customData.txtHist[0] = customData.crntJSON;
                                                }    
                                                customData.save(function(err, callback){
                                                    if(!err){
                                                        reply("END");
                                                        console.log("Last Confirmed!");
                                                    }else{
                                                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                    }
                                                });
                                            }else{
                                                if(customData.txtHist.length > 0){
                                                    customData.txtHist[customData.txtHist.length] = customData.crntJSON;
                                                }else{
                                                    customData.txtHist[0] = customData.crntJSON;
                                                }
                                                customData.crntJSON = jsonNext;
                                                customData.save(function(err, callback){
                                                    if(!err){
                                                        console.log("Next Confirmed!");
                                                        reply("Y");
                                                    }else{
                                                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                                
                        }else if(fileName.charAt(0) == 'b'){
                                var arr = customData.blHist;
                                validateContains(fileName, arr, function(replyVal){
                                    if(replyVal == true){
                                        blocklyNext(fileName, function(jsonNext){
                                            if(jsonNext.charAt(0) == 'E'){
                                                reply("END");
                                            }else{
                                            customData.crntJSON = jsonNext;
                                            customData.save(function(err, callback){
                                                if(!err){
                                                    console.log("Next Confirmed!");
                                                    reply("Y");
                                                }else{
                                                    console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                }
                                            }); 
                                            }
                                        });
                                    }else{
                                        blocklyNext(fileName, function(jsonNext){
                                            if(jsonNext.charAt(0) == 'E'){
                                                if(customData.blHist.length > 0){
                                                    customData.blHist[customData.blHist.length] = customData.crntJSON;
                                                }else{
                                                    customData.blHist[0] = customData.crntJSON;
                                                }    
                                                customData.save(function(err, callback){
                                                    if(!err){
                                                        reply("END");
                                                        console.log("Last Confirmed!");
                                                    }else{
                                                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                    }
                                                });
                                            }else{
                                                if(customData.blHist.length > 0){
                                                    customData.blHist[customData.blHist.length] = customData.crntJSON;
                                                }else{
                                                    customData.blHist[0] = customData.crntJSON;
                                                }
                                                customData.crntJSON = jsonNext;
                                                customData.save(function(err, callback){
                                                    if(!err){
                                                        console.log("Next Confirmed!");
                                                        reply("Y");
                                                    }else{
                                                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }

                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("N");
            }
        });
    }
});

server.route({
    method: 'POST',
    path: '/getValidate',
    handler: function (request, reply) {
        var code = request.payload.code;
        var token = request.payload.data;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        account.getCustomData(function(err, customData){
                            var fileName = customData.crntJSON;
                            validate(code, fileName, function(result){
                                if(result){
                                    console.log("Passed Test!");
                                    reply("Y");
                                }else{
                                    console.log("Failed Test");
                                    reply("N");
                                }
                            });
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                        reply("N");
                    }
                });
            }else{
                console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                reply("Relog");
            }
        });
    }
});

server.route({
    method: 'POST',
    path: '/updateLevel',
    handler: function (request, reply) {
        var token = request.payload.data;
        var levels = [request.payload.how, request.payload.desc, request.payload.task];
        var authenticator = new stormpath.OAuthAuthenticator(application);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
                result.getAccount(function(err2, account) {
                    if(!err2){
                        account.getCustomData(function(err, customData){
                            var crntLevel = parseInt(customData.level);
                            var difference = parseInt((levels[0] - crntLevel) + (levels[1] - crntLevel) + (levels[2] -crntLevel));
                            var chances = parseInt((5 - crntLevel)*3);
                            var updatedOpp = parseInt(customData.opportunity);
                            var updatedDiff = parseInt(customData.diff);
                            if(customData.opportunity == 0){
                                customData.opportunity = chances;
                            }else{
                                updatedOpp+=chances;
                                customData.opportunity = updatedOpp;
                            }

                            if(customData.diff == 0){
                                customData.diff = difference;
                            }else{
                                updatedDiff+=difference;
                                customData.diff = updatedDiff;
                            }
                            var percent = (parseInt(updatedDiff)/parseInt(updatedOpp))*100;
                            if(updatedOpp > changeLimit && percent > percentLimit){
                                if(crntLevel < 5){
                                    crntLevel++;
                                    console.log("changing level...");
                                    customData.level = crntLevel;
                                    console.log("level changed!");
                                }else{
                                    console.log("MAX LEVEL ALREADY ACHIEVED!");
                                }
                            }
                            customData.save(function(err, callback){
                                if(!err){
                                    console.log("Level Confirmed!", customData.level);
                                }else{
                                    console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                                }
                            });
                        });
                    }else{
                        console.log("SOMETHING WENT WRONG!\n" + err2 + "-----");
                    }
                });
                }else{
                    console.log("SOMETHING WENT WRONG!\n" + err + "-----");
                }
            });
        }
    });
});

function blocklyNext(current, callback){//gets the next blockly file
    for(var i = 0; i < blocklyOrder.length; i++){
        if(current == blocklyOrder[i]){
            if(i+1 <  blocklyOrder.length){
                callback(blocklyOrder[i+1]);
                return;
            }else{
                callback("END");
                return;
            }
        }
    }
}

function textNext(current, callback){//gets the next text file
    for(var i = 0; i < textOrder.length; i++){
        if(current == textOrder[i]){
            if(i+1 <  textOrder.length){
                callback(textOrder[i+1]);
                return;
            }else{
                callback("END");
                return;
            }
        }
    }
}

function validate(code, filename, callback){
    // var result = filename + "Result.txt";
    switch(filename){
        case "blockly1-1":
        var str = code.toLowerCase();
        try{
            test.value(str).contains('hello');
            test.value(str).contains('world');
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var strBool = false;
            var varBool = false;              
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    var comp = String(tree[i].value).toLowerCase();
                    if(comp == "'hello world'" || comp == "'hello world!'" || comp == '"hello world"' || comp == '"hello world!"'){
                        strBool = true;
                    }
                }
                if(tree[i].value == 'var'){
                    varBool = true;
                }
            }
            if(strBool == true && varBool == true){
                callback(true);
                return;
            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break; 

        case "blockly1-2":
        var str = code.toLowerCase();
        try{
            test.value(str).contains('hello', 'world', 8);
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var strBool = false;
            var varBool = false;
            var numBool = false;
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    var comp = String(tree[i].value).toLowerCase();
                    if(comp == "'hello world'" || comp == "'hello world!'" || comp == '"hello world"' || comp == '"hello world!"'){
                        strBool = true;
                    }
                }
                if(tree[i].value == 'var'){
                    varBool = true;
                }
                if(tree[i].type == 'Numeric' && tree[i].value == '8'){
                    numBool = true;
                }
            }
            if(strBool == true && varBool == true && numBool == true){
                callback(true);
                return;
            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break;
        
        case "blockly1-3":
        try{
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var opBool = false;
            var correctEnd = false;
            var numCount = 0;
            var usedNums = [];
            var iden = [];
            var opUsed;
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    callback(false);
                    return;
                }

                if(tree[i].type == 'Numeric'){
                    usedNums[numCount] = tree[i].value;
                    numCount++;

                }
                if(tree[i].type == 'Punctuator'){
                    if(tree[i].value == '+'){
                        opBool = true;
                        opUsed = 1;
                    }else if(tree[i].value == '-'){
                        opBool = true;
                        opUsed = 2;
                    }else if(tree[i].value == '/'){
                        opBool = true;
                        opUsed = 3;
                    }else if(tree[i].value == '*'){
                        opBool = true;
                        opUsed = 4;
                    }
                }
                if(tree[i].type == 'Identifier'){
                    if(iden.indexOf(tree[i].value) < 0){
                        iden[iden.length] = tree[i].value;
                    }
                }

                if(i == (tree.length - 1)){
                    if(tree[i].type == 'Punctuator' && tree[i].value == ';'){
                        correctEnd = true;
                    }
                }
            }
            if(opBool == true && iden.length == 3 && numCount == 2){
                var program = "";
                if(correctEnd){
                    program = code + " exports.x = "+String(iden[iden.length - 1]).trim();
                }else{
                    program = code + "; exports.x = "+String(iden[iden.length - 1]).trim();
                }
                var logger = EVAL(program);
                var stepOne = parseFloat(logger.x);
                var stepTwo = parseFloat(usedNums[0]);
                for(var i = 1; i < usedNums.length; i++){
                    if(opUsed == 1){
                        stepTwo += parseFloat(usedNums[i]);
                    }else if(opUsed == 2){
                        stepTwo -= parseFloat(usedNums[i]);
                    }else if(opUsed == 3){
                        stepTwo /= parseFloat(usedNums[i]);
                    }else if(opUsed == 4){
                        stepTwo *= parseFloat(usedNums[i]);
                    }

                }
                if(stepOne == stepTwo){
                    callback(true);
                    return;
                }else{
                    callback(false);
                    return;
                }

            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break;
        
        case "text1-1":
        var str = code.toLowerCase();
        try{
            test.value(str).contains('hello');
            test.value(str).contains('world');
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var strBool = false;
            var varBool = false;              
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    var comp = String(tree[i].value).toLowerCase();
                    if(comp == "'hello world'" || comp == "'hello world!'" || comp == '"hello world"' || comp == '"hello world!"'){
                        strBool = true;
                    }
                }
                if(tree[i].value == 'var'){
                    varBool = true;
                }
            }
            if(strBool == true && varBool == true){
                callback(true);
                return;
            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break; 

        case "text1-2":
        var str = code.toLowerCase();
        try{
            test.value(str).contains('hello', 'world', 8);
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var strBool = false;
            var varBool = false;
            var numBool = false;
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    var comp = String(tree[i].value).toLowerCase();
                    if(comp == "'hello world'" || comp == "'hello world!'" || comp == '"hello world"' || comp == '"hello world!"'){
                        strBool = true;
                    }
                }
                if(tree[i].value == 'var'){
                    varBool = true;
                }
                if(tree[i].type == 'Numeric' && tree[i].value == '8'){
                    numBool = true;
                }
            }
            if(strBool == true && varBool == true && numBool == true){
                callback(true);
                return;
            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break;

        case "text1-3":
        try{
            esprima.parse(code);
            var tree = esprima.tokenize(code);
            var opBool = false;
            var correctEnd = false;
            var numCount = 0;
            var usedNums = [];
            var iden = [];
            var opUsed;
            for(var i = 0; i < tree.length; i++){
                if(tree[i].type == 'String'){
                    callback(false);
                    return;
                }

                if(tree[i].type == 'Numeric'){
                    usedNums[numCount] = tree[i].value;
                    numCount++;

                }
                if(tree[i].type == 'Punctuator'){
                    if(tree[i].value == '+'){
                        opBool = true;
                        opUsed = 1;
                    }else if(tree[i].value == '-'){
                        opBool = true;
                        opUsed = 2;
                    }else if(tree[i].value == '/'){
                        opBool = true;
                        opUsed = 3;
                    }else if(tree[i].value == '*'){
                        opBool = true;
                        opUsed = 4;
                    }
                }
                if(tree[i].type == 'Identifier'){
                    if(iden.indexOf(tree[i].value) < 0){
                        iden[iden.length] = tree[i].value;
                    }
                }

                if(i == (tree.length - 1)){
                    if(tree[i].type == 'Punctuator' && tree[i].value == ';'){
                        correctEnd = true;
                    }
                }
            }
            if(opBool == true && iden.length == 3 && numCount == 2){
                var program = "";
                if(correctEnd){
                    program = code + " exports.x = "+String(iden[iden.length - 1]).trim();
                }else{
                    program = code + "; exports.x = "+String(iden[iden.length - 1]).trim();
                }
                var logger = EVAL(program);
                var stepOne = parseFloat(logger.x);
                var stepTwo = parseFloat(usedNums[0]);
                for(var i = 1; i < usedNums.length; i++){
                    if(opUsed == 1){
                        stepTwo += parseFloat(usedNums[i]);
                    }else if(opUsed == 2){
                        stepTwo -= parseFloat(usedNums[i]);
                    }else if(opUsed == 3){
                        stepTwo /= parseFloat(usedNums[i]);
                    }else if(opUsed == 4){
                        stepTwo *= parseFloat(usedNums[i]);
                    }

                }
                if(stepOne == stepTwo){
                    callback(true);
                    return;
                }else{
                    callback(false);
                    return;
                }

            }else{
                callback(false);
                console.log("FAILED!");
                return;
            }
        }catch(err){
            console.log(err);
            callback(false);
            return;
        }
        console.log("PASSED!");
        break;
    }
}

function evalVar(code, countVal, callback){
    var splitCode = code.split(" ");
    var counter = 0;
    for(var i = 0; i < splitCode.length; i++){
        if(splitCode[i].includes('\n')){
            var check = splitCode[i].split('\n');
            for(var j = 0; j < check.length; j++){
                if(check[j] == 'var'){
                    if(counter == countVal){
                        if((i+1)<splitCode.length){
                            callback(splitCode[i+1]);
                            return;
                        }else{
                            callback("ERROR");
                            return;
                        }
                    }else{
                        counter++;
                    }
                }
            }
        }
        if(splitCode[i] == 'var'){
            if(counter == countVal){
                if((i+1)<splitCode.length){
                    callback(splitCode[i+1]);
                    return;
                }else{
                    callback("ERROR");
                    return;
                }
            }else{
                counter++;
            }
            
        }
    }
    callback("ERROR");
}


function validateVal(val, callback){
    if(val.charAt(0) == 't'){
        for(var i = 0; i < textOrder.length; i++){
            if(val == textOrder[i]){
                callback(true);
                return;
            }
        }
    }else if(val.charAt(0) == 'b'){
        for(var i = 0; i < blocklyOrder.length; i++){
            if(val == blocklyOrder[i]){
                callback(true);
                return;
            }
        }
    }
    callback(false);
}

function validateHistory(val, arr, callback){
    if(arr.length > 0){
        for(var i = 0; i < arr.length; i++){
            if(val == arr[i]){
                callback(true);
                return;
            }
        }
        if(val.charAt(0) == 'b'){
            blocklyNext(arr[arr.length-1], function(boolGetter){
                if(val == boolGetter){
                    callback(true);
                    return;
                }else{
                    callback(false);
                }
            });
        }else if(val.charAt(0) == 't'){
            textNext(arr[arr.length-1], function(boolGetter){
                if(val == boolGetter){
                    callback(true);
                    return;
                }else{
                    callback(false);
                }
            });
        }
        
    }else{
        callback(false);
    }
    
    
}

function validateContains(val, arr, callback){
    for(var i = 0; i < arr.length; i++){
        if(val == arr[i]){
            callback(true);
            return;
        }
    }
    callback(false);
}
