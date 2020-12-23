'use strict';

const path = require('path');
const liveReloadSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

const mountDirectory = function(connect, point) {
  return connect.static(path.resolve(point));
}

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8094,
          keepalive: true,
          debug: true,
          //livereload,
          open: true,
          useAvailablePort: true,
          onCreateServer: function(server, connect, options) {
            //You may integrate a socket.io secoket connection here
            /*
            const socket = require('socket.io').listen(server);
            socket.on('connection', function(socket) {
              //
            });
            */
          }
        }
      }
    }
  
  });

  ///grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  //grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
  grunt.registerTask('default', ['connect']);
};

/*
Add a regarde section in your Gruntfile.js to list the files to observe as well as the task to fire when one of these files change.
*/
