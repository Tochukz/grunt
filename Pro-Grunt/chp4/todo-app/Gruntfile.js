
// The wrapper function
/*global module: false*/
module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        // A Task configuration
        // grunt-contrib-sass plugin for compiling of SCSS to CSS
        sass: {
            // A target
            dist: { // Note that 'dist' is just a target name, you can call it whatever you like.
                options: {
                    style: 'expanded',
                },
                files: {
                    'app/css/main.css': 'build/styles/main.scss',
                }
            }

        },
        // grunt-bower-install plugin for JavaScript and CSS injection into HTML document.
        bowerInstall: {
          dist: {
              src: ['app/**/*html'],
              dependencies: true,
              devDependencies: true,
              exclude: []
          }
        },
        // grunt-recess plugin for CSS linting and LESS compiling
        recess: {
          dist: {
              options: {
                  complie: false, // RECESS is able to compile LESS and CSS.
                  noIDs: true,
              },
              files: {
                  //'src': 'css/main.css',
                  'src': 'app/css/**/*.css', // This will match all css files in the 'css' directory and subdirectory.
              }
          }
        },
        // grunt-autoprefixer plugin to prefix CSS property with browser specify prefixes
        autoprefixer: {
            dist: {
                options: {
                    diff: true, // Generates a patch file that contains the difference between the source CSS and the CSS produces by autoprefixer.
                },
                src: 'app/css/main.css',
            }
        },
        // grunt-contrib-cssmin plugin for minimization of CSS documents.
        cssmin: {
            dist: {
                optons: {
                    report: 'gzip'
                },
                files: {
                    //output-file-path: input-file-path
                    'dist/css/main.css': 'app/css/main.css'
                }
            }
        },
        // grunt-uncss plugin for removin used CSS from styles
        uncss: {
            dist: {
                files: {
                    'app/css/main.css': ['app/index.html'],
                }
            }
        },
        // For copying file and folder from a place to another in the project directory.
        copy: {
            dist: {
                expand: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'dist/'
            }
        },
        // prepare file to be used by usemin
        useminPrepare: {
            dist: {
                src: 'app/index.html',
                dest: 'dist'
            }
        },
        // usemin plugin includes two tasks -  useminPrepare and usemin
        usemin: {
            html: 'dist/index.html'
        },
        // grunt-rev for versioning of assets
        rev: {
            dist: {
                src: ['dist/css/main.css', 'dist/js/main.js']
            }
        },
        // grunt-bower-requirejs plugin updates the requirejs config file using bower components defined in the bower.json file.
        bower: {
            target: { //Just names target, could be any name like dist.
                rjsConfig: 'app/js/config.js', //require.js configuration file
                options: {
                    baseUrl: 'app/' // url that will be prepended to all paths
                }
            }
        },
        // grunt-contrib-requirejs plugin arses JavaScript file that use AMD modules and merge them into a single file
        requirejs: {
            dist: {
              options: {
                  baseUrl: 'app/',
                  name: '../.tmp/concat/js/main', //The main file or starting point of the application
                  out: 'dist/js/main.js', //output file path
                  optimize: 'uglify2', //optimization to be applied. TO disable optimization put optimize: none
                  paths: {
                      backbone: 'bower_components/backbone/backbone',
                      bootstrap: 'bower_compoents/bootstrap/dist/js/bootstrap',
                      jquery: 'bower_components/jquery/dist/jquery',
                      requirejs: 'bower_components/requirejs/require',
                      underscore: 'bower_compoents/underscore/underscore',
                      handlerbars: 'bower_components/handlerbars/handlerbars'
                  }
              }
            }
        },
        // grunt-contrib-clean plugin removes temporal files and cleanup directories.
        clean: {
            tmp: {
                src: ['.tmp', '.sass-cache', 'dist', 'app/js/template.js']
            }
        },
        // grunt-contrib-handlebars compiles handlebars templates and merge them into a singe AMD module
        handlebars: {
            dist: {
                options: {
                    namespace: 'JST',
                    amd: true
                },
                files: {
                    'app/js/template.js': ['build/templates/**/*.hbs']
                }
            }
        },
        // grunt-contrib-jshint for JavaScript linting
        // The 'bower' target is jshint config specific to handlebars bower packages. Same strategy can be applied to any group of files
        jshint: {
            options: {
              jshintrc: true, // Jshintrc config options will take priorty over grunt options
            },
            dist: {
                src: ['Gruntfile.js', 'app/js/**/.*.js']
            }, /*
            bower: {
                options: {
                    "eqnull": true,
                    "eqeqeq": true,
                    "laxbreak": true,
                },
                src: ['app/bower_components/handlebars/handlebars.js']
            }*/
        },
        //grunt-modernizr for feature support detection in web browers
        modernizr: {
            dist: {
                devFile: "remote",
                outputFile: "app'/js/modernizr.js",
                extra: {
                    shiv: true,
                    load: false,
                    cssclasses: true
                },
                uglify: true,
                parseFiles: true,
                files: {
                    src: ["buid/styles/**/*.scss", "app/js/**/*.js"]
                }
            }
        },
        // grunt-contrib-uglify for minification and obfuscation of JavaScript code. grunt-usemin does the same thing automatically.
        uglify: {
            options: {
                report: 'gzip'
            },
            dist: {
                files: {
                    'dist/js/main.js': ['app/js/main.js']
                }
            }
        },
        // grunt-contrib-contact for concatination of multiple javascript files. grunt-usemin does the smae thing automatically.
        concat: {
          dist: {
              files: {
                  'dist/js/main.js': ['app/js/**/*.js']
              }
          }
        },
        // grunt-jsdoc for generating documentation in an HTML format.
        jsdoc: {
            dist: {
                src: ['app/js/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    // These plugin provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-jsdoc');


    // Default task.
    grunt.registerTask('default', [
                                    //'clean',
                                    'useminPrepare',
                                    'sass',
                                    'bowerInstall',
                                    'autoprefixer',
                                    'jshint',
                                    'modernizr',
                                    'handlebars',
                                    'recess',
                                    //'uncss', // It is throwing errors saying: Could not load script with reference to JQuery bower component files.
                                    'copy',
                                    'cssmin',
                                    //'concat',
                                    //'bower',
                                    'requirejs',
                                    'rev',
                                    'usemin',
                                ]
                       );
};

/*
The grunt-contrib-sass task wraps the Sass command and exposes some of the flags that the Sass command accepts to alter the CSS output.
For example the options.style is a flag that can have four possible values - nested(default), expanded, compact or compressed.
Run sass --help to see other options available.

The grunt-bower-install plugin is used to automate te injection of frontend JavaScript and CSS files that have been installed by Bower into ypur HTML.
To achieve this, grunt-bower-install relies on wiredep, a Node module.

The grunt-recess plugin is used for linting CSS. It can also compile LESS.

The grunt-autoprefixer plugin adds vendor specific prexies to css properties where applicable.

The grunt-uncss plugin is used to remove unused CSS from your style sheet.

The grunt-usemin plugin has two tasks - useminPrepare and usemin.
userminPrepare task is used to ready your files for the usemin task to update your HTML file with the correct reference to the static asses, such as CSS.
grunt-usemin generates configuration for your tasks such as concatenation and minification.
Therefore, we can remove the cssmin configuration fron Gruntfile as usemin will auto-generate it for us.

The grunt-contrib-copy plugin is used to copy files and folder from one place to another within the project.

The grunt-rev plugin is used for assets versioning.

The grunt-bower-requirejs plugin updates the requirejs configuration file with paths to bower components.
It does this using the installed bower components found in the bower.json file

The grunt-contrib-handlebars plugin loads templates from a directory and compile them into a sinle AMD module.
The template can then be used within an AMD module as a dependency.

The grunt-contrib-jshint plugin is used to lint JavaScript - check for code quality, detect errors and potentiaol problems in JavaScript application.
JShint should come before handlebars task as the output from handlebars task willnot pass all the JShint rules.
JShint option/configuration can be defined in 3 ways - as options of task, using .jshintrc file or as jshintConfig property of package.json file.

The grunt-modernizr plugin is used for feature support detection in web browers ... learn more.

The grunt-contrib-uglify is used for the minification and obfuscation of JavaScript code.
It would be a good practice to run the Uglify task over the file output from the concat task.

The grunt-contrib-concat plugin is used to concatinate multiple javascript files.

The grunt-jsdoc plugin makes a jsdoc task available that generates documentaion in an aHTML format.
*/
