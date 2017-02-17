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

// server.register([{
//     register: require('hapi-stormpath'),
//     options: {
//         apiKeyId: '5Z9FR5F0AAJCLQHZOTPWPTESJ', //required
//         apiKeySecret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw', //required
//         applicationHref: 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj', // optional, if specified, plugin exposes application and authenticator
//         cacheOptions: { store: 'memory', ttl: 300, tti: 300 } // optional
//     }
// }]);
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
        method: 'POST',
        path: '/regSubmit',
        handler: function (request, reply) {
            console.log(request.payload);

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
        }
    });
// server.route({
//     method: 'POST', 
//     path: '/regSubmit',
//     handler: function (request, reply) {
//         reply.file('./public/js/registerUser.php');
//         console.log("New Applicant Received");
//     }
// });
});

// function getValues(){
//     console.log("Works so far!");
//     var first = document.getElementById('fname');
//     console.log("Hope: " + first);
// }
