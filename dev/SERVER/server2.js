'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });


server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
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
});