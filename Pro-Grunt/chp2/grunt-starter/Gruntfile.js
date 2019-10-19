var app_files = ['src/fileA.js', 'src/fileB.js'],
    output = 'dist/built.js',
    test_output = 'dist2/built.js';

// The wrapper function
module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      concat: {
          // Task level options. Override default options.
          options: {
              separator: ';',
          },
          /*
          dist: {
              src: ['src/fileA.js', 'src/fileB.js'],
              dest: 'dist/built.js'
          }
        */
        // A target
        dist: {
          src: app_files,
          dest: output
        },
        // Another configuration, aka target for the concat task
        dist2: {
            // Target level options  which override tasks level options
            options: {
              separator: ' ',
            },
            src: app_files,
            dest: test_output
        },
        // Yet another target using the "File Object Format"
        dist3: {
            files: {
                // dest: [src/file1, src/file2, ...]
                'dist3/app.js': ['src/fileA.js', 'src/fileB.js'],
                // You can add more mappings here...
            }
        },
        // And final target using "File Array Format"
        dist4: {
            options: { separator: '\n'},
            files: [
              {
                 src: ['src/fileA.js', 'src/fileB.js'],
                 dest: 'dist4/app.js',
              },
              {
                  src: ['src/stylesA.css', 'src/stylesB.css'],
                  dest: 'dist4/app.css',
              }
            ]
        }
      },

      // Configure a mochaTest task. The "Compact format" is used for file handling. Compact format is used when no destination is required. e.g a readonly operation
      mochaTest: {
          test: {
              options: {
                  reporter: 'spec'
              },
              src: ['test/**/*.js']
          }
      }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Add the grunt-mocha-test
  grunt.loadNpmTasks('grunt-mocha-test');

  // Default task(s)
  grunt.registerTask('default', ['concat']);
  
};
