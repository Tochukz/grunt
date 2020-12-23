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
      livereload: {
        options: {
          port: 9001,
          middleware: function(connect, options) {
            console.log('Connect Object: %j', connect());
            console.log(connect);
            return [liveReloadSnippet, mountDirectory(connect, '.')];
          }
        }
      }
    },
    //Observe files for changes and run tasks
    regarde: {
      js: {
        files: '**/.js',
        tasks: ['livereload'] //Tasks to run if a change occurs in a .js file
      },
      css: {
        files: '**/*.css',
        tasks: ['livereload'],
        events: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('default', ['livereload-start', 'connect', 'regarde']);
};

/*
Add a regarde section in your Gruntfile.js to list the files to observe as well as the task to fire when one of these files change.
*/
