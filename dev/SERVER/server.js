'use strict';
var stormpath = require('stormpath');

// var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';
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
        reply.file('./public/ace/src-noconflict/ace.js');
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
    path: '/jstext2',
    handler: function (request, reply) {
        reply.file('./public/html/jstext2.html');
    }
});

server.route({
    method: 'GET',
    path: '/ace/src-noconflict/theme-merbivore.js',
    handler: function (request, reply) {
        reply.file('./public/ace/src-noconflict/theme-merbivore.js');
    }
});


server.route({
    method: 'GET',
    path: '/ace/src-noconflict/mode-javascript.js',
    handler: function (request, reply) {
        reply.file('./public/ace/src-noconflict/mode-javascript.js');
    }
});

server.route({
    method: 'GET',
    path: '/ace/src-noconflict/worker-javascript.js',
    handler: function (request, reply) {
        reply.file('./public/ace/src-noconflict/worker-javascript.js');
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
              }else{
                   // console.log('Account:', createdAccount);
                   console.log('Account Registered!');


                   createdAccount.getCustomData(function(err, customData){
                    customData.DOB = request.payload.DOB;
                    customData.level = request.payload.level;
                    customData.gender = request.payload.gender;
                    customData.save(function(err){
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
                                }else{
                                    console.log("Token Generated!");
                                    reply(result.accessTokenResponse);
                                }
                    //A successful request will result in an accessTokenResponse
                });
                        }else{
                           console.log("SOMETHING WENT WRONG!\n" + err + "-----");
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
                    }else{
                        console.log("Token Generated!");
                        reply(result.accessTokenResponse);
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
        var userAuth = {
            username: request.payload.email,
            password: request.payload.password
        };

               //register the user
               application.authenticateAccount(userAuth, function(err, validAccount) {
                 if (err) {
                  console.log("SOMETHING WENT WRONG!\n" + err + "-----");
              }else{
                 console.log('Account Valid!');
                 reply.file('./public/js/mainLink.js');
             }

         });
           }
       });

server.route({
    method: 'GET',
    path: '/pageChange',
    handler: function (request, reply) {
        var data = request.payload.data;
        var page = request.payload.page;
        var token = data.accessTokenResponse;
        var authenticator = new stormpath.OAuthAuthenticator(application);
        console.log("Page: ", page);
        console.log("TOKEN: ", data);
        authenticator.authenticate({
            headers: { authorization: 'Bearer: ' + token }
        }, function(err, result) {
            if(!err){
            result.getAccount(function(err2, account) {
                if(!err2){
                console.log(account);
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


    // server.route({
    //     method: 'POST',
    //     path: '/regSubmit',
    //     handler: function (request, reply) {
    //         console.log(request.payload);

        //     console.log("POSTING");
        //     var client = new stormpath.Client({
        //       apiKey: {
        //         id: '5Z9FR5F0AAJCLQHZOTPWPTESJ',
        //         secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'
        //     }
        // });
        //     console.log("Client created");

        //     client.getApplications({ name: 'My Application' }, function (err, applications) {
        //         console.log("HERE");
        //       if (err) {
        //         return console.error(err);
        //     }

        //     var application = applications.items[0];
        // });
        //     console.log("DONE");
       // getValues();
    //     }
    // });
// server.route({
//     method: 'POST', 
//     path: '/regSubmit',
//     handler: function (request, reply) {
//         reply.file('./public/js/registerUser.php');
//         console.log("New Applicant Received");
//     }
// });
//});

// function getValues(){
//     console.log("Works so far!");
//     var first = document.getElementById('fname');
//     console.log("Hope: " + first);
// }
