'use strict';
var stormpath = require('stormpath');
  var client = new stormpath.Client({
  apiKey: {
    id: '5Z9FR5F0AAJCLQHZOTPWPTESJ',
    secret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw'
  }
});
var href = 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj';
const Hapi = require('hapi');
var $ = require('jQuery');
var jsdom = require('jsdom').jsdom
const Good = require('good');
const Path = require('path');
const server = new Hapi.Server();
var stormpath = require('stormpath');

var client = new stormpath.Client();
server.connection({ port: 3000, host: 'localhost' });


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});


server.register([{
    register: require('hapi-stormpath'),
    options: {
        apiKeyId: '5Z9FR5F0AAJCLQHZOTPWPTESJ', //required
        apiKeySecret: 'aO3Cxa02/hv1TH/UmVPm1Zp4P+mJpH90noYIoc8M/hw', //required
        applicationHref: 'https://api.stormpath.com/v1/applications/2ZJzzlc0QcDOTrMIPZ7Jvj', // optional, if specified, plugin exposes application and authenticator
        cacheOptions: { store: 'memory', ttl: 300, tti: 300 } // optional
    }
}]);
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
});

$( document ).ready(function() {
    $( '#regBtn' ).click(function(){
        var $first = $( '#fname' ).val();
        var $second = $( '#sname' ).val();
        var $email = $( '#emailAdd' ).val();
        var $passFirst = $( '#initPass' ).val();
        var $level = $( '#rangeVal' ).val();
        var $passSecond = $( '#sPass' ).val();
        var $DOB = $( '#bday' ).val();
        var $gender = getGender();
        if(nameCheck($first) === false){
            alert("Please enter a valid first name!");
            return;
        }
        if(nameCheck($second) === false){
            alert("Please enter a valid last name!");
            return;
        }
        if(isEmail($email) === false){
            alert("Please enter a valid email address!");
            return;
        }
        if($passFirst !== $passSecond){
            alert("Please ensure both passwords are matching!");
            return;
        }
        if(checkDate($DOB) ===false){
            alert("Please enter a valid Date of Birth!");
            return;
        }
        if($gender === 4){
            alert("Please select your gender");
            return;
        }
        alert("HERE");
        addUser($first, $second, $email, $passFirst, $level, $DOB, $gender);
        alert("DONE");
    });
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

function checkDate(date){
    if(date !== "" && date !== null && date !== " "){
        var regEx = /^\d{4}-\d{2}-\d{2}$/;
        return date.match(regEx);
    }else{
        return false;
    }
}
function getGender(){
    var $male = $('input[name=optradio1]:checked').val();
    var $female = $('input[name=optradio2]:checked').val();
    var $other = $('input[name=optradio3]:checked').val();
    if($male == "on"){
        return 1;
    }

    if($female == "on"){
        return 2;
    }

    if($other == "on"){
        return 3;
    }
    if($male !== "on" && $female !== "on" && $other !== "on"){
        return 4;
    }
}

function nameCheck(fname){
    if(fname !== null && fname !== " " && fname !== ""){//ensures not null
        var tester = /^[A-Za-z ]+$/.test(fname);
        return tester;
    }else{
        return false;
    }
}